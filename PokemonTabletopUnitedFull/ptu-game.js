var PTU = PTU || {};
PTU._vars = PTU._vars || {};
PTU._internal = PTU._internal || {};


PTU._internal.createDiceObj = function(numDice, numSides, modifier) {
	return {
		num: numDice,
		sides: numSides,
		mod: modifier,
	};
};

PTU._internal.diceObjToString = function(diceObj) {
	return diceObj.num + "d" + diceObj.sides + "+" + diceObj.mod;
};

PTU._vars.damageBaseTable = [
	undefined,
	PTU._internal.createDiceObj(1,6,1),
	PTU._internal.createDiceObj(1,6,3),
	PTU._internal.createDiceObj(1,6,5),
	PTU._internal.createDiceObj(1,8,6),
	PTU._internal.createDiceObj(1,8,8),
	PTU._internal.createDiceObj(2,6,8),
	PTU._internal.createDiceObj(2,6,10),
	PTU._internal.createDiceObj(2,8,10),
	PTU._internal.createDiceObj(2,10,10),
	PTU._internal.createDiceObj(3,8,10),
	PTU._internal.createDiceObj(3,10,10),
	PTU._internal.createDiceObj(3,12,10),
	PTU._internal.createDiceObj(4,10,10),
	PTU._internal.createDiceObj(4,10,15),
	PTU._internal.createDiceObj(4,10,20),
	PTU._internal.createDiceObj(5,10,20),
	PTU._internal.createDiceObj(5,12,25),
	PTU._internal.createDiceObj(6,12,25),
	PTU._internal.createDiceObj(6,12,30),
	PTU._internal.createDiceObj(6,12,35),
	PTU._internal.createDiceObj(6,12,40),
	PTU._internal.createDiceObj(6,12,45),
	PTU._internal.createDiceObj(6,12,50),
	PTU._internal.createDiceObj(6,12,55),
	PTU._internal.createDiceObj(6,12,60),
	PTU._internal.createDiceObj(7,12,65),
	PTU._internal.createDiceObj(8,12,70),
	PTU._internal.createDiceObj(8,12,80),
];

