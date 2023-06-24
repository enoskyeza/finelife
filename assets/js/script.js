const tnslider = tns({
    container: '.my-slider',
    items: 1,
    slideBy: 1,
    gutter: 20,
    speed: 700,
    nav:false,
    autoPlay:true,
    autoPlayTimeout:7000,
    autoPlayButtonOutput:false,
    controlsContainer: "#controls",
    prevButton: ".previous-btn",
    nextButton: ".next-btn",
    touch: false,
    responsive: {
        700: {
            items: 2
        },
        900: {
          items: 3
        },
        1445: {
          items: 4
        }
      }
})