var backimg = [
"url(https://s2.loli.net/2022/06/17/bKUOg9pnfqWkhyE.jpg)",
"url(https://s2.loli.net/2022/06/17/u7IwhTN5debKjWZ.jpg)",
"url(https://s2.loli.net/2022/06/17/bKUOg9pnfqWkhyE.jpg)",
"url(https://s2.loli.net/2022/05/22/FsMvo6mDnbPra1i.png)",
"url(https://s2.loli.net/2022/09/07/cOT3ioRNJLkBMVf.jpg)",
"url(https://s2.loli.net/2023/08/10/1xvXpzsGIProy6M.jpg)"
]

var bgindex = Math.floor(Math.random() * backimg.length);

document.getElementById("web_bg").style.backgroundImage = backimg[bgindex];
