import { getAuth,onAuthStateChanged ,signOut} from "https://www.gstatic.com/firebasejs/9.9.1/firebase-auth.js"


const auth = getAuth();
onAuthStateChanged(auth, (user) => {
  if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/firebase.User
    const uid = user.uid;
    let usuario=document.getElementById("usuario")
    let pistas=document.getElementById("pistas")
    let salir=document.getElementById("salir")
    let tienda=document.getElementById("tienda")
    //esto es para mostrar el salir( le estoy diciendo que me qite la propiedad invisible que puse en boostrap)
    salir.classList.remove("invisible")
    usuario.textContent="bienvenido "+user.email
    pistas.classList.remove("invisible")
    tienda.classList.remove("invisible")
    

    // ...
  } else {
    let usuario=document.getElementById("usuario")
    usuario.textContent=""
    
  }
});

let botonSalir=document.getElementById("salir")
botonSalir.addEventListener("click",function(){

    const auth = getAuth();
    signOut(auth).then(() => {
    // Sign-out successful.
    window.location.href="index.html"
    }).catch((error) => {
    // An error happened.
    });

})