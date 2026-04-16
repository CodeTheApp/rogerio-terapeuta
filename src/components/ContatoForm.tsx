"use client";

import { motion } from "motion/react";
import { useState, type FormEvent } from "react";
import { Button } from "./Button";
import { InputField } from "./InputField";

const CONTACT_EMAIL = "contato@rogerioviana.com";

export default function ContatoForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const body = `Nome: ${name}\nE-mail: ${email}\n\n${message}`;
    const mailto = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(
      subject || "Contato via site"
    )}&body=${encodeURIComponent(body)}`;
    window.location.href = mailto;
  };

  return (
    <motion.form
      onSubmit={handleSubmit}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5 }}
      className="bg-surface-container-low rounded-4xl px-8 md:px-12 pt-10 pb-16 flex flex-col gap-8 shadow-subtle"
    >
      <InputField
        label="Nome completo"
        placeholder="Como gostaria de ser chamado?"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
        autoComplete="name"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <InputField
          label="E-mail"
          type="email"
          placeholder="seu@email.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          autoComplete="email"
        />
        <InputField
          label="Assunto"
          placeholder="Qual o motivo do contato?"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
        />
      </div>

      <div className="flex flex-col gap-2 w-full">
        <label
          htmlFor="contato-mensagem"
          className="font-sans font-medium text-on-surface-variant text-label-md"
        >
          SUA MENSAGEM
        </label>
        <textarea
          id="contato-mensagem"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Sinta-se à vontade para compartilhar o que desejar..."
          required
          rows={5}
          className="w-full bg-surface-container-highest border-[1.5px] border-transparent focus:border-primary rounded-xl px-6 py-4 font-sans text-body-md text-on-surface placeholder:text-outline outline-none transition-colors duration-200 resize-y min-h-[140px]"
        />
      </div>

      <Button type="submit" variant="primary" size="lg" className="w-full">
        Enviar Mensagem
      </Button>
    </motion.form>
  );
}
