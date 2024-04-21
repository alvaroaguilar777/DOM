import { crearEncabezado } from './Encabezado.js';
import { crearmain } from './Main.js';
import { crearSection } from './Section.js';

//////////////////////////////////////////////////////

const encabezado = crearEncabezado("Mi Pagina Wed");
const body = document.querySelector('body');
body.appendChild(encabezado);

//Diseño    
const titulo = encabezado.querySelector('h1');
titulo.style.margin = '20'; 
titulo.style.textAlign = 'center';
titulo.style.flexDirection = 'column';

encabezado.style.display = 'flex'; 
encabezado.style.flexDirection = 'column'; 
encabezado.style.justifyContent = 'center'; 
encabezado.style.alignItems = 'center';
encabezado.style.backgroundColor = 'black';
encabezado.style.color = '#7EDAF5';




///////////////////////////////////////////////////

const main=document.querySelector('body');
main.appendChild(crearmain("¡Bienvenido a Mi página web!"));
main.appendChild(crearmain("Creador: Alvaro Jose Aguilar Muñoz"));
main.appendChild(crearmain("Tema: Programación Web"));

//diseño
main.style.display = 'flex'; 
main.style.flexDirection = 'column'; 
main.style.justifyContent = 'center'; 
main.style.backgroundColor = '#3A3B3B';
main.style.color = '#00FFFF';

const mensajes = main.querySelectorAll('p');
mensajes.forEach(mensaje => {
    mensaje.style.fontSize = '25px'; 
    mensaje.style.margin = '20px'; 
    mensaje.style.textAlign = 'center'; 
});

////////////////////////////////////////////////////

const section = document.querySelector('main');
section.appendChild(crearSection());

//diseño
section.style.display = 'flex'; 
section.style.flexDirection = 'column'; 
section.style.justifyContent = 'center'; 
section.style.backgroundColor = '#181A1B';
section.style.color = '#00FFDC';

const estilos = document.createElement('style');
estilos.textContent = `
    section {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 3   0px;
    }
    `;
document.head.appendChild(estilos);

/////////////////////////////////////////////////
const bod = document.querySelector('body');
bod.style.margin = '10px';

const bod2 = document.querySelector('main');
bod2.style.margin = '10px';
