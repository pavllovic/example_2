(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{0:function(t,e,o){"use strict";o.d(e,"a",(function(){return n})),o.d(e,"b",(function(){return a}));var r=function(t){return new FormData(t)};var s=async function(t,e){const o=Object.fromEntries(e),r={method:t.getAttribute("method")||"POST",credentials:"same-origin",body:JSON.stringify(o),headers:{}};this.controller&&(r.signal=this.controller.signal);try{const t=await fetch("https://echo.htmlacademy.ru",r);if(!t.ok)throw new Error("server error");return t}catch(t){throw new Error(t.message)}};const i={init:function(){this.setListeners()},setListeners:function(){this.form.addEventListener("submit",this),this.inputs.forEach(t=>{t.addEventListener("invalid",this),t.addEventListener("input",this)})},destroyForm:function(){this.form.removeEventListener("submit",this),this.inputs.forEach(t=>{t.removeEventListener("invalid",this),t.removeEventListener("input",this)})},showSubmitting:function(){const t=this.form.querySelector('[type="submit"]');this.sending?(t.classList.add("submitting"),t.setAttribute("disabled","true")):(t.classList.remove("submitting"),t.removeAttribute("disabled"))},submitForm:function(t){t.preventDefault(),this.sending=!0,this.showSubmitting();const e=this.getFormData(t.target);this.timeout=setTimeout(()=>{this.sendForm(t.target,e).then(t=>this.onSuccessHandler(t)).catch(t=>this.onErrorHandler(t)).finally(()=>{this.sending=!1,this.showSubmitting()})},2e3)},checkConfirmInput:function(t){const e=this.form.querySelector(`[data-confirm="${t}"]`);return this.validator.checkValidity(e)},checkInputValidity:function(t){const e=this.validator.checkValidity(t);this.validator.showCustomTooltip(t),e?t.classList.remove("input_error"):t.classList.add("input_error")},resendForm:function(){this.form.querySelector('[type="submit"]').click()},resetForm:function(){this.inputs.forEach((t,e)=>{this.validator.invalidities[e].size>0&&(this.validator.clearCustomTooltip(t),t.classList.remove("input_error"))}),this.form.reset()},onSuccessHandler:function(t){this.resetForm(),console.log(t)},onErrorHandler:function(t){console.log(t)},debounceInput:function(){let t;return function(e,o){clearTimeout(t),t=setTimeout(e,o)}}(),handleEvent:function(t){switch(t.type){case"submit":return this.submitForm(t);case"invalid":return t.preventDefault(),this.checkInputValidity(t.target);case"input":return this.debounceInput(()=>{this.checkInputValidity(t.target)},150)}}},n=function(t,e,o){this.form=o,this.validator=new t(e),this.inputs=new Map,e.forEach(t=>{this.inputs.set(t,this.form.querySelector(`[name="${t}"]`))}),this.sending=!1},a={getFormData:r,sendForm:s,init:i.init,setListeners:i.setListeners,destroyForm:i.destroyForm,showSubmitting:i.showSubmitting,submitForm:i.submitForm,checkConfirmInput:i.checkConfirmInput,checkInputValidity:i.checkInputValidity,resendForm:i.resendForm,resetForm:i.resetForm,onSuccessHandler:i.onSuccessHandler,onErrorHandler:i.onErrorHandler,debounceInput:i.debounceInput,handleEvent:i.handleEvent}},1:function(t,e,o){"use strict";const r={checkValidity:function(t){if(t.setCustomValidity(""),!t.validity.valid)return this.getInvalidMessages(t),!1;if(t.hasAttribute("data-confirm")){const e=t.getAttribute("data-confirm"),o=document.getElementById(e);if(""!==t.value&&o.value!==t.value)return this.getInvalidMessages(t),!1}return!0},getInvalidMessages:function(t){const e=t.validationMessage,o=t.getAttribute("name"),r=t.validity;if(t.hasAttribute("data-confirm")){const t=this.invalidMessages[o].valueMismatch||"value does not match";this.addInvalidities(o,t)}if(r.valueMissing){const t=this.invalidMessages[o].valueMissing||e;this.addInvalidities(o,t)}if(r.badInput){const t=this.invalidMessages[o].badInput||e;this.addInvalidities(o,t)}if(r.customError){const t=this.invalidMessages[o].customError||e;this.addInvalidities(o,t)}if(r.patternMismatch){const t=this.invalidMessages[o].patternMismatch||e;this.addInvalidities(o,t)}if(r.rangeOverFlow){const t=this.invalidMessages[o].rangeOverFlow||e;this.addInvalidities(o,t)}if(r.rangeUnderFlow){const t=this.invalidMessages[o].rangeUnderFlow||e;this.addInvalidities(o,t)}if(r.stepMismatch){const t=this.invalidMessages[o].stepMismatch||e;this.addInvalidities(o,t)}if(r.tooLong){const t=this.invalidMessages[o].tooLong||e;this.addInvalidities(o,t)}if(r.tooShort){const t=this.invalidMessages[o].tooShort||e;this.addInvalidities(o,t)}if(r.typeMismatch){const t=this.invalidMessages[o].typeMismatch||e;this.addInvalidities(o,t)}},addInvalidities:function(t,e){this.invalidities[t].set(e,!0)},showCustomTooltip:function(t){const e=t.getAttribute("name"),o=t.closest("form").querySelector(`[data-error='${e}']`);this.invalidities[e].size>0&&this.invalidities[e].forEach((t,r)=>{t?this.showCustomErrorMessage(r,t,o,e):this.hideCustomErrorMessage(r,o,e)})},showCustomErrorMessage:function(t,e,o,r){this.errorItem[r].get(t)||this.addMessageElement(t,o,r),this.invalidities[r].set(t,!e)},hideCustomErrorMessage:function(t,e,o){this.errorItem[o].get(t)&&this.removeMessageElement(t,e,o),this.invalidities[o].delete(t)},clearCustomTooltip:function(t){const e=t.getAttribute("name"),o=t.closest("form").querySelector(`[data-error='${e}']`);this.errorItem[e].forEach(t=>{t.style.setProperty("opacity","0"),setTimeout(()=>{t.remove()},150)}),o.style.setProperty("height","0px"),this.invalidities[e].clear(),this.errorItem[e].clear()},showNativeTooltip:function(t){const e=t.getAttribute("name"),o=this.invalidities[e][0]||"";t.setCustomValidity(o)},addMessageElement:function(t,e,o){const r=document.createElement("span");r.innerText=t,e.appendChild(r);const s=parseInt((e.style.height||"0px").slice(0,-2),10),i=r.offsetHeight;e.style.setProperty("height",s+i+"px"),r.style.setProperty("opacity","1"),this.errorItem[o].set(t,r)},removeMessageElement:function(t,e,o){const r=this.errorItem[o].get(t);this.errorItem[o].delete(t);const s=parseInt((e.style.height||"0px").slice(0,-2),10),i=r.offsetHeight;r.style.setProperty("opacity","0"),e.style.setProperty("height",s-i+"px"),setTimeout(()=>{r.remove()},150)}},s=function(t,e){this.invalidities={},this.errorItem={},this.invalidMessages=t,e.forEach(t=>{this.invalidities[t]=new Map,this.errorItem[t]=new Map})};s.prototype={checkValidity:r.checkValidity,getInvalidMessages:r.getInvalidMessages,addInvalidities:r.addInvalidities,showCustomTooltip:r.showCustomTooltip,clearCustomTooltip:r.clearCustomTooltip,showNativeTooltip:r.showNativeTooltip,addMessageElement:r.addMessageElement,removeMessageElement:r.removeMessageElement,showCustomErrorMessage:r.showCustomErrorMessage,hideCustomErrorMessage:r.hideCustomErrorMessage};var i={text:{badInput:"error text badInput",customError:"error text customError",patternMismatch:"error text patternMismatch",rangeOverFlow:"error text rangeOverFlow",rangeUnderFlow:"error text rangeUnderFlow",stepMismatch:"error text stepMismatch",tooLong:"error text tooLong",tooShort:"error text tooShort",typeMismatch:"error text typeMismatch",valueMissing:"error text valueMissing"},name:{badInput:"error name badInput",customError:"error name customError",patternMismatch:"error name patternMismatch",rangeOverFlow:"error name rangeOverFlow",rangeUnderFlow:"error name rangeUnderFlow",stepMismatch:"error name stepMismatch",tooLong:"error name tooLong",tooShort:"error name tooShort",typeMismatch:"error name typeMismatch",valueMissing:"error name valueMissing"},amount:{badInput:"error amount badInput",customError:"error amount customError",patternMismatch:"error amount patternMismatch",rangeOverFlow:"error amount rangeOverFlow",rangeUnderFlow:"error amount rangeUnderFlow",stepMismatch:"error amount stepMismatch",tooLong:"error amount tooLong",tooShort:"error amount tooShort",typeMismatch:"error amount typeMismatch",valueMissing:"error amount valueMissing"},card:{badInput:"error card badInput",customError:"error card customError",patternMismatch:"error card patternMismatch",rangeOverFlow:"error card rangeOverFlow",rangeUnderFlow:"error card rangeUnderFlow",stepMismatch:"error card stepMismatch",tooLong:"error card tooLong",tooShort:"error card tooShort",typeMismatch:"error card typeMismatch",valueMissing:"error card valueMissing"},currency:{badInput:"error currency badInput",customError:"error currency customError",patternMismatch:"error currency patternMismatch",rangeOverFlow:"error currency rangeOverFlow",rangeUnderFlow:"error currency rangeUnderFlow",stepMismatch:"error currency stepMismatch",tooLong:"error currency tooLong",tooShort:"error currency tooShort",typeMismatch:"error currency typeMismatch",valueMissing:"error currency valueMissing"},confirm_password:{badInput:"error confirm_password badInput",customError:"error confirm_password customError",patternMismatch:"error confirm_password patternMismatch",rangeOverFlow:"error confirm_password rangeOverFlow",rangeUnderFlow:"error confirm_passwordrangeUnderFlow",stepMismatch:"error confirm_password stepMismatch",tooLong:"error confirm_password tooLong",tooShort:"error confirm_password tooShort",typeMismatch:"error confirm_password typeMismatch",valueMissing:"error confirm_password valueMissing",valueMismatch:"error confirm_password valueMismatch"},tel:{badInput:"error tel badInput",customError:"error tel customError",patternMismatch:"error tel patternMismatch",rangeOverFlow:"error tel rangeOverFlow",rangeUnderFlow:"error tel rangeUnderFlow",stepMismatch:"error tel stepMismatch",tooLong:"errortelt tooLong",tooShort:"error tel tooShort",typeMismatch:"error tel typeMismatch",valueMissing:"error tel valueMissing"},email:{badInput:"error email badInput",customError:"error email customError",patternMismatch:"error email patternMismatch",rangeOverFlow:"error email rangeOverFlow",rangeUnderFlow:"error email rangeUnderFlow",stepMismatch:"error email stepMismatch",tooLong:"error email tooLong",tooShort:"error email tooShort",typeMismatch:"error email typeMismatch",valueMissing:"error email valueMissing"},password:{badInput:"error password badInput",customError:"error password customError",patternMismatch:"error password patternMismatch",rangeOverFlow:"error password rangeOverFlow",rangeUnderFlow:"error password rangeUnderFlow",stepMismatch:"error password stepMismatch",tooLong:"error password tooLong",tooShort:"error password tooShort",typeMismatch:"error password typeMismatch",valueMissing:"error password valueMissing"},url:{badInput:"error url badInput",customError:"error url customError",patternMismatch:"error url patternMismatch",rangeOverFlow:"error url rangeOverFlow",rangeUnderFlow:"error url rangeUnderFlow",stepMismatch:"error url stepMismatch",tooLong:"error url tooLong",tooShort:"error url tooShort",typeMismatch:"error url typeMismatch",valueMissing:"error url valueMissing"}};const n=s.bind(null,i);e.a=n},13:function(t,e,o){t.exports=o(16)},16:function(t,e,o){"use strict";o.r(e);const r=function(t,e,o){this.wrap=t,this.box=t.querySelector(".modal-box"),this.btns=o,this.startModal=e,this.activeModal=e,this.siblings=new Map},s={init:function(){this.wrap.addEventListener("keydown",this),this.wrap.addEventListener("mousedown",this),this.wrap.querySelectorAll("[data-modal], [data-modal-ctrl]").forEach(t=>{t.addEventListener("click",this)}),this.btns.forEach(t=>{t.addEventListener("click",this)}),"undefined"!==ResizeObserver&&(this.ro=new ResizeObserver(t=>{t.forEach(t=>{if("false"===t.target.getAttribute("aria-hidden")){const e=t.borderBoxSize[0].blockSize;this.box.style.setProperty("min-height",e+"px")}})}),this.box.querySelectorAll(".modal").forEach(t=>{this.ro.observe(t)}))},getModalOpener:function(t){return"menuitem"===t.getAttribute("role")?t.closest('[role="menu"]').previousElementSibling:t},open:function(t){this.wrap.setAttribute("aria-hidden","false"),this.setBoxHeight(),this.activeModal.setAttribute("aria-hidden","false"),this.opener=this.getModalOpener(t),this.addInert(this.wrap),this.focusTrap(this.activeModal),this.wrap.focus()},close:function(){this.wrap.setAttribute("aria-hidden","true"),this.activeModal.setAttribute("aria-hidden","true"),this.opener.focus(),this.activeModal=this.startModal,this.siblings.forEach((t,e)=>{null===t?e.removeAttribute("aria-hidden"):e.setAttribute("aria-hidden",t)}),this.siblings.clear(),this.setBoxHeight()},showModal:function(t){this.activeModal.setAttribute("aria-hidden","true"),this.activeModal=this.wrap.querySelector("#modal-"+t),this.setBoxHeight(),this.activeModal.setAttribute("aria-hidden","false"),this.focusTrap(this.activeModal),this.activeModal.focus(),this.wrap.scrollTo(0,0)},setBoxHeight:function(){const t=this.activeModal.offsetHeight;this.box.style.setProperty("min-height",t+"px")},back:function(){const t=this.startModal.getAttribute("id").slice(6);this.showModal(t)},focusTrap:function(t){const e=["a[href]","area[href]","input:not([disabled])","select:not([disabled])","textarea:not([disabled])","button:not([disabled])","details","summary","iframe","object","embed","[contenteditable]",'[tabindex="0"]'].join(","),o=t.querySelectorAll(e);this.first=o[0],this.last=o[o.length-1]},keydownModal:function(t){switch(t.key){case"Tab":if(t.target===this.last&&!t.shiftKey)return t.preventDefault(),this.first.focus();if((t.target===this.first||t.target===this.wrap||t.target===this.activeModal)&&t.shiftKey)return t.preventDefault(),this.last.focus();break;case"Escape":return this.close()}},addInert:function(t){if(t!==document.body){[...t.parentElement.children].forEach(e=>{e!==t&&"SCRIPT"!==e.nodeName&&"STYLE"!==e.nodeName&&(this.siblings.set(e,e.getAttribute("aria-hidden")),e.setAttribute("aria-hidden","true"))}),this.addInert(t.parentElement)}},destroy:function(){this.wrap.removeEventListener("keydown",this),this.wrap.removeEventListener("mousedown",this),this.wrap.querySelectorAll("[data-modal], [data-modal-ctrl]").forEach(t=>{t.removeEventListener("click",this)}),this.btns.forEach(t=>{t.removeEventListener("click",this)}),"undfined"!==ResizeObserver&&this.ro.disconnect()},handleEvent:function(t){switch(t.type){case"click":if(this.btns.includes(t.currentTarget))return this.open(t.currentTarget);if(t.currentTarget.hasAttribute("data-modal")){const e=t.currentTarget.getAttribute("data-modal");return this.showModal(e)}if("close"===t.currentTarget.getAttribute("data-modal-ctrl"))return this.close();if("back"===t.currentTarget.getAttribute("data-modal-ctrl"))return this.back();break;case"mousedown":if(t.target===this.wrap)return this.close();break;case"keydown":return this.keydownModal(t)}}},i=function(t,e,o,s,i){r.call(this,t,e,o),this.login=s,this.singup=i};i.prototype={constructor:i,getModalOpener:s.getModalOpener,open:s.open,showModal:s.showModal,back:s.back,setBoxHeight:s.setBoxHeight,focusTrap:s.focusTrap,keydownModal:s.keydownModal,addInert:s.addInert,destroy:s.destroy,handleEvent:s.handleEvent,init:function(){s.init.call(this),this.login.init(),this.singup.init()},close:function(){this.login.resetForm(),this.singup.resetForm(),s.close.call(this)}};var n=i,a=o(0);const c={setFormPopupListeners:function(){this.form.querySelectorAll("[data-form-popup]").forEach(t=>{t.addEventListener("click",this),t.addEventListener("keydown",this)})},destroyFormPopup:function(){this.form.querySelectorAll("[data-form-popup]").forEach(t=>{t.removeEventListener("click",this),t.removeEventListener("keydown",this)})},statePopupControls:function(){const t=this.popup.querySelectorAll("[data-popup-control]");this.popupOpen?t.forEach(t=>t.removeAttribute("disabled")):t.forEach(t=>t.setAttribute("disabled","true"))},toogleFormPopup:function(t){this.popupOpen=!this.popupOpen,this.setFormPopupMessage(t),this.popup.setAttribute("aria-hidden",!this.popupOpen),this.popupOpen?this.popup.focus():this.form.querySelector('[type="submit"]').focus(),this.statePopupControls()},setFormPopupMessage:function(t){const e=t||"";this.popup.querySelector("[data-popup-msg]").innerText=e},focusTrapPopup:function(t){const e=t.querySelectorAll("[data-popup-control]");this.first=e[0],this.last=e[e.length-1]},keydownPopup:function(t){switch(t.key){case"Tab":if(t.target===this.last&&!t.shiftKey)return t.preventDefault(),this.first.focus();if(t.target===this.first&&!0===t.shiftKey)return t.preventDefault(),this.last.focus();if(t.target===this.popup&&!0===t.shiftKey)return t.preventDefault(),this.last.focus();break;case"Escape":return t.stopPropagation(),this.toogleFormPopup()}},handleEvent:function(t){switch(t.type){case"click":if("close-popup"===t.target.getAttribute("data-popup-control"))return this.toogleFormPopup();if("resend-form"===t.target.getAttribute("data-popup-control"))return this.resendForm();if("close-form"===t.target.getAttribute("data-popup-control"))return this.resetForm();break;case"keydown":return this.keydownPopup(t)}}};var u={setFormPopupListeners:c.setFormPopupListeners,setFormPopupMessage:c.setFormPopupMessage,toogleFormPopup:c.toogleFormPopup,focusTrapPopup:c.focusTrapPopup,keydownPopup:c.keydownPopup,statePopupControls:c.statePopupControls,destroyFormPopup:c.destroyFormPopup,handleEvent:c.handleEvent};const h=function(...t){a.a.call(this,...t),this.popupOpen=!1};h.prototype={constructor:h,getFormData:a.b.getFormData,sendForm:a.b.sendForm,init:a.b.init,checkInputValidity:a.b.checkInputValidity,checkConfirmInput:a.b.checkConfirmInput,showSubmitting:a.b.showSubmitting,setFormPopupMessage:u.setFormPopupMessage,toogleFormPopup:u.toogleFormPopup,focusTrapPopup:u.focusTrapPopup,keydownPopup:u.keydownPopup,statePopupControls:u.statePopupControls,debounceInput:a.b.debounceInput,setListeners:function(){a.b.setListeners.call(this),u.setFormPopupListeners.call(this)},destroyForm:function(){a.b.destroyForm.call(this),u.destroyFormPopup.call(this)},onSuccessHandler:function(t){a.b.onSuccessHandler.call(this,t),this.popup=this.form.querySelector('[data-form-popup="success"]'),this.toogleFormPopup("form successfully send"),this.focusTrapPopup(this.popup)},onErrorHandler:function(t){a.b.onErrorHandler.call(this,t),this.popup=this.form.querySelector('[data-form-popup="error"]'),this.toogleFormPopup(t),this.focusTrapPopup(this.popup)},submitForm:function(t){t.preventDefault(),this.checkConfirmInput("singup-password")&&a.b.submitForm.call(this,t)},resendForm:function(){this.popupOpen&&this.toogleFormPopup(),a.b.resendForm.call(this)},resetForm:function(){this.popupOpen&&this.toogleFormPopup(),a.b.resetForm.call(this)},handleEvent:function(t){a.b.handleEvent.call(this,t),u.handleEvent.call(this,t)}};var l=h,p=o(1);const d=document.getElementById("form-singup");var m=new l(p.a,["name","email","password","confirm_password"],d);const f=function(...t){a.a.call(this,...t),this.popupOpen=!1};f.prototype={constructor:f,getFormData:a.b.getFormData,sendForm:a.b.sendForm,init:a.b.init,checkInputValidity:a.b.checkInputValidity,showSubmitting:a.b.showSubmitting,submitForm:a.b.submitForm,setFormPopupMessage:u.setFormPopupMessage,toogleFormPopup:u.toogleFormPopup,focusTrapPopup:u.focusTrapPopup,keydownPopup:u.keydownPopup,statePopupControls:u.statePopupControls,debounceInput:a.b.debounceInput,setListeners:function(){a.b.setListeners.call(this),u.setFormPopupListeners.call(this)},destroyForm:function(){a.b.destroyForm.call(this),u.destroyFormPopup.call(this)},onSuccessHandler:function(t){a.b.onSuccessHandler.call(this,t)},onErrorHandler:function(t){a.b.onErrorHandler.call(this,t),this.popup=this.form.querySelector('[data-form-popup="error"]'),this.toogleFormPopup(t.message),this.focusTrapPopup(this.popup)},resendForm:function(){this.popupOpen&&this.toogleFormPopup(),a.b.resendForm.call(this)},resetForm:function(){this.popupOpen&&this.toogleFormPopup(),a.b.resetForm.call(this)},handleEvent:function(t){a.b.handleEvent.call(this,t),u.handleEvent.call(this,t)}};var g=f;const b=document.getElementById("form-login");var v=new g(p.a,["email","password"],b);const y=document.getElementById("modal-auth"),w=y.querySelector("#modal-login");var M=new n(y,w,Array.from(document.querySelectorAll('[data-modal="auth"]')),v,m);const F=function(t,e,o,s){r.call(this,t,e,o),this.Form=s};F.prototype={constructor:F,init:s.init,getModalOpener:s.getModalOpener,open:s.open,setBoxHeight:s.setBoxHeight,focusTrap:s.focusTrap,keydownModal:s.keydownModal,addInert:s.addInert,destroy:s.destroy,handleEvent:s.handleEvent,back:function(){this.form&&this.form.abortSubmit(),s.back.call(this)},showModal:function(t){s.showModal.call(this,t);const e=this.activeModal.querySelector("form");e&&(this.form&&this.form.destroyForm(),this.form=new this.Form(e),this.form.init())},close:function(){this.form&&this.form.abortSubmit(),s.close.call(this)}};var E=F;const I=function(...t){a.a.call(this,...t),this.popupOpen=!1};I.prototype={constructor:I,getFormData:a.b.getFormData,sendForm:a.b.sendForm,checkInputValidity:a.b.checkInputValidity,showSubmitting:a.b.showSubmitting,submitForm:a.b.submitForm,setFormPopupMessage:u.setFormPopupMessage,toogleFormPopup:u.toogleFormPopup,focusTrapPopup:u.focusTrapPopup,keydownPopup:u.keydownPopup,statePopupControls:u.statePopupControls,debounceInput:a.b.debounceInput,init:function(){this.controller=new AbortController,a.b.init.call(this)},setListeners:function(){a.b.setListeners.call(this),u.setFormPopupListeners.call(this),this.controller.signal.addEventListener("abort",()=>{console.log("*** abort submit form ***")})},destroyForm:function(){a.b.destroyForm.call(this),u.destroyFormPopup.call(this)},onSuccessHandler:function(t){a.b.onSuccessHandler.call(this,t),this.popup=this.form.querySelector('[data-form-popup="success"]'),this.toogleFormPopup("form successfully send"),this.focusTrapPopup(this.popup)},onErrorHandler:function(t){a.b.onErrorHandler.call(this,t),this.popup=this.form.querySelector('[data-form-popup="error"]'),this.toogleFormPopup(t),this.focusTrapPopup(this.popup)},resendForm:function(){this.popupOpen&&this.toogleFormPopup(),a.b.resendForm.call(this)},resetForm:function(){this.popupOpen&&this.toogleFormPopup(),a.b.resetForm.call(this)},abortSubmit:function(){this.sending&&(clearTimeout(this.timeout),this.controller.abort(),this.sending=!1,this.showSubmitting())},handleEvent:function(t){a.b.handleEvent.call(this,t),u.handleEvent.call(this,t)}};var P=I;var S={Backspace:"Backspace",Clear:"Clear",Down:"ArrowDown",End:"End",Enter:"Enter",Escape:"Escape",Home:"Home",Left:"ArrowLeft",PageDown:"PageDown",PageUp:"PageUp",Right:"ArrowRight",Space:" ",Tab:"Tab",Up:"ArrowUp"};const k=0,L=1,x=2,O=3,A=4,T=5,C=6,H=8,q=10,D=11,B=12,U=function(t,e){const{key:o}=t;return e||o!==S.Enter&&o!==S.Space?o===S.Down?A:o===S.Up?C:o===S.Home?x:o===S.End?O:o===S.Escape?k:o===S.Enter?L:o===S.Space?H:o===S.Tab?q:o===S.Left?D:o===S.Right?B:void 0:T},V=function(t,e,o){switch(o){case x:return 0;case O:return e;case C:case D:return Math.max(0,t-1);case A:case B:return Math.min(e,t+1);default:return t}};const _=function(t){this.elem=t,this.combobox=this.elem.querySelector('[role="combobox"]'),this.options=this.elem.querySelector('[role="listbox"]'),this.arrayOptions=Array.from(this.options.children),this.input=this.elem.querySelector("input"),this.open=!1,this.optionSelectedIndex=0,this.optionFocusedIndex=0},K={init:function(){this.combobox.addEventListener("blur",this),this.combobox.addEventListener("click",this),this.combobox.addEventListener("keydown",this),this.options.addEventListener("mousedown",this),this.arrayOptions.forEach(t=>{t.addEventListener("click",this)})},toogleOptions:function(t){t.stopPropagation(),this.arrayOptions.length<1||(this.open=!this.open,this.combobox.setAttribute("aria-expanded",""+this.open),this.open?this.openOptions():this.closeOptions())},openOptions:function(){this.elem.classList.add("is-active");const t=this.arrayOptions[this.optionSelectedIndex].getAttribute("id");this.combobox.setAttribute("aria-activedescendant",""+t),this.onOptionFocused(this.optionSelectedIndex)},closeOptions:function(){this.elem.classList.remove("is-active"),this.combobox.setAttribute("aria-activedescendant","")},resetCombobox:function(){this.combobox.setAttribute("aria-activedescendant",""),this.combobox.textContent="",this.input.value="",this.arrayOptions[this.optionSelectedIndex].setAttribute("aria-selected","false"),this.arrayOptions[this.optionFocusedIndex].classList.remove("is-focus"),this.optionSelectedIndex=0,this.optionFocusedIndex=0},onOptionChecked:function(t){const e=t.target.getAttribute("role"),o=this.arrayOptions[this.optionSelectedIndex],r="option"===e?t.target:this.arrayOptions[this.optionFocusedIndex];if(o&&o.setAttribute("aria-selected","false"),r)if(r.setAttribute("aria-selected","true"),this.combobox.textContent=r.textContent,this.input.value=r.textContent,"function"==typeof window.CustomEvent)this.input.dispatchEvent(new Event("input"));else{const t=document.createEvent("Event");t.initEvent("input",!0,!1),this.input.dispatchEvent(t)}const s=this.arrayOptions.findIndex(t=>t===r);this.optionSelectedIndex=s},onKeydown:function(t){const e=this.arrayOptions.length-1,o=U(t,this.open);switch(o){case A:case O:case x:case C:return t.preventDefault(),this.onOptionFocused(V(this.optionFocusedIndex,e,o));case H:return t.preventDefault(),this.toogleOptions(t);case L:return t.preventDefault(),this.onOptionChecked(t),this.toogleOptions(t);case k:case T:return t.preventDefault(),this.toogleOptions(t);case q:return this.closeOptions()}},onComboboxBlur:function(t){this.ignoreBlur?this.ignoreBlur=!1:this.open&&this.toogleOptions(t)},onListboxMouseDown:function(){this.ignoreBlur=!0},onOptionFocused:function(t){const e=this.arrayOptions[this.optionFocusedIndex],o=this.arrayOptions[t];var r;this.combobox.setAttribute("aria-activedescendant",""+o.id),this.open&&((r=this.options)&&r.clientHeight<r.scrollHeight)&&function(t,e){const{offsetTop:o}=t;e.scrollTo(0,o)}(this.arrayOptions[t],this.options),e&&e.classList.remove("is-focus"),o&&o.classList.add("is-focus"),this.optionFocusedIndex=t},destroy:function(){this.combobox.removeEventListener("blur",this),this.combobox.removeEventListener("click",this),this.combobox.removeEventListener("keydown",this),this.options.removeEventListener("mousedown",this),this.arrayOptions.forEach(t=>{t.removeEventListener("click",this)}),this.arrayOptions[this.optionFocusedIndex].classList.remove("is-focus")},handleEvent:function(t){switch(t.type){case"click":const e=t.target.getAttribute("role");if("combobox"===e)return this.toogleOptions(t);if("option"===e)return t.stopPropagation(),this.onOptionChecked(t),this.toogleOptions(t);break;case"blur":return this.onComboboxBlur(t);case"keydown":return this.onKeydown(t);case"mousedown":return this.onListboxMouseDown()}}},z=_;z.prototype={constructor:_,init:K.init,toogleOptions:K.toogleOptions,openOptions:K.openOptions,closeOptions:K.closeOptions,resetCombobox:K.resetCombobox,onOptionChecked:K.onOptionChecked,onKeydown:K.onKeydown,onComboboxBlur:K.onComboboxBlur,onListboxMouseDown:K.onListboxMouseDown,onOptionFocused:K.onOptionFocused,destroy:K.destroy,handleEvent:K.handleEvent};var R=z;const N=function(...t){a.a.call(this,...t),this.popupOpen=!1};N.prototype={constructor:N,getFormData:a.b.getFormData,sendForm:a.b.sendForm,checkInputValidity:a.b.checkInputValidity,showSubmitting:a.b.showSubmitting,submitForm:a.b.submitForm,setFormPopupMessage:u.setFormPopupMessage,toogleFormPopup:u.toogleFormPopup,focusTrapPopup:u.focusTrapPopup,keydownPopup:u.keydownPopup,statePopupControls:u.statePopupControls,debounceInput:a.b.debounceInput,setListeners:function(){a.b.setListeners.call(this),u.setFormPopupListeners.call(this),this.controller.signal.addEventListener("abort",()=>{console.log("*********** abort *************")})},init:function(){this.controller=new AbortController,a.b.init.call(this);const t=this.form.querySelectorAll(".combobox");this.combobox=[],t.forEach(t=>{this.combobox.push(new R(t)),this.combobox[this.combobox.length-1].init()})},destroyForm:function(){this.combobox.forEach(t=>{t.destroy()}),a.b.destroyForm.call(this),u.destroyFormPopup.call(this)},onSuccessHandler:function(t){a.b.onSuccessHandler.call(this,t),this.popup=this.form.querySelector('[data-form-popup="success"]'),this.toogleFormPopup("form successfully send"),this.focusTrapPopup(this.popup)},onErrorHandler:function(t){a.b.onErrorHandler.call(this),this.popup=this.form.querySelector('[data-form-popup="error"]'),this.toogleFormPopup(t),this.focusTrapPopup(this.popup)},resendForm:function(){this.popupOpen&&this.toogleFormPopup(),a.b.resendForm.call(this)},resetForm:function(){this.popupOpen&&this.toogleFormPopup(),this.combobox.forEach(t=>{t.resetCombobox()}),a.b.resetForm.call(this)},abortSubmit:function(){this.sending&&(clearTimeout(this.timeout),this.controller.abort(),this.sending=!1,this.showSubmitting())},handleEvent:function(t){a.b.handleEvent.call(this,t),u.handleEvent.call(this,t)}};var $=N;function j(t,e,o,r){const s=r.bind(null,e,o),i=document.getElementById("modal-trade-"+t),n=i.querySelector("#modal-"+t),a=Array.from(document.querySelectorAll(`[data-modal='${t}']`));return new E(i,n,a,s)}const J=j("coin",p.a,["amount"],P),Y=j("card",p.a,["card","currency","amount"],$),G={init:function(){this.btn.addEventListener("mousedown",this),this.btn.addEventListener("click",this),this.menu.addEventListener("blur",this),this.menu.addEventListener("keydown",this),this.arrayActions.forEach(t=>{t.addEventListener("click",this)})},toogleMenu:function(t){t.stopPropagation(),this.open=!this.open,this.btn.setAttribute("aria-expanded",this.open),this.open?this.openMenu():this.closeMenu()},openMenu:function(){this.menu.setAttribute("aria-hidden","false"),this.menu.focus(),this.focusAction(0)},closeMenu:function(){this.menu.setAttribute("aria-activedescendant",""),this.menu.setAttribute("aria-hidden","true")},selectAction:function(t){if("menu"===t.target.getAttribute("role")){const e=t.target.getAttribute("aria-activedescendant");t.target.querySelector("#"+e).click()}},focusAction:function(t){const e=this.arrayActions[t].getAttribute("id");this.menu.setAttribute("aria-activedescendant",""+e),this.arrayActions[this.actionFocusedIndex].classList.remove("is-focus"),this.arrayActions[t].classList.add("is-focus"),this.actionFocusedIndex=t},blurMenu:function(t){this.ignoreBlur?this.ignoreBlur=!1:this.open&&this.toogleMenu(t)},mousedownMenu:function(){this.ignoreBlur=this.open},destroy:function(){this.btn.removeEventListener("mousedown",this),this.btn.removeEventListener("click",this),this.menu.removeEventListener("blur",this),this.menu.removeEventListener("keydown",this),this.arrayActions.forEach(t=>{t.removeEventListener("click",this)})},keydownMenu:function(t){const e=this.arrayActions.length-1,o=U(t,this.open);switch(o){case A:case C:case x:case O:return t.preventDefault(),this.focusAction(V(this.actionFocusedIndex,e,o));case H:return t.preventDefault(),this.btn.focus();case L:return t.preventDefault(),this.selectAction(t);case k:case q:case T:return t.preventDefault(),this.toogleMenu(t)}},handleEvent:function(t){switch(t.type){case"click":return"menuitem"===t.target.getAttribute("role")?this.selectAction(t):this.toogleMenu(t);case"blur":return this.blurMenu(t);case"keydown":return this.keydownMenu(t);case"mousedown":return this.mousedownMenu()}}},Q=function(t){this.btn=t.querySelector("[aria-controls]"),this.menu=t.querySelector('[role="menu"]'),this.arrayActions=Array.from(this.menu.children),this.open=!1,this.actionFocusedIndex=0};Q.prototype={constructor:Q,init:G.init,toogleMenu:G.toogleMenu,openMenu:G.openMenu,closeMenu:G.closeMenu,selectAction:G.selectAction,focusAction:G.focusAction,blurMenu:G.blurMenu,mousedownMenu:G.mousedownMenu,destroy:G.destroy,keydownMenu:G.keydownMenu,handleEvent:G.handleEvent};var W=new Q(document.getElementById("menu-action-sell"));const X={init:function(){this.btn.addEventListener("click",this)},openMenu:function(){this.btn.setAttribute("aria-expanded","true")},closeMenu:function(){this.btn.setAttribute("aria-expanded","false")},toogleMenu:function(){this.open?this.closeMenu():this.openMenu(),this.open=!this.open},destroy:function(){this.btn.removeEventListener("click",this)},handleEvent:function(t){switch(t.type){case"click":return this.toogleMenu()}}},Z=function(t){this.btn=document.querySelector(`[aria-controls='${t}']`),this.menu=document.querySelector("#"+t),this.open=!1};Z.prototype={constructor:Z,init:X.init,openMenu:X.openMenu,closeMenu:X.closeMenu,toogleMenu:X.toogleMenu,destroy:X.destroy,handleEvent:X.handleEvent};new Z("menu").init(),W.init(),M.init(),J.init(),Y.init()}},[[13,0]]]);