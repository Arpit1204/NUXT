<template>
  <div>
  <Head>
    <Title>Nuxt Dojo | {{ product.title }}</Title>
    <Metaname name= 'Description' :content="product.description"/>
  </Head>
  <ProductDetails :product="product"/>
    
  </div>
</template>

<script setup>
const { id } = useRoute().params;

definePageMeta({
    layout:'products'
})

const {data:product} = await useFetch(`https://fakestoreapi.com/products/${id}` , {key:id})

  if(!product.value){
    throw createError({
      statusCode:404,
      statusMessage:'Page not Found: ' + '/products/' +id
      , fatal:true
    })
  }
</script>


<style lang="scss" scoped>
</style>