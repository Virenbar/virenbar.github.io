const MiniPaths = [
  "/storage/"
];

const Header = [
  { id: "home", path: "/" },
  // { id: "about", path: "/about" },
  { id: "projects", path: "/projects" },
  { id: "blog", path: "/posts" },
  { id: "hardware", path: "/hardware" },
  { id: "status", path: "/status" },
  //{ id: "status", path: "https://stats.uptimerobot.com/X0WxrI4WxW" }
];

export default function () {
  const mini = useState<boolean>("/");

  watchEffect(async () => {
    mini.value = MiniPaths.some(P => useRoute().path.match(P));
    //console.log(mini.value);
  });

  return {
    mini,
    header: Header
  };
}
