let _console = document.createElement("div");
_console.style.backgroundColor = "rgba(250, 235, 215, 0.8)"
_console.style.borderColor = "red";
_console.style.borderWidth = "1px";
_console.style.borderStyle = "solid";
_console.style.width = "90%";
_console.style.position = "fixed";
_console.style.left = "50%";
_console.style.transform = "translate(-50%)";
_console.style.bottom = "15%";
_console.style.height = "90px";
_console.style.overflow = "hidden";
_console.style.fontSize = "15px";
_console.style.filter = "invert";
_console.style.zIndex = "999999999";
_console.style.margin = "0";
_console.style.padding = "0";

let text = document.createElement("table");
text.style.display = "block";
text.style.height = "calc(100% - 1em - 3px)"
text.style.overflow = "scroll";
text.style.overflowX = "hidden";
text.style.margin = "0";
text.style.padding = "0";

let input = document.createElement("input");.1
input.style.borderStyle = "none";
input.style.borderTopStyle = "solid";
input.style.borderColor = "red";
input.style.borderWidth = "1px";
input.style.outline = "none";
input.style.position = "absolute";
input.style.boxSizing = "border-box";
input.style.bottom = "0";
input.style.borderRadius = "0";
input.style.backgroundColor = "#00000000";
input.style.width = "100%";
input.style.height = "1em";
input.style.overflowX = "hidden";
input.style.color = "black";
input.style.fontSize = "15px";
input.style.left = "0";
input.style.margin = "1px";
input.style.padding = "1px";
input.style.paddingTop = "3px";
input.style.fontFamily = "monospace";
input.type = "text";
input.spellcheck = "false";
input.addEventListener("keypress", function(event) {
   if (event.keyCode == 13) {
      try {
         console.log(eval(input.value));
      } catch (error) {
         console.error(error);
      }
      input.value = "";
   }
})

document.body.appendChild(_console);
_console.appendChild(text);
_console.appendChild(input);

let iter = 0;
let appendString = function(str, color) {
	 
	 if (iter++ != 0) {
      let hr = document.createElement("hr");
      hr.style.margin = "0";
      hr.style.marginLeft = "5px";
      hr.style.marginRight = "5px";
      hr.style.borderWidth = "1px";
      hr.style.borderColor = "rgba(255, 0, 0, 0.4)";
      hr.style.borderStyle = "solid";
      
      text.appendChild(hr);
   };
   
   let row = document.createElement("tr");
   row.style.margin = "0";
   row.style.padding = "0";

   let data = document.createElement("td");
   row.appendChild(data);
   data.innerText = str;
   data.style.fontFamily = "monospace";
   data.style.fontSize = "15px";
   data.style.color = color;
   data.style.minHeight = "1em";
   data.style.display = "inline-block";
   data.style.margin = "0";
   data.style.padding = "0";
   data.style.marginLeft = "5px";
   data.style.marginRight = "5px";
   text.appendChild(row);
}

const _log = console.log;
console.log = function(val1, ...vals) {
	 if (val1 === undefined) {
      val1 = "undefined";
   } else if (val1 === null) {
      val1 = "null";
   }
   
   let out = val1 instanceof Array ? `[${val1.join(', ')}]`: val1.toString();
   for (val in vals) {
   	  out = out + " " + val instanceof Array ? `[${val.join(', ')}]`: val.toString();
   }
   
   appendString(out, "black");
   _log(val1, ...vals);
}

const _warn = console.warn;
console.warn = function(val1, ...vals) {
	 if (val1 === undefined) {
      val1 = "undefined";
   } else if (val1 === null) {
      val1 = "null";
   }
   
   let out = val1 instanceof Array ? `[${val1.join(', ')}]`: val1.toString();
   for (val in vals) {
   	  out = out + " " + val instanceof Array ? `[${val.join(', ')}]`: val.toString();
   }
   
   appendString(out, "chocolate");
   _warn(val1, ...vals);
}

const _error = console.error;
console.error = function(val1, ...vals) {
	 if (val1 === undefined) {
      val1 = "undefined";
   } else if (val1 === null) {
      val1 = "null";
   }
   
   let out = val1 instanceof Array ? `[${val1.join(', ')}]`: val1.toString();
   for (val in vals) {
   	  out = out + " " + val instanceof Array ? `[${val.join(', ')}]`: val.toString();
   }
   
   appendString(out, "red");
   _error(val1, ...vals);
}

console.log("Console Initialized!");

