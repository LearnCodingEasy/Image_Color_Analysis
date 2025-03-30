<script setup>
import { ref } from 'vue'
import axios from 'axios'

const image = ref(null)
const colors = ref([])

const uploadImage = async () => {
  const formData = new FormData()
  formData.append('image', image.value)

  try {
    const response = await axios.post('http://127.0.0.1:8000/api/analysis/', formData)
    colors.value = response.data.colors.map((color) => `rgb(${color[0]}, ${color[1]}, ${color[2]})`)
  } catch (error) {
    console.error('Error extracting colors:', error)
  }
}
</script>

<template>
  <div class="wrapper">
    <div class="inner">
      <div class="container">
        <div class="title">
          <h2 class="text-center bold animate__animated animate__backInUp">
            🎨 Extract colors from images 🎨
          </h2>
        </div>

        <!-- Start Card -->
        <prime_card style="width: 55rem; overflow: hidden; margin: 2rem auto">
          <template #header>
            <prime_skeleton width="100%" height="450px"></prime_skeleton>
          </template>
          <template #title>
            <div class="" style="margin-bottom: 1rem">
              <h1 class="animate__animated animate__bounce">
                The Five most used colors in the picture
              </h1>
            </div>
            <div class="flex flex-col m-auto justify-between">
              <Toast />
              <prime_file_upload
                mode="basic"
                name="demo[]"
                url="/api/upload"
                accept="image/*"
                :maxFileSize="1000000"
                @upload="onUpload"
                :auto="true"
                chooseLabel="Your Image"
                @change="(e) => (image = e.target.files[0])"
                icon="pi pi-image"
              />
              <prime_button
                icon="pi pi-undo"
                label="Show Anaysis"
                severity="help"
                @click="
                  uploadImage
                  visbilt = true
                "
                class="class_name"
              />
            </div>
          </template>

          <template #content>
            <div v-if="colors.length" class="colors">
              <div
                v-for="(color, index) in colors"
                :key="index"
                :style="{ backgroundColor: color }"
                class="animate__animated animate__bounce"
              >
                {{ color }}
              </div>
            </div>
          </template>
        </prime_card>
        <!-- End Card -->
      </div>
    </div>
  </div>
</template>

<style scoped></style>
