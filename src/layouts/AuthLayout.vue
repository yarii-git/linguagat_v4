<template>
    <v-container class="h-100">
        <v-sheet class="d-flex flex-column align-center justify-center bg-background h-100">
            <v-sheet class="ma-2 pa-2 w-100 bg-background" max-width="500">
                <v-img class="w-100" aspect-ratio="16/9" cover
                    src="http://linguagat.inscastellet.cat/assets/logo.png"></v-img>
            </v-sheet>
            <v-sheet class="ma-2 pa-2 w-100 bg-background">
                <slot></slot>
            </v-sheet>
        </v-sheet>
    </v-container>
</template>

<style></style>