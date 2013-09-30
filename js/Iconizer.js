(function(Iconizer){
	Iconizer.icons=function(icons,target,options){
		return new Icons(icons,target,options);	
	}
	function Icons(icons,target,options){
		if(icons!=undefined){
			this.update(icons,target,options);
		}
	}
	Icons.prototype.update=function(icons,newTarget,options){
		newTarget ? this.removeFromDom():wrapper=this.emptyWrapper();
		//create the new icons
		this.icons=[];
		if( Object.prototype.toString.call( icons ) === '[object Object]' ) {
			this.icons.push(new Icon(icons));
		}
		else{
			icons.forEach(function(element,index){
				this.icons[index]=new Icon(element);
			}.bind(this));
		}
		if(newTarget){
			this.addToTarget(newTarget,options);
		}
		else if(wrapper){
			this.insertIntoWrapper(wrapper);
		}
		return this;
	}
	
	Icons.prototype.replace=function(icons,target,options){
		//coming soon
	}
	Icons.prototype.move=function(target,options){
		this.removeFromDom().addToTarget(target,options);
	}
	Icons.prototype.addToTarget=function(target,options){
		options = options ? options:{};
		var wrapper=document.createElement("div");
		wrapper.setAttribute("class","iconizer-wrapper")
		this.insertIntoWrapper(wrapper);
		switch(options.location){
			case "before":
				target.insertBefore(wrapper,target.firstChild);
				break;
			case "append":
			default: 
				target.appendChild(wrapper,target.firstChild);
				break;			
		}
		return this;
	}
	Icons.prototype.insertIntoWrapper=function(wrapper){
		this.icons.forEach(function(element){
			wrapper.appendChild(element.icon);
		});
	}
	Icons.prototype.removeFromDom=function(){
		var wrapper=this.emptyWrapper(wrapper);
		if(wrapper){			
			var wrapperClass=wrapper.getAttribute("class");
			if(wrapperClass!=null && wrapperClass.indexOf("iconizer-wrapper")!==-1){
				wrapper.parentNode.removeChild(wrapper);
			}
		}
		return this;
	}
	Icons.prototype.emptyWrapper=function(){
		if(this.icons && this.icons[0].icon.parentNode!=null){
			var wrapper=this.icons[0].icon.parentNode;
			this.icons.forEach(function(element){
				wrapper.removeChild(element.icon);
			});
			return wrapper;
		}
		return false;
	}
	function Icon(info){
		if(info.img){
			var icon=document.createElement("img");
			icon.setAttribute("src",info.img);
		}
		else{
			var icon=document.createElement("i");
			icon.setAttribute("class","icon-"+info.class);
		}
		this.icon=icon;
		this.defaultEvent="click";
		if(info.handler!=undefined){
			this.addHandler(info.handler,info.eventType);
		}
	}
	Icon.prototype.addHandler=function(handler,eventType){
		this.icon.addEventListener(eventType ? eventType:this.defaultEvent,handler,true);
	}
}( window.Iconizer = window.Iconizer || {}));