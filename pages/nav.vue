<template>
  <main>
    <section class="h-100 py-5" id="contact">
      <div class="row justify-content-center" style="min-height: 75vh">
        <div class="align-self-center">
          <ul class="list-unstyled text-center">
            <li class="nav-item" v-for="(l, i) in menu" :key="i">
              <nuxt-link
                :to="{ path: l.url, hash: l.hash }"
                class="nav-link fs-3"
              >
                {{ l.title }}
              </nuxt-link>
            </li>
          </ul>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup lang="ts">
import menuData from "@/data/menu.json";

interface Menu {
  title: string;
  url: string;
  hash: string;
}

const menu: Menu[] = menuData;
</script>
