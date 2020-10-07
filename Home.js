"use strict"
var lay, txt, layScroll;
//Create a Home object.
function Home(path, layContent) {
    //Get page states.
    this.IsVisible = function() {
        return lay.IsVisible()
    }
    this.IsChanged = function() {
        return false
    }

    //Show or hide this page.
    this.Show = function(show) {

        layMain.Show();
        if (show) {
            lay.Animate("FadeIn");
        } else {
            lay.Animate("FadeOut");
        }
    }

    //Create layout for app controls.
    lay = app.CreateLayout("Linear", "FillXY,VCenter");
    lay.SetPadding(0, 0, 0, 0.04);
    lay.Hide();
    layScroll = app.CreateScroller(1, 1);
    layContent.AddChild(layScroll);
    layScroll.AddChild(lay);

    //Add a logo.
    var img = app.CreateImage("Img/Heroes Evolved Bugs.png", 0.25);
    lay.AddChild(img);

    //Create a text with formatting.
    txt = app.CreateText(text, 1, 1, "Html,bold,Link");
    txt.SetPadding(0.03, 0.03, 0.03, 0.03);
    txt.SetTextSize(18);

    lay.AddChild(txt);
}