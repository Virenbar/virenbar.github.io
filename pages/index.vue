<template>
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
        <a class="m-2" href="https://github.com/virenbar">
          <i class="fa-brands fa-github fa-2xl fa-fw" />
        </a>
        <a class="m-2" href="https://steamcommunity.com/id/virenbar">
          <i class="fa-brands fa-steam fa-2xl fa-fw" />
        </a>
        <a class="m-2" href="https://t.me/Virenbar">
          <i class="fa-brands fa-telegram fa-2xl fa-fw" />
        </a>
        <a class="m-2" href="https://vk.com/virenbar">
          <i class="fa-brands fa-vk fa-2xl fa-fw" />
        </a>
        <a class="m-2" href="https://open.spotify.com/user/virenbar">
          <i class="fa-brands fa-spotify fa-2xl fa-fw" />
        </a>
        <a class="m-2" href="https://www.youtube.com/channel/UCrIlM5foRUY6w5RlGr0ccsw">
          <i class="fa-brands fa-youtube fa-2xl fa-fw" />
        </a>
        <a class="m-2" href="https://music.yandex.ru/users/AD-42/playlists">
          <!-- <img src="@/assets/icon/yandex-music.svg"> -->
          <IconYM class="fa-2xl fa-fw" />
        </a>
      </p>
      <p class="card-text">
        {{ $t("home.discord") }}
        <a href="https://discordapp.com/">
          <i class="fa-brands fa-discord" />
          Discord
        </a>
      </p>
    </div>
  </div>
</template>
