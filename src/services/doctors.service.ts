import api from '../lib/axios';

export const doctorsService = {
  getAll: async () => {
    const response = await api.get('/doctors');
    return response.data;
  },

  getById: async (id: string) => {
    const response = await api.get(`/doctors/${id}`);
    return response.data;
  },

  create: async (data: any) => {
    const response = await api.post('/doctors', data);
    return response.data;
  },

  update: async (id: string, data: any) => {
    const response = await api.patch(`/doctors/${id}`, data);
    return response.data;
  },

  delete: async (id: string) => {
    const response = await api.delete(`/doctors/${id}`);
    return response.data;
  }
};
