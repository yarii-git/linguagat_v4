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

const loadExercises = async () => {
    const success = await exercisesStore.obtainExercises(props.cod_leccion);
    if (success) {
        exercises.value = exercisesStore.exercises;
        updateProgress();
    } else {
        console.log("Error");
    }
};

const updateProgress = () => {
    progress.value = ((currentExerciseIndex.value + 1) / exercises.value.length) * 100;
};

const checkAnswer = () => {
    //exercises.value[currentExerciseIndex.value].respuesta === userAnswer

    // Luego pasas al siguiente ejercicio
    if (currentExerciseIndex.value < exercises.value.length - 1) {
        currentExerciseIndex.value++;
        updateProgress();
    } else {
        // Aquí puedes manejar el caso cuando todos los ejercicios han sido completados
        console.log('Todos los ejercicios completados');
    }
};

onMounted(() => {
    loadExercises();
});
</script>

<template>
    <v-container class="border">
        <v-row>
            <v-col cols="12">
                <v-progress-linear :value="progress" color="primary" height="10" rounded="xl"></v-progress-linear>
            </v-col>
            <v-col cols="12">
                <template v-if="exercises.length > 0">
                    <template v-if="exercises[currentExerciseIndex].tipo_ejercicio == 1">
                        <ExerciseCard1 :exercise="exercises[currentExerciseIndex]"></ExerciseCard1>
                    </template>
                    <template v-if="exercises[currentExerciseIndex].tipo_ejercicio == 2">
                        <ExerciseCard2 :exercise="exercises[currentExerciseIndex]"></ExerciseCard2>
                    </template>
                    <template v-if="exercises[currentExerciseIndex].tipo_ejercicio == 3">
                        <ExerciseCard3 :exercise="exercises[currentExerciseIndex]"></ExerciseCard3>
                    </template>
                    <template v-if="exercises[currentExerciseIndex].tipo_ejercicio == 4">
                        <ExerciseCard2 :exercise="exercises[currentExerciseIndex]"></ExerciseCard2>
                    </template>
                    <template v-if="exercises[currentExerciseIndex].tipo_ejercicio == 5">
                        <ExerciseCard3 :exercise="exercises[currentExerciseIndex]"></ExerciseCard3>
                    </template>
                </template>
            </v-col>

            <v-divider color="secondary"></v-divider>

            <!-- <v-col cols="6" class="d-flex justify-center">
                <v-btn @click="currentExerciseIndex++"
                    :disabled="currentExerciseIndex >= exercises.length - 1">Skip</v-btn>
            </v-col> -->
            <v-col cols="12" class="d-flex justify-center">
                <v-btn @click="checkAnswer" block size="large">Check</v-btn>
            </v-col>
        </v-row>
    </v-container>
</template>

<style scoped></style>
