!function(){function n(n,t){return function(n){if(Array.isArray(n))return n}(n)||function(n,e){var t=null==n?null:"undefined"!=typeof Symbol&&n[Symbol.iterator]||n["@@iterator"];if(null==t)return;var r,i,a=[],o=!0,c=!1;try{for(t=t.call(n);!(o=(r=t.next()).done)&&(a.push(r.value),!e||a.length!==e);o=!0);}catch(u){c=!0,i=u}finally{try{o||null==t.return||t.return()}finally{if(c)throw i}}return a}(n,t)||function(n,t){if(!n)return;if("string"==typeof n)return e(n,t);var r=Object.prototype.toString.call(n).slice(8,-1);"Object"===r&&n.constructor&&(r=n.constructor.name);if("Map"===r||"Set"===r)return Array.from(n);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return e(n,t)}(n,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function e(n,e){(null==e||e>n.length)&&(e=n.length);for(var t=0,r=new Array(e);t<e;t++)r[t]=n[t];return r}System.register(["./index-legacy.c7b766e5.js","./File-legacy.e87550af.js","./icon-legacy.a2c80912.js","./index-legacy.e014511a.js","./index-legacy.e1fd66e4.js","./Layout-legacy.ef1a4414.js","./index-legacy.b1747c6c.js","./FolderTree-legacy.2b813b41.js","./index-legacy.911fa34f.js"],(function(e){"use strict";var t,r,i,a,o,c;return{setters:[function(n){t=n.a,r=n.d,i=n.h,a=n.B,o=n.Q},function(n){c=n.F},function(){},function(){},function(){},function(){},function(){},function(){},function(){}],execute:function(){e("default",(function(){var e=t(),u=n(r(!1),2),l=u[0],f=u[1];return i(c,{get children(){return i(a,{as:"a",get href(){return"itms-services://?action=download-manifest&url="+o.raw_url},onClick:function(){f(!0)},get children(){return e("home.preview.".concat(l()?"installing":"install"))}})}})}))}}}))}();
