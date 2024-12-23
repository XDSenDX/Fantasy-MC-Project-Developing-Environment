ItemEvents.modification(event => {
    event.modify('minecraft:charcoal', item => { item.burnTime = 700 }) ///charcoal nerf
});
ItemEvents.modification(event => {
    event.modify('minecraft:coal_block', item => { item.burnTime = 6000 }) ///block of coal nerf
});



