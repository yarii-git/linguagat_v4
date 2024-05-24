<script setup>
import { ref, onMounted, watch } from 'vue'
import { useSubjectsStore } from '../../stores/subjects'
import { useLevelsStore } from '../../stores/levels'
import SubjectHeader from '../../components/SubjectHeader.vue'
import LessonList from '../../components/LessonList.vue'

// Estado y lógica de niveles
const levelsStore = useLevelsStore()
const levels = ref([])
const user = levelsStore.user

const loadLevels = async () => {
    const success = await levelsStore.obtainLevels()
    if (success) {
        levels.value = levelsStore.levels
    }
}

const select = ref({ cod_nivel: '1', nombre: 'A1' })

// Estado y lógica de asignaturas
const subjectsStore = useSubjectsStore()
let subjects = ref([])

const loadSubjects = async (level) => {
    const success = await subjectsStore.obtainSubjects(level)
    if (success) {
        subjects.value = subjectsStore.subjects
    }
}

const handleLevelChange = () => {
    loadSubjects(select.value.cod_nivel)
    // if (select.cod_nivel !== 'Crear nivel') {

    // }
}

watch(select, () => {
    handleLevelChange()
})

// Cargar las asignaturas iniciales para el nivel seleccionado por defecto
onMounted(() => {
    loadLevels()
    handleLevelChange()
})
</script>

<template>
    <div>
        <!-- :hint="`${select.cod_nivel}`" -->
        <v-select v-model="select" :items="levels" item-title="nombre" label="Select" persistent-hint return-object
            single-line @change="handleLevelChange" class="bg-primary text-h4 font-weight-black pr-6 pl-6" color="info"
            variant="plain" item-color="info" rounded="0">
        </v-select>

        <!-- Mostrar el componente para crear un nivel si se selecciona "Crear nivel" -->
        <!-- <CreateLevelComponent v-if="select.state === 'Crear nivel'" /> -->

        <!-- Renderizar la lista de asignaturas -->
        <div v-for="subject in subjects" :key="subject.cod_nivel">
            <SubjectHeader :title="subject.cod_tema" :subtitle="subject.nombre" />
            <LessonList :sub="subject.cod_tema" />
        </div>
    </div>
</template>
<style scoped></style>