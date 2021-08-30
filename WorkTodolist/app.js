// list dizisi dizi şeklinde Category: Todo: Fav: şeklinde tutuldu
var list = [
    { Category: 'school', Todo: 'todo1', Fav: false},
    { Category: 'school', Todo: 'todo2', Fav: true},
    { Category: 'work',   Todo: 'todo3', Fav: true},
    { Category: 'work',   Todo: 'todo4', Fav: false},
    { Category: 'home',   Todo: 'todo5', Fav: false},
];

// for ile dizi içinde dönüldü ve categoriye ve fava göre todo getirildi.
for( var i =0 ; i < list.length ; i++){
    
    if(list[i].Category === "school"  && list[i].Fav == true){
        console.log("Category:school ve Fav:true olanlar getirildi." + list[i].Todo);
    }
    if(list[i].Category === "school"  && list[i].Fav == false){
        console.log("Category:school ve Fav:false olanlar getirildi." + list[i].Todo);
    }
    if(list[i].Category === "work"  && list[i].Fav == true){
        console.log("Category:work ve Fav:true olanlar getirildi." + list[i].Todo);
    }
    if(list[i].Category === "work"  && list[i].Fav == false){
        console.log("Category:school ve Fav:false olanlar getirildi." + list[i].Todo);
    }
    if(list[i].Category === "home"  && list[i].Fav == false){
        console.log("Category:school ve Fav:false olanlar getirildi." + list[i].Todo);
    }
 
}

// list push ve unshift fonksiyonu ile ilk ve son listeye eleman eklendi.(kullanıcıdan alındı.)
    list.push(
        {
             Category: "nul",  Todo: prompt("listenin başına eleman eklemek için bir todo giriniz?"), Fav: "nul",
        },
    );
    console.log(list);

    list.unshift(
        {
             Category: "nul",  Todo: prompt("listenin sonuna eleman eklemek için bir todo giriniz?"), Fav: "nul",
        },
    );
    console.log(list);

// pop fonksiyonu kullanarak son elemanımız silindi.
// selamver() fonksiyonu ilede dizinin görülüp sonra silme işlemi yapılması sağlanıldı.
function selamVer() {

list.pop(
    {
         Category: "nul",  Todo: alert("silinen elemanınız"), Fav: "nul",
    },
);
console.log(list);
  }

setTimeout(selamVer, 10000);

// stringif ile dizi alında ama pars metodu ile yazıldı. (Dizi şeklinde tutuldu.)
const listItem = JSON.stringify(list);
localStorage.setItem("list",JSON.stringify(list));
list = JSON.parse(localStorage.getItem("list"));



// Diğer denediğim metodları yorum satırına aldım


// const meJson= [`
//     {
//         "Todo" : "1",
//         "Category"  : "2",
//         "Fav" : "3"
//     }
// `];

//     const me = JSON.parse(meJson);
//     localStorage.setItem("meJson",JSON.parse(meJson));


// const meJson = {
//     "Todo" : 1,
//     "Category" : 2,
//     "Fav" : 3,
// };
// const me = JSON.stringify(meJson);
// localStorage.setItem("meJson",me);
// const mee = JSON.parse(localStorage.getItem("meJson"));
// console.log(mee);


// function Employe(name,age,salary){
//     this.name = name;
//     this.age = age;
//     this.salary = salary;

//     console.log(this);
// }

// const emp1 = new Employe(prompt("lütfn sayı giriniz"),prompt("lütfen"),prompt("lütfennn"));
// localStorage.setItem("emp1",JSON.stringify(emp1));



// var sinifim=new Array();
// sinifim[0]=new Array(911,"Ahmet","Yılmaz");
// sinifim[1]=new Array(542,"Özge","Kara");
// sinifim[2]=new Array(223,"Gizem","Uysal");
// sinifim[3]=new Array(333,"Aslı","Bitmez");

// var i,j=0;

// for(i=0;i<=sinifim.length-1;i++)
// {
     
//         console.log(sinifim[i][j]+ " " + sinifim[i][j+1] + "" + sinifim[i][j+2]);
        
// }



