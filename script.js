
$(function () {
  $(function () {

  });

  // Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
 // local storage.
  $(".saveBtn").on("click", function () {
    //get th id for time block which is only id
    var timeBlock = $(this).parent().attr("id");
    //get user input to save in local storage
    var userInput = $(this).siblings(".description").val();
    console.log("timeBlock--- ", timeBlock);
    //save what user inputs in local storage under the timeblcok variable
    localStorage.setItem(timeBlock, userInput);
  });
 
  //update current time
  setInterval(function () {
    
    //code to display the current date in the header of the page.
    var currentDate = dayjs().format("MMMM D, YYYY");
    $("#currentDay").text(currentDate);
    }, 60000);
  // current hour in 24-hour time?
  var currentHour = parseInt(dayjs().format("H"));



// code to apply the past, present, or future class to each time
  $(".time-block").each(function () {
    var timeBlockId = $(this).attr("id").split("-")[1];
    console.log(timeBlockId);
    //variabke for to get exact hour
    if (timeBlockId < currentHour) {
      $(this).addClass("past");
      currentColor = "past";
      console.log(`Time Block ${timeBlockId} past`);
    } else if (timeBlockId === currentHour) {
      $(this).addClass("present");
      currentColor = "present"
    } else {
      $(this).addClass("future");
      currentColor = "future";
    }
  });

// Retrieve data from local storage and populate textareas
$(".time-block").each(function () {
  var timeBlockId = $(this).attr("id");
  var storedValue = localStorage.getItem(timeBlockId);
  if (storedValue) {
    $(this).find(".description").val(storedValue);
  }
  });
});

