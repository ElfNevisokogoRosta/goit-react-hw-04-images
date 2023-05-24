import { useState, useEffect } from 'react';
import axios from 'axios';

export const usePixabayAPI = (
  q: string,
  page: number
): [[], number, boolean, boolean | null] => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean | null>(false);
  const [responce, setResponce] = useState<[]>([]);
  const [total, setTotal] = useState<number>(0);
  useEffect(() => {
    setLoading(true);
    if (q.trim() === '') {
      return;
    }
    axios
      .get(
        `https://pixabay.com/api/?q=${q}&page=${page}&key=28352970-95939234ba7a7257c292bac13&image_type=photo&orientation=horizontal&per_page=12`
      )
      .then(data => {
        setResponce(data.data.hits);
        setTotal(data.data.totalHits);
        setLoading(false);
      })
      .catch(e => {
        setError(e);
        setLoading(false);
      });
  }, [q, page]);

  return [responce, total, loading, error];
};
