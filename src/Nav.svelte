<script lang="ts">
  let shadow = false;
  document.addEventListener("scroll", () => (shadow = window.scrollY > 0));
</script>

<nav class="flex justify-end px-4 sticky top-0 bg-inherit" class:shadow>
  <a href="#home">Home</a>
  <a href="#apps">Apps</a>
  <a href="#info">Info</a>
  <a href="#about">About us</a>
  <a href="#submissions">Submissions</a>
  <a href="#faq">FAQs</a>
</nav>
