<script lang="ts">
  import Button from "./Button.svelte";

  export let title: string;
  export let isNew = false;
  export let windowsUrl: string;
  export let appleUrl: string;
  export let androidUrl: string;
</script>

<div class="w-11/12 md:w-5/12 my-2 px-8 py-6 shadow border border-bg-dark">
  <header class="text-lg font-semibold mb-4 flex items-center">
    {title}
    {#if isNew}
      <span class="new">New</span>
    {/if}
  </header>

  <div class="flex flex-wrap text-sm">
    <Button
      altText="Windows logo"
      iconUrl="https://img.icons8.com/ios-filled/50/000000/windows-10.png"
      text="Windows via Steam"
      url={windowsUrl}
    />

    <Button
      altText="Apple logo"
      iconUrl="https://img.icons8.com/ios-filled/30/000000/mac-os.png"
      text="iOS"
      url={appleUrl}
    />

    <Button
      altText="Android logo"
      iconUrl="https://img.icons8.com/ios-filled/50/000000/android-os.png"
      text="Android"
      url={androidUrl}
    />
  </div>
  <slot />
</div>
