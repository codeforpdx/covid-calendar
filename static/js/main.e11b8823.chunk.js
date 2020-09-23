(this.webpackJsonpcovidcal=this.webpackJsonpcovidcal||[]).push([[0],{150:function(e,t,n){"use strict";n.r(t);var a,o=n(2),r=n.n(o),s=n(15),i=n.n(s),c=(n(75),n(22)),l=n(39),m=n(9),u=n(29);!function(e){e.LastCloseContact="Most Recent Close Contact",e.SymptomsStart="Illness Onset",e.PositiveTest="Most Recent Positive Test"}(a||(a={}));var d=["#b35806","#e08214","#fdb863","#fee0b6","#d8daeb","#b2abd2","#8073ac","#542788"],f=n(64),v=n.n(f),p=(n(76),n(151)),E=n(43),h=n(152);function g(e){var t=e.questionFieldTextState.get(),n=Object(p.default)(t,"M/dd/yyyy",new Date),a=Object(E.default)(n)?n:new Date;return r.a.createElement("div",{className:""},r.a.createElement("label",{htmlFor:"".concat(e.id,"-").concat(e.questionFieldName)},"Date ",r.a.createElement("span",{className:"f6 fw3"},"mm/dd/yyyy")),r.a.createElement(v.a,{className:"form-control",selected:a,onChange:function(t){var n=Object(E.default)(t)?t:new Date;e.questionFieldTextState.set(Object(h.default)(n,"MM/dd/yyyy"))},name:e.questionFieldName,id:"".concat(e.id,"-").concat(e.questionFieldName)}))}var b=n(40);function y(e){return r.a.createElement("div",{className:"custom-control custom-checkbox mb-3"},r.a.createElement("input",{className:"custom-control-input",checked:e.checked,id:"checkbox-".concat(e.id,"-").concat(e.questionText),type:"checkbox",onChange:e.onChange}),r.a.createElement(b.a,null,r.a.createElement("label",{className:"custom-control-label",htmlFor:"checkbox-".concat(e.id,"-").concat(e.questionText)},e.questionText,e.tooltip&&r.a.createElement(b.b,null,r.a.createElement("i",{"aria-hidden":"true",className:"px-1 fas fa-question-circle link hover-dark-blue gray"}))),e.tooltip&&r.a.createElement(b.c,null,r.a.createElement("div",{className:"f5 gray"},e.tooltip))))}function S(e){var t=e.inHouseExposureEventState.get(),n=t.exposed,a=t.ongoing;return r.a.createElement("div",{className:"mb-3"},r.a.createElement(y,{id:e.id,questionText:"".concat(e.person.name," had close contact with ").concat(e.otherPerson.name),checked:n,onChange:function(){return e.inHouseExposureEventState.exposed.set((function(e){return!e}))}}),n&&r.a.createElement(y,{id:e.id,questionText:"".concat(e.person.name,"'s close contact with ").concat(e.otherPerson.name," is ongoing"),checked:a,onChange:function(){var t=e.inHouseExposureEventState.ongoing,n=!t.get();t.set(n),n?e.inHouseExposureEventState.date.set(""):e.inHouseExposureEventState.date.set(Object(h.default)(new Date,"MM/dd/yyyy"))}}),n&&!a&&r.a.createElement(g,{id:e.id,questionFieldTextState:e.inHouseExposureEventState.date,questionFieldName:"crossExposure-".concat(e.index)}))}function w(e){return r.a.createElement(r.a.Fragment,null,e.meaningfulInHouseExposures.map((function(t,n){var a=e.relevantInHouseExposureEventsState.find((function(e){var n=e.get();return n.quarantinedPerson===t.id||n.contagiousPerson===t.id}));return a?r.a.createElement(r.a.Fragment,null,r.a.createElement("hr",null),r.a.createElement(S,{key:e.person.id+"-"+n,id:e.person.id,index:n,person:e.person,otherPerson:t,inHouseExposureEventState:a})):r.a.createElement(r.a.Fragment,null)})))}var x=n(6);function N(e){return Boolean(e.covidEvents[a.PositiveTest]||e.covidEvents[a.SymptomsStart])}function O(e){var t=e.personState.get(),n=e.membersState.get(),o=e.personState.covidEvents,s=e.editingPersonState.get(),i=e.editingHouseholdState.get(),c=e.inHouseExposureEventsState.filter((function(e){var n=e.get();return n.contagiousPerson===t.id||n.quarantinedPerson===t.id})),l=c.map((function(e){return e.get()})),d=Object(m.b)(Object.values(a).reduce((function(e,t){return e[t]=""!==o[t].get(),e}),{})),f=d.get(),v=f[a.PositiveTest]||f[a.SymptomsStart];function E(e){return function(t){var n=t.target.checked;if(d[e].set(n),e===a.PositiveTest){var r=Boolean(n||f[a.SymptomsStart]);v!==r&&S(r)}else if(e===a.SymptomsStart){var s=Boolean(n||f[a.PositiveTest]);v!==s&&S(s)}n?o[e].set(Object(h.default)(new Date,"MM/dd/yyyy")):o[e].set("")}}function b(e,n,a){return r.a.createElement(r.a.Fragment,null,r.a.createElement(y,{id:t.id,questionText:n,checked:d[e].get(),onChange:E(e),tooltip:a}),d[e].get()&&r.a.createElement(g,{id:t.id,questionFieldTextState:o[e],questionFieldName:e}))}function S(a){c.reverse().map((function(e){return e.set(m.a)}));var o=n.map((function(e){var n=N(e);if(t!==e&&a!==n)return{contagiousPerson:a?t.id:e.id,quarantinedPerson:a?e.id:t.id,exposed:!0,ongoing:!0,date:"",dateMissing:!1,dateInvalid:!1}}));e.inHouseExposureEventsState.merge(Object(x.compact)(o))}var O=n.filter((function(e){return t!==e&&v!==N(e)}));function j(){return r.a.createElement("div",{className:""},Object.entries(t.covidEvents).map((function(e){var n=Object(u.a)(e,2),o=n[0],s=n[1];if(""!==s)return r.a.createElement("div",{className:"f5"},function(e,t,n){var o=Object(h.default)(Object(p.default)(t,"M/dd/yyyy",new Date),"PPPP");switch(e){case a.LastCloseContact:return"Most recent close contact was on ".concat(o,".");case a.PositiveTest:return"Earliest positive test was on ".concat(o,".");case a.SymptomsStart:return"Symptoms started showing on ".concat(o,n?".":" and have not improved.");default:return null}}(o,s,t.noSymptomsFor24Hours))})),Object.values(l).map((function(e){if(e.exposed){var t,a,o=null===(t=n.find((function(t){return t.id===e.quarantinedPerson})))||void 0===t?void 0:t.name,s=null===(a=n.find((function(t){return t.id===e.contagiousPerson})))||void 0===a?void 0:a.name;return e.ongoing?r.a.createElement("div",{className:"f5"},o," has an ongoing exposure to"," ",s,"."):r.a.createElement("div",{className:"f5"},o," exposed to ",s," at"," ",e.date,".")}})))}return s===t.id?r.a.createElement("div",{className:"card shadow-sm mb-2",ref:e.editingPersonRef},r.a.createElement("div",{className:"card-body"},r.a.createElement("div",{className:"mb-3"},r.a.createElement("label",{htmlFor:"".concat(t.id,"-name")},"Name"),r.a.createElement("input",{className:"form-control",value:t.name,name:"name",id:"".concat(t.id,"-name"),type:"text",onChange:function(t){return e.personState.name.set(t.target.value)}})),r.a.createElement("div",{className:"mb-3"},b(a.LastCloseContact,"".concat(t.name," has had close contact to someone presumed covid positive (outside the household)"),r.a.createElement("div",null,"Close contact means any of the following:",r.a.createElement("ul",{className:"mx-3 mb-1"},r.a.createElement("li",null,"You were within 6 feet of them for a total of 15 minutes or more"),r.a.createElement("li",null,"You provided care at home to the person"),r.a.createElement("li",null,"You had direct physical contact with the person (hugged or kissed them)"),r.a.createElement("li",null,"You shared eating or drinking utensils"),r.a.createElement("li",null,"They sneezed, coughed, or somehow got respiratory droplets on you"))," ",r.a.createElement("a",{href:"https://www.cdc.gov/coronavirus/2019-ncov/if-you-are-sick/quarantine.html"},"Link.")))),r.a.createElement("div",{className:"mb-3"},r.a.createElement("hr",null),b(a.PositiveTest,"".concat(t.name," has received a positive test result"))),r.a.createElement("div",{className:"mb-3"},r.a.createElement("hr",null),function(){var n=d[a.SymptomsStart].get();return r.a.createElement(r.a.Fragment,null,r.a.createElement(y,{id:t.id,questionText:"".concat(t.name," has shown positive symptoms"),checked:n,onChange:E(a.SymptomsStart),tooltip:r.a.createElement("span",null,"Consult the"," ",r.a.createElement("a",{href:"https://www.cdc.gov/coronavirus/2019-ncov/symptoms-testing/symptoms.html"},"CDC website")," ","for a common list of symptoms of Covid."," ")}),n?r.a.createElement(g,{id:t.id,questionFieldTextState:o[a.SymptomsStart],questionFieldName:a.SymptomsStart}):null,r.a.createElement("div",{className:"mb-3"}),n?r.a.createElement(y,{id:t.id,questionText:"".concat(t.name,"'s symptoms have been improved for 24 hours."),checked:e.personState.noSymptomsFor24Hours.get(),onChange:function(){return e.personState.noSymptomsFor24Hours.set((function(e){return!e}))},tooltip:r.a.createElement("span",null,"Improved symptoms are a requirement for you to end isolation. If your symptoms improve AND you have had no fever for 24 hours without the use of medicine, check this box."," ",r.a.createElement("a",{href:"https://multco.us/novel-coronavirus-covid-19/if-you-test-positive-covid-19"},"Link.")," ")}):null)}()),r.a.createElement(w,{person:t,meaningfulInHouseExposures:O,relevantInHouseExposureEventsState:c}))):r.a.createElement("div",{className:"card shadow-sm mb-2"},r.a.createElement("div",{className:"card-body"},r.a.createElement("div",{className:""},r.a.createElement("h4",{className:"d-flex justify-content-between align-items-center"},r.a.createElement("span",{className:""},t.name+"",i?null:e.guidance.endDate?e.guidance.infected?" - Isolate":" - Quarantine":null),r.a.createElement("span",null,!s&&r.a.createElement(r.a.Fragment,null,r.a.createElement("button",{onClick:function(n){n.stopPropagation(),e.editingHouseholdState.set(!0),e.editingPersonState.set(t.id)}},r.a.createElement("span",{className:"visually-hidden"},"Edit Person"),r.a.createElement("span",{"aria-hidden":"true",className:"f5 fas fa-pen"})),r.a.createElement("span",{className:"mx-2"}),r.a.createElement("button",{onClick:function(t){t.stopPropagation(),c.reverse().map((function(e){return e.set(m.a)})),e.personState.set(m.a),e.editingPersonState.set(void 0)}},r.a.createElement("span",{className:"visually-hidden"},"Remove"),r.a.createElement("span",{className:"f5 fa fa-trash","aria-hidden":"true"}))))),!i&&function(e){if(e.endDate){var t,n=Object(h.default)(e.endDate,"PPPP");if(e.infected)return e.person.noSymptomsFor24Hours?r.a.createElement(r.a.Fragment,null,r.a.createElement("p",null,"Until ",n),r.a.createElement("p",null,"This is 10 days after the earliest known date of illness onset.")):r.a.createElement(r.a.Fragment,null,r.a.createElement("p",null,"Until at least ",n," and 24 hours after symptoms improve"),r.a.createElement("p",null,"This is 10 days after the earliest known date of illness onset."));if(null===(t=e.peopleWithOngoingExposureWithSymptoms)||void 0===t?void 0:t.length){var a,o=null===(a=e.peopleWithOngoingExposureWithSymptoms)||void 0===a?void 0:a.join(", ");return r.a.createElement(r.a.Fragment,null,r.a.createElement("p",null,"Until 14 days after isolation period ends for ",o," (at least"," ",n,")"),r.a.createElement("p",null,"Please come back when symptoms for ",o," have improved for an exact date."))}return r.a.createElement(r.a.Fragment,null,r.a.createElement("p",null,"Until ",n),r.a.createElement("p",null,"This is 14 days after the last known exposure date."))}}(e.guidance)),r.a.createElement("div",{className:"my-3"}),i&&j()))}var j=n(26);function P(e,t){var n=Object(x.flow)(Object(x.map)((function(e){var t=function(e){var t=[e.covidEvents[a.SymptomsStart],e.covidEvents[a.PositiveTest]],n=Object(x.flow)(x.compact,Object(x.map)((function(e){return Object(p.default)(e,"M/dd/yyyy",new Date)})),Object(x.thru)((function(e){return Object(x.min)(e)})))(t);if(n){var o=Object(j.default)(n,10),r=e.noSymptomsFor24Hours?void 0:new Date,s=Object(x.flow)(x.compact,Object(x.thru)((function(e){return Object(x.max)(e)})))([o,r]);return[n,s]}}(e);if(t){var n=Object(u.a)(t,2);return{person:e,infected:!0,startDate:n[0],endDate:n[1]}}return{person:e,infected:!1}})),Object(x.partition)((function(e){return e.infected})))(e),o=Object(u.a)(n,2),r=o[0],s=o[1].map((function(e){return function(e,t,n){var o=e.person,r=Object(x.filter)((function(e){return e.quarantinedPerson===o.id&&e.exposed}))(t),s=Object(x.map)((function(e){var t=n.find((function(t){return t.person.id===e.contagiousPerson}));return e.ongoing?{startDate:t.startDate,endDate:t.endDate,infectionSource:t.person}:{startDate:t.startDate,endDate:Object(p.default)(e.date,"M/dd/yyyy",new Date),infectionSource:t.person}})),i=Object(x.compact)(s(r)),l=function(e,t){var n=e.covidEvents[a.LastCloseContact];if(n){var o=Object(p.default)(n,"M/dd/yyyy",new Date),r={startDate:o,endDate:o,infectionSource:void 0};t=[].concat(Object(c.a)(t),[r])}return t}(o,i),m=Object(x.minBy)((function(e){return e.startDate}),l),u=Object(x.maxBy)((function(e){return e.endDate}),l),d=null===m||void 0===m?void 0:m.startDate,f=void 0;u&&(f=Object(j.default)(u.endDate,14));var v=Object(x.flow)(Object(x.map)((function(e){if(e.ongoing){var t,a=null===(t=n.find((function(t){return t.person.id===e.contagiousPerson})))||void 0===t?void 0:t.person;if(!(null===a||void 0===a?void 0:a.noSymptomsFor24Hours))return null===a||void 0===a?void 0:a.name}})),x.compact)(r);return{person:o,infected:!1,startDate:d,endDate:f,infectionSource:u&&u.infectionSource,peopleWithOngoingExposureWithSymptoms:v}}(e,t,r)}));return[].concat(Object(c.a)(r),Object(c.a)(s))}function C(e){var t=e.editingHouseholdState.get(),n=e.membersState.get(),a=e.inHouseExposureEventsState.get(),s=P(n,a),i=Object(o.useRef)(null);function c(t){var n;(null===(n=i.current)||void 0===n?void 0:n.contains(t.target))||e.editingPersonState.set(void 0)}return Object(o.useEffect)((function(){return window.addEventListener("click",c),function(){window.removeEventListener("click",c)}}),[]),r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{style:{display:"flex",flexWrap:"wrap"}},r.a.createElement("div",{className:"col-md-6",style:{backgroundColor:"#fff",minHeight:e.height.get()+"px"}},r.a.createElement("header",null,r.a.createElement("div",{className:"navbar household"},r.a.createElement("div",{className:"container d-flex justify-content-between"},r.a.createElement("div",null),r.a.createElement("div",{className:"my-2",onClick:function(t){e.showModalState.set(!1)}},"Close")))),r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"my-3"}),t?r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",null,"Add your household"),r.a.createElement("p",{className:"lead text-muted"},"Be sure to add everyone in your household.")):r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",null,"Our recommendation"),r.a.createElement("p",{className:"lead text-muted"},"The guidance given in this app is based on the latest CDC guidelines for protecting yourself and others from the spread of COVID-19. The same information is available on their"," ",r.a.createElement("a",{href:"https://www.cdc.gov/coronavirus/2019-ncov/if-you-are-sick/index.html"},"COVID-19 webpage"),".")),r.a.createElement("div",null,e.membersState.map((function(t){var n=t.get().id,a=s.find((function(e){return e.person.id===n}));if(a)return r.a.createElement(O,{key:n,personState:t,membersState:e.membersState,inHouseExposureEventsState:e.inHouseExposureEventsState,editingHouseholdState:e.editingHouseholdState,editingPersonState:e.editingPersonState,guidance:a,editingPersonRef:i})}))),r.a.createElement("div",{className:"card shadow-sm mb-2",onClick:function(t){t.stopPropagation(),e.editingHouseholdState.set(!0),e.addNewPerson()}},r.a.createElement("button",{className:"card-body"},r.a.createElement("h4",{className:""},"Add Person \xa0",r.a.createElement("i",{className:"fa fa-user-plus","aria-hidden":"true"})))),function(){if(n.length)return t?r.a.createElement("button",{className:"btn btn-primary my-3",onClick:function(t){e.editingHouseholdState.set(!1)}},"Get recommendation"," "):r.a.createElement("button",{className:"btn btn-primary my-3",onClick:function(t){e.showModalState.set(!1)}},"See on calendar"," ")}())),r.a.createElement("div",{className:"col-md-6"})))}var k=n(69),D=n(67),H=n(68);function F(e){var t=e.membersState.get();return r.a.createElement("div",{className:"p-3"},r.a.createElement("div",null,r.a.createElement(k.a,{plugins:[D.a,H.a],initialView:"dayGridMonth",events:function(e,t){return Object(x.flow)(Object(x.map)((function(e){if(e.endDate)return{classNames:["TODO"],title:e.person.name,start:e.startDate,end:e.endDate,color:d[(e.person.id-1)%d.length],textColor:"#000000"}})),x.compact)(P(e,t))}(t,e.inHouseExposureEvents),dateClick:function(e){}})))}function q(e){var t=e.membersState.get();return r.a.createElement(r.a.Fragment,null,r.a.createElement("header",null,r.a.createElement("div",{className:"navbar"},r.a.createElement("div",{className:"container d-flex justify-content-between"},r.a.createElement("div",{className:"navbar-brand d-flex align-items-center"},"COVID Quarantine Calculator (Alpha)"),r.a.createElement("div",null,"English")))),r.a.createElement("main",{className:"main",role:"main"},r.a.createElement("section",{className:"jumbotron"},r.a.createElement("div",{className:"container"},t.length?r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",null,"Here is our recommendation for your household"),r.a.createElement("p",{className:"lead text-muted"},"The guidance given in this app is based on the latest CDC guidelines for protecting yourself and others from the spread of COVID-19. The same information is available on their"," ",r.a.createElement("a",{href:"https://www.cdc.gov/coronavirus/2019-ncov/if-you-are-sick/index.html"},"COVID-19 webpage"),"."),r.a.createElement("div",{className:"btn btn-primary my-2",onClick:function(){e.showModalState.set(!0)}},"Edit Answers")):r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",null,"Get quarantine and isolation guidance for your household"),r.a.createElement("p",{className:"lead text-muted"},"We'll let you know who should quarantine or isolate, and for how long."),r.a.createElement("div",{className:"btn btn-primary my-2",onClick:function(){e.showModalState.set(!0)}},"Get Started"))))),t.length?r.a.createElement(F,{membersState:e.membersState,inHouseExposureEvents:e.inHouseExposureEventsState.get()}):null,r.a.createElement("footer",{className:"mb-3"},r.a.createElement("div",{className:"container d-flex justify-content-between"},r.a.createElement("a",{href:"https://www.codeforpdx.org/"},"Code For PDX"),r.a.createElement("a",{href:"https://www.cdc.gov/coronavirus/2019-ncov/if-you-are-sick/isolation.html"},"CDC guidelines on isolation"),r.a.createElement("a",{href:"https://www.cdc.gov/coronavirus/2019-ncov/if-you-are-sick/quarantine.html"},"CDC guidelines on quarantine"))))}var T=n(35),M=n.n(T);function I(){var e=Object(m.b)(window.innerHeight),t=function(){e.set(window.innerHeight)};Object(o.useEffect)((function(){return window.addEventListener("resize",t),function(){return window.removeEventListener("resize",t)}}),[]);var n=Object(m.b)([]),s=Object(m.b)([]),i=Object(m.b)(n.length+1),u=Object(m.b)(!0),d=Object(m.b)(void 0),f=Object(m.b)(!1);return r.a.createElement(r.a.Fragment,null,r.a.createElement(M.a,{isOpen:f.get(),className:f.get()?"slide-in":"slide-out",style:{overlay:{zIndex:1},content:{position:"absolute",inset:"0px",padding:"0px",background:"none",border:"none",borderRadius:"none",overflow:"auto",WebkitOverflowScrolling:"touch",outline:"none"}}},r.a.createElement(C,{addNewPerson:function(){var e,t,o=i.get(),r={id:o,name:"Person ".concat((t=1e3,Math.floor(Math.random()*Math.floor(t)))),covidEvents:(e={},Object(l.a)(e,a.LastCloseContact,""),Object(l.a)(e,a.SymptomsStart,""),Object(l.a)(e,a.PositiveTest,""),e),noSymptomsFor24Hours:!0,isNewPerson:!0,editing:!0};i.set((function(e){return e+1})),n.set((function(e){return[].concat(Object(c.a)(e),[r])})),d.set(o);var m=n.get().map((function(e){if(N(e))return{contagiousPerson:e.id,quarantinedPerson:r.id,exposed:!0,ongoing:!0,date:"",dateMissing:!1,dateInvalid:!1}}));s.merge(Object(x.compact)(m))},editingHouseholdState:u,editingPersonState:d,height:e,inHouseExposureEventsState:s,membersState:n,showModalState:f})),r.a.createElement(q,{membersState:n,inHouseExposureEventsState:s,showModalState:f}))}var L=document.getElementById("root");M.a.setAppElement(L),i.a.render(r.a.createElement(I,null),L)},70:function(e,t,n){e.exports=n(150)},75:function(e,t,n){}},[[70,1,2]]]);
//# sourceMappingURL=main.e11b8823.chunk.js.map