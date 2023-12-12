function qtyChart(){
    const xValues = [50,60,70,80,90,100,110,120,130,140,150];
    const yValues = [7,8,8,9,9,9,10,11,14,14,15];
    let topic=document.getElementById('chart-topic');
    
    topic.innerHTML=`Sales By Quantity  <br>`
    new Chart("myChart", {
      type: "line",
      data: {
        labels: xValues,
        datasets: [{
          fill: false,
          lineTension: 0,
          backgroundColor: "rgba(0,0,255,1.0)",
          borderColor: "rgba(0,0,255,0.1)",
          data: yValues
        }]
      },
      options: {
        legend: {display: false},
        scales: {
          yAxes: [{ticks: {min: 6, max:16}}],
        }
      }
    });
}

function amountChart(){
    const xValues = [25,60,70,80,90,100,110,120,130,140,150];
    const yValues = [10,8,8,9,9,9,10,11,14,14,15];
    let topic=document.getElementById('chart-topic');
    
    topic.innerHTML=`Sales By Amount  <br>`
    new Chart("myChart", {
      type: "line",
      data: {
        labels: xValues,
        datasets: [{
          fill: false,
          lineTension: 0,
          backgroundColor: "rgba(0,0,255,1.0)",
          borderColor: "rgba(0,0,255,0.1)",
          data: yValues
        }]
      },
      options: {
        legend: {display: false},
        scales: {
          yAxes: [{ticks: {min: 6, max:16}}],
        }
      }
    });
}

function get(){
    var group1=document.getElementsByName('group1');
    group1.forEach(element => {
        if(element.checked){
            // if(element.value==qty){
            //     alert("hi");
            // }
        }
    });
}