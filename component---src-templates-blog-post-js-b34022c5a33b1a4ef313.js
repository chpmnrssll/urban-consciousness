(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{143:function(e,t,a){"use strict";a.r(t),a.d(t,"pageQuery",function(){return p});a(32);var r=a(7),n=a.n(r),i=a(0),s=a.n(i),o=a(148),l=a(157),c=a(152),d=a(153),u=a(149),f=function(e){function t(){return e.apply(this,arguments)||this}return n()(t,e),t.prototype.render=function(){var e=this.props.data.markdownRemark,t=this.props.data.site.siteMetadata.title,a=this.props.pageContext,r=a.previous,n=a.next;return s.a.createElement(c.a,{location:this.props.location,title:t},s.a.createElement(d.a,{title:e.frontmatter.title,description:e.excerpt}),s.a.createElement("h1",null,e.frontmatter.title),s.a.createElement("p",{style:Object.assign({},Object(u.b)(-.2),{display:"block",marginBottom:Object(u.a)(1),marginTop:Object(u.a)(-1)})},e.frontmatter.date),s.a.createElement("div",{dangerouslySetInnerHTML:{__html:e.html}}),s.a.createElement("hr",{style:{marginBottom:Object(u.a)(1)}}),s.a.createElement(l.a,null),s.a.createElement("ul",{style:{display:"flex",flexWrap:"wrap",justifyContent:"space-between",listStyle:"none",padding:0}},s.a.createElement("li",null,r&&s.a.createElement(o.Link,{to:r.fields.slug,rel:"prev"},"← ",r.frontmatter.title)),s.a.createElement("li",null,n&&s.a.createElement(o.Link,{to:n.fields.slug,rel:"next"},n.frontmatter.title," →"))))},t}(s.a.Component);t.default=f;var p="2761936148"},148:function(e,t,a){"use strict";a.r(t),a.d(t,"graphql",function(){return h}),a.d(t,"StaticQueryContext",function(){return f}),a.d(t,"StaticQuery",function(){return p});var r=a(0),n=a.n(r),i=a(4),s=a.n(i),o=a(147),l=a.n(o);a.d(t,"Link",function(){return l.a}),a.d(t,"withPrefix",function(){return o.withPrefix}),a.d(t,"navigate",function(){return o.navigate}),a.d(t,"push",function(){return o.push}),a.d(t,"replace",function(){return o.replace}),a.d(t,"navigateTo",function(){return o.navigateTo});var c=a(150),d=a.n(c);a.d(t,"PageRenderer",function(){return d.a});var u=a(33);a.d(t,"parsePath",function(){return u.a});var f=n.a.createContext({}),p=function(e){return n.a.createElement(f.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):n.a.createElement("div",null,"Loading (StaticQuery)")})};function h(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}p.propTypes={data:s.a.object,query:s.a.string.isRequired,render:s.a.func,children:s.a.func}},149:function(e,t,a){"use strict";a.d(t,"a",function(){return l}),a.d(t,"b",function(){return c});var r=a(162),n=a.n(r),i=a(163),s=a.n(i);s.a.overrideThemeStyles=function(){return{"a.gatsby-resp-image-link":{boxShadow:"none"}}},delete s.a.googleFonts;var o=new n.a(s.a);var l=o.rhythm,c=o.scale},150:function(e,t,a){var r;e.exports=(r=a(151))&&r.default||r},151:function(e,t,a){"use strict";a.r(t);a(32);var r=a(0),n=a.n(r),i=a(4),s=a.n(i),o=a(52),l=a(2),c=function(e){var t=e.location,a=l.default.getResourcesForPathnameSync(t.pathname);return n.a.createElement(o.a,Object.assign({location:t,pageResources:a},a.json))};c.propTypes={location:s.a.shape({pathname:s.a.string.isRequired}).isRequired},t.default=c},152:function(e,t,a){"use strict";a(32);var r=a(7),n=a.n(r),i=a(0),s=a.n(i),o=a(148),l=a(149),c=function(e){function t(){return e.apply(this,arguments)||this}return n()(t,e),t.prototype.render=function(){var e,t=this.props,a=t.location,r=t.title,n=t.children;return e="/urban-consciousness/"===a.pathname?s.a.createElement("h1",{style:Object.assign({},Object(l.b)(1.5),{marginBottom:Object(l.a)(1.5),marginTop:0})},s.a.createElement(o.Link,{style:{boxShadow:"none",textDecoration:"none",color:"inherit"},to:"/"},r)):s.a.createElement("h3",{style:{fontFamily:"Montserrat, sans-serif",marginTop:0}},s.a.createElement(o.Link,{style:{boxShadow:"none",textDecoration:"none",color:"inherit"},to:"/"},r)),s.a.createElement("div",{style:{marginLeft:"auto",marginRight:"auto",maxWidth:Object(l.a)(24),padding:Object(l.a)(1.5)+" "+Object(l.a)(.75)}},e,n,s.a.createElement("footer",null,"© ",(new Date).getFullYear(),", Built with"," ",s.a.createElement("a",{href:"https://www.gatsbyjs.org"},"Gatsby")))},t}(s.a.Component);t.a=c},153:function(e,t,a){"use strict";var r=a(154),n=a(0),i=a.n(n),s=a(4),o=a.n(s),l=a(164),c=a.n(l),d=a(148);function u(e){var t=e.description,a=e.lang,n=e.meta,s=e.keywords,o=e.title;return i.a.createElement(d.StaticQuery,{query:f,render:function(e){var r=t||e.site.siteMetadata.description;return i.a.createElement(c.a,{htmlAttributes:{lang:a},title:o,titleTemplate:"%s | "+e.site.siteMetadata.title,meta:[{name:"description",content:r},{property:"og:title",content:o},{property:"og:description",content:r},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:e.site.siteMetadata.author},{name:"twitter:title",content:o},{name:"twitter:description",content:r}].concat(s.length>0?{name:"keywords",content:s.join(", ")}:[]).concat(n)})},data:r})}u.defaultProps={lang:"en",meta:[],keywords:[]},u.propTypes={description:o.a.string,lang:o.a.string,meta:o.a.array,keywords:o.a.arrayOf(o.a.string),title:o.a.string.isRequired},t.a=u;var f="1025518380"},154:function(e){e.exports={data:{site:{siteMetadata:{title:"Plan to take over the world!",description:"And a few other things.",author:"Purple Tentacle"}}}}},157:function(e,t,a){"use strict";a(158);var r=a(160),n=a(0),i=a.n(n),s=a(148),o=a(161),l=a.n(o),c=a(149);var d="2875951739";t.a=function(){return i.a.createElement(s.StaticQuery,{query:d,render:function(e){var t=e.site.siteMetadata,a=t.author,r=t.social;return i.a.createElement("div",{style:{display:"flex",marginBottom:Object(c.a)(2.5)}},i.a.createElement(l.a,{fixed:e.avatar.childImageSharp.fixed,alt:a,style:{marginRight:Object(c.a)(.5),marginBottom:0,minWidth:50,borderRadius:"100%"}}),i.a.createElement("p",null,"Written by ",i.a.createElement("strong",null,a),"."," ",i.a.createElement("br",null),"Disgusting Humans should follow him on Twitter @",i.a.createElement("a",{href:"https://twitter.com/"+r.twitter},r.twitter)))},data:r})}},158:function(e,t,a){"use strict";a(159)("fixed",function(e){return function(){return e(this,"tt","","")}})},159:function(e,t,a){var r=a(11),n=a(24),i=a(16),s=/"/g,o=function(e,t,a,r){var n=String(i(e)),o="<"+t;return""!==a&&(o+=" "+a+'="'+String(r).replace(s,"&quot;")+'"'),o+">"+n+"</"+t+">"};e.exports=function(e,t){var a={};a[e]=t(o),r(r.P+r.F*n(function(){var t=""[e]('"');return t!==t.toLowerCase()||t.split('"').length>3}),"String",a)}},160:function(e){e.exports={data:{avatar:{childImageSharp:{fixed:{base64:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAATCAIAAAAf7rriAAAACXBIWXMAABcSAAAXEgFnn9JSAAADq0lEQVQ4y2P4jwz+/f/z/8+JeSdXO2043Hri09tP//7/BQqfnHLm0uqrIPm//5CVM8BZf/+A1M2aMstUyjrXON9Xwt/TJeDl3VdAwQPVh1eErUXRh1XznhWHxKp1GBIYGBIZOHPFpucu/Pnj1/6ygzNt5n/98h1k+b9/WDT/+w8SXVW6iaNVgXE2F8NcLv4+lUKpmnl2S5a7rO43m/b87ks0l0M1//sDEnp57eV8kyWejsGMc6SZFsrzNCnolLlG++b2qk6p1+i8e+YByIFomiEu+f7lx46s3Wvs1jl0RDEX8vL4sXBGMzNFMjDPkM3wqigXa7q0/zrcd1DNUJ2ff+ws3LPSfM3c0IVsu9RZk5kY6xgYWhiYqxgYVsv6R6bXCLed330FXTPYt//3Vx5aaLhktce66cZzlartGXZLMi4SByKGLQrs81UTVfKqpdq2t+7F4uyrq6/PNVw4xWPOKrc1M00WZPMVS2doMCyWZFqnyjBXUCXOoFK+rVthUq18+419d5AtB2m+u+fe3YP3r26+sdJy9Vr3dW4VibxzDVm7pThzhDiTBHjyJWQ6TJMDStvEeye4zPz2ERFhDJBYAoL91YfWm67znJjEsEaM242Jx4mBy4+By5+B24GB1Z2BfZFqoXN9vXDHjs598AiDBtinV583eG9a7L2ca5chlw8rWzoDQz8jwwRGhomMDJOZOJIYGGYKeRal9ElMadLpeX4DGuEMf8ExfGPLrVXWaxa4L+Fbb8rYys3YzMDQBkNNDIx9bAzH1d0CYzrlJ1bLtK4p3ATVDHHznrL9ax3XTdWZbRYfwHBZm2mtIuNcIYZpPAzTeZiWSjGc0mNbphKtmF6r1Nmq0duo2v344jOon98/+rDac+0mz81dBpNTBYplS/RAUXVEk+GYFsNhdcZd8gwzuS0c7HPEa6rU21p1+6qkW9aWboZqvrTs6jLLFRu8Ni10WJonVxsrnmliYy4TLCcWIS4VKKVjrx0iH17B2VIr2DZBauoEqWnd4pO6FSe/vvWW4c+fv9vTd610WL3efeNO552bLDb1aE3OVq0ONEu29Q/RS/ZWK3RXKHcVq7aSr3fQafC2qAnxKksMj8hcv3grw+PTT1fYrd5ot2mh85Ly6Gbnxhi5hU7sO4y4TluIXXbWvhPi9iwz/k1d5cfJfV+XLvixedOfA0f/Xrjx7/6r728ZjnaeWOO+rqG6O2BbdsidkvzXPZM/rtr++dit7w9//PkJCk7MQgAGAOKJshWjsCBaAAAAAElFTkSuQmCC",width:50,height:50,src:"/urban-consciousness/static/08e1fc4f2aab79aef3ae2d5bc5d0fe9f/66382/purple_tentacle.png",srcSet:"/urban-consciousness/static/08e1fc4f2aab79aef3ae2d5bc5d0fe9f/66382/purple_tentacle.png 1x,\n/urban-consciousness/static/08e1fc4f2aab79aef3ae2d5bc5d0fe9f/18a61/purple_tentacle.png 1.5x,\n/urban-consciousness/static/08e1fc4f2aab79aef3ae2d5bc5d0fe9f/f52d2/purple_tentacle.png 2x,\n/urban-consciousness/static/08e1fc4f2aab79aef3ae2d5bc5d0fe9f/4ffea/purple_tentacle.png 3x"}}},site:{siteMetadata:{author:"Purple Tentacle",social:{twitter:"purpletentacle"}}}}}},161:function(e,t,a){"use strict";var r=a(8);t.__esModule=!0,t.default=void 0;var n,i=r(a(7)),s=r(a(51)),o=r(a(155)),l=r(a(156)),c=r(a(0)),d=r(a(4)),u=function(e){var t=(0,l.default)({},e);return t.resolutions&&(t.fixed=t.resolutions,delete t.resolutions),t.sizes&&(t.fluid=t.sizes,delete t.sizes),t},f={},p=function(e){var t=u(e),a=t.fluid?t.fluid.src:t.fixed.src;return f[a]||!1},h=[];var m=function(e,t){(void 0===n&&"undefined"!=typeof window&&window.IntersectionObserver&&(n=new window.IntersectionObserver(function(e){e.forEach(function(e){h.forEach(function(t){t[0]===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(n.unobserve(t[0]),t[1]())})})},{rootMargin:"200px"})),n).observe(e),h.push([e,t])},g=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',a=e.sizes?'sizes="'+e.sizes+'" ':"",r=e.srcSetWebp?"<source type='image/webp' srcSet=\""+e.srcSetWebp+'" '+a+"/>":"",n=e.srcSet?'<source srcSet="'+e.srcSet+'" '+a+"/>":"",i=e.title?'title="'+e.title+'" ':"",s=e.alt?'alt="'+e.alt+'" ':'alt="" ',o=e.width?'width="'+e.width+'" ':"",l=e.height?'height="'+e.height+'" ':"",c=e.opacity?e.opacity:"1";return"<picture>"+r+n+"<img "+o+l+t+s+i+'style="position:absolute;top:0;left:0;transition:opacity 0.5s;transition-delay:'+(e.transitionDelay?e.transitionDelay:"0.5s")+";opacity:"+c+';width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},y=c.default.forwardRef(function(e,t){var a=e.style,r=e.onLoad,n=e.onError,i=(0,o.default)(e,["style","onLoad","onError"]);return c.default.createElement("img",(0,l.default)({},i,{onLoad:r,onError:n,ref:t,style:(0,l.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},a)}))});y.propTypes={style:d.default.object,onError:d.default.func,onLoad:d.default.func};var b=function(e){function t(t){var a;a=e.call(this,t)||this;var r=!0,n=!1,i=t.fadeIn,o=p(t);!o&&"undefined"!=typeof window&&window.IntersectionObserver&&(r=!1,n=!0),"undefined"==typeof window&&(r=!1),t.critical&&(r=!0,n=!1);var l=!(a.props.critical&&!a.props.fadeIn);return a.state={isVisible:r,imgLoaded:!1,IOSupported:n,fadeIn:i,hasNoScript:l,seenBefore:o},a.imageRef=c.default.createRef(),a.handleImageLoaded=a.handleImageLoaded.bind((0,s.default)((0,s.default)(a))),a.handleRef=a.handleRef.bind((0,s.default)((0,s.default)(a))),a}(0,i.default)(t,e);var a=t.prototype;return a.componentDidMount=function(){if(this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:p(this.props)}),this.props.critical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},a.handleRef=function(e){var t=this;this.state.IOSupported&&e&&m(e,function(){t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:p(t.props)}),t.setState({isVisible:!0,imgLoaded:!1})})},a.handleImageLoaded=function(){var e,t,a;e=this.props,t=u(e),a=t.fluid?t.fluid.src:t.fixed.src,f[a]=!0,this.setState({imgLoaded:!0}),this.state.seenBefore&&this.setState({fadeIn:!1}),this.props.onLoad&&this.props.onLoad()},a.render=function(){var e=u(this.props),t=e.title,a=e.alt,r=e.className,n=e.style,i=void 0===n?{}:n,s=e.imgStyle,o=void 0===s?{}:s,d=e.placeholderStyle,f=void 0===d?{}:d,p=e.placeholderClassName,h=e.fluid,m=e.fixed,b=e.backgroundColor,w=e.Tag,v="boolean"==typeof b?"lightgray":b,S=(0,l.default)({opacity:this.state.imgLoaded?0:1,transition:"opacity 0.5s",transitionDelay:this.state.imgLoaded?"0.5s":"0.25s"},o,f),E=(0,l.default)({opacity:this.state.imgLoaded||!1===this.state.fadeIn?1:0,transition:!0===this.state.fadeIn?"opacity 0.5s":"none"},o),L={title:t,alt:this.state.isVisible?"":a,style:S,className:p};if(h){var x=h;return c.default.createElement(w,{className:(r||"")+" gatsby-image-wrapper",style:(0,l.default)({position:"relative",overflow:"hidden"},i),ref:this.handleRef,key:"fluid-"+JSON.stringify(x.srcSet)},c.default.createElement(w,{style:{width:"100%",paddingBottom:100/x.aspectRatio+"%"}}),x.base64&&c.default.createElement(y,(0,l.default)({src:x.base64},L)),x.tracedSVG&&c.default.createElement(y,(0,l.default)({src:x.tracedSVG},L)),v&&c.default.createElement(w,{title:t,style:{backgroundColor:v,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,transitionDelay:"0.35s",right:0,left:0}}),this.state.isVisible&&c.default.createElement("picture",null,x.srcSetWebp&&c.default.createElement("source",{type:"image/webp",srcSet:x.srcSetWebp,sizes:x.sizes}),c.default.createElement("source",{srcSet:x.srcSet,sizes:x.sizes}),c.default.createElement(y,{alt:a,title:t,src:x.src,style:E,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError})),this.state.hasNoScript&&c.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:g((0,l.default)({alt:a,title:t},x))}}))}if(m){var A=m,j=(0,l.default)({position:"relative",overflow:"hidden",display:"inline-block",width:A.width,height:A.height},i);return"inherit"===i.display&&delete j.display,c.default.createElement(w,{className:(r||"")+" gatsby-image-wrapper",style:j,ref:this.handleRef,key:"fixed-"+JSON.stringify(A.srcSet)},A.base64&&c.default.createElement(y,(0,l.default)({src:A.base64},L)),A.tracedSVG&&c.default.createElement(y,(0,l.default)({src:A.tracedSVG},L)),v&&c.default.createElement(w,{title:t,style:{backgroundColor:v,width:A.width,opacity:this.state.imgLoaded?0:1,transitionDelay:"0.25s",height:A.height}}),this.state.isVisible&&c.default.createElement("picture",null,A.srcSetWebp&&c.default.createElement("source",{type:"image/webp",srcSet:A.srcSetWebp,sizes:A.sizes}),c.default.createElement("source",{srcSet:A.srcSet,sizes:A.sizes}),c.default.createElement(y,{alt:a,title:t,width:A.width,height:A.height,src:A.src,style:E,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError})),this.state.hasNoScript&&c.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:g((0,l.default)({alt:a,title:t,width:A.width,height:A.height},A))}}))}return null},t}(c.default.Component);b.defaultProps={critical:!1,fadeIn:!0,alt:"",Tag:"div"};var w=d.default.shape({width:d.default.number.isRequired,height:d.default.number.isRequired,src:d.default.string.isRequired,srcSet:d.default.string.isRequired,base64:d.default.string,tracedSVG:d.default.string,srcWebp:d.default.string,srcSetWebp:d.default.string}),v=d.default.shape({aspectRatio:d.default.number.isRequired,src:d.default.string.isRequired,srcSet:d.default.string.isRequired,sizes:d.default.string.isRequired,base64:d.default.string,tracedSVG:d.default.string,srcWebp:d.default.string,srcSetWebp:d.default.string});b.propTypes={resolutions:w,sizes:v,fixed:w,fluid:v,fadeIn:d.default.bool,title:d.default.string,alt:d.default.string,className:d.default.oneOfType([d.default.string,d.default.object]),critical:d.default.bool,style:d.default.object,imgStyle:d.default.object,placeholderStyle:d.default.object,placeholderClassName:d.default.string,backgroundColor:d.default.oneOfType([d.default.string,d.default.bool]),onLoad:d.default.func,onError:d.default.func,onStartLoad:d.default.func,Tag:d.default.string};var S=b;t.default=S}}]);
//# sourceMappingURL=component---src-templates-blog-post-js-b34022c5a33b1a4ef313.js.map