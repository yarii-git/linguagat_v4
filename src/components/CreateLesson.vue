<script setup>
import { ref } from 'vue';
import { useLessonsStore } from '../stores/lessons'
const lessonsStore = useLessonsStore()

const props = defineProps({
    nombre: {
        type: String,
        default: 'Lesson',
    },
    cod_tema: {
        type: String
    }
})

// Define emit
const emit = defineEmits(['update:dialog']);

// Function to close dialog
const closeDialog = () => {
    emit('update:dialog', false);
};

const createLesson = () => {
    const res = lessonsStore.createLesson(props.cod_tema, props.nombre)
    if (res !== true) {
        console.log("Error inserting lesson")
    }

    closeDialog()
};

</script>

<template>
    <v-card prepend-icon="mdi-account" title="New lesson">
        <v-card-text>
            <v-row dense>
                <v-col cols="12" md="4" sm="6">
                    <v-text-field label="Name*" required></v-text-field>
                </v-col>
            </v-row>

            <small class="text-caption text-medium-emphasis">*indicates required field</small>
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
            <v-spacer></v-spacer>

            <v-btn text="Close" variant="plain" @click="closeDialog"></v-btn>

            <v-btn color="primary" text="Save" variant="tonal" @click="createLesson"></v-btn>
        </v-card-actions>
    </v-card>
</template>


<style scoped></style>