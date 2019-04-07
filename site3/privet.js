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