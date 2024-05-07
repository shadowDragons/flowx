import { getAxios } from '~/lib/utils/axios';

export const getProject = (id: string) => {
  return getAxios({ url: `/project/detail?id=${id}` });
};
export const getProjects = () => {
  return getAxios({ url: `/project/list` });
};
