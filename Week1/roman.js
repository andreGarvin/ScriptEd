
// all the speacil charcters are number that are 
// follewed by a incremenation of fives

// work on better algorithim later
// var letters = ['V L I X C'];

// the 'X' palys a important role in 
// the change of letters and characters 


/*
for example:
	4 + 5 = 9
		9 + 5 = 14
			14 + 5 = 19
				etc..
*/

var speacialChar = {
	'4': 'IV',
	'9': 'IX',
	'14': 'XIV',
	'19': 'XIX',
	'24': 'XXIV',
	'29': 'XXIX',
	'34':'XXXIV',
	'39': 'XXXIX',
	'44': 'XLIV',
	'49': 'XLIX',
	'54': 'LIV',
	'59': 'LIX',
	'64': 'LXIV',
	'69': 'LXIX',
	'74': 'LXXIV',
	'79': 'LXXIX',
	'84': 'LXXXIV',
	'89': 'LXXVII',
	'94': 'XCIV',
	'99': 'XCIX',
};

var collectOfFives = {
	'5': 'V',
	'10': 'X',
	'15': 'XV',
	'25': 'XXV',
	'30': 'XXX',
	'35': 'XXXV',
	'40': 'XL',
	'45': 'XLV',
	'50': 'L',
	'55': 'LV',
	'60': 'LX',
	'65': 'LXV',
	'70': 'LXX',
	'75': 'LXXV',
	'80': 'LXXX',
	'85': 'LXXXV',
	'90': 'XC',
	'95': 'XCV',
	'100': 'C'
};

function findRomanNumerials( number ) {
	var romanNumerial = '';
	
	// goes throug all the speacil characters
	for (var char in speacialChar) {

		// if numbe rmatches speacial character
		if ( number === char) {
			return speacialChar[char];
		}

		else {

			// if not found in speacil characters 
			// check the collection of fives for 
			// the roman numerial
			// goes through collection of fives
			for ( var thatFives in collectOfFives ) {
				// if found a match the display in console
				if ( number === thatFives ) {
					return collectOfFives[thatFives];
				}
			}

		}

	}

	if ( number < 4) {
		for (var i = 0; i < number; i++) {
			romanNumerial += 'I';
		}
		return romanNumerial;
	}
	
	else {
		for ( var k in collectOfFives ) {
			if ( number > k) {
				romanNumerial = collectOfFives[k];

				for ( var j = 0; j < ( number - k ); j ++) {
					romanNumerial += 'I';
				}
			}
			return romanNumerial;
		}
	}

}

console.log( findRomanNumerials( '87' ) );
