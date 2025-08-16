import { useQuery, useMutation, useQueryClient, UseQueryOptions, UseMutationOptions } from '@tanstack/react-query';
import { ApiService } from '@/services/api';
import { ApiError } from '@/lib/api';

// Generic useQuery hook
export function useApiQuery<T>(
  queryKey: string[],
  url: string,
  options?: Omit<UseQueryOptions<T, ApiError, T>, 'queryKey' | 'queryFn'>
) {
  return useQuery<T, ApiError>({
    queryKey,
    queryFn: () => ApiService.get<T>(url),
    ...options,
  });
}

// Generic useMutation hook
export function useApiMutation<T, V>(
  url: string,
  method: 'POST' | 'PUT' | 'PATCH' | 'DELETE' = 'POST',
  options?: Omit<UseMutationOptions<T, ApiError, V>, 'mutationFn'>
) {
  const queryClient = useQueryClient();

  return useMutation<T, ApiError, V>({
    mutationFn: (data: V) => {
      switch (method) {
        case 'POST':
          return ApiService.post<T>(url, data);
        case 'PUT':
          return ApiService.put<T>(url, data);
        case 'PATCH':
          return ApiService.patch<T>(url, data);
        case 'DELETE':
          return ApiService.delete<T>(url);
        default:
          return ApiService.post<T>(url, data);
      }
    },
    onSuccess: () => {
      // Invalidate and refetch related queries
      queryClient.invalidateQueries({ queryKey: [url.split('/')[1]] });
    },
    ...options,
  });
}

// Optimistic update hook
export function useOptimisticMutation<T, V>(
  url: string,
  method: 'POST' | 'PUT' | 'PATCH' | 'DELETE' = 'POST',
  options?: {
    queryKey: string[];
    updateFn: (oldData: T[], newData: V) => T[];
  }
) {
  const queryClient = useQueryClient();

  return useApiMutation<T, V>(url, method, {
    onMutate: async (newData) => {
      if (options?.queryKey) {
        // Cancel outgoing refetches
        await queryClient.cancelQueries({ queryKey: options.queryKey });

        // Snapshot previous value
        const previousData = queryClient.getQueryData<T[]>(options.queryKey);

        // Optimistically update
        if (previousData) {
          queryClient.setQueryData<T[]>(options.queryKey, (old) => 
            options.updateFn(old || [], newData)
          );
        }

        return { previousData };
      }
    },
    onError: (err, newData, context: any) => {
      // Rollback on error
      if (context?.previousData && options?.queryKey) {
        queryClient.setQueryData(options.queryKey, context.previousData);
      }
    },
    onSettled: () => {
      // Always refetch after error or success
      if (options?.queryKey) {
        queryClient.invalidateQueries({ queryKey: options.queryKey });
      }
    },
    ...options,
  });
}
