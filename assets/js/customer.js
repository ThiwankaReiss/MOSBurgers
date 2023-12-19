class Customer{
    constructor(customerId,name,contact,email){
        this.customerId=customerId;
        this.name=name;
        this.contact=contact,
        this.email=email;
    }
    getCustomerId(){
        return this.customerId;
    }
    getName(){
        return this.name;
    }
    getContact(){
        return this.contact;
    }
    getEmail(){
        return this.email;
    }
}


let customer=[new Customer('C001','Nimal','0772445070', 'Nimal*@gmail.com')
        ,new Customer('C002','Amal','0772445071', 'Amal*@gmail.com')
        ,new Customer('C003','Wimal','0772445072', 'Wimal*@gmail.com')
        ,new Customer('C004','Kamal','0772445073', 'Kamal*@gmail.com')
        ,new Customer('C005','Sumimal','0772445074', 'Sumimal*@gmail.com')
        ,new Customer('C006','Ranmal','0772445075', 'Ranmal*@gmail.com')
        ,new Customer('C007','Hemal','0772445076', 'Hemal*@gmail.com')
    ];



// Export the array for use in other files
localStorage.setItem('customerArray',JSON.stringify(customer));
