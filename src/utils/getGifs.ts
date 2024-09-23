export const getGifs = async (category: string) => {
  const url = `https://api.giphy.com/v1/gifs/search?api_key=Y62t8QhuRZVbDHQiMvGcyKetOwr4xqgi&q=${category}&limit=10`;
  const resp = await fetch(url);
  const { data } = await resp.json();

  const gifs = data.map((img: any) => {
    return {
      id: img.id,
      title: img.title,
      urlImg: img.images.downsized_medium.url,
    };
  });
  return gifs;
};
