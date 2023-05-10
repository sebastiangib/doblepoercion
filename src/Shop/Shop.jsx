import "../Shop/Shop.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";

// Mapeo productos
export function Shop() {
  let gorras = [
    {
      nombre: "Gorra RAPSOLO VDV BURGUNDY, de algodón en color granate",
      foto: "https://firebasestorage.googleapis.com/v0/b/musicosg-8fe65.appspot.com/o/gorra1.jpg?alt=media&token=7ddc7460-f3d7-4c21-b874-eb3ea8fbc28e",
      descripcion:
        "Gorra snapback  RAPSOLO de VIOLADORES DEL VERSO modelo BURGUNDY en color GRANATE, logos bordados, cierre ajustable",
      precio: "$35.000",
      id: "1",
    },
    {
      nombre: "Gorra RAPSOLO DIAMOND unisex, de algodón en color negro",
      foto: "https://firebasestorage.googleapis.com/v0/b/musicosg-8fe65.appspot.com/o/gorra2.jpg?alt=media&token=0ac5b527-5858-45ed-828b-de67dcc2023c",
      descripcion:
        "Gorra snapback  RAPSOLO modelo DIAMOND en color NEGRO, logos bordados, cierre ajustable.",
      precio: "$20.000",
      id: "2",
    },
    {
      nombre: "Gorra RAPSOLO VDV GREY MESH, de algodón en color negro",
      foto: "https://firebasestorage.googleapis.com/v0/b/musicosg-8fe65.appspot.com/o/gorra3.jpg?alt=media&token=41f7f0c7-b16d-46a9-be29-65812b5104b4",
      descripcion:
        "Gorra snapback  RAPSOLO de VIOLADORES DEL VERSO modelo GREY MESH en color NEGRO,logos bordados, cierre ajustable",
      precio: "$30.000",
      id: "3",
    },
    {
      nombre: "Gorra RAPSOLO VDV LEATHER unisex, de algodón en color gris",
      foto: "https://firebasestorage.googleapis.com/v0/b/musicosg-8fe65.appspot.com/o/gorra4.jpg?alt=media&token=f947ee6d-550c-4090-8c32-7071ffe26637",
      descripcion:
        "Gorra snapback  RAPSOLO de VIOLADORES DEL VERSO nodelo LEATHER en color GRIS, logos bordados, cierre ajustable, visera de cuero",
      precio: "$30.000",
      id: "4",
    },
    {
      nombre: "snapback NO PAIN NO GAIN CALLIGRAPHY en algodón color gris",
      foto: "https://firebasestorage.googleapis.com/v0/b/musicosg-8fe65.appspot.com/o/gorra5.jpg?alt=media&token=de4db5f4-e524-497e-861a-36d511e5aaa3",
      descripcion:
        "Gorra marca NO PAIN NO GAIN modelo CALLIGRAPHY en color GRIS, 100% algodon, cierre ajustable",
      precio: "$30.000",
      id: "5",
    },
    {
      nombre: "Gorra VDV GENIOS99, de algodón en color azul marino",
      foto: "https://firebasestorage.googleapis.com/v0/b/musicosg-8fe65.appspot.com/o/gorra6.jpg?alt=media&token=1097d0b7-7d5c-43cd-a0b9-ad13f65dc940",
      descripcion:
        "Gorra VIOLADORES DEL VERSO modelo VDV GENIOS99 en color AZUL MARINO, detalle frontal bordado, cierre ajustable",
      precio: "$30.000",
      id: "6",
    },
    {
      nombre: "Gorra 47 BRAND NEW YORK YANKEES",
      foto: "https://firebasestorage.googleapis.com/v0/b/musicosg-8fe65.appspot.com/o/gorra7.jpg?alt=media&token=e0db9ce1-3bf2-4a45-9532-8580df781fee",
      descripcion:
        "Gorra semicurved 47 marca BRAND de NEW YORK YANKEES color AZUL MARINO de la MLB, 100% algodon, cierre ajustable",
      precio: "$40.000",
      id: "7",
    },
    {
      nombre: "Gorra 47 BRAND MIGHTY DUCKS BLACK",
      foto: "https://firebasestorage.googleapis.com/v0/b/musicosg-8fe65.appspot.com/o/gorra8.jpg?alt=media&token=b4c6471a-1b04-4e48-85ba-2a0eb4933fab",
      descripcion:
        "Gorra 47 marca BRAND de MIGHTY DUCKS color NEGRO de la NHL, 100% algodon, cierre ajustable",
      precio: "$40.000",
      id: "8",
    },
    {
      nombre: "Gorra 47 BRAND NEW YORK YANKEES",
      foto: "https://firebasestorage.googleapis.com/v0/b/musicosg-8fe65.appspot.com/o/gorra9.jpg?alt=media&token=35e9e3be-d764-4569-b261-85a4b93d5ddc",
      descripcion:
        "Gorra semicurved 47 marca BRAND de NEW YORK YANKEES color GRIS de la MLB, 100% algodon, cierre ajustable",
      precio: "$40.000",
      id: "9",
    },
    {
      nombre: "Gorra HO-HAI",
      foto: "https://firebasestorage.googleapis.com/v0/b/musicosg-8fe65.appspot.com/o/gorra10.jpg?alt=media&token=46271665-4c42-45a4-b5b5-267c4ab29ff0",
      descripcion:
        "Gorra SHO-HAI color NEGRO, Detalle frontal bordado, 100% algodon, cierre ajustable",
      precio: "$40.000",
      id: "10",
    },
  ];

  let gorros = [
    {
      nombre: "Gorro NPNG KEEP GREY GRAPHITE",
      foto: "https://firebasestorage.googleapis.com/v0/b/musicosg-8fe65.appspot.com/o/gorro1.jpg?alt=media&token=8d20bc57-3e1a-4af8-9c28-69a5b4905734",
      descripcion: "Gorro NPNG KEEP en color GRIS, 100% algodon, talla unica",
      precio: "$25.000",
      id: "11",
    },
    {
      nombre: "Gorro RAPSOLO AZUL MARINO, de lana en color azul marino",
      foto: "https://firebasestorage.googleapis.com/v0/b/musicosg-8fe65.appspot.com/o/gorro2.jpg?alt=media&token=8cca4757-e249-4bb9-9f8f-a8226b311652",
      descripcion:
        "Gorro RAPSOLO en color AZUL MARINO, 100% algodon, talla unica",
      precio: "$25.000",
      id: "12",
    },
    {
      nombre: "Gorro VIOLADORES DEL VERSO, de lana en color negro y gris",
      foto: "https://firebasestorage.googleapis.com/v0/b/musicosg-8fe65.appspot.com/o/gorro3.jpg?alt=media&token=96a10eb1-0cdf-4ae6-ab0f-c4f6ed531cc1",
      descripcion:
        "Gorro VIOLADORES DEL VERSO CAMO en color NEGRO y GRIS, 100% poliacrilico, talla unica",
      precio: "$25.000",
      id: "13",
    },
    {
      nombre: "Gorro NPNG KEEP BLACK",
      foto: "https://firebasestorage.googleapis.com/v0/b/musicosg-8fe65.appspot.com/o/gorro4.jpg?alt=media&token=dc182c0b-0725-48ab-8772-d96da234f20f",
      descripcion: "Gorro NPNG KEEP en color NEGRO, 100% algodon, talla unica",
      precio: "$25.000",
      id: "14",
    },
    {
      nombre: "Gorro VIOLADORES DEL VERSO POMPON",
      foto: "https://firebasestorage.googleapis.com/v0/b/musicosg-8fe65.appspot.com/o/gorro5.jpg?alt=media&token=eeeaef23-2868-4428-a5bb-0f28eef23c78",
      descripcion:
        "Gorro VIOLADORES DEL VERSO POMPON en color NEGRO, 100% poliacrilico, talla unica",
      precio: "$25.000",
      id: "15",
    },
    {
      nombre: "Gorro 47 BRAND BOSTON RED SOX NAVY",
      foto: "https://firebasestorage.googleapis.com/v0/b/musicosg-8fe65.appspot.com/o/gorro6.jpg?alt=media&token=5f3f4f1c-c017-41f6-8381-c3836ef330b0",
      descripcion:
        "Gorro 47 BOSTON RED SOX  en color AZUL MARINO, 100% algodon, talla unica",
      precio: "$15.000",
      id: "16",
    },
    {
      nombre: "Gorro MITCHELL AND NESS BOSTON CELTICS",
      foto: "https://firebasestorage.googleapis.com/v0/b/musicosg-8fe65.appspot.com/o/gorro7.jpg?alt=media&token=1a4016c7-6b17-463c-85bb-5eead1e4ed3b",
      descripcion:
        "Gorro marca MITCHELL AND NESS modelo BOSTON CELTICS en color NEGRO, 100% algodon, talla unica",
      precio: "$15.000",
      id: "17",
    },
    {
      nombre: "Gorro MITCHELL AND NESS CHICAGO BULLS",
      foto: "https://firebasestorage.googleapis.com/v0/b/musicosg-8fe65.appspot.com/o/gorro8.jpg?alt=media&token=0fb3bb31-1bdb-4773-9b30-82c761908bb8",
      descripcion:
        "Gorro marca MITCHELL AND NESS modelo CHICAGO BULLS en color NEGRO, 100% algodon, talla unica",
      precio: "$15.000",
      id: "18",
    },
    {
      nombre: "Gorro MITCHELL AND NESS PHILADELPHIA 76ERS",
      foto: "https://firebasestorage.googleapis.com/v0/b/musicosg-8fe65.appspot.com/o/gorro9.jpg?alt=media&token=746f0417-6f04-4d67-9889-8cf83e7af099",
      descripcion:
        "Gorro marca MITCHELL AND NESS modelo PHILADELPHIA 76ERS en color NEGRO, 100% algodon, talla unica",
      precio: "$15.000",
      id: "19",
    },
    {
      nombre: "Gorro CNF BASIC BLACK BEANI",
      foto: "https://firebasestorage.googleapis.com/v0/b/musicosg-8fe65.appspot.com/o/gorro10.jpg?alt=media&token=4646c93c-90ca-4a82-a099-ea1103dc1a64",
      descripcion:
        "Gorro marca CNF modelo BASIC BLACK BEANI en color NEGRO, 100% algodon, talla unica",
      precio: "$15.000",
      id: "20",
    },
  ];

  let camisetas = [
    {
      nombre: "SADMAN PRÉNDELO",
      foto: "https://firebasestorage.googleapis.com/v0/b/musicosg-8fe65.appspot.com/o/Camiseta10.webp?alt=media&token=8062cbbf-3e92-4c77-852c-398b121a305e",
      descripcion:
        "Camiseta de tela Negra oversize, Cada prenda viene con, Calcas de Lujo y Tarjeta autografiada",
      precio: "$100.000",
      id: "21",
    },
    {
      nombre: "SADMAN PRÉNDELO",
      foto: "https://firebasestorage.googleapis.com/v0/b/musicosg-8fe65.appspot.com/o/Camiseta9.jpg?alt=media&token=7c83db29-f69e-426f-8e2a-a7697b4fe12c",
      descripcion:
        "Camiseta de tela Morada oversize, Cada prenda viene con, Calcas de Lujo y Tarjeta autografiada",
      precio: "$100.000",
      id: "22",
    },
    {
      nombre: "SADMAN TAROT",
      foto: "https://firebasestorage.googleapis.com/v0/b/musicosg-8fe65.appspot.com/o/Camiseta8.jpg?alt=media&token=49c6da09-f3dc-480c-ae5d-ce567301bfe8",
      descripcion:
        "2° Colección,Camiseta de tela blanca oversize, Edición Especial Limitada,Cada prenda viene con, Calcas de Lujo y Tarjeta autografiada",
      precio: "$100.000",
      id: "23",
    },
    {
      nombre: "SADMAN BEBÉ",
      foto: "https://firebasestorage.googleapis.com/v0/b/musicosg-8fe65.appspot.com/o/Camiseta7.jpg?alt=media&token=95958d20-0787-4562-9f37-ec1d071f76db",
      descripcion:
        "2° Colección,Camiseta de tela blanca oversize, Edición Especial Limitada,Cada prenda viene con, Calcas de Lujo y Tarjeta autografiada",
      precio: "$100.000",
      id: "24",
    },
    {
      nombre: "SADMAN PA´QUE ESTOS DEMONIOS ALCANCEN EL CIELO",
      foto: "https://firebasestorage.googleapis.com/v0/b/musicosg-8fe65.appspot.com/o/Camiseta6.jpg?alt=media&token=e7130434-d512-4080-8ad8-95ec9f4ddd5b",
      descripcion:
        "Camiseta de tela negra oversize, Edición Limitada, Cada prenda viene con, Calcas de Lujo y Tarjeta autografiada",
      precio: "$80.000",
      id: "25",
    },
    {
      nombre: "SADMAN BEBE",
      foto: "https://firebasestorage.googleapis.com/v0/b/musicosg-8fe65.appspot.com/o/Camiseta5.jpg?alt=media&token=3e1d0f82-4d2e-44a3-ac33-c1ae5e2b2a0d",
      descripcion:
        "Camiseta blanca,Edición Limitada,Cada prenda viene con, Calcas de Lujo y Tarjeta autografiada",
      precio: "$80.000",
      id: "26",
    },
    {
      nombre: "CAMISETA CRAZY",
      foto: "https://firebasestorage.googleapis.com/v0/b/musicosg-8fe65.appspot.com/o/Camiseta3.jpg?alt=media&token=64de91db-41e8-4af2-abba-40b4db2cecfc",
      descripcion: "Camiseta CRAZY blanca con cuello Negro, oversize, 100% algodon",
      precio: "$70.000",
      id: "27",
    },
    {
      nombre: "CAMISETA CRAZY DR.DRE",
      foto: "https://firebasestorage.googleapis.com/v0/b/musicosg-8fe65.appspot.com/o/Camiseta4.jpg?alt=media&token=7afb172c-4696-4951-a4e9-b6a1ef1776de",
      descripcion:
        "Camiseta negra con estampado de Dr.Dre, oversize, 100% algodon",
      precio: "$70.000",
      id: "28",
    },
    {
      nombre: "CAMISETA CRAZY PARENTAL ADVISORY EXPLICIT CONTENT",
      foto: "https://firebasestorage.googleapis.com/v0/b/musicosg-8fe65.appspot.com/o/Camiseta2.jpg?alt=media&token=58d64d8e-835b-498b-9f84-0868e638a58d",
      descripcion:
        "Camiseta de tela blanca oversize, estampado de parental advisory",
      precio: "$70.000",
      id: "29",
    },
    {
      nombre: "CAMISETA CRAZY LOONEY TUNES",
      foto: "https://firebasestorage.googleapis.com/v0/b/musicosg-8fe65.appspot.com/o/Camiseta1.jpg?alt=media&token=9c1264f5-45ed-40bb-ab25-042696535790",
      descripcion:
        "Camiseta de tela amarilla oversize con estampado de looney tunes",
      precio: "$70.000",
      id: "30",
    },
  ];

  let riñoneras = [
  {
    nombre:"BOLSA DE ALGODÓN EL GORDO QUE LA PISA BIEN NEGRA",
    foto:"https://firebasestorage.googleapis.com/v0/b/musicosg-8fe65.appspot.com/o/ri%C3%B1onera5.jpg?alt=media&token=6acc55f3-a80f-45d4-9a96-3a973288bdaf",
    descripcion:"Bolsa de algodón EL GORDO QUE LA PISA BIEN NEGRA, con algodon y poliester",
    precio:"$25.000",
    id:"31"
  },
  {
    nombre:"Riñonera LOGO RAPSOLO",
    foto:"https://firebasestorage.googleapis.com/v0/b/musicosg-8fe65.appspot.com/o/ri%C3%B1onera7.jpg?alt=media&token=03cf17d5-0aaf-40b4-8498-52bd67a99847",
    descripcion:"RIÑONERA LOGO RAPSOLO en color NEGRO, poliester 600D, cinturon ajustable",
    precio:"$35.000",
    id:"32"
  },
  {
    nombre:"Mochila VIOLADORES DEL VERSO de polyester, color negro",
    foto:"https://firebasestorage.googleapis.com/v0/b/musicosg-8fe65.appspot.com/o/ri%C3%B1onera8.jpg?alt=media&token=e8bdb12a-b262-4240-97de-35390005af9b",
    descripcion:"Mochila tipo saco con serigrafía del logo de Violadores del Verso, 100% poliester",
    precio:"$60.000",
    id:"33"
  },
  {
    nombre:"Mochila NPNG GREY CAMO en polyester, color CAMUFLAJE",
    foto:"https://firebasestorage.googleapis.com/v0/b/musicosg-8fe65.appspot.com/o/ri%C3%B1onera9.jpg?alt=media&token=f14ee286-a0b7-4b33-85c3-513427238593",
    descripcion:"Mochila de la marca NO PAIN NO GAIN modelo GREY CAMO., 100% poliester, Asas con cordon",
    precio:"$60.000",
    id:"34"
  },
  {
    nombre:"LOGO VDV MIDNIGHT CAMO, en polyester de color negro",
    foto:"https://firebasestorage.googleapis.com/v0/b/musicosg-8fe65.appspot.com/o/ri%C3%B1onera10.jpg?alt=media&token=2e131e5a-a7dd-4f01-9782-4e7111bf6c13",
    descripcion:"RIÑONERA LOGO VIOLADORES DEL VERSO MIDNIGHT CAMO en color NEGRO, poliester 600D",
    precio:"$35.000",
    id:"35"
  },
  {
    nombre:"Riñonera LOGO VDV, de polyester en color negro",
    foto:"https://firebasestorage.googleapis.com/v0/b/musicosg-8fe65.appspot.com/o/ri%C3%B1onera1.jpg?alt=media&token=fa00f6cb-ade3-4a6f-963e-ece6e62c5a85",
    descripcion:"RIÑONERA LOGO VIOLADORES DEL VERSO NEGRA, poliester 600D, compartimento principal grande",
    precio:"$35.000",
    id:"36"
  },
  {
    nombre:"Riñonera LOGO VDV, en polyester de color gris",
    foto:"https://firebasestorage.googleapis.com/v0/b/musicosg-8fe65.appspot.com/o/ri%C3%B1onera2.jpg?alt=media&token=34b74eb6-473c-449b-88c8-6be07681940f",
    descripcion:"RIÑONERA LOGO VIOLADORES DEL VERSO GRIS, poliester 600D, compartimento principal grande",
    precio:"$35.000",
    id:"37"
  },
  {
    nombre:"Riñonera LOGO VDV, en polyester de color camuflaje",
    foto:"https://firebasestorage.googleapis.com/v0/b/musicosg-8fe65.appspot.com/o/ri%C3%B1onera3.jpg?alt=media&token=9144b849-19fd-48e0-82c6-035bd1c59706",
    descripcion:"RIÑONERA LOGO VIOLADORES DEL VERSO CAMO, poliester 600D, compartimento principal grande",
    precio:"$35.000",
    id:"38"
  },
  {
    nombre:"Riñonera LOGO RAPSOLO de color camuflaje",
    foto:"https://firebasestorage.googleapis.com/v0/b/musicosg-8fe65.appspot.com/o/ri%C3%B1onera4.jpg?alt=media&token=c149125c-9941-440a-8257-7de3bc6dabe6",
    descripcion:"RIÑONERA LOGO RAPSOLO en color CAMUFLAJE, poliester 600D, compartimento principal grande",
    precio:"$35.000",
    id:"39"
  },
  {
    nombre:"BOLSA DE ALGODÓN DIVERTIMENTOS 1",
    foto:"https://firebasestorage.googleapis.com/v0/b/musicosg-8fe65.appspot.com/o/ri%C3%B1onera6.jpg?alt=media&token=cf56d89f-f85e-476d-8032-1570cf5b9be8",
    descripcion:"Bolsa de algodón DIVERTIMENTOS 1, 40% algodón, 60% poliester, Medidas: 38 cms. x 38 cms.",
    precio:"$25.000",
    id:"40"
  }
];

let parches = [
  {
    nombre:"Parche RAPSOLO LOGO bordado, en color negro",
    foto:"https://firebasestorage.googleapis.com/v0/b/musicosg-8fe65.appspot.com/o/parche1.jpg?alt=media&token=e8bca8a6-2dd8-44fa-aefa-37e498856538",
    descripcion:"Parche rectangular de 9 x 6,50 centímetros, Para pegar al tejido con plancha o coser si se prefiere",
    precio:"$10.000",
    id:"41"
  },
  {
    nombre:"Parche RAPSOLO LOGO RS bordado, en color negro",
    foto:"https://firebasestorage.googleapis.com/v0/b/musicosg-8fe65.appspot.com/o/parche2.jpg?alt=media&token=2164a7cb-82b8-46bf-a036-2aebdfdb950e",
    descripcion:"Parche circular de 12 centímetros de diámetro, Para pegar al tejido con plancha o coser si se prefiere",
    precio:"$10.000",
    id:"42"
  },
  {
    nombre:"Parche NPNG INSANE",
    foto:"https://firebasestorage.googleapis.com/v0/b/musicosg-8fe65.appspot.com/o/parche3.jpg?alt=media&token=cf6538cb-dfab-4cad-a9df-002fb57fe8c1",
    descripcion:"Parche bordado a 2 colores de 7X7cm aprox, Para pegar al tejido con plancha o coser si se prefiere.",
    precio:"$10.000",
    id:"43"
  },
  {
    nombre:"Parche ZGZ LEONES",
    foto:"https://firebasestorage.googleapis.com/v0/b/musicosg-8fe65.appspot.com/o/parche5.jpg?alt=media&token=27f08f95-8638-42a3-a398-df629466cc94",
    descripcion:"Parche bordado a 4 colores de 10x9cm aprox, Para pegar al tejido con plancha o coser si se prefiere",
    precio:"$10.000",
    id:"44"
  },
  {
    nombre:"Parche NPNG CAT plata",
    foto:"https://firebasestorage.googleapis.com/v0/b/musicosg-8fe65.appspot.com/o/parche4.jpg?alt=media&token=a8460606-912a-45fe-964b-97c9146017d7",
    descripcion:"Parche bordado a 2 colores de 3x3cm aprox, Para pegar al tejido con plancha o coser si se prefiere",
    precio:"$10.000",
    id:"45"
  },
  {
    nombre:"Parche NPNG BIG CAT",
    foto:"https://firebasestorage.googleapis.com/v0/b/musicosg-8fe65.appspot.com/o/parche6.jpg?alt=media&token=e8b14f13-3004-4703-bbc9-3367060fbbd8",
    descripcion:"Parche bordado a 3 colores de 8x8cm aprox, Para pegar al tejido con plancha o coser si se prefiere",
    precio:"$10.000",
    id:"46"
  },
  {
    nombre:"Parche ZGZ LETRAS",
    foto:"https://firebasestorage.googleapis.com/v0/b/musicosg-8fe65.appspot.com/o/parche7.jpg?alt=media&token=524f6ec2-3a5f-4714-83ac-2ccf9a1a0061",
    descripcion:"Parche bordado a 4 colores de 12x5cm aprox, Para pegar al tejido con plancha o coser si se prefiere",
    precio:"$10.000",
    id:"47"
  },
  {
    nombre:"Parche NPNG CAT amarillo",
    foto:"https://firebasestorage.googleapis.com/v0/b/musicosg-8fe65.appspot.com/o/parche8.jpg?alt=media&token=824c8812-1b67-48be-9948-1184627f6fea",
    descripcion:"Parche bordado a 2 colores de 3x3cm aprox, Para pegar al tejido con plancha o coser si se prefiere",
    precio:"$10.000",
    id:"48"
  },
  {
    nombre:"Parche BIG LOGO VDV bordado, en color negro",
    foto:"https://firebasestorage.googleapis.com/v0/b/musicosg-8fe65.appspot.com/o/parche9.jpg?alt=media&token=092e7f37-8dd8-4455-b180-bc3683b2e3f3",
    descripcion:"Parche redondo de 25 centímetros de diámetro, Para pegar al tejido con plancha o coser si se prefiere",
    precio:"$10.000",
    id:"49"
  },
  {
    nombre:"Parche LOGO VDV bordado, en color negro",
    foto:"https://firebasestorage.googleapis.com/v0/b/musicosg-8fe65.appspot.com/o/parche10.jpg?alt=media&token=d2d8a976-11ef-4ede-8efc-93959b7330c9",
    descripcion:"Parche redondo de 6 centimetros de diametro, Para pegar al tejido con plancha o coser si se prefiere",
    precio:"$10.000",
    id:"50"
  }
] //Fin mapeo

function quehagocuandosedeelevento(evento){
  (evento.target.classList.add("blancoYnegro"))
}

function quehagocuandosedeelotroevento(evento){
  (evento.target.classList.remove("blancoYnegro"))
}

  return (
    <>
       <div className="d-flex justify-content-center align-items-center h-100">
      <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active" data-bs-interval="4000">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/musicosg-8fe65.appspot.com/o/Carrusel1.png?alt=media&token=c0354ba9-b9bb-4ef0-bc77-6174502e1466"
              className="d-block w-100"
              alt="..."
            />
          </div>
          <div className="carousel-item" data-bs-interval="4000">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/musicosg-8fe65.appspot.com/o/Carrusel2.png?alt=media&token=e88f4eaa-d5fa-4a45-817f-7c59de35f674"
              className="d-block w-100"
              alt="..."
            />
          </div>
          <div className="carousel-item" data-bs-interval="4000">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/musicosg-8fe65.appspot.com/o/Carrusel3.png?alt=media&token=b065c5e6-95c1-43c6-9770-67d92c92f09a"
              className="d-block w-100"
              alt="..."
            />
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev" style={{top: '50%'}}>
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next" style={{top: '50%'}}>
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
      <div className="container-all">
        <h1 className="main-title">¡Explora nuestra tienda!</h1>
        <div className="container-box">
          <a href="#gorras">
            <div className="box box1">
              <i class="fa-solid fa-helmet-safety icon" />
              <h4 className="title">Gorras</h4>
              <p>¡Echa un vistazo y llevate lo que mas te guste!</p>
              <div className="background-hover"></div>
            </div>
          </a>

          <a href="#gorros">
            <div className="box box2">
              <i class="fa-brands fa-redhat icon" />
              <h4 className="title">Gorros</h4>
              <p>¡Echa un vistazo y llevate lo que mas te guste!</p>
              <div className="background-hover"></div>
            </div>
          </a>

          <a href="#camisetas">
            <div className="box box3">
              <i className="fa-sharp fa-solid fa-shirt icon" />
              <h4 className="title">Camisetas</h4>
              <p>¡Echa un vistazo y llevate lo que mas te guste!</p>
              <div className="background-hover"></div>
            </div>
          </a>

          <a href="#riñoneras">
            <div className="box box4">
              <i class="fa-solid fa-bag-shopping icon" />
              <h4 className="title">Riñoneras</h4>
              <p>¡Echa un vistazo y llevate lo que mas te guste!</p>
              <div className="background-hover"></div>
            </div>
          </a>

          <a href="#parches">
            <div className="box box5">
              <i class="fa-solid fa-vest-patches icon" />
              <h4 className="title">Parches</h4>
              <p>¡Echa un vistazo y llevate lo que mas te guste!</p>
              <div className="background-hover"></div>
            </div>
          </a>
        </div>
      </div>
      <br />
      <br />
      <h2 className="neon" id="gorras">GORRAS</h2>
      <br />
      <div className="row row-cols-1 row-cols-md-5 g-3">
        {gorras.map(function (gorra) {
          return (
            <div key={gorra.id}>
              <div className="col">
                <div className="cardS shadow">
                  <h3 className="text-center">{gorra.nombre}</h3>
                  <hr />
                  <img src={gorra.foto} alt="" className="img-fluid w-100" onMouseOver={quehagocuandosedeelevento} onMouseLeave={quehagocuandosedeelotroevento} />
                  <hr />
                  <br />
                  <h4 className="text-center">{gorra.descripcion}</h4>
                  <br /><br /><br />
                  <h4 className="mt-3 text-center text-success">
                    {gorra.precio}
                  </h4>
                  <div className="actions">
                    <i className="fa-solid fa-cart-shopping"></i>
                    <i className="fa-regular fa-heart"></i>
                    <i className="fa-regular fa-bookmark"></i>
                    <i className="fa-solid fa-share-nodes"></i>
                  </div>
                  <br />
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <br />
      <br />
      <h2 className="neon1" id="gorros">GORROS</h2>
      <br />
      <div className="row row-cols-1 row-cols-md-5 g-3">
        {gorros.map(function (gorro) {
          return (
            <div key={gorro.id}>
              <div className="col">
                <div className="cardS shadow">
                  <h3 className="text-center">{gorro.nombre}</h3>
                  <hr />
                  <img src={gorro.foto} alt="" className="img-fluid w-100" />
                  <hr />
                  <br />
                  <h4 className="text-center">{gorro.descripcion}</h4>
                  <br />
                  <h4 className="mt-3 text-center text-success">
                    {gorro.precio}
                  </h4>
                  <div className="actions">
                    <i className="fa-solid fa-cart-shopping"></i>
                    <i className="fa-regular fa-heart"></i>
                    <i className="fa-regular fa-bookmark"></i>
                    <i className="fa-solid fa-share-nodes"></i>
                  </div>
                  <br />
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <br />
      <br />
      <h2 className="neon2"  id="camisetas">CAMISETAS</h2>
      <br />
      <div className="row row-cols-1 row-cols-md-5 g-3">
        {camisetas.map(function (camiseta) {
          return (
            <div key={camiseta.id}>
              <div className="col">
                <div className="cardS shadow">
                  <h3 className="text-center">{camiseta.nombre}</h3>
                  <hr />
                  <img src={camiseta.foto} alt="" className="img-fluid w-100" />
                  <hr />
                  <br />
                  <h4 className="text-center">{camiseta.descripcion}</h4>
                  <br /><br />
                  <h4 className="mt-3 text-center text-success">
                    {camiseta.precio}
                  </h4>
                  <div className="actions">
                    <i className="fa-solid fa-cart-shopping"></i>
                    <i className="fa-regular fa-heart"></i>
                    <i className="fa-regular fa-bookmark"></i>
                    <i className="fa-solid fa-share-nodes"></i>
                  </div>
                  <br />
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <br /><br />
      <h2 className="neon3" id="riñoneras">RIÑONERAS - MOCHILAS</h2>
      <br />
      <div className="row row-cols-1 row-cols-md-5 g-3">
        {riñoneras.map(function (riñonera) {
          return (
            <div key={riñonera.id}>
              <div className="col">
                <div className="cardS shadow">
                  <h3 className="text-center">{riñonera.nombre}</h3>
                  <hr />
                  <img src={riñonera.foto} alt="" className="img-fluid w-100" />
                  <hr />
                  <br />
                  <h4 className="text-center">{riñonera.descripcion}</h4>
                  <br />
                  <h4 className="mt-3 text-center text-success">
                    {riñonera.precio}
                  </h4>
                  <div className="actions">
                    <i className="fa-solid fa-cart-shopping"></i>
                    <i className="fa-regular fa-heart"></i>
                    <i className="fa-regular fa-bookmark"></i>
                    <i className="fa-solid fa-share-nodes"></i>
                  </div>
                  <br />
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <br /><br />
      <h2 className="neon4" id="parches">PARCHES</h2>
      <br />
      <div className="row row-cols-1 row-cols-md-5 g-3">
        {parches.map(function (parche) {
          return (
            <div key={parche.id}>
              <div className="col">
                <div className="cardS shadow">
                  <h3 className="text-center">{parche.nombre}</h3>
                  <hr />
                  <img src={parche.foto} alt="" className="img-fluid w-100" />
                  <hr />
                  <br />
                  <h4 className="text-center">{parche.descripcion}</h4>
                  <br />
                  <h4 className="mt-3 text-center text-success">
                    {parche.precio}
                  </h4>
                  <div className="actions">
                    <i className="fa-solid fa-cart-shopping"></i>
                    <i className="fa-regular fa-heart"></i>
                    <i className="fa-regular fa-bookmark"></i>
                    <i className="fa-solid fa-share-nodes"></i>
                  </div>
                  <br />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
