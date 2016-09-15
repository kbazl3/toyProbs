//Convert the characters &, <, >, " (double quote), and ' (apostrophe), in a string to their corresponding HTML entities.

function convertHTML(str) {
		var newStr = "";
		for (var i = 0; i < str.length; i++) {
        if (str[i] === "&") {
        		newStr += "&amp;";
        } else if (str[i] === "<") {
        		newStr += "&lt; ";
        } else if (str[i] === ">") {
        		newStr += "&gt;";
        } else if (str[i] === "'") {
        		newStr += "&apos;";
        } else if (str[i] === '"') {
        		newStr += "&quot;";
        } else {
        		newStr += str[i]
        }
    }
    console.log(newStr);
  	return newStr;
}
