import Layout from "@theme/Layout";
import { PiArrowRight, PiHeart, PiUsers, PiHandshake, PiEnvelope } from "react-icons/pi";

export default function About() {
  return (
    <Layout
      title="关于我们 - Ghostie 桌面智能体平台"
      description="了解 Ghostie 团队、使命与合作信息。Ghostie 是一个桌面智能体平台，助力高效工作与创新。"
    >
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: `{
        \"@context\": \"https://schema.org\",
        \"@type\": \"Organization\",
        \"name\": \"Ghostie\",
        \"url\": \"https://ghostie.wangenius.com\",
        \"logo\": \"https://ghostie.wangenius.com/icon.svg\",
        \"description\": \"Ghostie 是一个桌面智能体平台，助力高效工作与创新。\"
      }` }} />
      <div className="container mx-auto px-4 py-20">
        {/* 标题部分 */}
        <div className="text-center my-16">
          <h1 className="text-3xl font-bold mb-4">About Us</h1>
          <div className="text-lg text-gray-600 max-w-2xl mx-auto">
            Ghostie was founded in 2025, and is a company dedicated to the innovation of AI technology. Our mission is to help individuals and enterprises complete work more efficiently, release creativity, and achieve more possibilities through simple and easy-to-use AI tools.
          </div>
        </div>

        {/* 主要内容部分 */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {/* 加入我们 */}
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
            <div className="flex items-center gap-3 mb-4">
              <PiUsers className="text-primary text-xl" />
              <div className="text-xl font-semibold">Join Us</div>
            </div>
            <div className="text-gray-600 mb-4">
              We are looking for talented people to join our team to create the next generation of AI tools.
            </div>
            <a href="mailto:upterophyllum@gmail.com" className="text-primary font-medium inline-flex items-center gap-1 hover:underline">
              Send Resume <PiArrowRight />
            </a>
          </div>

          {/* 赞助我们 */}
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
            <div className="flex items-center gap-3 mb-4">
              <PiHeart className="text-primary text-xl" />
              <div className="text-xl font-semibold">Sponsor Us</div>
            </div>
            <div className="text-gray-600 mb-4">
              Your support is our driving force for continuous innovation, helping us create better products and services.
            </div>
            <a href="mailto:upterophyllum@gmail.com" className="text-primary font-medium inline-flex items-center gap-1 hover:underline">
              Learn More <PiArrowRight />
            </a>
          </div>

          {/* 合作伙伴 */}
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
            <div className="flex items-center gap-3 mb-4">
              <PiHandshake className="text-primary text-xl" />
              <div className="text-xl font-semibold">Partners</div>
            </div>
            <div className="text-gray-600 mb-4">
              We partner with leading companies in the industry to drive the development and application of AI technology.
            </div>
            <a href="mailto:upterophyllum@gmail.com" className="text-primary font-medium inline-flex items-center gap-1 hover:underline">
              Become a Partner <PiArrowRight />
            </a>
          </div>
        </div>
      </div>
    </Layout>
  );
}

