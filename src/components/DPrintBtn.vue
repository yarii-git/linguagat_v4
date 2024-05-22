<script setup>
import { ref } from 'vue';

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
    </PrintBtn>
</template>
<style scoped></style>