(this["webpackJsonpvocation-frontend"]=this["webpackJsonpvocation-frontend"]||[]).push([[27],{1262:function(e,a,t){"use strict";t.r(a);var o=t(4),n=t(5),s=t(10),r=t(9),l=t(3),m=t(11),i=t(0),d=t.n(i),c=t(6),b=t(24),h=t(80),u=t(81),p=t(23),_=t(128),f=t(151),v=t(89),E=(t(673),t(98)),N=t.n(E),y=function(e){function a(e){var t;return Object(o.a)(this,a),(t=Object(s.a)(this,Object(r.a)(a).call(this,e))).state={removeModalShow:!1,visible:!1,visible_bathmodal:!1,page_data:{},post_data:{bedroom_data:{bedroom_id:null,babycrib:0,bedroom_name:"",bunkbed:0,murphy:0,nochildbed:0,noof_king:0,noofdouble:0,nooqueen:0,nosleepsofa:0,twinsingle:0},bathroom_data:{bathroom_name:"",bathroom_type:"",bathfeature:[]}},is_add_bedroom:!0,is_add_bathroom:!0},t.handleInputBedroomDetail=t.handleInputBedroomDetail.bind(Object(l.a)(t)),t.handleBedroomSubmit=t.handleBedroomSubmit.bind(Object(l.a)(t)),t.handleEditBedroomShow=t.handleEditBedroomShow.bind(Object(l.a)(t)),t.handleRemoveBedroom=t.handleRemoveBedroom.bind(Object(l.a)(t)),t.handleBathroomInputDetails=t.handleBathroomInputDetails.bind(Object(l.a)(t)),t.handleBathroomSubmit=t.handleBathroomSubmit.bind(Object(l.a)(t)),t.handleEditBathroomShow=t.handleEditBathroomShow.bind(Object(l.a)(t)),t.handleRemoveBathroom=t.handleRemoveBathroom.bind(Object(l.a)(t)),t}return Object(m.a)(a,e),Object(n.a)(a,[{key:"componentDidMount",value:function(){var e=this,a=this.props.match.params.room_id;v.a.getBasicsData(a).then((function(a){a&&e.setState({page_data:a})}))}},{key:"handleInputBedroomDetail",value:function(e){e.preventDefault();var a=e.target,t=a.name,o=a.value,n=this.state.post_data;n.bedroom_data[t]=o,this.setState({post_data:n})}},{key:"handleBathroomInputDetails",value:function(e){var a=e.target,t=a.name,o=a.value,n=this.state.post_data;if("checkbox"===a.type){var s=n.bathroom_data.bathfeature;s&&-1!==s.indexOf(o)?s.splice(s.indexOf(o),1):s.push(o),n.bathroom_data[t]=s}else n.bathroom_data[t]=o;this.setState({post_data:n})}},{key:"handleBedroomSubmit",value:function(e){var a=this;e.preventDefault();var t=this.state.post_data.bedroom_data,o=this.props.match.params.room_id;if(this.state.post_data.bedroom_data.bedroom_name)if(t.babycrib||t.bunkbed||t.murphy||t.nochildbed||t.noof_king||t.noofdouble||t.nooqueen||t.nosleepsofa||t.twinsingle){var n=this.state.post_data.bedroom_data;n.room_id=o,!0===this.state.is_add_bedroom?v.a.updateBedRoom(n).then((function(e){if("success"===e.status){p.b.success("New Room Created Successfully",{position:p.b.POSITION.TOP_RIGHT});var t=a.state.page_data;t.bedrooms.push(e.result),a.setState({visible:!1,page_data:t}),a.props.onUpdateSidebar()}else p.b.error(e.message,{position:p.b.POSITION.TOP_RIGHT})})):(n.id=this.state.post_data.bedroom_data.bedroom_id,v.a.updateBedRoom(n).then((function(e){if("success"===e.status){p.b.success(e.message,{position:p.b.POSITION.TOP_RIGHT});var t=a.state.page_data,o=t.bedrooms.findIndex((function(a,t){return a.id===e.result.id}));t.bedrooms[o]=e.result,a.setState({visible:!1,page_data:t}),a.props.onUpdateSidebar()}else p.b.error(e.message,{position:p.b.POSITION.TOP_RIGHT})})))}else p.b.error("At least one of above fields must be selected!.",{position:p.b.POSITION.TOP_RIGHT});else p.b.error("Please Input Bedroom Name",{position:p.b.POSITION.TOP_RIGHT})}},{key:"handleBathroomSubmit",value:function(e){var a=this;e.preventDefault();var t=this.state.post_data.bathroom_data;if(t.bathroom_name)if(t.bathroom_type){var o=this.state.post_data.bathroom_data;o.room_id=this.props.match.params.room_id,!0===this.state.is_add_bathroom?v.a.updateBathRoom(o).then((function(e){if("success"===e.status){var t=a.state.page_data;t.bathrooms.push(e.result),p.b.success("New Bathroom Created Successfully",{position:p.b.POSITION.TOP_RIGHT}),a.setState({visible_bathmodal:!1,page_data:t,is_add_bathroom:!0}),a.props.onUpdateSidebar()}else p.b.error(e.message,{position:p.b.POSITION.TOP_RIGHT})})):(o.id=this.state.post_data.bathroom_data.bathroom_id,v.a.updateBathRoom(o).then((function(e){if("success"===e.status){var t=a.state.page_data,o=t.bathrooms.findIndex((function(a,t){return a.id===e.result.id}));t.bathrooms[o]=e.result,a.setState({visible_bathmodal:!1,page_data:t,is_add_bathroom:!1}),a.props.onUpdateSidebar(),p.b.success("Bathroom Updated Successfully",{position:p.b.POSITION.TOP_RIGHT})}else p.b.error(e.message,{position:p.b.POSITION.TOP_RIGHT})})))}else p.b.error("Please Choose Bathroom Type",{position:p.b.POSITION.TOP_RIGHT});else p.b.error("Please Input Bathroom Name",{position:p.b.POSITION.TOP_RIGHT})}},{key:"handleEditBedroomShow",value:function(e,a,t){var o=this.state.post_data,n=JSON.parse(t.bedroom_details);o.bedroom_data={babycrib:n.babycrib,bedroom_name:t.bedroom_name,bunkbed:n.bunk,murphy:n.murphy,nochildbed:n.child,noof_king:n.king,noofdouble:n.double,nooqueen:n.queen,nosleepsofa:n.sleepsofa,twinsingle:n.single,bedroom_id:e},this.setState({is_add_bedroom:!1,post_data:o,visible:!0})}},{key:"handleEditBathroomShow",value:function(e,a,t){var o=this.state.post_data;o.bathroom_data={bathroom_id:e,bathroom_name:t.bathroom_name,bathroom_type:t.bathroom_type,bathfeature:t.bathfeature?t.bathfeature.split(","):[]},this.setState({is_add_bathroom:!1,post_data:o,visible_bathmodal:!0});for(var n=document.getElementsByClassName("checkbox_check"),s=0;s<n.length;s++)n[s].checked=!1;this.state.post_data.bathroom_data.bathfeature.map((function(e){return document.getElementById(e).checked=!0,!0}))}},{key:"handleRemoveBedroom",value:function(e,a){var t=this;v.a.deleteBedRoom(e,a).then((function(e){if("success"===e.status){p.b.success("New Room Created Successfully",{position:p.b.POSITION.TOP_RIGHT});var a=t.state.page_data;a.bedrooms=e.bedrooms,t.setState({visible:!1,page_data:a}),t.props.onUpdateSidebar()}else p.b.error(e.message,{position:p.b.POSITION.TOP_RIGHT})}))}},{key:"handleRemoveBathroom",value:function(e,a){var t=this;v.a.deleteBathRoom(e,a).then((function(e){if("success"===e.status){p.b.success("Bathroom Removed Successfully",{position:p.b.POSITION.TOP_RIGHT});var a=t.state.page_data;a.bathrooms=e.bathrooms,t.setState({visible:!1,page_data:a}),t.props.onUpdateSidebar()}else p.b.error(e.message,{position:p.b.POSITION.TOP_RIGHT})}))}},{key:"openModal",value:function(){this.state.post_data.bedroom_data={babycrib:0,bedroom_name:"",bunkbed:0,murphy:0,nochildbed:0,noof_king:0,noofdouble:0,nooqueen:0,nosleepsofa:0,twinsingle:0,bedroom_id:null},this.setState({visible:!0,is_add_bedroom:!0})}},{key:"openBathModal",value:function(){var e=this.state.post_data;e.bathroom_data={bathroom_id:null,bathroom_name:"",bathroom_type:"",bathfeature:[]};for(var a=document.getElementsByClassName("checkbox_check"),t=0;t<a.length;t++)a[t].checked=!1;this.setState({is_add_bathroom:!0,post_data:e,visible_bathmodal:!0})}},{key:"closeModal",value:function(){this.setState({visible:!1})}},{key:"closeBathModal",value:function(){this.setState({visible_bathmodal:!1})}},{key:"modalContentOfAddBedRoom",value:function(){var e=this;return d.a.createElement("div",{className:"panel rjbedbathpanel"},d.a.createElement("div",{className:"panel-header"},d.a.createElement("div",{className:"h4 js-address-nav-heading"},"Add Bedroom")),d.a.createElement("form",{id:"editbedroomsForm",name:"editbedroomsForm",method:"post",onSubmit:this.handleBedroomSubmit,style:{overFolwY:"scroll"}},d.a.createElement("div",{className:"panel-body"},d.a.createElement("div",{className:"col-md-12"},d.a.createElement("label",null,"Bedroom Name"),d.a.createElement("input",{type:"text",name:"bedroom_name",value:this.state.post_data.bedroom_data.bedroom_name,className:"form-control rjcontrol",placeholder:"Bedroom Name",required:"",onChange:this.handleInputBedroomDetail})),[{label:"King",name:"noof_king"},{label:"Queen",name:"nooqueen"},{label:"Double",name:"noofdouble"},{label:"Twin / single",name:"twinsingle"},{label:"Bunk bed",name:"bunkbed"},{label:"Child bed",name:"nochildbed"},{label:"Sleep sofa / futon",name:"nosleepsofa"},{label:"Murphy bed",name:"murphy"},{label:"Baby crib",name:"babycrib"}].map((function(a,t){return d.a.createElement("div",{key:t,className:"col-6 col-md-4 float-left"},d.a.createElement("label",null,a.label),d.a.createElement("select",{name:a.name,value:e.state.post_data.bedroom_data[a.name],className:"form-control rjcontrol",onChange:e.handleInputBedroomDetail},d.a.createElement("option",{defaultValue:"0"},"0"),d.a.createElement("option",{value:"1"},"1"),d.a.createElement("option",{value:"2"},"2"),d.a.createElement("option",{value:"3"},"3"),d.a.createElement("option",{value:"4"},"4"),d.a.createElement("option",{value:"5"},"5")))}))),d.a.createElement("div",{className:"panel-footer"},d.a.createElement("div",{className:"force-oneline"},d.a.createElement("button",{onClick:function(){return e.closeModal()},className:"btn js-secondary-btn"},"Cancel"),d.a.createElement("button",{id:"bedroom_submit",type:"submit",className:"btn btn-primary"},"Submit")))))}},{key:"modalContentOfAddBathRoom",value:function(){var e=this;return d.a.createElement("div",{id:"js-bedroom-bathroom-container",className:"enter_address"},d.a.createElement("div",{className:"panel rjbedbathpanel ng-scope"},d.a.createElement("div",{className:"panel-header"},d.a.createElement(c.b,{to:"#","data-behavior":"modal-close",className:"modal-close"}),d.a.createElement("div",{className:"h4 js-address-nav-heading"},"Add Bathroom")),d.a.createElement("form",{id:"editbathroomsForm",name:"editbathroomsForm",onSubmit:this.handleBathroomSubmit},d.a.createElement("div",{className:"panel-body"},d.a.createElement("div",{className:"col-6 float-left"},d.a.createElement("label",null,"Bathroom Name"),d.a.createElement("input",{type:"text",onChange:this.handleBathroomInputDetails,value:this.state.post_data.bathroom_data.bathroom_name,name:"bathroom_name",className:"form-control rjcontrol",placeholder:"Bathroom Name",required:!0}),d.a.createElement("span",{className:"has-error"},d.a.createElement("span",{style:{opacity:0},className:"help-block help-block-error"},"This field is required!"))),d.a.createElement("div",{className:"col-6 float-left","ng-init":"bathroom_type=''"},d.a.createElement("label",null,"Bathroom Type"),d.a.createElement("select",{name:"bathroom_type",onChange:this.handleBathroomInputDetails,value:this.state.post_data.bathroom_data.bathroom_type,className:"form-control rjcontrol",required:!0},d.a.createElement("option",{value:!0},"Select bathroom type"),d.a.createElement("option",{value:"Full"},"Full"),d.a.createElement("option",{value:"Half"},"Half"),d.a.createElement("option",{value:"Shower"},"Shower")),d.a.createElement("span",{className:"has-error"},d.a.createElement("span",{style:{opacity:0},className:"help-block help-block-error"},"This field is required!"))),d.a.createElement("h3",{className:"bathfeaturerj"},"Bathroom Feature"),d.a.createElement("div",{className:"col-6 float-left"},[{label:"Toilet",id:"Toilet"},{label:"Tub",id:"Tub"},{label:"Bidet",id:"Bidet"}].map((function(a,t){return d.a.createElement("div",{key:"bedroom_1_".concat(t),className:"rjlabelroom"},d.a.createElement("label",{className:"rj_container"},a.label,d.a.createElement("input",{type:"checkbox",className:"checkbox_check",name:"bathfeature",id:a.id,value:a.id,onChange:e.handleBathroomInputDetails,defaultChecked:-1!==e.state.post_data.bathroom_data.bathfeature.indexOf(a.id)}),d.a.createElement("span",{className:"checkmark"})))}))),d.a.createElement("div",{className:"col-6 float-left"},[{label:"Jetted tub",id:"Jetted tub"},{label:"Shower",id:"Shower"},{label:"Outdoor shower",id:"Outdoor shower"}].map((function(a,t){return d.a.createElement("div",{key:"bedroom_2_".concat(t),className:"rjlabelroom"},d.a.createElement("label",{className:"rj_container"},a.label,d.a.createElement("input",{type:"checkbox",className:"checkbox_check",name:"bathfeature",id:a.id,defaultValue:a.id,onChange:e.handleBathroomInputDetails,defaultChecked:-1!==e.state.post_data.bathroom_data.bathfeature.indexOf(a.id)}),d.a.createElement("span",{className:"checkmark"})))})))),d.a.createElement("div",{className:"panel-footer"},d.a.createElement("div",{className:"force-oneline"},d.a.createElement("button",{"data-behavior":"modal-close",className:"btn js-secondary-btn"},"Cancel"),d.a.createElement("button",{id:"bathroomsubmit",className:"btn btn-primary"},"Submit"))))))}},{key:"render",value:function(){var e=this,a=this.modalContentOfAddBedRoom(),t=this.modalContentOfAddBathRoom(),o=this.props.match.params.room_id,n=d.a.createElement("span",{className:"mr-4"},"No Bedrooms Yet!");this.state.page_data.bedrooms&&(n=this.state.page_data.bedrooms.map((function(a){var t=JSON.parse(a.bedroom_details);return d.a.createElement("div",{className:"bedroom_rj d-flex",key:a.id},d.a.createElement("div",{className:"basic-item-text"},d.a.createElement("h5",null,a.bedroom_name),d.a.createElement("p",null,d.a.createElement("b",null,"Beds:"),d.a.createElement("span",{style:{textTransform:"capitalize"}},"king (",t.king,"), "),d.a.createElement("span",{style:{textTransform:"capitalize"}},"queen (",t.queen,"), "),d.a.createElement("span",{style:{textTransform:"capitalize"}},"double (",t.double,"), "),d.a.createElement("span",{style:{textTransform:"capitalize"}},"single (",t.single,"), "),d.a.createElement("span",{style:{textTransform:"capitalize"}},"bunk (",t.bunk,"), "),d.a.createElement("span",{style:{textTransform:"capitalize"}},"child (",t.child,"), "),d.a.createElement("span",{style:{textTransform:"capitalize"}},"sleepsofa (",t.sleepsofa,"), "),d.a.createElement("span",{style:{textTransform:"capitalize"}},"murphy (",t.murphy,"), "),d.a.createElement("span",{style:{textTransform:"capitalize"}},"babycrib (",t.babycrib,"), "),";")),d.a.createElement("div",{className:"basic-item-action"},d.a.createElement(c.b,{to:"#",className:"editbedrooms",id:"js-edit-bedrooms",onClick:function(){return e.handleEditBedroomShow(a.id,a.room_id,a)}},d.a.createElement(h.a,{icon:u.B})),d.a.createElement(c.b,{to:"#",className:"deletebedrooms",onClick:function(){return e.handleRemoveBedroom(a.id,a.room_id)}},d.a.createElement(h.a,{icon:u.L}))))})));var s=d.a.createElement("span",{className:"mr-4"},"No Bathroom Yet!");return this.state.page_data.bathrooms&&(s=this.state.page_data.bathrooms.map((function(a){return d.a.createElement("div",{className:"bedroom_rj d-flex",key:a.id},d.a.createElement("div",{className:"basic-item-text"},d.a.createElement("h5",null,a.bathroom_name),d.a.createElement("p",null,d.a.createElement("b",null,"BathRoom type:")," ",d.a.createElement("span",null,a.bathroom_type)),d.a.createElement("p",null,d.a.createElement("b",null,"Included Feature:")," ",a.bathfeature)),d.a.createElement("div",{className:"basic-item-action"},d.a.createElement(c.b,{to:"#",className:"editbedrooms",onClick:function(){return e.handleEditBathroomShow(a.id,a.room_id,a)}},d.a.createElement(h.a,{icon:u.B})),d.a.createElement(c.b,{to:"#",className:"deletebathrooms",onClick:function(){return e.handleRemoveBathroom(a.id,a.room_id)}},d.a.createElement(h.a,{icon:u.L}))))}))),d.a.createElement("div",{className:"body__room-basic manage-listing-content-wrapper"},d.a.createElement(b.a,{open:this.state.visible,onClose:function(){return e.closeModal()},center:!0,styles:{modal:{padding:"0px"}}},a),d.a.createElement(b.a,{open:this.state.visible_bathmodal,onClose:function(){return e.closeBathModal()},center:!0,styles:{modal:{padding:"0px"}}},t),d.a.createElement("div",{className:"listing_whole col-md-9",id:"js-manage-listing-content"},d.a.createElement("div",{className:"common_listpage"},d.a.createElement(_.a,{title:"Help Travelers Find the Right Fit",descr:"People searching on Vacation.Rentals----- can filter by listing basics to find a space that matches their needs.",next:"description",room_id:o}),d.a.createElement("div",{className:"js-section list_hover col-sm-12 bathbedrj"},d.a.createElement("div",{className:"base_decs"},d.a.createElement("h3",null,"Bedrooms ",d.a.createElement("span",{className:"requiredRJ"},"*"))),d.a.createElement("div",{className:"base_text d-flex"},d.a.createElement("div",{className:"rj_list_property",id:"alloverbedroomsList"},n,d.a.createElement("button",{type:"button",className:"rj_add_bedroom_btn",id:"js-add-bedrooms",style:{border:"#d2950c"},value:"Open",onClick:function(){return e.openModal()}},"Add a bedroom")))),d.a.createElement("div",{className:"js-section list_hover col-sm-12 bathbedrj"},d.a.createElement("div",{className:"base_decs"},d.a.createElement("h3",null,"Bathroom (Optional)")),d.a.createElement("div",{className:"base_text"},d.a.createElement("div",{className:"rj_list_property",id:"alloverbedroomsList"},s,d.a.createElement("button",{to:"add_bathroom",className:"popup-trigger rj_add_bedroom_btn",id:"js-add-bathrooms",style:{border:"#d2950c"},onClick:this.openBathModal.bind(this)},"Add a bathroom")))),d.a.createElement(f.a,{next:"description",room_id:o}),d.a.createElement("hr",null))),d.a.createElement("div",{className:"col-md-3 col-sm-12 listing_desc location_desc"},d.a.createElement("div",{className:"manage_listing_left"},d.a.createElement("img",{src:N.a,className:"col-center",width:75,height:75,alt:"property help"}),d.a.createElement("div",{className:"amenities_about"},d.a.createElement("h4",null,"Bedroom/Bathroom"),d.a.createElement("p",null,'Tell your guests how many bedrooms and bathrooms your property has. If you have multiple beds in the same bedroom, you can state that as well. For sleeper sofas in the living room, simply name the bedroom "Living Room" and select the number of sleeper sofas you have.')))))}}]),a}(d.a.Component);a.default=y},128:function(e,a,t){"use strict";var o=t(4),n=t(5),s=t(10),r=t(9),l=t(11),m=t(0),i=t.n(m),d=function(e){function a(){return Object(o.a)(this,a),Object(s.a)(this,Object(r.a)(a).apply(this,arguments))}return Object(l.a)(a,e),Object(n.a)(a,[{key:"render",value:function(){var e=this.props,a=e.title,t=e.descr,o=e.room_id,n=e.prev,s=e.next;return i.a.createElement("div",{className:"content_show"},i.a.createElement("div",{className:"content_showhead"},i.a.createElement("h1",null,a),i.a.createElement("p",null,t)),i.a.createElement("div",{className:"content_right"},n&&i.a.createElement("a",{href:"/rooms/manage/".concat(o,"/").concat(n),className:"right_save"},"Back"),s&&i.a.createElement("a",{href:"/rooms/manage/".concat(o,"/").concat(s),className:"right_save_continue ml-1"},"Next")))}}]),a}(i.a.Component);a.a=d},151:function(e,a,t){"use strict";var o=t(4),n=t(5),s=t(10),r=t(9),l=t(11),m=t(0),i=t.n(m),d=function(e){function a(){return Object(o.a)(this,a),Object(s.a)(this,Object(r.a)(a).apply(this,arguments))}return Object(l.a)(a,e),Object(n.a)(a,[{key:"render",value:function(){var e=this.props,a=e.room_id,t=e.prev,o=e.next;return i.a.createElement("div",{className:"content_right"},t&&i.a.createElement("a",{href:"/rooms/manage/".concat(a,"/").concat(t),className:"right_save"},"Back"),o&&i.a.createElement("a",{href:"/rooms/manage/".concat(a,"/").concat(o),className:"right_save_continue"},"Next"))}}]),a}(i.a.Component);a.a=d},673:function(e,a,t){},98:function(e,a,t){e.exports=t.p+"static/media/property-help.1a8e1b11.png"}}]);
//# sourceMappingURL=27.f3620d6f.chunk.js.map