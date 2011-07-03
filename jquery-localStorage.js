(function($) {
    //このPluginの名前
    var name_space = 'basePlugin';
    $.fn[name_space] = function(options) {
        //いったん退避
        var elements = this;

        //設定情報の構築
        var settings = $.extend({
            //optionの初期値を設定
            'param' : 'value'
        }, options);

        //内部用method
        var inner_method = function () {
            //内部の共通処理の記述
        };

        //要素を一個ずつ処理
        elements.each(function() {
            $(this)
                //イベント等の設定
                .keyup(inner_method)
            ;
        });

        //method chain
        return this;
    };
})(jQuery);
