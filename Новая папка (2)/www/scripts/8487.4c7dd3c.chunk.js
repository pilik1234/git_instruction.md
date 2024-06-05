(self.webpackChunkasf_ui=self.webpackChunkasf_ui||[]).push([[8487],{234:(t,e,s)=>{"use strict";function n(t){const e=document.implementation.createHTMLDocument().createElement("html");return e.innerHTML=t,e}s.d(e,{A:()=>n})},3590:(t,e,s)=>{"use strict";s.d(e,{A:()=>m});var n=s(5896);const a=new Map,i=new Map,r=/\[[^\]]+]/g;async function o(t){if(i.has(t))return i.get(t);const e=n.Jt(`structure/${encodeURIComponent(t)}`);return i.set(t,e),e}async function c(t){const e=function(t){const e=t.match(r);return e?e.map((t=>t.slice(1,t.length-1))):[]}(t);switch(t.split("`")[0]){case"System.Boolean":return{type:"boolean"};case"System.String":case"System.Guid":return{type:"string"};case"System.Byte":return{type:"byte"};case"System.UInt32":return{type:"uint32"};case"System.UInt16":return{type:"uint16"};case"System.Collections.Generic.HashSet":case"System.Collections.Immutable.ImmutableHashSet":return{type:"hashSet",values:await c(e[0])};case"System.Collections.Immutable.ImmutableList":return{type:"list",values:await c(e[0])};case"System.UInt64":return{type:"uint64"};case"System.Collections.Generic.Dictionary":case"System.Collections.Immutable.ImmutableDictionary":return{type:"dictionary",key:await c(e[0]),value:await c(e[1])};case"System.Nullable":const{type:s}=await c(e[0]);return{type:s,nullable:!0};default:return l(t)}}function u(t){const e={};return Object.keys(t).forEach((s=>{e[s]=parseInt(t[s],10)})),e}async function l(t){"ArchiSteamFarm.Steam.Storage.BotConfig"===t&&o(t);const e=await async function(t){if(a.has(t))return a.get(t);const e=n.Jt(`type/${encodeURIComponent(t)}`);return a.set(t,e),e}(t);switch(e.Properties.BaseType){case"System.Object":return async function(t,e){const s={type:"object",body:{}},[n,a]=await Promise.all([o(t),Promise.all(Object.keys(e.Body).map((async t=>({param:t,type:await c(e.Body[t])}))))]);return a.forEach((t=>{const{param:a,type:i}=t,r="System.UInt64"!==e.Body[a]?a:`s_${a}`;s.body[a]={defaultValue:n[a],paramName:r,param:a,...i}})),s}(t,e);case"System.Enum":return{type:(e.Properties.CustomAttributes||[]).includes("System.FlagsAttribute")?"flag":"enum",values:u(e.Body)};default:return{type:"unknown",typeDefinition:e,structureDefinition:await o(t)}}}const m=l},3367:(t,e,s)=>{"use strict";s.d(e,{A:()=>i});var n=s(5896),a=s(9118);async function i(t,e,s){const i=await async function(t,e,s){const i=(0,a.A)(s),r=`www/github/wiki/page/${t}${i}`;if(!e)return r;if(e>=(await n.Jt("www/github/release")).Version)return r;const o=await n.Jt(`www/github/release/${e}`),c=new Date(o.ReleasedAt),u=await n.Jt(`www/github/wiki/history/${t}${i}`),l=Object.entries(u).map((t=>({id:t[0],releaseTime:new Date(t[1])})));l.sort(((t,e)=>new Date(e.releaseTime)-new Date(t.releaseTime)));const m=l.find((({releaseTime:t})=>t<c));return m?`${r}?revision=${m.id}`:r}(t,e,s);return n.Jt(i)}},9118:(t,e,s)=>{"use strict";function n(t){return"en-US"!==t?`-${t}`:""}s.d(e,{A:()=>n})},6767:(t,e,s)=>{"use strict";s.d(e,{A:()=>o});var n=s(3367),a=s(9118),i=s(2822),r=s(234);async function o(t,e){const s=i.Jt(`cache:parameter-descriptions:${e}`);if(s){const{timestamp:t,descriptions:e}=s;if(t>Date.now()-216e5)return e}const o={},u=await(0,n.A)("Configuration",t,e),l=(0,r.A)(u);return Array.from(l.querySelectorAll("h3 > code")).forEach((t=>{const s=t.innerText,n=[];let i=t.parentElement.parentElement.nextElementSibling;for(;i&&"hr"!==i.tagName.toLowerCase();)c(i.querySelectorAll('a[href^="#"]'),"Configuration",(0,a.A)(e)),n.push(i.outerHTML),i=i.nextElementSibling;o[s]=n.join(" ")})),i.hZ(`cache:parameter-descriptions:${e}`,{timestamp:Date.now(),descriptions:o}),o}function c(t,e,s){t.forEach((t=>{t&&(t.setAttribute("href",`https://github.com/JustArchiNET/ArchiSteamFarm/wiki/${e}${s}${t.hash}`),t.setAttribute("target","_blank"))}))}},5079:(t,e,s)=>{var n=s(1601),a=s(6314)(n);a.push([t.id,".form-item__code[data-v-00642a38]{padding:0 1em 1em}",""]),t.exports=a},8487:(t,e,s)=>{"use strict";s.r(e),s.d(e,{default:()=>u});var n=function(){var t=this,e=t._self._c;return t.label&&t.bot?e("main",{staticClass:"main-container main-container--bot-profile"},[e("h2",{staticClass:"title"},[t._v(t._s(t.$t("encrypt")))]),t._v(" "),t.loading?[e("h3",{staticClass:"subtitle"},[e("FontAwesomeIcon",{attrs:{icon:"spinner",size:"lg",spin:""}})],1)]:[e("div",{staticClass:"form-item"},[e("ConfigEditor",{attrs:{fields:t.fields,model:t.config,deleteDefaultValues:!1}}),t._v(" "),e("div",{staticClass:"form-item__code"},[e("div",[e("label",{staticClass:"form-item__label",attrs:{for:"password"}},[t._v(t._s(t.label))]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],staticClass:"form-item__input",attrs:{id:"password",type:"password",autocomplete:"new-password"},domProps:{value:t.password},on:{keydown:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.savePassword.apply(null,arguments)},input:function(e){e.target.composing||(t.password=e.target.value)}}})]),t._v(" "),e("div",{staticClass:"form-item__buttons form-item__buttons--column"},[e("button",{directives:[{name:"tooltip",rawName:"v-tooltip",value:t.tooltip,expression:"tooltip"}],staticClass:"button button--helper",on:{click:t.switchInputType}},[t.inputHidden?e("FontAwesomeIcon",{attrs:{icon:"eye",size:"lg"}}):e("FontAwesomeIcon",{attrs:{icon:"eye-slash",size:"lg"}})],1)])]),t._v(" "),e("div",{staticClass:"form-item__buttons form-item__buttons--center"},[e("button",{staticClass:"button",attrs:{disabled:!t.password},on:{click:t.savePassword}},[t.saving?e("FontAwesomeIcon",{attrs:{icon:"spinner",spin:""}}):e("span",[t._v(t._s(t.$t("encrypt")))])],1),t._v(" "),e("button",{staticClass:"button",on:{click:function(e){return t.$router.back()}}},[t._v("\n          "+t._s(t.$t("cancel"))+"\n        ")])])],1)]],2):t._e()};n._withStripped=!0;var a=s(5353),i=s(9872),r=s(3590),o=s(6767);const c={name:"PasswordEncrypt",components:{ConfigEditor:i.A},data:()=>({password:"",inputHidden:!0,config:{},loading:!0,fields:[],saving:!1}),computed:{...(0,a.L8)({version:"asf/version"}),label(){return this.$route.params.label},key(){return this.$route.params.label.startsWith("Steam")?"PasswordFormat":`${this.$route.params.label}Format`},bot(){return this.$store.getters["bots/bot"](this.$route.params.bot)},tooltip(){return this.inputHidden?this.$t("input-switch-show"):this.$t("input-switch-hide")}},async created(){this.label&&this.bot||this.$router.replace({name:"bots"});const[{body:t},{[this.bot.name]:{BotConfig:e}},s]=await Promise.all([(0,r.A)("ArchiSteamFarm.Steam.Storage.BotConfig"),this.$http.get(`bot/${this.bot.name}`),(0,o.A)(this.version,this.$i18n.locale)]);Object.keys(e).forEach((t=>{t.startsWith("s_")&&delete e[t.substr(2)]})),this.config={[this.key]:e[this.key]};const n=s[this.key]?s[this.key].replace(/<a href="/g,'<a target="_blank" rel="noreferrer noopener" href="'):this.$t("description-not-found");this.fields=[{description:n,...t[this.key]}],this.loading=!1},methods:{switchInputType(){this.inputHidden=!this.inputHidden;const t=document.getElementById("password");"password"===t.getAttribute("type")?t.setAttribute("type","text"):t.setAttribute("type","password")},async savePassword(){if(!this.saving){this.saving=!0;try{const t={steamPassword:await this.$http.post("asf/encrypt",{CryptoMethod:this.config[this.key],StringToEncrypt:this.password}),passwordFormat:this.config[this.key]};this.$info(this.$t("encrypt-success")),this.$router.push({name:"bot-config",params:t})}finally{this.saving=!1}}}}};s(5368);const u=(0,s(4486).A)(c,n,[],!1,null,"00642a38",null).exports},5368:(t,e,s)=>{var n=s(5079);n.__esModule&&(n=n.default),"string"==typeof n&&(n=[[t.id,n,""]]),n.locals&&(t.exports=n.locals),(0,s(534).A)("2f73eb26",n,!1,{})}}]);