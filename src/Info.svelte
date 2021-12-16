<script lang="ts">
  import Icon from "./Icon.svelte";

  export let title: string;
  export let url: string = null;
  export let iconUrl: string;
  export let altText = title;
</script>

<div class="hover:bg-white transition duration-200" class:cursor-pointer={url}>
  {#if url}
    <a href={url}>
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
