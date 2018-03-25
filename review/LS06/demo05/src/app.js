
var HelloWorldLayer = cc.Layer.extend({
    sprite:null,
    redSprite:null,
    speed:0,
    num:0,
    ctor:function () {

        this._super();

        var size = cc.winSize;
        this.addChild(new cc.LayerColor(cc.color.WHITE));
        var red= new cc.Sprite(res.Red_png);
        red.x=size.width/2;
        red.y=400;
        this.addChild(red);
        red.setLocalZOrder(3);
        this.scheduleUpdate();
        this.redSprite=red;
        //this.schedule(this.myCallBack,0.02,cc.REPEAT_FOREVER,0);
        return true;
    },
    update:function(dt){

        this.redSprite.y -= this.speed;
        if(this.redSprite.y < 0){
            this.speed = -this.speed;
        }else{
            this.speed += 0.2;
            //this.speed += 10*dt;
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

