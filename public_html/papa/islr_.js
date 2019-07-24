// Instrucciones de la progrmación javascript

//alert("Hello dad I made some changes ahahahaa XoXo");
// Cálculo de la retención para el ISLR en El Slavador (2016)
function islr () {
var s, tafp, nafp, afp, isss, grabado, porcentaje,
 sexceso, cfija, exceso, pexceso, retencion, dt, sn  ;

//Sueldo
do { s = parseFloat ( prompt ("Sueldo","$")); }
while (s < 0.01 || isNaN(s));

//Tipo de AFP
do {
tafp = parseInt ( prompt ("Tipo de AFP: 1) CRECER 2) CONFIA 3) IPSFA 4) ISSS","escribir el número correspondiente a su AFP"));
switch(tafp) {
	case 1: pafp=7.25; nafp = "CRECER"; break;
	case 2: pafp=7.25; nafp = "CONFIA"; break;
	case 3: pafp=6.00; nafp = "IPSFA"; break;
	case 4: pafp=7.00; nafp = "ISSS"; break;
	default: pafp=0.0; nafp = "No seleccionó ninguna AFP!";
	}
alert (nafp);
}
while (pafp == 0.0);

//Remuneraciones no grabadas
afp = s * pafp/100;
afp = redondeo (afp,2);
alert ("Remuneración no grabada AFP " + nafp + " : $" + afp);

isss = s * 0.03; 
isss = redondeo (isss,2);
alert ("Remuneración no grabada ISSS : $" + isss);

//Remuneraciones grabadas sujetas a retención
grabado = s - afp - isss;
grabado = redondeo (grabado,2);
alert ("Remuneración grabada : $" + grabado);

/*
Como ya tenemos las remuneraciones gravadas, ahora vamos 
a ubicar esas rentas gravadas en la tabla de retención mensual
*/
if (grabado >= 0.01 && grabado <= 472.00) { porcentaje = 0.00; sexceso=0;  cfija = 0.00;} else {
  if (grabado <= 895.24) { porcentaje = 0.10; sexceso=472.00;  cfija = 17.67;} else {
     if (grabado <= 2038.10) { porcentaje = 0.20; sexceso=895.24;  cfija = 60.00;} else {
          porcentaje = 0.30; sexceso=2038.10;  cfija = 288.57;}
  }
}

alert ("% a aplicar : " + porcentaje * 100 + " %");
alert ("Sobre el exceso  : $ " + sexceso);

exceso = grabado - sexceso; 
exceso = redondeo (exceso,2);
alert ("exceso : $" + exceso );

// Porcentaje del exceso
pexceso  = exceso * porcentaje;
pexceso = redondeo (pexceso,2);
alert ("% del exceso : $" + pexceso );

// Retención
retencion  = pexceso + cfija;
retencion = redondeo (retencion,2);
alert ("Reteción mensual : $" + retencion );

// Total descuento
dt = afp + isss + retencion;
alert ("Descuento total mensual: $" + dt );

//Sueldo neto mensual
sn = s - dt;
sn = redondeo (sn,2);
alert ("Sueldo neto a recibir mensual: $" + sn );

};         

//Redondeo de valores reales
function redondeo(x,y) {
// x: número a redondear
// y: cantidad de decimales
return  parseInt (x * Math.pow(10,y) + 0.50) / Math.pow(10,y);
};
