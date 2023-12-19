class OrderDetail{
    constructor(orderId,code,qty){
        this.orderId=orderId;
        this.code=code;
        this.qty=qty;
    }
}


let orderDetail=[new OrderDetail('O001','B1009',4)
        ,new OrderDetail('O001','B1008',5)
        ,new OrderDetail('O001','B1006',6)
        ,new OrderDetail('O002','B1005',8)
        ,new OrderDetail('O002','B1004',9)
        ,new OrderDetail('O002','B1003',7)
        ,new OrderDetail('O002','B1002',4)
        ,new OrderDetail('O003','B1001',3)
        ,new OrderDetail('O003','B1009',3)
        ,new OrderDetail('O003','B1008',8)
        ,new OrderDetail('O003','B1007',5)
    ];



// Export the array for use in other files
localStorage.setItem('orderDetailArray',JSON.stringify(orderDetail));

