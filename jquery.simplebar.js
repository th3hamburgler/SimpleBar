/*
	jQuery SimpleBar - 0.1a
	http://github.com/th3hamburgler/SimpleBar
	
	(c) Jim Wardlaw <jim.wardlaw@gmail.com> 
	http://stucktogetherwithtape.com
	
	This program is free software. It comes without any warranty, to
	the extent permitted by applicable law. You can redistribute it
	and/or modify it under the terms of the Do What The Fuck You Want
	To Public License, Version 2, as published by Sam Hocevar. See
	http://sam.zoy.org/wtfpl/COPYING for more details.
*/
(function($)
{
	$.fn.simplebar = function(options)
	{
		// Set the options.
		options = $.extend({}, $.fn.simplebar.defaults, options);

		// Go through the matched elements and return the jQuery object.
		return this.each(function(){
			
			var units = '';
			var number = 0;
				
			var $this = $(this);  

			// get text
			var text = $this.text();
			
			// split string
			var tempArray = $.fn.simplebar.seperateUnits(text, options);
			
			number = tempArray[0];
			
			if(tempArray.length == 2)
				var units = tempArray[1];

			// hide inner text
			$this.css('text-indent', -10000);
			
			if(isNumber(number))
			{	
				// calculate bar width
				var width = number*options.unitWidth;
				
				// set with
				$this.width(width);
				
				// set hover title
				$this.attr('title', text);
				
				// set active class
				$this.addClass(options.activeClass);
			}
			else
				console.log(number+" is not a number");	
		});
	};
	// Public defaults.
	$.fn.simplebar.defaults = {
		unitWidth	: 10,
		unitSeperator: ' ',
		activeClass: 'simplebar'
	};
	// ----------------- //
	// Private functions //
	// ----------------- //
	
	// isNumeric
	// checks a string is a number
	function isNumber(n)
	{
		return !isNaN(parseFloat(n)) && isFinite(n);
	}
	// ---------------- //
	// Public functions //
	// ---------------- //
	
	// seperateUnits
	// splits a string into an array containing number & unit
	$.fn.simplebar.seperateUnits = function(string, options)
	{
		return string.split(options.unitSeperator, 2);
	};
})(jQuery);