Iconizer
========

A simple, pure JS utility for creating a set of event ready Font Awesome icons. 

##Namespace and Dependencies
	This utility is namespaced to Iconizer. There are no dependencies. However, the code does use a forEach and if you want cross browser support, you may have to use a polyfill.

##Basic Usage
The following code will take an array of objects that define your icons and the handlers associated with them and attach them to a specified DOM target.
```javascript
var iconsArray=[{class:"font awesome icon name (without icon-)",handler:myFunction,eventType:"click"}];
var icons=Iconizer.icons(iconsArray);
icons.addIconsToTarget(target,options);
```
OR to attach when first called:

```javascript
var iconsArray=[{class:"font awesome icon name (without icon-)",handler:myFunction,eventType:"click"}];
var icons=Iconizer.icons(iconsArray,target,options);
```
##Icons object format
	The handler and eventType are optional. You can still use the utility to create icons without attaching any events to the icons.
	{
		class:"font awesome class name without icon-",
	 	handler:function(){},
	 	eventType:"an event, e.g. click"
	}

##API
`Iconizer.icons(iconsObjectOrArray,target,options)`
When called with an icon object or array of icon objects, Iconizer will create an object with the icons property set to an array of DOM nodes representing the icons and handlers you passed in. You can access each node individually or use the built in methods to attach all the nodes (wrapped in a div) to your document. 

Optional:
Target is a DOM node to attach the icons you have created to. Options currently only takes a location argument which can have the values "before" and "append" to tell the function where to put the icons.

```javascript
var iconsArray=[{class:"envelope",handler:function(){},eventType:"click"}];
var i=Iconizer.icons(iconsArray);
$("body").append(i.icons[0].icon);
```

`addIconsToTarget(target,options)`
Target is a DOM node to attach the icons you have created to. Options currently only takes a location argument which can have the values "before" and "append" to tell the function where to put the icons.
```javascript
var iconsArray=[{class:"envelope",handler:function(){},eventType:"click"}];
var i=Iconizer.icons(iconsArray);
i.addIconsToTarget(document.getElementById("container"),{location:"append"});
```

`removeIcons()`
Will remove the icons that have been attached to the document from the document. 
```javascript
var iconsArray=[{class:"font awesome icon name (without icon-)",handler:myFunction,eventType:"click"}];
var i=Iconizer.icons(iconsArray);
$("body").append(i.icons[0].icon);
i.removeIcons();
```

`update(iconsObjectOrArray,target,options)`
Does exact same thing as Iconizer.icons and will remove existing icons from your page.
```javascript
var iconsArray=[{class:"envelope",handler:function(){},eventType:"click"}];
var i=Iconizer.icons(iconsArray);
$("body").append(i.icons[0].icon);
i.update([{class:"envelope",handler:function(){},eventType:"click"},{class:"android",handler:function(){},eventType:"click"}],document.getElementsByTagName("body")[0]);
```
`addHandler(eventType,handler)`
If you need to update the handler for a specific icon you must get the icon from Iconizer by accessing the icons property (an array of icons);
eventType is the event (e.g. click) and handler is the function to call when the event occurs.
```javascript
var iconsArray=[{class:"envelope",handler:function(){},eventType:"click"}];
var i=Iconizer.icons(iconsArray);
i.icons[0].addHandler("mousedown",function(){alert("Stop pushing me! I don't want to wake up yet.");});
```