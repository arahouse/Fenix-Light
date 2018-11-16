$(document).ready(function () {
   /* $('.lazy').lazy();*/
    var Events = {},
        App = {};
    Events = {
        init: function () {
            $('a.scroll[href^="#"]').click(function () {
                var elementClick = $(this).attr("href"),
                    headerHeight = $('header').height(),
                    destination = $(elementClick).offset().top - headerHeight;
                $('html, body').animate({scrollTop: destination}, 1100);
                $('#mobile-nav').removeClass('header_nav_mobile_opened');
                return false;
            });
            $('#menu-burger,#close-menu').click(function () {
                $('#mobile-nav').toggleClass('header_nav_mobile_opened');

            });

            var height = $(window).scrollTop();

            if (height != 0) {
                $('header').addClass('fixed');
            }
            else {
                $('header').removeClass('fixed');
            }
            $(document).scroll(function () {
                var height = $(window).scrollTop();

                if (height != 0) {
                    $('header').addClass('fixed');
                }
                else {
                    $('header').removeClass('fixed');
                }
            });
            $(".open-modal").click(function() {
                var modalBlock = $(this).attr('data-modal-target');
                $(this).modal({
                    modalBlock: $('#'+modalBlock),
                    modalBlocks: $(".modal-block")
                });
            });
            var typed = new Typed('#typed', {
                stringsElement: '#typed-strings',
                typeSpeed: 50,
                backSpeed: 10,
                loop: true,
                startDelay: 500,
                autoInsertCss: true
            });

             lightbox.option({
              'resizeDuration': 200,
              'wrapAround': true,
              'alwaysShowNavOnTouchDevices' : true,
              'albumLabel': "Изображение %1 из %2"
            });
        },
        formSend: function () {
            $('form').on('submit', function (e) {
                e.preventDefault();
                var form = $(this);
                form.fadeOut();
                form.siblings('.callback_loading').fadeIn();

                $.ajax({
                    url: '/send_message.php',
                    type: 'post',
                    data: form.serialize(),
                    success: function (data) {
                        form.siblings('.callback_loading').fadeOut();
                        form.siblings('.success-message').fadeIn();
                        console.log(data);
                    },
                    error: function () {
                        console.log(data);
                        form.siblings('.callback_loading').fadeOut();
                        form.siblings('.error-message').fadeIn();
                    }
                });

                return false;
            });
        }
    };

    App = {
        init: function () {
            Events.init();
            Events.formSend();
        }
    };


    App.init();



});




            
