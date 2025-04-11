const container = document.getElementById('content');
const links = document.querySelectorAll('.nav-link');
let url = './partials/home.html';

const loadContent = (urlFeed) => {
    fetch(urlFeed)
        .then(response => {
            if (response.ok) {
                return response.text();
            }
            throw new Error(response.statusText);
        })
        .then(data => {
            container.innerHTML = data;
            url = urlFeed;

            updateActiveLink(urlFeed);
        })
        .catch(error => {
            console.error(error.message);
        });
};

const selectContent = (ev) => {
    ev.preventDefault();
    let urlFeed = ev.currentTarget.getAttribute('href');
    loadContent(urlFeed);
};

const updateActiveLink = (currentUrl) => {
    links.forEach(link => {
        if (link.getAttribute('href') === currentUrl) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
};

links.forEach(link => {
    link.addEventListener('click', selectContent);
    if (link.getAttribute('href') === url) {
        link.classList.add('active');
    }
});

loadContent(url);

const responsiveMenuOn = () => {
    document.body.classList.add('responsive-menu-active');
};

const responsiveMenuOff = () => {
    document.body.classList.remove('responsive-menu-active');
};
