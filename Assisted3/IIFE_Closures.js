
const empId = (function() {
    let count = 0;
    return function() {
      ++count;
      return `emp${count}`;
    };
  })();
  
  console.log("New Emplyee IDs are listed here");
  console.log("Karthik: "+empId()); 
  console.log("Rohit: "+empId()); 
  console.log("Virat: "+empId());
   


  console.log("\n"); 
  function fullName(firstName, lastName, callback){
    console.log("My name is " + firstName + " " + lastName);
    callback(lastName);
  }
  
  var greeting = function(ln){
    console.log('Welcome ' + ln);
  };
  
  fullName("Karthik", "Vishnu", greeting);
  console.log("\n");
  fullName("Rohit", "Sharma", greeting);
  console.log("\n");
  fullName("Virat", "Kohli", greeting);
  
