var personaProfile=function(){var e=function(){return 0<document.getElementById("dropifyContent").files.length},o=function(){$("#image_box").addClass("hidden"),$("#loader_box").removeClass("hidden"),image.upload($("#dropifyContent"),function(e){$("#image_box").removeClass("hidden"),$("#loader_box").addClass("hidden"),$("#modal1").closeModal(),$(".dropify-clear").trigger("click");var o=e;personaService.updateFoto({idPersona:$("#id_persona_selected").val(),perFoto:e},function(e){$("#profile_image").attr("src",crm_context_path+"/image/get/"+o)})})},t=function(){miembrogpService.listPersona({idPersona:$("#id_persona_selected").val()},function(e){for(var o=[],t=0;t<e.length;t++){var n=e[t],a="1"===n.mgpEstado?"purple":"grey";o.push({events:[],cols:[{type:"card-table-icon",icon:"mdi-action-home white-text "+a},{type:"card-table-content",label:"",value:n.grupo.gpoNombre},{type:"card-table-content",label:"Escuela Sabática",value:n.grupo.escuela.escNombre},{type:"card-table-content",label:"Fecha de Registro",value:dateConverter.format.longStringToDate(n.mgpFechaRegistro)}]})}if(0<o.length){var r=strings.random(8);components.render("#list_grupo",components.cardTable.code(o,r)),components.cardTable.event(o,r)}else{components.render("#list_grupo",'<tr><td class"red-text"<h5>No está registrado en un grupo</h5></td></tr>')}})};return{init:function(){$("#btnUpload").click(function(){e()?o():infoMessage({title:"Subir foto de Perfil",content:"Debe seleccionar una imágen"})}),t()}}}();$(document).ready(function(){if(personaProfile.init(),$(".activator").click(function(){location.href=crm_context_path+"/persona/update/"+$("#id_persona_selected").val()}),!mobile.isMobile()){var e=$("#card_img").height(),o=$("#card_dp").height();console.log(e),console.log(o),o<e&&$("#card_dp").height(e),e<o&&$("#card_img").height(o)}});