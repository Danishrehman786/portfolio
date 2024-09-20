class mynavbar extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Danish Portfolio</title>
    <link rel="stylesheet" href="style.css">
    <!-- Updated Font Awesome link -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css">
</head>
<body>
    <header>
        <div class="left-menu">
            <div class="menu-icon">
                <i class="fa fa-bars"></i>
            </div>
            <div class="allmenu">
                <ul class="nav-list">
                    <li><a href="index.html"><i class="fa fa-home"></i> Home</a></li>
                    <li><a href="resume.html"><i class="fa fa-file-text"></i> Resume</a></li>
                    <li><a href="projects.html"><i class="fa fa-briefcase"></i> Projects</a></li>
                    <li><a href="about.html"><i class="fa fa-user"></i> About me</a></li>
                    <li><a href="services.html"><i class="fa fa-cogs"></i> Services</a></li>
                    <li><a href="contactus.html"><i class="fa fa-envelope"></i> Contact me</a></li>
                </ul>
            </div>
        </div>
        <div class="right-menu">
            <ul class="social-icons">
    <li>
        <a href="https://wa.me/923471032189" class="whatsapp-icon" target="_blank">
            <i class="fab fa-whatsapp"></i>
        </a>
    </li>
    <li>
        <a href="https://www.linkedin.com/in/danish-rehman-66577414a/" class="linkedin-icon" target="_blank">
            <i class="fab fa-linkedin"></i>
        </a>
    </li>
    <li>
        <a href="https://web.facebook.com/DanishRehmanOfficial" class="facebook-icon" target="_blank">
            <i class="fab fa-facebook"></i>
        </a>
    </li>
    
    <li>
        <a href="https://www.instagram.com/mrdanishofficial/" class="instagram-icon" target="_blank">
            <i class="fab fa-instagram"></i>
        </a>
    </li>
</ul>



            <div class="toggle-switch">
                <input type="checkbox" id="theme-toggle">
                <label for="theme-toggle" class="switch"></label>
            </div>
        </div>
    </header>
    <script src="script.js"></script>
</body>
</html>
`;
    }
}

//footer
customElements.define('my-navbar', mynavbar);

class myfooter extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
       
            <div class="footer">
                <p>&copy; 2024 Developed by Danish</p>
            </div>

        `;
    }
}

customElements.define('my-footer', myfooter);





















//all script here

document.addEventListener('DOMContentLoaded', function () {
    const toggleSwitch = document.getElementById('theme-toggle');
    const menuIcon = document.querySelector('.menu-icon');
    const allMenu = document.querySelector('.allmenu');

    // Check if the user has a preference saved in local storage
    const currentTheme = localStorage.getItem('theme');
    if (currentTheme === 'light') {
        document.body.classList.add('light-mode');
        toggleSwitch.checked = true;
    }

    // Theme toggle functionality
    toggleSwitch.addEventListener('change', function () {
        if (toggleSwitch.checked) {
            document.body.classList.add('light-mode');
            localStorage.setItem('theme', 'light');
        } else {
            document.body.classList.remove('light-mode');
            localStorage.setItem('theme', 'dark');
        }
    });

    // Menu icon toggle functionality
    menuIcon.addEventListener('click', function () {
        allMenu.classList.toggle('active');
    });
});
