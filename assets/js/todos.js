//check off specific todos by clicking
$("ul").on('click', "li", function () {
    $(this).toggleClass("completed");
});

//click on X to delete todo

$("ul").on('click', "span", function (event) {
    $(this).parent().fadeOut(1500, function () {
        $(this).remove();
    })
    event.stopPropagation();//para que solament actue cuando undimos el span y no cuando undimos el li o el ul o el div()que contienen al span
});

$("input[type='text']").keypress(function (event) {
    if (event.which === 13) {//13 corresponds to the number of the enterkey
        //grabbing new todo text from input
        var todoText = $(this).val();
        $(this).val("");
        //create a new li and add to ul
        $("ul").append("<li><span><i class='fas fa-trash-alt'></i></span> " + todoText + "</li>")
    }
});

$(".fa-plus").click(function () {
    $("input[type='text']").fadeToggle();
})