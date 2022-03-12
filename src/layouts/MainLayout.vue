<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar class="bg-black">
        <q-btn-dropdown stretch flat label="Viewed">
        <q-list>
          <q-item clickable>
            <q-item-section>
              <q-avatar size="30px" icon="human" color="grey" text-color="white" />
            </q-item-section>
            <q-item-section>
              <q-item-label>...</q-item-label>
            </q-item-section>
          </q-item>
        </q-list>
      </q-btn-dropdown>
        <q-btn to="/people" stretch flat label="People" />
        <q-btn to="/planets" stretch flat label="Planets" />
        <q-btn to="/starships" stretch flat label="Starships" />
      </q-toolbar>
    </q-header>
    <div class="row justify-center ">

    </div>
  </q-layout>
</template>

<script>
/*import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'MainLayout',

  components: {

  },

  setup () {
    const leftDrawerOpen = ref(false)

    return {
      leftDrawerOpen,
      toggleLeftDrawer () {
        leftDrawerOpen.value = !leftDrawerOpen.value
      }
    }
  }
})*/
</script>
