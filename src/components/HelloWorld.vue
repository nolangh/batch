<script setup>
import { ref } from "vue";
import { card } from `bootstrap-vue`

defineProps({
  msg: String,
});

const count = ref(0);
</script>

<template>
  <div>
    <b-card
      title="Card Title"
      img-src="https://picsum.photos/600/300/?image=25"
      img-alt="Image"
      img-top
      tag="article"
      style="max-width: 20rem"
      class="mb-2"
    >
      <b-card-text>
        Some quick example text to build on the card title and make up the bulk
        of the card's content.
      </b-card-text>

      <b-button href="#" variant="primary">Go somewhere</b-button>
    </b-card>
  </div>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
