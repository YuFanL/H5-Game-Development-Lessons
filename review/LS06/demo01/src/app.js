
var HelloWorldLayer = cc.Layer.extend({
    sprite:null,
    ctor:function () {
        //////////////////////////////
        // 1. super init first
        this._super();

        /////////////////////////////
        // 2. add a menu item with "X" image, which is clicked to quit the program
        //    you may modify it.
        // ask the window size
        var size = cc.winSize;

       var layer1 = new cc.LayerColor(cc.color.RED,200,200);
       layer1.ignoreAnchor=false;
       layer1.x = 0;
       layer1.y = 0;
       layer1.setAnchorPoint(0,0);
       // this.addChild(layer1);

        var layer2 = new cc.LayerColor(cc.color.BLUE,200,200);
        layer2.ignoreAnchor=false;
        layer2.x = size.width-50;
        layer2.y = 50;
        layer2.setAnchorPoint(1,0);
        layer2.runAction(cc.rotateBy(2,180).repeatForever());
        //this.addChild(layer2);


        var layer3 = new cc.LayerColor(cc.color.YELLOW,200,200);
        layer3.ignoreAnchor=false;
        layer3.x = size.width-50;
        layer3.y = size.height-50;
        //layer3.setPosition(cc.p(0,0));
        layer3.setAnchorPoint(1,1);
        //this.addChild(layer3);
        //this.getChildByTag('layer2').y+=100;
        //cc.log(layer3.getPosition().x);

        var node3 = new cc.Sprite(res.Red);
        node3.ignoreAnchor=false;
        node3.setAnchorPoint(1,1);
        node3.x=200;
        node3.y=300;
       // node3.runAction(cc.rotateBy(2,180).repeatForever());
        this.addChild(node3);

        var node4 = new cc.Sprite(res.Yellow);
        node4.setAnchorPoint(cc.p(1,1));
       // node4.runAction(cc.rotateBy(2,180).repeatForever());
        node4.x=50;
        node4.y=50;
        this.addChild(node4);


        var point = node3.convertToWorldSpace(node4.getPosition());
        var point1 = node3.convertToWorldSpaceAR(node4.getPosition());
        cc.log('POINT',point.x);
        cc.log('POINT',point.y);
        cc.log('point1',point1.x,point1.y);
        return true;
    }
});

var HelloWorldScene = cc.Scene.extend({
    onEnter:function () {
        this._super();
        var layer = new HelloWorldLayer();
        this.addChild(layer);
    }
});

