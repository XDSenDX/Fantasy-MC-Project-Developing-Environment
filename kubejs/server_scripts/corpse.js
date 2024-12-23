LootJS.modifiers((event) => {
    event.addEntityLootModifier("minecraft:cow").replaceLoot("minecraft:beef", "butcher:cowcorpseitem");
	/// cow corpse
});
LootJS.modifiers((event) => {
    event.addEntityLootModifier("minecraft:cow").removeLoot("minecraft:leather");
	/// remove cow leather
});
LootJS.modifiers((event) => {
    event.addEntityLootModifier("minecraft:pig").replaceLoot("minecraft:porkchop", "butcher:pig_corpse_item");
   /// pig corpse
});
LootJS.modifiers((event) => {
    event.addEntityLootModifier("minecraft:pig").removeLoot("immersive_weathering:tallow");
	/// remove pig stuffs
});
LootJS.modifiers((event) => {
    event.addEntityLootModifier("minecraft:sheep").replaceLoot("minecraft:mutton", "butcher:sheep_corpse_item");
	/// sheep corpse
});

LootJS.modifiers((event) => {
    event.addEntityLootModifier("minecraft:chicken").replaceLoot("minecraft:chicken", "butcher:chicken_corpse_item");
	/// chicken corpse
});
LootJS.modifiers((event) => {
    event.addEntityLootModifier("minecraft:chicken").removeLoot("minecraft:feather");
	/// remove feather
});
LootJS.modifiers((event) => {
    event.addEntityLootModifier("minecraft:goat").addLoot("butcher:goat_corpse_item");
	/// goat corpse
});
LootJS.modifiers((event) => {
    event.addEntityLootModifier("minecraft:squid").addLoot("butcher:clored_squid");
	/// squid corpse
});
LootJS.modifiers((event) => {
    event.addEntityLootModifier("minecraft:glow_squid").addLoot("butcher:squidcorpse");
	/// glow squid corpse
});
LootJS.modifiers((event) => {
    event.addEntityLootModifier("minecraft:rabbit").replaceLoot("minecraft:rabbit", "butcher:rabbit_corpse_item");
	/// rabbit corpse
});
LootJS.modifiers((event) => {
    event.addEntityLootModifier("minecraft:rabbit").removeLoot("minecraft:rabbit_hide");
	/// remove hide
});
LootJS.modifiers((event) => {
    event.addEntityLootModifier("minecraft:rabbit").removeLoot("minecraft:rabbit_foot");
	/// remove foot
});
LootJS.modifiers((event) => {
    event.addEntityLootModifier("minecraft:bat").addLoot("butcher:bat_corpse_item");
	/// bat corpse
});
LootJS.modifiers((event) => {
    event.addEntityLootModifier("minecraft:fox").addLoot("butcher:foxcorpseitem");
	/// fox corpse
});
LootJS.modifiers((event) => {
    event.addEntityLootModifier("minecraft:panda").replaceLoot("minecraft:bamboo", "butcher:panda");
	/// panda corpse
});
LootJS.modifiers((event) => {
    event.addEntityLootModifier("minecraft:polar_bear").addLoot("butcher:polarbear_corpse_item");
	/// polar corpse
});
LootJS.modifiers((event) => {
    event.addEntityLootModifier("minecraft:polar_bear").removeLoot("minecraft:cod");
	/// remove cod
});
LootJS.modifiers((event) => {
    event.addEntityLootModifier("minecraft:polar_bear").removeLoot("minecraft:cooked_cod");
	/// remove cooked cod
});
LootJS.modifiers((event) => {
    event.addEntityLootModifier("minecraft:polar_bear").removeLoot("minecraft:salmon");
	/// remove salmon
});
LootJS.modifiers((event) => {
    event.addEntityLootModifier("minecraft:polar_bear").removeLoot("minecraft:cooked_salmon");
	/// remove cooked salmon
});
LootJS.modifiers((event) => {
    event.addEntityLootModifier("minecraft:cow").removeLoot("minecraft:cooked_beef");
	/// remove cooked cow
});
LootJS.modifiers((event) => {
    event.addEntityLootModifier("minecraft:pig").removeLoot("minecraft:cooked_porkchop");
	/// remove cooked pig
});
LootJS.modifiers((event) => {
    event.addEntityLootModifier("minecraft:chicken").removeLoot("minecraft:cooked_chicken");
	/// remove cooked chicken
});
LootJS.modifiers((event) => {
    event.addEntityLootModifier("minecraft:rabbit").removeLoot("minecraft:cooked_rabbit");
	/// remove cooked rabbit
});
LootJS.modifiers((event) => {
    event.addEntityLootModifier("minecraft:cod").removeLoot("minecraft:cooked_cod");
	/// remove cooked cod
});
LootJS.modifiers((event) => {
    event.addEntityLootModifier("minecraft:salmon").removeLoot("minecraft:cooked_salmon");
	/// remove cooked salmon
});
LootJS.modifiers((event) => {
    event.addEntityLootModifier("minecraft:dolphin").addLoot("butcher:dolphincorpseitem");
	/// dolphin corpse
});
LootJS.modifiers((event) => {
    event.addEntityLootModifier("minecraft:dolphin").removeLoot("minecraft:cooked_cod");
	/// remove dolphin cooked cod
});
LootJS.modifiers((event) => {
    event.addEntityLootModifier("minecraft:dolphin").removeLoot("minecraft:cod");
	/// remove dolphin cod
});
LootJS.modifiers((event) => {
    event.addEntityLootModifier("minecraft:cod").replaceLoot("minecraft:cod", "butcher:cod");
	/// cod corpse
});
LootJS.modifiers((event) => {
    event.addEntityLootModifier("minecraft:salmon").replaceLoot("minecraft:salmon", "butcher:salmon");
	/// salmon corpse
});
LootJS.modifiers((event) => {
    event.addEntityLootModifier("minecraft:pufferfish").replaceLoot("minecraft:pufferfish", "butcher:puffercorpse");
	/// pufferfish corpse
});
LootJS.modifiers((event) => {
    event.addEntityLootModifier("minecraft:turtle").addLoot("butcher:turtle_corpse_item");
	/// turtle corpse
});
LootJS.modifiers((event) => {
    event.addEntityLootModifier("minecraft:turtle").removeLoot("minecraft:seagrass");
	/// remove turtle seagrass
});
LootJS.modifiers((event) => {
    event.addEntityLootModifier("minecraft:turtle").removeLoot("minecraft:bowl");
	/// remove turtle bowl
});
  LootJS.modifiers((event) => {
    event
        .addEntityLootModifier("minecraft:llama")
        .entityPredicate((entity) => {
          return entity.variant.serializedName === "brown"
        })
        .addLoot("butcher:brown_llama");
		
/// brown llama corpse 
 }); 
    LootJS.modifiers((event) => {
    event
        .addEntityLootModifier("minecraft:llama")
        .entityPredicate((entity) => {
          return entity.variant.serializedName === "creamy"
        })
        .addLoot("butcher:creamy_llama");
/// creamy llama corpse
  }); 
    LootJS.modifiers((event) => {
    event
        .addEntityLootModifier("minecraft:llama")
        .entityPredicate((entity) => {
          return entity.variant.serializedName === "white"
        })
        .addLoot("butcher:white_llama");
		
/// white llama corpse
  }); 
    LootJS.modifiers((event) => {
    event
        .addEntityLootModifier("minecraft:llama")
        .entityPredicate((entity) => {
          return entity.variant.serializedName === "gray"
        })
        .addLoot("butcher:gray_llama");
/// gray llama corpse
  }); 
 const frogs = Utils.getRegistry("minecraft:frog_variant")
 const coldFrog = frogs.getValue("minecraft:cold")
 const warmFrog = frogs.getValue("minecraft:warm")
 const tempFrog = frogs.getValue("minecraft:temperate")
  LootJS.modifiers((event) => {
    event
        .addEntityLootModifier("minecraft:frog")
        .entityPredicate((entity) => {
          return entity.variant === coldFrog 
        })
        .addLoot("butcher:frog");
  }); 
  LootJS.modifiers((event) => {
    event
        .addEntityLootModifier("minecraft:frog")
        .entityPredicate((entity) => {
          return entity.variant === warmFrog 
        })
        .addLoot("butcher:gray_frog");
  }); 
  LootJS.modifiers((event) => {
    event
        .addEntityLootModifier("minecraft:frog")
        .entityPredicate((entity) => {
          return entity.variant === tempFrog
        })
        .addLoot("butcher:orange_frog");
  }); 
  LootJS.modifiers((event) => {
    event.addEntityLootModifier("meadow:wooly_cow").replaceLoot("minecraft:beef", "butcher:cowcorpseitem");
	/// cow corpse
});
LootJS.modifiers((event) => {
    event.addEntityLootModifier("meadow:wooly_cow").removeLoot("minecraft:leather");
	/// remove cow leather
});
LootJS.modifiers((event) => {
    event.addEntityLootModifier("meadow:water_buffalo").removeLoot("meadow:raw_buffalo_meat");
	/// remove cow leather
});
  LootJS.modifiers((event) => {
    event.addEntityLootModifier("meadow:water_buffalo").removeLoot("minecraft:leather");
	/// remove water buffalo leather
});
LootJS.modifiers((event) => {
    event.addEntityLootModifier("minecraft:cod").replaceLoot("minecraft:cod", "butcher:cod");
   /// pig corpse
});