Duktape.__ui_add_path("test")
//Duktape.__ui_add_path("../ide/assets")
Duktape.__ui_add_path("../kara/ide/res")

//the duktape with system is completely unusable - we have to put all exports in the global object
var UI=require("gui2d/ui");
var W=require("gui2d/widgets");

UI.default_styles.button={
	transition_dt:0.1,
	round:24,border_width:3,padding:12,
	$:{
		out:{
			border_color:0xffcc773f,color:0xffffffff,
			icon_color:0xffcc773f,
			text_color:0xffcc773f,
		},
		over:{
			border_color:0xffcc773f,color:0xffcc773f,
			icon_color:0xffffffff,
			text_color:0xffffffff,
		},
		down:{
			border_color:0xffaa5522,color:0xffaa5522,
			icon_color:0xffffffff,
			text_color:0xffffffff,
		},
	}
};

var demo_text_animation=function(id,attrs){
	attrs=UI.Keep(id,attrs);
	if(!attrs.anim_x){attrs.anim_x=0;attrs.danim_x=1;}
	attrs.text=attrs.text||"Grumpy wizards make toxic brew for the evil Queen and Jack.";//"The quick brown fox jumps over a lazy dog.";
	attrs.font=attrs.font||"RobotoCondensed-Regular";//"segoeui";
	UI.Begin(attrs);
		var wnd=UI.Begin(W.Window("app",{title:"GUI hello world",w:1024,h:768,bgcolor:0xff000000,designated_screen_size:1440,flags:UI.SDL_WINDOW_MAXIMIZED|UI.SDL_WINDOW_RESIZABLE,is_main_window:1}))
			W.Hotkey("",{key:["ALT","F4"],action:function(){UI.DestroyWindow(wnd)}});
			W.FillRect("",{x:attrs.anim_x+10,y:10, w:200,h:100,color:0xff0000ff});
			W.FillRect("",{x:attrs.anim_x+10,y:120,w:200,h:100,color:0xff00ff00});
			W.FillRect("",{x:attrs.anim_x+10,y:230,w:200,h:100,color:0xffff0000});
			W.FillRect("",{x:wnd.w/2,y:0,w:wnd.w/2,h:wnd.h,color:0xffffffff});
			W.RoundRect("",{x:wnd.w/2+attrs.anim_x+10,y:10, w:200,h:100,border_width:0,round:16,color:0xffe0e0ff,border_color:0xff00007f});
			W.RoundRect("",{x:wnd.w/2+attrs.anim_x+10,y:120,w:200,h:100,border_width:1,round:16,color:0xffe0ffe0,border_color:0xff007f00});
			W.RoundRect("",{x:wnd.w/2+attrs.anim_x+10,y:230,w:200,h:100,border_width:4.5,round:16,color:[{x:0,y:0,color:0xff7f0000},{x:1,y:1,color:0xffffe0e0}],border_color:0xff7f0000});
			W.Bitmap("",{x:wnd.w/2+attrs.anim_x+10,y:10,file:"test/res/edico.png"})
			W.Button("ok",{
				x:16,y:wnd.h-110,
				font:UI.Font("ArialUni",48),text:"OK",
				OnClick:function(){UI.DestroyWindow(wnd)}});
			W.Button("cancel",{
				x:wnd.w-316,y:wnd.h-110,
				icon:"test/res/check_64.png",
				font:UI.Font("dsanscn",48,200),text:"漢字",
				OnClick:function(){attrs.text="世の中に、必要な悪があるなんて、子供たちに教えたくありません"}})
			var y0=340;
			var s_text=attrs.text;
			for(var i=12;i<68;i*=1.07){
				//Text("",{x:attrs.anim_x+10,y:y0,font:UI.Font("cambria",i),text:"Hello world!",color:0xff000000})
				W.Text("",{x:attrs.anim_x+10,y:y0,font:UI.Font(attrs.font,i),text:s_text,color:0xffffffff})
				W.Text("",{x:wnd.w/2+attrs.anim_x+10,y:y0,font:UI.Font(attrs.font,i),text:s_text,color:0xff000080})
				y0+=i;
			}
		UI.End();
		attrs.anim_x+=attrs.danim_x;
		if(attrs.anim_x>180){attrs.danim_x=-1}
		if(attrs.anim_x<10){attrs.danim_x=1}
		UI.Refresh()
	UI.End();
};

