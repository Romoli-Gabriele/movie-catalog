(function(e){function t(t){for(var r,n,i=t[0],l=t[1],s=t[2],d=0,u=[];d<i.length;d++)n=i[d],Object.prototype.hasOwnProperty.call(o,n)&&o[n]&&u.push(o[n][0]),o[n]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(e[r]=l[r]);p&&p(t);while(u.length)u.shift()();return c.push.apply(c,s||[]),a()}function a(){for(var e,t=0;t<c.length;t++){for(var a=c[t],r=!0,n=1;n<a.length;n++){var i=a[n];0!==o[i]&&(r=!1)}r&&(c.splice(t--,1),e=l(l.s=a[0]))}return e}var r={},n={app:0},o={app:0},c=[];function i(e){return l.p+"js/"+({about:"about"}[e]||e)+"."+{about:"ddbc58de"}[e]+".js"}function l(t){if(r[t])return r[t].exports;var a=r[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,l),a.l=!0,a.exports}l.e=function(e){var t=[],a={about:1};n[e]?t.push(n[e]):0!==n[e]&&a[e]&&t.push(n[e]=new Promise((function(t,a){for(var r="css/"+({about:"about"}[e]||e)+"."+{about:"13fa9987"}[e]+".css",o=l.p+r,c=document.getElementsByTagName("link"),i=0;i<c.length;i++){var s=c[i],d=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(d===r||d===o))return t()}var u=document.getElementsByTagName("style");for(i=0;i<u.length;i++){s=u[i],d=s.getAttribute("data-href");if(d===r||d===o)return t()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css",p.onload=t,p.onerror=function(t){var r=t&&t.target&&t.target.src||o,c=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");c.code="CSS_CHUNK_LOAD_FAILED",c.request=r,delete n[e],p.parentNode.removeChild(p),a(c)},p.href=o;var b=document.getElementsByTagName("head")[0];b.appendChild(p)})).then((function(){n[e]=0})));var r=o[e];if(0!==r)if(r)t.push(r[2]);else{var c=new Promise((function(t,a){r=o[e]=[t,a]}));t.push(r[2]=c);var s,d=document.createElement("script");d.charset="utf-8",d.timeout=120,l.nc&&d.setAttribute("nonce",l.nc),d.src=i(e);var u=new Error;s=function(t){d.onerror=d.onload=null,clearTimeout(p);var a=o[e];if(0!==a){if(a){var r=t&&("load"===t.type?"missing":t.type),n=t&&t.target&&t.target.src;u.message="Loading chunk "+e+" failed.\n("+r+": "+n+")",u.name="ChunkLoadError",u.type=r,u.request=n,a[1](u)}o[e]=void 0}};var p=setTimeout((function(){s({type:"timeout",target:d})}),12e4);d.onerror=d.onload=s,document.head.appendChild(d)}return Promise.all(t)},l.m=e,l.c=r,l.d=function(e,t,a){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},l.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(l.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)l.d(a,r,function(t){return e[t]}.bind(null,r));return a},l.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="/",l.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],d=s.push.bind(s);s.push=t,s=s.slice();for(var u=0;u<s.length;u++)t(s[u]);var p=d;c.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"0414":function(e,t,a){},"0e02":function(e,t,a){},"13c1":function(e){e.exports=JSON.parse('{"review":"recensioni","detail":"dettagli","show":"mostra","popularity":"popolarità","description":"descrizione","genres":"generi","search":"cerca","search-a-movie":"cerca un film","search-a-TV-series":"cerca una serie tv","number-of-reviews":"numero di recensioni","status":"stato","release-date":"data di pubblicazione","original-language":"lingua originale","watch-now":"guarda ora","show-more":"mostra più","show-less":"mostra meno","TV-series":"serie TV","select-language":"seleziona lingua","page-not-found":"pagina non trovata","the-page-you-are-looking-for-does-not-exist":"La pagina che stai cercando non esiste","return-home":"home"}')},"1a5c":function(e,t,a){"use strict";var r=a("7a23"),n=Object(r["withScopeId"])("data-v-4576b696");Object(r["pushScopeId"])("data-v-4576b696");var o={class:"\r\n      row\r\n      row-cols-xs-1\r\n      row-cols-sm-1\r\n      row-cols-md-1\r\n      row-cols-lg-2\r\n      row-cols-xl-4\r\n      row-cols-xxl-5\r\n      mx-3\r\n    "};Object(r["popScopeId"])();var c=n((function(e,t,a,n,c,i){var l=Object(r["resolveComponent"])("Card"),s=Object(r["resolveComponent"])("FakeCard");return Object(r["openBlock"])(),Object(r["createBlock"])("div",o,[(Object(r["openBlock"])(!0),Object(r["createBlock"])(r["Fragment"],null,Object(r["renderList"])(c.movieList,(function(e){return Object(r["openBlock"])(),Object(r["createBlock"])("div",{key:e.id},[Object(r["createVNode"])(l,{movie:e},null,8,["movie"])])})),128)),Object(r["createVNode"])(s,{onLoadMore:t[1]||(t[1]=function(e){return i.loadMoreContent()})})])})),i=a("2909"),l=(a("99af"),a("b0c0"),a("a4d3"),a("e01a"),{class:"card bg-dark mb-3"}),s={class:"card-body"},d={class:"card-title text-danger home-link fs-3"},u={class:"card-title text-danger home-link fs-3"},p={class:"card-text"},b={class:"list-group list-group-flush bg-dark"},g={class:"list-group-item bg-dark text-light capitalize-first-letter"},v={class:"list-group-item bg-dark text-light capitalize-first-letter"},h={class:"list-group-item bg-dark text-light capitalize-first-letter"},m=Object(r["createVNode"])("br",null,null,-1),f={type:"button",class:"btn btn-outline-info capitalize-first-letter"},j={class:"text-light list-group-item bg-dark"},O={class:"capitalize-first-letter"},y={class:"list-group-item bg-dark text-light"},w={class:"capitalize-first-letter"};function k(e,t,a,n,o,c){var i=Object(r["resolveComponent"])("Reviews"),k=Object(r["resolveComponent"])("router-link");return Object(r["openBlock"])(),Object(r["createBlock"])("div",l,[Object(r["createVNode"])("img",{src:"https://image.tmdb.org/t/p/w500/"+c.image(),onClick:t[1]||(t[1]=function(e){return c.imgSwitch()}),class:"card-img-top",alt:"..."},null,8,["src"]),Object(r["createVNode"])("div",s,[Object(r["createVNode"])("h5",d,Object(r["toDisplayString"])(a.movie.name),1),Object(r["createVNode"])("h5",u,Object(r["toDisplayString"])(a.movie.title),1),Object(r["createVNode"])("p",p,[Object(r["createVNode"])("ul",b,[Object(r["createVNode"])("li",g,[Object(r["createVNode"])("b",null,Object(r["toDisplayString"])(e.$t("review"))+": ",1),Object(r["createVNode"])(i,{value:a.movie.vote_average,full:"fa-star",half:"fa-star-half-alt",empty:"fa-star",color:"text-warning",type:!0},null,8,["value"])]),Object(r["createVNode"])("li",v,[Object(r["createVNode"])("b",null,Object(r["toDisplayString"])(e.$t("popularity"))+": ",1),Object(r["createVNode"])(i,{value:a.movie.popularity,full:"fa-heart",half:"fa-heart-broken",empty:"fa-heart",color:"text-danger",type:!1},null,8,["value"])]),Object(r["createVNode"])("li",h,[Object(r["createVNode"])("b",null,Object(r["toDisplayString"])(e.$t("description"))+": ",1),m,Object(r["withDirectives"])(Object(r["createVNode"])("p",null,Object(r["toDisplayString"])(c.description(a.movie.overview,!0))+" ...",513),[[r["vShow"],0==o.show]]),Object(r["withDirectives"])(Object(r["createVNode"])("p",null,Object(r["toDisplayString"])(a.movie.overview),513),[[r["vShow"],o.show]]),Object(r["withDirectives"])(Object(r["createVNode"])("button",{class:"btn btn-outline-success no-border text-light me-4 capitalize-first-letter bottone",style:{display:"inline"},onClick:t[2]||(t[2]=function(e){return c.toggleShow()})},Object(r["toDisplayString"])(e.$t("show-more")),513),[[r["vShow"],0==o.show]]),Object(r["withDirectives"])(Object(r["createVNode"])("button",{class:"btn btn-outline-success no-border text-light me-4 capitalize-first-letter bottone",style:{display:"inline"},onClick:t[3]||(t[3]=function(e){return c.toggleShow()})},Object(r["toDisplayString"])(e.$t("show-less")),513),[[r["vShow"],o.show]]),Object(r["createVNode"])(k,{to:{name:"Details",params:{id:a.movie.id,type:a.movie.media_type}}},{default:Object(r["withCtx"])((function(){return[Object(r["createVNode"])("button",f,Object(r["toDisplayString"])(e.$t("detail")),1)]})),_:1},8,["to"])]),Object(r["withDirectives"])(Object(r["createVNode"])("li",j,[Object(r["createVNode"])("b",O,Object(r["toDisplayString"])(e.$t("release-date"))+": ",1),Object(r["createTextVNode"])(Object(r["toDisplayString"])(c.convertDate()),1)],512),[[r["vShow"],o.collImg]]),Object(r["withDirectives"])(Object(r["createVNode"])("li",y,[Object(r["createVNode"])("ul",null,[Object(r["createVNode"])("b",w,Object(r["toDisplayString"])(e.$t("genres"))+": ",1),(Object(r["openBlock"])(!0),Object(r["createBlock"])(r["Fragment"],null,Object(r["renderList"])(a.movie.genre_ids,(function(e){return Object(r["openBlock"])(),Object(r["createBlock"])("li",{key:e,class:"bg-dark text-light"},Object(r["toDisplayString"])(c.convertGenres(e)),1)})),128))])],512),[[r["vShow"],o.collImg]])])])])])}a("a15b"),a("ac1f"),a("1276"),a("fb6a");var S=a("2c2a"),V=(a("7db0"),[{id:28,name:"Action"},{id:12,name:"Adventure"},{id:16,name:"Animation"},{id:35,name:"Comedy"},{id:80,name:"Crime"},{id:99,name:"Documentary"},{id:18,name:"Drama"},{id:10751,name:"Family"},{id:14,name:"Fantasy"},{id:36,name:"History"},{id:27,name:"Horror"},{id:10402,name:"Music"},{id:9648,name:"Mystery"},{id:10749,name:"Romance"},{id:878,name:"Science Fiction"},{id:10770,name:"TV Movie"},{id:53,name:"Thriller"},{id:10752,name:"War"},{id:37,name:"Western"}]),N=[{id:10759,name:"Action & Adventure"},{id:16,name:"Animation"},{id:35,name:"Comedy"},{id:80,name:"Crime"},{id:99,name:"Documentary"},{id:18,name:"Drama"},{id:10751,name:"Family"},{id:10762,name:"Kids"},{id:9648,name:"Mystery"},{id:10763,name:"News"},{id:10764,name:"Reality"},{id:10765,name:"Sci-Fi & Fantasy"},{id:10766,name:"Soap"},{id:10767,name:"Talk"},{id:10768,name:"War & Politics"},{id:37,name:"Western"}],x={getGenre:function(e,t){return("movie"==e?V:N).find((function(e){return e.id===t}))},_movieGenres:V},C={name:"Card",components:{Reviews:S["a"]},props:{movie:{type:Object,required:!0}},data:function(){return{show:!1,collImg:!1}},methods:{convertDate:function(){var e;return e="movie"==this.movie.media_type?this.movie.release_date:this.movie.first_air_date,"it"==localStorage.getItem("language")&&(e=e.split("-").reverse().join("/")),e},imgSwitch:function(){this.collImg?this.collImg=!1:this.collImg=!0},image:function(){return this.collImg?this.movie.backdrop_path:this.movie.poster_path},description:function(e,t){if(t)var a=e.slice(0,70);return a},toggleShow:function(){this.show=!this.show},convertGenres:function(e){var t;return null===(t=x.getGenre(this.movie.media_type,e))||void 0===t?void 0:t.name}}};a("6da2");C.render=k;var B=C,D=(a("d3b7"),a("25f0"),a("3ca3"),a("ddb0"),a("2b3d"),"https://api.themoviedb.org/3/"),T="6f9286d54de4891ea7a5c91779e09786",z=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return t.api_key=T,fetch(D+e+"?"+new URLSearchParams(t).toString()).then((function(e){return e.json()}))},_={getMovieFetch:function(e,t){var a=localStorage.getItem("language");return z("/trending/".concat(e,"/week"),{page:t,language:a})}},I=Object(r["withScopeId"])("data-v-6d9a7d54");Object(r["pushScopeId"])("data-v-6d9a7d54");var M={class:"card mx-auto my-5 bg-dark",ref:"loadMoreCards"},F=Object(r["createStaticVNode"])('<div class="card-body" data-v-6d9a7d54><div class="image-placeholder placeholder bg-secondary w-100" data-v-6d9a7d54></div><div class="title-placeholder placeholder w-75 bg-danger" data-v-6d9a7d54></div><div class="\r\n            review-popularity-description-placeholder\r\n            placeholder\r\n            w-50\r\n            bg-danger\r\n          " data-v-6d9a7d54></div><div class="emoji-placeholder placeholder w-75 bg-danger" data-v-6d9a7d54></div><div class="\r\n            review-popularity-description-placeholder\r\n            placeholder\r\n            w-50\r\n            bg-danger\r\n          " data-v-6d9a7d54></div><div class="emoji-placeholder placeholder w-75 bg-danger" data-v-6d9a7d54></div><div class="\r\n            review-popularity-description-placeholder\r\n            placeholder\r\n            w-50\r\n            bg-danger\r\n          " data-v-6d9a7d54></div><div class="text-placeholder placeholder w-100 bg-danger" data-v-6d9a7d54></div><div class="text-placeholder placeholder w-100 bg-danger" data-v-6d9a7d54></div><div class="text-placeholder placeholder w-100 bg-danger" data-v-6d9a7d54></div><span class="button-placeholder placeholder ms-2 me-3 bg-danger" data-v-6d9a7d54></span><span class="button-placeholder placeholder ms-2 bg-danger" data-v-6d9a7d54></span></div>',1),L=Object(r["createStaticVNode"])('<div class="card mx-auto my-5 bg-dark" data-v-6d9a7d54><div class="card-body" data-v-6d9a7d54><div class="image-placeholder placeholder bg-secondary w-100" data-v-6d9a7d54></div><div class="title-placeholder placeholder w-75 bg-danger" data-v-6d9a7d54></div><div class="\r\n            review-popularity-description-placeholder\r\n            placeholder\r\n            w-50\r\n            bg-danger\r\n          " data-v-6d9a7d54></div><div class="emoji-placeholder placeholder w-75 bg-danger" data-v-6d9a7d54></div><div class="\r\n            review-popularity-description-placeholder\r\n            placeholder\r\n            w-50\r\n            bg-danger\r\n          " data-v-6d9a7d54></div><div class="emoji-placeholder placeholder w-75 bg-danger" data-v-6d9a7d54></div><div class="\r\n            review-popularity-description-placeholder\r\n            placeholder\r\n            w-50\r\n            bg-danger\r\n          " data-v-6d9a7d54></div><div class="text-placeholder placeholder w-100 bg-danger" data-v-6d9a7d54></div><div class="text-placeholder placeholder w-100 bg-danger" data-v-6d9a7d54></div><div class="text-placeholder placeholder w-100 bg-danger" data-v-6d9a7d54></div><span class="button-placeholder placeholder ms-2 me-3 bg-danger" data-v-6d9a7d54></span><span class="button-placeholder placeholder ms-2 bg-danger" data-v-6d9a7d54></span></div></div>',1);Object(r["popScopeId"])();var A=I((function(e,t,a,n,o,c){return Object(r["openBlock"])(),Object(r["createBlock"])(r["Fragment"],null,[Object(r["createVNode"])("div",M,[F],512),(Object(r["openBlock"])(),Object(r["createBlock"])(r["Fragment"],null,Object(r["renderList"])(3,(function(e){return Object(r["createVNode"])("div",{key:e},[L])})),64))],64)})),$=a("3835"),q=a("5550"),P={emits:["loadMore"],setup:function(e,t){var a=t.emit,n=Object(r["ref"])(null),o=Object(r["ref"])(!1),c=Object(q["a"])(n,(function(e){var t=Object($["a"])(e,1),r=t[0].isIntersecting;o.value=r,r&&a("loadMore")})),i=c.stop;return{stop:i,loadMoreCards:n,targetIsVisible:o}},components:{},data:function(){return{}}};a("c22a");P.render=A,P.__scopeId="data-v-6d9a7d54";var E=P,H={name:"TrendingCards",components:{Card:B,FakeCard:E},props:{tipo:{type:String,required:!0}},data:function(){return{page:0,movieList:[]}},methods:{loadMoreContent:function(){var e=this;this.page++,_.getMovieFetch(this.tipo,this.page,this.language).then((function(t){e.movieList=[].concat(Object(i["a"])(e.movieList),Object(i["a"])(t.results))}))}},mounted:function(){var e=this;this.$nextTick((function(){return e.fakeCardVisible=!0}))}};a("cb10");H.render=c,H.__scopeId="data-v-4576b696";t["a"]=H},"2be1":function(e){e.exports=JSON.parse('{"review":"rezension","detail":"detail","show":"anzeigen","popularity":"popularität","description":"beschreibung","genres":"genres","search":"suche","search-a-movie":"suche einen Film","search-a-TV-series":"suche eine TV-Serie","number-of-reviews":"anzahl der Bewertungen","status":"status","release-date":"veröffentlichungsdatum","original-language":"ursprache","watch-now":"schau jetzt","show-more":"zeig mehr","show-less":"zeige weniger","TV-series":"TV Serie","select-language":"sprache auswählen","page-not-found":"seite nicht gefunden","the-page-you-are-looking-for-does-not-exist":"die Seite die Sie suchen existiert nicht","return-home":"home"}')},"2c2a":function(e,t,a){"use strict";var r=a("7a23");function n(e,t,a,n,o,c){return Object(r["openBlock"])(),Object(r["createBlock"])("div",null,[(Object(r["openBlock"])(!0),Object(r["createBlock"])(r["Fragment"],null,Object(r["renderList"])(c.calcF(a.value),(function(e){return Object(r["openBlock"])(),Object(r["createBlock"])("i",{key:e,class:["fas",a.full+" "+a.color]},null,2)})),128)),Object(r["withDirectives"])(Object(r["createVNode"])("i",{class:["fas",a.half+" "+a.color]},null,2),[[r["vShow"],o.mezzo]]),(Object(r["openBlock"])(!0),Object(r["createBlock"])(r["Fragment"],null,Object(r["renderList"])(c.calcW(a.value),(function(e){return Object(r["openBlock"])(),Object(r["createBlock"])("i",{key:e,class:["far",a.empty+" "+a.color]},null,2)})),128))])}a("a9e3");var o={name:"Reviews",props:{type:{type:Boolean,required:!0},full:{type:String,required:!0},half:{type:String,required:!0},empty:{type:String,required:!0},value:{type:Number,required:!0},color:{type:String,required:!0}},data:function(){return{mezzo:!1}},methods:{calcF:function(e){return this.type?(e/=2,(e-Math.round(e)>=.35||e-Math.round(e)<=-.35)&&(this.mezzo=!0,e--),Math.round(e)):(e/=1e3,e-Math.round(e)>=.4||e-Math.round(e)<=-.4?e<5&&(this.mezzo=!0):this.mezzo=!1,Math.round(e)>5?5:Math.round(e)>0?Math.round(e):0)},calcW:function(e){var t=this.calcF(e);return t=5-t,this.mezzo&&t>0&&t--,t}}};o.render=n;t["a"]=o},"3a7e":function(e,t,a){},"4c66":function(e,t,a){},"544b":function(e,t,a){"use strict";a("9497")},"56d7":function(e,t,a){"use strict";a.r(t);a("e260"),a("e6cf"),a("cca6"),a("a79d");var r=a("7a23");function n(e,t,a,n,o,c){var i=Object(r["resolveComponent"])("NavBar"),l=Object(r["resolveComponent"])("router-view");return Object(r["openBlock"])(),Object(r["createBlock"])(r["Fragment"],null,[Object(r["createVNode"])(i),Object(r["createVNode"])(l)],64)}var o={class:"navbar fixed-top navbar-expand-md navbar-dark bg-dark"},c={class:"container-fluid"},i=Object(r["createVNode"])("a",{class:"navbar-brand",href:"#"},[Object(r["createVNode"])("i",{class:"fas fa-film logo"})],-1),l=Object(r["createTextVNode"])("Movie Catalog"),s=Object(r["createVNode"])("button",{class:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},[Object(r["createVNode"])("span",{class:"navbar-toggler-icon"})],-1),d={class:"collapse navbar-collapse",id:"navbarSupportedContent"},u={class:"navbar-nav me-auto"},p={class:"nav-item"},b=Object(r["createTextVNode"])("Film"),g={class:"nav-item"},v={class:"me-4"},h=Object(r["createVNode"])("option",{value:"en"},"English",-1),m=Object(r["createVNode"])("option",{value:"it"},"Italiano",-1),f=Object(r["createVNode"])("option",{value:"de"},"Deutsche",-1),j={class:"d-flex"},O={class:"btn btn-outline-success submit-button",type:"submit"},y=Object(r["createVNode"])("br",null,null,-1),w=Object(r["createVNode"])("br",null,null,-1),k=Object(r["createVNode"])("br",null,null,-1),S=Object(r["createVNode"])("br",null,null,-1),V=Object(r["createVNode"])("br",null,null,-1),N=Object(r["createVNode"])("br",null,null,-1);function x(e,t,a,n,x,C){var B=Object(r["resolveComponent"])("router-link");return Object(r["openBlock"])(),Object(r["createBlock"])("div",null,[Object(r["createVNode"])("nav",o,[Object(r["createVNode"])("div",c,[i,Object(r["createVNode"])(B,{class:"navbar-brand title fs-1 text-danger",to:{name:"Home"}},{default:Object(r["withCtx"])((function(){return[l]})),_:1}),s,Object(r["createVNode"])("div",d,[Object(r["createVNode"])("ul",u,[Object(r["createVNode"])("li",p,[Object(r["createVNode"])(B,{onClick:t[1]||(t[1]=function(e){return C.SwitchTo(!0)}),to:{name:"Home"},class:"home-link nav-link text-light fs-2"},{default:Object(r["withCtx"])((function(){return[b]})),_:1})]),Object(r["createVNode"])("li",g,[Object(r["createVNode"])(B,{onClick:t[2]||(t[2]=function(e){return C.SwitchTo(!1)}),class:"nav-link fs-2 text-light home-link first-letter-capitalize",to:{name:"Series"}},{default:Object(r["withCtx"])((function(){return[Object(r["createTextVNode"])(Object(r["toDisplayString"])(e.$t("TV-series")),1)]})),_:1})])]),Object(r["createVNode"])("div",v,[Object(r["withDirectives"])(Object(r["createVNode"])("select",{class:"btn btn-secondary","onUpdate:modelValue":t[3]||(t[3]=function(e){return x.language=e}),onChange:t[4]||(t[4]=function(e){return C.handleChange(e)}),style:{"padding-right":"0px"}},[h,m,f],544),[[r["vModelSelect"],x.language]])]),Object(r["createVNode"])("form",j,[!0===x.mOs?(Object(r["openBlock"])(),Object(r["createBlock"])("input",{key:0,class:"form-control me-2 bg-dark text-light first-letter-capitalize",type:"search",placeholder:e.$t("search-a-movie"),"aria-label":"Search"},null,8,["placeholder"])):(Object(r["openBlock"])(),Object(r["createBlock"])("input",{key:1,class:"form-control me-2 bg-dark text-light first-letter-capitalize",type:"search",placeholder:e.$t("search-a-TV-series"),"aria-label":"Search"},null,8,["placeholder"])),Object(r["createVNode"])("button",O,Object(r["toDisplayString"])(e.$t("search")),1)])])])]),y,w,k,S,V,N])}var C={name:"NavBar",components:{},data:function(){var e=localStorage.getItem("language")||"en";return{mOs:!0,language:e}},methods:{SwitchTo:function(e){this.mOs=e},handleChange:function(e){localStorage.setItem("language",e.target.value),window.location.reload()}}};a("af6a");C.render=x;var B=C,D={name:"App",components:{NavBar:B}};a("c5d9");D.render=n;var T=D,z=(a("d3b7"),a("3ca3"),a("ddb0"),a("a9e3"),a("6c02")),_=Object(r["withScopeId"])("data-v-d7ef24b8"),I=_((function(e,t,a,n,o,c){var i=Object(r["resolveComponent"])("TrendingCards");return Object(r["openBlock"])(),Object(r["createBlock"])(i,{tipo:o.type},null,8,["tipo"])})),M=a("1a5c"),F={name:"Home",components:{TrendingCards:M["a"]},data:function(){return{type:"movie"}}};a("678b");F.render=I,F.__scopeId="data-v-d7ef24b8";var L=F,A=Object(r["withScopeId"])("data-v-8f0c962e");Object(r["pushScopeId"])("data-v-8f0c962e");var $=Object(r["createVNode"])("h1",{class:"titolo"},"404",-1),q={class:"sottotitolo",style:{"text-transfrom":"capitalize"}},P={class:"testo first-letter-capitalize"},E={type:"button",class:"btn btn-outline-danger first-letter-capitalize"};Object(r["popScopeId"])();var H=A((function(e,t,a,n,o,c){var i=Object(r["resolveComponent"])("router-link");return Object(r["openBlock"])(),Object(r["createBlock"])(r["Fragment"],null,[$,Object(r["createVNode"])("h3",q,Object(r["toDisplayString"])(e.$t("page-not-found")),1),Object(r["createVNode"])("p",P,Object(r["toDisplayString"])(e.$t("the-page-you-are-looking-for-does-not-exist"))+".",1),Object(r["createVNode"])(i,{to:{name:"Home"}},{default:A((function(){return[Object(r["createVNode"])("button",E,Object(r["toDisplayString"])(e.$t("return-home")),1)]})),_:1})],64)})),R={methods:{image:function(){return this.movie.backdrop_path}}};a("544b"),a("8498");R.render=H,R.__scopeId="data-v-8f0c962e";var W=R,G=[{path:"/:catchAll(.*)*",name:"pageNotFound",component:W},{path:"/",name:"Home",component:L},{path:"/TVSeries",name:"Series",component:function(){return a.e("about").then(a.bind(null,"f431"))}},{path:"/details/:id/:type",name:"Details",component:function(){return a.e("about").then(a.bind(null,"9f52"))},props:{id:{type:Number,required:!0},type:{type:String,required:!0},language:{type:String,required:!0}}}],J=Object(z["a"])({history:Object(z["b"])("/"),routes:G,linkActiveClass:"active",linkExactActiveClass:"exact-active"}),U=J,K=a("13c1"),Q=a("2be1"),X=a("6a6a"),Y=a("47e2"),Z=Object(Y["a"])({locale:localStorage.getItem("language")||"en",messages:{it:K,de:Q,en:X}}),ee=a("bc3a"),te=a.n(ee),ae=localStorage.getItem("language")||"en";te.a.defaults.baseURL="http://localhost:5000",te.a.defaults.headers["Accept-Language"]=ae,Object(r["createApp"])(T).use(U).use(Z).mount("#app")},"678b":function(e,t,a){"use strict";a("0e02")},"6a6a":function(e){e.exports=JSON.parse('{"review":"review","show":"show","detail":"detail","popularity":"popularity","description":"description","genres":"genres","search":"search","search-a-movie":"search a movie","search-a-TV-series":"search a TV series","number-of-reviews":"number of reviews","status":"status","release-date":"release date","original-language":"original language","watch-now":"watch now","show-more":"show more","show-less":"show less","TV-series":"TV Series","select-language":"select language","page-not-found":"page not found","the-page-you-are-looking-for-does-not-exist":"The page you are looking for does not exist","return-home":"return home"}')},"6da2":function(e,t,a){"use strict";a("3a7e")},8498:function(e,t,a){"use strict";a("4c66")},9497:function(e,t,a){},"9bb2":function(e,t,a){},af6a:function(e,t,a){"use strict";a("f679")},b0a2:function(e,t,a){},c22a:function(e,t,a){"use strict";a("9bb2")},c5d9:function(e,t,a){"use strict";a("b0a2")},cb10:function(e,t,a){"use strict";a("0414")},f679:function(e,t,a){}});
//# sourceMappingURL=app.ef697725.js.map