const MiniPaths = [
  "/storage/"
];

export default function () {
  const mini = useState<boolean>("/");

  watchEffect(async () => {
    mini.value = MiniPaths.some(P => useRoute().path.match(P));
    //console.log(mini.value);
  });

  return {
    mini
  };
}
