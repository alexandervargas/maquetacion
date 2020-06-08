document.querySelector(".menu-btn").addEventListener("click", () => {
    document.querySelector(".nav-menu").classList.toggle("show");
});

const all = document.getElementById('all');

all.addEventListener('click', function () {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'portfolio.json', true);
    xhr.onload = function () {
        if (this.status === 200) {
            const portfolio = JSON.parse( this.responseText);

            let htmlTemplate = '';
            portfolio.forEach( function(proyecto) {
            htmlTemplate += `
            
            <div class="contenedor-img ejemplo-5 ${proyecto.categoria}">  
            <img src="${proyecto.ruta}"  alt="${proyecto.nombre}" />  
            <div class="mascara">
                <h2>${proyecto.nombre}</h2>  
                <p>${proyecto.categoria}</p>
               
            </div>
        </div>
                
                `;
            
            });
            
        
            document.getElementById('portafolio').innerHTML = htmlTemplate;
        }
    }

    xhr.send();
    
});

