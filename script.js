const deviceType = () => {
  const ua = navigator.userAgent;
  if (/(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(ua)) {
      return "tablet";
  }
  else if (/Mobile|Android|iP(hone|od)|IEMobile|BlackBerry|Kindle|Silk-Accelerated|(hpw|web)OS|Opera M(obi|ini)/.test(ua)) {
      return "mobile";
  }
  return "desktop";
};

if(deviceType == "mobile" || deviceType == "tablet"){
  alert("Please use desktop computer or laptop.")
}
function handleCheck(){
  isAutoRun != isAutoRun
  code = `${htmlcode} <style>${csscode}</style><script>${jscode}</script>`
  setCode(code)
  
}
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
    value:"htmlmixed",
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
    gutters: ['error'],
    ...commonOptions
  });
  editorJs.on("change",cm=>{
    jscode = cm.getValue()
    JSHINT(jscode);
      const errors = Array.isArray(JSHINT.errors) ? JSHINT.errors : [];
      editorJs.clearGutter('error');
      for (const error of errors) {
        editorJs.setGutterMarker(error.line - 1, 'error', makeMarker(error.reason));
      }
    if(isAutoRun) addUpCode()
  })
  function makeMarker(msg) {
    const marker = document.createElement('div');
    marker.classList.add('error-marker');
    marker.innerHTML = '<i class="fas fa-exclamation-triangle"></i>';
  
    const error = document.createElement('div');
    error.innerHTML = msg;
    error.classList.add('error-message');
    marker.appendChild(error);
  
    return marker;
  }

  editorHtml.on("inputRead", getAutoComplete)
  editorCss.on("inputRead", getAutoComplete)
  editorJs.on("inputRead", getAutoComplete)

  emmetCodeMirror(editorHtml);
  emmetCodeMirror(editorCss);
  emmetCodeMirror(editorJs);

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






var widgets = []
function updateHints(editor) {
  editor.operation(function(){
    for (var i = 0; i < widgets.length; ++i){
      editor.removeLineWidget(widgets[i]);
    }
    widgets.length = 0;

    JSHINT(editor.getValue());
    for (var i = 0; i < JSHINT.errors.length; ++i) {
      var err = JSHINT.errors[i];
      if (!err) continue;
      var msg = document.createElement("div");
      var icon = msg.appendChild(document.createElement("span"));
      icon.innerHTML = "!!";
      icon.className = "lint-error-icon";
      msg.appendChild(document.createTextNode(err.reason));
      msg.className = "lint-error";
      widgets.push(editor.addLineWidget(err.line - 1, msg, {coverGutter: false, noHScroll: true}));
      const marker = ()=>{
        var marker = document.createElement("div");
        marker.style.color = "#822";
        marker.innerHTML = "●";
        return marker;
      }
      editor.setGutterMarker(err.line, "replacement", marker());
    }
  });
  var info = editor.getScrollInfo();
  var after = editor.charCoords({line: editor.getCursor().line + 1, ch: 0}, "local").top;
  if (info.top + info.clientHeight < after)
    editor.scrollTo(null, after - info.clientHeight + 3);
}




