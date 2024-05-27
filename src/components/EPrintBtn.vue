<script setup>
import { ref } from 'vue';
import LessonMenu from '@/components/LessonMenu.vue'

const props = defineProps({
    nombre: {
        type: String,
        default: 'Lesson',
    },
    cod_tema: {
        type: String
    }
})

const imageSrc = ref('http://linguagat.inscastellet.cat/assets/egreen.png');

const changeImage = (newSrc) => {
    imageSrc.value = newSrc;
};
</script>
<template>
    <PrintBtn>
        <v-img :src="imageSrc" width="100" cover
            @mouseover="changeImage('http://linguagat.inscastellet.cat/assets/eselected.png')"
            @mouseleave="changeImage('http://linguagat.inscastellet.cat/assets/egreen.png')">
        </v-img>
        <LessonMenu :cod_tema="props.cod_tema"></LessonMenu>
    </PrintBtn>
</template>
<style scoped></style>