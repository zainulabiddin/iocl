"use strict";(self.webpackChunkiocl=self.webpackChunkiocl||[]).push([[782],{6782:function(e,t,s){s.r(t);var a=s(885),c=s(2791),n=s(470),l=s(4569),r=s.n(l),o=s(184);t.default=function(){var e=(0,c.useState)(""),t=(0,a.Z)(e,2),s=t[0],l=t[1],i=(0,n.s0)();return(0,o.jsx)(o.Fragment,{children:(0,o.jsx)("div",{className:"container containerR",children:(0,o.jsx)("div",{className:"row",children:(0,o.jsx)("div",{className:"col-xs-12 col-md-12 col-sm-12 text-center",children:(0,o.jsxs)("div",{className:"",children:[(0,o.jsx)("h2",{className:"Heading-text",children:"IOCL Loyalty System"}),(0,o.jsx)("h3",{className:"",children:"Search Customer "}),(0,o.jsxs)("label",{htmlFor:"inputPassword",className:"col-md-12 text-center col-form-label mt-5",children:["Enter Customer Mobile Number",(0,o.jsx)("span",{children:"*"})]}),(0,o.jsx)("div",{className:"col-md-6 offset-md-3 mt-1",children:(0,o.jsx)("input",{type:"text",value:s,autoComplete:"off",onChange:function(e){return l(e.target.value)},className:"form-control",id:"inputPassword"})}),(0,o.jsx)("div",{className:"col-md-12 text-center mt-3",children:(0,o.jsx)("button",{onClick:function(e){e.preventDefault(),r().post("https://apis-minimum-gw-gateway-cp4i-apic.itzroks-6610027dtr-ni3dgu-6ccd7f378ae819553d37d5f2ee142bd6-0000.eu-gb.containers.appdomain.cloud/iocl/sandbox/iocl-apis/GetMemberBalance",{member_number:"",mobile:s}).then((function(e){if(console.log(e),"Success"===e.data.ErrorMessage){var t={mobile:s,MemberNumber:e.data.MemberNumber};i("/customerexits",{state:t})}else"No Mobile Found"===e.data.ErrorMessage?i("/customernotexits",{state:s}):alert("Please fill Mobile Number")})).catch((function(e){return console.log(e)}))},className:"btn btn-lg border-radius",type:"submit",children:"Submit"})}),(0,o.jsx)("div",{className:"col-md-12 text-center mt-3",children:(0,o.jsx)("button",{onClick:function(){i("/")},className:"btn btn-sm border-radius",type:"submit",children:"Go Back to Home"})})]})})})})})}}}]);
//# sourceMappingURL=782.675899af.chunk.js.map