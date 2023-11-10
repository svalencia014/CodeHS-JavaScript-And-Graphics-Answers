let STARTING_ITEMS_IN_INVENTORY = 20;

function main(){
    while(STARTING_ITEMS_IN_INVENTORY >= 1){
        console.log("We have " + STARTING_ITEMS_IN_INVENTORY + " items in inventory.");
        let buy = readInt("How many would you like to buy? ");
        if(buy <= STARTING_ITEMS_IN_INVENTORY)
        {
            STARTING_ITEMS_IN_INVENTORY = STARTING_ITEMS_IN_INVENTORY - buy;
            console.log("Now we have " + STARTING_ITEMS_IN_INVENTORY + " left.");
			console.log("");
        }
        
        if(buy > 20)
        {
            console.log("There is not enough in inventory for that purchase.");
			console.log("");
        }
        
        if(STARTING_ITEMS_IN_INVENTORY == 0)
        {
            console.log("All out!");
        }
    }
    
}

main();
