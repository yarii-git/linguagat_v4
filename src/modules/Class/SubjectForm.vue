<script setup>
import SubjectHeader from '../../components/SubjectHeader.vue';
import LessonList from '../../components/LesonList.vue'


</script>
<template>
    <div v-for="subject in subjects" :key="subject.cod_nivel">
        <SubjectHeader :title="subject.cod_nivel" :subtitle="subject.nombre"></SubjectHeader>
        <LessonList></LessonList>
    </div>
</template>
<style scoped></style>