
        const searchIcons = document.querySelectorAll('.searchicon');
        const searchInputs = document.querySelectorAll('.search');
        const bar = document.querySelector('.fa-bars');
        const cross = document.querySelector('#hdcross');
        const headerBar = document.querySelector('.headerbar');

        searchIcons.forEach((icon, index) => {
            icon.addEventListener('click', () => {
                searchInputs[index].style.display = 'flex';
                icon.style.display = 'none';
            });
        });

        bar.addEventListener('click', () => {
            headerBar.classList.add('active');
            bar.style.display = 'none';
            cross.style.display = 'block';
        });

        cross.addEventListener('click', () => {
            headerBar.classList.remove('active');
            bar.style.display = 'block';
            cross.style.display = 'none';
        });

        // Close mobile menu when clicking a nav link
        document.querySelectorAll('.headerbar .nav ul li a').forEach(link => {
            link.addEventListener('click', () => {
                headerBar.classList.remove('active');
                bar.style.display = 'block';
                cross.style.display = 'none';
            });
        });

        // Smooth scroll for anchor links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth'
                    });
                }
            });
        });