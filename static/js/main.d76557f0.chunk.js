(this.webpackJsonpdiagnal=this.webpackJsonpdiagnal||[]).push([[0],{134:function(A,e,t){"use strict";t.r(e);var a=t(0),o=t.n(a),g=t(16),r=t.n(g),s=(t(80),t(59)),n=t(60),i=t(74),p=t(72),m=(t(81),t(82),t(136)),c=(t(83),m.a.Search),l=o.a.memo((function(A){var e=A.title,t=A.filterPoster;return o.a.createElement("div",{className:"header"},o.a.createElement("div",{className:"title"},e),o.a.createElement("div",{className:"search"},o.a.createElement(c,{style:{width:"00"},onSearch:function(A){return t(A)}})))})),d=(t(112),t(41)),B=t(67),j=t(68),h=o.a.lazy((function(){return t.e(3).then(t.bind(null,149))})),P=function(A){Object(i.a)(t,A);var e=Object(p.a)(t);function t(){var A;Object(s.a)(this,t);for(var a=arguments.length,g=new Array(a),r=0;r<a;r++)g[r]=arguments[r];return(A=e.call.apply(e,[this].concat(g))).state={loading:!1,data:[],title:"",search:"",scrollTop:0},A.myRef=o.a.createRef(),A.fetchImages2=function(){console.log("fetching images 2"),console.log(A.state.data.length>=20);var e=B.page["content-items"].content;A.state.data.length<=20&&A.state.data.length<40&&A.setState({data:A.state.data.concat(e)})},A.fetchImages3=function(){console.log("fetching images 3"),console.log(A.state.data.length>=40&&A.state.data.length<60);var e=j.page["content-items"].content;A.state.data.length>=40&&A.state.data.length<60&&A.setState({data:A.state.data.concat(e)})},A.filtered=A.state.data,A.filterPoster=function(e){A.setState({search:e})},A}return Object(n.a)(t,[{key:"componentDidMount",value:function(){var A=d.page["content-items"].content,e=d.page.title;this.setState({data:A,title:e})}},{key:"render",value:function(){console.log("App renders");var A=this.state,e=A.data,t=A.title,g=A.search,r=e.filter((function(A){return A.name.toLowerCase().includes(g.toLowerCase())}));return o.a.createElement("div",{className:"App"},o.a.createElement(l,{title:t,filterPoster:this.filterPoster}),o.a.createElement(a.Suspense,{fallback:o.a.createElement("p",null,"...")},o.a.createElement(h,{data:r,fetchImages2:this.fetchImages2,fetchImages3:this.fetchImages3})))}}]),t}(a.Component),E=t(70),u=t(36),D=t(44),y={name:"ramu",age:26},I=function(){var A=arguments.length>0&&void 0!==arguments[0]?arguments[0]:y,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"GIVE_ADDRESS":return Object(D.a)(Object(D.a)({},A),{},{city:e.city});case"GIVE_NAME":return Object.assign({},A,{name:e.name,job:e.job,age:e.age});default:return A}},C=Object(u.b)(I);r.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(E.a,{store:C},o.a.createElement(P,null))),document.getElementById("root"))},41:function(A){A.exports=JSON.parse('{"page":{"title":"Romantic Comedy","total-content-items":"54","page-num-requested":"1","page-size-requested":"20","page-size-returned":"20","content-items":{"content":[{"name":"The Birds","poster-image":"poster1.jpg"},{"name":"Rear Window","poster-image":"poster2.jpg"},{"name":"Family Pot","poster-image":"poster3.jpg"},{"name":"Family Pot","poster-image":"poster2.jpg"},{"name":"Rear Window","poster-image":"poster1.jpg"},{"name":"The Birds","poster-image":"poster3.jpg"},{"name":"Rear Window","poster-image":"poster3.jpg"},{"name":"The Birds","poster-image":"poster2.jpg"},{"name":"Family Pot","poster-image":"poster1.jpg"},{"name":"The Birds","poster-image":"poster1.jpg"},{"name":"The Birds","poster-image":"poster1.jpg"},{"name":"Rear Window","poster-image":"poster2.jpg"},{"name":"Family Pot","poster-image":"poster3.jpg"},{"name":"Family Pot","poster-image":"poster2.jpg"},{"name":"Rear Window","poster-image":"poster1.jpg"},{"name":"The Birds","poster-image":"poster3.jpg"},{"name":"Rear Window","poster-image":"poster3.jpg"},{"name":"The Birds","poster-image":"poster2.jpg"},{"name":"Family Pot","poster-image":"poster1.jpg"},{"name":"The Birds","poster-image":"poster1.jpg"}]}}}')},67:function(A){A.exports=JSON.parse('{"page":{"title":"Romantic Comedy","total-content-items":"54","page-num-requested":"2","page-size-requested":"20","page-size-returned":"20","content-items":{"content":[{"name":"Rear Window","poster-image":"poster5.jpg"},{"name":"Family Pot","poster-image":"poster6.jpg"},{"name":"Family Pot","poster-image":"poster5.jpg"},{"name":"Rear Window","poster-image":"poster4.jpg"},{"name":"The Birds","poster-image":"poster6.jpg"},{"name":"Rear Window","poster-image":"poster6.jpg"},{"name":"The Birds","poster-image":"poster5.jpg"},{"name":"Family Pot","poster-image":"poster4.jpg"},{"name":"The Birds","poster-image":"poster4.jpg"},{"name":"Rear Window","poster-image":"poster5.jpg"},{"name":"Rear Window","poster-image":"poster5.jpg"},{"name":"Family Pot","poster-image":"poster6.jpg"},{"name":"Family Pot","poster-image":"poster5.jpg"},{"name":"Rear Window","poster-image":"poster4.jpg"},{"name":"The Birds","poster-image":"poster6.jpg"},{"name":"Rear Window","poster-image":"poster6.jpg"},{"name":"The Birds","poster-image":"poster5.jpg"},{"name":"Family Pot","poster-image":"poster4.jpg"},{"name":"The Birds","poster-image":"poster4.jpg"},{"name":"Rear Window","poster-image":"poster5.jpg"}]}}}')},68:function(A){A.exports=JSON.parse('{"page":{"title":"Romantic Comedy","total-content-items":"54","page-num-requested":"3","page-size-requested":"20","page-size-returned":"14","content-items":{"content":[{"name":"Family Pot","poster-image":"poster9.jpg"},{"name":"Family Pot","poster-image":"poster8.jpg"},{"name":"Rear Window","poster-image":"poster7.jpg"},{"name":"The Birds","poster-image":"poster9.jpg"},{"name":"Rear Window","poster-image":"poster9.jpg"},{"name":"The Birds","poster-image":"poster8.jpg"},{"name":"Family Pot","poster-image":"poster7.jpg"},{"name":"Family Pot","poster-image":"poster9.jpg"},{"name":"Family Pot","poster-image":"poster8.jpg"},{"name":"Rear Window","poster-image":"poster7.jpg"},{"name":"The Birds with an Extra Long Title","poster-image":"poster9.jpg"},{"name":"Rear Window","poster-image":"poster9.jpg"},{"name":"The Birds","poster-image":"poster8.jpg"},{"name":"Family Pot","poster-image":"posterthatismissing.jpg"}]}}}')},75:function(A,e,t){A.exports=t(134)},80:function(A,e,t){},81:function(A,e,t){},82:function(A,e,t){},83:function(A,e){A.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAABDgAAACoCAYAAAAFOV7fAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAABFpJREFUeNrs28EJwCAUBUFN0n/DCRgtY2EGbMDj8v4cY6wBAAAAEHb5AgAAAKBO4AAAAADyBA4AAAAgT+AAAAAA8gQOAAAAIE/gAAAAAPIEDgAAACBP4AAAAADyBA4AAAAgT+AAAAAA8gQOAAAAIE/gAAAAAPIEDgAAACBP4AAAAADyBA4AAAAgT+AAAAAA8gQOAAAAIE/gAAAAAPIEDgAAACBP4AAAAADyBA4AAAAgT+AAAAAA8gQOAAAAIE/gAAAAAPIEDgAAACBP4AAAAADyBA4AAAAgT+AAAAAA8gQOAAAAIE/gAAAAAPIEDgAAACBP4AAAAADyBA4AAAAgT+AAAAAA8gQOAAAAIE/gAAAAAPIEDgAAACBP4AAAAADyBA4AAAAgT+AAAAAA8gQOAAAAIE/gAAAAAPIEDgAAACBP4AAAAADyBA4AAAAgT+AAAAAA8gQOAAAAIE/gAAAAAPIEDgAAACBP4AAAAADyBA4AAAAgT+AAAAAA8gQOAAAAIE/gAAAAAPIEDgAAACBP4AAAAADyBA4AAAAgT+AAAAAA8gQOAAAAIE/gAAAAAPIEDgAAACBP4AAAAADyBA4AAAAgT+AAAAAA8gQOAAAAIE/gAAAAAPIEDgAAACBP4AAAAADyBA4AAAAgT+AAAAAA8gQOAAAAIE/gAAAAAPIEDgAAACBP4AAAAADyBA4AAAAgT+AAAAAA8gQOAAAAIE/gAAAAAPIEDgAAACBP4AAAAADyBA4AAAAgT+AAAAAA8gQOAAAAIE/gAAAAAPIEDgAAACBP4AAAAADyBA4AAAAgT+AAAAAA8gQOAAAAIE/gAAAAAPIEDgAAACBP4AAAAADyBA4AAAAg79lv+QYAAACg7ASOzzcAAAAAZQIHAAAAkHcCx+sbAAAAgDILDgAAACDPggMAAADIs+AAAAAA8gQOAAAAIM+JCgAAAJBnwQEAAADkWXAAAAAAeRYcAAAAQJ7AAQAAAOQ5UQEAAADyLDgAAACAPAsOAAAAIM+CAwAAAMiz4AAAAADyLDgAAACAPIEDAAAAyHOiAgAAAORZcAAAAAB5FhwAAABAngUHAAAAkCdwAAAAAHlOVAAAAIA8Cw4AAAAgz4IDAAAAyLPgAAAAAPIEDgAAACDPiQoAAACQZ8EBAAAA5FlwAAAAAHkWHAAAAECeBQcAAACQZ8EBAAAA5AkcAAAAQJ4TFQAAACDPggMAAADIs+AAAAAA8iw4AAAAgDyBAwAAAMhzogIAAADkWXAAAAAAeRYcAAAAQJ4FBwAAAJAncAAAAAB5TlQAAACAPAsOAAAAIM+CAwAAAMiz4AAAAADyBA4AAAAgz4kKAAAAkGfBAQAAAORZcAAAAAB5FhwAAABAngUHAAAAkDf3u30DAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFD0CzAAJFo6q4ZAlCMAAAAASUVORK5CYII="}},[[75,1,2]]]);
//# sourceMappingURL=main.d76557f0.chunk.js.map