(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-d50801c8"],{"0cef":function(t,e,n){"use strict";n.d(e,"f",(function(){return i})),n.d(e,"g",(function(){return r})),n.d(e,"o",(function(){return o})),n.d(e,"i",(function(){return s})),n.d(e,"j",(function(){return c})),n.d(e,"a",(function(){return u})),n.d(e,"m",(function(){return l})),n.d(e,"k",(function(){return d})),n.d(e,"n",(function(){return f})),n.d(e,"b",(function(){return p})),n.d(e,"d",(function(){return m})),n.d(e,"p",(function(){return h})),n.d(e,"h",(function(){return g})),n.d(e,"c",(function(){return v})),n.d(e,"e",(function(){return b})),n.d(e,"l",(function(){return y}));var a=n("b775");function i(t){return Object(a["a"])({url:"/layout/",method:"post",headers:{"Content-Type":"multipart/form-data"},data:t})}function r(t){return Object(a["a"])({url:"/layout/"+t+"/delete/"})}function o(t){return Object(a["a"])({url:"/img/upload/",method:"post",headers:{"Content-Type":"multipart/form-data"},data:t})}function s(t){return Object(a["a"])({url:"/layout/?id="+t,method:"get"})}function c(t){return Object(a["a"])({url:"/layout/"+t+"/release/",method:"get"})}function u(t){return Object(a["a"])({url:"build/compose/",method:"post",data:t})}function l(t){return Object(a["a"])({url:"update/compose/",method:"post",data:t})}function d(){return Object(a["a"])({url:"show/compose/",method:"get"})}function f(t){return Object(a["a"])({url:"/file/upload/",method:"post",headers:{"Content-Type":"multipart/form-data"},data:t})}function p(t){return Object(a["a"])({url:"/file/delete/",method:"post",headers:{"Content-Type":"multipart/form-data"},data:t})}function m(t){return Object(a["a"])({url:"/download_layout_image/",method:"post",data:t})}function h(t){return Object(a["a"])({url:"/upload_zip_file/",method:"post",headers:{"Content-Type":"multipart/form-data"},data:t})}function g(t){return Object(a["a"])({url:"/layout/"+t+"/download/",method:"get",responseType:"blob"})}function v(t){return Object(a["a"])({url:"/download/official/website/layout/",method:"post",data:t})}function b(){return Object(a["a"])({url:"get/official/website/layout",method:"get"})}function y(t,e){return Object(a["a"])({url:"/layout/"+t+"/update_desc/",method:"post",data:e})}},"0dec":function(t,e,n){t.exports=n("f292")},"11e9":function(t,e,n){var a=n("52a7"),i=n("4630"),r=n("6821"),o=n("6a99"),s=n("69a8"),c=n("c69a"),u=Object.getOwnPropertyDescriptor;e.f=n("9e1e")?u:function(t,e){if(t=r(t),e=o(e,!0),c)try{return u(t,e)}catch(n){}if(s(t,e))return i(!a.f.call(t,e),t[e])}},1499:function(t,e,n){"use strict";n("99ed")},"214f":function(t,e,n){"use strict";n("b0c5");var a=n("2aba"),i=n("32e9"),r=n("79e5"),o=n("be13"),s=n("2b4c"),c=n("520a"),u=s("species"),l=!r((function(){var t=/./;return t.exec=function(){var t=[];return t.groups={a:"7"},t},"7"!=="".replace(t,"$<a>")})),d=function(){var t=/(?:)/,e=t.exec;t.exec=function(){return e.apply(this,arguments)};var n="ab".split(t);return 2===n.length&&"a"===n[0]&&"b"===n[1]}();t.exports=function(t,e,n){var f=s(t),p=!r((function(){var e={};return e[f]=function(){return 7},7!=""[t](e)})),m=p?!r((function(){var e=!1,n=/a/;return n.exec=function(){return e=!0,null},"split"===t&&(n.constructor={},n.constructor[u]=function(){return n}),n[f](""),!e})):void 0;if(!p||!m||"replace"===t&&!l||"split"===t&&!d){var h=/./[f],g=n(o,f,""[t],(function(t,e,n,a,i){return e.exec===c?p&&!i?{done:!0,value:h.call(e,n,a)}:{done:!0,value:t.call(n,e,a)}:{done:!1}})),v=g[0],b=g[1];a(String.prototype,t,v),i(RegExp.prototype,f,2==e?function(t,e){return b.call(t,this,e)}:function(t){return b.call(t,this)})}}},"386d":function(t,e,n){"use strict";var a=n("cb7c"),i=n("83a1"),r=n("5f1b");n("214f")("search",1,(function(t,e,n,o){return[function(n){var a=t(this),i=void 0==n?void 0:n[e];return void 0!==i?i.call(n,a):new RegExp(n)[e](String(a))},function(t){var e=o(n,t,this);if(e.done)return e.value;var s=a(t),c=String(this),u=s.lastIndex;i(u,0)||(s.lastIndex=0);var l=r(s,c);return i(s.lastIndex,u)||(s.lastIndex=u),null===l?-1:l.index}]}))},"520a":function(t,e,n){"use strict";var a=n("0bfb"),i=RegExp.prototype.exec,r=String.prototype.replace,o=i,s="lastIndex",c=function(){var t=/a/,e=/b*/g;return i.call(t,"a"),i.call(e,"a"),0!==t[s]||0!==e[s]}(),u=void 0!==/()??/.exec("")[1],l=c||u;l&&(o=function(t){var e,n,o,l,d=this;return u&&(n=new RegExp("^"+d.source+"$(?!\\s)",a.call(d))),c&&(e=d[s]),o=i.call(d,t),c&&o&&(d[s]=d.global?o.index+o[0].length:e),u&&o&&o.length>1&&r.call(o[0],n,(function(){for(l=1;l<arguments.length-2;l++)void 0===arguments[l]&&(o[l]=void 0)})),o}),t.exports=o},"5dbc":function(t,e,n){var a=n("d3f4"),i=n("8b97").set;t.exports=function(t,e,n){var r,o=e.constructor;return o!==n&&"function"==typeof o&&(r=o.prototype)!==n.prototype&&a(r)&&i&&i(t,r),t}},"5f1b":function(t,e,n){"use strict";var a=n("23c6"),i=RegExp.prototype.exec;t.exports=function(t,e){var n=t.exec;if("function"===typeof n){var r=n.call(t,e);if("object"!==typeof r)throw new TypeError("RegExp exec method returned something other than an Object or null");return r}if("RegExp"!==a(t))throw new TypeError("RegExp#exec called on incompatible receiver");return i.call(t,e)}},"786c":function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"app-container"},[n("el-input",{staticClass:"sceneSearch",attrs:{size:"medium",placeholder:"请输入关键字进行搜索"},nativeOn:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.handleQuery(e)}},model:{value:t.search,callback:function(e){t.search=e},expression:"search"}},[n("i",{staticClass:"el-input__icon el-icon-search",attrs:{slot:"prefix"},slot:"prefix"})]),t._v(" "),n("el-tabs",{staticStyle:{"margin-top":"10px"},on:{"tab-click":t.currentTabs},model:{value:t.activeName,callback:function(e){t.activeName=e},expression:"activeName"}},[n("el-tab-pane",{attrs:{label:"全部",name:"all"}},[n("div",{staticClass:"filter-container"},[n("el-row",{attrs:{gutter:23}},t._l(t.sceneTableData,(function(e,a){return n("el-col",{key:a,staticStyle:{"padding-bottom":"18px"},attrs:{span:6}},[n("el-card",{attrs:{"body-style":{padding:"0px"}}},[n("div",{staticStyle:{position:"relative"}},[n("div",{staticClass:"main",staticStyle:{position:"absolute"}},["layoutScene"===e.type?n("span",{staticClass:"word"},[t._v("普通场景")]):"timeScene"===e.type?n("span",{staticClass:"word"},[t._v("盲盒模式")]):t._e()]),t._v(" "),e.image_name!==t.imgpath?n("img",{attrs:{src:e.image_name,alt:"",width:"100%",height:"300px"},on:{click:function(n){return t.handleInto(e)}}}):e.image_name===t.imgpath?n("img",{attrs:{src:t.modelimg,alt:"",width:"100%",height:"300px"},on:{click:function(n){return t.handleInto(e)}}}):t._e(),t._v(" "),n("div",{staticClass:"container-title",staticStyle:{"margin-top":"5px"}},[n("span",{staticStyle:{color:"#303133","margin-left":"5px","font-size":"14px"}},[t._v(t._s(e.name))])]),t._v(" "),n("div",{staticClass:"bottom clearfix",staticStyle:{"margin-top":"10px",height:"60px"}},[n("span",{staticClass:"hoveDesc",staticStyle:{color:"#999","font-size":"14px","margin-left":"5px"}},[t._v(" "+t._s(e.desc))])])])])],1)})),1)],1)]),t._v(" "),n("el-tab-pane",{attrs:{label:"热门",name:"hot"}},[n("div",{staticClass:"filter-container"},[n("el-row",{attrs:{gutter:23}},t._l(t.sceneTableData,(function(e,a){return n("el-col",{key:a,staticStyle:{"padding-bottom":"18px"},attrs:{span:6}},[n("el-card",{attrs:{"body-style":{padding:"0px"}}},[n("div",{staticStyle:{position:"relative"}},[n("div",{staticClass:"main",staticStyle:{position:"absolute"}},["layoutScene"===e.type?n("span",{staticClass:"word"},[t._v("普通场景")]):"timeScene"===e.type?n("span",{staticClass:"word"},[t._v("盲盒模式")]):t._e()]),t._v(" "),e.image_name!==t.imgpath?n("img",{attrs:{src:e.image_name,alt:"",width:"100%",height:"300px"},on:{click:function(n){return t.handleInto(e)}}}):e.image_name===t.imgpath?n("img",{attrs:{src:t.modelimg,alt:"",width:"100%",height:"300px"},on:{click:function(n){return t.handleInto(e)}}}):t._e(),t._v(" "),n("div",{staticClass:"container-title",staticStyle:{"margin-top":"5px"}},[n("span",{staticStyle:{color:"#303133","margin-left":"5px","font-size":"14px"}},[t._v(t._s(e.name))])]),t._v(" "),n("div",{staticClass:"bottom clearfix",staticStyle:{"margin-top":"10px",height:"60px"}},[n("span",{staticClass:"hoveDesc",staticStyle:{color:"#999","font-size":"14px","margin-left":"5px"}},[t._v(" "+t._s(e.desc))])])])])],1)})),1)],1)]),t._v(" "),n("el-tab-pane",{attrs:{label:"计时场景",name:"time"}},[n("div",{staticClass:"filter-container"},[n("el-row",{attrs:{gutter:23}},t._l(t.sceneTableData,(function(e,a){return n("el-col",{key:a,staticStyle:{"padding-bottom":"18px"},attrs:{span:6}},[n("el-card",{attrs:{"body-style":{padding:"0px"}}},[n("div",{staticStyle:{position:"relative"}},[n("div",{staticClass:"main",staticStyle:{position:"absolute"}},["layoutScene"===e.type?n("span",{staticClass:"word"},[t._v("普通场景")]):"timeScene"===e.type?n("span",{staticClass:"word"},[t._v("盲盒模式")]):t._e()]),t._v(" "),e.image_name!==t.imgpath?n("img",{attrs:{src:e.image_name,alt:"",width:"100%",height:"300px"},on:{click:function(n){return t.handleInto(e)}}}):e.image_name===t.imgpath?n("img",{attrs:{src:t.modelimg,alt:"",width:"100%",height:"300px"},on:{click:function(n){return t.handleInto(e)}}}):t._e(),t._v(" "),n("div",{staticClass:"container-title",staticStyle:{"margin-top":"5px"}},[n("span",{staticStyle:{color:"#303133","margin-left":"5px","font-size":"14px"}},[t._v(t._s(e.name))])]),t._v(" "),n("div",{staticClass:"bottom clearfix",staticStyle:{"margin-top":"10px",height:"60px"}},[n("span",{staticClass:"hoveDesc",staticStyle:{color:"#999","font-size":"14px","margin-left":"5px"}},[t._v(" "+t._s(e.desc))])])])])],1)})),1)],1)])],1),t._v(" "),n("div",{staticStyle:{"margin-top":"20px"}},[n("el-pagination",{attrs:{"page-size":t.page.size,layout:"total, prev, pager, next, jumper",total:t.page.total},on:{"current-change":t.getScene}})],1)],1)},i=[],r=(n("7f7f"),n("ac6a"),n("386d"),n("0cef")),o=n("0dec"),s=n.n(o),c=n("ba92"),u=n("905e"),l={name:"index",inject:["reload"],components:{CountDown:s.a},data:function(){return{tableData:[],sceneTableData:[],search:"",page:{total:0,size:20},get_time:"",timelist:[],countlist:[],imgpath:"/images/",modelimg:n("aa63"),activeName:"all"}},methods:{layoutList:function(t){var e=this;this.tableData=[],Object(r["i"])(this.search,t,"flag").then((function(t){var n=t.data;n.results.forEach((function(t,n){t.image_name="/images/"+t.image_name,e.tableData.push(t)})),e.page.total=n.count})).catch((function(t){e.$message({type:"error",message:"服务器内部错误!"})}))},gettimelist:function(){var t=this;Object(u["a"])().then((function(e){var n=e.data.results;t.countlist=n,0===t.countlist.length||(t.countlist[0].end_date=u["b"].getTimestamp(t.countlist[0].end_date),t.countlist[0].start_date=u["b"].getTimestamp(t.get_time))}))},handleQuery:function(){this.getScene(1)},handleInto:function(t){"layoutScene"===t.type&&this.$router.push({path:"/scene/index",query:{layout_id:t.id}}),"timeScene"===t.type&&this.$router.push({path:"/timelist/index",query:{temp_id:t.id}})},templist:function(){var t=this;Object(u["i"])().then((function(e){var n=e.data;n.results.forEach((function(e,n){e.image_name="/images/"+e.image_name,t.timelist.push(e)})),t.page.total+=n.count}))},handleOk:function(t){0===this.countlist.length?this.opendialog(t):this.$message({message:"已有时间模式在运行，请先关闭",type:"error"})},opendialog:function(t){var e=this;this.item=t,!0===t.flag_status?this.$message({type:"error",message:t.time_range+"分钟挑战赛已经开始"}):this.$confirm("是否开始挑战?","提示",{center:!0,confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){Object(u["d"])(t).then((function(t){var n=t.data,a="success",i="";"200"===n.code?i="计时模式开始启动！":"2001"===n.code?i="计时模式已经启动，请勿重新启动":(a="error",i="内部错误"),e.$message({type:a,message:i})})),e.$router.push({path:"/dashboard"})})).catch((function(){e.$message({type:"info",message:"已取消挑战"})}))},stop:function(){var t=this;this.$confirm("是否取消挑战?","提示",{center:!0,confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){Object(u["e"])().then((function(e){var n=e.data,a="success",i="";"2000"===n.code?i="计时模式已经关闭！":(a="error",i="关闭失败,内部错误"),t.$message({type:a,message:i})})),t.$router.push({path:"/dashboard"})})).catch((function(){t.$message({type:"info",message:"已取消"})}))},autostop:function(){var t=this;Object(u["e"])().then((function(e){var n=e.data,a="success",i="";"2000"===n.code?i="计时模式已经关闭！":(a="error",i="关闭失败,内部错误"),t.$message({type:a,message:i})}))},currentTabs:function(t,e){this.activeName=t.name,this.getScene(1,this.activeName)},getScene:function(t){var e=this;Object(c["a"])(this.search,t,this.activeName).then((function(t){e.sceneTableData=[],200===t.data.code?(t.data.result.forEach((function(t,n){t.image_name="/images/"+t.image_name,e.sceneTableData.push(t)})),e.page.total=t.data.count):e.$message({type:"error",message:"数据返回失败!"})}))}},created:function(){this.gettimelist(),this.getScene()},mounted:function(){var t=this,e=(new Date).getFullYear(),n=(new Date).getMonth()+1,a=(new Date).getDate(),i=(new Date).getHours(),r=(new Date).getMinutes()<10?"0"+(new Date).getMinutes():(new Date).getMinutes(),o=(new Date).getSeconds()<10?"0"+(new Date).getSeconds():(new Date).getSeconds();t.get_time=e+"-"+n+"-"+a+" "+i+":"+r+":"+o}},d=l,f=(n("1499"),n("2877")),p=Object(f["a"])(d,a,i,!1,null,"5e879df3",null);e["default"]=p.exports},"83a1":function(t,e){t.exports=Object.is||function(t,e){return t===e?0!==t||1/t===1/e:t!=t&&e!=e}},"8b97":function(t,e,n){var a=n("d3f4"),i=n("cb7c"),r=function(t,e){if(i(t),!a(e)&&null!==e)throw TypeError(e+": can't set as prototype!")};t.exports={set:Object.setPrototypeOf||("__proto__"in{}?function(t,e,a){try{a=n("9b43")(Function.call,n("11e9").f(Object.prototype,"__proto__").set,2),a(t,[]),e=!(t instanceof Array)}catch(i){e=!0}return function(t,n){return r(t,n),e?t.__proto__=n:a(t,n),t}}({},!1):void 0),check:r}},"905e":function(t,e,n){"use strict";n.d(e,"d",(function(){return i})),n.d(e,"e",(function(){return r})),n.d(e,"a",(function(){return o})),n.d(e,"g",(function(){return s})),n.d(e,"i",(function(){return c})),n.d(e,"h",(function(){return u})),n.d(e,"j",(function(){return l})),n.d(e,"c",(function(){return d})),n.d(e,"f",(function(){return f})),n.d(e,"b",(function(){return p}));var a=n("b775");function i(t){return Object(a["a"])({url:"/time/",method:"post",data:t})}function r(){return Object(a["a"])({url:"/time/",method:"delete"})}function o(){return Object(a["a"])({url:"/time/",method:"get"})}function s(t){return Object(a["a"])({url:"/timetemp/",method:"post",data:t})}function c(t){var e="";!0===t&&(e="flag"),"temp"===t&&(e="temp");var n="/timetemp/?query=&flag="+e;return Object(a["a"])({url:n,method:"get"})}function u(t){return Object(a["a"])({url:"/timetemp/"+t+"/",method:"delete",data:{id:t}})}function l(t){return void 0!==t&&null!==t||(t=1),Object(a["a"])({url:"/rank/user/?page="+t,method:"get"})}function d(t){return Object(a["a"])({url:"/time/"+t+"/get/",method:"get"})}function f(t,e){return void 0!==e&&null!==e||(e=1),Object(a["a"])({url:"/timerank/?value="+t+"&page="+e,method:"get"})}var p={getTimestamp:function(t){return new Date(t).getTime()/1e3}}},9093:function(t,e,n){var a=n("ce10"),i=n("e11e").concat("length","prototype");e.f=Object.getOwnPropertyNames||function(t){return a(t,i)}},"99ed":function(t,e,n){},aa63:function(t,e,n){t.exports=n.p+"static/img/modelbg.fcbe2049.jpg"},aa77:function(t,e,n){var a=n("5ca1"),i=n("be13"),r=n("79e5"),o=n("fdef"),s="["+o+"]",c="​",u=RegExp("^"+s+s+"*"),l=RegExp(s+s+"*$"),d=function(t,e,n){var i={},s=r((function(){return!!o[t]()||c[t]()!=c})),u=i[t]=s?e(f):o[t];n&&(i[n]=u),a(a.P+a.F*s,"String",i)},f=d.trim=function(t,e){return t=String(i(t)),1&e&&(t=t.replace(u,"")),2&e&&(t=t.replace(l,"")),t};t.exports=d},b0c5:function(t,e,n){"use strict";var a=n("520a");n("5ca1")({target:"RegExp",proto:!0,forced:a!==/./.exec},{exec:a})},ba92:function(t,e,n){"use strict";n.d(e,"c",(function(){return i})),n.d(e,"e",(function(){return r})),n.d(e,"f",(function(){return o})),n.d(e,"b",(function(){return s})),n.d(e,"d",(function(){return c})),n.d(e,"a",(function(){return u}));var a=n("b775");function i(t){return Object(a["a"])({url:"/layout/"+t+"/get/",method:"get"})}function r(t){return Object(a["a"])({url:"/layout/"+t+"/start/",method:"get"})}function o(t){return Object(a["a"])({url:"/layout/"+t+"/stop/",method:"get"})}function s(t,e){return Object(a["a"])({url:"/layout/"+t+"/flag/?flag="+e,method:"get"})}function c(t,e){return(void 0===e||null===e||e<1)&&(e=1),Object(a["a"])({url:"/layout/"+t+"/rank/?page="+e,method:"get"})}function u(t,e,n,i){return void 0!==t&&null!=t||(t=""),void 0!==n&&null!==n||(n="all"),(void 0===e||null===e||e<1)&&(e=1),void 0!==i&&null!==i||(i=""),Object(a["a"])({url:"/get/scenedata/?tag="+n+"&page="+e+"&query="+t+"&backstage="+i,method:"get"})}},c5f6:function(t,e,n){"use strict";var a=n("7726"),i=n("69a8"),r=n("2d95"),o=n("5dbc"),s=n("6a99"),c=n("79e5"),u=n("9093").f,l=n("11e9").f,d=n("86cc").f,f=n("aa77").trim,p="Number",m=a[p],h=m,g=m.prototype,v=r(n("2aeb")(g))==p,b="trim"in String.prototype,y=function(t){var e=s(t,!1);if("string"==typeof e&&e.length>2){e=b?e.trim():f(e,3);var n,a,i,r=e.charCodeAt(0);if(43===r||45===r){if(n=e.charCodeAt(2),88===n||120===n)return NaN}else if(48===r){switch(e.charCodeAt(1)){case 66:case 98:a=2,i=49;break;case 79:case 111:a=8,i=55;break;default:return+e}for(var o,c=e.slice(2),u=0,l=c.length;u<l;u++)if(o=c.charCodeAt(u),o<48||o>i)return NaN;return parseInt(c,a)}}return+e};if(!m(" 0o1")||!m("0b1")||m("+0x1")){m=function(t){var e=arguments.length<1?0:t,n=this;return n instanceof m&&(v?c((function(){g.valueOf.call(n)})):r(n)!=p)?o(new h(y(e)),n,m):y(e)};for(var _,x=n("9e1e")?u(h):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),T=0;x.length>T;T++)i(h,_=x[T])&&!i(m,_)&&d(m,_,l(h,_));m.prototype=g,g.constructor=m,n("2aba")(a,p,m)}},f292:function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t.msTime.show?n("p",[t.msTime.day>0?n("span",[n("span",[t._v(t._s(t.msTime.day))]),n("i",[t._v(t._s(t.dayTxt))])]):t._e(),t._v(" "),n("span",[t._v(t._s(t.msTime.hour))]),n("i",[t._v(t._s(t.hourTxt))]),t._v(" "),n("span",[t._v(t._s(t.msTime.minutes))]),n("i",[t._v(t._s(t.minutesTxt))]),t._v(" "),n("span",[t._v(t._s(t.msTime.seconds))]),n("i",[t._v(t._s(t.secondsTxt))])]):t._e()])},i=[],r=(n("6b54"),n("c5f6"),{replace:!0,data:function(){return{tipShow:!0,msTime:{show:!1,day:"",hour:"",minutes:"",seconds:""},star:"",end:"",current:""}},watch:{currentTime:function(t,e){this.gogogo()}},props:{tipText:{type:String,default:"距离开始"},tipTextEnd:{type:String,default:"距离结束"},id:{type:String,default:"1"},currentTime:{type:Number},startTime:{type:Number},endTime:{type:Number},endText:{type:String,default:"已结束"},dayTxt:{type:String,default:":"},hourTxt:{type:String,default:":"},minutesTxt:{type:String,default:":"},secondsTxt:{type:String,default:":"},secondsFixed:{type:Boolean,default:!1}},mounted:function(){console.log(this),this.gogogo()},methods:{gogogo:function(){var t=this;10==this.startTime.toString().length?this.star=1e3*this.startTime:this.star=this.startTime,10==this.endTime.toString().length?this.end=1e3*this.endTime:this.end=this.endTime,this.currentTime?10==this.currentTime.toString().length?this.current=1e3*this.currentTime:this.current=this.currentTime:this.current=(new Date).getTime(),this.end<this.current?(this.msTime.show=!1,this.end_message()):this.current<this.star?(this.$set(this,"tipShow",!0),setTimeout((function(){t.runTime(t.star,t.current,t.start_message)}),1)):(this.end>this.current&&this.star<this.current||this.star==this.current)&&(this.$set(this,"tipShow",!1),this.msTime.show=!0,this.$emit("start_callback",this.msTime.show),setTimeout((function(){t.runTime(t.end,t.star,t.end_message,!0)}),1))},runTime:function(t,e,n,a){var i=this,r=this.msTime,o=t-e;if(o>0){this.msTime.show=!0,r.day=Math.floor(o/864e5),o-=864e5*r.day,r.hour=Math.floor(o/36e5),o-=36e5*r.hour,r.minutes=Math.floor(o/6e4),o-=6e4*r.minutes,r.seconds=Math.floor(o/1e3).toFixed(0),o-=1e3*r.seconds,r.hour<10&&(r.hour="0"+r.hour),r.minutes<10&&(r.minutes="0"+r.minutes),r.seconds<10&&(r.seconds="0"+r.seconds);var s=Date.now(),c=Date.now(),u=c-s;setTimeout((function(){a?i.runTime(i.end,e+=1e3,n,!0):i.runTime(i.star,e+=1e3,n)}),1e3-u)}else n()},start_message:function(){var t=this;this.$set(this,"tipShow",!1),this.$emit("start_callback",this.msTime.show),setTimeout((function(){t.runTime(t.end,t.star,t.end_message,!0)}),1)},end_message:function(){this.msTime.show=!1,this.currentTime<=0||this.$emit("end_callback",this.msTime.show)}}}),o=r,s=n("2877"),c=Object(s["a"])(o,a,i,!1,null,null,null);e["default"]=c.exports},fdef:function(t,e){t.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"}}]);
//# sourceMappingURL=chunk-d50801c8.28a3e701.js.map