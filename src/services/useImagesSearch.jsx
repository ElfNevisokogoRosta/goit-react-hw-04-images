import { useEffect, useState } from 'react';
import axios from 'axios';
export default function useImagesSearch(query, pageNumber) {
  const [loading, setLodaing] = useState(true);
  const [error, setError] = useState(false);
  const [images, setImages] = useState([]);
  const [hasMore, setHasMore] = useState(false);

  useEffect(() => {
    setImages([]);
  }, [query]);
  useEffect(() => {
    setLodaing(true);
    setError(false);
    let cancel;
    axios({
      method: 'GET',
      url: 'https://pixabay.com/api/',
      params: {
        q: query,
        key: '28352970-95939234ba7a7257c292bac13',
        page: pageNumber,
        per_page: '12',
        orientation: 'horizontal',
        image_type: 'photo',
      },
      cancelToken: new axios.CancelToken(c => (cancel = c)),
    })
      .then(res => {
        setImages(prevImamges => {
          return [...new Set([...prevImamges, ...res.data.hits])];
        });
        setHasMore(res.data.hits.length !== 0);
        setLodaing(false);
      })
      .catch(e => {
        if (axios.isCancel(e)) return;
        setError(true);
      });
    return () => cancel();
  }, [query, pageNumber]);

  return { loading, error, images, hasMore };
}
