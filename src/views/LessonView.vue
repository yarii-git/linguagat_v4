<script setup>
import AppLayout from '@/layouts/AppLayout.vue';
import LessonForm from '@/modules/Class/LessonForm.vue'

const props = defineProps({
    id: {
        type: String
    }
})

console.log(props.id)

</script>
<template>
    <AppLayout>
        <LessonForm :cod_leccion="id"></LessonForm>
    </AppLayout>
</template>
<style scoped></style>