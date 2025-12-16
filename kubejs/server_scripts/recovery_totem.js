ServerEvents.recipes(event => {

	let totem = 'totemofrecovery:totem_of_recovery';
	let compass = 'minecraft:recovery_compass'
	
	event.remove({output:totem});

	event.shaped(
		totem,
		[
			' A ',
			'ABA',
			' A '
		],
		{
			A: 'minecraft:echo_shard',
			B: compass
		}
	).keepIngredient(compass)

});