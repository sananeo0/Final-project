document.addEventListener('click', (e) => {

    if (!e.target.closest('.nav-link')) {
        document.querySelectorAll(".nav-link").forEach((navLink) => {
            navLink.style.color = "";
        });
    }

    // Check if the clicked element or any of its ancestors is part of the .nav-item

    let isNavItem = e.target.closest('.nav-item');

    if (isNavItem) {
        return;
    }

    // Close other dropdowns if open
    document.querySelectorAll(".dropdown-menu").forEach((dropdown) => {
        if (dropdown !== home) {
            dropdown.style.display = 'none';
            dropdown.style.transform = 'translateY(0px)';
        }
    });
    document.querySelectorAll(".dropdown-menu").forEach((dropdown) => {
        if (dropdown !== shop) {
            dropdown.style.display = 'none';
            dropdown.style.transform = 'translateY(0px)';
        }
    });
    document.querySelectorAll(".dropdown-menu").forEach((dropdown) => {
        if (dropdown !== icons) {
            dropdown.style.display = 'none';
            dropdown.style.transform = 'translateY(0px)';
        }
    });
    document.querySelectorAll(".dropdown-menu").forEach((dropdown) => {
        if (dropdown !== pages) {
            dropdown.style.display = 'none';
            dropdown.style.transform = 'translateY(0px)';
        }
    });
    document.querySelectorAll(".dropdown-menu").forEach((dropdown) => {
        if (dropdown !== docs) {
            dropdown.style.display = 'none';
            dropdown.style.transform = 'translateY(0px)';
        }
    });
});

document.querySelectorAll(".nav-item").forEach((btn) => {
    btn.onclick = (e) => {
        const dropdownMenu = e.currentTarget.querySelector('.dropdown-menu');
        let id = dropdownMenu.getAttribute("id");

        document.querySelectorAll(".dropdown-menu").forEach((dropdown) => {
            if (dropdown !== dropdownMenu) {
                dropdown.style.display = 'none';
                dropdown.style.transform = 'translateY(0px)';
            }
        });

        if (id === 'home') {
            let home = document.getElementById("home");

            home.style.display = (home.style.display === 'block') ? 'none' : 'block';
            home.style.transform = (home.style.display === 'block') ? 'translateY(30px)' : 'translateY(0px)';
        }
        if (id === 'shop') {
            let shop = document.getElementById("shop");

            shop.style.display = (shop.style.display === 'block') ? 'none' : 'block';
            shop.style.transform = (shop.style.display === 'block') ? 'translateY(30px)' : 'translateY(0px)';
        }
        if (id === 'icons') {
            let icons = document.getElementById("icons");

            icons.style.display = (icons.style.display === 'block') ? 'none' : 'block';
            icons.style.transform = (icons.style.display === 'block') ? 'translateY(30px)' : 'translateY(0px)';
        }
        if (id === 'pages') {
            let pages = document.getElementById("pages");

            pages.style.display = (pages.style.display === 'block') ? 'none' : 'block';
            pags.style.transform = (pages.style.display === 'block') ? 'translateY(30px)' : 'translateY(0px)';
        }
        if (id === 'docs') {
            let docs = document.getElementById("docs");

            docs.style.display = (docs.style.display === 'block') ? 'none' : 'block';
            docs.style.transform = (docs.style.display === 'block') ? 'translateY(30px)' : 'translateY(0px)';
        }
    }
});

document.querySelectorAll(".nav-link").forEach((btn) => {
    btn.onclick = (e) => {

        e.currentTarget.style.color = "black";
    };
});