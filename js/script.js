 

 function write(content) {
 top.consoleRef=window.open('','myconsole',
  'width=350,height=250'
   +',menubar=0'
   +',toolbar=1'
   +',status=0'
   +',scrollbars=1'
   +',resizable=1')
 top.consoleRef.document.write(
  '<html><head><title>Console</title></head>'
   +'<body bgcolor=white onLoad="self.focus()">'
   +content
   +'</body></html>'
 )
 top.consoleRef.document.close()
}

 function calculaSuperfice($ancho,$alto)
     {

        
        try{

        if ((isNaN($alto)) || (isNaN($ancho))) 
              throw "Algunos de los valores introducidos son correctos";
         else
             return $alto * $ancho;
         }  
         catch (msg)
        {
            alert ("No se puede calular la superficie."+msg);
            return -1;
         }

     }

      function  getSuperficie()
      {

		 var $superficie,$alto,$ancho,$content;


     document.getElementById("r_m2").innerHTML='';
		 
	   // Se le solicita al usuario que introduzca  el ancho y el alto. 
       $alto=parseFloat(prompt("Introduzca la altura de la pared en metros"));
       $ancho=parseFloat(prompt("Introduzca el ancho  de la pared en metros")); 

       //Se calcula la superfice 
       $superficie=calculaSuperfice($ancho,$alto);


       if ($superficie!=-1){
           
		   // se muestra el resultado sobre la misma web
		   $content="Para un ancho de pared de "+ String($ancho)+"m y un alto de " + String($alto) + "m la superficie es de  " + "<strong>"+
					 String($superficie) + "</strong> m <sup>2</sup>";
		   
		   document.getElementById("r_m2").innerHTML=$content;
		   // También se muestra utilizando document.write
		   
		   write($content);
		   
	  
		   }
          
         
      
      }

