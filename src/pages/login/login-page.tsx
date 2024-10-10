import { FormEvent } from 'react';
import { Link, Navigate } from 'react-router-dom';
import { useLogin } from './use-login';
import { useAuth } from '@/hooks/use-auth';
import CustomInput from '@/components/custom-input';
import { Button } from '@/components/ui/button';
import { LoadingSpinner } from '@/components/loading-spinner';
import { Toaster } from '@/components/ui/toaster';

export const LoginPage = () => {
  const { login, handleChange, isLoginPending } = useLogin();
  const auth = useAuth();

  const handleLogin = async (e: FormEvent) => {
    e.preventDefault();

    login();
  };

  if (auth?.user) return <Navigate to='/' />;

  return (
    <div className='flex flex-col items-center justify-center w-screen h-screen bg-blue-50'>
      <form
        className='base-card'
        onSubmit={handleLogin}
      >
        <CustomInput
          className='w-full'
          label='Email'
          id='email'
          name='email'
          type='email'
          onChange={handleChange}
        />
        <CustomInput
          label='Password'
          id='password'
          name='password'
          type='password'
          onChange={handleChange}
        />
        <Button
          aria-disabled={isLoginPending}
          disabled={isLoginPending}
          className='w-full mt-4'
          type='submit'
        >
          Login {isLoginPending && <LoadingSpinner className='ml-2' />}
        </Button>
        <div className='self-center mt-4'>
          <p>
            {"Don't have an account?"}{' '}
            <Link
              to='/register'
              className='text-blue-500'
            >
              Sign up
            </Link>
          </p>
        </div>
      </form>
      <Toaster />
    </div>
  );
};
