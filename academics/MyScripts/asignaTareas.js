
function myFunction() {
  var x = document.getElementById("myNumber").value;
  var str0 ="Resuelve los problemas:";
  var str = "1";
  var str2 = "2";
  var str3 = "3";
  var str4 = "del libro de Resistencia de Materiales de Beer & Johnston, 6ta edición, que puedes encontrar en la biblioteca de la UAO";
  
  const cod = math.matrix([
    [2190313],
  [2200650],
  [2181359],
  [2204961],
  [2204968],
  [2190732],
  [2195507],
  [2210384],
  [2180660],
  [2195226],
  [2205016],
  [2215002],
  [2150120],
  [2200790],
  [2180074],
  [2191160],
  [2200551],
  [2160590],
  [2185806],
  [2211514],
  [2201265],
  [2205308],
  [2190108],
  [2206055],
  [2205164],
  [2205297],
  [2205165],
  [2181225],
  [2175621],
  [2191051]     
  ]);

  const links=math.matrix([
  ["1.1"],
["1.2"],
["1.3"],
["1.4"],
["1.5"],
["1.6"],
["1.7"],
["1.8"],
["1.9"],
["1.10"],
["1.11"],
["1.12"],
["1.13"],
["1.14"],
["1.15"],
["1.16"],
["1.17"],
["1.18"],
["1.19"],
["1.20"],
["1.21"],
["1.22"],
["1.23"],
["1.24"],
["1.25"],
["1.26"],
["1.27"],
["1.28"],
["1.29"],
["1.30"],
["1.31"],
["1.32"],
["1.33"],
["1.34"],
["1.35"],
["1.36"],
["1.37"],
["1.38"],
["1.39"],
["1.40"],
["1.41"],
["1.42"],
["1.43"],
["1.44"],
["1.45"],
["1.46"],
["1.47"],
["1.48"],
["1.49"],
["1.50"],
["1.51"],
["1.52"],
["1.53"],
["1.54"],
["1.55"],
["1.56"],
["1.57"],
["1.58"],
["1.59"],
["1.60"],
["1.61"],
["1.62"],
["1.63"],
["1.64"],
["1.65"],
["1.66"],
["1.67"],
["1.68"],
["1.69"],
["1.70"],
["1.C1"],
["1.C2"],
["1.C3"],
["1.C4"],
["1.C5"],
["1.C6"],
]);



for (let i = 0; i < 30; i++) { 
  if (x == cod.get([i,0])) {
    var result0 = str0;
    var result1 = links.get([i,0]);
    var result2 = links.get([30+i,0]);
    var result3 = links.get([75-i,0]);
    var result4 = str4;
    break;
  }
  else {
    //var str0 = "";
    var result0 = "";
    var str = "Tu código no ha sido encontrado, ";
    var result1 = str.link("mailto:oicampo@uao.edu.co?subject=Mi%20código%20"+x+",%20no%20está%20inscrito%20en%20el%20curso%20de%20Elementos%20de%20Máquinas");
    var str2 = " por favor haz click aquí para contactar a tu profesor";
    var result2 = str2.link("mailto:oicampo@uao.edu.co?subject=Mi%20código%20"+x+",%20no%20está%20inscrito%20en%20el%20curso%20de%20Elementos%20de%20Máquinas");
    var result3 ="";
    var result4 ="";
  }
}
  
document.getElementById("msg0").innerHTML = result0;
document.getElementById("tarea1").innerHTML = result1;
document.getElementById("tarea2").innerHTML = result2;
document.getElementById("tarea3").innerHTML = result3;
document.getElementById("msg").innerHTML = result4;
}