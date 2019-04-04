(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{144:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(159),c=a(157),o=a(165);t.default=function(){return r.a.createElement(i.a,null,r.a.createElement(c.a,{title:"About",keywords:["gatsby","application","react"]}),r.a.createElement(o.a,{headingTitle:"About"}),r.a.createElement("div",{className:"container"},r.a.createElement("h1",{className:"display-4 mt-5",id:"skillsHeader"},"Skills")))}},150:function(e,t,a){"use strict";a.d(t,"b",function(){return u});var n=a(0),r=a.n(n),i=a(4),c=a.n(i),o=a(32),s=a.n(o);a.d(t,"a",function(){return s.a}),a.d(t,"c",function(){return o.withPrefix});a(154);var l=r.a.createContext({}),u=function(e){return r.a.createElement(l.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};u.propTypes={data:c.a.object,query:c.a.string.isRequired,render:c.a.func,children:c.a.func}},154:function(e,t,a){var n;e.exports=(n=a(156))&&n.default||n},155:function(e){e.exports={data:{site:{siteMetadata:{title:"Eduardo Imery"}}}}},156:function(e,t,a){"use strict";a.r(t);a(33);var n=a(0),r=a.n(n),i=a(4),c=a.n(i),o=a(55),s=a(2),l=function(e){var t=e.location,a=s.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(o.a,Object.assign({location:t,pageResources:a},a.json))};l.propTypes={location:c.a.shape({pathname:c.a.string.isRequired}).isRequired},t.default=l},157:function(e,t,a){"use strict";var n=a(158),r=a(0),i=a.n(r),c=a(4),o=a.n(c),s=a(160),l=a.n(s);function u(e){var t=e.description,a=e.lang,r=e.meta,c=e.keywords,o=e.title,s=n.data.site,u=t||s.siteMetadata.description;return i.a.createElement(l.a,{htmlAttributes:{lang:a},title:o,titleTemplate:"%s | "+s.siteMetadata.title,meta:[{name:"description",content:u},{property:"og:title",content:o},{property:"og:description",content:u},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:s.siteMetadata.author},{name:"twitter:title",content:o},{name:"twitter:description",content:u}].concat(c.length>0?{name:"keywords",content:c.join(", ")}:[]).concat(r)})}u.defaultProps={lang:"en",meta:[],keywords:[]},u.propTypes={description:o.a.string,lang:o.a.string,meta:o.a.array,keywords:o.a.arrayOf(o.a.string),title:o.a.string.isRequired},t.a=u},158:function(e){e.exports={data:{site:{siteMetadata:{title:"Eduardo Imery",description:"Projects",author:"Eduardo Imery"}}}}},159:function(e,t,a){"use strict";var n=a(155),r=a(0),i=a.n(r),c=a(4),o=a.n(c),s=a(150),l=(a(163),a(7)),u=a.n(l),d=a(228),m=a(229),p=a(230),f=a(234),E=a(231),g=a(232),y=function(e){function t(t){var a;return(a=e.call(this,t)||this).toggle=function(){a.setState({isOpen:!a.state.isOpen})},a.state={isOpen:!1,links:[{id:0,path:"/",name:"Home"},{id:1,path:"/my-work",name:"Projects"},{id:2,path:"/contact",name:"Contact"}]},a}return u()(t,e),t.prototype.render=function(){return i.a.createElement(d.a,{className:"fixed-top",expand:"lg"},i.a.createElement(m.a,{href:"/"},i.a.createElement("span",{className:"branding"},"EduardoImery")),i.a.createElement(p.a,{onClick:this.toggle}),i.a.createElement(f.a,{isOpen:this.state.isOpen,navbar:!0},i.a.createElement(E.a,{className:"ml-auto",navbar:!0},this.state.links.map(function(e){return i.a.createElement(g.a,{key:e.id},i.a.createElement(s.a,{className:"nav-link",to:e.path,activeClassName:"active"},e.name))}),i.a.createElement(g.a,null,i.a.createElement("a",{className:"nav-link",href:Object(s.c)("/Resume.pdf"),target:"_blank",rel:"noopener noreferrer"},"RESUME")))))},t}(r.Component),h=(a(164),function(e){var t=e.children;return i.a.createElement(s.b,{query:"755544856",render:function(e){return i.a.createElement(i.a.Fragment,null,i.a.createElement(y,null),i.a.createElement("main",null,t),i.a.createElement("footer",{className:"text-center footer fixed-bottom"},"© ",(new Date).getFullYear()," IW.Develop"))},data:n})});h.propTypes={children:o.a.node.isRequired};t.a=h},165:function(e,t,a){"use strict";var n=a(0),r=a.n(n),i=a(4),c=a.n(i);function o(e){var t=e.headingTitle;return r.a.createElement("header",null,r.a.createElement("div",{className:"container mb-4 mt-5"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-12 text-center"},r.a.createElement("h1",{className:"display-4 mb-4 pageHeader"},t)))))}o.propTypes={headingTitle:c.a.string},o.defaultProps={headingTitle:""},t.a=o}}]);
//# sourceMappingURL=component---src-pages-about-js-0d4fbf4dd80f56e0de36.js.map