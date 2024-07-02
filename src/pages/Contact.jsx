import React from "react";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const Contact = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium">Name</label>
          <Input id="name" {...register("name", { required: true })} />
          {errors.name && <span className="text-red-500 text-sm">This field is required</span>}
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium">Email</label>
          <Input id="email" type="email" {...register("email", { required: true })} />
          {errors.email && <span className="text-red-500 text-sm">This field is required</span>}
        </div>
        <div>
          <label htmlFor="subject" className="block text-sm font-medium">Subject</label>
          <Input id="subject" {...register("subject", { required: true })} />
          {errors.subject && <span className="text-red-500 text-sm">This field is required</span>}
        </div>
        <div>
          <label htmlFor="message" className="block text-sm font-medium">Message</label>
          <Textarea id="message" {...register("message", { required: true })} />
          {errors.message && <span className="text-red-500 text-sm">This field is required</span>}
        </div>
        <Button type="submit">Submit</Button>
      </form>
    </div>
  );
};

export default Contact;