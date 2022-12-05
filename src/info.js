import aoharu from './img/covers/ao_horu.webp';
import berserk from './img/covers/berserk.webp';
import bl_01 from './img/covers/bl_01.webp';
import bl_02 from './img/covers/bl_02.webp';
import bl_03 from './img/covers/bl_03.webp';
import csm from './img/covers/csm.webp';
import csm12 from './img/covers/csm12.webp';
import fma from './img/covers/fma.jpeg';
import fruits from './img/covers/fruits.webp';
import jjk_18 from './img/covers/jjk_18.webp';
import jjk_19 from './img/covers/jjk_19.webp';
import jjk_20 from './img/covers/jjk_20.webp';
import lover from './img/covers/lover.jpg';
import op_98 from './img/covers/op_98.webp';
import op_100 from './img/covers/op_100.webp';
import op_99 from './img/covers/op_99.webp';
import opm_25 from './img/covers/opm_25.webp';
import opm_26 from './img/covers/opm_26.webp';
import punpun from './img/covers/punpun.webp';
import seven from './img/covers/seven.webp';
import vinland from './img/covers/vinland.webp';

const info = {
  'berserk' : {
    title: 'Berserk',
    cover: berserk,
    sinopsis: 'Berserk nos cuenta la historia de Guts , un antihéroe mercenario que vaga por el mundo en solitario en búsqueda de Apóstoles , unos seres demoníacos que antaño fueron humanos pero que sacrificaron una parte importante de sus vidas para conseguir poderes que les permitieran alcanzar sus más oscuros deseos.',
    demo: 'seinen',
    tipo: 'serie',
    autor: 'Kentaro Miura',
    año: '1989',
    precio: '900',
    estreno: false
  },

  'aoharu' : {
    title: 'Ao Haru Ride',
    cover: aoharu,
    sinopsis: 'Ao Haru Ride gira en torno a Futaba Yoshioka, una chica que en secundaria estaba enamorada de un chico llamado Kou Tanaka. Sin embargo, tras un malentendido, su relación como amigos finaliza cuando él cambia de escuela durante las vacaciones de verano. En el instituto, el mundo de Futaba se pone al revés al coincidir nuevamente con Kou, que ahora se llama Kou Mabuchi.',
    demo: 'shojo',
    tipo: 'serie',
    autor: 'Io Sakisaka',
    año: '2011',
    precio: '400',
    estreno: false
  },

  'bl01' : {
    title: 'Blue Lock 01',
    cover: bl_01,
    sinopsis: 'En el Mundial de 2018, Japón no pasó de dieciseisavos… Tras este fracaso, y con la intención de conseguir que Japón ganase por fin una Copa del Mundo, la Asociación de Fútbol de Japón reunió a 300 delanteros de ligas estudiantiles en unas instalaciones de entrenamiento llamadas “BLUE LOCK”. Su entrenador, Jinpachi Ego, afirma que lo que Japón necesita es un “delantero movido por el egoísmo”.',
    demo: 'shonen',
    tipo: 'tomo',
    autor: 'Yusuke Nomura',
    año: '2018',
    precio: '40',
    estreno: false
  },

  'bl02' : {
    title: 'Blue Lock 02',
    cover: bl_02,
    sinopsis: 'Jinpachi Ego pone a prueba de inmediato a los participantes con una primera selección de BLUE LOCK, los 5 equipos de cada edificio se enfrentarán en un torneo de todos contra todos. Una vez hayan terminado los 10 partidos, los 2 equipos con más puntos continuarán su formación aquí, mientras que los otros 3 serán eliminados. Eso significa que también serán expulsados de BLUE LOCK.',
    demo: 'shonen',
    tipo: 'tomo',
    autor: 'Yusuke Nomura',
    año: '2018',
    precio: '40',
    estreno: false
  },

  'bl03' : {
    title: 'Blue Lock 03',
    cover: bl_03,
    sinopsis: '¡Ya han terminado 2 de los 4 partidos de la primera selección de BLUE LOCK! ¡Isagi y el Equipo Z, que derrotaron a sus oponentes en un partido en el que se jugaban su futuro, y se deleitaron con el dulce sabor de la victoria, ahora se enfrentarán al Equipo W en la tercera ronda! ¡Pero parece que ha surgido una disputa interna en el Equipo Z! ¿¡Con Hyoma Chigiri a punto de rendirse, podrán derrotar a los jugadores estrella del Equipo W, los hermanos Wanima!?',
    demo: 'shonen',
    tipo: 'tomo',
    autor: 'Yusuke Nomura',
    año: '2018',
    precio: '40',
    estreno: false
  },

  'csm' : {
    title: 'Chainsaw Man',
    cover: csm,
    sinopsis: 'Denji es un joven que alberga en su interior al demonio motosierra, ¡el mundialmente conocido Chainsaw Man!',
    demo: 'shonen',
    tipo: 'serie',
    autor: 'Tatsuki Fujimoto',
    año: '2019',
    precio: '400',
    estreno: false
  },

  'csm12' : {
    title: 'Chainsaw Man 12',
    cover: csm12,
    sinopsis: 'Asa Mitaka, una chica que no puede acostumbrarse a la vida de la escuela secundaria y está aislada en el grupo. ¡Su vida diaria cambia dramáticamente cuando conoce a cierto demonio! ¿Cuál es el propósito de este demonio, que se convertirá en una nueva calamidad para el mundo? ¡La segunda parte del choque que explota la juventud, la apertura!',
    demo: 'shonen',
    tipo: 'tomo',
    autor: 'Tatsuki Fujimoto',
    año: '2022',
    precio: '40',
    estreno: true
  },

  'fma' : {
    title: 'FullMetal Alchemist',
    cover: fma,
    sinopsis: 'En un ritual alquímico que acaba mal, Edward Elric pierde su brazo y su pierna, y su hermano Alphonse acaba perdiendo el cuerpo entero justo antes de que Edward pueda enlazar su alma en una armadura. Es entonces cuando emprenderán la búsqueda para intentar conseguir de vuelta el cuerpo de Alphonse y los miembros perdidos de Edward aprendiendo más y más poderosas artes alquímicas. Pero para ello tendrán que enfrentarse a enormes dificultades...',
    demo: 'shonen',
    tipo: 'serie',
    autor: 'Hiromu Arakawa',
    año: '2003',
    precio: '40',
    estreno: false
  },

  'fruits' : {
    title: 'Fruits Basket',
    cover: fruits,
    sinopsis: 'La historia se centra en una estudiante de instituto llamada Tohru Honda, que tras haber perdido a su madre en un accidente de coche, Toru es trasladada a la casa de su abuelo. A causa de unas reformas en la casa, el abuelo se va a vivir a casa de otros parientes mientras que ella decide ir a vivir sola en el bosque.',
    demo: 'shojo',
    tipo: 'serie',
    autor: 'Natsuki Takaya',
    año: '2006',
    precio: '900',
    estreno: false
  },

  'jjk18' : {
    title: 'Jujutsu Kaisen 18',
    cover: jjk_18,
    sinopsis: 'Con el fin de asegurar la victoria en el Viaje a la Extinción, Itadori necesita la ayuda de Kinji Hakari, un estudiante de tercer año del Colegio Técnico de Magia Metropolitana de Tokio que actualmente está suspendido por sus acciones pasadas.\n Para conseguirlo, Itadori participa en un club de lucha clandestino donde Hakari trabaja como corredor de apuestas. Mientras tanto, Fushiguro se infiltra en el club de lucha y se dirige a la base de operaciones de Hakari.',
    demo: 'shonen',
    tipo: 'tomo',
    autor: 'Gege Akutami',
    año: '2022',
    precio: '40',
    estreno: false
  },

  'jjk19' : {
    title: 'Jujutsu Kaisen 19',
    cover: jjk_19,
    sinopsis: 'Hiromi Higuruma, uno de los jugadores del Viaje a la Extinción ha conseguido 100 puntos. Itadori y Fushiguro apuntan a él para convencerlo de agregar una nueva regla general que sea de beneficio para ellos. \n Sin embargo, ¡cuando ambos ingresan a la primera colonia en Tokio, son separados y envíados a distintos puntos! Cada uno de ellos consigue alguien que los guíe hacía Higuruma... ¿¡pero-- !?',
    demo: 'shonen',
    tipo: 'tomo',
    autor: 'Gege Akutami',
    año: '2022',
    precio: '40',
    estreno: false
  },

  'jjk20' : {
    title: 'Jujutsu Kaisen 20',
    cover: jjk_20,
    sinopsis: 'Fushiguro y Reggie están a punto de morir aplastados por los hechizos del otro. ¿¡Reggie se mueve para romper el antagonismo, y la batalla mortal se dirige hacia el final!?',
    demo: 'shonen',
    tipo: 'tomo',
    autor: 'Gege Akutami',
    año: '2022',
    precio: '40',
    estreno: true
  },

  'lover' : {
    title: 'Super Lovers',
    cover: lover,
    sinopsis: 'Haru lleva años sin ir a su casa (Canadá) y cuando recibe el mensaje de que su madre está al borde de la muerte vuela de regreso para saber que todo…era una mentira.',
    demo: 'yaoi',
    tipo: 'serie',
    autor: 'Abe Miyuki',
    año: '2009',
    precio: '400',
    estreno: false
  },

  
  'op98' : {
    title: 'One Piece 98',
    cover: op_98,
    sinopsis: 'El combate en Onigashima está en su punto álgido y Yamato, la hija de Kaido, quiere luchar en el bando de Luffy... Por su lado, Kaido desvela el plan de la nueva Onigashima y su alianza con Big Mom, y el terror se apodera del mundo.',
    demo: 'shonen',
    tipo: 'tomo',
    autor: 'Eiichiro Oda',
    año: '2022',
    precio: '40',
    estreno: false
  },

  'op99' : {
    title: 'One Piece 9',
    cover: op_99,
    sinopsis: 'Luffy se dirige a la azotea mientras el resto intenta contener a los cabecillas. ¿¡Conseguirá al fin llegar hasta donde está Kaido!? El escenario ya cuenta con todo el elenco al completo para dar lugar al combate final. ¿¡Qué pasará!? ',
    demo: 'shonen',
    tipo: 'tomo',
    autor: 'Eiichiro Oda',
    año: '2022',
    precio: '40',
    estreno: false
  },

  'op100' : {
    title: 'One Piece 100',
    cover: op_100,
    sinopsis: 'Todos los protagonistas están en la azotea. Luffy y los demás se enfrentan a Kaido y a Mom. ¿¡Tienen alguna posibilidad ante esta alianza todopoderosa!? ¿¡Qué será lo que el futuro depare a esta confrontación tan extrema!? ¡¡Onigashima vibra con los enfrentamientos!!',
    demo: 'shonen',
    tipo: 'tomo',
    autor: 'Eiichiro Oda',
    año: '2022',
    precio: '40',
    estreno: true
  },

  'opm25' : {
    title: 'One Punch Man 25',
    cover: opm_25,
    sinopsis: 'La historia tiene lugar en una de las metrópolis de ficción de la Tierra, la ciudad Z en Japón. El mundo está lleno de extraños monstruos que misteriosamente aparecen y causan muchos desastres. Saitama, el protagonista, es un poderoso superhéroe que derrota fácilmente a los monstruos u otros villanos con un único golpe. Debido a esto Saitama ha encontrado aburrida su fuerza y siempre está tratando de encontrar rivales más poderosos que le pueden igualar.',
    demo: 'seinen',
    tipo: 'tomo',
    autor: 'ONE - Yusuke Murata',
    año: '2022',
    precio: '40',
    estreno: false
  },

  'opm26' : {
    title: 'One Punch Man 26',
    cover: opm_26,
    sinopsis: 'La historia tiene lugar en una de las metrópolis de ficción de la Tierra, la ciudad Z en Japón. El mundo está lleno de extraños monstruos que misteriosamente aparecen y causan muchos desastres. Saitama, el protagonista, es un poderoso superhéroe que derrota fácilmente a los monstruos u otros villanos con un único golpe. Debido a esto Saitama ha encontrado aburrida su fuerza y siempre está tratando de encontrar rivales más poderosos que le pueden igualar.',
    demo: 'seinen',
    tipo: 'tomo',
    autor: 'ONE - Yusuke Murata',
    año: '2022',
    precio: '40',
    estreno: false
  },

  'punpun' : {
    title: 'Oyasumi Punpun',
    cover: punpun,
    sinopsis: ' La historia sigue a Onodera Punpun, un niño normal que debe hacer frente a sus amigos y familia disfuncional, su interés amoroso, su adolescencia en sentido contrario y su mente hiperactiva.',
    demo: 'seinen',
    tipo: 'serie',
    autor: 'Inio Asano',
    año: '2007',
    precio: '520',
    estreno: false
  },

  'vinland' : {
    title: 'Vinland Saga',
    cover: vinland,
    sinopsis: 'Desafiando las rígidas leyes vikingas y a pesar de ser un gran guerrero, Thors decide huir de la cruenta vida que llevaba con su familia. Al ser descubierto, será perseguido durante su viaje marítimo por un mercenario de nombre Askeladd, cayendo finalmente en una emboscada.',
    demo: 'seinen',
    tipo: 'serie',
    autor: 'Yutaka Yamada',
    año: '2005',
    precio: '1000',
    estreno: false
  },

  
  'seven' : {
    title: 'Seven Days',
    cover: seven,
    sinopsis: 'Tôji Seryô es un popular alumno de primero conocido en el instituto por salir cada semana con una chica distinta. Acepta sin reservas a la primera que se lo pide los lunes, pero al llegar el domingo siempre decide cortar alegando que no ha conseguido enamorarse.',
    demo: 'yaoi',
    tipo: 'serie',
    autor: 'Benio Tachibana',
    año: '2009',
    precio: '80',
    estreno: false
  },
}

export default info;