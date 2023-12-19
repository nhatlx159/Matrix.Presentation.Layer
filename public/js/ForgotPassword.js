// let cooldown;
//         let cooldownTime = 60; // 60 seconds

//         $(document).ready(function () {
//             $('#sendCodeBtn').on('click', function () {
//                 $(this).prop('disabled', true).text('Gửi lại mã sau (' + cooldownTime + 's)');
//                 cooldown = setInterval(updateCooldown, 1000);
//             });

//             function updateCooldown() {
//                 cooldownTime--;
//                 $('#sendCodeBtn').text('Gửi lại mã sau (' + cooldownTime + 's)');
//                 if (cooldownTime === 0) {
//                     clearInterval(cooldown);
//                     $('#sendCodeBtn').prop('disabled', false).text('Gửi mã');
//                     cooldownTime = 60; // Reset cooldown time
//                 }
//             }
//         });