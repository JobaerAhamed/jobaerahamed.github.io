var _content={header:{mountTo:"_header",type:"h2",data:"Hello 👋"},intro:{type:"p",mountTo:"_container",data:"I am <strong>Jobaer Ahamed</strong>. Web developer. Currently working full time. I will have to fill up this page with texts later. Super bad at UI related work. [Maybe I still dont know HTML/CSS]"},workWith:{type:"ul",mountTo:"_container",data:['Language I "try" to work with:',"🥔 Javascipt","🥔 Python","🥔 PHP","🥔 Go, rust [learning]","🥔 I can not write C but dream about it. Have huge respect for C coders."]},stack:{type:"ul",mountTo:"_container",data:["Tools* that get used the most:","🥔 nodejs, mysql, mongodb, redis, rabbitmq, flask[python]","🥔 docker [for days], elasticstack [for logging+monitoring]"]},interests:{type:"ul",mountTo:"_container",data:["Things I usualy do on free time: "," 🥔 Coding random things"," 🥔 Automation/Scripting"," 🥔 Watching netflix/youtube [Current favorite is 'Adventure Time']"]},contact:{type:"h3",mountTo:"_container",data:"If you want to connect 🤙"},contact_info:{type:"p",mountTo:"_container",data:'<a href = "mailto:contact@jobaerahamed.github.io">contact@jobaerahamed.github.io</a><br><a href="tel:+8801852114440">+8801852114440</a>'},thanks:{type:"h4",mountTo:"_footer",data:"Thank you for reading 🍻"}};function nestElement(t,e,n,o=!1){var a=document.createElement(t);return o&&(a.className=a.id=o),a.innerHTML=e,document.getElementById(n).appendChild(a),a}function handleLists(t,e=!1){var n=document.createElement("ul");e&&(n.className=n.id=e),t.data.forEach(t=>{var e=document.createElement("li"),o=document.createTextNode(t);e.appendChild(o),n.appendChild(e)}),t.mountTo&&document.getElementById(t.mountTo).appendChild(n)}function handleItem(t,e){console.log(),"string"==typeof t.data&&nestElement(t.type,t.data,t.mountTo,e),t.data instanceof Array&&handleLists(t,e)}function parseContent(t){Object.keys(t).forEach(e=>handleItem(t[e],e))}window.onload=function(t){this.parseContent(this._content)};