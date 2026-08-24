import api from '../lib/axios';

export const appointmentsService = {
  getAll: async () => {
    const response = await api.get('/appointments');
    return response.data;
  },

  getById: async (id: string) => {
    const response = await api.get(`/appointments/${id}`);
    return response.data;
  },

  create: async (data: any) => {
    const response = await api.post('/appointments', data);
    return response.data;
  },

  update: async (id: string, data: any) => {
    const response = await api.patch(`/appointments/${id}`, data);
    return response.data;
  },

  delete: async (id: string) => {
    const response = await api.delete(`/appointments/${id}`);
    return response.data;
  }
};
