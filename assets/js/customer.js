class Customer{
    constructor(customerId,name,contact,email,status){
        this.customerId=customerId;
        this.name=name;
        this.contact=contact,
        this.email=email;
        this.status=status;
    }
}


let customer=[new Customer('C001','Nimal','0772445070', 'Nimal*@gmail.com','loyal')
        ,new Customer('C002','Amal','0772445071', 'Amal*@gmail.com','loyal')
        ,new Customer('C003','Wimal','0772445072', 'Wimal*@gmail.com','loyal')
        ,new Customer('C004','Kamal','0772445073', 'Kamal*@gmail.com','loyal')
        ,new Customer('C005','Sumimal','0772445074', 'Sumimal*@gmail.com','loyal')
        ,new Customer('C006','Ranmal','0772445075', 'Ranmal*@gmail.com','loyal')
        ,new Customer('C007','Hemal','0772445076', 'Hemal*@gmail.com','loyal')
    ];



// Export the array for use in other files
localStorage.setItem('customerArray',JSON.stringify(customer));
