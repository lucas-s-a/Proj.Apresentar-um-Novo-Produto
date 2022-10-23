// lista de espera get's
/*let lenome = document.querySelector("#listespnome").value
let leemail = document.querySelector("#listespemail").value
let lesenha = document.querySelector("#listespsenha").value
let lesenha2 = document.querySelector("#listespsenha2").value
let lecep = document.querySelector("#listescep").value
let leest = document.querySelector("#estado").value
let lecid = document.querySelector("#cidade").value
let lebairro = document.querySelector("#bairro").value
let lerua = document.querySelector("#rua").value
let lenumero = document.querySelector("#numero").value
let lecomplet = document.querySelector("#complemento").value



// Recuperar senha get's

let rsrec = document.querySelector("#eRsenha")
let rsresp = document.querySelector("#MensagemResposta")*/

// login get's
const logini = document.querySelector("#logou")
function lg(){
    let s = document.querySelector("#corpo");
    s.innerHTML = `
    <main id="corpo2">
        <div>
            <img src="imagens2/Su.png" alt="logado">
        </div>
    </main>`;
}
logini.addEventListener('click',lg)
