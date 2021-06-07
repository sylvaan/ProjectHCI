<script>
    var Slideidx = 1;
    displaySlide(Slideidx);

    function moveSlide(x){
        displaySlide(Slideidx + x);
    }

    function activeSlide(x){
        displaySlide(Slideidx = x);
    }

    function displaySlide(x){
        var i;
        var totalSlides = document.getElementsbyClassName("slide");

        var dots = document.getElementsbyClassName("footerdot");

        if (x > totalSlides.length; i++)
    }
</script>