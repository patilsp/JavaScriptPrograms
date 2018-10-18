let iAmGlobal = 'someValue'

if(true){
    var iamLocal = 'someMoreValue'
    console.log(iAmGlobal);
    console.log(iamLocal);
    
}
console.log(iamLocal);
console.log(iAmGlobal);