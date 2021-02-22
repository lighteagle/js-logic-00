// Inputan Soal 1
let x = [1, 2, 3, 4, 5, 6, 8, 9, 10]
let y

for (let i = 1; i <= 10; i++) {
    if (i !== x[(i - 1)]) {
        y = i;
        break;
    }
}

console.log("Soal No.1 \ny = ", y)
console.log("\n-------------------")

// Inputan Soal 2

let X = [1, 5, 6, 1, 0, 1]
let Y = 6
let Z = []
for (let i = 0; i < X.length; i++) {
    for (let j = i + 1; j < X.length; j++) {
        // Z.push([X[i], X[j]])
        X[i] + X[j] === Y ? Z.push([X[i], X[j]]) : null
    }
}

console.log("Soal No.2  \nZ = ", Z)
console.log("\n-------------------")


// Inputan Soal 3

let kursi = 15
let arr1 = [] // buffer array kiri (3)
let arr2 = [] // buffer array kanan (2)
let arr3 = []
let arr30 = []
let arr31 = []

for (let i = 1; i <= kursi; i++) {
    if (i % 5 >= 1 && i % 5 <= 3) {
        arr1.push(i)
        if (arr1.length === 3) {
            arr30.push(arr1)
            arr1 = []
        }
    } else {
        arr2.push(i)
        if (arr2.length === 2) {
            arr31.push(arr2)
            arr2 = []
        }
    }
}
arr3.push(arr30, arr31)

console.log("Soal No.3 \n", arr3)
console.log("\n-------------------")

// Inputan Soal 4
const TotalJarak = 500
const MaxTank = 180

const JarakSpbu = [0, 100, 140, 150, 200, 330, 360, 400]
const Harga = [0, 1000, 2000, 5000, 1000, 6000, 4000, 1000]



const hitungCost = (posSPBU = 0, posisi = 0, totalCost = 0) => {
    if (posisi + MaxTank >= TotalJarak) return

    let lowestCost = -1

    for (let i = posSPBU + 1; i < JarakSpbu.length; i++) {
        if (JarakSpbu[i] - posisi < MaxTank) {
            if (lowestCost === -1) {
                lowestCost = Harga[i]
                posSPBU = i
            } else {

                if (lowestCost > Harga[i]) {
                    (lowestCost = Harga[i])
                    posSPBU = i
                }
            }
        } else {
            break;
        }
    }

    pemakaianBBM = JarakSpbu[posSPBU] - posisi

    totalCost += lowestCost * (pemakaianBBM)
    posisi += pemakaianBBM

    console.log(`Berhenti di kilometer ${posisi}, dengan biaya ${lowestCost} x ${pemakaianBBM} = ${lowestCost * pemakaianBBM}`)
    console.log("totalCost = ", totalCost)
    console.log("---\n")

    return hitungCost(posSPBU, posisi, totalCost)
}

console.log("Soal No.4 \n")

hitungCost()
