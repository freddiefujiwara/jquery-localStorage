/*jslint browser: true */ /*global jQuery: true */

/**
 * jQuery Local Storage plugin
 *
 * Copyright (c) 2011 Freddie Fujiwara (stilbuero.de)
 * Dual licensed under the MIT and GPL licenses:
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.gnu.org/licenses/gpl.html
 *
 */
jQuery.localStorage = {
  set : function(key,data,expire) {
      if(!window || !window.localStorage)
        return;
      window.localStorage.setItem(key,{
        'expire':((new Date()).getTime() + expire)
        'data':obj
      }.toSource());
  },
  get : function(key,next){
      var cache = null;
      if(window.localStorage && window.localStorage.getItem(key)){
          cache = eval(window.localStorage.getItem(key));
      }
      
      if(null == cache || null != cache && ((new Date()).getTime() > cache.expire)){
          return next();
      }
      return cache.data;
  }
};
