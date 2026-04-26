'use client';

import { motion } from 'motion/react';
import { useState, type FormEvent } from 'react';
import { Button } from './Button';
import { InputField } from './InputField';

const CONTACT_EMAIL = 'contato@vianaterapia.com';

export default function ContatoForm() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const body = `Nome: ${name}\nTelefone / WhatsApp: ${phone}\nAssunto: ${subject}\n\n${message}`;
    const whatsapp = `https://wa.me/${phone}?text=${encodeURIComponent(body)}`;
    window.open(whatsapp, '_blank');
  };

  return (
    <motion.form
      onSubmit={handleSubmit}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.5 }}
      className='flex flex-col gap-8 bg-surface-container-low shadow-subtle px-8 md:px-12 pt-10 pb-16 rounded-4xl'
    >
      <InputField
        label='Nome completo'
        placeholder='Como gostaria de ser chamado?'
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
        autoComplete='name'
      />

      <div className='gap-6 grid grid-cols-1 sm:grid-cols-2'>
        <InputField
          label='Telefone / WhatsApp'
          type='tel'
          placeholder='+351 926 130 470'
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required
          autoComplete='tel'
        />
        <InputField
          label='Assunto'
          placeholder='Qual o motivo do contato?'
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
        />
      </div>

      <div className='flex flex-col gap-2 w-full'>
        <label
          htmlFor='contato-mensagem'
          className='font-sans font-medium text-label-md text-on-surface-variant'
        >
          SUA MENSAGEM
        </label>
        <textarea
          id='contato-mensagem'
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder='Sinta-se à vontade para compartilhar o que desejar...'
          required
          rows={5}
          className='bg-surface-container-highest px-6 py-4 border-[1.5px] border-transparent focus:border-primary rounded-xl placeholder:text-outline outline-none w-full min-h-[140px] font-sans text-body-md text-on-surface transition-colors duration-200 resize-y'
        />
      </div>

      <Button type='submit' variant='primary' size='lg' className='w-full'>
        Enviar Mensagem
      </Button>
    </motion.form>
  );
}
