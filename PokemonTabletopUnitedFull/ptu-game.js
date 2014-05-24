var PTU_damageBaseTable = [
	"ZERO IS UNDEFINED",
	"1d6+1",
	"1d6+3",
	"1d6+5",
	"1d8+6",
	"1d8+8",
	"2d6+8",
	"2d6+10",
	"2d8+10",
	"2d10+10",
	"3d8+10",
	"3d10+10",
	"3d12+10",
	"4d10+10",
	"4d10+15",
	"4d10+20",
	"5d10+20",
	"5d12+25",
	"6d12+25",
	"6d12+30",
	"6d12+35",
	"6d12+40",
	"6d12+45",
	"6d12+50",
	"6d12+55",
	"6d12+60",
	"7d12+65",
	"8d12+70",
	"8d12+80" ];

/* PTU_Type_Effectiveness["offensive_type"]["defensive_type"] = Multiplyer */
var PTU_Type_Effectiveness = {
	normal: {
		normal: 1.0,
		fire: 1.0,
		water: 1.0,
		electric: 1.0,
		grass: 1.0,
		ice: 1.0,
		fighting: 1.0,
		poison: 1.0,
		ground: 1.0,
		flying: 1.0,
		psychic: 1.0,
		bug: 1.0,
		rock: 0.5,
		ghost: 0.0,
		dragon: 1.0,
		dark: 1.0,
		steel: 0.5,
		fairy: 1.0,
		none: 1.0
	},
	fire: {
		normal: 1.0,
		fire: 0.5,
		water: 0.5,
		electric: 1.0,
		grass: 2.0,
		ice: 2.0,
		fighting: 1.0,
		poison: 1.0,
		ground: 1.0,
		flying: 1.0,
		psychic: 1.0,
		bug: 2.0,
		rock: 0.5,
		ghost: 1.0,
		dragon: 0.5,
		dark: 1.0,
		steel: 2.0,
		fairy: 0.5,
		none: 1.0
	},
	water: {
		normal: 1.0,
		fire: 2.0,
		water: 0.5,
		electric: 1.0,
		grass: 0.5,
		ice: 1.0,
		fighting: 1.0,
		poison: 1.0,
		ground: 2.0,
		flying: 1.0,
		psychic: 1.0,
		bug: 1.0,
		rock: 2.0,
		ghost: 1.0,
		dragon: 0.5,
		dark: 1.0,
		steel: 1.0,
		fairy: 1.0,
		none: 1.0
	},
	electric: {
		normal: 1.0,
		fire: 1.0,
		water: 2.0,
		electric: 0.5,
		grass: 0.5,
		ice: 1.0,
		fighting: 1.0,
		poison: 1.0,
		ground: 0.0,
		flying: 2.0,
		psychic: 1.0,
		bug: 1.0,
		rock: 1.0,
		ghost: 1.0,
		dragon: 0.5,
		dark: 1.0,
		steel: 1.0,
		fairy: 1.0,
		none: 1.0
	},
	grass: {
		normal: 1.0,
		fire: 0.5,
		water: 2.0,
		electric: 1.0,
		grass: 0.5,
		ice: 1.0,
		fighting: 1.0,
		poison: 0.5,
		ground: 2.0,
		flying: 0.5,
		psychic: 1.0,
		bug: 0.5,
		rock: 2.0,
		ghost: 1.0,
		dragon: 0.5,
		dark: 1.0,
		steel: 0.5,
		fairy: 1.0,
		none: 1.0
	},
	ice: {
		normal: 1.0,
		fire: 0.5,
		water: 0.5,
		electric: 1.0,
		grass: 2.0,
		ice: 0.5,
		fighting: 1.0,
		poison: 1.0,
		ground: 2.0,
		flying: 2.0,
		psychic: 1.0,
		bug: 1.0,
		rock: 1.0,
		ghost: 1.0,
		dragon: 2.0,
		dark: 1.0,
		steel: 0.5,
		fairy: 1.0,
		none: 1.0
	},
	fighting: {
		normal: 2.0,
		fire: 1.0,
		water: 1.0,
		electric: 1.0,
		grass: 1.0,
		ice: 2.0,
		fighting: 1.0,
		poison: 0.5,
		ground: 1.0,
		flying: 0.5,
		psychic: 0.5,
		bug: 0.5,
		rock: 2.0,
		ghost: 0.0,
		dragon: 1.0,
		dark: 2.0,
		steel: 2.0,
		fairy: 0.5,
		none: 1.0
	},
	poison: {
		normal: 1.0,
		fire: 1.0,
		water: 1.0,
		electric: 1.0,
		grass: 2.0,
		ice: 1.0,
		fighting: 1.0,
		poison: 0.5,
		ground: 0.5,
		flying: 1.0,
		psychic: 1.0,
		bug: 1.0,
		rock: 0.5,
		ghost: 0.5,
		dragon: 1.0,
		dark: 1.0,
		steel: 0.0,
		fairy: 2.0,
		none: 1.0
	},
	ground: {
		normal: 1.0,
		fire: 2.0,
		water: 1.0,
		electric: 2.0,
		grass: 0.5,
		ice: 1.0,
		fighting: 1.0,
		poison: 2.0,
		ground: 1.0,
		flying: 0.0,
		psychic: 1.0,
		bug: 0.5,
		rock: 2.0,
		ghost: 1.0,
		dragon: 1.0,
		dark: 1.0,
		steel: 2.0,
		fairy: 1.0,
		none: 1.0
	},
	flying: {
		normal: 1.0,
		fire: 1.0,
		water: 1.0,
		electric: 0.5,
		grass: 2.0,
		ice: 1.0,
		fighting: 2.0,
		poison: 1.0,
		ground: 1.0,
		flying: 1.0,
		psychic: 1.0,
		bug: 2.0,
		rock: 0.5,
		ghost: 1.0,
		dragon: 1.0,
		dark: 1.0,
		steel: 0.5,
		fairy: 1.0,
		none: 1.0
	},
	psychic: {
		normal: 1.0,
		fire: 1.0,
		water: 1.0,
		electric: 1.0,
		grass: 1.0,
		ice: 1.0,
		fighting: 2.0,
		poison: 2.0,
		ground: 1.0,
		flying: 1.0,
		psychic: 0.5,
		bug: 1.0,
		rock: 1.0,
		ghost: 1.0,
		dragon: 1.0,
		dark: 0.0,
		steel: 0.5,
		fairy: 1.0,
		none: 1.0
	},
	bug: {
		normal: 1.0,
		fire: 0.5,
		water: 1.0,
		electric: 1.0,
		grass: 2.0,
		ice: 1.0,
		fighting: 0.5,
		poison: 0.5,
		ground: 1.0,
		flying: 0.5,
		psychic: 2.0,
		bug: 1.0,
		rock: 1.0,
		ghost: 0.5,
		dragon: 1.0,
		dark: 2.0,
		steel: 0.5,
		fairy: 0.5,
		none: 1.0
	},
	rock: {
		normal: 1.0,
		fire: 2.0,
		water: 1.0,
		electric: 1.0,
		grass: 1.0,
		ice: 2.0,
		fighting: 0.5,
		poison: 1.0,
		ground: 0.5,
		flying: 2.0,
		psychic: 1.0,
		bug: 2.0,
		rock: 1.0,
		ghost: 1.0,
		dragon: 1.0,
		dark: 1.0,
		steel: 0.5,
		fairy: 1.0,
		none: 1.0
	},
	ghost: {
		normal: 0.0,
		fire: 1.0,
		water: 1.0,
		electric: 1.0,
		grass: 1.0,
		ice: 1.0,
		fighting: 1.0,
		poison: 1.0,
		ground: 1.0,
		flying: 1.0,
		psychic: 2.0,
		bug: 1.0,
		rock: 1.0,
		ghost: 2.0,
		dragon: 1.0,
		dark: 0.5,
		steel: 1.0,
		fairy: 1.0,
		none: 1.0
	},
	dragon: {
		normal: 1.0,
		fire: 1.0,
		water: 1.0,
		electric: 1.0,
		grass: 1.0,
		ice: 1.0,
		fighting: 1.0,
		poison: 1.0,
		ground: 1.0,
		flying: 1.0,
		psychic: 1.0,
		bug: 1.0,
		rock: 1.0,
		ghost: 1.0,
		dragon: 2.0,
		dark: 1.0,
		steel: 0.5,
		fairy: 0.0,
		none: 1.0
	},
	dark: {
		normal: 1.0,
		fire: 1.0,
		water: 1.0,
		electric: 1.0,
		grass: 1.0,
		ice: 1.0,
		fighting: 0.5,
		poison: 1.0,
		ground: 1.0,
		flying: 1.0,
		psychic: 2.0,
		bug: 1.0,
		rock: 1.0,
		ghost: 2.0,
		dragon: 1.0,
		dark: 0.5,
		steel: 1.0,
		fairy: 0.5,
		none: 1.0
	},
	steel: {
		normal: 1.0,
		fire: 0.5,
		water: 0.5,
		electric: 0.5,
		grass: 1.0,
		ice: 2.0,
		fighting: 1.0,
		poison: 1.0,
		ground: 1.0,
		flying: 1.0,
		psychic: 1.0,
		bug: 1.0,
		rock: 2.0,
		ghost: 1.0,
		dragon: 1.0,
		dark: 1.0,
		steel: 0.5,
		fairy: 2.0,
		none: 1.0
	},
	fairy: {
		normal: 1.0,
		fire: 0.5,
		water: 1.0,
		electric: 1.0,
		grass: 1.0,
		ice: 1.0,
		fighting: 2.0,
		poison: 0.5,
		ground: 1.0,
		flying: 1.0,
		psychic: 1.0,
		bug: 1.0,
		rock: 1.0,
		ghost: 1.0,
		dragon: 2.0,
		dark: 2.0,
		steel: 0.5,
		fairy: 1.0,
		none: 1.0
	},
	none: {
		normal: 1.0,
		fire: 1.0,
		water: 1.0,
		electric: 1.0,
		grass: 1.0,
		ice: 1.0,
		fighting: 1.0,
		poison: 1.0,
		ground: 1.0,
		flying: 1.0,
		psychic: 1.0,
		bug: 1.0,
		rock: 1.0,
		ghost: 1.0,
		dragon: 1.0,
		dark: 1.0,
		steel: 1.0,
		fairy: 1.0,
		none: 1.0
	}
};

