<template>
  <v-radio-group
    class="mt-0"
    dense
    hide-details
    :style="style"
    :row="data['direction'] === 'row'"
    :column="data['direction'] === 'column'"
  >
    <v-radio
      v-for="(option, index) in [
        { value: '1' },
        { value: '2' },
        { value: '3' },
      ]"
      :key="index"
      :label="option.value"
      :value="option.value"
    ></v-radio>
  </v-radio-group>
</template>

<script>
export default {
  props: {
    data: {
      type: [Object, null],
      default: null,
    },
  },

  data() {
    return {
      style: {
        width: this.data.width,
      },
    };
  },
};
</script>
