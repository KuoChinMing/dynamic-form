<template>
  <div class="111">
    <v-select
      :items="['Foo', 'Bar', 'Fizz', 'Buzz']"
      :hide-details="true"
      class="m-0 pt-0 mt-0"
    ></v-select>
  </div>
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
