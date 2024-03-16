import{V as d}from"./vue.runtime.esm-bundler.7234dd31.js";import{_,r as m,o as g,c as b,b as h,w as r,a as o,d as e}from"./app.d699c88a.js";const E={name:"component-doc",components:{"render-demo-0":function(){const{createCommentVNode:l,resolveComponent:a,createVNode:s,Fragment:i,openBlock:c,createElementBlock:k}=d;function p(v,y){const n=a("GAttentionDecoration");return c(),k(i,null,[l(` 
  interface AttentionDecorationProps {
    size?: number;
    n?: number;
  }
 `),s(n,{size:50}),s(n,{size:50,n:0}),s(n,{size:50,n:5})],64)}return{render:p,...{}}}(),"render-demo-1":function(){const{createCommentVNode:l,resolveComponent:a,createVNode:s,Fragment:i,openBlock:c,createElementBlock:k}=d;function p(v,y){const n=a("GEnable");return c(),k(i,null,[l(` 
  interface EnableProps {
    enable?: boolean;
    size?: number;
  }
 `),s(n,{enable:"",size:50}),s(n,{size:50})],64)}return{render:p,...{}}}(),"render-demo-2":function(){const{createCommentVNode:l,resolveComponent:a,createVNode:s,Fragment:i,openBlock:c,createElementBlock:k}=d;function p(y,n){const u=a("GLock");return c(),k(i,null,[l(` 
  interface LockProps {
    lock?: boolean;
    size?: number;
    modelValue?: boolean;
  }
 `),s(u,{size:50}),s(u,{size:50,lock:""}),s(u,{size:50,modelValue:y.lock,"onUpdate:modelValue":n[0]||(n[0]=x=>y.lock=x)},null,8,["modelValue"])],64)}const{ref:t}=d;return{render:p,...{setup(y,{expose:n}){return n(),{lock:t(!1),ref:t}}}}}(),"render-demo-3":function(){const{createCommentVNode:l,resolveComponent:a,createVNode:s,Fragment:i,openBlock:c,createElementBlock:k}=d;function p(v,y){const n=a("GRarity");return c(),k(i,null,[l(` 
  interface RarityBarProps {
    rarity: 1 | 2 | 3 | 4 | 5; @default: 1;
    align?: 'left' | 'center' | 'right'; @default: 'center';
    size?: number; @default: 20;
  }
 `),s(n,{align:"left",rarity:5,size:50}),s(n,{align:"center",rarity:5,size:50}),s(n,{align:"right",rarity:5,size:50})],64)}return{render:p,...{}}}(),"render-demo-4":function(){const{createCommentVNode:l,resolveComponent:a,createVNode:s,Fragment:i,openBlock:c,createElementBlock:k}=d;function p(v,y){const n=a("GRefine");return c(),k(i,null,[l(` 
  interface props {
    refine: number; @default: 1;
    refineEnd: boolean;
    text?: boolean; @default: false;
    size?: number; @default: 20;
  }
);
 `),s(n,{refine:5,size:50}),s(n,{refine:5,size:50,refineEnd:""}),s(n,{refine:5,size:50,text:""})],64)}return{render:p,...{}}}(),"render-demo-5":function(){const{resolveComponent:l,createVNode:a,openBlock:s,createElementBlock:i}=d,c={style:{background:"var(--font-light-gray)"}};function k(t,v){const y=l("GLine");return s(),i("div",c,[a(y)])}return{render:k,...{}}}(),"render-demo-6":function(){const{createCommentVNode:l,resolveComponent:a,createVNode:s,createElementVNode:i,Fragment:c,openBlock:k,createElementBlock:p}=d,t=i("br",null,null,-1);function v(n,u){const x=a("GRankBar");return k(),p(c,null,[l(` 
  interface props {
    rank: 0 | 1 | 2 | 3 | 4 | 5 | 6; @default: 0;
    maxRank?: number; @default: 6;
    size?: number; @default: 25;
  }
 `),s(x,{rank:3,maxRank:5}),t,s(x,{rank:3})],64)}return{render:v,...{}}}()}},z=o("h3",{id:"\u4F7F\u7528\u7528\u4F8B",tabindex:"-1"},[o("a",{class:"header-anchor",href:"#\u4F7F\u7528\u7528\u4F8B","aria-hidden":"true"},"#"),e(" \u4F7F\u7528\u7528\u4F8B")],-1),w=o("h4",{id:"attention",tabindex:"-1"},[o("a",{class:"header-anchor",href:"#attention","aria-hidden":"true"},"#"),e(" Attention")],-1),B=o("div",null,[o("code",null,"n = 0"),e("\u65F6\u5C55\u793A\u611F\u53F9\u53F7\uFF0C\u9ED8\u8BA4\u5C55\u793A\u611F\u53F9\u53F7")],-1),C=o("div",{class:"language-vue"},[o("pre",{class:"shiki",style:{"background-color":"var(--shiki-color-background)"}},[o("code",null,[o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-token-comment)"}},"<!-- ")]),e(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-token-comment)"}},"  interface AttentionDecorationProps {")]),e(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-token-comment)"}},"    size?: number;")]),e(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-token-comment)"}},"    n?: number;")]),e(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-token-comment)"}},"  }")]),e(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-token-comment)"}}," -->")]),e(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"<"),o("span",{style:{color:"var(--shiki-token-string-expression)"}},"template"),o("span",{style:{color:"var(--shiki-color-text)"}},">")]),e(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"  <"),o("span",{style:{color:"var(--shiki-token-constant)"}},"GAttentionDecoration"),o("span",{style:{color:"var(--shiki-color-text)"}}," "),o("span",{style:{color:"var(--shiki-token-keyword)"}},":"),o("span",{style:{color:"var(--shiki-token-function)"}},"size"),o("span",{style:{color:"var(--shiki-token-keyword)"}},"="),o("span",{style:{color:"var(--shiki-color-text)"}},'"'),o("span",{style:{color:"var(--shiki-token-constant)"}},"50"),o("span",{style:{color:"var(--shiki-color-text)"}},'"'),o("span",{style:{color:"var(--shiki-color-text)"}}," />")]),e(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"  <"),o("span",{style:{color:"var(--shiki-token-constant)"}},"GAttentionDecoration"),o("span",{style:{color:"var(--shiki-color-text)"}}," "),o("span",{style:{color:"var(--shiki-token-keyword)"}},":"),o("span",{style:{color:"var(--shiki-token-function)"}},"size"),o("span",{style:{color:"var(--shiki-token-keyword)"}},"="),o("span",{style:{color:"var(--shiki-color-text)"}},'"'),o("span",{style:{color:"var(--shiki-token-constant)"}},"50"),o("span",{style:{color:"var(--shiki-color-text)"}},'"'),o("span",{style:{color:"var(--shiki-color-text)"}}," "),o("span",{style:{color:"var(--shiki-token-keyword)"}},":"),o("span",{style:{color:"var(--shiki-token-function)"}},"n"),o("span",{style:{color:"var(--shiki-token-keyword)"}},"="),o("span",{style:{color:"var(--shiki-color-text)"}},'"'),o("span",{style:{color:"var(--shiki-token-constant)"}},"0"),o("span",{style:{color:"var(--shiki-color-text)"}},'"'),o("span",{style:{color:"var(--shiki-color-text)"}}," />")]),e(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"  <"),o("span",{style:{color:"var(--shiki-token-constant)"}},"GAttentionDecoration"),o("span",{style:{color:"var(--shiki-color-text)"}}," "),o("span",{style:{color:"var(--shiki-token-keyword)"}},":"),o("span",{style:{color:"var(--shiki-token-function)"}},"size"),o("span",{style:{color:"var(--shiki-token-keyword)"}},"="),o("span",{style:{color:"var(--shiki-color-text)"}},'"'),o("span",{style:{color:"var(--shiki-token-constant)"}},"50"),o("span",{style:{color:"var(--shiki-color-text)"}},'"'),o("span",{style:{color:"var(--shiki-color-text)"}}," "),o("span",{style:{color:"var(--shiki-token-keyword)"}},":"),o("span",{style:{color:"var(--shiki-token-function)"}},"n"),o("span",{style:{color:"var(--shiki-token-keyword)"}},"="),o("span",{style:{color:"var(--shiki-color-text)"}},'"'),o("span",{style:{color:"var(--shiki-token-constant)"}},"5"),o("span",{style:{color:"var(--shiki-color-text)"}},'"'),o("span",{style:{color:"var(--shiki-color-text)"}}," />")]),e(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"</"),o("span",{style:{color:"var(--shiki-token-string-expression)"}},"template"),o("span",{style:{color:"var(--shiki-color-text)"}},">")]),e(`
`),o("span",{class:"line"})])])],-1),G=o("h4",{id:"enable",tabindex:"-1"},[o("a",{class:"header-anchor",href:"#enable","aria-hidden":"true"},"#"),e(" Enable")],-1),V=o("div",{class:"language-vue"},[o("pre",{class:"shiki",style:{"background-color":"var(--shiki-color-background)"}},[o("code",null,[o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-token-comment)"}},"<!-- ")]),e(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-token-comment)"}},"  interface EnableProps {")]),e(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-token-comment)"}},"    enable?: boolean;")]),e(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-token-comment)"}},"    size?: number;")]),e(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-token-comment)"}},"  }")]),e(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-token-comment)"}}," -->")]),e(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"<"),o("span",{style:{color:"var(--shiki-token-string-expression)"}},"template"),o("span",{style:{color:"var(--shiki-color-text)"}},">")]),e(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"  <"),o("span",{style:{color:"var(--shiki-token-constant)"}},"GEnable"),o("span",{style:{color:"var(--shiki-color-text)"}}," "),o("span",{style:{color:"var(--shiki-token-function)"}},"enable"),o("span",{style:{color:"var(--shiki-color-text)"}}," "),o("span",{style:{color:"var(--shiki-token-keyword)"}},":"),o("span",{style:{color:"var(--shiki-token-function)"}},"size"),o("span",{style:{color:"var(--shiki-token-keyword)"}},"="),o("span",{style:{color:"var(--shiki-color-text)"}},'"'),o("span",{style:{color:"var(--shiki-token-constant)"}},"50"),o("span",{style:{color:"var(--shiki-color-text)"}},'"'),o("span",{style:{color:"var(--shiki-color-text)"}}," />")]),e(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"  <"),o("span",{style:{color:"var(--shiki-token-constant)"}},"GEnable"),o("span",{style:{color:"var(--shiki-color-text)"}}," "),o("span",{style:{color:"var(--shiki-token-keyword)"}},":"),o("span",{style:{color:"var(--shiki-token-function)"}},"size"),o("span",{style:{color:"var(--shiki-token-keyword)"}},"="),o("span",{style:{color:"var(--shiki-color-text)"}},'"'),o("span",{style:{color:"var(--shiki-token-constant)"}},"50"),o("span",{style:{color:"var(--shiki-color-text)"}},'"'),o("span",{style:{color:"var(--shiki-color-text)"}}," />")]),e(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"</"),o("span",{style:{color:"var(--shiki-token-string-expression)"}},"template"),o("span",{style:{color:"var(--shiki-color-text)"}},">")]),e(`
`),o("span",{class:"line"})])])],-1),F=o("h4",{id:"lock",tabindex:"-1"},[o("a",{class:"header-anchor",href:"#lock","aria-hidden":"true"},"#"),e(" Lock")],-1),N=o("div",{class:"language-vue"},[o("pre",{class:"shiki",style:{"background-color":"var(--shiki-color-background)"}},[o("code",null,[o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-token-comment)"}},"<!-- ")]),e(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-token-comment)"}},"  interface LockProps {")]),e(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-token-comment)"}},"    lock?: boolean;")]),e(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-token-comment)"}},"    size?: number;")]),e(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-token-comment)"}},"    modelValue?: boolean;")]),e(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-token-comment)"}},"  }")]),e(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-token-comment)"}}," -->")]),e(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"<"),o("span",{style:{color:"var(--shiki-token-string-expression)"}},"template"),o("span",{style:{color:"var(--shiki-color-text)"}},">")]),e(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"  <"),o("span",{style:{color:"var(--shiki-token-constant)"}},"GLock"),o("span",{style:{color:"var(--shiki-color-text)"}}," "),o("span",{style:{color:"var(--shiki-token-keyword)"}},":"),o("span",{style:{color:"var(--shiki-token-function)"}},"size"),o("span",{style:{color:"var(--shiki-token-keyword)"}},"="),o("span",{style:{color:"var(--shiki-color-text)"}},'"'),o("span",{style:{color:"var(--shiki-token-constant)"}},"50"),o("span",{style:{color:"var(--shiki-color-text)"}},'"'),o("span",{style:{color:"var(--shiki-color-text)"}}," />")]),e(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"  <"),o("span",{style:{color:"var(--shiki-token-constant)"}},"GLock"),o("span",{style:{color:"var(--shiki-color-text)"}}," "),o("span",{style:{color:"var(--shiki-token-keyword)"}},":"),o("span",{style:{color:"var(--shiki-token-function)"}},"size"),o("span",{style:{color:"var(--shiki-token-keyword)"}},"="),o("span",{style:{color:"var(--shiki-color-text)"}},'"'),o("span",{style:{color:"var(--shiki-token-constant)"}},"50"),o("span",{style:{color:"var(--shiki-color-text)"}},'"'),o("span",{style:{color:"var(--shiki-color-text)"}}," "),o("span",{style:{color:"var(--shiki-token-function)"}},"lock"),o("span",{style:{color:"var(--shiki-color-text)"}}," />")]),e(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"  <"),o("span",{style:{color:"var(--shiki-token-constant)"}},"GLock"),o("span",{style:{color:"var(--shiki-color-text)"}}," "),o("span",{style:{color:"var(--shiki-token-keyword)"}},":"),o("span",{style:{color:"var(--shiki-token-function)"}},"size"),o("span",{style:{color:"var(--shiki-token-keyword)"}},"="),o("span",{style:{color:"var(--shiki-color-text)"}},'"'),o("span",{style:{color:"var(--shiki-token-constant)"}},"50"),o("span",{style:{color:"var(--shiki-color-text)"}},'"'),o("span",{style:{color:"var(--shiki-color-text)"}}," "),o("span",{style:{color:"var(--shiki-token-function)"}},"v-model"),o("span",{style:{color:"var(--shiki-token-keyword)"}},"="),o("span",{style:{color:"var(--shiki-color-text)"}},'"'),o("span",{style:{color:"var(--shiki-color-text)"}},"lock"),o("span",{style:{color:"var(--shiki-color-text)"}},'"'),o("span",{style:{color:"var(--shiki-color-text)"}}," />")]),e(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"</"),o("span",{style:{color:"var(--shiki-token-string-expression)"}},"template"),o("span",{style:{color:"var(--shiki-color-text)"}},">")]),e(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"<"),o("span",{style:{color:"var(--shiki-token-string-expression)"}},"script"),o("span",{style:{color:"var(--shiki-color-text)"}}," "),o("span",{style:{color:"var(--shiki-token-function)"}},"setup"),o("span",{style:{color:"var(--shiki-color-text)"}},">")]),e(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"  "),o("span",{style:{color:"var(--shiki-token-keyword)"}},"import"),o("span",{style:{color:"var(--shiki-color-text)"}}," { ref } "),o("span",{style:{color:"var(--shiki-token-keyword)"}},"from"),o("span",{style:{color:"var(--shiki-color-text)"}}," "),o("span",{style:{color:"var(--shiki-token-string-expression)"}},"'vue'")]),e(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"  "),o("span",{style:{color:"var(--shiki-token-keyword)"}},"const"),o("span",{style:{color:"var(--shiki-color-text)"}}," "),o("span",{style:{color:"var(--shiki-token-constant)"}},"lock"),o("span",{style:{color:"var(--shiki-color-text)"}}," "),o("span",{style:{color:"var(--shiki-token-keyword)"}},"="),o("span",{style:{color:"var(--shiki-color-text)"}}," "),o("span",{style:{color:"var(--shiki-token-function)"}},"ref"),o("span",{style:{color:"var(--shiki-color-text)"}},"("),o("span",{style:{color:"var(--shiki-token-constant)"}},"false"),o("span",{style:{color:"var(--shiki-color-text)"}},")")]),e(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"</"),o("span",{style:{color:"var(--shiki-token-string-expression)"}},"script"),o("span",{style:{color:"var(--shiki-color-text)"}},">")]),e(`
`),o("span",{class:"line"})])])],-1),R=o("h4",{id:"\u7A00\u6709\u5EA6\u7B49\u7EA7",tabindex:"-1"},[o("a",{class:"header-anchor",href:"#\u7A00\u6709\u5EA6\u7B49\u7EA7","aria-hidden":"true"},"#"),e(" \u7A00\u6709\u5EA6\u7B49\u7EA7")],-1),A=o("div",{class:"language-vue"},[o("pre",{class:"shiki",style:{"background-color":"var(--shiki-color-background)"}},[o("code",null,[o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-token-comment)"}},"<!-- ")]),e(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-token-comment)"}},"  interface RarityBarProps {")]),e(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-token-comment)"}},"    rarity: 1 | 2 | 3 | 4 | 5; @default: 1;")]),e(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-token-comment)"}},"    align?: 'left' | 'center' | 'right'; @default: 'center';")]),e(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-token-comment)"}},"    size?: number; @default: 20;")]),e(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-token-comment)"}},"  }")]),e(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-token-comment)"}}," -->")]),e(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"<"),o("span",{style:{color:"var(--shiki-token-string-expression)"}},"template"),o("span",{style:{color:"var(--shiki-color-text)"}},">")]),e(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"  <"),o("span",{style:{color:"var(--shiki-token-constant)"}},"GRarity"),o("span",{style:{color:"var(--shiki-color-text)"}}," "),o("span",{style:{color:"var(--shiki-token-function)"}},"align"),o("span",{style:{color:"var(--shiki-color-text)"}},"="),o("span",{style:{color:"var(--shiki-token-string-expression)"}},'"left"'),o("span",{style:{color:"var(--shiki-color-text)"}}," "),o("span",{style:{color:"var(--shiki-token-keyword)"}},":"),o("span",{style:{color:"var(--shiki-token-function)"}},"rarity"),o("span",{style:{color:"var(--shiki-token-keyword)"}},"="),o("span",{style:{color:"var(--shiki-color-text)"}},'"'),o("span",{style:{color:"var(--shiki-token-constant)"}},"5"),o("span",{style:{color:"var(--shiki-color-text)"}},'"'),o("span",{style:{color:"var(--shiki-color-text)"}}," "),o("span",{style:{color:"var(--shiki-token-keyword)"}},":"),o("span",{style:{color:"var(--shiki-token-function)"}},"size"),o("span",{style:{color:"var(--shiki-token-keyword)"}},"="),o("span",{style:{color:"var(--shiki-color-text)"}},'"'),o("span",{style:{color:"var(--shiki-token-constant)"}},"50"),o("span",{style:{color:"var(--shiki-color-text)"}},'"'),o("span",{style:{color:"var(--shiki-color-text)"}}," />")]),e(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"  <"),o("span",{style:{color:"var(--shiki-token-constant)"}},"GRarity"),o("span",{style:{color:"var(--shiki-color-text)"}}," "),o("span",{style:{color:"var(--shiki-token-function)"}},"align"),o("span",{style:{color:"var(--shiki-color-text)"}},"="),o("span",{style:{color:"var(--shiki-token-string-expression)"}},'"center"'),o("span",{style:{color:"var(--shiki-color-text)"}}," "),o("span",{style:{color:"var(--shiki-token-keyword)"}},":"),o("span",{style:{color:"var(--shiki-token-function)"}},"rarity"),o("span",{style:{color:"var(--shiki-token-keyword)"}},"="),o("span",{style:{color:"var(--shiki-color-text)"}},'"'),o("span",{style:{color:"var(--shiki-token-constant)"}},"5"),o("span",{style:{color:"var(--shiki-color-text)"}},'"'),o("span",{style:{color:"var(--shiki-color-text)"}}," "),o("span",{style:{color:"var(--shiki-token-keyword)"}},":"),o("span",{style:{color:"var(--shiki-token-function)"}},"size"),o("span",{style:{color:"var(--shiki-token-keyword)"}},"="),o("span",{style:{color:"var(--shiki-color-text)"}},'"'),o("span",{style:{color:"var(--shiki-token-constant)"}},"50"),o("span",{style:{color:"var(--shiki-color-text)"}},'"'),o("span",{style:{color:"var(--shiki-color-text)"}}," />")]),e(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"  <"),o("span",{style:{color:"var(--shiki-token-constant)"}},"GRarity"),o("span",{style:{color:"var(--shiki-color-text)"}}," "),o("span",{style:{color:"var(--shiki-token-function)"}},"align"),o("span",{style:{color:"var(--shiki-color-text)"}},"="),o("span",{style:{color:"var(--shiki-token-string-expression)"}},'"right"'),o("span",{style:{color:"var(--shiki-color-text)"}}," "),o("span",{style:{color:"var(--shiki-token-keyword)"}},":"),o("span",{style:{color:"var(--shiki-token-function)"}},"rarity"),o("span",{style:{color:"var(--shiki-token-keyword)"}},"="),o("span",{style:{color:"var(--shiki-color-text)"}},'"'),o("span",{style:{color:"var(--shiki-token-constant)"}},"5"),o("span",{style:{color:"var(--shiki-color-text)"}},'"'),o("span",{style:{color:"var(--shiki-color-text)"}}," "),o("span",{style:{color:"var(--shiki-token-keyword)"}},":"),o("span",{style:{color:"var(--shiki-token-function)"}},"size"),o("span",{style:{color:"var(--shiki-token-keyword)"}},"="),o("span",{style:{color:"var(--shiki-color-text)"}},'"'),o("span",{style:{color:"var(--shiki-token-constant)"}},"50"),o("span",{style:{color:"var(--shiki-color-text)"}},'"'),o("span",{style:{color:"var(--shiki-color-text)"}}," />")]),e(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"</"),o("span",{style:{color:"var(--shiki-token-string-expression)"}},"template"),o("span",{style:{color:"var(--shiki-color-text)"}},">")]),e(`
`),o("span",{class:"line"})])])],-1),L=o("h4",{id:"\u7CBE\u70BC",tabindex:"-1"},[o("a",{class:"header-anchor",href:"#\u7CBE\u70BC","aria-hidden":"true"},"#"),e(" \u7CBE\u70BC")],-1),D=o("div",{class:"language-vue"},[o("pre",{class:"shiki",style:{"background-color":"var(--shiki-color-background)"}},[o("code",null,[o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-token-comment)"}},"<!-- ")]),e(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-token-comment)"}},"  interface props {")]),e(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-token-comment)"}},"    refine: number; @default: 1;")]),e(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-token-comment)"}},"    refineEnd: boolean;")]),e(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-token-comment)"}},"    text?: boolean; @default: false;")]),e(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-token-comment)"}},"    size?: number; @default: 20;")]),e(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-token-comment)"}},"  }")]),e(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-token-comment)"}},");")]),e(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-token-comment)"}}," -->")]),e(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"<"),o("span",{style:{color:"var(--shiki-token-string-expression)"}},"template"),o("span",{style:{color:"var(--shiki-color-text)"}},">")]),e(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"  <"),o("span",{style:{color:"var(--shiki-token-constant)"}},"GRefine"),o("span",{style:{color:"var(--shiki-color-text)"}}," "),o("span",{style:{color:"var(--shiki-token-keyword)"}},":"),o("span",{style:{color:"var(--shiki-token-function)"}},"refine"),o("span",{style:{color:"var(--shiki-token-keyword)"}},"="),o("span",{style:{color:"var(--shiki-color-text)"}},'"'),o("span",{style:{color:"var(--shiki-token-constant)"}},"5"),o("span",{style:{color:"var(--shiki-color-text)"}},'"'),o("span",{style:{color:"var(--shiki-color-text)"}}," "),o("span",{style:{color:"var(--shiki-token-keyword)"}},":"),o("span",{style:{color:"var(--shiki-token-function)"}},"size"),o("span",{style:{color:"var(--shiki-token-keyword)"}},"="),o("span",{style:{color:"var(--shiki-color-text)"}},'"'),o("span",{style:{color:"var(--shiki-token-constant)"}},"50"),o("span",{style:{color:"var(--shiki-color-text)"}},'"'),o("span",{style:{color:"var(--shiki-color-text)"}}," />")]),e(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"  <"),o("span",{style:{color:"var(--shiki-token-constant)"}},"GRefine"),o("span",{style:{color:"var(--shiki-color-text)"}}," "),o("span",{style:{color:"var(--shiki-token-keyword)"}},":"),o("span",{style:{color:"var(--shiki-token-function)"}},"refine"),o("span",{style:{color:"var(--shiki-token-keyword)"}},"="),o("span",{style:{color:"var(--shiki-color-text)"}},'"'),o("span",{style:{color:"var(--shiki-token-constant)"}},"5"),o("span",{style:{color:"var(--shiki-color-text)"}},'"'),o("span",{style:{color:"var(--shiki-color-text)"}}," "),o("span",{style:{color:"var(--shiki-token-keyword)"}},":"),o("span",{style:{color:"var(--shiki-token-function)"}},"size"),o("span",{style:{color:"var(--shiki-token-keyword)"}},"="),o("span",{style:{color:"var(--shiki-color-text)"}},'"'),o("span",{style:{color:"var(--shiki-token-constant)"}},"50"),o("span",{style:{color:"var(--shiki-color-text)"}},'"'),o("span",{style:{color:"var(--shiki-color-text)"}}," "),o("span",{style:{color:"var(--shiki-token-function)"}},"refineEnd"),o("span",{style:{color:"var(--shiki-color-text)"}},"/>")]),e(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"  <"),o("span",{style:{color:"var(--shiki-token-constant)"}},"GRefine"),o("span",{style:{color:"var(--shiki-color-text)"}}," "),o("span",{style:{color:"var(--shiki-token-keyword)"}},":"),o("span",{style:{color:"var(--shiki-token-function)"}},"refine"),o("span",{style:{color:"var(--shiki-token-keyword)"}},"="),o("span",{style:{color:"var(--shiki-color-text)"}},'"'),o("span",{style:{color:"var(--shiki-token-constant)"}},"5"),o("span",{style:{color:"var(--shiki-color-text)"}},'"'),o("span",{style:{color:"var(--shiki-color-text)"}}," "),o("span",{style:{color:"var(--shiki-token-keyword)"}},":"),o("span",{style:{color:"var(--shiki-token-function)"}},"size"),o("span",{style:{color:"var(--shiki-token-keyword)"}},"="),o("span",{style:{color:"var(--shiki-color-text)"}},'"'),o("span",{style:{color:"var(--shiki-token-constant)"}},"50"),o("span",{style:{color:"var(--shiki-color-text)"}},'"'),o("span",{style:{color:"var(--shiki-color-text)"}}," "),o("span",{style:{color:"var(--shiki-token-function)"}},"text"),o("span",{style:{color:"var(--shiki-color-text)"}}," />")]),e(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"</"),o("span",{style:{color:"var(--shiki-token-string-expression)"}},"template"),o("span",{style:{color:"var(--shiki-color-text)"}},">")]),e(`
`),o("span",{class:"line"})])])],-1),P=o("h4",{id:"\u5206\u5272\u7EBF",tabindex:"-1"},[o("a",{class:"header-anchor",href:"#\u5206\u5272\u7EBF","aria-hidden":"true"},"#"),e(" \u5206\u5272\u7EBF")],-1),$=o("div",{class:"language-vue"},[o("pre",{class:"shiki",style:{"background-color":"var(--shiki-color-background)"}},[o("code",null,[o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"<"),o("span",{style:{color:"var(--shiki-token-string-expression)"}},"template"),o("span",{style:{color:"var(--shiki-color-text)"}},">")]),e(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"  <"),o("span",{style:{color:"var(--shiki-token-string-expression)"}},"div"),o("span",{style:{color:"var(--shiki-color-text)"}}," "),o("span",{style:{color:"var(--shiki-token-function)"}},"style"),o("span",{style:{color:"var(--shiki-color-text)"}},"="),o("span",{style:{color:"var(--shiki-token-string-expression)"}},'"background: var(--font-light-gray)"'),o("span",{style:{color:"var(--shiki-color-text)"}},">")]),e(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"    <"),o("span",{style:{color:"var(--shiki-token-constant)"}},"GLine"),o("span",{style:{color:"var(--shiki-color-text)"}}," />")]),e(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"  </"),o("span",{style:{color:"var(--shiki-token-string-expression)"}},"div"),o("span",{style:{color:"var(--shiki-color-text)"}},">")]),e(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"</"),o("span",{style:{color:"var(--shiki-token-string-expression)"}},"template"),o("span",{style:{color:"var(--shiki-color-text)"}},">")]),e(`
`),o("span",{class:"line"})])])],-1),T=o("h4",{id:"\u7A81\u7834\u661F\u7EA7",tabindex:"-1"},[o("a",{class:"header-anchor",href:"#\u7A81\u7834\u661F\u7EA7","aria-hidden":"true"},"#"),e(" \u7A81\u7834\u661F\u7EA7")],-1),U=o("div",{class:"language-vue"},[o("pre",{class:"shiki",style:{"background-color":"var(--shiki-color-background)"}},[o("code",null,[o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-token-comment)"}},"<!-- ")]),e(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-token-comment)"}},"  interface props {")]),e(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-token-comment)"}},"    rank: 0 | 1 | 2 | 3 | 4 | 5 | 6; @default: 0;")]),e(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-token-comment)"}},"    maxRank?: number; @default: 6;")]),e(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-token-comment)"}},"    size?: number; @default: 25;")]),e(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-token-comment)"}},"  }")]),e(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-token-comment)"}}," -->")]),e(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"<"),o("span",{style:{color:"var(--shiki-token-string-expression)"}},"template"),o("span",{style:{color:"var(--shiki-color-text)"}},">")]),e(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"  <"),o("span",{style:{color:"var(--shiki-token-constant)"}},"GRankBar"),o("span",{style:{color:"var(--shiki-color-text)"}}," ")]),e(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"    "),o("span",{style:{color:"var(--shiki-token-keyword)"}},":"),o("span",{style:{color:"var(--shiki-token-function)"}},"rank"),o("span",{style:{color:"var(--shiki-token-keyword)"}},"="),o("span",{style:{color:"var(--shiki-color-text)"}},'"'),o("span",{style:{color:"var(--shiki-token-constant)"}},"3"),o("span",{style:{color:"var(--shiki-color-text)"}},'"')]),e(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"    "),o("span",{style:{color:"var(--shiki-token-keyword)"}},":"),o("span",{style:{color:"var(--shiki-token-function)"}},"maxRank"),o("span",{style:{color:"var(--shiki-token-keyword)"}},"="),o("span",{style:{color:"var(--shiki-color-text)"}},'"'),o("span",{style:{color:"var(--shiki-token-constant)"}},"5"),o("span",{style:{color:"var(--shiki-color-text)"}},'"')]),e(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"  />")]),e(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"  <"),o("span",{style:{color:"var(--shiki-token-string-expression)"}},"br"),o("span",{style:{color:"var(--shiki-color-text)"}}," />")]),e(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"  <"),o("span",{style:{color:"var(--shiki-token-constant)"}},"GRankBar"),o("span",{style:{color:"var(--shiki-color-text)"}}," "),o("span",{style:{color:"var(--shiki-token-keyword)"}},":"),o("span",{style:{color:"var(--shiki-token-function)"}},"rank"),o("span",{style:{color:"var(--shiki-token-keyword)"}},"="),o("span",{style:{color:"var(--shiki-color-text)"}},'"'),o("span",{style:{color:"var(--shiki-token-constant)"}},"3"),o("span",{style:{color:"var(--shiki-color-text)"}},'"'),o("span",{style:{color:"var(--shiki-color-text)"}},"/>")]),e(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"</"),o("span",{style:{color:"var(--shiki-token-string-expression)"}},"template"),o("span",{style:{color:"var(--shiki-color-text)"}},">")]),e(`
`),o("span",{class:"line"})])])],-1);function j(l,a,s,i,c,k){const p=m("render-demo-0"),t=m("demo"),v=m("render-demo-1"),y=m("render-demo-2"),n=m("render-demo-3"),u=m("render-demo-4"),x=m("render-demo-5"),f=m("render-demo-6");return g(),b("div",null,[z,w,h(t,{customClass:"",sourceCode:`<!-- 
  interface AttentionDecorationProps {
    size?: number;
    n?: number;
  }
 -->
