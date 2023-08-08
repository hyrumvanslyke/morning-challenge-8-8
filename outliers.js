function outliers(a){
    let evens = []// create odds array
    let odds = []// create evens array
    for(let i = 0; i< a.length; i++){// loop through original array
        if(a[i] % 2 === 0){// if even push that value to evens array
            evens.push(a[i])
        }else{// if odd push that value to odds array
            odds.push(a[i])
        }
    }
    if(evens.length > odds.length){// if even is the bigger array return odds 
        return odds.join('')
    }else {// if odd is bigger return even
        return evens.join('')
    }
}
console.log(outliers([2, 4, 0, 100, 4, 11, 2602, 36]))// logged for testing
console.log(outliers([160, 3, 1719, 19, 11, 13, -21]))// logged for testing