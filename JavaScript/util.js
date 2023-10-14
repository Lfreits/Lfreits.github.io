import * as Util from "./util.js";
export function dia(tema){
    rootElement.style.setProperty('--bgcolor', "#EEFFE2")
    rootElement.style.setProperty('--text-color', "#022B3A")
    rootElement.style.setProperty('--text-box-color', "#FFFFFF")
    rootElement.style.setProperty('--title-color', "#022B3A")
    rootElement.style.setProperty('--optional-color', "#1F7A8C")
    rootElement.style.setProperty('--secondary-color', "#004346")
    rootElement.style.setProperty('--subtitle-color', "#09BC8A")
    rootElement.style.setProperty('--primary-color', "#09BC8A")
    rootElement.style.setProperty('--rodape-color', "#09BC8A")
    document.getElementById("imgTema").src="CSS/img/Dia.png"
    tema = true
    return tema
}

export function noite(tema){
    rootElement.style.setProperty('--bgcolor', "#272727")
    rootElement.style.setProperty('--primary-color', "rgba(0,0,0,0.199)")
    rootElement.style.setProperty('--secondary-color', "rgb(18, 18, 18)")
    rootElement.style.setProperty('--optional-color', "rgb(12, 202, 75)")
    rootElement.style.setProperty('--text-color', "rgb(12, 202, 75)")
    rootElement.style.setProperty('--text-box-color', "rgb(12, 202, 75)")
    rootElement.style.setProperty('--title-color', "rgb(12, 202, 75)")
    rootElement.style.setProperty('--subtitle-color', "snow")
    rootElement.style.setProperty('--rodape-color', "rgb(12, 202, 75)")
    document.getElementById("imgTema").src="CSS/img/Noite.png"
    tema = false
    return tema
}

export function alternaTema(tema){
    if(tema == false){
        tema = Util.dia(tema)
    } else {
        tema = Util.noite(tema)
    }
    return tema
}

