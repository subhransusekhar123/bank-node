const readline= require('node:readline');
const { stdin: input, stdout: output } = require('node:process');
const rl = readline.createInterface({input,output})

let accountbalance = 9000000;
let details = []



rl.question('what is your name , sir ? ',(name)=>{
    console.log(`thanks for coming to our bank ,mr ${name}`)
    rl.question("dou u have any account(give input \"a\") or do u want to open an accunt?(give input \"b\") ",(res)=>{
        if(res =="a"){
            rl.question('how can i help sir? credit(type "c") or debit("d")', (type)=>{

                if(type == "c"){
                    console.log('helo c')
                    rl.question("enter amount ? ",(amount)=>{
                        accountbalance = accountbalance + Number(amount);
                        console.log(`${amount} credited from your account . your account balance is  ${accountbalance}rs.` )
                        rl.close()
            
                    })
                }else{
                    rl.question("enter amount ?",(amount)=>{
                        accountbalance = accountbalance - Number(amount);
                        console.log(`${amount} debited from your account . only  ${accountbalance}rs left.` )
                        rl.close()
                    })
                   
                }
            })
        }else{
            rl.question('do u want to open account if yes (y) and if no(n)',(res)=>{
                if(res == "y"){
                    rl.question('what is your name ',(name)=>{
                        rl.question('what is your age ?',(age)=>{
                            rl.question("what is your address ",(address)=>{
                                details.push(name,age,address)
                                console.log(details)
                                rl.close()

                            })
                        })

                      
                    })

                }else{
                    console.log('thank u for visiting our bank let us know how can we update.')
                    rl.close()

                }
            })
            
        }
    })
   
    

})

// rl.question('how can i help sir? credit(type "c") or debit("d")', (type)=>{

//     if(type == "c"){
//         console.log('helo c')
//         rl.question("enter amount ? ",(amount)=>{
//             accountbalance = accountbalance + Number(amount);
//             console.log(`${amount} credited from your account . your account balance is  ${accountbalance}rs.` )
//             rl.close()

//         })
//     }else{
//         rl.question("enter amount ?",(amount)=>{
//             accountbalance = accountbalance - Number(amount);
//             console.log(`${amount} debited from your account . only  ${accountbalance}rs left.` )
//             rl.close()
//         })
       
//     }
// })

