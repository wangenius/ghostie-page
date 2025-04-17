import { motion } from "framer-motion";

const Testimonials = () => {
  const testimonials = [
    {
      name: "John Doe",
      title: "Product Manager",
      quote:
        "Ghostie has significantly improved my work efficiency. The multi-agent collaboration feature has helped me handle many tedious cross-department coordination tasks. The best part is its local deployment, providing data security.",
    },
    {
      name: "Jane Smith",
      title: "Startup Founder",
      quote:
        "As a startup founder who often needs to handle various documents and data, Ghostie's file management and knowledge base features have been a great help. It is not only intelligent but also truly understands my work process. The 20MB volume starts up in seconds, which surprised me.",
    },
    {
      name: "Teacher Wang",
      title: "Educator",
      quote:
        "I use Ghostie to prepare teaching materials and manage student assignments, and it works great. Its workflow engine automates many repetitive tasks, and its plugin system is easy to extend with new features. Most importantly, it is very easy to use.",
    },
  ];

  return (
    <section id="testimonials" className="py-32 bg-background relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-muted/10 pointer-events-none" />
      <div className="container mx-auto px-4 relative z-10">
      <div className="text-center mb-20">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <span className="text-4xl md:text-5xl font-bold tracking-tight mb-6">User Feedback</span>

        </motion.div>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {testimonials.map((item, idx) => (
            <motion.div
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              key={idx}
              className="bg-card/50 backdrop-blur-sm rounded-xl p-8 border border-border/30 hover:border-border/60 transition-all"
            >
              <blockquote className="text-muted-foreground mb-6 text-sm leading-relaxed">
                "{item.quote}"
              </blockquote>
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-medium">
                  {item.name.charAt(0)}
                </div>
                <div>
                  <h3 className="font-medium text-foreground">
                    {item.name}
                  </h3>
                  <p className="text-xs text-muted-foreground">
                    {item.title}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
