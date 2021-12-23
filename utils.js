function setValue(session,value){
    session.getDoc().setValue(value)
}

function getValue(session){
    session.getValue()
}
const iframe = document.querySelector(".iframe")

function setCode(code){
    var doc = iframe.contentWindow || iframe.contentDocument.document || iframe.contentDocument;
    iframe.srcdoc = code
}

//iframe.contentWindow.document.body.innerHTML

function runCode(){
    let r = `${editorHtml.getValue()} 
        <style defer>${editorCss.getValue()}</style>
        <script>${editorJs.getValue()}</script>`
    setCode(r)
}
