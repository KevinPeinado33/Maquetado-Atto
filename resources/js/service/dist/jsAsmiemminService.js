function asmiemminService(){var t=new jsConnector;this.addAsmiemmin=function(e,s){try{t.post(url.asmiemmin.add,e,function(e){null!=e?(successMessage({title:message.asmiemmin.add.title,content:message.asmiemmin.add.success}),s(e)):errorMessage({title:message.asmiemmin.add.title,content:message.asmiemmin.add.error})})}catch(e){console.log(e)}},this.updateAsmiemmin=function(e,s){try{t.post(url.asmiemmin.update,e,function(e){null!=e&&1===e?(successMessage({title:message.asmiemmin.update.title,content:message.asmiemmin.update.success}),s(e)):errorMessage({title:message.asmiemmin.update.title,content:message.asmiemmin.update.error})})}catch(e){console.log(e)}},this.deleteAsmiemmin=function(e,s){try{t.post(url.asmiemmin.delete,e,function(e){null!=e&&1===e?(successMessage({title:message.asmiemmin.delete.title,content:message.asmiemmin.delete.success}),s(e)):errorMessage({title:message.asmiemmin.delete.title,content:message.asmiemmin.delete.error})})}catch(e){console.log(e)}},this.listAsmiemmin=function(s){try{t.post(url.asmiemmin.list,JSON.stringify({id:1}),function(e){null!=e&&0<e.length?s(e):infoMessage({title:message.asmiemmin.list.title,content:message.asmiemmin.list.empty})})}catch(e){console.log(e)}}}