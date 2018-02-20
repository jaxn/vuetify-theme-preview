<template lang="pug">
  fullpage-view
    div.text-xs-center.mb-5
    v-btn(icon :disabled="current === 1" @click="current = current - 1")
      v-icon chevron_left
    span.body-2 {{ current }} / {{ total }}
    v-btn(icon :disabled="current === total" @click="current = current + 1")
      v-icon chevron_right
    component(:is="components[current - 1]" :dark="dark")
</template>

<script>
  import Components from '@/components/generator'

  export default {
    data () {
      return {
        components: Components,
        current: 1,
        dark: false,
        total: Components.length
      }
    }
  }
</script>
