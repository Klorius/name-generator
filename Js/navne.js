// eventlistener i vanilla JavaScript
$(document).ready(function(){
	
	var drengeNavne, pigeNavne, efternavne;
		drengeNavne= ["Søren", "Rasmus", "Kaj", "Kim", "Karsten"]
		pigeNavne= ["Birthe", "Else","Marie", "Kim", "Gertrud", "Kamma"];
		efternavne= ["Andersen", "Vasques", "Johnson"];

			 $("#tilfaeldigtNavn").on("click", function koen(){
				if ($("#dreng").is(":checked")) {return drengeNavn();}
				else if ($("#pige").is(":checked")) {return pigeNavn();}
				else {alert ("Du skal vælge!");}

						//finde drengenavne
						function drengeNavn(){
							navn = drengeNavne[rand(drengeNavne.length)] + " " + efternavne[rand(efternavne.length)];
							document.getElementById("resultat").innerHTML = navn;
						}

						//finde pigenavne
						function pigeNavn(){
							navn = pigeNavne[rand(pigeNavne.length)] + " " + efternavne[rand(efternavne.length)];
							document.getElementById("resultat").innerHTML = navn;
						}

					//spytter tilfældige hele tal ud imellem 0 og max	
					function rand(max){
						return Math.floor(Math.random()*max);
					}
					});
	
})

/*
vægtet navne, man kommer til at få de navne der er mest populære først
(de arrays der kommer først i ens index), man skal have lavet en index af navne fx 
fra en database.
alt afhængigt hvad man sætter sin potens til så skubber man sit valg til den ene ende af 
ens index (Math.pow(,X) X= ens potens).

function vilkaarligVaegtet(max, vaegt){
		return Math.floor(Math.pow(
		Math.random(),2) *max);

*/