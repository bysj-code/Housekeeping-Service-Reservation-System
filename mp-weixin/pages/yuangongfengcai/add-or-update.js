(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/yuangongfengcai/add-or-update"],{"0954":function(e,n,t){"use strict";(function(e){t("0391");a(t("66fd"));var n=a(t("3c8c"));function a(e){return e&&e.__esModule?e:{default:e}}e(n.default)}).call(this,t("543d")["createPage"])},"2e75":function(e,n,t){"use strict";(function(e){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a=r(t("a34a"));function r(e){return e&&e.__esModule?e:{default:e}}function u(e,n,t,a,r,u,i){try{var o=e[u](i),c=o.value}catch(s){return void t(s)}o.done?n(c):Promise.resolve(c).then(a,r)}function i(e){return function(){var n=this,t=arguments;return new Promise((function(a,r){var i=e.apply(n,t);function o(e){u(i,a,r,o,c,"next",e)}function c(e){u(i,a,r,o,c,"throw",e)}o(void 0)}))}}var o=function(){Promise.all([t.e("common/vendor"),t.e("components/w-picker/w-picker")]).then(function(){return resolve(t("e534"))}.bind(null,t)).catch(t.oe)},c={data:function(){return{cross:"",ruleForm:{xingming:"",tupian:"",zhuanzhang:"",fabushijian:"",gerenjianjie:""},user:{},ro:{xingming:!1,tupian:!1,zhuanzhang:!1,fabushijian:!1,gerenjianjie:!1}}},components:{wPicker:o},computed:{baseUrl:function(){return this.$base.url}},onLoad:function(n){var t=this;return i(a.default.mark((function r(){var u,i,o,c;return a.default.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return u=e.getStorageSync("nowTable"),r.next=3,t.$api.session(u);case 3:if(i=r.sent,t.user=i.data,t.ruleForm.userid=e.getStorageSync("userid"),n.refid&&(t.ruleForm.refid=n.refid,t.ruleForm.nickname=e.getStorageSync("nickname")),!n.id){r.next=13;break}return t.ruleForm.id=n.id,r.next=11,t.$api.info("yuangongfengcai",t.ruleForm.id);case 11:i=r.sent,t.ruleForm=i.data;case 13:if(t.cross=n.cross,!n.cross){r.next=41;break}o=e.getStorageSync("crossObj"),r.t0=a.default.keys(o);case 17:if((r.t1=r.t0()).done){r.next=41;break}if(c=r.t1.value,"xingming"!=c){r.next=23;break}return t.ruleForm.xingming=o[c],t.ro.xingming=!0,r.abrupt("continue",17);case 23:if("tupian"!=c){r.next=27;break}return t.ruleForm.tupian=o[c],t.ro.tupian=!0,r.abrupt("continue",17);case 27:if("zhuanzhang"!=c){r.next=31;break}return t.ruleForm.zhuanzhang=o[c],t.ro.zhuanzhang=!0,r.abrupt("continue",17);case 31:if("fabushijian"!=c){r.next=35;break}return t.ruleForm.fabushijian=o[c],t.ro.fabushijian=!0,r.abrupt("continue",17);case 35:if("gerenjianjie"!=c){r.next=39;break}return t.ruleForm.gerenjianjie=o[c],t.ro.gerenjianjie=!0,r.abrupt("continue",17);case 39:r.next=17;break;case 41:t.styleChange();case 42:case"end":return r.stop()}}),r)})))()},methods:{styleChange:function(){this.$nextTick((function(){}))},fabushijianChange:function(e){this.ruleForm.fabushijian=e.target.value,this.$forceUpdate()},tupianTap:function(){var e=this;this.$api.upload((function(n){e.ruleForm.tupian="upload/"+n.file,e.$forceUpdate(),e.$nextTick((function(){e.styleChange()}))}))},getUUID:function(){return(new Date).getTime()},onSubmitTap:function(){var n=this;return i(a.default.mark((function t(){var r,u,i,o,c,s,f,l,g,d;return a.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!n.cross){t.next=16;break}if(o=e.getStorageSync("statusColumnName"),c=e.getStorageSync("statusColumnValue"),""==o){t.next=16;break}if(s=e.getStorageSync("crossObj"),o.startsWith("[")){t.next=12;break}for(f in s)f==o&&(s[f]=c);return l=e.getStorageSync("crossTable"),t.next=10,n.$api.update("".concat(l),s);case 10:t.next=16;break;case 12:r=Number(e.getStorageSync("userid")),u=s["id"],i=e.getStorageSync("statusColumnName"),i=i.replace(/\[/,"").replace(/\]/,"");case 16:if(!u||!r){t.next=38;break}return n.ruleForm.crossuserid=r,n.ruleForm.crossrefid=u,g={page:1,limit:10,crossuserid:r,crossrefid:u},t.next=22,n.$api.list("yuangongfengcai",g);case 22:if(d=t.sent,!(d.data.total>=i)){t.next=28;break}return n.$utils.msg(e.getStorageSync("tips")),t.abrupt("return",!1);case 28:if(!n.ruleForm.id){t.next=33;break}return t.next=31,n.$api.update("yuangongfengcai",n.ruleForm);case 31:t.next=35;break;case 33:return t.next=35,n.$api.add("yuangongfengcai",n.ruleForm);case 35:n.$utils.msgBack("提交成功");case 36:t.next=46;break;case 38:if(!n.ruleForm.id){t.next=43;break}return t.next=41,n.$api.update("yuangongfengcai",n.ruleForm);case 41:t.next=45;break;case 43:return t.next=45,n.$api.add("yuangongfengcai",n.ruleForm);case 45:n.$utils.msgBack("提交成功");case 46:case"end":return t.stop()}}),t)})))()},optionsChange:function(e){this.index=e.target.value},bindDateChange:function(e){this.date=e.target.value},getDate:function(e){var n=new Date,t=n.getFullYear(),a=n.getMonth()+1,r=n.getDate();return"start"===e?t-=60:"end"===e&&(t+=2),a=a>9?a:"0"+a,r=r>9?r:"0"+r,"".concat(t,"-").concat(a,"-").concat(r)},toggleTab:function(e){this.$refs[e].show()}}};n.default=c}).call(this,t("543d")["default"])},"3b5c":function(e,n,t){"use strict";var a;t.d(n,"b",(function(){return r})),t.d(n,"c",(function(){return u})),t.d(n,"a",(function(){return a}));var r=function(){var e=this,n=e.$createElement;e._self._c},u=[]},"3c8c":function(e,n,t){"use strict";t.r(n);var a=t("3b5c"),r=t("6e8c");for(var u in r)"default"!==u&&function(e){t.d(n,e,(function(){return r[e]}))}(u);t("6b5b");var i,o=t("f0c5"),c=Object(o["a"])(r["default"],a["b"],a["c"],!1,null,"5a42ec54",null,!1,a["a"],i);n["default"]=c.exports},"6b5b":function(e,n,t){"use strict";var a=t("82aa"),r=t.n(a);r.a},"6e8c":function(e,n,t){"use strict";t.r(n);var a=t("2e75"),r=t.n(a);for(var u in a)"default"!==u&&function(e){t.d(n,e,(function(){return a[e]}))}(u);n["default"]=r.a},"82aa":function(e,n,t){}},[["0954","common/runtime","common/vendor"]]]);