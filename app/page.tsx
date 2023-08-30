import ContactUsForm from '@/components/ContactUsForm';

export default function HomePage() {
  return (
    <div className='grid place-items-center'>
      <h1 className='text-lg md:text-3xl font-bold mt-5'>
        Sending emails with Resend
      </h1>

      <ContactUsForm />
    </div>
  );
}
