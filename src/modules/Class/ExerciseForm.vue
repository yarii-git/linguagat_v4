<script setup>
import ExerciseCard from '../../components/ExerciseCard.vue';
</script>
<template>
    <v-container>
        <v-row>
            <v-col cols="12">
                <v-progress-linear color="secondary" model-value="20" height="10" rounded="xl"></v-progress-linear>
            </v-col>
            <v-col cols="12">
                <ExerciseCard></ExerciseCard>
            </v-col>

            <v-divider color="secondary"></v-divider>

            <v-col cols="6" class="d-flex justify-center">
                <VBtnDark>Skip</VBtnDark>
            </v-col>
            <v-col cols="6" class="d-flex justify-center">
                <VBtnLight>Check</VBtnLight>
            </v-col>
        </v-row>
    </v-container>
</template>
<style scoped></style>