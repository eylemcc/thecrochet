/**
 * Created by eylemcancetintas on 18.03.17.
 */

$(document).ready(function () {

    var slider = function () {
        // select all elements with the id 'slides' and classes 'slide'
        var slides = document.querySelectorAll('#slides .slide');
        //set the counter to 0
        var currentSlide = 0;
        //set slide-show interval to 7seconds
        var slideInterval = setInterval(nextSlide, 7000);

        //calling the goToSlide function with the counter+1 as the variable
        function nextSlide() {
            goToSlide(currentSlide+1);
        }

        //calling the goToSlide function with the counter-1 as the variable
        function previousSlide() {
            goToSlide(currentSlide-1);
        }


        function goToSlide(n) {
            //3 elements with the class 'slide' work as an array, currentSlide is referring to the slide to be hidden
            slides[currentSlide].className = 'slide';
            //next slide element is chosen by adding the value of 'n' to the currentSlide
            currentSlide = (n+slides.length)%slides.length;
            //new element of the slide is chosen and given the class 'showing' for revealing
            slides[currentSlide].className = 'slide showing';
        }

        //variables 'next' and 'previous' are defined by choosing those elements by their ids (the buttons)
        var next = document.getElementById('next');
        var previous = document.getElementById('previous');

        //onclick event listener is added to 'prev' and 'next' buttons enabling user to change slides manually
        next.onclick = function() {
            nextSlide();
        };
        previous.onclick = function() {
            previousSlide();
        };
    };
    slider();
});