/* PTU_Type_Effectiveness["offensive_type"]["defensive_type"] = Multiplyer */
PTU._vars.typeEffectiveness = {
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
PTU._vars.initCharacterMap = {
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
	Damage_Reduction_Perm: 0,
	Damage_Reduction_Temp: 0,
	//Init the totals for the stats
	HP_total: 0,
	ATK_total: 0,
	DEF_total: 0,
	SPATK_total: 0,
	SPDEF_total: 0,
	SPEED_total: 0,
	// Need to init Struggle attributes
	Struggle_Name: "Struggle",
	Struggle_Freq: "At Will",
	Struggle_AC: 4,
	Struggle_DType: "normal",
	Struggle_Damage_Base: 4,
	Struggle_Damage_Base_Mod_Perm: 0,
	Struggle_Damage_Base_Mod_Temp: 0,
	Struggle_Type: "physical",
	Struggle_MultiHit: 1,
	Struggle_DamageRoll_Mod_Perm: 0,
	Struggle_DamageRoll_Mod_Temp: 0,
	Struggle_Accuracy: 0,
	Struggle_Accuracy_Mod_Perm: 0,
	Struggle_Accuracy_Mod_Temp: 0,
	Struggle_CritRange: 20,
	Struggle_CritRange_Mod_Perm: 0,
	Struggle_CritRange_Mod_Temp: 0,
	Struggle_Effect_Range: 0,
	Struggle_Effect_Range_Mod_Perm: 0,
	Struggle_Effect_Range_Mod_Temp: 0,
	Struggle_Effects: "",
	Struggle_FlavorText: "I really should have replaced this text with a cool, evocative description of a struggling attack.",
	Struggle_GMInfo: "",
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

	// log("PTU-GA " + characterID + "[" + attrName + "]: " + JSON.stringify(oAttr));

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

	// log("PTU-GM attackerID: " + JSON.stringify(attackerID));

	if (moveName.toLowerCase() == "struggle"){
		oMove.moveName = moveName;
		oMove.AC = PTU_Get_Attr_Val_I(attackerID, "Struggle_AC");
		oMove.attackType = PTU_Get_Attr_Val(attackerID, "Struggle_Type");
		oMove.damageType = PTU_Get_Attr_Val(attackerID, "Struggle_DType");
		oMove.freq = PTU_Get_Attr_Val(attackerID, "Struggle_Freq");
		oMove.accuracyBonus = PTU_Get_Attr_Val_I(attackerID, "Struggle_Accuracy") + PTU_Get_Attr_Val_I(attackerID, "Struggle_Accuracy_Mod_Perm") + PTU_Get_Attr_Val_I(attackerID, "Struggle_Accuracy_Mod_Temp");
		oMove.multiHit = PTU_Get_Attr_Val_I(attackerID, "Struggle_MultiHit");
		oMove.damageBase = PTU_Get_Attr_Val_I(attackerID, "Struggle_Damage_Base") + PTU_Get_Attr_Val_I(attackerID, "Struggle_Damage_Base_Mod_Perm") + PTU_Get_Attr_Val_I(attackerID, "Struggle_Damage_Base_Mod_Temp");
		oMove.damageRollBonus = PTU_Get_Attr_Val_I(attackerID, "Struggle_DamageRoll_Mod_Perm") + PTU_Get_Attr_Val_I(attackerID, "Struggle_DamageRoll_Mod_Temp"); 
		oMove.critRange = PTU_Get_Attr_Val_I(attackerID, "Struggle_CritRange") - (PTU_Get_Attr_Val_I(attackerID, "Struggle_CritRange_Mod_Perm") + PTU_Get_Attr_Val_I(attackerID, "Struggle_CritRange_Mod_Temp"));
		oMove.effectRange = PTU_Get_Attr_Val_I(attackerID, "Struggle_Effect_Range") - (PTU_Get_Attr_Val_I(attackerID, "Struggle_Effect_Range_Mod_Perm") + PTU_Get_Attr_Val_I(attackerID, "Struggle_Effect_Range_Mod_Temp"));
		oMove.effectText = PTU_Get_Attr_Val(attackerID, "Struggle_Effects");
		oMove.flavorText = PTU_Get_Attr_Val(attackerID, "Struggle_FlavorText");
		oMove.gmInfoText = PTU_Get_Attr_Val(attackerID, "Struggle_GMInfo");
		log("Struggle oMove: " + JSON.stringify(oMove));
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

			// log("oAttr " + JSON.stringify(oAttr[0]));

			var sPrefix = oAttr[0].get('name').slice(0,-10);

			// log("sPrefix: " + sPrefix);

			oMove.moveName = moveName;
			oMove.AC = PTU_Get_Attr_Val_I(attackerID, sPrefix+"_Move_AC");
			oMove.attackType = PTU_Get_Attr_Val(attackerID, sPrefix+"_Move_Type");
			oMove.damageType = PTU_Get_Attr_Val(attackerID, sPrefix+"_Move_DType");
			oMove.freq = PTU_Get_Attr_Val(attackerID, sPrefix+"_Move_Freq");
			oMove.accuracyBonus = PTU_Get_Attr_Val_I(attackerID, sPrefix+"_Move_Accuracy") + PTU_Get_Attr_Val_I(attackerID, sPrefix+"_Move_Accuracy_Mod_Perm") + PTU_Get_Attr_Val_I(attackerID, sPrefix+"_Move_Accuracy_Mod_Temp");
			oMove.multiHit = PTU_Get_Attr_Val_I(attackerID, sPrefix+"_Move_MultiHit");
			oMove.damageBase = PTU_Get_Attr_Val_I(attackerID, sPrefix+"_Move_Damage_Base") + PTU_Get_Attr_Val_I(attackerID, sPrefix+"_Move_Damage_Base_Mod_Perm") + PTU_Get_Attr_Val_I(attackerID, sPrefix+"_Move_Damage_Base_Mod_Temp");
			oMove.damageRollBonus = PTU_Get_Attr_Val_I(attackerID, sPrefix+"_Move_DamageRoll_Mod_Perm") + PTU_Get_Attr_Val_I(attackerID, sPrefix+"_Move_DamageRoll_Mod_Temp"); 
			oMove.critRange = PTU_Get_Attr_Val_I(attackerID, sPrefix+"_Move_CritRange") - (PTU_Get_Attr_Val_I(attackerID, sPrefix+"_Move_CritRange_Mod_Perm") + PTU_Get_Attr_Val_I(attackerID, sPrefix+"_Move_CritRange_Mod_Temp"));
			oMove.effectRange = PTU_Get_Attr_Val_I(attackerID, sPrefix+"_Move_Effect_Range") - (PTU_Get_Attr_Val_I(attackerID, sPrefix+"_Move_Effect_Range_Mod_Perm") + PTU_Get_Attr_Val_I(attackerID, sPrefix+"_Move_Effect_Range_Mod_Temp"));
			oMove.effectText = PTU_Get_Attr_Val(attackerID, sPrefix+"_Move_Effects");
			oMove.flavorText = PTU_Get_Attr_Val(attackerID, sPrefix+"_Move_FlavorText");
			oMove.gmInfoText = PTU_Get_Attr_Val(attackerID, sPrefix+"_Move_GMInfo");
			// log("PTU-GM (early) oMove: " + JSON.stringify(oMove));
		}
	}

	// log("PTU-GM (return) oMove: " + JSON.stringify(oMove));

	return oMove;
}

