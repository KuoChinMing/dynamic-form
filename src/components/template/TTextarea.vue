<template >
  <v-textarea
  
    :disabled="false"
    class="h-100 p-0 "
    hide-details
  ></v-textarea>
</template>

<script>
export default {
  props: {
    data: {
      type: [Object, null],
      default: null,
    },
  },
};
</script>