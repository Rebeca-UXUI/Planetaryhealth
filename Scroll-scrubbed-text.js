

<script>
document.addEventListener("DOMContentLoaded", function () {

  gsap.registerPlugin(ScrollTrigger);

  const quotes = document.querySelectorAll(".scroll-highlight");

  quotes.forEach((quote) => {

    const split = new SplitType(quote, { types: "chars" });

    gsap.from(split.chars, {
      scrollTrigger: {
        trigger: quote,
        start: "top 80%",
        end: "top 40%",
        scrub: true
      },
      opacity: 0.2,
      stagger: {
        each: 0.05
      }
    });

  });

});
</script>


