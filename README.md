- [Español](#-Índice)
- [English](#-Index)

***

![Shows functionalities](https://github.com/AnnaLizarraga/Assets/blob/main/Assets%20PokeDex/gif_pokeDex.gif)

Project Deploy:
In process...

***
# Data Lovers / PokeDéx.

## Índice

- [1. Resumen del proyecto](#1-resumen-del-proyecto)
- [2. Tech Skills del Proyecto](#2-Tech-Skills-del-Proyecto)
- [3. Planeación](#3-Planeación)
- [4. Investigación UX](#4-Investigación-UX)
- [5. Bocetaje + Prototipo + Feedback ](#5-Bocetaje-+-Prototipo-+-Feedback-de-iteración)

***
## 1. Resumen del proyecto

Este proyecto es realizado con la finalidad de crear una página web para visualizar y manipular un conjunto de datos de Pokémon GO.

Esta página web permite al usuario visualizar en la pokédex cards de pokemones de la generación Kanto y Johto, así como ordenar de A-Z o número de forma ascendente o descendente y de igual manera filtrar por su tipo o en la barra de búsqueda por nombre.
Al seleccionar una card se despliega en pantalla un modal con información más detallada del pokémon en la cual se puede observar una gráfica dinámica que calcula y presenta la información según su valor de mayor poder.


***
## 2. Tech Skills del Proyecto

### HTML 5 
- Semántico

### CSS 
- Selectores de CSS
- Box Model
- Flexbox

### Web APIs
- Uso de selectores del DOM
- Manejo de eventos del DOM
- Manipulación dinámica del DOM

### JavaScript Vanilla
- Datos primitivos
- Strings
- variables
- Arrays 
- Objetos
- Funciones
- Condicionales
- Bucles/ciclos
- Expresiones y sentencias 
- Uso de identificadores descriptivos
- Módulos de ECMAScript.

### Control de versiones Git- Github
- Git: Control de versiones con git (init, clone, add, commit, status, push, pull, remote) 
- Git: Integración de cambios entre ramas (branch, checkout, fetch, merge, reset, rebase, tag) 
- GitHub: Despliegue con Netlify.

### User-centricity
- Diseñar un producto o servicio poniendo a la usuaria en el centro

### Product-design
- Crear prototipos de alta fidelidad que incluyan interacciones
- Seguir los principios básicos de diseño visual

### Research
-	Planear y ejecutar testeos de usabilidad de prototipos en distintos niveles de fidelidad (Maze)


***
## 3. Planeación

Este proyecto se realizó en dupla, con metodologías agiles SCRUM en 4 sprints de 1 semana en la cual se trabajaron historias de usuario.

Puedes ver la planeación [aquí]( https://trello.com/b/mnSJ0mH5/proyecto-2-data-lovers)

### Historia de Usuario 1: Pantalla home

Yo como usuario quiero poder ingresar mi nombre de usuario y contraseña para ingresar a la app o en su defecto iniciar directamente.

Criterios de aceptación

- El usuario va a poder visualizar inputs para agregar sus datos
- El usuario va a poder visualizar botones para acceder a la página principal

Definición de terminado

- La página tendrá una estructura básica en HTML.
- La página tendrá un estilo lo más parecido al prototipo en CSS.
- Al ingresar los datos se evalúa si ingresa con usuario o directo.
- En caso de ingresar con usuario se verá la sección de información del usuario
- en caso de no ingresar con datos, se ocultará esta sección.

### Historia de Usuario 2: Visualizar la lista de Pokémon

Yo como usuario quiero poder visualizar la lista completa de Pokémon (nombre, imagen y tipo) en la página principal.

Criterios de aceptación

- El usuario va a poder visualizar cada uno de los Pokémon en la página de inicio.
- La información básica de cada Pokémon (nombre, número, imagen y tipo) se visualizará en forma de tarjetas por toda la página.

Definición de terminado

- La página tendrá una estructura básica en HTML.
- La página tendrá un estilo lo más parecido al prototipo en CSS.
- Las tarjetas se formarán con el modelo de caja Box Model y su distribución se hará por medio de Flexbox.
- Se cargará la información de cada Pokémon por medio de JS.
- Test unitario Jest


### Historia de Usuario 3: Función ordenado

Yo como usuario quiero poder ordenar el listado de los Pokémon en la pantalla para poder elegir uno.

Criterios de aceptación

- El usuario va a poder visualizar un desplegable en la cabecera de la página.
- El usuario podrá elegir una opción entre orden alfabético y orden numérico, ascendente y descendente para poder ordenar la lista.

Definición de terminado

- Se creará una entrada con todas las opciones en la cabecera de la página.
-Tendrá un estilo en CSS.
- Tendrá una función de ordenado con JS.
- Test unitario Jest

### Historia de Usuario 4: Función filtrado

Yo como usuario quiero poder filtrar el listado de los Pokémon en la pantalla para poder elegir uno.

Criterios de aceptación

- El usuario va a poder visualizar un desplegable en la cabecera de la página.
- El usuario podrá elegir una opción entre cada tipo de Pokémon para poder filtrar la lista.

Definición de terminado

- Se creará una entrada con todas las opciones en la cabecera de la página.
- Tendrá un estilo básico en CSS.
- Tendrá una función de ordenado con JS.
- Test unitario Jest

### Historia de Usuario 5: Función búsqueda
Yo como usuario quiero poder buscar un Pokémon específico.

Criterios de aceptación

- El usuario va a poder visualizar un cuadro de texto en la cabecera de la página.
- El usuario podrá ingresar un nombre de un Pokémon para visualizarlo en la página principal.

Definición de terminado

- Se creará una entrada de texto para la búsqueda.
- Tendrá un estilo básico en CSS.
- Tendrá una función de ordenado con JS.
- Test unitario Jest

### Historia de Usuario 6: Visualización de data 

Yo como usuario quiero poder visualizar la información básica de cada Pokémon en una ventana de la página principal.

Criterios de aceptación

- El usuario va a poder dar click a la tarjeta de cada Pokémon.
- El usuario visualizar una modal con la información básica de cada Pokémon.
- El usuario visualizar en la ventana gráficas con ataque y defensa de cada Pokémon, así como su descripción, fortalezas y debilidades.

Definición de terminado

- Se creará una ventana modal de forma dinámica en JS.
- Tendrá un estilo en CSS.
- Tendrá un botón de cierre.
- Se mostrará información como número, nombre, tipo, descripción, fortalezas y debilidades de cada Pokémon.
- Se creará una gráfica que contenga sus puntajes de ataque, defensa y stamina por cada Pokémon.
- La grafica ordenara dinámicamente los puntajes mediante una función de cálculo.
- Test unitario Jest


***
## 4. Investigación UX

### Pokémon Go

Pokémon GO es una experiencia de juego internacional que cuenta con más de mil millones de descargas y ha sido nombrada "el mejor juego para móviles" por Game Developers Choice Awards y "la mejor aplicación del año" por TechCrunch (tomado de Google Play).
Los usuarios del juego se convierten en "Maestros/entrenadores de Pokémon" y pueden:

- Descubrir el mundo Pokémon: Explorar y descubrir nuevos Pokémon allá donde vayan.
- Atrapar distintos Pokémon para completar su Pokédex.
- Pelear contra Pokémon de otros entrenadores y conquistar un gimnasio.
- Competir en épicos combates contra otros entrenadores.
- Hacer equipo con otros entrenadores para atrapar poderosos Pokémon durante las incursiones.

### Hallazgos

Para entender mejor qué necesidades complementarias a la app tienen los
usuarios, hicimos una rápida investigación (research) y estos son algunos
de los hallazgos.

- Los Pokémon tienen características únicas que determinan las decisiones que toma el usuario (tipo, debilidad, peso, multiplicador, etc.)
- Los Pokémon tienen distintos tipos y debilidades de combate. Estas características son importantes cuando un maestro Pokémon elige al Pokémon más adecuado para su batalla. Hay veces que tiene que elegir a los que tienen menos cantidad de debilidades y saber de qué tipo son. Por ello, es importante para un maestro Pokémon poder ordenarlos por estas 2 características.
- Un maestro Pokémon antes de salir a casar los Pokémon tienen que: saber el top 0 de frecuencia de aparición de los Pokémon.
- Los Pokémon evolucionan y es importante para un maestro Pokémon saber cuántas y cuáles son las evoluciones que tienen antes y después.
- Los Pokémon se alimentan de caramelos y un maestro Pokémon necesita saber cuántos caramelos necesita un Pokémon para evolucionar.

Con esta información se realizaron encuestas a usuarios habituales de la plataforma y se obtuvieron resultados de que la información que más se necesita saber al momento de revisar un Pokédex es la siguiente:

- Datos del Pokémon.
- Tipo/s
- Capacidad máxima de CP.
- Estatus de ataque, defensa y stamina.
- Resistencia a los diferentes tipos de Pokémon que posee.
- Debilidad ante los tipos de Pokémon que posee.

***
## 5. Bocetaje + Prototipo + Feedback de iteración

### Resumen del feedback

- Test de usabilidad realizado con Maze

Para la prueba de usabilidad se envió el prototipo a 15 usuarios habituales de Pokémon Go en las cuales se les cuestiono la facilidad de navegar por la página, pedirles que realizaran los diversos tipos de ordenado disponibles, así como de filtrado, que ubicaran y buscaren un Pokémon por su nombre especifico, así como desplegar el modal de información adicional del Pokémon que quisiesen, que vieran la información mostrada y cerraran el modal para continuar su exploración de la página.

A lo largo del proceso de implementación nos mantuvimos fieles al prototipo original realizando iteraciones que nos fueron señaladas por los usuarios que lo fueron:

• Agregar un sombreado a la parte del header ya que daba una sensación de corte de secuencia.
• Cambiar los tonos de color manteniendo la gama de colores.
• Diferenciar los tipos de Pokémon según su color.
• Darle prioridad al ordenado por orden de aparición en la Pokédex.

### Boceto

![Fig 1. Boceto vista home](https://raw.githubusercontent.com/AnnaLizarraga/Assets/main/Assets%20PokeDex/Home%20view.jpg)
Fig 1. Boceto vista home

![Fig 2. Boceto vista principal](https://raw.githubusercontent.com/AnnaLizarraga/Assets/main/Assets%20PokeDex/Boceto%20Pagina%20pokedex.JPG)
Fig 2. Boceto vista principal

![Fig 3. Boceto modal](https://raw.githubusercontent.com/AnnaLizarraga/Assets/main/Assets%20PokeDex/Boceto%20Modal.JPG)
Fig 3. Boceto modal

### Prototipo final

![Fig 4. Prototipo pantalla home](https://raw.githubusercontent.com/AnnaLizarraga/Assets/main/Assets%20PokeDex/principal%20view.jpg)
Fig 4. Prototipo pantalla home

![Fig 5. Prototipo pantalla principal](https://raw.githubusercontent.com/AnnaLizarraga/Assets/main/Assets%20PokeDex/pokedex.jpg)
Fig 5. Prototipo pantalla principal

![Fig 6. Prototipo pantalla modal](https://raw.githubusercontent.com/AnnaLizarraga/Assets/main/Assets%20PokeDex/pokedex_modal.jpg)
Fig 6. Prototipo pantalla modal


***
# DataLovers / PokeDéx

## Index

- [1. Project Summary](#1-Project-Summary)
- [2. Technical project skills](#2-Technical-project-skills)
- [3. Planning](#3-Planning)
- [4. UX Research](#4-UX-Research)
- [5. Sketches + Prototypes + Feedback](#5-Sketches-+Prototypes-+Feedback-+Feedback-+Feedback-+Feedback-of-iteration)


***
## 1. Summary of the project

This project is carried out with the purpose of creating a web page to visualize and manipulate a Pokémon GO dataset.
This web page allows the user to visualize in the pokédex pokemon cards of the Kanto and Johto generation, as well as to sort from A-Z or number in ascending or descending order and likewise filter by type or in the search bar by name.
When selecting a card, a modal with more detailed information about the pokémon is displayed on the screen, in which you can see a dynamic graph that calculates and presents the information according to its highest power value.

***
## 2. Project Tech Skills

### HTML 5 
- Semantics

### CSS 
- CSS Selectors
- Box Model
- Flexbox

### Web APIs
- Using DOM selectors
- DOM Event Handling
- Dynamic DOM Manipulation

### JavaScript Vanilla
- Data primitives
- Strings
- variables
- Arrays 
- Objects
- Functions
- Conditionals
- Loops/cycles
- Expressions and statements 
- Use of descriptive identifiers
- ECMAScript modules.

### Git- Github version control
- Git: Version control with git (init, clone, add, commit, status, push, pull, remote) 
- Git: Integration of changes between branches (branch, checkout, fetch, merge, reset, rebase, tag) 
- GitHub: Deployment with Netlify.

### User-centricity
- Designing a product or service with the user at the center.

### Product-design
- Create high-fidelity prototypes that include interactions.
- Follow basic visual design principles

### Research
- Plan and execute usability testing of prototypes at different levels of fidelity (Maze)

***
## 3. Planning

This project was done in team of two, with agile SCRUM methodologies in 4 sprints of 1 week in which we worked on user stories.

You can see the planning [here]( https://trello.com/b/mnSJ0mH5/proyecto-2-data-lovers)

### User Story 1: Home Screen

I as a user want to be able to enter my username and password to log in to the app or to log in directly.

Acceptance requirements:
- The user will be able to visualize inputs to add his data.
- The user will be able to see buttons to access the home page.

Finished definition:
- The page will have a basic HTML structure.
- The page will have a style as close as possible to the prototype in CSS.
- When entering the data it is evaluated if the user enters with user or direct.
- In case of entering with user, you will see the user information section.
- in case of not entering data, this section will be hidden.

### User Story 2: View Pokémon list

I as a user want to be able to view the complete list of Pokémon (name, image and type) on the main page.

Acceptance requirements:
- The user is going to be able to display each of the Pokémon on the home page.
- The basic information of each Pokémon (name, number, image and type) will be displayed as cards all over the page.

Finished definition
- The page will have a basic HTML structure.
- The page will be styled as close as possible to the prototype in CSS.
- The cards will be formed with the Box Model and their distribution will be done by means of Flexbox.
- The information of each Pokémon will be loaded using JS.
- Jest unit test

### User Story 3: Sorting function

I as a user want to be able to sort the list of Pokémon on the screen so that I can choose one.
Acceptance requirements:

- The user is going to be able to display a drop-down in the header of the page.
- The user will be able to choose an option between alphabetical order and numerical order, ascending and descending to be able to sort the list.

Finished definition:
- An entry with all the options will be created in the header of the page.
-It will be styled in CSS.
- It will have a sorting function with JS.
- Jest unit test

### User Story 4: Filter function

I as a user want to be able to filter the list of Pokémon on the screen so I can choose one.

Acceptance requirements:
- The user is going to be able to display a dropdown in the header of the page.
- The user will be able to choose one option among each type of Pokémon to be able to filter the list.

Finished definition
- An entry with all the options will be created in the header of the page.
- It will have a basic CSS style.
- It will have a sorting function with JS.
- Jest unit test

### User Story 5: Search Function

I as a user want to be able to search for a specific Pokémon.

Acceptance requirements:
- The user will be able to display a text box in the header of the page.
- The user will be able to enter a name of a Pokémon to display on the main page.

Finished definition:
- A text entry will be created for the search.
- It will have basic CSS styling.
- It will have a sorting function with JS.
- Jest unit test

### User Story 6: Data visualization 

I as a user want to be able to display basic information about each Pokémon in a window on the main page.

Acceptance requirements:
- The user will be able to click on the card of each Pokémon.
- The user will see a modal with the basic information of each Pokémon.
- The user will be able to visualize in the window graphs with attack and defense of each Pokémon, as well as its description, strengths and weaknesses.

Finished definition:
- A modal window will be created dynamically in JS.
- It will be styled in CSS.
- It will have a close button.
- It will display information such as number, name, type, description, strengths and weaknesses of each Pokémon.
- It will create a graph containing their attack, defense and stamina scores for each Pokémon.
- The graph will dynamically sort the scores using a calculation function.
- Jest unit test

***
## 4. UX Research

### Pokémon Go
Pokémon GO is an international gaming experience that has over one billion downloads and has been named "Best Mobile Game" by Game Developers Choice Awards and "Best App of the Year" by TechCrunch (taken from Google Play).

Users of the game become "Pokémon Masters/Coaches" and can:
- Discover the Pokémon world: explore and discover new Pokémon wherever they go.
- Catch different Pokémon to complete their Pokédex.
- Battle other trainers' Pokémon and conquer a Gym.
- Compete in epic battles against other Trainers.
- Team up with other trainers to catch powerful Pokémon during raids.

### Findings
To better understand what complementary needs users have for the app, we did a quick
users have, we did a quick research and these are some of the findings.
of the findings.
- Pokémon have unique characteristics that determine the decisions the user makes (type, weakness, weight, multiplier, etc.).
- Pokémon have different combat types and weaknesses. These characteristics are important when a Pokémon master chooses the most suitable Pokémon for his battle. There are times when he has to choose those with the least amount of weaknesses and know what type they are. Therefore, it is important for a Pokémon master to be able to sort them by these 2 characteristics.
- A Pokémon master has to: know the top 0 frequency of appearance of the Pokémon before going out to match the Pokémon.
- Pokémon evolve and it is important for a Pokémon master to know how many and which evolutions they have before and after.
- Pokémon feed on candy and a Pokémon master needs to know how many candies a Pokémon needs to evolve.

With this information, we surveyed regular users of the platform and obtained results that the information most needed to know when reviewing a Pokédex is the following:
- Pokémon data.
- Type/s
- Maximum CP capacity.
- Attack, defense and stamina status.
- Resistance to the different types of Pokémon it possesses.
- Weakness to the types of Pokémon it possesses.

***
## 5. Sketching + Prototyping + Iteration Feedback

### Summary of feedback

- Usability test performed with Maze

For the usability test we sent the prototype to 15 regular Pokémon Go users in which we questioned them about the ease of navigating the page, asked them to perform the various types of sorting available, as well as filtering, to locate and search for a Pokémon by its specific name, as well as to display the modal of additional information of the Pokémon they wanted, to see the information displayed and close the modal to continue their exploration of the page.

Throughout the implementation process we stayed true to the original prototype by making iterations that were brought to our attention by users who were:

- Adding a shading to the header part as it gave a sense of sequence cutting.
- Change the color tones keeping the color range.
- Differentiate the types of Pokémon according to their color.
- To give priority to the order of appearance in the Pokédex.

### Sketch

![Fig 1. home view sketch](https://raw.githubusercontent.com/AnnaLizarraga/Assets/main/Assets%20PokeDex/Home%20view.jpg)
Fig 1. Sketch home view

![Fig 2. Sketch main view](https://raw.githubusercontent.com/AnnaLizarraga/Assets/main/Assets%20PokeDex/Boceto%20Pagina%20pokedex.JPG)
Fig 2. Sketch main view

![Fig 3. Modal sketch](https://raw.githubusercontent.com/AnnaLizarraga/Assets/main/Assets%20PokeDex/Boceto%20Modal.JPG)
Fig 3. Modal sketch

### Final prototype

![Fig 4. Prototype home screen](https://raw.githubusercontent.com/AnnaLizarraga/Assets/main/Assets%20PokeDex/principal%20view.jpg)
Fig 4. Home screen prototype

![Fig 5. Prototype home screen](https://raw.githubusercontent.com/AnnaLizarraga/Assets/main/Assets%20PokeDex/pokedex.jpg)
Fig 5. Prototype main screen

![Fig 6. Prototype modal screen](https://raw.githubusercontent.com/AnnaLizarraga/Assets/main/Assets%20PokeDex/pokedex_modal.jpg)
Fig 6. Prototype modal screen


