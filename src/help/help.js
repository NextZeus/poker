/**
 * Created by lixd on 16/3/31.
 */
var HelpLayer = cc.Layer.extend({
    ctor: function () {
        this._super();
        this.initHelpImage();
    },
    initHelpImage: function () {
        var help1 = new cc.Sprite(res.help_1_png);
        var help2 = new cc.Sprite(res.help_2_png);
        var help3 = new cc.Sprite(res.help_3_png);

        var size = cc.director.getWinSize();

        this.addChild(help1);
        help1.x = size.width  / 2;
        help1.y = size.height / 2;
        //this.addChild(help2);
        //help2.x = size.width  / 2;
        //help2.y = size.height / 2;
        //this.addChild(help3);
        //help3.x = size.width  / 2;
        //help3.y = size.height / 2;
        return true;
    }

});

var HelpScene = cc.Scene.extend({
    onEnter: function () {
        this._super();
        var layer = new HelpLayer();
        this.addChild(layer);
    }
});