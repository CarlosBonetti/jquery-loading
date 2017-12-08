/*
 *  jquery-easy-loading - v1.3.0
 *  Easily add and manipulate loading states of any element on the page
 *  http://github.com/CarlosBonetti/jquery-loading
 *
 *  Made by Carlos Bonetti <carlosb_bc@hotmail.com>
 *  Under MIT License
 */
(function(factory) {
  'use strict';
  
  if (typeof window !== 'undefined') {
    if (typeof define === 'function' && define.amd) {
      // AMD
      define(['jquery', window], factory);
    } else if (typeof exports === 'object') {
      // CommonJS
      factory(require('jquery'), window);
    } else {
      // Browser globals
      factory(jQuery, window);
    }
  } else {
    throw new Error('Could not find DOM window object.');
  }
})(function($, window, undefined) {

  var Loading = function(element, options) {
    this.element = element;
    this.settings = $.extend({}, Loading.defaults, options);
    this.settings.fullPage = this.element.is('body');

    this.init();

    if (this.settings.start) {
      this.start();
    }
  };

  Loading.defaults = {

    /**
     * jQuery element to be used as overlay
     * If not defined, a default overlay will be created
     */
    overlay: undefined,

    /**
     * z-index to be used by the default overlay
     * If not defined, a z-index will be calculated based on the
     * target's z-index
     * Has no effect if a custom overlay is defined
     */
    zIndex: undefined,

    /**
     * Message to be rendered on the overlay content
     * Has no effect if a custom overlay is defined
     */
    message: 'Loading...',

    /**
     * Theme to be applied on the loading element
     *
     * Some default themes are implemented on `jquery.loading.css`, but you can
     *  define your own. Just add a `.loading-theme-my_awesome_theme` selector
     *  somewhere with your custom styles and change this option
     *  to 'my_awesome_theme'. The class is applied to the parent overlay div
     *
     * Has no effect if a custom overlay is defined
     */
    theme: 'light',

    /**
     * Class(es) to be applied to the overlay element when the loading state is started
     */
    shownClass: 'loading-shown',

    /**
     * Class(es) to be applied to the overlay element when the loading state is stopped
     */
    hiddenClass: 'loading-hidden',

    /**
     * Set to true to stop the loading state if the overlay is clicked
     * This options does NOT override the onClick event
     */
    stoppable: false,

    /**
     * Set to false to not start the loading state when initialized
     */
    start: true,

    /**
     * Function to be executed when the loading state is started
     * Receives the loading object as parameter
     *
     * The function is attached to the `loading.start` event
     */
    onStart: function(loading) {
      loading.overlay.fadeIn(150);
    },

    /**
     * Function to be executed when the loading state is stopped
     * Receives the loading object as parameter
     *
     * The function is attached to the `loading.stop` event
     */
    onStop: function(loading) {
      loading.overlay.fadeOut(150);
    },

    /**
     * Function to be executed when the overlay is clicked
     * Receives the loading object as parameter
     *
     * The function is attached to the `loading.click` event
     */
    onClick: function() {}
  };

  /**
   * Extend the Loading plugin default settings with the user options
   * Use it as `$.Loading.setDefaults({ ... })`
   *
   * @param {Object} options Custom options to override the plugin defaults
   */
  Loading.setDefaults = function(options) {
    Loading.defaults = $.extend({}, Loading.defaults, options);
  };

  $.extend(Loading.prototype, {

    /**
     * Initializes the overlay and attach handlers to the appropriate events
     */
    init: function() {
      this.isActive = false;
      this.overlay = this.settings.overlay || this.createOverlay();
      this.resize();
      this.attachMethodsToExternalEvents();
      this.attachOptionsHandlers();
    },

    /**
     * Return a new default overlay
     *
     * @return {jQuery} A new overlay already appended to the page's body
     */
    createOverlay: function() {
      var overlay = $('<div class="loading-overlay loading-theme-' + this.settings.theme + '"><div class="loading-overlay-content">' + this.settings.message + '</div></div>')
        .addClass(this.settings.hiddenClass)
        .hide()
        .appendTo('body');

      var elementID = this.element.attr('id');
      if (elementID) {
        overlay.attr('id', elementID + '_loading-overlay');
      }

      return overlay;
    },

    /**
     * Attach some internal methods to external events
     * e.g. overlay click, window resize etc
     */
    attachMethodsToExternalEvents: function() {
      var self = this;

      // Add `shownClass` and remove `hiddenClass` from overlay when loading state
      // is activated
      self.element.on('loading.start', function() {
        self.overlay
          .removeClass(self.settings.hiddenClass)
          .addClass(self.settings.shownClass);
      });

      // Add `hiddenClass` and remove `shownClass` from overlay when loading state
      // is stopped
      self.element.on('loading.stop', function() {
        self.overlay
          .removeClass(self.settings.shownClass)
          .addClass(self.settings.hiddenClass);
      });

      // Attach the 'stop loading on click' behaviour if the `stoppable` option is set
      if (self.settings.stoppable) {
        self.overlay.on('click', function() {
          self.stop();
        });
      }

      // Trigger the `loading.click` event if the overlay is clicked
      self.overlay.on('click', function() {
        self.element.trigger('loading.click', self);
      });

      // Bind the `resize` method to `window.resize`
      $(window).on('resize', function() {
        self.resize();
      });

      // Bind the `resize` method to `document.ready` to guarantee right
      // positioning and dimensions after the page is loaded
      $(function() {
        self.resize();
      });
    },

    /**
     * Attach the handlers defined on `options` for the respective events
     */
    attachOptionsHandlers: function() {
      var self = this;

      self.element.on('loading.start', function(event, loading) {
        self.settings.onStart(loading);
      });

      self.element.on('loading.stop', function(event, loading) {
        self.settings.onStop(loading);
      });

      self.element.on('loading.click', function(event, loading) {
        self.settings.onClick(loading);
      });
    },

    /**
     * Calculate the z-index for the default overlay element
     * Return the z-index passed as setting to the plugin or calculate it
     * based on the target's z-index
     */
    calcZIndex: function() {
      if (this.settings.zIndex !== undefined) {
        return this.settings.zIndex;
      } else {
        return (parseInt(this.element.css('z-index')) || 0) + 1 + this.settings.fullPage;
      }
    },

    /**
     * Reposition the overlay on the top of the target element
     * This method needs to be called if the target element changes position
     *  or dimension
     */
    resize: function() {
      var self = this;

      var element = self.element,
          totalWidth = element.outerWidth(),
          totalHeight = element.outerHeight();

      if (this.settings.fullPage) {
        totalHeight = '100%';
        totalWidth = '100%';
      }

      this.overlay.css({
        position: self.settings.fullPage ? 'fixed' : 'absolute',
        zIndex: self.calcZIndex(),
        top: element.offset().top,
        left: element.offset().left,
        width: totalWidth,
        height: totalHeight
      });
    },

    /**
     * Trigger the `loading.start` event and turn on the loading state
     */
    start: function() {
      this.isActive = true;
      this.resize();
      this.element.trigger('loading.start', this);
    },

    /**
     * Trigger the `loading.stop` event and turn off the loading state
     */
    stop: function() {
      this.isActive = false;
      this.element.trigger('loading.stop', this);
    },

    /**
     * Check whether the loading state is active or not
     *
     * @return {Boolean}
     */
    active: function() {
      return this.isActive;
    },

    /**
     * Toggle the state of the loading overlay
     */
    toggle: function() {
      if (this.active()) {
        this.stop();
      } else {
        this.start();
      }
    },

    /**
     * Destroy plugin instance.
     */
    destroy: function() {
    	this.overlay.remove();
    }

  });

  /**
   * Name of the data attribute where the plugin object will be stored
   */
  var dataAttr = 'jquery-loading';

  /**
   * Initializes the plugin and return a chainable jQuery object
   *
   * @param {Object} [options] Initialization options. Extends `Loading.defaults`
   * @return {jQuery}
   */
  $.fn.loading = function (options) {
    return this.each(function() {
      // (Try to) retrieve an existing plugin object associated with element
      var loading = $.data(this, dataAttr);

      if (!loading) {
        // First call. Initialize and save plugin object
        if (options === undefined || typeof options === 'object' ||
            options === 'start' || options === 'toggle') {
          // Initialize it just if argument is undefined, a config object
          // or a direct call to 'start' or 'toggle' methods
          $.data(this, dataAttr, new Loading($(this), options));
        }
      } else {
        // Already initialized
        if (options === undefined) {
          // $(...).loading() call. Call the 'start' by default
          loading.start();
        } else if (typeof options === 'string') {
          // $(...).loading('method') call. Execute 'method'
          loading[options].apply(loading);
        } else {
          // $(...).loading({...}) call. New configurations. Reinitialize
          // plugin object with new config options and start the plugin
          // Also, destroy the old overlay instance
          loading.destroy();
          $.data(this, dataAttr, new Loading($(this), options));
        }
      }
    });
  };

  /**
   * Return the loading object associated to the element or initialize it
   * This method is interesting if you need the plugin object to access the
   * internal API
   * Example: `$('#some-element').Loading().toggle()`
   *
   * @param {Object} [options] Initialization options. If new options are given
   * to a previously initialized object, the old ones are overriden and the
   * plugin restarted
   * @return {Loading}
   */
  $.fn.Loading = function(options) {
    var loading = $(this).data(dataAttr);

    if (!loading || options !== undefined) {
      $(this).data(dataAttr, (loading = new Loading($(this), options)));
    }

    return loading;
  };

  /**
   * Create the `:loading` jQuery selector
   * Return all the jQuery elements with the loading state active
   *
   * Using the `:not(:loading)` will return all jQuery elements that are not
   *  loading, even the ones with the plugin not attached.
   *
   * Examples of usage:
   *  `$(':loading')` to get all the elements with the loading state active
   *  `$('#my-element').is(':loading')` to check if the element is loading
   */
  $.expr[':'].loading = function(element) {
    var loadingObj = $.data(element, dataAttr);

    if (!loadingObj) {
      return false;
    }

    return loadingObj.active();
  };

  $.Loading = Loading;

});
