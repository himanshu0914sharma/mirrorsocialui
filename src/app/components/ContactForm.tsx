"use client"
import React, { useEffect, useRef, useState } from 'react';
import { useForm } from 'react-hook-form';


interface FormField {
    id: 'name' | 'email' | 'message';
    required: boolean;
    label: string;
    errorMessage: string;
    type?: string;
}

const formFields: FormField[] = [
    {
        id: 'name',
        required: true,
        label: 'Name',
        errorMessage: 'Your good name?',
    },
    {
        id: 'email',
        required: true,
        label: 'Email',
        errorMessage: 'Email is required. That is where I will get back to you.',
        type: 'email',
    },
    {
        id: 'message',
        required: true,
        label: 'Message',
        errorMessage: `Don't hesitate. Write your mind.`,
    }
]
interface FormValues {
    name: string;
    email: string;
    message: string;
}

const ContactForm: React.FC = () => {
  const { register, handleSubmit, reset, formState: { errors }, watch } = useForm<FormValues>();
  const [submitInfo, setSubmitInfo] = useState({
    error: false,
    message: ""
  });
  const previousFormData = useRef<any>(null);

  const watchAllFields = watch();

  useEffect(() => {
    if (previousFormData.current !== null && JSON.stringify(previousFormData.current) !== JSON.stringify(watchAllFields) && submitInfo.message) {
        setSubmitInfo((info)=> ({...info, message: ""}))
    }
    previousFormData.current = watchAllFields;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [watchAllFields]);

  const onSubmit = async (data: any) => {
    const { message } = data;
    if(!message || (message?.trim()?.length < 10)){
        alert("Message too short! Please elaborate and retry sending...");
        return;
    }
    try {
        const response = await fetch('/api/contact', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data),
        });
  
        if (response.ok) {
          console.log('Email sent successfully');
          setSubmitInfo(info => ({...info, message: "Thank you for your message. We have received it. Will get back to you shortly!", error: false}));
          alert('Thank you for your message. We have received it. Will get back to you shortly!');
          reset();
        } else {
          console.error('Failed to send email:', await response.text());
          setSubmitInfo(info => ({...info, message: `Something went wrong! Failed to send email. Please retry.`, error: true}));
        }
      } catch (error) {
        console.error('Error sending email:', error);
        setSubmitInfo(info => ({...info, message: `Something went wrong! Failed to send email. Please retry.`, error: true}))
      }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
        {formFields.map(({id, required, label, errorMessage, type="text"}) => {
            return (
                <div className="mb-4" key={id}>
                    <label htmlFor={id} className="block text-white-700">{label}</label>
                    <input type={type} id={id} className="form-input mt-1 block w-full p-2 rounded-md text-black" {...register(id, { required })}/>
                    {errors.name && <span className="text-red-500">{errorMessage || `${label} is mandatory`}</span>}
                </div>
            )
        })}
      <div>
        {submitInfo.message && <div className={`${submitInfo.error? 'text-red-500': 'text-green-500'} mt-3 mb-3`}>{submitInfo.message}</div>}
        <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded hover:bg-blue-600">Send</button>
      </div>
    </form>
  );
};

export default ContactForm;
