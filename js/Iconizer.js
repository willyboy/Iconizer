(function(Iconizer){
	Iconizer.icons=function(icons){
		return new Icons(icons);	
	}
	function Icons(icons,target,options){
		if(icons!=undefined){
			this.update(icons,target,options);
		}
	}
	Icons.prototype.update=function(icons,target,options){
		this.removeIcons();
		this.icons=[];
		if( Object.prototype.toString.call( icons ) === '[object Object]' ) {
			this.icons.push(new Icon(icons));
		}
		else{
			icons.forEach(function(element,index){
				this.icons[index]=new Icon(element);
			}.bind(this));
		}
		if(target){
			this.addIconsToTarget(target,options);
		}
		return this;
	}
	Icons.prototype.addIconsToTarget=function(target,options){
		options = options ? options:{};
		var wrapper=document.createElement("div");
		this.icons.forEach(function(element){
			wrapper.appendChild(element.icon);
		});
		switch(options.position){
			case "before" : target.insertBefore(wrapper,target.firstChild);
			break;
			case "append" :
			default		  :	target.appendChild(wrapper,target.firstChild);
			break;			
		}
		return this;
	}
	Icons.prototype.removeIcons=function(){
		if(this.icons && this.icons[0].icon.parentNode!=null){
			var iconsWrapper = this.icons[0].icon.parentNode;
			while (iconsWrapper.lastChild) {
				iconsWrapper.removeChild(iconsWrapper.lastChild);
			}
			iconsWrapper.parentNode.removeChild(iconsWrapper);
		}
	}
	function Icon(iconInfo){
		var icon=document.createElement("i");
		icon.setAttribute("class","icon-"+iconInfo.class);
		this.icon=icon;
		if(iconInfo.handler!=undefined){
			this.addHandler(iconInfo.eventType,iconInfo.handler);
		}
	}
	Icon.prototype.addHandler=function(eventType,handler){
		this.icon.addEventListener(eventType,handler,true);
	}
}( window.Iconizer = window.Iconizer || {}));