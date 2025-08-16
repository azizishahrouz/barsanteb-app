import { useApiQuery, useApiMutation, useOptimisticMutation } from './useApi';

// Types
export interface Post {
  id: number;
  title: string;
  caption: string;
  store: number;
  date: string;
  time: string;
  likes_count: number;
  dislikes_count: number;
}

export interface CreatePostData {
  title: string;
  caption: string;
  store: number;
}

export interface UpdatePostData extends Partial<CreatePostData> {
  id: number;
}

// Query keys
export const postKeys = {
  all: ['posts'] as const,
  lists: () => [...postKeys.all, 'list'] as const,
  list: (filters: string) => [...postKeys.lists(), { filters }] as const,
  details: () => [...postKeys.all, 'detail'] as const,
  detail: (id: number) => [...postKeys.details(), id] as const,
};

// Hooks
export const usePosts = (filters?: string) => {
  return useApiQuery<Post[]>(
    ['posts', 'list', filters || 'all'],
    '/api/posts/',
    {
      staleTime: 2 * 60 * 1000, // 2 minutes
      gcTime: 5 * 60 * 1000, // 5 minutes
    }
  );
};

export const usePost = (id: number) => {
  return useApiQuery<Post>(
    ['posts', 'detail', id.toString()],
    `/api/posts/${id}/`,
    {
      enabled: !!id,
      staleTime: 5 * 60 * 1000, // 5 minutes
    }
  );
};

export const useCreatePost = () => {
  return useApiMutation<Post, CreatePostData>('/api/posts/');
};

export const useUpdatePost = () => {
  return useApiMutation<Post, UpdatePostData>('/api/posts/', 'PUT');
};

export const useDeletePost = () => {
  return useOptimisticMutation<Post, number>(
    '/api/posts/',
    'DELETE',
    {
      queryKey: ['posts', 'list'],
      updateFn: (oldData, deletedId) => 
        oldData.filter(post => post.id !== deletedId),
    }
  );
};

export const useLikePost = () => {
  return useOptimisticMutation<Post, { id: number; action: 'like' | 'dislike' }>(
    '/api/posts/like/',
    'POST',
    {
      queryKey: ['posts', 'list'],
      updateFn: (oldData, { id, action }) =>
        oldData.map(post =>
          post.id === id
            ? {
                ...post,
                likes_count: action === 'like' 
                  ? post.likes_count + 1 
                  : post.likes_count,
                dislikes_count: action === 'dislike' 
                  ? post.dislikes_count + 1 
                  : post.dislikes_count,
              }
            : post
        ),
    }
  );
};
