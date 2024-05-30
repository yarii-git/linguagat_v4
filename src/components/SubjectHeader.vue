<script setup>
import { ref, computed } from 'vue';
import { useAuthStore } from '@/stores/auth';
import CreateLesson from '@/components/CreateLesson.vue';
import CreateSubject from '@/components/CreateSubject.vue';
import Theory from '@/components/Theory.vue';

const props = defineProps({
    title: {
        type: Number,
    },
    subtitle: {
        type: String,
        default: 'Subtitle',
    },
    cod_nivel: {
        type: Number,
    }
});

const theoryDialog = ref(false);
const dialog1 = ref(false);
const dialog2 = ref(false);

// Obtén el store de autenticación
const authStore = useAuthStore();

// Computa si el usuario tiene los roles necesarios
const hasRequiredRoles = computed(() => {
    return authStore.role == 1 || authStore.role == 2;
});
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
                    <v-dialog v-model="theoryDialog" max-width="600">
                        <template v-slot:activator="{ props: activatorProps }">
                            <v-btn v-bind="activatorProps" icon="mdi-notebook" color="background" elevation="4"
                                class="bg-info mr-4"> </v-btn>
                        </template>

                        <Theory :dialog="theoryDialog" @update:dialog="theoryDialog = $event" :cod_tema="props.nombre">
                        </Theory>
                    </v-dialog>

                    <v-menu v-if="hasRequiredRoles" location="bottom left" transition="fade-transition">
                        <template v-slot:activator="{ props }">
                            <v-btn v-bind="props" icon="mdi-plus" color="background" elevation="4" class="bg-info mr-4">
                            </v-btn>
                        </template>

                        <v-list>
                            <v-list-item>
                                <v-dialog v-model="dialog1" max-width="600">
                                    <template v-slot:activator="{ props: activatorProps }">
                                        <TextBtn v-bind="activatorProps">New subject</TextBtn>
                                    </template>

                                    <CreateSubject :dialog="dialog1" @update:dialog="dialog1 = $event"
                                        :cod_nivel="props.cod_nivel">
                                    </CreateSubject>
                                </v-dialog>
                            </v-list-item>
                            <v-list-item>
                                <v-dialog v-model="dialog2" max-width="600">
                                    <template v-slot:activator="{ props: activatorProps }">
                                        <TextBtn v-bind="activatorProps">New lesson</TextBtn>
                                    </template>

                                    <CreateLesson :dialog="dialog2" @update:dialog="dialog2 = $event"
                                        :cod_tema="props.title">
                                    </CreateLesson>
                                </v-dialog>
                            </v-list-item>
                        </v-list>
                    </v-menu>
                </v-card-actions>
            </v-col>
        </v-row>
    </v-card>
</template>

<style scoped></style>
