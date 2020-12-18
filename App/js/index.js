xui.Class('App', 'xui.Module',{
    Instance:{
        iniComponents : function(){
            // [[Code created by CrossUI RAD Studio
            var host=this, children=[], append=function(child){children.push(child.get(0));};
            
            append(
                xui.create("xui.UI.HTMLButton")
                .setHost(host,"xui_ui_htmlbutton4")
                .setLeft("5.333333333333333em")
                .setTop("3.8095238095238093em")
                .setCaption("原生按钮")
            );
            
            append(
                xui.create("xui.UI.Button")
                .setHost(host,"xui_ui_button5")
                .setLeft("12.952380952380953em")
                .setTop("3.8095238095238093em")
                .setCaption("普通按钮")
            );
            
            return children;
            // ]]Code created by CrossUI RAD Studio
        }
    }
});