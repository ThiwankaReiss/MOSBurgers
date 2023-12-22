let customer=JSON.parse(localStorage.getItem('customerArray'));
let item=JSON.parse(localStorage.getItem('itemArray'));
let orderDetail=JSON.parse(localStorage.getItem('orderDetailArray'));
let order=JSON.parse(localStorage.getItem('orderArray'));
let cashier=JSON.parse(localStorage.getItem('cashierArray'));

function qtyChart(){
    document.getElementById('predict-container').innerHTML=``
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
    document.getElementById('predict-container').innerHTML=``
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
            if(element.value=='qty'){
                qtyChart();
            }else if(element.value=='amount'){
                amountChart();
            }
        }
    });
}
function showContainer(){
    document.getElementById('predict-container').innerHTML=`
    <input type="radio" name="group1" value="qty"> 
    <p class="p-tag">Prdeict By Qty</p>
    <input type="radio" name="group1" value="amount"> 
    <p class="p-tag">Prdeict By Amount</p>
    <button type="button" class="btn-background" onclick="get()">Prdeict</button>
    <div class="container col-12">
        <div class="row">
            <div class="col-lg-3">
                <div class="small-text">Predict By last</div>
            </div>
            <div class="col-lg-5  text-field-container">
                <input type="text" class="text-field small-text">
            </div>
        </div>
    </div>`;
}


localStorage.setItem('customerArray',JSON.stringify(customer));
localStorage.setItem('itemArray',JSON.stringify(item));
localStorage.setItem('orderArray',JSON.stringify(order));
localStorage.setItem('orderDetailArray',JSON.stringify(orderDetail));
localStorage.setItem('cashierArray',JSON.stringify(cashier));