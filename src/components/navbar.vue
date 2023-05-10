<template>
<nav class="bg-gray-800">
  <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
    <div class="relative flex h-16 items-center justify-between">

      <div class="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
        <div class="flex flex-shrink-0 items-center">
          <img class="block h-10 w-auto lg:hidden" src="../assets/yugioh_logo.png" alt="Your Company">
          <img class="hidden h-10 w-auto lg:block" src="../assets/yugioh_logo.png" alt="Your Company">
        </div>

        <div class="hidden sm:ml-6 sm:block">
          <div class="flex space-x-4">
            <router-link to="/" class="text-gray-300  hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-base font-medium"> <span class="inline-block align-middle">Cards</span></router-link>
          </div>
        </div>
      </div>

      <div class="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <router-link to="/add" type="button" class="inline-block px-3 py-3 font-bold text-center text-white align-middle rounded-lg cursor-pointer bg-gradient-to-tl from-blue-500 to-violet-500 leading-normal not-italic text-sm ">
                <i class="bi bi-plus-square"> <span class="ml-1 not-italic"> Add Card </span></i>
            </router-link>
      </div> 

    </div>
  </div>
</nav>
  
</template>

<script >
    export default {
        name: 'navbarComponent',

        data() {
            return {
                button_style: "btn border border-secondary border-2 px-5 py-2 fw-semibold ms-5",
            }
        }
    }
</script>

<style scoped>

    /* .my-active-link-class {
        background-color: purple;
        color: whitesmoke;
    } */

</style>