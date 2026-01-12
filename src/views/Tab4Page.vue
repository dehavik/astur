<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-searchbar v-model="searchQuery" placeholder="Search items" />
      </ion-toolbar>
    </ion-header>

    <ion-content>
      <ion-list class="tab4-list">
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
          <ion-badge slot="end">{{ item.count }}</ion-badge>
        </ion-item>
      </ion-list>

      <div class="tab4-grid">
        <ion-card
          v-for="item in filteredItems"
          :key="item.id"
          :router-link="`/tabs/tab4/${item.id}`"
          button
        >
          <ion-card-header>
            <ion-card-title>
              {{ item.title }}
              <ion-badge class="count-badge">{{ item.count }}</ion-badge>
            </ion-card-title>
            <ion-card-subtitle>{{ item.subtitle }}</ion-card-subtitle>
          </ion-card-header>
        </ion-card>
      </div>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import {
  IonBadge,
  IonCard,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
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

<style scoped>
.tab4-grid {
  display: none;
  gap: 16px;
  padding: 12px 16px 24px;
}

.count-badge {
  margin-left: 12px;
  vertical-align: middle;
}

@media (min-width: 601px) {
  .tab4-list {
    display: none;
  }

  .tab4-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  }
}
</style>
