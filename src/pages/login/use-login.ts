import { TUser, useAuth } from '@/hooks/use-auth';
import { showSimpleToast } from '@/utils/utils';
import { useMutation } from '@tanstack/react-query';
import { AxiosError } from 'axios';
// import { AxiosError } from "axios";
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export type TLogin = {
  email?: string;
  password?: string;
};

export const useLogin = () => {
  const [form, setForm] = useState<TLogin | null>(null);
  const auth = useAuth();
  // const axiosInstance = useAxios(false);
  const navigate = useNavigate();

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    const { name, value } = e.target;

    setForm((prev) => {
      return { ...prev, [name]: value };
    });
  }

  // call this function when you want to authenticate the user
  const { mutate: login, isPending: isLoginPending } = useMutation({
    mutationFn: async () => {
      // const response = (
      //   await axiosInstance.post<LoginResponse>('/users/login', JSON.stringify(form), {
      //     method: 'POST',
      //   })
      // ).data;

      return {
        email: form?.email,
        // token: response.data,
      } as TUser;
    },
    onSuccess: (data) => {
      if (!auth) return;
      auth.setUser(data);
      navigate('/', { replace: true });
    },
    onError: (error) => {
      let errorMessage = 'Something went wrong!';

      if (error instanceof AxiosError) {
        errorMessage = error.response?.data.message;
      }

      showSimpleToast({
        title: 'Error!',
        description: errorMessage,
      });
    },
  });

  return { login, handleChange, isLoginPending };
};