PTU._internal.hasAbility = function(charID, abilityName) {
	var oFilter = {
		_type: "attribute",
		_characterid: charID,
		current: abilityName,
	};

	var oAttr = findObjs(oFilter,{
		caseInsensitive: true
	});

	if (oAttr.length > 0) {
		for(var i = 0; i < oAttr.length; i++) {
			if(oAttr[i].get('name').indexOf("Ability_Name") > 0){
				return true;
			}
		}
	}
	return false;
};

function PTU_Calc_Attack_Rolls(attackerID, defenderID, moveName) {
	// log("PTU-CAR attackerID: " + attackerID);

	var attackerAccuracyAttr = PTU_Get_Attr_Val_I(attackerID,"Accuracy");

	var attackerAccuracyModPerm = PTU_Get_Attr_Val_I(attackerID,"Mod_Perm_Accuracy");

	var attackerAccuracyModTemp = PTU_Get_Attr_Val_I(attackerID,"Mod_Temp_Accuracy");

	var attackerAccuracyRollBonus =  attackerAccuracyModPerm + attackerAccuracyModTemp;

	var move = PTU_Get_Move(attackerID, moveName);

	var attackerAccuracy = attackerAccuracyAttr + move.accuracyBonus + attackerAccuracyRollBonus;

	var attackRolls = {
		bonus: attackerAccuracy,
		attack: move,
	};

	// log("PTU-CAR attackRolls: " + JSON.stringify(attackRolls));

	// log("PTU-CAR: defenderID: " + defenderID);

	

	// log("PTU-CAR defenderID: " + defenderID);
	
	var evadePhys;
	var evadeSpec;
	var evadeSpeed = PTU_Get_Attr_Val_I(defenderID, "SpeedEvade");

	var evade;

	if(move.attackType == "physical") {
		// log("PTU-CAR: checking physical evasion for " + defenderID);
		evadePhys = PTU_Get_Attr_Val_I(defenderID, "PhysEvade");
		evade = Math.max(evadePhys, evadeSpeed);
		
	}
	else if(move.attackType == "special") {
		// log("PTU-CAR: checking special evasion for " + defenderID);
		evadeSpec = PTU_Get_Attr_Val_I(defenderID, "SpecEvade");
		evade = Math.max(evadeSpec, evadeSpeed);
	}
	else {
		// log("PTU-CAR: skipping for status move: " + defenderID);
		attackRolls.evade = undefined;
	}
	// log("PTU-CAR~ evade: " + evade);
	attackRolls.evade = evade;

	// This is a good time to parse any macro syntax out of the various text blocks.
	attackRolls.attack.flavorText = MacroReplace.selectedCharacter(attackRolls.attack.flavorText, attackerID, defenderID);
	attackRolls.attack.effectText = MacroReplace.selectedCharacter(attackRolls.attack.effectText, attackerID, defenderID);
	attackRolls.attack.gmInfoText = MacroReplace.selectedCharacter(attackRolls.attack.gmInfoText, attackerID, defenderID);

	
	return attackRolls;


}

