"use strict";(self.webpackChunkchitchatter=self.webpackChunkchitchatter||[]).push([[7176,3047],{20184:function(e,n,t){var a=t(40595);function s(e){e.register(a),function(e){e.languages.ejs={delimiter:{pattern:/^<%[-_=]?|[-_]?%>$/,alias:"punctuation"},comment:/^#[\s\S]*/,"language-javascript":{pattern:/[\s\S]+/,inside:e.languages.javascript}},e.hooks.add("before-tokenize",(function(n){e.languages["markup-templating"].buildPlaceholders(n,"ejs",/<%(?!%)[\s\S]+?%>/g)})),e.hooks.add("after-tokenize",(function(n){e.languages["markup-templating"].tokenizePlaceholders(n,"ejs")})),e.languages.eta=e.languages.ejs}(e)}e.exports=s,s.displayName="ejs",s.aliases=["eta"]},40595:function(e){function n(e){!function(e){function n(e,n){return"___"+e.toUpperCase()+n+"___"}Object.defineProperties(e.languages["markup-templating"]={},{buildPlaceholders:{value:function(t,a,s,i){if(t.language===a){var o=t.tokenStack=[];t.code=t.code.replace(s,(function(e){if("function"===typeof i&&!i(e))return e;for(var s,r=o.length;-1!==t.code.indexOf(s=n(a,r));)++r;return o[r]=e,s})),t.grammar=e.languages.markup}}},tokenizePlaceholders:{value:function(t,a){if(t.language===a&&t.tokenStack){t.grammar=e.languages[a];var s=0,i=Object.keys(t.tokenStack);!function o(r){for(var u=0;u<r.length&&!(s>=i.length);u++){var c=r[u];if("string"===typeof c||c.content&&"string"===typeof c.content){var l=i[s],g=t.tokenStack[l],p="string"===typeof c?c:c.content,f=n(a,l),k=p.indexOf(f);if(k>-1){++s;var d=p.substring(0,k),h=new e.Token(a,e.tokenize(g,t.grammar),"language-"+a,g),m=p.substring(k+f.length),v=[];d&&v.push.apply(v,o([d])),v.push(h),m&&v.push.apply(v,o([m])),"string"===typeof c?r.splice.apply(r,[u,1].concat(v)):c.content=v}}else c.content&&o(c.content)}return r}(t.tokens)}}}})}(e)}e.exports=n,n.displayName="markupTemplating",n.aliases=[]}}]);
//# sourceMappingURL=react-syntax-highlighter_languages_refractor_ejs.c0b03038.chunk.js.map