"use client";

import { motion } from "framer-motion";
import TiltCard from "@/app/TiltCard";

const CTA = () => {
  const features = [
    {
      title: "智能工作流",
      desc: "一句话完成复杂任务：'@xxx, 出一套高中数学单元测试卷，pdf格式，发送给xxx并要求周五前完成'",
      img: "img/workflow.png",
      name: "智能工作流场景",
    },
    {
      title: "文件管理",
      desc: "轻松处理文件任务：'整理文件，清理1年前的文档，重新归档' 或 '将最近微信下载的两个word文件转成pdf并合并打印'",
      img: "img/file-management.png",
      name: "文件管理场景",
    },
    {
      title: "多Agent协作",
      desc: "@xxx, 联系xxx安排下周活动，确认后让@xxx找个酒店 - 多个Agent协同工作，自动分配和执行任务",
      img: "img/multi-agent.png",
      name: "多Agent协作场景",
    },
  ];
  
  return (
    <div id="cta" className="pb-0" >
      <div className="flex flex-col justify-center items-center h-full px-10 lg:px-0">
        <div className="pb-16 mt-12 max-w-2xl px-3 md:px-16 flex flex-col justify-center items-center mx-auto space-y-3 sm:text-center">
          <h2 className="text-gray-800 sm:text-5xl font-semibold text-4xl pb-3">
            <span className="text-gradient">解决最后一公里问题</span>
          </h2>
          <div className={"text-gray-600 text-lg"}>
            <strong>繁杂的AI产品并不能便捷快速地解决"最后一公里"问题</strong>，
            <strong>Ghostie专注于工作场景下的具体末梢场景</strong>
          </div>
        </div>
        <div className="custom-screen max-w-4xl pb-16 lx:pb-0 xl:max-w-[75%] mx-auto text-gray-300">
          <ul className="space-y-8 gap-x-3 lg:gap-x-8 px-0 sm:px-24 md:px-0 lg:px-12 md:flex md:space-y-0">
            {features.map((item, idx) => (
              <TiltCard
                key={idx}
                className={
                  "flex-1 flex bg-muted flex-col overflow-hidden justify-between rounded-xl aspect-[3/4] md:aspect-[2/3] h-auto"
                }
              >
                <div className="flex-1 flex flex-col overflow-hidden justify-between rounded-xl aspect-[3/4] md:aspect-[2/3] h-auto">
                  <motion.div
                    initial={{ y: 120, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{
                      ease: "easeInOut",
                      duration: 0.75,
                      delay: idx / 5,
                    }}
                  >
                    <div className="p-6">
                      <h2 className="text-gray-900 mb-4 text-[1.2rem] font-bold">
                        {item.title}
                      </h2>
                      <p className="text-gray-900 text-sm sm:text-base max-w-xl mt-6">
                        {item.desc}
                      </p>
                    </div>
                    <div className="pl-6 relative overflow-hidden -mr-12">
                      <img
                        src={item.img}
                        alt={item.name}
                        className="w-full h-full object-cover shadow-2xl"
                        style={{ objectPosition: "top left" }}
                      />
                    </div>
                  </motion.div>
                </div>
              </TiltCard>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CTA;
