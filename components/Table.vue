<template>
  <table class="table table-hover border-primary">
    <tbody>
      <tr v-for="(value, key) in props.data" :key="key">
        <th>{{ $t(`${props.prefix}.${key}`) }}</th>
        <td v-if="value.length == 1">
          {{ value[0] }}
        </td>
        <td v-else>
          <ul>
            <li v-for="item in value" :key="item">
              {{ item }}
            </li>
          </ul>
        </td>
      </tr>
    </tbody>
  </table>
</template>
<script setup lang="ts">
const props = defineProps<Props>();
interface Props {
  prefix: string
  data: { [index: string]: string[] }
}
</script>
