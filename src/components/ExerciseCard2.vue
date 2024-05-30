<script setup>
import Gif from '@/components/Gif.vue';
import Bubble from '@/components/Bubble.vue';
import { ref, watch, defineEmits } from 'vue';

const emit = defineEmits(['answer-checked']);
const props = defineProps({
    exercise: {
        type: Object
    },
    checkClicked: {
        type: Boolean,
        default: false
    }
});

// Reactive variable to store the user's response
const userResponse = ref('');

// Function to check if the answer is correct
const checkAnswer = () => {
    const correctAnswer = props.exercise.respuesta;

    console.log(correctAnswer)

    const isCorrect = userResponse.value.trim().toLowerCase() === correctAnswer.trim().toLowerCase();
    userResponse.value = '';

    // Issue event to parent with verification result
    emit('answer-checked', isCorrect);
};

// Observe changes to the checkClicked property of the parent
watch(() => props.checkClicked, (newValue) => {
    if (newValue) {
        checkAnswer();
    }
});
</script>

<template>
    <v-card rounded="0" min-height="500" class="d-flex flex-column justify-space-around" variant="flat">
        <v-card-title class="font-weight-bold text-h5 ma-2">
            Write this word in Catalan
        </v-card-title>

        <div class="d-flex">
            <Gif></Gif>
            <Bubble :pregunta="exercise.pregunta"></Bubble>
        </div>

        <v-card-text class="d-flex flex-column justify-space-around">
            <v-textarea bg-color="secondaryLight" label="Response" row-height="20" rows="3" variant="filled" auto-grow
                color="primary" v-model="userResponse"></v-textarea>
        </v-card-text>
    </v-card>
</template>

<style scoped></style>
