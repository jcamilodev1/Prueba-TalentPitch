<template>
  <section class="py-8 px-4 overflow-hidden">
    <!-- Head -->
    <section class="flex items-center justify-between">
      <article class="flex items-center">
        <p class="text-tertiary font-medium mr-2">Match con la cultura</p>
        <!-- Progress Bar -->
        <div class="flex items-center gap-2">
          <div class="text-success text-base dark:text-white">{{ progress }}%</div>
          <div class="w-[276px] bg-gray-200 rounded-full h-[14px] dark:bg-gray-700">
            <div
              class="bg-success h-[14px] rounded-full dark:bg-blue-500"
              :style="{ width: progress + '%' }"
            ></div>
          </div>
        </div>
      </article>
      <!-- Buttons -->
      <article class="flex gap-2">
        <button
          class="w-full flex items-center justify-center gap-2 bg-secondary py-1.5 px-3.5 rounded-md hover:bg-tertiary"
        >
          <p class="text-white whitespace-nowrap">Enviar Pitch</p>
        </button>
        <button
          class="w-full flex items-center justify-center gap-2 border border-secondary py-1.5 px-3.5 rounded-md hover:border-tertiary"
        >
          <img src="@/assets/svg/addUser.svg" alt="" />
          <p class="text-secondary font-medium whitespace-nowrap">Seguir</p>
        </button>
      </article>
    </section>
    <!-- Tabs -->

    <section class="mb-4 border-b dark:border-gray-700">
      <ul
        class="flex flex-wrap -mb-px text-sm font-medium text-center"
        id="default-tab"
        data-tabs-toggle="#default-tab-content"
        role="tablist"
      >
        <li class="mr-2" role="presentation">
          <button
            class="inline-block p-4 border-b-2 rounded-t-lg"
            @click="router.push('/')"
          >
            Perfil
          </button>
        </li>
        <li class="mr-2" role="presentation">
          <button
            @click="router.push('/vacantes')"
            class="inline-block p-4 border-b-2 rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
          >
            Vacantes
          </button>
        </li>
        <li class="mr-2" role="presentation">
          <button
            class="inline-block p-4 border-b-2 rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
          >
            Listas
          </button>
        </li>
      </ul>
    </section>

    <!-- Tabs Content -->
    <section>
      <router-view></router-view>

    </section>
  </section>
</template>

<script setup>
import { ref } from 'vue';
import { onMounted } from 'vue';
import { initFlowbite } from 'flowbite';
import { useRouter } from 'vue-router'
// import TabProfile from './tabs/TabProfile.vue';
// import TabVacancy from './tabs/TabVacancy.vue';
const router = useRouter()
let progress = ref(80);
onMounted(() => {
  initFlowbite();
});
</script>

<style scoped>
.border-blue-600 {
  --tw-border-opacity: 1;
  border-color: #de1c7d;
}

.text-blue-600 {
  --tw-text-opacity: 1;
  color: #de1c7d;
}

.text-gray-500 {
  color: #9fa8da;
}
.border-gray-100 {
  --tw-border-opacity: 1;
  border-color: none;
}
</style>
