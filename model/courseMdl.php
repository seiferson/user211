<?php

	/*Universidad de Guadalajara
	*Centro Universitario de Ciencias Exactas e Ingenierias
	*Programacion Web
	*Sistema Universitario de Control Escolar SUCE
	*Cuauhtemoc Herrera Mu�oz
	*/

	class courseMdl{
		
		private $connection;
		private $query;
		
		public function __construct( $singleton  ){
			$this -> connection = $singleton;
		}
		
		public function show( $teacher ){
			$this -> query = "select * from course where teacher = $teacher";
			$result =  $this -> connection -> query( $this -> query ) or die( "DB Error: Query" );
			while( $row = $result -> fetch_assoc( ) ){
				$rows[ ] = $row;
			}
			return $rows;
		}
		
	}


?>