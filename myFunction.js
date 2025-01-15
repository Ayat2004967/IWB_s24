document.addEventListener("DOMContentLoaded", function () {
    // All buttons with the class "details-btn"
    var buttons = document.querySelectorAll(".details-btn");

    // Add event listener to each button
    buttons.forEach(function (button) {
        button.addEventListener("click", function () {
            var bookId = this.getAttribute("data-book-id");
            var detailsRow = document.getElementById('details-' + bookId);

            // Toggle the display of the details row
            if (detailsRow.style.display === "none" || detailsRow.style.display === "") {
                detailsRow.style.display = "table-row"; // Show details
            } else {
                detailsRow.style.display = "none"; // Hide details
            }
        });
    });
});





//////////////////////////////////////////////////////////////////////////////////////////////
// Function to show the form when the "Submit" button is clicked
function showForm() {
    var selectedBook = document.querySelector('input[name="book"]:checked');
    if (selectedBook) {
        // Reveal the form
        document.getElementById('form-container').style.display = "block";
    } else {
        alert("Please select a book first.");
    }
}

// Form validation for Arabic name input
function validateForm(event) {
    var name = document.getElementById('name').value;
    var nationalId = document.getElementById('national-id').value;
    var phone = document.getElementById('phone').value;
    var dob = document.getElementById('dob').value;
    var email = document.getElementById('email').value;

    // Regular expression to allow only Arabic letters (no numbers or special characters)
    var arabicNamePattern = /^[\u0621-\u064A\s]+$/; // This matches only Arabic characters and spaces

    // Regular expression for valid National ID: first two digits between 01-14, followed by 9 digits
    var nationalIdPattern = /^(0[1-9]|1[0-4])\d{9}$/;

    // Regular expression for valid phone number (Syriatel and MTN networks)
    var phonePattern = /^(093|094|095|096|097|099|098)\d{7}$/;

    // Validate name
    if (!arabicNamePattern.test(name)) {
        alert("يرجى إدخال الاسم باللغة العربية فقط.");
        event.preventDefault(); // Prevent form submission
        return;
    }

    // Validate national ID
    if (!nationalIdPattern.test(nationalId)) {
        alert("الرقم الوطني يجب أن يكون 11 خانة، مع الخانتين الأولى والثانية بين 01 و 14.");
        event.preventDefault(); // Prevent form submission
        return;
    }

    // Validate phone number (Syriatel and MTN networks)
    if (!phonePattern.test(phone)) {
        alert("يرجى إدخال رقم موبايل صالح من شبكتي Syriatel أو MTN.");
        event.preventDefault(); // Prevent form submission
        return;
    }

    // After all validations pass, display the details in an alert
    var message = `الاسم: ${name}\n`;
    message += `الرقم الوطني: ${nationalId}\n`;
    message += `تاريخ الولادة: ${dob}\n`;
    message += `رقم الموبايل: ${phone}\n`;
    message += `الإيميل: ${email}`;

    alert("تم التحقق من التفاصيل بنجاح!\n" + message);
}

// Event listener for the "Submit" button
document.addEventListener("DOMContentLoaded", function () {
    var buttons = document.querySelectorAll(".details-btn");
    buttons.forEach(function (button) {
        button.addEventListener("click", function () {
            var bookId = this.getAttribute("data-book-id");
            toggleDetails(bookId); // Toggle details for the clicked book
        });
    });

    // Event listener for the "Submit" button
    document.getElementById('submit-btn').addEventListener('click', showForm);

    // Event listener for form submission (to validate the name input, national ID, and phone)
    document.getElementById('details-form').addEventListener('submit', validateForm);
});
