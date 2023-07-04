const AboutNavbar = () => {
    const aboutnav = document.querySelectorAll('#navabout a');
    if(aboutnav) {
        aboutnav.forEach((item) => {
            item.addEventListener('click', () => {
                document.querySelector('.activea')?.classList.remove('activea');
                item.classList.add('activea');
            });
        })
    }

    return (
        <nav id="navabout">
            <a href="#about" className="activea">AboutMe</a>
            <a href="#cirtifications">Cirtifications</a>
            <a href="#projects">Projects</a>
        </nav>
    )
}
export default AboutNavbar;
