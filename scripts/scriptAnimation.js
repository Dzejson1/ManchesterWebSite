function Initialize() {
    var canvas = document.getElementById('pitch');
    var ctx = canvas.getContext('2d');

    var pitch = {
        draw : function () {

            //Spoljnja linija
            ctx.beginPath();
            ctx.rect(0,0, canvas.width, canvas.height);
            ctx.fillStyle = "#060";
            ctx.fill();
            ctx.lineWidth = 1;
            ctx.strokeStyle = "#FFF";
            ctx.stroke();
            ctx.closePath();

            ctx.fillStyle = "#FFF";

            // Srednja linija
            ctx.beginPath();
            ctx.moveTo(canvas.width / 2, 0);
            ctx.lineTo(canvas.width / 2, canvas.height);
            ctx.stroke();
            ctx.closePath();

            //Srednji krug
            ctx.beginPath()
            var gradient = ctx.createRadialGradient(canvas.width / 2, canvas.height / 2, 2, canvas.width / 2, canvas.height / 2, 60);
            gradient.addColorStop(0, 'white');
            gradient.addColorStop(1, 'green');
            ctx.arc(canvas.width / 2, canvas.height / 2, 60, 0, 2*Math.PI, false);
            ctx.fillStyle = gradient;
            ctx.fill();
            ctx.stroke();
            ctx.closePath();


            //Srednja tacka
            ctx.beginPath()
            ctx.arc(canvas.width / 2, canvas.height / 2, 2, 0, 2*Math.PI, false);
            ctx.fill();
            ctx.closePath();

            //Domaci penal box
            ctx.beginPath();
            ctx.rect(0, (canvas.height - 322) / 2, 132, 322);
            ctx.stroke();
            ctx.closePath();


            //Domaci gol box
            ctx.beginPath();
            var gradient1= ctx.createLinearGradient(66, (canvas.height - 146) / 2, 0, (canvas.height - 146) / 2);
            gradient1.addColorStop(0, 'white');
            gradient1.addColorStop(1, 'green');
            ctx.fillStyle = gradient1;
            ctx.rect(0, (canvas.height - 146) / 2, 44, 146);
            ctx.fill();
            ctx.stroke();
            ctx.closePath();


            //Domaci gol
            ctx.beginPath();
            ctx.moveTo(1, (canvas.height / 2) - 22);
            ctx.lineTo(1, (canvas.height / 2) + 22);
            ctx.lineWidth = 2;
            ctx.stroke();
            ctx.closePath();
            ctx.lineWidth = 1;

            //Domaci penal tacka
            ctx.beginPath()
            ctx.arc(88, canvas.height / 2, 1, 0, 2*Math.PI, true);
            ctx.fill();
            ctx.closePath();

            //Domaci srednji krug
            ctx.beginPath()
            ctx.arc(88, canvas.height / 2, 73, 0.29*Math.PI, 1.71*Math.PI, true);
            ctx.stroke();
            ctx.closePath();

            //Gost penal box
            ctx.beginPath();
            ctx.rect(canvas.width-132, (canvas.height - 322) / 2, 132, 322);
            ctx.stroke();
            ctx.closePath();


            //Gost gol box
            ctx.beginPath();
            var gradient= ctx.createLinearGradient(canvas.width-66, (canvas.height - 146) / 2, canvas.width, (canvas.height - 146) / 2);
            gradient.addColorStop(0, 'white');
            gradient.addColorStop(1, 'green');
            ctx.fillStyle = gradient;
            ctx.rect(canvas.width-44, (canvas.height - 146) / 2, 44, 146);
            ctx.fill();
            ctx.stroke();
            ctx.closePath();

            //Gost gol
            ctx.beginPath();
            ctx.moveTo(canvas.width-1, (canvas.height / 2) - 22);
            ctx.lineTo(canvas.width-1, (canvas.height / 2) + 22);
            ctx.lineWidth = 2;
            ctx.stroke();
            ctx.closePath();
            ctx.lineWidth = 1;

            //Gost penal tacka
            ctx.beginPath()
            ctx.arc(canvas.width-88, canvas.height / 2, 1, 0, 2*Math.PI, true);
            ctx.fill();
            ctx.closePath();

            //Gost srednji krug
            ctx.beginPath()
            ctx.arc(canvas.width-88, canvas.height / 2, 73, 0.71*Math.PI, 1.29*Math.PI, false);
            ctx.stroke();
            ctx.closePath();

            //Domaci levi korner
            ctx.beginPath()
            ctx.arc(0, 0, 8, 0, 0.5*Math.PI, false);
            ctx.stroke();
            ctx.closePath();

            //Domaci desni korner
            ctx.beginPath()
            ctx.arc(0, canvas.height, 8, 0, 2*Math.PI, true);
            ctx.stroke();
            ctx.closePath();

            //Gost desni korner
            ctx.beginPath()
            ctx.arc(canvas.width, 0, 8, 0.5*Math.PI, 1*Math.PI, false);
            ctx.stroke();
            ctx.closePath();

            //Gost levi korner
            ctx.beginPath()
            ctx.arc(canvas.width, canvas.height, 8, 1*Math.PI, 1.5*Math.PI, false);
            ctx.stroke();
            ctx.closePath();
            ctx.font="40px Ariel Bold MS";
            ctx.fillStyle = "red";
            ctx.textAlign = "center";
            ctx.fillText("Manchester United", canvas.width/2, (canvas.height/2)-95);

        }
    };

    var player = {
        team : "home1",
        speed : 3.0,
        pointsStart : [
            { x: 10, y: 10},
            { x: 10, y: 10},
            { x: 10, y: 10},
            { x: 10, y: 10},
            { x: 10, y: 10},
            { x: 10, y: 10},
            { x: 10, y: 10},
            { x: 10, y: 10},
            { x: 10, y: 10},
            { x: 10, y: 10},
            { x: 10, y: 10},
            { x: 10, y: 10}
        ],
//


        isAt: function (point,point1) {
            return ((point.x <=point1.x) && (point.y <=point1.y)) ? false: true;
        },


        move: function (points) {

            this.draw();

            for(var i=0 ; i< points.length; i++) {

                var pointEnd=points[i];
                var pointStart= this.pointsStart[i];

                if (this.isAt(pointEnd,pointStart)) {
                    var h = Math.sqrt(Math.pow(Math.abs(pointStart.x - pointEnd.x), 2) + Math.pow(Math.abs(pointStart.y - pointEnd.y), 2));
                    var v = Math.acos((Math.abs(pointStart.x - pointEnd.x) / h));
                    var x = this.speed * Math.cos(v);
                    var y = this.speed* Math.sin(v);

                    if (!((pointEnd.x <=pointStart.x) && (pointEnd.y <=pointStart.y)))
                    {
                        pointStart.x += x;
                        pointStart.y += y;
                    }

                }

            }

        },

        draw: function () {
            pitch.draw();

            for(i=0 ; i< 11; i++) {

                var imageObj = new Image();
                imageObj.src = "images/igrac"+(i+1)+".jpg";
                ctx.drawImage(imageObj, this.pointsStart[i].x, this.pointsStart[i].y, 40, 40);

            }

            var imageObj = new Image();
            imageObj.src = 'images/ball.png';
            ctx.drawImage(imageObj,this.pointsStart[11].x, this.pointsStart[11].y,30,30);

        }

    };

    var coordinates = [
        { x: 10, y: 250},
        { x: 100, y: 59},
        { x: 100, y: 359},
        { x: 160, y: 259},
        { x: 220, y: 59},
        { x: 220, y: 359},
        { x: 440, y: 59},
        { x: 450, y: 359},
        { x: 550, y: 59},
        { x: 550, y: 359},
        { x: 650, y: 259},
        { x: 384, y: 245}
    ];


    var game = {
        timer: {},
        step: function () {
            player.move(coordinates);
        },
        start: function () {
            pitch.draw();
            this.timer = window.setInterval(this.step, 20);
        }
    };
    game.start();

};
