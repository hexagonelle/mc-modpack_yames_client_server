ServerEvents.recipes(event => {
	
	event.remove({geodes:echo_locator});

});

const buddingList = [
	"quartz",
	"echo_block",
	"lapis",
	"gypsum"
]

const baseCrystalList = [
	"quartz_crystal",
	"echo",
	"lapis_crystal",
	"gypsum_crystal"
]

const geodeList = buddingList.map((e,i)=>[e,b[i]]);

LootJS.modifiers(event => {

	function silkTouchGeodes(event,geode){
		let budding = "geodes:budding_" + geode[0];
		let base = "geodes:" + geode[1] + "_block";

		let buddingWhenSilkTouch = LootEntry.
			of(budding).
			when(c =>
				c.matchMainHand(
					ItemFilter.hasEnchantment("minecraft:silk_touch")
				)
			);

		event
			.addBlockLootModifier(budding)
			.removeLoot(Ingredient.all)
			.addAlternativesLoot(buddingWhenSilkTouch,base);
	}

	geodeList.forEach(geode => {
		silkTouchGeodes(event,geode)
	})

	
});