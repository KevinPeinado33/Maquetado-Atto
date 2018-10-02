var periodoMain=function(){var s=0,p="",a=userInfo.rolSelected,o=function(e){switch(e){case"0":$("#select_union").parent().parent().removeClass("hidden");break;case"1":$("#select_campo").parent().parent().removeClass("hidden");break;case"2":$("#select_distrito").parent().parent().removeClass("hidden");break;case"3":$("#select_iglesia").parent().parent().removeClass("hidden")}},l=function(){var e={prdUnion:0,prdCampo:0,prdDistrito:0,prdIglesia:0};switch($("#dirA").val()){case"0":e.prdUnion=s;break;case"1":e.prdCampo=s;break;case"2":e.prdDistrito=s;break;case"3":e.prdIglesia=s}periodoService.list(e,function(e){for(var i=[],a=0;a<e.length;a++){var o=e[a];i.push({events:[],cols:[{type:"card-table-icon",icon:"mdi-image-timer blue-grey white-text"},{type:"card-table-content",label:"",value:o.prdNombre},{type:"card-table-content",label:"Fecha de Inicio",value:dateConverter.format.longStringToDate(o.prdFechaInicio)},{type:"card-table-content",label:"Fecha de Límite",value:dateConverter.format.longStringToDate(o.prdFechaLimite)}]})}var r=strings.random(8);components.render("#list_body",components.cardTable.code(i,r)),components.cardTable.event(i,r)})};return{init:function(){l(),a===appDefaults.rols.DIRECTOR_UN||a===appDefaults.rols.MIPES_UN?($("#dirA").append('<option value ="0">Unión</option>'),$("#dirA").append('<option value ="1">Campo / Misión</option>'),$("#dirA").append('<option value ="2">Distrito</option>'),$("#dirA").append('<option value ="3">Iglesia</option>'),$("#pre_selected").parent().removeClass("hidden"),$("#pre_selected").val(userInfo.union.uniNombre),$("#label_pre_selected").html("Unión"),s=userInfo.union.idUnion,p=userInfo.union.uniNombre):a===appDefaults.rols.DIRECTOR_CA||a===appDefaults.rols.MIPES_CA?($("#dirA").append('<option value ="1">Campo / Misión</option>'),$("#dirA").append('<option value ="2">Distrito</option>'),$("#dirA").append('<option value ="3">Iglesia</option>'),$("#pre_selected").parent().removeClass("hidden"),$("#pre_selected").val(userInfo.campo.cmpNombre),$("#label_pre_selected").html("Campo / Misión"),s=userInfo.campo.idCampo,p=userInfo.campo.cmpNombre):a===appDefaults.rols.PASTOR_DI||a===appDefaults.rols.MIPES_DI?($("#dirA").append('<option value ="2">Distrito</option>'),$("#dirA").append('<option value ="3">Iglesia</option>'),$("#pre_selected").parent().removeClass("hidden"),$("#pre_selected").val(userInfo.distrito.disNombre),$("#label_pre_selected").html("Distrito Misionero"),s=userInfo.distrito.idDistrito,p=userInfo.distrito.disNombre):a===appDefaults.rols.ANCIANO_IG||a===appDefaults.rols.MIPES_IG?($("#dirA").append('<option value ="3">Iglesia</option>'),$("#pre_selected").parent().removeClass("hidden"),$("#pre_selected").val(userInfo.iglesia.iglNombre),$("#label_pre_selected").html("Iglesia"),s=userInfo.iglesia.idIglesia,p=userInfo.iglesia.iglNombre):a===appDefaults.rols.ADMIN&&($("#dirA").append('<option value ="0">Unión</option>'),$("#dirA").append('<option value ="1">Campo / Misión</option>'),$("#dirA").append('<option value ="2">Distrito</option>'),$("#dirA").append('<option value ="3">Iglesia</option>')),$("#dirA").change(function(){$(".buscador").addClass("hidden");var e=$(this).val(),i="-1";a===appDefaults.rols.DIRECTOR_UN||a===appDefaults.rols.MIPES_UN?(i="0",s=userInfo.union.idUnion,p=userInfo.union.uniNombre):a===appDefaults.rols.DIRECTOR_CA||a===appDefaults.rols.MIPES_CA?(i="1",s=userInfo.campo.idCampo,p=userInfo.campo.cmpNombre):a===appDefaults.rols.PASTOR_DI||a===appDefaults.rols.MIPES_DI?(i="2",s=userInfo.distrito.idDistrito,p=userInfo.distrito.disNombre):a!==appDefaults.rols.ANCIANO_IG&&a!==appDefaults.rols.MIPES_IG||(i="3",s=userInfo.iglesia.idIglesia,p=userInfo.iglesia.iglNombre),e===i?$("#pre_selected").parent().removeClass("hidden"):o(e),select2.clear($(".crm-select2"))}),$("#dirA").trigger("change"),$(".select-buscador").on("select2:select",function(){0<$(this).val()&&(s=$(this).val());var e=$(this).attr("id");void 0!==e&&(p=$("#"+e+" option:selected").text())})},save:function(){if(t=!0,n="Gestion de Periodos de Trabajo",0===s&&(errorMessage({title:n,content:"Debe seleccionar un(a) "+$("#dirA option:selected").text()}),t=!1),strings.validate($("#prdFechaInicio").val())||(errorMessage({title:n,content:"Debe seleccionar la fecha de inicio"}),t=!1),strings.validate($("#prdFechaLimite").val())||(errorMessage({title:n,content:"Debe seleccionar la fecha límite"}),t=!1),strings.validate($("#prdNombre").val())||(errorMessage({title:n,content:"Debe ingresar el nombre del periodo"}),t=!1),t){var e=$('input[name="prdFechaInicio"]').val(),i=new Date(e).getTime(),a=$('input[name="prdFechaLimite"]').val(),o=new Date(a).getTime(),r={prdUnion:0,prdCampo:0,prdDistrito:0,prdIglesia:0,prdNombre:$("#prdNombre").val()+" - "+p,prdFechaInicio:i,prdFechaLimite:o};switch($("#dirA").val()){case"0":r.prdUnion=s;break;case"1":r.prdCampo=s;break;case"2":r.prdDistrito=s;break;case"3":r.prdIglesia=s}periodoService.add(r,function(e){$("#dirA").val("0"),$("#dirA").trigger("change"),l()})}var t,n}}}();$(document).ready(function(){periodoMain.init()});