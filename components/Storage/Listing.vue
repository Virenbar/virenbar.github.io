<script setup lang="ts">
const props = defineProps<Props>();
interface Props { items: StorageItem[] }

const dirCount = computed(() => props.items.filter(I => I.type == "directory").length);
const fileCount = computed(() => props.items.filter(I => I.type == "file").length);
</script>
<template>
  <Link
    rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
    integrity="sha512-iecdLmaskl7CVkqkXNQ/ZH/XLlvWZOJyj7Yy7tcenmpD1ypASozpmT/E0iPtmFIB46ZmdtAc9eNBvH0H/ZpiBw==" crossorigin="anonymous"
    referrerpolicy="no-referrer" />
  <div>
    <span>Directory Listing</span>
    <span class="float-end mx-1">{{ dirCount }} director{{ dirCount == 1 ? "y" : "ies" }}</span>
    <span class="float-end mx-1">{{ fileCount }} file{{ fileCount == 1 ? "" : "s" }}</span>
  </div>
  <div class="table-responsive">
    <table class="table table-sm table-borderless table-hover">
      <colgroup>
        <col class="col">
        <col class="col-3">
        <col class="col-2">
      </colgroup>
      <tbody>
        <tr v-for="item in props.items" :key="item.name">
          <td>
            <a v-if="item.type == 'file'" class="link-icon" target="_blank" :href="item.url">{{ item.name }}</a>
            <NuxtLink v-else class="link-icon" :to="item.url">
              {{ item.name }}/
            </NuxtLink>
          </td>
          <td>{{ formatDateTime(item.mtime) }}</td>
          <td>{{ item.size ? formatBytes(item.size) : "-" }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<style scoped src="@/assets/css/link-icons.css" />
