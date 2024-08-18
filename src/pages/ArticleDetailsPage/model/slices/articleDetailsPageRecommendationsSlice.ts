import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';
import { Article } from 'entities/Article';

import { ArticleDetailsCommentSchema } from '../types/ArticleDetailsComments';
import { fetchArticleRecommendations } from '../services/fetchArticleRecommendations/fetchArticleRecommendations';

const recommendationsAdapter = createEntityAdapter<Article, string>({
  selectId: (article) => article.id,
});

export const getArticleRecommendations =
  recommendationsAdapter.getSelectors<StateSchema>(
    (state) =>
      state.articleDetailsPage?.recommendations ||
      recommendationsAdapter.getInitialState(),
  );

const articleDetailsPageRecommendationsSlice = createSlice({
  name: 'articleDetailsPageRecommendationsSlice',
  initialState:
    recommendationsAdapter.getInitialState<ArticleDetailsCommentSchema>({
      isLoading: false,
      ids: [],
      entities: {},
      error: undefined,
    }),
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchArticleRecommendations.pending, (state) => {
        state.error = undefined;
        state.isLoading = true;
      })
      .addCase(fetchArticleRecommendations.fulfilled, (state, action) => {
        state.isLoading = false;
        recommendationsAdapter.setAll(state, action.payload);
      })
      .addCase(fetchArticleRecommendations.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const { reducer: articleDetailsPageRecommendationsReducer } =
  articleDetailsPageRecommendationsSlice;
