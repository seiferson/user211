/*Universidad de Guadalajara
*Centro Universitario de Ciencias Exactas e Ingenierias
*Programacion Web
*Sistema Universitario de Control Escolar SUCE
*Cuauhtemoc Herrera Mu�oz
*/

function selectAll( ){
	var i = 0;
	document.getElementById( "master" );
	if( master.checked ){
		for( i = 0 ; i < document.form.elements.length; i++ ){
			if( document.form.elements[i].type == "checkbox" ){
				document.form.elements[i].checked = 1; 
			}
		}
	}
	else{
		for( i = 0 ; i < document.form.elements.length; i++ ){
			if( document.form.elements[i].type == "checkbox" ){
        		document.form.elements[i].checked = 0; 
			}
		}
	}
}

function getChecked( ){
	var elements = new Array( );
	var x = 0;
	for( i = 0 ; i < document.form.elements.length; i++ ){
		if( document.form.elements[i].type == "checkbox" ){
        	if( document.form.elements[i].checked == 1 ){
				elements[ x ] = document.form.elements[ i ].id;
				x = x + 1; 
			} 
		}
	}
	if( x == 0 ){
		//Mostrar mensaje de error
	}
	else{
		//Validar y eliminar elementos
	}
}

function addDay( ){
	alert( "asdasd" );
	/*
	if( document.getElementById( "freeDays" ) == null ){
		var button = document.getElementById( "addDay" );
		var dayTable = document.createElement( "table" );
		dayTable.setAttribute( "id", "freeDays" );
		var header = document.createElement( "thead" );
		dayTable.appendChild( header );
		var headerRow =  document.createElement( "tr" );
		var headerColumn1 = document.createElement( "th" );
		headerColumn1.appendChild( document.createTextNode( "Dia" ) );
		var headerColumn2 = document.createElement( "th" );
		headerColumn2.appendChild( document.createTextNode( "Razon" ) );
		var headerColumn3 = document.createElement( "th" );
		headerColumn3.appendChild( document.createTextNode( "Eliminar" ) );
		headerRow.appendChild( headerColumn1 );
		headerRow.appendChild( headerColumn2 );
		headerRow.appendChild( headerColumn3 );
		header.appendChild( headerRow );
		button.parentNode.insertBefore( dayTable, button.nextSibling );
		var body = document.createElement( "tbody" );
		body.setAttribute( "id", "tableBody" );
		dayTable.appendChild( body );
	}
	var body = document.getElementById( "tableBody" );
	var tRow = document.createElement( "tr" );
	body.appendChild( tRow );
	tRow.setAttribute( "id",  "row" + $( tRow ).index() );
	var day = document.createElement( "td" );
	tRow.appendChild( day );
	var dayInfo = document.createElement( "input" );
	dayInfo.setAttribute( "type", "date" );
	dayInfo.setAttribute( "class", "inputLess" );
	dayInfo.setAttribute( "id",  "day" + $( tRow ).index() );
	day.appendChild( dayInfo );
	var reason = document.createElement( "td" );
	tRow.appendChild( reason );
	var reasonInfo = document.createElement( "input" );
	reasonInfo.setAttribute( "type", "text" );
	reasonInfo.setAttribute( "class", "inputLess" );
	reasonInfo.setAttribute( "id",  "reason" + $( tRow ).index() );
	reason.appendChild( reasonInfo );
	var del = document.createElement( "td" );
	tRow.appendChild( del );
	var delAction = document.createElement( "input" );
	delAction.setAttribute( "value", "X" );
	delAction.setAttribute( "type", "button" );
	delAction.setAttribute( "onclick", "del(" + $( tRow ).index() + ")" );
	del.appendChild( delAction );*/
}

function delDay( position ){
	var i = 0;
	var body = document.getElementById( "tableBody" );
	var elem = "row" + position;
	body.removeChild( document.getElementById( elem ) );
	console.log( position+elem );
	for( i = 0; i < body.children.length; i++){
		body.children[ i ].setAttribute( "id", "row" + $( body.children[ i ] ).index( ) );
		body.children[ i ].children[ 0 ].setAttribute( "id", "day" + $( body.children[ i ] ).index( ) );
		body.children[ i ].children[ 1 ].setAttribute( "id", "reason" + $( body.children[ i ] ).index( ) );
		body.children[ i ].children[ 2 ].setAttribute( "onclick", "delDay(" + $( body.children[ i ] ).index( ) + ")" );
	}
}
