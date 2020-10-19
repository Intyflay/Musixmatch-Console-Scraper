var lyrics = [];

for (var x of document.getElementsByClassName("lyrics__content__ok")) {lyrics.push(x.innerText)};
for (var x of document.getElementsByClassName("lyrics__content__warning")) {lyrics.push(x.innerText)};
for (var x of document.getElementsByClassName("lyrics__content__error")) {lyrics.push(x.innerText)};

console.warn(lyrics.join("\n"));
