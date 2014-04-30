// Wait till the browser is ready to render the game (avoids glitches)
window.requestAnimationFrame(function () {
  new GameManager(4, KeyboardInputManager, HTMLActuator, LocalScoreManager);
});


    var imageList = [
        "http://www.cat2048.com/img/212/cat_2_212x212.gif",
        "http://www.cat2048.com/img/212/cat_4_212x212.gif",
        "http://www.cat2048.com/img/212/cat_8_212x212.gif",
        "http://www.cat2048.com/img/212/cat_16_212x212.gif",
        "http://www.cat2048.com/img/212/cat_32_212x212.gif",
        "http://www.cat2048.com/img/212/cat_64_212x212.gif",
        "http://www.cat2048.com/img/212/cat_128_212x212.gif",
        "http://www.cat2048.com/img/212/cat_256_212x212.gif",
        "http://www.cat2048.com/img/212/cat_512_212x212.gif",
        "http://www.cat2048.com/img/212/cat_1024_212x212.gif",
        "http://www.cat2048.com/img/212/cat_2048_212x212.gif",
        "http://www.cat2048.com/img/114/cat_2_114x114.gif",
        "http://www.cat2048.com/img/114/cat_4_114x114.gif",
        "http://www.cat2048.com/img/114/cat_8_114x114.gif",
        "http://www.cat2048.com/img/114/cat_16_114x114.gif",
        "http://www.cat2048.com/img/114/cat_32_114x114.gif",
        "http://www.cat2048.com/img/114/cat_64_114x114.gif",
        "http://www.cat2048.com/img/114/cat_128_114x114.gif",
        "http://www.cat2048.com/img/114/cat_256_114x114.gif",
        "http://www.cat2048.com/img/114/cat_512_114x114.gif",
        "http://www.cat2048.com/img/114/cat_1024_114x114.gif",
        "http://www.cat2048.com/img/114/cat_2048_114x114.gif",
    ];
    for(var i = 0; i < imageList.length; i++ ) 
    {
        var imageObject = new Image();
        imageObject.src = imageList[i];
    }
