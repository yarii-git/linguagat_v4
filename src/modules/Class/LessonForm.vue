<script setup>
import { useExercisesStore } from '@/stores/exercises';
import ExerciseCard1 from '@/components/ExerciseCard1.vue';
import ExerciseCard2 from '@/components/ExerciseCard2.vue';
import ExerciseCard3 from '@/components/ExerciseCard3.vue';
import { ref, onMounted } from 'vue';

const props = defineProps({
    cod_leccion: {
        type: String,
        required: true
    }
});

const exercises = ref([]);
const currentExerciseIndex = ref(0);
const progress = ref(0);
const exercisesStore = useExercisesStore();
const checkClicked = ref(false);
const isAnswerCorrect = ref(null); // Almacena si la respuesta es correcta o incorrecta

const loadExercises = async () => {
    const success = await exercisesStore.obtainExercises(props.cod_leccion);
    if (success) {
        exercises.value = exercisesStore.exercises;
        updateProgress();
    } else {
        console.log("Error al cargar los ejercicios");
    }
};

const updateProgress = () => {
    if (exercises.value.length > 0) {
        progress.value = ((currentExerciseIndex.value + 1) / exercises.value.length) * 100;
    } else {
        progress.value = 0;
    }
    console.log(`Progreso actualizado: ${progress.value}%`);
};

const checkAnswers = () => {
    checkClicked.value = true;
};

// Función para manejar la respuesta del ejercicio
const handleAnswer = (result) => {

    isAnswerCorrect.value = result; // Actualizar el estado de la respuesta
    console.log(isAnswerCorrect.value)

    if (isAnswerCorrect.value) {
        console.log("Correcto!")
    }
};

onMounted(() => {
    loadExercises();
});
</script>

<template>
    <v-container class="border bg-surface h-100">
        <v-row class="h-100">
            <v-col cols="12">
                <v-progress-linear v-model="progress" color="primary" height="10" rounded="xl"></v-progress-linear>
            </v-col>
            <v-col cols="12">
                <template v-if="exercises.length > 0">
                    <template v-if="exercises[currentExerciseIndex].tipo_ejercicio == 1">
                        <ExerciseCard1 :exercise="exercises[currentExerciseIndex]" :checkClicked="checkClicked"
                            @answer-checked="handleAnswer"></ExerciseCard1>
                    </template>
                    <template v-if="exercises[currentExerciseIndex].tipo_ejercicio == 2">
                        <ExerciseCard2 :exercise="exercises[currentExerciseIndex]" :checkClicked="checkClicked"
                            @answer-checked="handleAnswer"></ExerciseCard2>
                    </template>
                    <template v-if="exercises[currentExerciseIndex].tipo_ejercicio == 3">
                        <ExerciseCard3 :exercise="exercises[currentExerciseIndex]" :checkClicked="checkClicked"
                            @answer-checked="handleAnswer"></ExerciseCard3>
                    </template>
                    <!-- Agrega las otras plantillas para los otros tipos de ejercicios -->
                </template>
            </v-col>

            <v-divider color="secondary"></v-divider>

            <v-col cols="12" class="d-flex justify-center">
                <v-btn @click="checkAnswers" block size="large">Check</v-btn>
            </v-col>
        </v-row>
    </v-container>
</template>

<style scoped></style>
