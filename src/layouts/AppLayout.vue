<script setup>
import ToolbarComponent from '@/components/ToolbarComponent.vue';
</script>

<template>
    <ToolbarComponent />
    <v-main>
        <slot></slot>
    </v-main>
</template>

<style scoped>
.ma-top {
    margin-top: 60px;
}
</style>