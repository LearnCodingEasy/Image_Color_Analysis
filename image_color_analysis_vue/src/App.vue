<script setup>
import { ref } from 'vue'
import axios from 'axios'
import { useToast } from 'primevue/usetoast'

const image = ref(null)
const colors = ref([])
// يحتفظ بملف الصورة
const file = ref(null)
const toast = useToast()
// ✅ التعامل مع اختيار الصورة
const handleImageFileUpload = (event) => {
  const selectedFile = event.files ? event.files[0] : null
  if (selectedFile) {
    file.value = selectedFile
    image.value = URL.createObjectURL(selectedFile) // تحويل الملف إلى رابط URL لعرضه
  } else {
    console.log('No file selected.')
  }
}

const uploadImage = async () => {
  if (!file.value) {
    console.error('No image selected!')
    toast.add({
      severity: 'error',
      summary: `No image`,
      detail: `No image selected!`,
      life: 3000,
    })
    return
  }

  const formData = new FormData()
  formData.append('image', file.value)
  // formData.append('image', image.value)

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
        <!-- Title -->
        <div class="title">
          <h2 class="text-center bold animate__animated animate__backInUp">
            🎨 Extract colors from images 🎨
          </h2>
        </div>

        <!-- Start Card -->
        <div class="project">
          <prime_card style="width: 53rem; overflow: hidden; margin: 2rem auto">
            <template #header>
              <div class="" v-if="!image">
                <prime_skeleton width="100%" height="430px"></prime_skeleton>
              </div>
              <div class="" v-else>
                <img :src="image" alt="Uploaded Image" />
              </div>
            </template>
            <template #title>
              <div class="" style="margin-bottom: 1rem">
                <h1 class="animate__animated animate__bounce text-capitalize capitalize">
                  The Five Most used colors in the picture
                </h1>
              </div>
              <div class="flex flex-col m-auto justify-between control">
                <prime_file_upload
                  mode="basic"
                  name="demo[]"
                  accept="image/*"
                  :maxFileSize="1000000"
                  @select="handleImageFileUpload"
                  chooseLabel="Your Image"
                  icon="pi pi-image"
                />
                <button @click="uploadImage" icon="pi pi-image">Color analysis</button>
              </div>
              <Toast />
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
              <div class="flex justify-between" v-else>
                <prime_skeleton width="150px" height="150px"></prime_skeleton>
                <prime_skeleton width="150px" height="150px"></prime_skeleton>
                <prime_skeleton width="150px" height="150px"></prime_skeleton>
                <prime_skeleton width="150px" height="150px"></prime_skeleton>
                <prime_skeleton width="150px" height="150px"></prime_skeleton>
              </div>
            </template>
          </prime_card>
        </div>
        <!-- End Card -->
      </div>
    </div>
  </div>
</template>

<style scoped></style>
