/* eslint-disable unused-imports/no-unused-vars */

interface BaseResponse<T> {
  copyright: string;
  num_results: number;
  results: T;
}

interface BookList {
  display_name: string;
  list_name: string;
  list_name_encoded: string;
  newest_published_date: string;
  oldest_published_date: string;
  updated: string;
}

interface BookListDetail {
  bestsellers_date: string;
  books: Book[];
  display_name: string;
  list_name: string;
  list_name_encoded: string;
  next_published_date: string;
  normal_list_ends_at: number;
  previous_published_date: string;
  published_date: string;
  published_date_description: string;
  updated: string;
}

interface Book {
  age_group: string;
  amazon_product_url: string;
  article_chapter_link: string;
  asterisk: number;
  author: string;
  book_image: string;
  book_image_height: number;
  book_image_width: number;
  book_review_link: string;
  book_uri: string;
  buy_links: BookLink[];
  contributor: string;
  contributor_note: string;
  dagger: number;
  description: string;
  first_chapter_link: string;
  isbns: Isbn[];
  price: string;
  primary_isbn10: string;
  primary_isbn13: string;
  publisher: string;
  rank: number;
  rank_last_week: number;
  sunday_review_link: string;
  title: string;
  weeks_on_list: number;
}

interface Isbn {
  isbn10: string;
  isbn13: string;
}

interface BookLink {
  name: string;
  url: string;
}

type GetBookListsResponse = BaseResponse<BookList[]>;
type GetBookListDetailResponse = BaseResponse<BookListDetail>;
