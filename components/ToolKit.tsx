"use client";

import { motion } from "framer-motion";

const ToolKit = () => {
  const features = [
    {
      title: (
        <h2>
          <span className="text-gradient">多Agent协作系统</span>
        </h2>
      ),
      desc: (
        <p className="text-muted-foreground text-lg leading-relaxed">
          支持创建和管理多个AI助手，每个助手可以配置不同的模型和知识库。助手之间可以协同工作，自动分配任务，实现复杂工作流程的自动化执行。
        </p>
      ),
      img: (
        <div className="relative overflow-hidden rounded-xl">
          <img
            className="w-full h-full object-cover"
            loading="lazy"
            decoding="async"
            src={"img/multi-agent-system.png"}
            alt="多Agent协作系统"
          />
        </div>
      ),
    },
    {
      title: (
        <h2>
          <span className="text-gradient">工作流引擎</span>
        </h2>
      ),
      desc: (
        <p className="text-muted-foreground text-lg leading-relaxed">
          可视化的工作流设计工具，支持条件分支、循环和错误处理。通过简单的拖拽操作，即可创建复杂的自动化工作流，让AI助手按照预设流程执行任务。
        </p>
      ),
      img: (
        <div className="relative overflow-hidden rounded-xl">
          <img
            className="w-full h-full object-cover"
            loading="lazy"
            decoding="async"
            src={"img/workflow-engine.png"}
            alt="工作流引擎"
          />
        </div>
      ),
    },
    {
      title: (
        <h2>
          <span className="text-gradient">插件系统</span>
        </h2>
      ),
      desc: (
        <p className="text-muted-foreground text-lg leading-relaxed">
          轻量级的插件开发框架，使用TypeScript即可快速开发插件。支持热重载，无需复杂的环境配置。内置插件市场，轻松扩展系统功能。
        </p>
      ),
      img: (
        <div className="relative overflow-hidden rounded-xl">
          <img
            className="w-full h-full object-cover shadow-lg"
            src={"img/plugin-system.png"}
            alt="插件系统"
          />
        </div>
      ),
    },
    {
      title: (
        <h2>
          <span className="text-gradient">知识库管理</span>
        </h2>
      ),
      desc: (
        <p className="text-muted-foreground text-lg leading-relaxed">
          支持多种格式的文档导入，自动解析和建立索引。实时更新知识库，智能检索和过滤。支持私有化部署，确保数据安全。
        </p>
      ),
      img: (
        <div className="relative overflow-hidden rounded-xl">
          <img
            className="w-full h-full object-cover"
            loading="lazy"
            decoding="async"
            src={"img/knowledge-base.png"}
            alt="知识库管理"
          />
        </div>
      ),
    },
  ];
  return (
    <section id="toolkit" className="py-24 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-bold tracking-tight mb-4">
            <span className="text-gradient">强大而易用的工具集</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Ghostie提供一套完整的工具，让AI真正服务于您的日常工作
          </p>
        </div>
        <div className="space-y-24">
          {features.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: idx * 0.2 }}
              className="grid lg:grid-cols-2 gap-12 items-center"
            >
              <div className={idx % 2 === 0 ? "lg:order-1" : "lg:order-2"}>
                <div className="text-3xl font-bold tracking-tight mb-6">
                  {item.title}
                </div>
                {item.desc}
              </div>
              <div className={`${idx % 2 === 0 ? "lg:order-2" : "lg:order-1"} bg-muted rounded-xl p-4`}>
                {item.img}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default ToolKit;
