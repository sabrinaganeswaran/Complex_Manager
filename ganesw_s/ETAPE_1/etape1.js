$('#calcul').on("click", function () {
	var input1 = $('#nb1').val();
	var input2 = $('#nb2').val();
	input1 = parseFloat(input1);
	input2 = parseFloat(input2);
	if (isNaN(input1) || isNaN(input2))
	{
		$("#id1").text("Veuillez mettre uniquement des chiffres.");
	}
	else
	{
		//var resultat = input2 . input1
		$("#id1").text("La partie réelle est " + input1 + ".");
		$("#id2").text("La partie imaginaire est " + input2 + ".");
		if (input1 > 0)
			$("#id3").text("Le nombre complexe est " + input2 + "i " + "+" + input1 + ".")
		else 
			$("#id3").text("Le nombre complexe est " + input2 + "i " + input1 + ".")
		
}})
