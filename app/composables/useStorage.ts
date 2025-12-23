export default function () {
  const config = useRuntimeConfig().public;

  const pending = useState<boolean>("pending", () => true);
  const storage = useState<StorageState>("storage", () => ({
    path: "/",
    breadcrumbs: [],
    items: [],
  }));

  async function getItems(path: string) {
    const url = `${config.storage_json}/${path}`;
    const { data, error } = await useFetch<StorageJSON[]>(url);
    if (!data.value || error.value) return [];

    return <StorageItem[]>data.value.map(I => ({
      name: I.name,
      type: I.type,
      mtime: new Date(I.mtime),
      size: I.size,
      url: I.type == "file" ? `${config.storage_endpoint}${path}${I.name}` : `?path=/${I.name}/`,
    }));
  }

  function getBreadcrumbs(path: string) {
    const dirs = path.replace(/\/[^/]*$/, "").split("/");
    // console.log(dirs);
    let pp = "";
    const crumbs: Crumb[] = [];
    for (let i = 0; i < dirs.length; i++) {
      pp += dirs[i] + "/";
      crumbs.push({
        name: i == 0 ? "root" : decodeURIComponent(dirs[i]),
        url: `?path=${pp}`,
        active: i != dirs.length - 1,
      });
    }
    return crumbs;
  }

  watchEffect(async () => {
    pending.value = true;
    const query = useRoute().query;
    const path = typeof query["path"] == "string" ? query["path"] : "/";
    storage.value = {
      path,
      breadcrumbs: getBreadcrumbs(path),
      items: await getItems(path),
    };
    pending.value = false;
  });

  return {
    pending,
    storage,
  };
}