function PTU_Process_Attack_Roll(msg) {

	// log("PTU-PAR msg: " + JSON.stringify(msg));
	
	var attackerIDs = findObjs({
		_type: "character",
		name: msg.who,
	});

	// log("attackerIDs: " + JSON.stringify(attackerIDs));
	


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
		sendChat("Game Rules Engine", msg.who + " You are not authorized to roll for that player!");
		return;
	}

	var cmdLine = msg.content.split("|");

	log("PTU-PAR cmdLine: " + JSON.stringify(cmdLine));

	var defenders = findObjs({
		_type: "character",
		name: cmdLine[2]
	});

	log("PTU-PAR: defenders: " + JSON.stringify(defenders));

	var defenderID= "";

	for(var defI = 0; defI < defenders.length; defI++) {
		defenderID = defenders[0].get('_id');
	}

	log("PTU-PAR: defenderID: " + defenderID);


	// log("moveName: " + cmdLine[1]);
	// log("PTU-PAR attackerIDs: " + JSON.stringify(attackerIDs));
	// log("PTU-PAR msgIndex: " + msgIndex);

	var oAttacker = attackerIDs[msgIndex];

	// log("PTU-PAR attackerID: " + JSON.stringify(oAttacker));

	var aID = oAttacker.get('._id');

	// log("PTU-PAR aID: " + aID);

	// The only argument to ~attack is #1 = move name
	var attackRolls = PTU_Calc_Attack_Rolls(aID ,defenderID, cmdLine[1]);
	var move = attackRolls.attack;

	// log("PTU-PAR attackRolls.evades: " + JSON.stringify(attackRolls.evades));

		
	var numAttackRolls = move.multiHit;
	if (attackRolls.attack.attackMultiHit == 5) {
		// The crazy 1d8 stuff takes place during the damage calculations
		// But we only roll 1 attack roll for all 5 attacks
		numAttackRolls = 1;
	}
	else
	{
		var rollStr = "/roll ";
		// log("PTU-PAR move: " + JSON.stringify(move));
		rollStr += numAttackRolls + "d20";
		// log("PTU-PAR: rollStr: " + rollStr);
		sendChat(msg.who, rollStr, function(ops) {
			// log("PTU-PAR: about to call ChAR, aID = " + aID);
			PTU_Check_Attack_Roll(ops[0], attackRolls, aID, defenderID);
		});
	}

}


