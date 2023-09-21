<script setup>
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <div class="relative flex flex-col w-screen h-screen max-w-screen max-h-screen  overflow-x-hidden bg-neutral-200">
   <nav class="sticky top-0 pt-5 bg-neutral-200 pb-3">
      <ul class="flex justify-center items-center gap-12 font-semibold">
        <span class="pb-2 border-b-4 border-neutral-900">Home</span>
        <span>About</span>
        <span>Projects</span>
        <span>Contacts</span>
      </ul>
   </nav>
   <main class="flex flex-col gap-12 xl:block mb-12">
      <div class="h-[calc(100vh - 5.375rem)] mb-12">
        <div class="flex flex-col items-center gap-12 text-5xl font-bold pl-5 text-neutral-800">
          <div class="w-44 h-44 bg-neutral-500 mt-32 rounded-full"></div>
          <div class="flex flex-col items-center gap-5">
            <div class="flex flex-col items-center">
              <span>John Daniel</span>
              <span>Sarmiento Tejano</span>
            </div>
            <span class="text-2xl font-semibold">Fullstack Developer</span>
          </div>
        </div>
        <div class="flex flex-col justify-center gap-12 mt-12">
          <div class="flex justify-center">
            <span class="font-medium px-3 py-0.5 bg-neutral-900 rounded-full text-white">Development Stack</span>
          </div>
          <div class="grid grid-cols-2 xl:flex justify-center items-center font-bold gap-5 text-xl ">
            <div class="flex flex-col items-center justify-between gap-1 h-24">
              <Icon icon="logos:laravel" class="h-16 w-16"/>
              <span>Laravel</span>
            </div>
            <span class="hidden xl:block">+</span>
            <div class="flex flex-col items-center justify-between gap-1 h-24">
              <Icon icon="logos:vue" class="h-16 w-16"/>
              <span>Vue</span>
            </div>
            <span class="hidden xl:block">+</span>
            <div class="flex flex-col items-center justify-between gap-1 h-24">
              <Icon icon="devicon:tailwindcss" class="h-16 w-16"/>
              <span>Tailwind</span>
            </div>
            <span class="hidden xl:block">+</span>
            <div class="flex flex-col items-center justify-between gap-1 h-24">
              <Icon icon="logos:flutter" class="h-16 w-16"/>
              <span>Flutter</span>
            </div>
            <span class="hidden xl:block">+</span>
            <div class="flex flex-col items-center justify-between gap-1 h-24">
              <Icon icon="logos:postgresql" class="h-14 w-14"/>
              <span>PostgreSQL</span>
            </div>
          </div>
        </div>
      </div>
      <div class="flex h-screen pl-12 pt-12 pb-12">
        <div class="flex w-1/2 bg-neutral-300">
        </div>
        <div class="flex flex-col w-1/2 gap-12 p-12">
          <div class="flex flex-col gap-5">
            <div class="text-4xl">About</div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet cumque accusamus minus saepe commodi in modi, voluptatem ab nobis. Aperiam similique expedita reprehenderit sapiente obcaecati provident delectus! Aspernatur, quaerat nesciunt.</p>
          </div>
          
        </div>
      </div>
      <div class="flex flex-col h-screen pl-12 pt-12 pb-12 gap-12">
        <div class="flex justify-center">
          <div class="text-4xl">Projects</div>
        </div>
        <div class="flex h-full">
            <div class="flex h-full w-full bg-neutral-400 p-5"></div>
            <div class="grid grid-cols-3 p-12 w-full">
              <div class="flex p-5">
                <span>Baguio Consolidated Apprehensions Registry</span>
              </div>
              <div class="flex p-5">
                <span>Baguio Civil Registry System</span>
              </div>
              <div class="flex p-5">
                <span></span>
              </div>
              <div class="flex p-5">
                <span>3D Model</span>
              </div>
              <div class="flex p-5">
                <span>Posd Ticketing</span>
              </div>
              <div class="flex p-5">
                <span>Posd Ticketing</span>
              </div>
              <div class="flex p-5">
                <span>Posd Ticketing</span>
              </div>
              <div class="flex p-5">
                <span>Posd Ticketing</span>
              </div>
            </div>
        </div>
      </div>
   </main>
  </div>
</template>

