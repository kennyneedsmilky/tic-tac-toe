<template>
  <div>
    <b-container>
      <b-row>
        <b-col>
          <h1>{{ $t('pages.pageHome') }}</h1>
        </b-col>
      </b-row>
      <b-row>
        <b-col>
          {{ $t('messages.msg001') }}
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  name: 'PageHome',
  data() {
    return {

    }
  },
}
</script>

<style scoped>

</style>