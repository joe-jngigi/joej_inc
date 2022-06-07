/*Grab the smooth scroll js*/
$('.scrollEffect a').on('click',function(event){
    if(this.hash !== ''){
        event.preventDefault();
        const hash = this.hash;
        $('html, body').animate(
            {
                scrollTop: $(hash).offset().top
            },
            800,
            function(){
                window.location.hash = hash;
            }
        );
    }
});

/*Scroll on js*/
