(this["webpackJsonplazy-beaver"]=this["webpackJsonplazy-beaver"]||[]).push([[0],[,,,,,,,,,function(e,t,n){e.exports=n(23)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(7),c=n.n(r),i=(n(14),n(8)),l=n(1),u=n(2),s=n(4),p=n(3),m=(n(15),"#4870ff"),d="#F0F2F7",h={backgroundColor:"none",color:m},f=function(e){Object(s.a)(n,e);var t=Object(p.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){return o.a.createElement("div",{className:"Header",style:h},o.a.createElement("div",{className:"container"},o.a.createElement("h1",null,"Lazy Beaver")))}}]),n}(a.Component),b=n(5),v=(n(16),{width:"40px",height:"40px",border:"none",backgroundColor:m,fontSize:"20px",borderRadius:"20px",color:"white"}),g=function(e){Object(s.a)(n,e);var t=Object(p.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){return o.a.createElement("button",{className:this.props.name,style:v,onClick:this.props.addItemAndClear},"+")}}]),n}(a.Component),j=(n(17),function(e){Object(s.a)(n,e);var t=Object(p.a)(n);function n(e){var a;return Object(l.a)(this,n),(a=t.call(this,e)).addInput=function(e){a.setState({inputValue:e.target.value})},a.addItemAndClear=function(){a.state.inputValue&&(a.props.addItem.call(Object(b.a)(a),a.state.inputValue),a.setState({inputValue:""}))},a.state={inputValue:""},a}return Object(u.a)(n,[{key:"render",value:function(){var e=this;return o.a.createElement("div",{className:"InputArea"},o.a.createElement("input",{className:"newInput",placeholder:"Add new Task",value:this.state.inputValue,onChange:function(t){return e.addInput(t)}}),o.a.createElement(g,{name:"inputButton",addItemAndClear:this.addItemAndClear}))}}]),n}(a.Component)),O=(n(18),function(e){Object(s.a)(n,e);var t=Object(p.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){return o.a.createElement("input",{type:"checkbox",className:"itemCheckBox",onChange:this.props.toggleCompletion})}}]),n}(a.Component)),y=function(e){Object(s.a)(n,e);var t=Object(p.a)(n);function n(){var e;Object(l.a)(this,n);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(e=t.call.apply(t,[this].concat(o))).getStyle=function(){return{backgroundColor:e.props.item.completed?d:"white"}},e.getPStyle=function(){return{textDecoration:e.props.item.completed?"line-through":"none"}},e}return Object(u.a)(n,[{key:"render",value:function(){return o.a.createElement("li",{style:this.getStyle()},o.a.createElement("p",{style:this.getPStyle()},this.props.item.content),o.a.createElement(O,{toggleCompletion:this.props.toggleCompletion.bind(this,this.props.item.id)}))}}]),n}(a.Component),C=(n(19),function(e){Object(s.a)(n,e);var t=Object(p.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){var e=this,t=this.props.items;return o.a.createElement("div",{className:"AllTodos"},o.a.createElement("ul",null,t.map((function(t,n){return o.a.createElement(y,{key:t.id,item:t,toggleCompletion:function(t){return e.props.toggleCompletion.call(e,t)}})}))))}}]),n}(a.Component)),E=(n(20),n(21),n(22),function(e){Object(s.a)(n,e);var t=Object(p.a)(n);function n(){var e;return Object(l.a)(this,n),(e=t.call(this)).addItem=function(t){console.log("hey"),e.setState({todos:[].concat(Object(i.a)(e.state.todos),[{id:e.state.todos.length,content:t,completed:!1}])})},e.changeCompletion=function(t){e.setState({todos:e.state.todos.map((function(e){return e.id===t&&(e.completed=!e.completed),e}))})},e.state={todos:[{id:0,content:"Hello mate",completed:!1},{id:1,content:"Hello check",completed:!1}]},e}return Object(u.a)(n,[{key:"render",value:function(){var e=this;return o.a.createElement("div",{className:"App"},o.a.createElement(f,null),o.a.createElement("div",{className:"container"},o.a.createElement(j,{addItem:this.addItem}),o.a.createElement(C,{items:this.state.todos,toggleCompletion:function(t){return e.changeCompletion(t)}})))}}]),n}(o.a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(E,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[9,1,2]]]);
//# sourceMappingURL=main.40c3a13c.chunk.js.map