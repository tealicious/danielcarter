<template>
    <div class="row">
        <app-square v-for="(square, index) in row" :key="square + index" :square="square"></app-square>
    </div>
</template>
<script>
import Square from "./Square.vue";
export default {
  props: ["row"],
  components: {
    appSquare: Square
  }
};
</script>