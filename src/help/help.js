/**
 * Created by lixd on 16/3/31.
 */
var HelpLayer = cc.Layer.extend({
    _pageView:null,
    ctor: function () {
        this._super();
        this.initHelpPageView();
    },
    initHelpPageView: function () {
        var pageView = new ccui.PageView();

        var size = cc.winSize;

        pageView.setTouchEnabled(true);
        pageView.setContentSize(cc.size(750,1334));
        pageView.setAnchorPoint(cc.p(0.5,0.5));
        pageView.x = size.width / 2;
        pageView.y = size.height / 2;


        for(var i = 0 ; i < 3; i++){
            var layout = new ccui.Layout();

            var imageView = new ccui.ImageView();
            imageView.loadTexture(res['help_'+i+'_png']);
            imageView.x = pageView.width / 2;
            imageView.y = pageView.height / 2;
            layout.addChild(imageView);

            var text = new ccui.Text();

            text.string = "Page "+ (i + 1);
            text.font = "100px 'Marker Felt'";
            text.color = cc.color(192,192,192);
            text.x = pageView.width / 2;
            text.y = pageView.height / 2 + 300;
            layout.addChild(text);

            var button = new ccui.Button();

            button.loadTextures(res.help_close_png,res.help_close_png,res.help_close_png,'');

            button.x = pageView.x * 2 - 55;
            button.y = pageView.y * 2 - 55;

            button.addTouchEventListener(this.closeEvent,this);
            layout.addChild(button);

            pageView.addPage(layout);

        }

        pageView.addEventListener(this.pageViewEvent,this);
        this._pageView = pageView;
        this.addChild(pageView);
        return true;
    },
    closeEvent: function (sender,type) {
        switch (type){
            case ccui.Widget.TOUCH_BEGAN:
                cc.log('TOUCH_BEGAN');
                break;
            case ccui.Widget.TOUCH_MOVED:
                cc.log('TOUCH_MOVED');
                break;
            case ccui.Widget.TOUCH_CANCELED:
                cc.log('TOUCH_CANCELED');
                break;
            case ccui.Widget.TOUCH_ENDED:
                cc.log('TOUCH_ENDED');
                cc.director.runScene(new LobbyScene());
                break;
        }
    },
    pageViewEvent: function (sender,type) {
        switch (type){
            case ccui.PageView.EVENT_TURNING:
                cc.log("Page: "+sender.getCurPageIndex());
                break;

        }
    }

});

var HelpScene = cc.Scene.extend({
    onEnter: function () {
        this._super();
        var layer = new HelpLayer();
        this.addChild(layer);
    }
});