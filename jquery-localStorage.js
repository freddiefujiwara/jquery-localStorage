// jQuery Plugin localStorage
// version 0.1 Jul 3th 2011
// by Freddie Fujiwara

(function($) {

    $.localStorage = function(element, options) {

        var defaults = {};

        var plugin = this;

        plugin.settings = {};

        var $element = $(element),
             element = element;

        plugin.init = function() {
            plugin.settings = $.extend({}, defaults, options);
            // code goes here
        };

        plugin.set = function(key,data,expire) {
            if(!window || !window.localStorage)
              return;
            window.localStorage.setItem(key,{
	      'expire':((new Date()).getTime() + expire)
	      'data':obj
            }.toSource());
        };
        plugin.get = function(key,next){
            var cache = null;
            if(window.localStorage && window.localStorage.getItem(key)){
                cache = eval(window.localStorage.getItem(key));
            }
            
            if(null == cache || null != cache && ((new Date()).getTime() > cache.expire)){
                return next();
            }
            return cache.data;
        };

        plugin.init();

    }

    $.fn.localStorage = function(options) {

        return this.each(function() {
            if (undefined == $(this).data('localStorage')) {
                var plugin = new $.localStorage(this, options);
                $(this).data('localStorage', plugin);
            }
        });

    }

})(jQuery);
