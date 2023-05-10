<template>

<div class="h-screen">
<div class="mx-auto w-10/12 px-2 py-4 sm:px-6 lg:px-8 mt-7 bg-gray-900 bg-opacity-80 rounded-md h-4/5">

    <div class="flex mt-2 w-full bg-gradient-to-tl place-content-center rounded-md from-rose-950 to-rose-600 h-12">
        <p class="md:text-xl sm:text-base font-semibold text-purple-300 my-auto">{{card.card_name}}</p>
    </div>

    <div class="flex gap-x-4 text-start sm:w-64 md:w-96 lg:w-full mt-10">
      <img class="h-72 w-72 flex-none rounded-md" :src="card.card_image" alt="">
      <div class="min-w-0 flex-auto ml-5 mt-5">
        <p class="w-50 md:text-xl sm:text-base font-semibold leading-10 text-purple-300">{{card.description}}</p>
      </div>
    </div>

    <div class="flex w-60 place-content-center mx-auto">
        <button class="mt-7 lg:w-full bg-gradient-to-tl rounded-md from-rose-600 to-violet-600 h-12 text-purple-300 font-semibold" @click="$event => $router.push('/')">Back</button>
    </div>
</div>
</div>

</template>

<script>

    import axios from 'axios';

    export default {
        name: "cardDetails",

        created() {
            this.get_card_data();
        },

        data() {
            return {
                id: "",
                card: {}
            }
        },

        methods: {
            get_card_data() {
                this.id = this.$route.params.id;

                axios.get(`http://localhost:3000/cards/${this.id}`)
                .then((res) => {
                    this.card = res.data;
                })
            }
        }
    }
</script>

<style scoped>

</style>