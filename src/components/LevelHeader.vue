<script setup>
const props = defineProps({
    title: {
        type: String,
        default: 'Level',
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

//TODO Implementar lógica para crear nivel
</script>
<template>
    <v-card rounded="0" variant="flat" color="secondaryLight">
        <v-row align="center">
            <v-col cols="9">
                <v-card-item>
                    <div class="d-flex align-baseline">
                        <v-card-title class="text-h5 font-weight-black">{{ title }}:</v-card-title>
                        <v-card-subtitle class="text-subtitle-2 font-weight-black">{{ subtitle }}</v-card-subtitle>
                    </div>
                </v-card-item>
            </v-col>
            <v-col cols="3">
                <v-card-actions class="d-flex justify-end">

                    <v-btn icon="mdi-plus" color="info" class="çmr-4"> </v-btn>
                </v-card-actions>
            </v-col>
        </v-row>

        <slot></slot>
    </v-card>
</template>
<style scoped></style>