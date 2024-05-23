<script setup>
import EPrintBtn from '../components/EPrintBtn.vue'
import DPrintBtn from '../components/DPrintBtn.vue'
const props = defineProps({
    theme: {
        type: Number,
        default: 1,
    }
})

//TODO hacer get con pinia de las lecciones
const lessons = [
    { lessonId: 1 },
    { lessonId: 2 },
    { lessonId: 3 },
    { lessonId: 4 }
]
</script>

<template>
    <v-container>
        <v-row>
            <v-col v-for="(lesson, index) in lessons" :key="lesson.lessonId" cols="12" class="pa-0">
                <v-row>
                    <!-- Left button for odd lessons -->
                    <template v-if="lesson.lessonId % 2 !== 0">
                        <v-col cols="7" class="d-flex justify-end align-center">
                            <EPrintBtn @click="handleButtonClick(index)"></EPrintBtn>
                        </v-col>
                        <v-col cols="5">
                            <!-- Empty space to the right of left button -->
                        </v-col>
                    </template>

                    <!-- Right button for even lessons -->
                    <template v-else>
                        <v-col cols="5">
                            <!-- Empty space left of the right button -->
                        </v-col>
                        <v-col cols="7" class="d-flex align-center">
                            <DPrintBtn @click="handleButtonClick(index)"></DPrintBtn>
                        </v-col>
                    </template>
                </v-row>
            </v-col>
        </v-row>
    </v-container>
</template>

<style scoped></style>