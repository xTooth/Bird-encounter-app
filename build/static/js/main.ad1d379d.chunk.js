(this["webpackJsonpbirdie-front"]=this["webpackJsonpbirdie-front"]||[]).push([[0],{39:function(e,a,t){e.exports=t(67)},67:function(e,a,t){"use strict";t.r(a);var n=t(36),r=t(0),l=t.n(r),c=t(27),o=t.n(c),s=t(6),m=t(7),i=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"time",a=arguments.length>1?arguments[1]:void 0;return"SWAP"===a.type&&(e=a.data),e},d=t(8),u=t.n(d),h=t(28),p=t(29),E=t(37),b=t(30),g=t(38),v=t(31),f=t(11),N=t.n(f),y=function(e){function a(e){var t;return Object(h.a)(this,a),(t=Object(E.a)(this,Object(b.a)(a).call(this,e))).handleRarityChange=function(e){t.setState({selectedRarity:e.target.value})},t.handleNameChange=function(e){t.setState({name:e.target.value})},t.handleDescChange=function(e){t.setState({desc:e.target.value})},t.handleUserChange=function(e){t.setState({user:e.target.value})},t.handleLatChange=function(e){t.setState({lat:e.target.value})},t.handleLongChange=function(e){t.setState({long:e.target.value})},t.handleFormSubmit=function(e){var a;return u.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:if(e.preventDefault(),""!==t.state.lat){n.next=4;break}return n.next=4,u.a.awrap(new Promise((function(e){return t.setState({lat:t.props.coords.longitude},(function(){return e()}))})));case 4:if(""!==t.state.long){n.next=7;break}return n.next=7,u.a.awrap(new Promise((function(e){return t.setState({long:t.props.coords.latitude},(function(){return e()}))})));case 7:a={user:t.state.user,species:t.state.name,description:t.state.desc,rarity:t.state.selectedRarity,time:(new Date).toISOString(),lat:t.state.lat,long:t.state.long},N.a.post("https://damp-hamlet-88516.herokuapp.com/api/observations",a).then((function(e){console.log(e)})),t.props.history.push("/");case 10:case"end":return n.stop()}}))},t.state={selectedRarity:"Common",name:"",desc:"",user:"",lat:"",long:""},t}return Object(g.a)(a,e),Object(p.a)(a,[{key:"render",value:function(){return this.props.isGeolocationAvailable?this.props.isGeolocationEnabled?this.props.coords?l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"card"},l.a.createElement("div",{className:"card-body"},l.a.createElement("form",{onSubmit:this.handleFormSubmit},l.a.createElement("div",{className:"from-goup"},l.a.createElement("label",{htmlFor:"user"},"Username: "),l.a.createElement("input",{id:"user",type:"text",className:"form-control",placeholder:"Username",onChange:this.handleUserChange,required:!0}),l.a.createElement("small",{id:"userHelp",className:"form-text text-muted"},"Just a nametag to separate users")),l.a.createElement("div",{className:"from-goup"},l.a.createElement("label",{htmlFor:"spc"},"Species: "),l.a.createElement("input",{id:"spc",type:"text",className:"form-control",placeholder:"Name of Species",onChange:this.handleNameChange,required:!0})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{htmlFor:"desc"},"Description:"),l.a.createElement("textarea",{className:"form-control",id:"desc",rows:"3",onChange:this.handleDescChange,required:!0})),l.a.createElement("div",{className:"form-group"},l.a.createElement("h6",null,l.a.createElement("b",null,"Position")),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{htmlFor:"lat"}," Latitude: "),l.a.createElement("input",{id:"lat",className:"form-control",placeholder:"Latitude",defaultValue:this.props.coords.latitude,onChange:this.handleLatChange,required:!0})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{htmlFor:"long"},"Longitude:"),l.a.createElement("input",{id:"long",className:"form-control",placeholder:"Longitude",defaultValue:this.props.coords.longitude,onChange:this.handleLongChange,required:!0}))),l.a.createElement("div",{className:"form-check"},l.a.createElement("h6",null,l.a.createElement("b",null,"Rarity")),l.a.createElement("input",{id:"common",type:"radio",name:"react-tips",value:"Common",checked:"Common"===this.state.selectedRarity,onChange:this.handleRarityChange,className:"form-check-input"}),l.a.createElement("label",{htmlFor:"common"},"Common")),l.a.createElement("div",{className:"form-check"},l.a.createElement("input",{id:"rare",type:"radio",name:"react-tips",value:"Rare",checked:"Rare"===this.state.selectedRarity,onChange:this.handleRarityChange,className:"form-check-input"}),l.a.createElement("label",{htmlFor:"rare"},"Rare")),l.a.createElement("div",{className:"form-check"},l.a.createElement("input",{id:"erare",type:"radio",name:"react-tips",value:"Extremely Rare",checked:"Extremely Rare"===this.state.selectedRarity,onChange:this.handleRarityChange,className:"form-check-input"}),l.a.createElement("label",{htmlFor:"erare"},"Extremely rare")),l.a.createElement("br",null),l.a.createElement("div",{className:"form-group text-center row"},l.a.createElement("div",{className:"col"},l.a.createElement("button",{className:"btn btn-primary btn-block",type:"submit"},"Save")),l.a.createElement("div",{className:"col"},l.a.createElement(s.b,{className:"btn btn-danger btn-block",to:"/"},"Cancel"))))))):l.a.createElement("div",null,"Getting the location data\u2026 "):l.a.createElement("div",{className:"container"},l.a.createElement("p",null,"GeoLocation is either having a slow day or is disabled."),l.a.createElement("div",{className:"card"},l.a.createElement("div",{className:"card-body"},l.a.createElement("form",{onSubmit:this.handleFormSubmit},l.a.createElement("div",{className:"from-goup"},l.a.createElement("label",{htmlFor:"user"},"Username: "),l.a.createElement("input",{id:"user",type:"text",className:"form-control",placeholder:"Username",onChange:this.handleUserChange,required:!0}),l.a.createElement("small",{id:"userHelp",className:"form-text text-muted"},"Just a nametag to separate users")),l.a.createElement("div",{className:"from-goup"},l.a.createElement("label",{htmlFor:"spc"},"Species: "),l.a.createElement("input",{id:"spc",type:"text",className:"form-control",placeholder:"Name of Species",onChange:this.handleNameChange,required:!0})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{htmlFor:"desc"},"Description:"),l.a.createElement("textarea",{className:"form-control",id:"desc",rows:"3",onChange:this.handleDescChange,required:!0})),l.a.createElement("div",{className:"form-group"},l.a.createElement("h6",null,l.a.createElement("b",null,"Position")),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{htmlFor:"lat"}," Latitude: "),l.a.createElement("input",{id:"lat",className:"form-control",placeholder:"Latitude format = 00.0000",onChange:this.handleLatChange,required:!0})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{htmlFor:"long"},"Longitude:"),l.a.createElement("input",{id:"long",className:"form-control",placeholder:"Longitude format = 00.0000",onChange:this.handleLongChange,required:!0}))),l.a.createElement("div",{className:"form-check"},l.a.createElement("h6",null,l.a.createElement("b",null,"Rarity")),l.a.createElement("input",{id:"common",type:"radio",name:"react-tips",value:"Common",checked:"Common"===this.state.selectedRarity,onChange:this.handleRarityChange,className:"form-check-input"}),l.a.createElement("label",{htmlFor:"common"},"Common")),l.a.createElement("div",{className:"form-check"},l.a.createElement("input",{id:"rare",type:"radio",name:"react-tips",value:"Rare",checked:"Rare"===this.state.selectedRarity,onChange:this.handleRarityChange,className:"form-check-input"}),l.a.createElement("label",{htmlFor:"rare"},"Rare")),l.a.createElement("div",{className:"form-check"},l.a.createElement("input",{id:"erare",type:"radio",name:"react-tips",value:"Extremely Rare",checked:"Extremely Rare"===this.state.selectedRarity,onChange:this.handleRarityChange,className:"form-check-input"}),l.a.createElement("label",{htmlFor:"erare"},"Extremely rare")),l.a.createElement("br",null),l.a.createElement("div",{className:"form-group text-center row"},l.a.createElement("div",{className:"col"},l.a.createElement("button",{className:"btn btn-primary btn-block",type:"submit"},"Save")),l.a.createElement("div",{className:"col"},l.a.createElement(s.b,{className:"btn btn-danger btn-block",to:"/"},"Cancel"))))))):l.a.createElement("div",null,"Your browser does not support Geolocation")}}]),a}(r.Component),C=Object(m.e)(Object(v.geolocated)({positionOptions:{enableHighAccuracy:!1},userDecisionTimeout:5e3})(y)),k=function(e){var a=e.obs;void 0===a&&(window.location.href="https://damp-hamlet-88516.herokuapp.com/");var t="https://www.google.com/maps/search/?api=1&query="+a.long+","+a.lat;return l.a.createElement("div",{className:"card"},l.a.createElement("div",{className:"card-body"},l.a.createElement("h5",{className:"card-title"},a.species),l.a.createElement("p",null," Seen by user: ",a.user),l.a.createElement("p",null,"Rarity: ",a.rarity),l.a.createElement("p",null,"Description: ",l.a.createElement("br",null)," ",a.description),l.a.createElement("p",null,"Spotted at: ",a.dtime),l.a.createElement("a",{href:t,target:"_blank",rel:"noopener noreferrer"}," Location: Latitude: ",a.lat," Longitude: ",a.long)))},x=function(e){var a=function(a){return u.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return a.preventDefault(),t.next=3,u.a.awrap(new Promise((function(t){return e.store.dispatch({type:"SWAP",data:a.target.value},(function(){return t()}))})));case 3:case"end":return t.stop()}}))};return l.a.createElement("div",{className:"container"},l.a.createElement("form",null,l.a.createElement("div",{className:"form-group row text-center"},l.a.createElement("div",{className:"col text-center"},l.a.createElement("button",{id:"time",type:"button",value:"time",onClick:a,className:"btn btn-secondary btn-block"},"Sort by time")),l.a.createElement("div",{className:"col text-center"},l.a.createElement("button",{id:"name",type:"button",value:"name",onClick:a,className:"btn btn-secondary btn-block"},"Sort by species")))))},R=function(e){return l.a.createElement("div",{className:"container"},l.a.createElement("ul",{className:"list-unstyled"},e.observations.map((function(e){return l.a.createElement("li",{key:e.id},l.a.createElement("div",{className:"card"},l.a.createElement("div",{className:"card-body"},l.a.createElement("h5",{className:"card-title"},l.a.createElement(s.b,{to:"observation/".concat(e.id)},e.species)),l.a.createElement("p",null,"time: ",e.dtime),l.a.createElement("p",null," Rarity: ",e.rarity," ",l.a.createElement("br",null),"Description: ",l.a.createElement("br",null),"    ",e.description.substring(0,30),"..."))))}))))},S=t(34),w=Object(S.a)(i),F=function(){var e=Object(r.useState)([]),a=Object(n.a)(e,2),t=a[0],c=a[1];return function(e,a){var t;t="time"===e.getState()?"https://damp-hamlet-88516.herokuapp.com/api/observations/sort/time":"https://damp-hamlet-88516.herokuapp.com/api/observations/sort/name",N.a.get(t).then((function(e){a(e.data)}))}(w,c),l.a.createElement("div",null,l.a.createElement(s.a,null,l.a.createElement("div",null,l.a.createElement("nav",{className:"navbar navbar-dark bg-dark navbar-expand-sm"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col nav-item"},l.a.createElement(s.b,{className:"navbar-brand",to:"/"},"Observations")),l.a.createElement("div",{className:"co nav-item"},l.a.createElement(s.b,{className:"navbar-brand",to:"/newObservation"},"New Observation")))),l.a.createElement("br",null),l.a.createElement(m.a,{exact:!0,path:"/",render:function(){return l.a.createElement(x,{store:w})}}),l.a.createElement(m.a,{exact:!0,path:"/",render:function(){return l.a.createElement(R,{observations:t})}}),l.a.createElement(m.a,{path:"/newObservation",render:function(){return l.a.createElement(C,null)}}),l.a.createElement(m.a,{exact:!0,path:"/observation/:id",render:function(e){var a,n=e.match;return l.a.createElement(k,{obs:(a=n.params.id,t.find((function(e){return e.id===a})))})}}))))},L=function(){o.a.render(l.a.createElement(F,null),document.getElementById("root"))};L(),w.subscribe(L)}},[[39,1,2]]]);
//# sourceMappingURL=main.ad1d379d.chunk.js.map