"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[6494],{1242:function(s,n,a){a.r(n),a.d(n,{data:function(){return e}});const e={key:"v-552c4eb7",path:"/guide/ui/style.html",title:"样式",lang:"en-US",frontmatter:{},excerpt:"",headers:[{level:2,title:"预处理器",slug:"预处理器",children:[]},{level:2,title:"全局样式",slug:"全局样式",children:[]},{level:2,title:"体验优化",slug:"体验优化",children:[]},{level:2,title:"移动端 vh",slug:"移动端-vh",children:[]}],filePathRelative:"guide/ui/style.md",git:{updatedTime:1630568774e3,contributors:[{name:"李旭",email:"461229187@qq.com",commits:1}]}}},6141:function(s,n,a){a.r(n),a.d(n,{default:function(){return M}});var e=a(6252);const l=(0,e._)("h1",{id:"样式",tabindex:"-1"},[(0,e._)("a",{class:"header-anchor",href:"#样式","aria-hidden":"true"},"#"),(0,e.Uk)(" 样式")],-1),t=(0,e._)("h2",{id:"预处理器",tabindex:"-1"},[(0,e._)("a",{class:"header-anchor",href:"#预处理器","aria-hidden":"true"},"#"),(0,e.Uk)(" 预处理器")],-1),r=(0,e.Uk)("默认使用 Scss 作为样式开发的样式语言，查看"),i={href:"https://www.html.cn/doc/sass/",target:"_blank",rel:"noopener noreferrer"},c=(0,e.Uk)("Scss文档"),p=(0,e.Uk)("。"),o=(0,e.uE)('<blockquote><p>Sass 是一个 CSS 的扩展，它在 CSS 语法的基础上，允许您使用变量 (variables), 嵌套规则 (nested rules), 混合 (mixins), 导入 (inline imports) 等功能，令 CSS 更加强大与优雅。使用 Sass 以及 Compass 样式库 有助于更好地组织管理样式文件，以及更高效地开发项目。</p></blockquote><h2 id="全局样式" tabindex="-1"><a class="header-anchor" href="#全局样式" aria-hidden="true">#</a> 全局样式</h2><p>全局样式 目录：<code>@/styles</code></p><ul><li>global.scss: 全局样式</li><li>mixins.scss: 全局 Mixins 管理</li><li>variable.scss: 全局变量管理</li></ul><h2 id="体验优化" tabindex="-1"><a class="header-anchor" href="#体验优化" aria-hidden="true">#</a> 体验优化</h2>',5),u=(0,e.Uk)("使用 "),h={href:"https://github.com/rstacruz/nprogress",target:"_blank",rel:"noopener noreferrer"},d=(0,e.Uk)("nprogress@0.2.0"),k=(0,e.Uk)(" 美化页面载入"),b=(0,e._)("strong",null,"进度条",-1),g=(0,e.Uk)("。"),v=(0,e._)("li",null,[(0,e.Uk)("在 "),(0,e._)("code",null,"global.scss"),(0,e.Uk)(" 中"),(0,e._)("strong",null,"美化滚动条"),(0,e.Uk)("，使 Mac os 与 Windows 效果保持一致。")],-1),m=(0,e._)("li",null,"静态资源加载页面（减少白屏等待时间）。",-1),_=(0,e._)("h2",{id:"移动端-vh",tabindex:"-1"},[(0,e._)("a",{class:"header-anchor",href:"#移动端-vh","aria-hidden":"true"},"#"),(0,e.Uk)(" 移动端 vh")],-1),f=(0,e._)("p",null,"在发现在移动端的 Chrome、safari 浏览器中，因为浏览器栏和一些导航栏、链接栏导致不一样的呈现。",-1),U=(0,e._)("p",null,"我们选择使用 vh-check 解决这个问题：",-1),x=(0,e._)("p",null,[(0,e.Uk)("在 "),(0,e._)("code",null,"main.js"),(0,e.Uk)(" 引入 "),(0,e._)("code",null,"@/styles/vh-check.js"),(0,e.Uk)(";")],-1),S=(0,e.Uk)("在需要设置高度的时候使用 Mixins 提供的 "),w={href:"/Css/Mixins",target:"_blank",rel:"noopener noreferrer"},y=(0,e.Uk)("@include vh"),C=(0,e.Uk)("。"),q=(0,e.uE)('<div class="language-scss ext-scss"><pre class="language-scss"><code><span class="token keyword">@include</span> vh<span class="token punctuation">;</span>\n</code></pre></div><p>或者你也可以在 SCSS 中直接使用：</p><div class="language-scss ext-scss line-numbers-mode"><pre class="language-scss"><code><span class="token property"><span class="token variable">$height</span></span><span class="token punctuation">:</span> 100vh<span class="token punctuation">;</span>\n<span class="token property">height</span><span class="token punctuation">:</span> <span class="token variable">$height</span><span class="token punctuation">;</span>\n<span class="token property">height</span><span class="token punctuation">:</span> <span class="token function">calc</span><span class="token punctuation">(</span><span class="token variable">#{$height}</span> <span class="token operator">-</span> <span class="token function">var</span><span class="token punctuation">(</span>--browser-address-bar<span class="token punctuation">,</span> 0px<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div>',3);var M={render:function(s,n){const a=(0,e.up)("OutboundLink");return(0,e.wg)(),(0,e.iD)(e.HY,null,[l,t,(0,e._)("p",null,[r,(0,e._)("a",i,[c,(0,e.Wm)(a)]),p]),o,(0,e._)("ul",null,[(0,e._)("li",null,[u,(0,e._)("a",h,[d,(0,e.Wm)(a)]),k,b,g]),v,m]),_,f,U,x,(0,e._)("p",null,[S,(0,e._)("a",w,[y,(0,e.Wm)(a)]),C]),q],64)}}}}]);