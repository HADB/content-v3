<script setup lang="ts">
const route = useRoute()
const { data: page } = await useAsyncData(`page-${route.path}`, () => {
  return queryCollection('pages').path(route.path).first()
})

useSeoMeta(page.value?.seo || {})
console.log('page', page)
</script>

<template>
  <div>
    <ContentRenderer v-if="page" :value="page" />
    <div v-else>Page not found</div>
  </div>
</template>
