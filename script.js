function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}


/***********************
  Menu Component
 ***********************/

const Menu = props => {
  return /*#__PURE__*/(
    React.createElement("div", { className: `menu-container ${props.showMenu}` }, /*#__PURE__*/
    React.createElement("div", { className: "overlay" }), /*#__PURE__*/
    React.createElement("div", { className: "menu-items" }, /*#__PURE__*/
    React.createElement("ul", null, /*#__PURE__*/
    React.createElement("li", null, /*#__PURE__*/
    React.createElement("a", { href: "#welcome-section", onClick: props.toggleMenu }, "Inicio")), /*#__PURE__*/



    React.createElement("li", null, /*#__PURE__*/
    React.createElement("a", { href: "#about", onClick: props.toggleMenu }, "¿Quienes Somos?")), /*#__PURE__*/



    React.createElement("li", null, /*#__PURE__*/
    React.createElement("a", { href: "#projects", onClick: props.toggleMenu }, "Productos")), /*#__PURE__*/



    React.createElement("li", null, /*#__PURE__*/
    React.createElement("a", { href: "#contact", onClick: props.toggleMenu }, "Contacto"))), /*#__PURE__*/




    React.createElement(SocialLinks, null))));



};


/***********************
  Nav Component
 ***********************/

const Nav = props => {
  return /*#__PURE__*/(
    React.createElement(React.Fragment, null, /*#__PURE__*/
    React.createElement("nav", { id: "navbar" }, /*#__PURE__*/
    React.createElement("div", { className: "nav-wrapper" }, /*#__PURE__*/
    React.createElement("p", { className: "brand" }, "código", /*#__PURE__*/

    React.createElement("strong", null, "lógico")), /*#__PURE__*/

    React.createElement("a", {
      onClick: props.toggleMenu,
      className: props.showMenu === 'active' ? 'menu-button active' : 'menu-button' }, /*#__PURE__*/

    React.createElement("span", null))))));





};



/***********************
  Header Component
 ***********************/

const Header = props => {
  return /*#__PURE__*/(
    React.createElement("header", { id: "welcome-section" }, /*#__PURE__*/
    React.createElement("div", { className: "forest" }), /*#__PURE__*/
    React.createElement("div", { className: "silhouette" }), /*#__PURE__*/
    React.createElement("div", { className: "moon" }), /*#__PURE__*/
    React.createElement("div", { className: "container" }, /*#__PURE__*/
    React.createElement("h1", null, /*#__PURE__*/
    React.createElement("span", { className: "line" }, "Tú Innovas"), /*#__PURE__*/
    React.createElement("span", { className: "line" }, "Nosotros Desarrollamos"), /*#__PURE__*/
    React.createElement("span", { className: "line" },)), /*#__PURE__*/


    React.createElement("div", { className: "buttons" }, /*#__PURE__*/
    React.createElement("a", { href: "#about" }, "Quienes somos"), /*#__PURE__*/
    React.createElement("a", { href: "#contact", className: "cta" }, "Contáctanos")))));


};


/***********************
  About Component
 ***********************/

const About = props => {
  return /*#__PURE__*/(
    React.createElement("section", { id: "about" }, /*#__PURE__*/
    React.createElement("div", { className: "wrapper" }, /*#__PURE__*/
    React.createElement("article", null, /*#__PURE__*/
    React.createElement("div", { className: "title" }, /*#__PURE__*/
    React.createElement("h3", null, "Quíenes Somos"), /*#__PURE__*/
    React.createElement("p", { className: "separator" })), /*#__PURE__*/

    React.createElement("div", { className: "desc full" }, /*#__PURE__*/
    React.createElement("h4", { className: "subtitle" }, "Te ayudamos con la tecnologia."), /*#__PURE__*/
    React.createElement("p", null, "Somos una empresa apasionada a las nuevas tecnologias que brindamos diferentes productos para facilitar las operaciones de tu empresa."), /*#__PURE__*/
    )))));};


/***********************
  Project Component
 ***********************/

