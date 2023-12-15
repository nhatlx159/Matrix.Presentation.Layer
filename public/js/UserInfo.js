// document.addEventListener("DOMContentLoaded", function () {
//     const daySelect = document.getElementById('day');
//     const monthSelect = document.getElementById('month');
//     const yearSelect = document.getElementById('year');

//     function generateDays(month, year) {
//         daySelect.innerHTML = '';
//         const daysInMonth = new Date(year, month, 0).getDate();
//         for (let i = 1; i <= daysInMonth; i++) {
//             const option = document.createElement('option');
//             option.value = i;
//             option.textContent = i;
//             daySelect.appendChild(option);
//         }
//     }

//     monthSelect.addEventListener('change', function () {
//         const selectedMonth = parseInt(monthSelect.value);
//         const selectedYear = parseInt(yearSelect.value);
//         generateDays(selectedMonth, selectedYear);
//     });

//     yearSelect.addEventListener('change', function () {
//         const selectedMonth = parseInt(monthSelect.value);
//         const selectedYear = parseInt(yearSelect.value);
//         generateDays(selectedMonth, selectedYear);
//     });

//     for (let i = 2023; i >= 1950; i--) {
//         const option = document.createElement('option');
//         option.value = i;
//         option.textContent = i;
//         yearSelect.appendChild(option);
//     }

//     monthSelect.addEventListener('change', function () {
//         const selectedMonth = parseInt(monthSelect.value);
//         const selectedYear = parseInt(yearSelect.value);
//         generateDays(selectedMonth, selectedYear);
//     });

//     for (let i = 1; i <= 12; i++) {
//         const option = document.createElement('option');
//         option.value = i;
//         option.textContent = i;
//         monthSelect.appendChild(option);
//     }

//     const initialMonth = new Date().getMonth() + 1;
//     const initialYear = new Date().getFullYear();
//     generateDays(initialMonth, initialYear);

//     const saveButton = document.querySelector('.save-button');

//     saveButton.addEventListener('click', function () {
//         const form = document.getElementById('info');

//         if (form) {
//             const fullName = form.querySelector('#fullName').value;
//             const day = form.querySelector('#day').value;
//             const month = form.querySelector('#month').value;
//             const year = form.querySelector('#year').value;

//             const male = form.querySelector('#male').checked;
//             const female = form.querySelector('#female').checked;
//             const other = form.querySelector('#other').checked;

//             console.log("Họ và tên:", fullName);
//             console.log("Ngày sinh:", day + "/" + month + "/" + year);
//             console.log("Nam:", male);
//             console.log("Nữ:", female);
//             console.log("Khác:", other);
//         } else {
//             console.error("Form not found!");
//         }
//     });

//     const updatePhoneButton = document.getElementById('update-phone');

//     if (updatePhoneButton) {
//         updatePhoneButton.addEventListener('click', function () {
//             window.location.href = 'EditPhone.html'; // Chuyển hướng đến trang EditPhone
//         });
//     }

//     const updateEmailButton = document.getElementById('update-email');

//     if (updateEmailButton) {
//         updateEmailButton.addEventListener('click', function () {
//             window.location.href = 'EditEmail.html'; // Chuyển hướng đến trang EditEmail
//         });
//     }
// });
