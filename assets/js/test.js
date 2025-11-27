// ==========================
// 1) Testlar bazasi
// ==========================

const tests = {

  frontend: [
    { q: "HTML nima?", a: ["A) HyperText Markup Language", "B) Programming Language", "C) Database"], correct: 0 },
    { q: "CSS nimani boshqaradi?", a: ["A) Strukturani", "B) Tashqi ko‘rinishni", "C) Ma'lumotlarni"], correct: 1 },
    { q: "JavaScript qayerda ishlaydi?", a: ["A) Serverda", "B) Brauzerda", "C) Terminalda"], correct: 1 },
    { q: "Eng katta sarlavha tegi?", a: ["A) h1", "B) h6", "C) header"], correct: 0 },
    { q: "Flexbox nima?", a: ["A) Layout tizimi", "B) Animation", "C) Color"], correct: 0 },
    { q: "Bootstrap nima?", a: ["A) CSS Framework", "B) Backend Framework", "C) Database"], correct: 0 },
    { q: "Array qaysi belgida yoziladi?", a: ["A) {}", "B) []", "C) ()"], correct: 1 },
    { q: "Rang berish property?", a: ["A) font", "B) color", "C) padding"], correct: 1 },
    { q: "Rasm qo‘shish tegi?", a: ["A) pic", "B) image", "C) img"], correct: 2 },
    { q: "console.log() nima qiladi?", a: ["A) Xatolarni tozalaydi", "B) Chop qiladi", "C) Yangilaydi"], correct: 1 },
    { q: "position: absolute nima?", a: ["A) Oqimdan chiqaradi", "B) Yashiradi", "C) Aylantiradi"], correct: 0 },
    { q: "id qanday tanlanadi?", a: ["A) #", "B) .", "C) /"], correct: 0 },
    { q: "Link qaysi tegda yoziladi?", a: ["A) a", "B) p", "C) link"], correct: 0 },
    { q: "Function qanday yoziladi?", a: ["A) func()", "B) function()", "C) new Func"], correct: 1 },
    { q: "CSS Grid nima?", a: ["A) Rasmlar filtri", "B) Layout tizimi", "C) Audio boshqaruv"], correct: 1 },
    { q: "Form qaysi teg?", a: ["A) form", "B) input", "C) submit"], correct: 0 },
    { q: "Margin nima?", a: ["A) Ichki bo‘shliq", "B) Tashqi bo‘shliq", "C) Chegara"], correct: 1 },
    { q: "let nimani bildiradi?", a: ["A) O‘zgarmas", "B) O‘zgaruvchi", "C) Funksiya"], correct: 1 },
    { q: "display: none nima qiladi?", a: ["A) O‘chiradi", "B) Yashiradi", "C) Kattalashtiradi"], correct: 1 },
    { q: "Video qaysi teg bilan qo‘shiladi?", a: ["A) vid", "B) media", "C) video"], correct: 2 }
],


  backend: [
    { q: "Backend qayerda ishlaydi?", a: ["Serverda", "Brauzerda", "Telefon kamerasida"], correct: 0 },
    { q: "MySQL nima?", a: ["Server", "DBMS", "Framework"], correct: 1 },
    { q: "API nima?", a: ["Aloqa interfeysi", "Kod muharriri", "Hardware"], correct: 0 },
    { q: "Node.js qaysi tilga asoslangan?", a: ["Python", "JavaScript", "C#"], correct: 1 },
    { q: "Database nima?", a: ["Kodni formatlaydi", "Ma'lumotlar ombori", "Tarmoq"], correct: 1 },
    { q: "CRUD dagi R nimani bildiradi?", a: ["Remove", "Read", "Run"], correct: 1 },
    { q: "JWT nima?", a: ["Token mexanizmi", "CSS uslubi", "Video formati"], correct: 0 },
    { q: "Server nima qiladi?", a: ["Ma'lumot saqlaydi", "Rasm chizadi", "Video montaj qiladi"], correct: 0 },
    { q: "REST qaysi protokol?", a: ["HTTP asosidagi uslub", "DNS turi", "SSH"], correct: 0 },
    { q: "PHP nima?", a: ["Backend tili", "Frontend tili", "Framework"], correct: 0 },
    { q: "MongoDB qanday turdagi DB?", a: ["SQL", "NoSQL", "Graph"], correct: 1 },
    { q: "HTTP 404 nimani bildiradi?", a: ["Server ishdan chiqdi", "Topilmadi", "Yaxshi"], correct: 1 },
    { q: "Nginx nima?", a: ["Server dasturi", "Animatsiya vositasi", "Framework"], correct: 0 },
    { q: "Session nima?", a: ["Vaqtinchalik ma'lumot", "Rasm", "Video"], correct: 0 },
    { q: "POST metodi nima qiladi?", a: ["Ma'lumot oladi", "Ma'lumot yuboradi", "Sahifani yangilaydi"], correct: 1 },
    { q: "SQL da SELECT nima?", a: ["O‘chirish", "Qo‘shish", "Tanlash"], correct: 2 },
    { q: "Hashlash nima?", a: ["Ma'lumotni yashirish", "Rasmni qisish", "Audio o‘zgartirish"], correct: 0 },
    { q: "Backendda routing nima?", a: ["Yo‘nalish berish", "Rang berish", "Audio sozlash"], correct: 0 },
    { q: "Framework nima?", a: ["Kutubxona", "Tayyor struktura", "Server"], correct: 1 },
    { q: "HTTPS nimani beradi?", a: ["Xavfsizlik", "Tezlik", "Reklama"], correct: 0 }
  ],

  java: [
    { q: "Java kim tomonidan yaratilgan?", a: ["Google", "Sun Microsystems", "Meta"], correct: 1 },
    { q: "JDK nima?", a: ["Java Dev Kit", "Java Default Key", "Java Debug Kernel"], correct: 0 },
    { q: "JVM nima?", a: ["Java Virtual Machine", "Java Version Manager", "Java Voice Module"], correct: 0 },
    { q: "Java tili qaysi turga kiradi?", a: ["Interpreted", "Compiled + Interpreted", "Compiled"], correct: 1 },
    { q: "OOPning ustunligi?", a: ["Design", "Security", "Hammasi"], correct: 2 },
    { q: "Constructor qachon chaqiriladi?", a: ["Oxirida", "Yaratilganda", "Hech qachon"], correct: 1 },
    { q: "Java da array qaysi belgida yoziladi?", a: ["[]", "{}", "()"], correct: 0 },
    { q: "int nechchi bit?", a: ["8 bit", "16 bit", "32 bit"], correct: 2 },
    { q: "Java kim uchun mashhur?", a: ["Android", "Brauzer", "Processor"], correct: 0 },
    { q: "final kalit so‘zi?", a: ["O‘zgarmas", "O‘chadi", "Ko‘payadi"], correct: 0 },
    { q: "Exe fayl yaratadimi?", a: ["Ha", "Yo‘q", "Ba'zida"], correct: 1 },
    { q: "Package nima?", a: ["Folder", "Kutubxona", "Namespace"], correct: 2 },
    { q: "toString() qayerda ishlaydi?", a: ["Class", "Array", "Constructor"], correct: 0 },
    { q: "String immutablemi?", a: ["Yo‘q", "Ha", "Faqat Androidda"], correct: 1 },
    { q: "Java da && nima?", a: ["Yoki", "Va", "Bo'lish"], correct: 1 },
    { q: "Class nima?", a: ["Obyekt", "Shablon", "Metod"], correct: 1 },
    { q: "break nima qiladi?", a: ["To‘xtatadi", "Sakradi", "O‘zgartiradi"], correct: 0 },
    { q: "null nima?", a: ["0", "Bo‘sh qiymat", "String"], correct: 1 },
    { q: "super() nimaga tegishli?", a: ["Ota class", "Child class", "Interface"], correct: 0 },
    { q: "Java file kengaytmasi?", a: [".jav", ".java", ".jv"], correct: 1 }
  ],

  cplus: [
  { q: "C++ kim tomonidan yaratilgan?", a: ["Bjarne Stroustrup", "Guido van Rossum", "Dennis Ritchie"], correct: 0 },
  { q: "C++ qaysi til asosida yaratilgan?", a: ["Python", "C tili", "Java"], correct: 1 },
  { q: "cout nimaga xizmat qiladi?", a: ["Kiritish", "Chop qilish", "O‘chirish"], correct: 1 },
  { q: "cin nima qiladi?", a: ["Kiritadi", "O‘chiradi", "Saralash"], correct: 0 },
  { q: "#include <iostream> nima uchun kerak?", a: ["Massiv yaratish", "Kutilmagan xatolar", "Kirish-chiqish uchun"], correct: 2 },
  { q: "C++ da qaysi operator o‘zgaruvchiga qiymat beradi?", a: ["=", "+", ":"], correct: 0 },
  { q: "int degani nima?", a: ["Matn", "Butun son", "Haqiqiy son"], correct: 1 },
  { q: "double qaysi tip?", a: ["Butun son", "Matn", "Haqiqiy son"], correct: 2 },
  { q: "string qanday tip?", a: ["Matn", "Belgilar", "Son"], correct: 0 },
  { q: "for sikli nima qiladi?", a: ["Takrorlaydi", "O‘chadi", "To‘xtaydi"], correct: 0 },
  { q: "while sikli qachongacha ishlaydi?", a: ["Shart true bo‘lsa", "Har doim", "Hech qachon"], correct: 0 },
  { q: "Array nima?", a: ["Funksiya", "Ma’lumotlar to‘plami", "Class"], correct: 1 },
  { q: "Function nima?", a: ["Kod blokidir", "O‘zgaruvchi", "Kutubxona"], correct: 0 },
  { q: "return nima qiladi?", a: ["Qiymat qaytaradi", "O‘chiradi", "Sikldan chiqadi"], correct: 0 },
  { q: "Class nima?", a: ["Obyekt", "Shablon", "Sikl"], correct: 1 },
  { q: "Object nima?", a: ["Classdan yaratilgan nusxa", "O‘zgaruvchi", "Kutubxona"], correct: 0 },
  { q: "Constructor nima?", a: ["O‘zgaruvchi tipi", "Obyekt yaratganda ishlaydigan funksiya", "Kutubxona"], correct: 1 },
  { q: "Pointer nima?", a: ["Manzil saqlaydi", "Matn saqlaydi", "Rasm"], correct: 0 },
  { q: "NULL nimani bildiradi?", a: ["0", "Bo‘sh manzil", "Xatolik"], correct: 1 },
  { q: "C++ fayli qanday kengayma bilan tugaydi?", a: [".py", ".cpp", ".html"], correct: 1 }
],


  python: [
    { q: "Python kim tomonidan yaratilgan?", a: ["Guido van Rossum", "Bill Gates", "Elon Musk"], correct: 0 },
    { q: "print() nima qiladi?", a: ["Kiritadi", "Chop qiladi", "O‘chiradi"], correct: 1 },
    { q: "Python tipi?", a: ["Static", "Dynamic", "Compiled"], correct: 1 },
    { q: "List nima?", a: ["Ro‘yxat", "Funksiya", "Class"], correct: 0 },
    { q: "len() nima beradi?", a: ["Yig‘indi", "Uzunlik", "Katta harf"], correct: 1 },
    { q: "Tuple o‘zgarmaydimi?", a: ["Ha", "Yo‘q", "Ba'zida"], correct: 0 },
    { q: "dict nima?", a: ["Kalit-qiymat", "Ro‘yxat", "Set"], correct: 0 },
    { q: "for loop nima qiladi?", a: ["Takrorlaydi", "O‘chiradi", "Sakradi"], correct: 0 },
    { q: "break nima qiladi?", a: ["To‘xtatadi", "Boshlaydi", "Katta qiladi"], correct: 0 },
    { q: "input() nima qiladi?", a: ["Chop qiladi", "Foydalanuvchi kiritadi", "Tizimni to‘xtatadi"], correct: 1 },
    { q: "range() nima?", a: ["Sonlar ketma-ketligi", "Class", "String"], correct: 0 },
    { q: "def bilan nima yoziladi?", a: ["Variable", "Function", "Loop"], correct: 1 },
    { q: "import nima?", a: ["Modul chaqirish", "O‘chirish", "Kopiyalash"], correct: 0 },
    { q: "while loop qachon to‘xtaydi?", a: ["Shart false bo‘lsa", "Har doim", "Hech qachon"], correct: 0 },
    { q: "None nimani bildiradi?", a: ["Bo‘sh qiymat", "0", "False"], correct: 0 },
    { q: "float nima?", a: ["Butun", "Kasr son", "String"], correct: 1 },
    { q: "try/except nima uchun?", a: ["Xatolarni ushlash", "Chop qilish", "Yozish"], correct: 0 },
    { q: "list.append() nima qiladi?", a: ["Oxiriga qo‘shadi", "O‘chiradi", "O‘rtaga qo‘yadi"], correct: 0 },
    { q: "== nima qiladi?", a: ["Tenglikni solishtiradi", "Qo‘shadi", "Teskari qiladi"], correct: 0 },
    { q: "Python kengaytmasi?", a: [".py", ".pt", ".pyt"], correct: 0 }
  ]

};



