function check(x){
    const incomeBox =x ;
    var sum=0;
    for (const a of incomeBox){
        console.log(a);
        if(a!="1" && a!='2' && a!='3' && a!='4' && a!='5' && a!='6' && a!='7' && a!='8' && a!='9' && a!='0'){
            sum++
            
        }
    }
    return sum;
}
console.log(check("1000p"));