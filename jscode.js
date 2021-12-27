function setValue(editor,value){
    editor.getDoc().setValue(value)
}

const jstemplate = (code)=> `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">  
</head>
<body>
  <script>
  ${code}
  </script>
</body>
</html>
`

window.addEventListener("load",()=>{
  var menu = document.querySelector(".examples .menu")
  for (role in codes){
      menu.innerHTML += `<li data-role = "${role}" onclick="handleSetExample(this)">${role}</li>`
  }
})
function handleSetExample(elt){
    let role = elt.dataset.role
    let codeObj = codes[role]
    console.log(codeObj)
    var r
    if(codeObj.template){
        r = jstemplate(codeObj.code)
    }
    setValue(editorHtml,r)
}


