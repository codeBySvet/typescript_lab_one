function str_len(input) {
    return input.length;
}
console.log(str_len("test 1"));
function str_len_spaces(input) {
    var num = input.replace(/\s+/, "").length;
    return num;
}
console.log(str_len_spaces("Test 1"));
function str_len_both(input, spaces) {
    var num;
    if (spaces) {
        num = input.replace(/\s+/, "").length;
    }
    else {
        num = input.length;
    }
    return num;
}
console.log(str_len_both("Test 1"));
