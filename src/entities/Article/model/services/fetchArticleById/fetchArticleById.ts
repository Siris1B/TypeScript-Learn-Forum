import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';

import { Article } from '../../types/article';

export const fetchArticleById = createAsyncThunk<
  Article,
  string | undefined,
  ThunkConfig<string>
>(
  'articleDetail/fetchArticleById',
  async (articleId, { extra, rejectWithValue }) => {
    try {
      if (!articleId) {
        throw new Error();
      }
      const res = await extra.api.get<Article>(`/articles/${articleId}`, {
        params: {
          _expand: 'user',
        },
      });

      if (!res.data) {
        throw new Error();
      }

      return res.data;
    } catch (e) {
      console.log(e);
      return rejectWithValue('error');
    }
  },
);
