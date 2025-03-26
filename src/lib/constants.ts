export const COMPANY_NAME = '斯洛特过滤科技';
export const COMPANY_NAME_EN = 'Hebei Slote Filtration Technology Co., Ltd.';
export const COMPANY_DESCRIPTION = '专业的工业过滤系统和解决方案提供商，十余年专注于过滤技术研发与应用';
export const COMPANY_PHONE = '+86 0311-8888-7777';
export const COMPANY_EMAIL = 'info@slote-filter.com';
export const COMPANY_ADDRESS = '河北省石家庄市高新区科技大道100号';

export const SITE_URL = 'https://www.slote-filter.com';

// 导航菜单
export const NAV_ITEMS = [
  { label: '首页', href: '/' },
  {
    label: '产品中心',
    href: '/products',
    children: [
      { label: '过滤系统', href: '/products/systems' },
      { label: '过滤元件', href: '/products/elements' },
      { label: '定制解决方案', href: '/products/solutions' },
    ],
  },
  { label: '应用领域', href: '/applications' },
  { label: '关于我们', href: '/about' },
  { label: '新闻资讯', href: '/news' },
  { label: '联系我们', href: '/contact' },
];

// 首页轮播图
export const HERO_SLIDES = [
  {
    id: 1,
    title: '专业的工业过滤系统解决方案',
    description: '为各行业提供高效、可靠的过滤设备和技术支持',
    image:
      'https://images.pexels.com/photos/2760241/pexels-photo-2760241.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    cta: { label: '了解更多', href: '/about' },
  },
  {
    id: 2,
    title: '自清洗过滤器系列',
    description: '自动化程度高，减少人工干预，提高生产效率',
    image:
      'https://images.pexels.com/photos/3862130/pexels-photo-3862130.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    cta: { label: '查看产品', href: '/products/systems' },
  },
  {
    id: 3,
    title: '定制化过滤解决方案',
    description: '根据客户需求定制最适合的过滤系统，解决特殊工况问题',
    image:
      'https://images.pexels.com/photos/2760243/pexels-photo-2760243.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    cta: { label: '联系我们', href: '/contact' },
  },
];

// 应用领域
export const APPLICATION_AREAS = [
  {
    title: '制药行业',
    icon: 'pill',
    description: '为制药生产提供高纯度过滤解决方案，确保药品生产安全',
    products: ['无菌过滤器', '膜过滤系统'],
  },
  {
    title: '食品饮料',
    icon: 'utensils',
    description: '满足食品饮料行业严格的卫生标准，提供高效过滤设备',
    products: ['饮料澄清过滤器', 'CIP清洗系统'],
  },
  {
    title: '水处理',
    icon: 'droplet',
    description: '工业与市政水处理解决方案，提高水资源利用效率',
    products: ['反渗透预处理', '自清洗过滤器'],
  },
  {
    title: '化工行业',
    icon: 'flask',
    description: '耐腐蚀、高温高压环境下的可靠过滤系统',
    products: ['化学品过滤器', '高压过滤系统'],
  },
  {
    title: '石油天然气',
    icon: 'fuel',
    description: '油气开采和加工过程中的固液分离解决方案',
    products: ['油水分离器', '天然气过滤系统'],
  },
  {
    title: '电力能源',
    icon: 'zap',
    description: '发电厂和能源设施的水处理和过滤系统',
    products: ['冷却水过滤', '锅炉给水处理'],
  },
];

