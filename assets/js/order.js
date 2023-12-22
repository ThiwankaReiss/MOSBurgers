class Order{
    constructor(orderId,customerId,date,addDiscount,cashierId){
        this.orderId=orderId;
        this.customerId=customerId;
        this.date=date;
        this.addDiscount=addDiscount;
        this.cashierId=cashierId;
    }
}


let order=[new Order('O001','C001','12-3-2023',0,'E001')
        ,new Order('O002','C002','12-4-2023',0,'E002')
        ,new Order('O003','C003','12-8-2023',2,'E003')
        
    ];



// Export the array for use in other files
localStorage.setItem('orderArray',JSON.stringify(order));