(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[616],{94184:function(e,t){var n;!function(){"use strict";var r={}.hasOwnProperty;function o(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var s=typeof n;if("string"===s||"number"===s)e.push(n);else if(Array.isArray(n)){if(n.length){var i=o.apply(null,n);i&&e.push(i)}}else if("object"===s){if(n.toString!==Object.prototype.toString&&!n.toString.toString().includes("[native code]")){e.push(n.toString());continue}for(var a in n)r.call(n,a)&&n[a]&&e.push(a)}}}return e.join(" ")}e.exports?(o.default=o,e.exports=o):void 0===(n=function(){return o}.apply(t,[]))||(e.exports=n)}()},92703:function(e,t,n){"use strict";var r=n(50414);function o(){}function s(){}s.resetWarningCache=o,e.exports=function(){function e(e,t,n,o,s,i){if(i!==r){var a=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw a.name="Invariant Violation",a}}function t(){return e}e.isRequired=e;var n={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:s,resetWarningCache:o};return n.PropTypes=n,n}},45697:function(e,t,n){e.exports=n(92703)()},50414:function(e){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},54616:function(e,t,n){"use strict";n.d(t,{Z:function(){return Ve}});var r=n(94184),o=n.n(r),s=!("undefined"===typeof window||!window.document||!window.document.createElement),i=!1,a=!1;try{var c={get passive(){return i=!0},get once(){return a=i=!0}};s&&(window.addEventListener("test",c,c),window.removeEventListener("test",c,!0))}catch(Ke){}var l=function(e,t,n,r){if(r&&"boolean"!==typeof r&&!a){var o=r.once,s=r.capture,c=n;!a&&o&&(c=n.__once||function e(r){this.removeEventListener(t,e,s),n.call(this,r)},n.__once=c),e.addEventListener(t,c,i?r:s)}e.addEventListener(t,n,r)};function u(e){return e&&e.ownerDocument||document}var d,f=function(e,t,n,r){var o=r&&"boolean"!==typeof r?r.capture:r;e.removeEventListener(t,n,o),n.__once&&e.removeEventListener(t,n.__once,o)};function p(e){if((!d&&0!==d||e)&&s){var t=document.createElement("div");t.style.position="absolute",t.style.top="-9999px",t.style.width="50px",t.style.height="50px",t.style.overflow="scroll",document.body.appendChild(t),d=t.offsetWidth-t.clientWidth,document.body.removeChild(t)}return d}var h=n(67294);var m=function(e){var t=(0,h.useRef)(e);return(0,h.useEffect)((function(){t.current=e}),[e]),t};function E(e){var t=m(e);return(0,h.useCallback)((function(){return t.current&&t.current.apply(t,arguments)}),[t])}var v=function(e){return e&&"function"!==typeof e?function(t){e.current=t}:e};var g=function(e,t){return(0,h.useMemo)((function(){return function(e,t){var n=v(e),r=v(t);return function(e){n&&n(e),r&&r(e)}}(e,t)}),[e,t])};function x(e){var t=function(e){var t=(0,h.useRef)(e);return t.current=e,t}(e);(0,h.useEffect)((function(){return function(){return t.current()}}),[])}function b(e,t){return function(e){var t=u(e);return t&&t.defaultView||window}(e).getComputedStyle(e,t)}var y=/([A-Z])/g;var C=/^ms-/;function k(e){return function(e){return e.replace(y,"-$1").toLowerCase()}(e).replace(C,"-ms-")}var w=/^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i;var N=function(e,t){var n="",r="";if("string"===typeof t)return e.style.getPropertyValue(k(t))||b(e).getPropertyValue(k(t));Object.keys(t).forEach((function(o){var s=t[o];s||0===s?!function(e){return!(!e||!w.test(e))}(o)?n+=k(o)+": "+s+";":r+=o+"("+s+") ":e.style.removeProperty(k(o))})),r&&(n+="transform: "+r+";"),e.style.cssText+=";"+n};var O=function(e,t,n,r){return l(e,t,n,r),function(){f(e,t,n,r)}};function R(e,t,n){void 0===n&&(n=5);var r=!1,o=setTimeout((function(){r||function(e,t,n,r){if(void 0===n&&(n=!1),void 0===r&&(r=!0),e){var o=document.createEvent("HTMLEvents");o.initEvent(t,n,r),e.dispatchEvent(o)}}(e,"transitionend",!0)}),t+n),s=O(e,"transitionend",(function(){r=!0}),{once:!0});return function(){clearTimeout(o),s()}}function T(e,t,n,r){null==n&&(n=function(e){var t=N(e,"transitionDuration")||"",n=-1===t.indexOf("ms")?1e3:1;return parseFloat(t)*n}(e)||0);var o=R(e,n,r),s=O(e,"transitionend",t);return function(){o(),s()}}function S(e){void 0===e&&(e=u());try{var t=e.activeElement;return t&&t.nodeName?t:null}catch(Ke){return e.body}}function j(e,t){return e.contains?e.contains(t):e.compareDocumentPosition?e===t||!!(16&e.compareDocumentPosition(t)):void 0}var L=n(73935);const D=`data-rr-ui-${"modal-open"}`;var P=class{constructor({ownerDocument:e,handleContainerOverflow:t=!0,isRTL:n=!1}={}){this.handleContainerOverflow=t,this.isRTL=n,this.modals=[],this.ownerDocument=e}getScrollbarWidth(){return function(e=document){const t=e.defaultView;return Math.abs(t.innerWidth-e.documentElement.clientWidth)}(this.ownerDocument)}getElement(){return(this.ownerDocument||document).body}setModalAttributes(e){}removeModalAttributes(e){}setContainerStyle(e){const t={overflow:"hidden"},n=this.isRTL?"paddingLeft":"paddingRight",r=this.getElement();e.style={overflow:r.style.overflow,[n]:r.style[n]},e.scrollBarWidth&&(t[n]=`${parseInt(N(r,n)||"0",10)+e.scrollBarWidth}px`),r.setAttribute(D,""),N(r,t)}reset(){[...this.modals].forEach((e=>this.remove(e)))}removeContainerStyle(e){const t=this.getElement();t.removeAttribute(D),Object.assign(t.style,e.style)}add(e){let t=this.modals.indexOf(e);return-1!==t?t:(t=this.modals.length,this.modals.push(e),this.setModalAttributes(e),0!==t||(this.state={scrollBarWidth:this.getScrollbarWidth(),style:{}},this.handleContainerOverflow&&this.setContainerStyle(this.state)),t)}remove(e){const t=this.modals.indexOf(e);-1!==t&&(this.modals.splice(t,1),!this.modals.length&&this.handleContainerOverflow&&this.removeContainerStyle(this.state),this.removeModalAttributes(e))}isTopModal(e){return!!this.modals.length&&this.modals[this.modals.length-1]===e}};const F=(0,h.createContext)(s?window:void 0);F.Provider;function M(){return(0,h.useContext)(F)}const _=(e,t)=>s?null==e?(t||u()).body:("function"===typeof e&&(e=e()),e&&"current"in e&&(e=e.current),e&&("nodeType"in e||e.getBoundingClientRect)?e:null):null;var B=n(85893);function A({children:e,in:t,appear:n,onExited:r,onEntered:o,transition:s}){const i=function({in:e,onTransition:t,initial:n=!0}){const r=(0,h.useRef)(null),o=(0,h.useRef)(!0),s=E(t);return(0,h.useEffect)((()=>{o.current&&!n||s({in:e,element:r.current,initial:o.current})}),[e,n,s]),(0,h.useEffect)((()=>(o.current=!1,()=>{o.current=!0})),[]),r}({in:!!t,initial:n,onTransition:e=>{Promise.resolve(s(e)).then((()=>{e.in?null==o||o(e.element,e.initial):null==r||r(e.element)}))}}),a=g(i,e.ref);return(0,h.cloneElement)(e,{ref:a})}function $(e,t,n){return e?(0,B.jsx)(e,Object.assign({},n)):t?(0,B.jsx)(A,Object.assign({},n,{transition:t})):n.children}const W=["show","role","className","style","children","backdrop","keyboard","onBackdropClick","onEscapeKeyDown","transition","runTransition","backdropTransition","runBackdropTransition","autoFocus","enforceFocus","restoreFocus","restoreFocusOptions","renderDialog","renderBackdrop","manager","container","onShow","onHide","onExit","onExited","onExiting","onEnter","onEntering","onEntered"];let I;function H(e){const t=M(),n=e||function(e){return I||(I=new P({ownerDocument:null==e?void 0:e.document})),I}(t),r=(0,h.useRef)({dialog:null,backdrop:null});return Object.assign(r.current,{add:()=>n.add(r.current),remove:()=>n.remove(r.current),isTopModal:()=>n.isTopModal(r.current),setDialogRef:(0,h.useCallback)((e=>{r.current.dialog=e}),[]),setBackdropRef:(0,h.useCallback)((e=>{r.current.backdrop=e}),[])})}const U=(0,h.forwardRef)(((e,t)=>{let{show:n=!1,role:r="dialog",className:o,style:i,children:a,backdrop:c=!0,keyboard:l=!0,onBackdropClick:u,onEscapeKeyDown:d,transition:f,runTransition:p,backdropTransition:m,runBackdropTransition:v,autoFocus:g=!0,enforceFocus:b=!0,restoreFocus:y=!0,restoreFocusOptions:C,renderDialog:k,renderBackdrop:w=(e=>(0,B.jsx)("div",Object.assign({},e))),manager:N,container:R,onShow:T,onHide:D=(()=>{}),onExit:P,onExited:F,onExiting:A,onEnter:I,onEntering:U,onEntered:V}=e,K=function(e,t){if(null==e)return{};var n,r,o={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,W);const z=function(e,t){const n=M(),[r,o]=(0,h.useState)((()=>_(e,null==n?void 0:n.document)));if(!r){const t=_(e);t&&o(t)}return(0,h.useEffect)((()=>{t&&r&&t(r)}),[t,r]),(0,h.useEffect)((()=>{const t=_(e);t!==r&&o(t)}),[e,r]),r}(R),X=H(N),Y=function(){var e=(0,h.useRef)(!0),t=(0,h.useRef)((function(){return e.current}));return(0,h.useEffect)((function(){return e.current=!0,function(){e.current=!1}}),[]),t.current}(),Z=function(e){var t=(0,h.useRef)(null);return(0,h.useEffect)((function(){t.current=e})),t.current}(n),[q,G]=(0,h.useState)(!n),J=(0,h.useRef)(null),Q=!(!f&&!p);(0,h.useImperativeHandle)(t,(()=>X),[X]),s&&!Z&&n&&(J.current=S()),Q||n||q?n&&q&&G(!1):G(!0);const ee=E((()=>{if(X.add(),ie.current=O(document,"keydown",oe),se.current=O(document,"focus",(()=>setTimeout(ne)),!0),T&&T(),g){const e=S(document);X.dialog&&e&&!j(X.dialog,e)&&(J.current=e,X.dialog.focus())}})),te=E((()=>{var e;(X.remove(),null==ie.current||ie.current(),null==se.current||se.current(),y)&&(null==(e=J.current)||null==e.focus||e.focus(C),J.current=null)}));(0,h.useEffect)((()=>{n&&z&&ee()}),[n,z,ee]),(0,h.useEffect)((()=>{q&&te()}),[q,te]),x((()=>{te()}));const ne=E((()=>{if(!b||!Y()||!X.isTopModal())return;const e=S();X.dialog&&e&&!j(X.dialog,e)&&X.dialog.focus()})),re=E((e=>{e.target===e.currentTarget&&(null==u||u(e),!0===c&&D())})),oe=E((e=>{l&&27===e.keyCode&&X.isTopModal()&&(null==d||d(e),e.defaultPrevented||D())})),se=(0,h.useRef)(),ie=(0,h.useRef)();if(!z||!(n||Q&&!q))return null;const ae=Object.assign({role:r,ref:X.setDialogRef,"aria-modal":"dialog"===r||void 0},K,{style:i,className:o,tabIndex:-1});let ce=k?k(ae):(0,B.jsx)("div",Object.assign({},ae,{children:h.cloneElement(a,{role:"document"})}));ce=$(f,p,{unmountOnExit:!0,appear:!0,in:!!n,onExit:P,onExiting:A,onExited:(...e)=>{G(!0),null==F||F(...e)},onEnter:I,onEntering:U,onEntered:V,children:ce});let le=null;return c&&(le=w({ref:X.setBackdropRef,onClick:re}),le=$(m,v,{in:!!n,appear:!0,unmountOnExit:!0,children:le})),(0,B.jsx)(B.Fragment,{children:L.createPortal((0,B.jsxs)(B.Fragment,{children:[le,ce]}),z)})}));U.displayName="Modal";var V=Object.assign(U,{Manager:P});var K=Function.prototype.bind.call(Function.prototype.call,[].slice);function z(e,t){return K(e.querySelectorAll(t))}function X(e,t){return e.replace(new RegExp("(^|\\s)"+t+"(?:\\s|$)","g"),"$1").replace(/\s+/g," ").replace(/^\s*|\s*$/g,"")}const Y=".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",Z=".sticky-top",q=".navbar-toggler";class G extends P{adjustAndStore(e,t,n){const r=t.style[e];t.dataset[e]=r,N(t,{[e]:`${parseFloat(N(t,e))+n}px`})}restore(e,t){const n=t.dataset[e];void 0!==n&&(delete t.dataset[e],N(t,{[e]:n}))}setContainerStyle(e){super.setContainerStyle(e);const t=this.getElement();var n,r;if(r="modal-open",(n=t).classList?n.classList.add(r):function(e,t){return e.classList?!!t&&e.classList.contains(t):-1!==(" "+(e.className.baseVal||e.className)+" ").indexOf(" "+t+" ")}(n,r)||("string"===typeof n.className?n.className=n.className+" "+r:n.setAttribute("class",(n.className&&n.className.baseVal||"")+" "+r)),!e.scrollBarWidth)return;const o=this.isRTL?"paddingLeft":"paddingRight",s=this.isRTL?"marginLeft":"marginRight";z(t,Y).forEach((t=>this.adjustAndStore(o,t,e.scrollBarWidth))),z(t,Z).forEach((t=>this.adjustAndStore(s,t,-e.scrollBarWidth))),z(t,q).forEach((t=>this.adjustAndStore(s,t,e.scrollBarWidth)))}removeContainerStyle(e){super.removeContainerStyle(e);const t=this.getElement();var n,r;r="modal-open",(n=t).classList?n.classList.remove(r):"string"===typeof n.className?n.className=X(n.className,r):n.setAttribute("class",X(n.className&&n.className.baseVal||"",r));const o=this.isRTL?"paddingLeft":"paddingRight",s=this.isRTL?"marginLeft":"marginRight";z(t,Y).forEach((e=>this.restore(o,e))),z(t,Z).forEach((e=>this.restore(s,e))),z(t,q).forEach((e=>this.restore(s,e)))}}let J;function Q(e,t){return Q=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},Q(e,t)}var ee=!1,te=h.createContext(null),ne="unmounted",re="exited",oe="entering",se="entered",ie="exiting",ae=function(e){var t,n;function r(t,n){var r;r=e.call(this,t,n)||this;var o,s=n&&!n.isMounting?t.enter:t.appear;return r.appearStatus=null,t.in?s?(o=re,r.appearStatus=oe):o=se:o=t.unmountOnExit||t.mountOnEnter?ne:re,r.state={status:o},r.nextCallback=null,r}n=e,(t=r).prototype=Object.create(n.prototype),t.prototype.constructor=t,Q(t,n),r.getDerivedStateFromProps=function(e,t){return e.in&&t.status===ne?{status:re}:null};var o=r.prototype;return o.componentDidMount=function(){this.updateStatus(!0,this.appearStatus)},o.componentDidUpdate=function(e){var t=null;if(e!==this.props){var n=this.state.status;this.props.in?n!==oe&&n!==se&&(t=oe):n!==oe&&n!==se||(t=ie)}this.updateStatus(!1,t)},o.componentWillUnmount=function(){this.cancelNextCallback()},o.getTimeouts=function(){var e,t,n,r=this.props.timeout;return e=t=n=r,null!=r&&"number"!==typeof r&&(e=r.exit,t=r.enter,n=void 0!==r.appear?r.appear:t),{exit:e,enter:t,appear:n}},o.updateStatus=function(e,t){if(void 0===e&&(e=!1),null!==t)if(this.cancelNextCallback(),t===oe){if(this.props.unmountOnExit||this.props.mountOnEnter){var n=this.props.nodeRef?this.props.nodeRef.current:L.findDOMNode(this);n&&function(e){e.scrollTop}(n)}this.performEnter(e)}else this.performExit();else this.props.unmountOnExit&&this.state.status===re&&this.setState({status:ne})},o.performEnter=function(e){var t=this,n=this.props.enter,r=this.context?this.context.isMounting:e,o=this.props.nodeRef?[r]:[L.findDOMNode(this),r],s=o[0],i=o[1],a=this.getTimeouts(),c=r?a.appear:a.enter;!e&&!n||ee?this.safeSetState({status:se},(function(){t.props.onEntered(s)})):(this.props.onEnter(s,i),this.safeSetState({status:oe},(function(){t.props.onEntering(s,i),t.onTransitionEnd(c,(function(){t.safeSetState({status:se},(function(){t.props.onEntered(s,i)}))}))})))},o.performExit=function(){var e=this,t=this.props.exit,n=this.getTimeouts(),r=this.props.nodeRef?void 0:L.findDOMNode(this);t&&!ee?(this.props.onExit(r),this.safeSetState({status:ie},(function(){e.props.onExiting(r),e.onTransitionEnd(n.exit,(function(){e.safeSetState({status:re},(function(){e.props.onExited(r)}))}))}))):this.safeSetState({status:re},(function(){e.props.onExited(r)}))},o.cancelNextCallback=function(){null!==this.nextCallback&&(this.nextCallback.cancel(),this.nextCallback=null)},o.safeSetState=function(e,t){t=this.setNextCallback(t),this.setState(e,t)},o.setNextCallback=function(e){var t=this,n=!0;return this.nextCallback=function(r){n&&(n=!1,t.nextCallback=null,e(r))},this.nextCallback.cancel=function(){n=!1},this.nextCallback},o.onTransitionEnd=function(e,t){this.setNextCallback(t);var n=this.props.nodeRef?this.props.nodeRef.current:L.findDOMNode(this),r=null==e&&!this.props.addEndListener;if(n&&!r){if(this.props.addEndListener){var o=this.props.nodeRef?[this.nextCallback]:[n,this.nextCallback],s=o[0],i=o[1];this.props.addEndListener(s,i)}null!=e&&setTimeout(this.nextCallback,e)}else setTimeout(this.nextCallback,0)},o.render=function(){var e=this.state.status;if(e===ne)return null;var t=this.props,n=t.children,r=(t.in,t.mountOnEnter,t.unmountOnExit,t.appear,t.enter,t.exit,t.timeout,t.addEndListener,t.onEnter,t.onEntering,t.onEntered,t.onExit,t.onExiting,t.onExited,t.nodeRef,function(e,t){if(null==e)return{};var n,r,o={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(t,["children","in","mountOnEnter","unmountOnExit","appear","enter","exit","timeout","addEndListener","onEnter","onEntering","onEntered","onExit","onExiting","onExited","nodeRef"]));return h.createElement(te.Provider,{value:null},"function"===typeof n?n(e,r):h.cloneElement(h.Children.only(n),r))},r}(h.Component);function ce(){}ae.contextType=te,ae.propTypes={},ae.defaultProps={in:!1,mountOnEnter:!1,unmountOnExit:!1,appear:!1,enter:!0,exit:!0,onEnter:ce,onEntering:ce,onEntered:ce,onExit:ce,onExiting:ce,onExited:ce},ae.UNMOUNTED=ne,ae.EXITED=re,ae.ENTERING=oe,ae.ENTERED=se,ae.EXITING=ie;var le=ae;function ue(e,t){const n=N(e,t)||"",r=-1===n.indexOf("ms")?1e3:1;return parseFloat(n)*r}function de(e,t){const n=ue(e,"transitionDuration"),r=ue(e,"transitionDelay"),o=T(e,(n=>{n.target===e&&(o(),t(n))}),n+r)}var fe=h.forwardRef((({onEnter:e,onEntering:t,onEntered:n,onExit:r,onExiting:o,onExited:s,addEndListener:i,children:a,childRef:c,...l},u)=>{const d=(0,h.useRef)(null),f=g(d,c),p=e=>{var t;f((t=e)&&"setState"in t?L.findDOMNode(t):null!=t?t:null)},m=e=>t=>{e&&d.current&&e(d.current,t)},E=(0,h.useCallback)(m(e),[e]),v=(0,h.useCallback)(m(t),[t]),x=(0,h.useCallback)(m(n),[n]),b=(0,h.useCallback)(m(r),[r]),y=(0,h.useCallback)(m(o),[o]),C=(0,h.useCallback)(m(s),[s]),k=(0,h.useCallback)(m(i),[i]);return(0,B.jsx)(le,{ref:u,...l,onEnter:E,onEntered:x,onEntering:v,onExit:b,onExited:C,onExiting:y,addEndListener:k,nodeRef:d,children:"function"===typeof a?(e,t)=>a(e,{...t,ref:p}):h.cloneElement(a,{ref:p})})}));const pe={[oe]:"show",[se]:"show"},he=h.forwardRef((({className:e,children:t,transitionClasses:n={},...r},s)=>{const i=(0,h.useCallback)(((e,t)=>{!function(e){e.offsetHeight}(e),null==r.onEnter||r.onEnter(e,t)}),[r]);return(0,B.jsx)(fe,{ref:s,addEndListener:de,...r,onEnter:i,childRef:t.ref,children:(r,s)=>h.cloneElement(t,{...s,className:o()("fade",e,t.props.className,pe[r],n[r])})})}));he.defaultProps={in:!1,timeout:300,mountOnEnter:!1,unmountOnExit:!1,appear:!1},he.displayName="Fade";var me=he,Ee=/-(.)/g;const ve=["xxl","xl","lg","md","sm","xs"],ge=h.createContext({prefixes:{},breakpoints:ve,minBreakpoint:"xs"}),{Consumer:xe,Provider:be}=ge;function ye(e,t){const{prefixes:n}=(0,h.useContext)(ge);return e||n[t]||t}const Ce=e=>{return e[0].toUpperCase()+(t=e,t.replace(Ee,(function(e,t){return t.toUpperCase()}))).slice(1);var t};function ke(e,{displayName:t=Ce(e),Component:n,defaultProps:r}={}){const s=h.forwardRef((({className:t,bsPrefix:r,as:s=n||"div",...i},a)=>{const c=ye(r,e);return(0,B.jsx)(s,{ref:a,className:o()(t,c),...i})}));return s.defaultProps=r,s.displayName=t,s}var we=ke("modal-body");var Ne=h.createContext({onHide(){}});const Oe=h.forwardRef((({bsPrefix:e,className:t,contentClassName:n,centered:r,size:s,fullscreen:i,children:a,scrollable:c,...l},u)=>{const d=`${e=ye(e,"modal")}-dialog`,f="string"===typeof i?`${e}-fullscreen-${i}`:`${e}-fullscreen`;return(0,B.jsx)("div",{...l,ref:u,className:o()(d,t,s&&`${e}-${s}`,r&&`${d}-centered`,c&&`${d}-scrollable`,i&&f),children:(0,B.jsx)("div",{className:o()(`${e}-content`,n),children:a})})}));Oe.displayName="ModalDialog";var Re=Oe,Te=ke("modal-footer"),Se=n(45697),je=n.n(Se);const Le={"aria-label":je().string,onClick:je().func,variant:je().oneOf(["white"])},De=h.forwardRef((({className:e,variant:t,...n},r)=>(0,B.jsx)("button",{ref:r,type:"button",className:o()("btn-close",t&&`btn-close-${t}`,e),...n})));De.displayName="CloseButton",De.propTypes=Le,De.defaultProps={"aria-label":"Close"};var Pe=De;const Fe=h.forwardRef((({closeLabel:e,closeVariant:t,closeButton:n,onHide:r,children:o,...s},i)=>{const a=(0,h.useContext)(Ne),c=E((()=>{null==a||a.onHide(),null==r||r()}));return(0,B.jsxs)("div",{ref:i,...s,children:[o,n&&(0,B.jsx)(Pe,{"aria-label":e,variant:t,onClick:c})]})}));Fe.defaultProps={closeLabel:"Close",closeButton:!1};var Me=Fe;const _e=h.forwardRef((({bsPrefix:e,className:t,...n},r)=>(e=ye(e,"modal-header"),(0,B.jsx)(Me,{ref:r,...n,className:o()(t,e)}))));_e.displayName="ModalHeader",_e.defaultProps={closeLabel:"Close",closeButton:!1};var Be=_e;var Ae,$e=ke("modal-title",{Component:(Ae="h4",h.forwardRef(((e,t)=>(0,B.jsx)("div",{...e,ref:t,className:o()(e.className,Ae)}))))});const We={show:!1,backdrop:!0,keyboard:!0,autoFocus:!0,enforceFocus:!0,restoreFocus:!0,animation:!0,dialogAs:Re};function Ie(e){return(0,B.jsx)(me,{...e,timeout:null})}function He(e){return(0,B.jsx)(me,{...e,timeout:null})}const Ue=h.forwardRef((({bsPrefix:e,className:t,style:n,dialogClassName:r,contentClassName:i,children:a,dialogAs:c,"aria-labelledby":d,"aria-describedby":m,"aria-label":v,show:b,animation:y,backdrop:C,keyboard:k,onEscapeKeyDown:w,onShow:N,onHide:O,container:R,autoFocus:S,enforceFocus:j,restoreFocus:L,restoreFocusOptions:D,onEntered:P,onExit:F,onExiting:M,onEnter:_,onEntering:A,onExited:$,backdropClassName:W,manager:I,...H},U)=>{const[K,z]=(0,h.useState)({}),[X,Y]=(0,h.useState)(!1),Z=(0,h.useRef)(!1),q=(0,h.useRef)(!1),Q=(0,h.useRef)(null),[ee,te]=(0,h.useState)(null),ne=g(U,te),re=E(O),oe=function(){const{dir:e}=(0,h.useContext)(ge);return"rtl"===e}();e=ye(e,"modal");const se=(0,h.useMemo)((()=>({onHide:re})),[re]);function ie(){return I||function(e){return J||(J=new G(e)),J}({isRTL:oe})}function ae(e){if(!s)return;const t=ie().getScrollbarWidth()>0,n=e.scrollHeight>u(e).documentElement.clientHeight;z({paddingRight:t&&!n?p():void 0,paddingLeft:!t&&n?p():void 0})}const ce=E((()=>{ee&&ae(ee.dialog)}));x((()=>{f(window,"resize",ce),null==Q.current||Q.current()}));const le=()=>{Z.current=!0},ue=e=>{Z.current&&ee&&e.target===ee.dialog&&(q.current=!0),Z.current=!1},de=()=>{Y(!0),Q.current=T(ee.dialog,(()=>{Y(!1)}))},fe=e=>{"static"!==C?q.current||e.target!==e.currentTarget?q.current=!1:null==O||O():(e=>{e.target===e.currentTarget&&de()})(e)},pe=(0,h.useCallback)((t=>(0,B.jsx)("div",{...t,className:o()(`${e}-backdrop`,W,!y&&"show")})),[y,W,e]),he={...n,...K};he.display="block";return(0,B.jsx)(Ne.Provider,{value:se,children:(0,B.jsx)(V,{show:b,ref:ne,backdrop:C,container:R,keyboard:!0,autoFocus:S,enforceFocus:j,restoreFocus:L,restoreFocusOptions:D,onEscapeKeyDown:e=>{k?null==w||w(e):(e.preventDefault(),"static"===C&&de())},onShow:N,onHide:O,onEnter:(e,t)=>{e&&ae(e),null==_||_(e,t)},onEntering:(e,t)=>{null==A||A(e,t),l(window,"resize",ce)},onEntered:P,onExit:e=>{null==Q.current||Q.current(),null==F||F(e)},onExiting:M,onExited:e=>{e&&(e.style.display=""),null==$||$(e),f(window,"resize",ce)},manager:ie(),transition:y?Ie:void 0,backdropTransition:y?He:void 0,renderBackdrop:pe,renderDialog:n=>(0,B.jsx)("div",{role:"dialog",...n,style:he,className:o()(t,e,X&&`${e}-static`,!y&&"show"),onClick:C?fe:void 0,onMouseUp:ue,"aria-label":v,"aria-labelledby":d,"aria-describedby":m,children:(0,B.jsx)(c,{...H,onMouseDown:le,className:r,contentClassName:i,children:a})})})})}));Ue.displayName="Modal",Ue.defaultProps=We;var Ve=Object.assign(Ue,{Body:we,Header:Be,Title:$e,Footer:Te,Dialog:Re,TRANSITION_DURATION:300,BACKDROP_TRANSITION_DURATION:150})}}]);