import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { Article } from 'entities/Article';

export const fetchArticleRecommendations = createAsyncThunk<
  Article[],
  void,
  ThunkConfig<string>
>(
  'articleDetailsPage/fetchArticleRecommendations',
  async (_, { extra, rejectWithValue }) => {
    try {
      const res = await extra.api.get<Article[]>('/articles', {
        params: {
          _limit: 4,
        },
      });

      if (!res.data) {
        throw new Error();
      }

      return res.data;
    } catch (e) {
      return rejectWithValue('error');
    }
  },
);
