$(document).ready(function(){
	var clicked = "";
	var map = new jvm.WorldMap({
	container: $('.map'),
	map: 'world_mill_en',
	backgroundColor: 'none',
	zoomOnScroll: false,
	markerStyle: {
      initial: {
        fill: '#FF0000',
        stroke: '#383f47'
      }
    },
	markers: [
      {latLng: [33.76, -118.18], name: 'CSU Long Beach'},
      {latLng: [-33.93, 25.56], name: 'Nelson Mandela Metropolitan University'},
      {latLng: [-19.81, -43.95], name: 'PUC Minas'},
      {latLng: [-22.90, -43.20], name: 'PUC Rio'},
      {latLng: [45.54, -73.63], name: 'Concordia University'},
      {latLng: [48.43, -68.51], name: 'Université du Québec à Rimouski'},
      {latLng: [46.80, -71.24], name: 'Université de Laval'},
      {latLng: [20.67, -103.34], name: 'Tecnologico de Monterrey'},
      {latLng: [20.59, -100.39], name: 'Tecnologico de Monterrey'},
      {latLng: [37.87, -122.27], name: 'UC Berkeley'},
      {latLng: [33.12, -117.15], name: 'CSU San Marcos'},
      {latLng: [32.71, -117.15], name: 'CSU San Diego'},
      {latLng: [37.41, -122.05], name: 'Carnegie Mellon University'},
      {latLng: [43.21, -77.93], name: 'Brockport College'},
      {latLng: [-33.86, 151.20], name: 'Australian Catholic University'},
      {latLng: [-37.81, 144.96], name: 'Royal Melbourne Institute of Technology'},
      {latLng: [39.90, 116.40], name: 'Beijing Jiaotong University'},
      {latLng: [31.23, 121.47], name: 'Tongji University'},
      {latLng: [40.00, 116.32], name: 'Tsinghua University'},
      {latLng: [37.56, 126.97], name: 'Chung Ang University'},
      {latLng: [35.87, 128.60], name: 'Keimyung University'},
      {latLng: [22.39, 114.10], name: 'Hong Kong University of Science and Technology'},
      {latLng: [13.35, 74.78], name: 'Manipal University'},
      {latLng: [28.63, 77.22], name: 'University of Delhi'},
      {latLng: [36.62, 138.59], name: 'Ritsumeikan University'},
      {latLng: [13.72, 100.47], name: 'Thammasat University'},
      {latLng: [26.21, 50.59], name: 'Ahlia University'},
      {latLng: [51.27, 1.08], name: 'Kent University'},
      {latLng: [55.64, 12.08], name: 'Roskilde University'},
      {latLng: [36.52, -6.29], name: 'Universidad de Cadiz'},
      {latLng: [37.25, -6.94], name: 'Universidad de Huelva'},
      {latLng: [60.20, 24.65], name: 'Laurea University of Applied Sciences'},
      {latLng: [53.35, -6.25], name: 'Dublin Institute of Technology'},
      {latLng: [53.37, -6.23], name: 'Griffith Dublin College'},
      {latLng: [59.93, 30.31], name: 'The Bonch-Bruevich St Petersburg State University of Telecommunications'},
      {latLng: [56.5, 84.96], name: 'Tomsk State University of Control Systems and Radioelectronics'},
      {latLng: [57.78, 14.15], name: 'Jönköping University'},
      {latLng: [58.41, 15.62], name: 'Linköping University'},
      {latLng: [59.33, 18.06], name: 'Stockholm University'}
    ],
	series: {
	  regions: [{
		scale: ['#FFFFFF', '#0073CE'],
		normalizeFunction: 'polynomial',
		values: {
		  "AF": 1,
		  "AL": 1,
		  "DZ": 1,
		  "AO": 1,
		  "AG": 1,
		  "AR": 1,
		  "AM": 1,
		  "AU": 2,
		  "AT": 1,
		  "AZ": 1,
		  "BS": 1,
		  "BH": 2,
		  "BD": 1,
		  "BB": 1,
		  "BY": 1,
		  "BE": 1,
		  "BZ": 1,
		  "BJ": 1,
		  "BT": 1,
		  "BO": 1,
		  "BA": 1,
		  "BW": 1,
		  "BR": 2,
		  "BN": 1,
		  "BG": 1,
		  "BF": 1,
		  "BI": 1,
		  "KH": 1,
		  "CM": 1,
		  "CA": 2,
		  "CV": 1,
		  "CF": 1,
		  "TD": 1,
		  "CL": 1,
		  "CN": 2,
		  "CO": 1,
		  "KM": 1,
		  "CD": 1,
		  "CG": 1,
		  "CR": 1,
		  "CI": 1,
		  "HR": 1,
		  "CY": 1,
		  "CZ": 1,
		  "DK": 2,
		  "DJ": 1,
		  "DM": 1,
		  "DO": 1,
		  "EC": 1,
		  "EG": 1,
		  "SV": 1,
		  "GQ": 1,
		  "GL": 1,
		  "ER": 1,
		  "EE": 1,
		  "ET": 1,
		  "FJ": 1,
		  "FI": 2,
		  "FR": 1,
		  "GA": 1,
		  "GM": 1,
		  "GE": 1,
		  "DE": 1,
		  "GH": 1,
		  "GR": 1,
		  "GD": 1,
		  "GT": 1,
		  "GN": 1,
		  "GW": 1,
		  "GY": 1,
		  "GB": 2,
		  "HT": 1,
		  "HN": 1,
		  "HK": 1,
		  "HU": 1,
		  "IS": 1,
		  "IN": 2,
		  "ID": 1,
		  "IR": 1,
		  "IQ": 1,
		  "IE": 2,
		  "IL": 1,
		  "IT": 1,
		  "JM": 1,
		  "JP": 2,
		  "JO": 1,
		  "KZ": 1,
		  "KE": 1,
		  "KI": 1,
		  "KR": 2,
		  "KW": 1,
		  "KG": 1,
		  "LA": 1,
		  "LV": 1,
		  "LB": 1,
		  "LS": 1,
		  "LR": 1,
		  "LY": 1,
		  "LT": 1,
		  "LU": 1,
		  "MK": 1,
		  "MG": 1,
		  "MW": 1,
		  "MY": 1,
		  "MV": 1,
		  "ML": 1,
		  "MT": 1,
		  "MR": 1,
		  "MU": 1,
		  "MX": 2,
		  "MD": 1,
		  "MN": 1,
		  "ME": 1,
		  "MA": 1,
		  "MZ": 1,
		  "MM": 1,
		  "NA": 1,
		  "NP": 1,
		  "NL": 1,
		  "NZ": 1,
		  "NI": 1,
		  "NE": 1,
		  "NG": 1,
		  "NO": 1,
		  "OM": 1,
		  "PK": 1,
		  "PA": 1,
		  "PG": 1,
		  "PY": 1,
		  "PE": 1,
		  "PH": 1,
		  "PL": 1,
		  "PT": 1,
		  "QA": 1,
		  "RO": 1,
		  "RU": 2,
		  "RW": 1,
		  "WS": 1,
		  "ST": 1,
		  "SA": 1,
		  "SN": 1,
		  "RS": 1,
		  "SC": 1,
		  "SL": 1,
		  "SG": 1,
		  "SK": 1,
		  "SI": 1,
		  "SB": 1,
		  "ZA": 1,
		  "ES": 2,
		  "LK": 1,
		  "KN": 1,
		  "LC": 1,
		  "VC": 1,
		  "SD": 1,
		  "SR": 1,
		  "SZ": 1,
		  "SE": 2,
		  "CH": 1,
		  "SY": 1,
		  "TW": 1,
		  "TJ": 1,
		  "TZ": 1,
		  "TH": 2,
		  "TL": 1,
		  "TG": 1,
		  "TO": 1,
		  "TT": 1,
		  "TN": 1,
		  "TR": 1,
		  "TM": 1,
		  "UG": 1,
		  "UA": 1,
		  "AE": 1,
		  "GB": 2,
		  "US": 2,
		  "UY": 1,
		  "UZ": 1,
		  "VU": 1,
		  "VE": 1,
		  "VN": 1,
		  "YE": 1,
		  "ZM": 1,
		  "ZW": 1,
		  "ZA": 2
		}
	  }]
	},
	regionStyle: {
		initial: {
			fill: '#FFFFFF'
		}
	},
	onMarkerLabelShow: function(event, label, index){
	  label.html(label.html());
	},
	onRegionClick: function(event, code){
		if (clicked == code)
		{
			map.setFocus(0, 0, 0);
			clicked = "";
		}
		else
		{
			clicked = code;
			if (code == "US")
				map.setFocus(2, 0, 0);
			else
				map.setFocus(code, 0, 0);
		}
	},
	onRegionSelected: function(event, code, isSelected, selectedRegions){
	  console.log('region-select', code, isSelected, selectedRegions);
	  if (window.localStorage) {
		window.localStorage.setItem(
		  'jvectormap-selected-regions',
		  JSON.stringify(selectedRegions)
		);
	  }
	},
	onViewportChange: function(e, scale, transX, transY){
		console.log('viewportChange', scale, transX, transY);
	}
	});
});

$(document).ready(function() {
    $('#registerBeta').on('submit', function() {
	
        var email = $('#email').val();
		
        if(email == '') {
            return false;
        } else {
            $.ajax({
                url: $(this).attr('action'),
                type: $(this).attr('method'),
                data: $(this).serialize(),
				dataType: 'json',
                success: function(json) {
					if (json.response == 'ok')
					{
						$(".success").html("Thank you for your interest! An email has been sent.");
					}
					else if (json.response == 'already')
					{
						$(".success").html("You've already told us you're interested. Please be patient :-).");
					}
					else
					{
						$(".success").html("Error.");
					}
					$(".success").fadeIn(600);
                }
            });
        }
        return false;
    });
	$('#email').filter_input({regex:'[a-z0-9_-]'});
});