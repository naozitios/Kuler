<template>
  <n-dropdown trigger="hover" :options="options" @select="handleSelect">
    <n-button> Go For a Trip </n-button>
  </n-dropdown>
</template>

<script>
import { defineComponent } from "vue";
import { useMessage } from "naive-ui";

export default defineComponent({
  setup() {
    const message = useMessage();
    return {
      options: [
        {
          label: "Marina Bay Sands",
          key: "marina bay sands",
          disabled: true
        },
        {
          label: "Brown's Hotel, London",
          key: "brown's hotel, london"
        },
        {
          label: "Atlantis Bahamas, Nassau",
          key: "atlantis nahamas, nassau"
        },
        {
          label: "The Beverly Hills Hotel, Los Angeles",
          key: "the beverly hills hotel, los angeles"
        }
      ],
      handleSelect(key) {
        message.info(String(key));
      }
    };
  }
});
</script>