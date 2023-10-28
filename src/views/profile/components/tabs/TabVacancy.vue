<template>
  <p class="text-xl text-primary font-medium mb-4">Publicadas recientemente</p>
  <!-- Carousel -->
  <section class="relative px-10">
    <div class="flex cursor-pointer aling-center justify-centerflex aling-center justify-center absolute top-0 left-0 w-8 h-full bg-[#E8EAF6]" id="js-prev1" @click="swiperInstance?.slidePrev()">
      <img class="w-5" src="@/assets/svg/left.svg" alt="">

    </div>
    <section class="containersw">
    <Swiper
      :slides-per-view="3"
      :space-between="30"
      :loop="true"
      class="mySwiper"
      @swiper="onSwiper"
    >
      <swiper-slide v-for="vacante in vacantes" :key="vacante.id">
        <article class="prubea rounded-lg overflow-hidden border ">
          <img class="h-20 w-full object-cover" :src="vacante.image" alt="">
          <article class="flex bg-stone-100 p-2 justify-between items-center">
              <div class="flex items-center">
                <span class="text-sm text-gray-500 mr-2">Experticia</span>
                <star-rating :star-size="15"  inactive-color="#FFF8E1" :rating="Number(vacante.level_experience)" read-only />
              </div>
            <img src="@/assets/img/share.png" alt="">
          </article>
          <article class="h-full grid p-2">
            <h4 class="text-start text-sm text-primary font-bold mb-2">{{ vacante.name }}</h4>
            <div class="bg-info rounded-full mb-3"><p class="text-infoText text-xs text-center">Creada por organización: {{ vacante.company_name }}</p></div>
            <p class="text-start text-sm text-gray-500 mb-2">{{ moreText(vacante.description) }}</p>
            <article class="flex justify-between items-center pb-2 border-b">
              <div class="flex items-center flex-col">
                <div class="bg-secondary  rounded-full w-8 mb-2"><p class="text-white text-sm text-center">{{ vacante.views_count }}</p></div>
                <p class="text-gray-800 font-semibold text-sm">Vistas</p>
              </div>
              <div  class="flex items-center flex-col">
                <div class="bg-secondary  rounded-full w-8 mb-2"><p class="text-white text-sm text-center">{{ vacante.comments_count }}</p></div>
                <p class="text-gray-800 font-semibold text-sm">Comentarios</p>
              </div>
              <div  class="flex items-center flex-col">
                <div class="bg-secondary  rounded-full w-8 mb-2"><p class="text-white text-sm text-center">{{ vacante.pitches_count }}</p></div>
                <p class="text-gray-800 font-semibold text-sm">Pitches</p>
              </div>
            </article>
            <button class="mt-2 flex items-center justify-self-start justify-center gap-2 bg-secondary py-1 px-3.5 rounded-md hover:bg-tertiary" data-v-8fc87e4b=""><p class="text-white whitespace-nowrap text-sm" data-v-8fc87e4b="">Aplicar a vacante</p></button>
          </article>
        </article>
      </swiper-slide>
      
    </swiper>
  
    </section>
    <div class="flex cursor-pointer aling-center justify-center absolute top-0 right-0 w-8 h-full bg-[#E8EAF6]" id="js-next1" @click="swiperInstance?.slideNext()">
      <img class="w-5" src="@/assets/svg/right.svg" alt="">
    </div>

  </section>
</template>

<script setup>
import StarRating from 'vue-star-rating';
import { Swiper, SwiperSlide  } from 'swiper/vue';
import { ref, computed } from 'vue'
import 'swiper/css';
import { useStore } from 'vuex'
import 'swiper/css/pagination';

const swiperInstance = ref()

function onSwiper(swiper) {
  store.dispatch("fetchVacantes");
  swiperInstance.value = swiper
}
const store = useStore()
console.log(store)

const vacantes = computed(() => {
  return store.state.vacantesList;
});
const moreText = (text) => {
  return text.slice(0, 100) + ' ...'
}
</script>

<style scoped>

.swiper {
  width: 100%;
  height: 100%;
}

.swiper-slide {
  text-align: center;
  font-size: 18px;
  background: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 440px;
}
.prubea{
  height: 100%;
  display: grid;
  grid-template-rows: 80px 45px;
}

</style>
