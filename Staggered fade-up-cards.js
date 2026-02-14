
<script>
document.addEventListener("DOMContentLoaded", function() {

  gsap.registerPlugin(ScrollTrigger);

  const cards = gsap.utils.toArray([
    ".card-item-1",
    ".card-item-2",
    ".card-item-3"
  ]);

  gsap.from(cards, {
    scrollTrigger: {
      trigger: ".planetary-section-wrap",
      start: "top 40%",
      toggleActions: "play none none none"
    },
    y: 60,
    opacity: 0,
    duration: 0.8,
    ease: "power3.out",
    stagger: 0.2
  });

});
</script>
