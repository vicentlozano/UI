<template>
  <BaseCard>
    <transition name="fade-button" mode="out-in">
      <BaseButton v-if="is" @click="changeIs">First</BaseButton>
      <BaseButton v-else @click="changeIs">Second</BaseButton>
    </transition>
  </BaseCard>
</template>
<script>
export default {
  data() {
    return {
      is: true,
    };
  },
  methods: {
    changeIs() {
      this.is = !this.is;
    },
  },
};
</script>
