export default function () {
  const config = useRuntimeConfig().public;
  const path = useState<string>("path", () => "/");
  const items = useState<StorageItem[]>();

  const getPath = () => path.value;

  const getItems = async (path: string) => {
    const url = `${config.json}/${path}`;
    const { data, error } = await useFetch<StorageJSON[]>(url);
    if (!data.value || error.value) { return []; }

    return <StorageItem[]>data.value.map(I => ({
      name: I.name,
      type: I.type,
      mtime: new Date(I.mtime),
      size: I.size,
      url: I.type == "file" ? `${config.storage}${path}${I.name}` : `?path=/${I.name}/`
    }));
  };

  watchEffect(async () => {
    const query = useRoute().query;
    path.value = typeof query["path"] == "string" ? query["path"] : "/";
    items.value = await getItems(path.value);
  });

  return {
    path,
    items,
    getPath,
    getItems
  };
}
