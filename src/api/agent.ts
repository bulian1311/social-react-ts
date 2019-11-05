import axios, { AxiosResponse } from 'axios';
import { IActivity } from '../models/activity';
import { toast } from 'react-toastify';
import { history } from '..';

axios.defaults.baseURL = 'http://localhost:3030';

axios.interceptors.response.use(undefined, error => {
  const { status } = error.response;
  if (status === 404 || status === 400) {
    history.push('/notfound');
  }

  if (status === 500) {
    toast.error('Ошибка на сервере.');
  }

  if (error.message === "Network Error") {
    toast.error("Ошибка сети.");
  }
});

const responseBody = (res: AxiosResponse) => res.data;

const sleep = (ms: number) => (response: AxiosResponse) =>
  new Promise<AxiosResponse>(resolve => setTimeout(() => resolve(response), ms));

const requests = {
  get: (url: string) => axios.get(url).then(sleep(1000)).then(responseBody),
  post: (url: string, body: {}) => axios.post(url, body).then(sleep(1000)).then(responseBody),
  put: (url: string, body: {}) => axios.put(url, body).then(sleep(1000)).then(responseBody),
  delete: (url: string) => axios.delete(url).then(sleep(1000)).then(responseBody),
};

const Activities = {
  list: (): Promise<IActivity[]> => requests.get('/activities'),
  details: (id: string): Promise<IActivity> => requests.get(`/activities/${id}`),
  create: (activity: IActivity) => requests.post('/activities', activity),
  update: (activity: IActivity) => requests.put(`/activities/${activity.id}`, activity),
  delete: (id: string) => requests.delete(`/activities/${id}`),
};

export default {
  Activities
};