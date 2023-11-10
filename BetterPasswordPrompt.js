let SECRET = "abc123";

function main()
{
    let guess;
    while(true){
        let guess = readLine("What is the password? ");
        
        if(guess == SECRET){
            console.log("Password correct");
            break;
        }
        else{
            console.log("Sorry, that password does not match.");
        } 
    }	
}

main();
