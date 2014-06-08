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
	"8d12+80"
];

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

	log("PTU-GA " + characterID + "[" + attrName + "]: " + JSON.stringify(oAttr));

	return oAttr;
}

function PTU_Get_Attr_Val(characterID, attrName) {
	return PTU_Get_Attr(characterID, attrName).get('current');
}

function PTU_Get_Attr_Val_I(characterID, attrName) {
	return parseInt(PTU_Get_Attr_Val(characterID, attrName));
}

function PTU_Get_Attr_Val_F(characterID, attrName) {
	return parseFloat(PTU_Get_Attr_Val(characterID, attrName));
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

			oMove.moveName = moveName;
			oMove.AC = PTU_Get_Attr_Val_I(attackerID, sPrefix+"_Move_AC");
			oMove.attackType = PTU_Get_Attr_Val(attackerID, sPrefix+"_Move_Type");
			oMove.damageType = PTU_Get_Attr_Val(attackerID, sPrefix+"_Move_DType");
			oMove.accuracyBonus = PTU_Get_Attr_Val_I(attackerID, sPrefix+"_Move_Accuracy") + PTU_Get_Attr_Val_I(attackerID, sPrefix+"_Move_Accuracy_Mod_Perm") + PTU_Get_Attr_Val_I(attackerID, sPrefix+"_Move_Accuracy_Mod_Temp");
			oMove.multiHit = PTU_Get_Attr_Val_I(attackerID, sPrefix+"_Move_MultiHit");
			oMove.damageBase = PTU_Get_Attr_Val_I(attackerID, sPrefix+"_Move_Damage_Base") + PTU_Get_Attr_Val_I(attackerID, sPrefix+"_Move_Damage_Base_Mod_Perm") + PTU_Get_Attr_Val_I(attackerID, sPrefix+"_Move_Damage_Base_Mod_Temp");
			oMove.critRange = PTU_Get_Attr_Val_I(attackerID, sPrefix+"_Move_CritRange") - (PTU_Get_Attr_Val_I(attackerID, sPrefix+"_Move_CritRange_Mod_Perm") + PTU_Get_Attr_Val_I(attackerID, sPrefix+"_Move_CritRange_Mod_Temp"));
			oMove.effectRange = PTU_Get_Attr_Val_I(attackerID, sPrefix+"_Move_Effect_Range") - (PTU_Get_Attr_Val_I(attackerID, sPrefix+"_Move_Effect_Range_Mod_Perm") + PTU_Get_Attr_Val_I(attackerID, sPrefix+"_Move_Effect_Range_Mod_Temp"));
			oMove.effectText = PTU_Get_Attr_Val(attackerID, sPrefix+"_Move_Effects");
			oMove.flavorText = PTU_Get_Attr_Val(attackerID, sPrefix+"_Move_FlavorText");
			oMove.gmInfoText = PTU_Get_Attr_Val(attackerID, sPrefix+"_Move_GMInfo");
			log("PTU-GM (early) oMove: " + JSON.stringify(oMove));
		}
	}

	log("PTU-GM (return) oMove: " + JSON.stringify(oMove));

	return oMove;
}

