(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[961],{8820:function(e,t,n){"use strict";n.d(t,{ql3:function(){return r},rJP:function(){return a}});var o=n(9983);function a(e){return(0,o.w_)({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M885.6 230.2L779.1 123.8a80.83 80.83 0 0 0-57.3-23.8c-21.7 0-42.1 8.5-57.4 23.8L549.8 238.4a80.83 80.83 0 0 0-23.8 57.3c0 21.7 8.5 42.1 23.8 57.4l83.8 83.8A393.82 393.82 0 0 1 553.1 553 395.34 395.34 0 0 1 437 633.8L353.2 550a80.83 80.83 0 0 0-57.3-23.8c-21.7 0-42.1 8.5-57.4 23.8L123.8 664.5a80.89 80.89 0 0 0-23.8 57.4c0 21.7 8.5 42.1 23.8 57.4l106.3 106.3c24.4 24.5 58.1 38.4 92.7 38.4 7.3 0 14.3-.6 21.2-1.8 134.8-22.2 268.5-93.9 376.4-201.7C828.2 612.8 899.8 479.2 922.3 344c6.8-41.3-6.9-83.8-36.7-113.8z"}}]})(e)}function r(e){return(0,o.w_)({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M292.7 840h438.6l24.2-512h-487z"}},{tag:"path",attr:{d:"M864 256H736v-80c0-35.3-28.7-64-64-64H352c-35.3 0-64 28.7-64 64v80H160c-17.7 0-32 14.3-32 32v32c0 4.4 3.6 8 8 8h60.4l24.7 523c1.6 34.1 29.8 61 63.9 61h454c34.2 0 62.3-26.8 63.9-61l24.7-523H888c4.4 0 8-3.6 8-8v-32c0-17.7-14.3-32-32-32zm-504-72h304v72H360v-72zm371.3 656H292.7l-24.2-512h487l-24.2 512z"}}]})(e)}},9126:function(e,t,n){"use strict";n.d(t,{_Tb:function(){return a}});var o=n(9983);function a(e){return(0,o.w_)({tag:"svg",attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"}},{tag:"path",attr:{fillRule:"evenodd",d:"M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"}}]})(e)}},6856:function(e,t,n){"use strict";n.d(t,{zmo:function(){return a}});var o=n(9983);function a(e){return(0,o.w_)({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"}},{tag:"path",attr:{d:"M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04a.996.996 0 000-1.41l-2.34-2.34a.996.996 0 00-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"}}]})(e)}},9504:function(e,t,n){e.exports=n(269)},269:function(e,t,n){"use strict";var o,a=(o=n(2791))&&"object"==typeof o&&"default"in o?o.default:o,r=n(4164);function s(){return(s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e}).apply(this,arguments)}function i(e,t){e.prototype=Object.create(t.prototype),function(e,t){for(var n=Object.getOwnPropertyNames(t),o=0;o<n.length;o++){var a=n[o],r=Object.getOwnPropertyDescriptor(t,a);r&&r.configurable&&void 0===e[a]&&Object.defineProperty(e,a,r)}}(e.prototype.constructor=e,t)}function l(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var u=function(e,t,n,o,a,r,s,i){if(!e){var l;if(void 0===t)l=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var u=[n,o,a,r,s,i],c=0;(l=new Error(t.replace(/%s/g,(function(){return u[c++]})))).name="Invariant Violation"}throw l.framesToPop=1,l}};function c(e,t,n){if("selectionStart"in e&&"selectionEnd"in e)e.selectionStart=t,e.selectionEnd=n;else{var o=e.createTextRange();o.collapse(!0),o.moveStart("character",t),o.moveEnd("character",n-t),o.select()}}var f={9:"[0-9]",a:"[A-Za-z]","*":"[A-Za-z0-9]"};function p(e,t,n){var o="",a="",r=null,s=[];if(void 0===t&&(t="_"),null==n&&(n=f),!e||"string"!=typeof e)return{maskChar:t,formatChars:n,mask:null,prefix:null,lastEditablePosition:null,permanents:[]};var i=!1;return e.split("").forEach((function(e){i=!i&&"\\"===e||(i||!n[e]?(s.push(o.length),o.length===s.length-1&&(a+=e)):r=o.length+1,o+=e,!1)})),{maskChar:t,formatChars:n,prefix:a,mask:o,lastEditablePosition:r,permanents:s}}function h(e,t){return-1!==e.permanents.indexOf(t)}function v(e,t,n){var o=e.mask,a=e.formatChars;if(!n)return!1;if(h(e,t))return o[t]===n;var r=a[o[t]];return new RegExp(r).test(n)}function d(e,t){return t.split("").every((function(t,n){return h(e,n)||!v(e,n,t)}))}function m(e,t){var n=e.maskChar,o=e.prefix;if(!n){for(;t.length>o.length&&h(e,t.length-1);)t=t.slice(0,t.length-1);return t.length}for(var a=o.length,r=t.length;r>=o.length;r--){var s=t[r];if(!h(e,r)&&v(e,r,s)){a=r+1;break}}return a}function g(e,t){return m(e,t)===e.mask.length}function k(e,t){var n=e.maskChar,o=e.mask,a=e.prefix;if(!n){for((t=w(e,"",t,0)).length<a.length&&(t=a);t.length<o.length&&h(e,t.length);)t+=o[t.length];return t}if(t)return w(e,k(e,""),t,0);for(var r=0;r<o.length;r++)h(e,r)?t+=o[r]:t+=n;return t}function w(e,t,n,o){var a=e.mask,r=e.maskChar,s=e.prefix,i=n.split(""),l=g(e,t);return!r&&o>t.length&&(t+=a.slice(t.length,o)),i.every((function(n){for(;c=n,h(e,u=o)&&c!==a[u];){if(o>=t.length&&(t+=a[o]),i=n,r&&h(e,o)&&i===r)return!0;if(++o>=a.length)return!1}var i,u,c;return!v(e,o,n)&&n!==r||(o<t.length?t=r||l||o<s.length?t.slice(0,o)+n+t.slice(o+1):(t=t.slice(0,o)+n+t.slice(o),k(e,t)):r||(t+=n),++o<a.length)})),t}function C(e,t){for(var n=e.mask,o=t;o<n.length;++o)if(!h(e,o))return o;return null}function S(e){return e||0===e?e+"":""}function O(e,t,n,o,a){var r=e.mask,s=e.prefix,i=e.lastEditablePosition,l=t,u="",c=0,f=0,p=Math.min(a.start,n.start);return n.end>a.start?f=(c=function(e,t,n,o){var a=e.mask,r=e.maskChar,s=n.split(""),i=o;return s.every((function(t){for(;s=t,h(e,n=o)&&s!==a[n];)if(++o>=a.length)return!1;var n,s;return(v(e,o,t)||t===r)&&o++,o<a.length})),o-i}(e,0,u=l.slice(a.start,n.end),p))?a.length:0:l.length<o.length&&(f=o.length-l.length),l=o,f&&(1!==f||a.length||(p=a.start===n.start?C(e,n.start):function(e,t){for(var n=t;0<=n;--n)if(!h(e,n))return n;return null}(e,n.start)),l=function(e,t,n,o){var a=n+o,r=e.maskChar,s=e.mask,i=e.prefix,l=t.split("");if(r)return l.map((function(t,o){return o<n||a<=o?t:h(e,o)?s[o]:r})).join("");for(var u=a;u<l.length;u++)h(e,u)&&(l[u]="");return n=Math.max(i.length,n),l.splice(n,a-n),t=l.join(""),k(e,t)}(e,l,p,f)),l=w(e,l,u,p),(p+=c)>=r.length?p=r.length:p<s.length&&!c?p=s.length:p>=s.length&&p<i&&c&&(p=C(e,p)),u||(u=null),{value:l=k(e,l),enteredString:u,selection:{start:p,end:p}}}function M(e){return"function"==typeof e}function I(){return window.cancelAnimationFrame||window.webkitCancelRequestAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame}function D(e){return(I()?window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame:function(){return setTimeout(e,1e3/60)})(e)}function b(e){(I()||clearTimeout)(e)}var V=function(e){function t(t){var n=e.call(this,t)||this;n.focused=!1,n.mounted=!1,n.previousSelection=null,n.selectionDeferId=null,n.saveSelectionLoopDeferId=null,n.saveSelectionLoop=function(){n.previousSelection=n.getSelection(),n.saveSelectionLoopDeferId=D(n.saveSelectionLoop)},n.runSaveSelectionLoop=function(){null===n.saveSelectionLoopDeferId&&n.saveSelectionLoop()},n.stopSaveSelectionLoop=function(){null!==n.saveSelectionLoopDeferId&&(b(n.saveSelectionLoopDeferId),n.saveSelectionLoopDeferId=null,n.previousSelection=null)},n.getInputDOMNode=function(){if(!n.mounted)return null;var e=r.findDOMNode(l(l(n))),t="undefined"!=typeof window&&e instanceof window.Element;if(e&&!t)return null;if("INPUT"!==e.nodeName&&(e=e.querySelector("input")),!e)throw new Error("react-input-mask: inputComponent doesn't contain input node");return e},n.getInputValue=function(){var e=n.getInputDOMNode();return e?e.value:null},n.setInputValue=function(e){var t=n.getInputDOMNode();t&&(n.value=e,t.value=e)},n.setCursorToEnd=function(){var e=m(n.maskOptions,n.value),t=C(n.maskOptions,e);null!==t&&n.setCursorPosition(t)},n.setSelection=function(e,t,o){void 0===o&&(o={});var a=n.getInputDOMNode(),r=n.isFocused();a&&r&&(o.deferred||c(a,e,t),null!==n.selectionDeferId&&b(n.selectionDeferId),n.selectionDeferId=D((function(){n.selectionDeferId=null,c(a,e,t)})),n.previousSelection={start:e,end:t,length:Math.abs(t-e)})},n.getSelection=function(){return function(e){var t=0,n=0;if("selectionStart"in e&&"selectionEnd"in e)t=e.selectionStart,n=e.selectionEnd;else{var o=document.selection.createRange();o.parentElement()===e&&(t=-o.moveStart("character",-e.value.length),n=-o.moveEnd("character",-e.value.length))}return{start:t,end:n,length:n-t}}(n.getInputDOMNode())},n.getCursorPosition=function(){return n.getSelection().start},n.setCursorPosition=function(e){n.setSelection(e,e)},n.isFocused=function(){return n.focused},n.getBeforeMaskedValueChangeConfig=function(){var e=n.maskOptions,t=e.mask,o=e.maskChar,a=e.permanents,r=e.formatChars;return{mask:t,maskChar:o,permanents:a,alwaysShowMask:!!n.props.alwaysShowMask,formatChars:r}},n.isInputAutofilled=function(e,t,o,a){var r=n.getInputDOMNode();try{if(r.matches(":-webkit-autofill"))return!0}catch(u){}return!n.focused||a.end<o.length&&t.end===e.length},n.onChange=function(e){var t=l(l(n)).beforePasteState,o=l(l(n)).previousSelection,a=n.props.beforeMaskedValueChange,r=n.getInputValue(),s=n.value,i=n.getSelection();n.isInputAutofilled(r,i,s,o)&&(s=k(n.maskOptions,""),o={start:0,end:0,length:0}),t&&(o=t.selection,s=t.value,i={start:o.start+r.length,end:o.start+r.length,length:0},r=s.slice(0,o.start)+r+s.slice(o.end),n.beforePasteState=null);var u=O(n.maskOptions,r,i,s,o),c=u.enteredString,f=u.selection,p=u.value;if(M(a)){var h=a({value:p,selection:f},{value:s,selection:o},c,n.getBeforeMaskedValueChangeConfig());p=h.value,f=h.selection}n.setInputValue(p),M(n.props.onChange)&&n.props.onChange(e),n.isWindowsPhoneBrowser?n.setSelection(f.start,f.end,{deferred:!0}):n.setSelection(f.start,f.end)},n.onFocus=function(e){var t=n.props.beforeMaskedValueChange,o=n.maskOptions,a=o.mask,r=o.prefix;if(n.focused=!0,n.mounted=!0,a){if(n.value)m(n.maskOptions,n.value)<n.maskOptions.mask.length&&n.setCursorToEnd();else{var s=k(n.maskOptions,r),i=k(n.maskOptions,s),l=m(n.maskOptions,i),u=C(n.maskOptions,l),c={start:u,end:u};if(M(t)){var f=t({value:i,selection:c},{value:n.value,selection:null},null,n.getBeforeMaskedValueChangeConfig());i=f.value,c=f.selection}var p=i!==n.getInputValue();p&&n.setInputValue(i),p&&M(n.props.onChange)&&n.props.onChange(e),n.setSelection(c.start,c.end)}n.runSaveSelectionLoop()}M(n.props.onFocus)&&n.props.onFocus(e)},n.onBlur=function(e){var t=n.props.beforeMaskedValueChange,o=n.maskOptions.mask;if(n.stopSaveSelectionLoop(),n.focused=!1,o&&!n.props.alwaysShowMask&&d(n.maskOptions,n.value)){var a="";M(t)&&(a=t({value:a,selection:null},{value:n.value,selection:n.previousSelection},null,n.getBeforeMaskedValueChangeConfig()).value);var r=a!==n.getInputValue();r&&n.setInputValue(a),r&&M(n.props.onChange)&&n.props.onChange(e)}M(n.props.onBlur)&&n.props.onBlur(e)},n.onMouseDown=function(e){if(!n.focused&&document.addEventListener){n.mouseDownX=e.clientX,n.mouseDownY=e.clientY,n.mouseDownTime=(new Date).getTime();document.addEventListener("mouseup",(function e(t){if(document.removeEventListener("mouseup",e),n.focused){var o=Math.abs(t.clientX-n.mouseDownX),a=Math.abs(t.clientY-n.mouseDownY),r=Math.max(o,a),s=(new Date).getTime()-n.mouseDownTime;(r<=10&&s<=200||r<=5&&s<=300)&&n.setCursorToEnd()}}))}M(n.props.onMouseDown)&&n.props.onMouseDown(e)},n.onPaste=function(e){M(n.props.onPaste)&&n.props.onPaste(e),e.defaultPrevented||(n.beforePasteState={value:n.getInputValue(),selection:n.getSelection()},n.setInputValue(""))},n.handleRef=function(e){null==n.props.children&&M(n.props.inputRef)&&n.props.inputRef(e)};var o=t.mask,a=t.maskChar,s=t.formatChars,i=t.alwaysShowMask,u=t.beforeMaskedValueChange,f=t.defaultValue,h=t.value;n.maskOptions=p(o,a,s),null==f&&(f=""),null==h&&(h=f);var v=S(h);if(n.maskOptions.mask&&(i||v)&&(v=k(n.maskOptions,v),M(u))){var g=t.value;null==t.value&&(g=f),v=u({value:v,selection:null},{value:g=S(g),selection:null},null,n.getBeforeMaskedValueChangeConfig()).value}return n.value=v,n}i(t,e);var n=t.prototype;return n.componentDidMount=function(){this.mounted=!0,this.getInputDOMNode()&&(this.isWindowsPhoneBrowser=function(){var e=new RegExp("windows","i"),t=new RegExp("phone","i"),n=navigator.userAgent;return e.test(n)&&t.test(n)}(),this.maskOptions.mask&&this.getInputValue()!==this.value&&this.setInputValue(this.value))},n.componentDidUpdate=function(){var e=this.previousSelection,t=this.props,n=t.beforeMaskedValueChange,o=t.alwaysShowMask,a=t.mask,r=t.maskChar,s=t.formatChars,i=this.maskOptions,l=o||this.isFocused(),u=null!=this.props.value,c=u?S(this.props.value):this.value,f=e?e.start:null;if(this.maskOptions=p(a,r,s),this.maskOptions.mask){!i.mask&&this.isFocused()&&this.runSaveSelectionLoop();var h=this.maskOptions.mask&&this.maskOptions.mask!==i.mask;if(i.mask||u||(c=this.getInputValue()),(h||this.maskOptions.mask&&(c||l))&&(c=k(this.maskOptions,c)),h){var v=m(this.maskOptions,c);(null===f||v<f)&&(f=g(this.maskOptions,c)?v:C(this.maskOptions,v))}!this.maskOptions.mask||!d(this.maskOptions,c)||l||u&&this.props.value||(c="");var w={start:f,end:f};if(M(n)){var O=n({value:c,selection:w},{value:this.value,selection:this.previousSelection},null,this.getBeforeMaskedValueChangeConfig());c=O.value,w=O.selection}this.value=c;var I=this.getInputValue()!==this.value;I?(this.setInputValue(this.value),this.forceUpdate()):h&&this.forceUpdate();var D=!1;null!=w.start&&null!=w.end&&(D=!e||e.start!==w.start||e.end!==w.end),(D||I)&&this.setSelection(w.start,w.end)}else i.mask&&(this.stopSaveSelectionLoop(),this.forceUpdate())},n.componentWillUnmount=function(){this.mounted=!1,null!==this.selectionDeferId&&b(this.selectionDeferId),this.stopSaveSelectionLoop()},n.render=function(){var e,t=this.props,n=(t.mask,t.alwaysShowMask,t.maskChar,t.formatChars,t.inputRef,t.beforeMaskedValueChange,t.children),o=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],0<=t.indexOf(n)||(a[n]=e[n]);return a}(t,["mask","alwaysShowMask","maskChar","formatChars","inputRef","beforeMaskedValueChange","children"]);if(n){M(n)||u(!1);var r=["onChange","onPaste","onMouseDown","onFocus","onBlur","value","disabled","readOnly"],i=s({},o);r.forEach((function(e){return delete i[e]})),e=n(i),r.filter((function(t){return null!=e.props[t]&&e.props[t]!==o[t]})).length&&u(!1)}else e=a.createElement("input",s({ref:this.handleRef},o));var l={onFocus:this.onFocus,onBlur:this.onBlur};return this.maskOptions.mask&&(o.disabled||o.readOnly||(l.onChange=this.onChange,l.onPaste=this.onPaste,l.onMouseDown=this.onMouseDown),null!=o.value&&(l.value=this.value)),e=a.cloneElement(e,l)},t}(a.Component);e.exports=V}}]);
//# sourceMappingURL=961.edb5835f.chunk.js.map