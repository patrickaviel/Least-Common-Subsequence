// LCS
// PATRICK AVIEL R. PERALTA

// function to convert the string to array
function stringToArray(str){
    let temp = [];
    for (let i=0;i<str.length;i++) {
        temp.push(str[i]);
    }
    return temp;
}

function LCS (str1,str2) {
    if(str1 != "" || str2 != ""){
        // declare 2 empty array
        let temp1 = [];
        let temp2 = [];

        // call and store the values from the result of the function
        const arr1 = stringToArray(str1);
        const arr2 = stringToArray(str2);

        // loop and test if the value of array is present in another array
        for(let k=0;k<arr1.length;k++){
            for(let l=0;l<arr2.length;l++){
                if(arr1[k]==arr2[l]){
                    temp1.push(arr1[k]);
                }
            }
        }

        // loop and test if the value of array is present in another array
        for(let l=0;l<arr2.length;l++){
            for(let m=0;m<arr1.length;m++){
                if(arr2[l]==arr1[m]){
                    temp2.push(arr2[l]);
                }
            }
        }

        // remove all the duplicates from the array and return a new array
        let string1 = temp1.filter((c, index) => {
            return temp1.indexOf(c) === index;
        });

        // remove all the duplicates from the array and return a new array
        let string2 = temp2.filter((c, index) => {
            return temp2.indexOf(c) === index;
        });

        // if the 2 array is not the same, return both array
        if(string1.join("") === string2.join("")){
            return string1.join("");
        }else{
            return [string1.join(""),string2.join("")];
        }
    }else{
        return "Invalid Input!"
    }
}

// declare and store value in a variable
const res = LCS("412443","1423");

console.log(res);