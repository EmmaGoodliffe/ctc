<script lang="ts">
  import Button from "./Button.svelte";

  export let title: string;
  export let isNew = false;
  export let windowsUrl: string;
  export let appleUrl: string;
  export let androidUrl: string;
</script>

<div
  class="w-11/12 md:w-5/12 my-2 px-8 py-6 bg-dark shadow border-[3px] border-light rounded-md"
  style="--tw-bg-opacity: 0.44;"
>
  <header class="text-lg font-semibold mb-4 flex items-center">
    {title}
    {#if isNew}
      <span class="new">New</span>
    {/if}
  </header>

  <div class="flex flex-wrap text-sm">
    <Button
      altText="Windows logo"
      iconUrl="../public/img/icon/windows.svg"
      text="Windows via Steam"
      url={windowsUrl}
    />

    <Button
      altText="Apple logo"
      iconUrl="../public/img/icon/apple.svg"
      text="iOS"
      url={appleUrl}
    />

    <Button
      altText="Android logo"
      iconUrl="../public/img/icon/android.svg"
      text="Android"
      url={androidUrl}
    />
  </div>
  <slot />
</div>
