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
        txtMenu.SetTextColor("#eeeeee");
        menuFloat.SetStyle("#eeeeee", "#eeeeee", 50, "#eeeeee", 0, 0);
        menuFloat.SetTextColor("#012a36");
        layMain.SetBackColor("#e6e6e6");
        layHoriz.SetBackColor("#4285F4");
        lstMenuMain.SetTextColor("#000000");
        lstOutrosItems.SetTextColor("#000000");
        drawerScroll.SetBackColor("White");
        layDrawer.SetBackColor("#e6e6e6");
        drawerScroll.SetBackColor("#e6e6e6");
        layDrawerTop.SetBackColor("#4285F4");
        latencia.SetTextColor("White");
        layMenu.SetBackColor("#e6e6e6");
        lay.SetBackColor("#e8e8e8");
        layScroll.SetBackColor("#e8e8e8");
        txt.SetTextColor("#444444");
        layContent.SetBackColor("#e8e8e8");
        ram.SetTextColor("White");
    } else {
        console.log("Aplicando Tema " + Configuracoes.themeDark);
        app.SetTheme("dark");
        layMain.SetBackColor("#212020");
        layHoriz.SetBackColor("#383838");
        txtMenu.SetTextColor("#858181");
        menuFloat.SetTextColor("#eeeeee");
        menuFloat.SetStyle("#858181", "#858181", 50, "#858181", 0, 0);
        lstMenuMain.SetTextColor("#d1cfcf");
        lstOutrosItems.SetTextColor("#d1cfcf");
        drawerScroll.SetBackColor("#141414");
        layDrawer.SetBackColor("#141414");
        drawerScroll.SetBackColor("#141414");
        layDrawerTop.SetBackColor("#363535");
        latencia.SetTextColor("#d1cfcf");
        layMenu.SetBackColor("#141414");
        lay.SetBackColor("#141414");
        layScroll.SetBackColor("#141414");
        txt.SetTextColor("#d1cfcf");
        layContent.SetBackColor("#141414");
        ram.SetTextColor("#d1cfcf");
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
