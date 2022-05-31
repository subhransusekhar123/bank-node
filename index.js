const readline =require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  
  const userData={
    
  }
  
  


  
  function RestaurantBooking(){
    readline.question(`What's your name?`, name => {
        userData.name=name;
        getOrder(function(order){
            userData.order=order;
              readline.close();
            console.log(`You ordered `,order);
          });
        });
  }


  function getOrder(cb){
     readline.question(`What you want to order?\n`, order => {
    order
       cb(order) 
  });

  }
  
  RestaurantBooking();