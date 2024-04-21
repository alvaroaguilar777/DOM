export const crearEncabezado = (Mens) => {
    const header = document.createElement('header');
    const titulo = document.createElement('h1');
    titulo.textContent = Mens;
    header.appendChild(titulo);
    
    const logo = document.createElement('img');
    logo.src = 'alvaro.jpg';
    header.appendChild(logo);
    logo.style.display = 'block';
    logo.style.borderRadius = '50%';
    logo.style.width = '500px'; 
    logo.style.height = '250px';

    const enlaceFacebook = document.createElement('a');
    enlaceFacebook.href = 'https://www.facebook.com'; 
    const imagenFacebook = document.createElement('img');
    imagenFacebook.src = 'facebook.png'; 
    enlaceFacebook.target = '_blank';
    enlaceFacebook.appendChild(imagenFacebook);
    header.appendChild(enlaceFacebook);
    imagenFacebook.style.display = 'block';
    imagenFacebook.style.borderRadius = '50%';
    imagenFacebook.style.width = '70px'; 
    imagenFacebook.style.height = '50px';

    return header;
    };