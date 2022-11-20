import {
  ROUTE_TO_BLOGS,
  ROUTE_TO_NOT_EXISTING_PAGE,
  ROUTE_TO_SPECIFIC_BLOGS,
} from 'common/constants';
import { PageNotFound } from 'components';
import { Blogs, SpecificBlog } from 'features';

export const publicRoutes = [
  {
    path: ROUTE_TO_BLOGS,
    Component: Blogs,
  },
  {
    path: ROUTE_TO_SPECIFIC_BLOGS,
    Component: SpecificBlog,
  },
  {
    path: ROUTE_TO_SPECIFIC_BLOGS,
    Component: SpecificBlog,
  },
  {
    path: ROUTE_TO_NOT_EXISTING_PAGE,
    Component: PageNotFound,
  },
];
