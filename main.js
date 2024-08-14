var re = location.search;
console.log(re);
var reurl = re.split("url=");
var url = reurl[1];
// global
console.log(url);

// local
function cap() {
    window.random = Math.floor(Math.random() * 9) + 1;
    var file = `<html><meta charset="UTF-8"><title>auth</title><script src="main.js"></script><body><style>html {background-color: floralwhite;}</style><div style="text-align: center; background-color:floralwhite ;"><br><img src="image/${window.random}.png"><p>Please enter the characters shown in the image above.</p><form><input type="text" name="TEXT" id="TEXT"></form><button onclick="auth()">Auth</button></div></body></html>`;
    document.write(file);
}
function auth() {
    var list = ["ZHJ","CMV","LEX","AGB","NTK","RAS","FGS","PSA","OSK"];
    var text = document.getElementById("TEXT").value;
    console.log(text);
    console.log(list[window.random - 1]);
    if (text == list[window.random - 1]) {
        console.log("Done!");
        window.location.replace(url);
        document.write(`Done!<br><a href=${url}>Return to original page.</a>`);
    }
}
