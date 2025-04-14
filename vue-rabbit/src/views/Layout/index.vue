<template>
  <LayoutFixed/>
  <LayoutNav />
  <LayoutHeader />
  <!-- 二级路由出口 -->
  <RouterView :key="$route.fullPath"/>
  <LayoutFooter />
</template>

<script setup>
import LayoutNav from '@/views/Layout/components/LayoutNav.vue'
import LayoutHeader from './components/LayoutHeader.vue'
import LayoutFooter from './components/LayoutFooter.vue'
import LayoutFixed from './components/LayoutFixed.vue'

//触发获取导航列表action
import { useCategoryStore } from '@/stores/category'
import { onMounted } from 'vue'

const categoryStore =useCategoryStore()

onMounted(()=>categoryStore.getCategory())
</script>

