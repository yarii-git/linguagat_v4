<template>
    <v-container>
        <v-sheet class="d-flex flex-column align-center justify-center">
            <v-sheet class="ma-2 pa-2 w-md-50">
                <v-img class="w-100" aspect-ratio="16/9" cover
                    src="http://linguagat.inscastellet.cat/assets/capcelera1.png"></v-img>
            </v-sheet>
            <v-sheet class="ma-2 pa-2 w-md-50">
                <slot></slot>
            </v-sheet>
        </v-sheet>
    </v-container>
</template>

<style></style>