"use strict";(self.webpackChunkiocl=self.webpackChunkiocl||[]).push([[511],{1511:function(e,s,t){t.r(s);var a=t(885),c=t(2791),l=t(470),n=t(4569),r=t.n(n),i=t(184);s.default=function(e){var s=(0,c.useState)(""),t=(0,a.Z)(s,2),n=t[0],o=(t[1],(0,l.s0)()),d=(0,l.TH)();console.log(d);return(0,i.jsx)(i.Fragment,{children:(0,i.jsxs)("div",{className:"container containerR",children:[(0,i.jsx)("div",{className:"row",children:(0,i.jsxs)("div",{className:"col-md-12 text-center",children:[(0,i.jsx)("h2",{className:"Heading-text",children:"IOCL Loyalty System"}),(0,i.jsx)("h3",{className:"",children:"Search Customer"})]})}),(0,i.jsxs)("div",{className:"mt-5 row",children:[(0,i.jsx)("div",{className:"col-md-12",children:(0,i.jsxs)("p",{className:"text-center",children:["Customer Mobile Number ",d.state.mobile," already exists in Loyalty System"]})}),(0,i.jsx)("div",{className:"col-md-12 text-center",children:(0,i.jsx)("button",{onClick:function(e){e.preventDefault(),r().post("https://apis-minimum-gw-gateway-cp4i-apic.itzroks-6610027dtr-ni3dgu-6ccd7f378ae819553d37d5f2ee142bd6-0000.eu-gb.containers.appdomain.cloud/iocl/sandbox/iocl-apis/GetMemberBalance",{MemberNumber:n}).then((function(e){console.log(e),"Please pass Mobile or Member Number"===e.data.ErrorMessage?o("/Accruepoint",{state:d.state.MemberNumber}):alert("Please fill Mobile Number")})).catch((function(e){return console.log(e)}))},className:"btn btn-lg border-radius",type:"button",children:"Accrue Loyalty Point"})})]})]})})}}}]);
//# sourceMappingURL=511.57f87c12.chunk.js.map