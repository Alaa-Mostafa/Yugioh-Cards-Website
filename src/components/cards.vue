<template>

<div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 py-4">
<ul role="list" class="divide-y divide-gray-100 px-5 bg-gray-900 bg-opacity-80 rounded-md">

  <li class="flex justify-between gap-x-6 py-5" v-for="card in cards_data" :key="card.name">
    
    <div class="flex gap-x-4 items-center text-start sm:w-64 md:w-96 lg:w-full">
      <img class="h-28 w-28 flex-none rounded-md bg-gray-50" :src="card.card_image" alt="">
      <div class="min-w-0 flex-auto ml-2 ">
        <p class="md:text-xl sm:text-base font-semibold leading-10 text-purple-300">{{card.card_name}}</p>
      </div>
    </div>

    <div class="flex flex-row sm:items-end my-auto md:w-64 sm:w-52 justify-between">
        <router-link :to="`/cards/${card.id}`" type="button" class="inline-block px-3 py-3 font-normal text-center text-white align-middle rounded-lg cursor-pointer bg-gradient-to-tl from-indigo-900 to-indigo-500 leading-normal not-italic md:text-lg sm:text-base">
            Preview 
        </router-link>

        <router-link :to="`/edit/${card.id}`" type="button" class="inline-block px-4 py-3 font-bold text-center text-white align-middle rounded-lg cursor-pointer bg-gradient-to-tl from-green-900 to-green-500 leading-normal not-italic md:text-lg sm:text-base">
            <i class="bi bi-pencil-square"></i>
        </router-link>

        <button type="button" class="inline-block px-4 py-3 font-bold text-center text-white align-middle rounded-lg cursor-pointer bg-gradient-to-tl from-red-900 to-red-500 leading-normal not-italic md:text-lg sm:test-xs"  @click="delete_card(card.id)">
            <i class="bi bi-trash"></i>
        </button>
    </div>
  </li>

</ul>
</div>

</template>

<script>

    import axios from 'axios';

    export default {
        name: "cardsComponent",

        created() {
            this.get_cards_data();
        },

        data(){
            return {
                cards_data: []
            }
        },

        methods: {
            get_cards_data() {
                axios.get("http://localhost:3000/cards")
                .then((res) => {
                    this.cards_data = res.data;
                })
            },

            delete_card(card_id) {
                axios.delete(`http://localhost:3000/cards/${card_id}`)
                .then(() => {
                    this.get_cards_data();
                })
            }
        }
    }
</script>

<style scoped>
    @import'~bootstrap-icons';

</style>