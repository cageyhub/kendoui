(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{30:function(e,t,a){e.exports=a(49)},36:function(e,t,a){},48:function(e,t,a){},49:function(e,t,a){"use strict";a.r(t);var n=a(1),i=a.n(n),r=a(10),c=a.n(r),l=(a(36),a(20)),o=a(9),d=a(6),s=a(7),u=a(8),p=a(13),m=a(11),h=a(18),D=a(12),g=a(4),w="{0:MM/dd/yyyy}",f=a(19),v={data:[[{id:1,group:"IH01",subGroup:"CM",groupName:"VA Premier",startDate:new Date(2018,8,20),endDate:new Date(2018,8,20),user:"Dave Cunnold"},{id:2,group:"IH02",subGroup:"CM",groupName:"VA Premier",startDate:new Date(2018,8,20),endDate:new Date(2018,8,20),user:"Dave Cunnold"},{id:3,group:"IH01",subGroup:"CM",groupName:"VA Premier",startDate:new Date(2018,8,20),endDate:new Date(2018,8,20),user:"Dave Cunnold"},{id:4,group:"IH03",subGroup:"CM",groupName:"VA Premier",startDate:new Date(2018,8,20),endDate:new Date(2018,8,20),user:"Dave Cunnold"}],[{id:5,group:"IH04",subGroup:"CM",groupName:"VA Premier",startDate:new Date(2018,8,20),endDate:new Date(2018,8,20),user:"Dave Cunnold"},{id:6,group:"IH04",subGroup:"CM",groupName:"VA Premier",startDate:new Date(2018,8,20),endDate:new Date(2018,8,20),user:"Dave Cunnold"},{id:7,group:"IH01",subGroup:"CM",groupName:"VA Premier",startDate:new Date(2018,8,20),endDate:new Date(2018,8,20),user:"Dave Cunnold"},{id:8,group:"IH01",subGroup:"CM",groupName:"VA Premier",startDate:new Date(2018,8,20),endDate:new Date(2018,8,20),user:"Dave Cunnold"}],[{id:9,group:"IH02",subGroup:"CM",groupName:"VA Premier",startDate:new Date(2018,8,20),endDate:new Date(2018,8,20),user:"Jane Cunnold"},{id:10,group:"IH02",subGroup:"CM",groupName:"VA Premier",startDate:new Date(2018,8,20),endDate:new Date(2018,8,20),user:"Jane Cunnold"},{id:11,group:"IH01",subGroup:"CM",groupName:"VA Premier",startDate:new Date(2018,8,20),endDate:new Date(2018,8,20),user:"Jane Cunnold"},{id:12,group:"IH03",subGroup:"CM",groupName:"VA Premier",startDate:new Date(2018,8,20),endDate:new Date(2018,8,20),user:"Dave Cunnold"}],[{id:13,group:"IH01",subGroup:"CM",groupName:"VA Premier",startDate:new Date(2018,8,20),endDate:new Date(2018,8,20),user:"Dave Cunnold"},{id:14,group:"IH01",subGroup:"CM",groupName:"VA Premier",startDate:new Date(2018,8,20),endDate:new Date(2018,8,20),user:"Dave Cunnold"},{id:15,group:"IH01",subGroup:"CM",groupName:"VA Premier",startDate:new Date(2018,8,20),endDate:new Date(2018,8,20),user:"Dave Cunnold"},{id:16,group:"IH01",subGroup:"CM",groupName:"VA Premier",startDate:new Date(2018,8,20),endDate:new Date(2018,8,20),user:"Jane Cunnold"}]],total:16},y=a(5),b=a(21),E=a(24),C=a(15),I=a(16),O=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(p.a)(this,Object(m.a)(t).call(this,e))).onDialogInputChange=function(e){var t=e.target,n="checkbox"===t.type?t.checked:t.value,i=t.props?t.props.name:t.name,r=a.state.itemInEdit;r[i]=n,a.setState({itemInEdit:r})},a.state={itemInEdit:a.props.dataItem||null},a}return Object(D.a)(t,e),Object(u.a)(t,[{key:"handleSubmit",value:function(e){e.preventDefault()}},{key:"render",value:function(){return i.a.createElement(E.a,{onClose:this.props.cancel},i.a.createElement("form",{onSubmit:this.handleSubmit},i.a.createElement("div",{style:{marginBottom:"1rem"}},i.a.createElement("label",null,"Group",i.a.createElement("br",null),i.a.createElement(C.a,{type:"text",name:"group",value:this.state.itemInEdit.group||"",onChange:this.onDialogInputChange}))),i.a.createElement("div",{style:{marginBottom:"1rem"}},i.a.createElement("label",null,"Sub Group",i.a.createElement("br",null),i.a.createElement(C.a,{type:"tetx",name:"subGroup",value:this.state.itemInEdit.subGroup||"",onChange:this.onDialogInputChange}))),i.a.createElement("div",null,i.a.createElement("label",null,"Group Name",i.a.createElement("br",null),i.a.createElement(C.a,{type:"text",name:"groupName",value:this.state.itemInEdit.groupName||"",onChange:this.onDialogInputChange}))),i.a.createElement("div",null,i.a.createElement("label",null,"Start Date",i.a.createElement("br",null),i.a.createElement("br",null),i.a.createElement(I.a,{defaultValue:this.state.itemInEdit.startDate?new Date(this.state.itemInEdit.startDate):new Date}))),i.a.createElement("div",null,i.a.createElement("label",null,"End Date",i.a.createElement("br",null),i.a.createElement("br",null),i.a.createElement(I.a,{defaultValue:this.state.itemInEdit.endDate?new Date(this.state.itemInEdit.endDate):new Date})))),i.a.createElement(E.b,null,i.a.createElement("button",{className:"k-button",onClick:this.props.cancel},"Cancel"),i.a.createElement("button",{className:"k-button k-primary",onClick:this.props.save},"Save")))}}]),t}(i.a.Component);var S=function e(t){return n.createElement("td",{onDragOver:function(){e.reorder(t.dataItem)}},n.createElement("span",{className:"k-icon k-i-reorder",draggable:!0,style:{cursor:"move"},onDragStart:function(a){e.dragStart(t.dataItem),a.dataTransfer.setData("dragging","")}}))},x=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(p.a)(this,Object(m.a)(t).call(this,e))).reorder=function(e){if(a.state.activeItem!==e){var t=a.state.gridData.slice(),n=t.findIndex(function(e){return e===a.state.activeItem}),i=t.findIndex(function(t){return t===e});t.splice(n,1),t.splice(i,0,a.state.activeItem),a.setState(function(e){return{gridData:t,active:a.state.activeItem}})}},a.dragStart=function(e){a.setState(function(t){return{gridData:a.state.gridData,activeItem:e}})},a.handleMoveUp=function(){var e=Object(d.a)(a.state.gridData);0!==a.dataItemIndex&&(e.splice(a.dataItemIndex,1),e.splice(a.dataItemIndex-1,0,a.dataItem),a.setState({gridData:e}))},a.handleMoveDown=function(){var e=Object(d.a)(a.state.gridData);a.dataItemIndex<a.state.gridData.length&&(e.splice(a.dataItemIndex,1),e.splice(a.dataItemIndex+1,0,a.dataItem),a.setState({gridData:e}))},a.handleDelete=function(){var e=Object(d.a)(a.state.gridData);e.splice(a.dataItemIndex,1),a.setState({gridData:e})},a.handleOnSelect=function(e){switch(e.item.text){case"Move Up":a.handleMoveUp();break;case"Move Down":a.handleMoveDown();break;case"Delete":a.handleDelete()}a.setState({open:!1})},a.handleContextMenuOpen=function(e,t){a.dataItem=t,a.dataItemIndex=a.state.gridData.findIndex(function(e){return e.id===a.dataItem.id}),a.offset={left:e.clientX,top:e.clientY},a.setState({open:!0})},a.onScrollHandler=function(e){var t=e.nativeEvent;if(t.target.scrollTop+10>=t.target.scrollHeight-t.target.clientHeight){var n=a.state.page+1;if(a.state.gridData.length>=a.state.total)return;var i=[].concat(Object(d.a)(a.state.gridData),Object(d.a)(v.data[n]));a.setState(function(e){return{gridData:Object(d.a)(i),page:n}})}},a.onSortChange=function(e){a.setState(function(t){return{sort:e.sort}})},a.rowRender=function(e,t){var i=Object(o.a)({},e.props,{onContextMenu:function(e){e.preventDefault(),a.handleContextMenuOpen(e,t.dataItem)}});return n.cloneElement(e,Object(o.a)({},i),e.props.children)},a.onFilterChange=function(e){a.setState({filter:e.filter})},a.edit=function(e){a.setState({itemInEdit:a.cloneProduct(e)})},a.remove=function(e){var t=a.state.gridData.slice(),n=t.findIndex(function(t){return t.id===e.id});-1!==n&&(t.splice(n,1),a.setState({gridData:t}))},a.newItem=function(e){var t={id:a.generateId(),group:"",subGroup:"",groupName:"",startDate:new Date,endDate:new Date,user:""};return Object.assign(t,e)},a.save=function(){var e=a.state.itemInEdit,t=a.state.gridData.slice();if(void 0===e.id)t.unshift(a.newItem(e));else{var n=t.findIndex(function(t){return t.id===e.id});t.splice(n,1,e)}a.setState({gridData:t,itemInEdit:void 0})},a.cancel=function(){a.setState({itemInEdit:void 0})},a.insert=function(){a.setState({itemInEdit:{}})},a.addRecord=function(){var e={id:a.state.gridData.length+1},t=a.state.gridData.slice();t.unshift(e),a.setState({gridData:t,editID:e.id})},a.rowClick=function(e){a.setState({editID:e.dataItem.id})},a.itemChange=function(e){var t=a.state.gridData.slice(),n=t.findIndex(function(t){return t.id===e.dataItem.id});t[n]=Object(o.a)({},t[n],Object(l.a)({},e.field,e.value)),a.setState({gridData:t})},a.state={gridData:Object(d.a)(v.data[0]),total:v.total,page:0,sort:[{field:"activity",dir:"asc"}],editID:null,activeItem:null,active:null,filter:{logic:"or",filters:[{field:"group",operator:"contains",value:""}]}},S.reorder=a.reorder.bind(Object(h.a)(a)),S.dragStart=a.dragStart.bind(Object(h.a)(a)),a}return Object(D.a)(t,e),Object(u.a)(t,[{key:"generateId",value:function(){return this.state.total+11}},{key:"render",value:function(){var e,t,a=this,r=this.state,c=r.gridData,l=r.total,o=r.filter;return n.createElement("div",null,n.createElement(y.a,{offset:this.offset,show:this.state.open,popupClass:"popup-content"},n.createElement(b.a,{vertical:!0,style:{display:"inline-block"},onSelect:this.handleOnSelect},n.createElement(b.b,{text:"Move Up"}),n.createElement(b.b,{text:"Move Down"}),n.createElement(b.b,{text:"Delete"}))),n.createElement(g.a,{style:{height:"290px"},data:Object(f.a)(c,o),total:l,pageSize:4,onScroll:this.onScrollHandler,sortable:!0,onSortChange:this.onSortChange,resizable:!0,reorderable:!0,rowRender:this.rowRender,filterable:!0,filter:o,onFilterChange:function(e){a.onFilterChange(e)}},n.createElement(g.e,null,n.createElement("button",{onClick:this.insert,className:"k-button"},"Add New")),n.createElement(g.c,{title:"",width:"50px",cell:S,filterable:!1}),n.createElement(g.c,{field:"id",width:"0px",filterable:!1}),n.createElement(g.c,{field:"group",title:"Group",width:"190px"}),n.createElement(g.c,{field:"subGroup",title:"Sub Group",width:"190px"}),n.createElement(g.c,{field:"groupName",title:"Group Name",width:"150px",filterable:!1}),n.createElement(g.c,{field:"startDate",title:"Start Date",width:"190px",editor:"date",filter:"date",format:w}),n.createElement(g.c,{field:"endDate",title:"End Date",width:"120px",editor:"date",format:w,filterable:!1}),n.createElement(g.c,{field:"user",title:"User",width:"190px"}),n.createElement(g.c,{width:"190px",title:"Edit",filterable:!1,cell:(e=this.edit,t=this.remove,function(a){function n(){return Object(s.a)(this,n),Object(p.a)(this,Object(m.a)(n).apply(this,arguments))}return Object(D.a)(n,a),Object(u.a)(n,[{key:"render",value:function(){var a=this;return i.a.createElement("td",null,i.a.createElement("button",{className:"k-primary k-button k-grid-edit-command",onClick:function(){e(a.props.dataItem)}},"Edit"),"\xa0",i.a.createElement("button",{className:"k-button k-grid-remove-command",onClick:function(){t(a.props.dataItem)}},"Remove"))}}]),n}(g.b))})),this.state.itemInEdit&&n.createElement(O,{dataItem:this.state.itemInEdit,save:this.save,cancel:this.cancel}))}},{key:"dialogTitle",value:function(){return"".concat(void 0===this.state.itemInEdit.id?"Add":"Edit")}},{key:"cloneProduct",value:function(e){return Object.assign({},e)}}]),t}(n.Component),T={data:[[{id:1,task:"Initial Phrmacist Call",patient:"John Doe",group:"3UA",activity:"",number:null,creationDate:new Date(2018,8,20),createdBy:"Jane Smith",assignedTo:"CM",contactType:"",note:"",status:"inprogress",statusUpdete:new Date(2018,8,20)},{id:2,task:"Initial Phrmacist Call",patient:"John Doe",group:"3UA",activity:"",number:null,creationDate:new Date(2018,8,20),createdBy:"Jane Smith",assignedTo:"CM",contactType:"",note:"",status:"inprogress",statusUpdete:new Date(2018,8,20)},{id:3,task:"Initial Phrmacist Call",patient:"John Doe",group:"3UA",activity:"",number:null,creationDate:new Date(2018,8,20),createdBy:"Jane Smith",assignedTo:"CM",contactType:"",note:"",status:"inprogress",statusUpdete:new Date(2018,8,20)},{id:4,task:"Initial Phrmacist Call",patient:"John Doe",group:"3UA",activity:"",number:null,creationDate:new Date(2018,8,20),createdBy:"Jane Smith",assignedTo:"CM",contactType:"",note:"",status:"inprogress",statusUpdete:new Date(2018,8,20)}],[{id:5,task:"Initial Phrmacist Call",patient:"John Doe",group:"3UA",activity:"",number:null,creationDate:new Date(2018,8,20),createdBy:"Jane Smith",assignedTo:"CM",contactType:"",note:"",status:"inprogress",statusUpdete:new Date(2018,8,20)},{id:6,task:"Initial Phrmacist Call",patient:"John Doe",group:"3UA",activity:"",number:null,creationDate:new Date(2018,8,20),createdBy:"Jane Smith",assignedTo:"CM",contactType:"",note:"",status:"inprogress",statusUpdete:new Date(2018,8,20)},{id:7,task:"Initial Phrmacist Call",patient:"John Doe",group:"4UA",activity:"",number:null,creationDate:new Date(2018,8,20),createdBy:"Jane Smith",assignedTo:"CM",contactType:"",note:"",status:"inprogress",statusUpdete:new Date(2018,8,20)},{id:8,task:"Initial Phrmacist Call",patient:"John Doe",group:"4UA",activity:"",number:null,creationDate:new Date(2018,8,20),createdBy:"Jane Smith",assignedTo:"CM",contactType:"",note:"",status:"inprogress",statusUpdete:new Date(2018,8,20)}]],details:[[{activity:"Outreach Attempt",number:1,creationDate:new Date(2018,8,20),createdBy:"Jane Smith",assignedTo:"CM",contactType:"Phone",note:"Follow-up call scheduled",status:"completed",statusUpdete:new Date(2018,8,20)},{activity:"Outreach Attempt",number:1,creationDate:new Date(2018,8,20),createdBy:"Jane Smith",assignedTo:"CM",contactType:"Phone",note:"Follow-up call scheduled",status:"completed",statusUpdete:new Date(2018,8,20)},{activity:"Outreach Attempt",number:1,creationDate:new Date(2018,8,20),createdBy:"Jane Smith",assignedTo:"CM",contactType:"Phone",note:"Follow-up call scheduled",status:"completed",statusUpdete:new Date(2018,8,20)}],[{activity:"Outreach Attempt",number:1,creationDate:new Date(2018,8,20),createdBy:"Jane Smith",assignedTo:"CM",contactType:"Phone",note:"Follow-up call scheduled",status:"completed",statusUpdete:new Date(2018,8,20)},{activity:"Outreach Attempt",number:1,creationDate:new Date(2018,8,20),createdBy:"Jane Smith",assignedTo:"CM",contactType:"Phone",note:"Follow-up call scheduled",status:"completed",statusUpdete:new Date(2018,8,20)},{activity:"Outreach Attempt",number:1,creationDate:new Date(2018,8,20),createdBy:"Jane Smith",assignedTo:"CM",contactType:"Phone",note:"Follow-up call scheduled",status:"completed",statusUpdete:new Date(2018,8,20)}],[{activity:"Outreach Attempt",number:1,creationDate:new Date(2018,8,20),createdBy:"Jane Smith",assignedTo:"CM",contactType:"Phone",note:"Follow-up call scheduled",status:"completed",statusUpdete:new Date(2018,8,20)},{activity:"Outreach Attempt",number:1,creationDate:new Date(2018,8,20),createdBy:"Jane Smith",assignedTo:"CM",contactType:"Phone",note:"Follow-up call scheduled",status:"completed",statusUpdete:new Date(2018,8,20)},{activity:"Outreach Attempt",number:1,creationDate:new Date(2018,8,20),createdBy:"Jane Smith",assignedTo:"CM",contactType:"Phone",note:"Follow-up call scheduled",status:"completed",statusUpdete:new Date(2018,8,20)}],[{activity:"Outreach Attempt",number:1,creationDate:new Date(2018,8,20),createdBy:"Jane Smith",assignedTo:"CM",contactType:"Phone",note:"Follow-up call scheduled",status:"completed",statusUpdete:new Date(2018,8,20)},{activity:"Outreach Attempt",number:1,creationDate:new Date(2018,8,20),createdBy:"Jane Smith",assignedTo:"CM",contactType:"Phone",note:"Follow-up call scheduled",status:"completed",statusUpdete:new Date(2018,8,20)},{activity:"Outreach Attempt",number:1,creationDate:new Date(2018,8,20),createdBy:"Jane Smith",assignedTo:"CM",contactType:"Phone",note:"Follow-up call scheduled",status:"completed",statusUpdete:new Date(2018,8,20)}],[{activity:"Outreach Attempt",number:1,creationDate:new Date(2018,8,20),createdBy:"Jane Smith",assignedTo:"CM",contactType:"Phone",note:"Follow-up call scheduled",status:"completed",statusUpdete:new Date(2018,8,20)},{activity:"Outreach Attempt",number:1,creationDate:new Date(2018,8,20),createdBy:"Jane Smith",assignedTo:"CM",contactType:"Phone",note:"Follow-up call scheduled",status:"completed",statusUpdete:new Date(2018,8,20)},{activity:"Outreach Attempt",number:1,creationDate:new Date(2018,8,20),createdBy:"Jane Smith",assignedTo:"CM",contactType:"Phone",note:"Follow-up call scheduled",status:"completed",statusUpdete:new Date(2018,8,20)}],[{activity:"Outreach Attempt",number:1,creationDate:new Date(2018,8,20),createdBy:"Jane Smith",assignedTo:"CM",contactType:"Phone",note:"Follow-up call scheduled",status:"completed",statusUpdete:new Date(2018,8,20)},{activity:"Outreach Attempt",number:1,creationDate:new Date(2018,8,20),createdBy:"Jane Smith",assignedTo:"CM",contactType:"Phone",note:"Follow-up call scheduled",status:"completed",statusUpdete:new Date(2018,8,20)},{activity:"Outreach Attempt",number:1,creationDate:new Date(2018,8,20),createdBy:"Jane Smith",assignedTo:"CM",contactType:"Phone",note:"Follow-up call scheduled",status:"completed",statusUpdete:new Date(2018,8,20)}],[{activity:"Outreach Attempt",number:1,creationDate:new Date(2018,8,20),createdBy:"Jane Smith",assignedTo:"CM",contactType:"Phone",note:"Follow-up call scheduled",status:"completed",statusUpdete:new Date(2018,8,20)},{activity:"Outreach Attempt",number:1,creationDate:new Date(2018,8,20),createdBy:"Jane Smith",assignedTo:"CM",contactType:"Phone",note:"Follow-up call scheduled",status:"completed",statusUpdete:new Date(2018,8,20)},{activity:"Outreach Attempt",number:1,creationDate:new Date(2018,8,20),createdBy:"Jane Smith",assignedTo:"CM",contactType:"Phone",note:"Follow-up call scheduled",status:"completed",statusUpdete:new Date(2018,8,20)}],[{activity:"Outreach Attempt",number:1,creationDate:new Date(2018,8,20),createdBy:"Jane Smith",assignedTo:"CM",contactType:"Phone",note:"Follow-up call scheduled",status:"completed",statusUpdete:new Date(2018,8,20)},{activity:"Outreach Attempt",number:1,creationDate:new Date(2018,8,20),createdBy:"Jane Smith",assignedTo:"CM",contactType:"Phone",note:"Follow-up call scheduled",status:"completed",statusUpdete:new Date(2018,8,20)},{activity:"Outreach Attempt",number:1,creationDate:new Date(2018,8,20),createdBy:"Jane Smith",assignedTo:"CM",contactType:"Phone",note:"Follow-up call scheduled",status:"completed",statusUpdete:new Date(2018,8,20)}],[{activity:"Outreach Attempt",number:1,creationDate:new Date(2018,8,20),createdBy:"Jane Smith",assignedTo:"CM",contactType:"Phone",note:"Follow-up call scheduled",status:"completed",statusUpdete:new Date(2018,8,20)},{activity:"Outreach Attempt",number:1,creationDate:new Date(2018,8,20),createdBy:"Jane Smith",assignedTo:"CM",contactType:"Phone",note:"Follow-up call scheduled",status:"completed",statusUpdete:new Date(2018,8,20)},{activity:"Outreach Attempt",number:1,creationDate:new Date(2018,8,20),createdBy:"Jane Smith",assignedTo:"CM",contactType:"Phone",note:"Follow-up call scheduled",status:"completed",statusUpdete:new Date(2018,8,20)}],[{activity:"Outreach Attempt",number:1,creationDate:new Date(2018,8,20),createdBy:"Jane Smith",assignedTo:"CM",contactType:"Phone",note:"Follow-up call scheduled",status:"completed",statusUpdete:new Date(2018,8,20)},{activity:"Outreach Attempt",number:1,creationDate:new Date(2018,8,20),createdBy:"Jane Smith",assignedTo:"CM",contactType:"Phone",note:"Follow-up call scheduled",status:"completed",statusUpdete:new Date(2018,8,20)},{activity:"Outreach Attempt",number:1,creationDate:new Date(2018,8,20),createdBy:"Jane Smith",assignedTo:"CM",contactType:"Phone",note:"Follow-up call scheduled",status:"completed",statusUpdete:new Date(2018,8,20)}]],total:8},k=function(){function e(t,a,n){Object(s.a)(this,e),this.enterEdit=t,this.exitEdit=a,this.editFieldName=n,this.cellRender=this.cellRender.bind(this),this.rowRender=this.rowRender.bind(this)}return Object(u.a)(e,[{key:"cellRender",value:function(e,t){var a=this,n=t.dataItem,r=t.field,c=t.dataItem[this.editFieldName]&&t.field===t.dataItem[this.editFieldName]?{ref:function(e){var t=e&&e.querySelector("input");t&&t!==document.activeElement&&("checkbox"===t.type?t.focus():t.select())}}:{onClick:function(){a.enterEdit(n,r)}};return i.a.cloneElement(e,Object(o.a)({},e.props,c),e.props.children)}},{key:"rowRender",value:function(e,t){var a=this,n=Object(o.a)({},e.props,{onMouseDown:function(){a.preventExit=!0,clearTimeout(a.preventExitTimeout),a.preventExitTimeout=setTimeout(function(){a.preventExit=void 0})},onBlur:function(){clearTimeout(a.blurTimeout),a.preventExit||(a.blurTimeout=setTimeout(function(){a.exitEdit()}))},onFocus:function(){clearTimeout(a.blurTimeout)}});return i.a.cloneElement(e,Object(o.a)({},n),e.props.children)}}]),e}();function A(e){return Object.assign({},e)}var j=function(e){function t(){return Object(s.a)(this,t),Object(p.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(D.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return n.createElement("span",{title:this.props.title,style:{color:"#53d2fa"}},this.props.title)}}]),t}(n.Component),P=function(e){function t(){return Object(s.a)(this,t),Object(p.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(D.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this.props.dataItem.details;return e?n.createElement(g.a,{data:e},n.createElement(g.c,{field:"id",width:"0px",headerCell:!1}),n.createElement(g.c,{field:"task",title:"Task",width:"150px",headerCell:!1}),n.createElement(g.c,{field:"patient",title:"Patient",width:"150px",headerCell:!1}),n.createElement(g.c,{field:"group",title:"Group",width:"100px"}),n.createElement(g.c,{field:"activity",title:"Activity",width:"150px"}),n.createElement(g.c,{field:"number",title:"#",width:"50px"}),n.createElement(g.c,{field:"creationDate",title:"Creation Date",width:"150px",editor:"date",format:w}),n.createElement(g.c,{field:"createdBy",title:"Created By",width:"120px"}),n.createElement(g.c,{field:"assignedTo",title:"Assigned To",width:"150px"}),n.createElement(g.c,{field:"contactType",title:"Contact Type",width:"120px"}),n.createElement(g.c,{field:"note",title:"Note",width:"190px"}),n.createElement(g.c,{field:"status",title:"Status",width:"120px"}),n.createElement(g.c,{field:"statusUpdete",title:"Status Updete",width:"150px",editor:"date",format:w})):n.createElement("div",{style:{height:"50px",width:"100%"}},n.createElement("div",{style:{position:"absolute",width:"100%"}},n.createElement("div",{className:"k-loading-image"})))}}]),t}(g.d),M=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(p.a)(this,Object(m.a)(t).call(this,e))).onScrollHandler=function(e){var t=e.nativeEvent;if(t.target.scrollTop+10>=t.target.scrollHeight-t.target.clientHeight){var n=a.state.page+1;if(a.state.gridData.length>=a.state.total)return;var i=[].concat(Object(d.a)(a.state.gridData),Object(d.a)(T.data[n]));a.setState(function(e){return{gridData:Object(d.a)(i),page:n}})}},a.onSortChange=function(e){a.setState(function(t){return{sort:e.sort}})},a.expandChange=function(e){e.dataItem.expanded=e.value;var t=e.dataItem.id;if(a.setState(Object(o.a)({},a.state)),e.value&&!e.dataItem.details){var n=a.state.gridData.slice(),i=n.findIndex(function(e){return e.id===t});n[i].details=T.details[i],a.setState({gridData:n})}},a.enterEdit=function(e,t){e.inEdit&&t===a.state.editField||(a.exitEdit(),e.inEdit=t,a.setState({editField:t,gridData:a.state.gridData}))},a.exitEdit=function(){a.state.gridData.forEach(function(e){e.inEdit=void 0}),a.setState({gridData:a.state.gridData,editField:void 0})},a.saveChanges=function(){var e;(e=T.data[a.state.page]).splice.apply(e,[0,T.data[a.state.page].length].concat(Object(d.a)(a.state.gridData))),a.setState({gridData:T.data[a.state.page].map(A),editField:void 0,changes:!1})},a.cancelChanges=function(){a.setState({gridData:T.data[a.state.page].map(A),changes:!1})},a.itemChange=function(e){e.dataItem[e.field]=e.value,a.setState({changes:!0})},a.state={gridData:Object(d.a)(T.data[0]),total:T.total,sort:[{field:"task",dir:"asc"}],page:0,editID:null,group:[{field:"group"}],editItem:void 0,changes:!1},a.renderers=new k(a.enterEdit.bind(Object(h.a)(a)),a.exitEdit.bind(Object(h.a)(a)),"inEdit"),a}return Object(D.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this.state,t=e.gridData,a=e.total,i=e.sort;return n.createElement("div",null,n.createElement(g.a,{style:{height:"300px"},data:t,total:a,pageSize:4,onScroll:this.onScrollHandler,sortable:!0,sort:i,onSortChange:this.onSortChange,editField:"inEdit",onItemChange:this.itemChange,cellRender:this.renderers.cellRender,rowRender:this.renderers.rowRender,resizable:!0,reorderable:!0,onExpandChange:this.expandChange,expandField:"expanded",detail:P,rowHeight:50},n.createElement(g.e,null,n.createElement("button",{title:"Save Changes",className:"k-button",onClick:this.saveChanges,disabled:!this.state.changes},"Save Changes"),n.createElement("button",{title:"Cancel Changes",className:"k-button",onClick:this.cancelChanges,disabled:!this.state.changes},"Cancel Changes")),n.createElement(g.c,{field:"id",width:"0px",headerCell:!1}),n.createElement(g.c,{field:"task",title:"Task",width:"150px",headerCell:!1}),n.createElement(g.c,{field:"patient",title:"Patient",width:"150px",headerCell:!1}),n.createElement(g.c,{field:"group",title:"Group",width:"100px"}),n.createElement(g.c,{field:"activity",title:"Activity",width:"150px"}),n.createElement(g.c,{field:"number",title:"#",width:"50px"}),n.createElement(g.c,{field:"creationDate",title:"Creation Date",width:"150px",editor:"date",format:w}),n.createElement(g.c,{field:"createdBy",title:"Created By",width:"120px"}),n.createElement(g.c,{field:"assignedTo",title:"Assigned To",width:"150px"}),n.createElement(g.c,{field:"contactType",title:"Contact Type",width:"120px"}),n.createElement(g.c,{field:"note",title:"Note",width:"190px"}),n.createElement(g.c,{field:"status",title:"Status",width:"120px",headerCell:j}),n.createElement(g.c,{field:"statusUpdete",title:"Status Updete",width:"120px",editor:"date",format:w})))}}]),t}(n.Component),U=a(14),B=function(e){var t=[{text:"completed",value:"completed"},{text:"inprogress",value:"inprogress"},{text:"todo",value:"todo"}],a=e.dataItem[e.field];return e.dataItem.inEdit?i.a.createElement("td",null,i.a.createElement(U.a,{style:{width:"100px"},onChange:function(t){e.onChange({dataItem:e.dataItem,field:e.field,syntheticEvent:t.syntheticEvent,value:t.target.value.value})},value:t.find(function(e){return e.value===a}),data:t,textField:"text"})):i.a.createElement("td",null,function(e){switch(e){case"completed":return i.a.createElement("span",{className:"k-icon k-i-close k-i-x",style:{color:"red"}});case"inprogress":return i.a.createElement("span",{className:"k-icon k-i-arrow-right",style:{color:"blue"}})}return""}(e.dataItem[e.field]))},F={data:[{id:1,activity:"Oautreach Attempt 1",createDate:new Date(2018,8,20),deadline:new Date(2018,8,20),createdBy:"You",contactWith:"Patient",note:"Follow-up call schedule",status:"completed",statusUpdate:new Date(2018,8,20)},{id:2,activity:"Oautreach Attempt 2",createDate:new Date(2018,8,20),deadline:new Date(2018,8,20),createdBy:"You",contactWith:"Patient",note:"Follow-up call schedule",status:"completed",statusUpdate:new Date(2018,8,20)},{id:3,activity:"Oautreach Attempt 3",createDate:new Date(2018,8,20),deadline:new Date(2018,8,20),createdBy:"You",contactWith:"Patient",note:"Follow-up call schedule",status:"completed",statusUpdate:new Date(2018,8,20)},{id:4,activity:"Oautreach Attempt 4",createDate:new Date(2018,8,20),deadline:new Date(2018,8,20),createdBy:"You",contactWith:"Patient",note:"Follow-up call schedule",status:"todo",statusUpdate:new Date(2018,8,20)},{id:5,activity:"Oautreach Attempt 5",createDate:new Date(2018,8,20),deadline:new Date(2018,8,20),createdBy:"You",contactWith:"Patient",note:"Follow-up call schedule",status:"completed",statusUpdate:new Date(2018,8,20)},{id:6,activity:"Oautreach Attempt 6",createDate:new Date(2018,8,20),deadline:new Date(2018,8,20),createdBy:"You",contactWith:"Patient",note:"Follow-up call schedule",status:"todo",statusUpdate:new Date(2018,8,20)},{id:7,activity:"Oautreach Attempt 7",createDate:new Date(2018,8,20),deadline:new Date(2018,8,20),createdBy:"You",contactWith:"Patient",note:"Follow-up call schedule",status:"completed",statusUpdate:new Date(2018,8,20)},{id:8,activity:"Oautreach Attempt 8",createDate:new Date(2018,8,20),deadline:new Date(2018,8,20),createdBy:"You",contactWith:"Patient",note:"Follow-up call schedule",status:"completed",statusUpdate:new Date(2018,8,20)},{id:9,activity:"Oautreach Attempt 9",createDate:new Date(2018,8,20),deadline:new Date(2018,8,20),createdBy:"You",contactWith:"Patient",note:"Follow-up call schedule",status:"inprogress",statusUpdate:new Date(2018,8,20)},{id:10,activity:"Oautreach Attempt 10",createDate:new Date(2018,8,20),deadline:new Date(2018,8,20),createdBy:"You",contactWith:"Patient",note:"Follow-up call schedule",status:"todo",statusUpdate:new Date(2018,8,20)},{id:11,activity:"Oautreach Attempt 11",createDate:new Date(2018,8,20),deadline:new Date(2018,8,20),createdBy:"You",contactWith:"Patient",note:"Follow-up call schedule",status:"inprogress",statusUpdate:new Date(2018,8,20)},{id:12,activity:"Oautreach Attempt 12",createDate:new Date(2018,8,20),deadline:new Date(2018,8,20),createdBy:"You",contactWith:"Patient",note:"Follow-up call schedule",status:"inprogress",statusUpdate:new Date(2018,8,20)}],total:12},J=function(e){function t(){var e,a;Object(s.a)(this,t);for(var i=arguments.length,r=new Array(i),c=0;c<i;c++)r[c]=arguments[c];return(a=Object(p.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={taskHistory:[],total:F.total,sort:[{field:"activity",dir:"asc"}],editID:null,skip:0,take:4},a.onSortChange=function(e){a.setState(function(t){return{sort:e.sort}})},a.rowRender=function(e,t){var a="inprogress"===t.dataItem.status,i="todo"===t.dataItem.status,r={style:a?{backgroundColor:"rgb(55, 180, 0, 0.2)"}:i?{backgroundColor:"transparent"}:{backgroundColor:"rgb(243, 23, 0, 0.2)"}};return n.cloneElement(e,Object(o.a)({},r),e.props.children)},a.rowClick=function(e){a.setState(function(t){return{editID:e.dataItem.id}})},a.itemChange=function(e){var t=a.state.taskHistory.slice(),n=t.findIndex(function(t){return t.id===e.dataItem.id});t[n]=Object(o.a)({},t[n],Object(l.a)({},e.field,e.value)),a.setState(function(e){return{taskHistory:t}})},a.pageChange=function(e){console.log("event.page",e.page),a.setState({skip:e.page.skip,take:e.page.take})},a}return Object(D.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){try{var e=Object(d.a)(F.data),t=F.total;this.setState(function(a){return{taskHistory:e,total:t}})}catch(a){console.error(a)}}},{key:"render",value:function(){var e=this,t=this.state,a=t.taskHistory,i=t.total,r=t.sort,c=t.editID,l=t.skip,o=t.take;return n.createElement("div",null,n.createElement(g.a,{style:{height:"240px"},data:Object(f.c)(a.slice(this.state.skip,this.state.take+this.state.skip).map(function(e){return Object.assign({inEdit:e.id===c},e)}),r),total:i,pageSize:4,sortable:!0,sort:r,onSortChange:this.onSortChange,resizable:!0,editField:"inEdit",onRowClick:function(t){return e.rowClick(t)},onItemChange:function(t){return e.itemChange(t)},rowRender:this.rowRender,skip:l,take:o,pageable:!0,onPageChange:this.pageChange},n.createElement(g.c,{field:"id",width:"0px"}),n.createElement(g.c,{field:"activity",title:"Activity",width:"180px"}),n.createElement(g.c,{field:"createDate",title:"Create Date",width:"150px",editor:"date",format:w}),n.createElement(g.c,{field:"deadline",title:"Deadline",width:"150px",editor:"date",format:w}),n.createElement(g.c,{field:"createdBy",title:"Created By",width:"170px"}),n.createElement(g.c,{field:"contactWith",title:"Contact With",width:"170px"}),n.createElement(g.c,{field:"note",title:"Note",width:"150px"}),n.createElement(g.c,{field:"status",title:"Status",width:"170px",cell:B}),n.createElement(g.c,{field:"statusUpdate",title:"Status Update",width:"170px",editor:"date",format:w})))}}]),t}(n.Component),N=function(){return n.createElement("div",{style:{display:"flex"}},n.createElement("div",{style:{display:"flex",width:"17%"}}),n.createElement("div",{style:{display:"flex",flexDirection:"column",width:"83%"}},n.createElement(J,null),n.createElement("br",null),n.createElement("br",null),n.createElement("br",null),n.createElement(M,null),n.createElement("br",null),n.createElement("br",null),n.createElement("br",null),n.createElement(x,null),n.createElement("br",null),n.createElement("br",null),n.createElement("br",null)))};a(47),a(48);var H=function(){return i.a.createElement("div",{className:"App"},i.a.createElement(N,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(i.a.createElement(H,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[30,1,2]]]);
//# sourceMappingURL=main.34bce149.chunk.js.map