function PTU_Calc_Attack_Rolls(attackerID, defenderIDs, moveName) {
	log("PTU-CAR attackerID: " + attackerID);

	var attackerAccuracyAttr = PTU_Get_Attr_Val_I(attackerID,"Accuracy");

	var attackerAccuracyModPerm = PTU_Get_Attr_Val_I(attackerID,"Mod_Perm_Accuracy");

	var attackerAccuracyModTemp = PTU_Get_Attr_Val_I(attackerID,"Mod_Temp_Accuracy");

	var attackerAccuracyRollBonus =  attackerAccuracyModPerm + attackerAccuracyModTemp;

	var move = PTU_Get_Move(attackerID, moveName);

	var attackerAccuracy = attackerAccuracyAttr + move.accuracyBonus + attackerAccuracyRollBonus;

	var attackRolls = {
		bonus: attackerAccuracy,
		attack: move,
		evades: {},
	};

	log("PTU-CAR attackRolls: " + JSON.stringify(attackRolls));

	log("PTU-CAR: defenderIDs: " + JSON.stringify(defenderIDs));

	for(var i = 0; i < defenderIDs.length; i++) {

		log("PTU-CAR defenderID: " + defenderIDs[i]);
		
		var evadePhys;
		var evadeSpec;
		var evadeSpeed = PTU_Get_Attr_Val_I(defenderIDs[i], "SpeedEvade");

		var evade;

		if(move.attackType == "physical") {
			log("PTU-CAR: checking physical evasion for " + defenderIDs[i]);
			evadePhys = PTU_Get_Attr_Val_I(defenderIDs[i], "PhysEvade");
			evade = Math.max(evadePhys, evadeSpeed);
			
		}
		else if(move.attackType == "special") {
			log("PTU-CAR: checking special evasion for " + defenderIDs[i]);
			evadeSpec = PTU_Get_Attr_Val_I(defenderIDs[i], "SpecEvade");
			evade = Math.max(evadeSpec, evadeSpeed);
		}
		else {
			log("PTU-CAR: skipping for status move: " + defenderIDs[i]);
			attackRolls.evades[defenderIDs[i]] = undefined;
			continue; //Skip this monster. Possibly add a nag screen for the player?
		}
		log("PTU-CAR~ evade: " + evade);
		attackRolls.evades[defenderIDs[i]] = evade;

		// This is a good time to parse any macro syntax out of the various text blocks.
		attackRolls.attack.flavorText = MacroReplace.selectedCharacter(attackRolls.attack.flavorText, defenderIDs[i]);
		attackRolls.attack.effectText = MacroReplace.selectedCharacter(attackRolls.attack.effectText, defenderIDs[i]);
		attackRolls.attack.gmInfoText = MacroReplace.selectedCharacter(attackRolls.attack.gmInfoText, defenderIDs[i]);

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

	var aID = oAttacker.get('._id');

	log("PTU-PAR aID: " + aID);

	// The only argument to ~attack is #1 = move name
	var attackRolls = PTU_Calc_Attack_Rolls(aID ,defenderIDs, cmdLine[1]);
	var move = attackRolls.attack;

	log("PTU-PAR attackRolls.evades: " + JSON.stringify(attackRolls.evades));


	for(var defenderID in attackRolls.evades) {
		if (attackRolls.evades.hasOwnProperty(defenderID)) {
			var numAttackRolls = move.multiHit;
			if (attackRolls.attack.attackMultiHit == 5) {
				// The crazy 1d8 stuff takes place during the damage calculations
				// But we only roll 1 attack roll for all 5 attacks
				numAttackRolls = 1;
			}
			else
			{
				var rollStr = "/roll ";
				log("PTU-PAR move: " + JSON.stringify(move));
				rollStr += numAttackRolls + "d20";
				log("PTU-PAR: rollStr: " + rollStr);
				sendChat(msg.who, rollStr, function(ops) {
					log("PTU-PAR: about to call ChAR, aID = " + aID);
					PTU_Check_Attack_Roll(ops[0], attackRolls, aID, defenderID);
				});
			}
		}		
	}
}


function PTU_Check_Attack_Roll(rollResult, attackRolls, attackerID, defenderID) {
	log("PTU-ChAR rollResult: " + JSON.stringify(rollResult));
	log("PTU-ChAR attackRolls: " + JSON.stringify(attackRolls));
	log("PTU-ChAR defenderID: " + defenderID);

	var rr = JSON.parse(rollResult.content);
	log("PTU-ChAR rolls content: " + JSON.stringify(rr));		// lol
	log("PTU-ChAR rolls content.rolls: " + JSON.stringify(rr.rolls));

	var attackResult = {
		attackerID: attackerID,
		defenderID: defenderID,
		moveInfo: attackRolls.attack,
		who: rollResult.who,
	};

	var damageBase = attackRolls.attack.damageBase;

	var goal = attackRolls.attack.AC + attackRolls.evades[defenderID];


	if(attackRolls.attack.multiHit == 5) {
		// NOP for now
	}
	else if(attackRolls.attack.multiHit == 2) {

	}
	else {

		var roll = rr.rolls[0];
		log("PTU-ChAR roll: " + JSON.stringify(roll));
		
		var natRoll = roll.results[0].v;
		sendChat("Game Rules Engine", "/w gm " + rollResult.who + " rolled an accuracy check for " + attackRolls.attack.moveName + ". Natural Roll: " + natRoll);

		var modRoll = natRoll + attackRolls.bonus;

		log("PTU-ChAR modRoll= " + modRoll);
		log("PTU-ChAR goal= " + goal);

		if(modRoll >= goal) {

			sendChat("Game Rules Engine", "/w gm It's a hit!");

			if(natRoll >= attackRolls.attack.critRange) {
				sendChat("Game Rules Engine", "/w gm CRITICAL HIT!");
				attackResult.crititalMultiplier = 2;
			}

			if( (attackRolls.attack.effectRange > 0) && (natRoll >= attackRolls.attack.effectRange) ) {
				sendChat("Game Rules Engine", '/w gm Additional effect triggered! Effect: ' + attackRolls.attack.effectText);
				attackResult.effect = attackRolls.attack.effectText;
			}

			attackResult.natRoll = natRoll;
			PTU_Calc_Damage_Roll(attackResult);
		}
		else {
			sendChat("Game Rules Engine", '/w gm ' + rollResult.who + " totally missed!");
		}
		
	}

	
}


function PTU_Calc_Damage_Roll(attackResult) {

	var result  = attackResult;

	result.finalDamage = 10;

	PTU_Display_Result(result);

}

function PTU_Display_Result(result) {

	var powerCard = {
		name: result.moveInfo.moveName,

	};
	var modifiers = {
		replaceRolls: false,
	};


	if(result.crititalMultiplier > 0) {
		powerCard.critical = "IT'S A CRIT!";
	}

	if(result.effect !== undefined) {
		powerCard["Additional Effect"] = result.effect;
	}

	if(result.moveInfo.flavorText !== undefined) {
		powerCard.emote = result.moveInfo.flavorText;
	}
	log("PTU-DR: about to show Card!");
	log("PTU-DR powerCard: " + JSON.stringify(powerCard));
	log("PTU-DR modifiers: " + JSON.stringify(modifiers));

	var fakeMsg = {
		who: result.who,
	}

	log("PTU-DR fakeMsg: " + JSON.stringify(fakeMsg));

	PowerCardScript.showCard(powerCard, modifiers, fakeMsg);
}

function PTU_Init_Character(character) {
	
	for(var prop in PTU_Init_Character_Map) {

		if(PTU_Init_Character_Map.hasOwnProperty(prop)) {

			var attrExist = findObjs({
				_type: "attribute",
				_characterid: character.get("_id"),
				_name: prop,
			});
			if(attrExist.length < 1) {
				var retObj = createObj("attribute", {
					name: prop,
					current: PTU_Init_Character_Map[prop],
					characterid: character.get("_id")
				});
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
});

on("change:attribute:current", function(obj, prev) {
	var charID = obj.get('_characterid');
	var attrName = obj.get('name');

	var physEv;
	var specEv;
	var speedEv;

	log("change-attribute: " + JSON.stringify(obj));

	try {

		switch(attrName) {
		case 'DEF':
			physEv = findObjs({
				_type: "attribute",
				_characterid: charID,
				_name: 'PhysEvade'
			})[0];
			physEv.set('current', Math.min(Math.min(Math.floor(parseInt(obj.get('current')) * PTU_Get_Attr_Val_F(charID, 'DEF_Stage') / 5.0), 6) + PTU_Get_Attr_Val_I(charID, 'Evasion'), 10), 9);
			break;	
		case 'SPDEF':
			specEv = findObjs({
				_type: "attribute",
				_characterid: charID,
				_name: 'SpecEvade'
			})[0];
			specEv.set('current', Math.min(Math.min(Math.floor(parseInt(obj.get('current')) * PTU_Get_Attr_Val_F(charID, 'SPDEF_Stage') / 5.0), 6) + PTU_Get_Attr_Val_I(charID, 'Evasion'), 9));
			break;	
		case 'SPEED':
			speedEv = findObjs({
				_type: "attribute",
				_characterid: charID,
				_name: 'SpeedEvade'
			})[0];
			speedEv.set('current', Math.min(Math.min(Math.floor(parseInt(obj.get('current')) * PTU_Get_Attr_Val_F(charID, 'SPEED_Stage') / 5.0), 6) + PTU_Get_Attr_Val_I(charID, 'Evasion'), 9));
			break;	
		case 'DEF_Stage':
			physEv = findObjs({
				_type: "attribute",
				_characterid: charID,
				_name: 'PhysEvade'
			})[0];
			physEv.set('current', Math.min(Math.min(Math.floor(parseFloat(obj.get('current')) * PTU_Get_Attr_Val_I(charID, 'DEF') / 5.0), 6) + PTU_Get_Attr_Val_I(charID, 'Evasion'), 9));
			break;
		case 'SPDEF_Stage':
			SpecEv = findObjs({
				_type: "attribute",
				_characterid: charID,
				_name: 'SpecEvade'
			})[0];
			SpecEv.set('current', Math.min(Math.min(Math.floor(parseFloat(obj.get('current')) * PTU_Get_Attr_Val_I(charID, 'SPDEF') / 5.0), 6) + PTU_Get_Attr_Val_I(charID, 'Evasion'), 9));
			break;	
		case 'SPEED_Stage':
			speedEv = findObjs({
				_type: "attribute",
				_characterid: charID,
				_name: 'SpeedEvade'
			})[0];
			speedEv.set('current',Math.min( Math.min(Math.floor(parseFloat(obj.get('current')) * PTU_Get_Attr_Val_I(charID, 'SPEED') / 5.0), 6) + PTU_Get_Attr_Val_I(charID, 'Evasion'), 9));
			break;
		case 'Evasion':
			physEv = findObjs({
				_type: "attribute",
				_characterid: charID,
				_name: 'PhysEvade'
			})[0];
			physEv.set('current', Math.min(Math.min(Math.floor(PTU_Get_Attr_Val_I(charID, 'DEF') * PTU_Get_Attr_Val_F(charID, 'DEF_Stage') / 5.0), 6) + parseInt(obj.get('current')), 9));
			specEv = findObjs({
				_type: "attribute",
				_characterid: charID,
				_name: 'SpecEvade'
			})[0];
			specEv.set('current', Math.min(Math.min(Math.floor(PTU_Get_Attr_Val_I(charID, 'SPDEF') * PTU_Get_Attr_Val_F(charID, 'SPDEF_Stage') / 5.0), 6) + parseInt(obj.get('current')), 9));
			speedEv = findObjs({
				_type: "attribute",
				_characterid: charID,
				_name: 'SpeedEvade'
			})[0];
			speedEv.set('current', Math.min(Math.min(Math.floor(PTU_Get_Attr_Val_I(charID, 'SPEED') * PTU_Get_Attr_Val_F(charID, 'SPEED_Stage') / 5.0), 6) + parseInt(obj.get('current')),9));
			break;

	}

	}
	catch(e)
	{
		log('caught error: ' + e.message);
	}
	
});