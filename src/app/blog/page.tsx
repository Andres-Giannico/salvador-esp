import { Metadata } from "next";
import BlogClientPage from "./page.client";
import { absoluteUrl, getSiteUrl } from "@/config/site";
import { esPageMetadata } from "@/lib/page-meta";

interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  author: string;
  imageUrl: string;
  category: string;
}

export const metadata: Metadata = esPageMetadata({
  path: "/blog",
  title: "Blog Salvador Ibiza | Experiencias en barco e inspiración para Ibiza",
  description:
    "Historias sobre excursiones en barco, calas secretas, atardeceres en alta mar y consejos prácticos para tu próximo día en Salvador Ibiza.",
});

const blogPosts: BlogPost[] = [
  {
    slug: "discover-love-at-sea",
    title: "Descubre el amor en el mar: atardecer romántico",
    excerpt:
      "La magia de un atardecer en Ibiza a bordo de Salvador es el plan perfecto para una escapada en pareja.",
    date: "2025-04-25",
    author: "Equipo Salvador",
    imageUrl: "/images/blog/discover-love-at-sea.webp",
    category: "Romántico",
  },
  {
    slug: "hidden-coves-ibiza",
    title: "Calas escondidas de Ibiza vistas desde el barco",
    excerpt:
      "Mucho más que las playas de moda: recorrer la costa con nosotros abre rincones que solo llegan desde el mar.",
    date: "2025-04-20",
    author: "Capitán Alex",
    imageUrl: "/images/blog/hidden-cove.webp",
    category: "Exploración",
  },
  {
    slug: "sunset-sailing-ibiza",
    title: "Por qué un atardecer en barco es imprescindible en Ibiza",
    excerpt:
      "La mejor perspectiva de la Golden Hour está en cubierta, con música suave y un brindis rodeado del mar.",
    date: "2025-04-15",
    author: "Equipo Editorial",
    imageUrl: "/images/optimized/sunset-sailing-cruise-ibiza.webp",
    category: "Experiencias",
  },
  {
    slug: "ibiza-midday-magic-boat-trip",
    title: "La magia del mediodía: excursión diurna inolvidable",
    excerpt:
      "Sol intenso, aguas brillantes y la energía contagiosa del mediterráneo en una salida todo incluido.",
    date: "2024-05-28",
    author: "Equipo Salvador",
    imageUrl: "/images/blog/midday-magic-placeholder.webp",
    category: "Experiencias",
  },
];

function generateBlogSchema(posts: BlogPost[]) {
  const base = getSiteUrl();
  const blogPostings = posts.map((post) => ({
    "@type": "BlogPosting",
    headline: post.title,
    url: absoluteUrl(`/blog/${post.slug}`),
    image: absoluteUrl(post.imageUrl),
    datePublished: `${post.date}T12:00:00+02:00`,
    author: {
      "@type": "Person",
      name: post.author,
    },
    description: post.excerpt,
    inLanguage: "es-ES",
  }));

  return {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: "Blog Salvador Ibiza — Salvadoreiviza.es",
    url: absoluteUrl("/blog"),
    description:
      "Historias sobre excursiones en barco, calas secretas, atardeceres en alta mar y consejos prácticos para tu próximo día en Salvador Ibiza.",
    blogPost: blogPostings,
    inLanguage: "es-ES",
    publisher: {
      "@type": "Organization",
      name: "Salvador Ibiza",
      url: `${base}/`,
    },
  };
}

export default function BlogPage() {
  const schema = generateBlogSchema(blogPosts);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <BlogClientPage posts={blogPosts} />
    </>
  );
}
