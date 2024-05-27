<script setup>
const props = defineProps({
    title: {
        type: Number,
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

//TODO Implementar lógica para ver la teoria
</script>
<template>
    <v-card variant="flat" color="secondary" class="ma-3 mb-0" rounded="t-lg">
        <v-row align="center">
            <v-col cols="9">
                <v-card-item>
                    <v-card-title class="text-h4 font-weight-black">{{ title }}</v-card-title>
                    <v-card-subtitle class="text-subtitle-1 font-weight-black">{{ subtitle }}</v-card-subtitle>
                </v-card-item>
            </v-col>
            <v-col cols="3">
                <v-card-actions class="d-flex justify-end">
                    <v-btn icon="mdi-notebook" color="background" elevation="4" class="bg-info mr-4"> </v-btn>

                    <v-menu location="bottom left" transition="fade-transition">
                        <template v-slot:activator="{ props }">
                            <v-btn v-bind="props" icon="mdi-plus" color="background" elevation="4" class="bg-info mr-4">
                            </v-btn>
                        </template>

                        <v-list>
                            <v-list-item>
                                <TextBtn>New subject</TextBtn>
                            </v-list-item>
                            <v-list-item>
                                <TextBtn>New lesson</TextBtn>
                            </v-list-item>
                        </v-list>
                    </v-menu>
                </v-card-actions>
            </v-col>
        </v-row>
    </v-card>
</template>
<style scoped></style>