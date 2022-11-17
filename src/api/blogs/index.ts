import { apiConfig } from 'api';
import { ROUTE_TO_BLOGS } from 'common/constants';
import { IBlogResponse, IResponse } from 'common/types/api';

const defaultPageSize = 5;

export const blogsAPI = {
  getAllBlogs(pageSize = defaultPageSize) {
    return apiConfig.get<IResponse<IBlogResponse[]>>(ROUTE_TO_BLOGS, {
      params: {
        pageSize,
      },
    });
  },
  getSpecificBlog(id: string) {
    return apiConfig.get<IBlogResponse>(`${ROUTE_TO_BLOGS}/${id}`);
  },
};
