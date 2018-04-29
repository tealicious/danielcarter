<template>
  <data-table v-if="!loadingRows"></data-table>
</template>
<script>
import DataTable from "@/views/DataTable";
export default {
  components: { DataTable },
  computed: {
    loadingRows() {
      return this.$store.getters.loading;
    }
  },
  created() {
    this.$store.dispatch("LOAD");
  }
};
</script>