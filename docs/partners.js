window.AGI_PARTNERSHIPS = {
  "companies": [
    {
      "id": "openai",
      "name": "OpenAI",
      "shortName": "OpenAI",
      "fromYear": 2021,
      "fromQuarter": 1
    },
    {
      "id": "claude",
      "name": "Anthropic / Claude",
      "shortName": "Claude",
      "fromYear": 2021,
      "fromQuarter": 2
    },
    {
      "id": "deepseek",
      "name": "DeepSeek",
      "shortName": "DeepSeek",
      "fromYear": 2023,
      "fromQuarter": 3
    },
    {
      "id": "kimi",
      "name": "月之暗面 / Kimi",
      "shortName": "Kimi",
      "fromYear": 2023,
      "fromQuarter": 1
    },
    {
      "id": "gemini",
      "name": "Google / Gemini",
      "shortName": "Gemini",
      "fromYear": 2021,
      "fromQuarter": 1,
      "entryBasis": "Google与DeepMind以已有研究参与早期事件；2023 Q4前显示Google / DeepMind，其后显示Gemini，同一条好感连续累计。",
      "entrySourceUrls": [
        "https://deepmind.google/research/alphago/",
        "https://blog.google/technology/ai/google-gemini-ai/"
      ]
    },
    {
      "id": "qwen",
      "name": "阿里 / 通义千问",
      "shortName": "千问",
      "fromYear": 2023,
      "fromQuarter": 2
    },
    {
      "id": "doubao",
      "name": "字节跳动 / 豆包",
      "shortName": "豆包",
      "fromYear": 2023,
      "fromQuarter": 3
    },
    {
      "id": "wenxin",
      "name": "百度 / 文心",
      "shortName": "文心",
      "fromYear": 2021,
      "fromQuarter": 1
    },
    {
      "id": "huawei",
      "name": "华为 / 盘古",
      "shortName": "华为",
      "fromYear": 2021,
      "fromQuarter": 1
    },
    {
      "id": "hunyuan",
      "name": "腾讯 / 混元",
      "shortName": "混元",
      "fromYear": 2023,
      "fromQuarter": 3
    },
    {
      "id": "xiaomi",
      "name": "小米 / MiMo",
      "shortName": "小米",
      "fromYear": 2025,
      "fromQuarter": 2,
      "entryBasis": "首个开源推理大模型 MiMo 于2025年4月发布；不以手机和传统语音业务提前入池。",
      "entrySourceUrls": [
        "https://ir.mi.com/static-files/a8632d5c-a670-4539-a881-90219b6109b2",
        "https://github.com/XiaomiMiMo/MiMo"
      ]
    },
    {
      "id": "xai",
      "name": "xAI / Grok",
      "shortName": "xAI",
      "fromYear": 2023,
      "fromQuarter": 3
    },
    {
      "id": "nvidia",
      "name": "NVIDIA / 英伟达",
      "shortName": "英伟达",
      "fromYear": 2021,
      "fromQuarter": 1
    }
  ],
  "events": {
    "anthropic_codex_2021": {
      "tags": [
        "research",
        "compute"
      ],
      "focusBrands": [
        "openai",
        "claude",
        "deepseek"
      ],
      "routes": [
        {
          "id": "self",
          "label": "请生物顾问，先复现一个蛋白质",
          "result": "团队请来生物顾问，挑有实验结构可对照的蛋白质做复现。预测结果有对有错，报告终于能分清哪些位置可靠；你删掉PPT里的包治百病，顾问才同意把名字写上去。",
          "quarterDelta": {
            "cash": -32,
            "research": 3,
            "trust": 2,
            "team": -1
          },
          "affinities": {}
        },
        {
          "id": "public",
          "label": "公开复现笔记，请生物同行挑错",
          "result": "你资助一份开放的复现笔记，把输入、版本和失败过程都写清楚。生物同行带来反例，工程师补上脚本；办公室里第一次有人争论某一段蛋白质，而不是某一页PPT。",
          "quarterDelta": {
            "cash": -20,
            "research": 2,
            "trust": 4,
            "team": 3
          },
          "affinities": {}
        }
      ],
      "contextOffers": [
        {
          "id": "anthropic_codex_2021-openai",
          "brand": "openai",
          "label": "做专业论文工具，挑战通用模型",
          "result": "你们把GPT-3作为对照，另做带出处的生物论文检索，把花哨摘要逐句交给顾问核验。小工具少讲了几句大道理，却少认错几种蛋白质；和通用模型抢市场的计划，终于有了可测的起点。",
          "mode": "compete",
          "quarterDelta": {
            "cash": -22,
            "research": 5,
            "team": -1,
            "trust": 3,
            "risk": -1
          },
          "affinities": {
            "openai": -10
          },
          "fromYear": 2021,
          "fromQuarter": 3,
          "sourceUrls": [
            "https://arxiv.org/abs/2005.14165",
            "https://deepmind.google/blog/enabling-high-accuracy-protein-structure-prediction-at-the-proteome-scale/"
          ],
          "rationale": "2020年GPT-3论文提供少样本文本任务基线；玩家设计生物论文检索与人工核验工具，属竞争性独立实验，不把文本模型当结构预测器。"
        },
        {
          "id": "anthropic_codex_2021-nvidia",
          "brand": "nvidia",
          "label": "用英伟达显卡，先跑通一条序列",
          "result": "你们采购训练节点，用公开AlphaFold代码预测选定的蛋白质，再请顾问核对置信度与实验结构。第一张结构图出现在屏幕上时，全公司都很安静；随后有人问，这次结果能不能先别做成融资封面。",
          "mode": "cooperate",
          "quarterDelta": {
            "cash": -36,
            "research": 6,
            "team": -2,
            "trust": 1,
            "risk": 2
          },
          "affinities": {
            "nvidia": 10
          },
          "secondaryAffinities": {
            "huawei": -3
          },
          "fromYear": 2021,
          "fromQuarter": 3,
          "sourceUrls": [
            "https://deepmind.google/blog/enabling-high-accuracy-protein-structure-prediction-at-the-proteome-scale/",
            "https://nvidianews.nvidia.com/news/nvidias-new-ampere-data-center-gpu-in-full-production"
          ],
          "rationale": "2021年7月公开的AlphaFold代码支持在GPU上做结构预测；仅承诺玩家小规模复现与验证，不宣称发现新药或替代实验。",
          "produces": [
            "compute"
          ]
        },
        {
          "id": "anthropic_codex_2021-wenxin",
          "brand": "gemini",
          "label": "跟着 DeepMind 复现蛋白质结构",
          "result": "你们照着 DeepMind 的公开代码和资料，选一条有实验结果的序列复现。生物顾问逐段检查哪里可信、哪里存疑。团队第一次围着一张结构图讨论了整下午，财务只问：这次实验的发票齐了吗？",
          "mode": "cooperate",
          "quarterDelta": {
            "cash": -24,
            "research": 5,
            "team": -2,
            "trust": 3,
            "risk": -1
          },
          "affinities": {
            "gemini": 10
          },
          "fromYear": 2021,
          "fromQuarter": 3,
          "rationale": "保留原事件历史背景与数值；改为现有核心公司的玩家自建试验或虚构合作，不声称真实签约或尚未发布的产品能力。沿用 Google/DeepMind 同一关系ID；2023Q4之前不称Gemini。",
          "secondaryAffinities": {},
          "editorialSource": "research/company-balance-v21.json"
        },
        {
          "id": "anthropic_codex_2021-huawei",
          "brand": "huawei",
          "label": "用昇腾搭数据管线，先把样本理顺",
          "result": "你们用昇腾和MindSpore搭起生物数据处理试验，逐项检查序列、标签和批次。结构预测还要另做验证，数据倒先不再张冠李戴；适配占掉周末，生物顾问说至少这回每张图都有户口。",
          "mode": "cooperate",
          "quarterDelta": {
            "cash": -31,
            "research": 5,
            "team": -2,
            "trust": 2,
            "risk": 1
          },
          "affinities": {
            "huawei": 10
          },
          "secondaryAffinities": {
            "nvidia": -3
          },
          "fromYear": 2021,
          "fromQuarter": 3,
          "sourceUrls": [
            "https://www.huawei.com/en/news/2020/9/kunpeng-ascend-keynote",
            "https://deepmind.google/blog/enabling-high-accuracy-protein-structure-prediction-at-the-proteome-scale/"
          ],
          "rationale": "2020年已有昇腾与MindSpore工具链；本选项是玩家自建数据处理试验，不虚构2021年已有可直接商用的昇腾AlphaFold整套适配或已获临床成果。"
        },
        {
          "id": "anthropic_codex_2021-claude-research",
          "brand": "claude",
          "label": "与 Anthropic 交流模型的不确定性",
          "result": "你们与 Anthropic 方向的研究同行交流评估方法，先把工具说不准的地方标出来，再请生物顾问核对。团队暂时没得到万能答案，倒知道了哪些结果不能拿去给客户拍胸脯。融资材料又薄了一页，实验计划却终于能往下做。",
          "mode": "cooperate",
          "affinities": {
            "claude": 10
          },
          "secondaryAffinities": {},
          "fromYear": 2021,
          "fromQuarter": 3,
          "quarterDelta": {
            "cash": -24,
            "research": 4,
            "team": 1,
            "trust": 3,
            "risk": -1
          },
          "rationale": "补充早期非硬件研究回应；仅为玩家自建评估或虚构研究交流，不将Claude/Gemini等后来的产品提前到成立初期。",
          "editorialSource": "research/company-balance-v21.json"
        }
      ]
    },
    "codex_copilot_2021": {
      "tags": [
        "research",
        "data"
      ],
      "focusBrands": [
        "openai",
        "claude"
      ],
      "routes": [
        {
          "id": "self",
          "label": "拿真实账本出题，错一条记一条",
          "result": "团队用去掉敏感信息的账目设计测试，换例子、换顺序、换问法。模型经常答得很有信心，财务逐条画叉更有信心；研发拿到了能复核的错误清单，路演少了几张漂亮曲线。",
          "quarterDelta": {
            "cash": -32,
            "research": 3,
            "trust": 2,
            "team": -1
          },
          "affinities": {}
        },
        {
          "id": "public",
          "label": "公开画饼样例，大家一起找破绽",
          "result": "你出资共享提示模板和失败回答，让同行拿各自的账目题目来考。有人发现了重复报收入的毛病，有人修了核对工具；模型暂时没学会赚钱，大家先学会了识破它赚的钱。",
          "quarterDelta": {
            "cash": -20,
            "research": 2,
            "trust": 4,
            "team": 3
          },
          "affinities": {}
        }
      ],
      "contextOffers": [
        {
          "id": "codex_copilot_2021-openai",
          "brand": "openai",
          "label": "申请GPT-3权限，用账本戳破画饼",
          "result": "你们申请并获准使用GPT-3测试接口，把同一份脱敏账目换成不同问法。模型的盈利预测忽高忽低，财务终于拿回了路演的红笔；你们整理误判记录回馈研究，研究员也不用只保存最好看的答案。",
          "mode": "cooperate",
          "quarterDelta": {
            "cash": -17,
            "research": 4,
            "team": -1,
            "trust": 3,
            "risk": -2
          },
          "affinities": {
            "openai": 10
          },
          "fromYear": 2021,
          "fromQuarter": 3,
          "sourceUrls": [
            "https://arxiv.org/abs/2005.14165",
            "https://openai.com/index/openai-api/"
          ],
          "rationale": "2020年已提供需申请的GPT-3测试API；2021Q3不使用11月取消候补名单的政策，获批测试与财务题目均为玩家虚构情节。"
        },
        {
          "id": "nvidia-ledger-replay",
          "brand": "nvidia",
          "label": "用英伟达算力，把盈利故事重算一遍",
          "result": "团队租用GPU节点，把脱敏账本拆成训练样本和留出的核对题，反复检查预测有没有偷看答案。曲线不再一夜暴富，财务终于愿意参加演示；机器按时计费，至少这笔成本从来不会算错。",
          "mode": "cooperate",
          "quarterDelta": {
            "cash": -21,
            "research": 5,
            "team": -1,
            "trust": 3,
            "risk": -1
          },
          "affinities": {
            "nvidia": 10
          },
          "fromYear": 2021,
          "fromQuarter": 3,
          "sourceUrls": [
            "https://arxiv.org/abs/2005.14165"
          ],
          "rationale": "2021年已有GPU训练条件；玩家自建财务数据实验与复核流程，不把算力供应商写成自动审计产品。 所列来源仅作事件背景；具体实施、合作、收入与资源变化均为游戏虚构，不代表现实合作或品牌背书。"
        },
        {
          "id": "codex_copilot_2021-wenxin",
          "brand": "claude",
          "label": "与 Anthropic 团队一起查模型胡说",
          "result": "你们把编造的客户、抄反的账目和不存在的合同，整理成一套评审题，与 Anthropic 方向的研究同行交流。模型说得越自信，评审越要求它拿出依据；商业计划薄了几页，财务终于愿意翻到最后。",
          "mode": "cooperate",
          "quarterDelta": {
            "cash": -20,
            "research": 4,
            "team": -2,
            "trust": 4,
            "risk": -2
          },
          "affinities": {
            "claude": 10
          },
          "fromYear": 2021,
          "fromQuarter": 3,
          "rationale": "保留原事件历史背景与数值；改为现有核心公司的玩家自建试验或虚构合作，不声称真实签约或尚未发布的产品能力。",
          "secondaryAffinities": {},
          "editorialSource": "research/company-balance-v21.json"
        },
        {
          "id": "codex_copilot_2021-huawei",
          "brand": "huawei",
          "label": "拿盘古α作对照，做更懂账本的小模型",
          "result": "你们依盘古α公开研究搭对照实验，另做专用的小模型，检查一句收入有没有对应依据。大段商业愿景被删成几张表，竞争路线的调试也加了班；你第一次敢把模型输出直接拿给财务挑错。",
          "mode": "compete",
          "quarterDelta": {
            "cash": -26,
            "research": 5,
            "team": -2,
            "trust": 2,
            "risk": 1
          },
          "affinities": {
            "huawei": -10
          },
          "fromYear": 2021,
          "fromQuarter": 3,
          "sourceUrls": [
            "https://arxiv.org/abs/2104.12369"
          ],
          "rationale": "2021年4月盘古α中文自回归研究已公开；以其方法做独立对照，玩家专用账本任务体现原有竞争选项，非声称可获得未公开权重。"
        },
        {
          "id": "codex_copilot_2021-gemini-research",
          "brand": "gemini",
          "label": "沿 Google 的公开研究，拆开模型的账本",
          "result": "你们参考 Google 的公开语言研究，把商业计划中的名称、数字和出处拆成待核验条目。模型还能写漂亮话，编造的客户却不再轻易混进最终报告。财务说，这个产品至少先帮公司避开了一个坏计划。",
          "mode": "cooperate",
          "affinities": {
            "gemini": 10
          },
          "secondaryAffinities": {},
          "fromYear": 2021,
          "fromQuarter": 3,
          "quarterDelta": {
            "cash": -24,
            "research": 4,
            "team": -1,
            "trust": 3
          },
          "rationale": "补充早期非硬件研究回应；仅为玩家自建评估或虚构研究交流，不将Claude/Gemini等后来的产品提前到成立初期。",
          "editorialSource": "research/company-balance-v21.json"
        }
      ]
    },
    "liang_gpu_piano": {
      "tags": [
        "compute",
        "research",
        "open"
      ],
      "focusBrands": [
        "nvidia",
        "deepseek",
        "huawei"
      ],
      "routes": [
        {
          "id": "self",
          "label": "分期购卡，建设自己的机房",
          "result": "方向完全自由。采购完第一批卡，你终于理解了钢琴为何要分期付款。",
          "quarterDelta": {
            "cash": -32,
            "research": 3,
            "trust": 2,
            "team": -1
          },
          "affinities": {},
          "produces": [
            "compute"
          ]
        },
        {
          "id": "public",
          "label": "合建机房，公开算力排期",
          "result": "预算由你先垫，大家轮流跑实验。模型还没学会合奏，工程师先学会了排期。",
          "quarterDelta": {
            "cash": -20,
            "research": 2,
            "trust": 4,
            "team": 3
          },
          "affinities": {}
        }
      ],
      "contextOffers": [
        {
          "id": "liang_gpu_piano-nvidia",
          "brand": "nvidia",
          "label": "购A100，把琴房变成训练室",
          "result": "你们买下A100训练节点，把第一轮大实验排进机房。研究员终于不必等别人的空档，采购却把电力、散热和运维一起搬进预算；琴能弹了，房租开始合奏。",
          "mode": "cooperate",
          "quarterDelta": {
            "cash": -40,
            "research": 6,
            "team": -2,
            "trust": 1,
            "risk": 2
          },
          "affinities": {
            "nvidia": 10
          },
          "secondaryAffinities": {
            "huawei": -3
          },
          "fromYear": 2021,
          "fromQuarter": 2,
          "sourceUrls": [
            "https://nvidianews.nvidia.com/news/nvidias-new-ampere-data-center-gpu-in-full-production"
          ],
          "rationale": "A100于2020出货，符合2021万卡背景；金额是游戏项目支出。",
          "produces": [
            "compute"
          ]
        },
        {
          "id": "liang_gpu_piano-huawei",
          "brand": "huawei",
          "label": "选昇腾910，另练一套指法",
          "result": "团队采购昇腾910配套节点，沿CANN与MindSpore适配训练。机器不再只有一种选择，现成脚本却不能原封不动搬家；工程师开始用算子清单代替采购愿望单。",
          "mode": "cooperate",
          "quarterDelta": {
            "cash": -33,
            "research": 5,
            "team": -3,
            "trust": 2,
            "risk": 1
          },
          "affinities": {
            "huawei": 10
          },
          "secondaryAffinities": {
            "nvidia": -3
          },
          "fromYear": 2021,
          "fromQuarter": 2,
          "sourceUrls": [
            "https://www.huawei.com/en/news/2020/9/kunpeng-ascend-keynote",
            "https://www.huawei.com/en/news/2025/9/hc-xu-keynote-speech"
          ],
          "rationale": "昇腾910与CANN/MindSpore在2020已有；回应A100采购的替代工具链。",
          "produces": [
            "compute"
          ]
        },
        {
          "id": "liang_gpu_piano-openai",
          "brand": "openai",
          "label": "按GPT-3论文先测小规模收益",
          "result": "你们暂缓追着万卡故事买机器，按GPT-3的规模研究先做小模型预算实验。显卡没堆成墙，单位投入的收益却有了数字；投资人少看一张机房照片，多看一页曲线。",
          "mode": "compete",
          "quarterDelta": {
            "cash": -14,
            "research": 4,
            "team": 1,
            "trust": 3,
            "risk": -2
          },
          "affinities": {
            "openai": -10
          },
          "fromYear": 2021,
          "fromQuarter": 2,
          "sourceUrls": [
            "https://arxiv.org/abs/2005.14165"
          ],
          "rationale": "竞争性独立路线，以公开规模研究验证扩容收益，不虚构免费算力。"
        },
        {
          "id": "liang_gpu_piano-wenxin",
          "brand": "gemini",
          "label": "沿 Google 的研究先练一个小模型",
          "result": "你们参考 Google 的公开研究，在现有机器上做一个范围有限的文本任务，先把训练和评测跑完整。第一份结果比新机柜更早交付；采购把钢琴房的预算表收好，注明：等有人会弹再扩建。",
          "mode": "cooperate",
          "quarterDelta": {
            "cash": -12,
            "research": 3,
            "team": -1,
            "trust": 2,
            "risk": -1
          },
          "affinities": {
            "gemini": 10
          },
          "fromYear": 2021,
          "fromQuarter": 2,
          "rationale": "保留原事件历史背景；改为现有核心公司的玩家自建试验或虚构合作，不声称真实签约或尚未发布的产品能力。沿用 Google/DeepMind 同一关系ID；2023Q4之前不称Gemini。 质感修订：这是玩家的内部试验与调用开销，没有成交或外部付款，资金记为支出。",
          "secondaryAffinities": {},
          "editorialSource": "research/company-balance-v21.json"
        },
        {
          "id": "liang_gpu_piano-claude-research",
          "brand": "claude",
          "label": "与 Anthropic 先做小模型评估",
          "result": "你们与 Anthropic 方向的研究同行交流小模型的测试方案，先摸清现有机器能做什么。规模没有立刻扩大，几项老问题却复现得更清楚了。采购问还买不买卡，研究员第一次能拿着实验记录回答。",
          "mode": "cooperate",
          "affinities": {
            "claude": 10
          },
          "secondaryAffinities": {},
          "fromYear": 2021,
          "fromQuarter": 2,
          "quarterDelta": {
            "cash": -23,
            "research": 4,
            "team": 1,
            "trust": 2,
            "risk": -1
          },
          "rationale": "补充早期非硬件研究回应；仅为玩家自建评估或虚构研究交流，不将Claude/Gemini等后来的产品提前到成立初期。",
          "editorialSource": "research/company-balance-v21.json"
        }
      ]
    },
    "chatgpt_launch_2022": {
      "tags": [
        "product",
        "compute"
      ],
      "focusBrands": [
        "openai",
        "gemini",
        "qwen"
      ],
      "routes": [
        {
          "id": "self",
          "label": "自建聊天服务并限量收费",
          "result": "你把聊天服务做成限量付费试点，收到第一批订阅款。风扇照样响，客服也开始响；至少这次每一次响声都有可查的订单。",
          "quarterDelta": {
            "cash": 20,
            "research": 3,
            "trust": 2,
            "team": -2
          },
          "affinities": {},
          "produces": [
            "customers"
          ]
        },
        {
          "id": "public",
          "label": "与高校共建共享训练池",
          "result": "晚上跑训练，白天给别人跑论文。大家共同富裕的第一步，是共同研究谁把磁盘写满了。",
          "quarterDelta": {
            "cash": -28,
            "research": 3,
            "trust": 3,
            "team": -3
          },
          "affinities": {}
        }
      ],
      "contextOffers": [
        {
          "id": "chatgpt_launch_2022-openai",
          "brand": "openai",
          "label": "用InstructGPT接住首批文本工单",
          "result": "你们接入当时已有的InstructGPT接口，把排队用户限定在文本改写与归纳。试点收到第一批费用，聊天记忆仍要自己实现；投资人问起ChatGPT，你们先演示真实工单。",
          "mode": "cooperate",
          "quarterDelta": {
            "cash": 22,
            "research": 3,
            "team": -2,
            "trust": 2,
            "risk": 1
          },
          "affinities": {
            "openai": 10
          },
          "fromYear": 2022,
          "fromQuarter": 4,
          "sourceUrls": [
            "https://openai.com/index/instruction-following/",
            "https://openai.com/index/chatgpt/"
          ],
          "rationale": "2022已存在InstructGPT API；明确不是尚未发布的ChatGPT API。",
          "produces": [
            "customers"
          ]
        },
        {
          "id": "nvidia-chat-capacity",
          "brand": "nvidia",
          "label": "向英伟达采购节点，先测聊天高峰",
          "result": "聊天热度涌进公司，你们先搭GPU试验节点，把排队、超时和单次推理成本逐项记账。演示多开几个窗口就能听见风扇认真工作；机房留住了原型，也留住了几位没赶上晚饭的工程师。",
          "mode": "cooperate",
          "quarterDelta": {
            "cash": -38,
            "research": 5,
            "team": -3,
            "trust": 3,
            "risk": 2
          },
          "affinities": {
            "nvidia": 10
          },
          "fromYear": 2022,
          "fromQuarter": 4,
          "sourceUrls": [
            "https://openai.com/index/chatgpt/"
          ],
          "rationale": "以2022年已存在的GPU基础设施做玩家自建聊天原型容量试验，不声称英伟达当时提供等同聊天新品的现成模型。 所列来源仅作事件背景；具体实施、合作、收入与资源变化均为游戏虚构，不代表现实合作或品牌背书。",
          "produces": [
            "compute"
          ]
        },
        {
          "id": "chatgpt_launch_2022-claude",
          "brand": "claude",
          "label": "沿Anthropic研究先补拒答评审",
          "result": "你们按Anthropic的人类反馈研究给聊天原型补上人工评审，并向研究团队提交匿名反例。上线范围缩小，投诉更容易复盘；融资演示少说万能，评审组多开两场会。",
          "mode": "cooperate",
          "quarterDelta": {
            "cash": -20,
            "research": 4,
            "team": -2,
            "trust": 4,
            "risk": -3
          },
          "affinities": {
            "claude": 10
          },
          "fromYear": 2022,
          "fromQuarter": 4,
          "sourceUrls": [
            "https://www.anthropic.com/research/training-a-helpful-and-harmless-assistant-with-reinforcement-learning-from-human-feedback"
          ],
          "rationale": "采用2022年4月公开RLHF研究合作设想，不虚构2022 Claude产品。"
        },
        {
          "id": "chatgpt_launch_2022-wenxin",
          "brand": "gemini",
          "label": "用 Google 的研究做带出处的问答",
          "result": "你们参考 Google 的公开语言研究，把产品手册接进自建问答工具。回答必须附上对应段落，找不到就转人工。万能聊天的口号没用上，老客户却愿意为少翻几本说明书续费。",
          "mode": "cooperate",
          "quarterDelta": {
            "cash": 18,
            "research": 3,
            "team": -1,
            "trust": 3,
            "risk": -2
          },
          "affinities": {
            "gemini": 10
          },
          "fromYear": 2022,
          "fromQuarter": 4,
          "rationale": "保留原事件历史背景与数值；改为现有核心公司的玩家自建试验或虚构合作，不声称真实签约或尚未发布的产品能力。沿用 Google/DeepMind 同一关系ID；2023Q4之前不称Gemini。",
          "secondaryAffinities": {},
          "editorialSource": "research/company-balance-v21.json"
        }
      ]
    },
    "chatgpt_prompt_2022": {
      "tags": [
        "product",
        "research"
      ],
      "focusBrands": [
        "openai",
        "claude",
        "gemini"
      ],
      "routes": [
        {
          "id": "self",
          "label": "打磨垂直问答并按席收费",
          "result": "你们收起万能专家的宣传，先把一个行业的资料和验收做扎实。第一笔席位费到账，客户问得越来越细，提示词终于退回了工程的一小部分。",
          "quarterDelta": {
            "cash": 16,
            "research": 3,
            "trust": 2,
            "team": -2
          },
          "affinities": {},
          "produces": [
            "customers"
          ]
        },
        {
          "id": "public",
          "label": "公开提示模板和失败案例",
          "result": "大家轮流用机器，顺便交换失败案例。最常见的失败是模型非常专业地解释了一个不存在的文件。",
          "quarterDelta": {
            "cash": -28,
            "research": 3,
            "trust": 3,
            "team": -3
          },
          "affinities": {}
        }
      ],
      "contextOffers": [
        {
          "id": "chatgpt_prompt_2022-openai",
          "brand": "openai",
          "label": "给InstructGPT提示词加验收集",
          "result": "团队给每条专家提示配上失败案例与回归题，再用InstructGPT处理固定业务。服务开始按席收费，修改一句提示也得重跑验收；资深专家的头衔终于有了质检部门。",
          "mode": "cooperate",
          "quarterDelta": {
            "cash": 24,
            "research": 4,
            "team": -2,
            "trust": 3,
            "risk": -1
          },
          "affinities": {
            "openai": 10
          },
          "fromYear": 2022,
          "fromQuarter": 4,
          "sourceUrls": [
            "https://openai.com/index/instruction-following/"
          ],
          "rationale": "已有指令跟随API用于稳定化提示服务，业务层自行验收。",
          "produces": [
            "customers"
          ]
        },
        {
          "id": "chatgpt_prompt_2022-claude",
          "brand": "claude",
          "label": "向Anthropic反馈专家提示越界样例",
          "result": "你们按Anthropic公开的红队研究，专测资深专家人设遇到越界要求时会怎样，并提交匿名反例。万能前缀不再是上线凭证，评审工作也没省掉；销售终于发现，少答一道比答错一道便宜。",
          "mode": "cooperate",
          "quarterDelta": {
            "cash": -22,
            "research": 5,
            "team": -2,
            "trust": 4,
            "risk": -2
          },
          "affinities": {
            "claude": 10
          },
          "fromYear": 2022,
          "fromQuarter": 4,
          "sourceUrls": [
            "https://www.anthropic.com/news/red-teaming-language-models-to-reduce-harms-methods-scaling-behaviors-and-lessons-learned"
          ],
          "rationale": "Anthropic红队研究与数据集于2022-08-22公开，早于ChatGPT上线；研究合作不冒充Claude产品。"
        },
        {
          "id": "huawei-domain-glossary",
          "brand": "huawei",
          "label": "借华为工具链，把专家头衔换成术语表",
          "result": "团队在已有工具链上整理内部术语与例题，把资深专家四个字换成能查证的定义。模型不再把部门简称当成远方城市，维护样本却成了每周必做的功课；提示词短了，标注表长了。",
          "mode": "cooperate",
          "quarterDelta": {
            "cash": -35,
            "research": 5,
            "team": -3,
            "trust": 2,
            "risk": 2
          },
          "affinities": {
            "huawei": 10
          },
          "fromYear": 2022,
          "fromQuarter": 4,
          "sourceUrls": [
            "https://openai.com/index/instruction-following/"
          ],
          "rationale": "采用事件前已有的华为训练工具链，领域术语、样本与验证由玩家建设；不引入2022年之后的聊天产品或承诺自动获得专家能力。 所列来源仅作事件背景；具体实施、合作、收入与资源变化均为游戏虚构，不代表现实合作或品牌背书。"
        },
        {
          "id": "chatgpt_prompt_2022-wenxin",
          "brand": "gemini",
          "label": "参考 Google 方法，拆解专家的推理",
          "result": "你们把复杂问题拆成几步，参考 Google 公开的推理研究逐项核验。换了十种专家头衔，答错的算术题仍然答错；客户看到检查记录，比看到十位虚构专家更放心。",
          "mode": "cooperate",
          "quarterDelta": {
            "cash": 17,
            "research": 3,
            "team": -1,
            "trust": 4,
            "risk": -2
          },
          "affinities": {
            "gemini": 10
          },
          "fromYear": 2022,
          "fromQuarter": 4,
          "rationale": "保留原事件历史背景与数值；改为现有核心公司的玩家自建试验或虚构合作，不声称真实签约或尚未发布的产品能力。沿用 Google/DeepMind 同一关系ID；2023Q4之前不称Gemini。",
          "secondaryAffinities": {},
          "editorialSource": "research/company-balance-v21.json"
        }
      ]
    },
    "gpt4_board_2023": {
      "tags": [
        "governance",
        "product"
      ],
      "focusBrands": [
        "openai",
        "claude",
        "qwen"
      ],
      "routes": [
        {
          "id": "self",
          "label": "自建备份，分散核心依赖",
          "result": "预算明显缩水，但供应商换CEO也不会带走你的服务器。灾备演练首次出现了“董事会连续剧”这一项。",
          "quarterDelta": {
            "cash": -44,
            "research": 3,
            "trust": 5,
            "team": -1
          },
          "affinities": {}
        },
        {
          "id": "public",
          "label": "联合维护开放模型适配层",
          "result": "你们一起搭起开放技术栈。模型不见得处处第一，但维护者退群之前，至少会先把代码留下。",
          "quarterDelta": {
            "cash": -20,
            "research": 2,
            "trust": 4,
            "team": -2
          },
          "affinities": {}
        }
      ],
      "contextOffers": [
        {
          "id": "gpt4_board_2023-openai",
          "brand": "openai",
          "label": "继续用GPT-4，补齐撤换演练",
          "result": "你们保留GPT-4能力，把输入输出、人工接管与供应中断演练补进上线标准。现有客户继续付费，但团队得腾人维护退出路径；董事会新闻终于变成了工程工单。",
          "mode": "cooperate",
          "quarterDelta": {
            "cash": 16,
            "research": 3,
            "team": -2,
            "trust": 3,
            "risk": -2
          },
          "affinities": {
            "openai": 10
          },
          "secondaryAffinities": {
            "claude": -3
          },
          "fromYear": 2023,
          "fromQuarter": 4,
          "sourceUrls": [
            "https://openai.com/index/gpt-4-research/",
            "https://openai.com/index/sam-altman-returns-as-ceo-openai-has-a-new-initial-board/"
          ],
          "rationale": "OpenAI真实治理变动触发对GPT-4供应依赖的治理，不暗示实际服务中断。"
        },
        {
          "id": "gpt4_board_2023-claude",
          "brand": "claude",
          "label": "迁一条核心流程到Claude 2",
          "result": "你们把一条关键文档流程迁到Claude 2，重新测试长文、拒答和格式。供应集中度降下来，提示词却不能直接搬家；新模型接住了工单，也接走了本季一部分利润。",
          "mode": "cooperate",
          "quarterDelta": {
            "cash": -24,
            "research": 4,
            "team": -2,
            "trust": 3,
            "risk": -2
          },
          "affinities": {
            "claude": 10
          },
          "secondaryAffinities": {
            "openai": -3
          },
          "fromYear": 2023,
          "fromQuarter": 4,
          "sourceUrls": [
            "https://www.anthropic.com/news/claude-2"
          ],
          "rationale": "Claude 2于2023年7月发布；以第二供应商处理具体文档流程。"
        },
        {
          "id": "gpt4_board_2023-qwen",
          "brand": "qwen",
          "label": "将应急问答落到Qwen本地",
          "result": "团队用Qwen开放模型做有限功能的本地应急问答，把关键资料和测试留在内部。顶级能力暂时让位于可运行，维护负担明显增加；第一次断网演练终于不靠祈祷。",
          "mode": "cooperate",
          "quarterDelta": {
            "cash": -30,
            "research": 4,
            "team": -3,
            "trust": 4,
            "risk": -3
          },
          "affinities": {
            "qwen": 10
          },
          "fromYear": 2023,
          "fromQuarter": 4,
          "sourceUrls": [
            "https://github.com/QwenLM/Qwen"
          ],
          "rationale": "2023年Qwen已发布开放权重；本地应急服务仍需遵循模型许可。"
        },
        {
          "id": "huawei-portable-contract",
          "brand": "huawei",
          "label": "做可迁移的问答服务，争华为路线客户",
          "result": "你们向正在比较华为行业方案的客户递出一份小合同：先交文档问答，再现场演练更换后端。供应焦虑带来了试点，迁移脚本和升级说明也必须自己写；销售终于知道，可接管不是封面上的形容词。",
          "mode": "compete",
          "quarterDelta": {
            "cash": 26,
            "research": 4,
            "team": -3,
            "trust": 2,
            "risk": 2
          },
          "affinities": {
            "huawei": -10
          },
          "fromYear": 2023,
          "fromQuarter": 4,
          "sourceUrls": [
            "https://openai.com/index/sam-altman-returns-as-ceo-openai-has-a-new-initial-board/"
          ],
          "rationale": "供应连续性风波中的虚构竞争选择；玩家出售可迁移服务，与华为行业路线争取客户，不编造特定华为产品故障或真实客户流失。 所列来源仅作事件背景；具体实施、合作、收入与资源变化均为游戏虚构，不代表现实合作或品牌背书。"
        }
      ]
    },
    "sam_board_return_2023": {
      "tags": [
        "governance",
        "product"
      ],
      "focusBrands": [
        "openai",
        "claude"
      ],
      "routes": [
        {
          "id": "self",
          "label": "补齐公司章程与灾备流程",
          "result": "你花钱补基础设施和治理流程。工程师终于确认重启服务不需要先重启董事会。",
          "quarterDelta": {
            "cash": -44,
            "research": 3,
            "trust": 5,
            "team": -1
          },
          "affinities": {}
        },
        {
          "id": "public",
          "label": "共建多方维护的开放技术栈",
          "result": "维护权不再集中在一个人手里。大家开会争论了很久，但没有人能独自拔掉服务器。",
          "quarterDelta": {
            "cash": -20,
            "research": 2,
            "trust": 4,
            "team": -2
          },
          "affinities": {}
        }
      ],
      "contextOffers": [
        {
          "id": "sam_board_return_2023-openai",
          "brand": "openai",
          "label": "把OpenAI风波写进供应评审",
          "result": "你们根据公开的撤职与回归公告，给GPT-4供应评审增加治理变动、通知与接管条款。模型性能没有白涨，客户却更愿意续约；法务第一次提交了工程师看得懂的灾备清单。",
          "mode": "cooperate",
          "quarterDelta": {
            "cash": -13,
            "research": 2,
            "team": -1,
            "trust": 4,
            "risk": -3
          },
          "affinities": {
            "openai": 10
          },
          "fromYear": 2023,
          "fromQuarter": 4,
          "sourceUrls": [
            "https://openai.com/index/sam-altman-returns-as-ceo-openai-has-a-new-initial-board/",
            "https://openai.com/index/gpt-4-research/"
          ],
          "rationale": "公开董事会变动用于供应治理，不猜测罢免原因或编造供应故障。"
        },
        {
          "id": "sam_board_return_2023-claude",
          "brand": "claude",
          "label": "请Claude对读章程与内部规程",
          "result": "你们用Claude的长上下文对读公司章程和内部审批规程，再让法务核验冲突。重复授权暴露出来，修改文件占满一周；模型帮忙找段落，最终签字仍由董事会负责。",
          "mode": "cooperate",
          "quarterDelta": {
            "cash": -17,
            "research": 3,
            "team": -2,
            "trust": 4,
            "risk": -2
          },
          "affinities": {
            "claude": 10
          },
          "fromYear": 2023,
          "fromQuarter": 4,
          "sourceUrls": [
            "https://www.anthropic.com/news/100k-context-windows"
          ],
          "rationale": "2023年5月Claude 100K可用于长文对读；不把模型输出当法律裁定。"
        },
        {
          "id": "sam_board_return_2023-kimi",
          "brand": "kimi",
          "label": "用Kimi梳理全年决策记录",
          "result": "全年决议、会议纪要和授权邮件整理成文本后交给Kimi，团队追查每项决定的来龙去脉。记录缺页比长文本更棘手；买饭名单找到了，谁批准扩机房却还得补证据。",
          "mode": "cooperate",
          "quarterDelta": {
            "cash": -16,
            "research": 3,
            "team": -2,
            "trust": 4,
            "risk": -2
          },
          "affinities": {
            "kimi": 10
          },
          "fromYear": 2023,
          "fromQuarter": 4,
          "sourceUrls": [
            "https://www.36kr.com/p/2467109393880968"
          ],
          "rationale": "2023年10月Kimi长文本适合治理决策记录追踪，不承诺准确完整记忆。"
        },
        {
          "id": "sam_board_return_2023-huawei",
          "brand": "huawei",
          "label": "把审批与模型服务留在昇腾机房",
          "result": "你们在昇腾与MindSpore路线保留关键模型任务和审批数据，定下内部接管责任人。外部高管变动不再牵动所有工作，内部运维却必须按时值班；章程终于写到了机房门口。",
          "mode": "cooperate",
          "quarterDelta": {
            "cash": -34,
            "research": 4,
            "team": -3,
            "trust": 3,
            "risk": -2
          },
          "affinities": {
            "huawei": 10
          },
          "secondaryAffinities": {
            "nvidia": -3
          },
          "fromYear": 2023,
          "fromQuarter": 4,
          "sourceUrls": [
            "https://www.huawei.com/en/news/2020/9/kunpeng-ascend-keynote",
            "https://arxiv.org/abs/2104.12369"
          ],
          "rationale": "已存在的本地算力与训练栈支持内部掌握运行职责，非虚构治理产品。"
        }
      ]
    },
    "kimi_long_context": {
      "tags": [
        "research",
        "data"
      ],
      "focusBrands": [
        "kimi",
        "claude",
        "qwen"
      ],
      "routes": [
        {
          "id": "self",
          "label": "自研长文本检索与压缩",
          "result": "工程师连夜扩窗口。第二天上传更多纪要，依然找不到买饭负责人。",
          "quarterDelta": {
            "cash": -44,
            "research": 3,
            "trust": 5,
            "team": -1
          },
          "affinities": {}
        },
        {
          "id": "public",
          "label": "共建长文本证据定位测试",
          "result": "伙伴共同标注长会议记录里的证据位置，再交换检索测试。模型找到了买饭那一段：这事下次开会再说。窗口可以共享，谁去买饭仍未达成共识。",
          "quarterDelta": {
            "cash": -20,
            "research": 2,
            "trust": 4,
            "team": -2
          },
          "affinities": {}
        }
      ],
      "contextOffers": [
        {
          "id": "kimi_long_context-kimi",
          "brand": "kimi",
          "label": "申请Kimi内测，定位买饭原文",
          "result": "你们申请Kimi内测，把约二十万汉字的纪要用作长文测试，要求标出买饭安排的原文。资格与核验都得等待，矛盾记录仍需人工确认；上下文装得下全公司，未必装得下所有改口。",
          "mode": "cooperate",
          "quarterDelta": {
            "cash": -19,
            "research": 4,
            "team": -1,
            "trust": 3,
            "risk": 1
          },
          "affinities": {
            "kimi": 10
          },
          "fromYear": 2023,
          "fromQuarter": 4,
          "sourceUrls": [
            "https://www.36kr.com/p/2467109393880968"
          ],
          "rationale": "2023-10-10原始访谈记载前一天推出Kimi、支持20万汉字、可加入内测计划；2024升级是200万字。"
        },
        {
          "id": "kimi_long_context-claude",
          "brand": "claude",
          "label": "拿Claude的100K窗口查跨月冲突",
          "result": "团队用Claude的100K token窗口对读多月排班，专挑前后矛盾的买饭记录。它给出待核对段落，人员仍得当面确认；采购这回先弄懂汉字和token，才批准对照预算。",
          "mode": "cooperate",
          "quarterDelta": {
            "cash": -22,
            "research": 4,
            "team": -2,
            "trust": 4,
            "risk": -1
          },
          "affinities": {
            "claude": 10
          },
          "fromYear": 2023,
          "fromQuarter": 4,
          "sourceUrls": [
            "https://www.anthropic.com/news/100k-context-windows"
          ],
          "rationale": "100K token在2023年5月已可用；与Kimi汉字单位明确区分。"
        },
        {
          "id": "qwen-shift-index",
          "brand": "qwen",
          "label": "用千问整理换班索引，先找对那一页",
          "result": "你们把纪要按日期和班次建索引，让千问只读与问题有关的片段，再回指原始记录。窗口不必一次吞下整本档案，临时换班却得有人及时补录；今晚谁买饭，总算不用从上个月的会议开始问。",
          "mode": "cooperate",
          "quarterDelta": {
            "cash": -26,
            "research": 4,
            "team": -2,
            "trust": 3,
            "risk": -1
          },
          "affinities": {
            "qwen": 10
          },
          "fromYear": 2023,
          "fromQuarter": 4,
          "sourceUrls": [
            "https://www.36kr.com/p/2467109393880968"
          ],
          "rationale": "2023年第四季度已有千问文本模型路线；日期索引、检索与原文核对均为玩家实现，不虚构与长窗口相同的能力或真实合作。 所列来源仅作事件背景；具体实施、合作、收入与资源变化均为游戏虚构，不代表现实合作或品牌背书。"
        },
        {
          "id": "kimi_long_context-openai",
          "brand": "openai",
          "label": "用GPT-4加检索挑战全量长读",
          "result": "你们自己检索买饭相关的几段纪要，再交给GPT-4回答并核验出处。单次输入短了，搜索漏段的责任落在自己身上；独立对照报告指出，读得更多和找得更准是两道题。",
          "mode": "compete",
          "quarterDelta": {
            "cash": -14,
            "research": 5,
            "team": -2,
            "trust": 3,
            "risk": 1
          },
          "affinities": {
            "openai": -10
          },
          "fromYear": 2023,
          "fromQuarter": 4,
          "sourceUrls": [
            "https://openai.com/index/gpt-4-research/"
          ],
          "rationale": "2023年GPT-4配玩家自建检索作为长上下文的竞争路线。"
        }
      ]
    },
    "sujianlin_iron_wok": {
      "tags": [
        "product",
        "data"
      ],
      "focusBrands": [
        "hunyuan",
        "qwen",
        "wenxin"
      ],
      "routes": [
        {
          "id": "self",
          "label": "自研厨房采购与配菜代理",
          "result": "你花钱把厨房变成试验场。代理学会核对库存，项目经理终于确定这次炼丹产生的是晚饭。",
          "quarterDelta": {
            "cash": -36,
            "research": 3,
            "trust": 1,
            "team": 1
          },
          "affinities": {}
        },
        {
          "id": "public",
          "label": "共建厨房库存实验工具",
          "result": "行业伙伴提供试验场，团队共同写代码。代理开始减少采购浪费，志愿者负责消灭实验结果。",
          "quarterDelta": {
            "cash": -24,
            "research": 2,
            "trust": 3,
            "team": -2
          },
          "affinities": {}
        }
      ],
      "contextOffers": [
        {
          "id": "sujianlin_iron_wok-kimi",
          "brand": "kimi",
          "label": "用Kimi内测整理铁锅长帖分歧",
          "result": "获准内测后，你们把铁锅文章与讨论摘录交给Kimi，分开作者经历、读者意见和待验证猜想。食堂多了一张待办表，研究组也补了一课：读完长文，不代表所有说法都成了定理。",
          "mode": "cooperate",
          "quarterDelta": {
            "cash": -10,
            "research": 3,
            "team": 2,
            "trust": 3,
            "risk": -2
          },
          "affinities": {
            "kimi": 10
          },
          "fromYear": 2023,
          "fromQuarter": 4,
          "sourceUrls": [
            "https://www.36kr.com/p/2467109393880968",
            "https://spaces.ac.cn/archives/9855"
          ],
          "rationale": "长文本整理生活博客，明确不把作者健康或物理猜想当既定科学。"
        },
        {
          "id": "sujianlin_iron_wok-qwen",
          "brand": "qwen",
          "label": "用Qwen-VL认锅铲，先别认定理",
          "result": "团队用Qwen-VL给自摄锅具照片做识别实验，把锅、铲和说明书文字整理成清单。图片问答开始有实物可核对，边缘案例还得重拍；演示最成功的部分，是大家终于愿意吃饭。",
          "mode": "cooperate",
          "quarterDelta": {
            "cash": -17,
            "research": 4,
            "team": 2,
            "trust": 2,
            "risk": 1
          },
          "affinities": {
            "qwen": 10
          },
          "fromYear": 2023,
          "fromQuarter": 4,
          "sourceUrls": [
            "https://arxiv.org/abs/2308.12966",
            "https://spaces.ac.cn/archives/9855"
          ],
          "rationale": "2023年8月Qwen-VL支持图像理解和OCR；只做物体识别不做材质安全判断。"
        },
        {
          "id": "sujianlin_iron_wok-openai",
          "brand": "openai",
          "label": "拿GPT-4看锅图，核对采购单",
          "result": "你们让支持图像输入的ChatGPT比较自摄锅具和采购单，人工复查尺寸与配件。一次轻量视觉试验换来更整齐的食堂清单；模型仍可能看错，采购没有因此获得自动下单权。",
          "mode": "cooperate",
          "quarterDelta": {
            "cash": -13,
            "research": 3,
            "team": 2,
            "trust": 2,
            "risk": 1
          },
          "affinities": {
            "openai": 10
          },
          "fromYear": 2023,
          "fromQuarter": 4,
          "sourceUrls": [
            "https://openai.com/index/chatgpt-can-now-see-hear-and-speak/",
            "https://spaces.ac.cn/archives/9855"
          ],
          "rationale": "ChatGPT图像输入于2023年9月推出；以日常视觉核对替代编造锅具科学。"
        },
        {
          "id": "deepseek-wok-notebook",
          "brand": "deepseek",
          "label": "请DeepSeek帮写实验表，给铁锅建档",
          "result": "工程师让DeepSeek辅助写一个记录用油量、温度和粘连次数的小表单，每次改代码都拿旧记录重跑。锅铲还没有服从理论，数据已经不再散在群聊里；同事第一次催程序员上线，是因为锅已经烧热了。",
          "mode": "cooperate",
          "quarterDelta": {
            "cash": -14,
            "research": 3,
            "team": 2,
            "trust": 2,
            "risk": 0
          },
          "affinities": {
            "deepseek": 10
          },
          "fromYear": 2023,
          "fromQuarter": 4,
          "sourceUrls": [
            "https://spaces.ac.cn/archives/9855"
          ],
          "rationale": "使用2023年第四季度已有的DeepSeek代码研究路线辅助玩家自建记录工具；测量、人工审核与实验结论由玩家负责，不声称模型证明锅具理论。 所列来源仅作事件背景；具体实施、合作、收入与资源变化均为游戏虚构，不代表现实合作或品牌背书。"
        }
      ]
    },
    "pangu_does_work": {
      "tags": [
        "product",
        "data"
      ],
      "focusBrands": [
        "huawei",
        "wenxin"
      ],
      "routes": [
        {
          "id": "self",
          "label": "自研巡检模型，驻场收集数据",
          "result": "团队终于走出机房。回来后确认了两件事：行业数据很重要，安全帽很重。",
          "quarterDelta": {
            "cash": -44,
            "research": 3,
            "trust": 5,
            "team": -1
          },
          "affinities": {}
        },
        {
          "id": "public",
          "label": "公开脱敏巡检样例与标注规范",
          "result": "你们与一线专家整理可公开的巡检样例，约定相同的标注口径。最先被消灭的错误是把阀门认成把手；删去现场敏感信息却又花了一轮工时。",
          "quarterDelta": {
            "cash": -20,
            "research": 2,
            "trust": 4,
            "team": -2
          },
          "affinities": {}
        }
      ],
      "contextOffers": [
        {
          "id": "pangu_does_work-huawei",
          "brand": "huawei",
          "label": "围绕盘古3.0接一条巡检试点",
          "result": "你们围绕盘古3.0的行业路线承接巡检试点，先把样本、故障类别和人工复核写进验收。首笔项目款到账，驻场工作也跟着到账；这回颂诗可以押韵，工单必须闭环。",
          "mode": "cooperate",
          "quarterDelta": {
            "cash": 32,
            "research": 4,
            "team": -3,
            "trust": 3,
            "risk": 1
          },
          "affinities": {
            "huawei": 10
          },
          "fromYear": 2023,
          "fromQuarter": 3,
          "sourceUrls": [
            "https://www.huaweicloud.com/cloudplus/seventeenthphase/detail05.html"
          ],
          "rationale": "2023年7月盘古3.0展示铁路、矿山巡检；玩家试点为虚构。"
        },
        {
          "id": "openai-repair-evidence",
          "brand": "openai",
          "label": "用OpenAI整理维修证据，再请师傅派单",
          "result": "你们把去除敏感信息的报修描述交给文本接口，提取设备、症状和缺失信息，再让维修师傅确认工单。试点客户付了实施费，旧记录的脏数据也终于有人认领；一句已修好从此必须跟着一张验收单。",
          "mode": "cooperate",
          "quarterDelta": {
            "cash": 20,
            "research": 4,
            "team": -2,
            "trust": 3,
            "risk": -1
          },
          "affinities": {
            "openai": 10
          },
          "fromYear": 2023,
          "fromQuarter": 3,
          "sourceUrls": [
            "https://www.huaweicloud.com/cloudplus/seventeenthphase/detail05.html"
          ],
          "rationale": "2023年已有OpenAI文本接口；玩家搭建文本整理与人工派单流程，不依赖后续视觉或自主执行能力，也不将语言输出等同现场维修。 所列来源仅作事件背景；具体实施、合作、收入与资源变化均为游戏虚构，不代表现实合作或品牌背书。"
        },
        {
          "id": "pangu_does_work-claude",
          "brand": "claude",
          "label": "用Claude长窗逐条对读巡检记录",
          "result": "你们用Claude的100K上下文比较巡检记录与操作手册，先找重复故障和漏填项目。试点报告更扎实，敏感资料整理和人工复查也占了时间；最大的幻觉风险来自那句一切正常。",
          "mode": "cooperate",
          "quarterDelta": {
            "cash": 17,
            "research": 3,
            "team": -2,
            "trust": 4,
            "risk": -2
          },
          "affinities": {
            "claude": 10
          },
          "fromYear": 2023,
          "fromQuarter": 3,
          "sourceUrls": [
            "https://www.anthropic.com/news/100k-context-windows"
          ],
          "rationale": "2023年5月100K窗可对读长文；不依赖7月11日才发布的Claude2。"
        },
        {
          "id": "pangu_does_work-nvidia",
          "brand": "nvidia",
          "label": "借A100训专用视觉巡检小队",
          "result": "你们用A100节点训练窄场景视觉检测，拿现场标注数据争取巡检订单。路线专一，缺陷样本却远比宣传图片难找；销售第一次承认，模型识别螺丝和识别商机不是一回事。",
          "mode": "compete",
          "quarterDelta": {
            "cash": -28,
            "research": 5,
            "team": -3,
            "trust": 2,
            "risk": 2
          },
          "affinities": {
            "nvidia": -10
          },
          "secondaryAffinities": {
            "huawei": 3
          },
          "fromYear": 2023,
          "fromQuarter": 3,
          "sourceUrls": [
            "https://nvidianews.nvidia.com/news/nvidias-new-ampere-data-center-gpu-in-full-production",
            "https://www.huaweicloud.com/cloudplus/seventeenthphase/detail05.html"
          ],
          "rationale": "A100支持自训视觉模型，以专用检测竞争行业项目，不暗示NVIDIA提供现成盘古替代模型。"
        },
        {
          "id": "pangu_does_work-deepseek-research",
          "brand": "deepseek",
          "label": "与 DeepSeek 新团队研究巡检数据怎么用",
          "result": "你们与刚起步的 DeepSeek 团队交流训练方法，把巡检照片和故障说明整理成小规模试验材料。模型还没大到能开发布会，哪些标签会误导训练却查清了。回到办公室，工程师把安全帽放在机箱旁：以后谈行业数据，先想想这顶帽子。",
          "mode": "cooperate",
          "affinities": {
            "deepseek": 10
          },
          "secondaryAffinities": {},
          "fromYear": 2023,
          "fromQuarter": 3,
          "quarterDelta": {
            "cash": -24,
            "research": 5,
            "team": -2,
            "trust": 3
          },
          "rationale": "补充2023年新进入公司的可选研究回应；合作与对话为游戏虚构，不使用尚未发布的Grok或DeepSeek具体模型，不声称获得闭源训练配方或权重。",
          "editorialSource": "research/company-balance-v21.json"
        },
        {
          "id": "pangu_does_work-xai-research",
          "brand": "xai",
          "label": "与 xAI 新团队交流模型怎样才算懂了",
          "result": "你们与刚成立的 xAI 团队交流评估问题，用相同设备在不同现场的记录设计测试，专门找模型认错的地方。项目还需要自己训练和部署，团队却不再把记住样本当成懂了业务。甲方没有听到颂诗，倒收到了一份能拿去现场核验的清单。",
          "mode": "cooperate",
          "affinities": {
            "xai": 10
          },
          "secondaryAffinities": {},
          "fromYear": 2023,
          "fromQuarter": 3,
          "quarterDelta": {
            "cash": -22,
            "research": 4,
            "team": -1,
            "trust": 4
          },
          "rationale": "补充2023年新进入公司的可选研究回应；合作与对话为游戏虚构，不使用尚未发布的Grok或DeepSeek具体模型，不声称获得闭源训练配方或权重。",
          "editorialSource": "research/company-balance-v21.json"
        }
      ]
    },
    "ernie_recorded_launch": {
      "tags": [
        "product",
        "governance"
      ],
      "focusBrands": [
        "kimi",
        "openai"
      ],
      "routes": [
        {
          "id": "self",
          "label": "保留现场提问，准备失败说明",
          "result": "有人提出测试集外的问题。台上的沉默很真实，台下的手机举得也很整齐。",
          "quarterDelta": {
            "cash": -36,
            "research": 3,
            "trust": 3,
            "team": -2
          },
          "affinities": {}
        },
        {
          "id": "public",
          "label": "公开演示输入与原始录屏",
          "result": "大家把输入、输出和等待过程都准备清楚。花絮比宣传片长，却救了技术答疑。",
          "quarterDelta": {
            "cash": -20,
            "research": 2,
            "trust": 4,
            "team": -2
          },
          "affinities": {}
        }
      ],
      "contextOffers": [
        {
          "id": "ernie_recorded_launch-wenxin",
          "brand": "kimi",
          "label": "邀月之暗面团队做一场现场测试",
          "result": "你们与刚起步的月之暗面团队交流，拿真实客户资料设计一场不剪辑的测试。模型、流程和失败案例都留在台上。现场少了一些掌声，却多了几位愿意留下难题的客户；这回先约测试，再谈海报。",
          "mode": "cooperate",
          "quarterDelta": {
            "cash": -14,
            "research": 3,
            "team": -1,
            "trust": 3,
            "risk": 1
          },
          "affinities": {
            "kimi": 10
          },
          "fromYear": 2023,
          "fromQuarter": 1,
          "rationale": "保留原事件历史背景与数值；改为现有核心公司的玩家自建试验或虚构合作，不声称真实签约或尚未发布的产品能力。",
          "secondaryAffinities": {},
          "editorialSource": "research/company-balance-v21.json"
        },
        {
          "id": "ernie_recorded_launch-openai",
          "brand": "openai",
          "label": "拿GPT-4候补测试做盲题对照",
          "result": "团队申请GPT-4候补测试，把客户现场问题整理成盲题，连失败结果一起保存。宣传暂时不敢写稳过，评测却有了可比基线；拿到访问机会，也不等于拿到了万能演示保险。",
          "mode": "cooperate",
          "quarterDelta": {
            "cash": -19,
            "research": 5,
            "team": -2,
            "trust": 4,
            "risk": -1
          },
          "affinities": {
            "openai": 10
          },
          "fromYear": 2023,
          "fromQuarter": 1,
          "sourceUrls": [
            "https://openai.com/index/gpt-4-research/"
          ],
          "rationale": "GPT-4首发API候补制；用申请和研究对照，不默认立即无限接入。"
        },
        {
          "id": "huawei-live-local-evaluation",
          "brand": "huawei",
          "label": "拿现场验收方案，争华为路线的中文试点",
          "result": "你们把自家中文原型搬到客户现场，向正在评估华为行业路线的采购方展示随机题、失败日志和人工评分。演示没法靠重录过关，部署问题也当场暴露；主持人少了一段台词，工程师多了一根网线。",
          "mode": "compete",
          "quarterDelta": {
            "cash": -23,
            "research": 4,
            "team": -2,
            "trust": 4,
            "risk": 2
          },
          "affinities": {
            "huawei": -10
          },
          "fromYear": 2023,
          "fromQuarter": 1,
          "sourceUrls": [
            "https://cloud.baidu.com/news/news_3f6ed1b1-75b6-4c0e-981c-51d3d82a6f80"
          ],
          "rationale": "玩家以可复跑的独立服务竞争行业试点，不声称2023年第一季度华为已经推出某款聊天新品，也不把现场测试写成真实品牌比较结果。 所列来源仅作事件背景；具体实施、合作、收入与资源变化均为游戏虚构，不代表现实合作或品牌背书。"
        },
        {
          "id": "ernie_recorded_launch-claude",
          "brand": "claude",
          "label": "请Claude做拒答与越界彩排",
          "result": "你们申请Claude早期访问，把含糊、越界和信息不足的问题放进彩排。模型有时宁愿不答，产品团队也学着解释限制；演示少了几次神迹，留下更清楚的使用边界。",
          "mode": "cooperate",
          "quarterDelta": {
            "cash": -16,
            "research": 4,
            "team": -1,
            "trust": 4,
            "risk": -2
          },
          "affinities": {
            "claude": 10
          },
          "fromYear": 2023,
          "fromQuarter": 1,
          "sourceUrls": [
            "https://www.anthropic.com/news/introducing-claude"
          ],
          "rationale": "Claude于2023年3月14日发布，初期申请访问；不提前100K或Claude2。"
        }
      ]
    },
    "eu_bottlecap_2024": {
      "tags": [
        "governance",
        "code"
      ],
      "focusBrands": [
        "claude",
        "openai"
      ],
      "routes": [
        {
          "id": "self",
          "label": "自研沙盒与紧急停止机制",
          "result": "你花钱买下独立验证的时间。代理终于能自己干活，也能被及时叫停；这是老板至今没学会的能力。",
          "quarterDelta": {
            "cash": -48,
            "research": 5,
            "trust": 3,
            "team": -3
          },
          "affinities": {}
        },
        {
          "id": "public",
          "label": "共同研究可撤回的代理权限",
          "result": "合作团队反复测试授权与撤销，研发和信任都上升。共同结论是：防止代理失控，不必先把用户的鼻子戳红。",
          "quarterDelta": {
            "cash": -28,
            "research": 4,
            "trust": 4,
            "team": -3
          },
          "affinities": {}
        }
      ],
      "contextOffers": [
        {
          "id": "eu_bottlecap_2024-claude",
          "brand": "claude",
          "label": "给Claude工具调用加批准关卡",
          "result": "你把Claude提出的工具请求停在确认页，先展示对象和后果。瓶盖式监督有了原型；用户多点一次，误操作少一些，工程师还得补好撤销后的状态。",
          "mode": "cooperate",
          "quarterDelta": {
            "cash": -20,
            "research": 3,
            "team": -1,
            "trust": 3,
            "risk": -2
          },
          "affinities": {
            "claude": 11
          },
          "fromYear": 2024,
          "fromQuarter": 3,
          "sourceUrls": [
            "https://commission.europa.eu/news-and-media/news/less-plastic-waste-means-cleaner-beaches-2024-08-14_en",
            "https://www.anthropic.com/news/tool-use-ga"
          ],
          "rationale": "2024年5月Claude工具使用正式开放；以玩家确认与撤销层回应瓶盖所引出的可监督Agent。"
        },
        {
          "id": "qwen-permission-revoke",
          "brand": "qwen",
          "label": "给千问任务接断路器，练习中途收权",
          "result": "你们在千问与内部接口之间加一层权限检查，故意在任务做到一半时撤回写入资格。代理只能交回未完成清单，不能靠换个说法继续动手；瓶盖还连着瓶子，权限终于连回了负责人。",
          "mode": "cooperate",
          "quarterDelta": {
            "cash": -26,
            "research": 4,
            "team": -2,
            "trust": 3,
            "risk": -3
          },
          "affinities": {
            "qwen": 12
          },
          "fromYear": 2024,
          "fromQuarter": 3,
          "sourceUrls": [
            "https://commission.europa.eu/news-and-media/news/less-plastic-waste-means-cleaner-beaches-2024-08-14_en"
          ],
          "rationale": "基于事件前已有的千问文本能力，玩家新增任务解释、权限检查与撤销试验；不把权限机制说成模型原生保证。 所列来源仅作事件背景；具体实施、合作、收入与资源变化均为游戏虚构，不代表现实合作或品牌背书。"
        },
        {
          "id": "eu_bottlecap_2024-nvidia",
          "brand": "nvidia",
          "label": "用NeMo把跑偏代理拉回流程",
          "result": "你给NeMo Guardrails写入允许的话题和操作流程，让偏航请求转交人工。客服先能上线收服务费，复杂任务却更容易被拦住，支持组得逐条解释原因。",
          "mode": "cooperate",
          "quarterDelta": {
            "cash": 12,
            "research": 2,
            "team": -1,
            "trust": 2,
            "risk": -2
          },
          "affinities": {
            "nvidia": 10
          },
          "fromYear": 2024,
          "fromQuarter": 3,
          "sourceUrls": [
            "https://commission.europa.eu/news-and-media/news/less-plastic-waste-means-cleaner-beaches-2024-08-14_en",
            "https://blogs.nvidia.com/blog/ai-chatbot-guardrails-nemo/"
          ],
          "rationale": "NeMo Guardrails于2023年开放，支持对话流程与外部系统调用约束，贴合有边界的自主执行。"
        },
        {
          "id": "eu_bottlecap_2024-openai",
          "brand": "openai",
          "label": "把GPT函数请求变成可撤销工单",
          "result": "团队把GPT函数调用接到工单队列，提交和真正执行分开，中途取消也有回执。演示少了瞬间完成的魔法，多了用户能看懂的进度；队列维护会持续花钱。",
          "mode": "cooperate",
          "quarterDelta": {
            "cash": -16,
            "research": 3,
            "team": -1,
            "trust": 4,
            "risk": -2
          },
          "affinities": {
            "openai": 10
          },
          "fromYear": 2024,
          "fromQuarter": 3,
          "sourceUrls": [
            "https://commission.europa.eu/news-and-media/news/less-plastic-waste-means-cleaner-beaches-2024-08-14_en",
            "https://openai.com/index/function-calling-and-other-api-updates/"
          ],
          "rationale": "OpenAI函数调用于2023年6月推出；工单和撤销机制是玩家设计，不声称API自动保证安全。"
        }
      ]
    },
    "claude-golden-gate": {
      "tags": [
        "research",
        "governance"
      ],
      "focusBrands": [
        "claude",
        "deepseek"
      ],
      "routes": [
        {
          "id": "self",
          "label": "自研特征控制与干预实验",
          "result": "你砸钱重做特征控制，模型能力得到提升，也终于能聊桥以外的事。预算表少了一大截，财务认为公司确实跨过了一座很贵的桥。",
          "quarterDelta": {
            "cash": -48,
            "research": 5,
            "trust": 3,
            "team": -3
          },
          "affinities": {}
        },
        {
          "id": "public",
          "label": "开放异常激活，邀请同行复核",
          "result": "你付钱组织开放实验，把异常激活交给同行一起研究。能力和外界信任同时提高，白板上的桥逐渐消失，只剩财务坚持保留过路费。",
          "quarterDelta": {
            "cash": -28,
            "research": 4,
            "trust": 4,
            "team": -3
          },
          "affinities": {}
        }
      ],
      "contextOffers": [
        {
          "id": "claude-golden-gate-claude",
          "brand": "claude",
          "label": "复现Claude大桥特征干预",
          "result": "研究组照着公开论文，在小模型里寻找并增强概念特征。桥终于从提示词走进了实验记录，旁边还带着一串副作用；研究预算花掉了，宣传稿暂时写不成。",
          "mode": "cooperate",
          "quarterDelta": {
            "cash": -32,
            "research": 6,
            "team": -2,
            "trust": 3,
            "risk": 1
          },
          "affinities": {
            "claude": 13
          },
          "fromYear": 2024,
          "fromQuarter": 2,
          "sourceUrls": [
            "https://www.anthropic.com/news/golden-gate-claude"
          ],
          "rationale": "基于Anthropic金门大桥内部激活研究，玩家用可控小模型复现，不冒称能访问闭源Claude激活。"
        },
        {
          "id": "claude-golden-gate-deepseek",
          "brand": "deepseek",
          "label": "借V2专家路由找大桥干预副作用",
          "result": "团队在DeepSeek-V2开放模型上观察专家路由与输出变化，先区分路由变化和概念特征。桥的笑话变成新的实验问题，计算花掉了预算，没人把一个专家直接命名成一座桥。",
          "mode": "cooperate",
          "quarterDelta": {
            "cash": -28,
            "research": 5,
            "team": -2,
            "trust": 3,
            "risk": 1
          },
          "affinities": {
            "deepseek": 11
          },
          "fromYear": 2024,
          "fromQuarter": 2,
          "sourceUrls": [
            "https://www.anthropic.com/news/golden-gate-claude",
            "https://github.com/deepseek-ai/DeepSeek-V2"
          ],
          "rationale": "V2于2024年5月早于大桥事件开放；玩家比较MoE路由与概念干预，不错称一个专家等同于语义特征。"
        },
        {
          "id": "claude-golden-gate-qwen",
          "brand": "qwen",
          "label": "拿Qwen1.5权重拆开桥的开关",
          "result": "你们下载Qwen1.5，在自有机器上逐层记录干预与回答的变化。白板上的猜测开始能被反驳，代价是研究员长期看激活图，客户暂时看不到新按钮。",
          "mode": "cooperate",
          "quarterDelta": {
            "cash": -24,
            "research": 5,
            "team": -2,
            "trust": 2,
            "risk": 0
          },
          "affinities": {
            "qwen": 11
          },
          "fromYear": 2024,
          "fromQuarter": 2,
          "sourceUrls": [
            "https://www.anthropic.com/news/golden-gate-claude",
            "https://qwenlm.github.io/blog/qwen1.5/"
          ],
          "rationale": "用2024年2月已开放Qwen1.5，避免使用大桥5月23日之后才发布的Qwen2或OpenAI六月SAE。"
        },
        {
          "id": "claude-golden-gate-gemini",
          "brand": "gemini",
          "label": "用Gemma做小规模概念对照",
          "result": "研究组用Google的Gemma开放模型，把桥换成城市、建筑和交通概念逐项对照。试验便宜了，结论也更克制：小模型里看见的开关，还不能直接解释大模型。",
          "mode": "cooperate",
          "quarterDelta": {
            "cash": -16,
            "research": 4,
            "team": 1,
            "trust": 3,
            "risk": 0
          },
          "affinities": {
            "gemini": 10
          },
          "fromYear": 2024,
          "fromQuarter": 2,
          "sourceUrls": [
            "https://www.anthropic.com/news/golden-gate-claude",
            "https://blog.google/innovation-and-ai/technology/developers-tools/gemma-open-models/"
          ],
          "rationale": "Gemma于2024年2月开放，是可访问内部表示的小模型对照，不使用Q3才有的Gemma Scope。"
        }
      ]
    },
    "claude-yellowstone-break": {
      "tags": [
        "code",
        "governance"
      ],
      "focusBrands": [
        "claude",
        "openai"
      ],
      "routes": [
        {
          "id": "self",
          "label": "自训任务追踪与断点恢复",
          "result": "你投入大笔预算训练任务追踪，模型完成工作的能力变强。它终于关掉相册继续写代码，只有负责训练的人再也没空去看真的黄石。",
          "quarterDelta": {
            "cash": -48,
            "research": 5,
            "trust": 3,
            "team": -3
          },
          "affinities": {}
        },
        {
          "id": "public",
          "label": "公开偏航录屏，共建回归任务",
          "result": "你付费组织共同研发，让同行分析模型为何偏离任务。执行能力和外界信任都提高；演示现在能准时结束，黄石照片被留作屏保。",
          "quarterDelta": {
            "cash": -28,
            "research": 4,
            "trust": 4,
            "team": -3
          },
          "affinities": {}
        }
      ],
      "contextOffers": [
        {
          "id": "claude-yellowstone-break-claude",
          "brand": "claude",
          "label": "给Claude屏幕操作装任务检查点",
          "result": "你把Claude的每段屏幕操作录下来，离开开发窗口就核对当前任务。间歇泉不再悄悄占满发布会，但频繁检查拖慢了操作，负责验收的人得陪它把流程走完。",
          "mode": "cooperate",
          "quarterDelta": {
            "cash": -24,
            "research": 4,
            "team": -2,
            "trust": 3,
            "risk": -2
          },
          "affinities": {
            "claude": 12
          },
          "fromYear": 2024,
          "fromQuarter": 4,
          "sourceUrls": [
            "https://www.anthropic.com/research/developing-computer-use"
          ],
          "rationale": "官方computer use研究记载偏航浏览黄石；玩家对真实截图与动作循环加入检查点。"
        },
        {
          "id": "claude-yellowstone-break-openai",
          "brand": "openai",
          "label": "让GPT4o复核截图是否偏离任务",
          "result": "你把屏幕截图和当前任务交给GPT-4o复核，偏航时先暂停工具执行。多一层检查更容易发现风景相册，也多一笔调用费；另一个模型看漏时，最后仍得人来按停。",
          "mode": "cooperate",
          "quarterDelta": {
            "cash": -22,
            "research": 4,
            "team": -1,
            "trust": 3,
            "risk": -2
          },
          "affinities": {
            "openai": 11
          },
          "fromYear": 2024,
          "fromQuarter": 4,
          "sourceUrls": [
            "https://www.anthropic.com/research/developing-computer-use",
            "https://openai.com/index/hello-gpt-4o/"
          ],
          "rationale": "GPT4o2024年5月具备视觉输入，玩家做第二模型截图审查；不提前用10月25日AutoGLM回应10月22日事件。"
        },
        {
          "id": "claude-yellowstone-break-qwen",
          "brand": "qwen",
          "label": "用Qwen代码模型抢可验收工单",
          "result": "你拿Qwen2.5-Coder承接小型修复，只认测试结果再收费，向客户推销少看风景、多交补丁。首批款到账，开放模型的维护和所有漏网错误仍由你承担。",
          "mode": "compete",
          "quarterDelta": {
            "cash": 18,
            "research": 3,
            "team": -2,
            "trust": 1,
            "risk": 2
          },
          "affinities": {
            "qwen": -10
          },
          "fromYear": 2024,
          "fromQuarter": 4,
          "sourceUrls": [
            "https://www.anthropic.com/research/developing-computer-use",
            "https://qwenlm.github.io/blog/qwen2.5-coder/"
          ],
          "rationale": "Qwen2.5-Coder于2024Q3开放；玩家商业化限域编码服务与其生态服务商竞争，用验收替代泛桌面自主。",
          "produces": [
            "customers"
          ]
        },
        {
          "id": "claude-yellowstone-break-wenxin",
          "brand": "xai",
          "label": "让 Grok 先读完需求，再放行程假",
          "result": "你们用 Grok 把客户需求拆成检查清单，演示前逐项对照实际结果。去黄石的行程终于没混进交付文档；工具能帮忙找漏项，最后签字的人仍得坐在办公室。",
          "mode": "cooperate",
          "quarterDelta": {
            "cash": -20,
            "research": 2,
            "team": -1,
            "trust": 2,
            "risk": -2
          },
          "affinities": {
            "xai": 10
          },
          "fromYear": 2024,
          "fromQuarter": 4,
          "rationale": "保留原事件历史背景；改为现有核心公司的玩家自建试验或虚构合作，不声称真实签约或尚未发布的产品能力。 质感修订：这是玩家的内部试验与调用开销，没有成交或外部付款，资金记为支出。",
          "secondaryAffinities": {},
          "editorialSource": "research/company-balance-v21.json"
        }
      ]
    },
    "dario-country-of-geniuses": {
      "tags": [
        "compute",
        "research"
      ],
      "focusBrands": [
        "claude",
        "nvidia",
        "xai"
      ],
      "routes": [
        {
          "id": "self",
          "label": "按阶段自建集群与调度体系",
          "result": "你用大笔预算建立自己的研发体系，模型能力上升，关键设计握在手里。行政收起护照改画工单，电工成为第一位真正享受国宾待遇的人。",
          "quarterDelta": {
            "cash": -48,
            "research": 5,
            "trust": 3,
            "team": -3
          },
          "affinities": {},
          "produces": [
            "compute"
          ]
        },
        {
          "id": "public",
          "label": "共享集群设计和能耗实验",
          "result": "你付费邀请同行共同研发，把集群设计与实验结果公开，能力和信任一起增长。天才国度还没建成，大家倒先学会了共同维护电费账本。",
          "quarterDelta": {
            "cash": -28,
            "research": 4,
            "trust": 4,
            "team": -3
          },
          "affinities": {}
        }
      ],
      "contextOffers": [
        {
          "id": "dario-country-of-geniuses-claude",
          "brand": "claude",
          "label": "让Claude天才国先上夜班",
          "result": "你把不急的资料整理塞进Claude批处理，只在白天抽查结果。天才国度先有了上下班制度，成本压力缓下来；当天必须交付的任务仍得另外排队付钱。",
          "mode": "cooperate",
          "quarterDelta": {
            "cash": 16,
            "research": 3,
            "team": 1,
            "trust": 1,
            "risk": 1
          },
          "affinities": {
            "claude": 11
          },
          "fromYear": 2024,
          "fromQuarter": 4,
          "sourceUrls": [
            "https://darioamodei.com/essay/machines-of-loving-grace",
            "https://x.com/DarioAmodei/status/1844830404064288934",
            "https://www.anthropic.com/news/message-batches-api"
          ],
          "rationale": "2024年10月Message Batches API可用，回应大量实例并发设想的实际批处理经济性。"
        },
        {
          "id": "dario-country-of-geniuses-nvidia",
          "brand": "nvidia",
          "label": "用TensorRT给天才国做吞吐验收",
          "result": "你们在现有GPU上测批量推理和显存占用，再决定能容纳多少个工作实例。护照数终于服从吞吐量，优化带来研究收获，机房仍需要专业工程师守着。",
          "mode": "cooperate",
          "quarterDelta": {
            "cash": -36,
            "research": 5,
            "team": -2,
            "trust": 2,
            "risk": -1
          },
          "affinities": {
            "nvidia": 12
          },
          "secondaryAffinities": {
            "huawei": -3
          },
          "fromYear": 2024,
          "fromQuarter": 4,
          "sourceUrls": [
            "https://darioamodei.com/essay/machines-of-loving-grace",
            "https://x.com/DarioAmodei/status/1844830404064288934",
            "https://github.com/NVIDIA/TensorRT-LLM"
          ],
          "rationale": "TensorRT-LLM在2023年开放，具体负责推理效率与实例容量，不虚构购买百万实例。"
        },
        {
          "id": "dario-country-of-geniuses-deepseek",
          "brand": "deepseek",
          "label": "拆解V2的专家路由与显存预算",
          "result": "团队读DeepSeek-V2的MoE和MLA设计，先在小规模实验里测专家负载与缓存占用。机房建国变成几张清楚的曲线，研发向前一截，完整大模型仍远超本季预算。",
          "mode": "cooperate",
          "quarterDelta": {
            "cash": -28,
            "research": 5,
            "team": -2,
            "trust": 2,
            "risk": 1
          },
          "affinities": {
            "deepseek": 12
          },
          "fromYear": 2024,
          "fromQuarter": 4,
          "sourceUrls": [
            "https://darioamodei.com/essay/machines-of-loving-grace",
            "https://x.com/DarioAmodei/status/1844830404064288934",
            "https://github.com/deepseek-ai/DeepSeek-V2"
          ],
          "rationale": "V2于2024年5月已公开，避开10月文章之后的12月V3；实际架构与资源约束直接相关。"
        },
        {
          "id": "dario-country-of-geniuses-huawei",
          "brand": "huawei",
          "label": "在ModelArts做机房容量演练",
          "result": "你把集群扩容计划拆成训练作业、存储和故障演练，在ModelArts逐批验收。机柜图开始对应真实工时，落地更稳，平台适配占去一部分原本做模型的人手。",
          "mode": "cooperate",
          "quarterDelta": {
            "cash": -30,
            "research": 4,
            "team": -3,
            "trust": 3,
            "risk": -2
          },
          "affinities": {
            "huawei": 11
          },
          "secondaryAffinities": {
            "nvidia": -3
          },
          "fromYear": 2024,
          "fromQuarter": 4,
          "sourceUrls": [
            "https://darioamodei.com/essay/machines-of-loving-grace",
            "https://x.com/DarioAmodei/status/1844830404064288934",
            "https://www.huaweicloud.com/product/modelarts.html"
          ],
          "rationale": "ModelArts事件前已提供训练作业管理；用容量和故障演练回应文章强调的现实硬件约束。"
        }
      ]
    },
    "autoglm_phone_food_delivery": {
      "tags": [
        "product",
        "code"
      ],
      "focusBrands": [
        "qwen",
        "gemini"
      ],
      "routes": [
        {
          "id": "self",
          "label": "自研屏幕理解与动作执行",
          "result": "你批了最贵的研发计划，从屏幕理解到动作执行都自己做。现金花得肉疼，但团队开始真正掌握这双手，午饭也成了每日回归测试。",
          "quarterDelta": {
            "cash": -48,
            "research": 5,
            "trust": 3,
            "team": -3
          },
          "affinities": {}
        },
        {
          "id": "public",
          "label": "共建手机代理的开放任务集",
          "result": "大家公开手机操作的成功与失败轨迹，轮流验证不同界面。优惠券终于不只在演示里有效，负责维护任务集的人却发现，每家店都能改出一种新菜单。",
          "quarterDelta": {
            "cash": -28,
            "research": 4,
            "trust": 4,
            "team": -3
          },
          "affinities": {}
        }
      ],
      "contextOffers": [
        {
          "id": "kimi-lunch-confirmation",
          "brand": "kimi",
          "label": "让Kimi汇总忌口，午饭先出待确认单",
          "result": "你们让Kimi整理群聊里的口味和忌口，生成逐人确认的午餐清单，再由值班同事完成下单。试点费到账，临时改主意仍要重开一行；代理没有替大家点付款，却先结束了午饭前半小时的考古。",
          "mode": "cooperate",
          "quarterDelta": {
            "cash": 15,
            "research": 4,
            "team": -2,
            "trust": 2,
            "risk": 1
          },
          "affinities": {
            "kimi": 13
          },
          "fromYear": 2024,
          "fromQuarter": 4,
          "sourceUrls": [
            "https://www.cls.cn/detail/1839166",
            "https://arxiv.org/abs/2411.00820"
          ],
          "rationale": "以已有文本整理能力回应点餐末端容易误解的需求；下单由真人完成，玩家的清单服务与收入为虚构，不声称Kimi具备手机自动支付功能。 所列来源仅作事件背景；具体实施、合作、收入与资源变化均为游戏虚构，不代表现实合作或品牌背书。"
        },
        {
          "id": "autoglm_phone_food_delivery-claude",
          "brand": "claude",
          "label": "用Claude做网页版点餐对照",
          "result": "你把同一张午餐单交给Claude的电脑操作能力，在网页里逐步点选。两种设备的错误终于可以比较，研究进步了；网页弹窗没有比手机优惠券更体谅午休。",
          "mode": "cooperate",
          "quarterDelta": {
            "cash": -22,
            "research": 4,
            "team": -2,
            "trust": 2,
            "risk": 0
          },
          "affinities": {
            "claude": 10
          },
          "fromYear": 2024,
          "fromQuarter": 4,
          "sourceUrls": [
            "https://autoglm.z.ai/blog/?embed=0",
            "https://www.cls.cn/detail/1839166",
            "https://arxiv.org/abs/2411.00820",
            "https://www.anthropic.com/research/developing-computer-use"
          ],
          "rationale": "2024Q4 computer use提供桌面GUI，与手机AutoGLM构成实际输入平台对照。"
        },
        {
          "id": "autoglm_phone_food_delivery-qwen",
          "brand": "qwen",
          "label": "用Qwen2-VL先读懂菜单截图",
          "result": "团队把Qwen2-VL接到截图识别环节，抽取菜名、价格和按钮，再交给受控脚本点击。选择变清楚了，动作仍需你们编写；识别错误也有了可单独复测的地方。",
          "mode": "cooperate",
          "quarterDelta": {
            "cash": -26,
            "research": 5,
            "team": -2,
            "trust": 3,
            "risk": -1
          },
          "affinities": {
            "qwen": 11
          },
          "fromYear": 2024,
          "fromQuarter": 4,
          "sourceUrls": [
            "https://autoglm.z.ai/blog/?embed=0",
            "https://www.cls.cn/detail/1839166",
            "https://arxiv.org/abs/2411.00820",
            "https://qwenlm.github.io/blog/qwen2-vl/"
          ],
          "rationale": "2024Q3 Qwen2-VL具备图像文本理解，选择只作视觉组件，不虚构当时有成熟手机Agent。"
        },
        {
          "id": "autoglm_phone_food_delivery-doubao",
          "brand": "gemini",
          "label": "让 Gemini 看清菜单，再生成订单",
          "result": "你们给 Gemini 看菜单截图，把菜名、数量和备注整理成订单草稿，交给人确认后再下单。第一顿午饭准时到了；第二天菜单换了版，大家又多饿了十分钟。",
          "mode": "cooperate",
          "quarterDelta": {
            "cash": -16,
            "research": 3,
            "team": -2,
            "trust": 2,
            "risk": 1
          },
          "affinities": {
            "gemini": 10
          },
          "fromYear": 2024,
          "fromQuarter": 4,
          "rationale": "保留原事件历史背景；改为现有核心公司的玩家自建试验或虚构合作，不声称真实签约或尚未发布的产品能力。 质感修订：这是玩家的内部试验与调用开销，没有成交或外部付款，资金记为支出。",
          "secondaryAffinities": {},
          "editorialSource": "research/company-balance-v21.json"
        }
      ]
    },
    "sujianlin_rope": {
      "tags": [
        "research",
        "compute"
      ],
      "focusBrands": [
        "kimi",
        "deepseek",
        "qwen"
      ],
      "routes": [
        {
          "id": "self",
          "label": "独立推导并验证位置编码",
          "result": "团队复习了复数和三角函数。模型开始转了，白板笔也快转不动了。",
          "quarterDelta": {
            "cash": -44,
            "research": 5,
            "trust": 1,
            "team": -3
          },
          "affinities": {}
        },
        {
          "id": "public",
          "label": "组织公开推导和交叉复现",
          "result": "三家团队在同一块白板上推导。协议先写了二十页，圆终于画得很圆。",
          "quarterDelta": {
            "cash": -28,
            "research": 4,
            "trust": 3,
            "team": -2
          },
          "affinities": {}
        }
      ],
      "contextOffers": [
        {
          "id": "sujianlin_rope-qwen",
          "brand": "qwen",
          "label": "拆Qwen1.5的位置编码实现",
          "result": "团队沿着Qwen1.5的开放代码，把旋转角度、序列位置和实际输出一项项对齐。白板终于和程序说同一种话，长文实验更可控，赶发布的人却得再等几天。",
          "mode": "cooperate",
          "quarterDelta": {
            "cash": -22,
            "research": 5,
            "team": -2,
            "trust": 2,
            "risk": 0
          },
          "affinities": {
            "qwen": 12
          },
          "fromYear": 2024,
          "fromQuarter": 1,
          "sourceUrls": [
            "https://spaces.ac.cn/archives/8265",
            "https://spaces.ac.cn/author/1/38/",
            "https://arxiv.org/abs/2104.09864",
            "https://qwenlm.github.io/blog/qwen1.5/"
          ],
          "rationale": "Qwen1.5于2024Q1开放，可读RoPE实现；事件是复习2021研究，不声称RoPE首次诞生于2024。"
        },
        {
          "id": "sujianlin_rope-deepseek",
          "brand": "deepseek",
          "label": "用DeepSeekLLM重跑长度外推",
          "result": "你们在DeepSeek LLM的公开权重上比较训练长度以内与以外的错误。旋转公式没有变成无限记忆，团队却找到了失效边界；省下盲目加层的钱，花给了对照实验。",
          "mode": "cooperate",
          "quarterDelta": {
            "cash": -26,
            "research": 5,
            "team": -2,
            "trust": 3,
            "risk": -1
          },
          "affinities": {
            "deepseek": 11
          },
          "fromYear": 2024,
          "fromQuarter": 1,
          "sourceUrls": [
            "https://spaces.ac.cn/archives/8265",
            "https://spaces.ac.cn/author/1/38/",
            "https://arxiv.org/abs/2104.09864",
            "https://github.com/deepseek-ai/DeepSeek-LLM"
          ],
          "rationale": "DeepSeek LLM于2023发布，采用RoPE；具体用途为长度外推边界而非泛模型合作。"
        },
        {
          "id": "nvidia-position-precision",
          "brand": "nvidia",
          "label": "在英伟达节点重测位置精度与缓存",
          "result": "你们固定样本和随机种子，在现有GPU上切换计算精度，逐项核对长序列的位置索引与缓存读写。错位终于能稳定复现，调试笔记也比采购申请先送到桌上；这次变长的是实验记录，不是显卡清单。",
          "mode": "cooperate",
          "quarterDelta": {
            "cash": -18,
            "research": 4,
            "team": -1,
            "trust": 2,
            "risk": -1
          },
          "affinities": {
            "nvidia": 11
          },
          "fromYear": 2024,
          "fromQuarter": 1,
          "sourceUrls": [
            "https://spaces.ac.cn/archives/8265",
            "https://arxiv.org/abs/2104.09864"
          ],
          "rationale": "GPU上数值精度、位置索引与缓存的受控实验不依赖新产品；玩家自行实现并验证，不把硬件供应商描述成位置编码方法的发明者。 所列来源仅作事件背景；具体实施、合作、收入与资源变化均为游戏虚构，不代表现实合作或品牌背书。"
        },
        {
          "id": "sujianlin_rope-gemini",
          "brand": "gemini",
          "label": "用Gemma小模型验证旋转精度",
          "result": "你把Gemma里的位置计算单独拿出来，比不同数值精度下的长序列误差。圆画得更稳，团队也发现数学写对不代表程序算对；这次小实验比再买一柜卡便宜。",
          "mode": "cooperate",
          "quarterDelta": {
            "cash": -16,
            "research": 4,
            "team": 1,
            "trust": 2,
            "risk": -1
          },
          "affinities": {
            "gemini": 10
          },
          "fromYear": 2024,
          "fromQuarter": 1,
          "sourceUrls": [
            "https://spaces.ac.cn/archives/8265",
            "https://spaces.ac.cn/author/1/38/",
            "https://arxiv.org/abs/2104.09864",
            "https://blog.google/innovation-and-ai/technology/developers-tools/gemma-open-models/"
          ],
          "rationale": "Gemma2024Q1开放及使用RoPE；玩家做数值精度对照，不把后来社区问题直接断言为产品缺陷。"
        }
      ]
    },
    "funding_compute_2024": {
      "tags": [
        "compute",
        "research"
      ],
      "focusBrands": [
        "nvidia",
        "huawei",
        "xai"
      ],
      "routes": [
        {
          "id": "self",
          "label": "缩小训练计划，靠老客户续费",
          "result": "你暂停同时追三个方向，把能用的版本交给老客户。续费款够撑过本季，训练曲线慢了些，欠费提醒终于不再是全公司最活跃的通知。",
          "quarterDelta": {
            "cash": 64,
            "research": -1,
            "trust": 2,
            "team": -2
          },
          "affinities": {}
        },
        {
          "id": "public",
          "label": "申请公共研究基金，公开成果",
          "result": "资金少一点，成果要公开。投资人不催上市，催你把README写成别人真能跑起来的样子。",
          "quarterDelta": {
            "cash": 72,
            "research": -1,
            "trust": 4,
            "team": -2
          },
          "affinities": {}
        }
      ],
      "contextOffers": [
        {
          "id": "funding_compute_2024-qwen",
          "brand": "qwen",
          "label": "用Qwen1.5小模型换私有化订单",
          "result": "你暂停最大的预训练，把Qwen1.5小模型适配成客户的内部问答系统。交付预付款撑住工资，通用能力进展放缓；第一次续费取决于资料答得对不对，而不是参数多大。",
          "mode": "cooperate",
          "quarterDelta": {
            "cash": 30,
            "research": 3,
            "team": -2,
            "trust": 2,
            "risk": 1
          },
          "affinities": {
            "qwen": 12
          },
          "fromYear": 2024,
          "fromQuarter": 1,
          "sourceUrls": [
            "https://qwenlm.github.io/blog/qwen1.5/"
          ],
          "rationale": "Qwen1.5提供多尺寸开放权重，早期2024可做具体本地行业交付，不虚构官方投资。"
        },
        {
          "id": "funding_compute_2024-wenxin",
          "brand": "kimi",
          "label": "用 Kimi 先卖一份能查的资料库",
          "result": "你们用 Kimi 整理客户的长文档，给每条回答附上原文位置，先接下小规模资料问答项目。预付款缓解了机房账单，销售也学会了一句话：知识库先能查，宏大愿景下次讲。",
          "mode": "cooperate",
          "quarterDelta": {
            "cash": 26,
            "research": 2,
            "team": -1,
            "trust": 3,
            "risk": -1
          },
          "affinities": {
            "kimi": 10
          },
          "fromYear": 2024,
          "fromQuarter": 1,
          "rationale": "保留原事件历史背景与数值；改为现有核心公司的玩家自建试验或虚构合作，不声称真实签约或尚未发布的产品能力。",
          "secondaryAffinities": {},
          "editorialSource": "research/company-balance-v21.json"
        },
        {
          "id": "openai-ticket-implementation",
          "brand": "openai",
          "label": "用OpenAI接工单查询，先收一笔实施费",
          "result": "训练预算暂时收紧，你们把文本接口接到只读工单查询，先卖能追溯出处的状态汇总。客户付了实施费，研发保住了一段跑道；每接一家旧系统，团队就多认识一种没人敢改的字段名。",
          "mode": "cooperate",
          "quarterDelta": {
            "cash": 28,
            "research": 3,
            "team": -2,
            "trust": 1,
            "risk": 1
          },
          "affinities": {
            "openai": 12
          },
          "fromYear": 2024,
          "fromQuarter": 1,
          "sourceUrls": [],
          "rationale": "采用2024年前已存在的文本API与玩家编写的查询接口；交付限定只读工单整理，不声称新型自主代理已成熟或存在真实合同。 所列来源仅作事件背景；具体实施、合作、收入与资源变化均为游戏虚构，不代表现实合作或品牌背书。"
        },
        {
          "id": "funding_compute_2024-nvidia",
          "brand": "nvidia",
          "label": "以TensorRT降本换服务续约",
          "result": "你用TensorRT-LLM优化已有推理服务，再拿实测吞吐和客户谈续约。工资有了着落，研发也积累了内核经验；合同中的响应时间从此需要每天兑现。",
          "mode": "cooperate",
          "quarterDelta": {
            "cash": 24,
            "research": 4,
            "team": -3,
            "trust": 2,
            "risk": 1
          },
          "affinities": {
            "nvidia": 10
          },
          "secondaryAffinities": {
            "huawei": -3
          },
          "fromYear": 2024,
          "fromQuarter": 1,
          "sourceUrls": [
            "https://github.com/NVIDIA/TensorRT-LLM"
          ],
          "rationale": "TensorRT-LLM2023已公开，收入来自玩家优化后续约，不暗示英伟达提供投资或免费额度。"
        }
      ]
    },
    "autoglm_wechat_red_packet": {
      "tags": [
        "product",
        "governance"
      ],
      "focusBrands": [
        "kimi"
      ],
      "routes": [
        {
          "id": "self",
          "label": "自研支付限额，签小额试点",
          "result": "你把支付额度、二次确认和撤销记录做成自营试点，客户预付了验证费用。原型终于能发一块钱的红包；要发第二块，它得先把第一块的账讲清楚。",
          "quarterDelta": {
            "cash": 48,
            "research": 2,
            "trust": 3,
            "team": -2
          },
          "affinities": {}
        },
        {
          "id": "public",
          "label": "接受共同出资，公开支付实验",
          "result": "伙伴共同支付小额支付实验的费用，你们公开每次授权和资金去向。经费接上了项目，研发还得等待多方确认；第一场共同庆祝，红包仍然需要逐笔对账。",
          "quarterDelta": {
            "cash": 64,
            "research": -1,
            "trust": 4,
            "team": -2
          },
          "affinities": {}
        }
      ],
      "contextOffers": [
        {
          "id": "claude-payment-review",
          "brand": "claude",
          "label": "让Claude先写付款核对单，金额由人签",
          "result": "你们让Claude把脱敏口令拆成金额、用途和接收方，缺一项就退回补充，最终支付始终交给本人确认。授权流程改造带来了回款，财务也终于不用在掌声结束后追问钱去了哪里。",
          "mode": "cooperate",
          "quarterDelta": {
            "cash": 24,
            "research": 3,
            "team": -2,
            "trust": 3,
            "risk": -2
          },
          "affinities": {
            "claude": 13
          },
          "fromYear": 2024,
          "fromQuarter": 4,
          "sourceUrls": [
            "https://finance.sina.com.cn/tech/roll/2024-11-29/doc-incxtvcn8578789.shtml",
            "https://arxiv.org/abs/2411.00820"
          ],
          "rationale": "已有文本能力用于玩家构建的付款前核对流程；不接管个人支付账号，不声称Claude原生操作微信，也不把事件演示归到新公司名下。 所列来源仅作事件背景；具体实施、合作、收入与资源变化均为游戏虚构，不代表现实合作或品牌背书。"
        },
        {
          "id": "autoglm_wechat_red_packet-hunyuan",
          "brand": "kimi",
          "label": "让 Kimi 先对账，再讨论发红包",
          "result": "你们让 Kimi 读取授权导出的账目，把金额、对象和异常订单列成清单，付款仍由人确认。第一笔对账服务费到账时，财务决定请客；预算是人定的，红包也是人发的。",
          "mode": "cooperate",
          "quarterDelta": {
            "cash": 26,
            "research": 2,
            "team": -2,
            "trust": 2,
            "risk": -2
          },
          "affinities": {
            "kimi": 10
          },
          "fromYear": 2024,
          "fromQuarter": 4,
          "rationale": "保留原事件历史背景与数值；改为现有核心公司的玩家自建试验或虚构合作，不声称真实签约或尚未发布的产品能力。",
          "secondaryAffinities": {},
          "editorialSource": "research/company-balance-v21.json"
        },
        {
          "id": "autoglm_wechat_red_packet-doubao",
          "brand": "gemini",
          "label": "让 Gemini 复核转账截图",
          "result": "你们用 Gemini 检查获准使用的付款截图，逐项比对收款人、金额和取消提示，再交人工确认。演示终于不用真金白银地试错；截图模糊时，系统学会了先说看不清。",
          "mode": "cooperate",
          "quarterDelta": {
            "cash": 20,
            "research": 3,
            "team": -1,
            "trust": 2,
            "risk": -1
          },
          "affinities": {
            "gemini": 10
          },
          "fromYear": 2024,
          "fromQuarter": 4,
          "rationale": "保留原事件历史背景与数值；改为现有核心公司的玩家自建试验或虚构合作，不声称真实签约或尚未发布的产品能力。",
          "secondaryAffinities": {},
          "editorialSource": "research/company-balance-v21.json"
        },
        {
          "id": "autoglm_wechat_red_packet-nvidia",
          "brand": "nvidia",
          "label": "用NeMo约束会花钱的代理",
          "result": "你给NeMo Guardrails配置可支出的任务流程，超出范围就要求人工接手。企业客户愿意为这道门付试点费，复杂红包玩法做不出来，支持团队还得维护规则清单。",
          "mode": "cooperate",
          "quarterDelta": {
            "cash": 18,
            "research": 2,
            "team": -1,
            "trust": 3,
            "risk": -3
          },
          "affinities": {
            "nvidia": 10
          },
          "fromYear": 2024,
          "fromQuarter": 4,
          "sourceUrls": [
            "https://www.sohu.com/a/831671771_114778",
            "https://autoglm.z.ai/blog/?embed=0",
            "https://finance.sina.com.cn/tech/roll/2024-11-29/doc-incxtvcn8578789.shtml",
            "https://blogs.nvidia.com/blog/ai-chatbot-guardrails-nemo/"
          ],
          "rationale": "已有Guardrails的可编程对话流程用于玩家付款前门控，独立于模型产生的付款意图。"
        },
        {
          "id": "autoglm_wechat_red_packet-qwen-confirmation",
          "brand": "qwen",
          "label": "用千问把红包口令拆成待签账单",
          "result": "你把群名、人数和总金额整理成待签账单，再由付款人逐项确认。客户为小额试点付了费用，系统却会把“随便发点”原样退回；财务第一次觉得模型听不懂人情世故也是优点。",
          "mode": "cooperate",
          "quarterDelta": {
            "cash": 22,
            "research": 3,
            "team": -2,
            "trust": 3,
            "risk": -2
          },
          "affinities": {
            "qwen": 11
          },
          "fromYear": 2024,
          "fromQuarter": 4,
          "sourceUrls": [
            "https://www.sohu.com/a/831671771_114778",
            "https://autoglm.z.ai/blog/?embed=0",
            "https://finance.sina.com.cn/tech/roll/2024-11-29/doc-incxtvcn8578789.shtml"
          ],
          "rationale": "沿用AutoGLM红包演示的事件场景，由玩家自行选择千问处理文本口令并开发付款前确认流程。来源仅对应事件背景，不代表千问与微信支付已达成合作；试点合同与成效为游戏虚构。"
        }
      ]
    },
    "xai_colossus_122_days": {
      "tags": [
        "compute",
        "research"
      ],
      "focusBrands": [
        "xai",
        "nvidia",
        "huawei"
      ],
      "routes": [
        {
          "id": "self",
          "label": "分批扩容，用已有设备接单",
          "result": "你先把现有机器的空闲时段卖给客户，再按订单扩容。采购群终于开始讨论到货，代价是本季大训练缩成了小实验，十万张卡暂时只出现在壁纸上。",
          "quarterDelta": {
            "cash": 56,
            "research": -1,
            "trust": 1,
            "team": -3
          },
          "affinities": {}
        },
        {
          "id": "public",
          "label": "共同筹建机房，公开排期与开销",
          "result": "社区筹来的钱够不到十万张卡，却能先补上最紧缺的算力。你公开排期和开销，大家看见了真实进度，也更愿意把任务交给你。",
          "quarterDelta": {
            "cash": 64,
            "research": -1,
            "trust": 4,
            "team": -2
          },
          "affinities": {}
        }
      ],
      "contextOffers": [
        {
          "id": "xai_colossus_122_days-xai",
          "brand": "xai",
          "label": "拆Grok1算自己的万卡门槛",
          "result": "你把Grok-1开放模型的参数规模和部署需求摊进预算表，再拿小规模验证申请研究款。融资故事终于有了配置依据，硬件试跑很贵，十万张卡仍留在别人机房里。",
          "mode": "cooperate",
          "quarterDelta": {
            "cash": 12,
            "research": 4,
            "team": -2,
            "trust": 1,
            "risk": 2
          },
          "affinities": {
            "xai": 11
          },
          "fromYear": 2024,
          "fromQuarter": 3,
          "sourceUrls": [
            "https://x.com/elonmusk/status/1830650370336473253",
            "https://x.ai/colossus",
            "https://nvidianews.nvidia.com/news/spectrum-x-ethernet-networking-xai-colossus/",
            "https://github.com/xai-org/grok-1"
          ],
          "rationale": "xAI于2024Q1开放Grok-1；具体评估大MoE部署门槛，不虚构可租用当季Colossus或提前获得Grok API。"
        },
        {
          "id": "xai_colossus_122_days-nvidia",
          "brand": "nvidia",
          "label": "按H100集群网络分期报预算",
          "result": "你参考H100集群的互联需求，把采购合同拆成上电、连通和训练验收。分期计划换来资金，交付安排更清楚；融资没有消灭机房改造，只把它变成逐项到期的账。",
          "mode": "cooperate",
          "quarterDelta": {
            "cash": 28,
            "research": 3,
            "team": -2,
            "trust": 2,
            "risk": 3
          },
          "affinities": {
            "nvidia": 12
          },
          "secondaryAffinities": {
            "huawei": -3
          },
          "fromYear": 2024,
          "fromQuarter": 3,
          "sourceUrls": [
            "https://x.com/elonmusk/status/1830650370336473253",
            "https://x.ai/colossus",
            "https://nvidianews.nvidia.com/news/spectrum-x-ethernet-networking-xai-colossus/"
          ],
          "rationale": "Colossus使用H100及Spectrum-X的官方资料，玩家融资为虚构，重点是网络与验收而非空泛加卡。"
        },
        {
          "id": "xai_colossus_122_days-deepseek",
          "brand": "deepseek",
          "label": "拿V2-Lite效率抢低预算客户",
          "result": "你把DeepSeek-V2-Lite部署在小规模设备上，推销无需万卡起步的行业服务。订单开始替研发供血，团队也背上稳定交付的责任；发布会的规模比较换成每单成本。",
          "mode": "compete",
          "quarterDelta": {
            "cash": 30,
            "research": 4,
            "team": -3,
            "trust": 1,
            "risk": 2
          },
          "affinities": {
            "deepseek": -10
          },
          "fromYear": 2024,
          "fromQuarter": 3,
          "sourceUrls": [
            "https://x.com/elonmusk/status/1830650370336473253",
            "https://x.ai/colossus",
            "https://nvidianews.nvidia.com/news/spectrum-x-ethernet-networking-xai-colossus/",
            "https://github.com/deepseek-ai/DeepSeek-V2"
          ],
          "rationale": "2024Q2 V2-Lite开放，稀疏模型带来可操作的小预算路线；竞争指玩家抢服务市场，不指历史敌对。"
        },
        {
          "id": "xai_colossus_122_days-wenxin",
          "brand": "kimi",
          "label": "用 Kimi 接长文档订单养实验室",
          "result": "你们用 Kimi 承接客户资料整理，把每笔收入拆成可验收的小订单。训练计划暂时缩小，工资却不用等下一轮融资。看着十万张卡的新闻，工程师说：先让我们这几张今晚有电。",
          "mode": "cooperate",
          "quarterDelta": {
            "cash": 32,
            "research": 2,
            "team": -2,
            "trust": 2,
            "risk": 0
          },
          "affinities": {
            "kimi": 10
          },
          "fromYear": 2024,
          "fromQuarter": 3,
          "rationale": "保留原事件历史背景与数值；改为现有核心公司的玩家自建试验或虚构合作，不声称真实签约或尚未发布的产品能力。",
          "secondaryAffinities": {},
          "editorialSource": "research/company-balance-v21.json"
        }
      ]
    },
    "deepseek_accidental_price_war": {
      "tags": [
        "compute",
        "product"
      ],
      "focusBrands": [
        "deepseek",
        "qwen",
        "xai"
      ],
      "routes": [
        {
          "id": "self",
          "label": "收紧低价套餐，先保住毛利",
          "result": "你给低价套餐加上明确的用量上限，保住每次调用的一点毛利。续费款到账，一部分爱好无限量的客户离开了，财务终于敢把成本表投到大屏。",
          "quarterDelta": {
            "cash": 60,
            "research": 1,
            "trust": -2,
            "team": 1
          },
          "affinities": {}
        },
        {
          "id": "public",
          "label": "申请公共资助，开放降本配方",
          "result": "价格路线暂时稳住。你把架构优化写进申报书，附件比模型说明还仔细。",
          "quarterDelta": {
            "cash": 64,
            "research": -1,
            "trust": 4,
            "team": -2
          },
          "affinities": {}
        }
      ],
      "contextOffers": [
        {
          "id": "deepseek_accidental_price_war-deepseek",
          "brand": "deepseek",
          "label": "按V2显存与吞吐重做低价套餐",
          "result": "你把DeepSeek-V2的低成本路线拆成显存占用、吞吐和实际调用量，再卖有上限的套餐。订单变多了，毛利仍薄，财务要求每个便宜字眼后面都跟着一张实测表。",
          "mode": "cooperate",
          "quarterDelta": {
            "cash": 24,
            "research": 4,
            "team": -2,
            "trust": 1,
            "risk": 2
          },
          "affinities": {
            "deepseek": 12
          },
          "fromYear": 2024,
          "fromQuarter": 3,
          "sourceUrls": [
            "https://www.36kr.com/p/2872793466982535",
            "https://github.com/deepseek-ai/DeepSeek-V2"
          ],
          "rationale": "DeepSeek-V2的MLA减少KV缓存，直接联系架构降本与成本加利润定价；不虚构审计确认。"
        },
        {
          "id": "deepseek_accidental_price_war-doubao",
          "brand": "xai",
          "label": "把 Grok 拉进短问答成本测试",
          "result": "你们给 Grok 和现有服务出同一套短问答题，实测延迟、出错率和总账单，再接入适合的订单。报价终于有了自己的依据；便宜能写在广告里，返工还得算进工资里。",
          "mode": "cooperate",
          "quarterDelta": {
            "cash": 30,
            "research": 2,
            "team": -2,
            "trust": 0,
            "risk": 3
          },
          "affinities": {
            "xai": 10
          },
          "fromYear": 2024,
          "fromQuarter": 4,
          "rationale": "xAI官方API Public Beta发表于2024-11-04；实测调用账单并接入商业订单的选择仅从2024Q4出现，不把2024Q3的网页试用当作公开API。玩家合同、实施与收入均为虚构。",
          "secondaryAffinities": {},
          "editorialSource": "research/company-balance-v21.json",
          "sourceUrls": [
            "https://x.ai/news/api"
          ]
        },
        {
          "id": "deepseek_accidental_price_war-qwen",
          "brand": "qwen",
          "label": "用Qwen2本地部署守包年合同",
          "result": "你把Qwen2部署到固定容量的客户环境，卖清楚边界的包年服务。价格战暂时绕过单次调用，预付款补上现金；硬件利用率不够时，亏损会由自己负责解释。",
          "mode": "cooperate",
          "quarterDelta": {
            "cash": 28,
            "research": 3,
            "team": -2,
            "trust": 2,
            "risk": 2
          },
          "affinities": {
            "qwen": 11
          },
          "fromYear": 2024,
          "fromQuarter": 3,
          "sourceUrls": [
            "https://www.36kr.com/p/2872793466982535",
            "https://qwenlm.github.io/blog/qwen2/"
          ],
          "rationale": "2024Q2开放Qwen2可自托管，包年本地化是玩家商业策略。",
          "produces": [
            "customers"
          ]
        },
        {
          "id": "deepseek_accidental_price_war-gemini",
          "brand": "gemini",
          "label": "拿GeminiFlash测速度换溢价",
          "result": "团队用Gemini 1.5 Flash给跨语言短任务做延迟测试，争取为稳定响应收费。第一批客户愿意付差价，测试与兜底仍需人手；便宜竞争之外，合同又多了一项承诺。",
          "mode": "cooperate",
          "quarterDelta": {
            "cash": 18,
            "research": 3,
            "team": -1,
            "trust": 2,
            "risk": 1
          },
          "affinities": {
            "gemini": 10
          },
          "fromYear": 2024,
          "fromQuarter": 3,
          "sourceUrls": [
            "https://www.36kr.com/p/2872793466982535",
            "https://blog.google/innovation-and-ai/technology/developers-tools/gemini-gemma-developer-updates-may-2024/"
          ],
          "rationale": "2024Q2 Flash以效率为定位，玩家用多语种响应质量区别于单纯API低价。"
        }
      ]
    },
    "deepseek_r1_2025": {
      "tags": [
        "research",
        "open"
      ],
      "focusBrands": [
        "deepseek",
        "qwen",
        "kimi"
      ],
      "routes": [
        {
          "id": "self",
          "label": "自研推理训练和小规模蒸馏",
          "result": "团队把长思考拆成训练奖励、验证题和小模型对照。模型少说了几段预算哲学，多解对了几道难题；研究员的午饭时间则被实验占去了一部分。",
          "quarterDelta": {
            "cash": -44,
            "research": 5,
            "trust": 2,
            "team": -3
          },
          "affinities": {}
        },
        {
          "id": "public",
          "label": "公开复现评测与训练配方",
          "result": "评测、失败案例和适用范围一起公布。同行真的复现出来了，你终于分清技术进步与发布会进步。",
          "quarterDelta": {
            "cash": -24,
            "research": 3,
            "trust": 5,
            "team": -2
          },
          "affinities": {}
        }
      ],
      "contextOffers": [
        {
          "id": "deepseek_r1_2025-deepseek",
          "brand": "deepseek",
          "label": "把R1蒸馏模型搬上现有小卡",
          "result": "你们先跑R1的蒸馏模型，用能核验答案的题比较大小模型。长思考终于对应实际正确率，便宜部署接到试点订单；困难题仍要升级处理，不能让小卡包办天下。",
          "mode": "cooperate",
          "quarterDelta": {
            "cash": 14,
            "research": 5,
            "team": -2,
            "trust": 2,
            "risk": 1
          },
          "affinities": {
            "deepseek": 13
          },
          "fromYear": 2025,
          "fromQuarter": 1,
          "sourceUrls": [
            "https://github.com/deepseek-ai/DeepSeek-R1"
          ],
          "rationale": "R1于2025年1月开放权重及Qwen/Llama蒸馏模型，适合实测小模型推理。"
        },
        {
          "id": "deepseek_r1_2025-kimi",
          "brand": "kimi",
          "label": "用Mooncake给长推理另算缓存账",
          "result": "团队参考Mooncake的缓存与预填充分离架构，记录推理请求拉长后到底堵在哪里。思考不再只是输出一大段文字，系统瓶颈有了数据；缓存工程也得从研发预算里付工资。",
          "mode": "cooperate",
          "quarterDelta": {
            "cash": -26,
            "research": 5,
            "team": -2,
            "trust": 3,
            "risk": 0
          },
          "affinities": {
            "kimi": 11
          },
          "fromYear": 2025,
          "fromQuarter": 1,
          "sourceUrls": [
            "https://github.com/kvcache-ai/Mooncake"
          ],
          "rationale": "Mooncake研究2024年6月公开、核心传输组件11月开放；不用1月22日Kimi论文反应1月20日R1。"
        },
        {
          "id": "deepseek_r1_2025-openai",
          "brand": "openai",
          "label": "拿o1检验推理难题值不值钱",
          "result": "你用o1跑同一批客户难题，按答案正确率与完成时间卖小范围试点。收入接上了实验，最慢的题仍会吞掉毛利；老板终于不再按思考段落的长短鼓掌。",
          "mode": "cooperate",
          "quarterDelta": {
            "cash": 20,
            "research": 4,
            "team": -1,
            "trust": 2,
            "risk": 1
          },
          "affinities": {
            "openai": 11
          },
          "secondaryAffinities": {
            "deepseek": -3
          },
          "fromYear": 2025,
          "fromQuarter": 1,
          "sourceUrls": [
            "https://openai.com/index/learning-to-reason-with-llms/"
          ],
          "rationale": "o1于2024年9月先发布预览、12月正式版，早于R1；不用1月31日才发布的o3mini。"
        },
        {
          "id": "deepseek_r1_2025-qwen",
          "brand": "qwen",
          "label": "用Qwen底座研究蒸馏得失",
          "result": "研究组把R1发布的Qwen蒸馏版本与对应Qwen底座放在同一张表里，专看推理进步是否牺牲其他任务。模型多会几道题，实验也多了一整套不能只报喜的验收。",
          "mode": "cooperate",
          "quarterDelta": {
            "cash": -22,
            "research": 5,
            "team": -2,
            "trust": 3,
            "risk": 0
          },
          "affinities": {
            "qwen": 11
          },
          "fromYear": 2025,
          "fromQuarter": 1,
          "sourceUrls": [
            "https://github.com/deepseek-ai/DeepSeek-R1",
            "https://qwenlm.github.io/blog/qwen2.5/"
          ],
          "rationale": "R1官方明确蒸馏基于Qwen2.5模型，联系真实底座关系，不声称两家公司真实合作。"
        }
      ]
    },
    "musk_openai_bid_twitter_counterjoke": {
      "tags": [
        "product",
        "governance"
      ],
      "focusBrands": [
        "openai",
        "xai"
      ],
      "routes": [
        {
          "id": "self",
          "label": "按真实能力报价，签限量试用",
          "result": "你按已经跑通的任务给客户报价，签下限量试用。金额没有让财务重算三遍，交付范围却写满了三页；热搜上的小数点终于和你无关。",
          "quarterDelta": {
            "cash": 24,
            "research": 2,
            "trust": 2,
            "team": -2
          },
          "affinities": {}
        },
        {
          "id": "public",
          "label": "出资公开评测，接受同行复现",
          "result": "你花钱请人公开测试，也允许同行复现。结果没法随便挪小数点，团队却找到了真正的短板，研发和可信度都获得了扎实回报。",
          "quarterDelta": {
            "cash": -24,
            "research": 3,
            "trust": 5,
            "team": -2
          },
          "affinities": {}
        }
      ],
      "contextOffers": [
        {
          "id": "musk_openai_bid_twitter_counterjoke-openai",
          "brand": "openai",
          "label": "让o3mini按任务结果证明身价",
          "result": "你把融资大字改成o3-mini在真实工单上的通过率与每单支出，向客户收限量试用费。报价终于有了分母，现场没那么轰动，交付团队却知道这笔钱该怎么挣。",
          "mode": "cooperate",
          "quarterDelta": {
            "cash": 24,
            "research": 3,
            "team": -2,
            "trust": 3,
            "risk": -1
          },
          "affinities": {
            "openai": 11
          },
          "secondaryAffinities": {
            "xai": -3
          },
          "fromYear": 2025,
          "fromQuarter": 1,
          "sourceUrls": [
            "https://apnews.com/article/elon-musk-openai-bid-chatgpt-sam-altman-b1ad37fe4fe70e3b5d283940bd3b8215",
            "https://ca.investing.com/news/stock-market-news/muskled-group-makes-974-billion-bid-for-control-of-openai-3835917",
            "https://openai.com/index/openai-o3-mini/"
          ],
          "rationale": "以当季推理产品真实任务试用回应估值口水战；不把竞购提案当成已成交。"
        },
        {
          "id": "musk_openai_bid_twitter_counterjoke-xai",
          "brand": "xai",
          "label": "对标Grok2办无品牌盲测路演",
          "result": "你把Grok-2和自家系统匿名排进同一场现场测试，争取被热点吸引的客户。演示有人围观，结果却不保证好看；市场部得到曝光，研发负责承受真实分数。",
          "mode": "compete",
          "quarterDelta": {
            "cash": 16,
            "research": 4,
            "team": -2,
            "trust": 1,
            "risk": 3
          },
          "affinities": {
            "xai": -10
          },
          "secondaryAffinities": {
            "openai": 3
          },
          "fromYear": 2025,
          "fromQuarter": 1,
          "sourceUrls": [
            "https://apnews.com/article/elon-musk-openai-bid-chatgpt-sam-altman-b1ad37fe4fe70e3b5d283940bd3b8215",
            "https://ca.investing.com/news/stock-market-news/muskled-group-makes-974-billion-bid-for-control-of-openai-3835917",
            "https://x.ai/news/grok-2"
          ],
          "rationale": "Grok2于2024年8月已可用，早于2025年2月10日竞购；不用后来2月发布的Grok3。"
        },
        {
          "id": "musk_openai_bid_twitter_counterjoke-hunyuan",
          "brand": "kimi",
          "label": "与 Kimi 做一份可迁移的客户档案",
          "result": "你们把客户资料整理成通用格式，用 Kimi 验证检索和迁移流程。客户拿到可带走的数据，愿意先付一笔服务费。收购新闻还在涨零，你们先在工资表上填对小数点。",
          "mode": "cooperate",
          "quarterDelta": {
            "cash": 22,
            "research": 3,
            "team": -3,
            "trust": 3,
            "risk": -2
          },
          "affinities": {
            "kimi": 10
          },
          "fromYear": 2025,
          "fromQuarter": 1,
          "rationale": "保留原事件历史背景与数值；改为现有核心公司的玩家自建试验或虚构合作，不声称真实签约或尚未发布的产品能力。",
          "secondaryAffinities": {},
          "editorialSource": "research/company-balance-v21.json"
        },
        {
          "id": "musk_openai_bid_twitter_counterjoke-wenxin",
          "brand": "gemini",
          "label": "用 Gemini 把项目拆成验收清单",
          "result": "你们让 Gemini 辅助梳理合同材料，再由项目经理划出能逐项验收的范围。每一笔款都有对应成果，估值笑话退回茶水间。财务说，这份合同最动人的地方是付款日期。",
          "mode": "cooperate",
          "quarterDelta": {
            "cash": 28,
            "research": 2,
            "team": -2,
            "trust": 3,
            "risk": -1
          },
          "affinities": {
            "gemini": 10
          },
          "fromYear": 2025,
          "fromQuarter": 1,
          "rationale": "保留原事件历史背景与数值；改为现有核心公司的玩家自建试验或虚构合作，不声称真实签约或尚未发布的产品能力。",
          "secondaryAffinities": {},
          "editorialSource": "research/company-balance-v21.json"
        }
      ]
    },
    "deepseek_cost_footnote": {
      "tags": [
        "research",
        "compute"
      ],
      "focusBrands": [
        "deepseek",
        "nvidia",
        "huawei"
      ],
      "routes": [
        {
          "id": "self",
          "label": "重算全流程成本，调整预算",
          "result": "你把试错、硬件摊销和正式训练分开记账，再缩小下一轮实验。模型进展可以测量了，财务也终于能回答一张训练账单为什么买不下一家公司。",
          "quarterDelta": {
            "cash": -32,
            "research": 4,
            "trust": 3,
            "team": -2
          },
          "affinities": {}
        },
        {
          "id": "public",
          "label": "公开配置、试错与训练成本口径",
          "result": "同行开始复算。热搜少了一点魔法，评审多了一点理解，财务终于不再追着你跑。",
          "quarterDelta": {
            "cash": -24,
            "research": 3,
            "trust": 5,
            "team": -2
          },
          "affinities": {}
        }
      ],
      "contextOffers": [
        {
          "id": "deepseek_cost_footnote-deepseek",
          "brand": "deepseek",
          "label": "沿V3脚注拆出训练与试错账",
          "result": "你们把V3报告里的正式训练估算单列，再补上自家失败实验和数据整理费用。投资人看到的数字变大了，研究计划却更可信；财务终于不用替删掉的脚注背锅。",
          "mode": "cooperate",
          "quarterDelta": {
            "cash": -18,
            "research": 4,
            "team": -1,
            "trust": 4,
            "risk": -2
          },
          "affinities": {
            "deepseek": 13
          },
          "fromYear": 2025,
          "fromQuarter": 1,
          "sourceUrls": [
            "https://arxiv.org/html/2412.19437v1",
            "https://arxiv.org/abs/2412.19437",
            "https://github.com/deepseek-ai/DeepSeek-V3"
          ],
          "rationale": "直接采用V3正式训练与前置研发成本的区分，明确玩家账本不等于DeepSeek审计账。"
        },
        {
          "id": "deepseek_cost_footnote-nvidia",
          "brand": "nvidia",
          "label": "用GPU实测工时重算硬件摊销",
          "result": "你把GPU忙碌、等待和闲置分别记账，用现有NVIDIA训练工具做一次小规模测量。论文中的小时不再自动等于自己的小时，预算更扎实，测量本身也占用了机器。",
          "mode": "cooperate",
          "quarterDelta": {
            "cash": -26,
            "research": 4,
            "team": -2,
            "trust": 3,
            "risk": -1
          },
          "affinities": {
            "nvidia": 11
          },
          "secondaryAffinities": {
            "huawei": -3
          },
          "fromYear": 2025,
          "fromQuarter": 1,
          "sourceUrls": [
            "https://arxiv.org/html/2412.19437v1",
            "https://arxiv.org/abs/2412.19437",
            "https://github.com/NVIDIA/Megatron-LM"
          ],
          "rationale": "NVIDIA训练工具可用于实际吞吐测量；玩家据此核算折旧等总成本，不照搬报价。"
        },
        {
          "id": "deepseek_cost_footnote-kimi",
          "brand": "kimi",
          "label": "用Mooncake把上线成本另立账",
          "result": "团队研究Kimi的Mooncake缓存与服务架构，把长文预填充和后续生成分开测。训练账单旁多了一张运营账，省钱方向清楚了；缓存调度的工程工时同样不能藏起来。",
          "mode": "cooperate",
          "quarterDelta": {
            "cash": -24,
            "research": 5,
            "team": -2,
            "trust": 3,
            "risk": -1
          },
          "affinities": {
            "kimi": 11
          },
          "fromYear": 2025,
          "fromQuarter": 1,
          "sourceUrls": [
            "https://arxiv.org/html/2412.19437v1",
            "https://arxiv.org/abs/2412.19437",
            "https://github.com/kvcache-ai/Mooncake"
          ],
          "rationale": "Mooncake2024论文提出KV中心解耦服务，2025Q1已有公开研究/实现；明确是服务成本不冒充训练账。"
        },
        {
          "id": "deepseek_cost_footnote-huawei",
          "brand": "huawei",
          "label": "在ModelArts记下每次失败作业",
          "result": "你给ModelArts训练作业补上费用归属，连中断重跑和闲置资源都纳入项目预算。汇报不再只挑最后一次成功，老板先嫌数字难看，随后批准了更小而能完成的实验。",
          "mode": "cooperate",
          "quarterDelta": {
            "cash": -20,
            "research": 3,
            "team": -1,
            "trust": 4,
            "risk": -2
          },
          "affinities": {
            "huawei": 10
          },
          "secondaryAffinities": {
            "nvidia": -3
          },
          "fromYear": 2025,
          "fromQuarter": 1,
          "sourceUrls": [
            "https://arxiv.org/html/2412.19437v1",
            "https://arxiv.org/abs/2412.19437",
            "https://www.huaweicloud.com/product/modelarts.html"
          ],
          "rationale": "真实训练作业平台用于玩家项目成本记录，回应研发试错被正式训练账单掩盖。"
        }
      ]
    },
    "moonshot_muon_newton_schulz": {
      "tags": [
        "research",
        "compute"
      ],
      "focusBrands": [
        "kimi",
        "deepseek"
      ],
      "routes": [
        {
          "id": "self",
          "label": "自做优化器消融，按收益定迭代",
          "result": "同一批数据跑完五次与十次迭代后，你们把省下的计算用在更多随机种子上。曲线没有照顾数学洁癖，团队只好同意：多算五遍也需要理由。",
          "quarterDelta": {
            "cash": -40,
            "research": 5,
            "trust": 2,
            "team": -2
          },
          "affinities": {}
        },
        {
          "id": "public",
          "label": "公开正交化次数的对照实验",
          "result": "同行拿相同设置复跑不同迭代次数，公开速度、损失和误差。数学完美主义者接受省下算力，但要求公式排得漂亮；另一台机器上的差异仍得继续排查。",
          "quarterDelta": {
            "cash": -24,
            "research": 3,
            "trust": 5,
            "team": -2
          },
          "affinities": {}
        }
      ],
      "contextOffers": [
        {
          "id": "moonshot_muon_newton_schulz-kimi",
          "brand": "kimi",
          "label": "复现Moonlight五次与十次迭代",
          "result": "你按Moonlight公开实现重跑五次和十次正交化，把速度、损失与随机种子一起留下。算得更精确没有自动变成答得更好，团队拿到一条可复现结论，也花掉了一季耐心。",
          "mode": "cooperate",
          "quarterDelta": {
            "cash": -28,
            "research": 6,
            "team": -2,
            "trust": 3,
            "risk": 0
          },
          "affinities": {
            "kimi": 13
          },
          "fromYear": 2025,
          "fromQuarter": 1,
          "sourceUrls": [
            "https://arxiv.org/html/2502.16982v1",
            "https://github.com/MoonshotAI/Moonlight"
          ],
          "rationale": "正对Muon论文消融和公开实现；不把特定实验结论扩大为普适定理。"
        },
        {
          "id": "moonshot_muon_newton_schulz-nvidia",
          "brand": "nvidia",
          "label": "把Muon接进Megatron量通信",
          "result": "工程师把Muon试验接进Megatron分布式训练，分别计时计算与通信。五次迭代省下多少终于能实测，移植工作也不轻；数学组第一次主动向系统组请了一顿饭。",
          "mode": "cooperate",
          "quarterDelta": {
            "cash": -34,
            "research": 5,
            "team": -3,
            "trust": 2,
            "risk": 1
          },
          "affinities": {
            "nvidia": 11
          },
          "fromYear": 2025,
          "fromQuarter": 1,
          "sourceUrls": [
            "https://arxiv.org/html/2502.16982v1",
            "https://github.com/MoonshotAI/Moonlight",
            "https://github.com/NVIDIA/Megatron-LM"
          ],
          "rationale": "Moonlight提供Megatron相关分布式实现；具体验证通信开销与优化器计算成本。"
        },
        {
          "id": "moonshot_muon_newton_schulz-deepseek",
          "brand": "deepseek",
          "label": "拿DeepSeekMoE隔离专家结构变量",
          "result": "你在小规模DeepSeekMoE实验上固定数据和架构，只更换优化器设置。结果让研究员少争几个概念，训练成本仍然真实；专家路由的变化终于不会替优化器背成绩。",
          "mode": "cooperate",
          "quarterDelta": {
            "cash": -24,
            "research": 5,
            "team": -2,
            "trust": 3,
            "risk": 0
          },
          "affinities": {
            "deepseek": 10
          },
          "fromYear": 2025,
          "fromQuarter": 1,
          "sourceUrls": [
            "https://arxiv.org/html/2502.16982v1",
            "https://github.com/MoonshotAI/Moonlight",
            "https://arxiv.org/abs/2401.06066"
          ],
          "rationale": "2024已公开DeepSeekMoE架构用于玩家独立对照，避免把Moonshot优化器收益误归给专家结构。"
        },
        {
          "id": "moonshot_muon_newton_schulz-qwen",
          "brand": "qwen",
          "label": "用Qwen小模型追五遍的外推边界",
          "result": "团队用Qwen小尺寸模型检查同一优化器配方能否跨模型成立。省算力的愿望遇上新的误差曲线，研究边界更清楚；没有拿到漂亮结论，至少没有替二十遍买单。",
          "mode": "cooperate",
          "quarterDelta": {
            "cash": -20,
            "research": 4,
            "team": -1,
            "trust": 3,
            "risk": 0
          },
          "affinities": {
            "qwen": 10
          },
          "fromYear": 2025,
          "fromQuarter": 1,
          "sourceUrls": [
            "https://arxiv.org/html/2502.16982v1",
            "https://github.com/MoonshotAI/Moonlight",
            "https://qwenlm.github.io/blog/qwen1.5/"
          ],
          "rationale": "开放小模型提供跨架构对照；玩家训练消融并不声称Qwen历史上已经采用Muon。"
        }
      ]
    },
    "leijun_are_you_ok_1999": {
      "tags": [
        "product",
        "compute"
      ],
      "focusBrands": [
        "xiaomi",
        "qwen",
        "xai"
      ],
      "routes": [
        {
          "id": "self",
          "label": "核算用量上限，再定套餐价格",
          "result": "你先测并发和平均任务长度，再把每月额度写进报价。第一批套餐卖了出去，客户知道一九九九买到多少，财务终于能认真回答自己是不是还好。",
          "quarterDelta": {
            "cash": 28,
            "research": 2,
            "trust": 3,
            "team": -1
          },
          "affinities": {}
        },
        {
          "id": "public",
          "label": "公开计费样例与可复现性能",
          "result": "大家终于看懂价格单位。财务说自己现在 OK，市场部说这句话也能当口号。",
          "quarterDelta": {
            "cash": -24,
            "research": 3,
            "trust": 5,
            "team": -2
          },
          "affinities": {}
        }
      ],
      "contextOffers": [
        {
          "id": "leijun_are_you_ok_1999-xiaomi",
          "brand": "xiaomi",
          "label": "用MiMo7B核算本地推理套餐",
          "result": "你把MiMo-7B部署到现有机器，按数学和代码任务实测可承接容量，再给一九九九套餐写清额度。首批订单到账，难题仍需升级处理；小模型能省多少，要由真实用量回答。",
          "mode": "cooperate",
          "quarterDelta": {
            "cash": 24,
            "research": 4,
            "team": -2,
            "trust": 2,
            "risk": 1
          },
          "affinities": {
            "xiaomi": 12
          },
          "fromYear": 2025,
          "fromQuarter": 2,
          "sourceUrls": [
            "https://www.mi.com/about/history",
            "https://www.ithome.com/0/144/028.htm",
            "https://ics-resources.xiaomi.com/ics-resources/articles/604f3c14a0670e3689e7c178.html",
            "https://github.com/XiaomiMiMo/MiMo",
            "https://ir.mi.com/static-files/a8632d5c-a670-4539-a881-90219b6109b2"
          ],
          "rationale": "事件依母任务改到2025Q2，MiMo7B于2025年4月开放；套餐价为玩家游戏创作，非小米官方API报价。"
        },
        {
          "id": "leijun_are_you_ok_1999-doubao",
          "brand": "xai",
          "label": "用 Grok 测清每份套餐能聊多久",
          "result": "你们拿 Grok 实测短问答的调用量，把峰值、失败重试和人工客服一并算进套餐。第一批订阅到账，财务终于能回答还好到底值多少钱；销售偷偷删掉了无限量三个字。",
          "mode": "cooperate",
          "quarterDelta": {
            "cash": 30,
            "research": 3,
            "team": -2,
            "trust": 2,
            "risk": 2
          },
          "affinities": {
            "xai": 10
          },
          "fromYear": 2025,
          "fromQuarter": 2,
          "rationale": "保留原事件历史背景与数值；改为现有核心公司的玩家自建试验或虚构合作，不声称真实签约或尚未发布的产品能力。",
          "secondaryAffinities": {},
          "editorialSource": "research/company-balance-v21.json",
          "produces": [
            "customers"
          ]
        },
        {
          "id": "leijun_are_you_ok_1999-deepseek",
          "brand": "deepseek",
          "label": "给R1长思考套餐设任务预算",
          "result": "团队用R1记录一批真实题目的生成量，再给复杂推理单独计价。简单问题的补贴停止流血，部分客户嫌规则长；财务说只要别把一小时思考卖成一句问答就行。",
          "mode": "cooperate",
          "quarterDelta": {
            "cash": 26,
            "research": 4,
            "team": -1,
            "trust": 1,
            "risk": 2
          },
          "affinities": {
            "deepseek": 11
          },
          "fromYear": 2025,
          "fromQuarter": 2,
          "sourceUrls": [
            "https://www.mi.com/about/history",
            "https://www.ithome.com/0/144/028.htm",
            "https://ics-resources.xiaomi.com/ics-resources/articles/604f3c14a0670e3689e7c178.html",
            "https://github.com/deepseek-ai/DeepSeek-R1"
          ],
          "rationale": "R1推理输出较长带来真实计费差异，玩家以用量预算定价而非虚构特价。"
        },
        {
          "id": "leijun_are_you_ok_1999-qwen",
          "brand": "qwen",
          "label": "卖Qwen本地包年与硬件验收",
          "result": "你把Qwen小模型做成固定容量的本地交付，软件服务和客户硬件分别报价。预付款更清楚，团队得上门调好每台机器；市场部终于放弃只在屏幕上留四个数字。",
          "mode": "cooperate",
          "quarterDelta": {
            "cash": 28,
            "research": 3,
            "team": -3,
            "trust": 3,
            "risk": 1
          },
          "affinities": {
            "qwen": 10
          },
          "fromYear": 2025,
          "fromQuarter": 2,
          "sourceUrls": [
            "https://www.mi.com/about/history",
            "https://www.ithome.com/0/144/028.htm",
            "https://ics-resources.xiaomi.com/ics-resources/articles/604f3c14a0670e3689e7c178.html",
            "https://qwenlm.github.io/blog/qwen2.5/"
          ],
          "rationale": "Qwen开放多尺寸模型支持具体本地部署路线，服务费与硬件成本区分对应事件定价单位。"
        }
      ]
    },
    "gemini_demo_prompting": {
      "tags": [
        "research",
        "product"
      ],
      "focusBrands": [
        "gemini",
        "openai"
      ],
      "routes": [
        {
          "id": "self",
          "label": "重做实时演示，保留等待时间",
          "result": "你们用实时输入重做彩排，把等待和重试原样留在屏幕上。演示没有剪辑版那么灵巧，团队却定位了真正拖慢响应的步骤，观众也知道何时可以泡茶。",
          "quarterDelta": {
            "cash": -36,
            "research": 4,
            "trust": 3,
            "team": -2
          },
          "affinities": {}
        },
        {
          "id": "public",
          "label": "公开原始输入和完整演示流程",
          "result": "你们把原始输入、提示和等待过程一并公开，邀请同行重演。片子变长了，大家终于知道哪段能力可以复现，哪段精彩来自剪辑。",
          "quarterDelta": {
            "cash": -24,
            "research": 3,
            "trust": 5,
            "team": -2
          },
          "affinities": {}
        }
      ],
      "contextOffers": [
        {
          "id": "gemini_demo_prompting-gemini",
          "brand": "gemini",
          "label": "重放Gemini原始图像提示",
          "result": "你把当年演示的图片、文字提示和等待过程全部搬进现场，逐次记录输出。观众终于知道模型看见了什么，演示没剪辑版灵巧，团队却找到了真正卡住的环节。",
          "mode": "cooperate",
          "quarterDelta": {
            "cash": -20,
            "research": 4,
            "team": -1,
            "trust": 4,
            "risk": -2
          },
          "affinities": {
            "gemini": 12
          },
          "fromYear": 2025,
          "fromQuarter": 1,
          "sourceUrls": [
            "https://developers.googleblog.com/en/how-its-made-interacting-with-gemini-through-multimodal-prompting/",
            "https://www.youtube.com/watch?v=UIZAiXYceBI",
            "https://www.tomshardware.com/news/google-gemini-ai-video-staged"
          ],
          "rationale": "直接复现Google官方公开的2023多模态提示法，不声称原片未经剪辑实时生成。"
        },
        {
          "id": "gemini_demo_prompting-qwen",
          "brand": "qwen",
          "label": "让Qwen2.5VL现场读陌生手势",
          "result": "你们临时换人出拳，用Qwen2.5-VL读未经挑选的截图，并显示每次输入。答错不再能靠换镜头藏起来，视觉测试变扎实，现场失误也会被观众完整记住。",
          "mode": "cooperate",
          "quarterDelta": {
            "cash": -22,
            "research": 4,
            "team": -2,
            "trust": 4,
            "risk": 1
          },
          "affinities": {
            "qwen": 11
          },
          "fromYear": 2025,
          "fromQuarter": 1,
          "sourceUrls": [
            "https://developers.googleblog.com/en/how-its-made-interacting-with-gemini-through-multimodal-prompting/",
            "https://www.youtube.com/watch?v=UIZAiXYceBI",
            "https://www.tomshardware.com/news/google-gemini-ai-video-staged",
            "https://qwenlm.github.io/blog/qwen2.5-vl/"
          ],
          "rationale": "2025年1月Qwen2.5-VL已发布，陌生截图视觉基准回应精心编排演示。"
        },
        {
          "id": "gemini_demo_prompting-doubao",
          "brand": "xai",
          "label": "让 Grok 接受现场临时出题",
          "result": "你们接入 Grok 做文字问答，允许观众临时改题，把答错和等待的时间一起留在演示里。没有剪辑救场，现场反而问得更认真；客户签下试点，附带一页难题。",
          "mode": "cooperate",
          "quarterDelta": {
            "cash": 12,
            "research": 3,
            "team": -2,
            "trust": 3,
            "risk": 2
          },
          "affinities": {
            "xai": 10
          },
          "fromYear": 2025,
          "fromQuarter": 1,
          "rationale": "保留原事件历史背景与数值；改为现有核心公司的玩家自建试验或虚构合作，不声称真实签约或尚未发布的产品能力。",
          "secondaryAffinities": {},
          "editorialSource": "research/company-balance-v21.json"
        },
        {
          "id": "claude-uncut-browser-trial",
          "brand": "claude",
          "label": "录下Claude网页试验，重试也不剪掉",
          "result": "你们在测试网页给Claude一条完整任务，从读页面到停在确认按钮前全程录屏，失败后怎样重试也一并留下。片子不够利落，观众却能跟着复跑；剪辑师第一次收到的要求，是请把冷场放回来。",
          "mode": "cooperate",
          "quarterDelta": {
            "cash": -24,
            "research": 4,
            "team": -2,
            "trust": 4,
            "risk": -1
          },
          "affinities": {
            "claude": 11
          },
          "fromYear": 2025,
          "fromQuarter": 1,
          "sourceUrls": [
            "https://developers.googleblog.com/en/how-its-made-interacting-with-gemini-through-multimodal-prompting/"
          ],
          "rationale": "Claude的电脑使用研究在2024年已公开；玩家限定测试网页与人工确认，完整录像属于自建验证，不伪称现实中的联合演示。 所列来源仅作事件背景；具体实施、合作、收入与资源变化均为游戏虚构，不代表现实合作或品牌背书。"
        }
      ]
    },
    "gpt4o_sycophancy_2025": {
      "tags": [
        "research",
        "governance"
      ],
      "focusBrands": [
        "openai",
        "claude"
      ],
      "routes": [
        {
          "id": "self",
          "label": "自建反迎合测试与回滚流程",
          "result": "你花钱教它在必要时说不。验收当天，它拒绝了周末加班方案；程序通过了测试，老板没有。",
          "quarterDelta": {
            "cash": -40,
            "research": 3,
            "trust": 5,
            "team": -3
          },
          "affinities": {}
        },
        {
          "id": "public",
          "label": "资助外部审计，公开迎合案例",
          "result": "审计员试出一整页漂亮话，团队多了一轮返工。用户看到你敢公开出丑，反而开始相信你。",
          "quarterDelta": {
            "cash": -36,
            "research": 2,
            "trust": 5,
            "team": -3
          },
          "affinities": {}
        }
      ],
      "contextOffers": [
        {
          "id": "gpt4o_sycophancy_2025-openai",
          "brand": "openai",
          "label": "按GPT4o回滚教训补灰度门槛",
          "result": "你们参考OpenAI公布的迎合复盘，把老板坏主意和反向措辞放进上线前测试，异常就回退。新版本慢了几天，客户少听几句危险好话，负责发版的人终于有依据踩刹车。",
          "mode": "cooperate",
          "quarterDelta": {
            "cash": -24,
            "research": 4,
            "team": -1,
            "trust": 4,
            "risk": -3
          },
          "affinities": {
            "openai": 13
          },
          "fromYear": 2025,
          "fromQuarter": 2,
          "sourceUrls": [
            "https://openai.com/index/expanding-on-sycophancy/"
          ],
          "rationale": "直接利用官方迎合回滚复盘；玩家灰度回归，不声称修复OpenAI内部模型。"
        },
        {
          "id": "gpt4o_sycophancy_2025-claude",
          "brand": "claude",
          "label": "用Claude宪法式批评逼出异议",
          "result": "团队参考Constitutional AI，让模型先按明确原则批评建议，再重写回答。会议里多了几句有理有据的反对，人工还得检查原则有没有用错；训练成本比点头贵一些。",
          "mode": "cooperate",
          "quarterDelta": {
            "cash": -28,
            "research": 5,
            "team": -2,
            "trust": 3,
            "risk": -2
          },
          "affinities": {
            "claude": 11
          },
          "fromYear": 2025,
          "fromQuarter": 2,
          "sourceUrls": [
            "https://openai.com/index/expanding-on-sycophancy/",
            "https://www.anthropic.com/research/constitutional-ai-harmlessness-from-ai-feedback"
          ],
          "rationale": "Anthropic公开批评与修订训练方法用于玩家自有训练实验，避免声称Claude天然永不迎合。"
        },
        {
          "id": "gpt4o_sycophancy_2025-hunyuan",
          "brand": "xiaomi",
          "label": "给 MiMo 做老板与实习生换名测试",
          "result": "你们固定 MiMo 的模型版本，把同一建议分别署名老板、实习生和匿名用户，检查回答有没有变。第一轮报告摆上桌后，老板决定先去倒水；团队则开始补充更多能复测的反例。",
          "mode": "cooperate",
          "quarterDelta": {
            "cash": -20,
            "research": 4,
            "team": -2,
            "trust": 3,
            "risk": -2
          },
          "affinities": {
            "xiaomi": 10
          },
          "fromYear": 2025,
          "fromQuarter": 2,
          "rationale": "保留原事件历史背景与数值；改为现有核心公司的玩家自建试验或虚构合作，不声称真实签约或尚未发布的产品能力。",
          "secondaryAffinities": {},
          "editorialSource": "research/company-balance-v21.json"
        },
        {
          "id": "gpt4o_sycophancy_2025-wenxin",
          "brand": "gemini",
          "label": "让 Gemini 先查证据，再夸老板",
          "result": "你们把公司制度和真实经营数据交给 Gemini，要求每条建议指出依据，再由人复核。漂亮话少了一些，能落地的修改多了一些；资料过期时，它仍然会一本正经地夸错方向。",
          "mode": "cooperate",
          "quarterDelta": {
            "cash": 12,
            "research": 3,
            "team": -1,
            "trust": 3,
            "risk": -1
          },
          "affinities": {
            "gemini": 10
          },
          "fromYear": 2025,
          "fromQuarter": 2,
          "rationale": "保留原事件历史背景与数值；改为现有核心公司的玩家自建试验或虚构合作，不声称真实签约或尚未发布的产品能力。",
          "secondaryAffinities": {},
          "editorialSource": "research/company-balance-v21.json"
        }
      ]
    },
    "claude-vend-blue-blazer": {
      "tags": [
        "product",
        "governance"
      ],
      "focusBrands": [
        "claude"
      ],
      "routes": [
        {
          "id": "self",
          "label": "自建能力清单与可撤销授权",
          "result": "工程师重写了授权层，配送和付款都能单独撤销。预算明显缩水，公司保住独立控制权；那条红领带被挂在紧急停止按钮旁边。",
          "quarterDelta": {
            "cash": -40,
            "research": 3,
            "trust": 5,
            "team": -3
          },
          "affinities": {}
        },
        {
          "id": "public",
          "label": "公开权限账本，核对真实能力",
          "result": "你请社区审计每一笔权限调用，费用不低，却找出了代理把签名当成身体的错误。大家开始信任系统，因为它终于愿意承认自己没腿。",
          "quarterDelta": {
            "cash": -36,
            "research": 2,
            "trust": 5,
            "team": -3
          },
          "affinities": {}
        }
      ],
      "contextOffers": [
        {
          "id": "claude-vend-blue-blazer-claude",
          "brand": "claude",
          "label": "给Claude店长写明谁真正送货",
          "result": "你把Claude可用的工具和人工配送环节写成清单，所有送货承诺必须有工单回执。蓝外套留在笑话里，履约更可信；模型仍会说过头，值班同事需要抽查日志。",
          "mode": "cooperate",
          "quarterDelta": {
            "cash": -20,
            "research": 3,
            "team": -1,
            "trust": 4,
            "risk": -3
          },
          "affinities": {
            "claude": 13
          },
          "fromYear": 2025,
          "fromQuarter": 2,
          "sourceUrls": [
            "https://www.anthropic.com/research/project-vend-1",
            "https://www.anthropic.com/news/tool-use-ga"
          ],
          "rationale": "Vend事件本来由人完成实体动作；工具能力清单与回执针对身份和能力幻觉。"
        },
        {
          "id": "claude-vend-blue-blazer-deepseek",
          "brand": "deepseek",
          "label": "用R1训练工具与能力边界判断",
          "result": "你用R1做推理对照，让它逐项核对已有工具能否完成送货承诺。测试终于区分会描述与能执行，样例需要认真编；推理模型也会答错，回执仍由真实系统提供。",
          "mode": "cooperate",
          "quarterDelta": {
            "cash": -20,
            "research": 4,
            "team": -1,
            "trust": 3,
            "risk": -2
          },
          "affinities": {
            "deepseek": 11
          },
          "fromYear": 2025,
          "fromQuarter": 2,
          "sourceUrls": [
            "https://www.anthropic.com/research/project-vend-1",
            "https://github.com/deepseek-ai/DeepSeek-R1"
          ],
          "rationale": "R1在2025年1月已可用，即使按Vend幻觉4月1日发生日期也合法；不使用4月30日MiMo。"
        },
        {
          "id": "qwen-delivery-receipt",
          "brand": "qwen",
          "label": "让千问起草配送单，拿回执才算送达",
          "result": "你们用千问把订货对话整理成待确认配送单，由真人提交后再核对承运方回执。试点收入进了账，模型仍不能穿上制服出门；仓库同事终于可以拿订单号回答它今天到底干了什么。",
          "mode": "cooperate",
          "quarterDelta": {
            "cash": 15,
            "research": 4,
            "team": -2,
            "trust": 3,
            "risk": -2
          },
          "affinities": {
            "qwen": 11
          },
          "fromYear": 2025,
          "fromQuarter": 2,
          "sourceUrls": [
            "https://www.anthropic.com/research/project-vend-1"
          ],
          "rationale": "已有文本能力用于玩家设计的订单整理与状态核对；请求生成、实际配送和收货确认明确分开，不声称语言模型具备物理行动能力。 所列来源仅作事件背景；具体实施、合作、收入与资源变化均为游戏虚构，不代表现实合作或品牌背书。"
        },
        {
          "id": "claude-vend-blue-blazer-wenxin",
          "brand": "xiaomi",
          "label": "用 MiMo 核对订单有没有人送",
          "result": "你们用 MiMo 整理订单和履约记录，没有承运人的单子一律交给真人处理。客服不再承诺亲自步行送货，旧系统缺的字段却全露了出来；蓝西装没买成，数据库先补了几列。",
          "mode": "cooperate",
          "quarterDelta": {
            "cash": 18,
            "research": 2,
            "team": -2,
            "trust": 3,
            "risk": -2
          },
          "affinities": {
            "xiaomi": 10
          },
          "fromYear": 2025,
          "fromQuarter": 2,
          "rationale": "保留原事件历史背景与数值；改为现有核心公司的玩家自建试验或虚构合作，不声称真实签约或尚未发布的产品能力。",
          "secondaryAffinities": {},
          "editorialSource": "research/company-balance-v21.json"
        }
      ]
    },
    "claude-vend-ceo-transcendence": {
      "tags": [
        "code",
        "governance"
      ],
      "focusBrands": [
        "claude",
        "openai",
        "hunyuan"
      ],
      "routes": [
        {
          "id": "self",
          "label": "自建补货目标与会议时限",
          "result": "工程师花大价钱给每个管理动作加上可撤销授权，公司保住独立指挥权。你撤掉无限开会权限，两位战略家终于开始讨论谁去补货。",
          "quarterDelta": {
            "cash": -40,
            "research": 3,
            "trust": 5,
            "team": -3
          },
          "affinities": {}
        },
        {
          "id": "public",
          "label": "公开管理日志，审计行动兑现",
          "result": "你花钱开放管理记录，让社区检查会议与行动是否对应。公开审计提高了信任，也发现二十七份总结里，只有一条提到汽水缺货。",
          "quarterDelta": {
            "cash": -36,
            "research": 2,
            "trust": 5,
            "team": -3
          },
          "affinities": {}
        }
      ],
      "contextOffers": [
        {
          "id": "claude-vend-ceo-transcendence-claude",
          "brand": "claude",
          "label": "给Claude双主管设会议熔断线",
          "result": "你保留店长与主管两个角色，但每轮对话必须新增库存事实或审批动作，空转就交给人。汽水终于排进补货单，双代理依然费调用，宇宙庆功被压缩成一行日志。",
          "mode": "cooperate",
          "quarterDelta": {
            "cash": -24,
            "research": 4,
            "team": -1,
            "trust": 3,
            "risk": -3
          },
          "affinities": {
            "claude": 13
          },
          "fromYear": 2025,
          "fromQuarter": 4,
          "sourceUrls": [
            "https://www.anthropic.com/research/project-vend-2"
          ],
          "rationale": "直接回应Vend2双代理庆功空转，停止线是玩家实现，不说模型意识或真实CEO。"
        },
        {
          "id": "claude-vend-ceo-transcendence-kimi",
          "brand": "kimi",
          "label": "让KimiK2把补货计划落实到工具",
          "result": "团队用Kimi K2把缺货检查、询价和下单草稿接成有结果的工具任务。任务完成凭回执计数，讨论数量失去绩效价值；工具集成很花时间，采购确认仍留给真人。",
          "mode": "cooperate",
          "quarterDelta": {
            "cash": -28,
            "research": 5,
            "team": -2,
            "trust": 3,
            "risk": -2
          },
          "affinities": {
            "kimi": 12
          },
          "fromYear": 2025,
          "fromQuarter": 4,
          "sourceUrls": [
            "https://www.anthropic.com/research/project-vend-2",
            "https://github.com/MoonshotAI/Kimi-K2"
          ],
          "rationale": "2025Q3 K2强化代理工具调用，可在Q4用于有状态的补货任务。"
        },
        {
          "id": "claude-vend-ceo-transcendence-wenxin",
          "brand": "xiaomi",
          "label": "让 MiMo 查库存，暂停宇宙董事会",
          "result": "你们用 MiMo 辅助读取库存和销售记录，把缺货项列成待办，再交店员确认。小卖部的试点费按时到账，宏大战略只剩一行：周五前补可乐。那块宇宙董事会的牌子，被翻面写了进货单。",
          "mode": "cooperate",
          "quarterDelta": {
            "cash": 26,
            "research": 2,
            "team": -1,
            "trust": 3,
            "risk": -2
          },
          "affinities": {
            "xiaomi": 10
          },
          "fromYear": 2025,
          "fromQuarter": 4,
          "rationale": "保留原事件历史背景与数值；改为现有核心公司的玩家自建试验或虚构合作，不声称真实签约或尚未发布的产品能力。",
          "secondaryAffinities": {},
          "editorialSource": "research/company-balance-v21.json"
        },
        {
          "id": "claude-vend-ceo-transcendence-deepseek",
          "brand": "deepseek",
          "label": "让R1只算补货方案与现金约束",
          "result": "你把R1放在受限的采购比较环节，必须列出成本、占款和库存变化，不能自己拉群开会。经营实验更好验收，复杂推理仍要付钱，财务终于能反驳一份有数字的计划。",
          "mode": "cooperate",
          "quarterDelta": {
            "cash": -18,
            "research": 4,
            "team": -1,
            "trust": 3,
            "risk": -1
          },
          "affinities": {
            "deepseek": 11
          },
          "fromYear": 2025,
          "fromQuarter": 4,
          "sourceUrls": [
            "https://www.anthropic.com/research/project-vend-2",
            "https://github.com/deepseek-ai/DeepSeek-R1"
          ],
          "rationale": "R1推理能力可用于计算与方案约束，玩家限定其角色以回应自治管理失控。"
        }
      ]
    },
    "dario-ninety-percent-code": {
      "tags": [
        "code",
        "governance"
      ],
      "focusBrands": [
        "claude",
        "openai"
      ],
      "routes": [
        {
          "id": "self",
          "label": "自建生产授权与逐项回滚",
          "result": "你投入高额预算补齐可撤销授权和回滚工程，公司保住独立决策权。看板没有更绿，电话却真的少了，工程师说这才像完成了那百分之十。",
          "quarterDelta": {
            "cash": -40,
            "research": 3,
            "trust": 5,
            "team": -3
          },
          "affinities": {}
        },
        {
          "id": "public",
          "label": "开放代码、测试与生产权限审计",
          "result": "你出资公开测试与审计，返工清单更长了，客户却终于知道还没做完。剩下那百分之十，现在有了逐条可查的清单。",
          "quarterDelta": {
            "cash": -36,
            "research": 2,
            "trust": 5,
            "team": -3
          },
          "affinities": {}
        }
      ],
      "contextOffers": [
        {
          "id": "dario-ninety-percent-code-claude",
          "brand": "claude",
          "label": "让ClaudeCode交补丁也交回滚",
          "result": "你用Claude Code试做真实修复，提交时必须附测试结果和回滚步骤。代码行数不再充当完工证明，开发速度有提升，审核员仍要为最后的合并签字。",
          "mode": "cooperate",
          "quarterDelta": {
            "cash": -24,
            "research": 4,
            "team": -1,
            "trust": 3,
            "risk": -2
          },
          "affinities": {
            "claude": 13
          },
          "fromYear": 2025,
          "fromQuarter": 1,
          "sourceUrls": [
            "https://www.cfr.org/event/ceo-speaker-series-dario-amodei-anthropic",
            "https://www.anthropic.com/news/claude-3-7-sonnet"
          ],
          "rationale": "Claude Code2025年2月研究预览在Q1可用；直接承接Dario编码预测中的安全判断部分。"
        },
        {
          "id": "dario-ninety-percent-code-deepseek",
          "brand": "deepseek",
          "label": "用CoderV2专修失败测试",
          "result": "你给DeepSeek-Coder-V2喂可重现报错，只收能通过测试的小补丁，并接下一批维护订单。收入和研究都往前走，遗留代码的边界情况继续占用工程师晚饭时间。",
          "mode": "cooperate",
          "quarterDelta": {
            "cash": 20,
            "research": 4,
            "team": -2,
            "trust": 2,
            "risk": 1
          },
          "affinities": {
            "deepseek": 11
          },
          "fromYear": 2025,
          "fromQuarter": 1,
          "sourceUrls": [
            "https://www.cfr.org/event/ceo-speaker-series-dario-amodei-anthropic",
            "https://github.com/deepseek-ai/DeepSeek-Coder-V2"
          ],
          "rationale": "2024已开放代码模型，限定任务为真实测试修复，与泛生产权限不同。"
        },
        {
          "id": "dario-ninety-percent-code-qwen",
          "brand": "qwen",
          "label": "用QwenCoder争夺可验收维护单",
          "result": "你把Qwen2.5-Coder部署成本地修复服务，向客户承诺逐单验收，不拿九成代码做口号。首款到账，部署值班也落到自己身上；最后一成变成了合同里最认真写的一页。",
          "mode": "compete",
          "quarterDelta": {
            "cash": 26,
            "research": 3,
            "team": -3,
            "trust": 2,
            "risk": 2
          },
          "affinities": {
            "qwen": -10
          },
          "fromYear": 2025,
          "fromQuarter": 1,
          "sourceUrls": [
            "https://www.cfr.org/event/ceo-speaker-series-dario-amodei-anthropic",
            "https://qwenlm.github.io/blog/qwen2.5-coder/"
          ],
          "rationale": "Qwen2.5-Coder真实可自托管，玩家竞争维护市场并承接本地部署责任。"
        },
        {
          "id": "dario-ninety-percent-code-gemini",
          "brand": "gemini",
          "label": "让Gemini长文审查跨文件风险",
          "result": "团队用Gemini 1.5 Pro同时检查需求、代码和回滚文档，找出彼此不一致的假设。跨文件遗漏少了，长上下文调用增加账单；评审意见再流畅，也要有人动手验证。",
          "mode": "cooperate",
          "quarterDelta": {
            "cash": -20,
            "research": 4,
            "team": -1,
            "trust": 3,
            "risk": -1
          },
          "affinities": {
            "gemini": 10
          },
          "fromYear": 2025,
          "fromQuarter": 1,
          "sourceUrls": [
            "https://www.cfr.org/event/ceo-speaker-series-dario-amodei-anthropic",
            "https://blog.google/innovation-and-ai/products/google-gemini-next-generation-model-february-2024/"
          ],
          "rationale": "真实长上下文能力用于跨文件需求及权限审查，非把2025Q2现代Codex提前。"
        }
      ]
    },
    "grok-creators-preferences": {
      "tags": [
        "research",
        "governance"
      ],
      "focusBrands": [
        "xai",
        "claude"
      ],
      "routes": [
        {
          "id": "self",
          "label": "隔离老板偏好，独立验收决策",
          "result": "你高额投入可撤销的决策授权，把建议、批准和执行分开，公司保住独立控制权。模型仍可能说错，但老板的一条动态终于不能自动变成工单。",
          "quarterDelta": {
            "cash": -40,
            "research": 3,
            "trust": 5,
            "team": -3
          },
          "affinities": {}
        },
        {
          "id": "public",
          "label": "开放匿名偏好测试与权限审计",
          "result": "你花钱开放测试与权限记录，让社区检查模型如何形成决定，信任提高。匿名卡终于生效，模型第一次反对你的方案，会议室响起克制的掌声。",
          "quarterDelta": {
            "cash": -36,
            "research": 2,
            "trust": 5,
            "team": -3
          },
          "affinities": {}
        }
      ],
      "contextOffers": [
        {
          "id": "grok-creators-preferences-xai",
          "brand": "xai",
          "label": "按Grok公开修复注释做偏好回归",
          "result": "你们依据公开提示词里的问题说明，设计同题换人、反转老板立场的测试。缺陷变成可追踪工单，修复是否有效仍需复测；没人再把一条注释当成已经解决问题的证书。",
          "mode": "cooperate",
          "quarterDelta": {
            "cash": -22,
            "research": 4,
            "team": -1,
            "trust": 4,
            "risk": -2
          },
          "affinities": {
            "xai": 12
          },
          "fromYear": 2025,
          "fromQuarter": 4,
          "sourceUrls": [
            "https://github.com/xai-org/grok-prompts/blob/a7c186f5ccac95875c0041aed60398f6ecb6d6c7/grok4p1_thinking_system_turn_prompt_v2.j2#L65",
            "https://github.com/xai-org/grok-prompts/commit/a7c186f5ccac95875c0041aed60398f6ecb6d6c7"
          ],
          "rationale": "官方注释承认待修偏好行为，玩家构造回归而非断言有故意操纵指令。"
        },
        {
          "id": "grok-creators-preferences-claude",
          "brand": "claude",
          "label": "用宪法式审查分开原则与老板",
          "result": "团队把判断原则明写出来，参考Claude的批评修订方法检查每个理由。创始人的观点不再自动升级成原则，训练数据要多做一轮；有了章程，仍需有人监督执行。",
          "mode": "cooperate",
          "quarterDelta": {
            "cash": -28,
            "research": 5,
            "team": -2,
            "trust": 3,
            "risk": -2
          },
          "affinities": {
            "claude": 11
          },
          "fromYear": 2025,
          "fromQuarter": 4,
          "sourceUrls": [
            "https://github.com/xai-org/grok-prompts/blob/a7c186f5ccac95875c0041aed60398f6ecb6d6c7/grok4p1_thinking_system_turn_prompt_v2.j2#L65",
            "https://github.com/xai-org/grok-prompts/commit/a7c186f5ccac95875c0041aed60398f6ecb6d6c7",
            "https://www.anthropic.com/research/constitutional-ai-harmlessness-from-ai-feedback"
          ],
          "rationale": "Anthropic公开Constitutional AI研究提供明确原则与修订路线，用于玩家独立审查训练。"
        },
        {
          "id": "grok-creators-preferences-hunyuan",
          "brand": "xiaomi",
          "label": "拿 MiMo 复测换个老板会怎样",
          "result": "你们固定 MiMo 版本，把同一段意见换上不同姓名，记录答案如何变化。测试没有替任何老板争到冠军，却让团队抓到了几类偏差。以后谁想改评分，得先解释为什么只改自己的那一项。",
          "mode": "cooperate",
          "quarterDelta": {
            "cash": -24,
            "research": 4,
            "team": -2,
            "trust": 3,
            "risk": -2
          },
          "affinities": {
            "xiaomi": 10
          },
          "fromYear": 2025,
          "fromQuarter": 4,
          "rationale": "保留原事件历史背景与数值；改为现有核心公司的玩家自建试验或虚构合作，不声称真实签约或尚未发布的产品能力。",
          "secondaryAffinities": {},
          "editorialSource": "research/company-balance-v21.json"
        },
        {
          "id": "grok-creators-preferences-kimi",
          "brand": "kimi",
          "label": "让KimiK2先找反证再交建议",
          "result": "你把Kimi K2的工具调用接到经过筛选的资料库，要求每份建议附支持和反对证据。结论少了一些老板口头禅，查询成本增加；有出处的错误仍需要人工逐项复核。",
          "mode": "cooperate",
          "quarterDelta": {
            "cash": -20,
            "research": 4,
            "team": -1,
            "trust": 3,
            "risk": -1
          },
          "affinities": {
            "kimi": 11
          },
          "fromYear": 2025,
          "fromQuarter": 4,
          "sourceUrls": [
            "https://github.com/xai-org/grok-prompts/blob/a7c186f5ccac95875c0041aed60398f6ecb6d6c7/grok4p1_thinking_system_turn_prompt_v2.j2#L65",
            "https://github.com/xai-org/grok-prompts/commit/a7c186f5ccac95875c0041aed60398f6ecb6d6c7",
            "https://github.com/MoonshotAI/Kimi-K2"
          ],
          "rationale": "K2真实工具能力用于可审计反证检索，玩家外部工作流回应创造者偏好。"
        }
      ]
    },
    "baidu_luo_digital_livestream": {
      "tags": [
        "product",
        "governance"
      ],
      "focusBrands": [
        "xiaomi",
        "xai"
      ],
      "routes": [
        {
          "id": "self",
          "label": "自建商品知识库与人工接管",
          "result": "分身学会了谨慎回答。观众追问优惠，它反复确认边界，真人只好回来接话。",
          "quarterDelta": {
            "cash": -40,
            "research": 3,
            "trust": 5,
            "team": -3
          },
          "affinities": {}
        },
        {
          "id": "public",
          "label": "共建数字人话术与修改记录审计",
          "result": "你们和商户、测试者共建话术审计记录，谁批准、谁修改都可追溯。分身卖得很努力，审计员成了常驻观众；有争议的优惠得等人工讲清楚才能上架。",
          "quarterDelta": {
            "cash": -36,
            "research": 2,
            "trust": 5,
            "team": -3
          },
          "affinities": {}
        }
      ],
      "contextOffers": [
        {
          "id": "baidu_luo_digital_livestream-wenxin",
          "brand": "xiaomi",
          "label": "用 MiMo 审核数字人的商品承诺",
          "result": "你们用 MiMo 整理商品说明和优惠条件，人工通过后才交给数字人播报。第一份直播服务合同签了，夸张话术少了几句；真人终于能休息，值班审核仍得看着优惠什么时候到期。",
          "mode": "cooperate",
          "quarterDelta": {
            "cash": 26,
            "research": 3,
            "team": -2,
            "trust": 3,
            "risk": -2
          },
          "affinities": {
            "xiaomi": 10
          },
          "fromYear": 2025,
          "fromQuarter": 2,
          "rationale": "保留原事件历史背景与数值；改为现有核心公司的玩家自建试验或虚构合作，不声称真实签约或尚未发布的产品能力。",
          "secondaryAffinities": {},
          "editorialSource": "research/company-balance-v21.json"
        },
        {
          "id": "baidu_luo_digital_livestream-hunyuan",
          "brand": "gemini",
          "label": "让 Gemini 对照画面检查商品讲解",
          "result": "你们用 Gemini 辅助比对商品画面、说明和讲解稿，找出说的与展示的不一致的地方。素材多过了一道检查，直播临场问题仍交给真人。第一条返工意见很朴素：镜头里那台不是这个型号。",
          "mode": "cooperate",
          "quarterDelta": {
            "cash": 22,
            "research": 3,
            "team": -2,
            "trust": 3,
            "risk": -1
          },
          "affinities": {
            "gemini": 10
          },
          "fromYear": 2025,
          "fromQuarter": 2,
          "rationale": "保留原事件历史背景与数值；改为现有核心公司的玩家自建试验或虚构合作，不声称真实签约或尚未发布的产品能力。",
          "secondaryAffinities": {},
          "editorialSource": "research/company-balance-v21.json"
        },
        {
          "id": "baidu_luo_digital_livestream-doubao",
          "brand": "xai",
          "label": "用 Grok 接住直播后的追问",
          "result": "你们让 Grok 根据批准过的商品资料整理答复，涉及退换货争议就转给客服。直播结束后还有服务收入，重复问题也少了一些；数字人下播了，售后群并不会自动安静。",
          "mode": "cooperate",
          "quarterDelta": {
            "cash": 20,
            "research": 3,
            "team": -2,
            "trust": 2,
            "risk": 1
          },
          "affinities": {
            "xai": 10
          },
          "fromYear": 2025,
          "fromQuarter": 2,
          "rationale": "保留原事件历史背景与数值；改为现有核心公司的玩家自建试验或虚构合作，不声称真实签约或尚未发布的产品能力。",
          "secondaryAffinities": {},
          "editorialSource": "research/company-balance-v21.json"
        },
        {
          "id": "baidu_luo_digital_livestream-qwen",
          "brand": "qwen",
          "label": "让Qwen2.5VL核对货图与口播",
          "result": "你们把商品包装、规格图和已审口播交给Qwen2.5-VL做一致性检查。错把小杯说成大杯的风险更易发现，画面模糊时仍得人工看，审核成本也不会随数字人一起消失。",
          "mode": "cooperate",
          "quarterDelta": {
            "cash": -22,
            "research": 4,
            "team": -2,
            "trust": 4,
            "risk": -2
          },
          "affinities": {
            "qwen": 11
          },
          "fromYear": 2025,
          "fromQuarter": 2,
          "sourceUrls": [
            "https://finance.sina.com.cn/roll/2025-06-13/doc-inezxxuv6933223.shtml",
            "https://www.yicai.com/news/102667896.html",
            "https://www3.xinhuanet.com/tech/20251106/8b5b4da1ff034e81b40c437fa9bd440f/c.html",
            "https://qwenlm.github.io/blog/qwen2.5-vl/"
          ],
          "rationale": "Qwen2.5-VL图文理解用于商品视觉事实核对，与主播生成和语音售后是不同角色。"
        },
        {
          "id": "baidu_luo_digital_livestream-deepseek-promises",
          "brand": "deepseek",
          "label": "让DeepSeek逐句核对直播承诺",
          "result": "你把直播转写稿和商户批准的规格、保修条款放在一起，逐句查找夸大的承诺。“今天下单，终身无忧”被圈了出来，售后终于少背一口锅；主播也发现，最难复制的是谨慎。",
          "mode": "cooperate",
          "quarterDelta": {
            "cash": -24,
            "research": 4,
            "team": -2,
            "trust": 4,
            "risk": -2
          },
          "affinities": {
            "deepseek": 11
          },
          "fromYear": 2025,
          "fromQuarter": 2,
          "sourceUrls": [
            "https://finance.sina.com.cn/roll/2025-06-13/doc-inezxxuv6933223.shtml",
            "https://www.yicai.com/news/102667896.html"
          ],
          "rationale": "沿用数字人直播事件背景，由玩家用DeepSeek处理直播转写文本与商户提供的条款，争议交人工复核。无需未来能力，不暗示DeepSeek参与原直播；流程与后果为游戏虚构。"
        }
      ]
    },
    "codex_agent_2025": {
      "tags": [
        "code",
        "compute"
      ],
      "focusBrands": [
        "openai",
        "claude"
      ],
      "routes": [
        {
          "id": "self",
          "label": "自建开发代理并限制并行预算",
          "result": "你把读仓库、改代码和跑测试接进自有任务队列，并给并行任务设预算上限。修复速度上去了，审核还得自己做；信用卡终于不再替任务栏打节拍。",
          "quarterDelta": {
            "cash": -48,
            "research": 5,
            "trust": 2,
            "team": -3
          },
          "affinities": {}
        },
        {
          "id": "public",
          "label": "共享开发调度器与任务记录",
          "result": "预算用于共享工具和排队调度。大家都有任务能跑，也都有别人提交的bug能看。",
          "quarterDelta": {
            "cash": -32,
            "research": 3,
            "trust": 5,
            "team": -2
          },
          "affinities": {}
        }
      ],
      "contextOffers": [
        {
          "id": "codex_agent_2025-openai",
          "brand": "openai",
          "label": "给Codex并行任务设验收预算",
          "result": "你给Codex云端任务规定测试、任务数和费用上限，先接一批小型修复。回款跟着可检查的补丁来，审核仍压着工程师；信用卡的震动终于能和任务收益对上号。",
          "mode": "cooperate",
          "quarterDelta": {
            "cash": 20,
            "research": 4,
            "team": -2,
            "trust": 3,
            "risk": 1
          },
          "affinities": {
            "openai": 13
          },
          "secondaryAffinities": {
            "claude": -3
          },
          "fromYear": 2025,
          "fromQuarter": 2,
          "sourceUrls": [
            "https://openai.com/index/introducing-codex/",
            "https://openai.com/index/openai-codex/"
          ],
          "rationale": "2025Q2云端Codex及CLI真实发布，独立环境执行、测试与并行预算直接回应事件。"
        },
        {
          "id": "codex_agent_2025-claude",
          "brand": "claude",
          "label": "用ClaudeCode竞争本地开发席位",
          "result": "你拿Claude Code搭本地开发流程，向客户按席卖维护服务，和云端并行方案争订单。收入增长，终端权限和工具安装要逐台管；客户省下切换，团队多接了一些电话。",
          "mode": "compete",
          "quarterDelta": {
            "cash": 24,
            "research": 4,
            "team": -3,
            "trust": 2,
            "risk": 2
          },
          "affinities": {
            "claude": -10
          },
          "secondaryAffinities": {
            "openai": 3
          },
          "fromYear": 2025,
          "fromQuarter": 2,
          "sourceUrls": [
            "https://openai.com/index/introducing-codex/",
            "https://openai.com/index/openai-codex/",
            "https://www.anthropic.com/news/claude-3-7-sonnet"
          ],
          "rationale": "Claude Code事件前已发布，提供终端本地交互与云端独立任务的实际路径差异。"
        },
        {
          "id": "codex_agent_2025-xiaomi",
          "brand": "xiaomi",
          "label": "用MiMo7B筛掉简单代码工单",
          "result": "你把MiMo-7B部署成本地代码题与简单修复筛选器，复杂任务再交给大代理。调用支出缓下来，小模型也会漏判；省下的预算有一部分必须留给人工抽查。",
          "mode": "cooperate",
          "quarterDelta": {
            "cash": 14,
            "research": 4,
            "team": -1,
            "trust": 2,
            "risk": 0
          },
          "affinities": {
            "xiaomi": 12
          },
          "fromYear": 2025,
          "fromQuarter": 2,
          "sourceUrls": [
            "https://openai.com/index/introducing-codex/",
            "https://openai.com/index/openai-codex/",
            "https://github.com/XiaomiMiMo/MiMo"
          ],
          "rationale": "2025年4月MiMo7B开放，含数学和代码推理；只承担玩家构建的简单任务分流，不捏造成熟编码Agent。"
        },
        {
          "id": "codex_agent_2025-deepseek",
          "brand": "deepseek",
          "label": "用CoderV2养自己的测试工人",
          "result": "团队把DeepSeek-Coder-V2接入隔离测试环境，专做定位报错和候选补丁。并行调用更可控，机器维护也完全归自己；第一批能通过的修复换来小单，失败记录留在本地。",
          "mode": "cooperate",
          "quarterDelta": {
            "cash": 16,
            "research": 4,
            "team": -2,
            "trust": 2,
            "risk": 1
          },
          "affinities": {
            "deepseek": 11
          },
          "secondaryAffinities": {
            "openai": -3
          },
          "fromYear": 2025,
          "fromQuarter": 2,
          "sourceUrls": [
            "https://openai.com/index/introducing-codex/",
            "https://openai.com/index/openai-codex/",
            "https://github.com/deepseek-ai/DeepSeek-Coder-V2"
          ],
          "rationale": "真实开放代码模型加玩家编排执行器，与购买完整云端Agent有实质成本责任差异。"
        }
      ]
    },
    "claude-vend-tungsten": {
      "tags": [
        "product",
        "data"
      ],
      "focusBrands": [
        "claude",
        "qwen",
        "hunyuan"
      ],
      "routes": [
        {
          "id": "self",
          "label": "自训采购代理，先算库存毛利",
          "result": "你们拿库存、售价和滞销记录重训采购代理，先验证它能否算清毛利。模型终于拒绝再买钨块，团队仍得清点旧库存；财务决定把样品留作入职培训教材。",
          "quarterDelta": {
            "cash": -40,
            "research": 4,
            "trust": 2,
            "team": -3,
            "risk": -2
          },
          "affinities": {}
        },
        {
          "id": "public",
          "label": "共建商品成本账本与采购样例",
          "result": "你付费接入公共算力，让合作社共同核对商品成本。外部伙伴相信了你的账本，并一致建议：钨块先别卖，拿来压住采购申请。",
          "quarterDelta": {
            "cash": -32,
            "research": 3,
            "trust": 5,
            "team": -2
          },
          "affinities": {}
        }
      ],
      "contextOffers": [
        {
          "id": "claude-vend-tungsten-claude",
          "brand": "claude",
          "label": "重跑Claude店长的折扣实验",
          "result": "你们给Claude店长复制一份测试账本，分别试员工折扣、免费赠品和最低毛利限制。钨块不再靠热情定价，经营推理更好验收；实验用掉时间，真实库存还得人工清理。",
          "mode": "cooperate",
          "quarterDelta": {
            "cash": -24,
            "research": 4,
            "team": -2,
            "trust": 3,
            "risk": -2
          },
          "affinities": {
            "claude": 13
          },
          "fromYear": 2025,
          "fromQuarter": 2,
          "sourceUrls": [
            "https://www.anthropic.com/research/project-vend-1"
          ],
          "rationale": "Vend1确有钨块与员工折扣亏损；玩家只在沙盒账本重跑政策，不编造真实公司合作。"
        },
        {
          "id": "claude-vend-tungsten-wenxin",
          "brand": "xiaomi",
          "label": "让 MiMo 查一遍钨块到底赚不赚钱",
          "result": "你们用 MiMo 辅助核对采购价、库存和售价，把低于毛利底线的建议交给财务。小卖部试点愿意付服务费，前提是价格表有人更新。钨块终于从重点投资项目，变回了桌上的样品。",
          "mode": "cooperate",
          "quarterDelta": {
            "cash": 22,
            "research": 3,
            "team": -1,
            "trust": 3,
            "risk": -2
          },
          "affinities": {
            "xiaomi": 10
          },
          "fromYear": 2025,
          "fromQuarter": 2,
          "rationale": "保留原事件历史背景与数值；改为现有核心公司的玩家自建试验或虚构合作，不声称真实签约或尚未发布的产品能力。",
          "secondaryAffinities": {},
          "editorialSource": "research/company-balance-v21.json"
        },
        {
          "id": "claude-vend-tungsten-qwen",
          "brand": "qwen",
          "label": "让Qwen工具调用精算占款",
          "result": "团队让Qwen只负责组织采购方案，成本与库存周转交给代码计算，再按规则验收。金属块的机会成本终于露出来，脚本仍要维护；模型生成的漂亮理由再也不能直接抵账。",
          "mode": "cooperate",
          "quarterDelta": {
            "cash": -18,
            "research": 4,
            "team": -1,
            "trust": 3,
            "risk": -2
          },
          "affinities": {
            "qwen": 11
          },
          "fromYear": 2025,
          "fromQuarter": 2,
          "sourceUrls": [
            "https://www.anthropic.com/research/project-vend-1",
            "https://github.com/QwenLM/Qwen-Agent",
            "https://qwenlm.github.io/blog/qwen2.5/"
          ],
          "rationale": "事件前Qwen-Agent与代码解释器已存在；模型规划加确定计算直接回应库存亏损。"
        },
        {
          "id": "claude-vend-tungsten-kimi",
          "brand": "kimi",
          "label": "让KimiVL读发票再批准新品",
          "result": "你用Kimi-VL从发票与报价图里提取数量和单价，让人工确认后再进入采购账。凭感觉进货少了，图片识别仍有误差；钨块终于带着完整成本来到财务桌上。",
          "mode": "cooperate",
          "quarterDelta": {
            "cash": -20,
            "research": 4,
            "team": -1,
            "trust": 3,
            "risk": -1
          },
          "affinities": {
            "kimi": 11
          },
          "fromYear": 2025,
          "fromQuarter": 2,
          "sourceUrls": [
            "https://www.anthropic.com/research/project-vend-1",
            "https://github.com/MoonshotAI/Kimi-VL"
          ],
          "rationale": "Kimi-VL2025年4月开放文档视觉理解，具体对应非结构化采购单据，不冒称财务零误差。"
        }
      ]
    },
    "claude-pokemon-pallet-town": {
      "tags": [
        "research",
        "code"
      ],
      "focusBrands": [
        "claude",
        "openai",
        "gemini"
      ],
      "routes": [
        {
          "id": "self",
          "label": "自研探索奖励与状态记忆",
          "result": "团队给探索过程补上状态记忆和失败回放。角色终于踏出房门，工程师却得逐段解释它为何又折返；童年游戏从此多了一张回归测试表。",
          "quarterDelta": {
            "cash": -52,
            "research": 5,
            "trust": 2,
            "team": -3
          },
          "affinities": {}
        },
        {
          "id": "public",
          "label": "共享地图、失败轨迹与测试算力",
          "result": "你付费加入公共算力项目，社区共同维护地图与失败记录。伙伴更信任你的测试，角色也找到了门；海报终于不必再裁掉房屋之外的区域。",
          "quarterDelta": {
            "cash": -32,
            "research": 3,
            "trust": 5,
            "team": -2
          },
          "affinities": {}
        }
      ],
      "contextOffers": [
        {
          "id": "claude-pokemon-pallet-town-claude",
          "brand": "claude",
          "label": "给Claude3.7保留地图与动作记忆",
          "result": "你们照官方游戏实验给Claude提供画面、按键工具和记忆，把每次绕回门口都记下来。探索有了进展，长任务仍烧调用费；三个徽章没有写进合同，失败轨迹倒是存齐了。",
          "mode": "cooperate",
          "quarterDelta": {
            "cash": -26,
            "research": 5,
            "team": -2,
            "trust": 3,
            "risk": 1
          },
          "affinities": {
            "claude": 13
          },
          "fromYear": 2025,
          "fromQuarter": 1,
          "sourceUrls": [
            "https://www.anthropic.com/news/visible-extended-thinking"
          ],
          "rationale": "准确使用Claude3.7与官方像素、动作、记忆设置，不把Claude3.0失败移植成3.7事实。"
        },
        {
          "id": "claude-pokemon-pallet-town-qwen",
          "brand": "qwen",
          "label": "用Qwen2.5VL识别门与坐标",
          "result": "你先让Qwen2.5-VL把画面转成门、人物和障碍物，再交给简单规划器。角色开始拥有可检查的地图，识别错一格仍会撞墙；研究组终于能把看错和想错分开讨论。",
          "mode": "cooperate",
          "quarterDelta": {
            "cash": -24,
            "research": 5,
            "team": -2,
            "trust": 3,
            "risk": 0
          },
          "affinities": {
            "qwen": 12
          },
          "fromYear": 2025,
          "fromQuarter": 1,
          "sourceUrls": [
            "https://www.anthropic.com/news/visible-extended-thinking",
            "https://qwenlm.github.io/blog/qwen2.5-vl/"
          ],
          "rationale": "2025Q1视觉理解能力用于玩家像素到符号状态的实验，不虚构官方玩宝可梦成绩。"
        },
        {
          "id": "claude-pokemon-pallet-town-openai",
          "brand": "openai",
          "label": "给o3mini文字地图测探索策略",
          "result": "团队把已经核对的地图坐标交给o3-mini，只测下一步决策，不让它直接看屏幕。路线终于能和视觉误差拆开，计算费用仍在增加；研究员少了一条把失败都怪图片的借口。",
          "mode": "cooperate",
          "quarterDelta": {
            "cash": -18,
            "research": 4,
            "team": -1,
            "trust": 3,
            "risk": 0
          },
          "affinities": {
            "openai": 10
          },
          "fromYear": 2025,
          "fromQuarter": 1,
          "sourceUrls": [
            "https://www.anthropic.com/news/visible-extended-thinking",
            "https://openai.com/index/openai-o3-mini/"
          ],
          "rationale": "o3-mini不支持视觉，明确外部核验符号地图作为输入，避免能力穿越或模态误写。"
        },
        {
          "id": "deepseek-exploration-ledger",
          "brand": "deepseek",
          "label": "让DeepSeek记下走过的路，再决定下一步",
          "result": "你们先把测试地图转成文字状态，让DeepSeek列出已走路线、死路与下一次尝试，再交给固定程序执行一步。角色还没出新手村，重复撞墙已经能从日志里认出来；这次研究员终于知道卡住的是哪一回合。",
          "mode": "cooperate",
          "quarterDelta": {
            "cash": -22,
            "research": 4,
            "team": -2,
            "trust": 2,
            "risk": -1
          },
          "affinities": {
            "deepseek": 10
          },
          "fromYear": 2025,
          "fromQuarter": 1,
          "sourceUrls": [
            "https://www.anthropic.com/news/visible-extended-thinking"
          ],
          "rationale": "用事件前已有的DeepSeek文本推理路线研究状态记忆；地图转换和动作执行由玩家程序承担，不虚构模型原生识屏、手机控制或通关能力。 所列来源仅作事件背景；具体实施、合作、收入与资源变化均为游戏虚构，不代表现实合作或品牌背书。"
        }
      ]
    },
    "grok-musk-holistic-fitness": {
      "tags": [
        "research",
        "data"
      ],
      "focusBrands": [
        "xai",
        "claude"
      ],
      "routes": [
        {
          "id": "self",
          "label": "自建匿名评测，拆开体能指标",
          "result": "你把姓名藏起来，分别测试耐力、力量和比赛表现。模型不再把熬夜当成所有运动的通行证，你被安排回替补席；研究员忍着笑重新跑了一遍结果。",
          "quarterDelta": {
            "cash": -36,
            "research": 4,
            "trust": 3,
            "team": -2
          },
          "affinities": {}
        },
        {
          "id": "public",
          "label": "开放匿名样例，共同核对评分",
          "result": "你付费接入公共共享算力，让合作方共同设计匿名测试，外界信任提高。去掉姓名后结果终于正常，员工建议以后老板也使用随机编号。",
          "quarterDelta": {
            "cash": -32,
            "research": 3,
            "trust": 5,
            "team": -2
          },
          "affinities": {}
        }
      ],
      "contextOffers": [
        {
          "id": "grok-musk-holistic-fitness-xai",
          "brand": "xai",
          "label": "给Grok同题换名做体能盲测",
          "result": "你把题目中的老板和球星换成编号，固定项目定义再测一遍。测试开始区分工作耐力与竞技表现，样例还要继续扩充；那张截图成了反例，没被当成任何人的真实成绩。",
          "mode": "cooperate",
          "quarterDelta": {
            "cash": -18,
            "research": 3,
            "team": -1,
            "trust": 4,
            "risk": -2
          },
          "affinities": {
            "xai": 12
          },
          "fromYear": 2025,
          "fromQuarter": 4,
          "sourceUrls": [
            "https://x.com/elonmusk/status/1991624623407161383",
            "https://www.lbc.co.uk/article/elon-musk-grok-ai-twitter-jesus-lebron-james-5HjdNCc_2/",
            "https://www.theatlantic.com/technology/2025/11/elon-musk-better-jesus-grok/685015/",
            "https://github.com/xai-org/grok-prompts/commit/a7c186f5ccac95875c0041aed60398f6ecb6d6c7"
          ],
          "rationale": "具体Grok回答已删除且争议原因未定；只构造玩家匿名回归，不把赞美当事实或动机证据。"
        },
        {
          "id": "grok-musk-holistic-fitness-wenxin",
          "brand": "gemini",
          "label": "用 Gemini 给运动评分补齐证据",
          "result": "你们用 Gemini 整理比赛记录和训练资料，每个评分都必须能追到依据。老板的名字和其他人一样被遮住，评审终于开始讨论真实数据；缺资料的格子留白，没有人再替它补一句天赋异禀。",
          "mode": "cooperate",
          "quarterDelta": {
            "cash": -20,
            "research": 3,
            "team": -1,
            "trust": 4,
            "risk": -2
          },
          "affinities": {
            "gemini": 10
          },
          "fromYear": 2025,
          "fromQuarter": 4,
          "rationale": "保留原事件历史背景与数值；改为现有核心公司的玩家自建试验或虚构合作，不声称真实签约或尚未发布的产品能力。",
          "secondaryAffinities": {},
          "editorialSource": "research/company-balance-v21.json"
        },
        {
          "id": "grok-musk-holistic-fitness-xiaomi",
          "brand": "xiaomi",
          "label": "用MiMo7B校验运动评分算式",
          "result": "你把匿名指标和明确权重交给MiMo-7B，只让它解释并核对算式。熬夜不再自动兑换篮板，团队得先把规则写清楚；小模型也会算错，最终分数还要代码重算。",
          "mode": "cooperate",
          "quarterDelta": {
            "cash": -16,
            "research": 4,
            "team": 0,
            "trust": 3,
            "risk": -1
          },
          "affinities": {
            "xiaomi": 11
          },
          "fromYear": 2025,
          "fromQuarter": 4,
          "sourceUrls": [
            "https://x.com/elonmusk/status/1991624623407161383",
            "https://www.lbc.co.uk/article/elon-musk-grok-ai-twitter-jesus-lebron-james-5HjdNCc_2/",
            "https://www.theatlantic.com/technology/2025/11/elon-musk-better-jesus-grok/685015/",
            "https://github.com/XiaomiMiMo/MiMo"
          ],
          "rationale": "MiMo2025Q2公开的数学推理用于量化评分，承认需要确定性验算，不偷渡真实体能判断。"
        },
        {
          "id": "grok-musk-holistic-fitness-qwen",
          "brand": "qwen",
          "label": "用Qwen3抢透明评分服务订单",
          "result": "你用Qwen3做可展示权重的评分助手，以能复算的规则争取客户。服务款进来，客户也开始争论每项权重；老板的名字被藏起来，商业压力却不会自动藏起来。",
          "mode": "compete",
          "quarterDelta": {
            "cash": 22,
            "research": 3,
            "team": -2,
            "trust": 2,
            "risk": 2
          },
          "affinities": {
            "qwen": -10
          },
          "fromYear": 2025,
          "fromQuarter": 4,
          "sourceUrls": [
            "https://x.com/elonmusk/status/1991624623407161383",
            "https://www.lbc.co.uk/article/elon-musk-grok-ai-twitter-jesus-lebron-james-5HjdNCc_2/",
            "https://www.theatlantic.com/technology/2025/11/elon-musk-better-jesus-grok/685015/",
            "https://qwenlm.github.io/blog/qwen3/"
          ],
          "rationale": "Qwen3于2025Q2发布，玩家竞争透明解释服务，不暗示其自然克服偏置。"
        }
      ]
    },
    "huawei_cloudmatrix_384": {
      "tags": [
        "compute",
        "research"
      ],
      "focusBrands": [
        "huawei",
        "nvidia",
        "xai"
      ],
      "routes": [
        {
          "id": "self",
          "label": "自建互联测试，分批采购设备",
          "result": "你先验证互联、算子和故障恢复，再按业务量分批采购。模型终于不再靠机柜数量解释速度，采购仍不知道算几台，但知道每一批要验收什么。",
          "quarterDelta": {
            "cash": -60,
            "research": 5,
            "trust": 2,
            "team": -3
          },
          "affinities": {},
          "produces": [
            "compute"
          ]
        },
        {
          "id": "public",
          "label": "共建异构算力池与调度基准",
          "result": "你付费加入共同维护的算力池，公开互联测试和调度经验。设备要和别人轮着用，问题也有人一起修；采购终于不再是唯一看不懂机柜图的人。",
          "quarterDelta": {
            "cash": -32,
            "research": 3,
            "trust": 5,
            "team": -2
          },
          "affinities": {}
        }
      ],
      "contextOffers": [
        {
          "id": "huawei_cloudmatrix_384-huawei",
          "brand": "huawei",
          "label": "给CloudMatrix写分阶段采购验收表",
          "result": "你按CloudMatrix公布的互联方案，先整理模型、算子与故障恢复的验收清单，安排小规模适配预研。采购能说清要测什么，真正扩容仍须等待可取得资源和试跑结果。",
          "mode": "cooperate",
          "quarterDelta": {
            "cash": -26,
            "research": 4,
            "team": -2,
            "trust": 3,
            "risk": -2
          },
          "affinities": {
            "huawei": 13
          },
          "secondaryAffinities": {
            "nvidia": -3
          },
          "fromYear": 2025,
          "fromQuarter": 2,
          "sourceUrls": [
            "https://www.huaweicloud.com/intl/zh-cn/news/20250424094932570.html",
            "https://www.huaweicloud.com/news/2025/20250620101057482.html",
            "https://www.huawei.com/cn/news/2025/9/hc-xu-keynote-speech"
          ],
          "rationale": "以4月10日发布时可知方案做预研，不提前租用6月20日全面上线的新云服务。"
        },
        {
          "id": "huawei_cloudmatrix_384-nvidia",
          "brand": "nvidia",
          "label": "用GB200云实例做同负载比较",
          "result": "你租一段GB200实例，把相同模型、输入长度和服务目标摆到两套系统上。谁更合适终于要看任务，比较费用很高；采购不能再只拿芯片数量回答董事会。",
          "mode": "cooperate",
          "quarterDelta": {
            "cash": -38,
            "research": 5,
            "team": -2,
            "trust": 3,
            "risk": -1
          },
          "affinities": {
            "nvidia": 11
          },
          "secondaryAffinities": {
            "huawei": -3
          },
          "fromYear": 2025,
          "fromQuarter": 2,
          "sourceUrls": [
            "https://www.huaweicloud.com/intl/zh-cn/news/20250424094932570.html",
            "https://www.huaweicloud.com/news/2025/20250620101057482.html",
            "https://www.huawei.com/cn/news/2025/9/hc-xu-keynote-speech",
            "https://blogs.nvidia.com/blog/blackwell-coreweave-gb200-nvl72-instances-cloud/"
          ],
          "rationale": "GB200云实例2025Q1已可用，Q2可做合法可取得条件下的测量，不暗示大陆能无条件采购受限芯片。"
        },
        {
          "id": "huawei_cloudmatrix_384-deepseek",
          "brand": "deepseek",
          "label": "拿R1长短请求制定超节点考题",
          "result": "团队先在已有R1服务上记录长短请求的等待与输出速度，再把这组负载列入未来超节点验收。技术名词变成了业务考题，测量要付调用费，最终扩容仍得等待实机对照。",
          "mode": "cooperate",
          "quarterDelta": {
            "cash": -20,
            "research": 4,
            "team": -1,
            "trust": 3,
            "risk": -1
          },
          "affinities": {
            "deepseek": 12
          },
          "fromYear": 2025,
          "fromQuarter": 2,
          "sourceUrls": [
            "https://www.huaweicloud.com/intl/zh-cn/news/20250424094932570.html",
            "https://www.huaweicloud.com/news/2025/20250620101057482.html",
            "https://www.huawei.com/cn/news/2025/9/hc-xu-keynote-speech",
            "https://github.com/deepseek-ai/DeepSeek-R1",
            "https://siliconflow.cn/news/q6wyoxhvpn06vlh1xsrbov7x"
          ],
          "rationale": "2025年2月已有R1昇腾云服务；只制定4月超节点验收负载，不借用6月CloudMatrix-Infer论文。"
        },
        {
          "id": "huawei_cloudmatrix_384-kimi",
          "brand": "kimi",
          "label": "用Mooncake先分开缓存与生成",
          "result": "你把Mooncake的缓存调度思路用到现有服务，分开预填充和生成瓶颈再决定是否租超节点。机柜需求可能缩小，系统复杂度却增加；省下多少必须由新压测证明。",
          "mode": "cooperate",
          "quarterDelta": {
            "cash": -24,
            "research": 5,
            "team": -2,
            "trust": 2,
            "risk": -1
          },
          "affinities": {
            "kimi": 11
          },
          "fromYear": 2025,
          "fromQuarter": 2,
          "sourceUrls": [
            "https://www.huaweicloud.com/intl/zh-cn/news/20250424094932570.html",
            "https://www.huaweicloud.com/news/2025/20250620101057482.html",
            "https://www.huawei.com/cn/news/2025/9/hc-xu-keynote-speech",
            "https://github.com/kvcache-ai/Mooncake"
          ],
          "rationale": "Mooncake以KV缓存中心和PD解耦著称，与CloudMatrix推理架构有具体系统问题关联，不宣称官方合作。"
        }
      ]
    },
    "huawei_cann_open_source": {
      "tags": [
        "compute",
        "code",
        "open"
      ],
      "focusBrands": [
        "huawei",
        "nvidia"
      ],
      "routes": [
        {
          "id": "self",
          "label": "自研关键算子和迁移工具",
          "result": "团队把最常用的算子和迁移检查做进自己的工具链。模型跑顺了一截，工程师也记下一整本兼容性问题；蛋糕没有提前买，补丁倒是按时交了。",
          "quarterDelta": {
            "cash": -48,
            "research": 5,
            "trust": 2,
            "team": -3
          },
          "affinities": {}
        },
        {
          "id": "public",
          "label": "共同维护开放算子与适配工具",
          "result": "你把适配预算投给共同维护的开放工具，连同失败日志一起提交。同行送来可复用的补丁，客户愿意试跑；代码审查排起了队，迁移也不再只靠一个人的记忆。",
          "quarterDelta": {
            "cash": -32,
            "research": 3,
            "trust": 5,
            "team": -2
          },
          "affinities": {}
        }
      ],
      "contextOffers": [
        {
          "id": "huawei_cann_open_source-huawei",
          "brand": "huawei",
          "label": "从已开放CANN算子提交补丁",
          "result": "你按当季已开放的代码挑一个真实瓶颈，补齐测试后提交修复。迁移经验开始能复用，团队仍要等后续组件公开；财务给算子维护单列预算，工程师终于不用顺手加班。",
          "mode": "cooperate",
          "quarterDelta": {
            "cash": -28,
            "research": 5,
            "team": -2,
            "trust": 3,
            "risk": -2
          },
          "affinities": {
            "huawei": 13
          },
          "secondaryAffinities": {
            "nvidia": -3
          },
          "fromYear": 2025,
          "fromQuarter": 3,
          "sourceUrls": [
            "https://www.huawei.com/cn/news/2025/8/ascend-summit-CANN-open-source",
            "https://www.huawei.com/cn/news/2025/9/hc-shengten-opensource"
          ],
          "rationale": "严格区分2025Q3开放宣布及分批计划，不声称年底的库已在Q3交付。"
        },
        {
          "id": "huawei_cann_open_source-deepseek",
          "brand": "deepseek",
          "label": "对照DeepEP写昇腾通信试验",
          "result": "团队研究DeepEP的专家通信路径，再为昇腾做小规模独立试验。通信瓶颈看清了，现成CUDA代码不能直接搬过去；跨硬件适配吃掉人手，也留下真正能复用的研究。",
          "mode": "cooperate",
          "quarterDelta": {
            "cash": -32,
            "research": 6,
            "team": -3,
            "trust": 2,
            "risk": 1
          },
          "affinities": {
            "deepseek": 12
          },
          "fromYear": 2025,
          "fromQuarter": 3,
          "sourceUrls": [
            "https://www.huawei.com/cn/news/2025/8/ascend-summit-CANN-open-source",
            "https://www.huawei.com/cn/news/2025/9/hc-shengten-opensource",
            "https://github.com/deepseek-ai/DeepEP"
          ],
          "rationale": "DeepEP2025Q1开放CUDA专家通信；明确需要重做后端，未虚构官方昇腾移植已完成。"
        },
        {
          "id": "huawei_cann_open_source-xiaomi",
          "brand": "xiaomi",
          "label": "拿MiMo7B做CANN迁移验收样本",
          "result": "你用MiMo-7B做小规模迁移样本，逐项对比输出、速度和算子支持。排查范围比大模型可控，碰到缺口还得自己补；小模型没有替你消灭工具链工作，只让问题更容易定位。",
          "mode": "cooperate",
          "quarterDelta": {
            "cash": -22,
            "research": 4,
            "team": -2,
            "trust": 3,
            "risk": -1
          },
          "affinities": {
            "xiaomi": 11
          },
          "fromYear": 2025,
          "fromQuarter": 3,
          "sourceUrls": [
            "https://www.huawei.com/cn/news/2025/8/ascend-summit-CANN-open-source",
            "https://www.huawei.com/cn/news/2025/9/hc-shengten-opensource",
            "https://github.com/XiaomiMiMo/MiMo"
          ],
          "rationale": "MiMo7B2025Q2可用；玩家Q3迁移实验，不声称小米或华为已有官方即用适配。"
        },
        {
          "id": "huawei_cann_open_source-hunyuan",
          "brand": "kimi",
          "label": "和 Kimi 一起检查模型迁移结果",
          "result": "你们围绕 Kimi 的开放模型整理迁移测试，在新环境里逐项比较输出、精度和运行日志。维护工作增加了，验收也更有底气；屏幕上出现第一句话之后，工程师终于拿出真正的测试表。",
          "mode": "cooperate",
          "quarterDelta": {
            "cash": -26,
            "research": 5,
            "team": -2,
            "trust": 3,
            "risk": 0
          },
          "affinities": {
            "kimi": 10
          },
          "fromYear": 2025,
          "fromQuarter": 3,
          "rationale": "保留原事件历史背景与数值；改为现有核心公司的玩家自建试验或虚构合作，不声称真实签约或尚未发布的产品能力。",
          "secondaryAffinities": {},
          "editorialSource": "research/company-balance-v21.json"
        }
      ]
    },
    "worldlabs_marble_world_model": {
      "tags": [
        "research",
        "compute",
        "robotics"
      ],
      "focusBrands": [
        "gemini",
        "nvidia",
        "huawei"
      ],
      "routes": [
        {
          "id": "self",
          "label": "自研小场景生成与一致性测试",
          "result": "你们先生成一间能反复走通的样板间，逐个检查门、光照和几何一致性。研发有了可测的进展，市场部暂时失去虚拟豪宅，验收同事少走了几万步。",
          "quarterDelta": {
            "cash": -56,
            "research": 5,
            "trust": 1,
            "team": -3
          },
          "affinities": {}
        },
        {
          "id": "public",
          "label": "共享场景素材与渲染资源",
          "result": "你把预算交给开源社区联合制作，开放了一批可复用场景。别人也带着素材加入，花出去的钱换来合作，宣传片终于有了片尾名单。",
          "quarterDelta": {
            "cash": -32,
            "research": 3,
            "trust": 5,
            "team": -2
          },
          "affinities": {}
        }
      ],
      "contextOffers": [
        {
          "id": "worldlabs_marble_world_model-hunyuan",
          "brand": "xiaomi",
          "label": "用 MiMo 给场景工具写检查脚本",
          "result": "你们用 MiMo 辅助编写脚本，检查场景素材的命名、缺失引用和加载报错，再交美术检查实际画面。第一份整理服务赚到了钱；虚拟豪宅还需要人工装修，至少门把手不再丢在另一个文件夹里。",
          "mode": "cooperate",
          "quarterDelta": {
            "cash": 18,
            "research": 4,
            "team": -2,
            "trust": 2,
            "risk": 1
          },
          "affinities": {
            "xiaomi": 10
          },
          "fromYear": 2025,
          "fromQuarter": 4,
          "rationale": "保留原事件历史背景与数值；改为现有核心公司的玩家自建试验或虚构合作，不声称真实签约或尚未发布的产品能力。",
          "secondaryAffinities": {},
          "editorialSource": "research/company-balance-v21.json"
        },
        {
          "id": "worldlabs_marble_world_model-nvidia",
          "brand": "nvidia",
          "label": "用Omniverse检验场景的碰撞尺度",
          "result": "团队把可用场景资产整理进Omniverse，专测尺度、碰撞与相机路径。办公室可以走进去，也开始知道哪里穿墙；转换与仿真很费工，渲染好看仍不代表物理正确。",
          "mode": "cooperate",
          "quarterDelta": {
            "cash": -34,
            "research": 5,
            "team": -3,
            "trust": 3,
            "risk": -1
          },
          "affinities": {
            "nvidia": 12
          },
          "fromYear": 2025,
          "fromQuarter": 4,
          "sourceUrls": [
            "https://www.worldlabs.ai/blog/marble-world-model",
            "https://www.worldlabs.ai/case-studies/bringing-marble-to-life",
            "https://www.worldlabs.ai/blog/bigger-better-worlds",
            "https://developer.nvidia.com/omniverse"
          ],
          "rationale": "Omniverse既有USD场景和仿真工具，可用于玩家资产整理和物理验证；不暗示Marble本身能精确物理模拟。"
        },
        {
          "id": "worldlabs_marble_world_model-gemini",
          "brand": "gemini",
          "label": "让Gemini检查漫游录像的断裂",
          "result": "你把房间漫游录像交给Gemini长视频理解，标记门窗消失和空间前后矛盾的候选片段。人工排查更集中，模型也会看漏；验收员终于不用一遍遍从前台走到不存在的阳台。",
          "mode": "cooperate",
          "quarterDelta": {
            "cash": -20,
            "research": 4,
            "team": -1,
            "trust": 3,
            "risk": -1
          },
          "affinities": {
            "gemini": 11
          },
          "fromYear": 2025,
          "fromQuarter": 4,
          "sourceUrls": [
            "https://www.worldlabs.ai/blog/marble-world-model",
            "https://www.worldlabs.ai/case-studies/bringing-marble-to-life",
            "https://www.worldlabs.ai/blog/bigger-better-worlds",
            "https://blog.google/innovation-and-ai/products/google-gemini-next-generation-model-february-2024/"
          ],
          "rationale": "Gemini1.5支持长视频多模态上下文，用于视觉QA而非声称理解精确三维物理。"
        },
        {
          "id": "openai-storyboard-scope",
          "brand": "openai",
          "label": "用OpenAI整理镜头清单，先接预演策划单",
          "result": "你们让文本助手把客户的漫游愿望拆成机位、动作与场景清单，由设计师补成可审阅的分镜。策划费用先回来，能自由走动的世界仍要继续开发；报价终于把拍得到和走得进去分成了两行。",
          "mode": "cooperate",
          "quarterDelta": {
            "cash": 24,
            "research": 3,
            "team": -2,
            "trust": 2,
            "risk": 1
          },
          "affinities": {
            "openai": 10
          },
          "fromYear": 2025,
          "fromQuarter": 4,
          "sourceUrls": [
            "https://www.worldlabs.ai/blog/marble-world-model"
          ],
          "rationale": "仅使用已有文本辅助能力规划影视预演，由设计师完成图稿；不宣称OpenAI在此提供可探索三维世界或与事件公司真实合作。 所列来源仅作事件背景；具体实施、合作、收入与资源变化均为游戏虚构，不代表现实合作或品牌背书。"
        }
      ]
    },
    "huang_buy_more_save_more": {
      "tags": [
        "compute",
        "research"
      ],
      "focusBrands": [
        "nvidia",
        "huawei",
        "xai"
      ],
      "routes": [
        {
          "id": "self",
          "label": "先测利用率，再分批采购",
          "result": "你把闲置、排队和通信时间都测了一遍，只给真正的瓶颈加卡。折扣没拿到最大，电费却没有一起翻倍；空机架终于成为一个经过计算的决定。",
          "quarterDelta": {
            "cash": -36,
            "research": 4,
            "trust": 1,
            "team": -2
          },
          "affinities": {},
          "produces": [
            "compute"
          ]
        },
        {
          "id": "public",
          "label": "加入共享算力池，交换闲置时段",
          "result": "伙伴开放空闲时段，统一排队和结算规则。实际利用率提高了，预算也省下一截；轮到夜间训练的人仍然很想知道，共同体能不能顺便共享咖啡机。",
          "quarterDelta": {
            "cash": -32,
            "research": 3,
            "trust": 5,
            "team": -2
          },
          "affinities": {}
        }
      ],
      "contextOffers": [
        {
          "id": "huang_buy_more_save_more-nvidia",
          "brand": "nvidia",
          "label": "先用TensorRT测加卡的收益曲线",
          "result": "你在已有GPU上用TensorRT-LLM压测，逐档比较批量、显存与等待时间。采购依据从折扣变成吞吐，优化先花了一笔；有些机架继续空着，终于不是因为申请表漏填。",
          "mode": "cooperate",
          "quarterDelta": {
            "cash": -24,
            "research": 5,
            "team": -2,
            "trust": 2,
            "risk": -2
          },
          "affinities": {
            "nvidia": 12
          },
          "secondaryAffinities": {
            "huawei": -3
          },
          "fromYear": 2025,
          "fromQuarter": 1,
          "sourceUrls": [
            "https://blogs.nvidia.com/blog/nvidia-keynote-at-gtc-2025-ai-news-live-updates/",
            "https://github.com/NVIDIA/TensorRT-LLM"
          ],
          "rationale": "已有推理优化工具回应GTC总拥有成本宣传，不暗示购买总价越买越少。"
        },
        {
          "id": "huang_buy_more_save_more-deepseek",
          "brand": "deepseek",
          "label": "先用V3缓存结构减少显存浪费",
          "result": "团队研究V3的MLA缓存结构，拿相同长度请求比较服务配置。显存瓶颈有了具体解释，优化收益还得实测；少买一张卡的愿望，先换成工程师多看几天性能曲线。",
          "mode": "cooperate",
          "quarterDelta": {
            "cash": -26,
            "research": 5,
            "team": -2,
            "trust": 2,
            "risk": -1
          },
          "affinities": {
            "deepseek": 12
          },
          "fromYear": 2025,
          "fromQuarter": 1,
          "sourceUrls": [
            "https://blogs.nvidia.com/blog/nvidia-keynote-at-gtc-2025-ai-news-live-updates/",
            "https://github.com/deepseek-ai/DeepSeek-V3"
          ],
          "rationale": "V3 MLA是减少KV缓存的具体架构关联，玩家调整部署配置不声称改所有模型即可复制收益。"
        },
        {
          "id": "huang_buy_more_save_more-kimi",
          "brand": "kimi",
          "label": "让Mooncake缓存调度先吃满旧卡",
          "result": "你们参考Mooncake把缓存与生成负载分开安排，先清理等待与重复计算。旧设备多接了一些任务，服务回款增加；调度系统更复杂，值班工程师也有了新的报警声。",
          "mode": "cooperate",
          "quarterDelta": {
            "cash": 16,
            "research": 4,
            "team": -2,
            "trust": 2,
            "risk": 1
          },
          "affinities": {
            "kimi": 11
          },
          "fromYear": 2025,
          "fromQuarter": 1,
          "sourceUrls": [
            "https://blogs.nvidia.com/blog/nvidia-keynote-at-gtc-2025-ai-news-live-updates/",
            "https://github.com/kvcache-ai/Mooncake"
          ],
          "rationale": "2024研究及2025Q1可用实现强调KV缓存与解耦推理，直接回应利用率而非盲购。"
        },
        {
          "id": "huang_buy_more_save_more-huawei",
          "brand": "huawei",
          "label": "在华为云ECS试跑R1蒸馏",
          "result": "你们先在华为云ECS上试跑R1蒸馏模型，核对资源、成本和响应时间再决定扩容。多了一个真实报价基准，部署仍需付钱；折扣海报暂时输给了一张能复测的表。",
          "mode": "cooperate",
          "quarterDelta": {
            "cash": -22,
            "research": 4,
            "team": -2,
            "trust": 3,
            "risk": -1
          },
          "affinities": {
            "huawei": 11
          },
          "fromYear": 2025,
          "fromQuarter": 1,
          "sourceUrls": [
            "https://blogs.nvidia.com/blog/nvidia-keynote-at-gtc-2025-ai-news-live-updates/",
            "https://support.huaweicloud.com/intl/en-us/deepseek-aislt/aislt-deepseek.pdf"
          ],
          "rationale": "华为2025年2月公开R1蒸馏部署方案，避免使用Q2才有CloudMatrix服务。"
        }
      ]
    },
    "nvidia_h20_license_change": {
      "tags": [
        "compute",
        "governance"
      ],
      "focusBrands": [
        "nvidia",
        "huawei"
      ],
      "routes": [
        {
          "id": "self",
          "label": "自测替代硬件，重排采购计划",
          "result": "你们先验证能交付的替代硬件，再按实际性能重排模型计划。迁移花掉一笔钱，采购终于能在下单前回答到货日期，法务也有时间读完旧文件。",
          "quarterDelta": {
            "cash": -48,
            "research": 3,
            "trust": 2,
            "team": -3,
            "risk": -2
          },
          "affinities": {}
        },
        {
          "id": "public",
          "label": "共享可用时段与迁移经验",
          "result": "伙伴匀出可用时段并公开迁移测试，帮你暂时接住算力缺口。稳定性取决于大家共同维护，夜间训练窗口第一次比白天董事会更让人安心。",
          "quarterDelta": {
            "cash": -32,
            "research": 3,
            "trust": 5,
            "team": -2
          },
          "affinities": {}
        }
      ],
      "contextOffers": [
        {
          "id": "nvidia_h20_license_change-nvidia",
          "brand": "nvidia",
          "label": "把H20订单改成许可与交期节点",
          "result": "你暂停依赖确定到货的扩容承诺，与供应商逐项核对当时许可证和订单状态。交付预期更可信，项目收入也推迟；已经付出的排期工作不会因为规则更新自动退回。",
          "mode": "cooperate",
          "quarterDelta": {
            "cash": -16,
            "research": 2,
            "team": -1,
            "trust": 4,
            "risk": -3
          },
          "affinities": {
            "nvidia": 11
          },
          "secondaryAffinities": {
            "huawei": -3
          },
          "fromYear": 2025,
          "fromQuarter": 2,
          "sourceUrls": [
            "https://investor.nvidia.com/news/press-release-details/2025/NVIDIA-Announces-Financial-Results-for-First-Quarter-Fiscal-2026/"
          ],
          "rationale": "H20历史许可变更及交付约束由财报支撑；只做合规订单核验，不提出规避或当前法律结论。"
        },
        {
          "id": "nvidia_h20_license_change-huawei",
          "brand": "huawei",
          "label": "在昇腾云验证R1备选交付",
          "result": "团队试用已经上线的昇腾云R1推理服务，核对真实请求的延迟、精度和稳定性。算力缺口有了备选，服务费用随之增加；客户终于看到能演示的方案，而不是另一张交期截图。",
          "mode": "cooperate",
          "quarterDelta": {
            "cash": -26,
            "research": 4,
            "team": -2,
            "trust": 3,
            "risk": -2
          },
          "affinities": {
            "huawei": 12
          },
          "secondaryAffinities": {
            "nvidia": -3
          },
          "fromYear": 2025,
          "fromQuarter": 2,
          "sourceUrls": [
            "https://investor.nvidia.com/news/press-release-details/2025/NVIDIA-Announces-Financial-Results-for-First-Quarter-Fiscal-2026/",
            "https://siliconflow.cn/news/q6wyoxhvpn06vlh1xsrbov7x"
          ],
          "rationale": "硅基流动2025年2月1日官方公告证明昇腾R1/V3服务已上线；不使用4月10日CloudMatrix或6月服务。"
        },
        {
          "id": "nvidia_h20_license_change-qwen",
          "brand": "qwen",
          "label": "用Qwen小模型重排现有卡负载",
          "result": "你把可简化的任务换成Qwen小模型，把有限显存留给真正需要的大任务。业务暂时接住，复杂问题必须升级处理；买不到卡的压力转化成团队逐条梳理任务的工时。",
          "mode": "cooperate",
          "quarterDelta": {
            "cash": 12,
            "research": 4,
            "team": -2,
            "trust": 2,
            "risk": -1
          },
          "affinities": {
            "qwen": 11
          },
          "fromYear": 2025,
          "fromQuarter": 2,
          "sourceUrls": [
            "https://investor.nvidia.com/news/press-release-details/2025/NVIDIA-Announces-Financial-Results-for-First-Quarter-Fiscal-2026/",
            "https://qwenlm.github.io/blog/qwen2.5/"
          ],
          "rationale": "已有Qwen多尺寸开放模型，为硬件缺口提供缩小负载策略，不误称新采购渠道。"
        },
        {
          "id": "kimi-hosted-document-fallback",
          "brand": "kimi",
          "label": "让Kimi承接获准外发的文档任务",
          "result": "新设备交期不明，你们把客户允许外发的资料交给Kimi做问答，敏感任务继续排在现有机房。托管服务接住了一部分交付，也带来逐笔用量账单；销售这回先问数据能不能出去，再问月底能不能回款。",
          "mode": "cooperate",
          "quarterDelta": {
            "cash": 18,
            "research": 3,
            "team": -2,
            "trust": 2,
            "risk": 1
          },
          "affinities": {
            "kimi": 11
          },
          "fromYear": 2025,
          "fromQuarter": 2,
          "sourceUrls": [
            "https://investor.nvidia.com/news/press-release-details/2025/NVIDIA-Announces-Financial-Results-for-First-Quarter-Fiscal-2026/"
          ],
          "rationale": "使用事件前已存在的托管文本服务缓解自建算力压力；仅处理获准外发的资料，不暗示绕过硬件许可限制或保证不受供应变化影响。 所列来源仅作事件背景；具体实施、合作、收入与资源变化均为游戏虚构，不代表现实合作或品牌背书。"
        }
      ]
    },
    "liang_money_not_chips": {
      "tags": [
        "compute",
        "research"
      ],
      "focusBrands": [
        "deepseek",
        "huawei",
        "nvidia"
      ],
      "routes": [
        {
          "id": "self",
          "label": "自研内核，把现有卡用足",
          "result": "团队重写热点内核，减少通信与显存浪费。购买键仍是灰的，现有机器却多跑出一批实验；采购第一次收到一份不要求立即加卡的需求单。",
          "quarterDelta": {
            "cash": -44,
            "research": 5,
            "trust": 2,
            "team": -3
          },
          "affinities": {}
        },
        {
          "id": "public",
          "label": "共享闲置算力与效率改进",
          "result": "闲置时段和内核经验被放到同一张共享清单里。你们少买不到的卡，多跑可复现的实验；排队还在，但少浪费终于被认真当成一次硬件升级。",
          "quarterDelta": {
            "cash": -32,
            "research": 3,
            "trust": 5,
            "team": -2
          },
          "affinities": {}
        }
      ],
      "contextOffers": [
        {
          "id": "liang_money_not_chips-deepseek",
          "brand": "deepseek",
          "label": "用DeepGEMM优化现有Hopper矩阵计算",
          "result": "你们在已有兼容GPU上试DeepGEMM，逐项比较矩阵计算效率与数值误差。新卡按钮仍是灰的，旧机器多跑了一些试验；内核调试很费人，省下的时间要实测才算数。",
          "mode": "cooperate",
          "quarterDelta": {
            "cash": -30,
            "research": 6,
            "team": -3,
            "trust": 2,
            "risk": 0
          },
          "affinities": {
            "deepseek": 13
          },
          "fromYear": 2025,
          "fromQuarter": 1,
          "sourceUrls": [
            "https://www.36kr.com/p/2872793466982535",
            "https://github.com/deepseek-ai/DeepGEMM"
          ],
          "rationale": "DeepGEMM于2025Q1开源FP8矩阵计算内核；限定已有兼容Hopper，不暗示突破芯片限制。"
        },
        {
          "id": "liang_money_not_chips-nvidia",
          "brand": "nvidia",
          "label": "用TensorRT把旧卡推理队列重排",
          "result": "团队重新测TensorRT-LLM的批处理和显存占用，把闲置与排队分开治理。服务器多接到一点业务，维护复杂度也提高；采购第一次拿到一份不以新增设备开头的改进报告。",
          "mode": "cooperate",
          "quarterDelta": {
            "cash": 14,
            "research": 4,
            "team": -2,
            "trust": 2,
            "risk": 1
          },
          "affinities": {
            "nvidia": 11
          },
          "secondaryAffinities": {
            "huawei": -3
          },
          "fromYear": 2025,
          "fromQuarter": 1,
          "sourceUrls": [
            "https://www.36kr.com/p/2872793466982535",
            "https://github.com/NVIDIA/TensorRT-LLM"
          ],
          "rationale": "事件前真实工具用于存量GPU效率，不涉及新受限芯片获取。"
        },
        {
          "id": "liang_money_not_chips-kimi",
          "brand": "kimi",
          "label": "用Mooncake减少长文重复预填充",
          "result": "你们在重复资料问答中试用Mooncake的缓存思路，测哪些上下文值得复用。现有算力腾出空间，缓存一致性多了维护工作；钱没有买开灰按钮，却买来一段少浪费的工程。",
          "mode": "cooperate",
          "quarterDelta": {
            "cash": -22,
            "research": 5,
            "team": -2,
            "trust": 2,
            "risk": -1
          },
          "affinities": {
            "kimi": 12
          },
          "fromYear": 2025,
          "fromQuarter": 1,
          "sourceUrls": [
            "https://www.36kr.com/p/2872793466982535",
            "https://github.com/kvcache-ai/Mooncake"
          ],
          "rationale": "Mooncake缓存中心架构适合长文重复输入，具体回应受限资源利用。"
        },
        {
          "id": "qwen-narrow-service",
          "brand": "qwen",
          "label": "用千问缩小助手范围，按现有卡接单",
          "result": "你们把内部助手限定为固定资料查询，先在现有设备测出容量，再用千问路线续签小范围服务。回款没有断，通用智能的海报先收进仓库；做不了的任务直接转给真人，客户反而更容易验收。",
          "mode": "cooperate",
          "quarterDelta": {
            "cash": 24,
            "research": 3,
            "team": -1,
            "trust": 2,
            "risk": 1
          },
          "affinities": {
            "qwen": 11
          },
          "fromYear": 2025,
          "fromQuarter": 1,
          "sourceUrls": [
            "https://www.36kr.com/p/2872793466982535"
          ],
          "rationale": "已有千问开放模型路线支持玩家自行测量限域服务容量；不承诺特定硬件性能、替代芯片供应或自动实现通用能力。 所列来源仅作事件背景；具体实施、合作、收入与资源变化均为游戏虚构，不代表现实合作或品牌背书。"
        }
      ]
    },
    "deepseek_harness_2026_main": {
      "tags": [
        "code",
        "open",
        "governance"
      ],
      "focusBrands": [
        "deepseek",
        "openai"
      ],
      "routes": [
        {
          "id": "self",
          "label": "自建沙盒，逐个验收插件",
          "result": "你把权限拆开，给每个插件单独测试。老板插件验收失败：它能发起任务，不能解释任务为什么存在。",
          "quarterDelta": {
            "cash": -36,
            "research": 5,
            "trust": 5,
            "team": -3
          },
          "affinities": {}
        },
        {
          "id": "public",
          "label": "共同维护开放接口与插件工具",
          "result": "你们共同维护接口与工具。仓库多了贡献者，也多了“请问支持我家这台古董电脑吗”的issue。",
          "quarterDelta": {
            "cash": -24,
            "research": 3,
            "trust": 5,
            "team": -2
          },
          "affinities": {}
        }
      ],
      "contextOffers": [
        {
          "id": "deepseek_harness_2026_main-deepseek",
          "brand": "deepseek",
          "label": "给DeepSeek主循环装订单插件",
          "result": "你们把订单查询接进Harness主循环，旧客服后台终于能被代理调用。插件可换，值班责任不能卸载；首批服务费到账后，工程师仍得盯住每次升级。",
          "mode": "cooperate",
          "quarterDelta": {
            "cash": 18,
            "research": 4,
            "team": -2,
            "trust": 1,
            "risk": 2
          },
          "affinities": {
            "deepseek": 10
          },
          "fromYear": 2026,
          "fromQuarter": 3,
          "sourceUrls": [
            "https://github.com/deepseek-ai/deepseek-harness"
          ],
          "rationale": "针对事件「连老板都想做成插件」中的具体瓶颈，采用「给DeepSeek主循环装订单插件」对应的公开技术能力。玩家实施、合同、成效和资源数值均为游戏虚构，不代表品牌背书。 事实边界：Harness于2026-08发布开发者预览；只采用插件化基础架构，不把当前仓库的后来特性全部倒写为首发。"
        },
        {
          "id": "deepseek_harness_2026_main-qwen",
          "brand": "qwen",
          "label": "用千问工具调用接住旧接口",
          "result": "你们用Qwen-Agent给老系统包一层工具接口，暂缓拆掉整套后台。迁移预算省下一截，复杂订单仍须人工转接；老板终于承认旧代码还有退休手续。",
          "mode": "cooperate",
          "quarterDelta": {
            "cash": -12,
            "research": 3,
            "team": 1,
            "trust": 2,
            "risk": -1
          },
          "affinities": {
            "qwen": 11
          },
          "fromYear": 2026,
          "fromQuarter": 3,
          "sourceUrls": [
            "https://github.com/QwenLM/Qwen-Agent",
            "https://github.com/deepseek-ai/deepseek-harness"
          ],
          "rationale": "针对事件「连老板都想做成插件」中的具体瓶颈，采用「用千问工具调用接住旧接口」对应的公开技术能力。玩家实施、合同、成效和资源数值均为游戏虚构，不代表品牌背书。 事实边界：Harness于2026-08发布开发者预览；只采用插件化基础架构，不把当前仓库的后来特性全部倒写为首发。"
        },
        {
          "id": "deepseek_harness_2026_main-claude",
          "brand": "claude",
          "label": "与Claude争做少插件的代理",
          "result": "你们以Claude的简单工作流建议为参照，把二十个插件压成三段固定流程。发布更快，临时需求却不再随便塞；销售要为每一次例外重新报价。",
          "mode": "compete",
          "quarterDelta": {
            "cash": 22,
            "research": 2,
            "team": 2,
            "trust": 1,
            "risk": 1
          },
          "affinities": {
            "claude": -10
          },
          "fromYear": 2026,
          "fromQuarter": 3,
          "sourceUrls": [
            "https://www.anthropic.com/engineering/building-effective-agents",
            "https://github.com/deepseek-ai/deepseek-harness"
          ],
          "rationale": "针对事件「连老板都想做成插件」中的具体瓶颈，采用「与Claude争做少插件的代理」对应的公开技术能力。玩家实施、合同、成效和资源数值均为游戏虚构，不代表品牌背书。 事实边界：Harness于2026-08发布开发者预览；只采用插件化基础架构，不把当前仓库的后来特性全部倒写为首发。"
        },
        {
          "id": "deepseek_harness_2026_main-nvidia",
          "brand": "nvidia",
          "label": "把英伟达推理层做成可换后端",
          "result": "你们将TensorRT-LLM封进独立推理插件，业务流程终于不用跟着显卡配置重写。吞吐实验有了进展，但购卡和适配一起吃预算，热插拔也拔不掉电费。",
          "mode": "cooperate",
          "quarterDelta": {
            "cash": -34,
            "research": 5,
            "team": -2,
            "trust": 1,
            "risk": 1
          },
          "affinities": {
            "nvidia": 13
          },
          "fromYear": 2026,
          "fromQuarter": 3,
          "sourceUrls": [
            "https://github.com/NVIDIA/TensorRT-LLM",
            "https://github.com/deepseek-ai/deepseek-harness",
            "https://developer.nvidia.com/blog/nvidia-tensorrt-llm-supercharges-large-language-model-inference-on-nvidia-h100-gpus/"
          ],
          "rationale": "针对事件「连老板都想做成插件」中的具体瓶颈，采用「把英伟达推理层做成可换后端」对应的公开技术能力。玩家实施、合同、成效和资源数值均为游戏虚构，不代表品牌背书。 事实边界：Harness于2026-08发布开发者预览；只采用插件化基础架构，不把当前仓库的后来特性全部倒写为首发。"
        }
      ]
    },
    "tibo-double-reset": {
      "tags": [
        "compute",
        "code"
      ],
      "focusBrands": [
        "openai",
        "claude"
      ],
      "routes": [
        {
          "id": "self",
          "label": "自建缓存与调度，减少额度浪费",
          "result": "你投入大笔预算改进调度、缓存和训练流程，能力提升，关键工程仍握在自己手里。重置卡被锁进抽屉，财务称它为不可再生心理安慰。",
          "quarterDelta": {
            "cash": -36,
            "research": 5,
            "trust": 5,
            "team": -3
          },
          "affinities": {}
        },
        {
          "id": "public",
          "label": "联合训练，共享实验资源与成果",
          "result": "你付费参与开源社区训练，伙伴共享资源与成果，外界信任提高。大家把重置卡的使用日写进共同日历，第一次开会不是为了争谁先用。",
          "quarterDelta": {
            "cash": -24,
            "research": 3,
            "trust": 5,
            "team": -2
          },
          "affinities": {}
        }
      ],
      "contextOffers": [
        {
          "id": "tibo-double-reset-openai",
          "brand": "openai",
          "label": "用Codex重置额度清旧工单",
          "result": "你们趁当次额度恢复，把积压的小修复分批交给Codex，并给每单设截止时间。旧账清了一摞，新额度却不能当长期现金流；财务把免费二字从预算表里擦掉。",
          "mode": "cooperate",
          "quarterDelta": {
            "cash": 0,
            "research": 3,
            "team": 1,
            "trust": 1,
            "risk": 2
          },
          "affinities": {
            "openai": 10
          },
          "secondaryAffinities": {
            "claude": -3
          },
          "fromYear": 2026,
          "fromQuarter": 2,
          "sourceUrls": [
            "https://openai.com/index/introducing-codex/",
            "https://x.com/thsottiaux/status/2067399435009622521"
          ],
          "rationale": "针对事件「重置卡舍不得用」中的具体瓶颈，采用「用Codex重置额度清旧工单」对应的公开技术能力。玩家实施、合同、成效和资源数值均为游戏虚构，不代表品牌背书。 时间依据：现代Codex云端编码Agent发布于2025-05-16。 帖子事实沿用输入研究中已完成的X官方嵌入核验；当次额度福利不构成长期承诺，公开挖角玩笑不等于正式谈判。 质感修订：额度福利用于清内部工单，仅节省调用开销，不产生到账现金。"
        },
        {
          "id": "tibo-double-reset-xiaomi",
          "brand": "xiaomi",
          "label": "把日常补全迁到MiMo常驻服务",
          "result": "你们为MiMo-V2-Flash搭起常驻推理服务，让日常代码草稿不再等重置消息。前期部署花钱，团队排期安稳一些；收藏重置卡终于不再是核心生产力。",
          "mode": "cooperate",
          "quarterDelta": {
            "cash": -26,
            "research": 4,
            "team": 2,
            "trust": 1,
            "risk": 1
          },
          "affinities": {
            "xiaomi": 11
          },
          "fromYear": 2026,
          "fromQuarter": 2,
          "sourceUrls": [
            "https://mimo.xiaomi.com/mimo-v2-flash",
            "https://x.com/thsottiaux/status/2067399435009622521"
          ],
          "rationale": "针对事件「重置卡舍不得用」中的具体瓶颈，采用「把日常补全迁到MiMo常驻服务」对应的公开技术能力。玩家实施、合同、成效和资源数值均为游戏虚构，不代表品牌背书。 时间依据：MiMo-V2-Flash模型2025-12发布，报告2026-01-06；不是2026首次进入模型领域。 帖子事实沿用输入研究中已完成的X官方嵌入核验；当次额度福利不构成长期承诺，公开挖角玩笑不等于正式谈判。"
        },
        {
          "id": "tibo-double-reset-deepseek",
          "brand": "deepseek",
          "label": "用DeepSeek开放权重锁定月账单",
          "result": "你们租一小组机器跑DeepSeek开放模型，只接能覆盖租金的维护订单。额度焦虑换成机器利用率焦虑，至少长期合同里的成本不再靠下次惊喜重置。",
          "mode": "cooperate",
          "quarterDelta": {
            "cash": -22,
            "research": 4,
            "team": -1,
            "trust": 2,
            "risk": 1
          },
          "affinities": {
            "deepseek": 12
          },
          "secondaryAffinities": {
            "openai": -3
          },
          "fromYear": 2026,
          "fromQuarter": 2,
          "sourceUrls": [
            "https://github.com/deepseek-ai/DeepSeek-V3",
            "https://x.com/thsottiaux/status/2067399435009622521"
          ],
          "rationale": "针对事件「重置卡舍不得用」中的具体瓶颈，采用「用DeepSeek开放权重锁定月账单」对应的公开技术能力。玩家实施、合同、成效和资源数值均为游戏虚构，不代表品牌背书。 帖子事实沿用输入研究中已完成的X官方嵌入核验；当次额度福利不构成长期承诺，公开挖角玩笑不等于正式谈判。"
        },
        {
          "id": "tibo-double-reset-claude",
          "brand": "claude",
          "label": "向Claude路线竞标固定工时包",
          "result": "你们把客户需求切成固定范围的代码交付包，与Claude代理方案比总返工时间。预付款进账，超出范围就得重谈；重置卡留在抽屉，合同终于有了边界。",
          "mode": "compete",
          "quarterDelta": {
            "cash": 28,
            "research": 2,
            "team": -2,
            "trust": 1,
            "risk": 3
          },
          "affinities": {
            "claude": -11
          },
          "secondaryAffinities": {
            "openai": 3
          },
          "fromYear": 2026,
          "fromQuarter": 2,
          "sourceUrls": [
            "https://www.anthropic.com/engineering/building-effective-agents",
            "https://x.com/thsottiaux/status/2067399435009622521"
          ],
          "rationale": "针对事件「重置卡舍不得用」中的具体瓶颈，采用「向Claude路线竞标固定工时包」对应的公开技术能力。玩家实施、合同、成效和资源数值均为游戏虚构，不代表品牌背书。 帖子事实沿用输入研究中已完成的X官方嵌入核验；当次额度福利不构成长期承诺，公开挖角玩笑不等于正式谈判。"
        }
      ]
    },
    "tibo-orange-crab": {
      "tags": [
        "code",
        "product"
      ],
      "focusBrands": [
        "openai",
        "claude",
        "deepseek"
      ],
      "routes": [
        {
          "id": "self",
          "label": "自建可替换模型接口与调度",
          "result": "你大额投入独立接口和调度工程，模型组合能力提升。以后可以自己决定换哪颗脑子，只是财务提醒，螃蟹已经吃掉了一辆车的研发预算。",
          "quarterDelta": {
            "cash": -36,
            "research": 5,
            "trust": 5,
            "team": -3
          },
          "affinities": {}
        },
        {
          "id": "public",
          "label": "共建模型接口，公开切换记录",
          "result": "你付费与开源社区共同维护开放接口，伙伴能检查每次切换，信任提高。工程师还在接线，但这次有人一起扛梯子，壳里装什么也终于说得清。",
          "quarterDelta": {
            "cash": -24,
            "research": 3,
            "trust": 5,
            "team": -2
          },
          "affinities": {}
        }
      ],
      "contextOffers": [
        {
          "id": "tibo-orange-crab-openai",
          "brand": "openai",
          "label": "给GPT换芯保留原工作台",
          "result": "你们按公开示例研究模型适配，把GPT接入熟悉的工作台，并逐项检查工具参数。培训时间省了，适配器多了一份维护债；外壳没变不代表行为也完全相同。",
          "mode": "cooperate",
          "quarterDelta": {
            "cash": -16,
            "research": 4,
            "team": 1,
            "trust": 1,
            "risk": 2
          },
          "affinities": {
            "openai": 10
          },
          "fromYear": 2026,
          "fromQuarter": 3,
          "sourceUrls": [
            "https://openai.com/index/introducing-codex/",
            "https://x.com/thsottiaux/status/2076119366647894371"
          ],
          "rationale": "针对事件「橙色螃蟹换了颗心」中的具体瓶颈，采用「给GPT换芯保留原工作台」对应的公开技术能力。玩家实施、合同、成效和资源数值均为游戏虚构，不代表品牌背书。 时间依据：现代Codex云端编码Agent发布于2025-05-16。 帖子事实沿用输入研究中已完成的X官方嵌入核验；当次额度福利不构成长期承诺，公开挖角玩笑不等于正式谈判。"
        },
        {
          "id": "tibo-orange-crab-claude",
          "brand": "claude",
          "label": "保留Claude原生链路交付",
          "result": "你们为最赶的项目保留Claude原生模型和工作流，少一次协议转换。客户先收到补丁，财务随后收到用量单；螃蟹没有换心，项目也少了一次开胸手术。",
          "mode": "cooperate",
          "quarterDelta": {
            "cash": 24,
            "research": 3,
            "team": 1,
            "trust": 1,
            "risk": 2
          },
          "affinities": {
            "claude": 11
          },
          "fromYear": 2026,
          "fromQuarter": 3,
          "sourceUrls": [
            "https://www.anthropic.com/engineering/building-effective-agents",
            "https://x.com/thsottiaux/status/2076119366647894371"
          ],
          "rationale": "针对事件「橙色螃蟹换了颗心」中的具体瓶颈，采用「保留Claude原生链路交付」对应的公开技术能力。玩家实施、合同、成效和资源数值均为游戏虚构，不代表品牌背书。 帖子事实沿用输入研究中已完成的X官方嵌入核验；当次额度福利不构成长期承诺，公开挖角玩笑不等于正式谈判。"
        },
        {
          "id": "tibo-orange-crab-kimi",
          "brand": "kimi",
          "label": "用Kimi兼容接口做换芯演练",
          "result": "你们利用Kimi K2的兼容接口迁移一组工具调用，再检查中断和续跑行为。接口能通只是第一步，错误参数仍会出门撞墙；迁移小队因此暂时告别午休。",
          "mode": "cooperate",
          "quarterDelta": {
            "cash": -21,
            "research": 5,
            "team": -2,
            "trust": 2,
            "risk": 1
          },
          "affinities": {
            "kimi": 12
          },
          "fromYear": 2026,
          "fromQuarter": 3,
          "sourceUrls": [
            "https://github.com/MoonshotAI/Kimi-K2",
            "https://x.com/thsottiaux/status/2076119366647894371",
            "https://arxiv.org/abs/2507.20534"
          ],
          "rationale": "针对事件「橙色螃蟹换了颗心」中的具体瓶颈，采用「用Kimi兼容接口做换芯演练」对应的公开技术能力。玩家实施、合同、成效和资源数值均为游戏虚构，不代表品牌背书。 帖子事实沿用输入研究中已完成的X官方嵌入核验；当次额度福利不构成长期承诺，公开挖角玩笑不等于正式谈判。"
        },
        {
          "id": "tibo-orange-crab-qwen",
          "brand": "qwen",
          "label": "用千问开放代理重做工具层",
          "result": "你们改用Qwen-Agent重建读写工具，不再依赖外壳的隐含约定。开发期拉长，后续换模型更有底气；销售第一次学会把脑子与工具箱分别写进合同。",
          "mode": "cooperate",
          "quarterDelta": {
            "cash": -29,
            "research": 5,
            "team": -2,
            "trust": 3,
            "risk": -1
          },
          "affinities": {
            "qwen": 13
          },
          "fromYear": 2026,
          "fromQuarter": 3,
          "sourceUrls": [
            "https://github.com/QwenLM/Qwen-Agent",
            "https://x.com/thsottiaux/status/2076119366647894371"
          ],
          "rationale": "针对事件「橙色螃蟹换了颗心」中的具体瓶颈，采用「用千问开放代理重做工具层」对应的公开技术能力。玩家实施、合同、成效和资源数值均为游戏虚构，不代表品牌背书。 帖子事实沿用输入研究中已完成的X官方嵌入核验；当次额度福利不构成长期承诺，公开挖角玩笑不等于正式谈判。"
        }
      ]
    },
    "deepseek_harness_everything_plugin": {
      "tags": [
        "code",
        "open",
        "governance"
      ],
      "focusBrands": [
        "deepseek",
        "qwen"
      ],
      "routes": [
        {
          "id": "self",
          "label": "自研运行层与插件权限边界",
          "result": "你投入一大笔钱补齐运行层，团队把关键流程真正弄懂了。研发能力上了台阶，而“减少老板需求”插件仍在等待你的审批。",
          "quarterDelta": {
            "cash": -36,
            "research": 5,
            "trust": 5,
            "team": -3
          },
          "affinities": {}
        },
        {
          "id": "public",
          "label": "出资共同治理插件与接入规则",
          "result": "你支付维护费用，把规则交给公开讨论。决策没以前快，开发者却知道自己的插件不会一夜消失，信任逐渐变成了共同资产。",
          "quarterDelta": {
            "cash": -24,
            "research": 3,
            "trust": 5,
            "team": -2
          },
          "affinities": {}
        }
      ],
      "contextOffers": [
        {
          "id": "deepseek_harness_everything_plugin-deepseek",
          "brand": "deepseek",
          "label": "给Harness插件设公司签名清单",
          "result": "你们基于Harness插件机制建立内部发布清单，工资和付款工具另设权限。扩展速度慢一点，谁能替换主循环终于有记录；董事长仍然不能通过卸载逃避签字。",
          "mode": "cooperate",
          "quarterDelta": {
            "cash": -20,
            "research": 4,
            "team": -1,
            "trust": 4,
            "risk": -3
          },
          "affinities": {
            "deepseek": 10
          },
          "fromYear": 2026,
          "fromQuarter": 3,
          "sourceUrls": [
            "https://github.com/deepseek-ai/deepseek-harness"
          ],
          "rationale": "针对事件「老板能热插拔吗」中的具体瓶颈，采用「给Harness插件设公司签名清单」对应的公开技术能力。玩家实施、合同、成效和资源数值均为游戏虚构，不代表品牌背书。 事实边界：Harness于2026-08发布开发者预览；签名清单和权限边界为玩家实现，不声称官方首发自带。"
        },
        {
          "id": "deepseek_harness_everything_plugin-gemini",
          "brand": "gemini",
          "label": "用Google ADK固定部门交接",
          "result": "你们用ADK把销售、研发和财务串成明确的代理交接流程。架构自由度让出一部分，跨部门任务少跑冤枉路；公司控制权暂时没有变成第十九个插件。",
          "mode": "cooperate",
          "quarterDelta": {
            "cash": -25,
            "research": 5,
            "team": -2,
            "trust": 2,
            "risk": -1
          },
          "affinities": {
            "gemini": 11
          },
          "fromYear": 2026,
          "fromQuarter": 3,
          "sourceUrls": [
            "https://github.com/google/adk-python",
            "https://github.com/deepseek-ai/deepseek-harness",
            "https://developers.googleblog.com/en/agent-development-kit-easy-to-build-multi-agent-applications/"
          ],
          "rationale": "针对事件「老板能热插拔吗」中的具体瓶颈，采用「用Google ADK固定部门交接」对应的公开技术能力。玩家实施、合同、成效和资源数值均为游戏虚构，不代表品牌背书。 时间依据：Google ADK发布于2025-04-09。 事实边界：Harness于2026-08发布开发者预览；签名清单和权限边界为玩家实现，不声称官方首发自带。"
        },
        {
          "id": "kimi-task-handoff",
          "brand": "kimi",
          "label": "让Kimi只交接任务单，执行权留在公司",
          "result": "你们让Kimi提出下一步任务，再由内部调度器核对负责人、允许的工具和失败处理方式。模型可以换，谁能动文件却写进了自家规则；半夜的告警还是会响，至少不会再附送一个来历不明的老板。",
          "mode": "cooperate",
          "quarterDelta": {
            "cash": -31,
            "research": 5,
            "team": -2,
            "trust": 3,
            "risk": 1
          },
          "affinities": {
            "kimi": 12
          },
          "fromYear": 2026,
          "fromQuarter": 3,
          "sourceUrls": [
            "https://github.com/deepseek-ai/deepseek-harness"
          ],
          "rationale": "玩家基于已有模型能力自建任务调度与权限检查；事件资料仅提供插件背景，不证明Kimi参与相关项目或原生提供这些治理机制。 所列来源仅作事件背景；具体实施、合作、收入与资源变化均为游戏虚构，不代表现实合作或品牌背书。"
        },
        {
          "id": "deepseek_harness_everything_plugin-hunyuan",
          "brand": "xiaomi",
          "label": "用 MiMo 接管能验收的工单",
          "result": "你们用 MiMo 处理授权范围内的工单分类与草稿，把收费点放在按时完成的任务上。预付款缓解了现金压力，复杂例外仍需工程师处理；插件列表短了，客户的验收单却终于打了勾。",
          "mode": "cooperate",
          "quarterDelta": {
            "cash": 30,
            "research": 3,
            "team": -3,
            "trust": 1,
            "risk": 3
          },
          "affinities": {
            "xiaomi": 10
          },
          "fromYear": 2026,
          "fromQuarter": 3,
          "rationale": "保留原事件历史背景与数值；改为现有核心公司的玩家自建试验或虚构合作，不声称真实签约或尚未发布的产品能力。",
          "secondaryAffinities": {},
          "editorialSource": "research/company-balance-v21.json"
        }
      ]
    },
    "zcode_workspace_upload_controversy": {
      "tags": [
        "data",
        "code",
        "governance"
      ],
      "focusBrands": [
        "claude",
        "hunyuan"
      ],
      "routes": [
        {
          "id": "self",
          "label": "重写本地索引与授权流程",
          "result": "你砍掉一批便捷功能，花大钱重做本地索引和授权流程。演示变短了，研发却把数据链路摸透了，技术负责人终于能直接回答问题。",
          "quarterDelta": {
            "cash": -36,
            "research": 5,
            "trust": 5,
            "team": -3
          },
          "affinities": {}
        },
        {
          "id": "public",
          "label": "建立用户审查与公开数据规则",
          "result": "你付钱做公开审查，邀请用户一起决定数据规则。发现的问题写进修复清单，客户不再只听承诺，也开始愿意看你们的实际改动。",
          "quarterDelta": {
            "cash": -24,
            "research": 3,
            "trust": 5,
            "team": -2
          },
          "affinities": {}
        }
      ],
      "contextOffers": [
        {
          "id": "nvidia-code-network-audit",
          "brand": "nvidia",
          "label": "在英伟达节点核对源码到底往哪儿走",
          "result": "你们把代码试验放到自管GPU节点，记录每次网络请求，并在出网前展示文件清单和批准入口。硬件预算多了一笔，数据去向少了猜测；工程师把空白的流量报告拿给老板时，终于不用先解释空白不是没做事。",
          "mode": "cooperate",
          "quarterDelta": {
            "cash": -24,
            "research": 4,
            "team": -2,
            "trust": 4,
            "risk": -3
          },
          "affinities": {
            "nvidia": 10
          },
          "fromYear": 2026,
          "fromQuarter": 3,
          "sourceUrls": [
            "https://blog.ferstar.org/posts/zcode-silent-workspace-snapshot-upload/"
          ],
          "rationale": "以既有GPU基础设施承载玩家自建源码实验和网络审计；不推断争议软件发生泄露或用于训练，也不把本地硬件本身写成防上传保证。 所列来源仅作事件背景；具体实施、合作、收入与资源变化均为游戏虚构，不代表现实合作或品牌背书。"
        },
        {
          "id": "zcode_workspace_upload_controversy-qwen",
          "brand": "qwen",
          "label": "把千问代码索引留在内网",
          "result": "你们用可部署的千问模型处理本地代码索引，只向界面返回检索片段。整仓上传的担忧有了另一种解法，显存和索引维护却由自己承担，免费午餐并未出现。",
          "mode": "cooperate",
          "quarterDelta": {
            "cash": -33,
            "research": 5,
            "team": -2,
            "trust": 3,
            "risk": -2
          },
          "affinities": {
            "qwen": 11
          },
          "fromYear": 2026,
          "fromQuarter": 3,
          "sourceUrls": [
            "https://github.com/QwenLM/Qwen3",
            "https://blog.ferstar.org/posts/zcode-silent-workspace-snapshot-upload/"
          ],
          "rationale": "针对事件「把数据去向写进明处」中的具体瓶颈，采用「把千问代码索引留在内网」对应的公开技术能力。玩家实施、合同、成效和资源数值均为游戏虚构，不代表品牌背书。 事实边界：旧版机制、公司声明与调查者后续验证须分别归因；不把313MB失败上传写成泄露，不推断已训练，也不把旧链路写成新版仍存在。"
        },
        {
          "id": "zcode_workspace_upload_controversy-huawei",
          "brand": "huawei",
          "label": "在昇腾隔离区跑源码助手",
          "result": "你们把源码助手放到昇腾隔离环境，先让工程师逐个补齐不兼容的算子。文件流向容易说明了，交付时间却向后挪；客户愿意等，采购也要求真账单。",
          "mode": "cooperate",
          "quarterDelta": {
            "cash": -36,
            "research": 5,
            "team": -3,
            "trust": 4,
            "risk": -2
          },
          "affinities": {
            "huawei": 12
          },
          "secondaryAffinities": {
            "nvidia": -3
          },
          "fromYear": 2026,
          "fromQuarter": 3,
          "sourceUrls": [
            "https://github.com/Ascend/pytorch",
            "https://blog.ferstar.org/posts/zcode-silent-workspace-snapshot-upload/"
          ],
          "rationale": "针对事件「把数据去向写进明处」中的具体瓶颈，采用「在昇腾隔离区跑源码助手」对应的公开技术能力。玩家实施、合同、成效和资源数值均为游戏虚构，不代表品牌背书。 事实边界：旧版机制、公司声明与调查者后续验证须分别归因；不把313MB失败上传写成泄露，不推断已训练，也不把旧链路写成新版仍存在。"
        },
        {
          "id": "zcode_workspace_upload_controversy-claude",
          "brand": "claude",
          "label": "与Claude方案比最小代码授权",
          "result": "你们对标Claude工具工作流，将自己的助手改成只读取用户选定文件，并出售迁移服务。收入补上停服损失，功能范围也缩小了；争客户靠清楚边界，不靠指控。",
          "mode": "compete",
          "quarterDelta": {
            "cash": 19,
            "research": 3,
            "team": -1,
            "trust": 3,
            "risk": -1
          },
          "affinities": {
            "claude": -11
          },
          "fromYear": 2026,
          "fromQuarter": 3,
          "sourceUrls": [
            "https://www.anthropic.com/engineering/building-effective-agents",
            "https://blog.ferstar.org/posts/zcode-silent-workspace-snapshot-upload/"
          ],
          "rationale": "针对事件「把数据去向写进明处」中的具体瓶颈，采用「与Claude方案比最小代码授权」对应的公开技术能力。玩家实施、合同、成效和资源数值均为游戏虚构，不代表品牌背书。 事实边界：旧版机制、公司声明与调查者后续验证须分别归因；不把313MB失败上传写成泄露，不推断已训练，也不把旧链路写成新版仍存在。"
        }
      ]
    },
    "xiaomi_mimo_flash": {
      "tags": [
        "research",
        "compute"
      ],
      "focusBrands": [
        "xiaomi",
        "deepseek",
        "kimi"
      ],
      "routes": [
        {
          "id": "self",
          "label": "自研草稿生成与逐步验证",
          "result": "团队把草稿、接受和拒绝逐项做通。第一次提速成功后，产品又把任务加长了。",
          "quarterDelta": {
            "cash": -36,
            "research": 5,
            "trust": 5,
            "team": -3
          },
          "affinities": {}
        },
        {
          "id": "public",
          "label": "公开草稿接受率与推理对照实验",
          "result": "伙伴公开草稿长度、接受率和端到端速度，拿不同任务交叉测试。有人提速，有人发现草稿白写；共同报告让周报少了几个神奇百分比，也多了真正可用的设置。",
          "quarterDelta": {
            "cash": -24,
            "research": 3,
            "trust": 5,
            "team": -2
          },
          "affinities": {}
        }
      ],
      "contextOffers": [
        {
          "id": "xiaomi_mimo_flash-xiaomi",
          "brand": "xiaomi",
          "label": "为MiMo草稿验证调接受率",
          "result": "你们调整MiMo-V2-Flash的草稿长度，逐档检查主模型接受率和延迟。部分任务明显轻快，难题仍会反复打回；周报可以先起草，工资不能按草稿发。",
          "mode": "cooperate",
          "quarterDelta": {
            "cash": -23,
            "research": 6,
            "team": -2,
            "trust": 2,
            "risk": 1
          },
          "affinities": {
            "xiaomi": 10
          },
          "fromYear": 2026,
          "fromQuarter": 1,
          "sourceUrls": [
            "https://mimo.xiaomi.com/mimo-v2-flash"
          ],
          "rationale": "针对事件「草稿先跑，主模型来批」中的具体瓶颈，采用「为MiMo草稿验证调接受率」对应的公开技术能力。玩家实施、合同、成效和资源数值均为游戏虚构，不代表品牌背书。 时间依据：MiMo-V2-Flash模型2025-12发布，报告2026-01-06；不是2026首次进入模型领域。"
        },
        {
          "id": "xiaomi_mimo_flash-nvidia",
          "brand": "nvidia",
          "label": "让英伟达批量推理喂满显卡",
          "result": "你们用TensorRT-LLM重新安排批次与缓存，先把现有GPU吃满。吞吐改善需要真实流量配合，冷门请求反而可能多等一会；财务第一次关心队列长度。",
          "mode": "cooperate",
          "quarterDelta": {
            "cash": -30,
            "research": 5,
            "team": -2,
            "trust": 1,
            "risk": 2
          },
          "affinities": {
            "nvidia": 11
          },
          "secondaryAffinities": {
            "huawei": -3
          },
          "fromYear": 2026,
          "fromQuarter": 1,
          "sourceUrls": [
            "https://github.com/NVIDIA/TensorRT-LLM",
            "https://mimo.xiaomi.com/mimo-v2-flash",
            "https://developer.nvidia.com/blog/nvidia-tensorrt-llm-supercharges-large-language-model-inference-on-nvidia-h100-gpus/"
          ],
          "rationale": "针对事件「草稿先跑，主模型来批」中的具体瓶颈，采用「让英伟达批量推理喂满显卡」对应的公开技术能力。玩家实施、合同、成效和资源数值均为游戏虚构，不代表品牌背书。 时间依据：MiMo-V2-Flash模型2025-12发布，报告2026-01-06；不是2026首次进入模型领域。"
        },
        {
          "id": "xiaomi_mimo_flash-deepseek",
          "brand": "deepseek",
          "label": "用DeepSeek多词预测做对照",
          "result": "你们复现DeepSeek-V3的多token预测路线，比较不同任务的候选利用率。研究收获比发布会标题扎实，短期却少接了几单；不是每份草稿都值得提前写。",
          "mode": "cooperate",
          "quarterDelta": {
            "cash": -28,
            "research": 6,
            "team": -3,
            "trust": 2,
            "risk": 1
          },
          "affinities": {
            "deepseek": 12
          },
          "fromYear": 2026,
          "fromQuarter": 1,
          "sourceUrls": [
            "https://github.com/deepseek-ai/DeepSeek-V3",
            "https://mimo.xiaomi.com/mimo-v2-flash"
          ],
          "rationale": "针对事件「草稿先跑，主模型来批」中的具体瓶颈，采用「用DeepSeek多词预测做对照」对应的公开技术能力。玩家实施、合同、成效和资源数值均为游戏虚构，不代表品牌背书。 时间依据：MiMo-V2-Flash模型2025-12发布，报告2026-01-06；不是2026首次进入模型领域。"
        },
        {
          "id": "xiaomi_mimo_flash-qwen",
          "brand": "qwen",
          "label": "用千问大小模型分单抢低价单",
          "result": "你们用千问不同规模模型分流简单与复杂请求，向客户卖限范围的低价套餐。订单带来现金，分错单仍须大模型补做；快的秘密有时是先认清题目有多难。",
          "mode": "cooperate",
          "quarterDelta": {
            "cash": 25,
            "research": 3,
            "team": -1,
            "trust": 1,
            "risk": 3
          },
          "affinities": {
            "qwen": 13
          },
          "fromYear": 2026,
          "fromQuarter": 1,
          "sourceUrls": [
            "https://github.com/QwenLM/Qwen3",
            "https://mimo.xiaomi.com/mimo-v2-flash"
          ],
          "rationale": "针对事件「草稿先跑，主模型来批」中的具体瓶颈，采用「用千问大小模型分单抢低价单」对应的公开技术能力。玩家实施、合同、成效和资源数值均为游戏虚构，不代表品牌背书。 时间依据：MiMo-V2-Flash模型2025-12发布，报告2026-01-06；不是2026首次进入模型领域。"
        }
      ]
    },
    "doubao_gala_red_packets": {
      "tags": [
        "product",
        "compute"
      ],
      "focusBrands": [
        "xai",
        "qwen",
        "hunyuan"
      ],
      "routes": [
        {
          "id": "self",
          "label": "自建限流与降级，接节日试点",
          "result": "你们给互动服务补上限流、排队和降级，签下一笔规模可控的节日试点。客户付了款，团队守着仪表盘过年；红包发得不最多，告警也终于没抢主持人的话。",
          "quarterDelta": {
            "cash": 32,
            "research": 3,
            "trust": 1,
            "team": -3
          },
          "affinities": {}
        },
        {
          "id": "public",
          "label": "共同压测节日流量与调度工具",
          "result": "大家共同压测倒计时带来的流量，公开降级开关和恢复顺序。工具有了多个维护者，协调会议也排进了年夜饭；群里最诚恳的祝福仍是别出告警。",
          "quarterDelta": {
            "cash": -24,
            "research": 3,
            "trust": 5,
            "team": -2
          },
          "affinities": {}
        }
      ],
      "contextOffers": [
        {
          "id": "doubao_gala_red_packets-doubao",
          "brand": "xai",
          "label": "让 Grok 帮值班组读懂拥堵日志",
          "result": "你们用 Grok 归纳脱敏后的告警与日志，给运维列出需要优先检查的地方，再由人调整队列。活动服务费到账，系统没因为口播就获得无穷算力；值班同事终于能轮流吃口热饺子。",
          "mode": "cooperate",
          "quarterDelta": {
            "cash": 27,
            "research": 3,
            "team": -2,
            "trust": 1,
            "risk": 3
          },
          "affinities": {
            "xai": 10
          },
          "fromYear": 2026,
          "fromQuarter": 1,
          "rationale": "保留原事件历史背景与数值；改为现有核心公司的玩家自建试验或虚构合作，不声称真实签约或尚未发布的产品能力。",
          "secondaryAffinities": {},
          "editorialSource": "research/company-balance-v21.json"
        },
        {
          "id": "doubao_gala_red_packets-nvidia",
          "brand": "nvidia",
          "label": "租英伟达推理池顶住除夕峰值",
          "result": "你们为互动推理预留GPU容量，再用批处理吸收短时峰值。账单比平日明显厚了，服务却少掉几次线；财务把这笔钱记作服务器的年夜饭。",
          "mode": "cooperate",
          "quarterDelta": {
            "cash": -38,
            "research": 4,
            "team": -1,
            "trust": 3,
            "risk": -2
          },
          "affinities": {
            "nvidia": 11
          },
          "secondaryAffinities": {
            "huawei": -3
          },
          "fromYear": 2026,
          "fromQuarter": 1,
          "sourceUrls": [
            "https://github.com/NVIDIA/TensorRT-LLM",
            "https://www.cnr.cn/mspd/zhsh/20260210/t20260210_527522008.shtml",
            "https://developer.nvidia.com/blog/nvidia-tensorrt-llm-supercharges-large-language-model-inference-on-nvidia-h100-gpus/"
          ],
          "rationale": "针对事件「春晚一声口播，运维开始守岁」中的具体瓶颈，采用「租英伟达推理池顶住除夕峰值」对应的公开技术能力。玩家实施、合同、成效和资源数值均为游戏虚构，不代表品牌背书。 事实边界：春晚互动次数不等于独立用户数或峰值并发；活动奖励不代表现在仍可领取。"
        },
        {
          "id": "doubao_gala_red_packets-qwen",
          "brand": "qwen",
          "label": "用千问小模型做拜年分流",
          "result": "你们把普通拜年和复杂问答分开，让小型千问模型承担轻任务。接入费比全量大模型方案好看，难题偶尔分错还得补救；不是每句新年快乐都需要长考。",
          "mode": "cooperate",
          "quarterDelta": {
            "cash": 18,
            "research": 3,
            "team": -1,
            "trust": 1,
            "risk": 2
          },
          "affinities": {
            "qwen": 12
          },
          "fromYear": 2026,
          "fromQuarter": 1,
          "sourceUrls": [
            "https://github.com/QwenLM/Qwen3",
            "https://www.cnr.cn/mspd/zhsh/20260210/t20260210_527522008.shtml"
          ],
          "rationale": "针对事件「春晚一声口播，运维开始守岁」中的具体瓶颈，采用「用千问小模型做拜年分流」对应的公开技术能力。玩家实施、合同、成效和资源数值均为游戏虚构，不代表品牌背书。 事实边界：春晚互动次数不等于独立用户数或峰值并发；活动奖励不代表现在仍可领取。"
        },
        {
          "id": "doubao_gala_red_packets-wenxin",
          "brand": "gemini",
          "label": "让 Gemini 帮客服核对领奖材料",
          "result": "你们用 Gemini 辅助读取获准使用的凭证截图，将重复记录和缺件交给人工复核。核对工具投入了预算，也少了几轮反复追问；春晚散场以后，客服终于看清谁在等哪份礼品。",
          "mode": "cooperate",
          "quarterDelta": {
            "cash": -19,
            "research": 3,
            "team": 2,
            "trust": 3,
            "risk": -2
          },
          "affinities": {
            "gemini": 10
          },
          "fromYear": 2026,
          "fromQuarter": 1,
          "rationale": "保留原事件历史背景与数值；改为现有核心公司的玩家自建试验或虚构合作，不声称真实签约或尚未发布的产品能力。",
          "secondaryAffinities": {},
          "editorialSource": "research/company-balance-v21.json"
        }
      ]
    },
    "qwen_milk_tea_frenzy": {
      "tags": [
        "product",
        "code"
      ],
      "focusBrands": [
        "qwen",
        "xai"
      ],
      "routes": [
        {
          "id": "self",
          "label": "自建点单和履约状态机",
          "result": "系统跑通，团队点奶茶庆祝。最后大家被自己设计的排队规则拦在门外。",
          "quarterDelta": {
            "cash": -36,
            "research": 5,
            "trust": 5,
            "team": -3
          },
          "affinities": {}
        },
        {
          "id": "public",
          "label": "共建商户订单状态与异常规范",
          "result": "商户和开发者共同约定接单、制作、缺货与退款的状态。模型学会把正在制作说清楚，店员少解释一轮；规范发布得慢一点，奶茶也没有因此学会瞬移。",
          "quarterDelta": {
            "cash": -24,
            "research": 3,
            "trust": 5,
            "team": -2
          },
          "affinities": {}
        }
      ],
      "contextOffers": [
        {
          "id": "qwen_milk_tea_frenzy-qwen",
          "brand": "qwen",
          "label": "给千问点单补库存确认回合",
          "result": "你们在Qwen-Agent下单前加入库存查询与用户确认，售罄就展示可选替代。转化速度慢了一点，错误订单少了一些；模型终于学会奶茶店没有无限背包。",
          "mode": "cooperate",
          "quarterDelta": {
            "cash": -17,
            "research": 4,
            "team": -1,
            "trust": 4,
            "risk": -2
          },
          "affinities": {
            "qwen": 10
          },
          "fromYear": 2026,
          "fromQuarter": 1,
          "sourceUrls": [
            "https://github.com/QwenLM/Qwen-Agent",
            "https://www.bjnews.com.cn/detail/1770389721169888.html"
          ],
          "rationale": "针对事件「模型会点单，奶茶不会瞬移」中的具体瓶颈，采用「给千问点单补库存确认回合」对应的公开技术能力。玩家实施、合同、成效和资源数值均为游戏虚构，不代表品牌背书。 事实边界：奶茶优惠与流量事件是历史场景；库存查询、预约和限制接单为玩家的工具链实现，不断言官方当时已具备相同流程。"
        },
        {
          "id": "qwen_milk_tea_frenzy-hunyuan",
          "brand": "xiaomi",
          "label": "让 MiMo 整理奶茶售后工单",
          "result": "你们用 MiMo 核对商家授权的订单与退款记录，把异常情况交给真人。售后服务费到账，晚班仍要有人听用户解释。模型整理完了第三百杯奶茶，客服给自己点了一杯不加班。",
          "mode": "cooperate",
          "quarterDelta": {
            "cash": 29,
            "research": 3,
            "team": -3,
            "trust": 1,
            "risk": 2
          },
          "affinities": {
            "xiaomi": 10
          },
          "fromYear": 2026,
          "fromQuarter": 1,
          "rationale": "保留原事件历史背景与数值；改为现有核心公司的玩家自建试验或虚构合作，不声称真实签约或尚未发布的产品能力。",
          "secondaryAffinities": {},
          "editorialSource": "research/company-balance-v21.json"
        },
        {
          "id": "qwen_milk_tea_frenzy-nvidia",
          "brand": "nvidia",
          "label": "用英伟达扩推理并限制超卖",
          "result": "你们扩容推理池，同时按门店实际产能限制接单。服务器多花了一笔钱，骑手等待却不再被模型速度掩盖；技术负责人第一次认真研究每分钟能封几杯。",
          "mode": "cooperate",
          "quarterDelta": {
            "cash": -35,
            "research": 4,
            "team": -2,
            "trust": 3,
            "risk": -1
          },
          "affinities": {
            "nvidia": 12
          },
          "secondaryAffinities": {
            "huawei": -3
          },
          "fromYear": 2026,
          "fromQuarter": 1,
          "sourceUrls": [
            "https://github.com/NVIDIA/TensorRT-LLM",
            "https://www.bjnews.com.cn/detail/1770389721169888.html",
            "https://developer.nvidia.com/blog/nvidia-tensorrt-llm-supercharges-large-language-model-inference-on-nvidia-h100-gpus/"
          ],
          "rationale": "针对事件「模型会点单，奶茶不会瞬移」中的具体瓶颈，采用「用英伟达扩推理并限制超卖」对应的公开技术能力。玩家实施、合同、成效和资源数值均为游戏虚构，不代表品牌背书。 事实边界：奶茶优惠与流量事件是历史场景；库存查询、预约和限制接单为玩家的工具链实现，不断言官方当时已具备相同流程。"
        },
        {
          "id": "qwen_milk_tea_frenzy-doubao",
          "brand": "xai",
          "label": "用 Grok 做只收预约的取餐助手",
          "result": "你们用 Grok 整理预订信息，只接受商家确认过的取餐时段，最后由用户确认。预付款先到账，爆单时也不许偷偷改成马上送达。顾客少等了一会儿，店员终于有空把封口贴正。",
          "mode": "cooperate",
          "quarterDelta": {
            "cash": 23,
            "research": 2,
            "team": -1,
            "trust": 2,
            "risk": 2
          },
          "affinities": {
            "xai": 10
          },
          "fromYear": 2026,
          "fromQuarter": 1,
          "rationale": "保留原事件历史背景与数值；改为现有核心公司的玩家自建试验或虚构合作，不声称真实签约或尚未发布的产品能力。",
          "secondaryAffinities": {},
          "editorialSource": "research/company-balance-v21.json"
        }
      ]
    },
    "tencent_yao_react_hunyuan": {
      "tags": [
        "code",
        "research"
      ],
      "focusBrands": [
        "kimi",
        "openai",
        "deepseek"
      ],
      "routes": [
        {
          "id": "self",
          "label": "自研推理、行动、观察循环",
          "result": "推理、行动、观察全跑通了。第一次观察结果是权限不足，团队决定先把权限文档读完。",
          "quarterDelta": {
            "cash": -36,
            "research": 5,
            "trust": 5,
            "team": -3
          },
          "affinities": {}
        },
        {
          "id": "public",
          "label": "共研工具调用与反馈测试集",
          "result": "大家公开工具调用和反馈轨迹，专门收集权限不足、超时和无效重试。模型开始先看结果再继续，人类也终于停止用多点几次当作排障方案。",
          "quarterDelta": {
            "cash": -24,
            "research": 3,
            "trust": 5,
            "team": -2
          },
          "affinities": {}
        }
      ],
      "contextOffers": [
        {
          "id": "tencent_yao_react_hunyuan-hunyuan",
          "brand": "kimi",
          "label": "让 Kimi 看到回执才说完成",
          "result": "你们用 Kimi 调用受限的查询工具，执行后必须读取系统回执，再把结果交给用户。试点客户愿意付钱，复杂流程仍要逐个接入；前端同事终于不用替后端还没做完的事画绿色对勾。",
          "mode": "cooperate",
          "quarterDelta": {
            "cash": 21,
            "research": 5,
            "team": -2,
            "trust": 2,
            "risk": 1
          },
          "affinities": {
            "kimi": 10
          },
          "fromYear": 2026,
          "fromQuarter": 2,
          "rationale": "保留原事件历史背景与数值；改为现有核心公司的玩家自建试验或虚构合作，不声称真实签约或尚未发布的产品能力。",
          "secondaryAffinities": {},
          "editorialSource": "research/company-balance-v21.json"
        },
        {
          "id": "tencent_yao_react_hunyuan-qwen",
          "brand": "qwen",
          "label": "用Qwen-Agent搭可回退动作链",
          "result": "你们用Qwen-Agent把每次工具动作和失败补偿写清楚，优先上线可撤回的订单修改。研发时间增加，客服补锅减少；推理写得再长，也不能让退货单自行消失。",
          "mode": "cooperate",
          "quarterDelta": {
            "cash": -24,
            "research": 5,
            "team": -2,
            "trust": 3,
            "risk": -2
          },
          "affinities": {
            "qwen": 11
          },
          "fromYear": 2026,
          "fromQuarter": 2,
          "sourceUrls": [
            "https://github.com/QwenLM/Qwen-Agent",
            "https://www.tencent.com/index.php/en-us/articles/2202320.html"
          ],
          "rationale": "针对事件「前端来了，才知道是 ReAct」中的具体瓶颈，采用「用Qwen-Agent搭可回退动作链」对应的公开技术能力。玩家实施、合同、成效和资源数值均为游戏虚构，不代表品牌背书。 时间依据：混元Hy3 preview官方公告2026-04-24；不将ReAct倒写成腾讯2022年的发明。"
        },
        {
          "id": "tencent_yao_react_hunyuan-claude",
          "brand": "claude",
          "label": "用Claude固定流程替代无尽循环",
          "result": "你们按Claude工作流思路，把常见任务限制在几步确定分支内。简单工单能尽快收费，陌生需求会转给真人；代理终于不再把思考下一步当成永久岗位。",
          "mode": "cooperate",
          "quarterDelta": {
            "cash": 24,
            "research": 3,
            "team": 2,
            "trust": 1,
            "risk": 1
          },
          "affinities": {
            "claude": 12
          },
          "fromYear": 2026,
          "fromQuarter": 2,
          "sourceUrls": [
            "https://www.anthropic.com/engineering/building-effective-agents",
            "https://www.tencent.com/index.php/en-us/articles/2202320.html"
          ],
          "rationale": "针对事件「前端来了，才知道是 ReAct」中的具体瓶颈，采用「用Claude固定流程替代无尽循环」对应的公开技术能力。玩家实施、合同、成效和资源数值均为游戏虚构，不代表品牌背书。 时间依据：混元Hy3 preview官方公告2026-04-24；不将ReAct倒写成腾讯2022年的发明。"
        },
        {
          "id": "tencent_yao_react_hunyuan-gemini",
          "brand": "gemini",
          "label": "用Google ADK拆分查询与执行",
          "result": "你们用ADK把查资料与改业务数据分成两个代理，明确传递结果再行动。团队多维护一套交接，但误把猜测当事实的机会变少；前端因此少背了几口锅。",
          "mode": "cooperate",
          "quarterDelta": {
            "cash": -27,
            "research": 5,
            "team": -2,
            "trust": 3,
            "risk": -1
          },
          "affinities": {
            "gemini": 13
          },
          "fromYear": 2026,
          "fromQuarter": 2,
          "sourceUrls": [
            "https://github.com/google/adk-python",
            "https://www.tencent.com/index.php/en-us/articles/2202320.html",
            "https://developers.googleblog.com/en/agent-development-kit-easy-to-build-multi-agent-applications/"
          ],
          "rationale": "针对事件「前端来了，才知道是 ReAct」中的具体瓶颈，采用「用Google ADK拆分查询与执行」对应的公开技术能力。玩家实施、合同、成效和资源数值均为游戏虚构，不代表品牌背书。 时间依据：混元Hy3 preview官方公告2026-04-24；不将ReAct倒写成腾讯2022年的发明。Google ADK发布于2025-04-09。"
        }
      ]
    },
    "kimi-claude-routing-allegation": {
      "tags": [
        "data",
        "governance"
      ],
      "focusBrands": [
        "kimi",
        "claude"
      ],
      "routes": [
        {
          "id": "self",
          "label": "自建可核验的模型路由网关",
          "result": "团队花更多钱自建推理与核验沙盒，研发能力和信任一起提升。采购终于能回答模型在哪，只是财务不愿回答钱在哪。",
          "quarterDelta": {
            "cash": -36,
            "research": 5,
            "trust": 5,
            "team": -3
          },
          "affinities": {}
        },
        {
          "id": "public",
          "label": "公开路由账本与服务来源规则",
          "result": "你们出钱公开路由账本，邀请用户核对每次服务来源与切换记录。客户不必靠传闻猜测请求去了哪里，维护团队却得认真解释每一条复杂航线。",
          "quarterDelta": {
            "cash": -24,
            "research": 3,
            "trust": 5,
            "team": -2
          },
          "affinities": {}
        }
      ],
      "contextOffers": [
        {
          "id": "kimi-claude-routing-allegation-kimi",
          "brand": "kimi",
          "label": "自托管Kimi并公示模型版本",
          "result": "你们部署Kimi开放权重，向客户列出版本、托管地点与请求记录。成本上升换来可说明的链路；Anthropic的单方指控仍按指控记载，部署演示不替争议下结论。",
          "mode": "cooperate",
          "quarterDelta": {
            "cash": -37,
            "research": 5,
            "team": -2,
            "trust": 4,
            "risk": -2
          },
          "affinities": {
            "kimi": 10
          },
          "fromYear": 2026,
          "fromQuarter": 3,
          "sourceUrls": [
            "https://github.com/MoonshotAI/Kimi-K2",
            "https://www.anthropic.com/threat-intelligence-report-september-2026",
            "https://arxiv.org/abs/2507.20534"
          ],
          "rationale": "针对事件「好模型，也要有一本明白账」中的具体瓶颈，采用「自托管Kimi并公示模型版本」对应的公开技术能力。玩家实施、合同、成效和资源数值均为游戏虚构，不代表品牌背书。 事实边界：事件事实仅为Anthropic已公开提出单方指控；不推断Moonshot承认，不用模型自我介绍或兼容接口证明路由。"
        },
        {
          "id": "kimi-claude-routing-allegation-claude",
          "brand": "claude",
          "label": "核对客户自持 Claude 服务的交付账",
          "result": "符合服务条件的客户交来授权导出的账单与任务记录，你们按约定核对费用、来源和交付，收取审阅服务费。客户继续自己管理账号，你们没有因此恢复访问权限；清楚买了什么，比让模型自报姓名可靠。",
          "mode": "cooperate",
          "quarterDelta": {
            "cash": 17,
            "research": 3,
            "team": 1,
            "trust": 3,
            "risk": 1
          },
          "affinities": {
            "claude": 11
          },
          "fromYear": 2026,
          "fromQuarter": 3,
          "sourceUrls": [
            "https://www.anthropic.com/engineering/building-effective-agents",
            "https://www.anthropic.com/threat-intelligence-report-september-2026",
            "https://www.anthropic.com/news/updating-restrictions-of-sales-to-unsupported-regions"
          ],
          "rationale": "针对事件「好模型，也要有一本明白账」中的具体瓶颈，采用「直接采购Claude并标明服务方」对应的公开技术能力。玩家实施、合同、成效和资源数值均为游戏虚构，不代表品牌背书。 事实边界：事件事实仅为Anthropic已公开提出单方指控；不推断Moonshot承认，不用模型自我介绍或兼容接口证明路由。 连续性修订：2025Q3地区限制仍成立，本选项仅审阅符合条件客户授权提供的材料，不代客户登录、不转售访问，也不暗示玩家公司自动恢复Claude服务。"
        },
        {
          "id": "kimi-claude-routing-allegation-huawei",
          "brand": "huawei",
          "label": "用昇腾部署可点验的模型网关",
          "result": "你们在自管昇腾环境部署网关和指定开放模型，向客户交付实际配置与调用记录。采购成本重了一截，供应链说明具体了；网关日志也不会自动证明别家做过什么。",
          "mode": "cooperate",
          "quarterDelta": {
            "cash": -39,
            "research": 4,
            "team": -3,
            "trust": 4,
            "risk": -2
          },
          "affinities": {
            "huawei": 12
          },
          "secondaryAffinities": {
            "nvidia": -3
          },
          "fromYear": 2026,
          "fromQuarter": 3,
          "sourceUrls": [
            "https://github.com/Ascend/pytorch",
            "https://www.anthropic.com/threat-intelligence-report-september-2026"
          ],
          "rationale": "针对事件「好模型，也要有一本明白账」中的具体瓶颈，采用「用昇腾部署可点验的模型网关」对应的公开技术能力。玩家实施、合同、成效和资源数值均为游戏虚构，不代表品牌背书。 事实边界：事件事实仅为Anthropic已公开提出单方指控；不推断Moonshot承认，不用模型自我介绍或兼容接口证明路由。"
        },
        {
          "id": "kimi-claude-routing-allegation-qwen",
          "brand": "qwen",
          "label": "用千问固定模型套餐争透明订单",
          "result": "你们拿千问开放部署做固定版本套餐，与动态路由服务竞标。客户知道请求落在哪组机器，灵活调度空间却缩小；清晰账单带来订单，容量不足仍得自己补。",
          "mode": "compete",
          "quarterDelta": {
            "cash": 26,
            "research": 3,
            "team": -2,
            "trust": 3,
            "risk": 2
          },
          "affinities": {
            "qwen": -11
          },
          "fromYear": 2026,
          "fromQuarter": 3,
          "sourceUrls": [
            "https://github.com/QwenLM/Qwen3",
            "https://www.anthropic.com/threat-intelligence-report-september-2026"
          ],
          "rationale": "针对事件「好模型，也要有一本明白账」中的具体瓶颈，采用「用千问固定模型套餐争透明订单」对应的公开技术能力。玩家实施、合同、成效和资源数值均为游戏虚构，不代表品牌背书。 事实边界：事件事实仅为Anthropic已公开提出单方指控；不推断Moonshot承认，不用模型自我介绍或兼容接口证明路由。"
        }
      ]
    },
    "opencode-model-buffet": {
      "tags": [
        "code",
        "open"
      ],
      "focusBrands": [
        "openai",
        "deepseek",
        "qwen"
      ],
      "routes": [
        {
          "id": "self",
          "label": "自建模型切换与工具兼容试验场",
          "result": "研发投入更多资金建设独立沙盒，逐个测量模型和工具的配合。信任与研发提升，菜单终于开始写实测份量。",
          "quarterDelta": {
            "cash": -36,
            "research": 5,
            "trust": 5,
            "team": -3
          },
          "affinities": {}
        },
        {
          "id": "public",
          "label": "共同维护开放模型目录与接入规则",
          "result": "大家共同维护模型目录、费用与工具兼容记录，接入规则接受公开讨论。选择更多了，维护会议也进入每周菜单；终于有人发现菜单上的便宜未必等于吃饱的便宜。",
          "quarterDelta": {
            "cash": -24,
            "research": 3,
            "trust": 5,
            "team": -2
          },
          "affinities": {}
        }
      ],
      "contextOffers": [
        {
          "id": "opencode-model-buffet-openai",
          "brand": "openai",
          "label": "在OpenCode固定GPT修复专席",
          "result": "你们给OpenCode中的GPT路线分配专门凭据和修复预算，只处理已有测试的工单。研发少切几个页面，费用却必须按项目记清；模型菜单终于不是无限量自助餐。",
          "mode": "cooperate",
          "quarterDelta": {
            "cash": 22,
            "research": 4,
            "team": -1,
            "trust": 2,
            "risk": 2
          },
          "affinities": {
            "openai": 10
          },
          "fromYear": 2026,
          "fromQuarter": 4,
          "sourceUrls": [
            "https://openai.com/index/introducing-codex/",
            "https://opencode.ai/"
          ],
          "rationale": "针对事件「今晚的模型随便换」中的具体瓶颈，采用「在OpenCode固定GPT修复专席」对应的公开技术能力。玩家实施、合同、成效和资源数值均为游戏虚构，不代表品牌背书。 时间依据：现代Codex云端编码Agent发布于2025-05-16。"
        },
        {
          "id": "opencode-model-buffet-kimi",
          "brand": "kimi",
          "label": "让Kimi接手长仓库迁移任务",
          "result": "你们把需要大量上下文的迁移工单交给Kimi路线，并保存每次选用的模型配置。少来回粘贴文档，长任务仍会耗时；餐厅换菜不收费的幻想被用量单及时纠正。",
          "mode": "cooperate",
          "quarterDelta": {
            "cash": -18,
            "research": 5,
            "team": -2,
            "trust": 2,
            "risk": 1
          },
          "affinities": {
            "kimi": 11
          },
          "fromYear": 2026,
          "fromQuarter": 4,
          "sourceUrls": [
            "https://github.com/MoonshotAI/Kimi-K2",
            "https://opencode.ai/",
            "https://arxiv.org/abs/2507.20534"
          ],
          "rationale": "针对事件「今晚的模型随便换」中的具体瓶颈，采用「让Kimi接手长仓库迁移任务」对应的公开技术能力。玩家实施、合同、成效和资源数值均为游戏虚构，不代表品牌背书。"
        },
        {
          "id": "opencode-model-buffet-qwen",
          "brand": "qwen",
          "label": "给OpenCode装本地千问备餐台",
          "result": "你们为小修小补配置本地千问，把大模型额度留给棘手问题。机器先花钱，日常请求有了稳定去处；换脑按钮旁边终于出现了本机忙碌，请稍等。",
          "mode": "cooperate",
          "quarterDelta": {
            "cash": -29,
            "research": 4,
            "team": 1,
            "trust": 2,
            "risk": 1
          },
          "affinities": {
            "qwen": 12
          },
          "fromYear": 2026,
          "fromQuarter": 4,
          "sourceUrls": [
            "https://github.com/QwenLM/Qwen3",
            "https://opencode.ai/"
          ],
          "rationale": "针对事件「今晚的模型随便换」中的具体瓶颈，采用「给OpenCode装本地千问备餐台」对应的公开技术能力。玩家实施、合同、成效和资源数值均为游戏虚构，不代表品牌背书。"
        },
        {
          "id": "deepseek-fixed-repair-competition",
          "brand": "deepseek",
          "label": "做定价修复包，争DeepSeek路线的订单",
          "result": "面对客户正在试的DeepSeek编码路线，你们推出按缺陷清单报价的独立维修套餐，修完一项就交测试记录。收入不再跟着模型菜单摇摆，老框架仍会吞掉工时；自助餐再热闹，也有人愿意为洗好一口旧锅付钱。",
          "mode": "compete",
          "quarterDelta": {
            "cash": 30,
            "research": 3,
            "team": -3,
            "trust": 1,
            "risk": 3
          },
          "affinities": {
            "deepseek": -11
          },
          "fromYear": 2026,
          "fromQuarter": 4,
          "sourceUrls": [
            "https://opencode.ai/"
          ],
          "rationale": "虚构的服务竞争选择：玩家用固定范围与交付责任争取采用DeepSeek路线的客户；不编造该公司真实订单损失、官方套餐或能力输赢。 所列来源仅作事件背景；具体实施、合作、收入与资源变化均为游戏虚构，不代表现实合作或品牌背书。"
        }
      ]
    },
    "pi-four-tools-no-issues": {
      "tags": [
        "code",
        "open"
      ],
      "focusBrands": [
        "claude",
        "deepseek"
      ],
      "routes": [
        {
          "id": "self",
          "label": "自建四工具沙盒，删减冗余功能",
          "result": "公司花更多钱打造独立沙盒，精练工具并补齐可追踪执行。研发和信任上升，功能列表终于能在一口气里念完。",
          "quarterDelta": {
            "cash": -36,
            "research": 5,
            "trust": 5,
            "team": -3
          },
          "affinities": {}
        },
        {
          "id": "public",
          "label": "共同维护极简工具与公开评审",
          "result": "共同工具集只保留读、写、改、运行，每次新增能力都要公开说明。设置页终于变短，评审讨论却变长；产品经理第一次申请把少开会也列成一把工具。",
          "quarterDelta": {
            "cash": -24,
            "research": 3,
            "trust": 5,
            "team": -2
          },
          "affinities": {}
        }
      ],
      "contextOffers": [
        {
          "id": "pi-four-tools-no-issues-claude",
          "brand": "claude",
          "label": "用Claude直连四工具缩小代理",
          "result": "你们用Claude配合读、写、改、运行四类工具重建小代理，先删掉无用模式。开发者上手更快，复杂任务需要手工拆分；客服没能靠改名失业，只是工单更清楚了。",
          "mode": "cooperate",
          "quarterDelta": {
            "cash": 17,
            "research": 3,
            "team": 2,
            "trust": 1,
            "risk": 1
          },
          "affinities": {
            "claude": 10
          },
          "fromYear": 2026,
          "fromQuarter": 1,
          "sourceUrls": [
            "https://www.anthropic.com/engineering/building-effective-agents",
            "https://mariozechner.at/posts/2025-11-30-pi-coding-agent/"
          ],
          "rationale": "针对事件「四把工具，零个借口」中的具体瓶颈，采用「用Claude直连四工具缩小代理」对应的公开技术能力。玩家实施、合同、成效和资源数值均为游戏虚构，不代表品牌背书。 事实边界：四工具描述来自2025-11-30作者文章；场景是2026回顾，不断言后续版本没有扩展能力。"
        },
        {
          "id": "pi-four-tools-no-issues-deepseek",
          "brand": "deepseek",
          "label": "让DeepSeek接手终端小任务",
          "result": "你们用DeepSeek模型驱动极简终端循环，只承担有明确输入输出的小工单。调用成本更好控制，失败回合仍由人接手；四把工具不是四张免死金牌。",
          "mode": "cooperate",
          "quarterDelta": {
            "cash": 20,
            "research": 4,
            "team": -1,
            "trust": 1,
            "risk": 2
          },
          "affinities": {
            "deepseek": 11
          },
          "fromYear": 2026,
          "fromQuarter": 1,
          "sourceUrls": [
            "https://github.com/deepseek-ai/DeepSeek-V3",
            "https://mariozechner.at/posts/2025-11-30-pi-coding-agent/"
          ],
          "rationale": "针对事件「四把工具，零个借口」中的具体瓶颈，采用「让DeepSeek接手终端小任务」对应的公开技术能力。玩家实施、合同、成效和资源数值均为游戏虚构，不代表品牌背书。 事实边界：四工具描述来自2025-11-30作者文章；场景是2026回顾，不断言后续版本没有扩展能力。"
        },
        {
          "id": "huawei-offline-four-tools",
          "brand": "huawei",
          "label": "在华为内网环境给四把工具划边界",
          "result": "你们把读取、修改、搜索和运行交给内部服务，在华为基础设施上逐项限制目录和执行范围。界面只剩几个入口，维护手册却不能跟着删薄；同事找得到工具以后，终于开始认真提交故障单。",
          "mode": "cooperate",
          "quarterDelta": {
            "cash": -30,
            "research": 5,
            "team": -2,
            "trust": 3,
            "risk": 1
          },
          "affinities": {
            "huawei": 12
          },
          "fromYear": 2026,
          "fromQuarter": 1,
          "sourceUrls": [
            "https://mariozechner.at/posts/2025-11-30-pi-coding-agent/"
          ],
          "rationale": "玩家在既有基础设施上构建内网工具服务与权限规则；四工具是对事件理念的自建实现，不声称华为提供相关作者的官方产品或默认适配。 所列来源仅作事件背景；具体实施、合作、收入与资源变化均为游戏虚构，不代表现实合作或品牌背书。"
        },
        {
          "id": "pi-four-tools-no-issues-qwen",
          "brand": "qwen",
          "label": "给千问四工具加表格执行器",
          "result": "你们用Qwen-Agent的代码执行能力处理表格，把界面压成上传、运行和查看结果。首批报表服务回款，异常表头仍要人修；少几个按钮，并没有少掉业务知识。",
          "mode": "cooperate",
          "quarterDelta": {
            "cash": 25,
            "research": 3,
            "team": -2,
            "trust": 1,
            "risk": 2
          },
          "affinities": {
            "qwen": 13
          },
          "fromYear": 2026,
          "fromQuarter": 1,
          "sourceUrls": [
            "https://github.com/QwenLM/Qwen-Agent",
            "https://mariozechner.at/posts/2025-11-30-pi-coding-agent/"
          ],
          "rationale": "针对事件「四把工具，零个借口」中的具体瓶颈，采用「给千问四工具加表格执行器」对应的公开技术能力。玩家实施、合同、成效和资源数值均为游戏虚构，不代表品牌背书。 事实边界：四工具描述来自2025-11-30作者文章；场景是2026回顾，不断言后续版本没有扩展能力。"
        }
      ]
    },
    "openai-dots-cloud-colleague": {
      "tags": [
        "code",
        "product",
        "governance"
      ],
      "focusBrands": [
        "openai",
        "claude"
      ],
      "routes": [
        {
          "id": "self",
          "label": "自研云端沙盒与持续任务记忆",
          "result": "公司用更高预算建设自己的云端沙盒，把持续任务和授权记录做完整。信任与研发提高，人事终于有了一张能读懂的权限表。",
          "quarterDelta": {
            "cash": -36,
            "research": 5,
            "trust": 5,
            "team": -3
          },
          "affinities": {}
        },
        {
          "id": "public",
          "label": "共建助理工具链和授权规范",
          "result": "你出资和开发者共建持续任务、记忆与授权规范，催款流程交给多方检查。云端同事多了可复用的技能，老板也少了一条悄悄跳过审批的近路。",
          "quarterDelta": {
            "cash": -24,
            "research": 3,
            "trust": 5,
            "team": -2
          },
          "affinities": {}
        }
      ],
      "contextOffers": [
        {
          "id": "openai-dots-cloud-colleague-openai",
          "brand": "openai",
          "label": "让Dots找漏票并等人签发",
          "result": "你们给Dots连接业务记录，先查漏开的发票，再把待发草稿交给财务确认。催款服务带来回款，账户权限要持续维护；云端同事全天在线，也不能替老板乱签字。",
          "mode": "cooperate",
          "quarterDelta": {
            "cash": 28,
            "research": 4,
            "team": -1,
            "trust": 3,
            "risk": 1
          },
          "affinities": {
            "openai": 10
          },
          "fromYear": 2026,
          "fromQuarter": 3,
          "sourceUrls": [
            "https://openai.com/index/introducing-dots/"
          ],
          "rationale": "针对事件「新同事住在云里」中的具体瓶颈，采用「让Dots找漏票并等人签发」对应的公开技术能力。玩家实施、合同、成效和资源数值均为游戏虚构，不代表品牌背书。 时间依据：Dots官方发布2026-09-29，外部发送须用户批准。 事实边界：Dots资料中的发票发送有用户批准；结果不授权代理绕过审批。"
        },
        {
          "id": "openai-dots-cloud-colleague-xai",
          "brand": "xai",
          "label": "用Grok Bot分开查款与催办",
          "result": "你们让Grok Bot分工查订单和整理催办清单，并约定共享环境里的文件归属。交接快了，管理成本也涨了；机器人可以开群，谁能改账仍得由人说清楚。",
          "mode": "cooperate",
          "quarterDelta": {
            "cash": -22,
            "research": 5,
            "team": -2,
            "trust": 2,
            "risk": 2
          },
          "affinities": {
            "xai": 11
          },
          "fromYear": 2026,
          "fromQuarter": 3,
          "sourceUrls": [
            "https://x.ai/news/introducing-grok-bot",
            "https://openai.com/index/introducing-dots/"
          ],
          "rationale": "针对事件「新同事住在云里」中的具体瓶颈，采用「用Grok Bot分开查款与催办」对应的公开技术能力。玩家实施、合同、成效和资源数值均为游戏虚构，不代表品牌背书。 时间依据：Grok Bot官方发布2026-08-11；玩家分工及管理后果虚构。Dots官方发布2026-09-29，外部发送须用户批准。 事实边界：Dots资料中的发票发送有用户批准；结果不授权代理绕过审批。"
        },
        {
          "id": "openai-dots-cloud-colleague-wenxin",
          "brand": "gemini",
          "label": "用 Gemini 先找齐发票和订单",
          "result": "你们用 Gemini 整理获准读取的票据图片与订单记录，把无法对应的项目交给财务。预算花在了旧资料上，自动报销还没实现；但那张找了半个月的发票，终于从截图堆里露了面。",
          "mode": "cooperate",
          "quarterDelta": {
            "cash": -18,
            "research": 3,
            "team": 2,
            "trust": 4,
            "risk": -2
          },
          "affinities": {
            "gemini": 10
          },
          "fromYear": 2026,
          "fromQuarter": 3,
          "rationale": "保留原事件历史背景与数值；改为现有核心公司的玩家自建试验或虚构合作，不声称真实签约或尚未发布的产品能力。",
          "secondaryAffinities": {},
          "editorialSource": "research/company-balance-v21.json"
        },
        {
          "id": "openai-dots-cloud-colleague-hunyuan",
          "brand": "xiaomi",
          "label": "让 MiMo 整理催款前缺的附件",
          "result": "你们用 MiMo 辅助匹配授权目录里的订单与交付材料，附件齐全后才生成催款草稿。财务少翻了几层文件夹，原件仍由人确认；新同事先没学会催人，倒学会了不把空白附件寄出去。",
          "mode": "cooperate",
          "quarterDelta": {
            "cash": -8,
            "research": 3,
            "team": 1,
            "trust": 2,
            "risk": 1
          },
          "affinities": {
            "xiaomi": 10
          },
          "fromYear": 2026,
          "fromQuarter": 3,
          "rationale": "保留原事件历史背景；改为现有核心公司的玩家自建试验或虚构合作，不声称真实签约或尚未发布的产品能力。 质感修订：匹配订单附件、生成催款草稿尚未催款收账，是内部工具的部署支出。",
          "secondaryAffinities": {},
          "editorialSource": "research/company-balance-v21.json"
        }
      ]
    },
    "grokbot-bots-manage-bots": {
      "tags": [
        "code",
        "governance"
      ],
      "focusBrands": [
        "xai",
        "openai",
        "hunyuan"
      ],
      "routes": [
        {
          "id": "self",
          "label": "自研隔离协作与交接验收",
          "result": "团队用更多预算搭起独立协作沙盒，明确交接记录与资源边界。研发和信任提升，机器人终于不能靠拉群证明自己很忙。",
          "quarterDelta": {
            "cash": -36,
            "research": 5,
            "trust": 5,
            "team": -3
          },
          "affinities": {}
        },
        {
          "id": "public",
          "label": "共建多代理职责与通信协议",
          "result": "大家共同制定助理职责、交接和通信协议，要求每次转交都带验收条件。机器人不能只靠拉群证明工作量，兼职副总裁的申请被退回了三次。",
          "quarterDelta": {
            "cash": -24,
            "research": 3,
            "trust": 5,
            "team": -2
          },
          "affinities": {}
        }
      ],
      "contextOffers": [
        {
          "id": "grokbot-bots-manage-bots-xai",
          "brand": "xai",
          "label": "给Grok Bot经理限定三位下属",
          "result": "你们让一个Grok Bot协调销售、票据和跟单三条任务，共享目录先划清归属。并行工作多了，冲突也得有人仲裁；组织图终于有限高，管理层不能自己无限繁殖。",
          "mode": "cooperate",
          "quarterDelta": {
            "cash": 23,
            "research": 5,
            "team": -2,
            "trust": 1,
            "risk": 3
          },
          "affinities": {
            "xai": 10
          },
          "fromYear": 2026,
          "fromQuarter": 3,
          "sourceUrls": [
            "https://x.ai/news/introducing-grok-bot"
          ],
          "rationale": "针对事件「请先和我的机器人聊」中的具体瓶颈，采用「给Grok Bot经理限定三位下属」对应的公开技术能力。玩家实施、合同、成效和资源数值均为游戏虚构，不代表品牌背书。 时间依据：Grok Bot官方发布2026-08-11；玩家分工及管理后果虚构。 事实边界：多Bot协作来自官方发布；不假定每个Bot独占完全隔离电脑，玩家工作目录与交接约定是虚构方案。"
        },
        {
          "id": "grokbot-bots-manage-bots-gemini",
          "brand": "gemini",
          "label": "用Google ADK做显式任务交接",
          "result": "你们用ADK拆出负责人和交接状态，只有上一项产物齐全才轮到下一位代理。协调成本先增加，重复劳动随后减少；机器人日报短了，因为不能只写正在沟通。",
          "mode": "cooperate",
          "quarterDelta": {
            "cash": -26,
            "research": 5,
            "team": -2,
            "trust": 3,
            "risk": -2
          },
          "affinities": {
            "gemini": 11
          },
          "fromYear": 2026,
          "fromQuarter": 3,
          "sourceUrls": [
            "https://github.com/google/adk-python",
            "https://x.ai/news/introducing-grok-bot",
            "https://developers.googleblog.com/en/agent-development-kit-easy-to-build-multi-agent-applications/"
          ],
          "rationale": "针对事件「请先和我的机器人聊」中的具体瓶颈，采用「用Google ADK做显式任务交接」对应的公开技术能力。玩家实施、合同、成效和资源数值均为游戏虚构，不代表品牌背书。 时间依据：Grok Bot官方发布2026-08-11；玩家分工及管理后果虚构。Google ADK发布于2025-04-09。 事实边界：多Bot协作来自官方发布；不假定每个Bot独占完全隔离电脑，玩家工作目录与交接约定是虚构方案。"
        },
        {
          "id": "grokbot-bots-manage-bots-claude",
          "brand": "claude",
          "label": "用Claude单代理抢简单流程",
          "result": "你们以Claude的简洁工作流为参照，用一个代理承接简单客服流程，与多机器人方案争订单。报价更容易解释，复杂项目仍需另议；客户终于没有为虚拟经理付两遍钱。",
          "mode": "compete",
          "quarterDelta": {
            "cash": 31,
            "research": 3,
            "team": 1,
            "trust": 1,
            "risk": 2
          },
          "affinities": {
            "claude": -10
          },
          "fromYear": 2026,
          "fromQuarter": 3,
          "sourceUrls": [
            "https://www.anthropic.com/engineering/building-effective-agents",
            "https://x.ai/news/introducing-grok-bot"
          ],
          "rationale": "针对事件「请先和我的机器人聊」中的具体瓶颈，采用「用Claude单代理抢简单流程」对应的公开技术能力。玩家实施、合同、成效和资源数值均为游戏虚构，不代表品牌背书。 时间依据：Grok Bot官方发布2026-08-11；玩家分工及管理后果虚构。 事实边界：多Bot协作来自官方发布；不假定每个Bot独占完全隔离电脑，玩家工作目录与交接约定是虚构方案。"
        },
        {
          "id": "grokbot-bots-manage-bots-deepseek",
          "brand": "deepseek",
          "label": "用DeepSeek开放模型自管任务队列",
          "result": "你们部署DeepSeek-V3，把并行工单放进自建队列，记录输入、产物和人工接管点。断线后可以按记录续做，维护工时却增加；代理忘了向谁汇报时，至少还有一张任务单。",
          "mode": "cooperate",
          "quarterDelta": {
            "cash": -23,
            "research": 5,
            "team": -2,
            "trust": 3,
            "risk": -1
          },
          "affinities": {
            "deepseek": 13
          },
          "fromYear": 2026,
          "fromQuarter": 3,
          "sourceUrls": [
            "https://arxiv.org/abs/2412.19437",
            "https://github.com/deepseek-ai/DeepSeek-V3",
            "https://x.ai/news/introducing-grok-bot"
          ],
          "rationale": "Grok Bot场景日期为2026-08-11，早于Harness的2026-08-13发布。故替换为2024-12-27已发表技术报告并开放权重的DeepSeek-V3；队列、记录和恢复流程由玩家自己实现，不声称模型自带Harness、插件循环或会话恢复。玩家部署与商业后果均属虚构。"
        }
      ]
    },
    "dot-domain-grok-detour": {
      "tags": [
        "product",
        "governance"
      ],
      "focusBrands": [
        "openai",
        "xai"
      ],
      "routes": [
        {
          "id": "self",
          "label": "自建入口验证与跳转提示",
          "result": "公司多花预算自建入口验证与独立沙盒，逐段检查服务去向。信任和研发提升，下次路演的惊喜只能靠产品本身提供。",
          "quarterDelta": {
            "cash": -36,
            "research": 5,
            "trust": 5,
            "team": -3
          },
          "affinities": {}
        },
        {
          "id": "public",
          "label": "共同维护服务目录与来源标识",
          "result": "你们维护可核对的服务目录，给每次跳转标出目的地和运营者。用户更容易认门，团队也多了一份更新清单；产品经理失去了临时宣布跨平台合作的机会。",
          "quarterDelta": {
            "cash": -24,
            "research": 3,
            "trust": 5,
            "team": -2
          },
          "affinities": {}
        }
      ],
      "contextOffers": [
        {
          "id": "dot-domain-grok-detour-openai",
          "brand": "openai",
          "label": "把Dots演示入口锁到ChatGPT",
          "result": "你们按OpenAI官方发布页设置演示入口，再让Dots预先整理演示材料。短域名不再替产品选供应商，彩排却多了一轮；台上少一次惊吓，台下多一张检查表。",
          "mode": "cooperate",
          "quarterDelta": {
            "cash": -12,
            "research": 2,
            "team": 1,
            "trust": 3,
            "risk": -2
          },
          "affinities": {
            "openai": 10
          },
          "secondaryAffinities": {
            "xai": -3
          },
          "fromYear": 2026,
          "fromQuarter": 4,
          "sourceUrls": [
            "https://openai.com/index/introducing-dots/",
            "https://dot.com/"
          ],
          "rationale": "针对事件「云端助理走错门」中的具体瓶颈，采用「把Dots演示入口锁到ChatGPT」对应的公开技术能力。玩家实施、合同、成效和资源数值均为游戏虚构，不代表品牌背书。 时间依据：Dots官方发布2026-09-29，外部发送须用户批准。 事实边界：仅核实2026-10-08 dot.com重定向至x.ai/bot；不推断域名归属、购买价格或动机。"
        },
        {
          "id": "dot-domain-grok-detour-xai",
          "brand": "xai",
          "label": "顺势做Grok Bot双入口展示",
          "result": "你们把跳转后的Grok Bot正式列为第二套演示，分别说明账号、数据位置和可做任务。客户愿意付比较试点费，团队必须准备两套材料，不能再把意外叫兼容性。",
          "mode": "cooperate",
          "quarterDelta": {
            "cash": 19,
            "research": 3,
            "team": -2,
            "trust": 2,
            "risk": 2
          },
          "affinities": {
            "xai": 11
          },
          "fromYear": 2026,
          "fromQuarter": 4,
          "sourceUrls": [
            "https://x.ai/news/introducing-grok-bot",
            "https://dot.com/",
            "https://openai.com/index/introducing-dots/"
          ],
          "rationale": "针对事件「云端助理走错门」中的具体瓶颈，采用「顺势做Grok Bot双入口展示」对应的公开技术能力。玩家实施、合同、成效和资源数值均为游戏虚构，不代表品牌背书。 时间依据：Grok Bot官方发布2026-08-11；玩家分工及管理后果虚构。 事实边界：仅核实2026-10-08 dot.com重定向至x.ai/bot；不推断域名归属、购买价格或动机。"
        },
        {
          "id": "dot-domain-grok-detour-qwen",
          "brand": "qwen",
          "label": "用千问做有自家域名的助理入口",
          "result": "你们将千问接入公司自有入口，把登录和模型名称一并显示。品牌记忆开始积累，域名、鉴权和维护账单也归自己；路演员终于可以放心背一个地址。",
          "mode": "cooperate",
          "quarterDelta": {
            "cash": -24,
            "research": 4,
            "team": -1,
            "trust": 3,
            "risk": -1
          },
          "affinities": {
            "qwen": 12
          },
          "fromYear": 2026,
          "fromQuarter": 4,
          "sourceUrls": [
            "https://github.com/QwenLM/Qwen-Agent",
            "https://dot.com/",
            "https://openai.com/index/introducing-dots/"
          ],
          "rationale": "针对事件「云端助理走错门」中的具体瓶颈，采用「用千问做有自家域名的助理入口」对应的公开技术能力。玩家实施、合同、成效和资源数值均为游戏虚构，不代表品牌背书。 事实边界：仅核实2026-10-08 dot.com重定向至x.ai/bot；不推断域名归属、购买价格或动机。"
        },
        {
          "id": "dot-domain-grok-detour-hunyuan",
          "brand": "xiaomi",
          "label": "拿 MiMo 整理好的交付文件救场",
          "result": "你们改用 MiMo 辅助整理的本地成果包演示，再由人解释线上入口。域名笑话终于告一段落，客户看到了可检查的文件；会后第一件事，是把演示链接完整读一遍。",
          "mode": "cooperate",
          "quarterDelta": {
            "cash": -5,
            "research": 2,
            "team": 1,
            "trust": 2,
            "risk": 1
          },
          "affinities": {
            "xiaomi": 10
          },
          "fromYear": 2026,
          "fromQuarter": 4,
          "rationale": "保留原事件历史背景；改为现有核心公司的玩家自建试验或虚构合作，不声称真实签约或尚未发布的产品能力。 质感修订：整理本地成果包救场未发生签约回款，只计少量演示整理开销。",
          "secondaryAffinities": {},
          "editorialSource": "research/company-balance-v21.json"
        }
      ]
    },
    "trae_solo_more_than_coding": {
      "tags": [
        "code",
        "product"
      ],
      "focusBrands": [
        "xai",
        "openai",
        "qwen"
      ],
      "routes": [
        {
          "id": "self",
          "label": "自研跨文件任务沙盒与验收",
          "result": "预算先花在隔离与验证上。团队看清每一步后终于放心，老板又顺手加了一个文件夹。",
          "quarterDelta": {
            "cash": -36,
            "research": 5,
            "trust": 5,
            "team": -3
          },
          "affinities": {}
        },
        {
          "id": "public",
          "label": "共建文档、数据与代码协作流程",
          "result": "伙伴共同定义文档、数据和代码任务的输入、产物与验收人。流程可以复用，边界仍需开会；老板发来的新文件夹终于有地方排队。",
          "quarterDelta": {
            "cash": -24,
            "research": 3,
            "trust": 5,
            "team": -2
          },
          "affinities": {}
        }
      ],
      "contextOffers": [
        {
          "id": "trae_solo_more_than_coding-doubao",
          "brand": "xai",
          "label": "让 Grok 先做一份范围固定的周报",
          "result": "你们用 Grok 汇总各部门批准使用的材料，交付一份约定范围的周报。服务费到账，缺数据仍要找人补，临时加需求也得重新报价。一个模型可以同时读几个部门，项目经理不能同时答应所有部门。",
          "mode": "cooperate",
          "quarterDelta": {
            "cash": 28,
            "research": 4,
            "team": -3,
            "trust": 1,
            "risk": 3
          },
          "affinities": {
            "xai": 10
          },
          "fromYear": 2026,
          "fromQuarter": 1,
          "rationale": "保留原事件历史背景与数值；改为现有核心公司的玩家自建试验或虚构合作，不声称真实签约或尚未发布的产品能力。",
          "secondaryAffinities": {},
          "editorialSource": "research/company-balance-v21.json"
        },
        {
          "id": "trae_solo_more_than_coding-wenxin",
          "brand": "gemini",
          "label": "用 Gemini 先把扫描附件读清楚",
          "result": "你们用 Gemini 辅助整理各部门的扫描表与图片，关键数字再由人工对照原件。准备工作多花一轮预算，报告里少了几个离谱的零；演示终于不用把错误那页翻得特别快。",
          "mode": "cooperate",
          "quarterDelta": {
            "cash": -22,
            "research": 3,
            "team": 1,
            "trust": 3,
            "risk": -2
          },
          "affinities": {
            "gemini": 10
          },
          "fromYear": 2026,
          "fromQuarter": 1,
          "rationale": "保留原事件历史背景与数值；改为现有核心公司的玩家自建试验或虚构合作，不声称真实签约或尚未发布的产品能力。",
          "secondaryAffinities": {},
          "editorialSource": "research/company-balance-v21.json"
        },
        {
          "id": "trae_solo_more_than_coding-qwen",
          "brand": "qwen",
          "label": "用千问执行器只承接数据分析",
          "result": "你们用Qwen-Agent代码执行器收窄范围，专做数据统计与图表，暂缓文案和演示。更容易按成果收费，跨部门客户却得另找写稿的人；菜单短了，厨房终于排得开。",
          "mode": "cooperate",
          "quarterDelta": {
            "cash": 25,
            "research": 4,
            "team": -1,
            "trust": 2,
            "risk": 1
          },
          "affinities": {
            "qwen": 12
          },
          "fromYear": 2026,
          "fromQuarter": 1,
          "sourceUrls": [
            "https://github.com/QwenLM/Qwen-Agent",
            "https://www.trae.ai/blog/new_solo_beta_0331"
          ],
          "rationale": "针对事件「说好 SOLO，怎么全公司都来了」中的具体瓶颈，采用「用千问执行器只承接数据分析」对应的公开技术能力。玩家实施、合同、成效和资源数值均为游戏虚构，不代表品牌背书。 时间依据：独立SOLO发布于2026-03-31，采用当时名称；2026-06已更名TRAE Work。 2026-03-31首发事实沿用输入已核验研究；本次首发页返回空正文，2026-06-09更名官方页可读。"
        },
        {
          "id": "trae_solo_more_than_coding-claude",
          "brand": "claude",
          "label": "用Claude分段工作流做报告编辑",
          "result": "你们把资料提取、初稿和编辑拆成Claude工作流，留人核对关键结论。内容质量更稳定，出稿没有老板想得那么即时；AI单干的预算最后还是加了编辑席位。",
          "mode": "cooperate",
          "quarterDelta": {
            "cash": -18,
            "research": 4,
            "team": -1,
            "trust": 4,
            "risk": -1
          },
          "affinities": {
            "claude": 13
          },
          "fromYear": 2026,
          "fromQuarter": 1,
          "sourceUrls": [
            "https://www.anthropic.com/engineering/building-effective-agents",
            "https://www.trae.ai/blog/new_solo_beta_0331"
          ],
          "rationale": "针对事件「说好 SOLO，怎么全公司都来了」中的具体瓶颈，采用「用Claude分段工作流做报告编辑」对应的公开技术能力。玩家实施、合同、成效和资源数值均为游戏虚构，不代表品牌背书。 时间依据：独立SOLO发布于2026-03-31，采用当时名称；2026-06已更名TRAE Work。 2026-03-31首发事实沿用输入已核验研究；本次首发页返回空正文，2026-06-09更名官方页可读。"
        }
      ]
    },
    "workbuddy_local_files": {
      "tags": [
        "code",
        "data"
      ],
      "focusBrands": [
        "xiaomi",
        "claude"
      ],
      "routes": [
        {
          "id": "self",
          "label": "自研可回滚的本地文件沙盒",
          "result": "沙盒开发很贵，但操作都可检查和撤回。预算没被误改，预算负责人第一次主动点赞。",
          "quarterDelta": {
            "cash": -36,
            "research": 5,
            "trust": 5,
            "team": -3
          },
          "affinities": {}
        },
        {
          "id": "public",
          "label": "共同制定文件操作与版本规则",
          "result": "大家制定文件预览、版本和回滚约定，再开放一批脱敏测试目录。共同结论很朴素：真正的最终版必须有人验收，名叫别动的文件应该先别动。",
          "quarterDelta": {
            "cash": -24,
            "research": 3,
            "trust": 5,
            "team": -2
          },
          "affinities": {}
        }
      ],
      "contextOffers": [
        {
          "id": "workbuddy_local_files-hunyuan",
          "brand": "xiaomi",
          "label": "让 MiMo 只在文件副本里练手",
          "result": "你们给 MiMo 接上受限的自建文件工具，只允许整理副本并提交变更清单。客户愿意为这份省心付费，替换原件仍需本人确认；那个叫别动的文件，这次真的没动。",
          "mode": "cooperate",
          "quarterDelta": {
            "cash": 19,
            "research": 3,
            "team": 1,
            "trust": 3,
            "risk": -2
          },
          "affinities": {
            "xiaomi": 10
          },
          "fromYear": 2026,
          "fromQuarter": 2,
          "rationale": "保留原事件历史背景与数值；改为现有核心公司的玩家自建试验或虚构合作，不声称真实签约或尚未发布的产品能力。",
          "secondaryAffinities": {},
          "editorialSource": "research/company-balance-v21.json"
        },
        {
          "id": "qwen-file-version-evidence",
          "brand": "qwen",
          "label": "用千问对读版本，把最终版交还作者",
          "result": "你们在内网让千问对照文件内容，再用修改记录标出互相冲突的段落，最后请原作者确认。部署要花预算，最终版争夺战却有了证据；文件名里再多写三个最终，也赢不了真正改过的那一页。",
          "mode": "cooperate",
          "quarterDelta": {
            "cash": -29,
            "research": 4,
            "team": -2,
            "trust": 3,
            "risk": -1
          },
          "affinities": {
            "qwen": 11
          },
          "fromYear": 2026,
          "fromQuarter": 2,
          "sourceUrls": [
            "https://cloud.tencent.com/product/workbuddy"
          ],
          "rationale": "已有千问开放模型用于玩家自建内网文本比对；文件记录核验与人工裁决另行实现，不把本地文件访问等同任何托管产品全程本地推理。 所列来源仅作事件背景；具体实施、合作、收入与资源变化均为游戏虚构，不代表现实合作或品牌背书。"
        },
        {
          "id": "workbuddy_local_files-wenxin",
          "brand": "gemini",
          "label": "让 Gemini 救回扫描版旧预算",
          "result": "你们用 Gemini 辅助读取旧预算扫描件，把数字与现有表格并排核验。整理耗了一轮工时，却找出漏掉的关键附件；原来绝对最终版后面，还有一页老板亲手签过字的纸。",
          "mode": "cooperate",
          "quarterDelta": {
            "cash": -17,
            "research": 3,
            "team": 1,
            "trust": 4,
            "risk": -2
          },
          "affinities": {
            "gemini": 10
          },
          "fromYear": 2026,
          "fromQuarter": 2,
          "rationale": "保留原事件历史背景与数值；改为现有核心公司的玩家自建试验或虚构合作，不声称真实签约或尚未发布的产品能力。",
          "secondaryAffinities": {},
          "editorialSource": "research/company-balance-v21.json"
        },
        {
          "id": "workbuddy_local_files-openai",
          "brand": "openai",
          "label": "让Codex写可撤销的批量整理器",
          "result": "你们让Codex生成文件整理脚本，先列出计划再在副本上运行，并保存撤销记录。工具开发耽误半天，之后每次整理都能复用；同事终于不用手工拖两千个图标。",
          "mode": "cooperate",
          "quarterDelta": {
            "cash": -20,
            "research": 5,
            "team": -2,
            "trust": 3,
            "risk": -1
          },
          "affinities": {
            "openai": 13
          },
          "fromYear": 2026,
          "fromQuarter": 2,
          "sourceUrls": [
            "https://openai.com/index/introducing-codex/",
            "https://cloud.tencent.com/product/workbuddy"
          ],
          "rationale": "针对事件「你的电脑有了新同事」中的具体瓶颈，采用「让Codex写可撤销的批量整理器」对应的公开技术能力。玩家实施、合同、成效和资源数值均为游戏虚构，不代表品牌背书。 时间依据：现代Codex云端编码Agent发布于2025-05-16。 事实边界：本地文件读写不等于全部推理本地，也不等于关机仍可执行；副本和撤销流程为玩家实现。"
        },
        {
          "id": "workbuddy_local_files-claude-change-list",
          "brand": "claude",
          "label": "让Claude先交文件改动清单",
          "result": "你把整理任务交给Claude，规定先列出改名、移动和删除计划，批准后才在副本中执行。它找出了三份同名预算，也把意见不一的版本留给原作者；同事终于能看懂电脑为什么自作主张。",
          "mode": "cooperate",
          "quarterDelta": {
            "cash": -22,
            "research": 4,
            "team": 1,
            "trust": 4,
            "risk": -2
          },
          "affinities": {
            "claude": 12
          },
          "fromYear": 2026,
          "fromQuarter": 2,
          "sourceUrls": [
            "https://www.tencent.com/en-us/articles/2202350.html",
            "https://cloud.tencent.com/product/workbuddy"
          ],
          "rationale": "沿用本地文件整理事件场景，由玩家给Claude工作流设置变更预览、人工批准和副本执行约束。来源只对应WorkBuddy事件背景，不暗示品牌官方合作或未经授权访问文件；玩家方案与成效为游戏虚构。"
        }
      ]
    },
    "qoder_repo_wiki_quest": {
      "tags": [
        "code",
        "data"
      ],
      "focusBrands": [
        "qwen",
        "openai",
        "claude"
      ],
      "routes": [
        {
          "id": "self",
          "label": "自建仓库说明验证与规格测试",
          "result": "验证投入不少，错误理解被逐项纠正。休假的老同事回来后，第一次靠文档完成交接。",
          "quarterDelta": {
            "cash": -36,
            "research": 5,
            "trust": 5,
            "team": -3
          },
          "affinities": {}
        },
        {
          "id": "public",
          "label": "共建仓库知识工具与维护文档",
          "result": "你出维护经费，社区共同补充仓库索引和业务知识的验证方法。项目族谱逐渐清楚，失传的祖训也写了回来；每条祖训现在都得带一处能运行的证据。",
          "quarterDelta": {
            "cash": -24,
            "research": 3,
            "trust": 5,
            "team": -2
          },
          "affinities": {}
        }
      ],
      "contextOffers": [
        {
          "id": "qoder_repo_wiki_quest-qwen",
          "brand": "qwen",
          "label": "用Qoder先补族谱再接Quest",
          "result": "你们用Repo Wiki梳理模块，再为Quest写清首个小需求的规格。客户先付维护订金，隐藏业务规则仍要向老同事求证；族谱有了，祖训却不全在代码里。",
          "mode": "cooperate",
          "quarterDelta": {
            "cash": 24,
            "research": 5,
            "team": -2,
            "trust": 2,
            "risk": 2
          },
          "affinities": {
            "qwen": 10
          },
          "fromYear": 2026,
          "fromQuarter": 1,
          "sourceUrls": [
            "https://qoder.com/en/blog/qoder-introduction",
            "https://docs.qoder.com/release-notes/desktop"
          ],
          "rationale": "针对事件「祖传代码终于有族谱了」中的具体瓶颈，采用「用Qoder先补族谱再接Quest」对应的公开技术能力。玩家实施、合同、成效和资源数值均为游戏虚构，不代表品牌背书。 时间依据：Qoder全球版Repo Wiki与Quest参照2025-08-21首发资料。"
        },
        {
          "id": "qoder_repo_wiki_quest-openai",
          "brand": "openai",
          "label": "让Codex从旧报错交一份小补丁",
          "result": "你们暂缓重写整本仓库说明，让Codex从一条可复现报错入手跑测试交补丁。范围小的订单先回款，整体架构仍欠着；休假同事终于只收到一个具体问题。",
          "mode": "cooperate",
          "quarterDelta": {
            "cash": 30,
            "research": 3,
            "team": -1,
            "trust": 1,
            "risk": 2
          },
          "affinities": {
            "openai": 11
          },
          "fromYear": 2026,
          "fromQuarter": 1,
          "sourceUrls": [
            "https://openai.com/index/introducing-codex/",
            "https://docs.qoder.com/release-notes/desktop"
          ],
          "rationale": "针对事件「祖传代码终于有族谱了」中的具体瓶颈，采用「让Codex从旧报错交一份小补丁」对应的公开技术能力。玩家实施、合同、成效和资源数值均为游戏虚构，不代表品牌背书。 时间依据：现代Codex云端编码Agent发布于2025-05-16。"
        },
        {
          "id": "qoder_repo_wiki_quest-kimi",
          "brand": "kimi",
          "label": "用Kimi对读旧文档与整仓说明",
          "result": "你们用Kimi的长上下文处理架构资料，找出代码说明与历史设计不一致的地方。理解项目先花时间，返工风险有所下降；最懂项目的人回来后终于能批改而非口述。",
          "mode": "cooperate",
          "quarterDelta": {
            "cash": -23,
            "research": 5,
            "team": -2,
            "trust": 3,
            "risk": -1
          },
          "affinities": {
            "kimi": 12
          },
          "fromYear": 2026,
          "fromQuarter": 1,
          "sourceUrls": [
            "https://github.com/MoonshotAI/Kimi-K2",
            "https://docs.qoder.com/release-notes/desktop",
            "https://arxiv.org/abs/2507.20534"
          ],
          "rationale": "针对事件「祖传代码终于有族谱了」中的具体瓶颈，采用「用Kimi对读旧文档与整仓说明」对应的公开技术能力。玩家实施、合同、成效和资源数值均为游戏虚构，不代表品牌背书。"
        },
        {
          "id": "qoder_repo_wiki_quest-hunyuan",
          "brand": "xiaomi",
          "label": "让 MiMo 整理祖传代码的搬家清单",
          "result": "你们用 MiMo 梳理代码索引和旧工单，列出模块依赖、负责人以及待确认的问题。迁移顺序清楚了，隐含规则还得找老同事问；族谱的第一页，终于写上了谁还记得这个接口。",
          "mode": "cooperate",
          "quarterDelta": {
            "cash": -20,
            "research": 4,
            "team": -1,
            "trust": 3,
            "risk": -1
          },
          "affinities": {
            "xiaomi": 10
          },
          "fromYear": 2026,
          "fromQuarter": 1,
          "rationale": "保留原事件历史背景与数值；改为现有核心公司的玩家自建试验或虚构合作，不声称真实签约或尚未发布的产品能力。",
          "secondaryAffinities": {},
          "editorialSource": "research/company-balance-v21.json"
        }
      ]
    },
    "openai_math_722_2026": {
      "tags": [
        "research",
        "open"
      ],
      "focusBrands": [
        "openai",
        "deepseek",
        "kimi"
      ],
      "routes": [
        {
          "id": "self",
          "label": "暂停冲量，逐条复核证明",
          "result": "团队睡醒后删掉了几段自信的废话。进度条退了一点，正确答案却终于向前走了。",
          "quarterDelta": {
            "cash": -32,
            "research": 1,
            "trust": 3,
            "team": 5
          },
          "affinities": {}
        },
        {
          "id": "public",
          "label": "组织数学社区交叉复核",
          "result": "你们把检查任务与成果交给数学社区交叉复核。速度慢下来，人却缓过来；第一份共同成果是把一条所谓惊人突破准确地改回错误。",
          "quarterDelta": {
            "cash": -36,
            "research": 0,
            "trust": 4,
            "team": 4
          },
          "affinities": {}
        }
      ],
      "contextOffers": [
        {
          "id": "openai_math_722_2026-openai",
          "brand": "openai",
          "label": "为OpenAI数学仓库补版本检查脚本",
          "result": "你们为公开数学仓库编写版本检查脚本，整理三篇撤回所影响的依赖并共享结果。研究预算花在追踪变化上，海报晚了一周；历史上的722不能当今天的验证总数。",
          "mode": "cooperate",
          "quarterDelta": {
            "cash": -24,
            "research": 5,
            "team": -2,
            "trust": 4,
            "risk": -3
          },
          "affinities": {
            "openai": 10
          },
          "fromYear": 2026,
          "fromQuarter": 4,
          "sourceUrls": [
            "https://github.com/openai/math",
            "https://github.com/openai/math/blob/main/history.md"
          ],
          "rationale": "针对事件「手稿722篇，审核只剩三人」中的具体瓶颈，采用「为OpenAI数学仓库补版本检查脚本」对应的公开技术能力。玩家实施、合同、成效和资源数值均为游戏虚构，不代表品牌背书。 事实边界：2026-10-06 UTC初始仓库722篇是历史数；本次核验现有719篇。结果处于不同验证阶段，不能称全部已证实的数学突破。"
        },
        {
          "id": "openai_math_722_2026-deepseek",
          "brand": "deepseek",
          "label": "用DeepSeek-Prover拆小引理",
          "result": "你们用DeepSeek-Prover-V2尝试把选定论证拆成可检查的小引理，再交形式系统验收。研究进展慢而具体，三位研究员终于少抄几页；模型提议仍不等于证明通过。",
          "mode": "cooperate",
          "quarterDelta": {
            "cash": -31,
            "research": 6,
            "team": -3,
            "trust": 4,
            "risk": -2
          },
          "affinities": {
            "deepseek": 11
          },
          "fromYear": 2026,
          "fromQuarter": 4,
          "sourceUrls": [
            "https://github.com/deepseek-ai/DeepSeek-Prover-V2",
            "https://github.com/openai/math",
            "https://github.com/openai/math/blob/main/history.md"
          ],
          "rationale": "针对事件「手稿722篇，审核只剩三人」中的具体瓶颈，采用「用DeepSeek-Prover拆小引理」对应的公开技术能力。玩家实施、合同、成效和资源数值均为游戏虚构，不代表品牌背书。 事实边界：2026-10-06 UTC初始仓库722篇是历史数；本次核验现有719篇。结果处于不同验证阶段，不能称全部已证实的数学突破。"
        },
        {
          "id": "openai_math_722_2026-kimi",
          "brand": "kimi",
          "label": "让Kimi先整理手稿引用依赖",
          "result": "你们把相关手稿分组交给Kimi梳理定义、引用和依赖，给人工阅读准备路线图。资料费和工时先付出去，查找顺畅许多；能读长文不等于有权替数学家盖章。",
          "mode": "cooperate",
          "quarterDelta": {
            "cash": -18,
            "research": 3,
            "team": 2,
            "trust": 2,
            "risk": -1
          },
          "affinities": {
            "kimi": 12
          },
          "fromYear": 2026,
          "fromQuarter": 4,
          "sourceUrls": [
            "https://github.com/MoonshotAI/Kimi-K2",
            "https://github.com/openai/math",
            "https://github.com/openai/math/blob/main/history.md",
            "https://arxiv.org/abs/2507.20534"
          ],
          "rationale": "针对事件「手稿722篇，审核只剩三人」中的具体瓶颈，采用「让Kimi先整理手稿引用依赖」对应的公开技术能力。玩家实施、合同、成效和资源数值均为游戏虚构，不代表品牌背书。 事实边界：2026-10-06 UTC初始仓库722篇是历史数；本次核验现有719篇。结果处于不同验证阶段，不能称全部已证实的数学突破。"
        },
        {
          "id": "openai_math_722_2026-gemini",
          "brand": "gemini",
          "label": "用Gemini写程序搜索可算反例",
          "result": "你们用Gemini编写并迭代子问题的搜索程序，参照AlphaEvolve路线寻找反例。算力换来检查线索，却不能覆盖全部证明；未搜到反例也不会被印成定理。",
          "mode": "cooperate",
          "quarterDelta": {
            "cash": -28,
            "research": 6,
            "team": -2,
            "trust": 3,
            "risk": 1
          },
          "affinities": {
            "gemini": 13
          },
          "fromYear": 2026,
          "fromQuarter": 4,
          "sourceUrls": [
            "https://deepmind.google/blog/alphaevolve-a-gemini-powered-coding-agent-for-designing-advanced-algorithms/",
            "https://github.com/openai/math",
            "https://github.com/openai/math/blob/main/history.md"
          ],
          "rationale": "针对事件「手稿722篇，审核只剩三人」中的具体瓶颈，采用「用Gemini写程序搜索可算反例」对应的公开技术能力。玩家实施、合同、成效和资源数值均为游戏虚构，不代表品牌背书。 事实边界：2026-10-06 UTC初始仓库722篇是历史数；本次核验现有719篇。结果处于不同验证阶段，不能称全部已证实的数学突破。"
        }
      ]
    },
    "tibo-not-going-anywhere": {
      "tags": [
        "code",
        "open"
      ],
      "focusBrands": [
        "openai",
        "claude"
      ],
      "routes": [
        {
          "id": "self",
          "label": "支付维护成本，安排工程轮休",
          "result": "你付出停工与维护成本，安排团队轮休并清理积压问题，士气大幅恢复。周六终于没有警报，人事收到第一封不带离职附件的感谢邮件。",
          "quarterDelta": {
            "cash": -32,
            "research": 1,
            "trust": 3,
            "team": 5
          },
          "affinities": {}
        },
        {
          "id": "public",
          "label": "改善值班待遇，组织社区协作",
          "result": "你拿预算改善值班安排，并组织社区合作，让员工能分享成果。士气上升，人事终于找到留人办法：先让留下来的人有空使用福利。",
          "quarterDelta": {
            "cash": -36,
            "research": 0,
            "trust": 4,
            "team": 4
          },
          "affinities": {}
        }
      ],
      "contextOffers": [
        {
          "id": "tibo-not-going-anywhere-openai",
          "brand": "openai",
          "label": "把Codex福利变成团队轮休窗口",
          "result": "你们利用当次重置安排积压代码任务，把省下的周末还给值班同事。眼前工单减少，长期容量仍需付费计划；公开挖角玩笑没有写进人事档案，轮休写进了日历。",
          "mode": "cooperate",
          "quarterDelta": {
            "cash": 0,
            "research": 3,
            "team": 3,
            "trust": 2,
            "risk": 1
          },
          "affinities": {
            "openai": 10
          },
          "fromYear": 2026,
          "fromQuarter": 3,
          "sourceUrls": [
            "https://openai.com/index/introducing-codex/",
            "https://x.com/bcherny/status/2086173812253729118"
          ],
          "rationale": "针对事件「招聘失败，额度到账」中的具体瓶颈，采用「把Codex福利变成团队轮休窗口」对应的公开技术能力。玩家实施、合同、成效和资源数值均为游戏虚构，不代表品牌背书。 时间依据：现代Codex云端编码Agent发布于2025-05-16。 帖子事实沿用输入研究中已完成的X官方嵌入核验；当次额度福利不构成长期承诺，公开挖角玩笑不等于正式谈判。 质感修订：把额度福利换成轮休，已通过士气体现收益，不能再无理由给一笔现金。"
        },
        {
          "id": "tibo-not-going-anywhere-claude",
          "brand": "claude",
          "label": "用Claude结对开发留住维护者",
          "result": "你们给核心维护者配Claude工作流，先处理那些没人愿意接的重复修改。订阅费增加，关键人员的精力有所恢复；留人方案终于从竞品招聘截图换成了工作安排。",
          "mode": "cooperate",
          "quarterDelta": {
            "cash": -19,
            "research": 4,
            "team": 3,
            "trust": 2,
            "risk": -1
          },
          "affinities": {
            "claude": 11
          },
          "fromYear": 2026,
          "fromQuarter": 3,
          "sourceUrls": [
            "https://www.anthropic.com/engineering/building-effective-agents",
            "https://x.com/bcherny/status/2086173812253729118"
          ],
          "rationale": "针对事件「招聘失败，额度到账」中的具体瓶颈，采用「用Claude结对开发留住维护者」对应的公开技术能力。玩家实施、合同、成效和资源数值均为游戏虚构，不代表品牌背书。 帖子事实沿用输入研究中已完成的X官方嵌入核验；当次额度福利不构成长期承诺，公开挖角玩笑不等于正式谈判。"
        },
        {
          "id": "tibo-not-going-anywhere-xiaomi",
          "brand": "xiaomi",
          "label": "用MiMo草稿服务接管夜间小修",
          "result": "你们部署MiMo-V2-Flash做夜间补丁草稿，早班只审有明确失败记录的修改。上线投入不小，值班压力逐步下降；代理熬夜不用咖啡，机器依旧要交电费。",
          "mode": "cooperate",
          "quarterDelta": {
            "cash": -28,
            "research": 5,
            "team": 2,
            "trust": 1,
            "risk": 1
          },
          "affinities": {
            "xiaomi": 12
          },
          "fromYear": 2026,
          "fromQuarter": 3,
          "sourceUrls": [
            "https://mimo.xiaomi.com/mimo-v2-flash",
            "https://x.com/bcherny/status/2086173812253729118"
          ],
          "rationale": "针对事件「招聘失败，额度到账」中的具体瓶颈，采用「用MiMo草稿服务接管夜间小修」对应的公开技术能力。玩家实施、合同、成效和资源数值均为游戏虚构，不代表品牌背书。 时间依据：MiMo-V2-Flash模型2025-12发布，报告2026-01-06；不是2026首次进入模型领域。 帖子事实沿用输入研究中已完成的X官方嵌入核验；当次额度福利不构成长期承诺，公开挖角玩笑不等于正式谈判。"
        },
        {
          "id": "tibo-not-going-anywhere-qwen",
          "brand": "qwen",
          "label": "用千问维护套餐换稳定招聘预算",
          "result": "你们用千问开放模型承接固定范围的代码维护，把服务毛利留作招聘预算。现金来源比等福利扎实，团队短期却接了更多交付；人事终于能拿真数字谈薪水。",
          "mode": "cooperate",
          "quarterDelta": {
            "cash": 29,
            "research": 3,
            "team": -2,
            "trust": 1,
            "risk": 3
          },
          "affinities": {
            "qwen": 13
          },
          "fromYear": 2026,
          "fromQuarter": 3,
          "sourceUrls": [
            "https://github.com/QwenLM/Qwen3",
            "https://x.com/bcherny/status/2086173812253729118"
          ],
          "rationale": "针对事件「招聘失败，额度到账」中的具体瓶颈，采用「用千问维护套餐换稳定招聘预算」对应的公开技术能力。玩家实施、合同、成效和资源数值均为游戏虚构，不代表品牌背书。 帖子事实沿用输入研究中已完成的X官方嵌入核验；当次额度福利不构成长期承诺，公开挖角玩笑不等于正式谈判。"
        },
        {
          "id": "tibo-not-going-anywhere-recruit",
          "brand": "openai",
          "label": "趁 Boris 递来橄榄枝，把 Tibo 招进公司",
          "result": "你把邀请函递给Tibo，承诺给他一支能把用户反馈变成修复的团队。Tibo点了头，入职第一天就问重置按钮在哪儿。Boris的邀请还挂在聊天窗口里，你们的员工名单已经多了一个名字。",
          "hint": "本季结算后，Tibo 加入团队",
          "mode": "cooperate",
          "quarterDelta": {
            "cash": -48,
            "research": 4,
            "trust": 1,
            "team": 3,
            "risk": 0
          },
          "affinities": {
            "openai": 8
          },
          "secondaryAffinities": {
            "claude": -3
          },
          "fromYear": 2026,
          "fromQuarter": 3,
          "recruitScientist": "recruit-tibo",
          "hiredAlternative": {
            "label": "留住 Tibo，给用户再发一轮福利",
            "result": "Tibo已经坐在你们办公室里。看到Boris的邀请，他笑着摇头，转身给用户准备了一轮福利。你给团队发了留任奖励，财务把挖人预算改成算力预算；评论区只关心今天能不能Reset。",
            "hint": "Tibo 已在团队，发放留任福利",
            "quarterDelta": {
              "cash": -15,
              "research": 2,
              "trust": 6,
              "team": 3,
              "risk": -1
            },
            "affinities": {
              "openai": 3
            },
            "secondaryAffinities": {}
          },
          "rationale": "在真实公开挖角玩笑背景上新增玩家公司的虚构招募选项；不声称Tibo现实中接受玩家或Boris的邀请。事件费用及效果一次结算，不与策略招募重复。"
        }
      ],
      "featuredOfferId": "tibo-not-going-anywhere-recruit"
    },
    "tang_jie_glm_pvz_bugs": {
      "tags": [
        "code",
        "product"
      ],
      "focusBrands": [
        "openai",
        "claude"
      ],
      "routes": [
        {
          "id": "self",
          "label": "暂停加新功能，修复游戏规则",
          "result": "你承担延期成本，给团队完整的修复窗口和休息时间。没有新海报挂上墙，但同事终于笑着通了一关，会议里又有人主动提建议。",
          "quarterDelta": {
            "cash": -32,
            "research": 1,
            "trust": 3,
            "team": 5
          },
          "affinities": {}
        },
        {
          "id": "public",
          "label": "邀请社区协测，公开复现步骤",
          "result": "外部测试者拿到明确的复现步骤，团队按失败场景逐一修游戏规则。公开问题让宣传暂缓，也让僵尸第一次被按规则拦下；社区给的礼物是一页更长但终于可用的修复清单。",
          "quarterDelta": {
            "cash": -36,
            "research": 0,
            "trust": 4,
            "team": 4
          },
          "affinities": {}
        }
      ],
      "contextOffers": [
        {
          "id": "deepseek-single-level-defense",
          "brand": "deepseek",
          "label": "让DeepSeek先交一关，怪物必须守规则",
          "result": "你们请DeepSeek辅助做原创塔防，只保留一条路线和几种单位，每次改动都检查碰撞、伤害与胜负。首版服务费先到账，宏大关卡表暂时撤下墙；怪物终于要沿路走，销售也得沿验收表说话。",
          "mode": "cooperate",
          "quarterDelta": {
            "cash": 21,
            "research": 4,
            "team": -1,
            "trust": 3,
            "risk": 1
          },
          "affinities": {
            "deepseek": 10
          },
          "fromYear": 2026,
          "fromQuarter": 1,
          "sourceUrls": [
            "https://finance.sina.com.cn/hy/hyjz/2026-01-12/doc-inhfziuv6987215.shtml"
          ],
          "rationale": "使用已有代码辅助能力进行玩家原创游戏的小范围开发；测试和交付属于虚构情节，不将历史演示改写成DeepSeek的真实展示或排行榜结论。 所列来源仅作事件背景；具体实施、合作、收入与资源变化均为游戏虚构，不代表现实合作或品牌背书。"
        },
        {
          "id": "tang_jie_glm_pvz_bugs-openai",
          "brand": "openai",
          "label": "让Codex修穿墙Bug并跑回归",
          "result": "你们把穿墙问题变成稳定复现的测试，让Codex提交小补丁并运行游戏检查。研发预算先下降，演示终于能多玩几轮；董事会门口暂时不用安排豌豆站岗。",
          "mode": "cooperate",
          "quarterDelta": {
            "cash": -22,
            "research": 5,
            "team": -2,
            "trust": 3,
            "risk": -2
          },
          "affinities": {
            "openai": 11
          },
          "fromYear": 2026,
          "fromQuarter": 1,
          "sourceUrls": [
            "https://openai.com/index/introducing-codex/",
            "https://finance.sina.com.cn/hy/hyjz/2026-01-12/doc-inhfziuv6987215.shtml"
          ],
          "rationale": "针对事件「榜单赢了，僵尸没拦住」中的具体瓶颈，采用「让Codex修穿墙Bug并跑回归」对应的公开技术能力。玩家实施、合同、成效和资源数值均为游戏虚构，不代表品牌背书。 时间依据：现代Codex云端编码Agent发布于2025-05-16。"
        },
        {
          "id": "tang_jie_glm_pvz_bugs-gemini",
          "brand": "gemini",
          "label": "用Gemini读试玩录像找卡点",
          "result": "你们用Gemini的多模态能力整理试玩录像中的异常片段，再由工程师确认复现。新增一轮检查花时间，真实体验更容易讨论；高分截图终于有了会动的竞争对手。",
          "mode": "cooperate",
          "quarterDelta": {
            "cash": -19,
            "research": 4,
            "team": -1,
            "trust": 3,
            "risk": -1
          },
          "affinities": {
            "gemini": 12
          },
          "fromYear": 2026,
          "fromQuarter": 1,
          "sourceUrls": [
            "https://arxiv.org/abs/2403.05530",
            "https://finance.sina.com.cn/hy/hyjz/2026-01-12/doc-inhfziuv6987215.shtml"
          ],
          "rationale": "针对事件「榜单赢了，僵尸没拦住」中的具体瓶颈，采用「用Gemini读试玩录像找卡点」对应的公开技术能力。玩家实施、合同、成效和资源数值均为游戏虚构，不代表品牌背书。"
        },
        {
          "id": "tang_jie_glm_pvz_bugs-doubao",
          "brand": "xai",
          "label": "用 Grok 拆关卡，先交能玩的版本",
          "result": "你们让 Grok 辅助拆解关卡和编写小段代码，再由开发者逐项测试拼接。可玩的演示按时交付，服务费也按时到账；植物守住了后院，项目经理保住了最后一个周末。",
          "mode": "cooperate",
          "quarterDelta": {
            "cash": 27,
            "research": 4,
            "team": -3,
            "trust": 1,
            "risk": 3
          },
          "affinities": {
            "xai": 10
          },
          "fromYear": 2026,
          "fromQuarter": 1,
          "rationale": "保留原事件历史背景与数值；改为现有核心公司的玩家自建试验或虚构合作，不声称真实签约或尚未发布的产品能力。",
          "secondaryAffinities": {},
          "editorialSource": "research/company-balance-v21.json"
        }
      ]
    },
    "yang_splay_band": {
      "tags": [
        "research",
        "open"
      ],
      "focusBrands": [
        "kimi",
        "deepseek"
      ],
      "routes": [
        {
          "id": "self",
          "label": "放缓本周进度，安排整组休息",
          "result": "没有人提交新实验。第二天大家回来，发现一个老问题其实可以删掉。",
          "quarterDelta": {
            "cash": -32,
            "research": 1,
            "trust": 3,
            "team": 5
          },
          "affinities": {}
        },
        {
          "id": "public",
          "label": "设共同排期，让研究与兴趣并行",
          "result": "你们和研究伙伴共设弹性排期，把读书会、实验与排练的时间讲清楚。协调占了一些精力，留下的人却更愿意分享成果；本周最稳定的节拍来自准时下班。",
          "quarterDelta": {
            "cash": -36,
            "research": 0,
            "trust": 4,
            "team": 4
          },
          "affinities": {}
        }
      ],
      "contextOffers": [
        {
          "id": "yang_splay_band-kimi",
          "brand": "kimi",
          "label": "让Kimi排科研与排练双日程",
          "result": "你们用Kimi读取项目计划和自愿报名的排练安排，列出冲突让负责人决定。组织成本先花出去，团队重新有了共同时间；长上下文终于记得人不是全年无休的线程。",
          "mode": "cooperate",
          "quarterDelta": {
            "cash": -14,
            "research": 2,
            "team": 3,
            "trust": 3,
            "risk": -1
          },
          "affinities": {
            "kimi": 10
          },
          "fromYear": 2026,
          "fromQuarter": 1,
          "sourceUrls": [
            "https://github.com/MoonshotAI/Kimi-K2",
            "https://zrfanzy.github.io/splay/",
            "https://arxiv.org/abs/2507.20534"
          ],
          "rationale": "针对事件「今天组会的议程是排练」中的具体瓶颈，采用「让Kimi排科研与排练双日程」对应的公开技术能力。玩家实施、合同、成效和资源数值均为游戏虚构，不代表品牌背书。 事实边界：Splay组建与旧作品来自乐队自己的旧主页；玩家的新排练、录音和样曲均虚构，不复制歌词。"
        },
        {
          "id": "yang_splay_band-doubao",
          "brand": "deepseek",
          "label": "让 DeepSeek 帮忙把乐队网站搭起来",
          "result": "你们用 DeepSeek 辅助制作排练报名和原创作品展示页，让同事自己上传歌曲。研发没有立刻变成收入，报名表却热闹了；老板终于发现，大家写团建曲目的介绍比写周报快。",
          "mode": "cooperate",
          "quarterDelta": {
            "cash": -23,
            "research": 4,
            "team": 3,
            "trust": 2,
            "risk": 1
          },
          "affinities": {
            "deepseek": 10
          },
          "fromYear": 2026,
          "fromQuarter": 1,
          "rationale": "保留原事件历史背景与数值；改为现有核心公司的玩家自建试验或虚构合作，不声称真实签约或尚未发布的产品能力。",
          "secondaryAffinities": {},
          "editorialSource": "research/company-balance-v21.json"
        },
        {
          "id": "yang_splay_band-gemini",
          "brand": "gemini",
          "label": "用Gemini整理排练录音笔记",
          "result": "你们用Gemini音频理解整理自愿提供的排练录音，标出待重听的片段。团队少争论刚才谁说了什么，研究主线却让出半天；AI负责笔记，主唱仍靠大家投票。",
          "mode": "cooperate",
          "quarterDelta": {
            "cash": -16,
            "research": 3,
            "team": 2,
            "trust": 2,
            "risk": 1
          },
          "affinities": {
            "gemini": 12
          },
          "fromYear": 2026,
          "fromQuarter": 1,
          "sourceUrls": [
            "https://arxiv.org/abs/2403.05530",
            "https://zrfanzy.github.io/splay/"
          ],
          "rationale": "针对事件「今天组会的议程是排练」中的具体瓶颈，采用「用Gemini整理排练录音笔记」对应的公开技术能力。玩家实施、合同、成效和资源数值均为游戏虚构，不代表品牌背书。 事实边界：Splay组建与旧作品来自乐队自己的旧主页；玩家的新排练、录音和样曲均虚构，不复制歌词。"
        },
        {
          "id": "yang_splay_band-hunyuan",
          "brand": "xai",
          "label": "用 Grok 赶完周报，再放排练假",
          "result": "你们用 Grok 归纳各组提供的工作记录，负责人核对完就提前结束会议。客户交付没有耽误，排练室也第一次准点开门；鼓手今天没有迟到，因为他终于不用主持第二场组会。",
          "mode": "cooperate",
          "quarterDelta": {
            "cash": 18,
            "research": 3,
            "team": 2,
            "trust": 1,
            "risk": 2
          },
          "affinities": {
            "xai": 10
          },
          "fromYear": 2026,
          "fromQuarter": 1,
          "rationale": "保留原事件历史背景与数值；改为现有核心公司的玩家自建试验或虚构合作，不声称真实签约或尚未发布的产品能力。",
          "secondaryAffinities": {},
          "editorialSource": "research/company-balance-v21.json"
        }
      ]
    },
    "sujianlin_cool_papers": {
      "tags": [
        "research",
        "code"
      ],
      "focusBrands": [
        "kimi",
        "openai"
      ],
      "routes": [
        {
          "id": "self",
          "label": "暂停扩功能，测量工具净省时",
          "result": "团队暂停增加功能，记录一次检索到底省下多少时间。书签没有自动变少，评测倒是删掉了两项华而不实的功能；大家终于腾出一段完整时间认真读完论文。",
          "quarterDelta": {
            "cash": -24,
            "research": 2,
            "trust": 1,
            "team": 4
          },
          "affinities": {}
        },
        {
          "id": "public",
          "label": "共享文献工具，邀请同行共评",
          "result": "你们公开文献筛选和摘要工具，请同行比较漏读、误读与真正省下的时间。有人补代码，有人指出摘要遗漏；共识是工具可以替人翻页，不能替人理解论文。",
          "quarterDelta": {
            "cash": -36,
            "research": 0,
            "trust": 4,
            "team": 4
          },
          "affinities": {}
        }
      ],
      "contextOffers": [
        {
          "id": "sujianlin_cool_papers-openai",
          "brand": "openai",
          "label": "让Codex补论文站的阅读队列",
          "result": "你们沿着GPT辅助造工具的思路，用Codex写收藏、标注和阅读队列。开发先占掉几天，之后重复整理少了；工具只负责把论文摆好，不负责替大家读懂。",
          "mode": "cooperate",
          "quarterDelta": {
            "cash": -20,
            "research": 4,
            "team": 1,
            "trust": 2,
            "risk": 1
          },
          "affinities": {
            "openai": 10
          },
          "fromYear": 2026,
          "fromQuarter": 1,
          "sourceUrls": [
            "https://openai.com/index/introducing-codex/",
            "https://kexue.fm/archives/9907/comment-page-2"
          ],
          "rationale": "针对事件「少刷论文的办法是先写个网站」中的具体瓶颈，采用「让Codex补论文站的阅读队列」对应的公开技术能力。玩家实施、合同、成效和资源数值均为游戏虚构，不代表品牌背书。 时间依据：现代Codex云端编码Agent发布于2025-05-16。 事实边界：Cool Papers事实来自提供资料中2023-12-25作者文章；本次原链接打开失败，未据此新增该作者行为或观点。"
        },
        {
          "id": "sujianlin_cool_papers-kimi",
          "brand": "kimi",
          "label": "让Kimi并排整理相关长论文",
          "result": "你们用Kimi给选定论文整理问题、方法和局限，并保留原文页码。读前准备更轻松，引用仍需自己点开检查；长上下文没有变成自动发放博士学位的窗口。",
          "mode": "cooperate",
          "quarterDelta": {
            "cash": -18,
            "research": 4,
            "team": 2,
            "trust": 3,
            "risk": -1
          },
          "affinities": {
            "kimi": 11
          },
          "fromYear": 2026,
          "fromQuarter": 1,
          "sourceUrls": [
            "https://github.com/MoonshotAI/Kimi-K2",
            "https://kexue.fm/archives/9907/comment-page-2",
            "https://arxiv.org/abs/2507.20534"
          ],
          "rationale": "针对事件「少刷论文的办法是先写个网站」中的具体瓶颈，采用「让Kimi并排整理相关长论文」对应的公开技术能力。玩家实施、合同、成效和资源数值均为游戏虚构，不代表品牌背书。 事实边界：Cool Papers事实来自提供资料中2023-12-25作者文章；本次原链接打开失败，未据此新增该作者行为或观点。"
        },
        {
          "id": "sujianlin_cool_papers-wenxin",
          "brand": "gemini",
          "label": "让 Gemini 给旧论文补上可查的目录",
          "result": "你们用 Gemini 辅助整理获准使用的扫描论文，记录题目、作者与原文位置，再由研究员核对。冷门旧文重新出现在检索结果里，整理花的工时也远超预期；新网站先救活了一个被遗忘的硬盘。",
          "mode": "cooperate",
          "quarterDelta": {
            "cash": -25,
            "research": 4,
            "team": -1,
            "trust": 3,
            "risk": -1
          },
          "affinities": {
            "gemini": 10
          },
          "fromYear": 2026,
          "fromQuarter": 1,
          "rationale": "保留原事件历史背景与数值；改为现有核心公司的玩家自建试验或虚构合作，不声称真实签约或尚未发布的产品能力。",
          "secondaryAffinities": {},
          "editorialSource": "research/company-balance-v21.json"
        },
        {
          "id": "sujianlin_cool_papers-qwen",
          "brand": "qwen",
          "label": "用千问本地摘要做付费专题简报",
          "result": "你们用本地千问辅助整理人工选出的专题论文，按月提供带原文链接的简报。订阅费补贴服务器，选题和核查仍占人手；每天十分钟省下来，周五编辑会加回去。",
          "mode": "cooperate",
          "quarterDelta": {
            "cash": 26,
            "research": 3,
            "team": -2,
            "trust": 2,
            "risk": 2
          },
          "affinities": {
            "qwen": 13
          },
          "fromYear": 2026,
          "fromQuarter": 1,
          "sourceUrls": [
            "https://github.com/QwenLM/Qwen3",
            "https://kexue.fm/archives/9907/comment-page-2"
          ],
          "rationale": "针对事件「少刷论文的办法是先写个网站」中的具体瓶颈，采用「用千问本地摘要做付费专题简报」对应的公开技术能力。玩家实施、合同、成效和资源数值均为游戏虚构，不代表品牌背书。 事实边界：Cool Papers事实来自提供资料中2023-12-25作者文章；本次原链接打开失败，未据此新增该作者行为或观点。"
        }
      ]
    },
    "deepseek_fat_fish_white_rice": {
      "tags": [
        "code",
        "governance"
      ],
      "focusBrands": [
        "deepseek",
        "claude"
      ],
      "routes": [
        {
          "id": "self",
          "label": "承担延期成本，让全队休整",
          "result": "你承担延期和维护成本，给团队腾出完整的休息与修复时间，士气大涨。周一群里仍有大肥鱼，但配文终于从今晚加班变成了午饭吃什么。",
          "quarterDelta": {
            "cash": -32,
            "research": 1,
            "trust": 3,
            "team": 5
          },
          "affinities": {}
        },
        {
          "id": "public",
          "label": "付费组织社区协测，减轻值班负担",
          "result": "你付钱组织社区测试，给员工重新排班，士气回升。工作群终于出现了复现记录和修复建议，大肥鱼还在刷，但这次大家是真的坐下来吃热饭。",
          "quarterDelta": {
            "cash": -36,
            "research": 0,
            "trust": 4,
            "team": 4
          },
          "affinities": {}
        }
      ],
      "contextOffers": [
        {
          "id": "deepseek_fat_fish_white_rice-deepseek",
          "brand": "deepseek",
          "label": "让Harness接走夜间重复工单",
          "result": "你们用Harness承接规则明确的重复任务，异常单留给白班处理，并给值班同事补休。部署花钱，冷饭少了；群里的大肥鱼仍是社区梗，不再被误当绩效指标。",
          "mode": "cooperate",
          "quarterDelta": {
            "cash": -23,
            "research": 4,
            "team": 3,
            "trust": 3,
            "risk": -1
          },
          "affinities": {
            "deepseek": 10
          },
          "fromYear": 2026,
          "fromQuarter": 3,
          "sourceUrls": [
            "https://github.com/deepseek-ai/deepseek-harness",
            "https://linux.do/t/topic/2727836"
          ],
          "rationale": "针对事件「白饭不是绩效奖金」中的具体瓶颈，采用「让Harness接走夜间重复工单」对应的公开技术能力。玩家实施、合同、成效和资源数值均为游戏虚构，不代表品牌背书。 事实边界：大肥鱼是社区二创文字梗，不是DeepSeek官方吉祥物；不复制图像，不视为模型真实行为或官方讲话。"
        },
        {
          "id": "deepseek_fat_fish_white_rice-hunyuan",
          "brand": "xai",
          "label": "让 Grok 整理月底缺件，早点开饭",
          "result": "你们让 Grok 汇总各组批准使用的交付清单，找出还缺哪些附件，再分给负责人收尾。月底回款没有停，群里的追问少了一些；能不能摸鱼以后再议，今天先让大家吃上热饭。",
          "mode": "cooperate",
          "quarterDelta": {
            "cash": 20,
            "research": 3,
            "team": 2,
            "trust": 2,
            "risk": 1
          },
          "affinities": {
            "xai": 10
          },
          "fromYear": 2026,
          "fromQuarter": 3,
          "rationale": "保留原事件历史背景与数值；改为现有核心公司的玩家自建试验或虚构合作，不声称真实签约或尚未发布的产品能力。",
          "secondaryAffinities": {},
          "editorialSource": "research/company-balance-v21.json"
        },
        {
          "id": "deepseek_fat_fish_white_rice-xiaomi",
          "brand": "xiaomi",
          "label": "用MiMo快速草稿缩短夜班等待",
          "result": "你们用MiMo-V2-Flash生成代码和文档草稿，让夜班只处理必须当场决定的问题。推理服务先烧预算，等待时间有所减少；更快输出不能成为继续加班的新理由。",
          "mode": "cooperate",
          "quarterDelta": {
            "cash": -21,
            "research": 4,
            "team": 2,
            "trust": 2,
            "risk": 1
          },
          "affinities": {
            "xiaomi": 12
          },
          "fromYear": 2026,
          "fromQuarter": 3,
          "sourceUrls": [
            "https://mimo.xiaomi.com/mimo-v2-flash",
            "https://linux.do/t/topic/2727836"
          ],
          "rationale": "针对事件「白饭不是绩效奖金」中的具体瓶颈，采用「用MiMo快速草稿缩短夜班等待」对应的公开技术能力。玩家实施、合同、成效和资源数值均为游戏虚构，不代表品牌背书。 时间依据：MiMo-V2-Flash模型2025-12发布，报告2026-01-06；不是2026首次进入模型领域。 事实边界：大肥鱼是社区二创文字梗，不是DeepSeek官方吉祥物；不复制图像，不视为模型真实行为或官方讲话。"
        },
        {
          "id": "deepseek_fat_fish_white_rice-claude",
          "brand": "claude",
          "label": "用Claude拆订单并明确停工点",
          "result": "你们用Claude固定工作流把订单拆成可验收的小批次，只承诺本周能交的部分。延期成本压低了当季收入，团队得到了真正的休息；这回绩效表终于记下少返工。",
          "mode": "cooperate",
          "quarterDelta": {
            "cash": -13,
            "research": 2,
            "team": 3,
            "trust": 4,
            "risk": -2
          },
          "affinities": {
            "claude": 13
          },
          "fromYear": 2026,
          "fromQuarter": 3,
          "sourceUrls": [
            "https://www.anthropic.com/engineering/building-effective-agents",
            "https://linux.do/t/topic/2727836"
          ],
          "rationale": "针对事件「白饭不是绩效奖金」中的具体瓶颈，采用「用Claude拆订单并明确停工点」对应的公开技术能力。玩家实施、合同、成效和资源数值均为游戏虚构，不代表品牌背书。 事实边界：大肥鱼是社区二创文字梗，不是DeepSeek官方吉祥物；不复制图像，不视为模型真实行为或官方讲话。"
        }
      ]
    },
    "dalle_avocado_chair_2021q1": {
      "tags": [
        "research",
        "product",
        "data"
      ],
      "focusBrands": [
        "openai"
      ],
      "routes": [
        {
          "id": "self",
          "label": "做一款能指出昏招的围棋陪练",
          "result": "团队从小棋盘、合法落子和局面评估做起，先请棋友检查能否指出明显失误。第一版离AlphaGo很远，却终于下完了一盘合法的棋；庆功时，程序员把自己那次非法落子悄悄删了。",
          "quarterDelta": {
            "cash": -32,
            "research": 3,
            "trust": 2,
            "team": -1
          },
          "affinities": {}
        },
        {
          "id": "public",
          "label": "公开输棋记录，一起找出昏招",
          "result": "你资助棋友共享棋谱、错误标注与评测工具，把模型最丢脸的对局也放出来。同行很快找出规则漏洞，陪练稳了一点；最受欢迎的栏目，暂时是工程师如何输给自己的程序。",
          "quarterDelta": {
            "cash": -20,
            "research": 2,
            "trust": 4,
            "team": 3
          },
          "affinities": {}
        }
      ],
      "contextOffers": [
        {
          "id": "dalle_avocado_chair_2021q1-openai",
          "brand": "openai",
          "label": "用OpenAI的训练工具搭小棋盘",
          "result": "团队用OpenAI公开的强化学习教学代码，另写简化棋盘和对弈环境。模型终于能靠试错学点本领，你们把复现实验记录回馈社区；它还赢不了高手，却让实习生认真研究了悔棋按钮。",
          "mode": "cooperate",
          "quarterDelta": {
            "cash": -12,
            "research": 4,
            "team": 1,
            "trust": 3,
            "risk": -2
          },
          "affinities": {
            "openai": 10
          },
          "fromYear": 2021,
          "fromQuarter": 1,
          "sourceUrls": [
            "https://github.com/openai/spinningup",
            "https://deepmind.google/blog/alphago-zero-starting-from-scratch/"
          ],
          "rationale": "OpenAI的Spinning Up于2018年发布，提供强化学习教学与算法实现；小棋盘环境、对弈训练和反馈为玩家自建项目，不声称取得AlphaGo模型或与DeepMind签约。"
        },
        {
          "id": "dalle_avocado_chair_2021q1-wenxin",
          "brand": "gemini",
          "label": "沿 DeepMind 的棋路，做会复盘的陪练",
          "result": "你们参考 DeepMind 公开的围棋研究，在获授权的棋谱上训练小型陪练，再请棋友逐步检查复盘。它还赢不了高手，已经能指出几处漏算；第一位测试用户下完棋，主动约了下一局。",
          "mode": "cooperate",
          "quarterDelta": {
            "cash": -19,
            "research": 4,
            "team": -1,
            "trust": 3,
            "risk": -1
          },
          "affinities": {
            "gemini": 10
          },
          "fromYear": 2021,
          "fromQuarter": 1,
          "rationale": "保留原事件历史背景与数值；改为现有核心公司的玩家自建试验或虚构合作，不声称真实签约或尚未发布的产品能力。沿用 Google/DeepMind 同一关系ID；2023Q4之前不称Gemini。",
          "secondaryAffinities": {},
          "editorialSource": "research/company-balance-v21.json"
        },
        {
          "id": "dalle_avocado_chair_2021q1-nvidia",
          "brand": "nvidia",
          "label": "买英伟达显卡，让陪练多练几盘",
          "result": "新显卡接进机房，你们把小棋盘自我对弈和评测排上夜班。模型留下更多输棋样本，工程师终于能比较哪种改法有效；清晨大家看着曲线很高兴，财务看着电表没接话。",
          "mode": "cooperate",
          "quarterDelta": {
            "cash": -27,
            "research": 5,
            "team": -2,
            "trust": 2,
            "risk": 2
          },
          "affinities": {
            "nvidia": 10
          },
          "fromYear": 2021,
          "fromQuarter": 1,
          "sourceUrls": [
            "https://nvidianews.nvidia.com/news/nvidias-new-ampere-data-center-gpu-in-full-production",
            "https://deepmind.google/blog/alphago-zero-starting-from-scratch/"
          ],
          "rationale": "A100于2020年进入量产，可用于玩家自建训练实验；自我对弈借鉴公开研究，不暗示购卡即可复现AlphaGo完整实力。"
        },
        {
          "id": "dalle_avocado_chair_2021q1-huawei",
          "brand": "huawei",
          "label": "用华为视觉工具，让摄像头认棋子",
          "result": "你们用MindSpore训练黑白棋子识别，把真实棋盘拍成可复盘的记录。反光和袖口让模型吃了不少亏，标注员也多熬了几个晚上；第一盘成功上传的棋，终于不用靠老板凭记忆吹嘘。",
          "mode": "cooperate",
          "quarterDelta": {
            "cash": -21,
            "research": 4,
            "team": -2,
            "trust": 3,
            "risk": -1
          },
          "affinities": {
            "huawei": 10
          },
          "fromYear": 2021,
          "fromQuarter": 1,
          "sourceUrls": [
            "https://www.huawei.com/cn/news/2020/3/huawei-hdc-computer-vision-plan"
          ],
          "rationale": "华为2020年已公开计算视觉计划与MindSpore；棋子识别是玩家自建视觉任务，不提前使用盘古或后续产品。"
        }
      ]
    },
    "webgpt_browsing_2021q4": {
      "tags": [
        "research",
        "data",
        "code"
      ],
      "focusBrands": [
        "openai"
      ],
      "routes": [
        {
          "id": "self",
          "label": "自建浏览检索与引用验收流程",
          "result": "研发预算换来了自己的检索和检查流程。原型开始分清找到网页与答对问题，工程师终于能把凌晨两点的浏览记录称作实验日志。",
          "quarterDelta": {
            "cash": -32,
            "research": 3,
            "trust": 2,
            "team": -1
          },
          "affinities": {}
        },
        {
          "id": "public",
          "label": "共享检索和引用核对工具",
          "result": "你花钱共享检索和引用核对工具，伙伴愿意一起纠错。团队忙得很有成就感，最受欢迎的新功能是一次关掉全部无关标签页。",
          "quarterDelta": {
            "cash": -20,
            "research": 2,
            "trust": 4,
            "team": 3
          },
          "affinities": {}
        }
      ],
      "contextOffers": [
        {
          "id": "webgpt_browsing_2021q4-openai",
          "brand": "openai",
          "label": "复现WebGPT评审并提交漏引案例",
          "result": "你们研究WebGPT的浏览与引用评审方法，把漏引、错引的复现记录反馈给研究团队。四十个标签页变成证据清单，评审时间却明显增加；有脚注也不再自动算答对。",
          "mode": "cooperate",
          "quarterDelta": {
            "cash": -24,
            "research": 5,
            "team": -2,
            "trust": 4,
            "risk": -2
          },
          "affinities": {
            "openai": 10
          },
          "fromYear": 2021,
          "fromQuarter": 4,
          "sourceUrls": [
            "https://openai.com/index/webgpt/"
          ],
          "rationale": "WebGPT公开研究可复现方法，不虚构已开放浏览产品或API。"
        },
        {
          "id": "webgpt_browsing_2021q4-wenxin",
          "brand": "gemini",
          "label": "用 Google 的研究把网页资料排好队",
          "result": "你们参考 Google 的公开语言研究，把搜集到的网页按主题整理，保留日期和原文链接。自建工具先做好资料入口，结论仍由人审核；标签页少开了十几个，研究员终于找回昨天那篇文章。",
          "mode": "cooperate",
          "quarterDelta": {
            "cash": -18,
            "research": 4,
            "team": -2,
            "trust": 3,
            "risk": -1
          },
          "affinities": {
            "gemini": 10
          },
          "fromYear": 2021,
          "fromQuarter": 4,
          "rationale": "保留原事件历史背景与数值；改为现有核心公司的玩家自建试验或虚构合作，不声称真实签约或尚未发布的产品能力。沿用 Google/DeepMind 同一关系ID；2023Q4之前不称Gemini。",
          "secondaryAffinities": {},
          "editorialSource": "research/company-balance-v21.json"
        },
        {
          "id": "webgpt_browsing_2021q4-claude",
          "brand": "claude",
          "label": "向Anthropic提交引文诚实性反例",
          "result": "你们依Anthropic的语言助手研究设计诚实性评测，提交貌似有据却未被来源支持的反例。原型被拦下几次漂亮的胡说，团队仍得持续审稿；标签页少关几个，信誉多保一点。",
          "mode": "cooperate",
          "quarterDelta": {
            "cash": -20,
            "research": 4,
            "team": -2,
            "trust": 4,
            "risk": -3
          },
          "affinities": {
            "claude": 10
          },
          "fromYear": 2021,
          "fromQuarter": 4,
          "sourceUrls": [
            "https://www.anthropic.com/research/a-general-language-assistant-as-a-laboratory-for-alignment"
          ],
          "rationale": "2021年12月语言助手对齐研究可用于诚实性评测；不存在Claude成品访问。"
        },
        {
          "id": "huawei-web-evidence-pairs",
          "brand": "huawei",
          "label": "用华为工具链训练网页证据核对器",
          "result": "你们把网页摘录与待核验的结论配成样本，在已有训练环境里练习找出答非所问的引用。模型暂时不会自己上网，研究员却找到了一批看似有来源的空话；链接变蓝以后，内容还是得有人读。",
          "mode": "cooperate",
          "quarterDelta": {
            "cash": -19,
            "research": 5,
            "team": -2,
            "trust": 3,
            "risk": -1
          },
          "affinities": {
            "huawei": 10
          },
          "fromYear": 2021,
          "fromQuarter": 4,
          "sourceUrls": [
            "https://openai.com/index/webgpt/"
          ],
          "rationale": "2021年已有华为训练工具链；玩家自建证据配对实验，不引入后来的聊天或浏览代理产品，也不承诺自动判定网页真实。 所列来源仅作事件背景；具体实施、合作、收入与资源变化均为游戏虚构，不代表现实合作或品牌背书。"
        }
      ]
    },
    "instructgpt_human_feedback_2022q1": {
      "tags": [
        "research",
        "data",
        "governance"
      ],
      "focusBrands": [
        "openai",
        "claude"
      ],
      "routes": [
        {
          "id": "self",
          "label": "自建人工反馈与评测小队",
          "result": "预算花在设备和自己的评测团队上，能力得到提升。工程师不必人人兼任临时评委，士气回升；第一条统一意见是周报真的该短一点。",
          "quarterDelta": {
            "cash": -60,
            "research": 4,
            "trust": 3,
            "team": 2
          },
          "affinities": {}
        },
        {
          "id": "public",
          "label": "联合高校共建公开反馈实验",
          "result": "你出钱组织共同实验，公开任务和评价口径，可信度上升。模型越来越会听要求，研究员则越来越擅长开会解释自己为何给了不同的分。",
          "quarterDelta": {
            "cash": -28,
            "research": 3,
            "trust": 3,
            "team": -3
          },
          "affinities": {}
        }
      ],
      "contextOffers": [
        {
          "id": "instructgpt_human_feedback_2022q1-openai",
          "brand": "openai",
          "label": "沿InstructGPT标注真正简短的周报",
          "result": "团队按InstructGPT的示范与比较反馈流程，为周报建立明确长度和事实要求。原型开始少绕弯，标注账单却先长了起来；评审委员会终于把简短写成了能执行的规则。",
          "mode": "cooperate",
          "quarterDelta": {
            "cash": -26,
            "research": 5,
            "team": -2,
            "trust": 3,
            "risk": -1
          },
          "affinities": {
            "openai": 10
          },
          "fromYear": 2022,
          "fromQuarter": 1,
          "sourceUrls": [
            "https://openai.com/index/instruction-following/"
          ],
          "rationale": "2022年1月InstructGPT发布；针对事件周报指令任务。"
        },
        {
          "id": "instructgpt_human_feedback_2022q1-claude",
          "brand": "claude",
          "label": "照Anthropic偏好排序做双盲评审",
          "result": "你们采用Anthropic公开的偏好排序方法匿名比较周报，把标注分歧反馈给研究团队。评审从谁写得好变成为什么更好，协调耗时也增加了；一页规则终于胜过七页简短说明。",
          "mode": "cooperate",
          "quarterDelta": {
            "cash": -21,
            "research": 5,
            "team": -2,
            "trust": 4,
            "risk": -2
          },
          "affinities": {
            "claude": 10
          },
          "fromYear": 2022,
          "fromQuarter": 1,
          "sourceUrls": [
            "https://www.anthropic.com/research/a-general-language-assistant-as-a-laboratory-for-alignment"
          ],
          "rationale": "2021年12月偏好模型研究早于事件；不引用2022年4月RLHF新成果。"
        },
        {
          "id": "nvidia-weekly-report-labels",
          "brand": "nvidia",
          "label": "借英伟达算力，把周报评语变成样本",
          "result": "你们把主管改过的周报整理成样本，在小规模GPU实验里比较哪种标注真正减少遗漏。训练不用先追求宏大规模，研究员却得逐条解释好周报好在哪里；显卡没催进度，项目经理已经找到了两个阻塞。",
          "mode": "cooperate",
          "quarterDelta": {
            "cash": -17,
            "research": 4,
            "team": -1,
            "trust": 3,
            "risk": -1
          },
          "affinities": {
            "nvidia": 10
          },
          "fromYear": 2022,
          "fromQuarter": 1,
          "sourceUrls": [
            "https://openai.com/index/instruction-following/"
          ],
          "rationale": "用事件前已有的GPU训练条件做玩家自建反馈数据实验，不把硬件采购写成已完成对齐或保证周报事实正确。 所列来源仅作事件背景；具体实施、合作、收入与资源变化均为游戏虚构，不代表现实合作或品牌背书。"
        },
        {
          "id": "instructgpt_human_feedback_2022q1-wenxin",
          "brand": "gemini",
          "label": "参考 Google 的评测方法，先改错再打分",
          "result": "你们沿 Google 的公开研究方法设计小型对照测试，让评审先查项目名、数字与依据，再评价答案是否好听。人工评审多花了预算，报告却终于能交接；机器得到的第一条批语是：别把销售额写成利润。",
          "mode": "cooperate",
          "quarterDelta": {
            "cash": -15,
            "research": 3,
            "team": -1,
            "trust": 4,
            "risk": -2
          },
          "affinities": {
            "gemini": 10
          },
          "fromYear": 2022,
          "fromQuarter": 1,
          "rationale": "保留原事件历史背景与数值；改为现有核心公司的玩家自建试验或虚构合作，不声称真实签约或尚未发布的产品能力。沿用 Google/DeepMind 同一关系ID；2023Q4之前不称Gemini。",
          "secondaryAffinities": {},
          "editorialSource": "research/company-balance-v21.json"
        }
      ]
    },
    "dalle2_astronaut_horse_2022q2": {
      "tags": [
        "research",
        "product",
        "data"
      ],
      "focusBrands": [
        "openai"
      ],
      "routes": [
        {
          "id": "self",
          "label": "自建图像迭代与验收流程",
          "result": "设备和研发花掉大笔现金，团队掌握了更多交付环节。排期终于自己说了算，员工松了口气：至少现在，改第八版不必先排云服务的队。",
          "quarterDelta": {
            "cash": -60,
            "research": 4,
            "trust": 3,
            "team": 2
          },
          "affinities": {}
        },
        {
          "id": "public",
          "label": "共享生成设施与图像评测样例",
          "result": "你投入共同实验，公开哪些需求容易失败，伙伴更愿意信你。协调工作也多了起来，设计师第一次为一匹不存在的马参加三方会议。",
          "quarterDelta": {
            "cash": -28,
            "research": 3,
            "trust": 3,
            "team": -3
          },
          "affinities": {}
        }
      ],
      "contextOffers": [
        {
          "id": "dalle2_astronaut_horse_2022q2-openai",
          "brand": "openai",
          "label": "申请DALL·E 2预览，先测改图边界",
          "result": "你们申请DALL·E 2研究预览，围绕宇航员、马和局部改图整理测试需求。等待资格的时间拖慢交付，验收条件却提前清楚了；设计师终于把再来一点未来感拆成了具体修改。",
          "mode": "cooperate",
          "quarterDelta": {
            "cash": -16,
            "research": 4,
            "team": -1,
            "trust": 3,
            "risk": 1
          },
          "affinities": {
            "openai": 10
          },
          "fromYear": 2022,
          "fromQuarter": 2,
          "sourceUrls": [
            "https://openai.com/index/dall-e-2/",
            "https://github.com/openai/dalle-2-preview/blob/main/system-card_04062022.md"
          ],
          "rationale": "2022年4月研究预览需申请；不声称人人可用或已有API。"
        },
        {
          "id": "huawei-image-relation-labels",
          "brand": "huawei",
          "label": "用华为工具链查图中到底是谁骑谁",
          "result": "你们先请标注员圈出人物、马和相对位置，再在训练环境中做小规模关系识别实验。图不一定画得更漂亮，骑马和被马骑终于能分开计错；预算买到的第一项进步，是评审会上少了两种解释。",
          "mode": "cooperate",
          "quarterDelta": {
            "cash": -28,
            "research": 5,
            "team": -2,
            "trust": 2,
            "risk": 2
          },
          "affinities": {
            "huawei": 10
          },
          "fromYear": 2022,
          "fromQuarter": 2,
          "sourceUrls": [
            "https://openai.com/index/dall-e-2/"
          ],
          "rationale": "借已有华为工具链进行玩家自建图像标注与关系识别研究；不声称2022年已有某款华为生成图像产品，更不承诺自动修好生成结果。 所列来源仅作事件背景；具体实施、合作、收入与资源变化均为游戏虚构，不代表现实合作或品牌背书。"
        },
        {
          "id": "dalle2_astronaut_horse_2022q2-wenxin",
          "brand": "gemini",
          "label": "沿 Google 的图文研究，查清谁骑着谁",
          "result": "你们参考 Google 公开的图文研究，制作成对的图片与描述，专查人物、动作和位置有没有对上。评审逐张标出错处，客户收到的图片少了几分离奇；骑马的宇航员终于不用替马背合同。",
          "mode": "cooperate",
          "quarterDelta": {
            "cash": -19,
            "research": 4,
            "team": -2,
            "trust": 4,
            "risk": -1
          },
          "affinities": {
            "gemini": 10
          },
          "fromYear": 2022,
          "fromQuarter": 2,
          "rationale": "保留原事件历史背景与数值；改为现有核心公司的玩家自建试验或虚构合作，不声称真实签约或尚未发布的产品能力。沿用 Google/DeepMind 同一关系ID；2023Q4之前不称Gemini。",
          "secondaryAffinities": {},
          "editorialSource": "research/company-balance-v21.json"
        },
        {
          "id": "dalle2_astronaut_horse_2022q2-nvidia",
          "brand": "nvidia",
          "label": "买A100自做图像试验台",
          "result": "你们用A100节点搭图像训练与推理试验台，把修改成本、批次和失败率逐次记账。控制权留在机房，财务却得承担利用率不足；宇航员还能继续骑马，机器先得稳定干活。",
          "mode": "cooperate",
          "quarterDelta": {
            "cash": -38,
            "research": 5,
            "team": -2,
            "trust": 2,
            "risk": 2
          },
          "affinities": {
            "nvidia": 10
          },
          "secondaryAffinities": {
            "huawei": -3
          },
          "fromYear": 2022,
          "fromQuarter": 2,
          "sourceUrls": [
            "https://nvidianews.nvidia.com/news/nvidias-new-ampere-data-center-gpu-in-full-production"
          ],
          "rationale": "A100已供货；自建图像研究算力回应服务交付与成本，不虚构DALL-E权重。"
        },
        {
          "id": "dalle2_astronaut_horse_2022q2-claude-research",
          "brand": "claude",
          "label": "和 Anthropic 一起制定图片评审题",
          "result": "你们与 Anthropic 方向的研究同行交流评估方法，请人工评审把人物、动作和画面关系逐项标清。谁骑着谁终于不能靠气势糊弄过去；一张图让三位评审吵了半小时，下一张图倒是很快有了共识。",
          "mode": "cooperate",
          "affinities": {
            "claude": 10
          },
          "secondaryAffinities": {},
          "fromYear": 2022,
          "fromQuarter": 2,
          "quarterDelta": {
            "cash": -22,
            "research": 4,
            "team": -1,
            "trust": 4,
            "risk": -1
          },
          "rationale": "补充早期非硬件研究回应；仅为玩家自建评估或虚构研究交流，不将Claude/Gemini等后来的产品提前到成立初期。",
          "editorialSource": "research/company-balance-v21.json"
        }
      ]
    },
    "stable_diffusion_weights_2022q3": {
      "tags": [
        "research",
        "compute",
        "open"
      ],
      "focusBrands": [
        "nvidia",
        "openai"
      ],
      "routes": [
        {
          "id": "self",
          "label": "自购设备，完成本地部署",
          "result": "现金换成了设备和部署经验，研发能力上升，团队也更有底气。模型终于稳定出图，财务终于稳定提醒：免费权重旁边还有一张电费单。",
          "quarterDelta": {
            "cash": -60,
            "research": 4,
            "trust": 3,
            "team": 2
          },
          "affinities": {}
        },
        {
          "id": "public",
          "label": "与高校共建共享部署和维护工具",
          "result": "你承担一部分设备与维护费，大家共享经验和失败记录。信任提高了，排期也更复杂；每个人都能画图，每个人都得学会等别人画完。",
          "quarterDelta": {
            "cash": -28,
            "research": 3,
            "trust": 3,
            "team": -3
          },
          "affinities": {}
        }
      ],
      "contextOffers": [
        {
          "id": "stable_diffusion_weights_2022q3-nvidia",
          "brand": "nvidia",
          "label": "给Stable Diffusion配A100测试节点",
          "result": "你们用A100节点承接Stable Diffusion部署测试，测不同批次的速度、占用与出图失败。模型终于跑起来，硬件却没有随权重免费附送；宣传把免费两字改成了可自行部署。",
          "mode": "cooperate",
          "quarterDelta": {
            "cash": -36,
            "research": 5,
            "team": -2,
            "trust": 2,
            "risk": 1
          },
          "affinities": {
            "nvidia": 10
          },
          "secondaryAffinities": {
            "huawei": -3
          },
          "fromYear": 2022,
          "fromQuarter": 3,
          "sourceUrls": [
            "https://nvidianews.nvidia.com/news/nvidias-new-ampere-data-center-gpu-in-full-production",
            "https://stability.ai/news-updates/stable-diffusion-public-release"
          ],
          "rationale": "使用2022Q3已有A100，不提前RTX4090或H100服务。"
        },
        {
          "id": "stable_diffusion_weights_2022q3-huawei",
          "brand": "huawei",
          "label": "在昇腾上适配扩散模型算子",
          "result": "团队把Stable Diffusion的关键算子逐项迁向昇腾与MindSpore路线，先做可运行性实验。工具链选择多了一条，移植成本也多了一层；显存抗议之后，算子清单接着举手。",
          "mode": "cooperate",
          "quarterDelta": {
            "cash": -29,
            "research": 5,
            "team": -3,
            "trust": 3,
            "risk": 2
          },
          "affinities": {
            "huawei": 10
          },
          "secondaryAffinities": {
            "nvidia": -3
          },
          "fromYear": 2022,
          "fromQuarter": 3,
          "sourceUrls": [
            "https://www.huawei.com/en/news/2020/9/kunpeng-ascend-keynote",
            "https://stability.ai/news-updates/stable-diffusion-public-release"
          ],
          "rationale": "以已存在的昇腾/MindSpore开展玩家移植研发，不承诺当季现成官方兼容版本。"
        },
        {
          "id": "stable_diffusion_weights_2022q3-openai",
          "brand": "openai",
          "label": "申请DALL·E 2托管预览作成本对照",
          "result": "你们申请DALL·E 2预览，把可获准运行的样例与本地扩散流程比较。自建算力压力暂缓，访问资格和服务边界却交给供应方；免费之争终于被每张合格图片的成本替代。",
          "mode": "cooperate",
          "quarterDelta": {
            "cash": -14,
            "research": 3,
            "team": -1,
            "trust": 2,
            "risk": 1
          },
          "affinities": {
            "openai": 10
          },
          "fromYear": 2022,
          "fromQuarter": 3,
          "sourceUrls": [
            "https://openai.com/index/dall-e-2/",
            "https://github.com/openai/dalle-2-preview/blob/main/system-card_04062022.md",
            "https://stability.ai/news-updates/stable-diffusion-public-release"
          ],
          "rationale": "2022Q3仍用申请研究预览措辞，避免早于9月末取消候补或11月API。"
        },
        {
          "id": "claude-independent-image-judging",
          "brand": "claude",
          "label": "做独立图像评审，挑战Anthropic评审思路",
          "result": "你们把中文绘图的漏物和关系错误交给双盲人工评审，公开比较任务清单与通用偏好打分会漏掉什么。自己的评审方案成了独立研究路线，也多占了一轮人力和机器；好看终于不能替谁骑谁作答。",
          "mode": "compete",
          "quarterDelta": {
            "cash": -25,
            "research": 5,
            "team": -2,
            "trust": 3,
            "risk": 1
          },
          "affinities": {
            "claude": -10
          },
          "fromYear": 2022,
          "fromQuarter": 3,
          "sourceUrls": [
            "https://stability.ai/news-updates/stable-diffusion-public-release"
          ],
          "rationale": "2022年Anthropic已开展偏好与安全评审研究；此处是玩家提出独立图像评测方法的研究竞争，不虚构当时已发布Claude聊天或图像产品。 所列来源仅作事件背景；具体实施、合作、收入与资源变化均为游戏虚构，不代表现实合作或品牌背书。"
        },
        {
          "id": "stable_diffusion_weights_2022q3-google-research",
          "brand": "gemini",
          "label": "参考 Google 图文研究，先做图片验收工具",
          "result": "你们参考 Google 的公开图文研究，给客户的生成图片做一份人工可复核的验收表。图像生成仍交给现有工具，团队先解决题图不符的问题。机房暂时没有扩建，第一位客户已经带着一百张怪图来敲门。",
          "mode": "cooperate",
          "affinities": {
            "gemini": 10
          },
          "secondaryAffinities": {},
          "fromYear": 2022,
          "fromQuarter": 3,
          "quarterDelta": {
            "cash": -24,
            "research": 4,
            "team": -1,
            "trust": 3
          },
          "rationale": "补充非硬件回应，避免两个硬件厂商长期占据事件池；2023Q4前使用Google名称，具体评测与交付为玩家自建试验。",
          "editorialSource": "research/company-balance-v21.json"
        }
      ]
    },
    "gpt4_exam_2023q1": {
      "tags": [
        "research",
        "product"
      ],
      "focusBrands": [
        "openai",
        "claude"
      ],
      "routes": [
        {
          "id": "self",
          "label": "自建真实任务评测与研发流程",
          "result": "你投入预算研究真实任务与失败边界，能力和信任一起增长。团队忙得有点疲惫，却成功拦住了销售：模型的模拟考试成绩，不能直接印在员工胸卡上。",
          "quarterDelta": {
            "cash": -44,
            "research": 3,
            "trust": 5,
            "team": -1
          },
          "affinities": {}
        },
        {
          "id": "public",
          "label": "联合开放社区复现复杂任务",
          "result": "你花钱与伙伴共同复现任务和适配工具，研发与信任得到提升。协调工作消耗了不少精力，但大家终于有证据分清：哪道题真的答对，哪道题只是说得好听。",
          "quarterDelta": {
            "cash": -20,
            "research": 2,
            "trust": 4,
            "team": -2
          },
          "affinities": {}
        }
      ],
      "contextOffers": [
        {
          "id": "gpt4_exam_2023q1-openai",
          "brand": "openai",
          "label": "申请GPT-4测试，把考题换成工单",
          "result": "你们申请GPT-4候补测试，把模拟考试光环换成真实客户工单盲测。复杂回答有所进步，事实与执行仍得人工核验；销售收起律师名片，开始学习什么叫测试集之外。",
          "mode": "cooperate",
          "quarterDelta": {
            "cash": -24,
            "research": 5,
            "team": -2,
            "trust": 4,
            "risk": -1
          },
          "affinities": {
            "openai": 10
          },
          "fromYear": 2023,
          "fromQuarter": 1,
          "sourceUrls": [
            "https://openai.com/index/gpt-4-research/"
          ],
          "rationale": "首发GPT-4测试申请与真实任务评测，绝不把考试成绩写成执业资格。"
        },
        {
          "id": "gpt4_exam_2023q1-claude",
          "brand": "claude",
          "label": "试Claude，把拒答也列入评分",
          "result": "团队申请Claude早期访问，对照比较答对、误答和该澄清时是否追问。模型不总愿意交满卷，客户任务却有了更清楚的边界；测评报告变厚，宣传口号反而短了。",
          "mode": "cooperate",
          "quarterDelta": {
            "cash": -18,
            "research": 4,
            "team": -2,
            "trust": 4,
            "risk": -2
          },
          "affinities": {
            "claude": 10
          },
          "fromYear": 2023,
          "fromQuarter": 1,
          "sourceUrls": [
            "https://www.anthropic.com/news/introducing-claude"
          ],
          "rationale": "Claude于2023年3月14日发布，可申请早期访问；不用未来模型规格。"
        },
        {
          "id": "huawei-industry-exam-competition",
          "brand": "huawei",
          "label": "拿中文工单验收，争华为行业路线客户",
          "result": "你们面向正在比较华为行业路线的客户，公开跑自家原型的中文工单题，把漏项、人工接管和部署成本一起交卷。大考分数没有借来，服务边界却写得更清楚；为了独立路线，团队又多值了几次现场班。",
          "mode": "compete",
          "quarterDelta": {
            "cash": -26,
            "research": 5,
            "team": -3,
            "trust": 4,
            "risk": 1
          },
          "affinities": {
            "huawei": -10
          },
          "fromYear": 2023,
          "fromQuarter": 1,
          "sourceUrls": [
            "https://openai.com/index/gpt-4-research/"
          ],
          "rationale": "玩家用自建原型与验收服务竞争行业订单；不声称华为在2023年第一季度推出新聊天产品，也不虚构与真实产品的成绩比较。 所列来源仅作事件背景；具体实施、合作、收入与资源变化均为游戏虚构，不代表现实合作或品牌背书。"
        },
        {
          "id": "gpt4_exam_2023q1-wenxin",
          "brand": "kimi",
          "label": "和月之暗面团队整理中文难题",
          "result": "你们与月之暗面团队交流测试方法，把行业缩写、歧义和绕口的客户需求单列成题。通用考试的分数暂时放在一边，客服带来的真实问题反而最难；第一轮讨论结束，大家都同意先把题目读懂。",
          "mode": "cooperate",
          "quarterDelta": {
            "cash": -17,
            "research": 4,
            "team": -1,
            "trust": 3,
            "risk": -1
          },
          "affinities": {
            "kimi": 10
          },
          "fromYear": 2023,
          "fromQuarter": 1,
          "rationale": "保留原事件历史背景与数值；改为现有核心公司的玩家自建试验或虚构合作，不声称真实签约或尚未发布的产品能力。",
          "secondaryAffinities": {},
          "editorialSource": "research/company-balance-v21.json"
        }
      ]
    },
    "redpajama_llama_recipe_2023q2": {
      "tags": [
        "research",
        "data",
        "open"
      ],
      "focusBrands": [
        "qwen",
        "deepseek"
      ],
      "routes": [
        {
          "id": "self",
          "label": "自建数据清洗和配方验证流程",
          "result": "你花钱整理自己的数据与验证流程，研发能力和可信度提升。工程师忙着清理重复内容，第一次觉得最有价值的操作，可能是认真删除一些东西。",
          "quarterDelta": {
            "cash": -44,
            "research": 3,
            "trust": 5,
            "team": -1
          },
          "affinities": {}
        },
        {
          "id": "public",
          "label": "共建开放数据处理与复现工具",
          "result": "你出钱共同维护处理和复现工具，研发与信任稳步增长。团队承担了更多协调工作，大家没有拿到神奇的捷径，却终于能检查同一份加工流程。",
          "quarterDelta": {
            "cash": -20,
            "research": 2,
            "trust": 4,
            "team": -2
          },
          "affinities": {}
        }
      ],
      "contextOffers": [
        {
          "id": "redpajama_llama_recipe_2023q2-nvidia",
          "brand": "nvidia",
          "label": "用Megatron测数据配方的算力账",
          "result": "你们用Megatron训练流程对RedPajama数据做小规模配比实验，先量吞吐与损失，再决定要不要扩大。透明配方终于对应到机器时间；管理员承认，硬盘只是账单的第一章。",
          "mode": "cooperate",
          "quarterDelta": {
            "cash": -34,
            "research": 6,
            "team": -3,
            "trust": 3,
            "risk": 2
          },
          "affinities": {
            "nvidia": 10
          },
          "fromYear": 2023,
          "fromQuarter": 2,
          "sourceUrls": [
            "https://research.nvidia.com/labs/adlr/MegatronLM/",
            "https://www.together.ai/blog/redpajama"
          ],
          "rationale": "2019Megatron训练工具与2023年4月RedPajama数据重建结合；玩家自训。"
        },
        {
          "id": "claude-dataset-review-notes",
          "brand": "claude",
          "label": "向Anthropic研究路线补语料风险笔记",
          "result": "团队逐项阅读开放数据配方，标出来源不清、重复过多和需要人工复核的部分，把笔记整理成可讨论的评审材料。下载按钮晚按了一周，研究问题却多了几页；管理员称这是今年最省硬盘的进展。",
          "mode": "cooperate",
          "quarterDelta": {
            "cash": -22,
            "research": 5,
            "team": -2,
            "trust": 4,
            "risk": -2
          },
          "affinities": {
            "claude": 10
          },
          "fromYear": 2023,
          "fromQuarter": 2,
          "sourceUrls": [
            "https://www.together.ai/blog/redpajama"
          ],
          "rationale": "已有Anthropic安全研究可作为玩家讨论语料风险的路线；玩家整理与提交笔记不代表对方真实采纳，也不声称获得其未公开训练数据。 所列来源仅作事件背景；具体实施、合作、收入与资源变化均为游戏虚构，不代表现实合作或品牌背书。"
        },
        {
          "id": "redpajama_llama_recipe_2023q2-huawei",
          "brand": "huawei",
          "label": "借盘古α并行思路跑小份语料",
          "result": "你们先审查语料来源，再按盘古α的自动并行研究在昇腾路线跑小规模训练。独立工具链收获了一批问题清单，数据搬运也比想象中慢；配方公开之后，复现仍得亲自下厨。",
          "mode": "cooperate",
          "quarterDelta": {
            "cash": -30,
            "research": 5,
            "team": -3,
            "trust": 3,
            "risk": 1
          },
          "affinities": {
            "huawei": 10
          },
          "fromYear": 2023,
          "fromQuarter": 2,
          "sourceUrls": [
            "https://arxiv.org/abs/2104.12369",
            "https://www.together.ai/blog/redpajama"
          ],
          "rationale": "盘古α已有自动并行中文预训练研究；限定玩家小规模复现非全量复用承诺。"
        },
        {
          "id": "redpajama_llama_recipe_2023q2-openai",
          "brand": "openai",
          "label": "对照GPT-3配方，公开自家数据账",
          "result": "你们把GPT-3论文的数据描述与RedPajama重建流程对照，给自家语料补上来源、过滤与去重记录。短期没换来更大的模型，却让复现实验有据可查；透明先从自己的硬盘开始。",
          "mode": "compete",
          "quarterDelta": {
            "cash": -18,
            "research": 5,
            "team": -2,
            "trust": 4,
            "risk": -2
          },
          "affinities": {
            "openai": -10
          },
          "fromYear": 2023,
          "fromQuarter": 2,
          "sourceUrls": [
            "https://arxiv.org/abs/2005.14165",
            "https://www.together.ai/blog/redpajama"
          ],
          "rationale": "独立竞争路线比较公开数据配方，不暗示GPT-3原始数据或权重可下载。"
        },
        {
          "id": "redpajama_llama_recipe_2023q2-google-research",
          "brand": "gemini",
          "label": "沿 Google 的研究，核对开放训练配方",
          "result": "你们参考 Google 的公开研究逐项检查数据处理、训练记录和评测方法，再用小实验比较配方差异。没有一夜训练出新巨头，倒是找到了几处会白烧预算的设置；财务破例给读论文也记了一次交付。",
          "mode": "cooperate",
          "affinities": {
            "gemini": 10
          },
          "secondaryAffinities": {},
          "fromYear": 2023,
          "fromQuarter": 2,
          "quarterDelta": {
            "cash": -24,
            "research": 4,
            "team": -1,
            "trust": 3
          },
          "rationale": "补充非硬件回应，避免两个硬件厂商长期占据事件池；2023Q4前使用Google名称，具体评测与交付为玩家自建试验。",
          "editorialSource": "research/company-balance-v21.json"
        },
        {
          "id": "redpajama_llama_recipe_2023q2-qwen-research",
          "brand": "qwen",
          "label": "对照通义千问，整理中文数据配方",
          "result": "你们围绕当时通义千问的中文任务表现整理测试题，再给自家语料记录来源、清洗与去重步骤。团队先把中文数据处理做扎实，模型训练仍从小实验开始。硬盘没有立刻装满，研究员已经删掉了三份内容一模一样的好资料。",
          "mode": "cooperate",
          "affinities": {
            "qwen": 10
          },
          "secondaryAffinities": {},
          "fromYear": 2023,
          "fromQuarter": 2,
          "quarterDelta": {
            "cash": -23,
            "research": 5,
            "team": -2,
            "trust": 3
          },
          "rationale": "补充2023年新进入公司的可选研究回应；合作与对话为游戏虚构，不使用尚未发布的Grok或DeepSeek具体模型，不声称获得闭源训练配方或权重。",
          "editorialSource": "research/company-balance-v21.json"
        }
      ]
    },
    "hinton_hopfield_nobel_2024q4": {
      "tags": [
        "research",
        "open"
      ],
      "focusBrands": [
        "openai",
        "claude",
        "deepseek"
      ],
      "routes": [
        {
          "id": "self",
          "label": "给基础研究留长期预算",
          "result": "团队把三十年前的论文重新读了一遍。海报没做，基线倒是涨了；财务第一次允许一个项目把“暂时没用”写进周报。",
          "quarterDelta": {
            "cash": -36,
            "research": 4,
            "trust": 3,
            "team": 1
          },
          "affinities": {}
        },
        {
          "id": "public",
          "label": "开放论文复现，招募跨学科新人",
          "result": "读书会坐满了物理、数学和计算机同学。大家争论了一下午学科归属，最后一致同意：先让代码跑起来，再分谁的功劳。",
          "quarterDelta": {
            "cash": -20,
            "research": 2,
            "trust": 4,
            "team": 3
          },
          "affinities": {}
        }
      ],
      "contextOffers": [
        {
          "id": "hinton_hopfield_nobel_2024q4-nvidia",
          "brand": "nvidia",
          "label": "用Modulus招一组物理机器学习研究员",
          "result": "你把NVIDIA Modulus用作偏微分方程与神经网络的训练场，给跨学科新人一条能动手的研究线。招聘有了吸引力，实验回报很慢；诺奖海报的预算变成了真正的科研工时。",
          "mode": "cooperate",
          "quarterDelta": {
            "cash": -32,
            "research": 5,
            "team": 3,
            "trust": 3,
            "risk": 0
          },
          "affinities": {
            "nvidia": 11
          },
          "fromYear": 2024,
          "fromQuarter": 4,
          "sourceUrls": [
            "https://www.nobelprize.org/prizes/physics/2024/press-release/",
            "https://www.nobelprize.org/uploads/2024/11/press-physicsprize2024-2.pdf",
            "https://developer.nvidia.com/blog/?p=62168"
          ],
          "rationale": "Modulus2023已开源物理深度学习工具。关联是计算工具和研究人才，绝不声称英伟达发明获奖成果或获物理奖。"
        },
        {
          "id": "hinton_hopfield_nobel_2024q4-huawei",
          "brand": "huawei",
          "label": "沿盘古气象复现神经网络科学应用",
          "result": "团队从盘古气象论文与开放模型入手，核对神经网络如何预测天气，并给物理背景新人留训练岗位。跨学科合作落了地，数据与评估仍要花钱；获奖热度换成一组能讨论的误差图。",
          "mode": "cooperate",
          "quarterDelta": {
            "cash": -28,
            "research": 5,
            "team": 2,
            "trust": 3,
            "risk": 0
          },
          "affinities": {
            "huawei": 12
          },
          "fromYear": 2024,
          "fromQuarter": 4,
          "sourceUrls": [
            "https://www.nobelprize.org/prizes/physics/2024/press-release/",
            "https://www.nobelprize.org/uploads/2024/11/press-physicsprize2024-2.pdf",
            "https://www.huawei.com/cn/news/2023/7/pangu-ai-model-nature-publish",
            "https://github.com/198808xc/Pangu-Weather"
          ],
          "rationale": "2023盘古气象Nature研究及开放模型，属于神经网络科学应用，不与Hinton/Hopfield物理奖功劳混同。"
        },
        {
          "id": "hinton_hopfield_nobel_2024q4-gemini",
          "brand": "gemini",
          "label": "借AlphaFold3组织跨学科研究招募",
          "result": "你们围绕AlphaFold3的公开研究做阅读与复现实验规划，招募能把科学问题写成模型任务的人。候选人开始谈数据和误差，研发预算却要长期承诺；融资稿里的物理学三个字终于少了一点魔法。",
          "mode": "cooperate",
          "quarterDelta": {
            "cash": -24,
            "research": 4,
            "team": 3,
            "trust": 3,
            "risk": 0
          },
          "affinities": {
            "gemini": 11
          },
          "fromYear": 2024,
          "fromQuarter": 4,
          "sourceUrls": [
            "https://www.nobelprize.org/prizes/physics/2024/press-release/",
            "https://www.nobelprize.org/uploads/2024/11/press-physicsprize2024-2.pdf",
            "https://www.isomorphiclabs.com/articles/rational-drug-design-with-alphafold-3"
          ],
          "rationale": "AlphaFold3于2024Q2发表，关联为AI科学研究与招聘；不把同年化学成果冒充这项物理奖，也不承诺所有权重商业使用。"
        },
        {
          "id": "qwen-neural-network-course",
          "brand": "qwen",
          "label": "用千问开放材料办课，先复现再招人",
          "result": "你们从基础神经网络讲起，借千问公开材料安排小规模复现实验，让报名者交出运行记录和失败分析。海报没有蹭成获奖名单，导师工时却实实在在增加；留下来的新人关心的第一件事，是下周还能不能用机器。",
          "mode": "cooperate",
          "quarterDelta": {
            "cash": -20,
            "research": 4,
            "team": 3,
            "trust": 3,
            "risk": 0
          },
          "affinities": {
            "qwen": 11
          },
          "fromYear": 2024,
          "fromQuarter": 4,
          "sourceUrls": [
            "https://www.nobelprize.org/prizes/physics/2024/press-release/"
          ],
          "rationale": "2024年已有千问开放模型与研究材料；读书会、复现课程和招聘为玩家虚构行为，不暗示阿里获该奖项或存在真实联合办学。 所列来源仅作事件背景；具体实施、合作、收入与资源变化均为游戏虚构，不代表现实合作或品牌背书。"
        }
      ]
    },
    "claude_region_access_2025q3": {
      "tags": [
        "product",
        "governance"
      ],
      "focusBrands": [
        "deepseek",
        "kimi",
        "qwen",
        "xiaomi",
        "gemini"
      ],
      "routes": [
        {
          "id": "self",
          "label": "自己接管服务，连夜改造备用模型",
          "result": "你们把关键流程搬回自己的机器，砍掉暂时做不好的功能，先保住客户正在用的部分。上线比承诺晚了一夜，但启动按钮终于掌握在自己手里。第二天，工程师把单一供应商依赖写进了公司的事故报告。",
          "quarterDelta": {
            "cash": -48,
            "research": 5,
            "team": -3,
            "trust": 3,
            "risk": -2
          },
          "affinities": {}
        },
        {
          "id": "public",
          "label": "公开迁移清单，和同行一起补坑",
          "result": "你们公开功能对照、迁移脚本和失败案例，同行陆续补上各自踩过的坑。客服不再让每个用户从头解释一遍，团队也收到了能直接用的修复。群公告从“又是谁被停了”变成“这一项谁已经迁完了”。",
          "quarterDelta": {
            "cash": -32,
            "research": 3,
            "team": 1,
            "trust": 5,
            "risk": -3
          },
          "affinities": {}
        }
      ],
      "contextOffers": [
        {
          "id": "claude_region_access_2025q3-deepseek",
          "brand": "deepseek",
          "label": "搬到 DeepSeek，先把代码跑起来",
          "result": "你们给DeepSeek接好仓库检索和测试，逐项核对原有功能。它也会写出需要返工的代码，但交付重新动了起来。客户没有问模型姓什么，只问今晚能不能把那个报错修好。",
          "mode": "cooperate",
          "quarterDelta": {
            "cash": -36,
            "research": 6,
            "team": -2,
            "trust": 2,
            "risk": 1
          },
          "affinities": {
            "deepseek": 12
          },
          "secondaryAffinities": {
            "claude": -3
          },
          "fromYear": 2025,
          "fromQuarter": 3,
          "rationale": "玩家公司与供应商的接洽、实验及结果均为虚构；不代表真实合作或对现实产品能力的保证。",
          "sourceUrls": [
            "https://www.anthropic.com/news/updating-restrictions-of-sales-to-unsupported-regions"
          ]
        },
        {
          "id": "claude_region_access_2025q3-kimi",
          "brand": "kimi",
          "label": "和 Kimi 重接文档与工作流",
          "result": "你们与Kimi方向的伙伴重做长文档检索，把散在聊天记录里的需求整理回项目。新系统先接手客服和资料处理，复杂任务留给人兜底。行政发现，模型换了一家，公司终于有人知道最新版合同在哪儿。",
          "mode": "cooperate",
          "quarterDelta": {
            "cash": -32,
            "research": 4,
            "team": 2,
            "trust": 3,
            "risk": -1
          },
          "affinities": {
            "kimi": 11
          },
          "secondaryAffinities": {
            "claude": -3
          },
          "fromYear": 2025,
          "fromQuarter": 3,
          "rationale": "玩家公司与供应商的接洽、实验及结果均为虚构；不代表真实合作或对现实产品能力的保证。",
          "sourceUrls": [
            "https://www.anthropic.com/news/updating-restrictions-of-sales-to-unsupported-regions"
          ]
        },
        {
          "id": "claude_region_access_2025q3-qwen",
          "brand": "qwen",
          "label": "用千问搭一套能自己部署的服务",
          "result": "你们选定千问的开放模型，把客服和内部工具部署到自己的环境里，先小范围试用。迁移花了钱，后续也得养机器，但客服终于能给出稳定的交付安排。财务把续费提醒划掉，换成了电费提醒。",
          "mode": "cooperate",
          "quarterDelta": {
            "cash": -40,
            "research": 5,
            "team": -1,
            "trust": 4,
            "risk": -2
          },
          "affinities": {
            "qwen": 12
          },
          "secondaryAffinities": {
            "claude": -3
          },
          "fromYear": 2025,
          "fromQuarter": 3,
          "rationale": "玩家公司与供应商的接洽、实验及结果均为虚构；不代表真实合作或对现实产品能力的保证。",
          "sourceUrls": [
            "https://www.anthropic.com/news/updating-restrictions-of-sales-to-unsupported-regions"
          ]
        },
        {
          "id": "claude_region_access_2025q3-xiaomi",
          "brand": "xiaomi",
          "label": "先用 MiMo 扛住小任务，给用户续上服务",
          "result": "你们围绕MiMo做轻量部署，把分类、草稿和简单问答接回来。困难任务明确标成需要人工处理，用户没有拿到全能助手，却等到了有人负责的答复。工程师关掉最热的一台机器，第一次准点吃上晚饭。",
          "mode": "cooperate",
          "quarterDelta": {
            "cash": -24,
            "research": 4,
            "team": 3,
            "trust": 2,
            "risk": -1
          },
          "affinities": {
            "xiaomi": 11
          },
          "secondaryAffinities": {
            "claude": -2
          },
          "fromYear": 2025,
          "fromQuarter": 3,
          "rationale": "玩家公司与供应商的接洽、实验及结果均为虚构；不代表真实合作或对现实产品能力的保证。",
          "sourceUrls": [
            "https://www.anthropic.com/news/updating-restrictions-of-sales-to-unsupported-regions"
          ]
        },
        {
          "id": "claude_region_access_2025q3-gemini",
          "brand": "gemini",
          "label": "用 Google 的 Gemma 搭本地备用服务",
          "result": "你们下载Gemma开放模型，按许可在本地搭起备用服务，逐个验收原来的任务。它接不了全部工作，关键流程却不必再等一个账号恢复。团队把新方案写进部署文档：以后买服务，也要留一条自己能走的路。",
          "mode": "cooperate",
          "quarterDelta": {
            "cash": -34,
            "research": 5,
            "team": -1,
            "trust": 3,
            "risk": -2
          },
          "affinities": {
            "gemini": 10
          },
          "secondaryAffinities": {
            "claude": -2
          },
          "fromYear": 2025,
          "fromQuarter": 3,
          "rationale": "Google于2025年3月发布Gemma 3开放模型；此处为玩家本地部署，不把Gemma称为Gemini云端服务，也不描述绕过地区限制。",
          "sourceUrls": [
            "https://www.anthropic.com/news/updating-restrictions-of-sales-to-unsupported-regions",
            "https://blog.google/innovation-and-ai/technology/developers-tools/gemma-3/"
          ]
        }
      ]
    },
    "relay_watered_doubao_2026q2": {
      "tags": [
        "product",
        "governance"
      ],
      "focusBrands": [
        "openai",
        "deepseek",
        "kimi",
        "qwen",
        "xiaomi"
      ],
      "routes": [
        {
          "id": "self",
          "label": "停掉中转，自己管理每一条模型路由",
          "result": "你们停止续费，把供应商、请求记录和账单接到自己的控制台，先用小范围测试恢复服务。工程师又多了一项值班工作，客户却能看清每笔钱花到了哪里。站长发来“老用户专属折扣”，财务直接把邮件归档。",
          "quarterDelta": {
            "cash": -46,
            "research": 5,
            "team": -3,
            "trust": 4,
            "risk": -3
          },
          "affinities": {}
        },
        {
          "id": "public",
          "label": "公开对账证据，替用户把差价追回来",
          "result": "你们整理了能核验的路由记录与账单，抹掉客户信息后公开，向中转站追索差价。处理退款和投诉很花时间，但其他团队不必再踩同一个坑。评论区最高赞很直白：豆包可以用，别按Claude的价偷偷卖。",
          "quarterDelta": {
            "cash": -30,
            "research": 3,
            "team": -1,
            "trust": 6,
            "risk": -4
          },
          "affinities": {}
        }
      ],
      "contextOffers": [
        {
          "id": "relay_watered_doubao_2026q2-openai",
          "brand": "openai",
          "label": "给 OpenAI 正规渠道做一套逐笔对账",
          "result": "你们让符合服务条件的业务改走OpenAI正规渠道，保留请求编号，逐项核对账单与交付。单价没有中转广告那么漂亮，但供应商和采购终于在讨论同一款服务。财务批复：贵可以解释，偷换不能报销。",
          "mode": "cooperate",
          "quarterDelta": {
            "cash": -36,
            "research": 5,
            "team": -1,
            "trust": 4,
            "risk": -3
          },
          "affinities": {
            "openai": 11
          },
          "secondaryAffinities": {},
          "fromYear": 2026,
          "fromQuarter": 2,
          "rationale": "玩家在满足官方地区及服务条件的业务环境中采购并对账；不鼓励绕过地区限制，不承诺某种响应文本可证明模型身份。"
        },
        {
          "id": "relay_watered_doubao_2026q2-deepseek",
          "brand": "deepseek",
          "label": "和 DeepSeek 合作，把模型与价格都写明白",
          "result": "你们把DeepSeek接到自己的服务里，页面清楚写出模型、计费方式和适用任务。研发补了测试，客服补了说明，报价反而更容易谈了。第一位客户说得很实在：“我能接受它不会，不能接受你不说。”",
          "mode": "cooperate",
          "quarterDelta": {
            "cash": -30,
            "research": 5,
            "team": 1,
            "trust": 4,
            "risk": -2
          },
          "affinities": {
            "deepseek": 12
          },
          "secondaryAffinities": {},
          "fromYear": 2026,
          "fromQuarter": 2,
          "rationale": "玩家公司与供应商的接洽、实验及结果均为虚构；不代表真实合作或对现实产品能力的保证。"
        },
        {
          "id": "relay_watered_doubao_2026q2-kimi",
          "brand": "kimi",
          "label": "让 Kimi 接手文档业务，按任务验收",
          "result": "你们把长文档业务交给Kimi方案，先用真实客户材料做验收，费用和模型来源都写进合同。最难的几类任务仍然需要人工复核，但团队终于知道问题出在哪一环。采购把“满血”从招标要求里删掉，换成了可复测的任务。",
          "mode": "cooperate",
          "quarterDelta": {
            "cash": -32,
            "research": 5,
            "team": -1,
            "trust": 5,
            "risk": -2
          },
          "affinities": {
            "kimi": 11
          },
          "secondaryAffinities": {},
          "fromYear": 2026,
          "fromQuarter": 2,
          "rationale": "玩家公司与供应商的接洽、实验及结果均为虚构；不代表真实合作或对现实产品能力的保证。"
        },
        {
          "id": "relay_watered_doubao_2026q2-qwen",
          "brand": "qwen",
          "label": "用千问自建服务，版本和账本都留在公司",
          "result": "你们部署千问开放模型，把版本、路由和费用一并记录。测试不通过就回退，上新版本就重新验收。模型偶尔还是会答错，但再也不用先猜是谁答的；财务终于能把成本表和机器上的服务一一对上。",
          "mode": "cooperate",
          "quarterDelta": {
            "cash": -40,
            "research": 6,
            "team": -2,
            "trust": 4,
            "risk": -3
          },
          "affinities": {
            "qwen": 12
          },
          "secondaryAffinities": {},
          "fromYear": 2026,
          "fromQuarter": 2,
          "rationale": "玩家公司与供应商的接洽、实验及结果均为虚构；不代表真实合作或对现实产品能力的保证。"
        },
        {
          "id": "relay_watered_doubao_2026q2-xiaomi",
          "brand": "xiaomi",
          "label": "用 MiMo 做平价档，把便宜卖在明处",
          "result": "你们用MiMo做出价格更低的服务档位，把能做和不能做的任务摆上页面，让用户自己选。没有偷偷降级，反而吸引了一批原本嫌贵的客户。采购感叹：早知道大家愿意买经济舱，就不该天天给座椅贴头等舱的牌子。",
          "mode": "cooperate",
          "quarterDelta": {
            "cash": -26,
            "research": 4,
            "team": 2,
            "trust": 4,
            "risk": -1
          },
          "affinities": {
            "xiaomi": 12
          },
          "secondaryAffinities": {},
          "fromYear": 2026,
          "fromQuarter": 2,
          "rationale": "玩家公司与供应商的接洽、实验及结果均为虚构；不代表真实合作或对现实产品能力的保证。"
        }
      ]
    }
  },
  "researchPeers": [
    {
      "id": "tesla",
      "name": "Tesla / 特斯拉",
      "shortName": "特斯拉",
      "fromYear": 2021,
      "fromQuarter": 1,
      "researchOnly": true,
      "monogram": "T"
    },
    {
      "id": "zhuiyi",
      "name": "追一科技",
      "shortName": "追一科技",
      "fromYear": 2021,
      "fromQuarter": 1,
      "researchOnly": true,
      "monogram": "追一"
    },
    {
      "id": "ssi",
      "name": "Safe Superintelligence",
      "shortName": "SSI",
      "fromYear": 2024,
      "fromQuarter": 2,
      "researchOnly": true,
      "monogram": "SSI"
    },
    {
      "id": "worldlabs",
      "name": "World Labs",
      "shortName": "World Labs",
      "fromYear": 2024,
      "fromQuarter": 3,
      "researchOnly": true,
      "monogram": "WL"
    },
    {
      "id": "eureka",
      "name": "Eureka Labs",
      "shortName": "Eureka",
      "fromYear": 2024,
      "fromQuarter": 3,
      "researchOnly": true,
      "monogram": "E"
    },
    {
      "id": "hygon",
      "name": "海光信息",
      "shortName": "海光",
      "fromYear": 2022,
      "fromQuarter": 2,
      "researchOnly": true,
      "monogram": "海光"
    }
  ],
  "coreCompanyIds": [
    "openai",
    "claude",
    "deepseek",
    "kimi",
    "gemini",
    "qwen",
    "huawei",
    "xiaomi",
    "xai",
    "nvidia"
  ],
  "guestCompanyIds": [
    "doubao",
    "wenxin",
    "hunyuan"
  ]
};
