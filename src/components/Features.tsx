
import {
  PiRobot,
  PiDesktop,
  PiPlugs,
  PiFlowArrow,
  PiBooks,
  PiTarget,
  PiGlobe,
  PiPuzzlePiece,
} from "react-icons/pi";
import { motion } from "framer-motion";

const Features = () => {
  const features = [
    {
      icon: <PiRobot size={28} />,
      title: "AI & Agent System",
      desc: (
        <span>
          支持创建多个AI助手，<strong>独立配置不同模型</strong>
          ，智能上下文管理，可自定义助手个性和行为，支持助手间协作。
        </span>
      ),
    },
    {
      icon: <PiDesktop size={28} />,
      title: "Desktop Integration",
      desc: (
        <span>
          完整的桌面系统访问权限，<strong>无缝集成本地环境</strong>
          ，支持系统级自动化，原生文件系统集成，实现真正的桌面助手。
        </span>
      ),
    },
    {
      icon: <PiPlugs size={28} />,
      title: "Plugin Architecture",
      desc: (
        <span>
          轻量级插件系统，支持<strong>TS快速开发插件</strong>
          ，无需环境配置，插件市场，热重载，权限管理。
        </span>
      ),
    },
    {
      icon: <PiFlowArrow size={28} />,
      title: "Workflow Engine",
      desc: (
        <span>
          可视化工作流设计，<strong>多Agent协同工作</strong>
          ，支持条件分支、循环和错误处理，自动化任务执行。
        </span>
      ),
    },
    {
      icon: <PiBooks size={28} />,
      title: "Knowledge Management",
      desc: (
        <span>
          本地知识库管理，<strong>实时知识更新</strong>
          ，支持多种格式，智能检索过滤，知识共享与同步。
        </span>
      ),
    },
    {
      icon: <PiTarget size={28} />,
      title: "User Experience",
      desc: (
        <span>
          Alt+Space快捷唤醒，<strong>现代化UI设计</strong>
          ，自动更新，跨平台一致性，极致性能体验。
        </span>
      ),
    },
    {
      icon: <PiGlobe size={28} />,
      title: "MCP Protocol Support",
      desc: (
        <span>
          完整支持MCP协议，<strong>无缝对接第三方服务</strong>
          ，快速扩展生态能力，整合各类大模型。
        </span>
      ),
    },
    {
      icon: <PiPuzzlePiece size={28} />,
      title: "Local Extension System",
      desc: (
        <span>
          强大的本地扩展机制，<strong>支持自定义工具开发</strong>
          ，无需云服务即可扩展功能，保护隐私数据。
        </span>
      ),
    },
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-background to-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold tracking-tight mb-4">
            核心特性
          </h2>
          <p className="text-xl text-muted-foreground">
            <strong>Ghostie</strong>
            是下一代智能桌面生产力平台，为企业和AI超级个体打造的Agent工作空间。
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {features.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{
                duration: 0.5,
                delay: idx * 0.1,
              }}
              className="group relative"
            >
              <div className="h-full rounded-xl border bg-card p-6 shadow-lg transition-shadow hover:shadow-xl">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  {item.icon}
                </div>
                <h3 className="mb-2 font-semibold tracking-tight text-xl">
                  {item.title}
                </h3>
                <p className="text-muted-foreground">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
