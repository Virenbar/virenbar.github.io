export default function () {
  const config = useRuntimeConfig().public;

  const path = computed(() => {
    let path = useRoute().params.slug;
    if (Array.isArray(path)) { path = path.join("/"); }
    if (!path.startsWith("/")) { path = `/${path}`; }
    if (!path.endsWith("/")) { path = `${path}/`; }
    return path;
  });

  const getItems = async () => {
    const url = `${config.json}${path.value}`;
    const { data, error } = await useFetch<StorageJSON[]>(url);
    if (!data.value || error.value) { return null; }

    return <StorageItem[]>data.value.map(I => ({
      name: I.name,
      type: I.type,
      mtime: new Date(I.mtime),
      size: I.size,
      url: `${config.storage}${path}${I.name}`
    }));
  };

  return {
    path,
    getItems
  };
}
