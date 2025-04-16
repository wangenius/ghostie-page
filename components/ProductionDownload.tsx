"use client";
import { IoLogoChrome } from "react-icons/io";
import { BiLogoWindows } from "react-icons/bi";
import { SiMacos } from "react-icons/si";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface Asset {
  name: string;
  browser_download_url: string;
}

interface Release {
  assets: Asset[];
}

const ProductionDownload = () => {
  
  const [latestRelease, setLatestRelease] = useState<Release | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchLatestRelease = async () => {
      try {
        // 请求 GitHub API 获取最新版本的发布信息
        const response = await fetch('https://api.github.com/repos/wangenius/jezzlab-releases/releases/latest');
        const data: Release = await response.json();
        setLatestRelease(data);
        setLoading(false);
      } catch (error) {
        console.error('获取 Release 信息失败:', error);
        setLoading(false);
      }
    };

    fetchLatestRelease();
  }, []);

  const handleDownload = () => {
    if (latestRelease) {
      // 查找以 .exe 结尾的文件
      const exeAsset = latestRelease.assets.find((asset) => asset.name.endsWith('.exe'));
      if (exeAsset) {
        // 重定向浏览器到 .exe 文件的下载链接，开始下载
        window.location.href = exeAsset.browser_download_url;
      } else {
        alert('未找到 .exe 文件');
      }
    }
  };
  
  return (
    <motion.div
      whileInView={{ opacity: 1, y: 0 }}
      initial={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.5 }}
      id={"production_download"}
      className=" bg-gray-900"
    >
      <div className="max-w-2xl mx-auto text-white py-10">
        <div className="text-center">
          <div className="custom-screen">
            <div className="max-w-2xl mx-auto text-center"></div>
          </div>
          <h2 className="text-gray-100 text-3xl font-semibold sm:text-4xl">
            和Ghostie一起开始今天的工作
          </h2>
          <p className="mt-3 text-gray-100">
            一个专家为您的下一个想法创建，遵循最佳实践，删除障碍，按时交付。
          </p>

          <div className="flex flex-col mx-8 md:mx-0 gap-6 md:flex-row justify-center my-10">
            <div
              onClick={() => {
                window.open("https://jezzlab.com");
              }}
              className="cursor-pointer w-auto flex items-center border rounded-lg px-4 py-2  mx-2"
            >
              <IoLogoChrome size={25} />
              <div className="text-left ml-3">
                <p className="text-xs text-gray-200">推荐chrome</p>
                <p className="text-sm md:text-base">网页端直接访问</p>
              </div>
            </div>
            <div
              onClick={handleDownload}
              className="cursor-pointer flex items-center w-auto border  rounded-lg px-4 py-2 mx-2"
            >
              <BiLogoWindows size={25} />
              <div className="text-left ml-3">
                <p className="text-xs text-gray-200">下载PC端应用(preview)</p>
                <p className="text-sm md:text-base">WINDOWS 10/11(x64)</p>
              </div>
            </div>

            <div className="cursor-pointer flex w-auto items-center border rounded-lg px-4 py-2  mx-2">
              <SiMacos size={25} />
              <div className="text-left ml-3">
                <p className="text-xs text-gray-200">正在开发....</p>
                <p className="text-sm md:text-base">MAC OS</p>
              </div>
            </div>
          </div>
          <small className={"text-gray-50"}>更多途径正在开发...</small>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductionDownload;
