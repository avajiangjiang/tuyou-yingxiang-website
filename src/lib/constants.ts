import type { PortfolioCategory, PortfolioType, MediaType } from "@/types";

export const CATEGORY_LABELS: Record<PortfolioCategory, string> = {
  primary: "小学",
  middle: "初中",
  high: "高中",
};

export const MEDIA_TYPE_LABELS: Record<MediaType, string> = {
  photo: "照片作品",
  video: "视频作品",
};

export const TYPE_LABELS: Record<PortfolioType, string> = {
  activity: "活动拍摄",
  promo: "宣传片",
  album: "毕业相册",
  film: "毕业微电影",
};

export const PORTFOLIO_PLACEHOLDERS: Record<PortfolioType, string> = {
  activity:
    "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=800&q=80",
  promo:
    "https://images.unsplash.com/photo-1497633769976-78943ad79827?w=800&q=80",
  album:
    "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&q=80",
  film:
    "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=800&q=80",
};

export const ADVANTAGES = [
  {
    title: "专业团队",
    description: "资深摄影师、剪辑师、设计师组成的专业团队，平均从业经验5年以上",
    icon: "👥",
  },
  {
    title: "深耕校园",
    description: "专注校园领域多年，深谙学校需求与拍摄场景，服务流程成熟高效",
    icon: "🏫",
  },
  {
    title: "设备先进",
    description: "配备4K/8K专业摄影器材、无人机航拍、稳定器等高端设备",
    icon: "📷",
  },
  {
    title: "品质保障",
    description: "严格的后期制作标准，多轮审核机制，确保每一份作品精益求精",
    icon: "✨",
  },
  {
    title: "一站式服务",
    description: "从拍摄策划到后期交付，全流程服务，省心省力",
    icon: "🎯",
  },
  {
    title: "创新设计",
    description: "持续迭代产品设计风格，紧跟时代审美，打造独一无二的视觉体验",
    icon: "🎨",
  },
];

export const SERVICES = [
  {
    title: "校园活动拍摄",
    description:
      "运动会、文艺汇演、开学典礼、研学旅行、校庆活动等各类校园活动的专业拍摄与记录。全程跟拍，捕捉每一个精彩瞬间。",
    icon: "🎬",
  },
  {
    title: "专题宣传片制作",
    description:
      "学校宣传片、招生宣传片、专题纪录片、教师风采片等高品质视频制作。4K拍摄结合航拍，全面展现校园风貌。",
    icon: "🎥",
  },
  {
    title: "毕业相册",
    description:
      "为毕业生量身定制精美毕业纪念册，从拍摄、设计到印刷一站式服务。个性化版面设计，高品质印刷工艺。",
    icon: "📖",
    highlight: true,
  },
  {
    title: "毕业微电影",
    description:
      "以电影级制作标准，为毕业班级拍摄专属微电影。脚本策划、专业拍摄、精致剪辑，记录独一无二的青春故事。",
    icon: "🎞️",
    highlight: true,
  },
];

export const ALBUM_PACKAGES = [
  {
    name: "30P",
    photos: "单本入册120张左右",
    shoots: "拍摄三套，机构提供一套博士服",
    team: ["摄影师1名", "修图师1名", "设计师1名", "专属客服1名"],
    content: "正式合影、博士服合影、创意小组照、个人风采、校园风景、教师风采",
  },
  {
    name: "50P",
    photos: "单本入册160张左右，微电影10-15分钟",
    shoots: "拍摄三套，机构提供一套博士服",
    team: [
      "摄影师2名",
      "摄像师2名",
      "现场督导1名",
      "修图师1名",
      "设计师1名",
      "专属客服1名",
    ],
    content: "正式合影、博士服合影、创意小组照、个人风采、校园风景、教师风采",
    featured: true,
  },
  {
    name: "80P",
    photos: "单本入册260张左右",
    shoots: "拍摄三套，机构提供一套博士服",
    team: [
      "摄影师2名",
      "现场督导1名",
      "修图师1名",
      "设计师1名",
      "专属客服1名",
    ],
    content: "正式合影、博士服合影、创意小组照、个人风采、校园风景、教师风采",
  },
];

export const WORKFLOW_STEPS = [
  "拍摄策划",
  "现场拍摄",
  "修图",
  "版面设计",
  "校对确认",
  "印刷交付",
];

export const COOPERATION_STEPS = [
  { step: "01", title: "需求沟通", desc: "了解学校需求，确定服务方案" },
  { step: "02", title: "方案确认", desc: "制定详细拍摄计划与报价" },
  { step: "03", title: "签约合作", desc: "签订服务合同，安排拍摄档期" },
  { step: "04", title: "现场执行", desc: "专业团队到场拍摄制作" },
  { step: "05", title: "交付验收", desc: "成品交付，确保满意" },
];