const Project = props => {
  const tech = {
    sass: 'fab fa-sass',
    css: 'fab fa-css3-alt',
    js: 'fab fa-js-square',
    react: 'fab fa-react',
    vue: 'fab fa-vuejs',
    d3: 'far fa-chart-bar',
    node: 'fab fa-node' };


  const link = props.link || 'http://';
  const repo = props.repo || 'http://';

  return /*#__PURE__*/(
    React.createElement("div", { className: "project" }, /*#__PURE__*/

    React.createElement("div", { className: "project-details" }, /*#__PURE__*/
    React.createElement("div", { className: "project-tile" }, /*#__PURE__*/
    React.createElement("p", { className: "icons" },
    props.tech.split(' ').map((t) => /*#__PURE__*/
    React.createElement("i", { className: tech[t], key: t }))),


    props.title, ' '),

    props.children, /*#__PURE__*/
  )));





};



/***********************
  Projects Component
 ***********************/

const Projects = props => {
  return /*#__PURE__*/(
    React.createElement("section", { id: "projects" }, /*#__PURE__*/
    React.createElement("div", { className: "projects-container" }, /*#__PURE__*/
    React.createElement("div", { className: "heading" }, /*#__PURE__*/
    React.createElement("h3", { className: "title" }, "Nuestros productos"), /*#__PURE__*/
    React.createElement("p", { className: "separator" }), /*#__PURE__*/
    React.createElement("p", { className: "subtitle" }, "Te mostramos una lista de productos que proporcionamos", /*#__PURE__*/)), /*#__PURE__*/






    React.createElement("div", { className: "projects-wrapper" }, /*#__PURE__*/
      

    React.createElement(Project, {
      title: "Desarrollo de Apps Web",
      img: '',
      tech: "js sass node react"}, /*#__PURE__*/

    React.createElement("small", null, "Construidas con frameworks de JS"), /*#__PURE__*/), /*#__PURE__*/

    React.createElement(Project, {
      title: "Desarrollo Sistemas de gestión empresarial",
      img: '',
      tech: "js sass node react"}, /*#__PURE__*/

    React.createElement("small", null, "Gestiones de todos los procesos de tu empresa"), /*#__PURE__*/), /*#__PURE__*/

    React.createElement(Project, {
      title: "Desarrollo de Software de comercio electronico",
      img: '',
      tech: "js sass node react"}, /*#__PURE__*/

    React.createElement("small", null, "Creación de plataformas que permiten a las empresas vender productos y servicios en línea."), /*#__PURE__*/), /*#__PURE__*/

    React.createElement(Project, {
      title: "Desarrollo de Sistemas de gestión de contenido (CMS)",
      img: '',
      tech: "js sass node react"}, /*#__PURE__*/

    React.createElement("small", null, "Desarrollo de sistemas que facilitan la creación, edición y administración de contenido en sitios web."), /*#__PURE__*/), /*#__PURE__*/

    React.createElement(Project, {
      title: "Servicios de consultoría y personalización",
      img: '',
      tech: ""}, /*#__PURE__*/

     /*#__PURE__*/), /*#__PURE__*/
    )
    )))

};



/***********************
  Contact Component
 ***********************/

const Contact = props => {
  return /*#__PURE__*/(
    React.createElement("section", { id: "contact" }, /*#__PURE__*/
    React.createElement("div", { className: "container" }, /*#__PURE__*/
    React.createElement("div", { className: "heading-wrapper" }, /*#__PURE__*/
    React.createElement("div", { className: "heading" }, /*#__PURE__*/
    React.createElement("p", { className: "title" }, "Deseas", /*#__PURE__*/
    React.createElement("br", null), "contactarnos?"), /*#__PURE__*/


    React.createElement("p", { className: "separator" }), /*#__PURE__*/
    React.createElement("p", { className: "subtitle" }, "Puedes enviarnos un correo ",
    '', /*#__PURE__*/
    React.createElement("span", { className: "mail" }, "codigologicogt@gmail.com, o bien mandarnos un mensaje en cualquiera de nuestras redes sociales"), ".")), /*#__PURE__*/
    React.createElement(SocialLinks, null)), /*#__PURE__*/
  )));




};



/***********************
  Footer Component
 ***********************/

