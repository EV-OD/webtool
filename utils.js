function setValue(session, value) {
    session.getDoc().setValue(value)
}

function getValue(session) {
    session.getValue()
}
const iframe = document.querySelector(".iframe")

let errorElt = document.querySelector(".codearea .status")


function setCode(code) {
    let after = document.querySelector(".after")
    errorElt.classList.remove("error")
    var doc = iframe.contentWindow || iframe.contentDocument.document || iframe.contentDocument;
    iframe.srcdoc = code
    after.style.display = "none"


}

function handleError(msg,url,line){
    errorElt.innerHTML = msg
    errorElt.classList.add("error")

}
//iframe.contentWindow.document.body.innerHTML

function runCode() {
    let after = document.querySelector(".after")
    after.style.display = "inline-block"
    let r = `
    <script>
        window.onerror = function(msg,url,line){
            window.parent.handleError(msg,url,line)
        }
    </script>
    ${editorHtml.getValue()} 
        <style>${editorCss.getValue()}</style>
        <script defer>${editorJs.getValue()}</script>
        `

    setTimeout(() => {
        setCode(r)
    }, 1000)
}