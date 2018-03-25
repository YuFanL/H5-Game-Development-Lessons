var SecondScene = cc.Scene.extend({
    onEnter:function () {
        this._super();
        var layer = new SecondLayer();
        this.addChild(layer);
    }
});

var SecondLayer = cc.Layer.extend({
    sprite:null,
    sprite1:null,
    ctor:function () {
        //////////////////////////////
        // 1. super init first
        this._super();

        var size = cc.winSize;




        var plane = new cc.Sprite(res.p1);
        plane.x=size.width/2;
        plane.y=size.height/2;
        this.addChild(plane,3);
        plane.setAnchorPoint(1.5,0.5);
        plane.runAction(cc.rotateBy(1,90).repeatForever());


        this.sprite = new cc.Sprite(res.bg1);
        this.sprite.attr({
            x:size.width/2,
            y:size.height/2
        });
        this.addChild(this.sprite, 1);

        return true;
    }
});