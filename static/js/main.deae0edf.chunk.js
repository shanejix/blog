(this.webpackJsonpdemo=this.webpackJsonpdemo||[]).push([[0],{104:function(e,t,n){e.exports=n.p+"static/media/1.12b1f52f.png"},105:function(e,t,n){e.exports=n.p+"static/media/2.2f3b4492.png"},106:function(e,t,n){e.exports=n.p+"static/media/3.c1ce5189.png"},107:function(e,t,n){e.exports=n.p+"static/media/4.759d85d2.png"},108:function(e,t,n){e.exports=n.p+"static/media/5.3c43f3d3.png"},109:function(e,t,n){e.exports=n.p+"static/media/6.4122211d.png"},110:function(e,t,n){e.exports={contact:"Contact_contact__2STYF"}},111:function(e,t,n){e.exports=n.p+"static/media/avatar.b895601d.jpg"},112:function(e,t,n){e.exports={footer:"Footer_footer__1bTZh"}},115:function(e,t,n){e.exports=n(373)},186:function(e,t,n){},23:function(e,t,n){e.exports={posts:"Posts_posts__1u5xY",title:"Posts_title__2oHC6",content:"Posts_content__2_IKf",item:"Posts_item__2HiGH",meta:"Posts_meta__1HU5R",itemtitle:"Posts_itemtitle__3Btja",pagination:"Posts_pagination__2ZHj1"}},373:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(14),l=n.n(i),o=n(20),c=n(26),s=n(99),m=n.n(s),u=n(100),p=n(74),h=Object(c.c)({posts:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"REQUEST_POSTS":return[].concat(Object(p.a)(e),Object(p.a)(t.payload));default:return e}}}),d=Object(c.d)(h,Object(c.a)(m.a,u.a)),f=n(33),b=n(34),g=n(36),y=n(35),E=n(37),j=n(15),v=n(21),_=(n(124),n(73)),x=n(69),k=n.n(x),O="https://api.github.com/repos/shanejix/shanejix.github.io/issues",w={},N=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:O,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:w,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"GET";return new Promise((function(a,r){("POST"===n?k.a.post(e,t):k.a.get(e,{params:t})).then((function(e){_.a.success("request sucess"),a(e)})).catch((function(e){_.a.error("request error"+e.message)}))}))},M=function(e){N().then((function(t){var n=[];t&&200===t.status&&(t.data.forEach((function(e){n.push({id:e.id,title:e.title,time:e.updated_at,labels:e.labels,body:e.body})})),localStorage.setItem("aticle-lists",JSON.stringify(n)||""),e(n))}))},S=function(e){function t(){return Object(f.a)(this,t),Object(g.a)(this,Object(y.a)(t).apply(this,arguments))}return Object(E.a)(t,e),Object(b.a)(t,[{key:"componentDidUpdate",value:function(e){this.props.location!==e.location&&window.scrollTo(0,0)}},{key:"render",value:function(){return this.props.children}}]),t}(r.a.Component),P=Object(v.f)(S),T=n(23),A=n.n(T),B=[{id:"1",title:"\u5982\u4f55\u627e\u5230\u65f6\u85aa 80 \u7f8e\u5143\u7684\u8fdc\u7a0b\u5de5\u4f5c\uff08\u4e00\uff09",time:"2018-15-56",tags:"job"},{id:"2",title:"\u5982\u4f55\u627e\u5230\u65f6\u85aa 80 \u7f8e\u5143\u7684\u8fdc\u7a0b\u5de5\u4f5c\uff08\u4e8c\uff09",time:"2018-15-56",tags:"job"},{id:"3",title:"\u5982\u4f55\u627e\u5230\u65f6\u85aa 80 \u7f8e\u5143\u7684\u8fdc\u7a0b\u5de5\u4f5c\uff08\u4e09\uff09",time:"2018-15-56",tags:"job"},{id:"3",title:"\u5982\u4f55\u627e\u5230\u65f6\u85aa 80 \u7f8e\u5143\u7684\u8fdc\u7a0b\u5de5\u4f5c\uff08\u56db\uff09",time:"2018-15-56",tags:"job"},{id:"3",title:"\u5982\u4f55\u627e\u5230\u65f6\u85aa 80 \u7f8e\u5143\u7684\u8fdc\u7a0b\u5de5\u4f5c\uff08\u4e94\uff09",time:"2018-15-56",tags:"job"},{id:"3",title:"\u5982\u4f55\u627e\u5230\u65f6\u85aa 80 \u7f8e\u5143\u7684\u8fdc\u7a0b\u5de5\u4f5c\uff08\u516d\uff09",time:"2018-15-56",tags:"job"}];var C=Object(v.f)(Object(o.b)((function(e){return{posts:e.posts}}))((function(e){var t=B,n=e.location.pathname,a=e.posts;return t="/"===n?a.length&&a.slice(0,6)||B:a||B,r.a.createElement("div",{className:A.a.posts},r.a.createElement("h2",{className:A.a.title},"Posts"),r.a.createElement("div",{className:A.a.content},r.a.createElement("ul",null,t.map((function(e,t){return r.a.createElement("li",{key:t,className:A.a.item},r.a.createElement("span",{className:A.a.meta},r.a.createElement("span",null,e.time),r.a.createElement("a",{href:"javascript"},e.tags)),r.a.createElement("h3",{className:A.a.itemtitle},r.a.createElement(j.b,{to:{pathname:"/detail/".concat(e.id)}},e.title)))}))),r.a.createElement("div",{className:A.a.pagination},r.a.createElement(j.b,{to:"/posts"},"\u66f4\u591a\u6587\u7ae0"))))}))),I=n(52),J=n.n(I),R=n(104),F=n.n(R),H=n(105),L=n.n(H),U=n(106),V=n.n(U),Y=n(107),q=n.n(Y),D=n(108),G=n.n(D),Z=n(109),Q=n.n(Z),W=[{key:Math.random(),title:"shanejix.github.io",des:"my blog:react+redux+antd",imgSrc:F.a,href:"https://github.com/shanejix/shanejix.github.io"},{key:Math.random(),title:"make-wheels",des:"daily wheel making",imgSrc:L.a,href:"https://github.com/shanejix/make-wheels"},{key:Math.random(),title:"umi-cart",des:"familiar with umi development process",imgSrc:V.a,href:"https://github.com/shanejix/umi-cart"},{key:Math.random(),title:"reactblog-front",des:"blog management system:react+redux+antd",imgSrc:q.a,href:"https://github.com/shanejix/reactblog-front"},{key:Math.random(),title:"todoMVC-plus",des:"todomvc demo and more",imgSrc:G.a,href:"https://github.com/shanejix/todoMVC-plus"},{key:Math.random(),title:"express_blog",des:"familiar with the backend development process",imgSrc:Q.a,href:"https://github.com/shanejix/express_blog"}];function z(){return r.a.createElement("div",{className:J.a.projects},r.a.createElement("h2",{className:J.a.title},"Projects"),r.a.createElement("ul",{className:J.a.list},W.map((function(e){return r.a.createElement("li",{key:e.key},r.a.createElement("a",{href:e.href},r.a.createElement("h3",null," ",e.title," "),r.a.createElement("p",null,e.des),r.a.createElement("img",{src:e.imgSrc,alt:"proj-img"})))}))))}var K=n(110),X=n.n(K);function $(){return r.a.createElement("div",{className:X.a.contact},r.a.createElement("h2",null,"Contact"),r.a.createElement("p",null,"I\u2019m a Front-end developer with more than one years working experience and plan to be a Full-stack developer . If you have opportunity about JavaScript or React, please get in touch me by"," ",r.a.createElement("a",{href:"mailto:shanejix@vip.163.com"},"E-mail")," or find me on other platforms"))}n(184);var ee=n(51),te=(n(186),n(111)),ne=n.n(te),ae=[{key:Math.random(),type:"github",href:"https://github.com/shanejix",display:!0},{key:Math.random(),type:"twitter",href:"https://twitter.com/shanejix",display:!0},{key:Math.random(),type:"medium",href:"https://medium.com/shanejix",display:!0},{key:Math.random(),type:"youtube",href:"https://youtube.com/shanejix",display:!0},{type:"reddit",href:"https://reddit.com/shanejix",display:!0},{key:Math.random(),type:"weibo",href:"https://weibo.com/shanejix",display:!0},{key:Math.random(),type:"github",href:"https://github.com",display:!1}],re=[{key:Math.random(),title:"Blog",href:"/posts",display:!0},{key:Math.random(),title:"Projects",href:"/",display:!0},{key:Math.random(),title:"TimeLine",href:"/timeline",display:!0},{key:Math.random(),title:"Message",href:"/message",display:!0},{key:Math.random(),title:"Friends",href:"/friends",display:!0},{key:Math.random(),title:"Other",href:"/other",display:!0}];function ie(){return r.a.createElement("header",{className:"header"},r.a.createElement("div",{className:"header-wrapper"},r.a.createElement("div",{className:"header-avatar"},r.a.createElement("img",{alt:"avatar",src:ne.a})),r.a.createElement("div",{className:"header-info"},r.a.createElement("a",{href:"/",className:"header-title"},r.a.createElement("h1",null,"ShaneJix")),r.a.createElement("p",{className:"header-description"},"Web developer, open-source contributor and lifelong learner."),r.a.createElement("ul",{className:"header-nav-links"},re.map((function(e,t){return e.display&&r.a.createElement("li",{kye:e.key},r.a.createElement(j.b,{to:e.href},e.title))}))),r.a.createElement("ul",{className:"header-social"},ae.map((function(e,t){return e.display&&r.a.createElement("li",{key:e.key},r.a.createElement("a",{href:e.href,target:"blank"},r.a.createElement(ee.a,{type:e.type})))}))))))}var le=n(112),oe=n.n(le);function ce(){return r.a.createElement("footer",{className:oe.a.footer},r.a.createElement("p",null,"@shane"))}function se(){return r.a.createElement("div",null,r.a.createElement(ie,null),r.a.createElement("main",{style:{marginLeft:"10vw"}},r.a.createElement(C,null),r.a.createElement(z,null),r.a.createElement($,null)),r.a.createElement(ce,null))}function me(){return r.a.createElement("div",null,r.a.createElement(ie,null),r.a.createElement("main",{style:{marginLeft:"10vw"}},r.a.createElement(C,null)),r.a.createElement(ce,null))}var ue=n(38),pe=n.n(ue),he=n(53),de=n.n(he),fe=n(113),be=n.n(fe),ge={body:"\u6d89\u53ca\u7684\u9762\u8bd5\u9898\u76ee\n\n  - \u9879\u76ee\u4e2d\u6700\u5f97\u610f\u7684\u6a21\u5757\u4ee5\u53ca\u5b9e\u73b0\u601d\u8def\uff1f\n  - \u6839\u636e\u65f6\u95f4\u6233\u548c\u662f\u65f6\u95f4\u683c\u5f0f\u5f97\u5230\u4e00\u4e2a\u65f6\u95f4\uff1f\n  - Ajax\u6709\u90a3\u51e0\u4e2a\u8f6c\u6001\u5206\u522b\u4ee3\u8868\u4ec0\u4e48\uff1f\n  - \u5982\u4f55\u5b9e\u73b0Ajax\u8de8\u57df\uff1f\n  - JavaScript\u4e2d\u7684\u5185\u7f6e\u5bf9\u8c61\u6709\u90a3\u4e9b\uff1f\n  - \u5982\u4f55\u904d\u5386json\uff1f\n  - \u80fd\u53d1\u9001\u8bf7\u6c42\u7684\u6807\u7b7e\u6709\u90a3\u4e9b\uff1f\n  - \u80fd\u5b9e\u73b0\u8df3\u8f6c\u7684\u6807\u7b7e\u6709\u90a3\u4e9b\uff1f=>\u8def\u7531\u539f\u7406\n  - BOM\u5bf9\u8c61\u6709\u90a3\u4e9bAPI\uff1f\n  \n  \u4ee5\u4e0a\u7f57\u5217\u662f\u6309\u7167\u9762\u8bd5\u987a\u5e8f\u7f57\u5217\uff0c\u867d\u7136\u770b\u4f3c\u7b80\u5355\uff0c\u4f46\u662f\u9762\u8bd5\u5b98\uff08\u56e0\u8be5\u662f\u90e8\u95e8\u5927\u4f6c\uff09\u5c55\u5f00\u7684\u5185\u5bb9\u6bd4\u8f83\u591a\uff0c\u57fa\u672c\u4e0a\u62d3\u5bbd\u4e86\u95ee\u8fd8\u4f1a\u95ee\u9053\u5e95\u5c42\u7684\u5b9e\u73b0\uff0c\u4ee5\u53ca\u51fa\u73b0\u95ee\u9898\u548c\u601d\u8003\u95ee\u9898\u7684\u903b\u8f91\u4ee5\u53ca\u89e3\u51b3\u95ee\u9898\u7684\u80fd\u529b\u3002\u5168\u7a0b\u61f5\u903c\uff0c\u95ee\u9053\u6700\u540e\u81ea\u5351+999\u3002\u4e3a\u4e86\u627e\u56de\u4fe1\u5fc3\uff0c\u5199\u7bc7\u6587\u7ae0\u67e5\u6f0f\u8865\u7f3a~~~\n  \n  \u4e3a\u4ec0\u4e48\u8bf4\u72b6\u6001\u6781\u5dee\u5462\uff1f\u4e0b\u5348\u4e24\u70b9\u534a\u5230\u516c\u53f8\uff0c\u52a0\u4e0a\u8fd9\u4e9b\u5929\u7761\u7720\u4e25\u91cd\u4e0d\u8db3\uff0c\u8001\u6234\u90fd\u662f\u660f\u660f\u6c89\u6c89\u7684\uff0c\u6240\u4ee5\u5f88\u591a\u4e1c\u897f\u90fd\u662f\u5185\u5fc3\u6709\u70b9\u6297\u62d2\u53bb\u601d\u8003\uff01\u4e0b\u9762\u8bf4\u8bf4\u5177\u4f53\u7684\u9898\u76ee\n  \n  \n  \n  \u8bb2\u4e00\u8bb2\u9879\u76ee\u4e2d\u6700\u5f97\u610f\u7684\u6a21\u5757\uff1f\n  \n  \u8fd9\u662f\u5230\u9001\u547d\u9898\uff0c\u4e0d\u7ba1\u4f60\u8bf4\u4ec0\u4e48\uff0c\u603b\u6709\u5f88\u591a\u7684\u4e1c\u897f\u53ef\u4ee5\u88ab\u62d3\u5c55\u5230\u3002\u88ab\u95ee\u5230\u8fd9\u95ee\u9898\u662f\uff0c\u6211\u4e5f\u662f\u4e00\u8138\u61f5\u903c\uff0c\u4e4b\u524d\u4e5f\u6ca1\u6709\u78b0\u5230\u8fc7\u7c7b\u4f3c\u7684\u53d1\u95ee\uff0c\u6240\u4ee5\u5c31\u652f\u652f\u543e\u543e\u7684\u5f88\u614c\uff0c\u8bf4\u4e86\u4e0b\u524d\u51e0\u5929\u7684\u505a\u7684\u65e5\u5386\u7ec4\u4ef6\u3002\u78e8\u5408\u53d8\u5929\u8fdb\u5165\u7b2c\u4e8c\u9898\n  \n  \n  \n  \u5982\u4f55\u6839\u636e\u65f6\u95f4\u6233\u548c\u65f6\u95f4\u683c\u5f0f\u5f97\u5230\u4e00\u4e2a\u65f6\u95f4\u6570\u636e\uff1f\n  \n  \u5e94\u8be5\u662f\u6211\u6ca1\u6709\u542c\u6e05\u4ed6\u8bf4\u7684\u5185\u5bb9\uff0c\u4f46\u662f\u5927\u6982\u5c31\u662f\u8fd9\u4e2a\u610f\u601d\u3002\n  \n  \u6211\u7684\u601d\u8def\uff1a\u5c06\u65f6\u95f4\u6233\u89e3\u6790\u51fa\u5e74\u6708\u65e5\u5c06\u65f6\u95f4\u683c\u5f0f\u89e3\u6790\u6210\u6a21\u677f\uff0c\u7136\u540e\u62fc\u63a5\u6210\u65f6\u95f4\u6570\u636e\u8fd4\u56de\n  \n  \u4f46\u662f\uff0c\u9762\u6211\u7684\u5927\u4f6c\uff0c\u6c89\u9ed8\u4e0d\u8bed\uff0c\u8c8c\u4f3c\u4e0d\u662f\u8fd9\u4e48\u56de\u4e8b\uff0c\u6c14\u6c1b\u5341\u5206\u5c34\u5c2c\n  \n  \n  \n  \u8bf4\u4e0bAjax\u7684\u51e0\u79cd\u72b6\u6001\uff1f\n  \n  \u6765\u5230\u7b2c\u4e09\u9898\uff0c\n  \n  \u6709\u51e0\u79cd\u8f6c\u6001\uff1f\n  \n  \u6211\u7b54\uff1a01234\n  \n  \u5206\u522b\u4ee3\u8868\u4ec0\u4e48\u610f\u601d\uff1f\n  \n  \u6211\u7b54\uff1a0\u672a\u59cb\u5316\uff0c\u672a\u8c03\u7528open\u65b9\u6cd5\uff1b1\u521d\u59cb\u5316\uff0c\u8c03\u7528open()\u65b9\u6cd5\uff1b2\u53d1\u9001\uff0c\u8c03\u7528send()\uff1b3\u63a5\u6536\u5230\u5934\u4fe1\u606f\uff1b4\u63a5\u6536\u5b8c\u6210\n  \n  \u7136\u540e\u95ee\u4e86\u53cd\u95ee\u6211\uff1a3\u65e2\u7136\u662f\u63a5\u6536\u5934\u4fe1\u606f\uff0c\u90a3\u4e48\u786e\u5b9a\u63a5\u6536\u5230\u4e86\u6570\u636e\uff0c\u6405\u548c\u4e86\u534a\u5929\uff0c\u4ed6\u8bf4\u6211\u7684\u72b6\u6001\u8bb0\u9519\u4e86\u3002\u5e76\u4e14\u544a\u77e5\u6211\u6ca1\u6709\u89e3\u51b3\u95ee\u9898\u7684\u80fd\u529b\uff1b4\u662f\u63a5\u6536\u5230\u6570\u636e\u7eb3\u95f73\u5e94\u8be5\u662f\u63a5\u6536\u5230\u4f53\uff0c\u4f9d\u6b21\u5f80\u4e0a0\u5e94\u8be5\u662f\u521d\u59cb\u5316\uff0c\u8fd9\u662f\u6309\u7167\u4ed6\u7684\u63a8\u7406\uff1b\u5509\uff0c\u6211\u5f53\u65f6\u4e00\u8138\u61f5\u903c\uff0c\u4e5f\u4e0d\u6562\u53cd\u9a73\uff0c\u7ec3\u7ec3\u70b9\u5934\u3002\u56de\u6765\u7ffb\u4e86\u9ad8\u7a0b\uff0c\u8bc1\u5b9e\u6211\u8bf4\u7684\u6ca1\u6709\u9519\uff01\uff01\uff01\n  \n  ![1567656983953](https://user-images.githubusercontent.com/38394743/64312719-c1ef8c80-cfdb-11e9-88cc-745069d62a86.png)\n  \n  \n  \n  \n  \u5982\u4f55\u5b9e\u73b0Ajax\u8de8\u57df\uff1f\n  \n  \u8fd9\u4e2a\u5f53\u65f6\u778e\u5199\u7684\u901a\u8fc7\u8bbe\u7f6e\u5934\u4fe1\u606f\u914d\u5408\u540e\u7aef\u4f7f\u7528CORS\u8fdb\u884c\u8de8\u57df\uff0c\u4f46\u662f\u524d\u5929\u8bbe\u7f6e\u5934\u6ca1\u6709\u7528\u3002\u9700\u8981\u540e\u53f0\u8bbe\u7f6e\u5934\u6240\u4ee5\u4e0d\u884c\n  \n  \u53ef\u884c\u7684\u601d\u8def\u662f\u53ef\u4ee5\u7528jsonp\u5b9e\u73b0\uff0c\u5199\u7684\u65f6\u5019\u6ca1\u6709\u53cd\u5e94\u8fc7\u6765\uff0c\u5509\uff0c\u53ef\u60dc\uff01\n  \n  \u4e0b\u9762\u662f\u641c\u7d22\u7684\u5230\u7684\u76f8\u5173\u8d44\u6599\uff1a\n  \n  ajax\u8de8\u8d8a\u65b9\u6848\uff1ahttps://segmentfault.com/a/1190000012469713\n  \n  cors\uff1ahttp://www.ruanyifeng.com/blog/2016/04/cors.html\n  \n  \n  \n  JavaScript\u4e2d\u7684\u5185\u7f6e\u5bf9\u8c61\u6709\u90a3\u4e9b\uff1f\n  \n  \u8fd9\u4e2a\u6ca1\u5565\u8bf4\u7684\uff0c\u4f46\u662f\u6211\u5f53\u65f6\u8111\u888b\u77ed\u8def\u4e86\uff0c\u6ca1\u8bf4\u5b8c\n  \n  \u5185\u7f6e\u5bf9\u8c61\u5305\u542b\uff1a\n  \n  - Number\n  - String\n  - Boolean\n  - Array\n  - Math\n  - Date\n  - Object\n  - Error\n  - Global\n  - Function\n  - RegExp\n  - JSON\n  \n  \n  \n  \u5982\u4f55\u904d\u5386json\uff1f\n  \n  \u6211\u7684\u56de\u7b54\n  \n  - for-in\n  \n  - Object.keys+for\n  \n  - for-of\n  \n  \n  \n  \u80fd\u53d1\u9001\u8bf7\u6c42\u7684\u6807\u7b7e\u6709\u90a3\u4e9b\uff1f\n  \n  \u6211\u7684\u56de\u7b54\uff1a\n  \n  - a\n  - img\n  - script\n  - link\n  - audio\n  - video\n  \n  \u53cd\u95ee\u8fd8\u6709\u6ca1\u6709\uff1f\n  \n  \u4e00\u8138\u61f5\u903c\uff0c\u540e\u6765\u56de\u5fc6\u8d77\u6765\u771f\u662f\u60ed\u6127\uff0cform\u8868\u5355\u8fd9\u4e48\u91cd\u8981\u7684\u90fd\u6ca1\u8bf4\u4e0a\uff0c\u96be\u53d7\uff01\n  \n  \n  \n  \u80fd\u5b9e\u73b0\u8df3\u8f6c\u7684\u6807\u7b7e\u6709\u90a3\u4e9b\uff1f\n  \n  \u6211\u53ea\u7b54\u4e86a\u6807\u7b7e\uff0c\u7136\u540e\u53c8\u662f\u4e00\u7247\u6c89\u9ed8\uff0c\u5c34\u5c2c\n  \n  \u7136\u540e\u95ee\u4e86a\u6807\u7b7e\u7684\u5b9e\u73b0\u539f\u7406\uff1f\uff1f\uff1f\uff1f\n  \n  \u540e\u9762\uff0c\u5dee\u4e86\u4e0ba\u80fd\u5b9e\u73b0\u8df3\u8f6c\u56e0\u8be5\u662fhref\u5c5e\u6027\u8d77\u5230\u7684\u4f5c\u7528\uff1awindow.location.href\uff1b\u6240\u4ee5\u4e0b\u9762\u95ee\u4e86\u6211BOM\u5bf9\u8c61\n  \n  \n  \n  BOM\u5bf9\u8c61\u6709\u90a3\u4e9bAPI\uff1f\n  \n  \u8fd9\u4e2a\u6ca1\u6709\u7b54\u5b8c\n  \n  - navigator\n  - location\n  - history\n  - screen\n  - window\n  \n  \n  \n  **\u603b\u7ed3**\n  \n  - \u901a\u8fc7\u8fd9\u6b21\u9762\u8bd5\u53d1\u73b0html\u548ccss\u5f88\u591a\u4e1c\u897f\u90fd\u662f\u53ea\u77e5\u9053\u76ae\u6bdb\uff0c\u6ca1\u6709\u6df1\u5165\u539f\u7406\n  \n  - \u6d4f\u89c8\u5668BOM\u5bf9\u8c61\u4e86\u89e3\u751a\u5c11\n  \n  ",id:500868903,labels:[],time:"2019-10-01T12:40:28Z",title:"\u8bb0\u4e00\u6b21\u72b6\u6001\u6781\u5dee\u7684\u9762\u8bd5"},ye=function(e){function t(){return Object(f.a)(this,t),Object(g.a)(this,Object(y.a)(t).apply(this,arguments))}return Object(E.a)(t,e),Object(b.a)(t,[{key:"componentWillMount",value:function(){de.a.setOptions({renderer:new de.a.Renderer,gfm:!0,tables:!0,breaks:!0,pedantic:!1,sanitize:!0,smartLists:!0,smartypants:!1,highlight:function(e){return be.a.highlightAuto(e).value}})}},{key:"render",value:function(){var e={},t=this.props.posts,n=this.props.match.params.id;return e=t.length?t.filter((function(e){return Number(e.id)===Number(n)}))[0]:ge,r.a.createElement("div",{className:pe.a.detail},r.a.createElement("h2",{className:pe.a.title},e.title),r.a.createElement("p",{className:pe.a.info},r.a.createElement("span",null,e.time),r.a.createElement("span",null,"tags")),r.a.createElement("div",{id:"content",className:pe.a.content,dangerouslySetInnerHTML:{__html:e.body?de()(e.body):null}}),r.a.createElement("p",{className:pe.a.comment},"\u5982\u679c\u4f60\u770b\u4e0d\u5230\u8bc4\u8bba\uff0c\u8bf4\u660e\u4f60\u6ca1\u6709\u79d1\u5b66\u4e0a\u7f51"))}}]),t}(r.a.Component),Ee=Object(v.f)(Object(o.b)((function(e){return{posts:e.posts}}),null)(ye));function je(){return r.a.createElement("div",null,r.a.createElement(ie,null),r.a.createElement("main",{style:{marginLeft:"10vw",marginTop:"-15vh"}},r.a.createElement(Ee,null)),r.a.createElement(ce,null))}function ve(){return r.a.createElement("div",null,r.a.createElement(ie,null),r.a.createElement("main",{style:{marginLeft:"10vw"}},"\u52a0\u73ed\u5efa\u8bbe\u4e2d......"),r.a.createElement(ce,null))}var _e=function(e){function t(){return Object(f.a)(this,t),Object(g.a)(this,Object(y.a)(t).apply(this,arguments))}return Object(E.a)(t,e),Object(b.a)(t,[{key:"componentDidMount",value:function(){var e=this;setTimeout((function(){M(e.props.updatePosts)}),0)}},{key:"render",value:function(){return r.a.createElement(j.a,null,r.a.createElement(P,null,r.a.createElement(v.c,null,r.a.createElement(v.a,{exact:!0,path:"/",component:se}),r.a.createElement(v.a,{exact:!0,path:"/posts",component:me}),r.a.createElement(v.a,{path:"/detail/:id",component:je}),r.a.createElement(v.a,{component:ve}))))}}]),t}(r.a.Component),xe=Object(o.b)(null,(function(e){return{updatePosts:function(t){return e(function(e){return{type:"REQUEST_POSTS",payload:e}}(t))}}}))(_e);l.a.render(r.a.createElement(o.a,{store:d},r.a.createElement(xe,null)),document.getElementById("root"))},38:function(e,t,n){e.exports={detail:"detail_detail__36Slq",title:"detail_title__1-Fjp",info:"detail_info__29Bss",content:"detail_content__36naV",comment:"detail_comment__2RhpY"}},52:function(e,t,n){e.exports={projects:"Projects_projects__PAxUm",title:"Projects_title__9HoYI",list:"Projects_list__2lnVj"}}},[[115,1,2]]]);
//# sourceMappingURL=main.deae0edf.chunk.js.map