var paper_text="For simplicity, our compiler uses the AST (Abstract Syntax Tree) directly as our IR. As an example, \\figref{ast:raw}(a) shows a simple code snippet written in our DSL. \\figref{ast:raw}(b) shows the corresponding raw AST generated by the parser, where each inner node is formatted as a C-like function call using its children as arguments, and each leaf node is formatted as a variable, a string, or a number. The \\texttt{symderiv} call in \\figref{ast:raw} is a meta-function that returns a new function that computes the partial derivatives of an input function (its first argument \\texttt{f}) with respect to a specific set of parameters (the remaining argument \\texttt{u}). Prior to computing symbolic derivatives, we flatten all structure types, turning their components into simple scalar variables and update relevant \\texttt{symderiv} calls accordingly, as illustrated in \\figref{ast:raw}(c). Without loss of generality, in the following we will assume that all vector and tensor types have been flattened already and all relevant variables are of scalar types. We also assume that conventional compiler optimizations has already eliminated trivial inefficiencies such as unused variables from the input function.";
var code_text="var demo_msgbox=function(id,attrs){\n\t//世の中に、必要な悪があるなんて、子供たちに教えたくありません\n	attrs=UI.Keep(id,attrs);\n	UI.Begin(attrs);\n		var wnd=UI.Begin(W.Window('app',{title:'GUI example',w:1024,h:768,bgcolor:0xffffffff,designated_screen_size:1440,flags:UI.SDL_WINDOW_RESIZABLE,is_main_window:1}))\n			W.Hotkey('',{key:['ALT','F4'],action:function(){UI.DestroyWindow(wnd)}});\n			W.Hotkey('',{key:'ESCAPE',action:function(){UI.DestroyWindow(wnd)}});\n			W.Text('',{\n				anchor:UI.context_parent,anchor_align:'left',anchor_valign:'up',\n				w:UI.context_parent.w-32,\n				x:16,y:16,\n				font:UI.Font('cmunrm',32,1),text:paper_text,\n				color:0xff000000,\n				//color:0xff111111,\n				});\n			W.Button('ok',{\n				anchor:UI.context_parent,anchor_align:'left',anchor_valign:'down',\n				x:16,y:16,\n				font:UI.Font('Inconsolata.ttf',48),text:'OK',\n				OnClick:function(){\n					UI.DestroyWindow(wnd);\n				}});\n			W.Button('Cancel',{\n				anchor:UI.context_parent,anchor_align:'right',anchor_valign:'down',\n				x:16,y:16,\n				font:UI.Font('Inconsolata.ttf',48),text:'Cancel',\n				OnClick:function(){\n					UI.DestroyWindow(wnd);\n				}});\n		UI.End();\n	UI.End();\n};\n";
var demo_msgbox=function(id,attrs){
	attrs=UI.Keep(id,attrs);
	UI.Begin(attrs);
		var wnd=UI.Begin(W.Window("app",{title:"GUI example",w:1024,h:768,bgcolor:0xffffffff,designated_screen_size:1440,flags:UI.SDL_WINDOW_RESIZABLE,is_main_window:1}))
			W.Hotkey("",{key:["ALT","F4"],action:function(){UI.DestroyWindow(wnd)}});
			W.Hotkey("",{key:'ESCAPE',action:function(){UI.DestroyWindow(wnd)}});
			W.Text("",{
				anchor:UI.context_parent,anchor_align:"left",anchor_valign:"up",
				w:UI.context_parent.w-32,
				x:16,y:16,
				font:UI.Font("cmunrm",24,100),text:paper_text,
				//font:UI.Font("dsanscn",128,-200),text:'标题很好看',
				color:0xff000000,
				//color:0xff111111,
				});
			W.Button("ok",{
				anchor:UI.context_parent,anchor_align:"left",anchor_valign:"down",
				x:16,y:16,
				font:UI.Font("Inconsolata.ttf",48),text:"OK",
				OnClick:function(){
					UI.DestroyWindow(wnd);
				}});
			W.Button("Cancel",{
				anchor:UI.context_parent,anchor_align:"right",anchor_valign:"down",
				x:16,y:16,
				font:UI.Font("Inconsolata.ttf",48),text:"Cancel",
				OnClick:function(){
					UI.DestroyWindow(wnd);
				}});
		UI.End();
	UI.End();
};

