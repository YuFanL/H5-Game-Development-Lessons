var FirstScene = cc.Scene.extend({
    onEnter:function () {
        this._super();
        var layer = new SecondLayer();
        this.addChild(layer);
    }
});

var FirstLayer = cc.Layer.extend({
    sprite:null,
    sprite1:null,
    ctor:function () {
        //////////////////////////////
        // 1. super init first
        this._super();


        var size = cc.winSize;
        var hello = new cc.LabelTTF('second','Arial',38);
        hello.x=100;
        hello.y=100;
        this.addChild(hello,10);
        this.sprite1=new cc.Sprite(res.Red);
        this.sprite1.attr({
            x:200,
            y:200
        });
        this.addChild(this.sprite1,0);




        var helloLabel = new cc.LabelTTF("first", "Arial", 38);

        helloLabel.x = size.width / 2+100;
        helloLabel.y = size.height / 2 + 200;

        this.addChild(helloLabel, 5);


        this.sprite = new cc.Sprite(res.Yellow);
        this.sprite.attr({
            x: size.width / 2,
            y: size.height / 2
        });
        this.addChild(this.sprite);

        return true;
    }
});