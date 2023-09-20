'use client';

import { useForm } from 'react-hook-form';

type FormInput = {
  name: string;
  email: string;
  message: string;
};

export default function ContactUsForm() {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
    reset,
  } = useForm<FormInput>();

  return (
    <div className='w-10/12 md:w-6/12'>
      <form className='mb-10 mt-5 flex w-full flex-col rounded-md bg-white p-5 py-14 shadow-lg md:max-w-3xl md:px-10 mx-auto'>
        <input
          className='mt-4 mb-3 h-14 block w-full rounded-md border px-3 text-gray-600 outline-none focus:border-stone-500 focus:outline-none md:mb-0'
          type='text'
          placeholder='Name'
          required
          {...register('name')}
        />
        <input
          className='mt-4 mb-3 h-14 block w-full rounded-md border px-3 text-gray-600 outline-none focus:border-stone-500 focus:outline-none md:mb-0'
          type='email'
          placeholder='Email'
          required
          {...register('email')}
        />
        <textarea
          className='mt-4 mb-5 block w-full rounded-md border px-3 text-gray-600 outline-none focus:border-stone-500 focus:outline-none md:mb-0'
          placeholder='Message Us'
          rows={6}
          required
          {...register('message')}
        />

        <button
          disabled={isSubmitting}
          type='submit'
          className='bg-blue-700 px-6 py-3 disabled:bg-gray-500 block-primary rounded-md cursor-pointer text-white mt-4 font-bold'
        >
          Book Appointment
        </button>
      </form>
    </div>
  );
}
