<script lang="ts">
  let showDropDown = false;
  let shadow = false;
  document.addEventListener("scroll", () => (shadow = window.scrollY > 0));
</script>

<nav
  class="px-4 sticky top-0 bg-inherit z-10"
  class:shadow-md={shadow}
  on:blur={() => (showDropDown = false)}
>
  <div class="sm:hidden px-4 pt-6 pb-4">
    <svg
      viewBox="0 0 100 80"
      on:click={() => (showDropDown = !showDropDown)}
      class="w-6 h-6 cursor-pointer text-white"
      style="fill: currentColor;"
    >
      <rect width="100" height="10" />
      <rect y="30" width="100" height="10" />
      <rect y="60" width="100" height="10" />
    </svg>
  </div>
  <div
    class={`sm:mx-auto md:mr-0 sm:w-fit flex flex-col sm:flex-row justify-end overflow-hidden max-h-0 transition-[max-height] sm:max-h-[32rem] ${
      showDropDown ? "max-h-[32rem]" : ""
    }`}
    class:duration-2={showDropDown}
    class:duration-1={!showDropDown}
    on:click={() => (showDropDown = false)}
  >
    <a href="#home">Home</a>
    <a href="#apps">Apps</a>
    <a href="#merch">Merch</a>
    <a href="#info">Info</a>
    <a href="#about">About us</a>
    <a href="#submissions">Submissions</a>
    <a href="#faq">FAQs</a>
  </div>
</nav>