//							// Default Map
var PTU_Init_Character_Map = {
	CharType: 0,			// Pokemon-type by default
	Level: 1,
	EXP: 0,
	Body: 0,
	Mind: 0,
	Spirit: 0,
	HP: 10,
	ATK: 5,
	DEF: 5,
	SPATK: 5,
	SPDEF: 5,
	SPEED: 5,
	PhysEvade: 1,
	SpecEvade: 1,
	SpeedEvade: 1,
	Accuracy: 0,
	// Consider doing the skills?
	Mod_Perm_Accuracy: 0,
	Mod_Temp_Accuracy: 0,
};

function PTU_Get_Attr(characterID, attrName) {
	var oAttr = findObjs({
		_type: "attribute",
		_characterid: characterID,
		name: attrName
	});
	if(oAttr.length == 1) {
		oAttr = oAttr[0];
	}

	log("PTU-GA [" + attrName + "]: " + JSON.stringify(oAttr));

	return oAttr;
}

function PTU_Get_Move(attackerID, moveName) {
	var oMove = {};

	log("PTU-GM attackerID: " + JSON.stringify(attackerID));

	if (moveName.toLowerCase() == "struggle"){

	}
	else {

		var oFilter = {
			_type: "attribute",
			_characterid: attackerID,
			current: moveName,
		};

		var oAttr = findObjs(oFilter,{
			caseInsensitive: true
		});

		if (oAttr.length > 0) {

			log("oAttr " + JSON.stringify(oAttr[0]));

			var sPrefix = oAttr[0].get('name').slice(0,-10);

			log("sPrefix: " + sPrefix);

			log("M_T: " + PTU_Get_Attr(attackerID,sPrefix+"_Move_MultiHit").get('current'));

			oMove.moveName = moveName;
			oMove.AC = PTU_Get_Attr(attackerID, sPrefix+"_Move_AC").get('current');
			oMove.attackType = PTU_Get_Attr(attackerID, sPrefix+"_Move_Type").get('current');
			oMove.damageType = PTU_Get_Attr(attackerID, sPrefix+"_Move_DType").get('current');
			oMove.accuracyBonus = PTU_Get_Attr(attackerID, sPrefix+"_Move_AccuracyBonus").get('current');
			oMove.multiHit = PTU_Get_Attr(attackerID,sPrefix+"_Move_MultiHit").get('current');
			log("PTU-GM (early) oMove: " + JSON.stringify(oMove));
		}
	}

	log("PTU-GM (return) oMove: " + JSON.stringify(oMove));

	return oMove;
}

