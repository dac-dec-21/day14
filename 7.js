// How to pass parameter/argument to function
function weatherReport(p1) {
  /*if (p1 == undefined) {
    p1 = "mumbai";
  }*/
  p1 = p1 || "calcutta";

  console.log("Function Parameter Demo", p1);
}

weatherReport();
weatherReport("mumbai");
weatherReport("delhi");
