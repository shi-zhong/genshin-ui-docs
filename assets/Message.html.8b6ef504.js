import{V as g}from"./vue.runtime.esm-bundler.7234dd31.js";import{G as m,_ as f,r as h,o as w,c as _,b as v,w as x,f as u,a as s,d as n}from"./app.d699c88a.js";const B={name:"component-doc",components:{"render-demo-0":function(){const{createTextVNode:t,resolveComponent:p,withCtx:r,createVNode:e,Fragment:k,openBlock:y,createElementBlock:i}=g;function c(a,o){const l=p("GButton");return y(),i(k,null,[e(l,{class:"w-150 mg-10",type:"shrink",icon:"round",balance:"",onClick:o[0]||(o[0]=()=>a.Message.success("Success"))},{default:r(()=>[t("Success")]),_:1}),e(l,{class:"w-150 mg-10",type:"shrink",icon:"round",balance:"",onClick:o[1]||(o[1]=()=>a.Message.info("Info"))},{default:r(()=>[t("Info")]),_:1}),e(l,{class:"w-150 mg-10",type:"shrink",icon:"round",balance:"",onClick:o[2]||(o[2]=()=>a.Message.error("Error"))},{default:r(()=>[t("Error")]),_:1}),e(l,{class:"w-150 mg-10",type:"shrink",icon:"round",balance:"",onClick:o[3]||(o[3]=()=>a.Message.clear())},{default:r(()=>[t("\u6E05\u9664")]),_:1})],64)}const{Message:d}=m;return{render:c,...{setup(a,{expose:o}){return o(),{get Message(){return d}}}}}}()}};const b=u(`<h3 id="\u4F7F\u7528\u7528\u4F8B" tabindex="-1"><a class="header-anchor" href="#\u4F7F\u7528\u7528\u4F8B" aria-hidden="true">#</a> \u4F7F\u7528\u7528\u4F8B</h3><div class="language-typescript ext-ts"><pre class="shiki" style="background-color:var(--shiki-color-background);"><code><span class="line"><span style="color:var(--shiki-token-keyword);">import</span><span style="color:var(--shiki-color-text);"> { Message } </span><span style="color:var(--shiki-token-keyword);">from</span><span style="color:var(--shiki-color-text);"> </span><span style="color:var(--shiki-token-string-expression);">&#39;genshin-ui&#39;</span><span style="color:var(--shiki-color-text);">;</span></span>
<span class="line"></span></code></pre></div>`,2),M=s("div",{class:"language-vue"},[s("pre",{class:"shiki",style:{"background-color":"var(--shiki-color-background)"}},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"var(--shiki-color-text)"}},"<"),s("span",{style:{color:"var(--shiki-token-string-expression)"}},"template"),s("span",{style:{color:"var(--shiki-color-text)"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"var(--shiki-color-text)"}},"  <"),s("span",{style:{color:"var(--shiki-token-constant)"}},"GButton"),s("span",{style:{color:"var(--shiki-color-text)"}}," "),s("span",{style:{color:"var(--shiki-token-function)"}},"class"),s("span",{style:{color:"var(--shiki-color-text)"}},"="),s("span",{style:{color:"var(--shiki-token-string-expression)"}},'"w-150 mg-10"'),s("span",{style:{color:"var(--shiki-color-text)"}}," "),s("span",{style:{color:"var(--shiki-token-function)"}},"type"),s("span",{style:{color:"var(--shiki-color-text)"}},"="),s("span",{style:{color:"var(--shiki-token-string-expression)"}},'"shrink"'),s("span",{style:{color:"var(--shiki-color-text)"}}," "),s("span",{style:{color:"var(--shiki-token-function)"}},"icon"),s("span",{style:{color:"var(--shiki-color-text)"}},"="),s("span",{style:{color:"var(--shiki-token-string-expression)"}},'"round"'),s("span",{style:{color:"var(--shiki-color-text)"}}," "),s("span",{style:{color:"var(--shiki-token-function)"}},"balance"),s("span",{style:{color:"var(--shiki-color-text)"}}," "),s("span",{style:{color:"var(--shiki-token-keyword)"}},"@"),s("span",{style:{color:"var(--shiki-token-function)"}},"click"),s("span",{style:{color:"var(--shiki-token-keyword)"}},"="),s("span",{style:{color:"var(--shiki-color-text)"}},'"'),s("span",{style:{color:"var(--shiki-color-text)"}},"() "),s("span",{style:{color:"var(--shiki-token-keyword)"}},"=>"),s("span",{style:{color:"var(--shiki-color-text)"}}," "),s("span",{style:{color:"var(--shiki-token-constant)"}},"Message"),s("span",{style:{color:"var(--shiki-token-function)"}},".success"),s("span",{style:{color:"var(--shiki-color-text)"}},"("),s("span",{style:{color:"var(--shiki-token-string-expression)"}},"'Success'"),s("span",{style:{color:"var(--shiki-color-text)"}},")"),s("span",{style:{color:"var(--shiki-color-text)"}},'"'),s("span",{style:{color:"var(--shiki-color-text)"}},">Success</"),s("span",{style:{color:"var(--shiki-token-constant)"}},"GButton"),s("span",{style:{color:"var(--shiki-color-text)"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"var(--shiki-color-text)"}},"  <"),s("span",{style:{color:"var(--shiki-token-constant)"}},"GButton"),s("span",{style:{color:"var(--shiki-color-text)"}}," "),s("span",{style:{color:"var(--shiki-token-function)"}},"class"),s("span",{style:{color:"var(--shiki-color-text)"}},"="),s("span",{style:{color:"var(--shiki-token-string-expression)"}},'"w-150 mg-10"'),s("span",{style:{color:"var(--shiki-color-text)"}}," "),s("span",{style:{color:"var(--shiki-token-function)"}},"type"),s("span",{style:{color:"var(--shiki-color-text)"}},"="),s("span",{style:{color:"var(--shiki-token-string-expression)"}},'"shrink"'),s("span",{style:{color:"var(--shiki-color-text)"}}," "),s("span",{style:{color:"var(--shiki-token-function)"}},"icon"),s("span",{style:{color:"var(--shiki-color-text)"}},"="),s("span",{style:{color:"var(--shiki-token-string-expression)"}},'"round"'),s("span",{style:{color:"var(--shiki-color-text)"}}," "),s("span",{style:{color:"var(--shiki-token-function)"}},"balance"),s("span",{style:{color:"var(--shiki-color-text)"}}," "),s("span",{style:{color:"var(--shiki-token-keyword)"}},"@"),s("span",{style:{color:"var(--shiki-token-function)"}},"click"),s("span",{style:{color:"var(--shiki-token-keyword)"}},"="),s("span",{style:{color:"var(--shiki-color-text)"}},'"'),s("span",{style:{color:"var(--shiki-color-text)"}},"() "),s("span",{style:{color:"var(--shiki-token-keyword)"}},"=>"),s("span",{style:{color:"var(--shiki-color-text)"}}," "),s("span",{style:{color:"var(--shiki-token-constant)"}},"Message"),s("span",{style:{color:"var(--shiki-token-function)"}},".info"),s("span",{style:{color:"var(--shiki-color-text)"}},"("),s("span",{style:{color:"var(--shiki-token-string-expression)"}},"'Info'"),s("span",{style:{color:"var(--shiki-color-text)"}},")"),s("span",{style:{color:"var(--shiki-color-text)"}},'"'),s("span",{style:{color:"var(--shiki-color-text)"}},">Info</"),s("span",{style:{color:"var(--shiki-token-constant)"}},"GButton"),s("span",{style:{color:"var(--shiki-color-text)"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"var(--shiki-color-text)"}},"  <"),s("span",{style:{color:"var(--shiki-token-constant)"}},"GButton"),s("span",{style:{color:"var(--shiki-color-text)"}}," "),s("span",{style:{color:"var(--shiki-token-function)"}},"class"),s("span",{style:{color:"var(--shiki-color-text)"}},"="),s("span",{style:{color:"var(--shiki-token-string-expression)"}},'"w-150 mg-10"'),s("span",{style:{color:"var(--shiki-color-text)"}}," "),s("span",{style:{color:"var(--shiki-token-function)"}},"type"),s("span",{style:{color:"var(--shiki-color-text)"}},"="),s("span",{style:{color:"var(--shiki-token-string-expression)"}},'"shrink"'),s("span",{style:{color:"var(--shiki-color-text)"}}," "),s("span",{style:{color:"var(--shiki-token-function)"}},"icon"),s("span",{style:{color:"var(--shiki-color-text)"}},"="),s("span",{style:{color:"var(--shiki-token-string-expression)"}},'"round"'),s("span",{style:{color:"var(--shiki-color-text)"}}," "),s("span",{style:{color:"var(--shiki-token-function)"}},"balance"),s("span",{style:{color:"var(--shiki-color-text)"}}," "),s("span",{style:{color:"var(--shiki-token-keyword)"}},"@"),s("span",{style:{color:"var(--shiki-token-function)"}},"click"),s("span",{style:{color:"var(--shiki-token-keyword)"}},"="),s("span",{style:{color:"var(--shiki-color-text)"}},'"'),s("span",{style:{color:"var(--shiki-color-text)"}},"() "),s("span",{style:{color:"var(--shiki-token-keyword)"}},"=>"),s("span",{style:{color:"var(--shiki-color-text)"}}," "),s("span",{style:{color:"var(--shiki-token-constant)"}},"Message"),s("span",{style:{color:"var(--shiki-token-function)"}},".error"),s("span",{style:{color:"var(--shiki-color-text)"}},"("),s("span",{style:{color:"var(--shiki-token-string-expression)"}},"'Error'"),s("span",{style:{color:"var(--shiki-color-text)"}},")"),s("span",{style:{color:"var(--shiki-color-text)"}},'"'),s("span",{style:{color:"var(--shiki-color-text)"}},">Error</"),s("span",{style:{color:"var(--shiki-token-constant)"}},"GButton"),s("span",{style:{color:"var(--shiki-color-text)"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"var(--shiki-color-text)"}},"  <"),s("span",{style:{color:"var(--shiki-token-constant)"}},"GButton"),s("span",{style:{color:"var(--shiki-color-text)"}}," "),s("span",{style:{color:"var(--shiki-token-function)"}},"class"),s("span",{style:{color:"var(--shiki-color-text)"}},"="),s("span",{style:{color:"var(--shiki-token-string-expression)"}},'"w-150 mg-10"'),s("span",{style:{color:"var(--shiki-color-text)"}}," "),s("span",{style:{color:"var(--shiki-token-function)"}},"type"),s("span",{style:{color:"var(--shiki-color-text)"}},"="),s("span",{style:{color:"var(--shiki-token-string-expression)"}},'"shrink"'),s("span",{style:{color:"var(--shiki-color-text)"}}," "),s("span",{style:{color:"var(--shiki-token-function)"}},"icon"),s("span",{style:{color:"var(--shiki-color-text)"}},"="),s("span",{style:{color:"var(--shiki-token-string-expression)"}},'"round"'),s("span",{style:{color:"var(--shiki-color-text)"}}," "),s("span",{style:{color:"var(--shiki-token-function)"}},"balance"),s("span",{style:{color:"var(--shiki-color-text)"}}," "),s("span",{style:{color:"var(--shiki-token-keyword)"}},"@"),s("span",{style:{color:"var(--shiki-token-function)"}},"click"),s("span",{style:{color:"var(--shiki-token-keyword)"}},"="),s("span",{style:{color:"var(--shiki-color-text)"}},'"'),s("span",{style:{color:"var(--shiki-color-text)"}},"() "),s("span",{style:{color:"var(--shiki-token-keyword)"}},"=>"),s("span",{style:{color:"var(--shiki-color-text)"}}," "),s("span",{style:{color:"var(--shiki-token-constant)"}},"Message"),s("span",{style:{color:"var(--shiki-token-function)"}},".clear"),s("span",{style:{color:"var(--shiki-color-text)"}},"()"),s("span",{style:{color:"var(--shiki-color-text)"}},'"'),s("span",{style:{color:"var(--shiki-color-text)"}},">\u6E05\u9664</"),s("span",{style:{color:"var(--shiki-token-constant)"}},"GButton"),s("span",{style:{color:"var(--shiki-color-text)"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"var(--shiki-color-text)"}},"</"),s("span",{style:{color:"var(--shiki-token-string-expression)"}},"template"),s("span",{style:{color:"var(--shiki-color-text)"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"var(--shiki-color-text)"}},"<"),s("span",{style:{color:"var(--shiki-token-string-expression)"}},"script"),s("span",{style:{color:"var(--shiki-color-text)"}}," "),s("span",{style:{color:"var(--shiki-token-function)"}},"setup"),s("span",{style:{color:"var(--shiki-color-text)"}},">")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"var(--shiki-color-text)"}},"  "),s("span",{style:{color:"var(--shiki-token-keyword)"}},"import"),s("span",{style:{color:"var(--shiki-color-text)"}}," { Message } "),s("span",{style:{color:"var(--shiki-token-keyword)"}},"from"),s("span",{style:{color:"var(--shiki-color-text)"}}," "),s("span",{style:{color:"var(--shiki-token-string-expression)"}},"'@shi-zhong/genshin-ui'")]),n(`
`),s("span",{class:"line"},[s("span",{style:{color:"var(--shiki-color-text)"}},"</"),s("span",{style:{color:"var(--shiki-token-string-expression)"}},"script"),s("span",{style:{color:"var(--shiki-color-text)"}},">")]),n(`
`),s("span",{class:"line"})])])],-1),G=u(`<h3 id="\u7C7B\u578B\u5B9A\u4E49" tabindex="-1"><a class="header-anchor" href="#\u7C7B\u578B\u5B9A\u4E49" aria-hidden="true">#</a> \u7C7B\u578B\u5B9A\u4E49</h3><div class="language-typescript ext-ts"><pre class="shiki" style="background-color:var(--shiki-color-background);"><code><span class="line"></span>
<span class="line"><span style="color:var(--shiki-token-keyword);">export</span><span style="color:var(--shiki-color-text);"> </span><span style="color:var(--shiki-token-keyword);">type</span><span style="color:var(--shiki-color-text);"> </span><span style="color:var(--shiki-token-function);">Message</span><span style="color:var(--shiki-color-text);"> </span><span style="color:var(--shiki-token-keyword);">=</span><span style="color:var(--shiki-color-text);"> {</span></span>
<span class="line"><span style="color:var(--shiki-color-text);">  </span><span style="color:var(--shiki-token-function);">msg</span><span style="color:var(--shiki-token-keyword);">:</span><span style="color:var(--shiki-color-text);"> (</span></span>
<span class="line"><span style="color:var(--shiki-color-text);">    msg</span><span style="color:var(--shiki-token-keyword);">:</span><span style="color:var(--shiki-color-text);"> </span><span style="color:var(--shiki-token-constant);">string</span><span style="color:var(--shiki-color-text);"> </span><span style="color:var(--shiki-token-keyword);">|</span><span style="color:var(--shiki-color-text);"> </span><span style="color:var(--shiki-token-constant);">number</span><span style="color:var(--shiki-token-punctuation);">,</span></span>
<span class="line"><span style="color:var(--shiki-color-text);">    option</span><span style="color:var(--shiki-token-keyword);">?:</span><span style="color:var(--shiki-color-text);"> {</span></span>
<span class="line"><span style="color:var(--shiki-color-text);">      type</span><span style="color:var(--shiki-token-keyword);">?:</span><span style="color:var(--shiki-color-text);"> </span><span style="color:var(--shiki-token-string-expression);">&#39;success&#39;</span><span style="color:var(--shiki-color-text);"> </span><span style="color:var(--shiki-token-keyword);">|</span><span style="color:var(--shiki-color-text);"> </span><span style="color:var(--shiki-token-string-expression);">&#39;info&#39;</span><span style="color:var(--shiki-color-text);"> </span><span style="color:var(--shiki-token-keyword);">|</span><span style="color:var(--shiki-color-text);"> </span><span style="color:var(--shiki-token-string-expression);">&#39;error&#39;</span></span>
<span class="line"><span style="color:var(--shiki-color-text);">      duration</span><span style="color:var(--shiki-token-keyword);">?:</span><span style="color:var(--shiki-color-text);"> </span><span style="color:var(--shiki-token-constant);">number</span></span>
<span class="line"><span style="color:var(--shiki-color-text);">    }</span></span>
<span class="line"><span style="color:var(--shiki-color-text);">  ) </span><span style="color:var(--shiki-token-keyword);">=&gt;</span><span style="color:var(--shiki-color-text);"> </span><span style="color:var(--shiki-token-constant);">void</span><span style="color:var(--shiki-color-text);">;</span></span>
<span class="line"><span style="color:var(--shiki-color-text);">  </span><span style="color:var(--shiki-token-function);">success</span><span style="color:var(--shiki-token-keyword);">:</span><span style="color:var(--shiki-color-text);"> (msg</span><span style="color:var(--shiki-token-keyword);">:</span><span style="color:var(--shiki-color-text);"> </span><span style="color:var(--shiki-token-constant);">string</span><span style="color:var(--shiki-color-text);"> </span><span style="color:var(--shiki-token-keyword);">|</span><span style="color:var(--shiki-color-text);"> </span><span style="color:var(--shiki-token-constant);">number</span><span style="color:var(--shiki-token-punctuation);">,</span><span style="color:var(--shiki-color-text);"> duration</span><span style="color:var(--shiki-token-keyword);">?:</span><span style="color:var(--shiki-color-text);"> </span><span style="color:var(--shiki-token-constant);">number</span><span style="color:var(--shiki-color-text);">) </span><span style="color:var(--shiki-token-keyword);">=&gt;</span><span style="color:var(--shiki-color-text);"> </span><span style="color:var(--shiki-token-constant);">void</span><span style="color:var(--shiki-color-text);">;</span></span>
<span class="line"><span style="color:var(--shiki-color-text);">  </span><span style="color:var(--shiki-token-function);">info</span><span style="color:var(--shiki-token-keyword);">:</span><span style="color:var(--shiki-color-text);"> (msg</span><span style="color:var(--shiki-token-keyword);">:</span><span style="color:var(--shiki-color-text);"> </span><span style="color:var(--shiki-token-constant);">string</span><span style="color:var(--shiki-color-text);"> </span><span style="color:var(--shiki-token-keyword);">|</span><span style="color:var(--shiki-color-text);"> </span><span style="color:var(--shiki-token-constant);">number</span><span style="color:var(--shiki-token-punctuation);">,</span><span style="color:var(--shiki-color-text);"> duration</span><span style="color:var(--shiki-token-keyword);">?:</span><span style="color:var(--shiki-color-text);"> </span><span style="color:var(--shiki-token-constant);">number</span><span style="color:var(--shiki-color-text);">) </span><span style="color:var(--shiki-token-keyword);">=&gt;</span><span style="color:var(--shiki-color-text);"> </span><span style="color:var(--shiki-token-constant);">void</span><span style="color:var(--shiki-color-text);">;</span></span>
<span class="line"><span style="color:var(--shiki-color-text);">  </span><span style="color:var(--shiki-token-function);">error</span><span style="color:var(--shiki-token-keyword);">:</span><span style="color:var(--shiki-color-text);"> (msg</span><span style="color:var(--shiki-token-keyword);">:</span><span style="color:var(--shiki-color-text);"> </span><span style="color:var(--shiki-token-constant);">string</span><span style="color:var(--shiki-color-text);"> </span><span style="color:var(--shiki-token-keyword);">|</span><span style="color:var(--shiki-color-text);"> </span><span style="color:var(--shiki-token-constant);">number</span><span style="color:var(--shiki-token-punctuation);">,</span><span style="color:var(--shiki-color-text);"> duration</span><span style="color:var(--shiki-token-keyword);">?:</span><span style="color:var(--shiki-color-text);"> </span><span style="color:var(--shiki-token-constant);">number</span><span style="color:var(--shiki-color-text);">) </span><span style="color:var(--shiki-token-keyword);">=&gt;</span><span style="color:var(--shiki-color-text);"> </span><span style="color:var(--shiki-token-constant);">void</span><span style="color:var(--shiki-color-text);">;</span></span>
<span class="line"><span style="color:var(--shiki-color-text);">  </span><span style="color:var(--shiki-token-function);">clear</span><span style="color:var(--shiki-token-keyword);">:</span><span style="color:var(--shiki-color-text);"> () </span><span style="color:var(--shiki-token-keyword);">=&gt;</span><span style="color:var(--shiki-color-text);"> </span><span style="color:var(--shiki-token-constant);">void</span><span style="color:var(--shiki-color-text);">;</span></span>
<span class="line"><span style="color:var(--shiki-color-text);">}</span></span>
<span class="line"></span></code></pre></div>`,2);function E(t,p,r,e,k,y){const i=h("render-demo-0"),c=h("demo");return w(),_("div",null,[b,v(c,{customClass:"",sourceCode:`<template>
  <GButton class="w-150 mg-10" type="shrink" icon="round" balance @click="() => Message.success('Success')">Success</GButton>
  <GButton class="w-150 mg-10" type="shrink" icon="round" balance @click="() => Message.info('Info')">Info</GButton>
  <GButton class="w-150 mg-10" type="shrink" icon="round" balance @click="() => Message.error('Error')">Error</GButton>
  <GButton class="w-150 mg-10" type="shrink" icon="round" balance @click="() => Message.clear()">\u6E05\u9664</GButton>
</template>
<script setup>
  import { Message } from '@shi-zhong/genshin-ui'
<\/script>
`},{highlight:x(()=>[M]),default:x(()=>[v(i)]),_:1}),G])}const N=f(B,[["render",E],["__file","Message.html.vue"]]);export{N as default};