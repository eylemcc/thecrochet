//noinspection JSAnnotator
/**
 * Created by eylemcancetintas on 17.03.17.
 */

$(document).ready(function () {

    function single_product() {


        //the products and prices are saved as arrays for now, in the future these information will be accessed by php
        var product_names = ['Arya Erbuli Sim', 'Sport Wool', 'Sport Wool', 'Pop Mix', 'Elite Baby', 'Ibiza', 'Nakolen Jakar', 'Ombre', 'Süper Inci Jakar', 'Vals', 'Baby Tweed New', 'Lolipop', 'Paris Bebe', 'Lora', 'Paris', 'Boho'];
        var product_prices = ['8,00', '6,50', '5,50', '6,00', '5,00', '7,50', '8,50', '8,00', '6,00', '5,50', '9,00', '9,50', '6,50', '5,50', '7,00', '9,50'];
        var product_variations = ['399', '400', '401', '405', '409', '410', '411', '412', '413', '418', '419', '420', '421'];
        var product_weight = ['100', '50'];

        //product information: contents, weight, length, needle, crochet, knots, season
        var product_information = [['10% Wolle', '10% Alpaka', '4% Metallisches Polyester', '76% Premium Acryl'], '100g', '500m', '2.5-3', '1.5', ['37', '31'], ['Frühling', ' Herbst', ' Winter']];


        var name = document.querySelector('.product-name');
        var price = document.querySelector('.product-price');
        var regular_price = document.querySelector('.product-regular-price');


        //exceptionally for this project, this is a static single-product page and therefore I use the 1st element of the product_names array
        name.textContent = product_names[0];
        price.textContent = '€' + product_prices[0];
        var reg_pr = Math.round(parseInt(product_prices[0]) * 100 / parseInt(product_weight[0])); //in order to acquire the base price, product_price is multiplied by 100(g) and divided by its own weight
        parseFloat(parseFloat(reg_pr).toFixed(2).replace('.', ',')); // a display correction in order to seperate decimals with comma instead of dots
        regular_price.textContent = '€' + parseFloat(reg_pr).toFixed(2).replace('.', ',') + '/100g'; // finally putting the result together and display base-price

        //place breadcrumb
        var crumb_name = document.getElementById('crumb_name');
        crumb_name.textContent = product_names[0];

        // when a thumbnail is clicked-on, its alt-value will be given to src attribute of the img element, which will display corresponding image
        var handle_click = function () {
            var img = document.querySelector('.single-product-picture');
            var img_number = this.getAttribute('alt');
            img.setAttribute('src', '../gallery_pictures/product1/gallery/' + img_number + '.jpg');
        };

        //a list is created and list elements are chosen from the product_variations array to display the thumbnail images of the product, each thumbnail
        // image will get an eventListener to show big picture of the product corresponding to that thumbnail
        var product_gallery = document.querySelector('.product-gallery');
        for (var i = 0; i < product_variations.length; i++) {
            var gallery_element = document.createElement('li');
            gallery_picture = document.createElement('img');
            product_gallery.appendChild(gallery_element);
            gallery_element.appendChild(gallery_picture);
            gallery_picture.setAttribute('src', '../gallery_pictures/product1/thumbnails/' + product_variations[i] + '.jpg');
            gallery_picture.setAttribute('alt', product_variations[i]);
            gallery_picture.addEventListener('click', handle_click);
        }
        ;

        //product information will be read from the product_information array and inserted next to intended field, first child is omitted, because it
        //serves as the title
        var description = document.querySelector('.product-description li:not(:first-child)');
        for (var j = 0; j < product_information.length; j++) {
            description.textContent = description.textContent + ' ' + product_information[j];
            description = description.nextElementSibling;
        }
        ;

    };
    single_product();
});