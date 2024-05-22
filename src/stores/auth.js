import { defineStore } from 'pinia'

export const useAuthStore = defineStore('auth',{
    state: () => { 
        return {
            token: null,
            role: null,
            error: null,
            base: "http://192.168.1.56:5227/api/"
        }
    }, 
    getters: {
        
    }, 
    actions: {
        async login(email, password){
            try {
                const url = `${this.base}Login`; 
                const res = await fetch(url,{
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        email: email,
                        password: password
                    })
                })
    
                if (!res.ok) {
                    throw new Error('Failed to login');
                }
    
                const response = await res.json();
                if ('userID' in response) {
                    this.token = response.userID;
                    this.role = response.rol;
                    return true;
                } else {
                    throw new Error('Invalid response');
                }
            }catch(error){
                console.error('Error en la solicitud de inicio de sesión:', error);
                this.error = 'Login failed';
                return false;
            }
        },
        logout() {
            this.token = null;
        }
    }
})