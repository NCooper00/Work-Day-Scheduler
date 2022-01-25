var container = $('.container');

var currentDate = moment();
    $('#currentDay').text(currentDate.format('dddd, MMMM Do YYYY'));

for (var i = 9; i < 18; i++) {
    var hourRow = $('#hr-' + i)
    if (i < moment().hour()) {
        hourRow.addClass("past")
    } if (i === moment().hour()) {
        hourRow.addClass("present")
    } if (i > moment().hour()) {
        hourRow.addClass("future")
    }
}

$(".btn").on("click", (event) => {
    event.preventDefault();
    var hour = $(event.target).parent().attr("id")
    var task = $(event.target).siblings(".description").val()

    localStorage.setItem(hour, task)
    console.log(task)
;
})

$("#hour-9 textarea").val(localStorage.getItem("hour-9"));
$("#hour-10 textarea").val(localStorage.getItem("hour-10"));
$("#hour-11 textarea").val(localStorage.getItem("hour-11"));
$("#hour-12 textarea").val(localStorage.getItem("hour-12"));
$("#hour-13 textarea").val(localStorage.getItem("hour-13"));
$("#hour-14 textarea").val(localStorage.getItem("hour-14"));
$("#hour-15 textarea").val(localStorage.getItem("hour-15"));
$("#hour-16 textarea").val(localStorage.getItem("hour-16"));
$("#hour-17 textarea").val(localStorage.getItem("hour-17"));