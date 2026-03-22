ServerEvents.recipes(event => {

	// remove malum coal fragment
	event.remove({ output:"malum:coal_fragment" })
	event.remove({ output:"malum:charcoal_fragment" })

})