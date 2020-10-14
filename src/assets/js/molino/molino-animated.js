const timeDuration = 1000;

const molinoSvg = document.getElementById("Capa_1");
const wingsSvg = document.getElementById("Capa_1_1_");

const gElements = wingsSvg.getElementsByTagName("g");

const poste = wingsSvg.querySelector("#poste");
const windmill = wingsSvg.querySelector("#windmill");
const turbina1 = wingsSvg.querySelector("#turbina1");


const turbina1Paths = turbina1.getElementsByTagName("path");

const turbina1Sombra = turbina1Paths[0];
const turbina1MainColor = turbina1Paths[1];
const turbina1Intensidad = turbina1Paths[2];
const turbina1BrilloPath = turbina1Paths[3];


//Move1

const turbina1Move1 = wingsSvg.querySelector("#turbina1-mov1");
const turbina1Move1Paths = turbina1Move1.getElementsByTagName("path");

const turbina1Move1Sombra = turbina1Move1Paths[0];
const turbina1Move1MainColor = turbina1Move1Paths[1];
const turbina1Move1Intensidad = turbina1Move1Paths[2];
const turbina1Move1BrilloPath = turbina1Move1Paths[3];

//Move 2

const turbina1Move2 = wingsSvg.querySelector("#turbina1-mov2");
const turbina1Move2Paths = turbina1Move2.getElementsByTagName("path");
const turbina1Move2Sombra = turbina1Move2Paths[0];
const turbina1Move2MainColor = turbina1Move2Paths[1];
const turbina1Move2Intensidad = turbina1Move2Paths[2];
const turbina1Move2BrilloPath = turbina1Move2Paths[3];

//Remove All G elements
var i;
for(i=0; i < 10; i++ ){
    gElements[i].style.display = 'none';
}

//Show only main elements
poste.style.display = 'block';
windmill.style.display = 'block';
turbina1.style.display = 'block';
turbina1Move2.style.display = 'block';
turbina3.style.display = 'block';






/*
// Create a timeline with default parameters
var tl = anime.timeline({
    easing: 'linear',
    duration: timeDuration,
    loop: true
});

tl.add({
    targets: turbina1MainColor,
    d: [
        { value: turbina1MainColor.attributes.d.value},
        { value: turbina1Move1MainColor.attributes.d.value },
        { value: turbina1Move2MainColor.attributes.d.value }

    ]
})
    .add({
        targets: turbina1Intensidad,
        d: [
            { value: turbina1Intensidad.attributes.d.value},
            { value: turbina1Move1Intensidad.attributes.d.value },
            { value: turbina1Move2Intensidad.attributes.d.value }
        ]
    }, '-=1000')

    .add({
        targets: turbina1BrilloPath,
        d: [
            { value: turbina1BrilloPath.attributes.d.value},
            { value: turbina1Move1BrilloPath.attributes.d.value },
            { value: turbina1Move2BrilloPath.attributes.d.value }
        ]
    }, '-=1000')*/