<script setup>
import DPrintBtn from '@/components/DPrintBtn.vue';
import EPrintBtn from '@/components/EPrintBtn.vue';
import LessonHeader from '@/components/LessonHeader.vue';
import ToolbarComponent from '@/components/ToolbarComponent.vue';
</script>

<template>
  <main>
    <ToolbarComponent></ToolbarComponent>
    <EPrintBtn></EPrintBtn>
    <DPrintBtn></DPrintBtn>
    <LessonHeader title="Title 1" subtitle="Sub 1" lesson="#"></LessonHeader>
  </main>
</template>
