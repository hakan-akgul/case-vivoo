<template>
  <div>
    <p>
      {{ product.title }}
    </p>
  </div>
</template>

<script>
export default {
  name: 'ProductItem',

  props: {
    product: {
      type: Object,
      required: true
    }
  },

  data() {
    return {

    }
  }
}

</script>
