$(document).ready(function () {
    // Load navbar từ Navbar.html và thêm vào phần header của HomePage.html
    $.get("Navbar.html", function (data) {
        // Chèn nội dung của Navbar.html vào phần header của trang
        $("header").html(data);
    });
});