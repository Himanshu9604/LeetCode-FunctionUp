const titleToNumber = function(columnTitle) {
    let num = 0;
    
    for (let i = 0; i < columnTitle.length; i++) {
        let letterValue = columnTitle.charCodeAt(i) - "A".charCodeAt() + 1;
        num = num * 26 + letterValue;
    }
    
    return num;
}
console.log(titleToNumber(columnTitle = "AB"));