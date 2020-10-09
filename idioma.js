if (config.IDIOMA == undefined || config.IDIOMA == false || config.IDIOMA == true) {
    config.IDIOMA = "Portugues - Brasil"
    app.WriteFile("/sdcard/HeroesEvolvedBugs/.config.txt", JSON.stringify(config));
}

if (config.IDIOMA == "Portugues - Brasil") {
    mainIdioma = {
        updateHard:"O Atualizador Foi Modificado e essa versão não suporta o Download, você deve baixar o app novamente NO SITE",
        startPopup:"Iniciando Interface",
        installFail: "<b>Caso esteja vendo essa tela toda vez que entra no aplicativo, ou caso o app não consiga atualizar, você deve baixar o app novamente no site clicando <a href='https://heroesevolved.tk'>AQUI</a> para corrigir esse tipo de erro, e lembre-se que o apk é baixado na Pasta Download e precisa de um <a href=x>GERENCIADOR DE ARQUIVOS</a> para poder ser instalado, se precisar de ajuda pode me encontrar no <br><br>Facebook <a href='https://www.facebook.com/CaiotaGames/'>Caiota</a><br>Discord <a href=a>! Caiota#7741</a>",
        noHe: "Este aplicativo requer que Heroesa Evolved Mobile esteja instalado para funcionar",
        feedBackMsg: "<b>Olá (x), Obrigado por usar o Heroes Evolved Bugs. Esse app é feito com bastante esforço e seu feedback é muito importante!<br>Por favor, considere deixar algum feedback de algo que você gostou ou algo que quer que melhore, junto com uma votação de 1 á 5 estrelas, todos os feedbacks aparecerão na Página de Download do Heroes Evolved Bugs após serem analisados ❤. Obrigado.",
        feedBackOK: "Feedback Enviado! Muito Obrigado pelo tempo.",
        sugestaoHint: "Digite seu feedback aqui, ele é obrigatório.",
        sendFeedback: "Enviar Feedback",
        menu: {
            inicio: "Inicio",
            chat: "Chat Global",
            reddot: "Serviços em Segundo Plano",
            silence: "Lista de Silenciados",
            startscreen: "Mudar Tela de Início",
            melhorarfps: "Melhorar FPS",
            escondertokens: "Esconder Moedas",
            salvarimagens: "Salvar Imagens",
            mudarfoto: "Mudar Foto",
            mudartema: "Mudar Tema",
            converterid: "Converter ID",
            mudartextura: "Mudar Textura",
            mudarscreens: "Mudar Telas de Carregamento",
            forceupdate:"Problemas de Atualização",
            minhaconta:"Minha Conta",

            informacoes: "Informações Úteis",
            heroes: "Centro de Informaçoes",
            configuracao: "Configurações do Aplicativo",
            discord: "Discord Heroes Evolved",
            hebr: "Heroes Evolved Brasil",
            sugestao: "Enviar Sugestão",
        },

        devMsg: "Resposta do Desenvolvedor",


        sair: {
            pergunta: "Sair o Aplicativo?",
            sim: "Sim",
            nao: "Não"
        },

        pingText: "Latência do Servidor ",


        latenciaTxt: {
            offline: "Desconectado",
            conectando: "Conectando",
            server: "Latência (x): "
            
        },

        ramTxt: {
            livre: "Memória Livre: ",
            uso: "Em Uso: "
        },

        alertas: {
            updateStart: "Baixando Atualização",
            updateErr: "Erro ao Baixar Atualização",
            updateFinish: "Atualização Baixada na Pasta Download"
        }
    };
    var UpdateIdioma={
    descricao:"Esta função irá forçar o Heroes Evolved a Baixar a Ultima Major Update disponível, isso pode corrigir vários tipos de erros no jogo, como de login ou problemas durante o jogo<br><br>Lembrando que uma Major Update pode ter mais de 500 MB",
    downgrade:"<b>Forçar Atualização",
    forceInternal:"<b>Esta opção abaixo serve para Forçar o Jogo a Baixar as Atualizações Internas (aquele similar ao Mobile Legends), caso algo não esteja funcionando corretamente e a opção acima não funcione, tente esta. OBS: Esta não é uma Major Update, é Chamado de Atualização Dinâmica",
    StartInternal:"<b>Forçar Atualização Dinâmica",
    finish:"Downgrade Aplicado, reinicie o jogo para Reatualizar o jogo",
    startUpdate:"<b>Baixar Major Update",
    unzip:"Descompactando e Instalando Atualização, AGUARDE",
    sucess:"Major Update baixada e Instalada!",
    downloading:"Baixando versão (v)\nTamanho: (t)",
    title:"Baixando Atualização",
    error:"Erro ao Baixar Atualização! Tente Novamente",
    update:"Caso não consiga baixar a atualização no jogo por problemas no Wi-Fi, essa função abaixo irá baixar e instalar a ultima Major Update sem precisar abrir o jogo. \n <br><br> AVISO: PODE DEMORAR MUITO POR CAUSA DO DOWNLOAD SER LÁ DA SINGAPURA",
}
    var ChatIdioma = {
        reload: "<b>Recarregar",
        noid: "Não foi possivel encontrar seu ID de Jogador, você gostaria de coloca-lo agora? Ele se encontra nas configurações do Jogo!",
        yes: "Sim",
        no: "Entrar como Anônimo",
        insiraID: "Insira seu ID de Jogador abaixo",
    }
    var RedDotIdioma = {
        descricao: "Esta função usará o Sistema Android para criar um Serviço de Fundo, esse serviço irá executar á cada 2 Minutos as funções abaixo automaticamente, clique nas opções para adiciona-las ou remove-las da Lista de Tarefas e em seguida clique em Ativar Serviço para iniciar as Tarefas e o Timer de 2 Minutos.",
        id: "ID não encontrado, por favor insira abaixo o seu ID de jogador que se encontra nas configurações no Heroes Evolved",
        enable: "<b>ATIVAR SERVIÇO",
        disable: "<b>DESATIVAR SERVIÇO",
        reset: "<b>RESETAR ID",
        disponiveis:"Funções Disponíveis",
        ReddotSwitch:"Remover Pontos Vermelhos de Notificações",
        matchSwitch:"Silenciar Pedidos para Jogar Junto",
        chatSwitch:"Apagar Cache do Chat Global",
        Rewardswitch:"Avisar Quando Tiver Recompensas de Login",
        Petraswitch:"Notificar evento Partida da Alegria",
    }

    var SilenceIdioma = {
        descricao: "Esta função serve para Carregar sua Lista de Usuários Silenciados do Chat Global, essa lista contém informações como o Nível do Jogador, e o Nickname. Isso deve ser útil para reportar jogadoes no Discord do Jogo, basta clicar em alguma linha para copiar as Informações",
        semLista: "Nenhum Usuario Foi Silenciado do Chat Global, ainda",
    }

    var InfoTokens = {
        descricao: "Esconder As Moedas serve para ocultar o numero de Tokens, Ouro e Diamantes do Jogador na Tela Inicial (isso pode ser útil para Youtubers, ou caso você queira tirar uma Screenshot de algo sem mostrar isso)",
        aplicar: "<b>Aplicar Função",
        remover: "<b>Remover Função",
        aplicado: "Tokens, Diamantes e Ouro serão ocultados da Sua Visão agora",
        removido: "Tokens, Diamantes e Ouro serão visiveis da Sua Visão agora"
    }
    var ConverterIdioma = {
        descricao: "Converter ID serve para carregar informações do perfil através de uma API da R2 (não sei até quando isso vai funcionar). Informações como quantia de tokens, data do ultimo login, data de criação da conta, nickname e nível da conta. Por Motivos óbvios, a quantia de tokens não será mostrada",
        id: "Por favor insira abaixo o ID de jogador que deseja converter",
        start: "<b>Converter ID",
        error: "Erro ao Carregar as Informações, tente novamente",
        errorId: "Erro ao Carregar as Informações, o ID não existe",
        login: "Ultimo Login em ",
        criada: "Conta Criada em ",
        nivel: "Nível ",

    }
    var months = ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'];

    var text = "<b><p><font color=#4285F4><big>Heroes Evolved Bugs</big></font></p>" +
        "Bem Vindo! Clique no Menu á esquerda para começar a usar o App</p>" +
        "<p>Veja o Site do Aplicativo para Atualizações, quem sabe <a href=https://wildrift.tk/bugs>Site Oficial</a></p>" +
        "<br><br><p><font color=#4285F4><big><big><b>&larr;</b></big></big> Arraste a tela da " +
        "esquerda e escolha uma <b>Opção</b></font></p><br><br>" +
        "Clique no Texto Latência para Alterar entre <a href=at>Servidor SA</a> e <a href=at>Servidor NA</a> e Clique e Segure para mostrar o Histórico de Ping da Sessão Atual<br><br>Se Você gosta do Aplicativo, considere doar qualquer valor para me ajudar a continuar trabalhando nele: <a href='https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=V4E5FETXV3EMC'>Doar No PayPal</a> / <a href='https://picpay.me/caiota.br'>Doar no PicPay</a>"


    var ScreensIdioma = {
        descricao: "Mudar as Telas de Carregamento irá mudar todas as telas do jogo para uma imagem de sua escolha, os locais afetados são<br><br>" +
            "Modo Aventura<br>" +
            "Todos Os Modos Alternativos<br>" +
            "Imagem da Tela De Login<br>" +
            "Tela de Carregamento de uma Partida Normal<br>" +
            "Imagem que aparece quando encontra uma partida<br>"+
            "Entre outras telas especificas",
        imagem: "<b>Escolher Imagem",
        fail: "Esta imagem não existe, esse erro visual é um bug do selector de imagens do android! Tente usar outro aplicativo de seleção de Imagens!",
        reset: "<b>Restaurar Imagens Originais",
        deleteBk: "<b>Apagar Backup",
        download: "<b>Baixar Imagens Originais",
        bkFinish: "Backup Restaurado!",
        delete: "Backup Apagado, ele será feito novamente ao instalar um tema",
        finish: "Imagem Instalada!",
    }

    var MelhorarfpsIdioma = {
        descricao: "Melhorar o FPS serve para aplicar uma <a href='ata'>Configuração Customizada</a> ao Heroes Evolved, aplicando as opções normalmente ocultadas do jogador, assim, melhorando bastante o FPS na maioria dos casos e removendo animações da tela inicial (INCLUINDO SEU TEMA PERSONALIZADO, CASO TENHA).",
        aplicar: "<b>Aplicar Configuração",
        remover: "<b>Remover Configuração",
        aplicada: "Configuração Aplicada",
        naoaplicada: "Configuração Não Aplicada",
        erro: "Um Erro Ocorreu ao Aplicar a Configuração, Verifique sua conexão com á Internet e tente de novo\n\n",
    }

    var MudarfotoIdioma = {
        descricao: "Mudar a Foto irá criar um arquivo na pasta do jogo com uma <a href=ata>Soliçitação de Atualização</a> da suas informações de perfil no jogo, incluindo a foto. Ela não funciona de imediato e requer a mudança 'manual' pelo menos uma vez para funcionar.",
        disabled: "Mudar Foto desativado enquanto o jogo estiver bugado para fazer login por facebook na Aba Social (No Lobby)",
        titleDisabled: "Função Desativada",
        id: "ID não encontrado, por favor insira abaixo o seu ID de jogador que se encontra nas configurações no Heroes Evolved",
        salvar: "<b>Salvar ID",
        resetar: "<b>Resetar ID",
        mudarFoto: "<b>Mudar Foto",
        pronto: "Foto Atualizada",
    }

    var MudartemaIdioma = {
        descricao: "Mudar o Tema irá aplicar qualquer vídeo de sua escolha como a animação do Lobby, por exemplo você pode colocar os Irmãos Berti sarrando em Loop na tela aonde tem os botões de jogar. Caso queira temas legais dos herois, veja <a href=https://www.dropbox.com/sh/4la03vfdwophs5p/AAAFYlIr_tD2QwRjPfRoSmd5a?dl=0>Aqui</a><br><br> Esta função precisa do ID de Jogador para criar o arquivo dentro da pasta do jogo, digitar qualquer valor não irá funcionar",
        id: "ID não encontrado, por favor insira abaixo o seu ID de jogador que se encontra nas configurações no Heroes Evolved",
        salvar: "<b>Salvar ID",
        resetar: "<b>Resetar ID",
        mudarTema: "<b>Mudar Tema",
        pronto: "Tema Instalado!",
        nada:"Nenhum Vídeo MP4 Encontrado!",
        select:"Selecione o Vídeo (MP4)",
        mudarTemaOld:"<b>Mudar Tema (Forma Antiga)",
        oldAlerta:"Mudar O Tema de Forma Antiga EXIGE que o Vídeo esteja na pasta Downloads, na pasta Raiz Ou na Pasta do App (/sdcard/HeroesEvolvedBugs) para funcionar!",
    }

    var MudartexturaIdioma = {
        descricao: "Mudar a Textura te permite criar texturas novas para o jogo, mudando elementos do <a href=a>Mini Mapa</a> e <a href=a>Botões do Jogo</a>. Você pode literalmente desenhar oque quiser no lugar dos botões, mas SEMPRE RESPEITANDO o espaço dos sprites, pesquise mais sobre 'Sprites css png' para saber como funciona esse tipo de imagem.",
        aviso: "ATENÇÃO: Sempre faça um backup da sua textura e NUNCA renomeie o arquivo que baixar, nem mude a extensão. Apenas edite ele e salve na pasta HeroesEvolvedBugs na pastas raiz. Isso evita que a imagem se corrompa. E salve sempre na qualidade original, se a imagem for redimensionada ela pode parar de funcionar ou perder qualidade",
        baixarMapaOriginal: "<b>Baixar Textura do Mapa Original",
        baixarBotoesOriginal: "<b>Baixar Textura dos Botões Original",
        instalarMapaOriginal: "<b>Instalar Textura do Mapa Modificado",
        instalarBotoesOriginal: "<b>Instalar Textura dos Botões Modificado",
        after: "Depois de Editar um Arquivo:",
        semImagens: "Nenhuma Textura encontrada, NÃO renomeie o arquivo original!",
        mapaInstalado: "Mapa Modificado Instalado!",
        botoesInstalado: "Botões Modificados Instalados!",
        downloadPng: "Imagem Baixada em /sdcard/Download",
    };

    var SalvarimagensIdioma = {
        descricao: "Salvar Imagens irá Extrair <a href=ata>Do Jogo</a> as imagens dos Herois (e skins), as Imagens de Habilidades, e as Imagens de Itens do jogo (por exemplo todas as bordas) do Heroes Evolved, ela é absolutamente útil para criadores de Conteúdo, logo que as imagens estão <a href=atata>Sem Qualquer Marca d'agua e na Qualidade Máxima</a>. As Imagens são salvas em /sdcard/HeroesEvolvedBugs<br><br>AVISO: isso pode levar um tempo",
        extrair: "<b>Extrair Imagens",
        listando: "Listando Os Arquivos para Renomear",
        copiando: "Extraindo e Copiando (x) Arquivos",
        novos: {
            herois: "Novos Heróis Encontrados!",
            skills: "Novas Skills Encontradas!",
            outros: "Novos Itens (Outros) Encontrados!"
        },
        renomeando: "Renomeando (x) Imagens",
        finish: "Imagens Extraidas em /sdcard/HeroesEvolvedBugs",
        finishTitle: "Imagens Extraidas :D",
    };

    var Configuracoes = {
        titulo: "Configurações",
        idiomaTitulo: "Idioma",
        idiomas: "Portugues - Brasil,Español,English",
        themeDark: "Tema Escuro",
        themeLight: "Tema Claro",
        restart: "Reinicie o Aplicativo para Aplicar as Configurações",
        LoadOnTouch: "Carregar Função ao Tocar",
        ping: "Verificação de Latência do Servidor",
    };
    var TemaList = "Tema Escuro,Tema Claro";

    var InfoIdioma = {
        descricao: "<b><p><font color=#049dbf><big><big>Heroes Evolved Bugs v" + versao + "</big></big></font></p>" +
            "Desenvolvido Por <a href=https://www.facebook.com/CaiotaGames>Caiota</a></p>" +
            "<p>Veja o Site do Aplicativo para Atualizações <a href=https://wildrift.tk/bugs>Site Oficial</a>.</p>" +
            "<br><p><font color=#78a9fa>Este app tem Permissão da " +
            "NetDragon para funcionar, portanto ele não oferece qualquer risco de <b>banimento</b> na sua conta.</font></p>",
        picpay: "<b>[fa-heart] Doe no Picpay"
    }
    var StartIdioma = {
        descricao: "<b>Mudar a Tela Inicial serve para Mudar a Animação da Tela Inicial do Jogo, a tela que verifica atualizações por qualquer outro vídeo.",
        deleteBk: "<b>Apagar Backup",
        delete: "Backup Apagado",
        escolher: "<b>Escolher Vídeo",
        resetar: "<b>Restaurar Backup",
        bkFinish: "Backup Instalado!",
        finish: "Vídeo Instalado!",
    }
}



