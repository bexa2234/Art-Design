
// DOM elementlarini tanlab olish
const menuToggle = document.getElementById('menu-toggle');
const navbarNav = document.getElementById('navbar-nav');

// Menu tugmasiga 'click' hodisasini qo'shish
menuToggle.addEventListener('click', () => {
    // 'active' klassini navbar-nav elementiga qo'shish yoki olib tashlash
    navbarNav.classList.toggle('active');

    // Ikonkani o'zgartirish (ixtiyoriy)
    const icon = menuToggle.querySelector('i');
    if (navbarNav.classList.contains('active')) {
        icon.classList.remove('fa-bars');
        icon.classList.add('fa-times'); // Yopish ikonkasiga o'zgartirish
    } else {
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars'); // Ochish ikonkasiga qaytarish
    }
});

// Agar menyudagi link bosilsa, menyuni yopish (ixtiyoriy, silliq o'tish uchun yaxshi)
// Barcha navigatsiya linklarini tanlab olish
const navLinks = navbarNav.querySelectorAll('a');

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        // Agar menyu ochiq bo'lsa (mobil ko'rinishda)
        if (navbarNav.classList.contains('active')) {
            navbarNav.classList.remove('active'); // Menyuni yopish
            // Ikonkani asl holiga qaytarish
            menuToggle.querySelector('i').classList.remove('fa-times');
            menuToggle.querySelector('i').classList.add('fa-bars');
        }
    });
});