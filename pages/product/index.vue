<template>
  <div>
    <!-- ========== HEADER ========== -->
    <Header />
    <!-- ========== END HEADER ========== -->
    <!-- ========== FOOTER ========== -->
    <Footer />
    <!-- ========== END FOOTER ========== -->
  </div>
</template>

<script setup lang="ts">
import Header from "~/components/header.vue";
import Footer from "~/components/footer.vue";
import { defineExpose } from 'vue'

useHead({ title: '产品' });

defineExpose({
  components: {
    Header,
    Footer,
  },
});
</script>
