(this["webpackJsonpreact-class"]=this["webpackJsonpreact-class"]||[]).push([[0],{69:function(e,t,n){"use strict";n.r(t);var c=n(0),i=n.n(c),r=n(26),o=n.n(r),s=n(14),a=n(7),l=n(17),d=n(8);const j="https://api.coinpaprika.com/v1";function h(){return fetch(`${j}/coins`).then((e=>e.json()))}var b=n(2);var p=function(e){let{coinId:t}=e;const{isLoading:n,data:c}=Object(s.useQuery)(["ohlcv",t],(()=>function(e){return fetch(`https://ohlcv-api.nomadcoders.workers.dev?coinId=${e}`).then((e=>e.json()))}(t)),{refetchInterval:1e4});return Object(b.jsx)(b.Fragment,{})};var x=function(){return Object(b.jsx)("h1",{children:"Price"})},u=n(40);const m=a.c.h1`
  font-size: 48px;
  color: ${e=>e.theme.accentColor};
`,g=a.c.span`
  text-align: center;
  display: block;
`,O=a.c.div`
  padding: 0px 20px;
  max-width: 480px;
  margin: 0 auto;
`,f=a.c.header`
  height: 15vh;
  display: flex;
  justify-content: center;
  align-items: center;
`,v=a.c.div`
  display: flex;
  justify-content: space-between;
  background-color: rgba(0, 0, 0, 0.5);
  padding: 10px 20px;
  border-radius: 10px;
`,y=a.c.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  span:first-child {
    font-size: 10px;
    font-weight: 400;
    text-transform: uppercase;
    margin-bottom: 5px;
  }
`,k=a.c.p`
  margin: 20px 0px;
`,$=a.c.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  margin: 25px 0px;
  gap: 10px;
`,w=a.c.span`
  text-align: center;
  text-transform: uppercase;
  font-size: 12px;
  font-weight: 400;
  background-color: rgba(0, 0, 0, 0.5);
  padding: 7px 0px;
  border-radius: 10px;
  color: ${e=>e.isActive?e.theme.accentColor:e.theme.textColor};
  a {
    display: block;
  }
`;var C=function(){const{coinId:e}=Object(d.g)(),{state:t}=Object(d.f)(),n=Object(d.h)("/:coinId/price"),c=Object(d.h)("/:coinId/chart"),{isLoading:i,data:r}=Object(s.useQuery)(["info",e],(()=>function(e){return fetch(`${j}/tickers/${e}`).then((e=>e.json()))}(e))),{isLoading:o,data:a}=Object(s.useQuery)(["tickers",e],(()=>function(e){return fetch(`${j}/coins/${e}`).then((e=>e.json()))}(e)),{refetchInterval:5e3}),h=i||o;return console.log("dd",r),Object(b.jsxs)(O,{children:[Object(b.jsx)(u.a,{children:Object(b.jsx)("title",{children:null!==t&&void 0!==t&&t.name?t.name:h?"Loading...":null===r||void 0===r?void 0:r.name})}),Object(b.jsx)(f,{children:Object(b.jsx)(m,{children:null!==t&&void 0!==t&&t.name?t.name:h?"Loading...":null===r||void 0===r?void 0:r.name})}),h?Object(b.jsx)(g,{children:"Loading..."}):Object(b.jsxs)(b.Fragment,{children:[Object(b.jsxs)(v,{children:[Object(b.jsxs)(y,{children:[Object(b.jsx)("span",{children:"Rank:"}),Object(b.jsx)("span",{children:null===r||void 0===r?void 0:r.rank})]}),Object(b.jsxs)(y,{children:[Object(b.jsx)("span",{children:"Symbol:"}),Object(b.jsxs)("span",{children:["$",null===r||void 0===r?void 0:r.symbol]})]}),Object(b.jsxs)(y,{children:[Object(b.jsx)("span",{children:"Open Source:"}),Object(b.jsx)("span",{children:null!==r&&void 0!==r&&r.open_source?"Yes":"No"})]})]}),Object(b.jsx)(k,{children:null===r||void 0===r?void 0:r.description}),Object(b.jsxs)(v,{children:[Object(b.jsxs)(y,{children:[Object(b.jsx)("span",{children:"Total Suply:"}),Object(b.jsx)("span",{children:null===a||void 0===a?void 0:a.total_supply})]}),Object(b.jsxs)(y,{children:[Object(b.jsx)("span",{children:"Max Supply:"}),Object(b.jsx)("span",{children:null===a||void 0===a?void 0:a.max_supply})]})]}),Object(b.jsxs)($,{children:[Object(b.jsx)(w,{isActive:null!==c,children:Object(b.jsx)(l.b,{to:`/${e}/chart`,children:"Chart"})}),Object(b.jsx)(w,{isActive:null!==n,children:Object(b.jsx)(l.b,{to:`/${e}/price`,children:"Price"})})]}),Object(b.jsxs)(d.c,{children:[Object(b.jsx)(d.a,{path:"/:coinId/price",children:Object(b.jsx)(x,{})}),Object(b.jsx)(d.a,{path:"/:coinId/chart",children:Object(b.jsx)(p,{coinId:e})})]})]})]})};const I=a.c.div`
  padding: 0px 20px;
  max-width: 480px;
  margin: 0 auto;
`,L=a.c.header`
  height: 15vh;
  display: flex;
  justify-content: center;
  align-items: center;
`,q=a.c.h1`
  font-size: 48px;
  color: ${e=>e.theme.accentColor};
`,S=a.c.ul``,Q=a.c.li`
  background-color: white;
  color: ${e=>e.theme.bgColor};
  border-radius: 15px;
  margin-bottom: 10px;
  a {
    display: flex;
    align-items: center;
    padding: 20px;
    transition: color 0.2s ease-in;
  }
  &:hover {
    a {
      color: ${e=>e.theme.accentColor};
    }
  }
`,z=a.c.span`
  text-align: center;
  display: block;
`,P=a.c.img`
  width: 35px;
  height: 35px;
  margin-right: 10px;
`;var M=function(){const{isLoading:e,data:t}=Object(s.useQuery)("allcoins",h);return Object(b.jsxs)(I,{children:[Object(b.jsx)(L,{children:Object(b.jsx)(q,{children:"\ucf54\uc778"})}),e?Object(b.jsx)(z,{children:"Loading..."}):Object(b.jsx)(S,{children:null===t||void 0===t?void 0:t.slice(0,51).map((e=>Object(b.jsx)(Q,{children:Object(b.jsxs)(l.b,{to:{pathname:`/${e.id}`,state:{name:e.name}},children:[Object(b.jsx)(P,{src:`https://cryptoicon-api.vercel.app/api/icon/${e.symbol.toLowerCase()}`}),e.name," \u2192"]})},e.id)))})]})};var A=function(){return Object(b.jsx)(l.a,{children:Object(b.jsxs)(d.c,{children:[Object(b.jsx)(d.a,{path:"/:coinId",children:Object(b.jsx)(C,{})}),Object(b.jsx)(d.a,{path:"/",children:Object(b.jsx)(M,{})})]})})},F=n(46);const T=a.b`
@import url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@300;400&display=swap');
html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, menu, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed,
figure, figcaption, footer, header, hgroup,
main, menu, nav, output, ruby, section, summary,
time, mark, audio, video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure,
footer, header, hgroup, main, menu, nav, section {
  display: block;
}
/* HTML5 hidden-attribute fix for newer browsers */
*[hidden] {
    display: none;
}
body {
  line-height: 1;
}
menu, ol, ul {
  list-style: none;
}
blockquote, q {
  quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
  content: '';
  content: none;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}
* {
  box-sizing: border-box;
}
body {
  font-family: 'Source Sans Pro', sans-serif;
  background-color:${e=>e.theme.bgColor};
  color:${e=>e.theme.textColor}
}
a {
  text-decoration:none;
  color: inherit;
}
`;var _=function(){return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(T,{}),Object(b.jsx)(A,{}),";",Object(b.jsx)(F.ReactQueryDevtools,{initialIsOpen:!1})]})};const H={bgColor:"#2f3640",textColor:"#f5f6fa",accentColor:"#4cd137"};const J=new s.QueryClient;o.a.render(Object(b.jsx)(i.a.StrictMode,{children:Object(b.jsx)(s.QueryClientProvider,{client:J,children:Object(b.jsx)(a.a,{theme:H,children:Object(b.jsx)(_,{})})})}),document.getElementById("root"))}},[[69,1,2]]]);
//# sourceMappingURL=main.3b99dd22.chunk.js.map