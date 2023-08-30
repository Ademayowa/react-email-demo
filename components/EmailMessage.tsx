import {
  Body,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Preview,
  Tailwind,
  Text,
} from '@react-email/components';
import * as React from 'react';

type MessageUsEmailProps = {
  name: string;
  email: string;
  message: string;
};

const MessageUsEmail = ({ name, email, message }: MessageUsEmailProps) => {
  const previewText = `Weekly Updates 🚀${name} sent you a message.`;
  return (
    <Html>
      <Head />
      <Preview>{previewText}</Preview>
      <Tailwind>
        <Body className='bg-white my-auto mx-auto font-sans'>
          <Container className='my-[20px] mx-auto p-[20px] max-w-4xl'>
            <Heading className='text-black text-[20px] font-normal text-left'>
              <strong>Hello {name},</strong>
            </Heading>
            <Text className='text-black text-[14px] leading-[24px]'>
              {message}
            </Text>
            <Hr className='my-[16px] mx-0 w-full' />
            <Text className='text-[#666666] text-[12px]'>
              React email is a package that enables you to send emails via your
              web applications in a modern way.
            </Text>
            <Text className='text-[#666666] text-[12px]'>
              This email is delivered to you through the Resend SDK
              integrations.✨
            </Text>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

export default MessageUsEmail;
