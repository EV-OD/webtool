!function(t){"object"==typeof exports&&"object"==typeof module?t(require("../../lib/codemirror")):"function"==typeof define&&define.amd?define(["../../lib/codemirror"],t):t(CodeMirror)}(function(I){"use strict";var T=I.Pos;function j(t,e,r){return r?0<=t.indexOf(e):0==t.lastIndexOf(e,0)}I.registerHelper("hint","xml",function(t,e){var r=e&&e.schemaInfo,n=e&&e.quoteChar||'"',s=e&&e.matchInMiddle;if(r){var i=t.getCursor(),o=t.getTokenAt(i);if(o.end>i.ch&&(o.end=i.ch,o.string=o.string.slice(0,i.ch-o.start)),(u=I.innerMode(t.getMode(),o.state)).mode.xmlCurrentTag){var a,l,g=[],c=!1,f=/\btag\b/.test(o.type)&&!/>$/.test(o.string),h=f&&/^\w/.test(o.string);h?(M=t.getLine(i.line).slice(Math.max(0,o.start-2),o.start),(l=/<\/$/.test(M)?"close":/<$/.test(M)?"open":null)&&(a=o.start-("close"==l?2:1))):f&&"<"==o.string?l="open":f&&"</"==o.string&&(l="close");e=u.mode.xmlCurrentTag(u.state);if(!f&&!e||l){h&&(A=o.string);var u,c=l,d=u.mode.xmlCurrentContext?u.mode.xmlCurrentContext(u.state):[],d=(u=d.length&&d[d.length-1])&&r[u],p=u?d&&d.children:r["!top"];if(p&&"close"!=l)for(var m=0;m<p.length;++m)A&&!j(p[m],A,s)||g.push("<"+p[m]);else if("close"!=l)for(var y in r)!r.hasOwnProperty(y)||"!top"==y||"!attrs"==y||A&&!j(y,A,s)||g.push("<"+y);u&&(!A||"close"==l&&j(u,A,s))&&g.push("</"+u+">")}else{var v,x=(d=e&&r[e.name])&&d.attrs,C=r["!attrs"];if(!x&&!C)return;if(x){if(C){var b,O={};for(b in C)C.hasOwnProperty(b)&&(O[b]=C[b]);for(b in x)x.hasOwnProperty(b)&&(O[b]=x[b]);x=O}}else x=C;if("string"==o.type||"="==o.string){var w,A,M,d=(M=t.getRange(T(i.line,Math.max(0,i.ch-60)),T(i.line,"string"==o.type?o.start:o.end))).match(/([^\s\u00a0=<>\"\']+)=$/);if(!d||!x.hasOwnProperty(d[1])||!(w=x[d[1]]))return;"function"==typeof w&&(w=w.call(this,t)),"string"==o.type&&(A=o.string,/['"]/.test(o.string.charAt(M=0))&&(n=o.string.charAt(0),A=o.string.slice(1),M++),d=o.string.length,/['"]/.test(o.string.charAt(d-1))&&(n=o.string.charAt(d-1),A=o.string.substr(M,d-2)),!M||(P=t.getLine(i.line)).length>o.end&&P.charAt(o.end)==n&&o.end++,c=!0);var P=function(t){if(t)for(var e=0;e<t.length;++e)A&&!j(t[e],A,s)||g.push(n+t[e]+n);return $()};return w&&w.then?w.then(P):P(w)}for(v in"attribute"==o.type&&(A=o.string,c=!0),x)!x.hasOwnProperty(v)||A&&!j(v,A,s)||g.push(v)}return $()}}function $(){return{list:g,from:c?T(i.line,null==a?o.start:a):i,to:c?T(i.line,o.end):i}}})});