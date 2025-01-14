class MenuPrincipal extends HTMLElement {
    constructor() {
        super();

        //Crear un shadow root
        const shadow = this.attachShadow({ mode: 'open' });

        //Agregar el link al CSS
        const link = document.createElement('link');
        link.setAttribute('rel', 'stylesheet');
        link.setAttribute('href', './style/menu.css'); // Ruta del CSS externo
        shadow.appendChild(link);

        //Agregar el script para el comportamiento
        /*const script = document.createElement('script');
        script.setAttribute('src', 'script.js'); 
        script.setAttribute('defer', ''); 
        shadow.appendChild(script);*/

        //Estructura HTML del menú
        const container = document.createElement('div');
        container.innerHTML = `
            <header>
                <div class="logo">
                <img src="./img/logo.png" alt="Logo SigManga" class="logo-img">
                </div>
                <nav>
                    <ul>
                        <li><a class="btn-activo" href="#">Inicio</a></li>
                        <li><a href="#">Listado</a></li>
                        <li><a href="#">Recientes</a></li>
                        <li><a href="#">Randoms</a></li>
                        <li>
                            <div class="search">
                                <input type="text" placeholder="Buscar...">
                                <button><span class="material-symbols-outlined">search</span></button>
                            </div>
                        </li>
                        <li>
                            <div class="auth">
                                <a class="btn-login" href="#">Iniciar Sesión</a>
                            </div>
                        </li>
                        <li>
                            <div class="auth">
                                <a class="btn-signin" href="#">Registrarse</a>
                            </div>
                        </li>
                    </ul>
                </nav>
            </header>
        `;

        //Adjuntar el contenido al shadow root
        shadow.appendChild(container);
    }
}

//Definir el nuevo elemento personalizado
customElements.define('menu-principal', MenuPrincipal);

