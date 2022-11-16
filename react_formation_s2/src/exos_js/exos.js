
// const array = [[5, 4, 8, 12, 15], [51, 58, 1, 3, 5], [1, 2, 200, 4], [35, 32, 10, 15], [90, 20, 1, 2]]

//  let i = 1
// array.forEach(e => {
//     console.log("Ligne "+i);
//      e.forEach(n => console.log(n))
//     i++;
// })
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// const array = [4, 'g', 5, 4, 5, 'g', 'g', 'o', 8, 2, 2, 4, 'p', 'g', 10, 'g', 5, 5, 4, 5, 5, 4, 5, 5, 4, 5, 5, 4, 5]
// let count2 = 0;
// let element = ''
// array.forEach(element1 => {
//     let count1 = 0;
//     array.forEach(element2 => {
//         if(element1 === element2) {
//             count1++
//         }
//     })
//     if(count1 > count2) {
//         count2 = count1
//         element = element1
//     } 
// })

// console.log(`La valeur la plus réccurente est: ${element}, ${count2} fois.`)
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const arr1 = [1,5,10,15,10]
const arr2 = [10,44,15,20]

// elInArr <=> includes

const elInArr = (el, arr) => {
    let ind = 0;
    arr.forEach(element => {
        if(element === el) ind = 1;
    })
    return ind;
} 

const tabF = [...arr1, ...arr2];
const tabF2 = [];

tabF.forEach(el => {
    if (elInArr(el, tabF2) === 0) { // !tabF2.includes(el)
        tabF2.push(el);
    }
})

console.log(tabF2);