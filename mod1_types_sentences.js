console.log();
var hora = new Date().getHours();
var saludo;

if (hora>=7 && hora<13) {
	saludo =  "Good morning";
} else if (hora>=13 && hora<22) {
	saludo =  "Good afternoon";
} else if (hora>=22 && hora<7) {
	saludo =  "Good night";
}
console.log(`${saludo}, it's ${hora}  o´clock`);
console.log();
console.log ("Number Pi with 6 decimals: " + Math.PI.toFixed(6));
console.log();
var linea =  x => x + " dec = " + x.toString(16) + " hex = " + x.toString(8) + " oct = " + x.toString(2) + " bin";  
for (var i=0;i<23;i++) {
	console.log(`${linea(i)}`);
}
