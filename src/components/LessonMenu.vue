<script setup>
import { ref } from 'vue';
import CreateExercise from '@/components/CreateExercise.vue';

const props = defineProps({
    nombre: {
        type: String,
        default: 'Lesson'
    },
    cod_leccion: {
        type: Number
    }
})

const dialog = ref(false);
</script>

<template>
    <v-menu activator="parent" location="bottom" transition="fade-transition">
        <v-card class="pa-2">
            <v-card-item><v-card-title class="text-center">{{ nombre }}</v-card-title></v-card-item>
            <v-divider class="my-2"></v-divider>

            <v-card-actions>
                <!-- <v-icon>mdi-play</v-icon> -->
                <TextBtn>Start</TextBtn>
                <v-dialog v-model="dialog" max-width="600">
                    <template v-slot:activator="{ props: activatorProps }">
                        <v-btn icon="mdi-plus" color="background" elevation="4" class="bg-info" density="comfortable"
                            v-bind="activatorProps"></v-btn>
                    </template>

                    <CreateExercise :dialog="dialog" @update:dialog="dialog = $event" :cod_leccion="props.cod_leccion">
                    </CreateExercise>
                </v-dialog>

            </v-card-actions>
        </v-card>
    </v-menu>
</template>

<style scoped></style>