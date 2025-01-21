<script setup lang="ts">
const route = useRoute()
const { data: post } = await useAsyncData(`page-${route.path}`, () => {
  return queryCollection('posts').path(route.path).first()
})

useSeoMeta(post.value?.seo || {})
console.log('post', post)
</script>

<template>
  <div>
    <ContentRenderer v-if="post" :value="post" />
    <div v-else>Page not found</div>
  </div>
</template>
