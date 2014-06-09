var MacroReplace = MacroReplace || {};

MacroReplace.selectedCharacter = function(message, selectedChar) {
	var parts = message.split(" ");
	for(var i = 0; i < parts.length; i++) {
		var part = parts[i];
		var excess = ""
		if(part.substring(0,11) === "@{selected|") {
			var tailPos = part.indexOf("}");
			if (tailPos !== (part.length - 1)) {
				excess = part.slice(tailPos + 1);
				part = part.slice(0, tailPos);
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


			var selectedObjs = findObjs({                              
			  _pageid: Campaign().get("playerpageid"),                              
			  _type: "graphic",
			  represents: selectedChar,                          
			});

			if(selectedObjs.length > 0) {
				var selected = selectedObjs[0];

				if(selected.hasOwnProperty(cmd)) {
					parts[i] = selected[cmd] + excess;
					continue;
				}
				else if(cmd === "token_name") {
					log("MR -> replacing token name: |" + selected.get('name') + "|");
					parts[i] = selected.get('name') + excess;
					continue;
				}
				else if(cmd === "character_name") {
					var selChar = getObj("character", selectedChar);
					log("MR -> replacing character name: |" + selChar.get('name') + "|");
					parts[i] = selChar.get('name') + excess;
					continue;
				}
				
				var attrs = findObjs({
					_type: "attribute",
					_characterid: selectedChar,
					name: cmd,
				}, {caseInsensitive: true});

				if(attrs.length > 0) {
					var attr = attrs[0];

					if (doMax) {
						parts[i] = attr.get('max') + excess;
					}
					else {
						parts[i] = attr.get('current') + excess;
					}
					continue;
				}
				else {

					log("FAILED TO REPLACE MACRO SYNTAX FOR " + cmd);
					log("attrs: " + JSON.stringify(attrs));

					parts[i] = "~{ERROR: |" + part + excess + "|}~";
					continue;
				}
			}

			parts[i] = "~ No Target Selected ~";
			continue;
		}
	}
	return parts.join(" "); 
};