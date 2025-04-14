//封装分类板块 category
import { ref, onMounted } from 'vue'
import { getCategoryAPI } from '@/apis/category'
import { useRoute } from 'vue-router'

export function useCategory() {
  const categoryData = ref({})
  const route = useRoute()
  const getCategory = async () => {
    const res = await getCategoryAPI(route.params.id)
    categoryData.value = res.result
    console.log(categoryData.value.children);
  }
  onMounted(() => getCategory())
  return {
    categoryData
  }
}
