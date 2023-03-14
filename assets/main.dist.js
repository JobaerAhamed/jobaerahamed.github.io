let _content = {
  picture: {
    mountTo: "_header",
    type: "h2",
    data: '<img src="/assets/images/me.webp" alt="Jobaer" width="200" height="200">',
  },
  header: { mountTo: "_header", type: "h2", data: "Hello" },
  intro: {
    type: "p",
    mountTo: "_container",
    data:
      "I am <strong>Jobaer Ahamed</strong>. Interested in software development(Private/Open Source). I am working as web developer for few years now.",
  },
  workWith: {
    type: "ul",
    mountTo: "_container",
    data: [
      "Language I try to work with:",
      "🥔 Javascipt & Typescript",
      "🥔 PHP",
      "🥔 Python",
      "🥔 Rust/C [learning]",
    ],
  },
  stack: {
    type: "ul",
    mountTo: "_container",
    data: [
      "Items I try to use:",
      "🥔 JS/TS: [NodeJS, NestJS, NextJS, React]",
      "🥔 DB: [Mysql, Mongodb, Redis]",
      "🥔 Python: [Flask, Django]",
      "🥔 PHP: [Laravel, Wordpress]",
      "🥔 Tools: [Docker, ElasticStack, Jenkins, Jest, Selenium, cPanel, AWS]",
    ],
  },
  interests: {
    type: "ul",
    mountTo: "_container",
    data: [
      "Things I usualy do on free time: ",
      "🥔 Coding random things",
      "🥔 Learning/Experimenting with new technology",
      "🥔 Automation/Scripting",
      "🥔 Watching netflix/youtube [Current favorite is 'Adventure Time']",
      "🥔 Browse memes on 9gag",
    ],
  },
  contact: {
    type: "h3",
    mountTo: "_container",
    data: "If you want to connect 🤙",
  },
  contact_info: {
    type: "p",
    mountTo: "_container",
    data:
      '<a href = "mailto:jobaerahamedrobin@gmail.com">jobaerahamedrobin@gmail.com</a>',
  },
  thanks: { type: "h4", mountTo: "_footer", data: "Thank you for reading🍻" },
};
function nestElement(t, e, n, o = !1) {
  let a = document.createElement(t);
  return (
    o && (a.className = a.id = o),
    (a.innerHTML = e),
    document.getElementById(n).appendChild(a),
    a
  );
}
function handleLists(t, e = !1) {
  let n = document.createElement("ul");
  e && (n.className = n.id = e),
    t.data.forEach((t) => {
      let e = document.createElement("li"),
        o = document.createTextNode(t);
      e.appendChild(o), n.appendChild(e);
    }),
    t.mountTo && document.getElementById(t.mountTo).appendChild(n);
}
function handleItem(t, e) {
    "string" == typeof t.data && nestElement(t.type, t.data, t.mountTo, e),
    t.data instanceof Array && handleLists(t, e);
}
function parseContent(t) {
  Object.keys(t).forEach((e) => handleItem(t[e], e));
}
window.onload = function () {
  this.parseContent(_content);
};