function PTU_Calc_Attack_Rolls(attackerID, defenderIDs, moveName) {
	log("PTU-CAR attackerID: " + attackerID);
	



	var attackerAccuracyAttr = PTU_Get_Attr(attackerID,"Accuracy").current;

	var attackerAccuracyModPerm = PTU_Get_Attr(attackerID,"Mod_Perm_Accuracy").current;

	var attackerAccuracyModTemp = PTU_Get_Attr(attackerID,"Mod_Temp_Accuracy").current;

	var attackerAccuracyRollBonus =  attackerAccuracyModPerm + attackerAccuracyModTemp;

	var attack = PTU_Get_Move(attackerID, moveName);

	var attackerAccuracy = attackerAccuracyAttr + attack.accuracyBonus + attackerAccuracyRollBonus;

	var attackRolls = {
		bonus: attackerAccuracy,
		ac: attack.AC,
		evades: [],
		attackName: attack.moveName,
		attackMultiHit: attack.multiHit,
	};

	log("PTU-CAR attackRolls: " + JSON.stringify(attackRolls));

	log("PTU-CAR: defenderIDs: " + JSON.stringify(defenderIDs));

	for(var i = 0; i < defenderIDs.length; i++) {

		log("PTU-CAR defenderID: " + defenderIDs[i]);
		
		var evadePhys;
		var evadeSpec;
		var evadeSpeed = Math.max(PTU_Get_Attr(defenderIDs[i], "SpeedEvade").current, 6);

		var evade;

		if(attack.attackType == "physical") {
			log("PTU-CAR: checking physical evasion for " + defenderIDs[i]);
			evadePhys = Math.max(PTU_Get_Attr(defenderIDs[i], "PhysEvade").current, 6);
			evade = Math.max(evadePhys, evadeSpeed);
			
		}
		else if(attack.attackType == "special") {
			log("PTU-CAR: checking special evasion for " + defenderIDs[i]);
			evadeSpec = Math.max(PTU_Get_Attr(defenderIDs[i], "SpecEvade").current, 6);
			evade = Math.max(evadeSpec, evadeSpeed);
		}
		else {
			log("PTU-CAR: skipping for status move: " + defenderIDs[i]);
			attackRolls[i] = undefined;
			continue; //Skip this monster. Possibly add a nag screen for the player?
		}

		attackRolls.evades[i] = evade;

		
	}
	return attackRolls;


}

