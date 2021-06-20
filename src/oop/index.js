// Biz programımızı hangi dosyadan başlatmak istiyorsak index.html dosyasından
//  <body>
//        <script>
//        System.import('src/oop/index.js');
//    </script> 
//  </body>
// alanındaki System.import('src/oop/index.js'); yazan yere
// dosyamızın ismini ve bulunduğu dizini yazmalıyız.
// Burada başlangıç modülü belirtiliyor.
class Customer {
    constructor(id, customerNumber) {
        this.id = id;
        this.customerNumber = customerNumber;
    }
}
// Bir Class'ın constructor'ına yazılmış değerleri okuyabilmek için
// yukarıdaki gibi prototyping yapmak gerekir.

// JAVA daki public erişim belirtecinin buradaki karşılığı export dur.
let customer = new Customer(1, "12345");

// Aşağıdaki uygulamaya prototyping deniliyor.
customer.name = "Murat"
console.log(customer.name)
// instance prototyping

Customer.bisey = "Bisey"
console.log(Customer.bisey)
// Class prototyping

console.log(customer.customerNumber)

class IndividualCustomer extends Customer {
    constructor(firstName, id, customerNumber) {
        super(id, customerNumber)  // prototype oluşturuldu.
        this.firstName = firstName; // ekstre olarak firstName gönderildi.
    }

}

class CorporateCustomer extends Customer {
    constructor(companyName, id, customerNumber) {
        super(id, customerNumber)
        this.companyName = companyName;
    }
}

let products = [
    { id: 1, name: "Acer Laptop", unitPrice: 15000 },
    { id: 2, name: "Asus Laptop", unitPrice: 16000 },
    { id: 3, name: "Hp Laptop", unitPrice: 13000 },
    { id: 4, name: "Dell Laptop", unitPrice: 12000 },
    { id: 5, name: "Casper Laptop", unitPrice: 17000 },
]

console.log("<ul>")
products.map(product => console.log(`<li>${product.name}</li>`))
console.log("</ul>")
