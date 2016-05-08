$('#calcul').on("click", function () {
	var input1 = parseFloat(document.getElementById('nb1').value);
	var input2 = parseFloat(document.getElementById('nb2').value);
	var re = new RegExp('^[-+]?[0-9\.,]+$', '');
	var alphabet = new RegExp('[^0-9]');
	
	if(re.test(input1) && re.test(input2))
	    {
		//Définition partie réelle et imaginaire
		$("#id1").text("La partie réelle est a = " + input1 + ".");
		$("#id2").text("La partie imaginaire est b = " + input2 + ".");
		
		//Définition du nombre complexe
		if ((input1 == 0) && (input2 == 0))
		    $("#id3").text("Le nombre complexe est z = 0"+".");
		else if ((input1 == 0) && (input2 == 1))
		    $("#id3").text("Le nombre complexe est z = i" +".");
		else if ((input1 != 0) && (input2 == 1))
		    $("#id3").text("Le nombre complexe est z = " + input1 + " + " + "i" +".");
		else if ((input1 != 0) && (input2 == 0))
		    $("#id3").text("Le nombre complexe est z = " + input1  +".");
		else if ((input1 > 0) && (input2 > 0))
		    $("#id3").text("Le nombre complexe est z = " + input1 + " + " + input2 + "i" +".");
		else if ((input1 > 0) && (input2 < 0))
		    $("#id3").text("Le nombre complexe est z = " + input1  + "-" + input2 + "i" +".");
		else if ((input1 < 0) && (input2 < 0))
		    $("#id3").text("Le nombre complexe est z = " + input1  +  input2 + "i" +".");
		else 
		    $("#id3").text("Le nombre complexe est z = " + input1 + " + " + input2 + "i" +".");
		
		//Définition du conjugué, z barre
		if ((input2 == 1) && (input1 != 0))
		    $("#id4").text("Son conjugué est z barre = " + input1 + " - " + "i" +".")
		    else if ((input2 > 0) && (input1 > 0))
			$("#id4").text("Son conjugué est z barre = " + input1 + " - " + input2 + "i" +".")
			else if ((input2 > 0) && (input1 < 0))
			    $("#id4").text("Son conjugué est z barre = " + input1 + " - " + input2 + "i" +".")
			    else if ((input2 < 0) && (input1 < 0))
				{
				    input2 = -input2;
				    $("#id4").text("Son conjugué est z barre = " + input1 + " + " + input2 + "i" +".")
					}
			    else if ((input2 < 0) && (input1 > 0))
				{
				    input2 = -input2;
				    $("#id4").text("Son conjugué est z barre = " + input1 + " + " + input2 + "i" +".")
					}

		//Définition de l'inverse 1/z
		var inverse = (input1*input1)+(input2*input2);
		var a = input1/inverse;
		var b = input2/inverse;
		if (input1 == 0 && input2 == 0) {
		    alert("HAN ! [ON NE DIVISE PAS PAR 0 NOM D'UN JAMBON!] LE BLASPHÈME POUR LES MATHS ! PRIONS POUR VOTRE ÂME...");
		    $("#id5").text("[Règle de base pardi!] Calcul fatal ! ON NE DIVISE PAS PAR 0 ! Pas d'inverse pour ce nombre complexe !");
		}
		else if ((inverse != 0) && (input2 > 0))
		    $("#id5").text("Son inverse est 1/z = " + a  + " + " +  b + "i" + ".");
		else if ((inverse != 0) && (input2 < 0))
		    $("#id5").text("Son inverse est 1/z = " + a  + " - " +  b + "i" + ".");
		
		//Définition du module |z|
		var module = Math.sqrt(inverse);
		$("#id6").text("Son module est |z| = " + module + ".");
		
		//Définition de l'argument avec l'angle 
		var angle = Math.acos(input1/module);
		if (input1 == 0 && input2 == 0)
		    {
			$("#id7").text("Son argument est arg(z) = 0" + ".");
		    }
		else
		    $("#id7").text("Son argument est arg(z) = " + angle + " degrès.");
		//Forme Trigo
		$("#id8").text("Sa forme trigonometrique est z = " + module + "( cos (" + angle + ") + i sin(" + angle + ")"+ ") +2kπ.");
	    }

	
	else if (alphabet.test(input1) || alphabet.test(input2))
	    {
		$("#id1").text("Nous ne pouvons pas encore convertir les lettres en chiffres. De ce fait, veuillez mettre uniquement des chiffres !");
		$("#id2").text("");
		$("#id3").text("");
		$("#id4").text("");
		$("#id5").text("");
		$("#id6").text("");
		$("#id7").text("");
	    }
	else if (isNaN(input1) || isNaN(input2))
	    {
		$("#id1").text("Vous avez laissé un champ vide !");
		$("#id2").text("");
		$("#id3").text("");
		$("#id4").text("");
		$("#id5").text("");
		$("#id6").text("");
		$("#id7").text("");
	    }
	else
	    {
		$("#id1").text("Oups, il semblerait qu'il y ait une erreur.");
		$("#id2").text("");
		$("#id3").text("");
		$("#id4").text("");
		$("#id5").text("");
		$("#id6").text("");
		$("#id7").text("");
	    }
      

    function Graph(config) {
    // user defined properties
    this.canvas = document.getElementById(config.canvasId);
    this.minX = config.minX;
    this.minY = config.minY;
    this.maxX = config.maxX;
    this.maxY = config.maxY;
    this.unitsPerTick = config.unitsPerTick;
        
    this.context = this.canvas.getContext('2d');
    this.rangeX = this.maxX - this.minX;
    this.rangeY = this.maxY - this.minY;
    this.unitX = this.canvas.width / this.rangeX;
    this.unitY = this.canvas.height / this.rangeY;
    this.centerY = Math.round(Math.abs(this.minY / this.rangeY) * this.canvas.height);
    this.centerX = Math.round(Math.abs(this.minX / this.rangeX) * this.canvas.width);
    this.iteration = (this.maxX - this.minX) / 1000;
    this.scaleX = this.canvas.width / this.rangeX;
    this.scaleY = this.canvas.height / this.rangeY;
        
    this.axisColor = '#aaa';
    this.font = '8pt Calibri';
    this.tickSize = 20;
        
    this.drawXAxis();
    this.drawYAxis();
}

Graph.prototype.drawXAxis = function() {
    var context = this.context;
    context.save();
    context.beginPath();
    context.moveTo(0, this.centerY);
    context.lineTo(this.canvas.width, this.centerY);
    context.strokeStyle = this.axisColor;
    context.lineWidth = 2;
    context.stroke();

    // draw tick marks
    var xPosIncrement = this.unitsPerTick * this.unitX;
    var xPos, unit;
    context.font = this.font;
    context.textAlign = 'center';
    context.textBaseline = 'top';

    // draw left tick marks
    xPos = this.centerX - xPosIncrement;
    unit = -1 * this.unitsPerTick;
    while(xPos > 0) {
	context.moveTo(xPos, this.centerY - this.tickSize / 2);
	context.lineTo(xPos, this.centerY + this.tickSize / 2);
	context.stroke();
	context.fillText(unit, xPos, this.centerY + this.tickSize / 2 + 3);
	unit -= this.unitsPerTick;
	xPos = Math.round(xPos - xPosIncrement);
    }

    // draw right tick marks
    xPos = this.centerX + xPosIncrement;
    unit = this.unitsPerTick;
    while(xPos < this.canvas.width) {
	context.moveTo(xPos, this.centerY - this.tickSize / 2);
	context.lineTo(xPos, this.centerY + this.tickSize / 2);
	context.stroke();
	context.fillText(unit, xPos, this.centerY + this.tickSize / 2 + 3);
	unit += this.unitsPerTick;
	xPos = Math.round(xPos + xPosIncrement);
    }
    context.restore();
};

Graph.prototype.drawYAxis = function() {
    var context = this.context;
    context.save();
    context.beginPath();
    context.moveTo(this.centerX, 0);
    context.lineTo(this.centerX, this.canvas.height);
    context.strokeStyle = this.axisColor;
    context.lineWidth = 2;
    context.stroke();

    // draw tick marks
    var yPosIncrement = this.unitsPerTick * this.unitY;
    var yPos, unit;
    context.font = this.font;
    context.textAlign = 'right';
    context.textBaseline = 'middle';

    // draw top tick marks
    yPos = this.centerY - yPosIncrement;
    unit = this.unitsPerTick;
    while(yPos > 0) {
	context.moveTo(this.centerX - this.tickSize / 2, yPos);
	context.lineTo(this.centerX + this.tickSize / 2, yPos);
	context.stroke();
	context.fillText(unit, this.centerX - this.tickSize / 2 - 3, yPos);
	unit += this.unitsPerTick;
	yPos = Math.round(yPos - yPosIncrement);
    }

    // draw bottom tick marks
    yPos = this.centerY + yPosIncrement;
    unit = -1 * this.unitsPerTick;
    while(yPos < this.canvas.height) {
	context.moveTo(this.centerX - this.tickSize / 2, yPos);
	context.lineTo(this.centerX + this.tickSize / 2, yPos);
	context.stroke();
	context.fillText(unit, this.centerX - this.tickSize / 2 - 3, yPos);
	unit -= this.unitsPerTick;
	yPos = Math.round(yPos + yPosIncrement);
    }
    context.restore();
};
      
Graph.prototype.transformContext = function() {
    var context = this.context;

    this.context.translate(this.centerX, this.centerY);

    context.scale(this.scaleX, -this.scaleY);
};
var myGraph = new Graph({
        canvasId: 'myCanvas',
        minX: -11,
        minY: -11,
        maxX: 11,
        maxY: 11,
        unitsPerTick: 1
    });

function trace(input1, input2){
    var canvas = document.getElementById("myCanvas");
    var context = canvas.getContext("2d");
    context.beginPath();      
    context.moveTo(300,300);
    var x = ((600*input1)/22)+300;
    var y = ((-600*input2)/22)+300;
    context.lineTo(x,y);  
    context.closePath();    
    context.stroke();
};
//console.log(input1);
trace(input1, input2); 
    });