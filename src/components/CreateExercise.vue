<script setup>
import { ref } from 'vue';
import { useExercisesStore } from '../stores/exercises'
const exercisesStore = useExercisesStore()

const props = defineProps({
    cod_leccion: {
        type: Number
    }
})

const pregunta = ref('');
const respuesta = ref('');

// Define emit
const emit = defineEmits(['update:dialog']);

// Function to close dialog
const closeDialog = () => {
    emit('update:dialog', false);
};

const createExercise = () => {
    const res = exercisesStore.createExercise(props.cod_leccion, pregunta.value, respuesta.value)
    if (!res) {
        console.log("Error creating exercise")
    }

    closeDialog()
};

</script>

<template>
    <v-card prepend-icon="mdi-card-text-outline" title="New exercise">
        <v-card-text>
            <v-row dense>
                <v-col cols="12" md="4" sm="6">
                    <v-text-field label="Question*" required v-model="pregunta"></v-text-field>
                </v-col>
                <v-col cols="12" md="4" sm="6">
                    <v-text-field label="Answer*" required v-model="respuesta"></v-text-field>
                </v-col>
            </v-row>

            <small class="text-caption text-medium-emphasis">*indicates required field</small>
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
            <v-spacer></v-spacer>

            <v-btn text="Close" variant="plain" @click="closeDialog"></v-btn>

            <v-btn color="primary" text="Save" variant="tonal" @click="createExercise"></v-btn>
        </v-card-actions>
    </v-card>
</template>


<style scoped></style>