<script setup>
import Gif from '@/components/Gif.vue'
const props = defineProps({
    exercise: {
        type: Object
    }
})

const selectAnswer = (button) => {

}
</script>

<template>
    <v-card rounded="0">
        <Gif></Gif>
        <v-card-item>
            <v-card-title>
                Write this word in English
            </v-card-title>
        </v-card-item>
        <v-card-text>
            <p>
                {{ exercise.pregunta }} {{ exercise.botones }}
            </p>
        </v-card-text>
    </v-card>
</template>



<style scoped></style>