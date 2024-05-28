<script setup>
const props = defineProps({
    exercise: {
        type: Object
    }
})

const selectAnswer = (button) => {

}
</script>

<template>
    <v-card rounded="0">
        <v-card-item>
            <v-card-title>
                Translate to Catalan
            </v-card-title>
        </v-card-item>
        <v-card-text>
            <p>
                {{ exercise.pregunta }}
            </p>
        </v-card-text>
        <v-card-actions>
            <template v-for="(button, i) in exercise.botones" :key="i">
                <TextBtn @click="selectAnswer(button)">{{ button }}</TextBtn>
            </template>
        </v-card-actions>
    </v-card>
</template>



<style scoped></style>