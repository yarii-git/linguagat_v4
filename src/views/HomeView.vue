<script setup>

import LevelForm from '@/modules/Class/LevelForm.vue';
import AppLayout from '@/layouts/AppLayout.vue';


// const levelsStore = useLevelsStore()
// const levels = ref([])

// const loadLevels = async () => {
//   const success = await levelsStore.obtainLevels()
//   if (success) {
//     levels.value = levelsStore.levels
//   }
// }

// onMounted(() => {
//   loadLevels()
// })
</script>

<template>
  <AppLayout>
    <!-- :levels=levels -->
    <LevelForm></LevelForm>
  </AppLayout>
</template>
