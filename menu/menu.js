class MenuPrincipal extends HTMLElement {
    constructor() {
        super();

        // Crear un shadow root
        const shadow = this.attachShadow({ mode: 'open' });

        // Agregar el link al CSS
        const link = document.createElement('link');
        link.setAttribute('rel', 'stylesheet');
        link.setAttribute('href', './menu/menu.css'); // Ruta del CSS externo
        shadow.appendChild(link);

        const linkIcon = document.createElement('link');
        linkIcon.setAttribute('rel', 'stylesheet');
        linkIcon.setAttribute('href', 'https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0&icon_names=search');
        shadow.appendChild(linkIcon);

        //Agregar el script para el comportamiento
        const script = document.createElement('script');
        script.setAttribute('src', './menu/scriptmenu.js'); 
        script.setAttribute('defer', ''); 
        shadow.appendChild(script);


        // Estructura HTML del menú
        const container = document.createElement('div');
        container.innerHTML = `
            <header>
                <div class="logo">
                    <img src="./img/logo.webp" alt="Logo SigManga" class="logo-img">
                </div>
                <nav>
                    <ul>
                        <li><a id="inicio" class="btn-activo" data-page="./inicio.html">Inicio</a></li>
                        <li><a id="listado" data-page="./listado.html">Listado</a></li>
                        <li><a id="recientes" data-page="./recientes.html">Recientes</a></li>
                        <li><a id="randoms" data-page="./randoms.html">Randoms</a></li>
                        <li>
                            <div class="search">
                                <input type="text" placeholder="Buscar...">
                                <button><span class="material-symbols-outlined">search</span></button>
                            </div>
                        </li>
                        <li>
                            <div class="auth">
                                <a class="btn-login" href="login.html">Iniciar Sesión</a>
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

        // Adjuntar el contenido al shadow root
        shadow.appendChild(container);

        // Agregar eventos para cargar las páginas dinámicamente
        //this.addMenuEventListeners(shadow);
    }

    
}

// Definir el nuevo elemento personalizado
customElements.define('menu-principal', MenuPrincipal);
