(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{148:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),c=a(159),s=a(157),i=a(165),o=a(7),l=a.n(o),d=a(4),u=a.n(d),m=a(160),p=a(175),g=a(151),b=a(152),h=a(149),f=a.n(h),v=a(153),k={tag:v.h,inverse:u.a.bool,color:u.a.string,block:Object(v.d)(u.a.bool,'Please use the props "body"'),body:u.a.bool,outline:u.a.bool,className:u.a.string,cssModule:u.a.object,innerRef:u.a.oneOfType([u.a.object,u.a.string,u.a.func])},E=function(e){var t=e.className,a=e.cssModule,r=e.color,c=e.block,s=e.body,i=e.inverse,o=e.outline,l=e.tag,d=e.innerRef,u=Object(b.a)(e,["className","cssModule","color","block","body","inverse","outline","tag","innerRef"]),m=Object(v.e)(f()(t,"card",!!i&&"text-white",!(!c&&!s)&&"card-body",!!r&&(o?"border":"bg")+"-"+r),a);return n.a.createElement(l,Object(g.a)({},u,{className:m,ref:d}))};E.propTypes=k,E.defaultProps={tag:"div"};var y=E,j={tag:v.h,top:u.a.bool,bottom:u.a.bool,className:u.a.string,cssModule:u.a.object},N=function(e){var t=e.className,a=e.cssModule,r=e.top,c=e.bottom,s=e.tag,i=Object(b.a)(e,["className","cssModule","top","bottom","tag"]),o="card-img";r&&(o="card-img-top"),c&&(o="card-img-bottom");var l=Object(v.e)(f()(t,o),a);return n.a.createElement(s,Object(g.a)({},i,{className:l}))};N.propTypes=j,N.defaultProps={tag:"img"};var T=N,S={tag:v.h,className:u.a.string,cssModule:u.a.object,innerRef:u.a.oneOfType([u.a.object,u.a.string,u.a.func])},M=function(e){var t=e.className,a=e.cssModule,r=e.innerRef,c=e.tag,s=Object(b.a)(e,["className","cssModule","innerRef","tag"]),i=Object(v.e)(f()(t,"card-body"),a);return n.a.createElement(c,Object(g.a)({},s,{className:i,ref:r}))};M.propTypes=S,M.defaultProps={tag:"div"};var O=M,w=a(233),x={tag:v.h,className:u.a.string,cssModule:u.a.object},L=function(e){var t=e.className,a=e.cssModule,r=e.tag,c=Object(b.a)(e,["className","cssModule","tag"]),s=Object(v.e)(f()(t,"card-title"),a);return n.a.createElement(r,Object(g.a)({},c,{className:s}))};L.propTypes=x,L.defaultProps={tag:"div"};var I=L,P={tag:v.h,className:u.a.string,cssModule:u.a.object},R=function(e){var t=e.className,a=e.cssModule,r=e.tag,c=Object(b.a)(e,["className","cssModule","tag"]),s=Object(v.e)(f()(t,"card-subtitle"),a);return n.a.createElement(r,Object(g.a)({},c,{className:s}))};R.propTypes=P,R.defaultProps={tag:"div"};var A=R,C={tag:v.h,className:u.a.string,cssModule:u.a.object},q=function(e){var t=e.className,a=e.cssModule,r=e.tag,c=Object(b.a)(e,["className","cssModule","tag"]),s=Object(v.e)(f()(t,"card-text"),a);return n.a.createElement(r,Object(g.a)({},c,{className:s}))};q.propTypes=C,q.defaultProps={tag:"p"};var D=q,F={tag:v.h,flush:u.a.bool,className:u.a.string,cssModule:u.a.object},H=function(e){var t=e.className,a=e.cssModule,r=e.tag,c=e.flush,s=Object(b.a)(e,["className","cssModule","tag","flush"]),i=Object(v.e)(f()(t,"list-group",!!c&&"list-group-flush"),a);return n.a.createElement(r,Object(g.a)({},s,{className:i}))};H.propTypes=F,H.defaultProps={tag:"ul"};var W=H,J={tag:v.h,active:u.a.bool,disabled:u.a.bool,color:u.a.string,action:u.a.bool,className:u.a.any,cssModule:u.a.object},K=function(e){e.preventDefault()},V=function(e){var t=e.className,a=e.cssModule,r=e.tag,c=e.active,s=e.disabled,i=e.action,o=e.color,l=Object(b.a)(e,["className","cssModule","tag","active","disabled","action","color"]),d=Object(v.e)(f()(t,!!c&&"active",!!s&&"disabled",!!i&&"list-group-item-action",!!o&&"list-group-item-"+o,"list-group-item"),a);return s&&(l.onClick=K),n.a.createElement(r,Object(g.a)({},l,{className:d}))};V.propTypes=J,V.defaultProps={tag:"li"};var B=V,_=function(e){function t(){return e.apply(this,arguments)||this}return l()(t,e),t.prototype.render=function(){var e=this.props,t=e.cardImage,a=e.imageAlt,r=e.cardTitle,c=e.cardSubtitle,s=e.cardText,i=e.githubLink,o=e.demoLink;return n.a.createElement("div",{className:"col-md-6 col-lg-4"},n.a.createElement(m.Helmet,null,n.a.createElement("link",{rel:"stylesheet",href:"https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css"})),n.a.createElement(p.Animated,{animationIn:"zoomIn",animationOut:"fadeOut",isVisible:!0},n.a.createElement(y,{className:"mb-5 projectCard"},n.a.createElement(T,{className:"img-fluid",top:!0,width:"100%",src:t,alt:a}),n.a.createElement(O,null,n.a.createElement("a",{href:i,target:"_blank",rel:"noopener noreferrer"},n.a.createElement(w.a,{className:"mr-3 mt-3 githubBtn"},"View on GitHub")),n.a.createElement("a",{href:o,target:"_blank",rel:"noopener noreferrer"},n.a.createElement(w.a,{className:"mt-3 mb-3 liveBtn"},"View Live Version")),n.a.createElement(I,null,r),n.a.createElement(A,null,c),n.a.createElement("p",{className:"muted lead"},"Skills Used:"),n.a.createElement(D,null,n.a.createElement(W,null,s.map(function(e,t){return n.a.createElement(B,{key:t},e)})))))))},t}(r.Component);_.propTypes={cardImage:u.a.string,imageAlt:u.a.string,cardTitle:u.a.string,cardText:u.a.array,githubLink:u.a.string,demoLink:u.a.string},_.defaultProps={cardImage:"",imageAlt:"",cardTitle:"",cardText:"",githubLink:"",demoLink:""};var Q=_,U=a(223),z=a.n(U),G=a(224),Y=a.n(G),X=a(225),Z=a.n(X),$=a(226),ee=a.n($),te=a(227),ae=a.n(te),re=function(e){function t(t){var a;return(a=e.call(this,t)||this).state={projects:[{id:1,cardImage:z.a,imageAlt:"Weight Tracker Screenshot",cardTitle:"Weight Tracker",cardSubtitle:"Site that tracks and charts users fitness aspects",cardText:["MongoDb","Express","React","Node.js"],githubLink:"https://github.com/Katelin-Frederick/Weight-Tracker",demoLink:"https://pure-woodland-64566.herokuapp.com/"},{id:2,cardImage:Y.a,imageAlt:"Site Saver Screenshot",cardTitle:"Site Saver",cardSubtitle:"Site that allows the user to save bookmarked sites",cardText:["MongoDb","Express","React","Node.js"],githubLink:"https://github.com/Katelin-Frederick/Site-Saver",demoLink:"https://stark-castle-87536.herokuapp.com/"},{id:3,cardImage:Z.a,imageAlt:"Movie Search Screenshot",cardTitle:"Movie Search",cardSubtitle:"Site that allows the user to search the IMDb API",cardText:["HTML","CSS","JavaScript","React","IMDb API"],githubLink:"https://github.com/Katelin-Frederick/MovieSearch",demoLink:"https://katelin-frederick.github.io/MovieSearch/"},{id:4,cardImage:ee.a,imageAlt:"iTunes Search Screenshot",cardTitle:"iTunes Search",cardSubtitle:"Site that allows the user to search the iTunes API",cardText:["HTML","CSS","JavaScript","iTunes API"],githubLink:"https://github.com/Katelin-Frederick/iTunesSearch",demoLink:"https://katelin-frederick.github.io/iTunesSearch/"},{id:5,cardImage:ae.a,imageAlt:"Three.js Navigation Screenshot",cardTitle:"Three.js Navigation",cardSubtitle:"Site that uses the three.js library to create a navigation element",cardText:["HTML","SASS","CSS","JavaScript","Three.js","Bootstrap","jQuery"],githubLink:"https://github.com/Katelin-Frederick/threejsNavDemo",demoLink:"https://katelin-frederick.github.io/threejsNavDemo/"}]},a}return l()(t,e),t.prototype.render=function(){return n.a.createElement("div",{className:"projects"},n.a.createElement("div",{className:"container mb-5"},n.a.createElement("div",{className:"row"},this.state.projects.map(function(e){return n.a.createElement(Q,{key:e.id,cardImage:e.cardImage,imageAlt:e.imageAlt,cardTitle:e.cardTitle,cardSubtitle:e.cardSubtitle,cardText:e.cardText,githubLink:e.githubLink,demoLink:e.demoLink})}))))},t}(r.Component);t.default=function(){return n.a.createElement(c.a,null,n.a.createElement(s.a,{title:"My Work",keywords:["gatsby","application","react"]}),n.a.createElement(i.a,{headingTitle:"My Work"}),n.a.createElement(re,null))}},150:function(e,t,a){"use strict";a.d(t,"b",function(){return d});var r=a(0),n=a.n(r),c=a(4),s=a.n(c),i=a(32),o=a.n(i);a.d(t,"a",function(){return o.a}),a.d(t,"c",function(){return i.withPrefix});a(154);var l=n.a.createContext({}),d=function(e){return n.a.createElement(l.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):n.a.createElement("div",null,"Loading (StaticQuery)")})};d.propTypes={data:s.a.object,query:s.a.string.isRequired,render:s.a.func,children:s.a.func}},154:function(e,t,a){var r;e.exports=(r=a(156))&&r.default||r},155:function(e){e.exports={data:{site:{siteMetadata:{title:"Eduardo Imery"}}}}},156:function(e,t,a){"use strict";a.r(t);a(33);var r=a(0),n=a.n(r),c=a(4),s=a.n(c),i=a(55),o=a(2),l=function(e){var t=e.location,a=o.default.getResourcesForPathnameSync(t.pathname);return n.a.createElement(i.a,Object.assign({location:t,pageResources:a},a.json))};l.propTypes={location:s.a.shape({pathname:s.a.string.isRequired}).isRequired},t.default=l},157:function(e,t,a){"use strict";var r=a(158),n=a(0),c=a.n(n),s=a(4),i=a.n(s),o=a(160),l=a.n(o);function d(e){var t=e.description,a=e.lang,n=e.meta,s=e.keywords,i=e.title,o=r.data.site,d=t||o.siteMetadata.description;return c.a.createElement(l.a,{htmlAttributes:{lang:a},title:i,titleTemplate:"%s | "+o.siteMetadata.title,meta:[{name:"description",content:d},{property:"og:title",content:i},{property:"og:description",content:d},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:o.siteMetadata.author},{name:"twitter:title",content:i},{name:"twitter:description",content:d}].concat(s.length>0?{name:"keywords",content:s.join(", ")}:[]).concat(n)})}d.defaultProps={lang:"en",meta:[],keywords:[]},d.propTypes={description:i.a.string,lang:i.a.string,meta:i.a.array,keywords:i.a.arrayOf(i.a.string),title:i.a.string.isRequired},t.a=d},158:function(e){e.exports={data:{site:{siteMetadata:{title:"Eduardo Imery",description:"Projects",author:"Eduardo Imery"}}}}},159:function(e,t,a){"use strict";var r=a(155),n=a(0),c=a.n(n),s=a(4),i=a.n(s),o=a(150),l=(a(163),a(7)),d=a.n(l),u=a(228),m=a(229),p=a(230),g=a(234),b=a(231),h=a(232),f=function(e){function t(t){var a;return(a=e.call(this,t)||this).toggle=function(){a.setState({isOpen:!a.state.isOpen})},a.state={isOpen:!1,links:[{id:0,path:"/",name:"Home"},{id:1,path:"/my-work",name:"Projects"},{id:2,path:"/contact",name:"Contact"}]},a}return d()(t,e),t.prototype.render=function(){return c.a.createElement(u.a,{className:"fixed-top",expand:"lg"},c.a.createElement(m.a,{href:"/"},c.a.createElement("span",{className:"branding"},"EduardoImery")),c.a.createElement(p.a,{onClick:this.toggle}),c.a.createElement(g.a,{isOpen:this.state.isOpen,navbar:!0},c.a.createElement(b.a,{className:"ml-auto",navbar:!0},this.state.links.map(function(e){return c.a.createElement(h.a,{key:e.id},c.a.createElement(o.a,{className:"nav-link",to:e.path,activeClassName:"active"},e.name))}),c.a.createElement(h.a,null,c.a.createElement("a",{className:"nav-link",href:Object(o.c)("/Resume.pdf"),target:"_blank",rel:"noopener noreferrer"},"RESUME")))))},t}(n.Component),v=(a(164),function(e){var t=e.children;return c.a.createElement(o.b,{query:"755544856",render:function(e){return c.a.createElement(c.a.Fragment,null,c.a.createElement(f,null),c.a.createElement("main",null,t),c.a.createElement("footer",{className:"text-center footer fixed-bottom"},"© ",(new Date).getFullYear()," IW.Develop"))},data:r})});v.propTypes={children:i.a.node.isRequired};t.a=v},165:function(e,t,a){"use strict";var r=a(0),n=a.n(r),c=a(4),s=a.n(c);function i(e){var t=e.headingTitle;return n.a.createElement("header",null,n.a.createElement("div",{className:"container mb-4 mt-5"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-md-12 text-center"},n.a.createElement("h1",{className:"display-4 mb-4 pageHeader"},t)))))}i.propTypes={headingTitle:s.a.string},i.defaultProps={headingTitle:""},t.a=i},223:function(e,t,a){e.exports=a.p+"static/weightTracker-8b02b2979fdf54014b03a1e0f1fd5070.png"},224:function(e,t,a){e.exports=a.p+"static/siteSaver-62b8252af24b0c971596491aede24626.png"},225:function(e,t,a){e.exports=a.p+"static/movie-fd6536db4ea9d58529979f84d06aba48.png"},226:function(e,t,a){e.exports=a.p+"static/itunes-b37c7a300a7fea0c5167d78e1610aa53.png"},227:function(e,t,a){e.exports=a.p+"static/threejs-86fce521becd4182e887e4a825c4c45a.png"}}]);
//# sourceMappingURL=component---src-pages-my-work-js-3a53a56f1fd30e744803.js.map