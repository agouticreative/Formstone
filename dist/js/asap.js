/*! formstone v0.8.8 [asap.js] 2015-09-15 | MIT License | formstone.it */

!function(a,b){"use strict";function c(c){q||b.support.history&&(o=b.$body,q=a.extend(s,c),q.$container=a(q.container),q.render===a.noop&&(q.render=k),q.transitionOut===a.noop&&(q.transitionOut=function(){return a.Deferred().resolve()}),y=window.location.href,t.on(w.popState,g),d())}function d(){o&&!o.hasClass(x.base)&&o.on(w.click,s.selector,f).addClass(x.base)}function e(a){q&&b.support.history?a&&h(a):window.location.href=a}function f(a){var b=a.currentTarget;a.which>1||a.metaKey||a.ctrlKey||a.shiftKey||a.altKey||window.location.protocol!==b.protocol||window.location.host!==b.host||"_blank"===b.target||(!b.hash||b.href.replace(b.hash,"")!==window.location.href.replace(location.hash,"")&&b.href!==window.location.href+"#")&&(v.killEvent(a),a.stopImmediatePropagation(),b.href!==y&&h(b.href))}function g(a){var b=a.originalEvent.state;b&&(q.modal&&0===z&&b.url&&!b.initial?window.location.href=b.url:b.url!==y&&(q.force?h(b.url):(t.trigger(w.requested,[!0]),j(b.url,b.hash,b.data,b.scroll,!1))))}function h(b){p&&p.abort(),t.trigger(w.requested,[!1]),q.transitionOutDeferred=q.transitionOut.apply(u,[!1]);var c=i(b),d=c.data,e=c.hash,f=c.url,g="User error",h=null,k=a.Deferred();d[q.requestKey]=!0,p=a.ajax({url:f,data:d,dataType:"json",cache:q.cache,xhr:function(){var a=new u.XMLHttpRequest;return a.addEventListener("progress",function(a){if(a.lengthComputable){var b=a.loaded/a.total;t.trigger(w.progress,[b])}},!1),a},success:function(d){h="string"===a.type(d)?a.parseJSON(d):d,d.location&&(b=d.location,c=i(b),e=c.hash),k.resolve()},error:function(a,b,c){g=c,k.reject()}}),a.when(k,q.transitionOutDeferred).done(function(){j(b,e,h,q.jump?0:!1,!0)}).fail(function(){t.trigger(w.failed,[g])})}function i(a){var b=a.indexOf("?"),c=a.indexOf("#"),d={},e="",f=a;return c>-1&&(e=a.slice(c),f=a.slice(0,c)),b>-1&&(d=n(a.slice(b+1,c>-1?c:a.length)),f=a.slice(0,b)),{hash:e,data:d,url:a}}function j(b,c,d,e,f){if(t.trigger(w.loaded,[d]),a.analytics("pageview"),l(d),q.render.call(this,d,c),y=b,f?(history.pushState({url:y,data:d,scroll:e,hash:c},"state-"+y,y),z++):l(d),t.trigger(w.rendered,[d]),""!==c){var g=a(c);g.length&&(e=g.offset().top)}e!==!1&&t.scrollTop(e)}function k(b){if("undefined"!==a.type(b)){var c;for(var d in b)b.hasOwnProperty(d)&&(c=a(d),c.length&&c.html(b[d]))}}function l(b){var c=[];if("undefined"!==a.type(b)){var d;for(var e in b)b.hasOwnProperty(e)&&(d=a(e),d.length&&(c[e]=d.html()))}history.replaceState({url:y,data:c,scroll:t.scrollTop()},"state-"+y,y)}function m(b){var c=history.state,d=[];if(c&&c.data){d=c.data;var e;for(var f in d)d.hasOwnProperty(f)&&(e=a(f),e.length&&(d[f]=e.html()))}y=b,l(d)}function n(a){for(var b={},c=a.slice(a.indexOf("?")+1).split("&"),d=0;d<c.length;d++){var e=c[d].split("=");b[e[0]]=e[1]}return b}var o,p,q,r=b.Plugin("asap",{utilities:{_initialize:c,load:e,replace:m},events:{failed:"failed",loaded:"loaded",popState:"popstate",progress:"progress",requested:"requested",rendered:"rendered"}}),s={cache:!0,force:!1,jump:!0,modal:!1,selector:"a",render:a.noop,requestKey:"fs-asap",transitionOut:a.noop},t=b.$window,u=t[0],v=r.functions,w=r.events,x=r.classes.raw,y="",z=0}(jQuery,Formstone);