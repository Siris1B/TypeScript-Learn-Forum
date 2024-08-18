import { ArticleDetailsCommentSchema } from './ArticleDetailsComments';
import { ArticleDetailsPageRecommendationsSchema } from './ArticleDetailsPageRecommendationsSchema';

export interface ArticleDetailsPageSchema {
  comments: ArticleDetailsCommentSchema;
  recommendations: ArticleDetailsPageRecommendationsSchema;
}