if (config.IDIOMA == "Español") {
    mainIdioma = {
        updateHard:"El actualizador ha sido modificado y esta versión no admite la descarga, debe descargar la aplicación nuevamente EN EL SITIO",
        startPopup:"Inicio de la interfaz de usuario",
        installFail: "<b>Si ves esta pantalla cada vez que ingresas a la aplicación, o si la aplicación no se puede actualizar, debes descargar la aplicación nuevamente desde el sitio haciendo clic en <a href='https://heroesevolved.tk'> AQUÍ </a> para corregir este tipo de error, y recuerde que el apk se descarga en la carpeta de descargas y necesita un <a href=x> FILE MANAGER </a> para poder ser instalado, si necesita ayuda puede encontrarme en < br> <br> Facebook <a href='https://www.facebook.com/CaiotaGames/'> Caiota </a> <br>Discord <a href=a>! Caiota#7741</a>",
        noHe: "Esta aplicación requiere que Heroes Evolved Mobile esté instalado para funcionar",
        feedBackMsg: "<b>Hola (x), Gracias por usar Heroes Evolved Bugs. Esta aplicación está hecha con mucho esfuerzo y sus comentarios son muy importantes. <br> Considere dejar algunos comentarios sobre algo que le gusta o algo que desea mejorar, junto con un voto de 1 a 5 estrellas, aparecerán todos los comentarios en la página de descarga de Heroes Evolved Bugs después de ser analizado ❤. Gracias.",
        feedBackOK: "¡Comentarios enviados! Muchas gracias por el tiempo",
        sugestaoHint: "Ingrese sus comentarios aquí, es obligatorio.",
        sendFeedback: "Enviar comentarios",
        menu: {
            inicio: "Comienzo",
            chat: "Chat Global",
            reddot: "Servicios de fondo",
            silence: "Lista de silenciados",
            melhorarfps: "Mejorar FPS",
            startscreen: "Cambiar pantalla de inicio",
            escondertokens: "Ocultar Monedas",
            salvarimagens: "Guardar Imágenes",
            mudarfoto: "Cambiar Foto",
            mudartema: "Cambiar de Tema",
            converterid: "Convertir Player ID",
            mudartextura: "Cambiar Textura",
            mudarscreens: "Cambiar Pantallas de Carga",
            forceupdate:"Problemas de actualización",

            informacoes: "Informaciones Utiles",
            configuracao: "Configuraciones de la Aplicación",
            heroes: "Centro de Información",
            discord: "Discord Heroes Evolved",
            hebr: "Heroes Evolved Brasil",
            sugestao: "Enviar Sugerencia",

        },

        devMsg: "Respuesta del desarrollador",

        sair: {
            pergunta: "¿Salir de la Aplicación?",
            sim: "Si",
            nao: "No"
        },

        pingText: "Latencia del servidor ",


        latenciaTxt: {
            offline: "Desconectado",
            conectando: "Conectando",
           server: "Latencia (x): "
        },

        ramTxt: {
            livre: "Memoria Libre: ",
            uso: "Em Uso: "
        },

        alertas: {
            updateStart: "Descargando Actualización",
            updateErr: "Error al Descargar la Actualización",
            updateFinish: "Actualización Descargada a la Carpeta de Descarga"
        }
    };
     var UpdateIdioma={
    descricao:"Esta función obligará a Heroes Evolved a descargar la última actualización importante disponible, esto puede corregir varios tipos de errores en el juego, como inicio de sesión o problemas durante el juego. <br> <br> Recordando que una actualización importante puede tener más de 500 MB",
    downgrade:"<b>Forzar actualización",
    finish:"Downgrade aplicado, reinicia el juego para actualizar el juego",
    forceInternal:"<b>Esta opción a continuación sirve para Forzar al Juego a Descargar Actualizaciones Internas (una similar a Mobile Legends), si algo no funciona correctamente y la opción anterior no funciona, prueba esta. NOTA: Esta no es una actualización importante, se denomina actualización dinámica.",
    StartInternal:"<b>Forzar actualización dinámica",
   startUpdate:"<b>Descargar actualización importante",
    unzip:"Descomprimiendo e instalando la actualización, ESPERE",
    sucess:"¡Actualización importante descargada e instalada!",
    downloading:"Descargando la versión (v) \nTamaño: (t)",
    title:"Descargando actualización",
    error:"Error al descargar la actualización. Inténtalo de nuevo",
    update:"Si no puede descargar la actualización del juego debido a problemas de Wi-Fi, esta función a continuación descargará e instalará la última actualización principal sin tener que abrir el juego. \n <br> <br> ADVERTENCIA: PUEDE TARDAR MUCHO TIEMPO PORQUE LA DESCARGA ES DE SINGAPUR",

   }
    var ChatIdioma = {
        reload: "<b>Recargar",
        noid: "No fue posible encontrar su ID de jugador, ¿le gustaría ingresarlo ahora? Se encuentra en la configuración del juego.",
        yes: "si",
        no: "Iniciar sesión como anónimo",
        insiraID: "Ingrese su ID de jugador a continuación",
    }
    var RedDotIdioma = {
        descricao: "Esta función utilizará el sistema Android para crear un servicio en segundo plano, ese servicio ejecutará las funciones a continuación automáticamente cada 2 minutos, haga clic en las opciones para agregarlas o eliminarlas de la lista de Tarefas y luego haga clic en Activar servicio para comenzar las Tareas y temporizador de 2 minutos.",
        id: "No se encontró la identificación, ingrese su identificación de jugador en la configuración de Heroes Evolved a continuación",
        enable: "<b>ACTIVAR SERVICIO",
        disable: "<b>INHABILITAR SERVICIO",
        reset: "<b>REINICIAR ID",
        disponiveis:"Funciones disponibles",
        ReddotSwitch:"Eliminar los puntos de notificación rojos",
        matchSwitch:"Silenciar solicitudes de juego para jugar juntos",
        chatSwitch:"Borrar caché de chat global",
        Rewardswitch:"Notificar cuando tenga recompensas de inicio de sesión",
        Petraswitch:"Notificar evento Partida da Alegria",
    }

    var SilenceIdioma = {
        descricao: "Esta función se utiliza para cargar su lista de usuarios silenciosos del chat global, esta lista contiene información como el nivel de jugador y el apodo. Esto debería ser útil para informar juegos en Game Discord, simplemente haga clic en una línea para copiar la información",
        semLista: "Ningún usuario ha sido silenciado del chat global, todavía",
    }

    var InfoTokens = {
        descricao: "Ocultar monedas se usa para ocultar la cantidad de fichas, oro y diamantes del jugador en la pantalla de inicio (esto puede ser útil para los Youtubers, o si desea tomar una captura de pantalla de algo sin mostrarlo)",
        aplicar: "<b>Aplicar función",
        remover: "<b>Quitar función",
        aplicado: "Las fichas, los diamantes y el oro se ocultarán de tu visión ahora",
        removido: "Las fichas, diamantes y oro serán visibles desde tu visión ahora"
    }
    var ConverterIdioma = {
        descricao: "La conversión de ID de jugador se usa para cargar información de perfil a través de una API de R2 (ni siquiera sé cuándo funcionará). Información como el monto del token, la fecha del último inicio de sesión, la fecha de creación de la cuenta, el apodo y el nivel de la cuenta. Por razones obvias, no se mostrará la cantidad de tokens.",
        id: "Ingrese el ID del jugador que desea convertir a continuación",
        start: "<b>ID del Jugador",
        error: "Error al cargar la información, inténtalo de nuevo",
        errorId: "Error al cargar la información, el ID no existe",
        login: "Último inicio de sesión en ",
        criada: "Cuenta creada el ",
        nivel: "Nivel ",

    }
    var months = ['Ene', 'Feb', 'Mar', 'Abr', 'Mayo', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'];

    var text = "<b><p><font color=#4285F4><big>Heroes Evolved Bugs</big></font></p>" +
        "¡Bienvenido! Haga clic en el menú de la izquierda para comenzar a usar la aplicación</p>" +
        "<p>Consulte el sitio de la aplicación para obtener actualizaciones <a href=https://wildrift.tk/bugs>Web oficial</a></p>" +
        "<br><br><p><font color=#4285F4><big><big><b>&larr;</b></big></big> Arrastra la pantalla " +
        "a la izquierda y elija una <b>Opción</b></font></p><br><br>" +
        "Haga clic en el texto de latencia para cambiar entre <a href=at>Servidor SA</a> y <a href=at>NA Server</a> e Haga clic y mantenga presionado para mostrar el historial de ping de la sesión actual<br><br> Si le gusta la aplicación, considere donar cualquier cantidad para ayudarme a seguir trabajando en ella: <a href='https://www.paypal.com/cgi-bin/webscr?cmd _s-xclick&protected_button_id=V4E5FETXV3EMC'> Done en PayPal </a> / <a href='https://picpay.me/caiota.br'> Done en PicPay </a>"


    var ScreensIdioma = {
        descricao: "Cambiar las pantallas de carga cambiará todas las pantallas del juego a una imagen de su elección, las ubicaciones afectadas son<br><br>" +
            "Modo de Aventura<br>" +
            "Todos los modos alternativos<br>" +
            "Imagen de la pantalla de inicio de sesión<br>" +
            "Pantalla de carga de inicio normal<br>" +
            "Imagen que aparece cuando encuentra un partido y al final<br>"+
            "Entre otras pantallas específicas",
        imagem: "<b>Elegir imagen",
        fail: "Esta imagen no existe, este error visual es un error en el selector de imágenes de Android. ¡Intente usar otra aplicación de selección de imágenes!",
        finish: "Imagen instalada!",
        reset: "<b>Restaurar imágenes originales",
        deleteBk: "<b>Eliminar copia de seguridad",
        download: "<b>Descargar imágenes originales",
        bkFinish: "¡Copia de seguridad restaurada!",
        delete: "Copia de seguridad eliminada, se volverá a hacer al instalar un tema",
    }

    var MelhorarfpsIdioma = {
        descricao: "Mejorar el FPS sirve para aplicar una <a href='ata'> Configuración personalizada </a> a Heroes Evolved, aplicando las opciones normalmente ocultas al jugador, mejorando así enormemente el FPS en la mayoría de los casos y eliminando animaciones de la pantalla de inicio ( INCLUYENDO SU TEMA PERSONALIZADO, SI LO HAY).",
        aplicar: "<b>Aplicar configuración",
        remover: "<b>Quitar configuración",
        aplicada: "Configuración aplicada",
        naoaplicada: "Configuración no aplicada",
        erro: "Ocurrió un error al aplicar la Configuración, verifique su conexión a Internet e intente nuevamente\n\n",
    }

    var MudarfotoIdioma = {
        descricao: "Al cambiar la foto, se creará un archivo en la carpeta del juego con una <a href=ata> Solicitud de actualización </a> de la información de tu perfil en el juego, incluida la foto. No funciona de inmediato y requiere un cambio 'manual' al menos una vez para funcionar.",
        disabled: "Cambiar foto desactivado mientras el juego tiene errores para iniciar sesión a través de Facebook en la pestaña Social (In Lobby)",
        titleDisabled: "Función desactivada",
        id: "No se encontró la identificación, ingrese su identificación de jugador desde la configuración en Heroes Evolved a continuación",
        salvar: "<b>Guardar ID",
        resetar: "<b>Restablecer ID",
        mudarFoto: "<b>Cambiar foto",
        pronto: "Foto actualizada",
    }



    var MudartemaIdioma = {
        descricao: "Al cambiar el tema, se aplicará cualquier video de su elección como animación del lobby, por ejemplo, puede poner a los hermanos Berti hablando en bucle en la pantalla donde tiene los botones de reproducción. Si quieres temas de héroes geniales, consulta <a href=https://www.dropbox.com/sh/4la03vfdwophs5p/AAAFYlIr_tD2QwRjPfRoSmd5a?dl=0> aquí </a> <br> <br> Esta función necesita el ID de jugador para crear el archivo dentro de la carpeta del juego, ingresar cualquier valor no funcionará",
        id: "No se encontró la identificación, ingrese su identificación de jugador desde la configuración en Heroes Evolved a continuación",
        salvar: "<b>Guardar ID",
        resetar: "<b>Restablecer ID",
        mudarTema: "<b>Cambiar de Tema",
        pronto: "Tema Instalado!",
        nada:"¡No se encontró ningún video MP4!",
        select:"Seleccionar video (MP4)",
        mudarTemaOld:"<b>Cambiar tema (estilo antiguo)",
        oldAlerta:"Cambiar el tema a la antigua REQUIERE que el video esté en la carpeta Descargas, la carpeta raíz o la carpeta de la aplicación (/ sdcard / HeroesEvolvedBugs) para que funcione.",
    
    }

    var MudartexturaIdioma = {
        descricao: "Cambiar la textura te permite crear nuevas texturas para el juego, cambiando elementos del <a href=a> Mini mapa </a> y <a href=a> Botones del juego </a>. Puedes dibujar literalmente lo que quieras en lugar de los botones, pero SIEMPRE RESPETANDO el espacio de los sprites, busca más sobre 'Sprites css png' para descubrir cómo funciona este tipo de imagen.",
        aviso: "ATENCIÓN: Siempre haga una copia de seguridad de su textura y NUNCA cambie el nombre del archivo que descargue ni cambie la extensión. Simplemente edítelo y guárdelo en la carpeta HeroesEvolvedBugs en las carpetas raíz. Esto evita que la imagen se corrompa. Y siempre guarde con la calidad original, si se cambia el tamaño de la imagen, puede dejar de funcionar o perder calidad.",
        baixarMapaOriginal: "<b>Descargar textura de mapa original",
        baixarBotoesOriginal: "<b>Descargar la textura del botón original",
        instalarMapaOriginal: "<b>Instalar textura de mapa modificada",
        instalarBotoesOriginal: "<b>Instalar textura de botón modificada",
        after: "Después de editar un archivo:",
        semImagens: "¡No se encontró textura, NO cambie el nombre del archivo original!",
        mapaInstalado: "¡Mapa modificado instalado!",
        botoesInstalado: "¡Botones modificados instalados!",
        downloadPng: "Imagen descargada en /sdcard/Download",
    }



    var SalvarimagensIdioma = {
        descricao: "Guardar imágenes extraerá <a href=ata> del juego </a> las imágenes de los héroes (y máscaras), las imágenes de habilidades y las imágenes de elementos del juego (por ejemplo, todos los bordes) de Heroes Evolved, es absolutamente útil para los creadores de contenido, tan pronto como las imágenes estén <a href=atata> Sin ninguna marca de agua y en máxima calidad </a>. Las imágenes se guardan en / sdcard / HeroesEvolvedBugs <br> <br> ADVERTENCIA: esto puede tardar un poco.",
        extrair: "<b>Extraer imágenes",
        listando: "Listado de archivos para renombrar",
        copiando: "Extraer y copiar (x) archivos",
        novos: {
            herois: "¡Nuevos héroes encontrados!",
            skills: "¡Nuevas habilidades encontradas!",
            outros: "¡Nuevos artículos (otros) encontrados!"
        },
        renomeando: "Cambio de nombre de (x) imágenes",
        finish: "Imágenes extraídas en /sdcard/HeroesEvolvedBugs",
        finishTitle: "Imágenes extraídas :D",
    }


    var Configuracoes = {
        titulo: "ajustes",
        idiomaTitulo: "Idioma",
        idiomas: "Portugues - Brasil,Español,English",
        themeDark: "Tema oscuro",
        themeLight: "Tema claro",
        restart: "Reinicie la aplicación para aplicar la configuración",
        ping: "Verificación de latencia del servidor",
        LoadOnTouch: "Cargue la función tocando la pantalla",
    }
    var TemaList = "Tema oscuro,Tema claro";

    var InfoIdioma = {
        descricao: "<b><p><font color=#049dbf><big><big>Heroes Evolved Bugs v" + versao + "</big></big></font></p>" +
            "Desarrollado por <a href=https://www.facebook.com/CaiotaGames>Caiota</a></p>" +
            "<p>Consulte el sitio de la aplicación para obtener actualizaciones <a href=https://wildrift.tk/bugs>Site Oficial</a>.</p>" +
            "<br><p><font color=#78a9fa>Esta aplicación tiene permiso de " +
            "NetDragon para que funcione, por lo que no ofrece ningún riesgo de <b> prohibición </b> en su cuenta.</font></p>",
        picpay: "<b>[fa-heart] Donar en Picpay"
    }

    var StartIdioma = {
        descricao: "<b>Cambiar la pantalla de inicio sirve para cambiar la animación de la pantalla de inicio del juego, la pantalla que busca actualizaciones de cualquier otro video.",
        deleteBk: "<b>Eliminar copia de seguridad",
        delete: "Copia de seguridad eliminada",
        escolher: "<b>Elija video",
        resetar: "<b>Restaurar copia de seguridad",
        bkFinish: "¡Copia de seguridad instalada!",
        finish: "Video instalado!",
    }
}


if (config.IDIOMA == "English") {
    mainIdioma = {
    updateHard:"The Updater has been Modified and this version does not support the Download, you must download the app again ON THE SITE",
        startPopup:"Starting User Interface",
        installFail: "<b>If you are seeing this screen every time you enter the app, or if the app is unable to update, you must download the app again from the site by clicking <a href='https://heroesevolved.tk'> HERE </a> to correct this type of error, and remember that the apk is downloaded in the Download Folder and needs a <a href=x> FILE MANAGER </a> in order to be installed, if you need help you can find me at <br> <br> Facebook <a href='https://www.facebook.com/CaiotaGames/'> Caiota </a><br>Discord <a href=a>! Caiota#7741</a>",
        noHe: "This application requires Heroes Evolved Mobile to be installed in order to function",
        feedBackMsg: "<b> Hi (x), Thanks for using Heroes Evolved Bugs. This application is made with a lot of effort and your comments are very important. <br> Please consider leaving some comments about something you like or something you want to improve, along with a 1-5 star vote, all comments will appear on the Heroes Evolved Bugs download page after being analyzed ❤. Thank you.",
        feedBackOK: "Feedback sent! Thank you very much for the time",
        sugestaoHint: "Enter your comments here, it is required.",
        sendFeedback: "Send Feedback",
        menu: {
            inicio: "Start",
            chat: "Global Chat",
            reddot: "Background Services",
            silence: "List of Silenced Players",
            melhorarfps: "Improve FPS",
            startscreen: "Change Home Screen Vídeo",
            escondertokens: "Hide Coins",
            salvarimagens: "Save Images",
            mudarfoto: "Change Photo",
            mudartema: "Change Lobby Vídeo",
            converterid: "Convert ID",
            mudartextura: "Change Game Texture",
            mudarscreens: "Change Loading Screens",
            forceupdate:"Update Issues",

            informacoes: "Useful Information",
            configuracao: "Application Settings",
            heroes: "Information Center",
            discord: "Discord Heroes Evolved",
            hebr: "Heroes Evolved Brazil",
            sugestao: "Send Suggestion",
        },

        devMsg: "Developer Response",

        sair: {
            pergunta: "Exit application?",
            sim: "Yes",
            nao: "No"
        },


        pingText: "Server Latency ",

        latenciaTxt: {
            offline: "Disconnected",
            conectando: "Connecting",
            server: "Latency (x): "
        },

        ramTxt: {
            livre: "Free Memory: ",
            uso: "In Use: "
        },

        alertas: {
            updateStart: "Downloading Update",
            updateErr: "Error Downloading Update",
            updateFinish: "Update Downloaded to Download Folder"
        }
    };
     var UpdateIdioma={
    descricao:"This function will force Heroes Evolved to Download the Last Major Update available, this can correct various types of errors in the game, such as login or problems during the game <br> <br> Remembering that a Major Update can be larger than 500 MB",
    downgrade:"<b>Force Update",
    finish:"Downgrade Applied restart the game to update the game",
    forceInternal:"<b>This option below serves to Force the Game to Download Internal Updates (one similar to Mobile Legends), if something does not work correctly and the previous option does not work, try this one. NOTE: This is not a major update, it is called a dynamic update.",
    StartInternal:"<b>Force dynamic update",
    startUpdate:"<b>Download Major update",
    unzip:"Uncompressing and installing the update, WAIT",
    sucess:"Major update downloaded and installed!",
    downloading:"Downloading the version (v) \nSize: (t)",
    title:"Downloading update",
    error:"Failed to download the update. Try again",
    update:"If you are unable to download the game update due to Wi-Fi issues, this feature will then download and install the latest major update without having to open the game. \n <br> <br> WARNING: IT MAY TAKE A LONG TIME BECAUSE THE DOWNLOAD SERVER IS FROM SINGAPORE",

    }
    var ChatIdioma = {
        reload: "<b>Reload",
        noid: "Could not find your player ID, would you like to enter it now? It is found in the game settings.",
        yes: "Yes",
        no: "Login as anonymous",
        insiraID: "Enter your Player ID below",
    }
    var RedDotIdioma = {
        descricao: "This function will use the Android system to create a service in the background, this service will run the functions automatically every 2 minutes, click on the options to add them or delete them from the list of tasks and then click on Activate service to start the Tasks and 2 minute timer.",
        id: "ID not found, please enter your player ID in Heroes Evolved settings below",
        enable: "<b>ACTIVATE SERVICE",
        disable: "<b>DISABLE SERVICE",
        reset: "<b>RESET ID",
        disponiveis:"Available functions",
        ReddotSwitch:"Eliminate the red notification points",
        matchSwitch:"Silence game requests to play together",
        chatSwitch:"Clear Global Chat Cache",
        Rewardswitch:"Notify When You Have Login Rewards",
        Petraswitch:"Notify Joy Match event",
    }
    var SilenceIdioma = {
        descricao: "This function is used to load your list of silent users of the global chat, this list contains information as the level of player and nickname. This should be useful to inform games on Game Discord, simply click on a line to copy the information",
        semLista: "No user has been silenced from the global chat, however",
    }


    var InfoTokens = {
        descricao: "Hide Coins is used to hide the number of Tokens, Gold and Diamonds from the Player on the Home Screen (this can be useful for Youtubers, or if you want to take a Screenshot of something without showing it)",
        aplicar: "<b>Apply Function",
        remover: "<b>Remove Function",
        aplicado: "Tokens, Diamonds and Gold will be hidden from Your Vision now ",
        removido: "Tokens, Diamonds and Gold will be visible from Your Vision now"
    }
    var ConverterIdioma = {
        descricao: "Player ID conversion is used to load profile information via an R2 API (I don't even know when it will work). Information such as token amount, last login date, account creation date, nickname, and account level. For obvious reasons, the number of tokens will not be displayed.",
        id: "Enter the ID of the player you want to convert below",
        start: "<b>Convert ID",
        error: "Error loading information, please try again",
        errorId: "Error loading information, ID does not exist",
        login: "Last login on ",
        criada: "Account created on ",
        nivel: "Level ",

    }
    var months = ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dec'];

    var text = "<b><p><font color=#4285F4><big>Heroes Evolved Bugs</big></font></p>" +
        "Welcome! Click on the Menu on the left to start using the App</p>" +
        "<p>See the Application Site for Updates <a href=https://wildrift.tk/bugs>Web oficial</a></p>" +
        "<br><br><p><font color=#4285F4><big><big><b>&larr;</b></big></big> Drag the screen " +
        "left and choose an Option</b></font></p><br><br>" +
        "Click on the Latency Text to Change between <a href=at>SA Server</a> and <a href=at> NA Server</a> and Click and Hold to show Ping History for the Current Session<br> <br> If you like the App, consider donating any amount to help me keep working on it: <a href='https: //www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=V4E5FETXV3EMC '> Donate on PayPal </a> / <a href='https://picpay.me/caiota.br'> Donate on PicPay </a>"



    var ScreensIdioma = {
        descricao: "Changing the loading screens will change all screens in the game to an image of your choice, the locations affected are<br><br>" +
            "Adventure Mode<br>" +
            "All alternate modes<br>" +
            "Login screen image<br>" +
            "Normal startup loading screen<br>" +
            "Image that appears when you find a match and end a match<br>"+
            "Among other specific screens",
        imagem: "<b>Choose image",
        fail: "This image does not exist, this visual error is a bug in the Android image picker. Try using another image picker app!",
        finish: "Image successfully installed!",
        reset: "<b>Restore original images",
        deleteBk: "<b>Delete backup",
        download: "<b>Download original images",
        bkFinish: "Security copy restored!",
        delete: "Security copy eliminated, we will return before install a theme",
    };



    var MelhorarfpsIdioma = {
        descricao: "Improving the FPS serves to apply a <a href='ata'> Custom Settings </a> to Heroes Evolved, applying the options normally hidden to the player, thus greatly improving the FPS in most cases and removing animations from the screen Startup (INCLUDING YOUR CUSTOM THEME, IF ANY).",
        aplicar: "<b>Apply settings",
        remover: "<b>Remove configuration",
        aplicada: "Applied configuration",
        naoaplicada: "Configuration not applied",
        erro: "There was an error applying the Configuration, please check your internet connection and try again\n\n",
    }

    var MudarfotoIdioma = {
        descricao: "Changing the photo will create a file in the game folder with an <a href=ata> Update Request </a> of your in-game profile information, including the photo. Does not work out of the box and requires a 'manual' shift at least once to work.",
        disabled: "Change photo disabled while game has errors to login via Facebook in Social tab (In lobby)",
        titleDisabled: "Function disabled",
        id: "ID not found, please enter your player ID from settings in Heroes Evolved below",
        salvar: "<b>Save ID",
        resetar: "<b>Reset ID",
        mudarFoto: "<b>Change photo",
        pronto: "Photo Updated",
    }




    var MudartemaIdioma = {
        descricao: "By changing the theme, any video of your choice will be applied as the lobby animation, for example you can put the Berti brothers talking in a loop on the screen where you have the play buttons. If you want cool hero themes, check out <a href=https://www.dropbox.com/sh/4la03vfdwophs5p/AAAFYlIr_tD2QwRjPfRoSmd5a?dl=0> here </a> <br> <br> This feature needs the player ID to create the file inside the game folder, entering any value will not work",
        id: "ID not found, please enter your player ID from settings in Heroes Evolved below",
        salvar: "<b>Save ID",
        resetar: "<b>Reset ID",
        mudarTema: "<b>Change Theme",
        pronto: "Installed Theme!",
        nada:"No MP4 video found!",
        select:"Select video (MP4)",
        mudarTemaOld:"<b>Change theme (old style)",
        oldAlerta:"Changing the theme to the old one REQUIRES the video to be in the Downloads folder, the root folder or the application folder (/sdcard/HeroesEvolvedBugs) for it to work.",
    
    }


    var MudartexturaIdioma = {
        descricao: "Changing the texture allows you to create new textures for the game, changing elements of the <a href=a> Mini map </a> and <a href=a> Game buttons </a>. You can literally draw whatever you want instead of the buttons, but ALWAYS RESPECTING sprite spacing, search more on 'Sprites css png' to find out how this type of image works.",
        aviso: "ATTENTION: Always make a backup copy of your texture and NEVER rename the file you download or change the extension. Just edit it and save it to the HeroesEvolvedBugs folder in the root folders. This prevents the image from being corrupted. And always save with the original quality, if the image is resized, it may stop working or lose quality.",
        baixarMapaOriginal: "<b>Download original map texture",
        baixarBotoesOriginal: "<b>Download the original buttons texture",
        instalarMapaOriginal: "<b>Install modified map texture",
        instalarBotoesOriginal: "<b>Install modified buttons texture",
        after: "After editing a file:",
        semImagens: "No texture found, DO NOT rename the original file!",
        mapaInstalado: "Modified map installed!",
        botoesInstalado: "Modified buttons installed!",
        downloadPng: "Image downloaded at /sdcard/Download",

    }

    var SalvarimagensIdioma = {
        descricao: "Saving images will extract <a href=ata> from the game </a> hero images (and skins), skill images and in-game item images (e.g. all borders) from Heroes Evolved, it is absolutely useful for content creators, as soon as the images are <a href=atata> without any watermark and in maximum quality </a>. Images are saved to / sdcard / HeroesEvolvedBugs <br> <br> WARNING: this may take a while.",
        extrair: "<b>Extract images",
        listando: "List of files to rename",
        copiando: "Extracting and Copying (x) Files",
        novos: {
            herois: "New heroes found!",
            skills: "New skills found!",
            outros: "New items (other) found!"
        },
        renomeando: "Renaming (x) images",
        finish: "Images taken in /sdcard/HeroesEvolvedBugs",
        finishTitle: "Images taken :D",
    }


    var Configuracoes = {
        titulo: "Settings",
        idiomaTitulo: "Language",
        idiomas: "Portugues - Brasil,Español,English",
        themeDark: "Dark theme",
        themeLight: "Light theme",
        restart: "Restart the application to apply the settings",
        ping: "Server Latency Check",
        LoadOnTouch: "Load the function by tapping",
    }
    var TemaList = "Dark theme,Light theme";

    var InfoIdioma = {
        descricao: "<b><p><font color=#049dbf><big><big>Heroes Evolved Bugs v" + versao + "</big></big></font></p>" +
            "Developed by <a href=https://www.facebook.com/CaiotaGames>Caiota</a></p>" +
            "<p>Check the application site for updates <a href=https://wildrift.tk/bugs>Official site</a>.</p>" +
            "<br><p><font color=#78a9fa>This application has permission of NetDragon" +
            "  for it to work, so it does not offer any risk of <b> banishment </b>in your account.</font></p>",
        picpay: "<b>[fa-heart] Donate at Picpay"
    }

    var StartIdioma = {
        descricao: "<b>Changing the start screen serves to change the animation of the start screen of the game, the screen that seeks updates from any other video.",
        deleteBk: "<b>Delete backup",
        delete: "Backup Deleted",
        escolher: "<b>Choose video",
        resetar: "<b>Restore backup",
        bkFinish: "Security copy installed!",
        finish: "Video installed!",
    }
}
