/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    let y=x.toString();
    let i=0;

    let j=y.length-1;
    
    let reverse="";
    while(i<=j){
        reverse+=y[j];
        j--;
    }
    return reverse==y? true : false;
    
};
