<template>

<div class="h-screen">
<div class="mx-auto w-10/12 px-2 py-4 sm:px-6 lg:px-8 mt-7 bg-gray-900 bg-opacity-80 rounded-md h-4/5">

    <div class="flex mt-2 w-full bg-gradient-to-tl place-content-center rounded-md from-rose-950 to-rose-600 h-12">
        <p class="md:text-xl sm:text-base font-semibold text-purple-300 my-auto">Editing Card</p>
    </div>

    <div class="flex gap-x-4 text-start sm:w-full md:w-full mt-6">
      <img class="lg:h-72 lg:w-72 md:h-56 md:w-56 sm:w-40 sm:h-40 my-auto flex-none rounded-md" :src='img_src' alt="">

      <form @submit.prevent="submit_data" class="lg:w-3/5 sm:w-full">
      
        <div class="min-w-0 flex-auto ml-7">
          <label for="last-name" class="block text-base font-semibold leading-6 text-purple-300 mb-1">Name</label>
          <input v-model="card.card_name" class="block w-full rounded-md border border-purple-300 py-1.5 px-2 text-purple-300 shadow-sm bg-transparent placeholder:text-gray-400 md:text-base sm:text-sm sm:leading-6">
       </div>

        <div class="min-w-0 flex-auto ml-7 mt-5">
          <label for="last-name" class="block text-base font-semibold leading-6 text-purple-300 mb-1">Image Link</label>
          <input v-model="img_src" class="block w-full rounded-md border border-purple-300 py-1.5 px-2 text-purple-300 shadow-sm bg-transparent placeholder:text-gray-400 md:text-base sm:text-sm sm:leading-6">
       </div>

        <div class="min-w-0 flex-auto ml-7 mt-5">
          <label for="last-name" class="block text-base font-semibold leading-6 text-purple-300 mb-1">Description</label>       
          <textarea v-model="card.description" rows="3" class="block w-full rounded-md border border-purple-300 py-1.5 px-2 text-purple-300 shadow-sm bg-transparent placeholder:text-gray-400 md:text-base sm:text-sm sm:leading-6"></textarea>
       </div>


        <div class="flex w-60 place-content-center mx-auto">
          <button type="submit" class="mt-7 md:w-full sm:w-52 bg-gradient-to-tl rounded-md from-rose-600 to-violet-600 h-12 text-purple-300 font-semibold">Submit</button>
        </div>
      </form>

    </div>

</div>
</div>

</template>

<script>

    import axios from 'axios';

    export default {
        name: "editCard",

        created() {
            this.get_card_data();
        },
        
        data(){
            return {
                card: {
                    card_name: "",
                    card_image: "",
                    description: ""
                },

                img_src: "",
                id: ""
            }
        },

        methods: {

            get_card_data() {
                this.id = this.$route.params.id;

                axios.get(`http://localhost:3000/cards/${this.id}`)
                .then((res) => {
                    this.card = res.data;
                    this.img_src = this.card.card_image;
                })
            },

            submit_data() {
                this.card.card_image = this.img_src;

                axios.put(`http://localhost:3000/cards/${this.id}`, this.card)
                .then(() => {
                    alert("Card Data Updated Successfully!");
                    
                    this.card = {
                        card_name: "",
                        card_image: "",
                        description: ""
                    }

                    this.img_src = "";

                    this.$router.push('/');
                })
            }
        }
    }

</script>

<style scoped>

</style>