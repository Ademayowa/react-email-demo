import { z } from 'zod';

export const formSchema = z.object({
  name: z.string().min(2, {
    message: 'Name must be at least 2 characters',
  }),
  email: z.string().email({
    message: 'Please enter a valid email address',
  }),
  contactUs: z.string().min(10, {
    message: 'Message must contain 10 characters',
  }),
});

export type FormInput = z.infer<typeof formSchema>;
