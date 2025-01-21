class Footer extends HTMLElement {
    constructor() {
        super();

        //Crear un shadow root
        const shadow = this.attachShadow({ mode: 'open' });

        //Agregar el link al CSS
        const link = document.createElement('link');
        link.setAttribute('rel', 'stylesheet');
        link.setAttribute('href', './style/footer.css'); // Ruta del CSS externo
        shadow.appendChild(link);

        //Agregar el script para el comportamiento
        /*const script = document.createElement('script');
        script.setAttribute('src', 'script.js'); 
        script.setAttribute('defer', ''); 
        shadow.appendChild(script);*/

        //Estructura HTML del menú
        const container = document.createElement('div');
        container.innerHTML = `
            <footer>
                <div class="logo">
                    <img src="./img/logo.png" alt="Logo SigManga" class="logoFooter-img">
                </div>
                <p>©2024 SigManga</p>
                <nav>
                    <ul>
                        <li><a href="#">Inicio</a></li>
                        <li><a href="#">Listado</a></li>
                        <li><a href="#">Mangas Recientes</a></li>
                        <li><a href="#">Top ↑</a></li>
                    </ul>  
                </nav>
            </footer>
        `;

        //Adjuntar el contenido al shadow root
        shadow.appendChild(container);
    }
}

//Definir el nuevo elemento personalizado
customElements.define('footer-sigma', Footer);

