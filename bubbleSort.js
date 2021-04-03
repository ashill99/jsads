// ES5 

// function swap(arr, idx1, dx2) {
//     var temp = arr[idx1];
//     arr[idx1] = arr[idx2];
//     arr[id2] = temp; 
// }

// // es6; 

// const swap2 = (arr, idx1, idx2) => {
//     [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
// }

// very inefficient way to bubblesort 

// function bubbleSort(arr) {
//     for(let i = 0; i < arr.length; i++){
//         for(let j = 0; j < arr.length; j++){
//             console.log(arr, arr[j], arr[j+1]);
//             if(arr[j] > arr[j+1]){
//                 //SWAP!
//                 let temp = arr[j];
//                 arr[j] = arr[j+1];
//                 arr[j+1] = temp;
//             }
//         }
//     }
//     return arr;
// }

// more efficient way to bubblesort 

function bubbleSort(arr) {
    let noSwaps;
    for(let i = arr.length; i > 0; i--){
        let noSwaps = true;
        for(let j = 0; j < i - 1; j++){
            console.log(arr, arr[j], arr[j+1]);
            if(arr[j] > arr[j+1]){
                //SWAP!
                let temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
                noSwaps = false;
            }
        }
        if(noSwaps) break;
        console.log("One pass complete!")
    }
    return arr;
}

// es6 way of bubblesort 

// function bubbleSort(arr) {
//     const swap = (arr, idx1, idx2) => {
//         [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
//     };

//     for (let i = arr.length; i > 0; i--) {
//         for(let j = 0; j < i - 1; j++) {
//             if (arr[j] > arr[j + 1]) {
//                 swap(arr, j, j + 1);
//             }
//         }
//     }
//     return arr;
// }

bubbleSort([8, 1, 2, 3, 4, 5, 6, 7]);