var demo_msgboxb=function(id,attrs){
	attrs=UI.Keep(id,attrs);
	UI.Begin(attrs);
		var wnd=UI.Begin(W.Window("app",{title:"GUI example",w:1024,h:768,bgcolor:0xff000000,designated_screen_size:1440,flags:UI.SDL_WINDOW_RESIZABLE,is_main_window:1}))
			W.Hotkey("",{key:["ALT","F4"],action:function(){UI.DestroyWindow(wnd)}});
			W.Hotkey("",{key:'ESCAPE',action:function(){UI.DestroyWindow(wnd)}});
			W.Text("",{
				anchor:UI.context_parent,anchor_align:"left",anchor_valign:"up",
				w:UI.context_parent.w-32,
				x:16,y:16,
				font:UI.Font("cmunrm",32),text:paper_text,
				color:0xffffffff,
				//color:0xffcccccc,
				});
			W.Button("ok",{
				anchor:UI.context_parent,anchor_align:"left",anchor_valign:"down",
				x:16,y:16,
				font:UI.Font("Inconsolata.ttf",48),text:"OK",
				OnClick:function(){
					UI.DestroyWindow(wnd);
				}});
			W.Button("Cancel",{
				anchor:UI.context_parent,anchor_align:"right",anchor_valign:"down",
				x:16,y:16,
				font:UI.Font("Inconsolata.ttf",48),text:"Cancel",
				OnClick:function(){
					UI.DestroyWindow(wnd);
				}});
		UI.End();
	UI.End();
};

//var ed;
var demo_textbox=function(id,attrs){
	attrs=UI.Keep(id,attrs);
	//(embolden==undefined?5000/size:embolden)
	var color_mask=(attrs.color_mask||0);
	UI.Begin(attrs);
		var wnd=UI.Begin(W.Window("app",{title:"Text box example",w:1024,h:768,bgcolor:0xffffffff^color_mask,designated_screen_size:1440,flags:UI.SDL_WINDOW_RESIZABLE,is_main_window:1}))
			//if(!ed){
			//	ed=Duktape.__ui_new_editor({font:UI.Font("cmunrm",24),color:0xff000000^color_mask});
			//	//ed=ED.New({font:UI.Font("cmunrm",12),color:0xff000000^color_mask});
			//	//ed=ED.New({font:UI.Font("Inconsolata.ttf",16),color:0xff000000^color_mask});
			//	ed.MassEdit([0,0,code_text]);
			//	//print(ed.GetTextSize())
			//	//print(ed.GetText())
			//}
			W.Hotkey("",{key:["ALT","F4"],action:function(){UI.DestroyWindow(wnd)}});
			//ed.Render({x:0,y:0,w:1024-16,h:768-16, scr_x:8,scr_y:8,scale:1})
			//UI.SetCaret(wnd,8,8,3,24,0x7f000000,500)
			var textbox=W.Edit("textbox",{
				font:UI.Font("cmunrm",24),color:0xff000000^color_mask,
				text:code_text,
				x:8,y:8,w:1024-16,h:768-16
			})
			W.Button("invert",{
				anchor:UI.context_parent,anchor_align:"right",anchor_valign:"down",
				x:16,y:16,
				font:UI.Font("arial",48),text:"Invert",
				OnClick:function(){
					attrs.color_mask=color_mask^0xffffff;
					textbox.ed=null;//todo
					UI.Refresh()
				}});
			W.Button("smooth",{
				anchor:UI.context_parent.invert,anchor_placement:"left",anchor_align:"left",anchor_valign:"up",anchor_spacing:16,
				x:16,y:0,
				font:UI.Font("arial",48),text:attrs.sharpen?"Smooth":"Sharpen",
				OnClick:function(){
					attrs.sharpen=!attrs.sharpen;
					UI.SetFontSharpening(attrs.sharpen?1.5:0.0);
					UI.Refresh()
				}});
		UI.End();
	UI.End();
};

UI.Application=demo_textbox;
//UI.Application=demo_msgbox;
//UI.Application=demo_text_animation;

//UI.setTimeout(function(){print("setTimeout");},1500)
//UI.setInterval(function(){print("setInterval");},1000)
UI.Run()
