var active_bar = document.querySelector(".active-bar")

var code = ``
var htmlcode = ``
var csscode = ``
var jscode = ``
var isAutoRun = false
function addUpCode(){
  code = `${htmlcode} <style>${csscode}</style><script>${jscode}</script>`
  if(isAutoRun){
    setCode(code)
  }
}

var editorHtml = CodeMirror.fromTextArea(document.querySelector("#editorHtml"), {
    lineNumbers: true,
    mode:"xml",
    htmlMode:true,
    value:"html",
    tabSize:2,
    extraKeys:{"Ctrl-Space":"autocomplete"},
    autoCloseTags :true,
    theme:"dracula",
  })
  editorHtml.on("change",cm=>{
      htmlcode = cm.getValue()
      if(isAutoRun) addUpCode()
      
  })
  var editorCss = CodeMirror.fromTextArea(document.querySelector("#editorCss"), {
    lineNumbers: true,
    mode:"css",
    value:"css",
    tabSize:2,
    extraKeys:{"Ctrl-Space":"autocomplete"},
    autoCloseBrackets : true,
    theme:"dracula"
  })
  editorCss.on("change",cm=>{
    csscode = cm.getValue()
    if(isAutoRun) addUpCode()
  })
  var editorJs = CodeMirror.fromTextArea(document.querySelector("#editorJs"), {
    lineNumbers: true,
    mode:"javascript",
    value:"js",
    tabSize:2,
    extraKeys:{"Ctrl-Space":"autocomplete"},
    autoCloseBrackets :true,
    theme:"dracula"
  });
  editorJs.on("change",cm=>{
    jscode = cm.getValue()
    if(isAutoRun) addUpCode()
  })

  var s_html = document.querySelector(".s-html")
  var s_css = document.querySelector(".s-css")
  var s_js = document.querySelector(".s-js")

  s_css.style.display = "none"
  s_js.style.display = "none"

function disableAll(){
  s_css.style.display = "none"
  s_js.style.display = "none"
  s_html.style.display = "none"
}
var titlebar = document.querySelector(".title")
function setTab(elt) {
    let gap_str = getComputedStyle(document.body).getPropertyValue("--menu-bar-gap")
    let tab_no = parseInt(elt.dataset.no) - 1
    let gap = gap_str.substring(0,gap_str.length - 2)
    console.log(gap , tab_no,gap * tab_no)

    active_bar.style.transform = `translatey(calc(${tab_no} * 100% + ${gap * tab_no}px))`
    if(tab_no == 0){

            disableAll()
            s_html.style.display = "block"
            titlebar.innerHTML = ".html"

    }else if(tab_no == 1) {

      disableAll()
      s_css.style.display = "block"
      titlebar.innerHTML = ".css"
    }else if(tab_no == 2){
      disableAll()
       s_js.style.display = "block"
       titlebar.innerHTML = ".js"
    }
}
