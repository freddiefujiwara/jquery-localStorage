/**
 * jQuery Local Storage plugin
 *
 * Copyright (c) 2011 Freddie Fujiwara (http://www.facebook.com/freddiefujiwara)
 * Dual licensed under the MIT and GPL licenses:
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.gnu.org/licenses/gpl.html
 *
 */
jQuery.localStorage = {
  set : function(key,data,expire) {
      if(!window || !window.localStorage)
        return;
        
      var storeData = new Object();
      storeData.expire = (new Date()).getTime() + expire;
      storeData.data   = data;
      window.localStorage.setItem(key,(storeData.toSource) ? storeData.toSource() : storeData.toString());
  },
  get : function(key){
      var cache = null;
      if(window.localStorage && window.localStorage.getItem(key)){
          console.debug(key);
          cache = eval(window.localStorage.getItem(key));
      }
      
      if(null == cache || null != cache && ((new Date()).getTime() > cache.expire)){
          return 	null;
      }
      return cache.data;
  }
};
