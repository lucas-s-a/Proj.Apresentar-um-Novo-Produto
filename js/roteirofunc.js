const lemail = document.querySelector("#txemail")
const lsenha = document.querySelector("#ctds")
const logini = document.querySelector("#logou")
function lg(){
    let z = lemail.value
    let y = lsenha.value
    if(z.includes('@') !== false && y !== ''){
        let s = document.querySelector("#corpo");
        s.innerHTML = `
        <main>
            <div class="d-flex justify-content-center">
                <img class="imglogin" src="imagens2/Su.png" alt="logado">
            </div>
        </main>`;
    }else{console.log("oi")}
}
logini.addEventListener('click',lg)

