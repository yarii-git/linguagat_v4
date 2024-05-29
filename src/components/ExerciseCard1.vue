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

// Array reactivo para almacenar las respuestas seleccionadas
const selectedAnswers = ref([]);

// Función para seleccionar una respuesta
const selectAnswer = (button) => {
    if (!selectedAnswers.value.includes(button)) {
        selectedAnswers.value.push(button);
    }
};

// Función para eliminar una respuesta
const removeAnswer = (answer) => {
    const index = selectedAnswers.value.indexOf(answer);
    if (index !== -1) {
        selectedAnswers.value.splice(index, 1);
    }
};

// Función para verificar si la respuesta es correcta
const checkAnswer = () => {
    const correctAnswers = props.exercise.respuesta;
    console.log(correctAnswers)

    const isCorrect = selectedAnswers.value == correctAnswers

    // .every(answer => correctAnswers == answer) &&
    //     correctAnswers.length === selectedAnswers.value.length;

    // Emitir evento al padre con el resultado de la verificación
    emit('answer-checked', isCorrect);
};

// Observar cambios en la propiedad checkClicked del padre
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
                <TextBtn v-for="(answer, index) in selectedAnswers" :key="index" class="ma-2"
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
