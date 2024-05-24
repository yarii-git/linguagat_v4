<script setup>
import { ref } from 'vue';

const props = defineProps({
    nombre: {
        type: String,
        default: 'Lesson',
    }
})

const imageSrc = ref('http://linguagat.inscastellet.cat/assets/dgreen.png');

const changeImage = (newSrc) => {
    imageSrc.value = newSrc;
};


</script>
<template>
    <v-speed-dial transition="fade-transition">
        <template v-slot:activator="{ props: activatorProps }">
            <v-fab v-bind="activatorProps" size="large" color='surface' variant='outlined' rounded='circle'
                height='130'>
                <v-img :src="imageSrc" width="100" cover
                    @mouseover="changeImage('http://linguagat.inscastellet.cat/assets/dselected.png')"
                    @mouseleave="changeImage('http://linguagat.inscastellet.cat/assets/dgreen.png')">
                </v-img>
            </v-fab>
        </template>


        <v-card key="1">
            <v-card-item><v-card-title class="text-center">{{ nombre }}</v-card-title></v-card-item>
            <v-card-actions>
                <v-btn color="info" elevation="4" class="bg-primary" size="large"><v-icon>mdi-play</v-icon></v-btn>
                <v-btn icon="mdi-plus" color="background" elevation="4" class="bg-info"> </v-btn>
            </v-card-actions>
        </v-card>
    </v-speed-dial>
</template>
<style scoped></style>