// ==========================
// 2) URL orqali kursni aniqlash
// ==========================
// test.html?course=frontend

const url = new URLSearchParams(window.location.search);
const course = url.get("course") || "frontend";

document.getElementById("courseTitle").innerText =
  course.toUpperCase() + " testi";

const selectedTest = tests[course];


// ==========================
// 3) Savollarni chiqarish
// ==========================

let userAnswers = [];

let html = "";

selectedTest.forEach((item, index) => {
  html += `
    <div class="question" id="q${index}">
      <h4>${index + 1}. ${item.q}</h4>
      <div class="options">
        ${item.a
          .map(
            (opt, optIndex) => `
          <label>
            <input type="radio" name="q${index}" value="${optIndex}" onchange="selectAnswer(${index},${optIndex})">
            ${opt}
          </label>
        `
          )
          .join("")}
      </div>
    </div>
  `;
});

document.getElementById("testArea").innerHTML = html;


// ==========================
// 4) Javoblarni olish
// ==========================

function selectAnswer(qIndex, aIndex) {
  userAnswers[qIndex] = aIndex;
}


// ==========================
// 5) Testni tugatish
// ==========================

function finishTest() {
  let score = 0;

  selectedTest.forEach((item, index) => {

    const qBox = document.getElementById("q" + index);
    const labels = qBox.querySelectorAll("label");

    labels.forEach((label, i) => {
      label.classList.remove("correct", "wrong");

      if (i === item.correct) {
        label.classList.add("correct");
      } else if (userAnswers[index] === i) {
        label.classList.add("wrong");
      }
    });

    if (userAnswers[index] === item.correct) {
      score++;
    }
  });

  const percentage = Math.round((score / selectedTest.length) * 100);

  document.getElementById("resultBox").style.display = "block";
  document.getElementById("resultBox").innerText =
    `Sizning natijangiz: ${percentage} ball / 100`;
}
