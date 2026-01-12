<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-back-button default-href="/tabs/tab4" />
        </ion-buttons>
        <ion-title>{{ itemTitle }}</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content class="ion-padding">
      <template v-if="item">
        <h2>{{ item.title }}</h2>
        <p>{{ item.subtitle }}</p>
        <p>Aantal: {{ item.count }}</p>
      </template>
      <template v-else>
        <h2>Item not found</h2>
        <p>Try selecting a different item from the list.</p>
      </template>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import {
  IonBackButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from '@ionic/vue';
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import { tab4Items } from '@/data/tab4Items';

const route = useRoute();

const itemId = computed(() => Number(route.params.id));
const item = computed(() =>
  tab4Items.find((entry) => entry.id === itemId.value),
);

const itemTitle = computed(() => item.value?.title ?? 'Item');
</script>
