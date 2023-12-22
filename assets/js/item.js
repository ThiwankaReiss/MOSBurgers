class Item{
    constructor(itemCode,name,qtyOnHand,price,discount){
        this.itemCode=itemCode;
        this.name=name;
        this.qtyOnHand=qtyOnHand,
        this.price=price;
        this.discount=discount;
    }
   
}


let item=[new Item('B1001','Clasic Burger(large)',10,750.00,0)
        ,new Item('B1002','Clasic Burger(regular)',5,1500.00,15)
        ,new Item('B1003', 'Turkey Burger ',4,1600.00,0 )
        ,new Item('B1004 ','Chicken Burger (Large)',8 ,1400.00 ,0)
        ,new Item('B1005 ','Chicken Burger (Regular)',7, 800.00 ,20)
        ,new Item('B1006',' Cheese Burger (Large)',7 ,1000.00 ,0)
        ,new Item('B1007',' Cheese Burger (Regular)',9,600.00,0)
        ,new Item('B1008 ','Bacon Burger ',8,650.00, 15)
        ,new Item('B1009',' Shawarma Burger',9, 800.00,0)
    ];

    localStorage.setItem('itemArray',JSON.stringify(item));