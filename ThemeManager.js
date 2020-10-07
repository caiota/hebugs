"use strict"
var dlg, layDlg, lst, openOnTouch, idi, idiomaTxt, pinger;

function ThemeManager() {
    dlg = app.CreateDialog(Configuracoes.titulo);
    dlg.SetTitleColor("#9bddf2")
    dlg.SetBackColor("#023545", 5)
    dlg.SetOnCancel(function() {
        dlg.Hide();
        ChangePage(home, "Inicio");
    });
    //Create a layout for dialog.
    layDlg = app.CreateLayout("linear", "vertical,fillxy,left");
    //layDlg.SetSize(0.8,0.8);
    layDlg.SetMargins(0, 0, 0, 0.01)
    dlg.AddLayout(layDlg);

    //Create a list control.
    lst = app.CreateList(TemaList, 0.8, -1);
    lst.SetTextColor("#9bddf2");
    lst.SetOnTouch(SalvaTema);
    

    idiomaTxt = app.CreateText(Configuracoes.idiomaTitulo, 0.8, 0.04, "Bold");

    idi = app.CreateSpinner(Configuracoes.idiomas, 0.8, 0.06);
    idi.SelectItem(config.IDIOMA);
    idi.SetOnTouch(SalvaIdioma);

    pinger = app.CreateCheckBox(Configuracoes.ping, 0.8, 0.06);
    pinger.box = 1;
    pinger.SetChecked(config.PINGER);
    pinger.SetOnTouch(function() {
        SalvaCheckBox(pinger.box, pinger.GetChecked())
    });

    layDlg.AddChild(lst);
    layDlg.AddChild(openOnTouch);
    layDlg.AddChild(idiomaTxt);
    layDlg.AddChild(idi);
    layDlg.AddChild(pinger);

    this.Show = function() {
        dlg.Show();
    }
}

function SalvaTema(tema) {
    if (tema == Configuracoes.themeDark) {
        app.SetTheme("Dark");
        console.log("Tema alterado para " + Configuracoes.themeDark);
    } else {
        app.SetTheme("Light");
        console.log("Tema alterado para " + Configuracoes.themeLight);
    }
    temaAtual = tema;
    app.SaveText("tema", tema);

    setTimeout(SetTema, 500);
    dlg.Hide();
    ChangePage(home, "Inicio");

}


function SetTema() {
    if (temaAtual == Configuracoes.themeLight) {
        console.log("Aplicando Tema " + Configuracoes.themeLight);
        app.SetTheme("Light");
        if(txtMenu!=undefined){
        txtMenu.SetTextColor("#eeeeee");
        }
        if(menuFloat!=undefined){
        menuFloat.SetStyle("#eeeeee", "#eeeeee", 50, "#eeeeee", 0, 0);
        menuFloat.SetTextColor("#012a36");
        }
        if(layMain!=undefined){
        layMain.SetBackColor("#e6e6e6");
        }
        if(layHoriz!=undefined){
        layHoriz.SetBackColor("#4285F4");
        }
        if(lstMenuMain!=undefined){
        lstMenuMain.SetTextColor("#000000");
        }
        if(lstOutrosItems!=undefined){
        lstOutrosItems.SetTextColor("#000000");
        }
        if(drawerScroll!=undefined){
        drawerScroll.SetBackColor("White");
        }
        if(layDrawer!=undefined){
        layDrawer.SetBackColor("#e6e6e6");
        }
        if(drawerScroll!=undefined){
        drawerScroll.SetBackColor("#e6e6e6");
        }
        if(layDrawerTop!=undefined){
        layDrawerTop.SetBackColor("#4285F4");
        }
        if(latencia!=undefined){
        latencia.SetTextColor("White");
        }
        if(layMenu!=undefined){
        layMenu.SetBackColor("#e6e6e6");
        }
        if(lay!=undefined){
        lay.SetBackColor("#e8e8e8");
        }
        if(layScroll!=undefined){
        layScroll.SetBackColor("#e8e8e8");
        }
        if(txt!=undefined){
        txt.SetTextColor("#444444");
        }
        if(layContent!=undefined){
        layContent.SetBackColor("#e8e8e8");
        }
        if(ram!=undefined){
        ram.SetTextColor("White");
        }
    } else {
        console.log("Aplicando Tema " + Configuracoes.themeDark);
        app.SetTheme("dark");
        
        if(txtMenu!=undefined){
        txtMenu.SetTextColor("#eeeeee");
        }
        if(menuFloat!=undefined){
        menuFloat.SetTextColor("#eeeeee");
        menuFloat.SetStyle("#858181", "#858181", 50, "#858181", 0, 0);
        }
        if(layMain!=undefined){
        layMain.SetBackColor("#212020");
        }
        if(layHoriz!=undefined){
        layHoriz.SetBackColor("#383838");
        }
        if(lstMenuMain!=undefined){
        lstMenuMain.SetTextColor("#d1cfcf");
        }
        if(lstOutrosItems!=undefined){
        lstOutrosItems.SetTextColor("#d1cfcf");
        }
        if(drawerScroll!=undefined){
        drawerScroll.SetBackColor("141414");
        }
        if(layDrawer!=undefined){
        layDrawer.SetBackColor("#141414");
        }
        if(drawerScroll!=undefined){
        drawerScroll.SetBackColor("#e6e6e6");
        }
        if(layDrawerTop!=undefined){
        layDrawerTop.SetBackColor("#4285F4");
        }
        if(latencia!=undefined){
        latencia.SetTextColor("White");
        }
        if(layMenu!=undefined){
        layMenu.SetBackColor("#141414");
        }
        if(lay!=undefined){
        lay.SetBackColor("#141414");
        }
        if(layScroll!=undefined){
        layScroll.SetBackColor("#141414");
        }
        if(txt!=undefined){
        txt.SetTextColor("#d1cfcf");
        }
        if(layContent!=undefined){
        layContent.SetBackColor("#141414");
        }
        if(ram!=undefined){
        ram.SetTextColor("d1cfcf");
        }
        
    }
}

function SalvaCheckBox(box, valve) {
    if (box == 1) {
        config.PINGER = valve;
        app.WriteFile("/sdcard/HeroesEvolvedBugs/.config.txt", JSON.stringify(config));
        console.log("Pinger Alterado Para " + config.PINGER);
        latencia.SetText("Heroes Evolved Bugs v." + versao);
    }
}

function SalvaIdioma(idiomaValor) {
    config.IDIOMA = idiomaValor;
    app.WriteFile("/sdcard/HeroesEvolvedBugs/.config.txt", JSON.stringify(config));
    console.log("Idioma Alterado Para " + config.IDIOMA);
    app.Quit(Configuracoes.restart);
}
