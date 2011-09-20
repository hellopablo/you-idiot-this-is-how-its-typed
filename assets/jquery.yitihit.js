/*global window,document,jQuery */

/*!
* YouIdiotThisIsHowItsTyped: a jQuery Plugin to stop people being idiots
* @author: Pablo de la Peña (hellopablo)
* @url: http://www.trovster.com/lab/code/plugins/jquery.YouIdiotThisIsHowItsTyped.js
* @documentation: http://www.trovster.com/lab/plugins/YouIdiotThisIsHowItsTyped/
* @published: 11/09/2008
* @updated: 26/02/2011
* @license Creative Commons Attribution Non-Commercial Share Alike 3.0 Licence
*		   http://creativecommons.org/licenses/by-nc-sa/3.0/
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
									$$.blur( function() { $(this).val( $(this).val().toUpperCase() ) } );
								break;
								
								//	Lower case
								case 'lower' :
									$$.blur( function() { $(this).val( $(this).val().toLowerCase() ) } );
								break;
								
								//	Title Case
								case 'title' :
								
								break;
								
								//	Sentence Case
								case 'sentence' :
								
								break;
								
								//	Numeric
								case 'numeric' :
									$$.blur( function() { $(this).val( $(this).val().replace( /[^\d]/gi, '' ) ) } );
								break;
								
								//	Alpha
								case 'alpha' :
									$$.blur( function() { $(this).val( $(this).val().replace( /[^a-zA-Z]/gi, '' ) ) } );
								break;
								
								//	Alpha Dash
								case 'alphadash' :
									$$.blur( function() { $(this).val( $(this).val().replace( /[^a-zA-Z-_ ]/gi, '' ) ) } );
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
								
								break;
								
								//	Sentence Case
								case 'sentence' :
								
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
			'event' :	'blur'	// blur|realtime
		};
		
	}(jQuery));
}