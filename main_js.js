/**
 * Created by eylemcancetintas on 24.03.17.
 */
window.onscroll = function() {show_nav()};
function show_nav() {
    //if the page is scrolled more than 20pixels from the top of the screen, then delegate my_cool_class to
    // navigation id in addition to .nav
    var $detectIndex = document.location.href.match(/[^\/]+$/)[0];
    //console.log($detectIndex);
    if ($detectIndex == 'index.html' || $detectIndex == 'index.html?') {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            document.getElementById("navigation").className = 'nav my_cool_class';
        } else {
            document.getElementById("navigation").className = 'nav'; //if the page is closer to top less than 20px than delegate only .nav
        }
    }
}

//here is the drop_down function
$(document).ready(function () {

    //build the form upon 'on-click', having the form multiple times in html causes multiple use of same "id"
    var $my_form = $('<li>\
        <form id="myform" action="?" method="post">\
        <label for="email" class="italic, bold">Email*</label>\
        <input id="email" type="text">\
        <label for="password" class="italic, bold">Password*</label>\
        <input id="password" type="text">\
        <button type="submit">Login</button>\
        </form>\
        </li>');

    var $screen_width = innerWidth;

    // depending on the screen width, fitting drop-down menu is appended to burger-item
    $('.nav_burger').on('click', function (){
        if ($screen_width > 691 && $screen_width < 1025) {
            $('.drop-down-small').append($my_form);
            $('.drop-down-small').slideToggle();//dropdown animation
        } else if ($screen_width < 690) {
            $('.drop-down-big').append($my_form);
            $('.drop-down-big').slideToggle();//dropdown animation
        }

        //form validation  -> for comments please see contact.html <scrip>... this validation here is only for the login menu with 2 inputs, extended version is under contact.html
        $('#myform').on('submit', function (_e) {
            _e.preventDefault();
            $('#myform .error').removeClass('error');
            var add_error = function ($elm) {
                $('#myform').find('label[for="' + $elm.attr('id') + '"]').addClass('error'); //all input fields are in the same tag, therefore i look for the label with the matching "for" value
                //$elm.siblings('label').addClass('error');
            };
            //email
            var $email = $('#email');
            //console.log($email.val().indexOf('@'));
            if ($email.val().trim() === "" || $email.val().indexOf('@') < 1) {
                add_error($email);
            }
            //password
            var $password = $('#password');
            if ($password.val().trim() === "") {
                add_error($password);
            }
            if ($('.error').length > 0) {
                _e.preventDefault();

            }
        });
    });

    // mini drop-down is appended to down arrow on big screesn
    $('.down_arrow').on('click', function () {
        $('.drop-down-mini').append($my_form);
        $('.drop-down-mini').slideToggle(); //dropdown animation

        $('#myform').on('submit', function (_e) {
            $('#myform .error').removeClass('error');
            var add_error = function ($elm) {
                $('#myform').find('label[for="' + $elm.attr('id') + '"]').addClass('error'); //all input fields are in the same tag, therefore i look for the label with the matching "for" value

            };
            //email
            var $email = $('#email');
            //console.log($email.val().indexOf('@'));
            if ($email.val().trim() === "" || $email.val().indexOf('@') < 1) {
                add_error($email);
            }
            //password
            var $password = $('#password');
            if ($password.val().trim() === "") {
                add_error($password);
            }
            if ($('.error').length > 0) {
                _e.preventDefault();

            }
        });

    });

});

