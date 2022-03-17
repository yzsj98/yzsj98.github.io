"use strict";history.scrollRestoration="auto";document.head.insertAdjacentHTML("beforeend",'<meta name="viewport" content="width=device-width"><meta name="theme-color" content="#3f51b5"><link rel="icon" href=\'data:\'><style>*{max-height:100%;margin:0}html{font-family:sans-serif;line-height:1.8;overflow-wrap:break-word;background:#f8f9fa;-webkit-tap-highlight-color:#0000}a{color:#3f51b5;text-decoration:none}main{width:100%;min-height:100vh;margin:50px 0 0}main>*{padding:20px;margin-top:1px;background:#fff;box-shadow:0 1px #ddd}@media(min-width:750px){main{width:700px;margin:75px auto 25px}main>*{margin-top:20px;border-radius:8px;box-shadow:0 1px 4px #aaa}}main h1{padding-bottom:7px;margin:-9px 0 13px;font-weight:400;box-shadow:0 1px #ddd}section>*{margin-top:3px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}section h3{margin:-8px 0 5px;font-weight:400}section div{margin:9px 0 -2px}section div a,section>a,section span{padding:2px 7px;margin:5px 9px -4px 0;font-size:13px;border:1px solid #ccc;border-radius:4px}section>a{display:inline-block}nav{padding:0;font-size:14px;line-height:3;text-align:center}nav a{padding:1em 6%}header{position:fixed;top:0;width:100%;background:#3f51b5;box-shadow:0 0 5px #aaa;transition:.2s}header.hidden{transform:translateY(-55px)}header>*{float:left;height:28px;padding:11px;fill:#fff}header a+*{float:right}header img{width:24px;margin:-6px;/*border:2px solid #fff;border-radius:50%;*/}footer,footer a{font-size:13px;line-height:3;color:#ddd;text-align:center;background:#3f51b5}aside{position:fixed;top:0;width:100%;height:100%;background:#0008;transition:.3s}aside.hidden{visibility:hidden;background:#0000}aside div{width:70%;max-width:230px;height:100%;padding-top:50px;overflow:auto;background:#fff;transition:.3s}aside.hidden div{transform:translateX(-100%)}aside a{display:block;padding-left:15%;line-height:4;color:#333}spin-circle{position:fixed;opacity:0}.loading spin-circle{top:50%;left:50%;padding:17px;margin:-20px;border:3px solid #3f51b5;border-top-color:#0000;border-radius:50%;opacity:1;transition:opacity .3s .1s,transform 5s linear;transform:rotate(3600deg)}.loading main,.loading footer{filter:opacity(.2);transition:.3s}@keyframes loaded{0%{filter:opacity(.1);transform:translateY(9px)}}.loaded main,.loaded footer{transition:none;animation:.2s ease-out loaded}article>*,article details>*,article p{margin-top:9px}article h2,article h3{margin-top:13px;font-weight:400}article h2{font-size:21px}article a{color:#0366d6}article summary{padding-left:3px}article blockquote{padding-left:13px;border-left:3px solid #ddd}article code{padding:2px 5px;font-size:14px;background:#f4f4f4;border-radius:4px}article pre code{display:block;padding:16px;overflow:auto;line-height:1.3}article ol,article ul{padding-left:22px}article table{display:block;overflow:auto;border-collapse:collapse}article tr:nth-child(2n){background:#f8f9fa}article tr>*{padding:5px 13px;font-weight:400;border:1px solid #ddd}article img{max-width:100%;height:auto;}article img:not(.no-border){filter:drop-shadow(0 0 2px #ccc);border-radius:4px}</style>'),document.addEventListener("DOMContentLoaded",()=>{document.body.insertAdjacentHTML("beforeend",'<header><svg viewBox="-6 0 12 12" onclick="document.body.children[4].className=\'\'"><circle r="1" cy="3"/><circle r="1" cy="6"/><circle r="1" cy="9"/></svg><a href="/."><img src=\'data:image/svg+xml,<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5.0333 14.8284L6.44751 16.2426L10.6902 12L6.44751 7.75733L5.0333 9.17155L7.86172 12L5.0333 14.8284Z" fill="%23fff" /><path d="M15 14H11V16H15V14Z" fill="%23fff" /><path fill-rule="evenodd" clip-rule="evenodd" d="M2 2C0.895431 2 0 2.89543 0 4V20C0 21.1046 0.89543 22 2 22H22C23.1046 22 24 21.1046 24 20V4C24 2.89543 23.1046 2 22 2H2ZM22 4H2L2 20H22V4Z" fill="%23fff" /></svg>\'></a><svg viewBox="0 0 48 48" onclick="self.scroll({top:0,behavior:\'smooth\'})"><path d="M22 15.7V40h4V15.7l11.2 11.1L40 24 24 8 8 24l2.8 2.8z"/></svg></header><footer><a href="/./about#license">BY-NC-SA</a>&emsp;-&emsp;<a href="/feed.xml">RSS</a></footer><spin-circle></spin-circle><aside class="hidden" onclick="className=\'hidden\'"><div><a href="/.">主页</a><a href="/./archive">归档</a><a href="/./tag">标签</a><a href="/./about">关于</a></div></aside>');let[e,i]=document.body.children,a={},t=0,o=function(e){e.ctrlKey||(e.preventDefault(),history.pushState(null,null,this.href),onpopstate())},d=()=>{(document.getElementById(location.hash.slice(1))||i).scrollIntoView(),document.querySelectorAll('a[href^="/."]').forEach(e=>e.onclick=o)};onscroll=()=>{i.className=t<(a[location]=t=scrollY)&&t>55?"hidden":""},onpopstate=i=>{document.body.className="loading",history.scrollRestoration="manual",fetch(location).then(e=>e.text()).then(t=>{[,document.title,,e.innerHTML]=t.split(/<\/?title>|<\/?main>/),scroll(0,i&&a[location]||0),d(),document.body.className="loaded",setTimeout(()=>document.body.className="",250)})},d()});