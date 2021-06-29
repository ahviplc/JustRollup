'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function hello() {
    console.log("hello");
  }

function goodbye() {
    console.log("goodbye");
  }

var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

var relationship_min = {exports: {}};

(function (module) {
!function(s,x){module.exports?module.exports=x():s.relationship=x();}("undefined"!=typeof window?window:commonjsGlobal,function(){function s(s){s=s.replace(/[二|三|四|五|六|七|八|九|十]{1,2}/g,"x");for(var x=s.split("的"),f=[],b=!0;x.length;){var d=x.shift(),m=[],w=!1;for(var o in l){var h=l[o];h.indexOf(d)>-1&&(!o&&x.length||m.push(o),w=!0);}if(w||(b=!1),f.length){for(var e=[],o=0;o<f.length;o++)for(var r=0;r<m.length;r++)e.push(f[o]+","+m[r]);f=e;}else for(var o=0;o<m.length;o++)f.push(","+m[o]);}return b?f:[]}function x(s,x){var f=[],b={};x<0&&(0==s.indexOf(",w")?x=1:0==s.indexOf(",h")&&(x=0)),x>-1&&(s=","+x+s);var d=function(s){var x="";if(!b[s]){b[s]=!0;var m=!0;do{x=s;for(var l in w){var o=w[l];if(s=s.replace(o.exp,o.str),s.indexOf("#")>-1){for(var h=s.split("#"),l=0;l<h.length;l++)d(h[l]);m=!1;break}}}while(x!=s);m&&(s=s.replace(/,[01]/,"").substr(1),f.push(s));}};return d(s),f}function f(s){var x=[],f=/&[olx]/g;for(var b in l)b.replace(f,"")==s&&x.push(l[b]);return x}function b(s,x){var f={f:["d","s"],m:["d","s"],h:["w",""],w:["","h"],s:["m","f"],d:["m","f"],lb:["os","ob"],ob:["ls","lb"],xb:["xs","xb"],ls:["os","ob"],os:["ls","lb"],xs:["xs","xb"]},b="";if(s.indexOf("&o")>-1?b="&l":s.indexOf("&l")>-1&&(b="&o"),s){s=s.replace(/&[ol]/g,""),x=x?1:0;var d=(","+x+","+s).replace(/,[fhs]|,[olx]b/g,",1").replace(/,[mwd]|,[olx]s/g,",0");d=d.substring(0,d.lastIndexOf(","));for(var m=s.split(",").reverse(),w=d.split(",").reverse(),l=[],o=0;o<m.length;o++)l.push(f[m[o]][w[o]]);return l.join(",")+b}return ""}function d(s){for(var x=s.split(","),f=[],b=0;b<x.length;b++){var d=x[b].replace(/&[ol]/,"");f.push(l[d][0]);}return f.join("的")}function m(m){var w={text:"",sex:-1,type:"default",reverse:!1};for(var h in m)w[h]=m[h];for(var e=s(w.text),r=[],t=0;t<e.length;t++)for(var p=x(e[t],w.sex),$=0;$<p.length;$++){var n=p[$];if("chain"==w.type){var a=d(n);a&&r.push(a);}else if(w.reverse&&(n=b(n,w.sex)),l[n])r.push(l[n][0]);else {var a=f(n);if(a.length||(n=n.replace(/&[ol]/g,""),a=f(n)),a.length||(n=n.replace(/[ol]/g,"x"),a=f(n)),!a.length){var g=n.replace(/x/g,"l");a=f(g);var i=n.replace(/x/g,"o");a=a.concat(f(i));}for(var u=0;u<a.length;u++)r.push(a[u][0]);}}return o(r)}var w=[{exp:/^(.+)&o([^#]+)&l/g,str:"$1$2"},{exp:/^(.+)&l([^#]+)&o/g,str:"$1$2"},{exp:/(,[ds],(.+),[ds])&[ol]/g,str:"$1"},{exp:/m,h/g,str:"f"},{exp:/f,w/g,str:"m"},{exp:/,[xol][sb](,[mf])/g,str:"$1"},{exp:/,[mf],d&([ol])/,str:",$1s"},{exp:/,[mf],s&([ol])/,str:",$1b"},{exp:/^(.*)(,[fh1]|[xol]b),[mf],s(.*)$/,str:"$1$2,xb$3#$1$2$3"},{exp:/^(.*)(,[mw0]|[xol]s),[mf],d(.*)$/,str:"$1$2,xs$3#$1$2$3"},{exp:/(,[mw0]|[xol]s),[mf],s/,str:"$1,xb"},{exp:/(,[fh1]|[xol]b),[mf],d/,str:"$1,xs"},{exp:/^,[mf],s(.+)?$/,str:",1$1#,xb$1"},{exp:/^,[mf],d(.+)?$/,str:",0$1#,xs$1"},{exp:/(,o[sb])+(,o[sb])/,str:"$2"},{exp:/(,l[sb])+(,l[sb])/,str:"$2"},{exp:/^(.*)(,[fh1])(,[olx][sb])+,[olx]b(.*)$/,str:"$1$2,xb$4#$1$2$4"},{exp:/^(.*)(,[mw0])(,[olx][sb])+,[olx]s(.*)$/,str:"$1$2,xs$4#$1$2$4"},{exp:/(,[fh1])(,[olx][sb])+,[olx]s/g,str:"$1,xs"},{exp:/(,[mw0])(,[olx][sb])+,[olx]b/g,str:"$1,xb"},{exp:/^,[olx][sb],[olx]b(.+)?$/,str:"$1#,xb$1"},{exp:/^,[olx][sb],[olx]s(.+)?$/,str:"$1#,xs$1"},{exp:/^,x([sb])$/,str:",o$1#,l$1"},{exp:/,[ds]&o,ob/g,str:",s&o"},{exp:/,[ds]&o,os/g,str:",d&o"},{exp:/,[ds]&l,lb/g,str:",s&l"},{exp:/,[ds]&l,ls/g,str:",d&l"},{exp:/,[ds](&[ol])?,[olx]s/g,str:",d"},{exp:/,[ds](&[ol])?,[olx]b/g,str:",s"},{exp:/(,[mwd0](&[ol])?|[olx]s),[ds](&[ol])?,m/g,str:"$1"},{exp:/(,[mwd0](&[ol])?|[olx]s),[ds](&[ol])?,f/g,str:"$1,h"},{exp:/(,[fhs1](&[ol])?|[olx]b),[ds](&[ol])?,f/g,str:"$1"},{exp:/(,[fhs1](&[ol])?|[olx]b),[ds](&[ol])?,m/g,str:"$1,w"},{exp:/^,[ds],m(.+)?$/,str:"$1#,w$1"},{exp:/^,[ds],f(.+)?$/,str:"$1#,h$1"},{exp:/,[wh](,[ds])/g,str:"$1"},{exp:/,w,h|,h,w/g,str:""}],l={"":["自己","我"],f:["爸爸","父亲","阿爸","老爸","老窦","爹","爹爹","爹地","爹啲","老爷子"],"f,f":["爷爷","祖父","阿爷","奶爷"],"f,f,f":["曾祖父","太爷","太爷爷","太公","祖公","祖奶爷"],"f,f,f,f":["高祖父","老太爷"],"f,f,f,f,ob":["伯高祖父"],"f,f,f,f,lb":["叔高祖父"],"f,f,f,m":["高祖母","老太太"],"f,f,f,ob":["伯曽祖父","曾伯祖父","伯公太"],"f,f,f,ob,w":["叔曽祖母","曾伯祖母","伯婆太"],"f,f,f,lb":["伯曽祖父","曾叔祖父","叔公太"],"f,f,f,lb,w":["叔曽祖母","曾叔祖母","叔婆太"],"f,f,f,xb,s&o":["堂伯祖父"],"f,f,f,xb,s&o,w":["堂伯祖母"],"f,f,f,xb,s&l":["堂叔祖父"],"f,f,f,xb,s&l,w":["堂叔祖母"],"f,f,f,xb,s,s&o":["从伯父"],"f,f,f,xb,s,s&o,w":["从伯母"],"f,f,f,xb,s,s&l":["从叔父"],"f,f,f,xb,s,s&l,w":["从叔母"],"f,f,f,xb,s,s,s&o":["族兄"],"f,f,f,xb,s,s,s&l":["族弟"],"f,f,f,xs":["太姑婆","姑婆太","曾祖姑母"],"f,f,f,xs,h":["太姑丈公","姑丈公太","曾祖姑丈"],"f,f,f,xs,s&o":["表伯祖父"],"f,f,f,xs,s&o,w":["表伯祖母"],"f,f,f,xs,s&l":["表叔祖父"],"f,f,f,xs,s&l,w":["表叔祖母"],"f,f,m":["曾祖母","太奶奶","太婆","祖婆","祖奶奶"],"f,f,m,xb":["太舅公","太舅爷"],"f,f,m,xb,w":["太舅婆"],"f,f,m,xb,s&o":["表伯祖父"],"f,f,m,xb,s&o,w":["表伯祖母"],"f,f,m,xb,s&l":["表叔祖父"],"f,f,m,xb,s&l,w":["表叔祖母"],"f,f,m,xs":["太姨奶","曾姨奶奶"],"f,f,m,xs,h":["太姨爷"],"f,f,m,xs,s&o":["表伯祖父"],"f,f,m,xs,s&o,w":["表伯祖母"],"f,f,m,xs,s&l":["表叔祖父"],"f,f,m,xs,s&l,w":["表叔祖母"],"f,f,xb":["堂祖父","x爷爷"],"f,f,xb,w":["堂祖母"],"f,f,xb,s&o":["堂伯","堂伯父"],"f,f,xb,s&o,w":["堂伯母"],"f,f,xb,s&l":["堂叔"],"f,f,xb,s,w":["堂婶","堂叔母","堂婶母"],"f,f,xb,s,s&o":["从兄","从兄弟"],"f,f,xb,s,s&o,w":["从嫂"],"f,f,xb,s,s&l":["从弟","从兄弟"],"f,f,xb,s,s&l,w":["从弟妹"],"f,f,xb,s,s,s":["从侄","从侄子"],"f,f,xb,s,s,s,w":["从侄媳妇"],"f,f,xb,s,s,s,s":["从侄孙"],"f,f,xb,s,s,s,d":["从侄孙女"],"f,f,xb,s,s,d":["从侄女"],"f,f,xb,s,s,d,h":["从侄女婿"],"f,f,xb,s,d&o":["从姐","从姐妹"],"f,f,xb,s,d&o,h":["从姐夫"],"f,f,xb,s,d&l":["从妹","从姐妹"],"f,f,xb,s,d&l,h":["从妹夫"],"f,f,xb,d":["堂姑"],"f,f,xb,d,h":["堂姑丈"],"f,f,ob":["伯祖父","伯公","大爷爷","大爷","堂祖父","伯爷爷","伯老爷"],"f,f,ob,w":["伯祖母","伯婆","大奶奶","堂祖母"],"f,f,lb":["叔祖父","叔公","小爷爷","堂祖父","叔爷爷","叔老爷"],"f,f,lb,w":["叔祖母","叔婆","小奶奶","堂祖母","叔奶奶"],"f,f,xs":["姑婆","姑祖母","祖姑母","姑奶奶"],"f,f,xs,h":["姑丈公","姑祖父","祖姑丈","姑爷爷","姑奶爷","姑老爷"],"f,f,xs,s&o":["表伯","表伯父"],"f,f,xs,s&o,w":["表伯母"],"f,f,xs,s&l":["表叔","表叔父"],"f,f,xs,s&l,w":["表婶","表叔母"],"f,f,xs,d":["表姑"],"f,f,xs,d,h":["表姑丈"],"f,m":["奶奶","祖母","阿嫲","嫲嫲"],"f,m,f":["曾外祖父","外太公"],"f,m,m":["曾外祖母","外太婆"],"f,m,xb":["舅公","舅老爷","舅爷爷","舅爷","舅祖","舅奶爷","舅祖父","太舅父"],"f,m,xb,w":["舅婆","舅奶奶","舅祖母","妗婆","太舅母"],"f,m,xb,s&o":["表伯","表伯父"],"f,m,xb,s&o,w":["表伯母"],"f,m,xb,s&l":["表叔","表叔父"],"f,m,xb,s&l,w":["表婶","表叔母"],"f,m,xb,d":["表姑"],"f,m,xb,d,h":["表姑丈"],"f,m,xs":["姨婆","姨奶奶","姨祖父"],"f,m,xs,h":["姨丈公","姨爷爷","姨祖母","姨爷","姨老爷","姨奶爷"],"f,m,xs,s&o":["表伯","表伯父"],"f,m,xs,s&o,w":["表伯母"],"f,m,xs,s&l":["表叔","表叔父"],"f,m,xs,s&l,w":["表婶","表叔母"],"f,m,xs,d":["表姑"],"f,m,xs,d,h":["表姑丈"],"f,xb,s&o":["堂哥","堂兄"],"f,xb,s&o,w":["堂嫂"],"f,xb,s&l":["堂弟"],"f,xb,s&l,w":["堂弟媳"],"f,xb,s,s":["堂侄","堂侄子"],"f,xb,s,s,w":["堂侄媳妇"],"f,xb,s,s,s":["堂侄孙"],"f,xb,s,s,s,w":["堂侄孙媳妇"],"f,xb,s,s,d":["堂侄孙女"],"f,xb,s,s,d,h":["堂侄孙女婿"],"f,xb,s,d":["堂侄女"],"f,xb,s,d,h":["堂侄女婿"],"f,xb,d&o":["堂姐"],"f,xb,d&o,h":["堂姐夫"],"f,xb,d&l":["堂妹"],"f,xb,d&l,h":["堂妹夫"],"f,xb,d,s":["堂外甥"],"f,xb,d,d":["堂外甥女"],"f,ob":["伯父","伯伯","大伯","x伯"],"f,ob,w":["伯母","大娘"],"f,lb":["叔叔","叔父","阿叔","叔","仲父","x叔"],"f,lb,w":["婶婶","婶母","阿婶","家婶","婶","季母"],"f,xs":["姑妈","姑母","姑姑","姑"],"f,xs,h":["姑丈","姑父","姑夫"],"f,xs,s&o":["表哥(姑家)","表哥"],"f,xs,s&o,w":["表嫂(姑家)","表嫂"],"f,xs,s&l":["表弟(姑家)","表弟"],"f,xs,s&l,w":["表弟媳(姑家)","表弟媳"],"f,xs,s,s":["表侄子"],"f,xs,s,s,s":["表侄孙"],"f,xs,s,s,s,w":["表侄孙媳妇"],"f,xs,s,s,d":["表侄孙女"],"f,xs,s,s,d,h":["表侄孙女婿"],"f,xs,s,d":["表侄女"],"f,xs,s,d,s":["外表侄孙"],"f,xs,s,d,s,w":["外表侄孙媳妇"],"f,xs,s,d,d":["外表侄孙女"],"f,xs,s,d,d,h":["外表侄孙女婿"],"f,xs,d&o":["表姐(姑家)","表姐"],"f,xs,d&o,h":["表姐夫(姑家)","表姐夫","表姐丈"],"f,xs,d&l":["表妹(姑家)","表妹"],"f,xs,d&l,h":["表妹夫(姑家)","表妹夫"],"f,xs,d,s":["表外甥"],"f,xs,d,d":["表外甥女"],"f,os":["姑母"],"f,ls":["姑姐"],m:["妈妈","母亲","老妈","阿妈","老母","老妈子","娘","娘亲","妈咪"],"m,f":["外公","姥爷","阿公"],"m,f,f":["外曾祖父","外太祖父","太外祖父","太姥爷","外太公"],"m,f,f,xb":["外太伯公"],"m,f,f,xb,w":["外太伯母"],"m,f,f,xs":["外太姑婆"],"m,f,f,xs,h":["外太姑丈公"],"m,f,f,xs,s&o":["外表伯祖父"],"m,f,f,xs,s&o,w":["外表伯祖母"],"m,f,f,xs,s&l":["外表叔祖父"],"m,f,f,xs,s&l,w":["外表叔祖母"],"m,f,m":["外曾祖母","外太祖母","太外祖母","太姥姥","外太婆"],"m,f,m,xb":["外太舅公"],"m,f,m,xb,w":["外太舅母","外太舅婆"],"m,f,m,xs":["外太姨婆"],"m,f,m,xs,h":["外太姑姨公"],"m,f,xb":["小姥爷","x姥爷"],"m,f,xb,s":["堂舅","堂舅父"],"m,f,xb,s,w":["堂舅妈","堂舅母"],"m,f,xb,d":["堂姨"],"m,f,xb,d,h":["堂姨丈"],"m,f,ob":["外伯祖父","伯姥爷","大姥爷","外伯祖"],"m,f,ob,w":["外伯祖母","伯姥姥","大姥姥","外姆婆"],"m,f,lb":["外叔祖父","叔姥爷","小姥爷","外叔祖"],"m,f,lb,w":["外叔祖母","叔姥姥","小姥姥","外姆婆"],"m,f,xs":["外姑祖母","姑姥姥","外太姑母"],"m,f,xs,h":["外姑祖父","姑姥爷","外太姑父"],"m,f,xs,s":["表舅","表舅父"],"m,f,xs,s,w":["表舅妈","表舅母"],"m,f,xs,d":["表姨","表姨母","表姨妈","表阿姨"],"m,f,xs,d,h":["表姨丈","表姨父"],"m,m":["外婆","姥姥","阿婆"],"m,m,f":["外曾外祖父","外太外公","太姥爷"],"m,m,m":["外曾外祖母","外太外婆","太姥姥"],"m,m,xb":["外舅公","外舅祖父","舅姥爷","舅外祖父","舅外公","舅公"],"m,m,xb,w":["外舅婆","外舅祖母","舅姥姥"],"m,m,xb,s":["表舅","表舅父"],"m,m,xb,s,w":["表舅妈","表舅母"],"m,m,xb,d":["表姨","表姨母","表姨妈","表阿姨"],"m,m,xb,d,h":["表姨丈","表姨父"],"m,m,xs":["外姨婆","外姨祖母","姨姥姥","姨婆"],"m,m,xs,h":["外姨丈公","外姨祖父","姨姥爷"],"m,m,xs,s":["表舅","表舅父"],"m,m,xs,s,w":["表舅妈","表舅母"],"m,m,xs,d":["表姨","表姨母","表姨妈","表阿姨"],"m,m,xs,d,h":["表姨丈","表姨父"],"m,xb":["舅舅","舅父","舅","娘舅","舅仔","x舅"],"m,xb,w":["舅妈","舅母","妗妗","妗母","阿妗","x舅妈"],"m,xb,s&o":["表哥(舅家)","表哥"],"m,xb,s&o,w":["表嫂(舅家)","表嫂"],"m,xb,s&l":["表弟(舅家)","表弟"],"m,xb,s&l,w":["表弟媳(舅家)","表弟媳"],"m,xb,s,s":["表侄子"],"m,xb,s,s,s":["表侄孙"],"m,xb,s,s,s,w":["表侄孙媳妇"],"m,xb,s,s,d":["表侄孙女"],"m,xb,s,s,d,h":["表侄孙女婿"],"m,xb,s,d":["表侄女"],"m,xb,s,d,s":["外表侄孙"],"m,xb,s,d,s,w":["外表侄孙媳妇"],"m,xb,s,d,d":["外表侄孙女"],"m,xb,s,d,d,h":["外表侄孙女婿"],"m,xb,d&o":["表姐(舅家)","表姐"],"m,xb,d&o,h":["表姐夫(舅家)","表姐夫","表姐丈"],"m,xb,d&l":["表妹(舅家)","表妹"],"m,xb,d&l,h":["表妹夫(舅家)","表妹夫"],"m,xb,d,s":["表外甥"],"m,xb,d,d":["表外甥女"],"m,ob":["大舅"],"m,ob,w":["大舅妈"],"m,lb":["小舅","舅父仔"],"m,lb,w":["小舅妈"],"m,xs":["姨妈","姨母","姨姨","姨娘","阿姨","姨","x姨","x姨妈"],"m,xs,h":["姨丈","姨夫","姨父","x姨父"],"m,xs,s&o":["表哥(姨家)","表哥"],"m,xs,s&o,w":["表嫂(姨家)","表嫂"],"m,xs,s&l":["表弟(姨家)","表弟"],"m,xs,s&l,w":["表弟媳(姨家)","表弟媳"],"m,xs,s,s":["表侄子"],"m,xs,s,s,s":["表侄孙"],"m,xs,s,s,s,w":["表侄孙媳妇"],"m,xs,s,s,d":["表侄孙女"],"m,xs,s,s,d,h":["表侄孙女婿"],"m,xs,s,d":["表侄女"],"m,xs,s,d,s":["外表侄孙"],"m,xs,s,d,s,w":["外表侄孙媳妇"],"m,xs,s,d,d":["外表侄孙女"],"m,xs,s,d,d,h":["外表侄孙女婿"],"m,xs,d&o":["表姐(姨家)","表姐"],"m,xs,d&o,h":["表姐夫(姨家)","表姐夫","表姐丈"],"m,xs,d&l":["表妹(姨家)","表妹"],"m,xs,d&l,h":["表妹夫(姨家)","表妹夫"],"m,xs,d,s":["表外甥"],"m,xs,d,d":["表外甥女"],"m,os":["大姨","大姨妈"],"m,os,h":["大姨父","大姨丈","大姨夫"],"m,ls":["小姨","小姨妈","姨仔"],"m,ls,h":["小姨父","小姨丈","小姨夫"],h:["老公","丈夫","先生","官人","男人","汉子","夫","夫君","爱人"],"h,f":["公公"],"h,f,f":["祖翁"],"h,f,f,f":["太公翁"],"h,f,f,m":["太奶亲"],"h,f,m":["祖婆"],"h,f,ob":["伯翁"],"h,f,ob,w":["伯婆"],"h,f,lb":["叔翁"],"h,f,lb,w":["叔婆"],"h,f,xb,s&o":["堂大伯","堂兄"],"h,f,xb,s&o,w":["堂嫂"],"h,f,xb,s&l":["堂叔仔","堂弟"],"h,f,xb,s&l,w":["堂小弟"],"h,m":["婆婆"],"h,m,xb":["舅公"],"h,m,xb,w":["舅婆"],"h,m,xs":["姨婆"],"h,m,xs,h":["姨公"],"h,xb,s":["侄子","侄儿"],"h,xb,s,w":["侄媳","侄媳妇"],"h,xb,s,s":["侄孙","侄孙子"],"h,xb,s,s,w":["侄孙媳"],"h,xb,s,d":["侄孙女"],"h,xb,s,d,h":["侄孙女婿"],"h,xb,d":["侄女"],"h,xb,d,h":["侄女婿","侄婿"],"h,xb,d,s":["外侄孙"],"h,xb,d,s,w":["外侄媳妇"],"h,xb,d,d":["外侄孙女"],"h,xb,d,d,h":["外侄孙女婿"],"h,ob":["大伯子","大伯哥","夫兄"],"h,ob,w":["大婶子","大伯嫂","大伯妇","伯娘","大伯娘","大嫂","夫兄嫂","妯娌"],"h,lb":["小叔子","小叔弟"],"h,lb,w":["小婶子","小叔妇","小叔媳妇","妯娌"],"h,xs,s":["外甥"],"h,xs,s,w":["外甥媳妇"],"h,xs,s,s":["外甥孙"],"h,xs,s,s,w":["外甥孙媳妇"],"h,xs,s,s,s":["外曾甥孙"],"h,xs,s,s,d":["外曾甥孙女"],"h,xs,s,d":["外甥孙女"],"h,xs,s,d,h":["外甥孙女婿"],"h,xs,s,d,s":["外曾甥孙"],"h,xs,s,d,d":["外曾甥孙女"],"h,xs,d":["外甥女"],"h,xs,d,h":["外甥女婿"],"h,xs,d,s":["外甥孙"],"h,xs,d,s,w":["外甥孙媳妇"],"h,xs,d,s,s":["外曾甥孙"],"h,xs,d,s,d":["外曾甥孙女"],"h,xs,d,d":["外甥孙女"],"h,xs,d,d,h":["外甥孙女婿"],"h,xs,d,d,s":["外曾甥孙"],"h,xs,d,d,d":["外曾甥孙女"],"h,os":["大姑子","大姑","大娘姑"],"h,os,h":["大姑夫","姊丈","大姑姐夫"],"h,ls":["小姑子","小姑","姑仔"],"h,ls,h":["小姑夫","小姑妹夫"],w:["老婆","妻子","太太","媳妇","夫人","女人","婆娘","妻","内人","娘子","爱人"],"w,f":["岳父","老丈人","丈人","泰山","妻父"],"w,f,f":["太岳父"],"w,f,f,ob":["太伯岳"],"w,f,f,ob,w":["太伯岳母"],"w,f,f,lb,":["太叔岳"],"w,f,f,lb,w":["太叔岳母"],"w,f,f,xb,s&o":["姻伯"],"w,f,f,xb,s&o,w":["姻姆"],"w,f,f,xb,s&l":["姻叔"],"w,f,f,xb,s&l,w":["姻婶"],"w,f,f,xs":["太姑岳母"],"w,f,f,xs,h":["太姑岳父"],"w,f,m":["太岳母"],"w,f,m,xb":["太舅岳父"],"w,f,m,xb,w":["太舅岳母"],"w,f,m,xs":["太姨岳母"],"w,f,m,xs,h":["太姨岳父"],"w,f,xb,s&o":["堂大舅","姻家兄"],"w,f,xb,s&l":["堂舅仔","姻家弟"],"w,f,xb,d&o":["堂大姨"],"w,f,xb,d&l":["堂姨仔"],"w,f,ob":["伯岳","伯岳父"],"w,f,ob,w":["伯岳母"],"w,f,lb":["叔岳","叔岳父"],"w,f,lb,w":["叔岳母"],"w,f,xs":["姑岳母"],"w,f,xs,s&o":["表大舅"],"w,f,xs,s&l":["表舅仔"],"w,f,xs,d&o":["表大姨"],"w,f,xs,d&l":["表姨仔"],"w,m":["岳母","丈母娘"],"w,m,f":["外太岳父"],"w,m,m":["外太岳母"],"w,m,xb":["舅岳父"],"w,m,xb,w":["舅岳母"],"w,m,xb,s&o":["表大舅"],"w,m,xb,s&l":["表舅仔"],"w,m,xb,d&o":["表大姨"],"w,m,xb,d&l":["表姨仔"],"w,m,xs":["姨岳母"],"w,m,xs,h":["姨岳父"],"w,m,xs,s&o":["表大舅"],"w,m,xs,s&l":["表舅仔"],"w,m,xs,d&o":["表大姨"],"w,m,xs,d&l":["表姨仔"],"w,xb,s":["内侄","妻侄"],"w,xb,s,w":["内侄媳妇"],"w,xb,s,s":["侄孙"],"w,xb,s,s,w":["侄孙媳妇"],"w,xb,s,d":["侄孙女"],"w,xb,s,d,h":["侄孙女婿"],"w,xb,d":["内侄女","妻侄女"],"w,xb,d,h":["内侄女婿"],"w,xb,d,s":["外侄孙"],"w,xb,d,s,w":["外侄孙媳妇"],"w,xb,d,d":["外侄孙女"],"w,xb,d,d,h":["外侄孙女婿"],"w,ob":["大舅哥","大舅子","内兄"],"w,ob,w":["舅嫂","大舅妇","大舅媳妇","大妗子","内嫂"],"w,lb":["小舅子","内弟"],"w,lb,w":["舅弟媳","小舅妇","小舅媳妇","小妗子"],"w,xs,s":["姨甥","妻外甥"],"w,xs,s,w":["姨甥媳妇"],"w,xs,s,s":["姨甥孙"],"w,xs,s,s,w":["姨甥孙媳妇"],"w,xs,s,d":["姨甥孙女"],"w,xs,s,d,h":["姨甥孙女婿"],"w,xs,d":["姨甥女","妻外甥女"],"w,xs,d,h":["姨甥女婿"],"w,xs,d,s":["姨甥孙"],"w,xs,d,s,w":["姨甥孙媳妇"],"w,xs,d,d":["姨甥孙女"],"w,xs,d,d,h":["姨甥孙女婿"],"w,os":["大姨子","大姨姐","妻姐"],"w,os,h":["大姨夫","大姨姐夫","襟兄","连襟"],"w,ls":["小姨子","小姨姐","妻妹","小妹儿"],"w,ls,h":["小姨夫","小姨妹夫","襟弟","连襟"],xb:["兄弟"],"xb,w,f":["姻世伯","亲家爷","亲爹","亲伯"],"xb,w,m":["姻伯母","亲家娘","亲娘"],"xb,s":["侄子","侄儿"],"xb,s,w":["侄媳","侄媳妇"],"xb,s,s":["侄孙","侄孙子"],"xb,s,s,w":["侄孙媳"],"xb,s,s,s":["侄曾孙"],"xb,s,s,d":["侄曾孙女"],"xb,s,d":["侄孙女"],"xb,s,d,h":["侄孙女婿"],"xb,d":["侄女"],"xb,d,h":["侄女婿"],"xb,d,s":["外侄孙","外侄孙子"],"xb,d,s,w":["外侄孙媳妇"],"xb,d,d":["外侄孙女"],"xb,d,d,h":["外侄孙女婿"],ob:["哥哥","哥","兄","阿哥","大哥","大佬","老哥"],"ob,w":["嫂子","大嫂","嫂","阿嫂"],"ob,w,f":["姻伯父"],"ob,w,m":["姻伯母"],lb:["弟弟","弟","细佬","老弟"],"lb,w":["弟妹","弟媳","弟媳妇"],"lb,w,f":["姻叔父"],"lb,w,m":["姻叔母"],xs:["姐妹"],"xs,h,f":["姻世伯","亲家爷","亲爹","亲伯"],"xs,h,m":["姻伯母","亲家娘","亲娘"],"xs,s":["外甥"],"xs,s,w":["外甥媳妇"],"xs,s,s":["外甥孙"],"xs,s,s,w":["外甥孙媳妇"],"xs,s,s,s":["外曾甥孙"],"xs,s,s,d":["外曾甥孙女"],"xs,s,d":["外甥孙女"],"xs,s,d,h":["外甥孙女婿"],"xs,s,d,s":["外曾甥孙"],"xs,s,d,d":["外曾甥孙女"],"xs,d":["外甥女"],"xs,d,h":["外甥女婿"],"xs,d,s":["外甥孙"],"xs,d,s,w":["外甥孙媳妇"],"xs,d,s,s":["外曾甥孙"],"xs,d,s,d":["外曾甥孙女"],"xs,d,d":["外甥孙女"],"xs,d,d,h":["外甥孙女婿"],"xs,d,d,s":["外曾甥孙"],"xs,d,d,d":["外曾甥孙女"],os:["姐姐","姐","家姐","阿姐","阿姊"],"os,h":["姐夫","姊夫","姊婿"],ls:["妹妹","妹","老妹"],"ls,h":["妹夫","妹婿"],s:["儿子","仔","阿仔","仔仔"],"s,w":["儿媳妇","儿媳"],"s,w,xb":["姻侄"],"s,w,xs":["姻侄女"],"s,s":["孙子"],"s,s,w":["孙媳妇","孙媳"],"s,s,s":["曾孙"],"s,s,s,w":["曾孙媳妇"],"s,s,s,s":["玄孙","元孙","膀孙"],"s,s,s,d":["玄孙女"],"s,s,s,s,s":["来孙"],"s,s,d":["曾孙女"],"s,s,d,h":["曾孙女婿"],"s,s,d,s":["外玄孙"],"s,s,d,d":["外玄孙女"],"s,d":["孙女"],"s,d,h":["孙女婿"],"s,d,s":["曾外孙"],"s,d,d":["曾外孙女"],d:["女儿","千金","女","阿女","女女","掌上明珠"],"d,h":["女婿","女婿子","女婿儿"],"d,h,xb":["姻侄"],"d,h,xs":["姻侄女"],"d,s":["外孙"],"d,s,w":["外孙媳"],"d,s,s":["外曾孙","重外孙"],"d,s,d":["外曾孙女","重外孙女"],"d,d":["外孙女"],"d,d,h":["外孙女婿"],"d,d,s":["外曾外孙"],"d,d,d":["外曾外孙女"],"s,w,m":["亲家母"],"s,w,f":["亲家公","亲家翁"],"s,w,f,f":["太姻翁"],"s,w,f,m":["太姻姆"],"s,w,f,ob":["姻兄"],"s,w,f,lb":["姻弟"],"d,h,m":["亲家母"],"d,h,f":["亲家公","亲家翁"],"d,h,f,f":["太姻翁"],"d,h,f,m":["太姻姆"],"d,h,f,ob":["姻兄"],"d,h,f,lb":["姻弟"]},o=function(s){for(var x,f=[],b={},d=0;null!=(x=s[d]);d++)b[x]||(f.push(x),b[x]=!0);return f};return m});
}(relationship_min));

var relationship = relationship_min.exports;

function call_me() {
    console.log("hello lc");
}

function call_you() {
    console.log('hello you');
}

function call_diy_export_fun() {
    console.log('call_diy_export_fun');
}

const utils_obj = {
    call_me,
    call_you,
    relationship
};

// 暴露回调函数 getJustRollupInfo 这个方法 来获取 JustRollup 这个lib的相关信息
// 参数 data 说明
// who 你是谁？
// mockStatus 模拟状态 1 成功 2 失败
// 参数 OBJECT 说明
// success	Function	是	接口调用成功的回调
// fail	Function	否	接口调用失败的回调函数
// complete	Function	否	接口调用结束的回调函数（调用成功、失败都会执行）
// 扩展知识点
// 使用 typeof OBJECT.success|fail|complete| 来判断是不是传入函数,来决定要不要去执行它
// 这样也可以保证 没有传入的回调 不去执行
// 因为 typeof OBJECT.complete = undefined 的话 if通不过的 不去执行的
// 还有 使用 try catch finally 也整好契合逻辑流程 可以捕捉错误异常 也可以在最后执行 finally
function getJustRollupInfo(data = {who: undefined, mockStatus: undefined}, OBJECT = {
    success: undefined,
    complete: undefined,
    fail: undefined
}) {
    // 默认值初始化
    // data.who 如果外部未传的话 则给默认值 'LC'
    data.who = data.who || 'LC';
    // 打印
    // console.log('OBJECT', OBJECT)
    // console.log('typeof OBJECT.success', typeof OBJECT.success)
    // console.log('typeof OBJECT.fail', typeof OBJECT.fail)
    // console.log('typeof OBJECT.complete', typeof OBJECT.complete)
    // 返回对象returnData的封装
    // res 返回的 JustRollup 这个lib的相关信息
    // codeMsg 此code和msg的封装体
    // data 请求参数 映射过来
    // msg 传递msg
    // =============================================
    // 返回对象codeMsg的封装
    // code 返回码
    // msg 返回码说明 可以包含正常说明 也可以包含错误说明 异常说明
    // =============================================
    // 错误码具体说明
    // code 为 '0000' 代表 成功
    // code 为 '1001' 代表 业务逻辑错误
    // code 为 '9999' 代表 代码异常错误
    // code 为 '9527' 代表 其他错误
    // =============================================
    // 创建错误码返回对象的封装
    const codeMsg = {code: '', msg: ''};
    // 创建总的对象封装
    const returnData = {res: {author: 'LC', age: 18, desc: '这是一个全端适配使用js工具库.'}, codeMsg: codeMsg, data: data, msg: ""};
    returnData.msg = `Hello, ${data.who}`;
    try {
        // 模拟成功
        if (data.mockStatus === 1) {
            codeMsg.code = '0000';
            codeMsg.msg = 'success';
            // 确保callback是一个函数
            if (typeof OBJECT.success === "function") {
                // 调用它，既然我们已经确定了它是可调用的
                return OBJECT.success(returnData);
            }
        } else if (data.mockStatus === 2) { // 模拟失败 业务逻辑上的失败反馈
            codeMsg.code = '1001';
            codeMsg.msg = 'fail mockStatus = 2,please try later.';
            // 确保callback是一个函数
            if (typeof OBJECT.fail === "function") {
                // 调用它，既然我们已经确定了它是可调用的
                return OBJECT.fail(codeMsg);
            }
        } else {
            codeMsg.code = '0000';
            codeMsg.msg = 'success ';
            // 其他各种情况 返回 returnData
            codeMsg.msg = codeMsg.msg + returnData.msg + ' 这是data.mockStatus不是1也不是2的其他情况啊';
            // 确保callback是一个函数
            if (typeof OBJECT.success === "function") {
                // 调用它，既然我们已经确定了它是可调用的
                return OBJECT.success(returnData);
            }
        }
    } catch (err) {
        // 代码执行过程 捕获到异常 把其具体异常信息fail出去
        // console.log('catch err' , err)
        returnData.code = '9999';
        codeMsg.msg = 'fail ' + err;
        // 确保callback是一个函数
        if (typeof OBJECT.fail === "function") {
            // 调用它，既然我们已经确定了它是可调用的
            return OBJECT.fail(codeMsg);
        }
    } finally {
        // 确保callback是一个函数
        if (typeof OBJECT.complete === "function") {
            // 调用它，既然我们已经确定了它是可调用的
            return OBJECT.complete();
        }
    }
}

var dayjs_min = {exports: {}};

(function (module, exports) {
!function(t,e){module.exports=e();}(commonjsGlobal,(function(){var t=1e3,e=6e4,n=36e5,r="millisecond",i="second",s="minute",u="hour",a="day",o="week",f="month",h="quarter",c="year",d="date",$="Invalid Date",l=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[^0-9]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,y=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,M={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_")},m=function(t,e,n){var r=String(t);return !r||r.length>=e?t:""+Array(e+1-r.length).join(n)+t},g={s:m,z:function(t){var e=-t.utcOffset(),n=Math.abs(e),r=Math.floor(n/60),i=n%60;return (e<=0?"+":"-")+m(r,2,"0")+":"+m(i,2,"0")},m:function t(e,n){if(e.date()<n.date())return -t(n,e);var r=12*(n.year()-e.year())+(n.month()-e.month()),i=e.clone().add(r,f),s=n-i<0,u=e.clone().add(r+(s?-1:1),f);return +(-(r+(n-i)/(s?i-u:u-i))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(t){return {M:f,y:c,w:o,d:a,D:d,h:u,m:s,s:i,ms:r,Q:h}[t]||String(t||"").toLowerCase().replace(/s$/,"")},u:function(t){return void 0===t}},D="en",v={};v[D]=M;var p=function(t){return t instanceof _},S=function(t,e,n){var r;if(!t)return D;if("string"==typeof t)v[t]&&(r=t),e&&(v[t]=e,r=t);else {var i=t.name;v[i]=t,r=i;}return !n&&r&&(D=r),r||!n&&D},w=function(t,e){if(p(t))return t.clone();var n="object"==typeof e?e:{};return n.date=t,n.args=arguments,new _(n)},O=g;O.l=S,O.i=p,O.w=function(t,e){return w(t,{locale:e.$L,utc:e.$u,x:e.$x,$offset:e.$offset})};var _=function(){function M(t){this.$L=S(t.locale,null,!0),this.parse(t);}var m=M.prototype;return m.parse=function(t){this.$d=function(t){var e=t.date,n=t.utc;if(null===e)return new Date(NaN);if(O.u(e))return new Date;if(e instanceof Date)return new Date(e);if("string"==typeof e&&!/Z$/i.test(e)){var r=e.match(l);if(r){var i=r[2]-1||0,s=(r[7]||"0").substring(0,3);return n?new Date(Date.UTC(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,s)):new Date(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,s)}}return new Date(e)}(t),this.$x=t.x||{},this.init();},m.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds();},m.$utils=function(){return O},m.isValid=function(){return !(this.$d.toString()===$)},m.isSame=function(t,e){var n=w(t);return this.startOf(e)<=n&&n<=this.endOf(e)},m.isAfter=function(t,e){return w(t)<this.startOf(e)},m.isBefore=function(t,e){return this.endOf(e)<w(t)},m.$g=function(t,e,n){return O.u(t)?this[e]:this.set(n,t)},m.unix=function(){return Math.floor(this.valueOf()/1e3)},m.valueOf=function(){return this.$d.getTime()},m.startOf=function(t,e){var n=this,r=!!O.u(e)||e,h=O.p(t),$=function(t,e){var i=O.w(n.$u?Date.UTC(n.$y,e,t):new Date(n.$y,e,t),n);return r?i:i.endOf(a)},l=function(t,e){return O.w(n.toDate()[t].apply(n.toDate("s"),(r?[0,0,0,0]:[23,59,59,999]).slice(e)),n)},y=this.$W,M=this.$M,m=this.$D,g="set"+(this.$u?"UTC":"");switch(h){case c:return r?$(1,0):$(31,11);case f:return r?$(1,M):$(0,M+1);case o:var D=this.$locale().weekStart||0,v=(y<D?y+7:y)-D;return $(r?m-v:m+(6-v),M);case a:case d:return l(g+"Hours",0);case u:return l(g+"Minutes",1);case s:return l(g+"Seconds",2);case i:return l(g+"Milliseconds",3);default:return this.clone()}},m.endOf=function(t){return this.startOf(t,!1)},m.$set=function(t,e){var n,o=O.p(t),h="set"+(this.$u?"UTC":""),$=(n={},n[a]=h+"Date",n[d]=h+"Date",n[f]=h+"Month",n[c]=h+"FullYear",n[u]=h+"Hours",n[s]=h+"Minutes",n[i]=h+"Seconds",n[r]=h+"Milliseconds",n)[o],l=o===a?this.$D+(e-this.$W):e;if(o===f||o===c){var y=this.clone().set(d,1);y.$d[$](l),y.init(),this.$d=y.set(d,Math.min(this.$D,y.daysInMonth())).$d;}else $&&this.$d[$](l);return this.init(),this},m.set=function(t,e){return this.clone().$set(t,e)},m.get=function(t){return this[O.p(t)]()},m.add=function(r,h){var d,$=this;r=Number(r);var l=O.p(h),y=function(t){var e=w($);return O.w(e.date(e.date()+Math.round(t*r)),$)};if(l===f)return this.set(f,this.$M+r);if(l===c)return this.set(c,this.$y+r);if(l===a)return y(1);if(l===o)return y(7);var M=(d={},d[s]=e,d[u]=n,d[i]=t,d)[l]||1,m=this.$d.getTime()+r*M;return O.w(m,this)},m.subtract=function(t,e){return this.add(-1*t,e)},m.format=function(t){var e=this;if(!this.isValid())return $;var n=t||"YYYY-MM-DDTHH:mm:ssZ",r=O.z(this),i=this.$locale(),s=this.$H,u=this.$m,a=this.$M,o=i.weekdays,f=i.months,h=function(t,r,i,s){return t&&(t[r]||t(e,n))||i[r].substr(0,s)},c=function(t){return O.s(s%12||12,t,"0")},d=i.meridiem||function(t,e,n){var r=t<12?"AM":"PM";return n?r.toLowerCase():r},l={YY:String(this.$y).slice(-2),YYYY:this.$y,M:a+1,MM:O.s(a+1,2,"0"),MMM:h(i.monthsShort,a,f,3),MMMM:h(f,a),D:this.$D,DD:O.s(this.$D,2,"0"),d:String(this.$W),dd:h(i.weekdaysMin,this.$W,o,2),ddd:h(i.weekdaysShort,this.$W,o,3),dddd:o[this.$W],H:String(s),HH:O.s(s,2,"0"),h:c(1),hh:c(2),a:d(s,u,!0),A:d(s,u,!1),m:String(u),mm:O.s(u,2,"0"),s:String(this.$s),ss:O.s(this.$s,2,"0"),SSS:O.s(this.$ms,3,"0"),Z:r};return n.replace(y,(function(t,e){return e||l[t]||r.replace(":","")}))},m.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},m.diff=function(r,d,$){var l,y=O.p(d),M=w(r),m=(M.utcOffset()-this.utcOffset())*e,g=this-M,D=O.m(this,M);return D=(l={},l[c]=D/12,l[f]=D,l[h]=D/3,l[o]=(g-m)/6048e5,l[a]=(g-m)/864e5,l[u]=g/n,l[s]=g/e,l[i]=g/t,l)[y]||g,$?D:O.a(D)},m.daysInMonth=function(){return this.endOf(f).$D},m.$locale=function(){return v[this.$L]},m.locale=function(t,e){if(!t)return this.$L;var n=this.clone(),r=S(t,e,!0);return r&&(n.$L=r),n},m.clone=function(){return O.w(this.$d,this)},m.toDate=function(){return new Date(this.valueOf())},m.toJSON=function(){return this.isValid()?this.toISOString():null},m.toISOString=function(){return this.$d.toISOString()},m.toString=function(){return this.$d.toUTCString()},M}(),b=_.prototype;return w.prototype=b,[["$ms",r],["$s",i],["$m",s],["$H",u],["$W",a],["$M",f],["$y",c],["$D",d]].forEach((function(t){b[t[1]]=function(e){return this.$g(e,t[0],t[1])};})),w.extend=function(t,e){return t.$i||(t(e,_,w),t.$i=!0),w},w.locale=S,w.isDayjs=p,w.unix=function(t){return w(1e3*t)},w.en=v[D],w.Ls=v,w.p={},w}));
}(dayjs_min));

var dayjs = dayjs_min.exports;

// src/timer/timer.js 使用的是 esm 规范代码 书写和导出

const timerInfo = {
    name: 'timer',
    description: '时间处理工具.',
    version: 'v0.0.1'
};

const now = dayjs();

// 当前日期时间
function now_datetime() {
    return now.format('YYYY-MM-DD HH:mm:ss')
}

// 当前日期
function now_date() {
    return now.format('YYYY-MM-DD')
}

// 当前时间
function now_time() {
    return now.format('HH:mm:ss')
}

exports.call_diy_export_fun = call_diy_export_fun;
exports.cm = call_me;
exports.getJustRollupInfo = getJustRollupInfo;
exports.goodbye = goodbye;
exports.hello = hello;
exports.now_date = now_date;
exports.now_datetime = now_datetime;
exports.now_time = now_time;
exports.timerInfo = timerInfo;
exports.utils_obj = utils_obj;
//# sourceMappingURL=index.js.map
