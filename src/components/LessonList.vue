<script setup>
import { ref, onMounted } from 'vue'
import EPrintBtn from '../components/EPrintBtn.vue'
import DPrintBtn from '../components/DPrintBtn.vue'
//import DPrintAct from '../components/DPrintAct.vue'
import { useLessonsStore } from '../stores/lessons'
const props = defineProps({
    cod_tema: {
        type: Number,
    }
})

const lessonsStore = useLessonsStore()
// const lessons = ref([
//     { cod_leccion: 1, nombre: "Lección 1" },
//     { cod_leccion: 2, nombre: "Lección 2" }
// ])
const lessons = ref([])
const loadLessons = async () => {
    const success = await lessonsStore.obtainLessons(props.cod_tema)
    if (success) {
        lessons.value = lessonsStore.lessons
    }
}

onMounted(() => {
    loadLessons()
})


</script>

<template>
    <v-container class="bg-surface ">
        <v-row>
            <v-col v-for="(lesson, index) in lessons" :key="lesson.cod_leccion" cols="12" class="pa-0">
                <v-row>
                    <!-- Left button for odd lessons -->
                    <template v-if="lesson.cod_leccion % 2 !== 0">
                        <v-col cols="7" class="d-flex justify-end align-center">
                            <EPrintBtn :nombre="lesson.nombre" :cod_leccion="lesson.cod_leccion">
                            </EPrintBtn>
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
                            <DPrintBtn :nombre="lesson.nombre" :cod_leccion="lesson.cod_leccion">
                            </DPrintBtn>
                        </v-col>
                    </template>
                </v-row>
            </v-col>
        </v-row>
    </v-container>
</template>

<style scoped></style>