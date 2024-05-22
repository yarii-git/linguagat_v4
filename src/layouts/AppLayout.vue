<script setup>
import ToolbarComponent from '@/common/ToolbarComponent.vue';
import BottomNavComponent from '@/common/BottomNavComponent.vue';
</script>

<template>
    <ToolbarComponent/>

    <v-main>
        <v-container class="vpage-wrapper pb-sm-15 pb-10 ma-top">
            <slot></slot>

        </v-container>
    </v-main>

    <BottomNavComponent/>
</template>

<style scoped>
.ma-top{
    margin-top: 60px;
}
</style>