function PTU_Check_Attack_Roll(rollResult, attackRolls, attackerID, defenderID) {
	// log("PTU-ChAR rollResult: " + JSON.stringify(rollResult));
	// log("PTU-ChAR attackRolls: " + JSON.stringify(attackRolls));
	 log("PTU-ChAR defenderID: " + defenderID);

	var rr = JSON.parse(rollResult.content);
	// log("PTU-ChAR rolls content: " + JSON.stringify(rr));		// lol
	// log("PTU-ChAR rolls content.rolls: " + JSON.stringify(rr.rolls));

	var attackResult = {
		attackerID: attackerID,
		defenderID: defenderID,
		moveInfo: attackRolls.attack,
		who: rollResult.who,
		crititalMultiplier: 1,
	};

	var damageBase = attackRolls.attack.damageBase;

	var goal = attackRolls.attack.AC + attackRolls.evade;


	if(attackRolls.attack.multiHit == 5) {
		// NOP for now
	}
	else if(attackRolls.attack.multiHit == 2) {

	}
	else {

		var roll = rr.rolls[0];
		// log("PTU-ChAR roll: " + JSON.stringify(roll));
		
		var natRoll = roll.results[0].v;
		//sendChat("Game Rules Engine", "/w gm " + rollResult.who + " rolled an accuracy check for " + attackRolls.attack.moveName + ". Natural Roll: " + natRoll);

		var modRoll = natRoll + attackRolls.bonus;

		// log("PTU-ChAR modRoll= " + modRoll);
		// log("PTU-ChAR goal= " + goal);

		if(modRoll >= goal) {

			//sendChat("Game Rules Engine", "/w gm It's a hit!");

			if(natRoll >= attackRolls.attack.critRange) {
				if(PTU._internal.hasAbility(attackerID, "sniper")) {
					attackResult.crititalMultiplier = 3;
				}
				else {
					attackResult.crititalMultiplier = 2;	
				}				
			}

			if( (attackRolls.attack.effectRange > 0) && (natRoll >= attackRolls.attack.effectRange) ) {
				//sendChat("Game Rules Engine", '/w gm Additional effect triggered! Effect: ' + attackRolls.attack.effectText);
				attackResult.effect = attackRolls.attack.effectText;
			}

			attackResult.natRoll = natRoll;

			// Add 2 to the damage base for STAB after all attack style specific calculations are done if the types match.
			var attackerType1 = PTU_Get_Attr_Val(attackResult.attackerID, "type1");
			var attackerType2 = PTU_Get_Attr_Val(attackResult.attackerID, "type2");
			if ((attackResult.moveInfo.damageType.toLowerCase() === attackerType1.toLowerCase()) || (attackResult.moveInfo.damageType.toLowerCase() === attackerType2.toLowerCase())) {
				attackResult.moveInfo.damageBase = attackResult.moveInfo.damageBase + 2;
			}

			var dmgRoll = JSON.parse(JSON.stringify(PTU._vars.damageBaseTable[attackResult.moveInfo.damageBase]));

			// log("PTU-ChAR dmgRoll: " + JSON.stringify(dmgRoll));
			// log("PTU-ChAR aR-mI-dB: " + attackResult.moveInfo.damageBase);

			

			dmgRoll.num = dmgRoll.num * attackResult.crititalMultiplier;
			dmgRoll.mod = dmgRoll.mod * attackResult.crititalMultiplier;

			// log("PTU-ChAR dmgRoll (after crit): " + JSON.stringify(dmgRoll));


			attackResult.damageRoll = dmgRoll;

			sendChat(attackResult.who, "/roll " + PTU._internal.diceObjToString(attackResult.damageRoll), function(ops) {
				PTU_Check_Damage_Roll(ops[0], attackResult);
			});
			
		}
		else {
			sendChat("Game Rules Engine", rollResult.who + " totally missed!");
		}
		
	}
}


function PTU_Check_Damage_Roll(msg, attackResult) {

	var result  = attackResult;

	 log("PTU-CD ops: " + JSON.stringify(msg));

	var rr = JSON.parse(msg.content);

	// log("PTU-CD rr: " + JSON.stringify(rr));		// lol

	var damage = rr.total;

	 log("PTU-CD roll total: " + JSON.stringify(damage));

	if(attackResult.moveInfo.attackType === 'physical') {
		damage = damage + PTU_Get_Attr_Val_I(attackResult.attackerID, "ATK_total") - PTU_Get_Attr_Val_I(attackResult.defenderID, "DEF_total");
	}
	else if(attackResult.moveInfo.attackType === 'special') {
		damage = damage + PTU_Get_Attr_Val_I(attackResult.attackerID, "SPATK_total") - PTU_Get_Attr_Val_I(attackResult.defenderID, "SPDEF_total");
	}
	else {
		 log("PTU-ChDR serious error, rolling non-physical non special attack");
		return;
	}

	damage = damage + attackResult.moveInfo.damageRollBonus - (PTU_Get_Attr_Val_I(attackResult.defenderID, "Damage_Reduction_Perm") + PTU_Get_Attr_Val_I(attackResult.defenderID, "Damage_Reduction_Temp"));

	// log("PTU-CD damage (before type crap): " + JSON.stringify(damage));

	var aTE = PTU._vars.typeEffectiveness[attackResult.moveInfo.damageType];

	damage = Math.max(damage, 1);		// Attacks always do at least 1 damage before type effectiveness, see page 214

	damage = damage * aTE[PTU_Get_Attr_Val(attackResult.defenderID, "type1")];
	damage = damage * aTE[PTU_Get_Attr_Val(attackResult.defenderID, "type2")];

	// log("PTU-CD damage (after type crap): " + JSON.stringify(damage));

	result.damage = Math.floor(damage);

	PTU_Display_Result(result);

}

