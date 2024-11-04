import PageTitle from '@/components/shared/PageTitle';
import AppLayout from '@/layouts/AppLayout';
import React, { useState } from 'react';
import Image from 'next/image';
import Button from '@/components/form/Button';
import Input from '@/components/form/Input';
import TextArea from '@/components/form/Textarea';
import emailjs from 'emailjs-com';
import { FiFacebook, FiGithub } from 'react-icons/fi';
import Link from 'next/link';
import { PiTelegramLogo } from 'react-icons/pi';
import { CgMail } from 'react-icons/cg';
import { IoMailOpenOutline } from 'react-icons/io5';
import { LuMailOpen } from 'react-icons/lu';

type Props = {};

const Contact = (props: Props) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [loading, setLoading] = useState(false);
  const [responseMessage, setResponseMessage] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      await emailjs.send(
        'YOUR_SERVICE_ID',
        'YOUR_TEMPLATE_ID',
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
        },
        'YOUR_USER_ID'
      );

      setResponseMessage('Email sent successfully!');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      console.error('Error sending email:', error);
      setResponseMessage('Failed to send email. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <AppLayout title="contact">
      <PageTitle
        breadcrumb={[
          { label: 'Home', path: '/' },
          { label: 'Contact', path: '' },
        ]}
      >
        Contact
      </PageTitle>
      <div className="flex gap-5 m-auto justify-center">
        <Link href="https://www.facebook.com/sarosereyvichea" legacyBehavior>
          <a className="text-gray-700 transition-colors duration-150 hover:text-primary-500 dark:text-white dark:hover:text-primary-500">
            <FiFacebook size={25} />
          </a>
        </Link>
        <Link href="https://t.me/SaroSereyvichea" legacyBehavior>
          <a className="text-gray-700 transition-colors duration-150 hover:text-primary-500 dark:text-white dark:hover:text-primary-500">
            <PiTelegramLogo size={25} />
          </a>
        </Link>
        <Link href="https://www.github.com/vichea-tech" legacyBehavior>
          <a className="text-gray-700 transition-colors duration-150 hover:text-primary-500 dark:text-white dark:hover:text-primary-500">
            <FiGithub size={25} />
          </a>
        </Link>
        <Link href="mailto:sarosereyvichea@gmail.com" legacyBehavior>
          <a className="text-gray-700 transition-colors duration-150 hover:text-primary-500 dark:text-white dark:hover:text-primary-500">
            <LuMailOpen size={25} />
          </a>
        </Link>
      </div>
      <div className="container py-10">
        <div className="grid gap-6 md:grid-cols-3">
          <div className="relative mb-10 h-48">
            <Image src="/images/map.svg" layout="fill" className="dark:invert" alt="map" />
            <h6 className="text-2xl font-bold">Contact with me</h6>
            <p className="mt-2">I would love to hear from you. 👋</p>
            <div className="mt-10 text-gray-400">
              <p>Phnom Penh, Cambodia</p>
              <p className="mt-4">+855967771683</p>
              <p>sarosereyvichea@gmail.com</p>
            </div>
          </div>
          <div className="col-span-2">
            <form onSubmit={handleSubmit}>
              <div className="grid gap-8 md:grid-cols-2">
                <Input name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} />
                <Input name="email" placeholder="Email Address" value={formData.email} onChange={handleChange} />
              </div>

              <div className="mt-8">
                <Input name="subject" placeholder="Subject" value={formData.subject} onChange={handleChange} />
              </div>
              <div className="mt-8">
                <TextArea name="message" placeholder="Message" value={formData.message} onChange={handleChange} />
              </div>
              <div className="mt-8">
                <Button
                  type="submit"
                  disabled={loading}
                  className="mt-5 bg-primary-500 px-8 font-semibold text-white hover:bg-primary-600 focus:ring-2 focus:ring-primary-200"
                >
                  {loading ? 'Sending...' : 'Send Message'}
                </Button>
              </div>
              {responseMessage && <p className="mt-4 text-sm">{responseMessage}</p>}
            </form>
          </div>
        </div>
      </div>
    </AppLayout>
  );
};

export default Contact;
