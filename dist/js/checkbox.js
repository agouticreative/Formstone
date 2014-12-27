/*! Formstone v0.0.1 [checkbox.js] 2014-12-27 | MIT License | formstone.it */

!function(a,b){"use strict";function c(b){var c=this.closest("label"),d=c.length?c.eq(0):a("label[for="+this.attr("id")+"]"),e=[o.base,b.customClass].join(" "),f="";b.radio="radio"===this.attr("type"),b.group=this.attr("name"),f+='<div class="'+o.marker+'">',f+='<div class="'+o.flag+'"></div>',b.toggle&&(e+=" "+o.toggle,f+='<span class="'+[o.state,o.state_on].join(" ")+'">'+b.labels.on+"</span>",f+='<span class="'+[o.state,o.state_off].join(" ")+'">'+b.labels.off+"</span>"),b.radio&&(e+=" "+o.radio),f+="</div>",d.length?d.addClass(o.label).wrap('<div class="'+e+'"></div>').before(f):this.before('<div class=" '+e+'">'+f+"</div>"),b.$checkbox=d.length?d.parents(n.base):this.prev(n.base),b.$marker=b.$checkbox.find(n.marker),b.$states=b.$checkbox.find(n.state),b.$label=d,this.is(":checked")&&b.$checkbox.addClass(o.checked),this.is(":disabled")&&b.$checkbox.addClass(o.disabled),this.on(p.focus,b,k).on(p.blur,b,l).on(p.change,b,h).on(p.click,b,g).on(p.deselect,b,j),b.$checkbox.touch({tap:!0}).on(p.tap,b,g)}function d(a){a.$checkbox.off(p.namespace).touch("destroy"),a.$marker.remove(),a.$states.remove(),a.$label.unwrap().removeClass(o.label),this.off(p.namespace)}function e(a){this.prop("disabled",!1),a.$checkbox.removeClass(o.disabled)}function f(a){this.prop("disabled",!0),a.$checkbox.addClass(o.disabled)}function g(b){b.stopPropagation();var c=b.data;a(b.target).is(c.$el)||(b.preventDefault(),c.$el.trigger("click"))}function h(a){var b=a.data,c=b.$el.is(":disabled"),d=b.$el.is(":checked");c||(b.radio?i(a):d?i(a):j(a))}function i(b){b.data.radio&&a('input[name="'+b.data.group+'"]').not(b.data.$el).trigger("deselect"),b.data.$checkbox.addClass(o.checked)}function j(a){a.data.$checkbox.removeClass(o.checked)}function k(a){a.data.$checkbox.addClass(o.focus)}function l(a){a.data.$checkbox.removeClass(o.focus)}{var m=b.Plugin("checkbox",{widget:!0,defaults:{customClass:"",toggle:!1,labels:{on:"ON",off:"OFF"}},classes:["label","marker","flag","radio","focus","checked","disabled","toggle","state","state_on","state_off"],methods:{_construct:c,_destruct:d,enable:e,disable:f},events:{deselect:"deselect",tap:"tap"}}),n=m.classes,o=n.raw,p=m.events;m.functions}}(jQuery,Formstone);