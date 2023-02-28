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
        nav: true,
        margin:10,
        autoplay:true,
        autoplayTimeout:6000,
        autoplayHoverPause:false,
        responsive: {
            0 : {
                items : 1,
            },
            576: {
                items : 1,
            },
            768: {
                items : 2,
            },
            992: {
                items: 3
            }
        }
    });
    $('.play').on('click',function(){
        owl.trigger('play.owl.autoplay',[1000])
    })
    $('.stop').on('click',function(){
        owl.trigger('stop.owl.autoplay')
    });
    // var myCarousel = document.querySelector('#carouselExampleIndicators')
    // var carousel = new bootstrap.Carousel(myCarousel, {
    //   interval: 500,
    //   pasue: false
    // })

//     var wow = new WOW();
//     console.log(wow);
//     // Helper function for add element box list in WOW
//   WOW.prototype.addBox = function(element) {
//     this.boxes.push(element);
//   };
//   wow.init();
//     $('.wow').on('scrollSpy:exit', function() {
//         $(this).css({
//           'visibility': 'hidden',
//           'animation-name': 'none'
//         }).removeClass('animated');
//         wow.addBox(this);
//       }).scrollSpy();

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


    
    let silde1 = document.getElementById('slide1');
    let silde2 = document.getElementById('slide2');
    let silde3 = document.getElementById('slide3');
    let silde4 = document.getElementById('slide4');
    let silde5 = document.getElementById('slide5');
    silde1.addEventListener('click', openAccordion.bind(null, 'fleet-1', 'collapseOne'));
    silde2.addEventListener('click', openAccordion.bind(null, 'fleet-2', 'collapseTwo'));
    silde3.addEventListener('click', openAccordion.bind(null, 'fleet-3', 'collapseThree'));
    silde4.addEventListener('click', openAccordion.bind(null, 'fleet-4', 'collapseFour'));
    silde5.addEventListener('click', openAccordion.bind(null, 'fleet-5', 'collapseFive'));
    function openAccordion(btnClass, accId) {
        let btn = document.getElementById(btnClass);
        let acc = document.getElementById(accId);
        btn.classList.remove('collapsed');
        acc.classList.add('show');
        setTimeout(() => {
            window.scroll({top: acc.offsetTop - 170});
        }, 300)
    }
});
