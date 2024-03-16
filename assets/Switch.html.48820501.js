import{V as f}from"./vue.runtime.esm-bundler.7234dd31.js";import{G as w,_ as C,r as k,o as E,c as F,b as a,w as c,a as o,d as s}from"./app.d699c88a.js";const _={name:"component-doc",components:{"render-demo-0":function(){const{resolveComponent:u,createVNode:l,openBlock:h,createElementBlock:y}=f,v={class:"colored-bg pl-100"};function x(r,t){const e=u("GSwitch");return h(),y("div",v,[l(e,{style:{margin:"10px"}}),l(e,{style:{margin:"10px"},defaultValue:!0}),l(e,{style:{margin:"10px"},modelValue:r.switchValue,"onUpdate:modelValue":t[0]||(t[0]=n=>r.switchValue=n),"on-text":"\u663E\u793A\u7EC6\u8282","off-text":"\u9690\u85CF\u7EC6\u8282"},null,8,["modelValue"]),l(e,{style:{margin:"10px"},modelValue:r.switchValue,"onUpdate:modelValue":t[1]||(t[1]=n=>r.switchValue=n),"on-text":"\u663E\u793A\u7EC6\u8282","off-text":"\u9690\u85CF\u7EC6\u8282","text-side":"right"},null,8,["modelValue"])])}const{ref:i}=f;return{render:x,...{setup(r,{expose:t}){return t(),{switchValue:i(!1),ref:i}}}}}(),"render-demo-1":function(){const{resolveComponent:u,createVNode:l,openBlock:h,createElementBlock:y}=f,v={class:"colored-bg pl-100"};function x(t,e){const n=u("GSwitch");return h(),y("div",v,[l(n,{style:{margin:"10px"},modelValue:t.switchValue,"onUpdate:modelValue":e[0]||(e[0]=d=>t.switchValue=d),"on-text":"\u663E\u793A\u7EC6\u8282","off-text":"\u9690\u85CF\u7EC6\u8282",onChange:e[1]||(e[1]=()=>t.Message.info("change"))},null,8,["modelValue"]),l(n,{style:{margin:"10px"},modelValue:t.switchValue,"onUpdate:modelValue":e[2]||(e[2]=d=>t.switchValue=d),"on-text":"\u663E\u793A\u7EC6\u8282","off-text":"\u9690\u85CF\u7EC6\u8282","text-side":"right",onClick:t.switchFallback},null,8,["modelValue","onClick"])])}const{ref:i}=f,{Message:p}=w;return{render:x,...{setup(t,{expose:e}){return e(),{switchValue:i(!1),switchFallback:(T,m)=>{new Promise(g=>{setTimeout(()=>{g(void 0)},1e3)}).then(()=>{m()})},ref:i,get Message(){return p}}}}}}()}};const V=o("h3",{id:"\u4F7F\u7528\u7528\u4F8B",tabindex:"-1"},[o("a",{class:"header-anchor",href:"#\u4F7F\u7528\u7528\u4F8B","aria-hidden":"true"},"#"),s(" \u4F7F\u7528\u7528\u4F8B")],-1),B=o("h4",{id:"\u5F00\u5173\u5207\u6362",tabindex:"-1"},[o("a",{class:"header-anchor",href:"#\u5F00\u5173\u5207\u6362","aria-hidden":"true"},"#"),s(" \u5F00\u5173\u5207\u6362")],-1),b=o("div",null,[s("\u57FA\u672C\u7528\u6CD5, \u4F7F\u7528"),o("code",null,"v-model"),s("\u6765\u7ED1\u5B9A\u6570\u636E\uFF0C\u5728\u52A8\u753B\u6267\u884C\u671F\u95F4\u65E0\u6CD5\u518D\u6B21\u5207\u6362\u3002")],-1),A=o("div",{class:"language-vue"},[o("pre",{class:"shiki",style:{"background-color":"var(--shiki-color-background)"}},[o("code",null,[o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"<"),o("span",{style:{color:"var(--shiki-token-string-expression)"}},"template"),o("span",{style:{color:"var(--shiki-color-text)"}},">")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"  <"),o("span",{style:{color:"var(--shiki-token-string-expression)"}},"div"),o("span",{style:{color:"var(--shiki-color-text)"}}," "),o("span",{style:{color:"var(--shiki-token-function)"}},"class"),o("span",{style:{color:"var(--shiki-color-text)"}},"="),o("span",{style:{color:"var(--shiki-token-string-expression)"}},'"colored-bg pl-100"'),o("span",{style:{color:"var(--shiki-color-text)"}},">")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"    <"),o("span",{style:{color:"var(--shiki-token-constant)"}},"GSwitch"),o("span",{style:{color:"var(--shiki-color-text)"}}," "),o("span",{style:{color:"var(--shiki-token-function)"}},"style"),o("span",{style:{color:"var(--shiki-color-text)"}},"="),o("span",{style:{color:"var(--shiki-token-string-expression)"}},'"margin: 10px"'),o("span",{style:{color:"var(--shiki-color-text)"}}," />")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"    <"),o("span",{style:{color:"var(--shiki-token-constant)"}},"GSwitch"),o("span",{style:{color:"var(--shiki-color-text)"}}," "),o("span",{style:{color:"var(--shiki-token-function)"}},"style"),o("span",{style:{color:"var(--shiki-color-text)"}},"="),o("span",{style:{color:"var(--shiki-token-string-expression)"}},'"margin: 10px"'),o("span",{style:{color:"var(--shiki-color-text)"}}," "),o("span",{style:{color:"var(--shiki-token-keyword)"}},":"),o("span",{style:{color:"var(--shiki-token-function)"}},"defaultValue"),o("span",{style:{color:"var(--shiki-token-keyword)"}},"="),o("span",{style:{color:"var(--shiki-color-text)"}},'"'),o("span",{style:{color:"var(--shiki-token-constant)"}},"true"),o("span",{style:{color:"var(--shiki-color-text)"}},'"'),o("span",{style:{color:"var(--shiki-color-text)"}}," />")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"    <"),o("span",{style:{color:"var(--shiki-token-constant)"}},"GSwitch")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"      "),o("span",{style:{color:"var(--shiki-token-function)"}},"style"),o("span",{style:{color:"var(--shiki-color-text)"}},"="),o("span",{style:{color:"var(--shiki-token-string-expression)"}},'"margin: 10px"')]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"      "),o("span",{style:{color:"var(--shiki-token-function)"}},"v-model"),o("span",{style:{color:"var(--shiki-token-keyword)"}},"="),o("span",{style:{color:"var(--shiki-color-text)"}},'"'),o("span",{style:{color:"var(--shiki-color-text)"}},"switchValue"),o("span",{style:{color:"var(--shiki-color-text)"}},'"')]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"      "),o("span",{style:{color:"var(--shiki-token-function)"}},"on-text"),o("span",{style:{color:"var(--shiki-color-text)"}},"="),o("span",{style:{color:"var(--shiki-token-string-expression)"}},'"\u663E\u793A\u7EC6\u8282"')]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"      "),o("span",{style:{color:"var(--shiki-token-function)"}},"off-text"),o("span",{style:{color:"var(--shiki-color-text)"}},"="),o("span",{style:{color:"var(--shiki-token-string-expression)"}},'"\u9690\u85CF\u7EC6\u8282"')]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"    />")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"    <"),o("span",{style:{color:"var(--shiki-token-constant)"}},"GSwitch")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"      "),o("span",{style:{color:"var(--shiki-token-function)"}},"style"),o("span",{style:{color:"var(--shiki-color-text)"}},"="),o("span",{style:{color:"var(--shiki-token-string-expression)"}},'"margin: 10px"')]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"      "),o("span",{style:{color:"var(--shiki-token-function)"}},"v-model"),o("span",{style:{color:"var(--shiki-token-keyword)"}},"="),o("span",{style:{color:"var(--shiki-color-text)"}},'"'),o("span",{style:{color:"var(--shiki-color-text)"}},"switchValue"),o("span",{style:{color:"var(--shiki-color-text)"}},'"')]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"      "),o("span",{style:{color:"var(--shiki-token-function)"}},"on-text"),o("span",{style:{color:"var(--shiki-color-text)"}},"="),o("span",{style:{color:"var(--shiki-token-string-expression)"}},'"\u663E\u793A\u7EC6\u8282"')]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"      "),o("span",{style:{color:"var(--shiki-token-function)"}},"off-text"),o("span",{style:{color:"var(--shiki-color-text)"}},"="),o("span",{style:{color:"var(--shiki-token-string-expression)"}},'"\u9690\u85CF\u7EC6\u8282"')]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"      "),o("span",{style:{color:"var(--shiki-token-function)"}},"text-side"),o("span",{style:{color:"var(--shiki-color-text)"}},"="),o("span",{style:{color:"var(--shiki-token-string-expression)"}},'"right"')]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"    />")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"  </"),o("span",{style:{color:"var(--shiki-token-string-expression)"}},"div"),o("span",{style:{color:"var(--shiki-color-text)"}},">")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"</"),o("span",{style:{color:"var(--shiki-token-string-expression)"}},"template"),o("span",{style:{color:"var(--shiki-color-text)"}},">")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"<"),o("span",{style:{color:"var(--shiki-token-string-expression)"}},"script"),o("span",{style:{color:"var(--shiki-color-text)"}}," "),o("span",{style:{color:"var(--shiki-token-function)"}},"setup"),o("span",{style:{color:"var(--shiki-color-text)"}},">")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"  "),o("span",{style:{color:"var(--shiki-token-keyword)"}},"import"),o("span",{style:{color:"var(--shiki-color-text)"}}," { ref } "),o("span",{style:{color:"var(--shiki-token-keyword)"}},"from"),o("span",{style:{color:"var(--shiki-color-text)"}}," "),o("span",{style:{color:"var(--shiki-token-string-expression)"}},"'vue'")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"  "),o("span",{style:{color:"var(--shiki-token-keyword)"}},"const"),o("span",{style:{color:"var(--shiki-color-text)"}}," "),o("span",{style:{color:"var(--shiki-token-constant)"}},"switchValue"),o("span",{style:{color:"var(--shiki-color-text)"}}," "),o("span",{style:{color:"var(--shiki-token-keyword)"}},"="),o("span",{style:{color:"var(--shiki-color-text)"}}," "),o("span",{style:{color:"var(--shiki-token-function)"}},"ref"),o("span",{style:{color:"var(--shiki-color-text)"}},"("),o("span",{style:{color:"var(--shiki-token-constant)"}},"false"),o("span",{style:{color:"var(--shiki-color-text)"}},")")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"</"),o("span",{style:{color:"var(--shiki-token-string-expression)"}},"script"),o("span",{style:{color:"var(--shiki-color-text)"}},">")]),s(`
`),o("span",{class:"line"})])])],-1),D=o("h4",{id:"\u4E8B\u4EF6\u5904\u7406",tabindex:"-1"},[o("a",{class:"header-anchor",href:"#\u4E8B\u4EF6\u5904\u7406","aria-hidden":"true"},"#"),s(" \u4E8B\u4EF6\u5904\u7406")],-1),S=o("div",null,[o("code",null,"@change"),s("\u4E8B\u4EF6\u4F1A\u5728\u7EC4\u4EF6\u503C\u6539\u53D8\u65F6\u8C03\u7528\uFF0C"),o("code",null,"@click"),s("\u4E8B\u4EF6\u4F1A\u5728\u7EC4\u4EF6\u88AB\u70B9\u51FB\u65F6\u8C03\u7528\u3002"),o("code",null,"@click"),s("\u4E8B\u4EF6\u63D0\u4F9B\u4E00\u4E2A\u56DE\u8C03\u51FD\u6570\uFF0C\u901A\u8FC7\u8C03\u7528\u56DE\u8C03\u51FD\u6570\u6765\u66F4\u65B0\u7EC4\u4EF6\u503C\u3002\u5982\u679C\u56DE\u8C03\u51FD\u6570\u4F20\u5165\u7A7A\u503C\uFF0C\u7EC4\u4EF6\u4F1A\u5BF9\u5F53\u524D\u503C\u53D6\u53CD\u3002")],-1),G=o("div",{class:"language-vue"},[o("pre",{class:"shiki",style:{"background-color":"var(--shiki-color-background)"}},[o("code",null,[o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"<"),o("span",{style:{color:"var(--shiki-token-string-expression)"}},"template"),o("span",{style:{color:"var(--shiki-color-text)"}},">")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"  <"),o("span",{style:{color:"var(--shiki-token-string-expression)"}},"div"),o("span",{style:{color:"var(--shiki-color-text)"}}," "),o("span",{style:{color:"var(--shiki-token-function)"}},"class"),o("span",{style:{color:"var(--shiki-color-text)"}},"="),o("span",{style:{color:"var(--shiki-token-string-expression)"}},'"colored-bg pl-100"'),o("span",{style:{color:"var(--shiki-color-text)"}},">")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"    <"),o("span",{style:{color:"var(--shiki-token-constant)"}},"GSwitch")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"      "),o("span",{style:{color:"var(--shiki-token-function)"}},"style"),o("span",{style:{color:"var(--shiki-color-text)"}},"="),o("span",{style:{color:"var(--shiki-token-string-expression)"}},'"margin: 10px"')]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"      "),o("span",{style:{color:"var(--shiki-token-function)"}},"v-model"),o("span",{style:{color:"var(--shiki-token-keyword)"}},"="),o("span",{style:{color:"var(--shiki-color-text)"}},'"'),o("span",{style:{color:"var(--shiki-color-text)"}},"switchValue"),o("span",{style:{color:"var(--shiki-color-text)"}},'"')]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"      "),o("span",{style:{color:"var(--shiki-token-function)"}},"on-text"),o("span",{style:{color:"var(--shiki-color-text)"}},"="),o("span",{style:{color:"var(--shiki-token-string-expression)"}},'"\u663E\u793A\u7EC6\u8282"')]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"      "),o("span",{style:{color:"var(--shiki-token-function)"}},"off-text"),o("span",{style:{color:"var(--shiki-color-text)"}},"="),o("span",{style:{color:"var(--shiki-token-string-expression)"}},'"\u9690\u85CF\u7EC6\u8282"')]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"      "),o("span",{style:{color:"var(--shiki-token-keyword)"}},"@"),o("span",{style:{color:"var(--shiki-token-function)"}},"change"),o("span",{style:{color:"var(--shiki-token-keyword)"}},"="),o("span",{style:{color:"var(--shiki-color-text)"}},'"'),o("span",{style:{color:"var(--shiki-color-text)"}},"() "),o("span",{style:{color:"var(--shiki-token-keyword)"}},"=>"),o("span",{style:{color:"var(--shiki-color-text)"}}," "),o("span",{style:{color:"var(--shiki-token-constant)"}},"Message"),o("span",{style:{color:"var(--shiki-token-function)"}},".info"),o("span",{style:{color:"var(--shiki-color-text)"}},"("),o("span",{style:{color:"var(--shiki-token-string-expression)"}},"'change'"),o("span",{style:{color:"var(--shiki-color-text)"}},")"),o("span",{style:{color:"var(--shiki-color-text)"}},'"')]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"    />")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"    <"),o("span",{style:{color:"var(--shiki-token-constant)"}},"GSwitch")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"      "),o("span",{style:{color:"var(--shiki-token-function)"}},"style"),o("span",{style:{color:"var(--shiki-color-text)"}},"="),o("span",{style:{color:"var(--shiki-token-string-expression)"}},'"margin: 10px"')]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"      "),o("span",{style:{color:"var(--shiki-token-function)"}},"v-model"),o("span",{style:{color:"var(--shiki-token-keyword)"}},"="),o("span",{style:{color:"var(--shiki-color-text)"}},'"'),o("span",{style:{color:"var(--shiki-color-text)"}},"switchValue"),o("span",{style:{color:"var(--shiki-color-text)"}},'"')]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"      "),o("span",{style:{color:"var(--shiki-token-function)"}},"on-text"),o("span",{style:{color:"var(--shiki-color-text)"}},"="),o("span",{style:{color:"var(--shiki-token-string-expression)"}},'"\u663E\u793A\u7EC6\u8282"')]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"      "),o("span",{style:{color:"var(--shiki-token-function)"}},"off-text"),o("span",{style:{color:"var(--shiki-color-text)"}},"="),o("span",{style:{color:"var(--shiki-token-string-expression)"}},'"\u9690\u85CF\u7EC6\u8282"')]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"      "),o("span",{style:{color:"var(--shiki-token-function)"}},"text-side"),o("span",{style:{color:"var(--shiki-color-text)"}},"="),o("span",{style:{color:"var(--shiki-token-string-expression)"}},'"right"')]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"      "),o("span",{style:{color:"var(--shiki-token-keyword)"}},"@"),o("span",{style:{color:"var(--shiki-token-function)"}},"click"),o("span",{style:{color:"var(--shiki-token-keyword)"}},"="),o("span",{style:{color:"var(--shiki-color-text)"}},'"'),o("span",{style:{color:"var(--shiki-color-text)"}},"switchFallback"),o("span",{style:{color:"var(--shiki-color-text)"}},'"')]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"    />")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"  </"),o("span",{style:{color:"var(--shiki-token-string-expression)"}},"div"),o("span",{style:{color:"var(--shiki-color-text)"}},">")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"</"),o("span",{style:{color:"var(--shiki-token-string-expression)"}},"template"),o("span",{style:{color:"var(--shiki-color-text)"}},">")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"<"),o("span",{style:{color:"var(--shiki-token-string-expression)"}},"script"),o("span",{style:{color:"var(--shiki-color-text)"}}," "),o("span",{style:{color:"var(--shiki-token-function)"}},"setup"),o("span",{style:{color:"var(--shiki-color-text)"}},">")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"  "),o("span",{style:{color:"var(--shiki-token-keyword)"}},"import"),o("span",{style:{color:"var(--shiki-color-text)"}}," { ref } "),o("span",{style:{color:"var(--shiki-token-keyword)"}},"from"),o("span",{style:{color:"var(--shiki-color-text)"}}," "),o("span",{style:{color:"var(--shiki-token-string-expression)"}},"'vue'")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"  "),o("span",{style:{color:"var(--shiki-token-keyword)"}},"import"),o("span",{style:{color:"var(--shiki-color-text)"}}," { Message } "),o("span",{style:{color:"var(--shiki-token-keyword)"}},"from"),o("span",{style:{color:"var(--shiki-color-text)"}}," "),o("span",{style:{color:"var(--shiki-token-string-expression)"}},"'@shi-zhong/genshin-ui'")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"  "),o("span",{style:{color:"var(--shiki-token-keyword)"}},"const"),o("span",{style:{color:"var(--shiki-color-text)"}}," "),o("span",{style:{color:"var(--shiki-token-constant)"}},"switchValue"),o("span",{style:{color:"var(--shiki-color-text)"}}," "),o("span",{style:{color:"var(--shiki-token-keyword)"}},"="),o("span",{style:{color:"var(--shiki-color-text)"}}," "),o("span",{style:{color:"var(--shiki-token-function)"}},"ref"),o("span",{style:{color:"var(--shiki-color-text)"}},"("),o("span",{style:{color:"var(--shiki-token-constant)"}},"false"),o("span",{style:{color:"var(--shiki-color-text)"}},")")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"  "),o("span",{style:{color:"var(--shiki-token-keyword)"}},"const"),o("span",{style:{color:"var(--shiki-color-text)"}}," "),o("span",{style:{color:"var(--shiki-token-function)"}},"switchFallback"),o("span",{style:{color:"var(--shiki-color-text)"}}," "),o("span",{style:{color:"var(--shiki-token-keyword)"}},"="),o("span",{style:{color:"var(--shiki-color-text)"}}," (n"),o("span",{style:{color:"var(--shiki-token-punctuation)"}},","),o("span",{style:{color:"var(--shiki-color-text)"}}," f) "),o("span",{style:{color:"var(--shiki-token-keyword)"}},"=>"),o("span",{style:{color:"var(--shiki-color-text)"}}," {")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"    "),o("span",{style:{color:"var(--shiki-token-comment)"}},"// \u6A21\u62DF\u5F02\u6B65\u64CD\u4F5C")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"    "),o("span",{style:{color:"var(--shiki-token-keyword)"}},"new"),o("span",{style:{color:"var(--shiki-color-text)"}}," "),o("span",{style:{color:"var(--shiki-token-constant)"}},"Promise"),o("span",{style:{color:"var(--shiki-color-text)"}},"((r) "),o("span",{style:{color:"var(--shiki-token-keyword)"}},"=>"),o("span",{style:{color:"var(--shiki-color-text)"}}," {")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"      "),o("span",{style:{color:"var(--shiki-token-function)"}},"setTimeout"),o("span",{style:{color:"var(--shiki-color-text)"}},"(() "),o("span",{style:{color:"var(--shiki-token-keyword)"}},"=>"),o("span",{style:{color:"var(--shiki-color-text)"}}," {")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"        "),o("span",{style:{color:"var(--shiki-token-function)"}},"r"),o("span",{style:{color:"var(--shiki-color-text)"}},"("),o("span",{style:{color:"var(--shiki-token-keyword)"}},"void"),o("span",{style:{color:"var(--shiki-color-text)"}}," "),o("span",{style:{color:"var(--shiki-token-constant)"}},"0"),o("span",{style:{color:"var(--shiki-color-text)"}},")")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"      }"),o("span",{style:{color:"var(--shiki-token-punctuation)"}},","),o("span",{style:{color:"var(--shiki-color-text)"}}," "),o("span",{style:{color:"var(--shiki-token-constant)"}},"1000"),o("span",{style:{color:"var(--shiki-color-text)"}},")")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"    })"),o("span",{style:{color:"var(--shiki-token-function)"}},".then"),o("span",{style:{color:"var(--shiki-color-text)"}},"(() "),o("span",{style:{color:"var(--shiki-token-keyword)"}},"=>"),o("span",{style:{color:"var(--shiki-color-text)"}}," {")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"      "),o("span",{style:{color:"var(--shiki-token-function)"}},"f"),o("span",{style:{color:"var(--shiki-color-text)"}},"()")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"    })")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"  }")]),s(`
`),o("span",{class:"line"},[o("span",{style:{color:"var(--shiki-color-text)"}},"</"),o("span",{style:{color:"var(--shiki-token-string-expression)"}},"script"),o("span",{style:{color:"var(--shiki-color-text)"}},">")]),s(`
`),o("span",{class:"line"})])])],-1);function M(u,l,h,y,v,x){const i=k("render-demo-0"),p=k("demo"),r=k("render-demo-1"),t=k("Props"),e=k("Emits");return E(),F("div",null,[V,B,a(p,{customClass:"",sourceCode:`<template>
  <div class="colored-bg pl-100">
    <GSwitch style="margin: 10px" />
    <GSwitch style="margin: 10px" :defaultValue="true" />
    <GSwitch
      style="margin: 10px"
      v-model="switchValue"
      on-text="\u663E\u793A\u7EC6\u8282"
      off-text="\u9690\u85CF\u7EC6\u8282"
    />
    <GSwitch
      style="margin: 10px"
      v-model="switchValue"
      on-text="\u663E\u793A\u7EC6\u8282"
      off-text="\u9690\u85CF\u7EC6\u8282"
      text-side="right"
    />
  </div>
</template>
<script setup>
  import { ref } from 'vue'
  const switchValue = ref(false)
<\/script>
`},{description:c(()=>[b]),highlight:c(()=>[A]),default:c(()=>[a(i)]),_:1}),D,a(p,{customClass:"",sourceCode:`<template>
  <div class="colored-bg pl-100">
    <GSwitch
      style="margin: 10px"
      v-model="switchValue"
      on-text="\u663E\u793A\u7EC6\u8282"
      off-text="\u9690\u85CF\u7EC6\u8282"
      @change="() => Message.info('change')"
    />
    <GSwitch
      style="margin: 10px"
      v-model="switchValue"
      on-text="\u663E\u793A\u7EC6\u8282"
      off-text="\u9690\u85CF\u7EC6\u8282"
      text-side="right"
      @click="switchFallback"
    />
  </div>
</template>
<script setup>
  import { ref } from 'vue'
  import { Message } from '@shi-zhong/genshin-ui'
  const switchValue = ref(false)
  const switchFallback = (n, f) => {
    // \u6A21\u62DF\u5F02\u6B65\u64CD\u4F5C
    new Promise((r) => {
      setTimeout(() => {
        r(void 0)
      }, 1000)
    }).then(() => {
      f()
    })
  }
<\/script>
`},{description:c(()=>[S]),highlight:c(()=>[G]),default:c(()=>[a(r)]),_:1}),a(t,{type:"props",define:`
modelValue?: boolean // \u7ED1\u5B9A\u503C
onText?: string // \u6FC0\u6D3B\u6587\u5B57
offText?: string // \u975E\u6FC0\u6D3B\u6587\u5B57
textSide?: 'left' | 'right' // \u6587\u5B57\u9648\u5217\u65B9\u5411
disable?: boolean // \u662F\u5426\u7981\u7528
size?: number // \u5927\u5C0F
defaultValue?: boolean // \u9ED8\u8BA4\u503C
`,defaults:{textSide:"left",size:20,disable:!1,defaultValue:!1}}),a(e,{define:`
click  @ \u70B9\u51FB\u7EC4\u4EF6\u89E6\u53D1 @ (n: boolean) => void
change @ \u72B6\u6001\u66F4\u65B0\u89E6\u53D1 @ (n: boolean, switchValue: (n?: boolean) => void): void 
`})])}const z=C(_,[["render",M],["__file","Switch.html.vue"]]);export{z as default};
