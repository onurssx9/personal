webpackJsonp([1],{NHnr:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=n("7+uW"),a={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{attrs:{id:"app"}},[t("router-view")],1)},staticRenderFns:[]};var r=n("VU/8")({name:"App"},a,!1,function(e){n("fFoq")},null,null).exports,i=n("/ocq"),o=n("Zrlr"),l=n.n(o),c={name:"SearchBar",methods:{progress:function(e){return{width:e}}},data:function(){return{keyword:"",header:"Kaze",skills:[new p("Vue.js","30%","https://vuejs.org/images/logo.png"),new p("Unity 3D","80%","https://www.gfxmag.com/wp-content/uploads/2016/07/unity-icon-vector-logo.png"),new p("HTML5","90%","https://cdn0.iconfinder.com/data/icons/HTML5/512/HTML_Logo.png"),new p("CSS3","90%","http://www.logotypes101.com/free_vector_logo_png/93480/830812341256B99B32E1A9F242BB9F5F/CSS3"),new p("JavaScript","75%","https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png"),new p("Node.js","80%","https://glenneggleton.com/files/2016-02/nodejs-logo.png"),new p("C#","45%","https://ih1.redbubble.net/image.416412087.0587/flat,800x800,070,f.jpg"),new p("React","20%","https://arcweb.co/wp-content/uploads/2016/10/react-logo-1000-transparent.png"),new p("jQuery","100%","https://wepushbuttons.com.au/wp-content/uploads/2012/10/jquery-logo.jpg"),new p("Unreal Engine 4","80%","https://www.epicgames.com/unrealtournament/forums/filedata/fetch?id=352914")]}},computed:{filterSkills:function(){var e=this;return this.skills.filter(function(t){return t.title.toLowerCase().includes(e.keyword.toLowerCase())})}}},p=function e(t,n,s){l()(this,e),this.title=t,this.rate=n,this.image=s},u={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"search-container"},[n("h1",[e._v("Onur Sahin Senturk")]),e._v(" "),n("p",{staticClass:"legal"},[e._v("Copyright © 2018 - All Rights Reserved")]),n("p",[n("input",{directives:[{name:"model",rawName:"v-model",value:e.keyword,expression:"keyword"}],attrs:{placeholder:"What do you need?",spellcheck:"false"},domProps:{value:e.keyword},on:{input:function(t){t.target.composing||(e.keyword=t.target.value)}}})]),n("div",{staticClass:"skills"},e._l(e.filterSkills,function(t){return n("div",{staticClass:"skill"},[n("img",{staticClass:"skill-image",attrs:{src:t.image}}),e._v(" "),n("p",{staticClass:"skill-title"},[e._v(e._s(t.title))]),e._v(" "),n("div",{staticClass:"skill-rate"},[n("div",{staticClass:"percantage"},[e._v(e._s(t.rate))]),e._v(" "),e._m(0,!0),e._v(" "),n("div",{staticClass:"progress",style:e.progress(t.rate)})])])}))])},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"upgrade"},[t("a",{attrs:{href:"https://www.linkedin.com/in/onur-%C5%9Fahin-%C5%9Fent%C3%BCrk-711a16a4/",target:"_blank"}},[this._v("⇪")])])}]};var d=n("VU/8")(c,u,!1,function(e){n("zX91")},"data-v-8c85f1b2",null).exports;s.a.use(i.a);var g=new i.a({routes:[{path:"/",name:"SearchBar",component:d}]});s.a.config.productionTip=!1,new s.a({el:"#app",router:g,components:{App:r},template:"<App/>"})},fFoq:function(e,t){},zX91:function(e,t){}},["NHnr"]);
//# sourceMappingURL=app.ff7d29a650c5a77dc209.js.map