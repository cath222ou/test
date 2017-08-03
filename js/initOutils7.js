var click;



function creationBarreOutils(){

				$( "#toolbarui").buttonset();
				

}


function gestionControle(element) {
	
	if(element.id == "extent" ) {
		map.setView(new ol.View({
			projection: 'EPSG:3857',
          		center: ol.proj.transform([-70.4773,46.6607],'EPSG:4326','EPSG:3857'),
          		zoom: 7
		}) 
		);
	}
		
	
	if(element.id == "zoomin" ) {
		controlZoomin.setActive(true);
	} else {
		controlZoomin.setActive(false);
	}
	
	
	if(element.id == "pan" || element.id == "extent") {
		controlPan.setActive(true);
	} else {
		controlPan.setActive(false);
	}
	
	if(element.id == "info" ) {
		$( "#accordion" ).accordion( "option", "active", 1 );
		controlSelect.setActive(true);
	} else {
		controlSelect.setActive(false);
		$("#infoPanel").text("Cliquer sur l'element a interroger");
		$( "#accordion" ).accordion( "option", "active", 0 );
	} 


}
function telechargement() {

if (isset($_GET['pdf'])){
    $pdf=$_GET['pdf'];
    header("Content-type: application/pdf");
    header("Content-Disposition: attachment; filename=$pdf");
    readfile($pdf);
}
}