<template>
  <GAttentionDecoration :size="50" />
  <GAttentionDecoration :size="50" :n="0" />
  <GAttentionDecoration :size="50" :n="5" />
</template>
`},{description:r(()=>[B]),highlight:r(()=>[C]),default:r(()=>[h(p)]),_:1}),G,h(t,{customClass:"",sourceCode:`<!-- 
  interface EnableProps {
    enable?: boolean;
    size?: number;
  }
 -->
<template>
  <GEnable enable :size="50" />
  <GEnable :size="50" />
</template>
`},{highlight:r(()=>[V]),default:r(()=>[h(v)]),_:1}),F,h(t,{customClass:"",sourceCode:`<!-- 
  interface LockProps {
    lock?: boolean;
    size?: number;
    modelValue?: boolean;
  }
 -->
<template>
  <GLock :size="50" />
  <GLock :size="50" lock />
  <GLock :size="50" v-model="lock" />
</template>
<script setup>
  import { ref } from 'vue'
  const lock = ref(false)
<\/script>
`},{highlight:r(()=>[N]),default:r(()=>[h(y)]),_:1}),R,h(t,{customClass:"",sourceCode:`<!-- 
  interface RarityBarProps {
    rarity: 1 | 2 | 3 | 4 | 5; @default: 1;
    align?: 'left' | 'center' | 'right'; @default: 'center';
    size?: number; @default: 20;
  }
 -->
