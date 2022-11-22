export interface IResponse<D> {
  pagesCount: number;
  page: number;
  pageSize: number;
  totalCount: number;
  items: D;
}

export interface IBlogResponse {
  id: string;
  name: string;
  description: string;
  websiteUrl: string;
  createdAt: string;
}

export interface IPostResponse {
  id: string;
  title: string;
  shortDescription: string;
  content: string;
  blogId: string;
  blogName: string;
  createdAt: string;
}
