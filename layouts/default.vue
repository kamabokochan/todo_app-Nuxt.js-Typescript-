<template>
  <div class="wrap">
    <Header></Header>
    <nuxt />
    <Footer></Footer>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import Header from '~/components/main/Header'
import Footer from '~/components/main/Footer'

@Component({
  components: {
    Header,
    Footer
  }
})
export default class Default extends Vue {}
</script>

<style lang="stylus">
* {
  margin: 0;
  padding: 0;
}

ul,
li {
  list-style: none;
}

.wrap {
  padding: 44px 0;
}
</style>
