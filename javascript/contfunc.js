const contbtn = document.querySelector("#enviar")

contbtn.addEventListener('click', async(e) =>{
    e.preventDefault()
    let divmensagem = document.querySelector("#mensagemsucces");
    divmensagem.innerHTML = `Obrigado pelo comentário`;
})