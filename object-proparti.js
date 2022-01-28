var computer ={
    price:2501,
    storage:'154gb',
    processor:'intel',
    color:'black',
};
//full about daker jono
console.log(computer);


//change proparty
var changeproperti="price";
computer.price=1000;
computer['price']=120;
computer[changeproperti]= 615;
console.log(computer); //ses a jata thakbe sei ta sudu output diba.
//syestm vabe laka jai

//storage change
computer['storage'] ='2tb';
console.log(computer);

//color chage
computer.color='green';
console.log(computer);

//sudu akta output dakar jono ai vabe lakte hba.
var computerAbout = computer.price;
console.log(computerAbout);