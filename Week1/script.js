
// scriptEdlove.js

var ans = prompt("Do you love ScriptEd?");


if ( ans === 'yes' ) {
    alert("Yay!");
}
else {
    alert('Boo!');
}







// class.js

var classNames = {
    '9': 'Freshman', 
    '10': 'Sophomore', 
    '11': 'Junior', 
    '12': 'Senior'
};


var resp = prompt('What grade are you in?', 'ex: 9th or 12th');

for ( var i in classNames ) {
    if ( resp[0] === i ) {
        alert("You are a " + classNames[i]);
    }
}






// garde.js

var grades = {
    97.5: 'A+',
    92.5: 'A', 
    90.0: 'A-',
    87.5: 'B+', 
    82.5: 'B', 
    80.0: 'B-',
    77.5: 'C+', 
    72.5: 'C', 
    70.0: 'C-', 
    67.5: 'D+', 
    62.5: 'D',
    60.0: 'D-'
};

var userGrade = prompt("Grade:", 'ex: 97, 65, or 45');
var resp;

for ( var grade in grades ) {
    if ( userGrade === 100 ) {
        resp = 'A+';
    }
    else if ( userGrade <= grade ) {
        resp = grades[grade];
    }
    else if ( userGrade < 60.0 ) {
        resp = 'E';
    }
    else {
        resp = 'F';
    }
}

console.log( resp );







// count476.js

for (var i = 0; i <= 746; i++) {
    console.log(i);
}






// sum55.js

var sum = 0;

for (var i = 0; i <= 55; i++) {
    sum+=i;
}

console.log( sum );






// prod15.js

var prod = 1;

for (var i = 1; i <= 15; i++) {
    prod *= i;
}

console.log( prod );




// color.js

var colors = ['red', 'white', 'blue', 'green'];
console.log( colors[2] );

function pickColors() {
    $('.btn').click(function() {
        for ( var i in colors ) {
            switch ( $(this).attr('id') ) {
                case colors[i]:
                    $('body').css('background-color', colors[i]);
                    break;
                default:
                alert('No');
                break;
            }        
        }
    });
}

// 99bottles.js

for (var i = 99; i >= 1; i--) {
    console.log(i+" bottles of milk on the wall.");
}

// jQuery

$(document).ready(function() {
    
    // hello
    $('body').append("Hello");
    
    // Hello Name
    var name = prompt("What is your Name?");
    $('body')append("Hey wassup " + name);
    
    // Clicking
    $('div').click(function() {
        $(this).hide('fast');
    });
    
    // Hello Name Input
    $('input').keypress(fucntion( e ) {
        if ( e.which === 13) {
            if ( $('input').val().length != 0 ) {
                $('body').append("<div>"+ $('input').val() +"</div>");
            }
        }
    });
});