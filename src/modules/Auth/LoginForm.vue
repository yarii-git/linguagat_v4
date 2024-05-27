<script setup>
import { ref } from 'vue'
import { useAuthStore } from '@/stores/auth';
import router from '@/router';

const store = useAuthStore()
const email = ref('')
const password = ref('')
const feedback = ref('')

const loginUser = async () => {
    const response = await store.login(email.value, password.value);

    if (response) {
        const auth = useAuthStore();
        const userRole = auth.role;
        console.log(userRole);

        switch (userRole) {
            case 3:
                router.push({ name: 'home' });
                break;
            case 1:
                console.log("ruta 1");
                router.push({ name: 'home' });
                break;
            default:
                router.push({ name: 'login' });
                break;
        }

    } else {
        feedback.value = store.error;
    }
};


const props = defineProps({
    visible: {
        type: Boolean,
        default: false
    }
});
</script>
<template>
    <div>
        <v-card class="mx-auto pa-12 pb-8" elevation="8" max-width="448" rounded="lg">
            <div class="text-subtitle-1 text-medium-emphasis">Account</div>

            <v-text-field density="compact" placeholder="Email address" prepend-inner-icon="mdi-email-outline"
                variant="outlined" v-model="email"></v-text-field>

            <div class="text-subtitle-1 text-medium-emphasis d-flex align-center justify-space-between">
                Password

                <a class="text-caption text-decoration-none text-secondary ml-2" href="#" rel="noopener noreferrer"
                    target="_blank">
                    Forgot login password?
                </a>
            </div>

            <v-text-field :append-inner-icon="visible ? 'mdi-eye-off' : 'mdi-eye'" :type="visible ? 'text' : 'password'"
                density="compact" placeholder="Entra la contraseña" prepend-inner-icon="mdi-lock-outline"
                variant="outlined" @click:append-inner="visible = !visible" v-model="password"></v-text-field>

            <v-card variant="plain">
                <v-card-text class="text-medium-emphasis text-caption">
                    {{ feedback }}
                </v-card-text>
            </v-card>

            <VBtnLight type="submit" size="large" block @click="loginUser">
                Log In
            </VBtnLight>

            <v-card-text class="text-center">
                <!-- target="_blank" para abrir en otra pestaña -->
                <a class="text-info text-decoration-none" href="/signup" rel="noopener noreferrer">
                    Sign up now <v-icon icon="mdi-chevron-right"></v-icon>
                </a>
            </v-card-text>
        </v-card>
    </div>
</template>