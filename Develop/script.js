var save = document.querySelector("save-button");
// var input = $(this).offsetParent().children(1)[1].value;
var input = $(this).parent().siblings(".description").children().val();
var input9 = document.getElementById("hour-9");
// input = items

// var inputArray = [
//     $(this).offsetParent().children(1)[1].value,
//     $(this).offsetParent()[0].nextElementSibling.children[1].value,
//     $(this).offsetParent()[0].nextElementSibling.nextElementSibling.children[1].value,
//     $(this).offsetParent()[0].nextElementSibling.nextElementSibling.nextElementSibling.children[1].value,
//     $(this).offsetParent()[0].nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.children[1].value,
//     $(this).offsetParent()[0].nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.children[1].value,
//     $(this).offsetParent()[0].nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.children[1].value,
//     $(this).offsetParent()[0].nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.children[1].value,
//     $(this).offsetParent()[0].nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.children[1].value
// ]


// console.log(inputArray);


// $(this).parent().siblings(input).children().val();
// console.log(input);
console.log(this);


// $(document).ready(function() {

//     $(".save-button").on("click",function() {
//         console.log("buttonclick");
//     var value = $(this).siblings(".description").val();
//     var time = $(this).parent().attr("id");
//     localStorage.setItem(time,value);
//     });






$("#save-button").on("click", function() {
    localStorage.clear();
    // console.log($(this).offsetParent());
    console.log($(this).offsetParent().children(1)[1].value);
    console.log($(this).offsetParent()[0].nextElementSibling.children[1].value);
    console.log($(this).offsetParent()[0].nextElementSibling.nextElementSibling.children[1].value);
    console.log($(this).offsetParent()[0].nextElementSibling.nextElementSibling.nextElementSibling.children[1].value);
    console.log($(this).offsetParent()[0].nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.children[1].value);
    console.log($(this).offsetParent()[0].nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.children[1].value);
    console.log($(this).offsetParent()[0].nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.children[1].value);
    console.log($(this).offsetParent()[0].nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.children[1].value);
    console.log($(this).offsetParent()[0].nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.children[1].value);
    
    var inputArray = [
        $(this).offsetParent().children(1)[1].value,
        $(this).offsetParent()[0].nextElementSibling.children[1].value,
        $(this).offsetParent()[0].nextElementSibling.nextElementSibling.children[1].value,
        $(this).offsetParent()[0].nextElementSibling.nextElementSibling.nextElementSibling.children[1].value,
        $(this).offsetParent()[0].nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.children[1].value,
        $(this).offsetParent()[0].nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.children[1].value,
        $(this).offsetParent()[0].nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.children[1].value,
        $(this).offsetParent()[0].nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.children[1].value,
        $(this).offsetParent()[0].nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.nextElementSibling.children[1].value
    ]

    localStorage.setItem(inputArray, JSON.stringify(items));
    var items

        if (localStorage.getItem(inputArray)) {
            items = JSON.parse(localStorage.getItem(inputArray.keys));
            } else {
            items = []
        }
    
    // var input9 = $(this).offsetParent().children(1)[1].value;
    console.log(input);
});


// });

// localStorage.setItem(input, JSON.stringify(items));
// var items

// if (localStorage.getItem(input)) {
//     items = JSON.parse(localStorage.getItem(input));
//     } else {
//       items = []
//     }

//   localStorage.setItem(input, JSON.stringify(items));
//   // var data = JSON.parse(localStorage.getItem("user-input"));

