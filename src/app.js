let sayi = 10;
sayi = "Engin Demiroğ"
let student = { id: 1, name: "Engin" } // object notation denilir.
// Yukarıdaki ifadeye obje tanımı deniliyor. Bir nevi Class tanımı gibidir.
// Objelerde değişken let key word'ü ile tanımlanır.

// Yazdığımız kodları otmatik olarak editörde düzenlemek için shift + Alt + F kullanılıyor.
// Bir değişken tanımlanacağı zaman let key word'ü kullanılır.
// Bir kod bloğunun sonuna ';' ifadesi koyulsa da koyulmasa da olur. 

// console.log(student);

function save(puan = 10, ogrenci) {
    console.log(ogrenci.name + " : " + puan)
}
// Örnek bir fonksiyon tanımı.

// save(student, 100)
// save(student)
save(undefined, student)
// Burada parametre olarak Null göndermek yerine undefined göndermek gereklidir.
// Java Script de bir parametreyi undefined göndermek demek aslında parametre olarak yok demektir.
// Bu durumda default parametre değer olarak döndürülür.

// save(50) // bu şekilde atama yapılırsa sayı gönderildiğinden Undifined hatasını alırız.
// Burada default puan olarak 10 değilde parametre olarak gönderilen 100 değeri alınmıştır.
// C# ve JAVA da default parametre aktarımı yapılacaksa en sonda yazılması gerekirken burada böyle bir zorunluluk yoktur.
// Eğer function save( puan = 10, ogrenci) bu şekilde yazılırsa student'a 10 değerini atar.

// function save(ogrenci, puan = 10) {
//     console.log(ogrenci)
// }

// save(15);

// burada fonksiyona istediğimiz tipte parametre gönderebiliriz.
// burada sayi = 10 ile default parametre aktarımı yapılıyor.

let students = ["Engin Demiroğ", "halit", "tarık"]
// JavaScript de array'ler '[]' ile tanımlanıyor. Yeni bir referans alınıyor.

console.log(students)

// let students2 = [student, { id: 2, name: "tarık" }]
// Bu ifade de 2 elemanlı obje array' yazdırır.
let students2 = [student, { id: 2, name: "tarık" }, "Ankara", { city: "istanbul" }]
console.log(students2)

// rest konusu
// C# karşılığı params
// JAVA'daki karşılığı varArgs dır.
let showProducts = function (id, ...products) {
    console.log(id)
    console.log(products[0])
    // console.log(products)
}
// Burada bir fonksiyona isim vermesekte tanımlayabiliriz.
// Ayrıca buradaki gibi bir değişkene fonksiyon atayabiliriz.

// console.log(typeof showProducts)
// Burada typeof anahtar kelimesiyle showProducts'ın türünü yazdırıyoruz.

// showProducts()
// Burada ...products ifadesi boş bir array döndürür.

// showProducts(10,"Elma","armut","karpuz")
// Burada ilk parametre 10 ve diğer "Elma","armut","karpuz" ise bir array'in elemanları olarak döner.

// showProducts(10, ["Elma", "armut", "karpuz"])
// Bu durumda JavaScript gönderilen parametreyi array içinde array olarak algılıyor.
// ...products = [] dir.
// Bu şekilde parametreye istediğimiz kadar parametre gönderiyoruz. Fakat onlar array olarak tutuluyor.
// Bu şekildeki gönderimde dizinin bütün elemanlarına ulaşmak istiyorsak
// console.log(products[0]) olarak yazdırmamız gerekir.
// Buna rest parametre denir.

// console.log(Math.max([1, 2, 3, 4, 50, 4, 60, 14]))
// console.log(Math.max([1,2,3,4,50,4,60,14]))
// Bu şekilde parametre gönderilirse NaN yani not a number şeklinde bir hata verir.
// Çünkü Math() fonksiyonu bizden number array'i şeklinde rest bir ifade bekliyor.

// Spread
let points = [1, 2, 3, 45, 4, 58, 54, 30, 19]
// console.log(...points)
// konsola bu şekilde gönderilirse spread eder yani ifadeyi ayırır. Buna spread denir.
console.log(Math.max(...points))
// spread bir array'i parametre gibi virgülle ayırmaya yarıyor.
console.log(..."ABC", "D", ..."EFG", "H")
// ..."ABC" ifadesiyle ABC'yi bir char array'olarak gördüğü için ayırır.
// Aynı şekilde D'yi ayırır ve ..."EFG", "H" ayırır.
// spread de elimizdeki array ayrıştırılıyor.
// "...points" SPREAD operatörü

// Desructuring
// Elimizdeki array'in elemanlrını değişkenlere atama yöntemidir. 
// Yani array'i yapıtaşlarına ayırmadır.

// let populations = [10000, 20000, 30000]
// let [small, medium, high] = populations
let populations = [10000, 20000, 30000, [40000, 10000]]
let [small, medium, high, [veryHigh, maximum]] = populations
// let [small, medium, high, subPopulations] = populations
// let [veryHigh, maximum] = subPopulations
console.log(small)
console.log(medium)
console.log(high)
console.log(veryHigh)
console.log(maximum)

function someFunction([small1], number) {
    console.log(small1)
}

someFunction(populations)