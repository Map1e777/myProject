<template>
  <div class="container">
    <HomeCategory />
    <HomeBanner />
  </div>
  <HomeNew />
  <HomeHot />
  <HomeProduct />
<HomePanel title="新鲜好恶" sub-title="ahahah">
<div>我是查拆</div>
</HomePanel>
<HomePanel title="哈哈哈哈">

</HomePanel>
</template>

<script setup>
import HomeBanner from './components/HomeBanner.vue';
import HomeHot from './components/HomeHot.vue';
import HomeNew from './components/HomeNew.vue';
import HomeCategory from './components/HomeCategory.vue';
import HomeProduct from './components/HomeProduct.vue';
import HomePanel from './components/HomePanel.vue';
</script>
