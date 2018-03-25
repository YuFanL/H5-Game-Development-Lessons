var HelloWorldLayer = cc.Layer.extend({
    sprite:null,
    ctor:function () {

        this._super();
        var size = cc.winSize;
        var playMenuItem = new cc.MenuItemImage(res.PlayBtnNormal_png,res.PlaytBtnSelected_png,function(){
            cc.log("playMenuItem");
        },this);

        var aboutMenuItem = new cc.MenuItemImage(res.AboutBtnNormal_png,res.AboutBtnSelected_png,function(){
            cc.log("aboutMenuItem");
        },this);


        var highMenuItem = new cc.MenuItemImage(res.HightScoresBtnNormal_png,res.HighScoresBtnSelected_png,function(){
            cc.log('highMenuItem');
        },this);

        var menu = new cc.Menu(playMenuItem,aboutMenuItem,highMenuItem);
        this.addChild(menu);
        menu.alignItemsHorizontallyWithPadding(50);
        var musicOnItem = new cc.MenuItemFont("开声音",function(){
            cc.log("开声音");
        },this);
        var musicOffItem = new cc.MenuItemFont("关声音",function(){
            cc.log('关声音');
        },this);
        var menu2 = new cc.Menu(musicOnItem,musicOffItem);
        menu2.x=100;
        menu2.y=100;
        menu2.alignItemsHorizontallyWithPadding(50);
        this.addChild(menu2);
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

