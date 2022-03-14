<template>
  <div id="app">
    <div class="">
      <VuePaginationTw
        :total-items="20"
        :current-page="1"
        :per-page="6"
        @page-changed="functionName"
        :go-button="false"
        styled="centered"
      />
    </div>
  </div>
</template>

<script>
import VuePaginationTw from 'vue-pagination-tw';

// import 'vue-pagination-tw/styles'; // tailwind basic styles

export default {
  name: 'App',
  components: {
    VuePaginationTw,
  },
  methods: {
    functionName() {},
  },
};
</script>

<style></style>