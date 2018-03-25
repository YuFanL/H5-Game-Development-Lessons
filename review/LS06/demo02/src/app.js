
var HelloWorldLayer = cc.Layer.extend({
    sprite:null,
    ctor:function () {

        this._super();

        var size = cc.winSize;
        var layer1 = new cc.LayerColor(cc.color.RED,200,200);
        layer1.ignoreAnchor=false;
        layer1.x = 0;
        layer1.y = 0;
        layer1.setAnchorPoint(0,0);
        this.addChild(layer1);

        var layer2 = new cc.LayerColor(cc.color.BLUE,200,200);
        layer2.ignoreAnchor=false;
        layer2.x = size.width-50;
        layer2.y = 50;
        layer2.setAnchorPoint(1,0);
        layer2.runAction(cc.rotateBy(2,180).repeatForever());
        this.addChild(layer2);


        var layer3 = new cc.LayerColor(cc.color.YELLOW,200,200);
        layer3.ignoreAnchor=false;
        layer3.x = size.width-50;
        layer3.y = size.height-50;
        layer2.setAnchorPoint(1,1);
        this.addChild(layer3);
        cc.log(layer3.getPosition().x);

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

