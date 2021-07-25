(this["webpackJsonpcontext-with-reducer"]=this["webpackJsonpcontext-with-reducer"]||[]).push([[0],{1564:function(e,t,c){},1573:function(e,t,c){"use strict";c.r(t);var n=c(1),a=c.n(n),r=c(23),i=c.n(r),s=(c(74),c(68)),j=c(20),o=c(1583),l=c(1578),d=c(65),b=c(1585),u=c(1582),O=c(1579),h=c(67),p=c(27),x=c(9),y=c(34),m=c(19),f=c(22),g=c.n(f),R=c(8),v=function(e,t){switch(t.type){case"ADD_TO_CART":return Object(R.a)(Object(R.a)({},e),{},{cart:[].concat(Object(m.a)(e.cart),[Object(R.a)(Object(R.a)({},t.payload),{},{qty:1})])});case"REMOVE_FROM_CART":return Object(R.a)(Object(R.a)({},e),{},{cart:e.cart.filter((function(e){return e.id!==t.payload.id}))});case"CHANGE_CART_QTY":return Object(R.a)(Object(R.a)({},e),{},{cart:e.cart.map((function(e){return e.id===t.payload.id?Object(R.a)(Object(R.a)({},e),{},{qty:t.payload.qty}):e}))});default:return e}},C=function(e,t){switch(t.type){case"SORT_BY_PRICE":return Object(R.a)(Object(R.a)({},e),{},{sort:t.payload});case"FILTER_BY_STOCK":return Object(R.a)(Object(R.a)({},e),{},{byStock:!e.byStock});case"FILTER_BY_DELIVERY":return Object(R.a)(Object(R.a)({},e),{},{byFastDelivery:!e.byFastDelivery});case"FILTER_BY_RATING":return Object(R.a)(Object(R.a)({},e),{},{byRating:t.payload});case"FILTER_BY_SEARCH":return Object(R.a)(Object(R.a)({},e),{},{searchQuery:t.payload});case"RATING_HOVER":return Object(R.a)(Object(R.a)({},e),{},{ratingHover:t.payload});case"CLEAR_FILTERS":return{byStock:!1,byFastDelivery:!1,byRating:0};default:return e}},_=c(3),T=Object(n.createContext)();g.a.seed(99);var S=function(){return Object(n.useContext)(T)},E=function(e){var t=e.children,c=Object(m.a)(Array(20)).map((function(){return{id:g.a.datatype.uuid(),name:g.a.commerce.productName(),price:g.a.commerce.price(),image:g.a.random.image(),inStock:g.a.random.arrayElement([0,3,5,6,7]),fastDelivery:g.a.datatype.boolean(),ratings:g.a.random.arrayElement([1,2,3,4,5])}})),a=Object(n.useReducer)(v,{products:c,cart:[]}),r=Object(y.a)(a,2),i=r[0],s=r[1],j=Object(n.useReducer)(C,{byStock:!1,byFastDelivery:!1,byRating:0,searchQuery:"",ratingHover:0}),o=Object(y.a)(j,2),l=o[0],d=o[1];return Object(_.jsx)(T.Provider,{value:{state:i,dispatch:s,productState:l,productDispatch:d},children:t})},k=(c(1564),function(){var e=S(),t=e.state.cart,c=e.dispatch,n=e.productDispatch;return Object(_.jsx)(o.a,{bg:"dark",variant:"dark",style:{height:80},children:Object(_.jsxs)(l.a,{children:[Object(_.jsx)(o.a.Brand,{children:Object(_.jsx)(p.b,{to:"/",children:"Shopping Cart"})}),"cart"!==Object(x.e)().pathname.split("/")[1]&&Object(_.jsx)(o.a.Text,{className:"search",children:Object(_.jsx)(d.a,{style:{width:500},type:"search",placeholder:"Search a product...",className:"m-auto","aria-label":"Search",onChange:function(e){n({type:"FILTER_BY_SEARCH",payload:e.target.value})}})}),Object(_.jsx)(b.a,{children:Object(_.jsxs)(u.a,{alignRight:!0,children:[Object(_.jsxs)(u.a.Toggle,{variant:"success",children:[Object(_.jsx)(s.a,{color:"white",fontSize:"25px"}),Object(_.jsx)(O.a,{children:t.length})]}),Object(_.jsx)(u.a.Menu,{style:{minWidth:370},children:t.length>0?Object(_.jsxs)(_.Fragment,{children:[t.map((function(e){return Object(_.jsxs)("span",{className:"cartitem",children:[Object(_.jsx)("img",{src:e.image,className:"cartItemImg",alt:e.name}),Object(_.jsxs)("div",{className:"cartItemDetail",children:[Object(_.jsx)("span",{children:e.name}),Object(_.jsxs)("span",{children:["\u20b9 ",Number(e.price).toFixed()]})]}),Object(_.jsx)(j.a,{fontSize:"20px",style:{cursor:"pointer"},onClick:function(){return c({type:"REMOVE_FROM_CART",payload:e})}})]},e.id)})),Object(_.jsx)(p.b,{to:"/cart",children:Object(_.jsx)(h.a,{style:{width:"95%",margin:"0 10px"},children:"Go To Cart"})})]}):Object(_.jsx)("span",{style:{padding:10},children:"Cart is Empty!"})})]})})]})})}),F=c(1584),A=function(e){var t=e.rating,c=e.onClick,n=e.style,a=e.setRatingHover,r=e.ratingHover;return console.log(),Object(_.jsx)(_.Fragment,{children:Object(m.a)(Array(5)).map((function(e,i){return Object(_.jsx)("span",{onClick:function(){return c(i)},onMouseEnter:function(){return a(i)},onMouseLeave:function(){return a(t-1)},style:n,children:t>i||r>i?Object(_.jsx)(j.b,{fontSize:"15px"}):Object(_.jsx)(j.c,{fontSize:"15px"})},i)}))})},I=function(){var e=S(),t=e.productDispatch,c=e.productState,n=c.byStock,a=c.byFastDelivery,r=c.sort,i=c.byRating,s=c.ratingHover;return Object(_.jsxs)("div",{className:"filters",children:[Object(_.jsx)("span",{className:"title",children:"Filter Products"}),Object(_.jsx)("span",{children:Object(_.jsx)(F.a.Check,{inline:!0,label:"Ascending",name:"group1",type:"radio",id:"inline-1",onChange:function(){return t({type:"SORT_BY_PRICE",payload:"lowToHigh"})},checked:"lowToHigh"===r})}),Object(_.jsx)("span",{children:Object(_.jsx)(F.a.Check,{inline:!0,label:"Descending",name:"group1",type:"radio",id:"inline-2",onChange:function(){return t({type:"SORT_BY_PRICE",payload:"highToLow"})},checked:"highToLow"===r})}),Object(_.jsx)("span",{children:Object(_.jsx)(F.a.Check,{inline:!0,label:"Include Out of Stock",name:"group1",type:"checkbox",id:"inline-3",onChange:function(){return t({type:"FILTER_BY_STOCK"})},checked:n})}),Object(_.jsx)("span",{children:Object(_.jsx)(F.a.Check,{inline:!0,label:"Fast Delivery Only",name:"group1",type:"checkbox",id:"inline-4",onChange:function(){return t({type:"FILTER_BY_DELIVERY"})},checked:a})}),Object(_.jsxs)("span",{children:[Object(_.jsx)("label",{style:{paddingRight:10},children:"Rating: "}),Object(_.jsx)(A,{rating:i,onClick:function(e){return t({type:"FILTER_BY_RATING",payload:e+1})},setRatingHover:function(e){return t({type:"RATING_HOVER",payload:e+1})},ratingHover:s,style:{cursor:"pointer"}})]}),Object(_.jsx)(h.a,{variant:"light",onClick:function(){return t({type:"CLEAR_FILTERS"})},children:"Clear Filters"})]})},N=c(1586),D=function(e){var t=e.rating,c=e.style;return Object(_.jsx)(_.Fragment,{children:Object(m.a)(Array(5)).map((function(e,n){return Object(_.jsx)("span",{style:c,children:t>n?Object(_.jsx)(j.b,{fontSize:"15px"}):Object(_.jsx)(j.c,{fontSize:"15px"})},n)}))})},L=function(e){var t=e.prod,c=S(),n=c.state.cart,a=c.dispatch;return Object(_.jsx)("div",{className:"products",children:Object(_.jsxs)(N.a,{children:[Object(_.jsx)(N.a.Img,{variant:"top",src:t.image,alt:t.name}),Object(_.jsxs)(N.a.Body,{children:[Object(_.jsx)(N.a.Title,{children:t.name}),Object(_.jsxs)(N.a.Subtitle,{style:{paddingBottom:10},children:[Object(_.jsxs)("span",{children:["\u20b9 ",t.price.split(".")[0]]}),t.fastDelivery?Object(_.jsx)("div",{children:"Fast Delivery"}):Object(_.jsx)("div",{children:"4 days delivery"}),Object(_.jsx)(D,{rating:t.ratings})]}),n.some((function(e){return e.id===t.id}))?Object(_.jsx)(h.a,{variant:"danger",onClick:function(){return a({type:"REMOVE_FROM_CART",payload:t})},children:"Remove from Cart"}):Object(_.jsx)(h.a,{onClick:function(){return a({type:"ADD_TO_CART",payload:t})},disabled:!t.inStock,children:t.inStock?"Add to Cart":"Out of Stock"})]})]})})},w=function(){var e=S(),t=e.state.products,c=e.productState,n=c.sort,a=c.byStock,r=c.byFastDelivery,i=c.byRating,s=c.searchQuery;return Object(_.jsxs)("div",{className:"home",children:[Object(_.jsx)(I,{}),Object(_.jsx)("div",{className:"productContainer",children:function(){var e=t;return n&&(e=e.sort((function(e,t){return"lowToHigh"===n?e.price-t.price:t.price-e.price}))),a||(e=e.filter((function(e){return e.inStock}))),r&&(e=e.filter((function(e){return e.fastDelivery}))),i&&(e=e.filter((function(e){return e.ratings>=i}))),s&&(e=e.filter((function(e){return e.name.toLowerCase().includes(s.toLowerCase().trim())}))),e}().map((function(e){return Object(_.jsx)(L,{prod:e},e.id)}))})]})},H=c(1587),B=c(1580),Y=c(69),M=c(1581),z=function(){var e=S(),t=e.state.cart,c=e.dispatch,a=Object(n.useState)(),r=Object(y.a)(a,2),i=r[0],s=r[1];return Object(n.useEffect)((function(){s(t.reduce((function(e,t){return e+Number(t.price)*t.qty}),0))}),[t]),Object(_.jsxs)("div",{className:"home",children:[Object(_.jsx)("div",{className:"productContainer",children:Object(_.jsx)(H.a,{children:t.map((function(e){return Object(_.jsx)(H.a.Item,{children:Object(_.jsxs)(B.a,{children:[Object(_.jsx)(Y.a,{md:2,children:Object(_.jsx)(M.a,{src:e.image,alt:e.name,fluid:!0,rounded:!0})}),Object(_.jsx)(Y.a,{md:2,children:Object(_.jsx)("span",{children:e.name})}),Object(_.jsxs)(Y.a,{md:2,children:["\u20b9 ",e.price]}),Object(_.jsx)(Y.a,{md:2,children:Object(_.jsx)(D,{rating:e.ratings})}),Object(_.jsx)(Y.a,{md:2,children:Object(_.jsx)(F.a.Control,{as:"select",value:e.qty,onChange:function(t){return c({type:"CHANGE_CART_QTY",payload:{id:e.id,qty:t.target.value}})},children:Object(m.a)(Array(e.inStock)).map((function(e,t){return Object(_.jsx)("option",{children:t+1},t+1)}))})}),Object(_.jsx)(Y.a,{md:2,children:Object(_.jsx)(h.a,{type:"button",variant:"light",onClick:function(){return c({type:"REMOVE_FROM_CART",payload:e})},children:Object(_.jsx)(j.a,{fontSize:"20px"})})})]})},e.id)}))})}),Object(_.jsxs)("div",{className:"filters summary",children:[Object(_.jsxs)("span",{className:"title",children:["Subtotal (",t.length,") ",t.length>1?"items":"item"]}),Object(_.jsxs)("span",{style:{fontWeight:700,fontSize:20},children:["Total: \u20b9 ",i]}),Object(_.jsx)(h.a,{type:"button",disabled:0===t.length,children:"Proceed to Checkout"})]})]})};var V=function(){return Object(_.jsxs)(_.Fragment,{children:[Object(_.jsx)(k,{}),Object(_.jsxs)("div",{className:"App",children:[Object(_.jsx)(x.a,{path:"/",exact:!0,children:Object(_.jsx)(w,{})}),Object(_.jsx)(x.a,{path:"/cart",children:Object(_.jsx)(z,{})})]})]})};c(1572);i.a.render(Object(_.jsx)(a.a.StrictMode,{children:Object(_.jsx)(p.a,{children:Object(_.jsx)(E,{children:Object(_.jsx)(V,{})})})}),document.getElementById("root"))},74:function(e,t,c){}},[[1573,1,2]]]);
//# sourceMappingURL=main.e1bb88e7.chunk.js.map