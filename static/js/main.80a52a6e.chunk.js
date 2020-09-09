(this.webpackJsonpcovidcal=this.webpackJsonpcovidcal||[]).push([[0],{33:function(e,t,n){e.exports=n(50)},38:function(e,t,n){},50:function(e,t,n){"use strict";n.r(t);var a,o=n(2),i=n.n(o),r=n(16),s=n.n(r),c=(n(38),n(12)),u=n(11),l=n(7),m=n(32),d=n(29),v=n(30),p=n(15);!function(e){e.LastCloseContact="Most Recent Close Contact",e.SymptomsStart="Illness Onset",e.PositiveTest="Most Recent Positive Test"}(a||(a={}));var f=["#91DADF","#96CCFF","#A463F2","#FF6300"],g=["bg-light-green","bg-light-blue","bg-light-purple","bg-orange"],E=n(31),b=n(54),h=n(51),S=n(52),y=n(53),x=n(6);function j(e,t){var n=Object(x.flow)(Object(x.map)((function(e){var t=function(e){var t=[e.covidEvents[a.SymptomsStart],e.covidEvents[a.PositiveTest]],n=Object(x.flow)(x.compact,Object(x.map)((function(e){return Object(b.a)(e,"M/dd/yyyy",new Date)})),Object(x.thru)((function(e){return Object(h.a)(e)})))(t),o=n&&Object(y.a)(n,10),i=e.noSymptomsFor24Hours?void 0:new Date,r=Object(x.flow)(x.compact,Object(x.thru)((function(e){return Object(S.a)(e)})))([o,i]);return[n,r]}(e),n=Object(p.a)(t,2),o=n[0],i=n[1];return Object(E.a)(i)?{person:e,startDate:o,endDate:i,infected:!0}:{person:e,startDate:new Date,endDate:new Date,infected:!1}})),Object(x.partition)((function(e){return e.infected})))(e),o=Object(p.a)(n,2),i=o[0],r=o[1].map((function(e){var n=e.person,o=Object(x.filter)((function(e){return e.quarantinedPerson===n.id&&e.exposed}))(t),r=Object(x.map)((function(e){var t;return null===(t=i.find((function(t){return t.person.id===e.contagiousPerson})))||void 0===t?void 0:t.startDate})),s=Object(x.map)((function(e){var t;return e.ongoing?null===(t=i.find((function(t){return t.person.id===e.contagiousPerson})))||void 0===t?void 0:t.endDate:Object(b.a)(e.date,"M/dd/yyyy",new Date)})),u=n.covidEvents[a.LastCloseContact],l=u?Object(b.a)(u,"M/dd/yyyy",new Date):void 0,m=Object(h.a)(Object(x.compact)([].concat(Object(c.a)(r(o)),[l]))),d=Object(S.a)(Object(x.compact)([].concat(Object(c.a)(s(o)),[l]))),v=Object(y.a)(d,14);return{person:n,startDate:m,endDate:v,infected:!1}}));return[].concat(Object(c.a)(i),Object(c.a)(r))}var O=n(55);function N(e){var t=e.membersState.get(),n=e.editingDateFieldState.get();return i.a.createElement("div",{className:"p-3"},i.a.createElement("div",{className:n?"ba bw2 b--light-yellow":""},i.a.createElement(m.a,{plugins:[d.a,v.a],initialView:"dayGridMonth",events:function(e,t){return j(e,t).map((function(e){return{classNames:["TODO"],title:e.person.name,start:e.startDate,end:e.endDate,color:f[e.person.id-1%f.length],textColor:"#000000"}}))}(t,e.inHouseExposureEvents),dateClick:function(t){if(e.editing&&n){var a=e.membersState.findIndex((function(t){return t.get().id===e.editing}));e.membersState[a].covidEvents[n].set(Object(O.a)(t.date,"MM/dd/yyyy"))}}})))}function w(e){var t=new RegExp("^([0-9][0-9]?/[0-9][0-9]?/)([0-9][0-9])$"),n=new RegExp("^[0-9][0-9]?/[0-9][0-9]?$");return i.a.createElement("div",{className:""},i.a.createElement("label",{htmlFor:"".concat(e.id,"-").concat(e.questionFieldName)},"Date ",i.a.createElement("span",{className:"f6 fw3"},"mm/dd/yyyy"),i.a.createElement("div",{role:"alert"},e.missing?i.a.createElement("span",{className:"f5 fw5 red"},"required"):e.invalid?i.a.createElement("span",{className:"f5 fw5 red"},"mm/dd/yyyy format required"):null)),i.a.createElement("input",{className:"form-control",value:e.questionFieldTextState.get(),name:e.questionFieldName,id:"".concat(e.id,"-").concat(e.questionFieldName),type:"text",onChange:function(t){e.onChange(t)},onFocus:e.onFocus,onBlur:function(){var a=e.questionFieldTextState.get();t.exec(a)&&(a=a.slice(0,-2)+"20"+a.slice(-2)),n.exec(a)&&(a+="/2020"),e.questionFieldTextState.set(a),e.onUnfocus()}}))}var F=n(25);function C(e){return i.a.createElement("div",{className:"custom-control custom-checkbox mb-3"},i.a.createElement("input",{className:"custom-control-input",checked:e.checked,id:"checkbox-".concat(e.id,"-").concat(e.questionText),type:"checkbox",onChange:e.onChange}),i.a.createElement("label",{className:"custom-control-label",htmlFor:"checkbox-".concat(e.id,"-").concat(e.questionText)},e.questionText),e.tooltip&&i.a.createElement(F.a,null,i.a.createElement(F.b,null,i.a.createElement("i",{"aria-hidden":"true",className:"ph2 f4 fas fa-question-circle link hover-dark-blue gray"})),i.a.createElement(F.c,null,i.a.createElement("div",{className:"f5 pa2 gray"},e.tooltip))))}function D(e){var t=e.inHouseExposureEventState.get(),n=t.exposed,a=t.ongoing;return i.a.createElement("div",{className:"mb-3"},i.a.createElement(C,{id:e.id,questionText:"I was exposed to ".concat(e.otherPerson.name),checked:n,onChange:function(){return e.inHouseExposureEventState.exposed.set((function(e){return!e}))}}),n&&i.a.createElement(C,{id:e.id,questionText:"My exposure to ".concat(e.otherPerson.name," is ongoing"),checked:a,onChange:function(){return e.inHouseExposureEventState.ongoing.set((function(e){return!e}))}}),n&&!a&&i.a.createElement(w,{id:e.id,questionFieldTextState:e.inHouseExposureEventState.date,questionFieldName:"crossExposure-".concat(e.index),onChange:function(t){return e.inHouseExposureEventState.date.set(t.target.value)},onFocus:function(){},onUnfocus:function(){},missing:t.dateMissing,invalid:t.dateInvalid}))}function P(e){return i.a.createElement(i.a.Fragment,null,e.meaningfulInHouseExposures.map((function(t,n){var a=e.relevantInHouseExposureEventsState.find((function(e){var n=e.get();return n.quarantinedPerson===t.id||n.contagiousPerson===t.id}));return a?i.a.createElement(i.a.Fragment,null,i.a.createElement(D,{key:e.id+"-"+n,id:e.id,index:n,otherPerson:t,inHouseExposureEventState:a}),i.a.createElement("hr",null)):i.a.createElement(i.a.Fragment,null)})))}function q(e){return Math.floor(Math.random()*Math.floor(e))}function k(e){return Boolean(e.covidEvents[a.PositiveTest]||e.covidEvents[a.SymptomsStart])}function T(e){var t=e.personState.get(),n=e.membersState.get(),o=e.personState.covidEvents,r=e.editingState.get(),s=e.inHouseExposureEventsState.filter((function(e){var n=e.get();return n.contagiousPerson===t.id||n.quarantinedPerson===t.id})),c=s.map((function(e){return e.get()})),u=Object(l.b)(Object.values(a).reduce((function(e,t){return e[t]=""!==o[t].get(),e}),{})),m=new RegExp("^[0-9][0-9]?/[0-9][0-9]?/[0-9][0-9][0-9][0-9]$"),d=Object(l.b)(Object.values(a).reduce((function(e,t){return e[t]=!1,e}),{})),v=Object(l.b)(Object.values(a).reduce((function(e,t){return e[t]=!1,e}),{})),f=u.get(),E=f[a.PositiveTest]||f[a.SymptomsStart];function b(e){return function(t){var n=t.target.checked;if(u[e].set(n),e===a.PositiveTest){var i=Boolean(n||f[a.SymptomsStart]);E!==i&&y(i)}else if(e===a.SymptomsStart){var r=Boolean(n||f[a.PositiveTest]);E!==r&&y(r)}n||o[e].set("")}}function h(n,a,r){return i.a.createElement(i.a.Fragment,null,i.a.createElement(C,{id:t.id,questionText:a,checked:u[n].get(),onChange:b(n),tooltip:r}),u[n].get()&&i.a.createElement(w,{id:t.id,questionFieldTextState:o[n],questionFieldName:n,onChange:S,onFocus:function(){return e.editingDateFieldState.set(n)},onUnfocus:function(){return e.editingDateFieldState.set(void 0)},missing:v[n].get(),invalid:d[n].get()}))}var S=function(e){var t=e.target.name,n=e.target.value;o[t].set(n)};function y(a){s.map((function(e){return e.set(l.a)}));var o=n.map((function(e){var n=k(e);if(t!==e&&a!==n)return{contagiousPerson:a?t.id:e.id,quarantinedPerson:a?e.id:t.id,exposed:!0,ongoing:!0,date:"",dateMissing:!1,dateInvalid:!1}}));e.inHouseExposureEventsState.merge(Object(x.compact)(o))}var j=n.filter((function(e){return t!==e&&E!==k(e)}));return i.a.createElement("div",{className:"card shadow-sm mb-2"},e.editingState.get()===t.id?i.a.createElement("div",{className:"p-2"},i.a.createElement("div",{className:"mb-3"},i.a.createElement("label",{htmlFor:"".concat(t.id,"-name")},"Name"),i.a.createElement("input",{className:"form-control",value:t.name,name:"name",id:"".concat(t.id,"-name"),type:"text",onChange:function(t){return e.personState.name.set(t.target.value)}})),i.a.createElement("div",{className:"mb-3"},h(a.LastCloseContact,"I have had close contact to someone presumed covid positive (outside the household)",i.a.createElement("div",null,"Someone is presumed covid positive if they show symptoms or have tested positive for the virus. Close contact means spending at least 15 minutes or more at one time within 6 feet of someone, with or without a face covering. If you have been exposed to someone presumed covid positive, you are at a higher risk of getting sick and spreading the disease to others, and should quarantine for 14 days following the date of exposure."," ",i.a.createElement("a",{href:"https://multco.us/novel-coronavirus-covid-19/if-you-have-been-around-someone-covid-19"},"Source"))),i.a.createElement("hr",null)),i.a.createElement("div",{className:"mb-3"},h(a.PositiveTest,"I have received a positive test result"),i.a.createElement("hr",null)),i.a.createElement("div",{className:"mb-3"},function(){var n=u[a.SymptomsStart].get();return i.a.createElement(i.a.Fragment,null,i.a.createElement(C,{id:t.id,questionText:"I have shown positive symptoms",checked:n,onChange:b(a.SymptomsStart),tooltip:i.a.createElement("span",null,"Consult the"," ",i.a.createElement("a",{href:"https://www.cdc.gov/coronavirus/2019-ncov/symptoms-testing/symptoms.html"},"CDC web site")," ","for a common list of symptoms of Covid"," ")}),n?i.a.createElement(w,{id:t.id,questionFieldTextState:o[a.SymptomsStart],questionFieldName:a.SymptomsStart,onChange:S,onFocus:function(){return e.editingDateFieldState.set(a.SymptomsStart)},onUnfocus:function(){return e.editingDateFieldState.set(void 0)},missing:v[a.SymptomsStart].get(),invalid:d[a.SymptomsStart].get()}):null,i.a.createElement("div",{className:"mb-3"}),n?i.a.createElement(C,{id:t.id,questionText:"My symptoms have been improved for 24 hours.",checked:e.personState.noSymptomsFor24Hours.get(),onChange:function(){return e.personState.noSymptomsFor24Hours.set((function(e){return!e}))},tooltip:i.a.createElement("span",null,"Improved symptoms are a requirement for you to end isolation. If your symptoms improve AND you have had no fever for 24 hours without the use of medicine, check this box.",i.a.createElement("a",{href:"https://multco.us/novel-coronavirus-covid-19/if-you-test-positive-covid-19"},"Source")," ")}):null)}(),i.a.createElement("hr",null)),i.a.createElement(P,{id:t.id,meaningfulInHouseExposures:j,relevantInHouseExposureEventsState:s}),i.a.createElement("div",{className:"d-flex justify-content-between align-items-center"},i.a.createElement("button",{className:"btn btn-secondary",onClick:function(){s.map((function(e){return e.set(l.a)})),e.personState.set(l.a),e.editingState.set(void 0)}},i.a.createElement("span",{className:"visually-hidden"},"Remove"),"Remove",i.a.createElement("i",{"aria-hidden":"true",className:"pl2 fas fa-times-circle white"})),i.a.createElement("button",{className:"btn btn-primary",onClick:function(){Object.values(a).map((function(e){v[e].set(u.get()[e]&&""===o[e].get()),d[e].set(u.get()[e]&&""!==o[e].get()&&!Boolean(m.exec(o[e].get())))})),e.inHouseExposureEventsState.map((function(e){e.dateMissing.set(!e.ongoing.get()&&""===e.date.get()),e.dateInvalid.set(!e.ongoing.get()&&""!==e.date.get()&&!Boolean(m.exec(e.date.get())))})),Object.values(v.get()).includes(!0)||Object.values(d.get()).includes(!0)||e.inHouseExposureEventsState.map((function(e){return e.dateMissing.get()||e.dateInvalid.get()})).includes(!0)||e.editingState.set(void 0)}},t.isNewPerson?"Submit":"Update"))):i.a.createElement("div",{className:"card-body"},i.a.createElement("h4",{className:"d-flex justify-content-between align-items-center mb-3"},i.a.createElement("span",{className:"pv1 ph2 br3 "+g[t.id-1%g.length]},t.name+" "),i.a.createElement("span",null,!r&&i.a.createElement("button",{onClick:function(){return e.editingState.set(t.id)}},i.a.createElement("span",{className:"visually-hidden"},"Edit Person"),i.a.createElement("span",{"aria-hidden":"true",className:"f5 fas fa-pen"})))),i.a.createElement("div",{className:""},Object.entries(t.covidEvents).map((function(e){var t=Object(p.a)(e,2),n=t[0],a=t[1];if(""!==a)return i.a.createElement("div",{className:"f5"},n,": "," ",a)})),Object.values(c).map((function(e){if(e.exposed){var t,a,o=null===(t=n.find((function(t){return t.id===e.quarantinedPerson})))||void 0===t?void 0:t.name,r=null===(a=n.find((function(t){return t.id===e.contagiousPerson})))||void 0===a?void 0:a.name;return e.ongoing?i.a.createElement("div",{className:"f5"},o," has an ongoing exposure to"," ",r," "):i.a.createElement("div",{className:"f5"},o," exposed to"," ",r," at ",e.date)}})))))}function H(e){var t=e.editingState.get(),n=e.membersState.get(),a=e.inHouseExposureEventsState.get();return i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{className:"p-3"},!t&&i.a.createElement("button",{className:"btn btn-primary mb-2",onClick:e.addNewPerson},i.a.createElement("i",{className:"fa fa-user-plus","aria-hidden":"true"})," Add Person"),e.membersState.map((function(t){var n=t.get().id;return i.a.createElement(T,{key:n,personState:t,membersState:e.membersState,inHouseExposureEventsState:e.inHouseExposureEventsState,editingState:e.editingState,editingDateFieldState:e.editingDateFieldState})})),i.a.createElement("hr",null),i.a.createElement("div",{className:"p-1"},i.a.createElement("h4",null,"Guidance"),j(n,a).map((function(e){if(Object(E.a)(e.startDate)&&Object(E.a)(e.endDate))return i.a.createElement("div",{className:"p32"},e.person.name," "," should quarantine from "," ",Object(O.a)(e.startDate,"MM/dd/yyyy")," until "," ",Object(O.a)(e.endDate,"MM/dd/yyyy"),".")})))))}function M(){var e,t,n=[{id:1,name:"Alice",covidEvents:(e={},Object(u.a)(e,a.LastCloseContact,"8/25/2020"),Object(u.a)(e,a.SymptomsStart,""),Object(u.a)(e,a.PositiveTest,""),e),noSymptomsFor24Hours:!0,isNewPerson:!1,editing:!1},{id:2,name:"Bob",covidEvents:(t={},Object(u.a)(t,a.LastCloseContact,"8/28/2020"),Object(u.a)(t,a.SymptomsStart,""),Object(u.a)(t,a.PositiveTest,""),t),noSymptomsFor24Hours:!0,isNewPerson:!1,editing:!1}],o=Object(l.b)(n),r=Object(l.b)([]),s=Object(l.b)(void 0),m=Object(l.b)(o.length+1),d=Object(l.b)(void 0);return i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{className:"navbar navbar-dark bg-dark shadow-sm"},i.a.createElement("div",{className:"container d-flex justify-content-between"},i.a.createElement("a",{href:"#",className:"navbar-brand d-flex align-items-center"},i.a.createElement("strong",null,"Covid Quarantine Calculator")),i.a.createElement("div",{className:"white f7 fw5"},"This page is a work in progress. Its instructions may be incorrect. Consult"," ",i.a.createElement("a",{href:"https://multco.us/novel-coronavirus-covid-19/if-you-have-been-around-someone-covid-19"},"the MultCo website")," ","or the latest CDC guildlines for accurate Covid information."," "))),i.a.createElement("main",{className:"row"},i.a.createElement("div",{className:"col-md-5"},i.a.createElement(H,{membersState:o,inHouseExposureEventsState:r,editingState:s,editingDateFieldState:d,addNewPerson:function(){var e,t=m.get(),n={id:t,name:"Person ".concat(q(1e3)),covidEvents:(e={},Object(u.a)(e,a.LastCloseContact,""),Object(u.a)(e,a.SymptomsStart,""),Object(u.a)(e,a.PositiveTest,""),e),noSymptomsFor24Hours:!0,isNewPerson:!0,editing:!0};m.set((function(e){return e+1})),o.set((function(e){return[].concat(Object(c.a)(e),[n])})),s.set(t);var i=o.get().map((function(e){if(k(e))return{contagiousPerson:e.id,quarantinedPerson:n.id,exposed:!0,ongoing:!0,date:"",dateMissing:!1,dateInvalid:!1}}));r.merge(Object(x.compact)(i))}})),i.a.createElement("div",{className:"col-md-7"},i.a.createElement(N,{membersState:o,editing:s.get(),editingDateFieldState:d,inHouseExposureEvents:r.get()}))))}var I=document.getElementById("root");s.a.render(i.a.createElement(M,null),I)}},[[33,1,2]]]);
//# sourceMappingURL=main.80a52a6e.chunk.js.map