<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-searchbar v-model="searchQuery" placeholder="Search items" />
      </ion-toolbar>
    </ion-header>

    <ion-content>
      <ion-list>
        <ion-item
          v-for="item in filteredItems"
          :key="item.id"
          :router-link="`/tabs/tab4/${item.id}`"
          button
          detail
        >
          <ion-label>
            <h2>{{ item.title }}</h2>
            <p>{{ item.subtitle }}</p>
          </ion-label>
        </ion-item>
      </ion-list>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import {
  IonContent,
  IonHeader,
  IonItem,
  IonLabel,
  IonList,
  IonPage,
  IonSearchbar,
  IonToolbar,
} from '@ionic/vue';
import { computed, ref } from 'vue';
import { tab4Items } from '@/data/tab4Items';

const searchQuery = ref('');

const filteredItems = computed(() => {
  const query = searchQuery.value.trim().toLowerCase();

  if (!query) {
    return tab4Items;
  }

  return tab4Items.filter((item) => {
    const titleMatch = item.title.toLowerCase().includes(query);
    const subtitleMatch = item.subtitle.toLowerCase().includes(query);

    return titleMatch || subtitleMatch;
  });
});
</script>
