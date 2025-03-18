// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. 
// Aquí deberás desarrollar la lógica para resolver el problema.

let amigos = []; //almacenará los nombres de los amigos ingresados

function agregarAmigo(){     //funcion agragar amigos
    const inputAmigo = document.getElementById('amigo');
    const nombreAmigo = inputAmigo.value.trim();

    if(nombreAmigo === ''){ //Valida si el campo esta vacio  
      alert("Por favor ingresa un nombre");
        return;
    }

    if(amigos.includes(nombreAmigo)){ // Valida duplicados
        alert(`El nombre "${nombreAmigo}" ya esta en las lista`);
        return;
    }

    amigos.push(nombreAmigo);//Agregar nombre a la lista

    inputAmigo.value = ""; // Limpia el campo de entrada

    actualizarLista();
    
}

function actualizarLista(){// funcion pra actualizar lista en la interfas 
    const listaAmigos   = document.getElementById('listaAmigos');
    
    listaAmigos.innerHTML = "";//limpiar contenido previo

    for(let i = 0; i < amigos.length; i++){// ciclo for para el array 
        const li = document.createElement('li');
        li.textContent = amigos[i];
        listaAmigos.appendChild(li);
    }

}

function sortearAmigo(){ //Función para sortear un amigo

    if(amigos.length === 0 ){//valida si no hay amigos en la lista
        alert("No hay amigos en la lista, por favor agrega amigos");
        return;
    }

    const amigoAleatorio = Math.floor(Math.random() * amigos.length); //sorteo aleatorio

    const amigoSorteado = amigos[amigoAleatorio]; //amigo sorteado

    const resultado = document.getElementById('resultado'); //mostrar el amigo sorteado
    resultado.textContent = `El amigo sorteado es: "${amigoSorteado}"`;

}