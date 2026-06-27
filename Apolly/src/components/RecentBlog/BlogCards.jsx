
const POSTS = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=600&q=80",
    title: "The Snap Pixel: How It Works and How to Install",
    excerpt:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra nunc ante velit vitae. Est tellus vitae, nullam lobortis enim.",
    href: "#",
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=600&q=80",
    title: "Global Partner Solutions: A Partnership of Innovation",
    excerpt:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra nunc ante velit vitae. Est tellus vitae, nullam lobortis enim.",
    href: "#",
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&q=80",
    title: "2021: An Opportunity for Snapchatters to Start Fresh",
    excerpt:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra nunc ante velit vitae. Est tellus vitae, nullam lobortis enim.",
    href: "#",
  },
];


function BlogCard({ image, title, excerpt, href }) {
  return (
    
    <article className="
      group
      bg-white border border-gray-100 rounded-sm
      overflow-hidden
      shadow-sm hover:shadow-xl
      transition-shadow duration-300 ease-in-out
      flex flex-col
    ">

      
      <div className="overflow-hidden aspect-video">
        <img
          src={image}
          alt={title}
          className="
            w-full h-full object-cover
            scale-100 group-hover:scale-110
            transition-transform duration-500 ease-in-out
          "
        />
      </div>


      <div className="flex flex-col flex-1 p-5 sm:p-6">

        {/* Title */}
        <h2 className="
          text-sm sm:text-base font-bold uppercase tracking-wide
          text-gray-900 leading-snug mb-3
          group-hover:text-indigo-700
          transition-colors duration-200
        ">
          {title}
        </h2>

        {/* Excerpt */}
        <p className="text-sm text-gray-500 leading-relaxed flex-1 mb-5">
          {excerpt}
        </p>

        {/* Read More link */}
        {/*
         * The arrow `→` shifts right on hover using `translate-x`.
         * The whole link also nudges right slightly for a nice effect.
         */}
        <a
          href={href}
          className="
            inline-flex items-center gap-1
            text-xs sm:text-sm font-bold uppercase tracking-widest
            text-indigo-600 hover:text-indigo-800
            transition-colors duration-200
            w-fit
          "
        >
          Read More
          <span className="
            inline-block
            translate-x-0 group-hover:translate-x-1
            transition-transform duration-200
          ">
            →
          </span>
        </a>

      </div>
    </article>
  );
}

// ─── MAIN COMPONENT ────────────────────────────────────────────────
export default function BlogCards() {
  return (
    
    <section className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {POSTS.map((post) => (
          <BlogCard key={post.id} {...post} />
        ))}
      </div>
    </section>
  );
}
