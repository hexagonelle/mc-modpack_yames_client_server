ServerEvents.recipes(event => {
	event.shaped("minecraft:torch",
		[
			'A',
			'B',
		],
		{
			A: "minecraft:glowstone_dust",
			B: "#forge:sticks"
		}
	)
	event.shaped("minecraft:torch",
		[
			'A',
			'B',
		],
		{
			A: "minecraft:blaze_powder",
			B: "#forge:sticks"
		}
	)
})