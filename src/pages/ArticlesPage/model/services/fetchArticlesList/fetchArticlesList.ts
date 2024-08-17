import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { Article, ArticleType } from 'entities/Article';
import { addQueryParams } from 'shared/lib/url/addQueryParams/addQueryParams';

import {
  getArticlesPageLimit,
  getArticlesPageNum,
  getArticlesPageOrder,
  getArticlesPageSearch,
  getArticlesPageSort,
  getArticlesPageType,
} from '../../selectors/articlesPageSelectors';

interface FetchArticlesListProps {
  replace?: boolean;
}

export const fetchArticlesList = createAsyncThunk<
  Article[],
  FetchArticlesListProps,
  ThunkConfig<string>
>(
  'articlesPage/fetchArticlesList',
  async (props, { extra, rejectWithValue, getState }) => {
    const limit = getArticlesPageLimit(getState());
    const order = getArticlesPageOrder(getState());
    const sort = getArticlesPageSort(getState());
    const search = getArticlesPageSearch(getState());
    const page = getArticlesPageNum(getState());
    const type = getArticlesPageType(getState());
    const { replace = false } = props;
    try {
      addQueryParams({
        sort,
        order,
        search,
        type,
      });
      const res = await extra.api.get<Article[]>('/articles', {
        params: {
          _expand: 'user',
          _limit: limit,
          _page: page,
          _sort: sort,
          _order: order,
          type: type === ArticleType.ALL ? undefined : type,
          q: search,
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
