(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{165:function(t,e,n){"use strict";n(50);var r=function(t){t.component(this.name,this)};e.a=function(t){return t.name="funt-".concat(t.name),t.install=t.install||r,t}},166:function(t,e,n){"use strict";var r=n(2),i=n(13),a=n(12),s=n(69),u=n(67),c=n(5),o=n(90).f,l=n(89).f,f=n(7).f,h=n(88).trim,m=r.Number,p=m,d=m.prototype,v="Number"==a(n(68)(d)),N="trim"in String.prototype,b=function(t){var e=u(t,!1);if("string"==typeof e&&e.length>2){var n,r,i,a=(e=N?e.trim():h(e,3)).charCodeAt(0);if(43===a||45===a){if(88===(n=e.charCodeAt(2))||120===n)return NaN}else if(48===a){switch(e.charCodeAt(1)){case 66:case 98:r=2,i=49;break;case 79:case 111:r=8,i=55;break;default:return+e}for(var s,c=e.slice(2),o=0,l=c.length;o<l;o++)if((s=c.charCodeAt(o))<48||s>i)return NaN;return parseInt(c,r)}}return+e};if(!m(" 0o1")||!m("0b1")||m("+0x1")){m=function(t){var e=arguments.length<1?0:t,n=this;return n instanceof m&&(v?c(function(){d.valueOf.call(n)}):"Number"!=a(n))?s(new p(b(e)),n,m):b(e)};for(var I,_=n(6)?o(p):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),g=0;_.length>g;g++)i(p,I=_[g])&&!i(m,I)&&f(m,I,l(p,I));m.prototype=d,d.constructor=m,n(9)(r,"Number",m)}},167:function(t,e,n){"use strict";var r=n(165),i=Object(r.a)({name:"marquee-item",mounted:function(){var t=this;this.$nextTick(function(){t.$parent.init()})}}),a=n(0),s=Object(a.a)(i,function(){var t=this.$createElement;return(this._self._c||t)("li",[this._t("default")],2)},[],!1,null,null,null);e.a=s.exports},170:function(t,e,n){},178:function(t,e,n){"use strict";var r=n(170);n.n(r).a},186:function(t,e,n){"use strict";n.r(e);n(166);var r=n(165),i=Object(r.a)({name:"lmarquee",props:{duration:{type:Number,default:300},interval:{type:Number,default:2e3}},data:function(){return{animated:!0,count:0,Height:0,curY:0,Timer:null}},beforeDestroy:function(){clearInterval(this.Timer)},methods:{init:function(){if(this.count++,0==this.count||this.count!=this.$refs.box.children.length)return!1;var t=this.$refs.box.firstChild.cloneNode(!0);this.$refs.box.appendChild(t),this.start()},start:function(){var t=this,e=this.$refs.box,n=e.offsetHeight,r=e.children;this.Height="".concat(n/r.length),clearInterval(this.Timer),this.Timer=setInterval(function(){t.animated=!0,t.curY-=t.Height,Math.abs(t.curY)==n-t.Height&&setTimeout(function(){t.animated=!1,t.curY=0},t.duration)},this.interval)}}}),a=n(0),s={name:"docs-lmarquee",components:{Lmarquee:Object(a.a)(i,function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"funt-lmarquee",style:{height:this.Height+"px"}},[e("ul",{ref:"box",staticClass:"funt-lmarquee-box",style:{transform:"translateY("+this.curY+"px)",transition:"transform "+(this.animated?this.duration:0)+"ms"}},[this._t("default")],2)])},[],!1,null,null,null).exports,marqueeItem:n(167).a},data:function(){return{list:["Javascript是世界上最好的语言1","Javascript是世界上最好的语言2","Javascript是世界上最好的语言3","Javascript是世界上最好的语言4","Javascript是世界上最好的语言5"]}}},u=(n(178),Object(a.a)(s,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"docs-lmarquee"},[n("Lmarquee",{staticClass:"list"},t._l(t.list,function(e,r){return n("marquee-item",{key:r},[t._v(t._s(e))])}))],1)},[],!1,null,"e3556e0e",null));e.default=u.exports}}]);