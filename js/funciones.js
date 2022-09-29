//funcion del tab
$(function(){  
  $( "#tabs-1" ).tabs();  
});
//funcion de acordeon
$(function(){  
  $( "#accordion-5" ).accordion({  
    disabled: false  
  });  
  $("input").each(function () {  
    $(this).change(function () {  
      $("#accordion-5").accordion("option", "disabled", true);
    });  
  });  
});
//funcion para el cuadrado
$(function(){
  $("#cuadrado").draggable();
  $("#dropzone").droppable({
    drop: function(event, ui){
      $(this).css('background', 'red')
      .html( "ERROR" );
    },
    over: function(event, ui){
      $(this).css('background', 'orange')
      .html( "en espera" );
    },
    out: function(event, ui){
      $(this).css('background', 'yellow')
      .html( "¡arrastre figura!" );
    }
  })
  $("#dropzone1").droppable({
    drop: function(event1, ui1){
      $(this).css('background', 'cyan')
      .html( "EXITO" );
    },
    over: function(event1, ui1){
      $(this).css('background', 'orange')
      .html( "En Espera" );
    },
    out: function(event1, ui1){
      $(this).css('background', 'cyan')
      .html( "¡arrastre figura!" );
    }
  })
});
//funcion para el circulo
$(function(){
  $("#circulo").draggable();
  $("#dropzone2").droppable({
    drop: function(event, ui){
      $(this).css('background', 'rgb(0,200,0)')
      .html( "EXITO" );
    },
    over: function(event, ui){
      $(this).css('background', 'orange')
      .html( "en espera" );
    },
    out: function(event, ui){
      $(this).css('background', 'rgb(0,200,0)')
      .html( "¡arrastre figura!" );
    }
  })
  $("#dropzone3").droppable({
    drop: function(event1, ui1){
      $(this).css('background', 'red')
      .html( "ERROR" );
    },
    over: function(event1, ui1){
      $(this).css('background', 'orange')
      .html( "En Espera" );
    },
    out: function(event1, ui1){
      $(this).css('background', 'gray')
      .html( "¡arrastre figura!" );
    }
  })
});
//funcion para el triangulo
$(function(){
  $("#triangulo").draggable();
  $("#dropzone4").droppable({
    drop: function(event, ui){
      $(this).css('background', '#8C4AF7')
      .html( "EXITO" );
    },
    over: function(event, ui){
      $(this).css('background', 'orange')
      .html( "en espera" );
    },
    out: function(event, ui){
      $(this).css('background', '#8C4AF7')
      .html( "¡arrastre figura!" );
    }
  })
  $("#dropzone5").droppable({
    drop: function(event1, ui1){
      $(this).css('background', 'red')
      .html( "ERROR" );
    },
    over: function(event1, ui1){
      $(this).css('background', 'orange')
      .html( "En Espera" );
    },
    out: function(event1, ui1){
      $(this).css('background', 'pink')
      .html( "¡arrastre figura!" );
    }
  })
});
//funcion para sorteable, paises
$(function(){
  $('#sortable-8').sortable({  
    update: function(event, ui) { 
      var productOrder = $(this).sortable('toArray').toString();
      $("#sortable-9").text (productOrder);
    }  
  }); 
});
//funcion para las preguntas
$(document).ready(function(){ 
  $('#box-1').click(function() {
    $( "#box-1" ).effect( "bounce", { 
      times: 10,  
      distance: 150  
    }, 850, function() { 
      $( this ).css( "background", "#ff4040" )
      .html( "INCORRECTO" );  
    });  
  }); 
  $('#box-2').click(function() {  
    $( "#box-2" ).effect( "shake", {  
      times: 10,  
      distance: 150 
    }, 850, function() {
      $( this ).css( "background", "rgb(0,200,0)" )
      .html( "CORRECTO" );
    });  
  }); 
  $('#box-3').click(function() {  
    $( "#box-3" ).effect( "bounce", {  
      times: 10,  
      distance: 150  
    }, 850, function() { 
      $( this ).css( "background", "#ff4040" )
      .html( "INCORRECTO" ); 
    });  
  }); 
  $('#box-4').click(function() { 
    $( "#box-4" ).effect( "bounce", {  
      times: 10,  
      distance: 150  
    }, 850, function() {  
     $( this ).css( "background", "#ff4040" )
     .html( "INCORRECTO" ); 
    });  
  });  
  $('#box-5').click(function() {  
   $( "#box-5" ).effect( "shake", {  
    times: 10,  
    distance: 150  
    }, 850, function() { 
      $( this ).css( "background", "rgb(0,200,0)" )
      .html( "CORRECTO" ); 
    });  
  }); 
  $('#box-6').click(function() {  
   $( "#box-6" ).effect( "bounce", {  
    times: 10,  
    distance: 150  
  }, 850, function() {  
   $( this ).css( "background", "#ff4040" )
   .html( "INCORRECTO" ); 
 });  
 }); 
  $('#box-7').click(function() {  
   $( "#box-7" ).effect( "bounce", {  
    times: 10,  
    distance: 150  
  }, 850, function() {  
   $( this ).css( "background", "#ff4040" )
   .html( "INCORRECTO" );  
 });  
 }); 
  $('#box-8').click(function() {  
   $( "#box-8" ).effect( "bounce", {  
    times: 10,  
    distance: 150  
  }, 850, function() {  
   $( this ).css( "background", "#ff4040" )
   .html( "INCORRECTO" ); 
 });  
 });
  $('#box-9').click(function() {  
   $( "#box-9" ).effect( "bounce", {  
    times: 10,  
    distance: 150  
  }, 850, function() {  
   $( this ).css( "background", "#ff4040" )
   .html( "INCORRECTO" ); 
 });  
 }); 
  $('#box-10').click(function() {  
   $( "#box-10" ).effect( "bounce", {  
    times: 10,  
    distance: 150  
  }, 850, function() {  
   $( this ).css( "background", "#ff4040" )
   .html( "INCORRECTO" );  
 });  
 }); 
  $('#box-11').click(function() {  
   $( "#box-11" ).effect( "bounce", {  
    times: 10,  
    distance: 150  
  }, 850, function() {  
   $( this ).css( "background", "#ff4040" )
   .html( "INCORRECTO" ); 
 });  
 });
  $('#box-12').click(function() {  
   $( "#box-12" ).effect( "shake", {  
    times: 10,  
    distance: 150  
  }, 850, function() {  
   $( this ).css( "background", "rgb(0,200,0)" )
   .html( "CORRECTO" ); 
 });  
 });
});
//funcion de crecer
$( function() {
  var state = true;
  $( "#button1" ).on( "click", function() {
    if ( state ) {
      $( "#effect1" ).animate({
        backgroundColor: "#FE04CB",
        color: "#fff",
        width: 150,
        height: 30
      }, 1000 );
    } else {
      $( "#effect1" ).animate({
        backgroundColor: "#fff",
        color: "#000",
        width: 130,
        height: 30
      }, 1000 );
    }
    state = !state;
  });
  $( "#button2" ).on( "click", function() {
    if ( state ) {
      $( "#effect2" ).animate({
        backgroundColor: "#FB1302",
        color: "#fff",
        width: 150,
        height: 30
      }, 1000 );
    } else {
      $( "#effect2" ).animate({
        backgroundColor: "#fff",
        color: "#000",
        width: 130,
        height: 30
      }, 1000 );
    }
    state = !state;
  });
  $( "#button3" ).on( "click", function() {
    if ( state ) {
      $( "#effect3" ).animate({
        backgroundColor: "#6404FE",
        color: "#fff",
        width: 150,
        height: 30
      }, 1000 );
    } else {
      $( "#effect3" ).animate({
        backgroundColor: "#fff",
        color: "#000",
        width: 130,
        height: 30
      }, 1000 );
    }
    state = !state;
  });
  $( "#button4" ).on( "click", function() {
    if ( state ) {
      $( "#effect4" ).animate({
        backgroundColor: "black",
        color: "#fff",
        width: 150,
        height: 30
      }, 1000 );
    } else {
      $( "#effect4" ).animate({
        backgroundColor: "#fff",
        color: "#000",
        width: 130,
        height: 30
      }, 1000 );
    }
    state = !state;
  });
  $( "#button5" ).on( "click", function() {
    if ( state ) {
      $( "#effect5" ).animate({
        backgroundColor: "#B51406",
        color: "#fff",
        width: 150,
        height: 30
      }, 1000 );
    } else {
      $( "#effect5" ).animate({
        backgroundColor: "#fff",
        color: "#000",
        width: 130,
        height: 30
      }, 1000 );
    }
    state = !state;
  });
  $( "#button6" ).on( "click", function() {
    if ( state ) {
      $( "#effect6" ).animate({
        backgroundColor: "#88690B",
        color: "#fff",
        width: 150,
        height: 30
      }, 1000 );
    } else {
      $( "#effect6" ).animate({
        backgroundColor: "#fff",
        color: "#000",
        width: 130,
        height: 30
      }, 1000 );
    }
    state = !state;
  });
  $( "#button7" ).on( "click", function() {
    if ( state ) {
      $( "#effect7" ).animate({
        backgroundColor: "#0230FB",
        color: "#fff",
        width: 150,
        height: 30
      }, 1000 );
    } else {
      $( "#effect7" ).animate({
        backgroundColor: "#fff",
        color: "#000",
        width: 130,
        height: 30
      }, 1000 );
    }
    state = !state;
  });
  $( "#button8" ).on( "click", function() {
    if ( state ) {
      $( "#effect8" ).animate({
        backgroundColor: "#1EA234",
        color: "#fff",
        width: 150,
        height: 30
      }, 1000 );
    } else {
      $( "#effect8" ).animate({
        backgroundColor: "#fff",
        color: "#000",
        width: 130,
        height: 30
      }, 1000 );
    }
    state = !state;
  });
  $( "#button9" ).on( "click", function() {
    if ( state ) {
      $( "#effect9" ).animate({
        backgroundColor: "#F95703",
        color: "#fff",
        width: 150,
        height: 30
      }, 1000 );
    } else {
      $( "#effect9" ).animate({
        backgroundColor: "#fff",
        color: "#000",
        width: 130,
        height: 30
      }, 1000 );
    }
    state = !state;
  });
  $( "#button0" ).on( "click", function() {
    if ( state ) {
      $( "#effect0" ).animate({
        backgroundColor: "#8A8A8B",
        color: "#fff",
        width: 150,
        height: 30
      }, 1000 );
    } else {
      $( "#effect0" ).animate({
        backgroundColor: "#fff",
        color: "#000",
        width: 130,
        height: 30
      }, 1000 );
    }
    state = !state;
  });

} );
//reiniciar
function reiniciar(){
 location.reload();
}