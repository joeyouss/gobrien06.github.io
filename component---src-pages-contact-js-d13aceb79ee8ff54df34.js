(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{"9Hrx":function(e,t,a){"use strict";function n(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,e.__proto__=t}a.d(t,"a",(function(){return n}))},BLzl:function(e,t,a){"use strict";var n=a("k1TG"),r=a("8o2o"),o=a("q1tI"),l=a.n(o),c=a("TSYQ"),s=a.n(c),i=a("33Jr"),u=function(e){var t=e.className,a=e.cssModule,o=e.color,c=e.body,u=e.inverse,d=e.outline,m=e.tag,h=e.innerRef,b=Object(r.a)(e,["className","cssModule","color","body","inverse","outline","tag","innerRef"]),f=Object(i.d)(s()(t,"card",!!u&&"text-white",!!c&&"card-body",!!o&&(d?"border":"bg")+"-"+o),a);return l.a.createElement(m,Object(n.a)({},b,{className:f,ref:h}))};u.defaultProps={tag:"div"},t.a=u},"Cuy+":function(e,t,a){"use strict";a.r(t);var n=a("q1tI"),r=a.n(n),o=a("Bl7J"),l=a("vrFN"),c=a("BLzl"),s=a("k1TG"),i=a("8o2o"),u=a("TSYQ"),d=a.n(u),m=a("33Jr"),h=function(e){var t=e.className,a=e.cssModule,n=e.row,o=e.disabled,l=e.check,c=e.inline,u=e.tag,h=Object(i.a)(e,["className","cssModule","row","disabled","check","inline","tag"]),b=Object(m.d)(d()(t,!!n&&"row",l?"form-check":"form-group",!(!l||!c)&&"form-check-inline",!(!l||!o)&&"disabled"),a);return"fieldset"===u&&(h.disabled=o),r.a.createElement(u,Object(s.a)({},h,{className:b}))};h.defaultProps={tag:"div"};var b=h,f=(a("8+KV"),function(e,t,a){return!0===a||""===a?e?"col":"col-"+t:"auto"===a?e?"col-auto":"col-"+t+"-auto":e?"col-"+a:"col-"+t+"-"+a}),p=function(e){var t=e.className,a=e.cssModule,n=e.hidden,o=e.widths,l=e.tag,c=e.check,u=e.size,h=e.for,b=Object(i.a)(e,["className","cssModule","hidden","widths","tag","check","size","for"]),p=[];o.forEach((function(t,n){var r=e[t];if(delete b[t],r||""===r){var o,l=!n;if(Object(m.c)(r)){var c,s=l?"-":"-"+t+"-";o=f(l,t,r.size),p.push(Object(m.d)(d()(((c={})[o]=r.size||""===r.size,c["order"+s+r.order]=r.order||0===r.order,c["offset"+s+r.offset]=r.offset||0===r.offset,c))),a)}else o=f(l,t,r),p.push(o)}}));var v=Object(m.d)(d()(t,!!n&&"sr-only",!!c&&"form-check-label",!!u&&"col-form-label-"+u,p,!!p.length&&"col-form-label"),a);return r.a.createElement(l,Object(s.a)({htmlFor:h},b,{className:v}))};p.defaultProps={tag:"label",widths:["xs","sm","md","lg","xl"]};var v=p,g=(a("2Spj"),a("uRdJ")),E=a("9Hrx"),w=function(e){function t(t){var a;return(a=e.call(this,t)||this).onClick=a.onClick.bind(Object(g.a)(a)),a}Object(E.a)(t,e);var a=t.prototype;return a.onClick=function(e){this.props.disabled?e.preventDefault():this.props.onClick&&this.props.onClick(e)},a.render=function(){var e=this.props,t=e.active,a=e["aria-label"],n=e.block,o=e.className,l=e.close,c=e.cssModule,u=e.color,h=e.outline,b=e.size,f=e.tag,p=e.innerRef,v=Object(i.a)(e,["active","aria-label","block","className","close","cssModule","color","outline","size","tag","innerRef"]);l&&void 0===v.children&&(v.children=r.a.createElement("span",{"aria-hidden":!0},"×"));var g="btn"+(h?"-outline":"")+"-"+u,E=Object(m.d)(d()(o,{close:l},l||"btn",l||g,!!b&&"btn-"+b,!!n&&"btn-block",{active:t,disabled:this.props.disabled}),c);v.href&&"button"===f&&(f="a");var w=l?"Close":null;return r.a.createElement(f,Object(s.a)({type:"button"===f&&v.onClick?"button":void 0},v,{className:E,ref:p,onClick:this.onClick,"aria-label":a||w}))},t}(r.a.Component);w.defaultProps={color:"secondary",tag:"button"};var y=w,k=(a("ha17"),function(){var e=Object(n.useState)(""),t=e[0],a=e[1],o=function(e,t){a("")};return r.a.createElement(c.a,{className:"neucard"},r.a.createElement("form",{onSubmit:function(e){e.preventDefault(),function(e){e.preventDefault();var t=e.target,n=new FormData(t),r=new XMLHttpRequest;r.open(t.method,t.action),r.setRequestHeader("Accept","application/json"),r.onreadystatechange=function(){r.readyState===XMLHttpRequest.DONE&&(200===r.status?(t.reset(),a("Success! Your message has been sent.")):a("Error! Your message could not be sent."))},r.send(n)}(e)},action:"https://formspree.io/mzbgvyqr",method:"POST"},r.a.createElement(b,null,r.a.createElement(v,{for:"exampleEmail",style:{fontWeight:"600",fontSize:"1.3rem"}},"Email"),r.a.createElement("br",null),r.a.createElement("input",{style:{background:"#2C2F33",padding:"1vh",color:"white",marginBottom:"2vh",boxShadow:"inset 0.2vh 0.2vh 0.3vh #000000",border:"none"},type:"email",name:"email",id:"email",placeholder:"Enter your email.",onChange:function(e){return o()}})),r.a.createElement(b,null,r.a.createElement(v,{for:"exampleEmail",style:{fontWeight:"600",fontSize:"1.3rem"}},"Message"),r.a.createElement("br",null),r.a.createElement("textarea",{style:{background:"#2C2F33",padding:"1vh",color:"white",resize:"none",height:"15vh",width:"95%",marginBottom:"2vh",boxShadow:"inset 0.2vh 0.2vh 0.3vh #000000",border:"none"},type:"text",name:"message",id:"message",placeholder:"Enter your message.",onChange:function(e){return o()}})),r.a.createElement("a",null,r.a.createElement(y,{type:"submit",style:{background:"#8BDDBD",marginLeft:"auto",color:"#2C2F33",fontWeight:"600",border:"#2C2F33"}},"Submit")),r.a.createElement("br",null)," ",r.a.createElement("br",null),t))}),j=a("+i52"),N=a.n(j);a("q4sD"),t.default=function(){var e;return r.a.createElement(o.a,null,r.a.createElement(l.a,{title:"Contact"}),r.a.createElement("div",((e={className:"contain"}).className="blog",e.style={paddingTop:"10vh"},e),r.a.createElement("h1",null,"Contact Me.")),r.a.createElement(N.a,{height:"50vh",style:{position:"absolute",maxWidth:"99%"},params:{particles:{number:{value:15},size:{value:2}}}}),r.a.createElement(k,null),r.a.createElement("section",{style:{height:"10vh",marginTop:"-15vh",zIndex:"0"}},r.a.createElement("div",{className:"wave wave1"}),r.a.createElement("div",{className:"wave wave2"}),r.a.createElement("div",{className:"wave wave3"})))}},ha17:function(e,t,a){},q4sD:function(e,t,a){},uRdJ:function(e,t,a){"use strict";function n(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}a.d(t,"a",(function(){return n}))}}]);
//# sourceMappingURL=component---src-pages-contact-js-d13aceb79ee8ff54df34.js.map