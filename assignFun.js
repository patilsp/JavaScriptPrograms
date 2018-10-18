let getMyGrade = function(currentMarks, totalmarks){
    let myPercent = (currentMarks/totalmarks) * 100

    let myGrade=''
    
    if(myPercent >= 90){
        myGrade ='A'
    }else if(myPercent >= 80){
        myGrade ='B'
    }else if(myPercent >= 70){
        myGrade ='C'
    }else {
        myGrade ='F'
    }
    return `Your Grade is ${myGrade} and percentage is ${myPercent}`

   }

   let yourResult = getMyGrade(92, 100)
   console.log(yourResult);   console.log(yourResult);   console.log(yourResult);