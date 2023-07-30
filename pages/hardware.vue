<script setup lang="ts">
useHead({
  script: [{ src: "https://cdn.jsdelivr.net/gh/davidjbradshaw/iframe-resizer@master/js/iframeResizer.min.js", type: "text/javascript" }]
});
const { t } = useI18n();
const title = t("page.hardware");

const hardware = await useVContent().getHardware();
const pc: Record<string, string[]> = {};
const server: Record<string, string[]> = {};
const server_ha: Record<string, string[]> = {};
for (const key in hardware.pc) {
  pc[t("hardware." + key)] = hardware.pc[key];
}
for (const key in hardware.server) {
  server[t("hardware." + key)] = hardware.server[key];
}
for (const key in hardware.server_ha) {
  server_ha[t("hardware." + key)] = hardware.server_ha[key];
}
</script>
<template>
  <div>
    <Title>{{ title }}</Title>
    <h3>{{ title }}</h3>
    <ul class="nav nav-tabs" role="tablist">
      <li class="nav-item" role="presentation">
        <button
          id="status-tab" aria-controls="status-tab-pane" aria-selected="true" class="nav-link active" data-bs-target="#status-tab-pane"
          data-bs-toggle="tab" role="tab" type="button">
          {{ $t("hardware.status") }}
        </button>
      </li>
      <li class="nav-item" role="presentation">
        <button
          id="pc-tab" aria-controls="pc-tab-pane" aria-selected="false" class="nav-link" data-bs-target="#pc-tab-pane" data-bs-toggle="tab"
          role="tab" type="button">
          {{ $t("hardware.pc") }}
        </button>
      </li>
      <li class="nav-item" role="presentation">
        <button
          id="server-tab" aria-controls="server-tab-pane" aria-selected="false" class="nav-link" data-bs-target="#server-tab-pane"
          data-bs-toggle="tab" role="tab" type="button">
          {{ $t("hardware.server") }}
        </button>
      </li>
      <li class="nav-item" role="presentation">
        <button
          id="server-ha-tab" aria-controls="server-ha-tab-pane" aria-selected="false" class="nav-link" data-bs-target="#server-ha-tab-pane"
          data-bs-toggle="tab" role="tab" type="button">
          {{ $t("hardware.server") }}
        </button>
      </li>
    </ul>
    <div class="tab-content">
      <div id="status-tab-pane" aria-labelledby="status-tab" class="tab-pane fade show active" role="tabpanel" tabindex="0">
        <iframe
          class="htframe" onload="iFrameResize([{log:false}],'.htframe')" sandbox="allow-scripts allow-same-origin allow-popups" scrolling="no"
          src="https://wl.hetrixtools.com/r/fb1f9f0d69928c847a25c77610824d31/" style="border:none;" width="100%" />
      </div>
      <div id="pc-tab-pane" aria-labelledby="pc-tab" class="tab-pane fade" role="tabpanel" tabindex="0">
        <TableList :data="pc" />
      </div>
      <div id="server-tab-pane" aria-labelledby="server-tab" class="tab-pane fade" role="tabpanel" tabindex="0">
        <TableList :data="server" />
      </div>
      <div id="server-ha-tab-pane" aria-labelledby="server-ha-tab" class="tab-pane fade" role="tabpanel" tabindex="0">
        <TableList :data="server_ha" />
      </div>
    </div>
  </div>
</template>

