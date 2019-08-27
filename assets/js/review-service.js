!function(){"use strict";var e="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{};function t(){throw new Error("setTimeout has not been defined")}function n(){throw new Error("clearTimeout has not been defined")}var r=t,o=n;function i(e){if(r===setTimeout)return setTimeout(e,0);if((r===t||!r)&&setTimeout)return r=setTimeout,setTimeout(e,0);try{return r(e,0)}catch(t){try{return r.call(null,e,0)}catch(t){return r.call(this,e,0)}}}"function"==typeof e.setTimeout&&(r=setTimeout),"function"==typeof e.clearTimeout&&(o=clearTimeout);var a,s=[],c=!1,u=-1;function l(){c&&a&&(c=!1,a.length?s=a.concat(s):u=-1,s.length&&f())}function f(){if(!c){var e=i(l);c=!0;for(var t=s.length;t;){for(a=s,s=[];++u<t;)a&&a[u].run();u=-1,t=s.length}a=null,c=!1,function(e){if(o===clearTimeout)return clearTimeout(e);if((o===n||!o)&&clearTimeout)return o=clearTimeout,clearTimeout(e);try{o(e)}catch(t){try{return o.call(null,e)}catch(t){return o.call(this,e)}}}(e)}}function d(e,t){this.fun=e,this.array=t}d.prototype.run=function(){this.fun.apply(null,this.array)};function p(){}var m=p,h=p,v=p,g=p,w=p,y=p,E=p;var _=e.performance||{},T=_.now||_.mozNow||_.msNow||_.oNow||_.webkitNow||function(){return(new Date).getTime()};var N=new Date;var b={nextTick:function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];s.push(new d(e,t)),1!==s.length||c||i(f)},title:"browser",browser:!0,env:{},argv:[],version:"",versions:{},on:m,addListener:h,once:v,off:g,removeListener:w,removeAllListeners:y,emit:E,binding:function(e){throw new Error("process.binding is not supported")},cwd:function(){return"/"},chdir:function(e){throw new Error("process.chdir is not supported")},umask:function(){return 0},hrtime:function(e){var t=.001*T.call(_),n=Math.floor(t),r=Math.floor(t%1*1e9);return e&&(n-=e[0],(r-=e[1])<0&&(n--,r+=1e9)),[n,r]},platform:"browser",release:{},config:{},uptime:function(){return(new Date-N)/1e3}};const O={development:{DOCUMENT_END_POINT:"https://data-intel-documents-dev.herokuapp.com/v1"}},k=b.env.NODE_ENV||"development";(()=>{if("development"===k){const e=O[k];Object.keys(e).forEach(t=>{b.env[t]=e[t]})}})(),document.getElementById("analyze-form").addEventListener("submit",function(e){e.preventDefault();const t=e.target[0];if(""===t.value)return t.classList.add("animated","shake"),void setTimeout(()=>{t.classList.remove("animated","shake")},1e3);const n=Object.assign({},{text:t.value});axios.post(`${b.env.DOCUMENT_END_POINT}/documents`,n).then(function(e){!function(e){const t=document.getElementById("upper-part-feedback"),n=document.createRange();n.selectNodeContents(t),n.deleteContents();let r=[];e.sentiment_analysis.sentence_list.forEach(t=>{t.segment_list.forEach(t=>{t.polarity_term_list.forEach(t=>{let n="NEU";"P"===t.score_tag||"P+"===t.score_tag?n="positive":"N"!==t.score_tag&&"N+"!==t.score_tag||(n="negative"),r.push({term:e.text.slice(parseInt(t.inip),parseInt(t.endp)+1),typeOfAspect:n}),t.sentimented_concept_list&&t.sentimented_concept_list.forEach(e=>{r.push({term:e.variant,typeOfAspect:"aspect"})})}),t.sentimented_concept_list&&t.sentimented_concept_list.forEach(e=>{r.push({term:e.variant,typeOfAspect:"aspect"})}),t.sentimented_entity_list&&t.sentimented_entity_list.forEach(e=>{r.push({term:e.form,typeOfAspect:"aspect"})})})}),console.log("aspectSerializer",r),e.text.split(" ").forEach(e=>{const n=document.createElement("p"),o=document.createTextNode(e);n.appendChild(o),r.forEach(t=>{t.term.toUpperCase()===e.replace(/[.,;_?!%$#]/g,"").toUpperCase()&&"NEU"!==t.term&&n.classList.add(t.typeOfAspect)}),t.appendChild(n)})}(e.data),document.getElementById("feedback-text").classList.remove("hidden"),document.getElementById("feedback-text").classList.add("animated","fadeInUp"),t.value=""}).catch(function(e){throw new Error(e)})})}();
//# sourceMappingURL=review-service.js.map