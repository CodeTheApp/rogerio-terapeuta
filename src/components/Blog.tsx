import { motion } from "motion/react";
import { ArrowRight, ArrowUpRight } from "lucide-react";

const posts = [
  {
    title: "As Máscaras que Usamos: A Jornada da Autenticidade",
    excerpt: "Por que sentimos a necessidade de esconder nossa vulnerabilidade? Um olhar clínico sobre a coragem de ser quem somos.",
    category: "Autoconhecimento",
    date: "12 Out, 2024",
    image: "https://images.unsplash.com/photo-1544640808-32ca72ac7f37?q=80&w=1935&auto=format&fit=crop"
  },
  {
    title: "Limites: O Ato Mais Profundo de Amor ao Próximo",
    excerpt: "Dizer não é, muitas vezes, a única forma de preservar a saúde de um vínculo. Aprenda a estabelecer fronteiras saudáveis.",
    category: "Relacionamentos",
    date: "08 Out, 2024",
    image: "https://images.unsplash.com/photo-1516589174184-c685266e430c?q=80&w=1974&auto=format&fit=crop"
  }
];

export default function Blog() {
  return (
    <section id="blog" className="py-24 md:py-32 px-6 bg-surface">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="text-center md:text-left">
            <h2 className="text-5xl md:text-7xl font-headline font-bold tracking-tight text-on-surface mb-4">Escritas da Alma</h2>
            <p className="text-on-surface-variant text-lg md:text-xl max-w-2xl font-light">Reflexões sobre a existência, o sentir e o processo de tornar-se quem se é.</p>
          </div>
          <a href="#" className="inline-flex items-center gap-2 text-primary font-bold hover:underline group mb-2">
            Ver todo o blog
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {posts.map((post, i) => (
            <motion.article 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="flex flex-col group cursor-pointer"
            >
              <div className="overflow-hidden rounded-3xl mb-8 aspect-[4/3] bg-surface-container-high shadow-lg">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="flex items-center gap-3 mb-4">
                <span className="bg-secondary/10 text-secondary px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider">
                  {post.category}
                </span>
                <span className="text-on-surface-variant/60 text-xs font-medium">{post.date}</span>
              </div>
              <h3 className="text-3xl font-headline font-bold text-on-surface mb-4 leading-tight group-hover:text-primary transition-colors">
                {post.title}
              </h3>
              <p className="text-on-surface-variant text-lg line-clamp-2 mb-8 leading-relaxed">
                {post.excerpt}
              </p>
              <div className="mt-auto flex items-center gap-2 text-primary font-bold group/link">
                <span className="group-hover/link:underline">Continuar Lendo</span>
                <ArrowUpRight className="w-4 h-4 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
