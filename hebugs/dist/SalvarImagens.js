"use strict"
var layImagens, extrair;

function SalvarImagens() {
    this.Show = function() {
        layImagens.Show();
    }
    layImagens = app.CreateLayout("Linear", "FillXY,VCenter");
    layImagens.SetSize(1, 1);
    layImagens.SetBackColor("#012a36");
    layImagens.Hide();
    app.AddLayout(layImagens);
    var descImgs = SalvarimagensIdioma.descricao;
    var descricaoImgs = app.CreateText(descImgs, 0.99, 0.4, "html,Multiline,bold");
    descricaoImgs.SetTextColor("white");
    layImagens.AddChild(descricaoImgs);


    extrair = app.CreateButton(SalvarimagensIdioma.extrair, 0.6, 0.1, "Bold,Custom,html");
    extrair.SetOnTouch(ComecarExtracao);


    layImagens.AddChild(extrair);


}
var listaA = [],
    listaB = [],
    listaC = [];
var TodosItens = [];
var TemHeroiNovo = [],
    TemSkillNova = [],
    TemOutrosNovos = [];
var herois, skills, outros;

function ComecarExtracao() {
    extrair.SetEnabled(false);
    app.ShowProgress(SalvarimagensIdioma.listando);
    herois = app.ListFolder(sd + "/HeroesEvolvedBugs/Herois", ".png");
    skills = app.ListFolder(sd + "/HeroesEvolvedBugs/Skills", ".png");
    outros = app.ListFolder(sd + "/HeroesEvolvedBugs/Outras Imagens", ".png");

    TodosItens = TodosItens.concat(herois);
    TodosItens = TodosItens.concat(skills);
    TodosItens = TodosItens.concat(outros);

    app.DeleteFolder(sd + "/HeroesEvolvedBugs/Herois");
    app.DeleteFolder(sd + "/HeroesEvolvedBugs/Skills");
    app.DeleteFolder(sd + "/HeroesEvolvedBugs/Outras Imagens");
    listaA = app.ListFolder(data + "res/data/ui/imageset/heroselect", ".bytes");
    listaB = app.ListFolder(data + "res/data/ui/imageset/skill/hero_skillimg_128x128/", ".bytes");
    listaC = app.ListFolder(data + "res/data/ui/imageset/item/item_big/", ".bytes");
    for (var ind in listaA) {
        if (TodosItens.includes("NOVO_"+listaA[ind].replace(".bytes", ".png")) == false && TodosItens.includes(listaA[ind].replace(".bytes", ".png")) == false && herois.length > 0) {
            TemHeroiNovo.push(listaA[ind].replace(".bytes", ".png"));
            console.log("WARNING: Nova Imagem " + listaA[ind].replace(".bytes", ".png"));
        }
    }
    for (var ind in listaB) {
        if (TodosItens.includes("NOVO_"+listaB[ind].replace(".bytes", ".png")) == false && TodosItens.includes(listaB[ind].replace(".bytes", ".png")) == false && skills.length > 0) {
            TemSkillNova.push(listaB[ind].replace(".bytes", ".png"));
            console.log("WARNING: Nova Imagem " + listaB[ind].replace(".bytes", ".png"));
        }
    }
    for (var ind in listaC) {
        if (TodosItens.includes("NOVO_"+listaC[ind].replace(".bytes", ".png")) == false && TodosItens.includes(listaC[ind].replace(".bytes", ".png")) == false && outros.length > 0) {
            TemOutrosNovos.push(listaC[ind].replace(".bytes", ".png"));
            console.log("WARNING: Nova Imagem " + listaC[ind].replace(".bytes", ".png"));
        }
    }
    app.HideProgress();
    ComecarCopia();
}

function ComecarCopia() {

    app.ShowProgress(SalvarimagensIdioma.copiando.replace("(x)", (listaA.length + listaB.length + listaC.length)));
    app.MakeFolder(sd + "/HeroesEvolvedBugs");
    app.MakeFolder(sd + "/HeroesEvolvedBugs/Herois");
    app.MakeFolder(sd + "/HeroesEvolvedBugs/Skills");
    app.MakeFolder(sd + "/HeroesEvolvedBugs/Outras Imagens");

    listaA.forEach(function(img) {
        app.CopyFile(data + "res/data/ui/imageset/heroselect/" + img, sd + "/HeroesEvolvedBugs/Herois/" + img.replace('.bytes', '.png'));
    });
    listaC.forEach(function(img) {
        app.CopyFile(data + "res/data/ui/imageset/item/item_big/" + img, sd + "/HeroesEvolvedBugs/Outras Imagens/" + img.replace('.bytes', '.png'));
    });
    listaB.forEach(function(img) {
        app.CopyFile(data + "res/data/ui/imageset/skill/hero_skillimg_128x128/" + img, sd + "/HeroesEvolvedBugs/Skills/" + img.replace('.bytes', '.png'));
    });
    app.HideProgress();
    ComecarRenomeio();
}

function ComecarRenomeio() {

    app.Alert(SalvarimagensIdioma.finish, SalvarimagensIdioma.finishTitle);
    app.HideProgress();
    if (TemOutrosNovos.length > 0) {
        TemOutrosNovos.forEach(function(img) {
            app.RenameFile(sd + "/HeroesEvolvedBugs/Outras Imagens/" + img, sd + "/HeroesEvolvedBugs/Outras Imagens/NOVO_" + img);
        });
        app.Alert(TemOutrosNovos.toString().replace(/,/g, "\n\n"), SalvarimagensIdioma.novos.outros);
    }
    if (TemSkillNova.length > 0) {
        TemSkillNova.forEach(function(img) {
            app.RenameFile(sd + "/HeroesEvolvedBugs/Skills/" + img, sd + "/HeroesEvolvedBugs/Skills/NOVO_" + img);
        });
        app.Alert(TemSkillNova.toString().replace(/,/g, "\n\n"), SalvarimagensIdioma.novos.skills);
    }
    if (TemHeroiNovo.length > 0) {
        TemHeroiNovo.forEach(function(img) {
            app.RenameFile(sd + "/HeroesEvolvedBugs/Herois/" + img, sd + "/HeroesEvolvedBugs/Herois/NOVO_" + img);
        });
        app.Alert(TemHeroiNovo.toString().replace(/,/g, "\n\n"), SalvarimagensIdioma.novos.herois);
    }

    app.ScanFile("/sdcard/HeroesEvolvedBugs/Herois");
    app.ScanFile("/sdcard/");
    listaA = [], listaB = [], listaC = [];
    TodosItens = [];
    TemHeroiNovo = [], TemSkillNova = [], TemOutrosNovos = [];
    herois = null, skills = null, outros = null;
    extrair.SetEnabled(true);
}