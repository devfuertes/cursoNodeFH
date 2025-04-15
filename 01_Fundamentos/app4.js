console.log("Inicio de programa");

setTimeout(() => {
    console.log("Primer Timeout");//1
}, 3000);

setTimeout(() => {
    console.log("Segundo Timeout");//2
}, 0);

setTimeout(() => {
    console.log("Tercer Timeout");//3
}, 0);

console.log("Fin de programa");//4
