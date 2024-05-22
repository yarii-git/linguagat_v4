<script setup>
const props = defineProps({
    title: {
        type: Text,
        default: 'Title',
    },
    subtitle: {
        type: Text,
        default: 'Subtitle',
    }
})
</script>
<template>
    <v-card rounded="0" variant="flat" color="secondary">
        <v-card-item>
            <v-card-title class="text-h4 font-weight-black">{{ title }}</v-card-title>
            <v-card-subtitle class="text-subtitle-1 font-weight-black">{{ subtitle }}</v-card-subtitle>
        </v-card-item>
    </v-card>
</template>
<style scoped></style>