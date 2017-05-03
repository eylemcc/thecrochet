/**
 * Created by eylemcancetintas on 16.03.17.
 */

$(document).ready(function () {

    function list_of_products() {

        //the products and prices are saved as arrays for now, in the future these information will be accessed by php
        var product_names = ['Arya Erbuli', 'Sport Wool', 'Sport Wool', 'Pop Mix', 'Elite Baby', 'Ibiza', 'Nakolen Jakar', 'Ombre', 'Süper Inci Jakar', 'Vals', 'Baby Tweed New', 'Lolipop', 'Paris Bebe', 'Lora', 'Paris', 'Boho'];
        var product_prices = ['8,00€', '6,50€', '5,50€', '6,00€', '5,00€', '7,50€', '8,50€', '8,00€', '6,00€', '5,50€', '9,00€', '9,50€', '6,50€', '5,50€', '7,00€', '9,50€'];

        function product_filter() {

            //variables for the product filter on the left side of the screen
            var filter = document.querySelector('.shop-filter-menu');
            var filter_p_mat = document.createElement('p');
            var filter_p_color = document.createElement('p');
            var filter_p_needle = document.createElement('p');
            var filter_ul_mat = document.createElement('ul');
            var filter_ul_color = document.createElement('ul');
            var filter_ul_needle = document.createElement('ul');

            //variable values are saved in arrays
            var title = ["MATERIAL", "COLOR", "NEEDLE SIZE"];
            var filter_mat =["Acrylic", "Virgin Wool", "Alpaca", "Glitter"];
            var filter_color =["White", "Black", "Green", "Blue", "Red", "Yellow"];
            var filter_needle =["2,5-3,5", "3,5-4,5", "4,5-5,5", "6-7"];

            //number of listed products out of total number of products is shown
            var displayed_total = product_names.length;
            var shop_loop_title = document.querySelector('.shop-products-loop-title');
            var displayed_total_p = document.createElement('p');
            var displayed_total_text = document.createTextNode('Showing 1-' + displayed_total + ' of ' + displayed_total + ' results');
            shop_loop_title.appendChild(displayed_total_p);
            displayed_total_p.appendChild(displayed_total_text);


            //filter is created here
            filter.appendChild(filter_p_mat);
            filter_p_mat.textContent = title[0];
            for(var i = 0; i < filter_mat.length; i++) {
                filter.appendChild(filter_ul_mat);
                var filter_li_mat = document.createElement('li');
                filter_ul_mat.appendChild(filter_li_mat);
                filter_li_mat.textContent = filter_mat[i];
            }

            filter.appendChild(filter_p_color);
            filter_p_color.textContent = title[1];
            for(var k = 0; k < filter_color.length; k++) {
                filter.appendChild(filter_ul_color);
                var filter_li_color = document.createElement('li');
                filter_ul_color.appendChild(filter_li_color);
                filter_li_color.textContent = filter_color[k];
            }

            filter.appendChild(filter_p_needle);
            filter_p_needle.textContent = title[2];
            for(var c = 0; c < filter_needle.length; c++) {
                filter.appendChild(filter_ul_needle);
                var filter_li_needle = document.createElement('li');
                filter_ul_needle.appendChild(filter_li_needle);
                filter_li_needle.textContent = filter_needle[c];
            }
        }

        function product_loop() {
            //the products and prices are saved as arrays for now, in the future these information will be accessed by php
            product_names = ['Arya Erbuli', 'Sport Wool', 'Sport Wool', 'Pop Mix', 'Elite Baby', 'Ibiza', 'Nakolen Jakar', 'Ombre', 'Süper Inci Jakar', 'Vals', 'Baby Tweed New', 'Lolipop', 'Paris Bebe', 'Lora', 'Paris', 'Boho'];
            product_prices = ['8,00€', '6,50€', '5,50€', '6,00€', '5,00€', '7,50€', '8,50€', '8,00€', '6,00€', '5,50€', '9,00€', '9,50€', '6,50€', '5,50€', '7,00€', '9,50€'];

            //function for the product loop
            var products = document.querySelector('.shop-products');

            var ul_products = document.createElement('ul');
            ul_products.setAttribute('class', 'product-line');
            products.appendChild(ul_products);

            for (var i = 0; i < product_names.length; i++) {

                var li_products = document.createElement('li');
                li_products.setAttribute('class', 'single-product');
                ul_products.appendChild(li_products);

                var img = document.createElement('img');
                img.setAttribute('class', 'product-picture');
                img.setAttribute('alt', product_names[i]);
                img.setAttribute('src', 'products/prod' + (i + 1) + '.jpg');
                li_products.appendChild(img);

                //ul element for the stars is generated
                var ul_stars = document.createElement('ul');
                ul_stars.setAttribute('class', 'product-stars');
                li_products.appendChild(ul_stars);

                //here 5 stars are added below the product image and has currently no function
                for (var j = 1; j < 6; j++) {
                    var li_star = document.createElement('li');
                    var img_star = document.createElement('img');
                    img_star.setAttribute('src', 'icons/star-full.png');
                    img_star.setAttribute('alt', 'star');
                    ul_stars.appendChild(li_star);
                    li_star.appendChild(img_star)
                }

                //product information is obtained from corresponding arrays and appended below
                //product pictures
                var product_name = document.createElement('div');
                product_name.setAttribute('class', 'product-info');
                li_products.appendChild(product_name);

                //product name
                var product_text = document.createTextNode(product_names[i] + ' | ');
                product_name.appendChild(product_text);

                //price
                var price_span = document.createElement('span');
                price_span.setAttribute('class', 'red');
                price_span.textContent = product_prices[i];
                product_name.appendChild(price_span);

                //view product button for each product
                var product_button = document.createElement('button');
                var product_link = document.createElement('a');
                product_link.setAttribute('href', 'product' + (i + 1) + '.html');
                product_button.setAttribute('class', 'product-button');
                product_button.textContent = 'VIEW PRODUCT';
                li_products.appendChild(product_link);
                product_link.appendChild(product_button);
            }
        }
        product_filter();
        product_loop();
    }
    list_of_products();
});
