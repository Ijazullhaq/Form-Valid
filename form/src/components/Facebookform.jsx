import React from 'react';
import { useForm } from 'react-hook-form';
import { DevTool } from '@hookform/devtools';

let renderCount = 0;

export const Facebookform = () => {
  const form = useForm();
  const { register, control, handleSubmit, formState } = form;
  const {error} = formState;

  const onSubmit = (data) => {
    console.log('Form submitted', data);
  };

  renderCount++;
  return (
    <div>
      <h1>YouTube Form ({Math.floor(renderCount / 2)})</h1>
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <div className='form-control'>
        <label htmlFor="username">Username</label>
        <input type="text" id="username" {...register('username', {required: "username is required",})} />
        {/* <p className='error'>{errors.username?.message}</p> */}
        </div>

        <div className='form-control'>
        <label htmlFor="email">E-mail</label>
        <input type="email" id="email" {...register('email', {
          pattern: {
            value:
            /^[a-zA-Z0-9.!#$&'*+/=_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*/,
            message:"invalid email format",
          },
        })} />
           {/* <p className='error'>{rrors.email?.message}</p> */}
           </div>

           <div className='form-control'>
        <label htmlFor="page">Page</label>
        <input type="text" id="page" {...register('page' , {
          required: {
            value: true,
            message: "Page is Required",
          },
        })} />
        {/* <p className='error'>{errors.page?.message}</p> */}
        </div>

        <button type="submit">Submit</button>
      </form>
      <DevTool control={control} />
    </div>
  );
};
