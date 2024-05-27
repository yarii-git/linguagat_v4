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
const imageSrc = ref('http://linguagat.inscastellet.cat/assets/dgreen.png');

const changeImage = (newSrc) => {
    imageSrc.value = newSrc;
};
</script>
<template>
    <PrintBtn>
        <v-img :src="imageSrc" width="100" cover
            @mouseover="changeImage('http://linguagat.inscastellet.cat/assets/dselected.png')"
            @mouseleave="changeImage('http://linguagat.inscastellet.cat/assets/dgreen.png')">
        </v-img>
        <LessonMenu :nombre="props.nombre" :cod_tema="props.cod_tema"></LessonMenu>
    </PrintBtn>
</template>
<style scoped></style>