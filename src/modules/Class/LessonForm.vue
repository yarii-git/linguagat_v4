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
const isAnswerCorrect = ref(null);
const showBottomSheet = ref(false);
const bottomSheetColor = ref('');
const bottomSheetMessage = ref('');

const loadExercises = async () => {

    const success = await exercisesStore.obtainExercises(props.cod_leccion);
    if (success) {
        exercises.value = exercisesStore.exercises;
        updateProgress();
    } else {
        console.log("Error loading exercises");
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

// Function to manage exercise response
const handleAnswer = (result) => {
    isAnswerCorrect.value = result;

    if (isAnswerCorrect.value) {
        bottomSheetColor.value = 'success';
        bottomSheetMessage.value = 'Correct!';
    } else {
        bottomSheetColor.value = 'error';
        bottomSheetMessage.value = 'Error!';
    }
    showBottomSheet.value = true;
};

const nextExercise = () => {
    currentExerciseIndex.value++;
    checkClicked.value = false;
    isAnswerCorrect.value = null;
    showBottomSheet.value = false;
    updateProgress();
};

onMounted(() => {
    loadExercises();
});
</script>

<template>
    <v-container class="bg-surface h-100 d-flex justify-center" max-width="600">
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
                </template>
            </v-col>

            <v-divider color="secondary"></v-divider>

            <v-col cols="12" class="d-flex justify-center">
                <v-btn @click="checkAnswers" block size="large">Check</v-btn>
            </v-col>
        </v-row>

        <v-bottom-sheet v-model="showBottomSheet">
            <v-sheet :color="bottomSheetColor" class="pa-9">
                <div class="text-h5 text-center pb-4">{{ bottomSheetMessage }}</div>
                <v-btn color="white" @click="nextExercise" block size="large">Next</v-btn>
            </v-sheet>
        </v-bottom-sheet>
    </v-container>
</template>

<style scoped></style>