function PTU_Display_Result(result) {

	var powerCard = {
		name: result.moveInfo.moveName,
		Damage: result.damage,
		leftsub: result.moveInfo.freq,
		rightsub: result.moveInfo.damageType,
	};
	var modifiers = {
		replaceRolls: false,
	};

	if(result.crititalMultiplier > 1) {
		powerCard.Critical = "IT'S A CRIT!";
	}

	if(result.effect !== undefined) {
		powerCard.Effect = result.effect;
	}

	if(result.moveInfo.flavorText !== undefined) {
		powerCard.emote = result.moveInfo.flavorText;
	}
	// log("PTU-DR: about to show Card!");
	// log("PTU-DR powerCard: " + JSON.stringify(powerCard));
	// log("PTU-DR modifiers: " + JSON.stringify(modifiers));

	var fakeMsg = {
		who: result.who,
	};

	// log("PTU-DR fakeMsg: " + JSON.stringify(fakeMsg));

	PowerCardScript.showCard(powerCard, modifiers, fakeMsg);
}

function PTU_Init_Character(character) {
	
	for(var prop in PTU._vars.initCharacterMap) {

		if(PTU._vars.initCharacterMap.hasOwnProperty(prop)) {

			var attrExist = findObjs({
				_type: "attribute",
				_characterid: character.get("_id"),
				_name: prop,
			});
			if(attrExist.length < 1) {
				var retObj = createObj("attribute", {
					name: prop,
					current: PTU._vars.initCharacterMap[prop],
					characterid: character.get("_id")
				});
				// log(JSON.stringify("PTU-IC init " + prop + " for " + character.get("name") + ": " + JSON.stringify(retObj)));
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

function PTU_Init_Name(name) {
	var allChars = findObjs({
		_type: "character",
		archived: false,
		name: name
	});
	if(allChars.length > 0) {
		PTU_Init_Character(allChars[0]);
	}
	
}


on("chat:message", function(msg) {
  if(msg.type == "api" && msg.content.indexOf("~attack") !== -1) {
    PTU_Process_Attack_Roll(msg);
  }
  else if(msg.type == "api" && msg.content.indexOf("~initAll") !== -1)  {
  	PTU_Init_All_Characters();
  }
  else if(msg.type == "api" && msg.content.indexOf("~initName") !== -1)  {
  	PTU_Init_Name(msg.content.split("|")[1]);
  }
});

on("change:attribute:current", function(obj, prev) {
	var charID = obj.get('_characterid');
	var attrName = obj.get('name');

	var physEv;
	var specEv;
	var speedEv;

	var hpTotal;
	var atkTotal;
	var defTotal;
	var spatkTotal;
	var spdefTotal;
	var speedTotal;

	// // log("change-attribute: " + JSON.stringify(obj));

	try {

		switch(attrName) {
		case 'HP':
			hpTotal = findObjs({
				_type: "attribute",
				_characterid: charID,
				_name: 'HP_total'
			})[0];
			hpTotal.set('current', Math.floor(parseInt(obj.get('current')) * PTU_Get_Attr_Val_F(charID, 'HP_Stage')));
			break;
		case 'HP_Stage':
			hpTotal = findObjs({
				_type: "attribute",
				_characterid: charID,
				_name: 'HP_total'
			})[0];
			hpTotal.set('current', Math.floor(parseFloat(obj.get('current')) * PTU_Get_Attr_Val_I(charID, 'HP')));
			break;
		case 'ATK':
			atkTotal = findObjs({
				_type: "attribute",
				_characterid: charID,
				_name: 'ATK_total'
			})[0];
			atkTotal.set('current', Math.floor(parseInt(obj.get('current')) * PTU_Get_Attr_Val_F(charID, 'ATK_Stage')));
			break;
		case 'ATK_Stage':
			atkTotal = findObjs({
				_type: "attribute",
				_characterid: charID,
				_name: 'ATK_total'
			})[0];
			atkTotal.set('current', Math.floor(parseFloat(obj.get('current')) * PTU_Get_Attr_Val_I(charID, 'ATK')));
			break;	
		case 'DEF':
			defTotal = findObjs({
				_type: "attribute",
				_characterid: charID,
				_name: 'DEF_total'
			})[0];
			defTotal.set('current', Math.floor(parseInt(obj.get('current')) * PTU_Get_Attr_Val_F(charID, 'DEF_Stage')));

			physEv = findObjs({
				_type: "attribute",
				_characterid: charID,
				_name: 'PhysEvade'
			})[0];
			physEv.set('current', Math.min(Math.min(Math.floor(parseInt(obj.get('current')) * PTU_Get_Attr_Val_F(charID, 'DEF_Stage') / 5.0), 6) + PTU_Get_Attr_Val_I(charID, 'Evasion'), 10), 9);
			break;
		case 'DEF_Stage':
			defTotal = findObjs({
				_type: "attribute",
				_characterid: charID,
				_name: 'DEF_total'
			})[0];
			defTotal.set('current', Math.floor(parseFloat(obj.get('current')) * PTU_Get_Attr_Val_I(charID, 'DEF')));

			physEv = findObjs({
				_type: "attribute",
				_characterid: charID,
				_name: 'PhysEvade'
			})[0];
			physEv.set('current', Math.min(Math.min(Math.floor(parseFloat(obj.get('current')) * PTU_Get_Attr_Val_I(charID, 'DEF') / 5.0), 6) + PTU_Get_Attr_Val_I(charID, 'Evasion'), 9));
			break;
		case 'SPATK':
			spatkTotal = findObjs({
				_type: "attribute",
				_characterid: charID,
				_name: 'SPATK_total'
			})[0];
			spatkTotal.set('current', Math.floor(parseInt(obj.get('current')) * PTU_Get_Attr_Val_F(charID, 'SPATK_Stage')));
			break;
		case 'SPATK_Stage':
			spatkTotal = findObjs({
				_type: "attribute",
				_characterid: charID,
				_name: 'SPATK_total'
			})[0];
			spatkTotal.set('current', Math.floor(parseFloat(obj.get('current')) * PTU_Get_Attr_Val_I(charID, 'SPATK')));
			break;		
		case 'SPDEF':
			spdefTotal = findObjs({
				_type: "attribute",
				_characterid: charID,
				_name: 'SPDEF_total'
			})[0];
			spdefTotal.set('current', Math.floor(parseInt(obj.get('current')) * PTU_Get_Attr_Val_F(charID, 'SPDEF_Stage')));

			specEv = findObjs({
				_type: "attribute",
				_characterid: charID,
				_name: 'SpecEvade'
			})[0];
			specEv.set('current', Math.min(Math.min(Math.floor(parseInt(obj.get('current')) * PTU_Get_Attr_Val_F(charID, 'SPDEF_Stage') / 5.0), 6) + PTU_Get_Attr_Val_I(charID, 'Evasion'), 9));
			break;
		case 'SPDEF_Stage':
			spdefTotal = findObjs({
				_type: "attribute",
				_characterid: charID,
				_name: 'SPDEF_total'
			})[0];
			spdefTotal.set('current', Math.floor(parseFloat(obj.get('current')) * PTU_Get_Attr_Val_I(charID, 'SPDEF')));

			SpecEv = findObjs({
				_type: "attribute",
				_characterid: charID,
				_name: 'SpecEvade'
			})[0];
			SpecEv.set('current', Math.min(Math.min(Math.floor(parseFloat(obj.get('current')) * PTU_Get_Attr_Val_I(charID, 'SPDEF') / 5.0), 6) + PTU_Get_Attr_Val_I(charID, 'Evasion'), 9));
			break;	
		case 'SPEED':
			speedTotal = findObjs({
				_type: "attribute",
				_characterid: charID,
				_name: 'SPEED_total'
			})[0];
			speedTotal.set('current', Math.floor(parseInt(obj.get('current')) * PTU_Get_Attr_Val_F(charID, 'SPEED_Stage')));

			speedEv = findObjs({
				_type: "attribute",
				_characterid: charID,
				_name: 'SpeedEvade'
			})[0];
			speedEv.set('current', Math.min(Math.min(Math.floor(parseInt(obj.get('current')) * PTU_Get_Attr_Val_F(charID, 'SPEED_Stage') / 5.0), 6) + PTU_Get_Attr_Val_I(charID, 'Evasion'), 9));
			break;	
		case 'SPEED_Stage':
			speedTotal = findObjs({
				_type: "attribute",
				_characterid: charID,
				_name: 'SPEED_total'
			})[0];
			speedTotal.set('current', Math.floor(parseFloat(obj.get('current')) * PTU_Get_Attr_Val_I(charID, 'SPEED')));

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
		// log('caught error: ' + e.message);
	}
	
});