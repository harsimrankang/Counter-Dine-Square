(this.webpackJsonpcounter=this.webpackJsonpcounter||[]).push([[0],{28:function(e,t,a){e.exports=a(55)},33:function(e,t,a){},53:function(e,t,a){e.exports=a.p+"static/media/logo.ee7cd8ed.svg"},54:function(e,t,a){},55:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),r=a(26),l=a.n(r),c=(a(33),a(2)),i=a(4),o=a(6),u=a(5),m=a(8),d=a(3),p=(a(34),a(35),s.a.createContext(null)),h=function(e){return function(t){return s.a.createElement(p.Consumer,null,(function(a){return s.a.createElement(e,Object.assign({},t,{firebase:a}))}))}},b=p,v=a(14),f=a.n(v),g=(a(40),a(42),a(56),a(46),{apiKey:"AIzaSyBWkcnuIWQfwWKF9iHzbDyopT6fdqi02X8",authDomain:"canteen-ordering-3d30c.firebaseapp.com",databaseURL:"https://canteen-ordering-3d30c.firebaseio.com",projectId:"canteen-ordering-3d30c",storageBucket:"canteen-ordering-3d30c.appspot.com",messagingSenderId:"155341264665",appId:"1:155341264665:web:6e6c97d269ce56ead59788",measurementId:"G-C199BELLX4"}),E=function e(){var t=this;Object(c.a)(this,e),this.doCreateUserWithEmailAndPassword=function(e,a){return t.auth.createUserWithEmailAndPassword(e,a)},this.doSignInWithEmailAndPassword=function(e,a){return t.auth.signInWithEmailAndPassword(e,a)},this.doPasswordReset=function(e){return t.auth.sendPasswordResetEmail(e)},this.doPasswordUpdate=function(e){return t.auth.currentUser.updatePassword(e)},this.doSignOut=function(){return t.auth.signOut()},this.user=function(e){return t.db.ref("users/".concat(e))},this.users=function(){return t.db.ref("users")},f.a.initializeApp(g),this.auth=f.a.auth(),this.db=f.a.database(),this.storage=f.a.storage(),this.functions=f.a.functions(),this.filterItems=this.functions.httpsCallable("filterItems"),this.addToCart=this.functions.httpsCallable("addToCart"),this.showCart=this.functions.httpsCallable("showCart")},y=a(17),N=a(12),w=h((function(e){var t=e.firebase;return s.a.createElement("button",{type:"button",className:"btn btn-dark",onClick:t.doSignOut},"SIGN OUT")})),C={email:"",password:"",error:null},S=function(e){Object(o.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).onSubmit=function(e){var t=n.state,a=t.email,s=t.password;n.props.firebase.doSignInWithEmailAndPassword(a,s).then((function(e){console.log("AUTH USER"),n.setState({error:null}),n.props.history.push("/vendorcart")})).catch((function(e){n.setState({error:e})})),e.preventDefault()},n.onChange=function(e){n.setState(Object(N.a)({},e.target.name,e.target.value))},n.state=Object(y.a)({},C),n}return Object(i.a)(a,[{key:"render",value:function(){var e=this.state,t=e.email,a=e.password,n=e.error,r=""===a||""===t;return s.a.createElement("form",{onSubmit:this.onSubmit},s.a.createElement("div",{class:"row justify-content-center bg-white"},s.a.createElement("div",{class:"col-6"},s.a.createElement("input",{name:"email",class:"col-12 my-2",value:t,onChange:this.onChange,type:"text",placeholder:"Email Address"}),s.a.createElement("input",{name:"password",class:"col-12 my-2",value:a,onChange:this.onChange,type:"password",placeholder:"Password"}),s.a.createElement("button",{class:"btn btn-primary col-12 my-2",disabled:r,type:"submit"},"Login"),n&&s.a.createElement("p",null,n.message))))}}]),a}(n.Component),k=function(e){Object(o.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).onSubmit=function(e){n.props.firebase.doSignInWithGoogle().then((function(e){return n.props.firebase.user(e.user.uid).set({username:e.user.displayName,email:e.user.email,roles:{}})})).then((function(){n.setState({error:null})})).catch((function(e){n.setState({error:e})})),e.preventDefault()},n.state={error:null},n}return Object(i.a)(a,[{key:"render",value:function(){var e=this.state.error;return s.a.createElement("form",{onSubmit:this.onSubmit},s.a.createElement("button",{class:"btn btn-primary my-2",type:"submit"},"Sign In with Google"),e&&s.a.createElement("p",null,e.message))}}]),a}(n.Component),I=function(e){Object(o.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).onSubmit=function(e){n.props.firebase.doSignInWithFacebook().then((function(e){return n.props.firebase.user(e.user.uid).set({username:e.additionalUserInfo.profile.name,email:e.additionalUserInfo.profile.email,roles:{}})})).then((function(){n.setState({error:null})})).catch((function(e){n.setState({error:e})})),e.preventDefault()},n.state={error:null},n}return Object(i.a)(a,[{key:"render",value:function(){var e=this.state.error;return s.a.createElement("form",{onSubmit:this.onSubmit},s.a.createElement("button",{class:"btn btn-primary my-2",type:"submit"},"Sign In with Facebook"),e&&s.a.createElement("p",null,e.message))}}]),a}(n.Component),O=(h(function(e){Object(o.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).onSubmit=function(e){n.props.firebase.doSignInWithTwitter().then((function(e){return n.props.firebase.user(e.user.uid).set({username:e.additionalUserInfo.profile.name,email:e.additionalUserInfo.profile.email,roles:{}})})).then((function(){n.setState({error:null})})).catch((function(e){n.setState({error:e})})),e.preventDefault()},n.state={error:null},n}return Object(i.a)(a,[{key:"render",value:function(){var e=this.state.error;return s.a.createElement("form",{onSubmit:this.onSubmit},s.a.createElement("button",{class:"btn btn-primary my-2",type:"submit"},"Sign In with Twitter"),e&&s.a.createElement("p",null,e.message))}}]),a}(n.Component)),h(I),Object(d.f)(h(S))),j=(h(k),function(){return s.a.createElement("div",null,s.a.createElement("div",{class:"row justify-content-center bg-white p-5"},s.a.createElement("h1",null,"Login")),s.a.createElement(O,null))}),x={username:"",email:"",passwordOne:"",passwordTwo:"",balance:0,error:null},D=function(e){Object(o.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).onSubmit=function(e){var t=n.state,a=t.username,s=t.email,r=t.passwordOne,l=t.balance;n.props.firebase.doCreateUserWithEmailAndPassword(s,r).then((function(e){n.props.firebase.user(e.user.uid).set({username:a,email:s,passwordOne:r,balance:l}),n.props.history.push("/login")})).then((function(){n.setState(Object(y.a)({},x))})).catch((function(e){n.setState({error:e})})),e.preventDefault()},n.onChange=function(e){n.setState(Object(N.a)({},e.target.name,e.target.value))},n.state=Object(y.a)({},x),n}return Object(i.a)(a,[{key:"render",value:function(){var e=this.state,t=e.username,a=e.email,n=e.passwordOne,r=e.passwordTwo,l=e.error,c=n!==r||""===n||""===a||""===t;return s.a.createElement("form",{onSubmit:this.onSubmit},s.a.createElement("div",{class:"row justify-content-center bg-white p-5"},s.a.createElement("h1",null,"Sign Up")),s.a.createElement("div",{class:"row justify-content-center bg-white"},s.a.createElement("div",{className:"col-6"},s.a.createElement("input",{name:"username",class:"col-12 my-2",value:t,onChange:this.onChange,type:"text",placeholder:"Full Name"}),s.a.createElement("input",{name:"email",class:"col-12 my-2",value:a,onChange:this.onChange,type:"text",placeholder:"Email Address"}),s.a.createElement("input",{name:"passwordOne",class:"col-12 my-2",value:n,onChange:this.onChange,type:"password",placeholder:"Password"}),s.a.createElement("input",{name:"passwordTwo",class:"col-12 my-2",value:r,onChange:this.onChange,type:"password",placeholder:"Confirm Password"}),s.a.createElement("button",{class:"btn btn-primary col-12 my-2",disabled:c,type:"submit"},"Sign Up"),l&&s.a.createElement("p",null,l.message))))}}]),a}(n.Component),z=Object(d.f)(h(D)),U=function(e){Object(o.a)(a,e);var t=Object(u.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"componentDidUpdate",value:function(){}},{key:"render",value:function(){return s.a.createElement("div",null,s.a.createElement(m.b,{to:"/vendorcart",className:"btn btn-dark "},this.props.username),s.a.createElement(m.b,{to:"/AddItems",className:"btn btn-dark "},"Manage Items"),s.a.createElement(w,null))}}]),a}(n.Component),P=function(e){Object(o.a)(a,e);var t=Object(u.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return s.a.createElement("div",null,s.a.createElement("br",null),s.a.createElement("div",{className:"row justify-content-center justify-content-sm-end"},s.a.createElement("br",null),this.props.user?s.a.createElement(U,{authUser:this.props.user,username:this.props.username}):s.a.createElement("div",{className:"btn-group"},s.a.createElement(m.b,{className:" btn btn-warning",to:"/Login"},"LOGIN"),s.a.createElement(m.b,{className:"btn btn-warning",to:"/SignUp"},"SIGNUP"))))}}]),a}(n.Component),T=h(function(e){Object(o.a)(a,e);var t=Object(u.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return s.a.createElement("div",{class:"d-flex bd-highlight bg-dark col-12"},s.a.createElement("div",{class:"text-danger bd-highlight font-weight-bold navbar-brand pt-2"},"DINE-SQUARE"),s.a.createElement("div",{class:"ml-auto p-1 bd-highlight"},s.a.createElement(P,{user:this.props.user,username:this.props.username})))}}]),a}(n.Component)),B=(a(53),a(54),h(function(e){Object(o.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={fetchedData:null,items:null,vendors:[],selectedVendor:null,allSizes:[],selectedSizes:[],unselectedSizes:[],selectedCategories:[],searchedCategories:[],allCategories:[],username:null},e.addToSelectedPrices=function(t){for(var a=e.state.unselectedSizes,n=0;n<a.length;n++)t.id==a[n].id&&a.splice(n,1);var s=e.state.selectedSizes;console.log(t),s.push(t),e.setState({selectedSizes:s,unselectedSizes:a})},e.addToSelectedCategories=function(t){var a=0,n=e.state.selectedCategories;for(a=0;a<n.length;a++)if(n[a].id==t.id)return;n.push(t),e.setState({selectedCategories:n})},e.addNewCategory=function(){var t=document.getElementById("categoryName").value;if(document.getElementById("categoryName").value="",""!=t){var a={};return a["public/menuCategories/"+e.props.firebase.db.ref().child("public/menuCategories").push().key]={name:t},e.props.firebase.db.ref().update(a)}alert("Check Data")},e.addNewSize=function(){var t=document.getElementById("sizeName").value;if(""!=t){document.getElementById("sizeName").value="";var a={};return a["public/sizeCategories/"+e.props.firebase.db.ref().child("public/sizeCategories").push().key]=t,e.props.firebase.db.ref().update(a)}alert("Check Data")},e.addNewVendor=function(){var t=document.getElementById("vendorName").value;if(""!=t){document.getElementById("vendorName").value="";var a={};return a["public/vendors/"+e.props.firebase.db.ref().child("public/vendors").push().key]={name:t},e.props.firebase.db.ref().update(a)}alert("Check Data")},e.dataListener=function(){e.props.firebase.db.ref("public").on("value",(function(t){console.log("updated");var a=t.val(),n=[];Object.keys(a.menuCategories).forEach((function(e){n.push({id:e,value:a.menuCategories[e]})})),console.log(e.props);var s=[];console.log(a.vendors),Object.keys(a.vendors).forEach((function(t){e.state.username==a.vendors[t].name&&s.push({id:t,value:a.vendors[t]})}));var r=[];Object.keys(a.sizeCategories).forEach((function(e){r.push({id:e,value:a.sizeCategories[e]})}));var l=[];Object.keys(a.items).forEach((function(e){l.push({id:e,value:a.items[e]})})),console.log(s),e.setState({fetchedData:a,items:l,searchedCategories:n,allCategories:n,vendors:s,unselectedSizes:r,allSizes:r,selectedSizes:[]})}))},e.deleteItem=function(t){e.props.firebase.db.ref("/public/items/"+t).remove()},e.fetchData=function(){e.dataListener()},e.processCategoryInput=function(){var t=document.getElementById("categoryInput").value;t=t.toUpperCase();var a=!1,n=e.state.allCategories;Object.values(n).forEach((function(e){var s=e.name.toUpperCase();console.log(s);for(var r=0;r<s.length;r++){if(console.log(t),t[0]==s[r]){a=!0,console.log("debug");for(var l=0;l<t.length;l++)if(s[r+l]!=t[l]){a=!1;break}if(1==a){n.push(e),console.log("debug");break}}if(0==t.length){n.push(e),console.log("debug");break}}})),e.setState({searchedCategories:n})},e.removeFromCategory=function(t){var a=0,n=e.state.selectedCategories;for(a=0;a<n.length;a++)if(n[a].id==t.id){n.splice(a,1);break}e.setState({selectedCategories:n})},e.removeFromSelectedSizes=function(t){var a=e.state.selectedSizes,n=e.state.unselectedSizes;n.push(t);for(var s=0;s<a.length;s++)if(a[s].id==t.id){a.splice(s,1);break}e.setState({selectedSizes:a,unselectedSizes:n})},e.validateData=function(e,t,a,n){if(""==e)return!1;if(null==t)return!1;if(0==a.length)return!1;for(var s=0;s<n.length;s++)if(""==document.getElementById(n[s].value).value)return!1;return!0},e.sendItem=function(){var t=document.getElementById("itemName").value,a=document.getElementById("estimatedTime").value,n=e.state.selectedVendor,s=document.getElementById("veg").checked,r=e.state.selectedCategories,l=e.state.selectedSizes;if(e.validateData(t,n,r,l)){document.getElementById("itemName").value="";for(var c={},i=0;i<l.length;i++)c[l[i].id]={size:l[i].value,price:document.getElementById(l[i].value).value};var o={};for(i=0;i<r.length;i++)o[r[i].id]=r[i].value;var u={name:t,time:a,veg:s,vendor:n,price:c,menuCategories:o,enabled:!0};console.log(u);var m=e.props.firebase.db.ref().child("public/items").push().key;console.log(m);var d={};return d["public/items/"+m]=u,e.props.firebase.db.ref().update(d)}alert("Check Data")},e.showData=function(){return null==e.state.items?s.a.createElement("div",{className:"card bg-light shadow"},s.a.createElement("div",{className:"card-body px-2 text-dark"},s.a.createElement("h3",{className:"card-title py-0 my-0"},"Menu Items"),s.a.createElement("div",{className:"py-0 my-0 my-auto border-top"},"Loading Items"))):s.a.createElement("div",null,s.a.createElement("div",{className:"card bg-light shadow"},s.a.createElement("div",{className:"card-body px-2 text-dark"},s.a.createElement("h3",{className:"card-title py-0 my-0"},"Menu Items"),s.a.createElement("div",{className:"d-flex"},s.a.createElement("div",{className:"col-4"},"Name"),s.a.createElement("div",{className:"col-2"},"Vendor"),s.a.createElement("div",{className:"col-3"},"Categories"),s.a.createElement("div",{className:"col-3"},"sizes")),Object.keys(e.state.items).map((function(t){return e.state.username==e.state.items[t].value.vendor?s.a.createElement("div",{className:"card "},s.a.createElement("div",{className:"card-body d-flex bg-white text-dark border-top py-1"},s.a.createElement("div",{className:"col-4 font-weight-bold"},s.a.createElement("div",null,e.state.items[t].value.name),s.a.createElement("button",{className:"bg-danger rounded px-2 border text-white",onClick:function(){e.deleteItem(e.state.items[t].id)}},"Delete"),e.state.items[t].value.enabled?s.a.createElement("button",{className:"bg-danger rounded px-2 border text-white",onClick:function(){var a={};return a["public/items/"+e.state.items[t].id+"/enabled"]=!1,e.props.firebase.db.ref().update(a)}},"Hold Sale"):s.a.createElement("button",{className:"bg-primary rounded px-2 border text-white",onClick:function(){var a={};return a["public/items/"+e.state.items[t].id+"/enabled"]=!0,e.props.firebase.db.ref().update(a)}},"Resume Sale")),s.a.createElement("div",{className:"col-2"},e.state.items[t].value.vendor),s.a.createElement("div",{className:"col-3"},Object.keys(e.state.items[t].value.menuCategories).map((function(a){return s.a.createElement("div",{className:"d-inline-flex bg-light rounded text-muted px-2"},e.state.items[t].value.menuCategories[a].name)}))),s.a.createElement("div",{className:"col-3"},Object.keys(e.state.items[t].value.price).map((function(a){return s.a.createElement("div",{className:"d-flex"},s.a.createElement("div",{className:"col-6 bg-primary rounded-left text-white px-2"},e.state.items[t].value.price[a].size),s.a.createElement("div",{className:"col-6 bg=primary flex-grow-1 rounded-right  text-black bg-light px-2"},e.state.items[t].value.price[a].price))}))))):s.a.createElement("div",null)})))))},e.showSelectedCategories=function(){return 0==e.state.selectedCategories.length?s.a.createElement("div",{className:"text-muted"},"No selected Categories"):s.a.createElement("div",{className:"row px-3"},e.state.selectedCategories.map((function(t){return s.a.createElement("button",{className:"btn  mx-1 mt-1 btn-primary text-light",key:t.id,onClick:function(){e.removeFromCategory(t)}},t.value.name)})))},e.showSelectedVendor=function(){if(null!=e.state.selectedVendor)return s.a.createElement("button",{className:"btn btn-primary m-1"},e.state.selectedVendor)},e.showVendors=function(){return null==e.state.fetchedData?s.a.createElement("div",null,"Loading Vendors"):s.a.createElement("div",null,Object.values(e.state.fetchedData.vendors).forEach((function(e){return s.a.createElement("div",null,e)})))},e}return Object(i.a)(a,[{key:"componentDidUpdate",value:function(){console.log(this.props),this.state.username!=this.props.username&&this.setState({username:this.props.username})}},{key:"componentDidMount",value:function(){this.state.username!=this.props.username&&this.setState({username:this.props.username,selectedVendor:this.props.username}),this.fetchData()}},{key:"render",value:function(){var e=this;return s.a.createElement("div",{className:"row col-12 my-2"},s.a.createElement("div",{className:"col-8",id:"databaseItems"},this.showData()),s.a.createElement("div",{className:"col-4 bg-light shadow"},s.a.createElement("div",{className:"card my-2"},s.a.createElement("div",{className:"card-body px-2 ",id:"addItemInterface"},s.a.createElement("div",{className:"d-flex"},s.a.createElement("h3",null,"Insert Items")),s.a.createElement("div",{className:"border-top mt-2"},s.a.createElement("div",{className:"font-weight-bold"},"Name"),s.a.createElement("input",{className:"col-12",id:"itemName",type:"text",placeholder:"Name of item..."})),s.a.createElement("div",{className:"border-top mt-2"},s.a.createElement("div",{className:"font-weight-bold"},"Estimated Time"),s.a.createElement("input",{className:"col-12",id:"estimatedTime",type:"text",placeholder:"Estimated time to prepare..."})),s.a.createElement("div",{className:"border-top mt-2"},this.state.vendors.map((function(e){return s.a.createElement("button",{className:"btn btn-primary m-1"},e.value.name)}))),s.a.createElement("div",{className:"border-top mt-2"},s.a.createElement("div",{className:"font-weight-bold"},"Veg/Non-Veg"),s.a.createElement("input",{id:"veg",type:"checkbox",name:"veg"}),s.a.createElement("label",{for:"veg"}," Veg")),s.a.createElement("div",{className:"border-top mt-2"},s.a.createElement("div",{className:"font-weight-bold"},"Select Categories"),s.a.createElement("div",{id:"selectedCategories"},this.showSelectedCategories()),s.a.createElement("div",{id:"addCategories",class:"dropdown"},s.a.createElement("input",{className:"col-12 mt-1",type:"text",placeholder:"Search for Categories...",id:"categoryInput",onKeyUp:function(){e.processCategoryInput()}}),s.a.createElement("div",{className:"col-12"},s.a.createElement("div",{className:"dropdown-content row mt-1"},this.state.searchedCategories.map((function(t){return s.a.createElement("button",{className:"btn bg-secondary text-light mx-1 mt-1",onClick:function(){e.addToSelectedCategories(t)}},t.value.name)})))))),s.a.createElement("div",{className:"border-top mt-2"},s.a.createElement("div",{className:"font-weight-bold"},"Sizes"),s.a.createElement("div",null,this.state.selectedSizes.map((function(t){return s.a.createElement("div",{className:"btn-group col-12"},s.a.createElement("button",{className:"btn col-4 btn-primary",onClick:function(){e.removeFromSelectedSizes(t)}},t.value),s.a.createElement("input",{className:"flex-grow-1",id:t.value,type:"number"}))})),this.state.unselectedSizes.map((function(t){return s.a.createElement("button",{className:"btn btn-secondary m-1",onClick:function(){e.addToSelectedPrices(t)}},t.value)})))),s.a.createElement("div",{className:"d-flex justify-content-center border-top mt-2 pt-2"},s.a.createElement("button",{className:"btn btn-primary font-weight-bold",onClick:function(){e.sendItem()}},"Insert Item")))),s.a.createElement("div",{className:"card my-2"},s.a.createElement("div",{className:"card-body col-12"},s.a.createElement("h3",null,"Add Categories"),s.a.createElement("div",{className:"btn-group col-12 mx-0 px-0"},s.a.createElement("input",{className:"flex-grow-1",id:"categoryName",placeholder:"Name of Category"}),s.a.createElement("button",{className:"btn btn-primary",onClick:function(){e.addNewCategory()}},"Add Category"))),s.a.createElement("div",{className:"card-body col-12"},s.a.createElement("h3",null,"Add Sizes"),s.a.createElement("div",{className:"btn-group col-12 mx-0 px-0"},s.a.createElement("input",{className:"flex-grow-1",id:"sizeName",placeholder:"Size..."}),s.a.createElement("button",{className:"btn btn-primary",onClick:function(){e.addNewSize()}},"Add Size"))))),s.a.createElement("div",{className:"col-4",id:"addOtherInterface"}))}}]),a}(n.Component))),A=h(function(e){Object(o.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).state={users:{},search:"",activeKey:null},n.check=function(e,t){return e=e.toLowerCase(),!!(t=t.toLowerCase()).includes(e)},n}return Object(i.a)(a,[{key:"componentDidMount",value:function(){this.fetchDetails()}},{key:"componentDidUpdate",value:function(){null!=this.state.activeKey&&(console.log(document.getElementById("bal").value),console.log(this.state.users[this.state.activeKey].balance))}},{key:"fetchDetails",value:function(){var e=this;this.props.firebase.db.ref("users/").once("value").then((function(t){var a=t.val();e.setState({users:a})}))}},{key:"addBalance",value:function(){null!=this.state.activeKey&&(console.log(this.state.users[this.state.activeKey].balance),this.state.users[this.state.activeKey].balance+=parseInt(document.getElementById("bal").value),this.props.firebase.db.ref("users/"+this.state.activeKey).set({balance:this.state.users[this.state.activeKey].balance,email:this.state.users[this.state.activeKey].email,passwordOne:this.state.users[this.state.activeKey].passwordOne,username:this.state.users[this.state.activeKey].username}),console.log(this.state.users[this.state.activeKey].balance),this.setState({activeKey:null}),document.getElementById("bal").value="")}},{key:"showDetails",value:function(){var e=this;return s.a.createElement("div",{className:"card shadow bg-dark rounded "},s.a.createElement("div",{className:"card m-2 p-2 bg-light"},Object.keys(this.state.users).map((function(t){if(e.check(e.state.search,e.state.users[t].email))return s.a.createElement("div",{className:"d-flex col-12 m-2 p-2 "},s.a.createElement("div",{className:"col-5"},s.a.createElement("h5",null,e.state.users[t].username)),s.a.createElement("div",{className:"col-5"},s.a.createElement("h5",null,e.state.users[t].email)),s.a.createElement("div",{className:"col-2 btn btn-primary","data-toggle":"modal","data-target":"#staticBackdrop",style:{height:40},onClick:function(){e.setState({activeKey:t})}},"Add Balance"))}))))}},{key:"showModal",value:function(){var e=this;return s.a.createElement("div",{class:"modal fade  ",id:"staticBackdrop","data-backdrop":"static",tabindex:"-1",role:"dialog","aria-labelledby":"staticBackdropLabel","aria-hidden":"true",keyboard:"false"},s.a.createElement("div",{class:"modal-dialog modal-dialog-centered ",role:"document"},s.a.createElement("div",{class:"modal-content"},s.a.createElement("div",{class:"modal-header"},s.a.createElement("div",null,s.a.createElement("h5",null,null!=this.state.activeKey?s.a.createElement("div",null,this.state.users[this.state.activeKey].email):s.a.createElement("div",null)))),s.a.createElement("div",{class:"modal-body"},s.a.createElement("input",{id:"bal",placeholder:"Enter balance",class:"col-12 my-2"})),s.a.createElement("div",{class:"modal-footer"},s.a.createElement("button",{type:"button",class:"btn btn-secondary","data-dismiss":"modal",onClick:function(){document.getElementById("bal").value="",e.setState({activeKey:null})}},"Close"),s.a.createElement("button",{type:"button",class:"btn btn-primary","data-dismiss":"modal",onClick:function(){e.addBalance()}},"Enable")))))}},{key:"render",value:function(){var e,t=this;return s.a.createElement("div",null,s.a.createElement("div",null,this.showModal()),s.a.createElement("div",{class:"row bg-white mt-3"},s.a.createElement("div",{class:"col-6 ml-5"},s.a.createElement("input",(e={id:"email",placeholder:"Enter UserEmail",class:"col-12 my-2"},Object(N.a)(e,"id","email"),Object(N.a)(e,"onChange",(function(){var e=document.getElementById("email").value;t.setState({search:e})})),e))),s.a.createElement("div",null)),s.a.createElement("div",{class:"row "}),s.a.createElement("div",null,this.showDetails()))}}]),a}(n.Component)),K=h(function(e){Object(o.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={display:null,data:null,items:null,vendor:null,orderVerified:!1,vendors:null,inputs:{}},e.fetchCart=function(){e.props.firebase.db.ref("vendors/"+e.props.vendor).on("value",(function(t){var a=t.val();console.log(a),e.setState({data:a})}))},e.fetchItems=function(){e.props.firebase.db.ref("public/items").on("value",(function(t){var a=t.val();console.log(a),e.setState({items:a})}))},e.showItems=function(){if(e.state.display)return e.state.data.ItemsToPrepare?s.a.createElement("div",null,s.a.createElement("div",{className:"row shadow bg-light rounded"},Object.keys(e.state.data.ItemsToPrepare).map((function(t){return s.a.createElement("div",{className:"col-6 p-0 border"},s.a.createElement("div",{className:"col-12 h5"},e.state.data.ItemsToPrepare[t].username),s.a.createElement("div",{className:"btn btn-secondary"},"OTP: ",e.state.data.ItemsToPrepare[t].otp),s.a.createElement("div",{className:"btn btn-danger",id:t+"1",onClick:function(){e.orderPickedUp(t)}},"Order Picked Up"),Object.keys(e.state.data.ItemsToPrepare[t].items).map((function(a){return s.a.createElement("div",{className:" col-12 bg-light"},Object.keys(e.state.data.ItemsToPrepare[t].items[a]).map((function(n){return s.a.createElement("div",{className:"d-flex col-12"},s.a.createElement("div",{className:"flex-grow-1"},e.state.items[a].name," ( ",e.state.items[a].price[n].size," x ",e.state.data.ItemsToPrepare[t].items[a][n].qty," )"),s.a.createElement("div",{className:"d-flex"},1==e.state.data.ItemsToPrepare[t].items[a][n].ready?1==e.state.data.ItemsToPrepare[t].items[a][n].taken?s.a.createElement("button",{className:"btn btn-sm btn-success"},"Item Picked by User"):s.a.createElement("button",{className:"btn btn-sm btn-success"},"Item Ready"):s.a.createElement("button",{type:"button",className:"btn btn-sm btn-primary",onClick:function(){e.itemReady(a,t,n,e.state.data.ItemsToPrepare[t].userId)}},"Set Item Ready")))})))})))})))):s.a.createElement("div",null,"Nothing to show")},e}return Object(i.a)(a,[{key:"componentDidUpdate",value:function(){console.log(this.state),console.log(this.props),null==this.state.vendor&&null!=this.props.vendor&&this.setState({vendor:this.props.vendor}),null==this.state.display&&this.state.data&&this.setState({display:!0}),null==this.state.data&&this.state.vendor&&this.fetchCart()}},{key:"componentDidMount",value:function(){null==this.state.vendor&&this.setState({vendor:this.props.vendor}),this.fetchItems(),this.fetchVendors()}},{key:"fetchVendors",value:function(){var e=this;this.props.firebase.db.ref("public/vendors").once("value").then((function(t){e.setState({vendors:t.val()})}))}},{key:"itemReady",value:function(e,t,a,n){var s={};s["/users/"+n+"/prevorders/"+t+"/items/"+e+"/"+a+"/ready"]=!0,s["/vendors/"+this.props.vendor+"/ItemsToPrepare/"+t+"/items/"+e+"/"+a+"/ready"]=!0,this.props.firebase.db.ref().update(s)}},{key:"orderPickedUp",value:function(e){var t=this,a={};console.log(e),a["/vendors/"+this.props.vendor+"/ItemsToPrepare/"+e]=null,Object.keys(this.state.data.ItemsToPrepare[e].items).map((function(n){Object.keys(t.state.data.ItemsToPrepare[e].items[n]).map((function(s){a["/users/"+t.state.data.ItemsToPrepare[e].userId+"/prevorders/"+e+"/items/"+n+"/"+s+"/taken"]=!0}))})),this.props.firebase.db.ref().update(a)}},{key:"render",value:function(){return s.a.createElement("div",{class:"container "},s.a.createElement("h2",{class:"section-header"},"ORDERS"),s.a.createElement("div",{className:"card-body "},s.a.createElement("div",{className:"d-flex"}),s.a.createElement("div",{class:"cart-items"},this.showItems())))}}]),a}(n.Component)),L=h(function(e){Object(o.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,s=new Array(n),r=0;r<n;r++)s[r]=arguments[r];return(e=t.call.apply(t,[this].concat(s))).state={userData:null,uid:null,username:null,users:{},vendor:null},e.fetchUserData=function(){e.props.firebase.auth.onAuthStateChanged((function(t){t!=e.state.userData&&(t?e.setState({userData:t}):e.setState({userData:null,username:null,vendor:null}))}))},e.fetchUserName=function(){null!=e.state.userData&&e.props.firebase.db.ref("users/"+e.state.userData.uid).once("value").then((function(t){var a=t.val(),n=t.val()&&t.val().username||"Anonymous";e.state.username!=n&&e.setState({username:n,vendor:a.vendor})}))},e}return Object(i.a)(a,[{key:"componentDidUpdate",value:function(){this.fetchUserName(),this.fetchUserData()}},{key:"componentDidMount",value:function(){this.fetchUserData()}},{key:"render",value:function(){return"admin"==this.state.username?s.a.createElement(m.a,{basename:"/"},s.a.createElement("div",null,s.a.createElement(T,{user:this.state.userData,username:this.state.username}),s.a.createElement(d.c,null,s.a.createElement(d.a,{path:"/Login"},s.a.createElement(j,null)),s.a.createElement(d.a,{path:"/SignUp"},s.a.createElement(z,null)),s.a.createElement(d.a,{path:"/AddBalance"},s.a.createElement(A,null)),s.a.createElement(d.a,{path:"/"},null!=this.state.userData?s.a.createElement(A,null):s.a.createElement(j,null))))):s.a.createElement(m.a,{basename:"/"},s.a.createElement("div",null,s.a.createElement(T,{user:this.state.userData,username:this.state.username}),s.a.createElement(d.c,null,s.a.createElement(d.a,{path:"/Login"},s.a.createElement(j,null)),s.a.createElement(d.a,{path:"/SignUp"},s.a.createElement(z,null)),s.a.createElement(d.a,{path:"/AddItems"},null!=this.state.username?s.a.createElement(B,{user:this.state.userData,username:this.state.username}):s.a.createElement("div",null,"Loading..")),s.a.createElement(d.a,{path:"/vendorcart"},null!=this.state.userData?s.a.createElement(K,{vendor:this.state.vendor,username:this.state.username}):s.a.createElement(j,null)),s.a.createElement(d.a,{path:"/"},null!=this.state.userData?s.a.createElement(K,{vendor:this.state.vendor,username:this.state.username}):s.a.createElement(j,null)))," "))}}]),a}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(s.a.createElement(b.Provider,{value:new E},s.a.createElement(L,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[28,1,2]]]);
//# sourceMappingURL=main.ef10dc74.chunk.js.map