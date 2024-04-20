<template>
  <div>
    <div class="card text-center mx-auto" style="max-width: 40rem;">
      <Title>
        {{ $t("page.home") }}
      </Title>
      <div class="card-header">
        Hello World!
      </div>
      <div class="card-body">
        <p class="card-text">
          {{ $t("home.P1") }}
        </p>
        <p class="card-text">
          {{ $t("home.P2") }}
        </p>
        <p class="d-flex flex-wrap justify-content-center">
          <a class="m-2" href="https://github.com/virenbar" target="_blank">
            <i class="fa-brands fa-github fa-2xl fa-fw" />
          </a>
          <a class="m-2" href="https://steamcommunity.com/id/virenbar" target="_blank">
            <i class="fa-brands fa-steam fa-2xl fa-fw" />
          </a>
          <a class="m-2" href="https://t.me/Virenbar" target="_blank">
            <i class="fa-brands fa-telegram fa-2xl fa-fw" />
          </a>
          <a class="m-2" href="https://vk.com/virenbar" target="_blank">
            <i class="fa-brands fa-vk fa-2xl fa-fw" />
          </a>
          <a class="m-2" href="https://open.spotify.com/user/virenbar" target="_blank">
            <i class="fa-brands fa-spotify fa-2xl fa-fw" />
          </a>
          <a class="m-2" href="https://music.yandex.ru/users/AD-42/playlists" target="_blank">
            <!-- <img src="@/assets/icon/yandex-music.svg"> -->
            <IconYM class="fa-2xl fa-fw" />
          </a>
          <a class="m-2" href="https://www.youtube.com/@Virenbar-First" target="_blank">
            <i class="fa-brands fa-youtube fa-2xl fa-fw" />
          </a>
          <a class="m-2" data-bs-toggle="modal" data-bs-target="#discordModal">
            <i class="fa-brands fa-discord fa-2xl fa-fw" />
          </a>
        </p>
      </div>
    </div>
    <div id="discordModal" class="modal fade" tabindex="-1" aria-labelledby="discordModalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h1 id="discordModalLabel" class="modal-title fs-5">
              Discord title
            </h1>
            sdasf
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" />
          </div>
          <div class="modal-body">
            virenbar
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
