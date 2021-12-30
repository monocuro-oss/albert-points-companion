import axios, { AxiosRequestConfig } from 'axios';

export type CommandSet = {
  name: string;
  description: string;
  commands: {
    name: string;
    description: string;
  }[];
};

export type ItemSet = {
  name: string;
  description: string;
  items: {
    name: string;
    description: string;
    image_url: string;
  }[];
};

const client = axios.create({
  baseURL: `/api/`,
});

const request = async <T>(payload: AxiosRequestConfig): Promise<T> => {
  const response = await client.request<T>(payload);
  // TODO: Add error handling

  return response.data;
};

export const getHomeMarkdown = (): Promise<string> => {
  return request({ method: 'GET', url: '/markdown/home' });
};
export const getGettingStartedMarkdown = (): Promise<string> => {
  return request({ method: 'GET', url: '/markdown/getting_started' });
};
export const getCommandsMarkdown = (): Promise<string> => {
  return request({ method: 'GET', url: '/markdown/commands' });
};
export const getItemsMarkdown = (): Promise<string> => {
  return request({ method: 'GET', url: '/markdown/items' });
};
export const getDungeonsMarkdown = (): Promise<string> => {
  return request({ method: 'GET', url: '/markdown/dungeons' });
};

export const getCommandSets = (): Promise<CommandSet[]> => {
  return request({ method: 'GET', url: '/commandSets' });
};

export const getItemSets = (): Promise<ItemSet[]> => {
  return request({ method: 'GET', url: '/itemSets' });
};
