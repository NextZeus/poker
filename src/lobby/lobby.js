/**
 * Created by lixd on 16/3/31.
 */
var LobbyLayer = cc.Layer.extend({
    ctor: function () {
        this._super();

        cc.spriteFrameCache.addSpriteFrames(res.table_index_plist);
        //加载table资源


        this.initBg();
        this.initTable();
        return true;
    },
    initBg: function () {
        //todo 背景图 动画
        var size = cc.director.getWinSize();

        var bg_default = new cc.Sprite(res.bg_lobby_default);
        var bg_light   = new cc.Sprite(res.bg_lobby_light);

        bg_default.x = size.width / 2;
        bg_default.y = size.height / 2;

        //this.addChild(bg_default);

        bg_light.x = size.width / 2;
        bg_light.y = size.height / 2;
        this.addChild(bg_light,0);
        //todo 公告放在最上面 刚好遮挡黑边
        
    },
    initTable: function () {
        var table_tap = new cc.Sprite('#img/index/table-tap.png');
        var size = cc.director.getWinSize();

        table_tap.x = size.width / 2;
        table_tap.y = size.height / 2 + 100;
        this.addChild(table_tap);

        var animFrames = [];
        for(var i = 0 ; i < 3; i ++){
            var frameName = "img/index/start-"+(i+1)+".png";
            console.log(frameName);
            var spriteFrame = cc.spriteFrameCache.getSpriteFrame(frameName);
            console.log(spriteFrame);

            animFrames.push(spriteFrame);
        }
        var animation= new cc.Animation(animFrames,1);

        var action = new cc.Animate(animation);
        console.log(animFrames,action);
        table_tap.runAction(cc.repeatForever(action));


    },
    initImageScrollView: function () {
        
    },
    initShop: function () {
        
    },
    initUserInfo: function () {

    }
});

var LobbyScene = cc.Scene.extend({
    onEnter: function () {
        this._super();
        var layer = new LobbyLayer();
        this.addChild(layer);
    }
});