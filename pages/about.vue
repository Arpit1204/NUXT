<template>
    <div>
      <h2>About</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque aspernatur
        laboriosam voluptas aut suscipit laborum? Laudantium, earum? Dolor
        pariatur, quas nesciunt repudiandae tenetur eius assumenda ullam
        blanditiis non consectetur, velit voluptas perferendis a veritatis cum ut
        reprehenderit eos ipsa harum tempora animi quasi? Laborum obcaecati
        molestiae consequuntur ducimus ut quasi qui explicabo quisquam fugit
        cumque sunt, tenetur voluptatibus porro dolor, quia rerum sequi quas
        necessitatibus illum doloremque? Minus, placeat earum! Earum
        necessitatibus voluptatum modi dignissimos quod nesciunt tempore nemo
        magnam vitae hic alias mollitia harum officiis eveniet commodi aliquam
        quis similique, nisi odit dolorum neque sequi. Consectetur eveniet dicta
        dolor?
      </p>

      <p> {{ data }}</p>
    </div>
  </template>
  
  <script setup>
  const {data} = await useFetch('/api/ninja')
  </script>
    
  <style scoped>
  h2{
      margin-bottom: 20px;
      font-size: 36px;
  }
  p{
      margin: 20px 0;
  }
  </style>