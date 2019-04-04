(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{146:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(159),c=a(157),l=a(150),o=a(160),s=a(175),m=(a(222),a(233)),d=a(182);t.default=function(){return r.a.createElement(i.a,null,r.a.createElement(c.a,{title:"Home",keywords:["gatsby","application","react"]}),r.a.createElement("div",{className:"landing"},r.a.createElement(o.Helmet,null,r.a.createElement("link",{rel:"stylesheet",href:"https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css"})),r.a.createElement("div",{className:"dark-overlay landing-inner text-light"},r.a.createElement("div",{className:"container",id:"landingWrapper"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-12 text-center"},r.a.createElement("h1",{className:"display-3 mb-4",id:"landingHeader"},"Eduardo Imery"),r.a.createElement("p",{className:"lead",id:"landingParagraph"},"Front End Developer"),r.a.createElement(s.Animated,{animationIn:"slideInRight",animationOut:"fadeOut",isVisible:!0},r.a.createElement(l.a,{to:"/my-work"},r.a.createElement(m.a,{className:"mt-5 mb-4",id:"projectBtn"},"View Projects"))),r.a.createElement("div",{className:"landingIcons"},r.a.createElement(s.Animated,{animationIn:"rollIn",animationOut:"fadeOut",isVisible:!0},r.a.createElement("a",{className:"contactMainLink",id:"githubMainLink",target:"_blank",href:"https://github.com/Katelin-Frederick",rel:"noopener noreferrer"},r.a.createElement(d.a,{id:"iconMainLink"}))),r.a.createElement(s.Animated,{animationIn:"rollIn",animationOut:"fadeOut",isVisible:!0},r.a.createElement("a",{className:"contactMainLink",id:"linkedinMainLink",target:"_blank",href:"https://www.linkedin.com/in/katelin-frederick-838b19167/",rel:"noopener noreferrer"},r.a.createElement(d.b,{id:"iconMainLink"}))),r.a.createElement(s.Animated,{animationIn:"rollIn",animationOut:"fadeOut",isVisible:!0},r.a.createElement("a",{className:"contactMainLink",id:"twitterMainLink",target:"_blank",href:"https://twitter.com/KatieFrederick4",rel:"noopener noreferrer"},r.a.createElement(d.c,{id:"iconMainLink"}))))))))))}},150:function(e,t,a){"use strict";a.d(t,"b",function(){return m});var n=a(0),r=a.n(n),i=a(4),c=a.n(i),l=a(32),o=a.n(l);a.d(t,"a",function(){return o.a}),a.d(t,"c",function(){return l.withPrefix});a(154);var s=r.a.createContext({}),m=function(e){return r.a.createElement(s.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};m.propTypes={data:c.a.object,query:c.a.string.isRequired,render:c.a.func,children:c.a.func}},154:function(e,t,a){var n;e.exports=(n=a(156))&&n.default||n},155:function(e){e.exports={data:{site:{siteMetadata:{title:"Eduardo Imery"}}}}},156:function(e,t,a){"use strict";a.r(t);a(33);var n=a(0),r=a.n(n),i=a(4),c=a.n(i),l=a(55),o=a(2),s=function(e){var t=e.location,a=o.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(l.a,Object.assign({location:t,pageResources:a},a.json))};s.propTypes={location:c.a.shape({pathname:c.a.string.isRequired}).isRequired},t.default=s},157:function(e,t,a){"use strict";var n=a(158),r=a(0),i=a.n(r),c=a(4),l=a.n(c),o=a(160),s=a.n(o);function m(e){var t=e.description,a=e.lang,r=e.meta,c=e.keywords,l=e.title,o=n.data.site,m=t||o.siteMetadata.description;return i.a.createElement(s.a,{htmlAttributes:{lang:a},title:l,titleTemplate:"%s | "+o.siteMetadata.title,meta:[{name:"description",content:m},{property:"og:title",content:l},{property:"og:description",content:m},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:o.siteMetadata.author},{name:"twitter:title",content:l},{name:"twitter:description",content:m}].concat(c.length>0?{name:"keywords",content:c.join(", ")}:[]).concat(r)})}m.defaultProps={lang:"en",meta:[],keywords:[]},m.propTypes={description:l.a.string,lang:l.a.string,meta:l.a.array,keywords:l.a.arrayOf(l.a.string),title:l.a.string.isRequired},t.a=m},158:function(e){e.exports={data:{site:{siteMetadata:{title:"Eduardo Imery",description:"Projects",author:"Eduardo Imery"}}}}},159:function(e,t,a){"use strict";var n=a(155),r=a(0),i=a.n(r),c=a(4),l=a.n(c),o=a(150),s=(a(163),a(7)),m=a.n(s),d=a(228),u=a(229),p=a(230),f=a(234),E=a(231),g=a(232),h=function(e){function t(t){var a;return(a=e.call(this,t)||this).toggle=function(){a.setState({isOpen:!a.state.isOpen})},a.state={isOpen:!1,links:[{id:0,path:"/",name:"Home"},{id:1,path:"/my-work",name:"Projects"},{id:2,path:"/contact",name:"Contact"}]},a}return m()(t,e),t.prototype.render=function(){return i.a.createElement(d.a,{className:"fixed-top",expand:"lg"},i.a.createElement(u.a,{href:"/"},i.a.createElement("span",{className:"branding"},"EduardoImery")),i.a.createElement(p.a,{onClick:this.toggle}),i.a.createElement(f.a,{isOpen:this.state.isOpen,navbar:!0},i.a.createElement(E.a,{className:"ml-auto",navbar:!0},this.state.links.map(function(e){return i.a.createElement(g.a,{key:e.id},i.a.createElement(o.a,{className:"nav-link",to:e.path,activeClassName:"active"},e.name))}),i.a.createElement(g.a,null,i.a.createElement("a",{className:"nav-link",href:Object(o.c)("/Resume.pdf"),target:"_blank",rel:"noopener noreferrer"},"RESUME")))))},t}(r.Component),k=(a(164),function(e){var t=e.children;return i.a.createElement(o.b,{query:"755544856",render:function(e){return i.a.createElement(i.a.Fragment,null,i.a.createElement(h,null),i.a.createElement("main",null,t),i.a.createElement("footer",{className:"text-center footer fixed-bottom"},"© ",(new Date).getFullYear()," IW.Develop"))},data:n})});k.propTypes={children:l.a.node.isRequired};t.a=k}}]);
//# sourceMappingURL=component---src-pages-index-js-32bdfd5c7a706f3c70b8.js.map