(this["webpackJsonpgoit-react-hw-02-phonebook"]=this["webpackJsonpgoit-react-hw-02-phonebook"]||[]).push([[0],{20:function(n,e,t){},33:function(n,e,t){"use strict";t.r(e);var a,i,r,c,o,s,l,u,d,b,m,h,j=t(1),p=t.n(j),f=t(10),x=t.n(f),g=(t(20),t(14)),O=t(5),v=t(6),C=t(8),y=t(7),w=t(2),S=t(11),k=t.n(S),A=t(3),F=t(13),z=A.a.form(a||(a=Object(w.a)(["\n  display: inline-flex;\n  flex-direction: column;\n  padding: 20px;\n  border: 1px solid black;\n"]))),B=A.a.label(i||(i=Object(w.a)(["\n  display: inline-flex;\n  justify-content: space-between;\n  font-weight: bold;\n  margin-bottom: ",";\n"])),(function(n){return n.bottom?"20px":"8px"})),D=A.a.input(r||(r=Object(w.a)(["\n  margin-left: 6px;\n"]))),L=A.a.button(c||(c=Object(w.a)(["\n  height: 30px;\n  font-weight: bold;\n  font-size: 16px;\n  background-color: #c1f3d9;\n"]))),I=t(0),T=function(n){Object(C.a)(t,n);var e=Object(y.a)(t);function t(){var n;Object(O.a)(this,t);for(var a=arguments.length,i=new Array(a),r=0;r<a;r++)i[r]=arguments[r];return(n=e.call.apply(e,[this].concat(i))).state={name:"",number:""},n.handleInputChange=function(e){var t=e.currentTarget,a=t.name,i=t.value;n.setState(Object(F.a)({},a,i))},n.handleSubmit=function(e){e.preventDefault(),n.props.onSubmit(n.state),n.reset()},n.reset=function(){n.setState({name:"",number:""})},n}return Object(v.a)(t,[{key:"render",value:function(){return Object(I.jsxs)(z,{onSubmit:this.handleSubmit,children:[Object(I.jsxs)(B,{children:["Name",Object(I.jsx)(D,{type:"text",name:"name",value:this.state.name,onChange:this.handleInputChange,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0})]}),Object(I.jsxs)(B,{bottom:!0,children:["Number",Object(I.jsx)(D,{type:"tel",name:"number",value:this.state.number,onChange:this.handleInputChange,pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0})]}),Object(I.jsx)(L,{type:"submit",children:"Add to contacts"})]})}}]),t}(j.Component),J=T,P=A.a.li(o||(o=Object(w.a)(["\n  display: inline-flex;\n  justify-content: space-between;\n  width: 300px;\n  margin-bottom: 20px;\n  padding: 10px;\n  font-size: 15px;\n  border: 1px solid;\n"]))),Z=A.a.p(s||(s=Object(w.a)(["\n  margin: 0;\n  margin-right: 6px;\n"]))),q=A.a.button(l||(l=Object(w.a)(["\n  font-size: 12px;\n  font-weight: bold;\n"]))),E=function(n){var e=n.id,t=n.name,a=n.number,i=n.onDeleteButton;return Object(I.jsxs)(P,{id:e,children:[Object(I.jsxs)(Z,{children:[t,":"]}),Object(I.jsx)(Z,{children:a}),Object(I.jsx)(q,{type:"button",onClick:function(){return i(e)},children:"Delete"})]})},M=A.a.ul(u||(u=Object(w.a)(["\n  display: flex;\n  flex-direction: column;\n  list-style-type: none;\n  padding: 0;\n  margin: 0;\n"]))),N=function(n){var e=n.contacts,t=n.onDeleteButton;return Object(I.jsx)(M,{children:e.map((function(n){var e=n.id,a=n.name,i=n.number;return Object(I.jsx)(E,{id:e,name:a,number:i,onDeleteButton:t},e)}))})},V=A.a.div(d||(d=Object(w.a)(["\n  margin-bottom: 30px;\n"]))),H=A.a.label(b||(b=Object(w.a)(["\n  padding: 15px;\n  border: 1px solid black;\n  font-weight: bold;\n"]))),K=A.a.input(m||(m=Object(w.a)(["\n  margin-left: 8px;\n"]))),R=function(n){var e=n.value,t=n.onChange;return Object(I.jsx)(V,{children:Object(I.jsxs)(H,{children:["Find",Object(I.jsx)(K,{type:"text",name:"message",value:e,onChange:t})]})})},Y=A.a.div(h||(h=Object(w.a)(["\n  padding-left: 15px;\n  padding-right: 15px;\n  margin-left: auto;\n  margin-right: auto;\n"]))),$=function(n){Object(C.a)(t,n);var e=Object(y.a)(t);function t(){var n;Object(O.a)(this,t);for(var a=arguments.length,i=new Array(a),r=0;r<a;r++)i[r]=arguments[r];return(n=e.call.apply(e,[this].concat(i))).state={contacts:[{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"}],filter:""},n.handleOnSubmitForm=function(e){var t=e.name,a=e.number;if(n.state.contacts.map((function(n){return n.name})).includes(t))alert("You already have ".concat(t," in your contacts!"));else{var i={id:k.a.generate(),name:t,number:a};n.setState((function(n){var e=n.contacts;return{contacts:[i].concat(Object(g.a)(e))}}))}},n.hendleFinder=function(e){n.setState({filter:e.currentTarget.value})},n.deleteContact=function(e){n.setState((function(n){return{contacts:n.contacts.filter((function(n){return n.id!==e}))}}))},n.getVisibleContacts=function(){var e=n.state,t=e.contacts,a=e.filter.toLocaleLowerCase();return t.filter((function(n){return n.name.toLocaleLowerCase().includes(a)}))},n}return Object(v.a)(t,[{key:"render",value:function(){var n=this.getVisibleContacts();return Object(I.jsxs)(Y,{children:[Object(I.jsx)("h1",{children:"Phonebook"}),Object(I.jsx)(J,{onSubmit:this.handleOnSubmitForm}),Object(I.jsx)("h2",{children:"Contacts"}),Object(I.jsx)(R,{value:this.filter,onChange:this.hendleFinder}),Object(I.jsx)(N,{contacts:n,onDeleteButton:this.deleteContact})]})}}]),t}(j.Component),G=$,Q=function(n){n&&n instanceof Function&&t.e(3).then(t.bind(null,34)).then((function(e){var t=e.getCLS,a=e.getFID,i=e.getFCP,r=e.getLCP,c=e.getTTFB;t(n),a(n),i(n),r(n),c(n)}))};x.a.render(Object(I.jsx)(p.a.StrictMode,{children:Object(I.jsx)(G,{})}),document.getElementById("root")),Q()}},[[33,1,2]]]);
//# sourceMappingURL=main.d1ea0736.chunk.js.map