import{u as r,B as l,a as k}from"./chunks/Loading2.BhAC0fYx.js";import{d as p,o,c as E,J as t,w as i,a,p as s,a2 as e}from"./chunks/framework.Dlm6y-dj.js";const c=e('<h1 id="介绍" tabindex="-1">介绍 <a class="header-anchor" href="#介绍" aria-label="Permalink to &quot;介绍&quot;">​</a></h1><p>对 <a href="https://3x.antdv.com/components/drawer-cn" target="_blank" rel="noreferrer">Antdv 3.x</a>的 drawer 组件进行封装，扩展拖拽，全屏，自适应高度等功能。</p><h2 id="使用" tabindex="-1">使用 <a class="header-anchor" href="#使用" aria-label="Permalink to &quot;使用&quot;">​</a></h2>',3),g=e(`<div class="language-vue vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">template</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">BasicDrawer</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> @</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">register</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">register</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> title</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Drawer Title&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> width</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;50%&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> showFooter</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    Drawer Info.</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  &lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">BasicDrawer</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">Button</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> @</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">click</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">openModal</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;展开&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">Button</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">template</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">script</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> lang</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;ts&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> setup</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { BasicDrawer, useDrawerInner, useDrawer } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;lanvenUi&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { Button } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;ant-design-vue&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  const</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">register</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, { </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">openDrawer</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> }] </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> useDrawer</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  function</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> openModal</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">() {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    openDrawer</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">script</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div><h2 id="methods" tabindex="-1">methods <a class="header-anchor" href="#methods" aria-label="Permalink to &quot;methods&quot;">​</a></h2><table><thead><tr><th>方法名称</th><th>示例</th><th>参数</th><th>说明</th></tr></thead><tbody><tr><td>useDrawer</td><td><code>const [register, drawerMethods] = useDrawer()</code></td><td><code>DrawerProps</code></td><td>创建 Drawer 实例方法</td></tr><tr><td>register</td><td>-</td><td>-</td><td>绑定实例</td></tr><tr><td>openDrawer</td><td><code>openDrawer(true, data);</code></td><td><code>boolean,any</code></td><td>打开或者关闭弹窗</td></tr><tr><td>closeDrawer</td><td><code>closeDrawer()</code></td><td>-</td><td>关闭弹窗</td></tr><tr><td>setDrawerProps</td><td><code>setDrawerProps(props);</code></td><td><code>props</code></td><td>设置 modalProps</td></tr><tr><td>useDrawerInner</td><td><code>const [register, { closeModal, setModalProps }] = useDrawerInner(callback);</code></td><td><code>callBack</code></td><td>组件内部使用</td></tr><tr><td>changeOkLoading</td><td><code>changeOkLoading(true);</code></td><td><code>boolean</code></td><td>用于修改确认按钮的 loading 状态只支持 useDrawerInner</td></tr><tr><td>changeLoading</td><td><code>changeLoading(true);</code></td><td><code>boolean</code></td><td>用于修改 modal 的 loading 状态只支持 useDrawerInner</td></tr></tbody></table><h2 id="props" tabindex="-1">props <a class="header-anchor" href="#props" aria-label="Permalink to &quot;props&quot;">​</a></h2><table><thead><tr><th>属性</th><th>类型</th><th>默认值</th><th>说明</th></tr></thead><tbody><tr><td>isDetail</td><td><code>boolean</code></td><td><code>false</code></td><td>是否为详情模式</td></tr><tr><td>loading</td><td><code>boolean</code></td><td><code>false</code></td><td>loading 状态</td></tr><tr><td>loadingText</td><td><code>string</code></td><td></td><td>loading 文本</td></tr><tr><td>showDetailBack</td><td><code>boolean</code></td><td><code>true</code></td><td>isDetail=true 状态下是否显示返回按钮</td></tr><tr><td>closeFunc</td><td><code>() =&gt; Promise&lt;boolean&gt; -</code></td><td>-</td><td>自定义关闭函数，返回 true 关闭</td></tr><tr><td>showFooter</td><td><code>boolean</code></td><td><code>false</code></td><td>是否显示底部</td></tr><tr><td>footerHeight</td><td><code>number</code></td><td><code>60</code></td><td>底部区域高度</td></tr></tbody></table><h2 id="events" tabindex="-1">Events <a class="header-anchor" href="#events" aria-label="Permalink to &quot;Events&quot;">​</a></h2><table><thead><tr><th>事件</th><th>回调参数</th><th>说明</th></tr></thead><tbody><tr><td>close</td><td>(e)=&gt;void</td><td>点击关闭回调</td></tr><tr><td>visible-change</td><td>(visible:boolean)=&gt;void</td><td>弹窗打开关闭时触发</td></tr><tr><td>ok</td><td>(e)=&gt;void</td><td>点击确定回调</td></tr></tbody></table>`,7),B=JSON.parse('{"title":"介绍","description":"","frontmatter":{},"headers":[],"relativePath":"Basic/Drawer.md","filePath":"Basic/Drawer.md"}'),y={name:"Basic/Drawer.md"},m=p({...y,setup(u){const[d,{openDrawer:n}]=r();function h(){n()}return(F,D)=>(o(),E("div",null,[c,t(s(l),{onRegister:s(d),title:"Drawer Title",width:"50%",showFooter:""},{default:i(()=>[a(" Drawer Info. ")]),_:1},8,["onRegister"]),t(s(k),{onClick:h},{default:i(()=>[a("展开")]),_:1}),g]))}});export{B as __pageData,m as default};
