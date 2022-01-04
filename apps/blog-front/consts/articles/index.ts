import {join} from 'path';

export const POSTS_PATH = join(
  process.cwd(), process.env.ARTICLE_MARKDOWN_PATH
);