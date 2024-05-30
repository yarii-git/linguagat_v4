<script setup>
import Gif from '@/components/Gif.vue'
import Bubble from '@/components/Bubble.vue'
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

// Reactive array to store selected responses
const selectedAnswer = ref([]);

// Function to select an answer
const selectAnswer = (button) => {
    if (!selectedAnswer.value.includes(button)) {
        selectedAnswer.value.push(button);
    }
};

// Function to delete an answer
const removeAnswer = (answer) => {
    const index = selectedAnswer.value.indexOf(answer);
    if (index !== -1) {
        selectedAnswer.value.splice(index, 1);
    }
};

// Function to check if the answer is correct
const checkAnswer = () => {
    const correctAnswer = props.exercise.respuesta;

    const isCorrect = selectedAnswer.value.join(' ') == correctAnswer
    selectedAnswer.value = [];

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
            What it means?
        </v-card-title>

        <div class="d-flex">
            <Gif></Gif>
            <Bubble :pregunta="exercise.pregunta"></Bubble>
        </div>

        <v-card-text class="d-flex flex-column justify-space-around">
            <v-divider :thickness="3" color="info"></v-divider>
            <div class="d-flex flex-wrap">
                <TextBtn v-for="(answer, index) in selectedAnswer" :key="index" class="ma-2"
                    @click="removeAnswer(answer)">
                    {{ answer }}
                </TextBtn>
            </div>
            <v-divider :thickness="3" color="info"></v-divider>
        </v-card-text>

        <v-card-actions class="d-flex flex-wrap justify-center">
            <template v-for="(button, i) in exercise.botones" :key="i">
                <TextBtn @click="selectAnswer(button)" class="mb-2">{{ button }}</TextBtn>
            </template>
        </v-card-actions>
    </v-card>
</template>

<style scoped></style>
