var baseDir = "res/";

var res = {
    HelloWorld_png  :   baseDir + "HelloWorld.png",
    login_png       :   baseDir + "login.png",
    help_0_png      :   baseDir + "guide_01.png",
    help_1_png      :   baseDir + "guide_02.png",
    help_2_png      :   baseDir + "guide_03.png",
    help_close_png  :   baseDir + "close.png",
    bg_lobby_default:   baseDir + "index/bg-lobby-default.png",
    bg_lobby_light  :   baseDir + "index/bg-lobby-light.png",

    table_index_plist     :   baseDir + "index.plist"
};

var g_resources = [];
for (var i in res) {
    g_resources.push(res[i]);
}
