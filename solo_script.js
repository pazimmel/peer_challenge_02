


//I changed these arrays into objects
var Atticus = {
  name: "Atticus", 
  number: "2405", 
  salary: "47000",
  rating: 3,
  quote: "You never really understand a person until you consider things from his point of view … until you climb into his skin and walk around in it."
};

var Jem = {
  name: "Jem", 
  number: "62347", 
  salary: "63500",
  rating: 4,
  quote: "Attticus is a gentleman, just like me!"
};
var Boo = {
  name: "Boo", 
  number: "11435",
  salary: "54000",
  rating: 3,
  quote: "Will you take me home?"
};
var Scout = {
  name: "Scout", 
  number: "6243", 
  salary: "74750",
  rating: 5,
  quote: "You take that back!"
}; //declare variables

var array = [Atticus, Jem, Boo, Scout];

var employeeObject = {
    processEmployee: function (array){
      var newEmployeeObject = {}; //I want to return an object not an array now
  
        //establishing the object properties
        newEmployeeObject.name = array.name; 

        var employeeNumber = array.number;
        var baseSalary = array.salary;
        var reviewScore = array.rating;

        var bonus = employeeObject.getBaseSTI(reviewScore) + employeeObject.getYearAdjustment(employeeNumber) - employeeObject.getIncomeAdjustment(baseSalary);
        if(bonus > 0.13){ 
            bonus = 0.13;
        }

        //naming the object properties
        //and making sure they are returned 
        newEmployeeObject["percent bonus"] = " "+bonus;
        newEmployeeObject["adjusted salary"] = " "+Math.round(baseSalary * (1.0 + bonus)); 
        newEmployeeObject.bonus = " "+(baseSalary * bonus); 
        
          
      return newEmployeeObject;

    },

    getBaseSTI: function (reviewScore){
      var basePercent;
      switch(reviewScore){
        case 1:
          basePercent = 0;
        break;
        case 2:
          basePercent = 0;
        break;
        case 3:
          basePercent = 0.04;
        break;
        case 4:
          basePercent = 0.06;
        break;
        case 5:
          basePercent = 0.10;
        break;
      }
      return basePercent; 
    },

    getYearAdjustment:function(employeeNumber){
      var yearAdjustment = 0;
      if(employeeNumber.length == 4){
        yearAdjustment = 0.05;
      }
      return yearAdjustment;
    },

    getIncomeAdjustment: function(salary){
      var incomeAdjustment = 0;
      salary = parseInt(salary);
      if(salary > 65000){
        incomeAdjustment = 0.01;
      }
      return incomeAdjustment;
    }
};

$(document).ready(function(){

  $("#container").on('click', '.someButton',function(){
    var quoter;
    console.log($(this).closest('.userContainer').find('p').first().text());
    quoter = eval($(this).closest('.userContainer').find('p').first().text());
    $("#quote").children("p").text(quoter.quote);
  });


  for(var i = 0; i < array.length; i++){

    $("#container").append("<div class='userContainer'></div>");  
    
    var $el = $("#container").children().last(); 
    
    $el.append("<p>"+ employeeObject.processEmployee(array[i]).name + "</p>");
    $el.append("<p>"+ employeeObject.processEmployee(array[i])["percent bonus"] + "</p>");
    $el.append("<p>"+ employeeObject.processEmployee(array[i])["adjusted salary"] + "</p>");
    $el.append("<p>"+ employeeObject.processEmployee(array[i]).bonus + "</p>");

    $el.append("<button class='someButton'>Click Me</button>");
 
}
});


