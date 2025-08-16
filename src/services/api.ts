import { api, handleApiError } from '@/lib/api';

// Base API response type
export interface ApiResponse<T> {
  data: T;
  message?: string;
  success: boolean;
}

// Generic API service class
export class ApiService {
  static async get<T>(url: string, config?: any): Promise<T> {
    try {
      const response = await api.get<ApiResponse<T>>(url, config);
      return response.data.data;
    } catch (error) {
      throw handleApiError(error);
    }
  }

  static async post<T>(url: string, data?: any, config?: any): Promise<T> {
    try {
      const response = await api.post<ApiResponse<T>>(url, data, config);
      return response.data.data;
    } catch (error) {
      throw handleApiError(error);
    }
  }

  static async put<T>(url: string, data?: any, config?: any): Promise<T> {
    try {
      const response = await api.put<ApiResponse<T>>(url, data, config);
      return response.data.data;
    } catch (error) {
      throw handleApiError(error);
    }
  }

  static async delete<T>(url: string, config?: any): Promise<T> {
    try {
      const response = await api.delete<ApiResponse<T>>(url, config);
      return response.data.data;
    } catch (error) {
      throw handleApiError(error);
    }
  }

  static async patch<T>(url: string, data?: any, config?: any): Promise<T> {
    try {
      const response = await api.patch<ApiResponse<T>>(url, data, config);
      return response.data.data;
    } catch (error) {
      throw handleApiError(error);
    }
  }
}
