ServerEvents.recipes((e) => { 
  e.remove({ id: "magistuarmory:steel_plate" }) /// remove default steel recipe
  


});



ServerEvents.recipes(event => { 
event.shaped('magistuarmory:steel_plate', [ ///steel recipe change
    'AAA',
	'AAA',
	'AAA'
  ], {
    A: 'magistuarmory:steel_ingot'
  }
)

});
ServerEvents.recipes((e) => { 
  e.remove({ id: "magistuarmory:steel_ring" }) /// remove default steel ring
  


});
ServerEvents.recipes(event => { 
event.shaped('magistuarmory:steel_ring', [ ///steel ring recipe
    'A A',
	' B ',
	'A A'
  ], {
    A: 'magistuarmory:steel_nugget',
	B: 'magistuarmory:steel_ingot'
  }
)

});
ServerEvents.recipes((e) => { 
  e.remove({ id: "magistuarmory:steel_ingot_to_steel_nuggets" }) /// remove default steel nugget
  


});
ServerEvents.recipes((e) => { 
e.shapeless('3x magistuarmory:steel_nugget', [ ///steel nugget 
  'magistuarmory:steel_ingot',
])
  


});
