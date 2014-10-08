$(function(){ 

        //------ SCROLL EFFECT-----//

        $('body').scrollspy({ 
          target: '.navbar-example' 
        });

        //------ VIEW MORE -----//


        $('div.view-more').on('click', function(e){
             e.preventDefault();
           $(this).siblings('div.hidden-box').slideToggle('fast');
         });






        //------ CAROUSEL -----//


        $('.carousel').carousel({
          interval:2000
        });

          
        



 });
