//////// CREATE RECIPES /////////

ServerEvents.recipes(event => {

	// remove create tuff crushing
	event.remove({ id:"create:crushing/tuff" })
	event.remove({ id:"create:crushing/tuff_recycling" })
    
    //remove scoria & scorchia recipes,
    //to make resources from them rarer
	event.remove({ id:"create:crafting/palettes/scorchia" })
	event.remove({ id:"create:smelting/scoria" })
    
    //redundant recipe
	event.remove({ id:"create:crushing/asurine" })
	event.remove({ id:"create:crushing/crimsite" })
	event.remove({ id:"create:crushing/ochrum" })
	event.remove({ id:"create:crushing/veridium" })

	// Splashing recipe to turn bone blocks into calcite
	// Purely for convenience
	event.recipes.create.splashing('calcite', 'bone_block')

	// Recipe to turn other copper nuggets into create
	event.shapeless("create:copper_nugget",["#forge:nuggets/copper"])

	// Recipe to obtain netherite scrap via crushing
	event.recipes.create.crushing(
		[
			'minecraft:flint',
			Item.of('minecraft:netherite_scrap').withChance(0.001)
		],
		'#create:stone_types/scoria'
	).processingTime(1000)

	// Recipe to obtain ancient debris via compacting
	event.recipes.create.compacting(
		['minecraft:ancient_debris'],
		[
			Fluid.lava(100),
			Item.of('minecraft:netherite_scrap',4),
			Item.of('create:scoria',8)
		]
	).superheated()
	
	// Add recipe to get dirt from path
	event.recipes.create.deploying(
		['minecraft:dirt'], ['minecraft:dirt_path', 'minecraft:dirt']
	).keepHeldItem()

})