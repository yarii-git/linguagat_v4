<script setup>
const props = defineProps({
    title: {
        type: String,
        default: 'Theme',
    },
    subtitle: {
        type: String,
        default: 'Subtitle',
    },
    lesson: {
        type: String,
        default: '#',
    }
})

//TODO Implementar lógica para crear tema y para ver la teoria
</script>
<template>
    <v-card variant="flat" color="primary" class="ma-3">
        <v-row align="center">
            <v-col cols="9">
                <v-card-item>
                    <v-card-title class="text-h4 font-weight-black">{{ title }}</v-card-title>
                    <v-card-subtitle class="text-subtitle-1 font-weight-black">{{ subtitle }}</v-card-subtitle>
                </v-card-item>
            </v-col>
            <v-col cols="3">
                <v-card-actions class="d-flex justify-end">
                    <v-btn icon="mdi-notebook" color="background" elevation="4" class="bg-secondary mr-4"> </v-btn>
                    <v-btn icon="mdi-plus" color="background" elevation="4" class="bg-secondary mr-4"> </v-btn>
                </v-card-actions>
            </v-col>
        </v-row>
    </v-card>
</template>
<style scoped></style>