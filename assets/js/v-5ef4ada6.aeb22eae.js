"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[20],{12:function(n,e,s){s.r(e),s.d(e,{data:function(){return a}});const a={key:"v-5ef4ada6",path:"/guide/core/hooks.html",title:"Hooks",lang:"en-US",frontmatter:{},excerpt:"",headers:[{level:2,title:"内置 Hooks",slug:"内置-hooks",children:[{level:3,title:"State",slug:"state",children:[]}]},{level:2,title:"使用",slug:"使用",children:[]},{level:2,title:"对象用法",slug:"对象用法",children:[]},{level:2,title:"其他",slug:"其他",children:[]}],filePathRelative:"guide/core/hooks.md",git:{updatedTime:1631683438e3,contributors:[{name:"李旭",email:"461229187@qq.com",commits:1}]}}},1280:function(n,e,s){s.r(e),s.d(e,{default:function(){return S}});var a=s(6252);const t=(0,a._)("h1",{id:"hooks",tabindex:"-1"},[(0,a._)("a",{class:"header-anchor",href:"#hooks","aria-hidden":"true"},"#"),(0,a.Uk)(" Hooks")],-1),l=(0,a._)("p",null,"Hooks 是一个基于 Composition API 的实用函数集合，使用 typescript 开发，有着良好的代码提示体验。",-1),o=(0,a.Uk)("在开始之前，我们假设您已经熟悉 "),p={href:"https://v3.cn.vuejs.org/guide/composition-api-introduction.html",target:"_blank",rel:"noopener noreferrer"},r=(0,a.Uk)("Vue 3 Composition API"),u=(0,a.Uk)(" 的基本思想。如果你掌握 React 及 React Hooks 基础用法。那么这对你来说是十分友好的。"),c=(0,a._)("h2",{id:"内置-hooks",tabindex:"-1"},[(0,a._)("a",{class:"header-anchor",href:"#内置-hooks","aria-hidden":"true"},"#"),(0,a.Uk)(" 内置 Hooks")],-1),i=(0,a._)("h3",{id:"state",tabindex:"-1"},[(0,a._)("a",{class:"header-anchor",href:"#state","aria-hidden":"true"},"#"),(0,a.Uk)(" State")],-1),d=(0,a._)("thead",null,[(0,a._)("tr",null,[(0,a._)("th",null,"Hook"),(0,a._)("th",null,"说明"),(0,a._)("th",null,"API")])],-1),k=(0,a._)("td",null,"useDevice",-1),h=(0,a._)("td",null,"查询设备信息，可用于PC、移动等适配",-1),_={href:"/docs/hooks/state/useDevice.md",target:"_blank",rel:"noopener noreferrer"},b=(0,a.Uk)("详情"),m=(0,a._)("td",null,"useClipboard",-1),v=(0,a._)("td",null,"快捷文本复制功能",-1),f={href:"/docs/hooks/ui/useClipboard.md",target:"_blank",rel:"noopener noreferrer"},g=(0,a.Uk)("详情"),y=(0,a._)("td",null,"useFullscreen",-1),U=(0,a._)("td",null,"浏览器全屏的开关控制",-1),w={href:"/docs/hooks/ui/useFullscreen.md",target:"_blank",rel:"noopener noreferrer"},x=(0,a.Uk)("详情"),H=(0,a.uE)('<h2 id="使用" tabindex="-1"><a class="header-anchor" href="#使用" aria-hidden="true">#</a> 使用</h2><p>Hooks 中的大多数函数都返回一个 refs 对象或函数，你可以使用 ES6 的解构语法来获取你需要的内容。</p><p>你只需要在 <code>@/hooks</code> 中引入它即可：</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">import</span> useDevice <span class="token keyword">from</span> <span class="token string">&#39;@/hooks/useDevice&#39;</span><span class="token punctuation">;</span>\n\n<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>\n  <span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">const</span> <span class="token punctuation">{</span> deviceType<span class="token punctuation">,</span> deviceOrientation<span class="token punctuation">,</span> deviceOs <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">useDevice</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n    <span class="token keyword">return</span> <span class="token punctuation">{</span> deviceType<span class="token punctuation">,</span> deviceOrientation<span class="token punctuation">,</span> deviceOs <span class="token punctuation">}</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><h2 id="对象用法" tabindex="-1"><a class="header-anchor" href="#对象用法" aria-hidden="true">#</a> 对象用法</h2><p>如果您更喜欢将它们用作对象属性样式，则可以使用reactive(). 例如：</p><div class="language-typescript ext-ts"><pre class="language-typescript"><code><span class="token keyword">const</span> device <span class="token operator">=</span> <span class="token function">reactive</span><span class="token punctuation">(</span><span class="token function">useDevice</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>\n</code></pre></div><h2 id="其他" tabindex="-1"><a class="header-anchor" href="#其他" aria-hidden="true">#</a> 其他</h2>',8),C=(0,a.Uk)("推荐使用 "),D={href:"https://github.com/vueuse/vueuse",target:"_blank",rel:"noopener noreferrer"},O=(0,a.Uk)("vueuse"),P=(0,a.Uk)("："),W=(0,a._)("ul",null,[(0,a._)("li",null,"交互式文档和演示"),(0,a._)("li",null,"无缝迁移，支持 Vue 2 与 Vue 3"),(0,a._)("li",null,"tree shakable"),(0,a._)("li",null,"使用 Typescript 编写")],-1);var S={render:function(n,e){const s=(0,a.up)("OutboundLink");return(0,a.wg)(),(0,a.iD)(a.HY,null,[t,l,(0,a._)("blockquote",null,[(0,a._)("p",null,[o,(0,a._)("a",p,[r,(0,a.Wm)(s)]),u])]),c,i,(0,a._)("table",null,[d,(0,a._)("tbody",null,[(0,a._)("tr",null,[k,h,(0,a._)("td",null,[(0,a._)("a",_,[b,(0,a.Wm)(s)])])]),(0,a._)("tr",null,[m,v,(0,a._)("td",null,[(0,a._)("a",f,[g,(0,a.Wm)(s)])])]),(0,a._)("tr",null,[y,U,(0,a._)("td",null,[(0,a._)("a",w,[x,(0,a.Wm)(s)])])])])]),H,(0,a._)("p",null,[C,(0,a._)("a",D,[O,(0,a.Wm)(s)]),P]),W],64)}}}}]);