// 合作伙伴
export const PARTNERS = [
  {
    name: '中石化',
    logo: 'https://images.pexels.com/photos/1109541/pexels-photo-1109541.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
  {
    name: '中石油',
    logo: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
  {
    name: '中海油',
    logo: 'https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
  {
    name: '华能集团',
    logo: 'https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
  {
    name: '国电集团',
    logo: 'https://images.pexels.com/photos/3182781/pexels-photo-3182781.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
  {
    name: '华润啤酒',
    logo: 'https://images.pexels.com/photos/3182774/pexels-photo-3182774.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
  {
    name: '伊利集团',
    logo: 'https://images.pexels.com/photos/3182759/pexels-photo-3182759.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
  {
    name: '蒙牛乳业',
    logo: 'https://images.pexels.com/photos/3182746/pexels-photo-3182746.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
];

// 产品系列 - 过滤系统
export const FILTER_SYSTEMS = [
  {
    id: 'automatic-self-cleaning',
    name: '全自动自清洗过滤器',
    image:
      'https://images.pexels.com/photos/3862132/pexels-photo-3862132.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    description: '采用先进的自清洗技术，无需停机即可完成过滤元件的清洗，大大减少维护成本和停机时间',
    features: ['无需停机清洗', '自动排污', '过滤精度可达50微米', '适用于高流量场景'],
  },
  {
    id: 'bag-filter',
    name: '袋式过滤器',
    image:
      'https://images.pexels.com/photos/2760241/pexels-photo-2760241.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    description: '高容量袋式过滤系统，适用于各种液体过滤应用，更换方便，过滤效果稳定',
    features: ['大容量设计', '更换简便', '多种材质可选', '密封性好'],
  },
  {
    id: 'cartridge-filter',
    name: '滤芯过滤器',
    image:
      'https://images.pexels.com/photos/3862130/pexels-photo-3862130.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    description: '采用高品质滤芯，过滤精度高，适用于要求严格的工业场景和精细过滤需求',
    features: ['高精度过滤', '滤芯可重复使用', '结构紧凑', '安装维护简单'],
  },
  {
    id: 'multi-stage',
    name: '多级过滤系统',
    image:
      'https://images.pexels.com/photos/3862138/pexels-photo-3862138.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    description: '集成多种过滤技术，逐级提高过滤精度，适用于复杂工况和高要求的过滤场景',
    features: ['多级过滤', '可定制过滤组合', '自动化控制', '处理效率高'],
  },
];

// 产品系列 - 过滤元件
export const FILTER_ELEMENTS = [
  {
    id: 'mesh-element',
    name: '不锈钢网滤芯',
    image:
      'https://images.pexels.com/photos/2760243/pexels-photo-2760243.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    description: '采用优质不锈钢材料制作，耐腐蚀，强度高，可重复使用',
    features: ['316L不锈钢材质', '耐高温高压', '可反复清洗', '使用寿命长'],
  },
  {
    id: 'pleated-element',
    name: '褶皱式滤芯',
    image:
      'https://images.pexels.com/photos/3862132/pexels-photo-3862132.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    description: '褶皱设计增大过滤面积，提高过滤效率和使用寿命',
    features: ['过滤面积大', '压差小', '多种材质可选', '适用范围广'],
  },
  {
    id: 'filter-bag',
    name: '过滤袋',
    image:
      'https://images.pexels.com/photos/3862130/pexels-photo-3862130.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    description: '高品质过滤袋，适用于各种袋式过滤器，过滤效果稳定',
    features: ['多种规格', '材质多样', '更换方便', '成本效益高'],
  },
  {
    id: 'sintered-element',
    name: '烧结滤芯',
    image:
      'https://images.pexels.com/photos/247763/pexels-photo-247763.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    description: '采用金属粉末烧结技术，孔径均匀，强度高，适用于严苛环境',
    features: ['孔径分布均匀', '机械强度高', '耐高温', '化学稳定性好'],
  },
];

// 案例研究
export const CASE_STUDIES = [
  {
    id: 'petrochemical',
    title: '石化行业过滤系统改造',
    image:
      'https://images.pexels.com/photos/247763/pexels-photo-247763.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    client: '某大型石化企业',
    description: '为客户提供全自动自清洗过滤系统，解决原有设备频繁堵塞问题，提高生产效率30%',
  },
  {
    id: 'beverage',
    title: '饮料生产线过滤优化',
    image:
      'https://images.pexels.com/photos/3862132/pexels-photo-3862132.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    client: '知名饮料制造商',
    description: '定制开发饮料澄清过滤系统，提高产品质量稳定性，减少生产损耗15%',
  },
  {
    id: 'power-plant',
    title: '电厂冷却水系统改造',
    image:
      'https://images.pexels.com/photos/2760241/pexels-photo-2760241.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    client: '华北某发电厂',
    description: '设计安装大型自清洗过滤器组，解决冷却水系统藻类和悬浮物问题，延长设备使用寿命',
  },
  {
    id: 'pharmaceutical',
    title: '制药企业纯水系统',
    image:
      'https://images.pexels.com/photos/3862130/pexels-photo-3862130.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    client: '国内知名制药企业',
    description: '提供符合GMP要求的高纯水过滤系统，满足药品生产严格标准，通过权威认证',
  },
];

// 新闻资讯
export const NEWS_ITEMS = [
  {
    id: 'new-product-launch',
    title: '斯洛特推出新一代智能自清洗过滤系统',
    excerpt: '新系统集成AI控制技术，可根据水质自动调整清洗频率，大幅提高能源利用效率',
    date: '2023-11-15',
    image:
      'https://images.pexels.com/photos/3862138/pexels-photo-3862138.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: '产品新闻',
  },
  {
    id: 'industry-award',
    title: '斯洛特荣获"中国水处理技术创新企业"称号',
    excerpt: '凭借在过滤技术领域的持续创新和突出贡献，公司获得行业权威机构颁发的年度大奖',
    date: '2023-10-20',
    image:
      'https://images.pexels.com/photos/3862132/pexels-photo-3862132.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: '公司新闻',
  },
  {
    id: 'exhibition',
    title: '斯洛特将参加2023中国国际环保展览会',
    excerpt: '我们将在展会上展示最新的过滤技术和产品，欢迎各界朋友莅临我们的展位交流',
    date: '2023-09-05',
    image:
      'https://images.pexels.com/photos/2760243/pexels-photo-2760243.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: '展会信息',
  },
];

// 产品分类
export const PRODUCT_CATEGORIES = [
  {
    id: 'systems',
    name: '过滤系统',
    products: [
      {
        id: 'self-cleaning',
        name: '自清洗过滤器',
        image:
          'https://images.pexels.com/photos/3862132/pexels-photo-3862132.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        description: '自动化程度高的过滤系统，无需人工干预即可完成反冲洗清洗',
        features: ['自动反冲洗', '连续运行', '节省人力', '过滤精度高'],
      },
      {
        id: 'bag-filter',
        name: '袋式过滤器',
        image:
          'https://images.pexels.com/photos/2760241/pexels-photo-2760241.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        description: '适用于各种液体过滤的经济实用型过滤设备',
        features: ['更换方便', '成本低', '适应性强', '多种材质可选'],
      },
      {
        id: 'cartridge-filter',
        name: '滤芯过滤器',
        image:
          'https://images.pexels.com/photos/3862130/pexels-photo-3862130.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        description: '高精度过滤系统，适用于要求严格的工业场景',
        features: ['过滤精度高', '流量大', '使用寿命长', '耐腐蚀'],
      },
    ],
  },
  {
    id: 'elements',
    name: '过滤元件',
    products: [
      {
        id: 'filter-bags',
        name: '过滤袋',
        image:
          'https://images.pexels.com/photos/3862130/pexels-photo-3862130.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        description: '多种材质和精度的过滤袋，适用于各种袋式过滤器',
        features: ['多种材质', '精度范围广', '耐高温', '化学兼容性好'],
      },
      {
        id: 'filter-cartridges',
        name: '滤芯',
        image:
          'https://images.pexels.com/photos/247763/pexels-photo-247763.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        description: '高品质滤芯，提供精确的过滤效果',
        features: ['褶皱设计', '表面积大', '流阻小', '寿命长'],
      },
    ],
  },
];
