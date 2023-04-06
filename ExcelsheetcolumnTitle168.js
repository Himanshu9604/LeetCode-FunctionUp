const convertToTitle = function(columnNumber) {
    let title = "";
    
    for (; columnNumber > 0; columnNumber = Math.floor((columnNumber - 1) / 26)) {
        let remainder = (columnNumber - 1) % 26;
        let letter = String.fromCharCode(remainder + "A".charCodeAt());
        title = letter + title;
    }
    
    return title;
}
console.log(convertToTitle(columnNumber = 28));