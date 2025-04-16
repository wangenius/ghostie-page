"use client";

import { motion } from "framer-motion";

const Testimonials = () => {
  const testimonials = [
    {
      name: "张工",
      title: "产品经理",
      quote:
        "Ghostie让我的工作效率提升了一个档次。特别是多Agent协作功能，帮我处理了很多繁琐的跨部门协调工作。最棒的是它的本地化部署，让数据安全有了保障。",
    },
    {
      name: "李总",
      title: "创业者",
      quote:
        "作为一个经常需要处理各种文档和数据的创业者，Ghostie的文件管理和知识库功能帮了大忙。它不仅智能，而且真的懂我的工作流程。20MB的体积，秒启动的速度，让我惊喜。",
    },
    {
      name: "王老师",
      title: "教育工作者",
      quote:
        "我用Ghostie来准备教学材料和管理学生作业，效果非常好。它的工作流引擎让很多重复性工作自动化了，插件系统也很容易扩展新功能。最重要的是它特别容易上手。",
    },
  ];

  return (
    <section id="testimonials" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-bold tracking-tight mb-4">
            用户反馈
          </h2>
          <p className="text-xl text-muted-foreground">
            来自各行各业的用户，分享他们使用 Ghostie 的心得
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((item, idx) => (
            <motion.div
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: idx * 0.2 }}
              key={idx}
              className="bg-card rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="flex items-center gap-4 mb-4">
                <div>
                  <h3 className="font-semibold text-lg">
                    {item.name}
                  </h3>
                  <p className="text-muted-foreground">
                    {item.title}
                  </p>
                </div>
              </div>
              <blockquote className="text-muted-foreground italic">
                "{item.quote}"
              </blockquote>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
