(function(){function e(){var a="",b;for(b in this)"function"!=typeof this[b]&&(a+=b+'="'+this[b]+'" ');return a}function h(){var a="",b;for(b in this)"function"!=typeof this[b]&&(a+=b+"="+encodeURIComponent(this[b])+"&");return a.replace(/&$/,"")}var c;c=jQuery.fn.flash=function(a,b,f,d){var g=f||c.replace;b=c.copy(c.pluginOptions,b);if(!c.hasFlash(b.version))if(b.expressInstall&&c.hasFlash(6,0,65))var e={flashvars:{MMredirectURL:location,MMplayerType:"PlugIn",MMdoctitle:jQuery("title").text()}};
else if(b.update)g=d||c.update;else return this;a=c.copy(c.htmlOptions,e,a);return this.each(function(){g.call(this,c.copy(a))})};c.copy=function(){for(var a={},b={},c=0;c<arguments.length;c++){var d=arguments[c];void 0!=d&&(jQuery.extend(a,d),void 0!=d.flashvars&&jQuery.extend(b,d.flashvars))}a.flashvars=b;return a};c.hasFlash=function(a,b,f){if(/hasFlash\=true/.test(location))return!0;if(/hasFlash\=false/.test(location))return!1;var d=c.hasFlash.playerVersion().match(/\d+/g);a=String([a,b,f]).match(/\d+/g)||
String(c.pluginOptions.version).match(/\d+/g);for(b=0;3>b;b++){d[b]=parseInt(d[b]||0);a[b]=parseInt(a[b]||0);if(d[b]<a[b])return!1;if(d[b]>a[b])break}return!0};c.hasFlash.playerVersion=function(){try{try{var a=new ActiveXObject("ShockwaveFlash.ShockwaveFlash.6");try{a.AllowScriptAccess="always"}catch(b){return"6,0,0"}}catch(b){}return(new ActiveXObject("ShockwaveFlash.ShockwaveFlash")).GetVariable("$version").replace(/\D+/g,",").match(/^,?(.+),?$/)[1]}catch(b){try{if(navigator.mimeTypes["application/x-shockwave-flash"].enabledPlugin)return(navigator.plugins["Shockwave Flash 2.0"]||
navigator.plugins["Shockwave Flash"]).description.replace(/\D+/g,",").match(/^,?(.+),?$/)[1]}catch(c){}}return"0,0,0"};c.htmlOptions={height:240,flashvars:{},pluginspage:"http://www.adobe.com/go/getflashplayer",src:"#",type:"application/x-shockwave-flash",width:320};c.pluginOptions={expressInstall:!1,update:!0,version:"6.0.65"};c.replace=function(a){this.innerHTML='<div class="alt">'+this.innerHTML+"</div>";jQuery(this).addClass("flash-replaced").prepend(c.transform(a))};c.update=function(a){a=String(location).split("?");
a.splice(1,0,"?hasFlash=true&");a=a.join("");a='<p>This content requires the Flash Player. <a href="http://www.adobe.com/go/getflashplayer">Download Flash Player</a>. Already have Flash Player? <a href="'+a+'">Click here.</a></p>';this.innerHTML='<span class="alt">'+this.innerHTML+"</span>";jQuery(this).addClass("flash-update").prepend(a)};c.transform=function(a){a.toString=e;a.flashvars&&(a.flashvars.toString=h);return"<embed "+String(a)+"/>"};window.attachEvent&&window.attachEvent("onbeforeunload",
function(){__flash_unloadHandler=function(){};__flash_savedUnloadHandler=function(){}})})();