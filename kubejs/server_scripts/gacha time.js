LootJS.modifiers((event) => {
    event.addBlockLootModifier("minecraft:coal_ore").removeLoot("minecraft:coal");
	/// remove coal
});
LootJS.modifiers((event) => {
    event.addBlockLootModifier("minecraft:deepslate_coal_ore").removeLoot("minecraft:coal");
	/// remove coal
});
LootJS.modifiers((event) => {
    event.addBlockLootModifier("meadow:alpine_coal_ore").removeLoot("minecraft:coal");
	/// remove coal
});
LootJS.modifiers((event) => {  ///coal dropp rate
    event.addBlockLootModifier("meadow:alpine_coal_ore")
		.randomChance(0.3)
	   .addWeightedLoot([
		
            Item.of("minecraft:coal").withChance(100),
		
	
        ]);
});
LootJS.modifiers((event) => {  ///coal dropp rate
    event.addBlockLootModifier("minecraft:coal_ore")
		.randomChance(0.5)
	   .addWeightedLoot([
		
            Item.of("minecraft:coal").withChance(100),
		
	
        ]);
});
LootJS.modifiers((event) => { ///coal drop rate
    event.addBlockLootModifier("minecraft:deepslate_coal_ore")
		.randomChance(0.7)
	   .addWeightedLoot([
		
            Item.of("minecraft:coal").withChance(100),
			
			
        ]);
});
LootJS.modifiers((event) => {       ///diamond drop rate
    event.addBlockLootModifier("minecraft:diamond_ore")
		.removeLoot('*')
		.randomChance(0.80)
	   .addWeightedLoot([
	
			Item.of("realisticforging:carveddiamondore").withChance(35),

			Item.of("minecraft:gravel").withChance(50),

        ]);
});
LootJS.modifiers((event) => {       ///alpine diamond drop rate
    event.addBlockLootModifier("meadow:alpine_diamond_ore")
		.removeLoot('*')
		.randomChance(0.80)
	   .addWeightedLoot([
	
			Item.of("realisticforging:carveddiamondore").withChance(30),

			Item.of("minecraft:gravel").withChance(50),

        ]);
});
LootJS.modifiers((event) => { ///deepslate diamond drop rate
    event.addBlockLootModifier("minecraft:deepslate_diamond_ore")
		.removeLoot('*')
		.randomChance(0.95)
	   .addWeightedLoot([
		
            Item.of("realisticforging:carveddiamonddeepslate").withChance(40),

			Item.of("minecraft:gravel").withChance(70),
			
        ]);
});
LootJS.modifiers((event) => {
    event.addBlockLootModifier("minecraft:emerald_ore") ///emerald drop rate
		.removeLoot('*')
		.randomChance(0.95)
	   .addWeightedLoot([
		
            Item.of("realisticforging:carvedemeraldblock").withChance(45),

			Item.of("minecraft:gravel").withChance(70),
			
        ]);
});
LootJS.modifiers((event) => {
    event.addBlockLootModifier("meadow:alpine_emerald_ore") ///emerald alpine drop rate
		.removeLoot('*')
		.randomChance(0.95)
	   .addWeightedLoot([
		
            Item.of("realisticforging:carvedemeraldblock").withChance(40),

			Item.of("minecraft:gravel").withChance(70),
			
        ]);
});
LootJS.modifiers((event) => {
    event.addBlockLootModifier("minecraft:deepslate_emerald_ore") ///deepslate emerald drop rate
		.removeLoot('*')
		.randomChance(0.95)
	   .addWeightedLoot([
		
            Item.of("realisticforging:carvedemeralddeepslate").withChance(60),

			Item.of("minecraft:gravel").withChance(70),
			
        ]);
});
LootJS.modifiers((event) => {
    event.addBlockLootModifier("minecraft:gold_ore") ///gold drop rate
		.removeLoot('*')
		.randomChance(0.75)
	   .addWeightedLoot([
		
            Item.of("realisticforging:rawgoldore").withChance(25),

			Item.of("minecraft:gravel").withChance(70),
			
        ]);
});
LootJS.modifiers((event) => {
    event.addBlockLootModifier("minecraft:deepslate_gold_ore") ///deepslate gold drop rate
		.removeLoot('*')
		.randomChance(0.8)
	   .addWeightedLoot([
		
            Item.of("realisticforging:rawgoldore").withChance(30),

			Item.of("minecraft:gravel").withChance(70),
			
        ]);
});
LootJS.modifiers((event) => {
    event.addBlockLootModifier("minecraft:nether_gold_ore") ///nether gold drop rate
		.removeLoot('*')
		
		.randomChance(0.2)
	   .addWeightedLoot([
		
            Item.of("realisticforging:rawgoldore").withChance(10),

			
        ]);
});
LootJS.modifiers((event) => {
    event.addBlockLootModifier("meadow:alpine_gold_ore") ///meadow gold drop rate
		.removeLoot('*')
		.randomChance(0.8)
	   .addWeightedLoot([
		
            Item.of("realisticforging:rawgoldore").withChance(20),

			Item.of("minecraft:gravel").withChance(70),

			
        ]);
});
LootJS.modifiers((event) => {
    event.addBlockLootModifier("minecraft:copper_ore") ///copper drop rate
		.removeLoot("*")
		.randomChance(0.85)
	   .addWeightedLoot([
		
            Item.of("realisticforging:copperore").withChance(50),

			Item.of("minecraft:gravel").withChance(70),

			
        ]);
});
LootJS.modifiers((event) => {
    event.addBlockLootModifier("minecraft:deepslate_copper_ore") ///deepslate copper drop rate
		.removeLoot("*")
		.randomChance(0.85)
	   .addWeightedLoot([
		
            Item.of("realisticforging:copperore").withChance(60),

			Item.of("minecraft:gravel").withChance(70),

			
        ]);
});
LootJS.modifiers((event) => {
    event.addBlockLootModifier("meadow:alpine_copper_ore") ///meadow copper drop rate
		.removeLoot("*")
		.randomChance(0.85)
	   .addWeightedLoot([
		
            Item.of("realisticforging:copperore").withChance(45),

			Item.of("minecraft:gravel").withChance(70),

			
        ]);
});
LootJS.modifiers((event) => {
    event.addBlockLootModifier("minecraft:iron_ore") ///iron drop rate
		.removeLoot("*")
		.randomChance(0.85)
	   .addWeightedLoot([
		
            Item.of("realisticforging:raw_iron_ore").withChance(30),

			Item.of("minecraft:gravel").withChance(70),

			
        ]);
});
LootJS.modifiers((event) => {
    event.addBlockLootModifier("minecraft:deepslate_iron_ore") ///deepslate iron drop rate
		.removeLoot("*")
		.randomChance(0.85)
	   .addWeightedLoot([
		
            Item.of("realisticforging:raw_iron_ore").withChance(40),

			Item.of("minecraft:gravel").withChance(70),

			
        ]);
});
LootJS.modifiers((event) => {
    event.addBlockLootModifier("meadow:alpine_iron_ore") ///meadow iron drop rate
		.removeLoot("*")
		.randomChance(0.85)
	   .addWeightedLoot([
		
            Item.of("realisticforging:raw_iron_ore").withChance(40),

			Item.of("minecraft:gravel").withChance(70),

			
        ]);
});