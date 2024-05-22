<script setup>
import { ref } from 'vue';
import ToolbarComponent from '@/common/ToolbarComponent.vue';
import { RouterView, RouterLink } from 'vue-router';

const userMenu = ref(false);

const navigationItems = [
  { title: 'Planificación', to: '/admin/dashboard', icon: 'mdi-calendar' },
  { title: 'Incidencias', to: '/admin/incidences', icon: 'mdi-alert' },
  { title: 'Técnicos', to: '/admin/technicians', icon: 'mdi-account-group' },
  { title: 'Contratos', to: '/admin/equipment', icon: 'mdi-desktop-classic' },
];

const toggleUserMenu = () => {
  userMenu.value = !userMenu.value;
};

const logout = () => {
  authStore.logout();
  router.push(item.route);
};
</script>

<template>
  <v-app>
    <ToolbarComponent />

    <v-navigation-drawer permanent class="mt-4">
      <v-list dense>
        <v-list-item v-for="item in navigationItems" :key="item.title" :to="item.to">
          <v-list-item-title><v-icon>{{ item.icon }}</v-icon> {{ item.title }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-main>
      <v-container fluid class="mt-5">
        <slot></slot>
      </v-container>
    </v-main>
  </v-app>
</template>