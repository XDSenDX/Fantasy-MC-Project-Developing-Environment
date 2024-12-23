ServerEvents.loaded(event => {
  if (event.server.persistentData.gameRules) return
	  event.server.gameRules.set("doInsomnia", false)
	  event.server.gameRules.set("doWardenSpawning ", false)
	  event.server.gameRules.set("naturalRegeneration ", false)
		  event.server.gameRules.set("showDeathMessages ", false)
		  event.server.gameRules.set("announceAdvancements", false)

  event.server.persistentData.gameRules = true
});