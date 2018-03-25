var HelloWorldLayer = cc.Layer.extend({
    sprite:null,
    ttfLabel:null,
    ctor:function () {
        //////////////////////////////
        // // 1. super init first
        // this._super();
        // var size = cc.winSize;
        // var startMenuItem = new cc.MenuItemFont("开始",function(){
        //     cc.log("开始按钮点击了！");
        // },this);
        //
        // var setMenuItem = new cc.MenuItemFont("设置",function(){
        //     cc.log("设置按钮点击了！");
        // },this);
        //
        // var ttfLabel = new cc.LabelTTF("其他","",30);
        // ttfLabel.setFontFillColor(cc.color.RED);
        // ttfLabel.enableStroke(cc.color.YELLOW,2);
        // ttfLabel.enableShadow(cc.color.WHITE,15,15,15);
        // var ttlab=new cc.LabelTTF("其他的","",30);
        // ttlab.setFontFillColor(cc.color.GREEN);
        // ttlab.enableStroke(cc.color.YELLOW,2);
        // ttlab.enableShadow(cc.color.WHITE,15,15,15);
        // var otherMenuItem = new cc.MenuItemLabel(ttlab,function(){
        //     cc.log("其他按钮点击了！");
        // },this);
        //
        // //var menu = new cc.Menu(startMenuItem,setMenuItem,otherMenuItem);
        // //menu.alignItemsHorizontally();
        // //menu.alignItemsHorizontallyWithPadding(size.width*0.3);
        // //menu.alignItemsVertically();
        // //menu.alignItemsVerticallyWithPadding(50);
        // //this.addChild(menu);
        // //menu.y = size.height*0.3;
        //
        // //menu.setPosition(cc.p(0,0));
        // menu.x = 0;
        // menu.y = 0;
        //
        // startMenuItem.x = size.width*0.5;
        // startMenuItem.y = size.height*0.5;
        //
        // setMenuItem.x = size.width*0.2;
        // setMenuItem.y = size.height*0.3;
        //
        // otherMenuItem.x = size.width*0.8;
        // otherMenuItem.y = size.height*0.7;
        this._super();
        var size = cc.winSize;
        var ttfLabel = new cc.LabelTTF("这是labelttf","",50);
        ttfLabel.x = size.width/2;
        ttfLabel.y = size.height/2;

        ttfLabel.setFontFillColor(cc.color.RED);
        ttfLabel.setFontSize(100);
        ttfLabel.enableStroke(cc.color.YELLOW,5);
        ttfLabel.enableShadow(cc.color.WHITE,15,15,15);

        this.ttfLabel = ttfLabel;
        var labelBMFont = new cc.LabelBMFont("中华人民共和国",res.LabelBitmap_fnt);
        labelBMFont.x=size.width*0.5;
        labelBMFont.y=size.height*0.3;
        this.addChild(labelBMFont);

        var labelBMFont2 = new cc.LabelBMFont("hello world!",res.LabelBitmap2_fnt);
        labelBMFont2.x = size.width*0.5;
        labelBMFont2.y=size.height*0.15;
        this.addChild(labelBMFont2);
        return true;
    },
    update:function(){
        if(this.ttfLabel.fontSize > 120){
            this.ttfLabel.fontSize = 100;
        }
        else{
            this.ttfLabel.fontSize+=1;
        }
    }
});
var HelloWorldScene = cc.Scene.extend({
    onEnter:function () {
        this._super();
        var layer = new HelloWorldLayer();
        this.addChild(layer);
    }
});

