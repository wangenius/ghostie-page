"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import { PiDownloadSimple, PiArrowRight } from "react-icons/pi";

const GradientText = ({ children }: { children: React.ReactNode }) => (
  <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/50">
    {children}
  </span>
);

const Hero = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleDownload = () => {
    // 处理下载逻辑
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-background to-muted/30">
      {/* 背景装饰 */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-to-r from-primary/5 to-transparent rounded-full blur-3xl" />
        <div className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-gradient-to-l from-primary/5 to-transparent rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 py-24 relative z-10">
        <div className="text-center max-w-5xl mx-auto">
          {/* 主标题 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-6"
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-4">
              <GradientText>Ghostie</GradientText>
              <br />
              <span className="text-3xl md:text-5xl lg:text-6xl">
                Desktop Agent Platform
              </span>
            </h1>
          </motion.div>

          {/* 副标题 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-12"
          >
            <p className="text-xl md:text-2xl text-muted-foreground">
              Simple, Flexible, Efficient Agent Development and Ecosystem Platform
            </p>
          </motion.div>

          {/* 按钮组 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <button
              onClick={handleDownload}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-full font-semibold text-lg transition-all hover:scale-105 hover:shadow-lg"
            >
              <PiDownloadSimple size={24} />
              立即下载
              <motion.span
                animate={{ x: isHovered ? 5 : 0 }}
                transition={{ duration: 0.2 }}
              >
                <PiArrowRight size={24} />
              </motion.span>
            </button>
            
            <a
              className="text-lg font-semibold text-muted-foreground hover:text-primary transition-colors px-8 py-4"
            >
              查看文档
            </a>
          </motion.div>

          {/* 特性标签 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-12 flex flex-wrap justify-center gap-4"
          >
            {[
              "多Agent协作",
              "本地化部署",
              "插件生态",
              "工作流引擎",
              "知识库管理",
              "MCP协议"
            ].map((tag, index) => (
              <span
                key={index}
                className="px-4 py-2 rounded-full bg-muted text-muted-foreground text-sm font-medium"
              >
                {tag}
              </span>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
