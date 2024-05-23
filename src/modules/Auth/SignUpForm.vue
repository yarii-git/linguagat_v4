<script setup>
import { reactive, ref } from 'vue'
import { useVuelidate } from '@vuelidate/core'
import { minLength, email, required, helpers } from '@vuelidate/validators'
import { useAuthStore } from '@/stores/auth';

const initialState = {
    name: '',
    lastname: '',
    email: '',
    password: ''
}

const state = reactive({
    ...initialState,
})

//Validate password
const passwordValidators = {
    minLength: minLength(8),
    hasNumber: helpers.withMessage('Must contain at least one number', value => /\d/.test(value)),
    hasUpperCase: helpers.withMessage('Must contain at least one uppercase letter', value => /[A-Z]/.test(value)),
    hasLowerCase: helpers.withMessage('Must contain at least one lowercase letter', value => /[a-z]/.test(value)),
    hasSpecialChar: helpers.withMessage('Must contain at least one special character', value => /[!@#$%^&*(),.?":{}|<>]/.test(value))
}

const rules = {
    name: { required },
    lastname: { required },
    email: { required, email },
    password: {
        required,
        minLength: passwordValidators.minLength,
        hasNumber: passwordValidators.hasNumber,
        hasUpperCase: passwordValidators.hasUpperCase,
        hasLowerCase: passwordValidators.hasLowerCase,
        hasSpecialChar: passwordValidators.hasSpecialChar
    }
}

const v$ = useVuelidate(rules, state)

const authStore = useAuthStore()
const feedback = ref('')

async function handleSubmit() {
    //const isValid = v$.$validate
    const user = {
        name: state.name,
        lastname: state.lastname,
        email: state.email,
        password: state.password
    }
    const success = await authStore.createUser(user)
    if (success) {
        clear()
    } else {
        feedback.value = store.resStore;
    }
}

function clear() {
    v$.value.$reset()
    Object.assign(state, initialState)
}
</script>
<template>
    <form>
        <v-row>
            <v-col cols="12" md="6">
                <v-text-field v-model="state.name" :counter="20" :error-messages="v$.name.$errors.map(e => e.$message)"
                    label="Name" required @blur="v$.name.$touch" @input="v$.name.$touch"></v-text-field>
            </v-col>
            <v-col cols="12" md="6">
                <v-text-field v-model="state.lastname" :counter="30"
                    :error-messages="v$.lastname.$errors.map(e => e.$message)" label="Last name" required
                    @blur="v$.lastname.$touch" @input="v$.lastname.$touch"></v-text-field>
            </v-col>
            <v-col cols="12">
                <v-text-field v-model="state.email" :error-messages="v$.email.$errors.map(e => e.$message)"
                    label="E-mail" required @blur="v$.email.$touch" @input="v$.email.$touch"></v-text-field>
            </v-col>
            <v-col cols="12">
                <v-text-field v-model="state.password" :error-messages="v$.password.$errors.map(e => e.$message)"
                    label="Password" required type="password" @blur="v$.password.$touch"
                    @input="v$.password.$touch"></v-text-field>
            </v-col>
            <v-col cols="12">
                <v-card variant="plain">
                    <v-card-text class="text-medium-emphasis text-caption">
                        {{ feedback }}
                    </v-card-text>
                </v-card>
            </v-col>
            <v-col cols="12">
                <v-btn class="me-4" @click="handleSubmit">
                    Submit
                </v-btn>
                <v-btn @click="clear">
                    Clear
                </v-btn>
            </v-col>
        </v-row>
    </form>
</template>