<template>
  <GRarity align="left" :rarity="5" :size="50" />
  <GRarity align="center" :rarity="5" :size="50" />
  <GRarity align="right" :rarity="5" :size="50" />
</template>
`},{highlight:r(()=>[A]),default:r(()=>[h(n)]),_:1}),L,h(t,{customClass:"",sourceCode:`<!-- 
  interface props {
    refine: number; @default: 1;
    refineEnd: boolean;
    text?: boolean; @default: false;
    size?: number; @default: 20;
  }
);
 -->
<template>
  <GRefine :refine="5" :size="50" />
  <GRefine :refine="5" :size="50" refineEnd/>
  <GRefine :refine="5" :size="50" text />
</template>
`},{highlight:r(()=>[D]),default:r(()=>[h(u)]),_:1}),P,h(t,{customClass:"",sourceCode:`<template>
  <div style="background: var(--font-light-gray)">
    <GLine />
  </div>
</template>
`},{highlight:r(()=>[$]),default:r(()=>[h(x)]),_:1}),T,h(t,{customClass:"",sourceCode:`<!-- 
  interface props {
    rank: 0 | 1 | 2 | 3 | 4 | 5 | 6; @default: 0;
    maxRank?: number; @default: 6;
    size?: number; @default: 25;
  }
 -->
<template>
  <GRankBar 
    :rank="3"
    :maxRank="5"
  />
  <br />
  <GRankBar :rank="3"/>
</template>
`},{highlight:r(()=>[U]),default:r(()=>[h(f)]),_:1})])}const I=_(E,[["render",j],["__file","Tags.html.vue"]]);export{I as default};
