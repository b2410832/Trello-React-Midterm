(this["webpackJsonptrello-react"]=this["webpackJsonptrello-react"]||[]).push([[0],{18:function(t,e,n){t.exports={listContainer:"List_listContainer__HikJh",cardContainer:"List_cardContainer__1ohdA"}},21:function(t,e,n){t.exports={container:"App_container__1MQN3"}},29:function(t,e,n){},3:function(t,e,n){t.exports={header:"ListHeader_header__1UdWJ",title:"ListHeader_title__1EAJK",close:"ListHeader_close__ZJKsl",btns:"ListHeader_btns__1SUVB",input:"ListHeader_input__YBez1",btn:"ListHeader_btn__3cLnh"}},36:function(t,e,n){"use strict";n.r(e);var i=n(1),a=n(0),s=n(6),d=n.n(s),c=(n(29),n(2)),r=n(12),l=n(9),o=n(10),u=n(13),g=n(11),j=n(14),b=n(21),p=n.n(b),h=n(4),O=n.n(h);var m=function(t){var e=t.toggleAddingList,n=t.isAddingList,a=t.handleInputChange,s=t.listInput,d=t.addList;return n?Object(i.jsxs)("div",{className:O.a.container,children:[Object(i.jsx)("input",{className:O.a.input,value:s,onChange:a}),Object(i.jsx)("button",{className:O.a.btn,onClick:d,children:"Add List"}),Object(i.jsx)("button",{className:O.a.btn,onClick:e,children:"Cancel"})]}):Object(i.jsx)("div",{className:O.a.container,children:Object(i.jsx)("button",{className:O.a.btn,onClick:e,children:"+ Add a list"})})},C=n(23),f=n(15),v=n(18),L=n.n(v),_=n(5),x=n.n(_);var N=function(t){var e=t.isAddingCard,n=t.toggleAddingCard,a=t.handleInputChange,s=t.cardInput,d=t.addCard;return e?Object(i.jsxs)("div",{className:x.a.container,children:[Object(i.jsx)("input",{className:x.a.input,value:s,onChange:a}),Object(i.jsx)("button",{className:x.a.btn,onClick:d,children:"Add Card"}),Object(i.jsx)("button",{className:x.a.btn,onClick:n,children:"Cancel"})]}):Object(i.jsx)("div",{className:x.a.container,children:Object(i.jsx)("button",{className:x.a.btn,onClick:n,children:"+ Add a Card"})})},A=n(3),I=n.n(A);var E=function(t){var e=t.list,n=t.toggleEditing,a=t.removeList,s=t.handleListInputChange,d=t.updateListName;return e.isEditing?Object(i.jsxs)("div",{className:I.a.header,children:[Object(i.jsx)("input",{className:I.a.input,type:"text",value:e.pendingName,onChange:function(t){return s(t,e.id)},placeholder:e.name}),Object(i.jsxs)("div",{className:I.a.btns,children:[Object(i.jsx)("button",{className:I.a.btn,onClick:function(){return d(e.id)},children:"Save"}),Object(i.jsx)("button",{className:I.a.btn,onClick:function(){return n(e.id)},children:"Cancel"}),Object(i.jsx)("div",{className:I.a.close,onClick:function(){return a(e.id)},children:"\u2715"})]})]}):Object(i.jsxs)("div",{className:I.a.header,children:[Object(i.jsx)("div",{className:I.a.title,children:e.name}),Object(i.jsxs)("div",{className:I.a.btns,children:[Object(i.jsx)("button",{onClick:function(){return n(e.id)},children:"Edit"}),Object(i.jsx)("div",{className:I.a.close,onClick:function(){return a(e.id)},children:"\u2715"})]})]})},k=function(t){Object(u.a)(n,t);var e=Object(g.a)(n);function n(t){var i;return Object(l.a)(this,n),(i=e.call(this,t)).handleInputChange=function(t){i.setState({cardInput:t.target.value})},i.toggleAddingCard=function(){i.setState({isAddingCard:!i.state.isAddingCard})},i.addCard=function(){var t=i.state,e=t.cards,n=t.cardInput;if(0!==n.trim().length){var a=[].concat(Object(r.a)(e),[{id:Object(j.a)(),name:n.trim()}]);i.setState({cardInput:"",cards:a})}},i.handleOnDragEnd=function(t){if(t.destination){var e=Array.from(i.state.cards),n=e.splice(t.source.index,1),a=Object(C.a)(n,1)[0];e.splice(t.destination.index,0,a),i.setState({cards:e})}},i.state={cardInput:"",isAddingCard:!1,cards:[]},i}return Object(o.a)(n,[{key:"render",value:function(){var t=this;return Object(i.jsx)(f.a,{onDragEnd:this.handleOnDragEnd,children:Object(i.jsx)(f.c,{droppableId:this.props.list.id,children:function(e){return Object(i.jsxs)("div",Object(c.a)(Object(c.a)({className:L.a.listContainer},e.droppableProps),{},{ref:e.innerRef,children:[Object(i.jsx)(E,{list:t.props.list,toggleEditing:t.props.toggleEditing,removeList:t.props.removeList,handleListInputChange:t.props.handleListInputChange,updateListName:t.props.updateListName}),t.state.cards.map((function(t,e){return Object(i.jsx)(f.b,{draggableId:t.id,index:e,children:function(e){return Object(i.jsx)("div",Object(c.a)(Object(c.a)(Object(c.a)({},e.draggableProps),e.dragHandleProps),{},{ref:e.innerRef,children:Object(i.jsx)("div",{className:L.a.cardContainer,children:t.name})}))}},t.id)})),e.placeholder,Object(i.jsx)(N,{isAddingCard:t.state.isAddingCard,toggleAddingCard:t.toggleAddingCard,handleInputChange:t.handleInputChange,cardInput:t.state.cardInput,addCard:t.addCard})]}))}})})}}]),n}(a.Component),S=function(t){Object(u.a)(n,t);var e=Object(g.a)(n);function n(t){var i;return Object(l.a)(this,n),(i=e.call(this,t)).handleInputChange=function(t){i.setState({listInput:t.target.value})},i.toggleAddingList=function(){i.setState({isAddingList:!i.state.isAddingList})},i.addList=function(){var t=i.state,e=t.lists,n=t.listInput;if(0!==n.trim().length){var a=[].concat(Object(r.a)(e),[{id:Object(j.a)(),name:n.trim(),isEditing:!1,pendingName:""}]);i.setState({listInput:"",lists:a})}},i.removeList=function(t){i.setState({lists:i.state.lists.filter((function(e){return e.id!==t}))})},i.toggleEditing=function(t){i.setState({lists:i.state.lists.map((function(e){return e.id===t?Object(c.a)(Object(c.a)({},e),{},{isEditing:!e.isEditing,pendingName:""}):e}))})},i.handleListInputChange=function(t,e){i.setState({lists:i.state.lists.map((function(n){return n.id===e?Object(c.a)(Object(c.a)({},n),{},{pendingName:t.target.value}):n}))})},i.updateListName=function(t){i.setState({lists:i.state.lists.map((function(e){return e.id===t?Object(c.a)(Object(c.a)({},e),{},{name:e.pendingName,isEditing:!e.isEditing}):e}))})},i.state={listInput:"",isAddingList:!1,lists:[]},i}return Object(o.a)(n,[{key:"render",value:function(){var t=this;return Object(i.jsxs)("div",{children:[Object(i.jsx)("h1",{children:"Trello"}),Object(i.jsxs)("div",{className:p.a.container,children:[this.state.lists.map((function(e){return Object(i.jsx)(k,{list:e,removeList:t.removeList,toggleEditing:t.toggleEditing,handleListInputChange:t.handleListInputChange,updateListName:t.updateListName},e.id)})),Object(i.jsx)(m,{toggleAddingList:this.toggleAddingList,isAddingList:this.state.isAddingList,listInput:this.state.listInput,handleInputChange:this.handleInputChange,addList:this.addList})]})]})}}]),n}(a.Component),J=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,37)).then((function(e){var n=e.getCLS,i=e.getFID,a=e.getFCP,s=e.getLCP,d=e.getTTFB;n(t),i(t),a(t),s(t),d(t)}))};d.a.render(Object(i.jsx)(S,{}),document.getElementById("root")),J()},4:function(t,e,n){t.exports={container:"AddList_container__1c69z",input:"AddList_input__3J5js",btn:"AddList_btn__2J_J-"}},5:function(t,e,n){t.exports={container:"AddCard_container__eJLYK",input:"AddCard_input__188W8",btn:"AddCard_btn__FH36_"}}},[[36,1,2]]]);
//# sourceMappingURL=main.501b184d.chunk.js.map