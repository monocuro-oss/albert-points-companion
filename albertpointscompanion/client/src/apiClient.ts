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
  }[];
};

export type HelperSet = {
  name: string;
  description: string;
  teams: {
    name: string;
    description: string;
    helpers: {
      name: string;
      description: string;
    }[];
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

export const getCommandSets = (): Promise<CommandSet[]> => {
  return request({ method: 'GET', url: '/commandSets' });
};

export const getItemSets = (): Promise<ItemSet[]> => {
  return request({ method: 'GET', url: '/itemSets' });
};

export const getHelperSets = (): Promise<HelperSet[]> => {
  return request({ method: 'GET', url: '/helperSets' });
};
