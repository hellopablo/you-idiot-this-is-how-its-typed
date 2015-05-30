/*global window,document,jQuery */

/*!
* YouIdiotThisIsHowItsTyped: a jQuery Plugin to stop people being idiots
* @author: Pablo de la Peña (hellopablo)
* @url: http://hellopablo.github.io/you-idiot-this-is-how-its-typed
* @documentation: http://hellopablo.github.io/you-idiot-this-is-how-its-typed
* @published: 11/09/2008
* @updated: 26/02/2011
* @license MIT
*/
if(typeof jQuery != 'undefined') {
	jQuery(function($) {
		$.fn.extend({
			yitihit: function(options) {
				var settings = $.extend({}, $.fn.yitihit.defaults, options);
			
				return this.each(function () {
					var $$	= $(this),
						o	= $.metadata ? $.extend({}, settings, $$.metadata()) : settings;
					
					//	What event are we listening for?
					switch( o.event )
					{
						case 'blur' :
						
							switch ( o.format )
							{
								//	Upper case
								case 'upper' :
									$$.blur(
										function()
										{
											if ( $$.hasClass( 'yitihit-ed' ) === false )
											{
												$(this).val( $(this).val().toUpperCase() );
												if ( o.editable === true )
												{
													$$.addClass( 'yitihit-ed' );
												}
											}
										}
									);
								break;
								
								//	Lower case
								case 'lower' :
									$$.blur(
										function()
										{
											if ( $$.hasClass( 'yitihit-ed' ) === false )
											{
												$(this).val( $(this).val().toLowerCase() )
												if ( o.editable === true )
												{
													$$.addClass( 'yitihit-ed' );
												}
											}
										}
									);
								break;
								
								//	Title Case - Thanks to Greg Dean http://stackoverflow.com/questions/196972/convert-string-to-proper-case-with-javascript/196991#196991
								case 'title' :
									$$.blur(
										function()
										{
											if ( $$.hasClass( 'yitihit-ed' ) === false )
											{
												$(this).val( $(this).val().replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();}) );
												if ( o.editable === true )
												{
													$$.addClass( 'yitihit-ed' );
												}
											}
										}
									);
								break;
								
								//	Sentence Case
								case 'sentence' :
									$$.blur(
										function()
										{
											if ( $$.hasClass( 'yitihit-ed' ) === false )
											{
												$(this).val( $(this).val().charAt(0).toUpperCase() + $(this).val().substr(1).toLowerCase() );
												if ( o.editable === true )
												{
													$$.addClass( 'yitihit-ed' )
												}
											}
										}
									);
								break;
								
								//	Numeric
								case 'numeric' :
									$$.blur(
										function()
										{
											if ( $$.hasClass( 'yitihit-ed' ) === false )
											{
												$(this).val( $(this).val().replace( /[^\d]/gi, '' ) );
												if ( o.editable === true)
												{
													$$.addClass( 'yitihit-ed' );
												}
											}
										}
									);
								break;
								
								//	Alpha
								case 'alpha' :
									$$.blur(
										function()
										{
											if ( $$.hasClass( 'yitihit-ed' ) === false )
											{
												$(this).val( $(this).val().replace( /[^a-zA-Z]/gi, '' ) );
												if ( o.editable === true)
												{
													$$.addClass( 'yitihit-ed' );
												}
											}
										}
									);
								break;
								
								//	Alpha Dash
								case 'alphadash' :
									$$.blur(
										function()
										{
											if ( $$.hasClass( 'yitihit-ed' ) === false )
											{
												$(this).val( $(this).val().replace( /[^a-zA-Z-_ ]/gi, '' ) );
												if ( o.editable === true)
												{
													$$.addClass( 'yitihit-ed' );
												}
											}
										}
									);
								break;
								break;
							}
						
						break;
						
						case 'realtime' :
						
							switch ( o.format )
							{
								//	Upper case
								case 'upper' :
									$$.keyup( function() { $(this).val( $(this).val().toUpperCase() ) } );
								break;
								
								//	Lower case
								case 'lower' :
									$$.keyup( function() { $(this).val( $(this).val().toLowerCase() ); } );
								break;
								
								//	Title Case
								case 'title' :
									$$.keyup( function() {
										$(this).val( $(this).val().replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();}) );
									} );
								break;
								
								//	Sentence Case
								case 'sentence' :
									$$.keyup( function() {
										$(this).val( $(this).val().charAt(0).toUpperCase() + $(this).val().substr(1).toLowerCase() );
									} );
								break;
								
								//	Numeric
								case 'numeric' :
									$$.keyup( function() { $(this).val( $(this).val().replace( /[^\d\.]/gi, '' ) ) } );
								break;
								
								//	Alpha
								case 'alpha' :
									$$.keyup( function() { $(this).val( $(this).val().replace( /[^a-zA-Z]/gi, '' ) ) } );
								break;
								
								//	Alpha Dash
								case 'alphadash' :
									$$.keyup( function() { $(this).val( $(this).val().replace( /[^a-zA-Z-_ ]/gi, '' ) ) } );
								break;
							}
						
						break;
						
						default:
						
							console.warn( 'Invalid event type' );
							
						break;
					}
				});
			}
		});
		
		/**
		* Set your Plugin Defaults Here¦
		*/
		$.fn.yitihit.defaults = {
			'format':	'title',	// title|upper|lower|numeric|alpha
			'event' :	'blur',		// blur|realtime
			'editable' : true		// boolean
		};
		
	}(jQuery));
}