(function(){"use strict"
function e(e){for(var n=0;n<ee.length;n+=1)if(e.hasOwnProperty(ee[n]))return!1
return!0}function n(e){for(var n=0;n<Q.length;n+=1)if(e.hasOwnProperty(Q[n]))return!1
return!0}function a(e){if(!J.test(e)){var n={}
return n.pattern=e.replace(V,function(e){switch(e.charAt(0)){case"E":case"e":case"c":return n.weekday=W.weekday[e.length-1],"{weekday}"
case"G":return n.era=W.era[e.length-1],"{era}"
case"y":case"Y":case"u":case"U":return n.year=2===e.length?"2-digit":"numeric","{year}"
case"M":case"L":return n.month=W.month[e.length-1],"{month}"
case"d":return n.day=2===e.length?"2-digit":"numeric","{day}"
case"a":return"{ampm}"
case"h":case"H":case"k":case"K":return n.hour=2===e.length?"2-digit":"numeric","{hour}"
case"m":return n.minute=2===e.length?"2-digit":"numeric","{minute}"
case"s":return n.second=2===e.length?"2-digit":"numeric","{second}"
case"z":return n.timeZoneName=e.length<4?"short":"long","{timeZoneName}"}}),n.pattern=n.pattern.replace(/'([^']*)'/g,function(e,n){return n||"'"}),n.pattern.indexOf("{ampm}")>-1&&(n.hour12=!0,n.pattern12=n.pattern,n.pattern=n.pattern.replace("{ampm}","").replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"")),n}}function t(t){function r(e,n){var a=new Array((e.match(/M/g)||[]).length+1),t=new Array((e.match(/E/g)||[]).length+1)
return a.length>2&&(n=n.replace(/(M|L)+/,a.join("$1"))),t.length>2&&(n=n.replace(/([Eec])+/,t.join("$1"))),n}var i,s,o,l,c,u=t.availableFormats,g=t.timeFormats,m=t.dateFormats,h=t.medium,f=[],p=[],v=[]
for(i in u)u.hasOwnProperty(i)&&(s=r(i,u[i]),(o=a(s))&&(f.push(o),e(o)?v.push(s):n(o)&&p.push(s)))
for(l=0;l<p.length;l+=1)for(c=0;c<v.length;c+=1)s=h.replace("{0}",p[l]).replace("{1}",v[c]).replace(/^[,\s]+|[,\s]+$/gi,""),(o=a(s))&&f.push(o)
for(i in g)g.hasOwnProperty(i)&&(s=r(i,g[i]),(o=a(s))&&f.push(o))
for(i in m)m.hasOwnProperty(i)&&(s=r(i,m[i]),(o=a(s))&&f.push(o))
return f}function r(e){return!!H.test(e)&&(!K.test(e)&&!Y.test(e))}function i(e){var n,a
e=e.toLowerCase(),a=e.split("-")
for(var t=1,r=a.length;t<r;t++)if(2===a[t].length)a[t]=a[t].toUpperCase()
else if(4===a[t].length)a[t]=a[t].charAt(0).toUpperCase()+a[t].slice(1)
else if(1===a[t].length&&"x"!==a[t])break
e=ge.call(a,"-"),(n=e.match(X))&&n.length>1&&(n.sort(),e=e.replace(RegExp("(?:"+X.source+")+","i"),ge.call(n,""))),re.call(ze.tags,e)&&(e=ze.tags[e]),a=e.split("-")
for(var t=1,r=a.length;t<r;t++)re.call(ze.subtags,a[t])?a[t]=ze.subtags[a[t]]:re.call(ze.extLang,a[t])&&(a[t]=ze.extLang[a[t]][0],1===t&&ze.extLang[a[1]][1]===a[0]&&(a=le.call(a,t++),r-=1))
return ge.call(a,"-")}function s(){return U}function o(e){var n=String(e),a=Z(n)
return!1!==ye.test(a)}function l(e){if(void 0===e)return new G
for(var n=new G,e="string"==typeof e?[e]:e,a=$(e),t=a.length,s=0;s<t;){var o=String(s)
if(o in a){var l=a[o]
if(null==l||"string"!=typeof l&&"object"!=typeof l)throw new TypeError("String or Object type expected")
var c=String(l)
if(!r(c))throw new RangeError("'"+c+"' is not a structurally valid language tag")
c=i(c),-1===se.call(n,c)&&ue.call(n,c)}s++}return n}function c(e,n){for(var a=n;;){if(se.call(e,a)>-1)return a
var t=a.lastIndexOf("-")
if(t<0)return
t>=2&&"-"===a.charAt(t-2)&&(t-=2),a=a.substring(0,t)}}function u(e,n){for(var a,t=0,r=n.length;t<r&&!a;){var i=n[t],o=String(i).replace(we,""),a=c(e,o)
t++}var l=new q
if(void 0!==a){if(l["[[locale]]"]=a,String(i)!==String(o)){var u=i.match(we)[0],g=i.indexOf("-u-")
l["[[extension]]"]=u,l["[[extensionIndex]]"]=g}}else l["[[locale]]"]=s()
return l}function g(e,n){return u(e,n)}function m(e,n,a,t,r){if(0===e.length)throw new ReferenceError("No locale data has been provided for this object yet.")
if("lookup"===a["[[localeMatcher]]"])var i=u(e,n)
else var i=g(e,n)
var s=i["[[locale]]"]
if(re.call(i,"[[extension]]"))var o=i["[[extension]]"],l=i["[[extensionIndex]]"],c=String.prototype.split,m=c.call(o,"-"),h=m.length
var f=new q
f["[[dataLocale]]"]=s
for(var p="-u",v=0,d=t.length;v<d;){var b=t[v],y=r[s],w=y[b],z=w[0],D="",k=se
if(void 0!==m){var x=k.call(m,b)
if(-1!==x)if(x+1<h&&m[x+1].length>2){var F=m[x+1],j=k.call(w,F)
if(-1!==j)var z=F,D="-"+b+"-"+z}else{var j=k(w,"true")
if(-1!==j)var z="true"}}if(re.call(a,"[["+b+"]]")){var N=a["[["+b+"]]"];-1!==k.call(w,N)&&N!==z&&(z=N,D="")}f["[["+b+"]]"]=z,p+=D,v++}if(p.length>2)var S=s.substring(0,l),E=s.substring(l),s=S+p+E
return f["[[locale]]"]=s,f}function h(e,n){for(var a=n.length,t=new G,r=0;r<a;){var i=n[r]
void 0!==c(e,String(i).replace(we,""))&&ue.call(t,i),r++}return le.call(t)}function f(e,n){return h(e,n)}function p(e,n,a){if(void 0!==a){var a=new q($(a)),t=a.localeMatcher
if(void 0!==t&&"lookup"!==(t=String(t))&&"best fit"!==t)throw new RangeError('matcher should be "lookup" or "best fit"')}if(void 0===t||"best fit"===t)var r=f(e,n)
else var r=h(e,n)
for(var i in r)re.call(r,i)&&ie(r,i,{writable:!1,configurable:!1,value:r[i]})
return ie(r,"length",{writable:!1}),r}function v(e,n,a,t,r){var i=e[n]
if(void 0!==i){if(i="boolean"===a?Boolean(i):"string"===a?String(i):i,void 0!==t&&-1===se.call(t,i))throw new RangeError("'"+i+"' is not an allowed value for `"+n+"`")
return i}return r}function d(e,n,a,t,r){var i=e[n]
if(void 0!==i){if(i=Number(i),isNaN(i)||i<a||i>t)throw new RangeError("Value is not a number or outside accepted range")
return Math.floor(i)}return r}function b(){var e=arguments[0],n=arguments[1]
return this&&this!==ne?y($(this),e,n):new ne.NumberFormat(e,n)}function y(e,n,a){var t=B(e),r=C()
if(!0===t["[[initializedIntlObject]]"])throw new TypeError("`this` object has already been initialized as an Intl object")
ie(e,"__getInternalProperties",{value:function(){if(arguments[0]===pe)return t}}),t["[[initializedIntlObject]]"]=!0
var i=l(n)
a=void 0===a?{}:$(a)
var s=new q,c=v(a,"localeMatcher","string",new G("lookup","best fit"),"best fit")
s["[[localeMatcher]]"]=c
var u=fe.NumberFormat["[[localeData]]"],g=m(fe.NumberFormat["[[availableLocales]]"],i,s,fe.NumberFormat["[[relevantExtensionKeys]]"],u)
t["[[locale]]"]=g["[[locale]]"],t["[[numberingSystem]]"]=g["[[nu]]"],t["[[dataLocale]]"]=g["[[dataLocale]]"]
var h=g["[[dataLocale]]"],f=v(a,"style","string",new G("decimal","percent","currency"),"decimal")
t["[[style]]"]=f
var p=v(a,"currency","string")
if(void 0!==p&&!o(p))throw new RangeError("'"+p+"' is not a valid currency code")
if("currency"===f&&void 0===p)throw new TypeError("Currency code is required when style is currency")
if("currency"===f){p=p.toUpperCase(),t["[[currency]]"]=p
var b=w(p)}var y=v(a,"currencyDisplay","string",new G("code","symbol","name"),"symbol")
"currency"===f&&(t["[[currencyDisplay]]"]=y)
var D=d(a,"minimumIntegerDigits",1,21,1)
t["[[minimumIntegerDigits]]"]=D
var k="currency"===f?b:0,x=d(a,"minimumFractionDigits",0,20,k)
t["[[minimumFractionDigits]]"]=x
var F="currency"===f?Math.max(x,b):"percent"===f?Math.max(x,0):Math.max(x,3),j=d(a,"maximumFractionDigits",x,20,F)
t["[[maximumFractionDigits]]"]=j
var N=a.minimumSignificantDigits,S=a.maximumSignificantDigits
void 0===N&&void 0===S||(N=d(a,"minimumSignificantDigits",1,21,1),S=d(a,"maximumSignificantDigits",N,21,21),t["[[minimumSignificantDigits]]"]=N,t["[[maximumSignificantDigits]]"]=S)
var E=v(a,"useGrouping","boolean",void 0,!0)
t["[[useGrouping]]"]=E
var L=u[h],O=L.patterns,T=O[f]
return t["[[positivePattern]]"]=T.positivePattern,t["[[negativePattern]]"]=T.negativePattern,t["[[boundFormat]]"]=void 0,t["[[initializedNumberFormat]]"]=!0,te&&(e.format=z.call(e)),r.exp.test(r.input),e}function w(e){return void 0!==De[e]?De[e]:2}function z(){var e=null!=this&&"object"==typeof this&&B(this)
if(!e||!e["[[initializedNumberFormat]]"])throw new TypeError("`this` value for format() is not an initialized Intl.NumberFormat object.")
if(void 0===e["[[boundFormat]]"]){var n=function(e){return D(this,Number(e))},a=he.call(n,this)
e["[[boundFormat]]"]=a}return e["[[boundFormat]]"]}function D(e,n){var a,t=C(),r=B(e),i=r["[[dataLocale]]"],s=r["[[numberingSystem]]"],o=fe.NumberFormat["[[localeData]]"][i],l=o.symbols[s]||o.symbols.latn,c=!1
if(!1===isFinite(n))isNaN(n)?a=l.nan:(a=l.infinity,n<0&&(c=!0))
else{if(n<0&&(c=!0,n=-n),"percent"===r["[[style]]"]&&(n*=100),a=re.call(r,"[[minimumSignificantDigits]]")&&re.call(r,"[[maximumSignificantDigits]]")?k(n,r["[[minimumSignificantDigits]]"],r["[[maximumSignificantDigits]]"]):x(n,r["[[minimumIntegerDigits]]"],r["[[minimumFractionDigits]]"],r["[[maximumFractionDigits]]"]),ke[s]){var u=ke[r["[[numberingSystem]]"]]
a=String(a).replace(/\d/g,function(e){return u[e]})}else a=String(a)
if(a=a.replace(/\./g,l.decimal),!0===r["[[useGrouping]]"]){var g=a.split(l.decimal),m=g[0],h=o.patterns.primaryGroupSize||3,f=o.patterns.secondaryGroupSize||h
if(m.length>h){var p=new G,v=m.length-h,d=v%f,b=m.slice(0,d)
for(b.length&&ue.call(p,b);d<v;)ue.call(p,m.slice(d,d+f)),d+=f
ue.call(p,m.slice(v)),g[0]=ge.call(p,l.group)}a=ge.call(g,l.decimal)}}var y=r[!0===c?"[[negativePattern]]":"[[positivePattern]]"]
if(y=y.replace("{number}",a),"currency"===r["[[style]]"]){var w,z=r["[[currency]]"],D=o.currencies[z]
switch(r["[[currencyDisplay]]"]){case"symbol":w=D||z
break
default:case"code":case"name":w=z}y=y.replace("{currency}",w)}return t.exp.test(t.input),y}function k(e,n,a){var t=a
if(0===e)var r=ge.call(Array(t+1),"0"),i=0
else var i=_(Math.abs(e)),s=Math.round(Math.exp(Math.abs(i-t+1)*Math.LN10)),r=String(Math.round(i-t+1<0?e*s:e/s))
if(i>=t)return r+ge.call(Array(i-t+1+1),"0")
if(i===t-1)return r
if(i>=0?r=r.slice(0,i+1)+"."+r.slice(i+1):i<0&&(r="0."+ge.call(Array(1-(i+1)),"0")+r),r.indexOf(".")>=0&&a>n){for(var o=a-n;o>0&&"0"===r.charAt(r.length-1);)r=r.slice(0,-1),o--
"."===r.charAt(r.length-1)&&(r=r.slice(0,-1))}return r}function x(e,n,a,t){var r,i=Number.prototype.toFixed.call(e,t),s=i.split(".")[0].length,o=t-a,l=(r=i.indexOf("e"))>-1?i.slice(r+1):0
for(l&&(i=i.slice(0,r).replace(".",""),i+=ge.call(Array(l-(i.length-1)+1),"0")+"."+ge.call(Array(t+1),"0"),s=i.length);o>0&&"0"===i.slice(-1);)i=i.slice(0,-1),o--
if("."===i.slice(-1)&&(i=i.slice(0,-1)),s<n)var c=ge.call(Array(n-s+1),"0")
return(c||"")+i}function F(){var e=arguments[0],n=arguments[1]
return this&&this!==ne?j($(this),e,n):new ne.DateTimeFormat(e,n)}function j(e,n,a){var t=B(e),r=C()
if(!0===t["[[initializedIntlObject]]"])throw new TypeError("`this` object has already been initialized as an Intl object")
ie(e,"__getInternalProperties",{value:function(){if(arguments[0]===pe)return t}}),t["[[initializedIntlObject]]"]=!0
var i=l(n),a=S(a,"any","date"),s=new q
w=v(a,"localeMatcher","string",new G("lookup","best fit"),"best fit"),s["[[localeMatcher]]"]=w
var o=fe.DateTimeFormat,c=o["[[localeData]]"],u=m(o["[[availableLocales]]"],i,s,o["[[relevantExtensionKeys]]"],c)
t["[[locale]]"]=u["[[locale]]"],t["[[calendar]]"]=u["[[ca]]"],t["[[numberingSystem]]"]=u["[[nu]]"],t["[[dataLocale]]"]=u["[[dataLocale]]"]
var g=u["[[dataLocale]]"],h=a.timeZone
if(void 0!==h&&"UTC"!==(h=Z(h)))throw new RangeError("timeZone is not supported.")
t["[[timeZone]]"]=h,s=new q
for(var f in xe)if(re.call(xe,f)){var p=v(a,f,"string",xe[f])
s["[["+f+"]]"]=p}var d,b=c[g],y=N(b.formats),w=v(a,"formatMatcher","string",new G("basic","best fit"),"best fit")
b.formats=y,d="basic"===w?E(s,y):O(s,y)
for(var f in xe)if(re.call(xe,f)&&re.call(d,f)){var z=d[f]
t["[["+f+"]]"]=z}var D,k=v(a,"hour12","boolean")
if(t["[[hour]]"])if(k=void 0===k?b.hour12:k,t["[[hour12]]"]=k,!0===k){var x=b.hourNo0
t["[[hourNo0]]"]=x,D=d.pattern12}else D=d.pattern
else D=d.pattern
return t["[[pattern]]"]=D,t["[[boundFormat]]"]=void 0,t["[[initializedDateTimeFormat]]"]=!0,te&&(e.format=T.call(e)),r.exp.test(r.input),e}function N(e){return"[object Array]"===Object.prototype.toString.call(e)?e:t(e)}function S(e,n,a){if(void 0===e)e=null
else{var t=$(e)
e=new q
for(var r in t)e[r]=t[r]}var i=oe,e=i(e),s=!0
return"date"!==n&&"any"!==n||void 0===e.weekday&&void 0===e.year&&void 0===e.month&&void 0===e.day||(s=!1),"time"!==n&&"any"!==n||void 0===e.hour&&void 0===e.minute&&void 0===e.second||(s=!1),!s||"date"!==a&&"all"!==a||(e.year=e.month=e.day="numeric"),!s||"time"!==a&&"all"!==a||(e.hour=e.minute=e.second="numeric"),e}function E(e,n){return L(e,n)}function L(e,n,a){for(var t,r=-1/0,i=0,s=n.length;i<s;){var o=n[i],l=0
for(var c in xe)if(re.call(xe,c)){var u=e["[["+c+"]]"],g=re.call(o,c)?o[c]:void 0
if(void 0===u&&void 0!==g)l-=20
else if(void 0!==u&&void 0===g)l-=120
else{var m=["2-digit","numeric","narrow","short","long"],h=se.call(m,u),f=se.call(m,g),p=Math.max(Math.min(f-h,2),-2)
!a||("numeric"!==u&&"2-digit"!==u||"numeric"===g||"2-digit"===g)&&("numeric"===u||"2-digit"===u||"2-digit"!==g&&"numeric"!==g)||(l-=8),2===p?l-=6:1===p?l-=3:-1===p?l-=6:-2===p&&(l-=8)}}l>r&&(r=l,t=o),i++}return t}function O(e,n){return L(e,n,!0)}function T(){var e=null!=this&&"object"==typeof this&&B(this)
if(!e||!e["[[initializedDateTimeFormat]]"])throw new TypeError("`this` value for format() is not an initialized Intl.DateTimeFormat object.")
if(void 0===e["[[boundFormat]]"]){var n=function(){return I(this,Number(0===arguments.length?Date.now():arguments[0]))},a=he.call(n,this)
e["[[boundFormat]]"]=a}return e["[[boundFormat]]"]}function I(e,n){if(!isFinite(n))throw new RangeError("Invalid valid date passed to format")
var a=e.__getInternalProperties(pe),t=C(),r=a["[[locale]]"],i=new ne.NumberFormat([r],{useGrouping:!1}),s=new ne.NumberFormat([r],{minimumIntegerDigits:2,useGrouping:!1}),o=M(n,a["[[calendar]]"],a["[[timeZone]]"]),l=a["[[pattern]]"],c=a["[[dataLocale]]"],u=fe.DateTimeFormat["[[localeData]]"][c].calendars,g=a["[[calendar]]"]
for(var m in xe)if(re.call(a,"[["+m+"]]")){var h,f,p=a["[["+m+"]]"],v=o["[["+m+"]]"]
if("year"===m&&v<=0?v=1-v:"month"===m?v++:"hour"===m&&!0===a["[[hour12]]"]&&(v%=12,h=v!==o["[["+m+"]]"],0===v&&!0===a["[[hourNo0]]"]&&(v=12)),"numeric"===p)f=D(i,v)
else if("2-digit"===p)f=D(s,v),f.length>2&&(f=f.slice(-2))
else if(p in ve)switch(m){case"month":f=A(u,g,"months",p,o["[["+m+"]]"])
break
case"weekday":try{f=A(u,g,"days",p,o["[["+m+"]]"])}catch(e){throw new Error("Could not find weekday data for locale "+r)}break
case"timeZoneName":f=""
break
default:f=o["[["+m+"]]"]}l=l.replace("{"+m+"}",f)}return!0===a["[[hour12]]"]&&(f=A(u,g,"dayPeriods",h?"pm":"am"),l=l.replace("{ampm}",f)),t.exp.test(t.input),l}function M(e,n,a){var t=new Date(e),r="get"+(a||"")
return new q({"[[weekday]]":t[r+"Day"](),"[[era]]":+(t[r+"FullYear"]()>=0),"[[year]]":t[r+"FullYear"](),"[[month]]":t[r+"Month"](),"[[day]]":t[r+"Date"](),"[[hour]]":t[r+"Hours"](),"[[minute]]":t[r+"Minutes"](),"[[second]]":t[r+"Seconds"](),"[[inDST]]":!1})}function P(e,n){if(!e.number)throw new Error("Object passed doesn't contain locale data for Intl.NumberFormat")
var a,t=[n],r=n.split("-")
for(r.length>2&&4===r[1].length&&ue.call(t,r[0]+"-"+r[2]);a=me.call(t);)ue.call(fe.NumberFormat["[[availableLocales]]"],a),fe.NumberFormat["[[localeData]]"][a]=e.number,e.date&&(e.date.nu=e.number.nu,ue.call(fe.DateTimeFormat["[[availableLocales]]"],a),fe.DateTimeFormat["[[localeData]]"][a]=e.date)
void 0===U&&(U=n),de||(y(ne.NumberFormat.prototype),de=!0),e.date&&!be&&(j(ne.DateTimeFormat.prototype),be=!0)}function _(e){if("function"==typeof Math.log10)return Math.floor(Math.log10(e))
var n=Math.round(Math.log(e)*Math.LOG10E)
return n-(Number("1e"+n)>e)}function R(e){if(!re.call(this,"[[availableLocales]]"))throw new TypeError("supportedLocalesOf() is not a constructor")
var n=C(),a=arguments[1],t=this["[[availableLocales]]"],r=l(e)
return n.exp.test(n.input),p(t,r,a)}function A(e,n,a,t,r){var i=e[n]&&e[n][a]?e[n][a]:e.gregory[a],s={narrow:["short","long"],short:["long","narrow"],long:["short","narrow"]},o=re.call(i,t)?i[t]:re.call(i,s[t][0])?i[s[t][0]]:i[s[t][1]]
return null!=r?o[r]:o}function q(e){for(var n in e)(e instanceof q||re.call(e,n))&&ie(this,n,{value:e[n],enumerable:!0,writable:!0,configurable:!0})}function G(){ie(this,"length",{writable:!0,value:0}),arguments.length&&ue.apply(this,le.call(arguments))}function C(){for(var e=/[.?*+^$[\]\\(){}|-]/g,n=RegExp.lastMatch||"",a=RegExp.multiline?"m":"",t={input:RegExp.input},r=new G,i=!1,s={},o=1;o<=9;o++)i=(s["$"+o]=RegExp["$"+o])||i
if(n=n.replace(e,"\\$&"),i)for(var o=1;o<=9;o++){var l=s["$"+o]
l?(l=l.replace(e,"\\$&"),n=n.replace(l,"("+l+")")):n="()"+n,ue.call(r,n.slice(0,n.indexOf("(")+1)),n=n.slice(n.indexOf("(")+1)}return t.exp=new RegExp(ge.call(r,"")+n,a),t}function Z(e){for(var n=e.length;n--;){var a=e.charAt(n)
a>="a"&&a<="z"&&(e=e.slice(0,n)+a.toUpperCase()+e.slice(n+1))}return e}function $(e){if(null==e)throw new TypeError("Cannot convert null or undefined to object")
return Object(e)}function B(e){return re.call(e,"__getInternalProperties")?e.__getInternalProperties(pe):oe(null)}var U,H=RegExp("^(?:(?:[a-z]{2,3}(?:-[a-z]{3}(?:-[a-z]{3}){0,2})?|[a-z]{4}|[a-z]{5,8})(?:-[a-z]{4})?(?:-(?:[a-z]{2}|\\d{3}))?(?:-(?:[a-z0-9]{5,8}|\\d[a-z0-9]{3}))*(?:-[0-9a-wy-z](?:-[a-z0-9]{2,8})+)*(?:-x(?:-[a-z0-9]{1,8})+)?|x(?:-[a-z0-9]{1,8})+|(?:(?:en-GB-oed|i-(?:ami|bnn|default|enochian|hak|klingon|lux|mingo|navajo|pwn|tao|tay|tsu)|sgn-(?:BE-FR|BE-NL|CH-DE))|(?:art-lojban|cel-gaulish|no-bok|no-nyn|zh-(?:guoyu|hakka|min|min-nan|xiang))))$","i"),K=RegExp("^(?!x).*?-((?:[a-z0-9]{5,8}|\\d[a-z0-9]{3}))-(?:\\w{4,8}-(?!x-))*\\1\\b","i"),Y=RegExp("^(?!x).*?-([0-9a-wy-z])-(?:\\w+-(?!x-))*\\1\\b","i"),X=RegExp("-[0-9a-wy-z](?:-[a-z0-9]{2,8})+","ig"),V=/(?:[Eec]{1,6}|G{1,5}|(?:[yYu]+|U{1,5})|[ML]{1,5}|d{1,2}|a|[hkHK]{1,2}|m{1,2}|s{1,2}|z{1,4})(?=([^']*'[^']*')*[^']*$)/g,J=/[QxXVOvZASjgFDwWIQqH]/,W={month:["numeric","2-digit","short","long","narrow"],weekday:["short","short","short","long","narrow"],era:["short","short","short","long","narrow"]},Q=["weekday","era","year","month","day"],ee=["hour","minute","second","timeZoneName"],ne={},ae=function(){var e={}
try{return Object.defineProperty(e,"a",{}),"a"in e}catch(e){return!1}}(),te=!ae&&!Object.prototype.__defineGetter__,re=Object.prototype.hasOwnProperty,ie=ae?Object.defineProperty:function(e,n,a){"get"in a&&e.__defineGetter__?e.__defineGetter__(n,a.get):(!re.call(e,n)||"value"in a)&&(e[n]=a.value)},se=Array.prototype.indexOf||function(e){var n=this
if(!n.length)return-1
for(var a=arguments[1]||0,t=n.length;a<t;a++)if(n[a]===e)return a
return-1},oe=Object.create||function(e,n){function a(){}var t
a.prototype=e,t=new a
for(var r in n)re.call(n,r)&&ie(t,r,n[r])
return t},le=Array.prototype.slice,ce=Array.prototype.concat,ue=Array.prototype.push,ge=Array.prototype.join,me=Array.prototype.shift,he=(Array.prototype.unshift,Function.prototype.bind||function(e){var n=this,a=le.call(arguments,1)
return 1===n.length?function(t){return n.apply(e,ce.call(a,le.call(arguments)))}:function(){return n.apply(e,ce.call(a,le.call(arguments)))}}),fe=oe(null),pe=Math.random(),ve=oe(null,{narrow:{},short:{},long:{}}),de=!1,be=!1,ye=/^[A-Z]{3}$/,we=/-u(?:-[0-9a-z]{2,8})+/gi,ze={tags:{"art-lojban":"jbo","i-ami":"ami","i-bnn":"bnn","i-hak":"hak","i-klingon":"tlh","i-lux":"lb","i-navajo":"nv","i-pwn":"pwn","i-tao":"tao","i-tay":"tay","i-tsu":"tsu","no-bok":"nb","no-nyn":"nn","sgn-BE-FR":"sfb","sgn-BE-NL":"vgt","sgn-CH-DE":"sgg","zh-guoyu":"cmn","zh-hakka":"hak","zh-min-nan":"nan","zh-xiang":"hsn","sgn-BR":"bzs","sgn-CO":"csn","sgn-DE":"gsg","sgn-DK":"dsl","sgn-ES":"ssp","sgn-FR":"fsl","sgn-GB":"bfi","sgn-GR":"gss","sgn-IE":"isg","sgn-IT":"ise","sgn-JP":"jsl","sgn-MX":"mfs","sgn-NI":"ncs","sgn-NL":"dse","sgn-NO":"nsl","sgn-PT":"psr","sgn-SE":"swl","sgn-US":"ase","sgn-ZA":"sfs","zh-cmn":"cmn","zh-cmn-Hans":"cmn-Hans","zh-cmn-Hant":"cmn-Hant","zh-gan":"gan","zh-wuu":"wuu","zh-yue":"yue"},subtags:{BU:"MM",DD:"DE",FX:"FR",TP:"TL",YD:"YE",ZR:"CD",heploc:"alalc97",in:"id",iw:"he",ji:"yi",jw:"jv",mo:"ro",ayx:"nun",bjd:"drl",ccq:"rki",cjr:"mom",cka:"cmr",cmk:"xch",drh:"khk",drw:"prs",gav:"dev",hrr:"jal",ibi:"opa",kgh:"kml",lcq:"ppr",mst:"mry",myt:"mry",sca:"hle",tie:"ras",tkk:"twm",tlw:"weo",tnf:"prs",ybd:"rki",yma:"lrr"},extLang:{aao:["aao","ar"],abh:["abh","ar"],abv:["abv","ar"],acm:["acm","ar"],acq:["acq","ar"],acw:["acw","ar"],acx:["acx","ar"],acy:["acy","ar"],adf:["adf","ar"],ads:["ads","sgn"],aeb:["aeb","ar"],aec:["aec","ar"],aed:["aed","sgn"],aen:["aen","sgn"],afb:["afb","ar"],afg:["afg","sgn"],ajp:["ajp","ar"],apc:["apc","ar"],apd:["apd","ar"],arb:["arb","ar"],arq:["arq","ar"],ars:["ars","ar"],ary:["ary","ar"],arz:["arz","ar"],ase:["ase","sgn"],asf:["asf","sgn"],asp:["asp","sgn"],asq:["asq","sgn"],asw:["asw","sgn"],auz:["auz","ar"],avl:["avl","ar"],ayh:["ayh","ar"],ayl:["ayl","ar"],ayn:["ayn","ar"],ayp:["ayp","ar"],bbz:["bbz","ar"],bfi:["bfi","sgn"],bfk:["bfk","sgn"],bjn:["bjn","ms"],bog:["bog","sgn"],bqn:["bqn","sgn"],bqy:["bqy","sgn"],btj:["btj","ms"],bve:["bve","ms"],bvl:["bvl","sgn"],bvu:["bvu","ms"],bzs:["bzs","sgn"],cdo:["cdo","zh"],cds:["cds","sgn"],cjy:["cjy","zh"],cmn:["cmn","zh"],coa:["coa","ms"],cpx:["cpx","zh"],csc:["csc","sgn"],csd:["csd","sgn"],cse:["cse","sgn"],csf:["csf","sgn"],csg:["csg","sgn"],csl:["csl","sgn"],csn:["csn","sgn"],csq:["csq","sgn"],csr:["csr","sgn"],czh:["czh","zh"],czo:["czo","zh"],doq:["doq","sgn"],dse:["dse","sgn"],dsl:["dsl","sgn"],dup:["dup","ms"],ecs:["ecs","sgn"],esl:["esl","sgn"],esn:["esn","sgn"],eso:["eso","sgn"],eth:["eth","sgn"],fcs:["fcs","sgn"],fse:["fse","sgn"],fsl:["fsl","sgn"],fss:["fss","sgn"],gan:["gan","zh"],gds:["gds","sgn"],gom:["gom","kok"],gse:["gse","sgn"],gsg:["gsg","sgn"],gsm:["gsm","sgn"],gss:["gss","sgn"],gus:["gus","sgn"],hab:["hab","sgn"],haf:["haf","sgn"],hak:["hak","zh"],hds:["hds","sgn"],hji:["hji","ms"],hks:["hks","sgn"],hos:["hos","sgn"],hps:["hps","sgn"],hsh:["hsh","sgn"],hsl:["hsl","sgn"],hsn:["hsn","zh"],icl:["icl","sgn"],ils:["ils","sgn"],inl:["inl","sgn"],ins:["ins","sgn"],ise:["ise","sgn"],isg:["isg","sgn"],isr:["isr","sgn"],jak:["jak","ms"],jax:["jax","ms"],jcs:["jcs","sgn"],jhs:["jhs","sgn"],jls:["jls","sgn"],jos:["jos","sgn"],jsl:["jsl","sgn"],jus:["jus","sgn"],kgi:["kgi","sgn"],knn:["knn","kok"],kvb:["kvb","ms"],kvk:["kvk","sgn"],kvr:["kvr","ms"],kxd:["kxd","ms"],lbs:["lbs","sgn"],lce:["lce","ms"],lcf:["lcf","ms"],liw:["liw","ms"],lls:["lls","sgn"],lsg:["lsg","sgn"],lsl:["lsl","sgn"],lso:["lso","sgn"],lsp:["lsp","sgn"],lst:["lst","sgn"],lsy:["lsy","sgn"],ltg:["ltg","lv"],lvs:["lvs","lv"],lzh:["lzh","zh"],max:["max","ms"],mdl:["mdl","sgn"],meo:["meo","ms"],mfa:["mfa","ms"],mfb:["mfb","ms"],mfs:["mfs","sgn"],min:["min","ms"],mnp:["mnp","zh"],mqg:["mqg","ms"],mre:["mre","sgn"],msd:["msd","sgn"],msi:["msi","ms"],msr:["msr","sgn"],mui:["mui","ms"],mzc:["mzc","sgn"],mzg:["mzg","sgn"],mzy:["mzy","sgn"],nan:["nan","zh"],nbs:["nbs","sgn"],ncs:["ncs","sgn"],nsi:["nsi","sgn"],nsl:["nsl","sgn"],nsp:["nsp","sgn"],nsr:["nsr","sgn"],nzs:["nzs","sgn"],okl:["okl","sgn"],orn:["orn","ms"],ors:["ors","ms"],pel:["pel","ms"],pga:["pga","ar"],pks:["pks","sgn"],prl:["prl","sgn"],prz:["prz","sgn"],psc:["psc","sgn"],psd:["psd","sgn"],pse:["pse","ms"],psg:["psg","sgn"],psl:["psl","sgn"],pso:["pso","sgn"],psp:["psp","sgn"],psr:["psr","sgn"],pys:["pys","sgn"],rms:["rms","sgn"],rsi:["rsi","sgn"],rsl:["rsl","sgn"],sdl:["sdl","sgn"],sfb:["sfb","sgn"],sfs:["sfs","sgn"],sgg:["sgg","sgn"],sgx:["sgx","sgn"],shu:["shu","ar"],slf:["slf","sgn"],sls:["sls","sgn"],sqk:["sqk","sgn"],sqs:["sqs","sgn"],ssh:["ssh","ar"],ssp:["ssp","sgn"],ssr:["ssr","sgn"],svk:["svk","sgn"],swc:["swc","sw"],swh:["swh","sw"],swl:["swl","sgn"],syy:["syy","sgn"],tmw:["tmw","ms"],tse:["tse","sgn"],tsm:["tsm","sgn"],tsq:["tsq","sgn"],tss:["tss","sgn"],tsy:["tsy","sgn"],tza:["tza","sgn"],ugn:["ugn","sgn"],ugy:["ugy","sgn"],ukl:["ukl","sgn"],uks:["uks","sgn"],urk:["urk","ms"],uzn:["uzn","uz"],uzs:["uzs","uz"],vgt:["vgt","sgn"],vkk:["vkk","ms"],vkt:["vkt","ms"],vsi:["vsi","sgn"],vsl:["vsl","sgn"],vsv:["vsv","sgn"],wuu:["wuu","zh"],xki:["xki","sgn"],xml:["xml","sgn"],xmm:["xmm","ms"],xms:["xms","sgn"],yds:["yds","sgn"],ysl:["ysl","sgn"],yue:["yue","zh"],zib:["zib","sgn"],zlm:["zlm","ms"],zmi:["zmi","ms"],zsl:["zsl","sgn"],zsm:["zsm","ms"]}},De={BHD:3,BYR:0,XOF:0,BIF:0,XAF:0,CLF:4,CLP:0,KMF:0,DJF:0,XPF:0,GNF:0,ISK:0,IQD:3,JPY:0,JOD:3,KRW:0,KWD:3,LYD:3,OMR:3,PYG:0,RWF:0,TND:3,UGX:0,UYI:0,VUV:0,VND:0}
ie(ne,"NumberFormat",{configurable:!0,writable:!0,value:b}),ie(ne.NumberFormat,"prototype",{writable:!1}),fe.NumberFormat={"[[availableLocales]]":[],"[[relevantExtensionKeys]]":["nu"],"[[localeData]]":{}},ie(ne.NumberFormat,"supportedLocalesOf",{configurable:!0,writable:!0,value:he.call(R,fe.NumberFormat)}),ie(ne.NumberFormat.prototype,"format",{configurable:!0,get:z})
var ke={arab:["??","??","??","??","??","??","??","??","??","??"],arabext:["??","??","??","??","??","??","??","??","??","??"],bali:["???","???","???","???","???","???","???","???","???","???"],beng:["???","???","???","???","???","???","???","???","???","???"],deva:["???","???","???","???","???","???","???","???","???","???"],fullwide:["???","???","???","???","???","???","???","???","???","???"],gujr:["???","???","???","???","???","???","???","???","???","???"],guru:["???","???","???","???","???","???","???","???","???","???"],hanidec:["???","???","???","???","???","???","???","???","???","???"],khmr:["???","???","???","???","???","???","???","???","???","???"],knda:["???","???","???","???","???","???","???","???","???","???"],laoo:["???","???","???","???","???","???","???","???","???","???"],latn:["0","1","2","3","4","5","6","7","8","9"],limb:["???","???","???","???","???","???","???","???","???","???"],mlym:["???","???","???","???","???","???","???","???","???","???"],mong:["???","???","???","???","???","???","???","???","???","???"],mymr:["???","???","???","???","???","???","???","???","???","???"],orya:["???","???","???","???","???","???","???","???","???","???"],tamldec:["???","???","???","???","???","???","???","???","???","???"],telu:["???","???","???","???","???","???","???","???","???","???"],thai:["???","???","???","???","???","???","???","???","???","???"],tibt:["???","???","???","???","???","???","???","???","???","???"]}
ie(ne.NumberFormat.prototype,"resolvedOptions",{configurable:!0,writable:!0,value:function(){var e,n=new q,a=["locale","numberingSystem","style","currency","currencyDisplay","minimumIntegerDigits","minimumFractionDigits","maximumFractionDigits","minimumSignificantDigits","maximumSignificantDigits","useGrouping"],t=null!=this&&"object"==typeof this&&B(this)
if(!t||!t["[[initializedNumberFormat]]"])throw new TypeError("`this` value for resolvedOptions() is not an initialized Intl.NumberFormat object.")
for(var r=0,i=a.length;r<i;r++)re.call(t,e="[["+a[r]+"]]")&&(n[a[r]]={value:t[e],writable:!0,configurable:!0,enumerable:!0})
return oe({},n)}}),ie(ne,"DateTimeFormat",{configurable:!0,writable:!0,value:F}),ie(F,"prototype",{writable:!1})
var xe={weekday:["narrow","short","long"],era:["narrow","short","long"],year:["2-digit","numeric"],month:["2-digit","numeric","narrow","short","long"],day:["2-digit","numeric"],hour:["2-digit","numeric"],minute:["2-digit","numeric"],second:["2-digit","numeric"],timeZoneName:["short","long"]}
fe.DateTimeFormat={"[[availableLocales]]":[],"[[relevantExtensionKeys]]":["ca","nu"],"[[localeData]]":{}},ie(ne.DateTimeFormat,"supportedLocalesOf",{configurable:!0,writable:!0,value:he.call(R,fe.DateTimeFormat)}),ie(ne.DateTimeFormat.prototype,"format",{configurable:!0,get:T}),ie(ne.DateTimeFormat.prototype,"resolvedOptions",{writable:!0,configurable:!0,value:function(){var e,n=new q,a=["locale","calendar","numberingSystem","timeZone","hour12","weekday","era","year","month","day","hour","minute","second","timeZoneName"],t=null!=this&&"object"==typeof this&&B(this)
if(!t||!t["[[initializedDateTimeFormat]]"])throw new TypeError("`this` value for resolvedOptions() is not an initialized Intl.DateTimeFormat object.")
for(var r=0,i=a.length;r<i;r++)re.call(t,e="[["+a[r]+"]]")&&(n[a[r]]={value:t[e],writable:!0,configurable:!0,enumerable:!0})
return oe({},n)}})
var Fe=ne.__localeSensitiveProtos={Number:{},Date:{}}
Fe.Number.toLocaleString=function(){if("[object Number]"!==Object.prototype.toString.call(this))throw new TypeError("`this` value must be a number for Number.prototype.toLocaleString()")
return D(new b(arguments[0],arguments[1]),this)},Fe.Date.toLocaleString=function(){if("[object Date]"!==Object.prototype.toString.call(this))throw new TypeError("`this` value must be a Date instance for Date.prototype.toLocaleString()")
var e=+this
if(isNaN(e))return"Invalid Date"
var n=arguments[0],a=arguments[1],a=S(a,"any","all")
return I(new F(n,a),e)},Fe.Date.toLocaleDateString=function(){if("[object Date]"!==Object.prototype.toString.call(this))throw new TypeError("`this` value must be a Date instance for Date.prototype.toLocaleDateString()")
var e=+this
if(isNaN(e))return"Invalid Date"
var n=arguments[0],a=arguments[1],a=S(a,"date","date")
return I(new F(n,a),e)},Fe.Date.toLocaleTimeString=function(){if("[object Date]"!==Object.prototype.toString.call(this))throw new TypeError("`this` value must be a Date instance for Date.prototype.toLocaleTimeString()")
var e=+this
if(isNaN(e))return"Invalid Date"
var n=arguments[0],a=arguments[1],a=S(a,"time","time")
return I(new F(n,a),e)},ie(ne,"__applyLocaleSensitivePrototypes",{writable:!0,configurable:!0,value:function(){ie(Number.prototype,"toLocaleString",{writable:!0,configurable:!0,value:Fe.Number.toLocaleString}),ie(Date.prototype,"toLocaleString",{writable:!0,configurable:!0,value:Fe.Date.toLocaleString})
for(var e in Fe.Date)re.call(Fe.Date,e)&&ie(Date.prototype,e,{writable:!0,configurable:!0,value:Fe.Date[e]})}}),ie(ne,"__addLocaleData",{value:function(e){if(!r(e.locale))throw new Error("Object passed doesn't identify itself with a valid language tag")
P(e,e.locale)}}),q.prototype=oe(null),G.prototype=oe(null)
var je=ne
this.Intl||(this.Intl=je,je.__applyLocaleSensitivePrototypes())
var Ne=je
this.IntlPolyfill=Ne}).call(this)
