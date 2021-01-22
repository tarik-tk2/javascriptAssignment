
// .....................********kilometerToMeter*******.............
function kilometerToMeter(howManyKilometer){ 
    let oneKilometer=1000; 
    let convertMeter;
   // checking if  given metter is bigger form 0
    if(howManyKilometer>=!0){
        //1 kilo meter eual 1000 meter
        convertMeter=howManyKilometer*oneKilometer;
     
    }else{
        console.log(" kilometer can not be negative or zero plase given true value!")
    }
   return convertMeter;
}


//................*********************budgetCalculator********.........................


function budgetCalculator( numberOfWatch,numberOfPhone,numberOfLaptop){
    let priceOfOneWatch=50;
    let priceOfOneMobile=100;
    let priceOfOneLaptop=500;
    let totalMoneyExpend=0

    
//checking is any of number  given is wrong input
   if(numberOfWatch>=0&&numberOfPhone>=0&&numberOfLaptop>=0){
       //checking evey input is 0  you have to need at least one 
       if(numberOfWatch==0&&numberOfPhone==0&&numberOfLaptop==0){
           console.log("you have to buy at least one any of them plz!!")
       }
       else{
           //sum of my wash cost
         let costOfWtch=priceOfOneWatch*numberOfWatch;
         
       // sum of my mobile cost
        let cosOfMobile=priceOfOneMobile*numberOfPhone;
   // sum of my laptop cost 
    let costOfLaptop=priceOfOneLaptop*numberOfLaptop;
     // total cost 
       totalMoneyExpend =costOfWtch+cosOfMobile+costOfLaptop;
       }
  
   }else{
       console.log(" input can not be negative plz enter valid input");
   }

    return totalMoneyExpend;
}




// .................************hotelCost***************...............................

function hotelCost(howManyDayStay){
    // as  trip is not start so coast is zero we assume
    let totalCoast=0;
    // packeges for user
    let tenDayPerNightCost=100;
    let twentyDayPerNightCost=80;
    let afterTwentyDayPerNightCost=50
    let everyTenDay=10;
     // here i am checking 2 section
     // 1st one days must be bigger form 0;
    // 2nd day can not be negative
    if(howManyDayStay>=!0){
            //checking the day is belongs with in 10 days 
    if(howManyDayStay<=10){
        // as a rules of a hotel there for 1st 10 days coast for per day 100 doller/taka
        totalCoast=howManyDayStay*tenDayPerNightCost;
    }
    // checking is the day is more bigger from 10 days 
    else if(howManyDayStay<=20){
// is the day is bigger from 10 then how manydays you passed here 
// calculating the remaining days

        let remainDays=howManyDayStay-10;
        //  as a rules  1st 10 days 100 doller then next 10 days 80 doller
          let forTenDaysCoast=everyTenDay*tenDayPerNightCost;
          //totaling all day cost 
        totalCoast=forTenDaysCoast+remainDays*twentyDayPerNightCost;

    }else if(howManyDayStay>20){
        //  cheacking the day is bigger 20
           // counting how many days you are there
        let remainDays=howManyDayStay-20;
        //10 days cost 
        let forTenDaysCoast=everyTenDay*tenDayPerNightCost;
        // 20 days cost 
        let forTwentyDaysCost=everyTenDay*twentyDayPerNightCost;
        //total cost 
        totalCoast=forTenDaysCoast+forTwentyDaysCost+remainDays*afterTwentyDayPerNightCost; 
        

    }
    return totalCoast; 

    }
    else{
        console.log( "days can not be negative or 0! plz give  actual days");
    }

}








// .......................*********megaFriend*********........................


function megaFriend(friendsName){

    var nameArray=[...friendsName];
  //1st we decler 1st element is biggest of my fr list 
          
    var biggestName=nameArray[0];
    // trying to decide  array can no be empty 
    if(nameArray.length!=0){
    
    // lopping and compare each index which one is biggest 
    
         for(let index=1;index<nameArray.length;index++){
         
          // checking is given arry index is string or number or ease 

          if(typeof nameArray[index]==="string"){
              
               if(biggestName.length>nameArray[index].length){

                   biggestName=biggestName;

                }else{

            biggestName=nameArray[index];
        }
          }
          
        
     }
     return biggestName;

    }else{
        console.log( "empty array list ! try again  ");
    }
   
}



var array=[12,1234567,"hello",' tamanna'];
console.log("biggest name:"+megaFriend(array));
console.log("totalBudget Needed:"+budgetCalculator(-1,2,3));
console.log("hotelcost:"+hotelCost(-21));
console.log("metter:"+kilometerToMeter(-10));




