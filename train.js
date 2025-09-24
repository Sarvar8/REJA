// TASK B: 

// Shunday function tuzing, u 1ta string parametrga ega bolsin, hamda osha stringda qatnashgan raqamlarni sonini bizga return qilsin.
// MASALAN countDigits("ad2a54y79wet0sfgb9") 7ni return qiladi.


function top(raqam) {
  let count = 0;
  for (let i = 0; i < raqam.length; i++) {
    if (raqam[i] >= "0" && raqam[i] <= "9") {
      count++;
    }
  }
  return count;
}

console.log(top("ad2a54y79wet0sfgb9"));



// A-TASK: 

// Shunday 2 parametrli function tuzing, hamda birinchi parametrdagi letterni ikkinchi parametrdagi sozdan qatnashga sonini return qilishi kerak boladi.
// MASALAN countLetter("e", "engineer") 3ni return qiladi.

// console.log("========")
// function countLetter(letter, sentence) {
//     letter = letter.toLowerCase();
//     sentence = sentence.toLowerCase();
//     if(typeof letter === 'string' && typeof sentence === 'string') {
//         let count = 0;
//         for(let i = 0; i<sentence.length; i++) {
//             if (sentence[i] === letter) {
//                 count++;
//             }
//         }
//         if (count === 0) {
//             return 'You should write here string';
//         } else {
//             return count;
//      } 
//     }
// }
// console.log(countLetter('A', 'Gayrat qilamiza olga'));





console.log("========");
// console.log("Jack Ma Maslaxatlari");
// const list = [
//     "yaxshi talaba bo'ling", // 0-20
//     "to'g'ri boshliq tanlang va ko'proq xato qiling", // 20-30
//     "uzingizga ishlashni boshlang", // 30-40
//     "siz kuchli bo'lgan narsalarni qiling", // 40-50
//     "yoshlarga investitsiya qiling", // 50-60
//     "endi dam oling, foydasi yo'q endi", // 60~
// ];

// // callback function
// function maslaxatbering(a, callback) {
//     if(typeof a !== 'number') callback("insert a number", null);
//     else if(a <= 20) callback(null, list[0]);
//     else if(a > 20 && a <= 30) callback(null, list[1]);
//     else if(a > 30 && a <= 40) callback(null, list[2]);
//     else if(a > 40 && a <= 50) callback(null, list[3]);
//     else if(a > 50 && a <= 60) callback(null, list[4]);
//     else {
//         setTimeout(function () {
//          callback(null, list[5]);
//         }, 5000);
        
//     }
//    }

//    console.log("passed here 0");
//    maslaxatbering(65, (err, data) => {
//     if(err) console.log('ERROR', err);
//     else {
//     console.log('JAVOB:', data);
//     }
//    });
//    console.log("passed here 1");

// ===========================================


// Async function
// async function maslaxatbering(a) {
//     if(typeof a !== "number") throw new Error("insert a number");
//     else if(a <= 20) return list[0];
//     else if(a > 20 && a <= 30) return list[1];
//     else if(a > 30 && a <= 40) return list[2];
//     else if(a > 40 && a <= 50) return list[3];
//     else if(a > 50 && a <= 60) return list[4];
//     else {
//         return new Promise((resolve, reject) => {
//           setInterval(() => {
//             resolve(list[5]);
//             }, 1000);
//         });
//      }
//    }


//  Call via then/catch
//    then/catch orqali 
//    console.log("passed here 0");
//    maslaxatbering(20)
//    .then((data) => {
//     console.log("javob:", data);
//    })
//    .catch((err) => {
//     console.log("ERROR:", err);
//     });

//    console.log("passed here 1");


// async/await
// async function run() {
//  let javob = await maslaxatbering(25);
//  console.log(javob);
//  javob = await maslaxatbering(65);
//  console.log(javob);
//  javob = await maslaxatbering(41);
//  console.log(javob);
// }
// run();


// async function run() {
//  let javob = await maslaxatbering(88);
//  console.log(javob);
// }
// run();