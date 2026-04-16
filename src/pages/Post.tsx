import { useParams, Link } from "react-router-dom";
import { motion } from "motion/react";
import { ArrowLeft, Clock, Calendar, Share2, Heart, Mail } from "lucide-react";
import { posts } from "../data/posts";
import { useEffect } from "react";

export default function Post() {
  const { slug } = useParams();
  const post = posts.find((p) => p.slug === slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!post) {
    return (
      <div className="pt-48 pb-24 text-center">
        <h1 className="text-3xl font-headline mb-4">Artigo nao encontrado</h1>
        <Link to="/blog" className="text-primary hover:underline">
          Voltar para o blog
        </Link>
      </div>
    );
  }

  const relatedPosts = posts.filter((p) => p.id !== post.id).slice(0, 2);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-24 md:pt-32 pb-20"
    >
      {/* Back button */}
      <div className="mx-auto mb-8 px-8 max-w-7xl">
        <Link
          to="/blog"
          className="inline-flex items-center gap-2 text-on-surface-variant hover:text-primary transition-colors font-bold text-sm uppercase tracking-widest"
        >
          <ArrowLeft className="w-4 h-4" />
          Voltar ao Blog
        </Link>
      </div>

      {/* Hero Section */}
      <div className="mx-auto mb-16 px-8 max-w-7xl">
        <div className="items-center gap-12 grid grid-cols-1 lg:grid-cols-12">
          <div className="lg:col-span-8">
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-block bg-secondary-container mb-6 px-4 py-1 rounded-full font-semibold text-on-secondary-container text-xs uppercase tracking-widest"
            >
              {post.category}
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="mb-8 font-headline text-on-surface text-4xl md:text-6xl leading-[1.1] font-bold"
            >
              {post.title}
            </motion.h1>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="flex items-center gap-4 font-medium text-on-surface-variant text-sm"
            >
              <Calendar size={18} className="text-primary" />
              <span>{post.date}</span>
              <span className="mx-2">-</span>
              <Clock size={18} className="text-primary" />
              <span>{post.readTime}</span>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Featured Image */}
      <div className="mx-auto mb-20 px-8 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="bg-surface-container-low rounded-[2.5rem] w-full aspect-[21/9] overflow-hidden"
        >
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </motion.div>
      </div>

      {/* Content Layout */}
      <div className="gap-16 grid grid-cols-1 lg:grid-cols-12 mx-auto px-8 max-w-7xl">
        <motion.article
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="lg:col-span-8 text-on-surface-variant leading-relaxed"
        >
          <div
            className="max-w-none prose prose-lg prose-headings:font-headline prose-headings:text-on-surface prose-p:text-on-surface-variant prose-blockquote:border-primary prose-blockquote:text-primary prose-blockquote:italic prose-blockquote:font-headline prose-blockquote:text-2xl"
            dangerouslySetInnerHTML={{
              __html:
                post.content ||
                `<p>${post.excerpt}</p><p>Conteudo completo em breve...</p>`,
            }}
          />

          {/* Article Tags */}
          <div className="flex flex-wrap gap-3 mt-16 pt-12 border-t border-outline-variant/20">
            {["Auto-conhecimento", "Psicologia", "Mindfulness", "Bem-estar"].map(
              (tag) => (
                <span
                  key={tag}
                  className="bg-surface-container-low hover:bg-secondary-container px-4 py-2 rounded-lg font-medium text-secondary text-sm transition-colors cursor-pointer"
                >
                  {tag}
                </span>
              )
            )}
          </div>

          {/* Author footer */}
          <div className="mt-12 pt-12 border-t border-primary/10">
            <div className="flex flex-col md:flex-row justify-between items-center gap-8">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full overflow-hidden bg-surface-container-high">
                  <img
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDrPa5b4YV4WDP5lP5bqNCOpNiOczRd6MR7QrQSAlNPsbVzi6WQDhs_pvdT9VS2MNctg9K_FCDbLqAZFu_L6GU1eGIj8fjv-MaNLJqKbexNLdLjr_c4bn5ox72Zedf9uzx4nECO3s8MqRLJmDKzvqO4dPRTpM5CgPG2HNyiYzp4P1EMWf82LzH5Il23OU9HXJ4Mf_bvsJsOkxcAyudLMUn0cJLVQxOddK3nqG-5J20LufzgmLhtczlY9T5T0_Rwu22wxEWjPQNdXqY"
                    alt="Rogerio Viana"
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div>
                  <p className="font-bold text-on-surface">Rogerio Viana</p>
                  <p className="text-sm text-on-surface-variant">
                    Psicologo Clinico - CRP 06/XXXXX
                  </p>
                </div>
              </div>
              <button className="flex items-center gap-2 px-6 py-3 bg-surface-container-low rounded-xl text-primary font-bold hover:bg-primary/5 transition-all">
                <Share2 className="w-4 h-4" />
                Compartilhar Artigo
              </button>
            </div>
          </div>
        </motion.article>

        {/* Sidebar */}
        <aside className="space-y-12 lg:col-span-4">
          {/* Newsletter Card */}
          <div className="bg-surface-container-low p-8 border rounded-[2.5rem] border-outline-variant/10">
            <h3 className="mb-4 font-headline text-on-surface text-2xl">
              Cartas Semanais
            </h3>
            <p className="mb-6 text-on-surface-variant text-sm leading-relaxed">
              Receba reflexoes exclusivas sobre psicologia e bem-estar
              diretamente em sua caixa de entrada, com a leveza que o seu
              domingo pede.
            </p>
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="Seu melhor e-mail"
                className="bg-surface-container-lowest px-5 py-4 border-none rounded-xl focus:ring-1 focus:ring-primary w-full placeholder:text-on-surface-variant/50 text-sm"
              />
              <button className="bg-primary hover:opacity-90 py-4 rounded-xl w-full font-semibold text-on-primary text-sm transition-all">
                Inscrever-se agora
              </button>
            </form>
            <p className="mt-4 text-[10px] text-on-surface-variant/60 text-center uppercase tracking-widest">
              Privacidade garantida.
            </p>
          </div>

          {/* Related Articles */}
          <div className="space-y-6">
            <h3 className="px-2 font-headline text-on-surface text-xl">
              Leia a seguir
            </h3>
            {relatedPosts.map((p) => (
              <Link
                key={p.id}
                to={`/blog/${p.slug}`}
                className="group block hover:bg-surface-container-low p-4 rounded-2xl transition-colors"
              >
                <div className="bg-surface-container-low mb-4 rounded-xl aspect-video overflow-hidden">
                  <img
                    src={p.image}
                    alt={p.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <h4 className="mb-2 font-headline text-on-surface group-hover:text-primary text-lg leading-tight transition-colors">
                  {p.title}
                </h4>
                <span className="font-medium text-on-surface-variant text-xs uppercase tracking-wider">
                  {p.category} - {p.readTime}
                </span>
              </Link>
            ))}
          </div>

          {/* Bio Card */}
          <div className="bg-secondary-container/20 p-8 rounded-[2.5rem] text-center">
            <div className="bg-surface-container-low shadow-sm mx-auto mb-4 border-2 border-white rounded-full w-20 h-20 overflow-hidden">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDrPa5b4YV4WDP5lP5bqNCOpNiOczRd6MR7QrQSAlNPsbVzi6WQDhs_pvdT9VS2MNctg9K_FCDbLqAZFu_L6GU1eGIj8fjv-MaNLJqKbexNLdLjr_c4bn5ox72Zedf9uzx4nECO3s8MqRLJmDKzvqO4dPRTpM5CgPG2HNyiYzp4P1EMWf82LzH5Il23OU9HXJ4Mf_bvsJsOkxcAyudLMUn0cJLVQxOddK3nqG-5J20LufzgmLhtczlY9T5T0_Rwu22wxEWjPQNdXqY"
                alt="Rogerio Viana"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <h5 className="font-headline text-on-surface text-lg">
              Rogerio Viana
            </h5>
            <p className="mb-4 font-medium text-secondary text-xs italic">
              Psicologo Clinico & Escritor
            </p>
            <div className="flex justify-center gap-4 text-primary">
              <Share2
                size={18}
                className="hover:opacity-70 cursor-pointer"
              />
              <Heart
                size={18}
                className="hover:opacity-70 cursor-pointer"
              />
              <Mail
                size={18}
                className="hover:opacity-70 cursor-pointer"
              />
            </div>
          </div>
        </aside>
      </div>
    </motion.div>
  );
}
