<script lang="ts">
  import Icon from "./Icon.svelte";

  export let title: string;
  export let url: string = null;
  export let iconUrl: string;
  export let altText = title;
</script>

<div
  class="mt-6 px-6 py-4 hover:bg-gs-3 transition duration-1 rounded-sm"
  class:cursor-pointer={url}
>
  {#if url}
    <a href={url} target="_blank">
      <h3>
        <Icon url={iconUrl} {altText} />
        {title}
      </h3>
      <slot />
    </a>
  {:else}
    <h3>
      <Icon url={iconUrl} {altText} />
      {title}
    </h3>
    <slot />
  {/if}
</div>
