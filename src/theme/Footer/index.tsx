import { motion } from "framer-motion";
import React, { type ReactNode } from "react";
import {
  SiBilibili,
  SiSinaweibo,
  SiTencentqq,
  SiTiktok,
  SiWechat,
  SiXiaohongshu,
} from "react-icons/si";

const style = "w-10 h-10 hover:bg-primary-foreground/10 p-2 rounded-lg duration-150 cursor-pointer"

function Footer(): ReactNode {
  return (
    <footer id="footer" className="pt-12 p-5 sm:pt-20 sm:px-0 lg:px-20 bg-primary">
      <div className="custom-screen text-gray-600">
        <div className="flex flex-wrap gap-y-10 items-center justify-between">
          <motion.div
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: -60 }}
            transition={{ duration: 0.5 }}
            className="flex-1"
          >
            <div className="space-y-4">
              <img src={"icon-empty.svg"} alt={""} style={{ width: 60 }} />
              <h2 className="!text-primary-foreground text-lg font-semibold sm:text-2xl">
                Ghostie
              </h2>
              <p className="max-w-md !text-primary-foreground/50">
                Simple, Flexible, Efficient Agent Development and Ecosystem
                Platform
              </p>
            </div>
          </motion.div>
        </div>
        <div className="pt-2 flex mb-10 items-center gap-x-3 !text-primary-foreground/50">
          <SiTiktok
            onClick={() => {}}
            className={style}
          />

          <SiBilibili
            onClick={() => {
              window.open(
                "https://space.bilibili.com/247967944?spm_id_from=333.1007.0.0"
              );
            }}
            className={style}
          />

          <SiTencentqq
            onClick={() => {
              window.open("https://qm.qq.com/q/vUIYSeYyLm");
            }}
            className={style}
          />

          <SiWechat
            onClick={() => {
              window.open("https://qm.qq.com/q/vUIYSeYyLm");
            }}
            className={style}
          />

          <SiSinaweibo
            onClick={() => {
              window.open("https://weibo.com/u/6320492937");
            }}
            className={style}
          />

          <SiXiaohongshu
            onClick={() => {
              window.open(
                "https://www.xiaohongshu.com/user/profile/67e00f59000000000e02dbb3"
              );
            }}
            className={style}
          />
          <motion.div
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 80 }}
            transition={{ duration: 0.5 }}
            className="flex-row-reverse ml-auto items-center justify-between sm:flex"
          >
            <div>
              <p className="text-sm sm:mt-0 !m-0 !text-primary-foreground/50">
                © 2024 Ghostie Inc. All rights reserved.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </footer>
  );
}

export default React.memo(Footer);
