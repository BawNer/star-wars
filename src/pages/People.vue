<template>
  <div class="row">
    <div class="col-8">
      <q-btn to="/" label="Back" class="bg-black text-white q-ma-xs"/>
      <div class="row">
        <div class="col-8">
          <div class="q-pa-md">
            <q-list bordered separator style="max-width: 300px">
              <q-item 
              clickable 
              v-ripple 
              v-for="people in peoples" 
              :key="people.name">
                <q-item-section>{{people.name}}</q-item-section>
              </q-item>
            </q-list>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {onMounted, computed} from 'vue'
import {useStore} from 'vuex'

export default {
  setup() {
    const store = useStore()
    const peoples = computed(() => store.getters.getAllPeoples)
    onMounted(() => {
      store.dispatch('getAllPeople')
    })

    return {
      peoples
    }
  },
}
</script>
