export const crearSection = () => {
 
    const section = document.createElement('section');

    let contador = 0;
    const contadorElement = document.createElement('p');
    actualizarContador(); 
    section.appendChild(contadorElement);
    function actualizarContador() {
        contadorElement.textContent = `El contador es: ${contador} `; 
        contadorElement.style.marginRight = '20px'; 
        contadorElement.style.fontSize = '25px'; 
    }

    const botonSuma = document.createElement('button');
    botonSuma.textContent = '+1';
    botonSuma.style.backgroundColor = 'blue'; 
    botonSuma.style.color = 'white'; 
    botonSuma.style.marginRight = '20px'; 
    botonSuma.addEventListener('click', () => {
        contador++;
        actualizarContador();
    });
    section.appendChild(botonSuma);

    const botonResta = document.createElement('button');
    botonResta.textContent = '-1';
    botonResta.style.backgroundColor = 'red'; 
    botonResta.style.color = 'white';
    botonResta.style.marginRight = '10px'; 
    botonResta.addEventListener('click', () => {
        contador--;
        actualizarContador();
    });
    section.appendChild(botonResta);

    return section;
};