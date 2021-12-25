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

function getAutoComplete(instance){
    if (instance.state.completionActive) {
      return;
    }
    var cur = instance.getCursor();
    var token = instance.getTokenAt(cur);
    if (token.type && token.type != "comment") {
            CodeMirror.commands.autocomplete(instance);
            let hint = document.querySelector(".CodeMirror-hints")
            if(hint){
              if(instance.options.mode == 'text/html'){
                document.body.classList.add("html")
              }else{
                document.body.classList.add(instance.options.mode)
              }
            }
    }
}


var commonOptions = {
  tabSize:2,
  extraKeys:{"Ctrl-Space":"autocomplete"},
  lineNumbers: true,
  styleActiveLine: { nonEmpty: true },
  lineWrapping: true,
  indentUnit: 2,
  tabSize: 2,
  highlightSelectionMatches: true,
  activeLine: true,
  indentWithTabs: true,
  smartIndent: true,
  theme:"monokai"

}

var editorHtml = CodeMirror.fromTextArea(document.querySelector("#editorHtml"), {
    mode: "text/html",
    value:"html",
    autoCloseTags :true,
    ...commonOptions
  })
  editorHtml.on("change",cm=>{
      htmlcode = cm.getValue()
      if(isAutoRun) addUpCode()
      
  })
  var editorCss = CodeMirror.fromTextArea(document.querySelector("#editorCss"), {
    mode:"css",
    value:"css",
    autoCloseBrackets : true,
    ...commonOptions
  })
  editorCss.on("change",cm=>{
    csscode = cm.getValue()
    if(isAutoRun) addUpCode()
  })


  var editorJs = CodeMirror.fromTextArea(document.querySelector("#editorJs"), {
    mode:"javascript",
    value:"js",
    autoCloseBrackets :true,
    ...commonOptions
  });
  editorJs.on("change",cm=>{
    jscode = cm.getValue()
    if(isAutoRun) addUpCode()
  })
  editorHtml.on("inputRead", getAutoComplete)
  editorCss.on("inputRead", getAutoComplete)
  editorJs.on("inputRead", getAutoComplete)

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
// setTimeout(()=>{
//   debugger
// },2000)