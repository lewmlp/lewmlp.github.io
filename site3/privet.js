document.write("<canvas height='400' width='600' id='example'></canvas>");
            
canvas = document.getElementById("example");
context = canvas.getContext("2d");


var img1 = new Image();
img1.onload = function() {
    context.drawImage(img1, 0, 0);
};
var img2 = new Image();
img2.onload = function() {
    context.drawImage(img2, 300, 0);
};
var img3 = new Image();
img3.onload = function() {
    context.drawImage(img3, 0, 200);
};
var img4 = new Image();
img4.onload = function() {
     context.drawImage(img4, 300, 200);
};

img1.src = "https://source.unsplash.com/collection/1127163/300x200";
img2.src = "https://source.unsplash.com/collection/1127160/300x200";
img3.src = "https://source.unsplash.com/collection/1127155/300x200";
img4.src = "https://source.unsplash.com/collection/1124353/300x200";

window.onload = function(){
    var url = "http://quotes.stormconsultancy.co.uk/random.json";
    var request = new XMLHttpRequest();
    request.open('GET', url, true);
    request.onload = function() {
        var event = JSON.parse(request.responseText);
        context.font = "20px Comic Sans MS";
        context.textAlign = "center";
        var text = event.quote.split(" ");
        var k = parseInt(text.length / 4);
        /**
        if (text.length % 4 > 0){
            k = k + 1;
        }
        **/
        var i = 0;
        var p = 0;
        context.strokeStyle = "white";
        context.shadowColor = "black";
        context.shadowOffsetX = 0;
        context.shadowOffsetY = 0;
        context.shadowBlur = 50;
        while (i <= k){
            if (i != k){
                context.strokeText(text[p] + " " + text[p + 1]  + " " + text[p + 2]  + " " + text[p + 3], canvas.width/2, (canvas.height/2)-(16*k)+(i+1)*30);
            }
            else{
                if (text.length - i*4 == 1){
                    context.strokeText(text[p], canvas.width/2, (canvas.height/2)-(16*k)+(i+1)*30);
                }
                if (text.length - i*4 == 2){
                    context.strokeText(text[p] + " " + text[p + 1], canvas.width/2, (canvas.height/2)-(16*k)+(i+1)*30);
                }
                if (text.length - i*4 == 3){
                    context.strokeText(text[p] + " " + text[p + 1]  + " " + text[p + 2], canvas.width/2, (canvas.height/2)-(16*k)+(i+1)*30);
                }
                if (text.length - i*4 == 4){
                    context.strokeText(text[p] + " " + text[p + 1]  + " " + text[p + 2]  + " " + text[p + 3], canvas.width/2, (canvas.height/2)-(16*k)+(i+1)*30);
                }
            }
            i = i + 1;
            p = p + 4;
        }
        
    };
    request.send();
}