const Footer = props => {
  return /*#__PURE__*/(
    React.createElement("footer", null, /*#__PURE__*/
    React.createElement("div", { className: "wrapper" }, /*#__PURE__*/
    React.createElement("h3", null, "THANKS FOR VISITING"), /*#__PURE__*/
    React.createElement("p", null, "\xA9 ", new Date().getFullYear(), " Yago Est\xE9vez."), /*#__PURE__*/
    React.createElement(SocialLinks, null))));



};




/***********************
  Social Links Component
 ***********************/

const SocialLinks = props => {
  return /*#__PURE__*/(
    React.createElement("div", { className: "social" }, /*#__PURE__*/
    React.createElement("a", {
      href: "https://www.facebook.com/codigologicogt/",
      target: "_blank",
      rel: "noopener noreferrer",
      title: "Enlace a Facebook" },

    ' ', /*#__PURE__*/
    React.createElement("i", { className: "fab fa-facebook" })), /*#__PURE__*/

    React.createElement("a", {
      id: "profile-link",
      href: "https://www.instagram.com/codigologico_gt/",
      target: "_blank",
      rel: "noopener noreferrer",
      title: "Enlace a intagram" },

    ' ', /*#__PURE__*/
    React.createElement("i", { className: "fab fa-instagram" })), /*#__PURE__*/

    React.createElement("a", {
      href: "mailto:codigologicogt@gmail.com",
      target: "_blank",
      rel: "noopener noreferrer",
      title: "Link to author's Codepen Profile" },

    ' ', /*#__PURE__*/
    React.createElement("i", { className: "fab fa-email" }))));



};



/***********************
  Main Component
 ***********************/

class App extends React.Component {constructor(...args) {super(...args);_defineProperty(this, "state",
    {
      menuState: false });_defineProperty(this, "toggleMenu",


    () => {
      this.setState(state => ({
        menuState: !state.menuState ?
        'active' :
        state.menuState === 'deactive' ?
        'active' :
        'deactive' }));

    });}

  render() {
    return /*#__PURE__*/(
      React.createElement(React.Fragment, null, /*#__PURE__*/
      React.createElement(Menu, { toggleMenu: this.toggleMenu, showMenu: this.state.menuState }), /*#__PURE__*/
      React.createElement(Nav, { toggleMenu: this.toggleMenu, showMenu: this.state.menuState }), /*#__PURE__*/
      React.createElement(Header, null), /*#__PURE__*/
      React.createElement(About, null), /*#__PURE__*/
      React.createElement(Projects, null), /*#__PURE__*/
      React.createElement(Contact, null), /*#__PURE__*/
      React.createElement(Footer, null)));


  }

  componentDidMount() {
    const navbar = document.querySelector('#navbar');
    const header = document.querySelector('#welcome-section');
    const forest = document.querySelector('.forest');
    const silhouette = document.querySelector('.silhouette');
    let forestInitPos = -300;

    window.onscroll = () => {
      let scrollPos = document.documentElement.scrollTop || document.body.scrollTop;

      if (scrollPos <= window.innerHeight) {
        silhouette.style.bottom = `${parseInt(scrollPos / 6)}px`;
        forest.style.bottom = `${parseInt(forestInitPos + scrollPos / 6)}px`;
      }

      if (scrollPos - 100 <= window.innerHeight)
      header.style.visibility = header.style.visibility === 'hidden' && 'visible';else
      header.style.visibility = 'hidden';

      if (scrollPos + 100 >= window.innerHeight) navbar.classList.add('bg-active');else
      navbar.classList.remove('bg-active');
    };

    (function navSmoothScrolling() {
      const internalLinks = document.querySelectorAll('a[href^="#"]');
      for (let i in internalLinks) {
        if (internalLinks.hasOwnProperty(i)) {
          internalLinks[i].addEventListener('click', e => {
            e.preventDefault();
            document.querySelector(internalLinks[i].hash).scrollIntoView({
              block: 'start',
              behavior: 'smooth' });

          });
        }
      }
    })();
  }}

ReactDOM.render( /*#__PURE__*/React.createElement(App, null), document.getElementById('app'));