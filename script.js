(function (document) {
    var workSpan = document.getElementById('work-span');
    var menuSpan = document.getElementById('menu-span');
    var workIcon = document.getElementById('work-icon');
    var menuIcon = document.getElementById('menu-icon');
    var workopen = false;
    var mouseopen = false;

    workSpan.addEventListener("mouseover", function () {

        workIcon.className = 'fa fa-angle-up';
    });

    workSpan.addEventListener("mouseout", function () {

        workIcon.className = 'fa fa-angle-down';
    });

    menuSpan.addEventListener("mouseover", function () {

        menuIcon.className = 'fa fa-angle-up';
    });
    menuSpan.addEventListener("mouseout", function () {

        menuIcon.className = 'fa fa-angle-down';
    });
})(document);
