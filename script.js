var tiny = $('#tiny').tiny().data('api_tiny');



$(document).ready(function(){
    $('.owl-carousel').owlCarousel({
        items:4,
        loop:true,
        autoplay:true,
        responsiveClass:true,
        responsive: {
            1280:{
                items:4
            },


            1079:{
                items:4
            },

            991: {
                items: 3
            },

            757: {
                items: 3
            },

            688: {
                items: 2
            },


            500: {
                items: 2
            },

            513: {
                items: 2
            },

            200: {
                items: 1
            }
        }
    });
  });


  