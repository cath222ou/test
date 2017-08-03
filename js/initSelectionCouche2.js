

function creationSelectionCouche(){

	
				
	$( "#osm" ).change(function(){
		layerBase1.setVisible(!layerBase1.getVisible());
		layerBase2.setVisible(!layerBase2.getVisible());
	});
	
	$( "#mqsat" ).change(function(){
		layerBase1.setVisible(!layerBase1.getVisible());
		layerBase2.setVisible(!layerBase2.getVisible());
	});
	

	$( "#hebergement" ).click(function(){
		layer2.setVisible(!layer2.getVisible());
	});
	
	$( "#restaurant" ).click(function(){
		layer3.setVisible(!layer3.getVisible());
	});
	
	$( "#attrait" ).click(function(){
		layer4.setVisible(!layer4.getVisible());
	});
	
	$( "#dep_arr" ).click(function(){
		layer5.setVisible(!layer5.getVisible());
	});
	
	$( "#autreservice" ).click(function(){
		layer6.setVisible(!layer6.getVisible());
	});
	


}


