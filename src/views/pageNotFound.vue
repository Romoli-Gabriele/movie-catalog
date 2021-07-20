<template>
  <h1 class="titolo">404</h1>
  <h3 class="sottotitolo" style="text-transfrom: capitalize;">{{$t('page-not-found')}}</h3>
  <p class="testo first-letter-capitalize">{{ $t('the-page-you-are-looking-for-does-not-exist')}}.</p>
  <router-link :to="{ name: 'Home' }">
    <button type="button" class="btn btn-outline-danger first-letter-capitalize">{{ $t('return-home')}}</button>
  </router-link>
</template>

<style scoped>
* {
  color: #dc3545;
}
.titolo {
  font-size: 150px;
  font-weight: bold;
}

.sottotitolo {
  font-size: 50px;
}

.first-letter-capitalize::first-letter{
  text-transform: capitalize;
}
</style>