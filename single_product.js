//noinspection JSAnnotator
/**
 * Created by eylemcancetintas on 17.03.17.
 */

$(document).ready(function () {

    var single_product = function() {


        //the products and prices are saved as arrays for now, in the future these information will be accessed by php
        var product_names = ['Arya Erbuli Sim', 'Sport Wool', 'Sport Wool', 'Pop Mix', 'Elite Baby', 'Ibiza', 'Nakolen Jakar', 'Ombre', 'Süper Inci Jakar', 'Vals', 'Baby Tweed New', 'Lolipop', 'Paris Bebe', 'Lora', 'Paris', 'Boho'];
        var product_prices = ['5.60', '6.50', '5.50', '6.00', '5.00', '7.50', '8.50', '8.00', '6.00', '5.50', '9.00', '9.50', '6.50', '5.50', '7.00', '9.50'];
        var product_variations = ['399', '400', '401', '405', '409', '410', '411', '412', '413', '418', '419', '420', '421'];
        var product_weight = ['100', '100', '100', '100', '100', '100', '100', '100', '100', '100', '100', '100', '50'];

        //product information: contents, weight, length, needle, crochet, knots, season
        var product_information = [['10% Virgin Wool', ' 10% Alpaca', ' 4% Metallic Polyester', ' 76% Premium Acrylic'],'100g','500m','2.5-3','1.5',['37',' 31'],['Spring', ' Autmn', ' Winter']];


        var name = document.querySelector('.product-name');
        var price = document.querySelector('.product-price');
        var regular_price = document.querySelector('.product-regular-price');
        var which_product = 0;

        //'which_product' variable defines which product will be shown in the single product page by choosing the correct product from the element of the product_names array
        name.textContent = product_names[which_product];
        price.textContent = '€' + parseFloat(product_prices[which_product]).toFixed(2).replace('.', ',');
        var reg_pr = product_prices[which_product]*100/parseInt(product_weight[which_product]); //in order to acquire the base price, product_price is multiplied by the base product weight (100g) and divided by its own weight
        parseFloat(parseFloat(reg_pr).toFixed(2).replace('.', ',')); // a display correction in order to seperate decimals with comma instead of dots
        regular_price.textContent = '€' + parseFloat(reg_pr).toFixed(2).replace('.', ',') + '/100g'; // finally putting the result together and display base-price

        //place breadcrumb
        var crumb_name = document.getElementById('crumb_name');
        crumb_name.textContent = product_names[which_product];

        // when a thumbnail is clicked-on, its alt-value will be given to source attribute of the img element, which will display the corresponding image
        var handle_click = function() {
            //this is the img element that shows the big product picture on the screen
            var img = document.querySelector('.single-product-picture');
            var img_number = this.getAttribute('alt');
            var thumbnails = document.querySelectorAll('.product-gallery > li > img');

            //changing the image to chosen variable by changing its source value
            img.setAttribute('src', 'gallery_pictures/product' + (which_product + 1) + '/gallery/' + img_number + '.jpg');

            //giving all gallery elements the class 'thumb_img' which removes the frames
            for(var i = 0; i < product_variations.length; i++){
                thumbnails[i].setAttribute('class', 'thumb_img');
            };

            //giving only the chosen product variation the class 'frame' to paint outlines
            this.setAttribute('class', 'frame');
        };

        //a list is created and list elements are chosen from the product_variations array to display the thumbnail images of the product, each thumbnail
        // image will get an eventListener to show big picture of the product corresponding to that thumbnail
        var product_gallery = document.querySelector('.product-gallery');
        for(var i = 0; i < product_variations.length; i++){
            var gallery_element = document.createElement('li');
            gallery_picture = document.createElement('img');
            product_gallery.appendChild(gallery_element);
            gallery_element.appendChild(gallery_picture);
            //thumbnails will be called from the corresponding product folder
            gallery_picture.setAttribute('src', 'gallery_pictures/product' + (which_product + 1) + '/thumbnails/' + product_variations[i] + '.jpg');
            gallery_picture.setAttribute('alt', product_variations[i]);
            gallery_picture.addEventListener('click', handle_click);
        };

        //product information will be read from the product_information array and inserted next to intended field, first child is omitted, because it
        //serves as the title
        var description = document.querySelector('.product-description li:not(:first-child)');
        for(var j = 0; j < product_information.length; j++){
            description.textContent = description.textContent + ' ' + product_information[j];
            description = description.nextElementSibling;
        };

    };

    single_product();
});