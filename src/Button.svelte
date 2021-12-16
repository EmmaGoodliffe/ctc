<script lang="ts">
  import Icon from "./Icon.svelte";

  export let iconUrl: string;
  export let text: string;
  export let altText = text;
  export let url: string;
</script>

<a href={url} class="mr-4 mb-2 min-w-max">
  <button
    class="flex items-center justify-between rounded border border-sky-800 px-4 py-2"
  >
    <Icon url={iconUrl} {altText} />
    {text}
  </button>
</a>
