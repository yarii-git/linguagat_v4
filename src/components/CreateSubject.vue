<script setup>
import { ref } from 'vue';
import { useSubjectsStore } from '../stores/subjects'
const subjectsStore = useSubjectsStore()

const props = defineProps({
    cod_nivel: {
        type: Number
    }
})

// Define emit
const emit = defineEmits(['update:dialog']);

// Define a ref for the subject name
const nombre = ref('');

// Function to close dialog
const closeDialog = () => {
    emit('update:dialog', false);
};

const createSubject = () => {
    const res = lessonsStore.createSubject(props.cod_nivel, nombre.value)
    if (res !== true) {
        console.log("Error inserting subject")
    }

    closeDialog()
};

</script>

<template>
    <v-card prepend-icon="mdi-text-long" title="New subject">
        <v-card-text>
            <v-row dense>
                <v-col cols="12" md="4" sm="6">
                    <v-text-field label="Name*" required v-model="nombre"></v-text-field>
                </v-col>
            </v-row>

            <small class="text-caption text-medium-emphasis">*indicates required field</small>
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
            <v-spacer></v-spacer>

            <v-btn text="Close" variant="plain" @click="closeDialog"></v-btn>

            <v-btn color="primary" text="Save" variant="tonal" @click="createSubject"></v-btn>
        </v-card-actions>
    </v-card>
</template>


<style scoped></style>