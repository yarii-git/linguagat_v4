<script setup>
import { ref, onMounted } from 'vue';

// Array con los nombres de tus GIFs
const gifs = [
    "q1.gif",
    "q2.gif",
    "q3.gif",
    "q4.gif",
    "q5.gif",
    "q6.gif",
    "q7.gif",
    "q8.gif",
    "q9.gif",
    "q10.gif",
    "q11.gif",
    "q12.gif",
    "q13.gif",
    "q14.gif",
    "q15.gif",
    "q16.gif",
    "q17.gif",
    "q18.gif",
    "q19.gif",
    "q20.gif",
    "q21.gif",
    "q22.gif",
    "q23.gif",
    "q24.gif",
    "q25.gif",
    "q26.gif",
    "q27.gif",
    "q28.gif",
    "q29.gif",
    "q30.gif",
];

// Variable para almacenar el src del GIF seleccionado
const randomGif = ref('');

// Función para seleccionar un GIF aleatorio
const getRandomGif = () => {
    const randomIndex = Math.floor(Math.random() * gifs.length);
    randomGif.value = `http://linguagat.inscastellet.cat/assets/${gifs[randomIndex]}`;
};

// Llama a getRandomGif cuando se monta el componente
onMounted(() => {
    getRandomGif();
});
</script>

<template>
    <v-img max-height="100" max-width="200" aspect-ratio="16/9" :src="randomGif"></v-img>
</template>

<style scoped></style>
