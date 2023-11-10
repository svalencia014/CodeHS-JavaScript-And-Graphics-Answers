function main() {
	let attempts = 0;
    while(true){
        let roll1 = Randomizer.nextInt(1, 6);
        let roll2 = Randomizer.nextInt(1, 6);
        console.log(`Rolled: ${roll1} ${roll2}`);
	attempts++;
        if(roll1 == 1 && roll2 == 1){
            break; 
        }
    }
	console.log(`It took you ${attempts} rolls to get snake eyes.`);
}

main();
