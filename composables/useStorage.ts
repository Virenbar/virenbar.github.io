export default function () {
  const config = useRuntimeConfig().public;
  const path = useState<string>("/");
  const items = useState<StorageItem[]>();

  const getPath = () => path.value;

  const getItems = async (path?: string) => {
    path = path ?? getPath();
    const url = `${config.json}${path}`;
    const { data, error } = await useFetch<StorageJSON[]>(url);
    if (!data.value || error.value) { return []; }

    return <StorageItem[]>data.value.map(I => ({
      name: I.name,
      type: I.type,
      mtime: new Date(I.mtime),
      size: I.size,
      url: `${config.storage}${path}${I.name}`
    }));
  };

  watchEffect(async () => {
    let slug = useRoute().params.slug;
    if (Array.isArray(slug)) { slug = slug.join("/"); }
    if (!slug.startsWith("/")) { slug = `/${slug}`; }
    if (!slug.endsWith("/")) { slug = `${slug}/`; }

    path.value = slug;
    items.value = await getItems(slug);
  });

  return {
    path,
    items,
    getPath,
    getItems
  };
}
