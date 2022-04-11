import { initScrollReveal } from "./scrollReveal.js";
import { typeWrite } from "./typeWrite.js";
import { hoverChangeDescription } from "./hoverChangeDescription.js";
import { menu } from "./menu.js";

menu();
initScrollReveal();
typeWrite(document.querySelector(".typewriter"));

hoverChangeDescription(
  ".html",
  "HTML es un lenguaje de marcado que se utiliza para el desarrollo de páginas de Internet. Se trata de la siglas que corresponden a HyperText Markup Language, es decir, Lenguaje de Marcas de Hipertexto"
);
hoverChangeDescription(
  ".css",
  "CSS es un mecanismo complementario del lenguaje HTML que permite indicarle al navegador el estilo que debe darle a los distintos elementos al desplegar la información de un sitio web."
);
hoverChangeDescription(
  ".js",
  "JavaScript es el lenguaje de programación que debes usar para añadir características interactivas a tu sitio web, (por ejemplo, juegos, eventos que ocurren cuando los botones son presionados o los datos son introducidos en los formularios, efectos de estilo dinámicos, animación, y mucho más)"
);
hoverChangeDescription(
  ".java",
  "Java es una tecnología que se usa para el desarrollo de aplicaciones que convierten a la Web en un elemento más interesante y útil.Java le permite jugar, cargar fotografías, chatear en línea, realizar visitas virtuales y utilizar servicios como, por ejemplo, cursos en línea, servicios bancarios en línea y mapas interactivos. Si no dispone de Java, muchas aplicaciones y sitios web no funcionarán."
);
hoverChangeDescription(
  ".bootstrap",
  "Bootstrap es un framework front-end utilizado para desarrollar aplicaciones web y sitios mobile first, o sea, con un layout que se adapta a la pantalla del dispositivo utilizado por el usuario."
);
hoverChangeDescription(
  ".vue",
  "Vue permite actualizar el HTML y CSS (la parte visual de la página) cuando cambian los datos de la aplicación, sin que el desarrollador tenga que invertir tiempo en propagar esos cambios de manera manual en cada lugar de la página donde se visualizan los datos que se alteraron."
);
hoverChangeDescription(
  ".spring",
  "Spring como Framework aporta una primera capacidad muy importante y es que se trata de un framework de inversión de control . Es decir el toma el control de cuando cada uno de los objetos es creado. Esto le permite hacer de intermediario entre el programa que usa los objetos y los objetos en sí"
);
hoverChangeDescription(
  ".jquery",
  "jQuery es una librería desarrollada en 2006 por John Resig que permite añadir una capa de interacción AJAX entre la web y las aplicaciones que desarrollemos controlando eventos, creando animaciones y diferentes efectos para enriquecer la experiencia de usuario."
);
