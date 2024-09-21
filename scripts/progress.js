var barArray = [];

function setUp(){
    barArray = [
        {
            element: document.getElementById("prog-qs"),
            counter: 0,
            value: 8
        },
        {
            element: document.getElementById("prog-html"),
            counter: 0,
            value: 9
        },
        {
            element: document.getElementById("prog-mysql"),
            counter: 0,
            value: 7
        },
        {
            element: document.getElementById("prog-php"),
            counter: 0,
            value: 8
        },
        {
            element: document.getElementById("prog-js"),
            counter: 0,
            value: 9
        },
        {
            element: document.getElementById("prog-mvc"),
            counter: 0,
            value: 7
        },
        {
            element: document.getElementById("prog-pm"),
            counter: 0,
            value: 8
        },
        {
            element: document.getElementById("prog-tm"),
            counter: 0,
            value: 8
        },
        {
            element: document.getElementById("prog-tw"),
            counter: 0,
            value: 8
        }
    ];

    setInterval(animateBars, 10);
}

function animateBars(){
    for(var x = 0; x < barArray.length; x++){
        if(barArray[x].counter < barArray[x].value){
            barArray[x].counter += 0.1;
        }

        barArray[x].element.value = barArray[x].counter;
    }
}