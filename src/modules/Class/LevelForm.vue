<script setup>
import { ref, onMounted, watch } from 'vue'
import { useSubjectsStore } from '../../stores/subjects'
import { useLevelsStore } from '../../stores/levels'
import SubjectHeader from '../../components/SubjectHeader.vue'
import LessonList from '../../components/LessonList.vue'

// Estado y lógica de niveles
const levelsStore = useLevelsStore()
const levels = ref([])
let cod_nivel = null
const user = levelsStore.user

const loadLevels = async () => {
    const success = await levelsStore.obtainLevels()
    if (success) {
        levels.value = levelsStore.levels
    }
}

//Default level
const select = ref({ cod_nivel: '1', nombre: 'A1' })

// Estado y lógica de asignaturas
const subjectsStore = useSubjectsStore()
// let subjects = ref([{ cod_nivel: '1', cod_tema: '1', nombre: 'Hola' }])
let subjects = ref([])

const loadSubjects = async (level) => {
    cod_nivel = level.value
    const success = await subjectsStore.obtainSubjects(level)
    if (success) {
        subjects.value = subjectsStore.subjects
    }
}

const handleLevelChange = () => {
    loadSubjects(select.value.cod_nivel)
}

watch(select, () => {
    handleLevelChange()
})
onMounted(() => {
    loadLevels()
    handleLevelChange()
})
</script>

<template>
    <v-sheet class="d-flex flex-column align-center">
        <v-sheet class="d-flex justify-center bg-primary w-100 ">
            <v-select v-model="select" :items="levels" item-title="nombre" label="Select" persistent-hint return-object
                single-line @change="handleLevelChange" class="bg-primary text-h4 font-weight-black pr-6 pl-6"
                color="info" variant="plain" item-color="info" rounded="0" max-width="600">
            </v-select>
        </v-sheet>

        <v-sheet max-width="600" class="bg-surface">
            <template v-for="subject in subjects" :key="subject.cod_nivel">
                <SubjectHeader :title="subject.cod_tema" :subtitle="subject.nombre" :cod_nivel="cod_nivel" />
                <LessonList :cod_tema="subject.cod_tema" />
            </template>
        </v-sheet>

    </v-sheet>
</template>
<style scoped></style>