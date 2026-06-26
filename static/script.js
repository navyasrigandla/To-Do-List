// Confirm before deleting a task

function confirmDelete() {

    return confirm("Are you sure you want to delete this task?");

}


// Display welcome message in console

console.log("Flask To-Do List Loaded Successfully!");


// Highlight completed tasks

document.addEventListener("DOMContentLoaded", function () {

    const badges = document.querySelectorAll(".badge");

    badges.forEach(function (badge) {

        if (badge.innerText.trim() === "Completed") {

            badge.parentElement.parentElement.style.backgroundColor = "#d4edda";

        }

    });

});