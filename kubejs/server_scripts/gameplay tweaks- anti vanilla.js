
ServerEvents.recipes(event => {
  event.replaceInput(
    { output: 'farmersrespite:kettle' }, 
    'minecraft:bucket',           
    'meadow:wooden_water_bucket'      
  ) //kettle recipe fix
});
ServerEvents.recipes((e) => {
  e.remove({ output: "minecraft:redstone" }) /// remove redstone recipes
  e.remove({ output: "minecraft:repeater" }) /// remove repeater recipe
  e.remove({ output: "minecraft:comparator" }) /// remove comparator recipes
  e.remove({ id: "minecraft:bread" }) /// remove redstone torch recipes   
  e.remove({ output: "minecraft:redstone_block" }) /// remove comparator recipes
});
LootJS.modifiers((event) => {
    event.addBlockLootModifier("minecraft:redstone_ore").removeLoot("minecraft:redstone");
	event.addBlockLootModifier("minecraft:deepslate_redstone_ore").removeLoot("minecraft:redstone");
	event.addBlockLootModifier("meadow:alpine_redstone_ore").removeLoot("minecraft:redstone");
///remove all redstone drops xdd fuck you
});
ServerEvents.loaded(event => {
	  event.server.gameRules.set("doInsomnia", false)
	  event.server.gameRules.set("doWardenSpawning ", false)
	  event.server.gameRules.set("naturalRegeneration ", false)
	  
});
ServerEvents.recipes(event => {
  event.replaceInput(
    { output: 'meds_and_herbs:distillery_apparatus' }, 
    'meds_and_herbs:quartz_flask',           
    'meds_and_herbs:flask'      
  ) //distillery recipe fix
});
ServerEvents.recipes((e) => {
  e.remove({ id: "farmersdelight:bread_from_smelting" }) /// remove baking
  e.remove({ id: 'regions_unexplored:barley_smelting' }) /// remove baking

  

});
LootJS.modifiers(event => {
  event
  .addLootTypeModifier(LootType.CHEST).removeLoot("wildernature:blunderbuss");
   //remove stuffs
});
MoreJSEvents.villagerTrades((event) => {

  event.removeTrades({
    firstItem: Ingredient.all,
    secondItem: Ingredient.all,
    outputItem: 'minecraft:enchanted_book'
  })
///no enchanted book
});
LootJS.modifiers(event => {
  event
  .addLootTypeModifier(LootType.CHEST).removeLoot('minecraft:enchanted_book');
 
   //remove stuffs
});
LootJS.modifiers(event => {
  event

   .addLootTypeModifier(LootType.CHEST).removeLoot('minecraft:redstone');
   //remove stuffs
});
LootJS.modifiers((event) => {
    event.addBlockLootModifier("minecraft:beacon").removeLoot("minecraft:beacon");
	
///remove all redstone drops xdd fuck you
});
ServerEvents.recipes((e) => { ///chicken recipes' tweaks
  e.remove({ id: "minecraft:cooked_chicken_from_campfire_cooking" }) /// remove basic chicken recipe
  
  e.remove({ id: "minecraft:cooked_chicken" }) /// remove basic cooked chicken  
    e.remove({ id: "minecraft:cooked_chicken_from_smoking" }) /// remove smoking  
    e.remove({ id: "farmersdelight:cooked_chicken_cuts" }) /// remove furnace cooking for chicken cuts 
	
});
ServerEvents.recipes((e) => { ///beef recipes' tweaks
  e.remove({ id: "minecraft:cooked_beef_from_campfire_cooking" }) /// remove basic beef recipe
  
  e.remove({ id: "minecraft:cooked_beef" }) /// remove basic beef recipe
    e.remove({ id: "minecraft:cooked_beef_from_smoking" }) /// remove smoking  
    e.remove({ id: "butcher:cookedmince_3" }) /// remove campfire cooking for minced beef 
	    e.remove({ id: "butcher:cookedmince_1" }) /// remove furnace cooking for minced beef 
	    e.remove({ id: "butcher:cookedmince_2" }) /// remove smoking cooking for minced beef 

});
ServerEvents.recipes((e) => { ///sheep recipes' tweaks
  e.remove({ id: "minecraft:cooked_mutton_from_campfire_cooking" }) /// remove basic mutton recipe
  
  e.remove({ id: "minecraft:cooked_mutton" }) /// remove basic cooked sheep  
    e.remove({ id: "minecraft:cooked_mutton_from_smoking" }) /// remove smoking  
 e.remove({ id: "farmersdelight:cooked_mutton_chops" }) /// remove furnace cooking for mutton cuts 

});
ServerEvents.recipes((e) => { ///pork recipes' tweaks
  e.remove({ id: "minecraft:cooked_porkchop" }) /// remove basic pork recipe
  
  e.remove({ id: "minecraft:cooked_porkchop_from_smoking" }) /// remove smoked pork  
    e.remove({ id: "minecraft:cooked_porkchop_from_campfire_cooking" }) /// remove campfire
 e.remove({ id: "butcher:bellyrecipe" }) /// remove furnace belly
 e.remove({ id: "butcher:pork_loin_recipe" }) /// remove furnace loin
 e.remove({ id: "butcher:pork_should_recipe" }) /// remove furnace shoulder
 e.remove({ id: "butcher:hamrecipe" }) /// remove furnace ham 
 e.remove({ id: "butcher:porklegrecipe" }) /// remove furnace porkleg
e.campfireCooking('butcher:porkscratchings', 'butcher:pig_skin') ///khong gion

});

ServerEvents.recipes((e) => { ///pork recipes' tweaks
  e.remove({ id: "minecraft:cooked_rabbit" }) /// remove basic pork recipe
  
  e.remove({ id: "minecraft:cooked_rabbit_from_campfire_cooking" }) /// remove smoked pork  
    e.remove({ id: "minecraft:cooked_porkchop_from_campfire_cooking" }) /// remove campfire
 e.remove({ id: "minecraft:cooked_rabbit_from_smoking" }) /// remove furnace belly
 e.remove({ id: "butcher:pork_loin_recipe" }) /// remove furnace loin


});

ItemEvents.rightClicked('meds_and_herbs:syringe_methanol', event => { ///syringe disposal
    event.item.count = 0
});
