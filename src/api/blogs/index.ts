import { apiConfig } from 'api';
import { ROUTE_TO_BLOGS } from 'common/constants';
import { IBlogResponse, IResponse } from 'common/types/api';

export const blogsAPI = {
  getAllBlogs() {
    return apiConfig.get<IResponse<IBlogResponse>>(ROUTE_TO_BLOGS);
  },
};
