<script setup lang="ts">
const props = defineProps<Props>();
interface Props {
  data: Record<string, string[]>
}
</script>
<template>
  <table class="table table-hover border-primary">
    <tbody>
      <tr v-for="(value, key) in props.data" :key="key">
        <th>{{ key }}</th>
        <td>
          <template v-if="value.length == 1">
            {{ value[0] }}
          </template>
          <ul v-else>
            <li v-for="item in value" :key="item">
              {{ item }}
            </li>
          </ul>
        </td>
      </tr>
    </tbody>
  </table>
</template>
