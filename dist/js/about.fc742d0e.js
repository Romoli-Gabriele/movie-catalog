(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["about"],{"331a":function(e,t,a){"use strict";a("eb3c")},"4b85":function(e,t,a){"use strict";a("f09f")},"566f":function(e,t,a){"use strict";a("fcc2")},"9f52":function(e,t,a){"use strict";a.r(t);a("b0c0");var c=a("7a23"),o=Object(c["withScopeId"])("data-v-59983bc5");Object(c["pushScopeId"])("data-v-59983bc5");var i={class:"mx-3 card bg-dark mb-3 py-3"},r={class:"row"},l={class:"col-xs-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6"},n={class:"col-xs-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6"},s={class:"card-body"},b={class:"card-title text-danger home-link fs-2"},d={class:"card-title text-danger home-link fs-2"},p={class:"card-title text-light home-link fs-4"},u={class:"text-light first-letter-capitalize"},j={class:"text-light first-letter-capitalize"},m={class:"text-light first-letter-capitalize"},O={class:"text-light first-letter-capitalize"},g=Object(c["createVNode"])("br",null,null,-1),v={class:"text-light first-letter-capitalize"},h={class:"text-light first-letter-capitalize"},f={class:"text-light first-letter-capitalize"},y=Object(c["createVNode"])("br",null,null,-1),N=Object(c["createVNode"])("br",null,null,-1),V={type:"button",class:"btn btn-outline-warning text-light"};Object(c["popScopeId"])();var S=o((function(e,t,a,o,S,x){var k=Object(c["resolveComponent"])("Reviews"),w=Object(c["resolveComponent"])("Carousel");return Object(c["openBlock"])(),Object(c["createBlock"])("div",null,[Object(c["createVNode"])("div",i,[Object(c["createVNode"])("div",r,[Object(c["createVNode"])("div",l,[Object(c["createVNode"])("img",{class:"mx-auto d-block w-100 px-3",src:"https://image.tmdb.org/t/p/original/"+S.movie.poster_path},null,8,["src"])]),Object(c["createVNode"])("div",n,[Object(c["createVNode"])("div",s,[Object(c["createVNode"])("h5",b,Object(c["toDisplayString"])(S.movie.name),1),Object(c["createVNode"])("h5",d,Object(c["toDisplayString"])(S.movie.title),1),Object(c["createVNode"])("p",p,Object(c["toDisplayString"])(S.movie.tagline),1),(Object(c["openBlock"])(!0),Object(c["createBlock"])(c["Fragment"],null,Object(c["renderList"])(S.movie.genres,(function(e){return Object(c["openBlock"])(),Object(c["createBlock"])("span",{class:"badge bg-info mx-1 my-2 text-dark",key:e.id},Object(c["toDisplayString"])(e.name),1)})),128)),Object(c["createVNode"])("p",u,[Object(c["createVNode"])("b",null,Object(c["toDisplayString"])(e.$t("review"))+":",1),Object(c["createVNode"])(k,{value:S.movie.vote_average,full:"fa-star",half:"fa-star-half-alt",empty:"fa-star",color:"text-warning",type:!0},null,8,["value"]),Object(c["createTextVNode"])(" ("+Object(c["toDisplayString"])(Math.round(S.movie.vote_average/2*10)/10)+") ",1)]),Object(c["createVNode"])("p",j,[Object(c["createVNode"])("b",null,Object(c["toDisplayString"])(e.$t("number-of-reviews"))+":",1),Object(c["createTextVNode"])(" "+Object(c["toDisplayString"])(S.movie.vote_count),1)]),Object(c["createVNode"])("p",m,[Object(c["createVNode"])("b",null,Object(c["toDisplayString"])(e.$t("popularity"))+": ",1),Object(c["createVNode"])(k,{value:S.movie.popularity,full:"fa-heart",half:"fa-heart-broken",empty:"fa-heart",color:"text-danger",type:!1},null,8,["value"]),Object(c["createTextVNode"])(" ("+Object(c["toDisplayString"])(Math.round(S.movie.popularity/1e3*10)/10)+") ",1)]),Object(c["createVNode"])("p",O,[Object(c["createVNode"])("b",null,Object(c["toDisplayString"])(e.$t("description"))+": ",1),g,Object(c["createTextVNode"])(" "+Object(c["toDisplayString"])(S.movie.overview),1)]),Object(c["createVNode"])("p",v,[Object(c["createVNode"])("b",null,Object(c["toDisplayString"])(e.$t("status"))+":",1),Object(c["createTextVNode"])(" "+Object(c["toDisplayString"])(S.movie.status),1)]),Object(c["createVNode"])("p",h,[Object(c["createVNode"])("b",null,Object(c["toDisplayString"])(e.$t("release-date"))+": ",1),Object(c["createTextVNode"])(" "+Object(c["toDisplayString"])(x.convertDate()),1)]),Object(c["createVNode"])("p",f,[Object(c["createVNode"])("b",null,Object(c["toDisplayString"])(e.$t("original-language"))+": ",1),Object(c["createTextVNode"])(" "+Object(c["toDisplayString"])(x.language(S.movie.original_language)),1)]),y,N,Object(c["createVNode"])("a",{href:S.movie.homepage,target:"_blank"},[Object(c["createVNode"])("button",V,Object(c["toDisplayString"])(e.$t("watch-now")),1)],8,["href"])])])])]),Object(c["createVNode"])(w,{similarList:S.similarList,type:e.type},null,8,["similarList","type"])])})),x=(a("a15b"),a("ac1f"),a("1276"),a("d3b7"),a("2c2a")),k={id:"carouselExampleIndicators",class:"carousel slide","data-bs-ride":"carousel"},w=Object(c["createStaticVNode"])('<div class="carousel-indicators"><button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button><button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button><button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button><button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button><button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="4" aria-label="Slide 5"></button></div>',1),D={class:"carousel-inner container"},_={class:"row"},I={class:"carousel-item active","data-bs-interval":"4000"},B={class:"row"};function $(e,t,a,o,i,r){var l=Object(c["resolveComponent"])("CarouselCard");return Object(c["openBlock"])(),Object(c["createBlock"])("div",k,[w,Object(c["createVNode"])("div",D,[(Object(c["openBlock"])(!0),Object(c["createBlock"])(c["Fragment"],null,Object(c["renderList"])(Math.round(a.similarList.length/3),(function(e){return Object(c["openBlock"])(),Object(c["createBlock"])("div",{key:e,class:"carousel-item","data-bs-interval":"4000"},[Object(c["createVNode"])("div",_,[(Object(c["openBlock"])(),Object(c["createBlock"])(c["Fragment"],null,Object(c["renderList"])(3,(function(t){return Object(c["createVNode"])("div",{key:t,class:"col-4"},[Object(c["createVNode"])(l,{movie:a.similarList[t+2*e],type:a.type},null,8,["movie","type"])])})),64))])])})),128)),Object(c["createVNode"])("div",I,[Object(c["createVNode"])("div",B,[(Object(c["openBlock"])(),Object(c["createBlock"])(c["Fragment"],null,Object(c["renderList"])(3,(function(e){return Object(c["createVNode"])("div",{key:e,class:"col-4"},[Object(c["createVNode"])(l,{movie:a.similarList[a.similarList.length-e],type:a.type},null,8,["movie","type"])])})),64))])])])])}a("a4d3"),a("e01a");var C=Object(c["withScopeId"])("data-v-c4a64a94");Object(c["pushScopeId"])("data-v-c4a64a94");var L={class:"card bg-dark mb-5"},z={class:"card-body"},E={class:"card-title text-danger home-link fs-3"},T={class:"card-title text-danger home-link fs-3"},F={class:"card-text text-light home-link fs-4"},J={class:"card-text text-light container first-letter-capitalize"},M=Object(c["createVNode"])("br",null,null,-1);Object(c["popScopeId"])();var P=C((function(e,t,a,o,i,r){var l=Object(c["resolveComponent"])("router-link");return Object(c["openBlock"])(),Object(c["createBlock"])("div",L,[Object(c["createVNode"])("img",{src:"https://image.tmdb.org/t/p/w300/"+a.movie.backdrop_path,alt:"movie banner"},null,8,["src"]),Object(c["createVNode"])("div",z,[Object(c["createVNode"])("h5",E,Object(c["toDisplayString"])(a.movie.title),1),Object(c["createVNode"])("h5",T,Object(c["toDisplayString"])(a.movie.name),1),Object(c["createVNode"])("p",F,Object(c["toDisplayString"])(a.movie.tagline),1),Object(c["createVNode"])("p",J,[Object(c["createVNode"])("b",null,Object(c["toDisplayString"])(e.$t("description"))+": ",1),M]),Object(c["withDirectives"])(Object(c["createVNode"])("p",{class:"text-light"},Object(c["toDisplayString"])(r.description(a.movie.overview))+" ... ",513),[[c["vShow"],i.collapse]]),Object(c["withDirectives"])(Object(c["createVNode"])("p",{class:"text-light"},Object(c["toDisplayString"])(a.movie.overview),513),[[c["vShow"],0==i.collapse]]),Object(c["withDirectives"])(Object(c["createVNode"])("button",{class:"btn btn-outline-success no-border text-light me-4 first-letter-capitalize",style:{display:"inline"},onClick:t[1]||(t[1]=function(){return r.show&&r.show.apply(r,arguments)})},Object(c["toDisplayString"])(e.$t("show-more")),513),[[c["vShow"],i.collapse]]),Object(c["withDirectives"])(Object(c["createVNode"])("button",{class:"btn btn-outline-success no-border text-light me-4 first-letter-capitalize",style:{display:"inline"},onClick:t[2]||(t[2]=function(){return r.show&&r.show.apply(r,arguments)})},Object(c["toDisplayString"])(e.$t("show-less")),513),[[c["vShow"],0==i.collapse]]),Object(c["createVNode"])(l,{to:{name:"Details",params:{id:a.movie.id,type:e.$route.params.type}}},{default:C((function(){return[Object(c["createVNode"])("button",{type:"button",onClick:t[3]||(t[3]=function(){return r.scrollUP&&r.scrollUP.apply(r,arguments)}),class:"btn btn-outline-info first-letter-capitalize"},Object(c["toDisplayString"])(e.$t("detail")),1)]})),_:1},8,["to"])])])})),U=(a("fb6a"),{name:"CarouselCard",props:{type:{type:String,default:""},movie:{type:Object,default:function(){return{}}}},data:function(){return{collapse:!0}},methods:{description:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=e.slice(0,70);return t},show:function(){this.collapse?this.collapse=!1:this.collapse=!0},scrollUP:function(){window.scrollTo({top:0,behavior:"smooth"})}}});a("331a");U.render=P,U.__scopeId="data-v-c4a64a94";var A=U,R={name:"Carousel",components:{CarouselCard:A},props:{similarList:{type:Array,default:new Array},type:{type:String,required:!0}},data:function(){return{primo:!0}}};R.render=$;var q=R,G={name:"Details",components:{Reviews:x["a"],Carousel:q},data:function(){return{similarList:[],movie:{},movieList:[],mezza:!1,mezzo:!1,languageList:[{iso_639_1:"de",english_name:"German",name:"Deutsch"},{iso_639_1:"it",english_name:"Italian",name:"Italiano"},{iso_639_1:"ja",english_name:"Japanese",name:"日本語"},{iso_639_1:"fr",english_name:"French",name:"Français"},{iso_639_1:"en",english_name:"English",name:"English"},{iso_639_1:"es",english_name:"Spanish",name:"Español"}]}},methods:{language:function(e){for(var t=0;t<6;t++)if(this.languageList[t].iso_639_1==e)return this.languageList[t].english_name;return e},convertDate:function(){var e;return e="movie"==this.$route.params.type?this.movie.release_date:this.movie.first_air_date,e?("it"==localStorage.getItem("language")&&(e=e.split("-").reverse().join("/")),e):""},callDati:function(){var e=this;fetch("https://api.themoviedb.org/3/"+this.$route.params.type+"/"+this.$route.params.id+"/similar?api_key=6f9286d54de4891ea7a5c91779e09786&language="+localStorage.getItem("language")+"&page=1").then((function(e){return e.json()})).then((function(t){e.similarList=t.results})),fetch("https://api.themoviedb.org/3/"+this.$route.params.type+"/"+this.$route.params.id+"?api_key=6f9286d54de4891ea7a5c91779e09786&language="+localStorage.getItem("language")).then((function(e){return e.json()})).then((function(t){e.movie=t}))}},mounted:function(){this.callDati()},watch:{"$route.params.search":{handler:function(e){console.log(e),this.callDati()},deep:!0,immediate:!0}}};a("566f");G.render=S,G.__scopeId="data-v-59983bc5";t["default"]=G},eb3c:function(e,t,a){},f09f:function(e,t,a){},f431:function(e,t,a){"use strict";a.r(t);var c=a("7a23"),o=Object(c["withScopeId"])("data-v-36f1200a");Object(c["pushScopeId"])("data-v-36f1200a");var i=Object(c["createVNode"])("br",null,null,-1);Object(c["popScopeId"])();var r=o((function(e,t,a,o,r,l){var n=Object(c["resolveComponent"])("trending-cards");return Object(c["openBlock"])(),Object(c["createBlock"])(c["Fragment"],null,[i,Object(c["createVNode"])(n,{tipo:r.type},null,8,["tipo"])],64)})),l=a("1a5c"),n={name:"Series",components:{TrendingCards:l["a"]},data:function(){return{type:"tv"}}};a("4b85");n.render=r,n.__scopeId="data-v-36f1200a";t["default"]=n},fcc2:function(e,t,a){}}]);
//# sourceMappingURL=about.fc742d0e.js.map