!function(e){var t={};function r(s){if(t[s])return t[s].exports;var a=t[s]={i:s,l:!1,exports:{}};return e[s].call(a.exports,a,a.exports,r),a.l=!0,a.exports}r.m=e,r.c=t,r.d=function(e,t,s){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:s})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var s=Object.create(null);if(r.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)r.d(s,a,function(t){return e[t]}.bind(null,a));return s},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=0)}([function(e,t,r){"use strict";r.r(t);var s=function(e){document.getElementById("sing-in-form").addEventListener("submit",t=>{t.preventDefault();let r=!1;const s=t.target[0],a=t.target[1],n=t.target[2];if(s.offsetParent.classList.remove("has-error"),a.offsetParent.classList.remove("has-error"),n.offsetParent.classList.remove("has-error"),""===s.value&&(s.offsetParent.classList.add("has-error"),r=!0),e(s.value)||(s.offsetParent.classList.add("has-error"),r=!0),""===a.value&&(a.offsetParent.classList.add("has-error"),r=!0),""===n.value&&(n.offsetParent.classList.add("has-error"),r=!0),r)return;if(a.value!==n.value)return a.offsetParent.classList.add("has-error"),void n.offsetParent.classList.add("has-error");const o=Object.assign({},{email:s.value,password:a.value});axios.post(`${authServerBaseUrl}/users`,o).then(function(e){e.data.id&&window.open(`${adminPaneAuthUrl}?id=${e.data.id}`,"_self").close()}).catch(function(e){throw s.offsetParent.classList.add("has-error"),a.offsetParent.classList.add("has-error"),n.offsetParent.classList.add("has-error"),new Error(e)})})};var a=function(){document.getElementById("analyze-form").addEventListener("submit",function(e){e.preventDefault();const t=e.target[0];if(""===t.value)return t.classList.add("animated","shake"),void setTimeout(()=>{t.classList.remove("animated","shake")},1e3);const r=Object.assign({},{text:t.value});axios.post(`${documentServerBaseUrl}/documents`,r).then(function(e){!function(e){const t=document.getElementById("upper-part-feedback"),r=document.createRange();r.selectNodeContents(t),r.deleteContents();let s=[];e.sentiment_analysis.sentence_list.forEach(t=>{t.segment_list.forEach(t=>{t.polarity_term_list.forEach(t=>{let r="NEU";"P"===t.score_tag||"P+"===t.score_tag?r="positive":"N"!==t.score_tag&&"N+"!==t.score_tag||(r="negative"),s.push({term:e.text.slice(parseInt(t.inip),parseInt(t.endp)+1),typeOfAspect:r}),t.sentimented_concept_list&&t.sentimented_concept_list.forEach(e=>{s.push({term:e.variant,typeOfAspect:"aspect"})})}),t.sentimented_concept_list&&t.sentimented_concept_list.forEach(e=>{s.push({term:e.variant,typeOfAspect:"aspect"})}),t.sentimented_entity_list&&t.sentimented_entity_list.forEach(e=>{s.push({term:e.form,typeOfAspect:"aspect"})})})}),e.text.split(" ").forEach(e=>{const r=document.createElement("p"),a=document.createTextNode(e);r.appendChild(a),s.forEach(t=>{t.term.toUpperCase()===e.replace(/[.,;_?!%$#]/g,"").toUpperCase()&&"NEU"!==t.term&&r.classList.add(t.typeOfAspect)}),t.appendChild(r)})}(e.data),document.getElementById("feedback-text").classList.remove("hidden"),document.getElementById("feedback-text").classList.add("animated","fadeInUp"),t.value=""}).catch(function(e){throw new Error(e)})})};function n(e){return/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e)}(function(e){document.getElementById("login-form").addEventListener("submit",t=>{t.preventDefault();let r=!1;const s=t.target[0],a=t.target[1];s.offsetParent.classList.remove("has-error"),a.offsetParent.classList.remove("has-error"),""===s.value&&(s.offsetParent.classList.add("has-error"),r=!0),e(s.value)||(s.offsetParent.classList.add("has-error"),r=!0),""===a.value&&(a.offsetParent.classList.add("has-error"),r=!0),r||function(e,t,r){axios.post(`${authServerBaseUrl}/auth/token`,e).then(function(e){e.data.token&&window.open(`${adminPaneAuthUrl}?token=${e.data.token}`,"_self").close()}).catch(function(e){throw t.offsetParent.classList.add("has-error"),r.offsetParent.classList.add("has-error"),new Error(e)})}(Object.assign({},{email:s.value,password:a.value}),s,a)})})(n),s(n),a()}]);