import{_ as m,b as v,c as g,w as i,d as s,u as k,e as c,r as f,F as L,f as l,g as b,P as B,h as x,o as n,t as y}from"./index-DeSWY6Gk.js";import{I as r}from"./IconBack-CQBNJoS5.js";const C="/list-banner.png",I={class:"title"},P={class:"content"},D={class:"banner"},S=["src"],E={class:"pane"},w={class:"pane-content"},F={class:"list"},G={class:"item-icon"},N=["src"],V={class:"text"},$={__name:"ListPage",props:{ListData:{type:Array,default:()=>[]}},setup(d){const o=x(),_=()=>{o.push("/")},u=()=>{history.back()},p=e=>{o.push({path:e.detailPageUrl})};return v(()=>{}),(e,t)=>(n(),g(B,null,{header:i(()=>[l(r,{onClick:u}),s("div",I,[b(e.$slots,"title",{},void 0,!0)])]),default:i(()=>[s("div",P,[s("div",D,[s("img",{src:k(C)},null,8,S),s("div",{class:"des"},[t[0]||(t[0]=s("p",null," 西安高新零碳服务中心，致力于帮助企业达成碳达峰、 碳中和及 ESG 目标。提供包括绿电/绿证交易、碳核查、ESG 评级等在内的 全方位零碳解决方案，并与国际权威机构合作，定制低碳管理体系，助力企 业绿色转型。 ",-1)),s("div",{class:"more",onClick:_},"更多>")])]),s("div",E,[t[1]||(t[1]=s("div",{class:"pane-title"},"服务项目",-1)),s("div",w,[s("div",F,[(n(!0),c(L,null,f(d.ListData,(a,h)=>(n(),c("div",{class:"list-item",key:h},[s("div",G,[s("img",{src:a.src},null,8,N)]),s("div",V,y(a.text),1),l(r,{onClick:A=>p(a)},null,8,["onClick"])]))),128))])])])])]),_:3}))}},R=m($,[["__scopeId","data-v-849fe00a"]]),U="/list-icon/list-item-3.png";export{R as L,U as a};
