var MacroReplace = MacroReplace || {};

MacroReplace._internal = MacroReplace._internal || {};

MacroReplace._internal.replacePartByCharID = function(parts, index, charID, attr, excess, doMax) {
	
	if(attr === "character_name") {
		var charObj = getObj("character", charID);
		log("MR -> replacing character name: |" + charObj.get('name') + "|");
		parts[index] = charObj.get('name') + excess;
		return;
	}
	
	var attrs = findObjs({
		_type: "attribute",
		_characterid: charID,
		name: attr,
	}, {caseInsensitive: true});

	if(attrs.length > 0) {
		var attrObj = attrs[0];

		if (doMax) {
			parts[index] = attrObj.get('max') + excess;
		}
		else {
			parts[index] = attrObj.get('current') + excess;
		}
		return;
	}
	else {

		log("attrs: " + JSON.stringify(attrs));

		parts[index] = "~{ERROR: |" + charID + "|" + attr + "|" + excess + "|}~";
		return;
	}
};

MacroReplace.selectedCharacter = function(message, myID, selectedChar) {
	var parts = message.split(" ");
	for(var i = 0; i < parts.length; i++) {
		var part = parts[i];
		var excess = "";
		if(part.substring(0,2) === "@{") {

			var tailPos = part.indexOf("}");
			if (tailPos !== (part.length - 1)) {
				excess = part.slice(tailPos + 1);
				part = part.slice(2, tailPos);
			}
			var cmds = part.split("|");		
			var cmd = cmds[1];

			var doMax = false;

			if (cmds.length === 2) {

			}
			else if(cmds.length === 3) {
				if(cmds[2].toLowerCase() === "max") {
					doMax = true;
				}
			}
			else {
				parts[i] = '~ Malformed Macro Token ~';
				continue;
			}

			log("MR: cmds[0] (name): " + cmds[0]);

			if(cmds[0] === "selected") {
			
				var selectedObjs = findObjs({                              
				  _pageid: Campaign().get("playerpageid"),                              
				  _type: "graphic",
				  represents: selectedChar,                          
				});

				if(selectedObjs.length > 0) {
					var selectedToken = selectedObjs[0];

					if(selectedToken.hasOwnProperty(cmd)) {
						parts[i] = selectedToken[cmd] + excess;
					}
					else if(cmd === "token_name") {
						log("MR -> replacing token name: |" + selectedToken.get('name') + "|");
						parts[i] = selectedToken.get('name') + excess;
					}
					else {
						MacroReplace._internal.replacePartByCharID(parts, i, selectedChar, cmd, excess, doMax);
					}
					continue;
				}
				// If there is not a token with the charID that was passed in, something's fucked anyway, so no need to do anything other than send bats out of the calling function's nose.
			}
			else if (cmds[0] === "me") {
				MacroReplace._internal.replacePartByCharID(parts, i, myID, cmd, excess, doMax);
			}
			else {
				var charObjs = findObjs({
					_type: "character",
					name: cmds[0],
				});
				if (charObjs.length > 0) {
					var charObj = charObjs[0];
					MacroReplace._internal.replacePartByCharID(parts, i, charObj.get('_id'), cmd, excess, doMax);
				}
			}
		
		}			
	}
	return parts.join(" "); 
};