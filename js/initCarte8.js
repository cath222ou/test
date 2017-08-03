var map, layer2, layer3, layer4, layer5, layer6, layerBase1, layerBase2, deparrStyle, hebergementStyle, restaurantStyle, autreStyle, attraitStyle;
var controlZoomin, controlPan, controlSelect;




function creationCarte(){
	
		controlZoomin = new ol.interaction.DragZoom();
		controlPan = new ol.interaction.DragPan();
		controlSelect = new ol.interaction.Select();
		controlSelect.setActive(false);
		
		deparrStyle = new ol.style.Style({
		image: new ol.style.Icon({
			src:'icons/pinrouge16.png'
			})
		});		
		
		hebergementStyle = new ol.style.Style({
		image: new ol.style.Icon({
			src:'icons/accomodation16.png'
			})
		});
		

		restaurantStyle = new ol.style.Style({
		image: new ol.style.Icon({
			src:'icons/1restaurant16.png'
			})
		});
		
		
		autreStyle = new ol.style.Style({
		image: new ol.style.Icon({
			src:'icons/information16.png'
			})
		});
	
		attraitStyle = new ol.style.Style({
		image: new ol.style.Icon({
			src:'icons/camera16.png'
			})
		});
		
		

		
		//hebergement
		layer2 = new ol.layer.Vector({
		   style: hebergementStyle,
		   source: new ol.source.Vector({
			    url:"http://igeomedia.com/cgi-bin/mapserv?map=/home/cheminstremi/mapfile/principal.map&service=wfs&version=1.1.0&request=getfeature&typename=hebergement&srsName=EPSG:3857",
                format: new ol.format.WFS({
				})
			})  
		});		
		
	
		//restaurant
		layer3 = new ol.layer.Vector({
		style: restaurantStyle,
		   source: new ol.source.Vector({
			    url:"http://igeomedia.com/cgi-bin/mapserv?map=/home/cheminstremi/mapfile/principal.map&service=wfs&version=1.1.0&request=getfeature&typename=restaurant&srsName=EPSG:3857",
                format: new ol.format.WFS({
				})
			})
        });
		
		
		//attrait
		layer4 = new ol.layer.Vector({
			style: attraitStyle,
			source: new ol.source.Vector({
			    url:"http://igeomedia.com/cgi-bin/mapserv?map=/home/cheminstremi/mapfile/principal.map&service=wfs&version=1.1.0&request=getfeature&typename=attrait&srsName=EPSG:3857",
				format: new ol.format.WFS({
                })
            })
		});	
		
		//depart arrivée
		layer5 = new ol.layer.Vector({
           style: deparrStyle,
		   source: new ol.source.Vector({
			    url:"http://igeomedia.com/cgi-bin/mapserv?map=/home/cheminstremi/mapfile/principal.map&service=wfs&version=1.1.0&request=getfeature&typename=dep_arr&srsName=EPSG:3857",
                format: new ol.format.WFS({
                })
            })  
		});	
		
		//autre service
		layer6 = new ol.layer.Vector({
           style: autreStyle,
		   source: new ol.source.Vector({
			    url:"http://igeomedia.com/cgi-bin/mapserv?map=/home/cheminstremi/mapfile/principal.map&service=wfs&version=1.1.0&request=getfeature&typename=autreservice&srsName=EPSG:3857",
                format: new ol.format.WFS({
                })
            })  
		});			
			
	
		layer2.setVisible(true);	
		layer3.setVisible(false);
		layer4.setVisible(false);
		layer5.setVisible(true);
		layer6.setVisible(false);

		layerBase1 = new ol.layer.Tile({source: new ol.source.OSM()});
		
	//	layerBase1 = new ol.layer.Tile({
	//		source: new ol.source.OSM({
	//		url: "http://{a-c}.basemap.cartocdn.com/dark_all/{z}/{x}/{y}.png"
	//	})
	//	});
	
		layerBase2 = new ol.layer.Tile({
          visible: false,
          preload: Infinity,
          source: new ol.source.BingMaps({
            key: 'zQo2FPJP7ohJU6bDlAb8~GfWu1E5MOAPK_Z-U42mKhw~ArqjzVXsxlY8uOtP31Wxg2_maXjNI_UgsWTgkrkeLOa1BGQ3Ert_56Xi5gVDeL9S',
            imagerySet: 'Aerial'
          })
        });

		
	//	layerBase2 = new ol.layer.Tile({source: new ol.source.MapQuest({
	//			layer : 'sat'
	//	})
	//	});
		
		layerBase1.setVisible(true);
		layerBase2.setVisible(false);
		
		map = new ol.Map({
          
        target: 'map',
        
        view: new ol.View({
          projection: 'EPSG:3857',
          center: ol.proj.transform([-70.4773,46.6607],'EPSG:4326','EPSG:3857'),
          zoom: 7,
          maxZoom: 10
        }),
        
        layers: [layerBase1, layerBase2, layer2, layer3, layer4, layer5, layer6],
        
        controls: ol.control.defaults().extend([
            new ol.control.ScaleLine(),
            new ol.control.MousePosition({
				coordinateFormat: ol.coordinate.createStringXY(4),
				projection: 'EPSG:4326'
			}),
            new ol.control.FullScreen()
          ]),
		  
		interactions: ol.interaction.defaults({
			dragPan: false,
			dragZoom: false
		}).extend([
			controlZoomin,controlPan, controlSelect
		]), 
          
      });
	  
	  
	  	controlSelect.on('select', function(evt){
		var selected = evt.selected;

		
		
		selected.forEach(function(features){
           //$("#infoPanel").text($("#label1").text()+features.getProperties().etbl_nom_f+" -ADRESSE- "+features.getProperties().adr_civiqu+" "+features.getProperties().adr_munici+" "+features.getProperties().adr_provin+" -DESCRIPTION- "+features.getProperties().etbl_nom_f);
			$("#infoPanel").text();
			$("#infoIni").text("");
			$("#nom").text("NOM:");
			$("#labelNom").text(features.getProperties().etbl_nom_f);
			$("#adresse").text("ADRESSE:");
			$("#labelAdresse").text(features.getProperties().adr_civiqu+" "+features.getProperties().adr_munici);
			$("#description").text("DESCRIPTION:");
			$("#labelDescription").text(features.getProperties().etbl_desc_);
		});
    
	});	  

}
