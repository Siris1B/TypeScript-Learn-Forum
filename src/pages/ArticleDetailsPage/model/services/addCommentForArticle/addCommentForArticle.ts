import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { getUserAuthData } from 'entities/User';
import { Comment } from 'entities/Comment';
import { getArticleDetailsData } from 'entities/Article';

import { fetchCommentsByArticleId } from '../../services/fetchCommentsByArticleId/fetchCommentsByArticleId';

export const addCommentForArticle = createAsyncThunk<
  Comment,
  string,
  ThunkConfig<string>
>(
  'articleDetails/addCommentForArticle',
  async (text, { dispatch, extra, rejectWithValue, getState }) => {
    const userData = getUserAuthData(getState());
    const article = getArticleDetailsData(getState());

    if (!userData || !text || !article) return rejectWithValue('no data');

    try {
      const res = await extra.api.post<Comment>('/comments', {
        articleId: article?.id,
        userId: userData.id,
        text,
      });

      if (!res.data) {
        throw new Error();
      }

      dispatch(fetchCommentsByArticleId(article.id));

      return res.data;
    } catch (e) {
      return rejectWithValue('error');
    }
  },
);
