<template>
  <div class="banner" id="banner-home">
    <n-image
      src="https://images.unsplash.com/photo-1533481051286-d6396b74c877?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1691&q=80"
      object-fit="cover"
    />
  </div>
  <!--buggy sortbybutton that has to be fixed-->
  <div>
    <SortByButton />
  </div>

  <div class="work-page">
    <n-grid x-gap="12" :cols="4">
      <n-gi>
        <n-card title="Card">
          <template #cover>
            <img
              src="https://images.unsplash.com/flagged/photo-1572392640988-ba48d1a74457?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=928&q=80"
            />
          </template>
          Product Details
        </n-card>
      </n-gi>
      <n-gi>
        <n-card title="Card">
          <template #cover>
            <img
              src="https://images.unsplash.com/photo-1605721911519-3dfeb3be25e7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
            />
          </template>
          Product Details
        </n-card>
      </n-gi>
      <n-gi>
        <n-card title="Card">
          <template #cover>
            <img
              src="https://images.unsplash.com/photo-1536924940846-227afb31e2a5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1766&q=80"
            />
          </template>
          Product Details
        </n-card>
      </n-gi>
      <n-gi>
        <n-card title="Card">
          <template #cover>
            <img
              src="https://images.unsplash.com/photo-1561214115-f2f134cc4912?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=818&q=80"
            />
          </template>
          Product Details
        </n-card>
      </n-gi>
    </n-grid>
  </div>
</template>

<style>
.n-card {
  width: 18vmax;
  height: 200px;
}
.light-green {
  height: 108px;
  background-color: rgba(0, 128, 0, 0.12);
}
.green {
  height: 108px;
  background-color: rgba(0, 128, 0, 0.24);
}
.work-page {
  width: 80vmax;
  margin-left: auto;
}
#banner-home {
  height: 200px;
  width: 100vw;
  margin-left: auto;
  margin-right: auto;
}
</style>

<script>
import { defineComponent } from "vue";
import SortByButton from "../components/SortByButton.vue";

export default defineComponent({
  setup() {},
  name: "App",
  components: {
    SortByButton,
  },
});
</script>
