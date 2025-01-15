<template>
  <div class="flex justify-center items-center pt-10">
    <div class="w-[1000px]">
    <a-carousel autoplay >
    <div><h3>1</h3></div>
    <div><h3>2</h3></div>
    <div><h3>3</h3></div>
    <div><h3>4</h3></div>
  </a-carousel>
  </div>
  </div>
 
 
</template>
<script setup>
const onChange = current => {
  console.log(current);
};
</script>
<style scoped>

/* For demo */
:deep(.slick-slide) {
  text-align: center;
  height: 160px;
  line-height: 160px;
  background: #364d79;
  overflow: hidden;
}

:deep(.slick-slide h3) {
  color: #fff;
}
</style>