import CTA from './CTA';
import Features from './Features';
import Footer from './Footer';
import Hero from './Hero';
import ProductionDownload from './ProductionDownload';
import Testimonials from './Testimonials';
import ToolKit from './ToolKit';
import { motion } from 'framer-motion';
import { PiBrain, PiGear, PiLightning, PiTree } from 'react-icons/pi';
const philosophies = [
  {
    icon: <PiLightning className="w-8 h-8" />,
    title: "深入业务末梢",
    desc: "",
  },
  {
    icon: <PiTree className="w-8 h-8" />,
    title: "有机成长",
    desc: "每个Agent都能根据业务场景自主学习和进化,形成独特的专业特性,真正理解您的工作方式。",
  },
  {
    icon: <PiGear className="w-8 h-8" />,
    title: "自由协作",
    desc: "突破传统的单一AI助手模式,多个Agent可以自由组合、协同工作,像真实团队一样高效运转。",
  },
  {
    icon: <PiBrain className="w-8 h-8" />,
    title: "智能自治",
    desc: "赋予Agent更多自主权,让它们能够理解上下文、制定计划、执行任务,真正成为您的得力助手。",
  },
];
export default function HomePage() {
  return (
    <>

      
      <Hero />
      <section className="py-16 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-semibold text-muted-foreground">
              受到全球顶尖开发者和企业的信赖
            </h2>
          </div>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-50">
            <img src="/img/partners/openai.svg" alt="OpenAI" className="h-8" />
            <img
              src="/img/partners/shopify.svg"
              alt="Shopify"
              className="h-8"
            />
            <img src="/img/partners/vercel.svg" alt="Vercel" className="h-8" />
            <img src="/img/partners/notion.svg" alt="Notion" className="h-8" />
            <img
              src="/img/partners/replicate.svg"
              alt="Replicate"
              className="h-8"
            />
          </div>
        </div>
      </section>
      <Features />
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/50 to-background" />
        <div className="container mx-auto px-4 relative">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl font-bold tracking-tight mb-6">
                Agent 自由哲学
              </h2>
              <p className="text-xl text-muted-foreground">
                我们相信，真正强大的 AI 助手应该能够深入理解您的业务，
                自主成长，并与其他 Agent 默契配合，为您解决实际问题。
              </p>
            </motion.div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {philosophies.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: idx % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="relative group"
              >
                <div className="bg-card/50 backdrop-blur-sm rounded-2xl p-8 transition-all duration-300 hover:bg-card hover:shadow-lg">
                  <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    {item.icon}
                  </div>
                  <h3 className="text-2xl font-semibold mb-4">{item.title}</h3>
                  <p className="text-muted-foreground text-lg leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-16 text-center"
          >
            <p className="text-xl font-medium text-muted-foreground">
              让 AI 真正理解您的业务，
              <span className="text-primary font-semibold">
                成为最懂您的智能伙伴
              </span>
            </p>
          </motion.div>
        </div>
      </section>
      <section className="py-24 relative overflow-hidden bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-card p-8 rounded-2xl"
            >
              <h3 className="text-xl font-semibold mb-4">前沿智能</h3>
              <p className="text-muted-foreground">
                由定制化模型与前沿模型混合驱动，Ghostie
                既聪明又快速。支持多种大语言模型，让您的工作效率倍增。
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-card p-8 rounded-2xl"
            >
              <h3 className="text-xl font-semibold mb-4">熟悉的体验</h3>
              <p className="text-muted-foreground">
                一键导入所有扩展、主题和快捷键绑定。保持您熟悉的工作流程，同时获得
                AI 的强大助力。
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-card p-8 rounded-2xl"
            >
              <h3 className="text-xl font-semibold mb-4">隐私保护</h3>
              <p className="text-muted-foreground">
                启用隐私模式后，您的代码不会储存于远程。本地优先的设计确保您的数据安全。
              </p>
            </motion.div>
          </div>
        </div>
      </section>
      <ToolKit />
      <CTA />
      <Testimonials />
      <ProductionDownload />
      <Footer />
      </>
  );
}
