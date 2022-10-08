(this.webpackJsonpcleanfolio=this.webpackJsonpcleanfolio||[]).push([[0],{28:function(e,t,n){},32:function(e,t,n){},33:function(e,t,n){},35:function(e,t,n){},36:function(e,t,n){},37:function(e,t,n){},38:function(e,t,n){},39:function(e,t,n){},40:function(e,t,n){},41:function(e,t,n){},42:function(e,t,n){},44:function(e,t,n){"use strict";n.r(t);var c=n(9),i=n(3),s=n(1),a=n(0),r=Object(s.createContext)(),l=function(e){var t=e.children,n=Object(s.useState)("light"),c=Object(i.a)(n,2),l=c[0],o=c[1];Object(s.useEffect)((function(){var e=window.matchMedia("(prefers-color-scheme: dark)");o(e.matches?"dark":"light"),e.addEventListener("change",(function(e){o(e.matches?"dark":"light")}))}),[]);return Object(a.jsx)(r.Provider,{value:[{themeName:l,toggleTheme:function(){var e="dark"===l?"light":"dark";localStorage.setItem("themeName",e),o(e)}}],children:t})},o="https://rajsinghtech.github.io/",j="Raj Singh.",h="Raj Singh",d="Network Engineer",b="Looking for a challenging position in an IT Company where I can use my capabilities and learn everything which contributes to the growth of the organization. I have a passion for networking infrastructure, IT, and integrated systems.",u="https://rajsinghtech.github.io/",m={linkedin:"https://www.linkedin.com/in/rajsingh360/",github:"https://github.com/rajsinghtech"},p=[{name:"MIPS Pipelined Pipelined Processor",description:"Made designs for single-cycle, pipelined processors. Created using both VHDL and Verilog. Verified with python scripting. Optimized and Generated Layout",stack:["VHDL","MIPS","Schematic"],sourceCode:"https://github.com/rajsinghtech/MIPS-Pipelined-Processor",livePreview:"https://github.com/rajsinghtech/MIPS-Pipelined-Processor"},{name:"MTCP Network Protocol",description:"Allowed for the fast transfering of text files. Implemented across multiple threads to increase speed. Required mapping data being sent to a specific tcp connection on a specific thread.",stack:["C","TCP/IP","Networking"],sourceCode:"https://github.com/JMcGhee-CPE/MTCP-Network-Protocol",livePreview:"https://github.com/JMcGhee-CPE/MTCP-Network-Protocol"},{name:"UDP Stream Introduce Error",description:"Wrote a UDP socket server and client with the ability to introduce error of dropped packets to get an idea of what occurs to the stream as you increase % error",stack:["UDP","C","VLC"],sourceCode:"https://github.com/rajsinghtech/UDP-stream-introduce-error",livePreview:"https://github.com/rajsinghtech/UDP-stream-introduce-error"},{name:"Better Bots Senior Design (In Progress)",description:"Working on a integrating an FPGA to allow for other programmers to interface with sensors, cameras, and Audio to Digital converters over USB. My role in this is to work on the acutal design specifications as well as flash/program the interface between the diffrent peripherals.",stack:["Linux","C","Python","LiteX","Assembly"],sourceCode:"https://www.betterbots.com/",livePreview:"https://www.betterbots.com/"}],f=["HTML","CSS","JavaScript","TCP/IP","Linux","Java","Docker","Virtualization","Git","CI/CD","Python","C"],O="rajsinghcpre@gmail.com",x=n(16),g=n.n(x),k=n(14),v=n.n(k),N=n(18),w=n.n(N),P=n(17),_=n.n(P),C=(n(28),function(){var e=Object(s.useContext)(r),t=Object(i.a)(e,1)[0],n=t.themeName,c=t.toggleTheme,l=Object(s.useState)(!1),o=Object(i.a)(l,2),j=o[0],h=o[1],d=function(){return h(!j)};return Object(a.jsxs)("nav",{className:"center nav",children:[Object(a.jsxs)("ul",{style:{display:j?"flex":null},className:"nav__list",children:[p.length?Object(a.jsx)("li",{className:"nav__list-item",children:Object(a.jsx)("a",{href:"#projects",onClick:d,className:"link link--nav",children:"Projects"})}):null,f.length?Object(a.jsx)("li",{className:"nav__list-item",children:Object(a.jsx)("a",{href:"#skills",onClick:d,className:"link link--nav",children:"Skills"})}):null,O?Object(a.jsx)("li",{className:"nav__list-item",children:Object(a.jsx)("a",{href:"#contact",onClick:d,className:"link link--nav",children:"Contact"})}):null]}),Object(a.jsx)("button",{type:"button",onClick:c,className:"btn btn--icon nav__theme","aria-label":"toggle theme",children:"dark"===n?Object(a.jsx)(v.a,{}):Object(a.jsx)(g.a,{})}),Object(a.jsx)("button",{type:"button",onClick:d,className:"btn btn--icon nav__hamburger","aria-label":"toggle navigation",children:j?Object(a.jsx)(_.a,{}):Object(a.jsx)(w.a,{})})]})}),y=(n(32),function(){var e=o,t=j;return Object(a.jsxs)("header",{className:"header center",children:[Object(a.jsx)("h3",{children:e?Object(a.jsx)("a",{href:e,className:"link",children:t}):t}),Object(a.jsx)(C,{})]})}),S=n(11),E=n.n(S),I=n(19),M=n.n(I),L=(n(33),n.p+"static/media/RajSinghResume.198720f7.pdf"),D=n.p+"static/media/GeneralEdReflection.514f57e0.pdf",R=n.p+"static/media/CumulativeReflection.b0d95a44.pdf",T=n.p+"static/media/EthicsEssay.1d0c8816.pdf",G=function(){var e=h,t=d,n=b,c=u,i=m;return Object(a.jsxs)("div",{className:"about center",children:[e&&Object(a.jsxs)("h1",{children:["Hi, I am ",Object(a.jsxs)("span",{className:"about__name",children:[e,"."]})]}),t&&Object(a.jsxs)("h2",{className:"about__role",children:["A ",t,"."]}),Object(a.jsx)("p",{className:"about__desc",children:n&&n}),Object(a.jsxs)("div",{className:"about__contact center",children:[c&&Object(a.jsx)("a",{href:L,children:Object(a.jsx)("span",{type:"button",className:"btn btn--outline",children:"Resume"})}),D&&Object(a.jsx)("a",{href:D,children:Object(a.jsx)("span",{type:"button",className:"btn btn--outline",children:"Gen Ed Reflection"})}),R&&Object(a.jsx)("a",{href:R,children:Object(a.jsx)("span",{type:"button",className:"btn btn--outline",children:"Cumulative Reflection"})}),T&&Object(a.jsx)("a",{href:T,children:Object(a.jsx)("span",{type:"button",className:"btn btn--outline",children:"Ethics Essay"})}),i&&Object(a.jsxs)(a.Fragment,{children:[i.github&&Object(a.jsx)("a",{href:i.github,"aria-label":"github",className:"link link--icon",children:Object(a.jsx)(E.a,{})}),i.linkedin&&Object(a.jsx)("a",{href:i.linkedin,"aria-label":"linkedin",className:"link link--icon",children:Object(a.jsx)(M.a,{})})]})]})]})},J=n(7),U=n.n(J),V=n(20),A=n.n(V),B=(n(35),function(e){var t=e.project;return Object(a.jsxs)("div",{className:"project",children:[Object(a.jsx)("h3",{children:t.name}),Object(a.jsx)("p",{className:"project__description",children:t.description}),t.stack&&Object(a.jsx)("ul",{className:"project__stack",children:t.stack.map((function(e){return Object(a.jsx)("li",{className:"project__stack-item",children:e},U()())}))}),t.sourceCode&&Object(a.jsx)("a",{href:t.sourceCode,"aria-label":"source code",className:"link link--icon",children:Object(a.jsx)(E.a,{})}),t.livePreview&&Object(a.jsx)("a",{href:t.livePreview,"aria-label":"live preview",className:"link link--icon",children:Object(a.jsx)(A.a,{})})]})}),z=(n(36),function(){return p.length?Object(a.jsxs)("section",{id:"projects",className:"section projects",children:[Object(a.jsx)("h2",{className:"section__title",children:"Projects"}),Object(a.jsx)("div",{className:"projects__grid",children:p.map((function(e){return Object(a.jsx)(B,{project:e},U()())}))})]}):null}),H=(n(37),function(){return f.length?Object(a.jsxs)("section",{className:"section skills",id:"skills",children:[Object(a.jsx)("h2",{className:"section__title",children:"Skills"}),Object(a.jsx)("ul",{className:"skills__list",children:f.map((function(e){return Object(a.jsx)("li",{className:"skills__list-item btn btn--plain",children:e},U()())}))})]}):null}),F=n(21),W=n.n(F),q=(n(38),function(){var e=Object(s.useState)(!1),t=Object(i.a)(e,2),n=t[0],c=t[1];return Object(s.useEffect)((function(){var e=function(){return window.pageYOffset>500?c(!0):c(!1)};return window.addEventListener("scroll",e),function(){return window.removeEventListener("scroll",e)}}),[]),n?Object(a.jsx)("div",{className:"scroll-top",children:Object(a.jsx)("a",{href:"#top",children:Object(a.jsx)(W.a,{fontSize:"large"})})}):null}),X=(n(39),function(){return O?Object(a.jsxs)("section",{className:"section contact center",id:"contact",children:[Object(a.jsx)("h2",{className:"section__title",children:"Contact"}),Object(a.jsx)("a",{href:"mailto:".concat(O),children:Object(a.jsx)("span",{type:"button",className:"btn btn--outline",children:"Email me"})})]}):null}),Y=(n(40),function(){return Object(a.jsx)("footer",{className:"footer",children:Object(a.jsx)("a",{href:"https://github.com/rajshekhar26/cleanfolio",className:"link footer__link",children:"Created By Raj Singh"})})}),K=(n(41),function(){var e=Object(s.useContext)(r),t=Object(i.a)(e,1)[0].themeName;return Object(a.jsxs)("div",{id:"top",className:"".concat(t," app"),children:[Object(a.jsx)(y,{}),Object(a.jsxs)("main",{children:[Object(a.jsx)(G,{}),Object(a.jsx)(z,{}),Object(a.jsx)(H,{}),Object(a.jsx)(X,{})]}),Object(a.jsx)(q,{}),Object(a.jsx)(Y,{})]})});n(42);Object(c.render)(Object(a.jsx)(l,{children:Object(a.jsx)(K,{})}),document.getElementById("root"))}},[[44,1,2]]]);
//# sourceMappingURL=main.d5b902ea.chunk.js.map