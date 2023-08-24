function myFunction() {
  var x = document.getElementById("myNumber").value;
  var str = "Éste es el link a tu Parcial,No olvides enviarlo por classroom cuando lo termines";
  var result2 = "";
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
  ["https://oicampo-uao.github.io/academics/p1EleMaq2023-3/5222142023301.sm"],
  ["https://oicampo-uao.github.io/academics/p1EleMaq2023-3/5222142023302.sm"],
  ["https://oicampo-uao.github.io/academics/p1EleMaq2023-3/5222142023303.sm"],
  ["https://oicampo-uao.github.io/academics/p1EleMaq2023-3/5222142023304.sm"],
  ["https://oicampo-uao.github.io/academics/p1EleMaq2023-3/5222142023305.sm"],
  ["https://oicampo-uao.github.io/academics/p1EleMaq2023-3/5222142023306.sm"],
  ["https://oicampo-uao.github.io/academics/p1EleMaq2023-3/5222142023307.sm"],
  ["https://oicampo-uao.github.io/academics/p1EleMaq2023-3/5222142023308.sm"],
  ["https://oicampo-uao.github.io/academics/p1EleMaq2023-3/5222142023309.sm"],
  ["https://oicampo-uao.github.io/academics/p1EleMaq2023-3/5222142023310.sm"],]);
3
if (x == cod.get([0,0]) || x == cod.get([10,0]) || x == cod.get([20,0]))  {
  var result1 = str.link(links.get([0,0]));
}
else if (x == cod.get([1,0]) || x == cod.get([11,0]) || x == cod.get([21,0])) {
  var result1 = str.link(links.get([1,0]));
}
else if (x == cod.get([2,0]) || x == cod.get([12,0]) || x == cod.get([22,0])) {
  var result1 = str.link(links.get([2,0]));
}
else if (x == cod.get([3,0]) || x == cod.get([13,0]) || x == cod.get([23,0])) {
  var result1 = str.link(links.get([3,0]));
}
else if (x == cod.get([4,0]) || x == cod.get([14,0]) || x == cod.get([24,0])) {
  var result1 = str.link(links.get([4,0]));
}
else if (x == cod.get([5,0]) || x == cod.get([15,0]) || x == cod.get([25,0])) {
  var result1 = str.link(links.get([5,0]));
}
else if (x == cod.get([6,0]) || x == cod.get([16,0]) || x == cod.get([26,0])) {
  var result1 = str.link(links.get([6,0]));
}
else if (x == cod.get([7,0]) || x == cod.get([17,0]) || x == cod.get([27,0])) {
  var result1 = str.link(links.get([7,0]));
}
else if (x == cod.get([8,0]) || x == cod.get([18,0]) || x == cod.get([28,0])) {
  var result1 = str.link(links.get([8,0]));
}
else if (x == cod.get([9,0]) || x == cod.get([19,0]) || x == cod.get([29,0])) {
  var result1 = str.link(links.get([9,0]));
}

else {
var str = "Tu código no ha sido encontrado, "
  var result1 = str.link("mailto:oicampo@uao.edu.co?subject=Mi%20código%20no%20stá%20inscrito%20en%20el%20curso%20EleMaq");
var str2 = " por favor haz click aquí para contactar a tu profesor"
  var result2 = str2.link("mailto:oicampo@uao.edu.co?subject=Mi%20código%20no%20stá%20inscrito%20en%20el%20curso%20EleMaq");
}

document.getElementById("tarea1").innerHTML = result1;
document.getElementById("tarea2").innerHTML = result2;
}