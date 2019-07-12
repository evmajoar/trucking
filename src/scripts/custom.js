/*
    Senurable Web Factory
    Version: 1.0.0
    Year: 2019
*/
$(function() {

  var $anchor = $( '.js-anchor' ),
      $buttonOrder = $( '.js-order' ),
      $buttonPolicy = $( '.js-policy' ),

      $modals = $( '.modals' ),
      $popupOrder = $( '.order-popup' ),
      $popupPolicy = $( '.policy' ),
      $popupOverlay = $( '.modals__overlay' ),
      $closeButton = $( '.close-button' );

  // Anchor
  $anchor.click( function(event) {

    event.preventDefault();
    var $that = $( this );

    $( 'body, html' )
      .stop()
      .animate({ scrollTop: $( '.' + $that.attr( 'href' ).replace('#', '') )
      .offset().top }, 1000);

  });

  var closePopup = function() {

    $('body').removeClass( 'hidden' );

    $modals.removeClass( 'modals--opened' ).find( '.modals__overlay' ).removeClass('modals__overlay--show');

    if ( $popupOrder.hasClass( 'order-popup--show' ) ) {
      $popupOrder.removeClass( 'order-popup--show' );
    } else if ( $popupPolicy.hasClass( 'policy--show' ) ) {
      $popupPolicy.removeClass( 'policy--show' );
    }

  }; 

  // Open popup on click
  $buttonOrder.click( function() {

    $('body').addClass( 'hidden' );

    $modals.addClass( 'modals--opened' ).find( '.modals__overlay' ).addClass( 'modals__overlay--show' ).siblings( '.order-popup' ).addClass( 'order-popup--show' ).find( 'input' ).first().focus();

  });

  $buttonPolicy.click( function(event) {

    if( $(this).attr( 'href' ) === '#' ) {
      event.preventDefault();

      $('body').addClass( 'hidden' );

      $modals.addClass( 'modals--opened' ).find( '.modals__overlay' ).addClass( 'modals__overlay--show' ).siblings( '.policy' ).addClass( 'policy--show' );
    }

  });

  // Close popup on click 
  $closeButton.click( function() {
    closePopup();
  } );

  $popupOverlay.click( function() {
    closePopup();
  } );


  // Close popup on push ESC
  $(document).keyup(function(e) {
    if (e.keyCode === 27) {
      closePopup();
    }
  });

  // Init Mask
  $('input[type="tel"]').mask("+7 (999) 999 99 99");

});