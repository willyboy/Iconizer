(function(e){function t(e,t,n){this.defaultEvent="click";if(e!=undefined){this.update(e,t,n)}}function n(e){var t=document.createElement("i");t.setAttribute("class","icon-"+e.class);this.icon=t;if(e.handler!=undefined){this.addHandler(e.handler,e.eventType)}}e.icons=function(e,n,r){return new t(e,n,r)};t.prototype.update=function(e,t,r){this.removeIcons();this.icons=[];if(Object.prototype.toString.call(e)==="[object Object]"){this.icons.push(new n(e))}else{e.forEach(function(e,t){this.icons[t]=new n(e)}.bind(this))}if(t){this.addIconsToTarget(t,r)}return this};t.prototype.replace=function(e,t,n){};t.prototype.addIconsToTarget=function(e,t){t=t?t:{};var n=document.createElement("div");n.setAttribute("class","iconizer-wrapper");this.icons.forEach(function(e){n.appendChild(e.icon)});switch(t.location){case"before":e.insertBefore(n,e.firstChild);break;case"append":default:e.appendChild(n,e.firstChild);break}return this};t.prototype.removeIcons=function(){if(this.icons&&this.icons[0].icon.parentNode!=null){var e=this.icons[0].icon.parentNode;var t=e.getAttribute("class");if(t==null||t.indexOf("iconizer-wrapper")===-1){this.icons.forEach(function(t){e.removeChild(t.icon)})}else{while(e.lastChild){e.removeChild(e.lastChild)}e.parentNode.removeChild(e)}}};n.prototype.addHandler=function(e,t){this.icon.addEventListener(t?t:this.defaultEvent,e,true)}})(window.Iconizer=window.Iconizer||{})