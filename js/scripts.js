/*!
* Start Bootstrap - Creative v7.0.5 (https://startbootstrap.com/theme/creative)
* Copyright 2013-2021 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-creative/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            offset: 74,
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });



    var owl = $('.owl-carousel');
    owl.owlCarousel({
        items:3,
        loop:true,
        margin:10,
        autoplay:true,
        autoplayTimeout:6000,
        autoplayHoverPause:true
    });
    $('.play').on('click',function(){
        owl.trigger('play.owl.autoplay',[1000])
    })
    $('.stop').on('click',function(){
        owl.trigger('stop.owl.autoplay')
    })

    // var myCarousel = document.querySelector('#carouselExampleIndicators')
    // var carousel = new bootstrap.Carousel(myCarousel, {
    //   interval: 500,
    //   pasue: false
    // })

    var inputName = document.getElementById('name');
    var inputEmail = document.getElementById('email');
    var inputMessage = document.getElementById('message');
    var btn = document.getElementById('my-form-button');

    // inputName.addEventListener('keyup', checkValid);
    inputName.addEventListener('input', checkValid);

    // inputEmail.addEventListener('keyup', checkValid);
    inputEmail.addEventListener('input', checkValid);

    // inputMessage.addEventListener('keyup', checkValid);
    inputMessage.addEventListener('input', checkValid);

    function checkValid() {
        if(inputName.value == "" || inputEmail.value == "" || inputMessage.value == "") {
            btn.setAttribute('disabled', true)
        } else {
            btn.removeAttribute('disabled')
        }
    }



    var form = document.getElementById("my-form");
            
    async function handleSubmit(event) {
        event.preventDefault();
        var status = document.getElementById("my-form-status");
        var data = new FormData(event.target);
        fetch(event.target.action, {
        method: form.method,
        body: data,
        headers: {
            'Accept': 'application/json'
        }
        }).then(response => {
        if (response.ok) {
            status.innerHTML = "Message has been sent successfully";
            status.classList.add('alert', 'alert-success');
            setTimeout(() => {
                status.innerHTML = '';
                status.classList.remove('alert', 'alert-success')
            }, 5000);
            form.reset();
            btn.setAttribute('disabled', true)
        } else {
            response.json().then(data => {
            if (Object.hasOwn(data, 'errors')) {
                status.innerHTML = data["errors"].map(error => error["message"]).join(", ");
                status.classList.add('alert', 'alert-danger');
                setTimeout(() => {
                status.innerHTML = '';  
                status.classList.remove('alert', 'alert-danger')
            }, 5000);
                form.reset();
                btn.setAttribute('disabled', true);
            } else {
                status.innerHTML = "Something went wrong, please try again later";
                status.classList.add('alert', 'alert-danger');
                setTimeout(() => {
                status.innerHTML = '';  
                status.classList.remove('alert', 'alert-danger')
            }, 5000);
                form.reset();
                btn.setAttribute('disabled', true)
            }
            })
        }
        }).catch(error => {
        status.innerHTML = "Something went wrong, please try again later";
        status.classList.add('alert', 'alert-danger');
        setTimeout(() => {
            status.innerHTML = '';
            status.classList.remove('alert', 'alert-danger')
            }, 5000);
        form.reset();
        btn.setAttribute('disabled', true)
        });
    }
    form.addEventListener("submit", handleSubmit)
});
