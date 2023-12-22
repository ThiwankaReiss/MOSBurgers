class Cashier{
    constructor(cashierId,name,age,contact,email,city,gender,experience,description){
        this.cashierId=cashierId;
        this.name=name;
        this.age=age;
        this.contact=contact;
        this.email=email;
        this.city=city;
        this.gender=gender;
        this.experience=experience;
        this.description=description;
    }
}

let cashier=[new Cashier('E001','Nimala',21,'0772445060', 'Nimala*@gmail.com','Moratuwa','Male','3yrs','Hi I am Nimala from Mos burgers, A reputed Employee')
        ,new Cashier('E002','Kamala',22,'0772445061', 'Kamala*@gmail.com','Gampaha','Male','9yrs','Hi I am Kamala from Mos burgers, I am a new Employee')
        ,new Cashier('E003','Samala',23,'0772445062', 'Samala*@gmail.com','Kaluthara','Male','10yrs','Hi I am Samala from Mos burgers, I worked at machdonalds previously')
        ,new Cashier('E004','Pamala',24,'0772445063', 'Pamala*@gmail.com','Galle','Female','7yrs','Hi I am Pamala from Mos burgers')
        ,new Cashier('E005','Gunala',25,'0772445064', 'Gunala*@gmail.com','Mathara','Female','6yrs','Hi I am Gunala from Mos burgers')
        ,new Cashier('E006','Rinala',27,'0772445065', 'Rinala*@gmail.com','Hambanthota','Female','13yrs','Hi I am Rinala from Mos burgers, I am very much experienced in this industry')
        ,new Cashier('E007','Senala',34,'0772445066', 'Senala*@gmail.com','Colombo','Female','5yrs','Hi I am Senala from Mos burgers, A reputed Employee')
    ];



// Export the array for use in other files
localStorage.setItem('cashierArray',JSON.stringify(cashier));