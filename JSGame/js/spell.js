spells = {
	WOOP: function(){
		if (player.hp > 1){
			player.move(randomPassableTile());
			player.hp = 1;
		}
		tick();
	},
	HEAL: function(){
		if (gold > 0){
			player.hp = maxHp;
		}
		tick();
	}
}