function PTU_Process_Attack_Roll(msg) {

	log("PTU-PAR msg: " + JSON.stringify(msg));
	
	var attackerIDs = findObjs({
		_type: "character",
		name: msg.who,
	});

	log("attackerIDs: " + JSON.stringify(attackerIDs));
	


	var msgIndex = -1;

	for(var mI = 0; mI < attackerIDs.length; mI++) {
		var controllingPlayers = attackerIDs[mI].get('controlledby').split(",");
		for(var i = 0; i < controllingPlayers.length; i++) {
			if(controllingPlayers[i]== msg.playerid) {
				msgIndex = mI;
				break;
			}
		}
	}
	if(msgIndex == -1) {
		sendChat("Game Rules Engine", "/w " + msg.who + " You are not authorized to roll for that player!");
		return;
	}

	

	var defenderIDs = [];
	for(var ii = 0; ii < msg.selected.length; ii++) {
		var selGfxs = msg.selected;
		log("PTU-PAR gfx id: " + selGfxs[ii]._id);
		var oGfx = getObj("graphic", selGfxs[ii]._id);
		log("PTU-PAR oGfx: " + JSON.stringify(oGfx));
		defenderIDs[ii] = oGfx.get('represents');
	}


	var cmdLine = msg.content.split("|");

	log("moveName: " + cmdLine[1]);
	log("PTU-PAR attackerIDs: " + JSON.stringify(attackerIDs));
	log("PTU-PAR msgIndex: " + msgIndex);

	var oAttacker = attackerIDs[msgIndex];

	log("PTU-PAR attackerID: " + JSON.stringify(oAttacker));

	// The only argument to ~attack is #1 = move name
	var attackRolls = PTU_Calc_Attack_Rolls(oAttacker.get('._id'),defenderIDs, cmdLine[1]);

	for(var defenderID = 0; defenderID < attackRolls.evades.length; defenderID++){
		if (attackRolls.attackMultiHit == 5) {
			// Support this later
		}
		else
		{
			var rollStr = "/roll "
			for(var rI = 0; rI < attackRolls.attackMultiHit; rI++){
				rollStr += '1d20+';
			}
			sendChat(msg.who, rollStr, function(ops){
				log("Attack Roll OPS: " + JSON.stringify(ops));
			});
		}
		
	}
	

}

function PTU_Init_Character(character) {
	
	for(var prop in PTU_Init_Character_Map) {

		if(PTU_Init_Character_Map.hasOwnProperty(prop)) {

			var attrExist = findObjs({
				_type: "attribute",
				_characterid: character.get("_id"),
				_name: prop,
			})
			if(attrExist.length < 1) {
				var retObj = createObj("attribute", {
					name: prop,
					current: PTU_Init_Character_Map[prop],
					characterid: character.get("_id")
				})
				log(JSON.stringify("PTU-IC init " + prop + " for " + character.get("name") + ": " + JSON.stringify(retObj)));
			}
		}
	}	
}

function PTU_Init_All_Characters() {
	sendChat("Game Rules Engine", "/w gm Starting to initialize all characters...");

	var allChars = findObjs({
		_type: "character",
		archived: false,
	});
	for(var i = 0; i < allChars.length; i++) {
		PTU_Init_Character(allChars[i]);
	}

	sendChat("Game Rules Engine", "/w gm DONE initializing all characters.");
}

on("chat:message", function(msg) {
  if(msg.type == "api" && msg.content.indexOf("~attack") !== -1) {
    PTU_Process_Attack_Roll(msg);
  }
  else if(msg.type == "api" && msg.content.indexOf("~initAll") !== -1)  {
  	PTU_Init_All_Characters();
  }
})