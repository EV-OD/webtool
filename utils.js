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

function ondragElt(elt, func) {
    let p2 = { x: 0, y: 0 };
    elt.addEventListener("mousedown",dragMouseDown)
    let offset = {};
  
    function dragMouseDown(e) {
      e.preventDefault();
      offset = {
        x: e.clientX - elt.offsetLeft,
        y: e.clientY - elt.offsetTop
      };
      window.addEventListener("mouseup",closeMouseDrag)
      window.addEventListener("mousemove",moveMouse)
    }
  
    function moveMouse(e) {
      e.preventDefault();
      iframe.style.pointerEvents =  "none";
      p2.x = e.clientX - offset.x;
      p2.y = e.clientY - offset.y;
  
      func(p2.x, p2.y);
    }
  
    function closeMouseDrag(e) {
        iframe.style.pointerEvents =  "auto";
        window.removeEventListener("mouseup",closeMouseDrag)
        window.removeEventListener("mousemove",moveMouse)
    }
  }

  function getCssVar(name,elt){
      if(!elt){
        return getComputedStyle(document.body).getPropertyValue(name)
      }
      return getComputedStyle(elt).getPropertyValue(name)
  }
  function setCssVar(name,value,elt){
      if(!elt){
          document.body.style.setProperty(name,value)
          return
      }
      elt.style.setProperty(name,value)
  }
  const resizer = document.querySelector(".resizer")
  const codearea = document.querySelector(".codearea")
  window.addEventListener("load",()=>{
    let body_width = document.body.offsetWidth
    let gap_str = getCssVar("--gap")
    let gap = parseInt(gap_str.substring(0,gap_str.length - 2))
    let siderbar_width = 60
    let output_width = (body_width - (gap * 2 + siderbar_width)) / 2.25
    let codearea_width = 1.25 * output_width
    let codearea_output_width = output_width + codearea_width

    setCssVar("--output-width",output_width + "px")
    setCssVar("--code-width",codearea_width + "px")
    window.onresize = e=>{
        body_width = document.body.offsetWidth
        gap_str = getCssVar("--gap")
        gap = parseInt(gap_str.substring(0,gap_str.length - 2))
        siderbar_width = parseInt(getCssVar("--filebar-width"))
        output_width = (body_width - (gap * 2 + siderbar_width)) / 2.25
        codearea_width = 1.25 * output_width
        console.log(output_width, codearea_width)
        codearea_output_width = output_width + codearea_width
    
        setCssVar("--output-width",output_width + "px")
        setCssVar("--code-width",codearea_width + "px")
    }
    ondragElt(resizer,(x,y)=> {
          if(x > 40){
            let r = codearea_output_width - x
            setCssVar("--output-width",r + "px")
            setCssVar("--code-width",x +"px")
          }


    })
})

