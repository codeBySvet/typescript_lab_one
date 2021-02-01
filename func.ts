function str_len (input: String): number{

    return input.length;
} 

console.log(str_len("test 1"));



function str_len_spaces(input: String): number{
    let num:number = input.replace(/\s+/, "").length;
    return num;
}

console.log(str_len_spaces("Test 1"));

function str_len_both(input:string, spaces?:boolean): number{

    let num:number;
    if (spaces){
        num = input.replace(/\s+/, "").length;
    } else{
        num = input.length;
    }
    
    return num;
}
console.log(str_len_both("Test 1"))