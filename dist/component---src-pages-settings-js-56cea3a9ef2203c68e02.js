(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{pM26:function(e,t,a){"use strict";a.r(t);a("f3/d");var n=a("q1tI"),o=a.n(n),c=a("Wbzz"),i=a("vOnD"),r=a("9CUm"),l=a("qi2s"),d=a("kKAo"),s=a("cVXz"),p=a("PsDL"),h=a("csfp"),m=a("k1TG"),u=a("aXB2"),g=(a("17x9"),a("iuhU")),b=a("H2TA"),y=a("ye/S"),k=a("NqtD"),f=a("8j0Q"),w=a("yCxk"),v=a("EHdT"),x=n.forwardRef((function(e,t){var a=e.autoFocus,o=e.checked,c=e.checkedIcon,i=e.classes,r=e.className,l=e.defaultChecked,d=e.disabled,s=e.icon,h=e.id,b=e.inputProps,y=e.inputRef,k=e.name,x=e.onBlur,E=e.onChange,C=e.onFocus,O=e.readOnly,S=e.required,j=e.tabIndex,I=e.type,N=e.value,_=Object(u.a)(e,["autoFocus","checked","checkedIcon","classes","className","defaultChecked","disabled","icon","id","inputProps","inputRef","name","onBlur","onChange","onFocus","readOnly","required","tabIndex","type","value"]),$=Object(w.a)({controlled:o,default:Boolean(l),name:"SwitchBase"}),B=Object(f.a)($,2),z=B[0],L=B[1],T=Object(v.a)(),R=d;T&&void 0===R&&(R=T.disabled);var F="checkbox"===I||"radio"===I;return n.createElement(p.a,Object(m.a)({component:"span",className:Object(g.a)(i.root,r,z&&i.checked,R&&i.disabled),disabled:R,tabIndex:null,role:void 0,onFocus:function(e){C&&C(e),T&&T.onFocus&&T.onFocus(e)},onBlur:function(e){x&&x(e),T&&T.onBlur&&T.onBlur(e)},ref:t},_),n.createElement("input",Object(m.a)({autoFocus:a,checked:o,defaultChecked:l,className:i.input,disabled:R,id:F&&h,name:k,onChange:function(e){var t=e.target.checked;L(t),E&&E(e,t)},readOnly:O,ref:y,required:S,tabIndex:j,type:I,value:N},b)),z?c:s)})),E=Object(b.a)({root:{padding:9},checked:{},disabled:{},input:{cursor:"inherit",position:"absolute",opacity:0,width:"100%",height:"100%",top:0,left:0,margin:0,padding:0,zIndex:1}},{name:"PrivateSwitchBase"})(x),C=n.forwardRef((function(e,t){var a=e.classes,o=e.className,c=e.color,i=void 0===c?"secondary":c,r=e.edge,l=void 0!==r&&r,d=e.size,s=void 0===d?"medium":d,p=Object(u.a)(e,["classes","className","color","edge","size"]),h=n.createElement("span",{className:a.thumb});return n.createElement("span",{className:Object(g.a)(a.root,o,{start:a.edgeStart,end:a.edgeEnd}[l],"small"===s&&a["size".concat(Object(k.a)(s))])},n.createElement(E,Object(m.a)({type:"checkbox",icon:h,checkedIcon:h,classes:{root:Object(g.a)(a.switchBase,a["color".concat(Object(k.a)(i))]),input:a.input,checked:a.checked,disabled:a.disabled},ref:t},p)),n.createElement("span",{className:a.track}))})),O=Object(b.a)((function(e){return{root:{display:"inline-flex",width:58,height:38,overflow:"hidden",padding:12,boxSizing:"border-box",position:"relative",flexShrink:0,zIndex:0,verticalAlign:"middle"},edgeStart:{marginLeft:-8},edgeEnd:{marginRight:-8},switchBase:{position:"absolute",top:0,left:0,zIndex:1,color:"light"===e.palette.type?e.palette.grey[50]:e.palette.grey[400],transition:e.transitions.create(["left","transform"],{duration:e.transitions.duration.shortest}),"&$checked":{transform:"translateX(20px)"},"&$disabled":{color:"light"===e.palette.type?e.palette.grey[400]:e.palette.grey[800]},"&$checked + $track":{opacity:.5},"&$disabled + $track":{opacity:"light"===e.palette.type?.12:.1}},colorPrimary:{"&$checked":{color:e.palette.primary.main,"&:hover":{backgroundColor:Object(y.b)(e.palette.primary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"&$disabled":{color:"light"===e.palette.type?e.palette.grey[400]:e.palette.grey[800]},"&$checked + $track":{backgroundColor:e.palette.primary.main},"&$disabled + $track":{backgroundColor:"light"===e.palette.type?e.palette.common.black:e.palette.common.white}},colorSecondary:{"&$checked":{color:e.palette.secondary.main,"&:hover":{backgroundColor:Object(y.b)(e.palette.secondary.main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"&$disabled":{color:"light"===e.palette.type?e.palette.grey[400]:e.palette.grey[800]},"&$checked + $track":{backgroundColor:e.palette.secondary.main},"&$disabled + $track":{backgroundColor:"light"===e.palette.type?e.palette.common.black:e.palette.common.white}},sizeSmall:{width:40,height:24,padding:7,"& $thumb":{width:16,height:16},"& $switchBase":{padding:4,"&$checked":{transform:"translateX(16px)"}}},checked:{},disabled:{},input:{left:"-100%",width:"300%"},thumb:{boxShadow:e.shadows[1],backgroundColor:"currentColor",width:20,height:20,borderRadius:"50%"},track:{height:"100%",width:"100%",borderRadius:7,zIndex:-1,transition:e.transitions.create(["opacity","background-color"],{duration:e.transitions.duration.shortest}),backgroundColor:"light"===e.palette.type?e.palette.common.black:e.palette.common.white,opacity:"light"===e.palette.type?.38:.3}}}),{name:"MuiSwitch"})(C),S=a("jjAL"),j=a("LYUY"),I=Object(j.a)(o.a.createElement("path",{d:"M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z"}),"ArrowBack"),N=a("sOP0"),_=i.c.div.withConfig({displayName:"settings__StyledWrapper",componentId:"sc-11kxncr-0"})(["width:100%;margin-top:50px;"]),$=i.c.div.withConfig({displayName:"settings__Header",componentId:"sc-11kxncr-1"})(["position:fixed;top:0;display:flex;align-items:center;height:50px;width:100%;background-color:",";border-bottom:solid 1px ",";span{font-size:1.6rem;}"],(function(e){return e.theme.colors.dark}),(function(e){return e.theme.colors.white})),B=Object(i.c)(c.Link).withConfig({displayName:"settings__BackButtonContainer",componentId:"sc-11kxncr-2"})(["cursor:pointer;"]),z=Object(i.c)(I).withConfig({displayName:"settings__BackButton",componentId:"sc-11kxncr-3"})(["color:",";"],(function(e){return e.theme.colors.lightBlue})),L=i.c.div.withConfig({displayName:"settings__SettingsContainer",componentId:"sc-11kxncr-4"})(["width:100%;display:flex;flex-direction:column;align-items:center;"]),T=Object(i.c)(d.a).withConfig({displayName:"settings__Row",componentId:"sc-11kxncr-5"})(["display:flex;align-items:center;justify-content:space-between;width:100%;max-width:550px;padding:10px;"]),R=i.c.div.withConfig({displayName:"settings__SettingName",componentId:"sc-11kxncr-6"})(["font-size:1.4rem;margin-right:10px;"]),F=Object(i.c)(s.a).withConfig({displayName:"settings__StyledSelect",componentId:"sc-11kxncr-7"})(["&&&{font-size:1.4rem;}margin-right:5px;"]);t.default=function(){var e=Object(l.c)(),t=e.settings,a=e.dispatch,n=Object(N.a)().speak;return o.a.createElement(_,null,o.a.createElement(r.a,{title:"Settings"}),o.a.createElement($,null,o.a.createElement(B,{to:"/"},o.a.createElement(p.a,{"aria-label":"back to overview"},o.a.createElement(z,{fontSize:"large"}))),o.a.createElement("span",null,"Settings")),o.a.createElement(L,null,o.a.createElement(T,null,o.a.createElement(R,null,"Vibrations"),o.a.createElement(h.a,{open:!t.vibrations,title:"Vibrate on start/end of the exercise",placement:"left-end"},o.a.createElement(O,{checked:t.vibrations,onChange:function(){a({type:l.a.TOGGLE_VIBRATIONS})},disabled:"undefined"!=typeof window&&!window.navigator&&!window.navigator.vibrate}))),o.a.createElement(T,null,o.a.createElement(R,null,"Voice synth:"),o.a.createElement(h.a,{open:!t.speechSynth.supported,title:"Not supported in your browser",placement:"left-end"},o.a.createElement(O,{checked:t.speechSynth.enabled,onChange:function(){a({type:l.a.TOGGLE_TTS})},disabled:!t.speechSynth.supported||!t.speechSynth.voices.length}))),t.speechSynth.enabled&&t.speechSynth.voices.length>0&&o.a.createElement(T,null,o.a.createElement(R,null,"Language of speech:"),o.a.createElement(F,{value:t.speechSynth.selectedVoiceIndex,onChange:function(e){a({type:l.a.SET_SPEECH_SYNTH_SELECTED_VOICE_INDEX,payload:e.target.value}),n({text:"I will be telling you the exercise name",voice:t.speechSynth.voices[e.target.value]})}},t.speechSynth.voices.map((function(e,t){return o.a.createElement(S.a,{key:e.voiceURI,value:t},e.name)}))))))}}}]);
//# sourceMappingURL=component---src-pages-settings-js-56cea3a9ef2203c68e02.js.map