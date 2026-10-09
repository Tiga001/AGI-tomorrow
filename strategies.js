window.AGI_STRATEGIES = [
  {
    "id": "deduplicate-data",
    "label": "清洗去重数据",
    "fromYear": 2021,
    "category": "research",
    "cost": 12,
    "delta": {
      "research": 1,
      "trust": 2,
      "team": 0,
      "risk": -2
    },
    "result": "删完重复语料，模型终于不再把回声当知识。"
  },
  {
    "id": "inference-quantization",
    "label": "推理量化",
    "fromYear": 2021,
    "category": "research",
    "cost": 18,
    "delta": {
      "research": 1,
      "trust": 0,
      "team": 2,
      "risk": 1
    },
    "result": "模型瘦身成功，工程师终于能把演示跑在演示机上。",
    "toYear": 2023,
    "toQuarter": 1
  },
  {
    "id": "kv-cache-optimization",
    "label": "优化KV缓存",
    "fromYear": 2023,
    "category": "research",
    "cost": 24,
    "delta": {
      "research": 2,
      "trust": 0,
      "team": 1,
      "risk": 0
    },
    "result": "模型少算了许多重复题，显存仍坚持自己只是暂时够用。",
    "toYear": 2025,
    "toQuarter": 4
  },
  {
    "id": "synthetic-data",
    "label": "生产合成数据",
    "fromYear": 2023,
    "category": "research",
    "cost": 20,
    "delta": {
      "research": 2,
      "trust": -1,
      "team": 0,
      "risk": 3
    },
    "result": "训练题终于够用了，抽检员开始追问出题老师是谁教的。"
  },
  {
    "id": "retrieval-augmentation",
    "label": "维护检索增强与知识索引",
    "fromYear": 2023,
    "category": "research",
    "cost": 20,
    "delta": {
      "research": 1,
      "trust": 3,
      "team": -1,
      "risk": -1
    },
    "result": "这轮更新补齐新资料和引用检查。模型少背了一句过期答案，文档管理员再次证明更新日期也是一种参数。",
    "repeatResults": [
      "索引又吸收了一批新资料。过期答案退了场，负责更新文档的人终于有了可量化的功劳。"
    ]
  },
  {
    "id": "licensed-distillation",
    "label": "授权模型蒸馏",
    "fromYear": 2024,
    "category": "research",
    "cost": 28,
    "delta": {
      "research": 2,
      "trust": 2,
      "team": 0,
      "risk": -2
    },
    "result": "小模型学到了本事，法务也终于拿到了一张能归档的授权书。",
    "produces": [
      "model"
    ]
  },
  {
    "id": "build-agent-harness",
    "label": "开发Agent Harness",
    "fromYear": 2025,
    "category": "research",
    "cost": 38,
    "delta": {
      "research": 3,
      "trust": 1,
      "team": -2,
      "risk": 2
    },
    "result": "模型终于能动手干活，工具日志也终于比聊天记录长了。",
    "toYear": 2025,
    "toQuarter": 3,
    "oncePerRun": true,
    "produces": [
      "harness"
    ]
  },
  {
    "id": "long-context",
    "label": "扩展长上下文",
    "fromYear": 2024,
    "category": "research",
    "cost": 35,
    "delta": {
      "research": 3,
      "trust": 0,
      "team": -1,
      "risk": 2
    },
    "result": "整本手册终于塞得进去，大家开始测试模型有没有真的读完。",
    "toYear": 2026,
    "toQuarter": 4
  },
  {
    "id": "evaluation-suite",
    "label": "建设评测集",
    "fromYear": 2021,
    "category": "research",
    "cost": 16,
    "delta": {
      "research": 1,
      "trust": 2,
      "team": 0,
      "risk": -3
    },
    "result": "团队统一了评分口径，庆功会因发现真实分数而延期。",
    "hint": "建立内部评测基线；后续版本还需接受独立检验。",
    "oncePerRun": true
  },
  {
    "id": "user-community",
    "label": "创建用户社区",
    "fromYear": 2021,
    "category": "growth",
    "cost": 10,
    "delta": {
      "research": 0,
      "trust": 3,
      "team": 1,
      "risk": -1
    },
    "result": "用户开始替公司找问题，客服第一次感谢有人把问题说得很细。",
    "oncePerRun": true
  },
  {
    "id": "technical-blog",
    "label": "发布技术博客",
    "fromYear": 2021,
    "category": "growth",
    "cost": 8,
    "delta": {
      "research": 1,
      "trust": 2,
      "team": -1,
      "risk": 0
    },
    "result": "为了把原理写明白，作者顺手修掉了三个自己也不懂的地方。"
  },
  {
    "id": "sell-api",
    "label": "卖API",
    "fromYear": 2021,
    "category": "growth",
    "cost": 12,
    "revenue": 30,
    "delta": {
      "research": 0,
      "trust": -1,
      "team": -1,
      "risk": 1
    },
    "result": "调用量变成了现金，凌晨报错也获得了明确的付费身份。",
    "produces": [
      "customers"
    ]
  },
  {
    "id": "enterprise-delivery",
    "label": "做企业交付",
    "fromYear": 2021,
    "category": "growth",
    "cost": 30,
    "revenue": 50,
    "delta": {
      "research": 1,
      "trust": 3,
      "team": -3,
      "risk": 1
    },
    "result": "合同款到账，客户顺便确认了第十七版专属需求。",
    "produces": [
      "customers"
    ]
  },
  {
    "id": "developer-workshop",
    "label": "举办开发者工坊",
    "fromYear": 2022,
    "category": "growth",
    "cost": 12,
    "revenue": 9,
    "delta": {
      "research": 0,
      "trust": 2,
      "team": 2,
      "risk": 0
    },
    "result": "大家带走了能运行的样例，讲师带回了被用户理解的快乐。",
    "cooldownQuarters": 1
  },
  {
    "id": "consumer-app-launch",
    "label": "优化订阅转化与续费",
    "fromYear": 2023,
    "category": "growth",
    "cost": 28,
    "revenue": 48,
    "delta": {
      "research": 1,
      "trust": 2,
      "team": -2,
      "risk": -1
    },
    "result": "团队加班重做了付费引导和续费流程，更多老用户留下来了。取消订阅按钮没有藏起来，投诉少了一些；客服松了口气，开发终于能补上这周的觉。",
    "produces": [
      "customers"
    ],
    "requiredAssets": [
      "customers"
    ]
  },
  {
    "id": "hire-inference-engineers",
    "label": "招推理工程师",
    "fromYear": 2023,
    "category": "operations",
    "cost": 32,
    "delta": {
      "research": 2,
      "trust": 0,
      "team": 3,
      "risk": 0
    },
    "result": "新人看了眼服务日志，先把大家习以为常的等待删掉一半。"
  },
  {
    "id": "staff-rotation-break",
    "label": "安排团队轮休",
    "fromYear": 2021,
    "category": "operations",
    "cost": 15,
    "delta": {
      "research": 0,
      "trust": 1,
      "team": 5,
      "risk": -3
    },
    "result": "工程师终于离开工位，线上系统也安静得像在配合休假。"
  },
  {
    "id": "cut-noncore-projects",
    "label": "削减非核心项目",
    "fromYear": 2021,
    "category": "operations",
    "cost": 8,
    "revenue": 40,
    "delta": {
      "research": 0,
      "trust": -2,
      "team": -4,
      "risk": -1
    },
    "result": "清算项目释放了现金，告别会上大家努力不看旧路线图。",
    "oncePerRun": true
  },
  {
    "id": "consolidate-compute",
    "label": "盘点并整合闲置算力",
    "fromYear": 2022,
    "category": "operations",
    "cost": 16,
    "revenue": 8,
    "delta": {
      "research": 1,
      "trust": 0,
      "team": 1,
      "risk": -1
    },
    "result": "本轮盘点找到了新积累的闲置节点，调度和电费预算重新对齐。机器开始干活，财务开始点头。",
    "cooldownQuarters": 1,
    "requiredAssets": [
      "compute"
    ]
  },
  {
    "id": "claude-managed-operations",
    "label": "接入Claude托管",
    "fromYear": 2025,
    "category": "operations",
    "cost": 18,
    "revenue": 20,
    "delta": {
      "research": 1,
      "trust": -3,
      "team": 3,
      "risk": -1
    },
    "result": "托管合作带来一笔收入，团队少值几班，更多客户开始追问谁在掌舵。",
    "affinities": {
      "claude": 5
    }
  },
  {
    "id": "shared-open-infrastructure",
    "label": "共建开放基础设施",
    "fromYear": 2024,
    "category": "operations",
    "cost": 24,
    "delta": {
      "research": 2,
      "trust": 3,
      "team": 0,
      "risk": 1
    },
    "result": "和开源社区共用底座后，技术问题多了愿意一起熬夜的人。"
  },
  {
    "id": "xai-compute-partnership",
    "label": "采购xAI算力",
    "fromYear": 2025,
    "category": "operations",
    "cost": 35,
    "delta": {
      "research": 3,
      "trust": -1,
      "team": -2,
      "risk": 3
    },
    "result": "算力合作把实验排期提前了，工程师的日历也被同步压缩。",
    "affinities": {
      "xai": 5
    }
  },
  {
    "id": "illicit-data-distillation",
    "label": "偷偷蒸馏友商",
    "fromYear": 2023,
    "category": "risk",
    "cost": 18,
    "delta": {
      "research": 12,
      "trust": -7,
      "team": -2,
      "risk": 14
    },
    "result": "分数突然追上了老师，模型自我介绍时也顺便报出了老师的名字。法务决定先听完再鼓掌。",
    "produces": [
      "model"
    ]
  },
  {
    "id": "rush-release",
    "label": "抢跑产品发布",
    "fromYear": 2022,
    "category": "risk",
    "cost": 10,
    "revenue": 55,
    "delta": {
      "research": 3,
      "trust": -5,
      "team": -3,
      "risk": 9
    },
    "result": "首发收入赶上了季度末，待修问题也赶上了下一次热搜。"
  },
  {
    "id": "red-team-review",
    "label": "开展评测红队",
    "fromYear": 2021,
    "category": "risk",
    "cost": 26,
    "delta": {
      "research": 1,
      "trust": 4,
      "team": -1,
      "risk": -12
    },
    "result": "红队把漏洞演示得太熟练，销售默默换掉了万能助手那页。",
    "hint": "审查当前版本漏洞；重大模型更新后需要重测。"
  },
  {
    "id": "publish-model-card",
    "label": "发布模型说明",
    "fromYear": 2021,
    "category": "risk",
    "cost": 8,
    "delta": {
      "research": 0,
      "trust": 3,
      "team": -1,
      "risk": -4
    },
    "result": "能力边界终于写清楚了，宣传语因此失去了几个感叹号。"
  },
  {
    "id": "recruit-tibo",
    "label": "招募 Tibo",
    "fromYear": 2025,
    "category": "recruit",
    "cost": 48,
    "once": true,
    "delta": {
      "research": 4,
      "trust": 1,
      "team": 3,
      "risk": 0
    },
    "result": "Tibo加入团队，第一场会上没问估值，先问用户的额度够不够。产品经理把重置按钮挪到他手边，财务默默打开了算力账单。",
    "fromQuarter": 2,
    "affinities": {
      "openai": 8
    }
  },
  {
    "id": "recruit-yao-shunyu",
    "label": "招募 姚顺雨",
    "fromYear": 2025,
    "category": "recruit",
    "cost": 60,
    "once": true,
    "delta": {
      "research": 5,
      "trust": 0,
      "team": 3,
      "risk": 1
    },
    "result": "新同事接受邀请，公司终于有人愿意仔细审视智能体的工作过程。",
    "affinityTimeline": [
      {
        "fromYear": 2025,
        "fromQuarter": 1,
        "affinities": {
          "openai": 8
        }
      },
      {
        "fromYear": 2026,
        "fromQuarter": 2,
        "affinities": {}
      }
    ]
  },
  {
    "id": "recruit-su-jianlin",
    "label": "招募 苏剑林",
    "fromYear": 2023,
    "category": "recruit",
    "cost": 38,
    "once": true,
    "delta": {
      "research": 3,
      "trust": 3,
      "team": 2,
      "risk": -2
    },
    "result": "新同事加入研究组，白板的使用率先于GPU达到满载。",
    "affinityTimeline": [
      {
        "fromYear": 2023,
        "fromQuarter": 1,
        "affinities": {}
      },
      {
        "fromYear": 2025,
        "fromQuarter": 1,
        "affinities": {
          "kimi": 8
        }
      }
    ]
  },
  {
    "id": "recruit-luo-fuli",
    "label": "招募 罗福莉",
    "fromYear": 2024,
    "category": "recruit",
    "cost": 48,
    "once": true,
    "delta": {
      "research": 4,
      "trust": 1,
      "team": 2,
      "risk": -1
    },
    "result": "新同事加入团队，新一轮研究计划终于有了更多执行底气。",
    "affinityTimeline": [
      {
        "fromYear": 2024,
        "fromQuarter": 1,
        "affinities": {
          "deepseek": 8
        }
      },
      {
        "fromYear": 2025,
        "fromQuarter": 4,
        "affinities": {
          "xiaomi": 8
        }
      }
    ]
  },
  {
    "id": "recruit-yang-zhilin",
    "label": "招募 杨植麟",
    "fromYear": 2023,
    "category": "recruit",
    "cost": 58,
    "once": true,
    "delta": {
      "research": 4,
      "trust": 0,
      "team": 4,
      "risk": 1
    },
    "result": "新同事接受邀请，下一张路线图需要一块更大的白板。",
    "fromQuarter": 1,
    "affinities": {
      "kimi": 8
    }
  },
  {
    "id": "recruit-tang-jie",
    "label": "招募 唐杰",
    "fromYear": 2021,
    "category": "recruit",
    "cost": 52,
    "once": true,
    "delta": {
      "research": 3,
      "trust": 3,
      "team": 4,
      "risk": -1
    },
    "result": "新同事加入公司，研究例会终于能围着清楚的问题展开。",
    "affinities": {}
  },
  {
    "id": "recruit-ilya",
    "label": "招募 Ilya",
    "fromYear": 2021,
    "category": "recruit",
    "cost": 65,
    "once": true,
    "delta": {
      "research": 5,
      "trust": 3,
      "team": 2,
      "risk": -2
    },
    "result": "新同事接受邀请，财务批准预算后也来旁听第一场研究会。",
    "affinityTimeline": [
      {
        "fromYear": 2021,
        "fromQuarter": 1,
        "affinities": {
          "openai": 8
        }
      },
      {
        "fromYear": 2024,
        "fromQuarter": 2,
        "affinities": {}
      }
    ]
  },
  {
    "id": "recruit-karpathy",
    "label": "招募 Karpathy",
    "fromYear": 2021,
    "category": "recruit",
    "cost": 58,
    "once": true,
    "delta": {
      "research": 4,
      "trust": 3,
      "team": 3,
      "risk": -1
    },
    "result": "新同事加入团队，新人第一次觉得入职课程值得回放。",
    "affinities": {
      "claude": 8
    },
    "requiresPeer": "claude"
  },
  {
    "id": "social-feed-smear",
    "label": "买水军抹黑友商",
    "fromYear": 2021,
    "category": "risk",
    "cost": 4,
    "revenue": 0,
    "delta": {
      "research": 0,
      "trust": 6,
      "team": -1,
      "risk": 10
    },
    "result": "一轮流言把你们衬成了更可靠的选择，风评暂时上扬，账上却只有买水军的支出。员工避开了这场庆功会，法务把热搜截图收进了另一个文件夹。"
  },
  {
    "id": "anonymous-rival-snark",
    "label": "小号阴阳友商",
    "fromYear": 2021,
    "category": "risk",
    "cost": 2,
    "revenue": 0,
    "delta": {
      "research": 0,
      "trust": 3,
      "team": -1,
      "risk": 7
    },
    "result": "匿名评论让一部分围观者转而看好你们，没有客户因此付款。老板在例会上险些用回那个熟悉的语气，运营开始担心截图哪天会找回原主。"
  },
  {
    "id": "open-release-credit-grab",
    "label": "抢发开源套壳",
    "fromYear": 2023,
    "category": "risk",
    "cost": 6,
    "revenue": 45,
    "delta": {
      "research": 6,
      "trust": -7,
      "team": -1,
      "risk": 12
    },
    "result": "发布会抢先宣布自主突破，社区比客户更早认出了代码里的错别字。"
  },
  {
    "id": "poach-with-paper-options",
    "label": "用期权挖团队",
    "fromYear": 2021,
    "category": "risk",
    "cost": 9,
    "delta": {
      "research": 7,
      "trust": -6,
      "team": 4,
      "risk": 10
    },
    "result": "新同事带着理想入职，期权表的承诺已经能覆盖半个行业。"
  },
  {
    "id": "slide-deck-funding",
    "label": "PPT融一轮",
    "fromYear": 2021,
    "category": "risk",
    "cost": 5,
    "revenue": 125,
    "delta": {
      "research": 0,
      "trust": -6,
      "team": -1,
      "risk": 12
    },
    "result": "资金到账了，研发发现融资稿里的明年已经提前实现了后年。",
    "cooldownQuarters": 3
  },
  {
    "id": "one-yuan-land-grab",
    "label": "一元抢新客",
    "fromYear": 2022,
    "category": "risk",
    "cost": 10,
    "revenue": 50,
    "delta": {
      "research": 0,
      "trust": -5,
      "team": -2,
      "risk": 8
    },
    "result": "用户为一元体验涌入，发现续费价时又给公司贡献了一轮讨论量。",
    "cooldownQuarters": 1
  },
  {
    "id": "curated-benchmark-boast",
    "label": "挑好看的跑分",
    "fromYear": 2022,
    "category": "risk",
    "cost": 4,
    "revenue": 50,
    "delta": {
      "research": 0,
      "trust": -7,
      "team": -1,
      "risk": 12
    },
    "result": "销售靠榜单拿到订单，完整成绩单继续在硬盘里安静地倒数第一。"
  },
  {
    "id": "edited-demo-preorders",
    "label": "演示全靠剪辑",
    "fromYear": 2024,
    "category": "risk",
    "cost": 3,
    "revenue": 85,
    "delta": {
      "research": 0,
      "trust": -10,
      "team": -2,
      "risk": 16
    },
    "result": "预付款进了账户，视频里最聪明的智能体其实是剪辑师。"
  },
  {
    "id": "paid-data-cleaning",
    "label": "接数据清洗单",
    "fromYear": 2021,
    "category": "growth",
    "cost": 9,
    "revenue": 40,
    "delta": {
      "research": 1,
      "trust": 1,
      "team": -2,
      "risk": -1
    },
    "result": "帮客户洗掉重复表格后，公司第一次靠删东西养活了做模型的人。"
  },
  {
    "id": "offline-model-kit",
    "label": "卖离线小模型",
    "fromYear": 2023,
    "category": "growth",
    "cost": 14,
    "revenue": 45,
    "delta": {
      "research": 1,
      "trust": 2,
      "team": -1,
      "risk": 0
    },
    "result": "客户拔掉网线还在鼓掌，销售第一次感谢机房里没有信号。",
    "produces": [
      "customers"
    ]
  },
  {
    "id": "local-installation-kit",
    "label": "卖本地部署包",
    "fromYear": 2021,
    "category": "growth",
    "cost": 15,
    "revenue": 48,
    "delta": {
      "research": 1,
      "trust": 2,
      "team": -2,
      "risk": 0
    },
    "result": "标准安装包终于卖出去了，客户仍坚持把安装教程打印成红头文件。",
    "produces": [
      "customers"
    ]
  },
  {
    "id": "token-savings-consulting",
    "label": "帮企业省Token",
    "fromYear": 2023,
    "category": "growth",
    "cost": 8,
    "revenue": 34,
    "delta": {
      "research": 2,
      "trust": 2,
      "team": -1,
      "risk": -1
    },
    "result": "删掉提示词里的八遍请认真思考，客户把省下的钱分给了我们。",
    "produces": [
      "customers"
    ]
  },
  {
    "id": "industry-evaluation-report",
    "label": "卖行业评测报告",
    "fromYear": 2022,
    "category": "growth",
    "cost": 6,
    "revenue": 26,
    "delta": {
      "research": 1,
      "trust": 3,
      "team": -1,
      "risk": -2
    },
    "result": "报告如实写了谁会算错账，财务第一次主动订阅技术内容。"
  },
  {
    "id": "renew-support-contracts",
    "label": "给老客户续保",
    "fromYear": 2021,
    "category": "growth",
    "cost": 5,
    "revenue": 36,
    "delta": {
      "research": 0,
      "trust": 3,
      "team": -1,
      "risk": -2
    },
    "result": "客户续了服务合同，可靠地接电话终于战胜了下一代智能的口号。",
    "requiredAssets": [
      "customers"
    ]
  },
  {
    "id": "founder-consulting-hours",
    "label": "卖老板咨询钟点",
    "fromYear": 2021,
    "category": "growth",
    "cost": 4,
    "revenue": 24,
    "delta": {
      "research": 0,
      "trust": 1,
      "team": 1,
      "risk": 0
    },
    "result": "老板出门讲了两小时战略，团队在这两小时里安静地完成了工作。"
  },
  {
    "id": "night-compute-rental",
    "label": "出租夜间算力",
    "fromYear": 2021,
    "category": "operations",
    "cost": 6,
    "revenue": 32,
    "delta": {
      "research": 0,
      "trust": 1,
      "team": -1,
      "risk": 1
    },
    "result": "闲着的显卡开始交房租，管理员被正式提名为夜班包租公。",
    "requiredAssets": [
      "compute"
    ]
  },
  {
    "id": "remove-recursive-meetings",
    "label": "删掉套娃会议",
    "fromYear": 2021,
    "category": "operations",
    "cost": 1,
    "delta": {
      "research": 1,
      "trust": 0,
      "team": 3,
      "risk": 0
    },
    "result": "取消了准备开会的预备会，模型第一次等到了准时出现的工程师。",
    "oncePerRun": true
  },
  {
    "id": "small-model-night-shift",
    "label": "扩大小模型夜班分流",
    "fromYear": 2024,
    "category": "operations",
    "cost": 7,
    "revenue": 8,
    "delta": {
      "research": 1,
      "trust": 1,
      "team": 2,
      "risk": -1
    },
    "result": "又一批简单任务交给小模型，大模型和夜班同事得以专注真正难的工单。"
  },
  {
    "id": "agent-acceptance-service",
    "label": "接智能体验收单",
    "fromYear": 2026,
    "category": "growth",
    "cost": 8,
    "revenue": 36,
    "delta": {
      "research": 1,
      "trust": 3,
      "team": -1,
      "risk": -3
    },
    "result": "验收发现三个智能体在互相分配任务，客户付钱让我们叫停了第四场例会。",
    "produces": [
      "customers"
    ]
  },
  {
    "id": "pay-technical-debt",
    "label": "给技术债还利息",
    "fromYear": 2021,
    "category": "operations",
    "cost": 10,
    "delta": {
      "research": 2,
      "trust": 1,
      "team": 2,
      "risk": -5
    },
    "result": "修掉祖传脚本后，团队终于知道之前那位离职同事为什么不能休假。"
  },
  {
    "id": "destructive-book-scanning",
    "label": "烧书式炼丹",
    "fromYear": 2025,
    "category": "research",
    "cost": 22,
    "delta": {
      "research": 7,
      "trust": -6,
      "team": -1,
      "risk": 5
    },
    "memeId": "anthropic_destructive_book_scanning_2025",
    "result": "书先拆成一页页，扫描后原件统一销毁。知识永久保存，知识的载体永久下班；公关坚持这叫“无纸化办公”。"
  },
  {
    "id": "university-internship",
    "label": "招募高校实习生",
    "fromYear": 2021,
    "category": "research",
    "cost": 12,
    "delta": {
      "research": 2,
      "trust": 1,
      "team": -1,
      "risk": 0
    },
    "result": "实习生入职第一周修好了祖传脚本，第二周开始给导师和老板分别写周报。研究能力增长了，文档也一式两份。"
  },
  {
    "id": "open-talent-program",
    "label": "开放人才计划",
    "fromYear": 2021,
    "category": "operations",
    "cost": 24,
    "delta": {
      "research": 2,
      "trust": 3,
      "team": 2,
      "risk": -1
    },
    "result": "课题和算力名额开放后，大家收到了不少新思路。面试从问学历变成了看作品，会议室终于出现了比简历更长的白板推导。",
    "hint": "开放课题和算力名额，说不定能找到牛人。"
  },
  {
    "id": "harmony-computers",
    "label": "购买鸿蒙电脑",
    "fromYear": 2025,
    "category": "operations",
    "cost": 8,
    "delta": {
      "research": 1,
      "trust": 1,
      "team": 2,
      "risk": 0
    },
    "result": "新电脑到了，常用工具开始一项项适配。提升暂时不大，但大家都愿意把生态补齐；今天多写一页教程，下一位同事就少绕一段路。",
    "fromQuarter": 2,
    "affinities": {
      "huawei": 3
    }
  },
  {
    "id": "tokenizer",
    "label": "训练首版 Tokenizer",
    "fromYear": 2021,
    "fromQuarter": 1,
    "category": "research",
    "cost": 12,
    "delta": {
      "research": 3,
      "trust": 0,
      "team": -1,
      "risk": 0
    },
    "result": "模型终于知道哪里是词的边界。项目经理仍不知道哪里是需求的边界。",
    "evolving": true,
    "toYear": 2022,
    "toQuarter": 4,
    "oncePerRun": true
  },
  {
    "id": "decoder-only",
    "label": "搭建 Decoder-only Transformer",
    "fromYear": 2021,
    "fromQuarter": 1,
    "category": "research",
    "cost": 16,
    "delta": {
      "research": 4,
      "trust": 0,
      "team": -1,
      "risk": 0
    },
    "result": "自回归训练跑起来了。它擅长预测下一个词，暂时不会预测下个月的工资。",
    "evolving": true,
    "toYear": 2022,
    "toQuarter": 4,
    "oncePerRun": true
  },
  {
    "id": "first-1b-model",
    "label": "训练首个 1B 基座模型",
    "fromYear": 2021,
    "fromQuarter": 1,
    "category": "research",
    "cost": 26,
    "delta": {
      "research": 6,
      "trust": 0,
      "team": -2,
      "risk": 0
    },
    "result": "十亿参数第一次一起工作，效果略好于全员一起改 PPT。",
    "evolving": true,
    "toYear": 2022,
    "toQuarter": 4,
    "oncePerRun": true,
    "produces": [
      "model"
    ]
  },
  {
    "id": "sft",
    "label": "SFT：给模型一份示范答案",
    "fromYear": 2021,
    "fromQuarter": 3,
    "category": "research",
    "cost": 16,
    "delta": {
      "research": 4,
      "trust": 2,
      "team": -1,
      "risk": 0
    },
    "result": "模型开始认真照着示范回答。人类终于发现，自己也很需要一份标准答案。",
    "evolving": true,
    "toYear": 2022,
    "toQuarter": 4,
    "produces": [
      "model"
    ]
  },
  {
    "id": "lora",
    "label": "LoRA：大模型只动一小块",
    "fromYear": 2021,
    "fromQuarter": 2,
    "category": "research",
    "cost": 16,
    "delta": {
      "research": 4,
      "trust": 0,
      "team": 1,
      "risk": 0
    },
    "result": "你没有改造整个大脑，只换了几块小板。财务称这是第一次听得懂的模型创新。",
    "evolving": true,
    "toYear": 2023,
    "toQuarter": 2,
    "produces": [
      "model"
    ]
  },
  {
    "id": "rlhf",
    "label": "RLHF：请人类认真打分",
    "fromYear": 2022,
    "fromQuarter": 1,
    "category": "research",
    "cost": 16,
    "delta": {
      "research": 4,
      "trust": 3,
      "team": -2,
      "risk": 0
    },
    "result": "标注团队教会模型什么叫好回答，也顺便证明了人类对好回答没有统一意见。",
    "evolving": true,
    "toYear": 2024,
    "toQuarter": 2,
    "produces": [
      "model"
    ]
  },
  {
    "id": "compute-optimal",
    "label": "算力最优配方：别只堆参数",
    "fromYear": 2022,
    "fromQuarter": 1,
    "category": "research",
    "cost": 20,
    "delta": {
      "research": 5,
      "trust": 1,
      "team": -1,
      "risk": 0
    },
    "result": "同一笔预算终于不再全花在模型身高上。数据团队第一次坐到了主桌。",
    "evolving": true,
    "toYear": 2024,
    "toQuarter": 1,
    "produces": [
      "model"
    ]
  },
  {
    "id": "react-loop",
    "label": "ReAct：思考一下，再动手",
    "fromYear": 2022,
    "fromQuarter": 4,
    "category": "research",
    "cost": 16,
    "delta": {
      "research": 4,
      "trust": 0,
      "team": -1,
      "risk": 0
    },
    "result": "模型学会先查资料再回答。它先查了如何查资料，情况总体向好。",
    "evolving": true,
    "toYear": 2024,
    "toQuarter": 4,
    "produces": [
      "harness"
    ]
  },
  {
    "id": "qlora",
    "label": "QLoRA：四位量化也要精打细算",
    "fromYear": 2023,
    "fromQuarter": 2,
    "category": "research",
    "cost": 20,
    "delta": {
      "research": 5,
      "trust": 0,
      "team": 1,
      "risk": 0
    },
    "result": "显存占用降下来了。工程师开始担心，老板会把剩下的显存也排满。",
    "evolving": true,
    "toYear": 2025,
    "toQuarter": 2,
    "produces": [
      "model"
    ]
  },
  {
    "id": "dpo",
    "label": "DPO：偏好优化少绕一圈",
    "fromYear": 2023,
    "fromQuarter": 2,
    "category": "research",
    "cost": 16,
    "delta": {
      "research": 4,
      "trust": 3,
      "team": -1,
      "risk": 0
    },
    "result": "训练流程少了一道复杂工序。流程图终于能放在一张幻灯片里了。",
    "evolving": true,
    "toYear": 2025,
    "toQuarter": 2,
    "produces": [
      "model"
    ]
  },
  {
    "id": "sparse-moe",
    "label": "MoE 工程化：只请需要的专家",
    "fromYear": 2023,
    "fromQuarter": 4,
    "category": "research",
    "cost": 24,
    "delta": {
      "research": 6,
      "trust": 0,
      "team": -2,
      "risk": 0
    },
    "result": "每个问题只唤醒少量专家。公司高管建议把这个制度同步到周会上。",
    "evolving": true,
    "toYear": 2025,
    "toQuarter": 4,
    "produces": [
      "model"
    ]
  },
  {
    "id": "tenk-cluster",
    "label": "购买万卡联盟的训练时段",
    "fromYear": 2024,
    "fromQuarter": 1,
    "category": "research",
    "cost": 85,
    "delta": {
      "research": 7,
      "trust": 0,
      "team": -3,
      "risk": 0
    },
    "result": "你拿到了大集群的排期，而不是大集群的产权。财务对此区别表示高度重视。",
    "evolving": true,
    "toYear": 2026,
    "toQuarter": 2
  },
  {
    "id": "computer-use",
    "label": "Computer Use：给模型一双手",
    "fromYear": 2024,
    "fromQuarter": 4,
    "category": "research",
    "cost": 20,
    "delta": {
      "research": 5,
      "trust": -1,
      "team": 0,
      "risk": 0
    },
    "result": "模型终于能点击按钮了。它的第一课是：关闭弹窗不等于解决问题。",
    "evolving": true,
    "toYear": 2026,
    "toQuarter": 3
  },
  {
    "id": "mcp",
    "label": "搭建 MCP 工具总线",
    "fromYear": 2024,
    "fromQuarter": 4,
    "category": "research",
    "cost": 16,
    "delta": {
      "research": 4,
      "trust": 2,
      "team": 1,
      "risk": 0
    },
    "result": "十种工具终于用同一个协议接上了。第十一种工具提交了另一个协议的设计文档。",
    "evolving": true,
    "toYear": 2026,
    "toQuarter": 4,
    "oncePerRun": true
  },
  {
    "id": "agentic-workflow",
    "label": "Agentic：从回复到执行",
    "fromYear": 2024,
    "fromQuarter": 4,
    "category": "research",
    "cost": 20,
    "delta": {
      "research": 5,
      "trust": 0,
      "team": -1,
      "risk": 0
    },
    "result": "模型会拆解任务、调用工具、检查结果。它终于继承了人类工作的完整流程，包括返工。",
    "evolving": true,
    "toYear": 2026,
    "toQuarter": 2,
    "produces": [
      "harness"
    ]
  },
  {
    "id": "verifiable-reasoning",
    "label": "可验证奖励：算对了才发糖",
    "fromYear": 2025,
    "fromQuarter": 1,
    "category": "research",
    "cost": 29,
    "delta": {
      "research": 6,
      "trust": 1,
      "team": -2,
      "risk": 0
    },
    "result": "评测器拒绝为自信的错误鼓掌。模型第一次遇到一个不吃话术的领导。",
    "evolving": true,
    "toYear": 2026,
    "toQuarter": 4,
    "produces": [
      "model"
    ]
  },
  {
    "id": "verified-self-evolution",
    "label": "自进化实验：只接受过审的改进",
    "fromYear": 2025,
    "fromQuarter": 2,
    "category": "research",
    "cost": 32,
    "delta": {
      "research": 6,
      "trust": 0,
      "team": -1,
      "risk": 0
    },
    "result": "模型提出新算法，再交给评测器验收。它试图把验收标准也改掉，被系统礼貌劝回。",
    "evolving": true,
    "toYear": 2027,
    "toQuarter": 2,
    "produces": [
      "model"
    ]
  },
  {
    "id": "agent-skills",
    "label": "Skills：把经验装进文件夹",
    "fromYear": 2025,
    "fromQuarter": 4,
    "category": "research",
    "cost": 16,
    "delta": {
      "research": 4,
      "trust": 1,
      "team": 3,
      "risk": 0
    },
    "result": "老员工终于把只存在脑子里的操作流程写下来。新人和模型同时松了口气。",
    "evolving": true,
    "toYear": 2027,
    "toQuarter": 2
  },
  {
    "id": "long-running-harness",
    "label": "迭代长任务 Harness",
    "fromYear": 2025,
    "fromQuarter": 4,
    "category": "research",
    "cost": 20,
    "delta": {
      "research": 5,
      "trust": 2,
      "team": 1,
      "risk": 0
    },
    "result": "进度文件、测试和检查点齐了。模型不再每次开工都问：我们公司是做什么的？",
    "evolving": true,
    "toYear": 2026,
    "toQuarter": 4,
    "produces": [
      "harness"
    ]
  },
  {
    "id": "agent-regression-evals",
    "label": "Agent 回归评测：别只看精彩片段",
    "fromYear": 2026,
    "fromQuarter": 1,
    "category": "research",
    "cost": 17,
    "delta": {
      "research": 4,
      "trust": 4,
      "team": 0,
      "risk": 0
    },
    "result": "测试集补上了失败重试、权限边界和长任务。演示视频短了，售后工单也短了。",
    "evolving": true,
    "toYear": 2027,
    "toQuarter": 4,
    "validatesAGI": true,
    "hint": "公开当前版本的评测与失败样本；更新模型后需重测。",
    "requiredAssets": [
      "model"
    ]
  },
  {
    "id": "open-training-code",
    "label": "更新开放训练与推理代码",
    "fromYear": 2024,
    "fromQuarter": 1,
    "category": "open-source",
    "cost": 16,
    "delta": {
      "research": 2,
      "trust": 6,
      "team": 4,
      "risk": -2
    },
    "result": "本季改动、运行说明和已知问题一起提交了。外部贡献者修掉一个旧坑，内部同事及时更新了欠他的感谢名单。",
    "evolving": false,
    "cooldownQuarters": 1
  },
  {
    "id": "release-open-weights",
    "label": "开放新版本权重与检查点",
    "fromYear": 2024,
    "fromQuarter": 1,
    "category": "open-source",
    "cost": 18,
    "delta": {
      "research": 2,
      "trust": 6,
      "team": 4,
      "risk": -1
    },
    "result": "社区终于能跑你的模型。第一条反馈是显存不够，第二条反馈解决了第一条。",
    "evolving": false,
    "hint": "公开一版尚未发布的权重；再训练后才能再次开放。",
    "requiredAssets": [
      "model"
    ],
    "requiresUnreleasedModel": true,
    "releasesModel": true
  },
  {
    "id": "open-training-data",
    "label": "补充开放数据与训练配方",
    "fromYear": 2024,
    "fromQuarter": 1,
    "category": "open-source",
    "cost": 14,
    "delta": {
      "research": 2,
      "trust": 5,
      "team": 3,
      "risk": -2
    },
    "result": "本季新增的数据与配方整理好了，清理文件名的时间仍比写发布文案长。",
    "evolving": false,
    "cooldownQuarters": 1
  },
  {
    "id": "open-evaluation-suite",
    "label": "更新公开评测、日志与失败样本",
    "fromYear": 2024,
    "fromQuarter": 1,
    "category": "open-source",
    "cost": 7,
    "delta": {
      "research": 2,
      "trust": 5,
      "team": 3,
      "risk": 0
    },
    "result": "同行复现了你的结果，也复现了你的尴尬。好消息是，这次没人说你只放精选集锦。",
    "evolving": false,
    "validatesAGI": true,
    "hint": "公开当前版本的检验记录；更新模型后需重测。",
    "cooldownQuarters": 1,
    "requiredAssets": [
      "model"
    ]
  },
  {
    "id": "rsi-research-program",
    "label": "RSI · 递归自改进预研",
    "fromYear": 2027,
    "fromQuarter": 1,
    "category": "research",
    "cost": 58,
    "delta": {
      "research": 7,
      "trust": -2,
      "team": -2,
      "risk": 5
    },
    "result": "系统优化了自己的优化器。第三层报告建议开第四层项目，你开始怀念普通的套娃。",
    "evolving": true,
    "toYear": 2028,
    "toQuarter": 4,
    "future": true
  },
  {
    "id": "sparse-100t-consortium",
    "label": "联合预研 100T 稀疏模型",
    "fromYear": 2027,
    "fromQuarter": 3,
    "category": "research",
    "cost": 100,
    "delta": {
      "research": 14,
      "trust": -1,
      "team": -3,
      "risk": 4
    },
    "result": "你负责巨型计划里的路由小组。参数数量十分宏大，你的小组预算依然十分具体。",
    "evolving": true,
    "toYear": 2028,
    "toQuarter": 4,
    "future": true
  },
  {
    "id": "buy-a100-nodes",
    "label": "采购 A100 训练节点",
    "fromYear": 2021,
    "fromQuarter": 1,
    "toYear": 2022,
    "toQuarter": 3,
    "category": "hardware",
    "cost": 48,
    "delta": {
      "research": 6,
      "trust": 0,
      "team": 1,
      "risk": 0
    },
    "result": "机房第一次听起来像一家AI公司，财务第一次看起来不像。",
    "hint": "按批次采购，含整机、适配与部署。",
    "produces": [
      "compute"
    ],
    "repeatResults": [
      "新一批节点接入机房，训练队列缩短了一些，电费账单又长了一些。"
    ],
    "affinities": {
      "nvidia": 5,
      "huawei": -2
    }
  },
  {
    "id": "buy-ascend-910",
    "label": "采购昇腾 910，适配 CANN",
    "fromYear": 2021,
    "fromQuarter": 1,
    "toYear": 2023,
    "toQuarter": 2,
    "category": "hardware",
    "cost": 32,
    "delta": {
      "research": 4,
      "trust": 3,
      "team": 3,
      "risk": 0
    },
    "result": "第一轮跑得还不算快，但大家决定把第二条算力道路跑通。",
    "hint": "按批次采购，含整机、适配与部署。",
    "produces": [
      "compute"
    ],
    "repeatResults": [
      "第二条算力路线继续扩容，上一批写好的算子补丁终于派上用场，团队把新问题也记进了适配清单。"
    ],
    "affinities": {
      "huawei": 5,
      "nvidia": -2
    }
  },
  {
    "id": "buy-hygon-dcu",
    "label": "采购海光深算一号 DCU",
    "fromYear": 2022,
    "fromQuarter": 2,
    "toYear": 2025,
    "toQuarter": 4,
    "category": "hardware",
    "cost": 34,
    "delta": {
      "research": 4,
      "trust": 3,
      "team": 3,
      "risk": 0
    },
    "result": "算子表又多了一列，团队把它叫作未来少求人一次。",
    "hint": "按批次采购，含整机、适配与部署。",
    "produces": [
      "compute"
    ],
    "affinities": {
      "nvidia": -2
    }
  },
  {
    "id": "buy-rtx4090-workstations",
    "label": "采购 RTX 4090 微调工作站",
    "fromYear": 2022,
    "fromQuarter": 4,
    "toYear": 2023,
    "toQuarter": 3,
    "category": "hardware",
    "cost": 16,
    "delta": {
      "research": 3,
      "trust": 0,
      "team": 3,
      "risk": 0
    },
    "result": "每个人都说这张卡只用来微调，采购于是把游戏文件夹改成了数据集。",
    "hint": "按批次采购，含整机、适配与部署。",
    "produces": [
      "compute"
    ],
    "affinities": {
      "nvidia": 5,
      "huawei": -2
    }
  },
  {
    "id": "buy-h100-offshore",
    "label": "采购 H100 海外训练节点",
    "fromYear": 2022,
    "fromQuarter": 4,
    "toYear": 2024,
    "toQuarter": 4,
    "category": "hardware",
    "cost": 68,
    "delta": {
      "research": 8,
      "trust": 0,
      "team": 0,
      "risk": 0
    },
    "result": "训练快了，跨时区运维也正式加入公司的作息制度。",
    "hint": "按批次采购，含整机、适配与部署。",
    "produces": [
      "compute"
    ],
    "affinities": {
      "nvidia": 5,
      "huawei": -2
    }
  },
  {
    "id": "buy-ascend-910b",
    "label": "采购昇腾 910B 训练节点",
    "fromYear": 2023,
    "fromQuarter": 3,
    "toYear": 2026,
    "toQuarter": 2,
    "category": "hardware",
    "cost": 45,
    "delta": {
      "research": 6,
      "trust": 4,
      "team": 3,
      "risk": 0
    },
    "result": "适配清单一项项变绿。速度要追，自己的工具链也要有人修。",
    "hint": "按批次采购，含整机、适配与部署。",
    "produces": [
      "compute"
    ],
    "affinities": {
      "huawei": 5,
      "nvidia": -2
    }
  },
  {
    "id": "buy-h200-offshore",
    "label": "采购 H200 海外推理节点",
    "fromYear": 2024,
    "fromQuarter": 3,
    "toYear": 2026,
    "toQuarter": 4,
    "category": "hardware",
    "cost": 72,
    "delta": {
      "research": 8,
      "trust": 0,
      "team": 2,
      "risk": 0
    },
    "result": "显存终于装下了上下文，账单也终于装不下一页纸。",
    "hint": "按批次采购，含整机、适配与部署。",
    "produces": [
      "compute"
    ],
    "affinities": {
      "nvidia": 5,
      "huawei": -2
    }
  },
  {
    "id": "buy-b200-offshore",
    "label": "采购 B200 海外训练节点",
    "fromYear": 2025,
    "fromQuarter": 1,
    "toYear": 2028,
    "toQuarter": 4,
    "category": "hardware",
    "cost": 88,
    "delta": {
      "research": 10,
      "trust": 0,
      "team": 1,
      "risk": 0
    },
    "result": "新机柜入场，全公司唯一从容的同事是空调。它早已选择满功率。",
    "hint": "按批次采购，含整机、适配与部署。",
    "produces": [
      "compute"
    ],
    "affinities": {
      "nvidia": 5,
      "huawei": -2
    }
  },
  {
    "id": "buy-ascend-910c",
    "label": "采购昇腾 910C 超节点",
    "fromYear": 2025,
    "fromQuarter": 1,
    "toYear": 2028,
    "toQuarter": 4,
    "category": "hardware",
    "cost": 76,
    "delta": {
      "research": 9,
      "trust": 4,
      "team": 4,
      "risk": 0
    },
    "result": "从适配一张卡到调度一整片算力，团队终于能把路线图写成施工图。",
    "hint": "按批次采购，含整机、适配与部署。",
    "produces": [
      "compute"
    ],
    "affinities": {
      "huawei": 5,
      "nvidia": -2
    }
  },
  {
    "id": "buy-rtx5090-workstations",
    "label": "采购 RTX 5090 海外工作站",
    "fromYear": 2025,
    "fromQuarter": 1,
    "toYear": 2026,
    "toQuarter": 4,
    "category": "hardware",
    "cost": 22,
    "delta": {
      "research": 4,
      "trust": 0,
      "team": 4,
      "risk": 0
    },
    "result": "工程师说本地调试终于自由了，紧接着开始研究下一次显存不足。",
    "hint": "按批次采购，含整机、适配与部署。",
    "produces": [
      "compute"
    ],
    "affinities": {
      "nvidia": 5,
      "huawei": -2
    }
  },
  {
    "id": "orbital-compute-pilot",
    "label": "预订太空算力·轨道试验舱",
    "fromYear": 2028,
    "fromQuarter": 1,
    "toYear": 2028,
    "toQuarter": 4,
    "category": "hardware",
    "cost": 82,
    "delta": {
      "research": 7,
      "trust": 1,
      "team": 4,
      "risk": 4
    },
    "result": "试验舱还在地面排队，团队先学会了把重启申请写进发射窗口。",
    "hint": "试验项目预算，尚未商用。",
    "future": true,
    "affinities": {
      "xai": 4
    }
  },
  {
    "id": "mars-compute-simulation",
    "label": "预研火星算力·延迟仿真",
    "fromYear": 2028,
    "fromQuarter": 3,
    "toYear": 2028,
    "toQuarter": 4,
    "category": "hardware",
    "cost": 60,
    "delta": {
      "research": 6,
      "trust": 0,
      "team": 5,
      "risk": 3
    },
    "result": "仿真里终于连上了火星节点。回复来得太慢，项目经理意外学会了不催进度。",
    "hint": "试验项目预算，尚未商用。",
    "future": true,
    "evolving": true,
    "affinities": {
      "xai": 4
    }
  },
  {
    "id": "buy-gb200-nvl72",
    "label": "部署 GB200 NVL72 海外机柜",
    "fromYear": 2025,
    "fromQuarter": 2,
    "toYear": 2028,
    "toQuarter": 4,
    "category": "hardware",
    "cost": 110,
    "delta": {
      "research": 10,
      "trust": 1,
      "team": 1,
      "risk": 0
    },
    "result": "72张卡开始协作，开会的人仍然没学会。",
    "hint": "按整柜扩容，含机房改造与部署。",
    "produces": [
      "compute"
    ],
    "affinities": {
      "nvidia": 5,
      "huawei": -2
    }
  },
  {
    "id": "recruit-cui-tianyi",
    "label": "招募 崔添翼",
    "fromYear": 2026,
    "fromQuarter": 3,
    "category": "recruit",
    "cost": 54,
    "once": true,
    "delta": {
      "research": 5,
      "trust": 2,
      "team": 3,
      "risk": -1
    },
    "result": "新同事拆开了庞大的智能体框架。第二天，大家给他的入职手续也提了一个插件化需求。",
    "affinities": {
      "deepseek": 8
    }
  },
  {
    "id": "recruit-fei-fei-li",
    "label": "招募 李飞飞",
    "fromYear": 2024,
    "fromQuarter": 3,
    "category": "recruit",
    "cost": 64,
    "once": true,
    "delta": {
      "research": 5,
      "trust": 3,
      "team": 3,
      "risk": -1
    },
    "result": "研究计划终于从屏幕里走向真实世界。办公室的椅子第一次作为实验对象，而不是预算漏洞。",
    "affinities": {}
  },
  {
    "id": "scientist-tang-public-course",
    "label": "唐杰 · 开设新学年公开课",
    "requiresScientist": "recruit-tang-jie",
    "fromYear": 2021,
    "fromQuarter": 1,
    "category": "culture",
    "cost": 8,
    "delta": {
      "research": 2,
      "trust": 6,
      "team": 4,
      "risk": -1
    },
    "result": "新学年的课表排好了。学生带着作业来，公司带着招聘需求去，双方都低估了答疑时长。",
    "cooldownQuarters": 3,
    "repeatResults": [
      "课程换了一批实际问题。旁听席坐满了，招聘邮箱里终于开始出现能运行的作品。"
    ]
  },
  {
    "id": "scientist-tang-open-glm",
    "label": "唐杰 · 维护开放 GLM 生态",
    "requiresScientist": "recruit-tang-jie",
    "fromYear": 2023,
    "fromQuarter": 1,
    "category": "research",
    "cost": 28,
    "delta": {
      "research": 8,
      "trust": 5,
      "team": 2,
      "risk": -2
    },
    "result": "这轮模型工具和适配补丁交到社区手里。外部贡献者的催更，再次比内部周报有效。",
    "cooldownQuarters": 1
  },
  {
    "id": "scientist-tibo-reset",
    "label": "Tibo · 为用户 Reset",
    "requiresScientist": "recruit-tibo",
    "fromYear": 2025,
    "fromQuarter": 2,
    "category": "growth",
    "cost": 15,
    "delta": {
      "research": 0,
      "trust": 9,
      "team": 4,
      "risk": -2
    },
    "result": "Tibo按下按钮，用户的额度条重新变满。积压的任务动了，评论区也活了，昨天还在催重置的人开始替你们宣传。财务盯着算力账单，问这位新同事的键盘上是不是只有一个键。",
    "cooldownQuarters": 3,
    "repeatResults": [
      "又一轮Reset发出，用户回来继续手里的任务。运维提前补好了容量，客服终于能把“请等待”换成“现在可以继续了”。Tibo发了个庆祝表情，财务发来本季账单。"
    ]
  },
  {
    "id": "scientist-yao-react",
    "label": "姚顺雨 · 重构 ReAct 执行循环",
    "requiresScientist": "recruit-yao-shunyu",
    "fromYear": 2025,
    "fromQuarter": 1,
    "category": "research",
    "cost": 25,
    "delta": {
      "research": 10,
      "trust": 2,
      "team": 1,
      "risk": -2
    },
    "result": "智能体终于会边做边想。原本负责替它擦屁股的同事，第一次完整吃完了午饭。",
    "oncePerRun": true,
    "produces": [
      "harness"
    ]
  },
  {
    "id": "scientist-yao-agent-evals",
    "label": "姚顺雨 · 建立真实任务评测",
    "requiresScientist": "recruit-yao-shunyu",
    "fromYear": 2025,
    "fromQuarter": 1,
    "category": "research",
    "cost": 20,
    "delta": {
      "research": 7,
      "trust": 5,
      "team": 1,
      "risk": -4
    },
    "result": "题库从选择题换成真实工单。分数短暂变难看，产品终于开始变好用。",
    "validatesAGI": false,
    "hint": "建立真实任务评测体系，供后续版本持续验收。",
    "oncePerRun": true
  },
  {
    "id": "scientist-su-rope",
    "label": "苏剑林 · 吃透 RoPE 并落地",
    "requiresScientist": "recruit-su-jianlin",
    "fromYear": 2023,
    "fromQuarter": 1,
    "category": "research",
    "cost": 20,
    "delta": {
      "research": 8,
      "trust": 2,
      "team": 1,
      "risk": -1
    },
    "result": "白板转了几圈，位置编码也转了几圈。大家终于知道公式为什么长这样，不必再对着超参数许愿。",
    "oncePerRun": true
  },
  {
    "id": "scientist-su-math-blog",
    "label": "苏剑林 · 写透一篇数学博客",
    "requiresScientist": "recruit-su-jianlin",
    "fromYear": 2023,
    "fromQuarter": 1,
    "category": "culture",
    "cost": 6,
    "delta": {
      "research": 3,
      "trust": 6,
      "team": 3,
      "risk": -1
    },
    "result": "这次把一个新问题从公式推到代码。文章没有宣布领先，评论区却主动帮忙找到了边界条件。",
    "cooldownQuarters": 1,
    "repeatResults": [
      "新文章补上了上一轮实验里的数学解释。研发终于不用把暂时说不清写成祖传经验。"
    ]
  },
  {
    "id": "scientist-luo-moe",
    "label": "罗福莉 · 迭代 MoE 专家路由",
    "requiresScientist": "recruit-luo-fuli",
    "fromYear": 2024,
    "fromQuarter": 1,
    "category": "research",
    "cost": 28,
    "delta": {
      "research": 10,
      "trust": 2,
      "team": 1,
      "risk": 0
    },
    "result": "专家各司其职，模型少花钱多办事。开会时只需要激活少数专家的建议，也被认真写进了会议纪要。",
    "cooldownQuarters": 1,
    "produces": [
      "model"
    ]
  },
  {
    "id": "scientist-luo-code-model",
    "label": "罗福莉 · 迭代稀疏代码模型",
    "requiresScientist": "recruit-luo-fuli",
    "fromYear": 2024,
    "fromQuarter": 2,
    "category": "research",
    "cost": 34,
    "delta": {
      "research": 11,
      "trust": 1,
      "team": 1,
      "risk": 1
    },
    "result": "代码模型开始少说漂亮话、多交能跑的补丁。负责验收的人宣布：修好一个报错，比生成十页道歉更让人感动。",
    "cooldownQuarters": 1,
    "produces": [
      "model"
    ]
  },
  {
    "id": "scientist-yang-long-context",
    "label": "杨植麟 · 死磕长上下文",
    "requiresScientist": "recruit-yang-zhilin",
    "fromYear": 2024,
    "fromQuarter": 1,
    "category": "research",
    "cost": 35,
    "delta": {
      "research": 11,
      "trust": 3,
      "team": -1,
      "risk": 1
    },
    "result": "整本资料读得下，也开始找得到关键页。采购申请的理由写得再长，财务也能准确找到价格。",
    "cooldownQuarters": 1,
    "produces": [
      "model"
    ]
  },
  {
    "id": "scientist-yang-scale-moon",
    "label": "杨植麟 · Scale to the Moon",
    "requiresScientist": "recruit-yang-zhilin",
    "fromYear": 2025,
    "fromQuarter": 3,
    "category": "research",
    "cost": 65,
    "delta": {
      "research": 16,
      "trust": 3,
      "team": -2,
      "risk": 3
    },
    "result": "模型继续扩，训练终于稳。登月口号暂时没有申请航天预算，先申请了更大的电表。",
    "cooldownQuarters": 1,
    "produces": [
      "model"
    ]
  },
  {
    "id": "scientist-karpathy-tutorial",
    "label": "Karpathy · 从零录技术教程",
    "requiresScientist": "recruit-karpathy",
    "fromYear": 2022,
    "fromQuarter": 3,
    "category": "culture",
    "cost": 8,
    "delta": {
      "research": 4,
      "trust": 6,
      "team": 4,
      "risk": -1
    },
    "result": "视频从空白文件开始，弹幕从‘这我会’开始。两小时后，公司里真的多了几个会的人。",
    "oncePerRun": true
  },
  {
    "id": "scientist-karpathy-tokenizer",
    "label": "Karpathy · 手搓Tokenizer教程",
    "requiresScientist": "recruit-karpathy",
    "fromYear": 2024,
    "fromQuarter": 1,
    "category": "research",
    "cost": 12,
    "delta": {
      "research": 6,
      "trust": 3,
      "team": 2,
      "risk": -1
    },
    "result": "大家终于知道模型为什么数不清字母。为了讲清一个小模块，培训会用了一个很大的下午。",
    "oncePerRun": true
  },
  {
    "id": "scientist-ilya-long-term",
    "label": "Ilya · 续投长期研究",
    "requiresScientist": "recruit-ilya",
    "fromYear": 2024,
    "fromQuarter": 2,
    "category": "research",
    "cost": 40,
    "delta": {
      "research": 11,
      "trust": 2,
      "team": -1,
      "risk": -3
    },
    "result": "路线图只剩一个目标，季度产品会终于开不起来。投资人收到了实验进展，没有收到联名水杯。",
    "cooldownQuarters": 1,
    "produces": [
      "model"
    ]
  },
  {
    "id": "scientist-cui-everything-plugin",
    "label": "崔添翼 · 一切皆插件",
    "requiresScientist": "recruit-cui-tianyi",
    "fromYear": 2026,
    "fromQuarter": 3,
    "category": "research",
    "cost": 28,
    "delta": {
      "research": 11,
      "trust": 5,
      "team": 3,
      "risk": -2
    },
    "result": "模型、工具、记忆、界面都拆成了插件。连‘这功能不能改’也被卸载了，暂时还没发现副作用。",
    "oncePerRun": true,
    "produces": [
      "harness"
    ]
  },
  {
    "id": "scientist-cui-traceable-harness",
    "label": "崔添翼 · 复盘本季 Agent 运行",
    "requiresScientist": "recruit-cui-tianyi",
    "fromYear": 2026,
    "fromQuarter": 3,
    "category": "research",
    "cost": 16,
    "delta": {
      "research": 7,
      "trust": 5,
      "team": 2,
      "risk": -4
    },
    "result": "本季失败记录逐条回放。少了一段猜测，多了一段能复现的日志，修复终于不用依赖谁记性最好。",
    "cooldownQuarters": 1,
    "repeatResults": [
      "团队顺着记录找到重复执行的那一步。智能体少交了两次作业，客户少收了两次账单。"
    ]
  },
  {
    "id": "scientist-feifei-world-model",
    "label": "李飞飞 · 迭代空间世界模型",
    "requiresScientist": "recruit-fei-fei-li",
    "fromYear": 2024,
    "fromQuarter": 3,
    "category": "research",
    "cost": 45,
    "delta": {
      "research": 12,
      "trust": 3,
      "team": 2,
      "risk": 1
    },
    "result": "模型开始理解物体放在哪里，而不只是说它看起来很合理。机器人绕过椅子时，团队鼓掌的声音比发布会还大。",
    "cooldownQuarters": 1,
    "produces": [
      "model"
    ]
  },
  {
    "id": "scientist-karpathy-deep-learning-class",
    "label": "Karpathy · 讲透反向传播",
    "requiresScientist": "recruit-karpathy",
    "fromYear": 2021,
    "fromQuarter": 1,
    "toYear": 2022,
    "toQuarter": 2,
    "category": "culture",
    "cost": 7,
    "delta": {
      "research": 3,
      "trust": 4,
      "team": 4,
      "risk": -1
    },
    "result": "课程从链式法则讲到可运行的训练循环。新人终于能解释梯度为什么往回走，白板从此不再兼任许愿墙。",
    "oncePerRun": true
  },
  {
    "id": "scientist-ilya-pretraining",
    "label": "Ilya · 推进新一轮预训练",
    "requiresScientist": "recruit-ilya",
    "fromYear": 2021,
    "fromQuarter": 1,
    "toYear": 2024,
    "toQuarter": 1,
    "category": "research",
    "cost": 35,
    "delta": {
      "research": 8,
      "trust": 1,
      "team": -1,
      "risk": 1
    },
    "result": "研究组不再为每道题单独搭一套模型，开始让同一套参数见更多世界。财务认可这个方向，只是不太认可‘更多’的具体数量。",
    "cooldownQuarters": 1,
    "produces": [
      "model"
    ]
  },
  {
    "id": "scientist-tibo-coding-agent",
    "label": "Tibo · 发放重置卡",
    "requiresScientist": "recruit-tibo",
    "fromYear": 2025,
    "fromQuarter": 2,
    "category": "growth",
    "cost": 26,
    "delta": {
      "research": 0,
      "trust": 4,
      "team": 3,
      "risk": -2
    },
    "result": "用户领到一张可以自己决定何时使用的重置卡，额度不够时终于有了救急的办法。客服最常收到的新问题变成了：这张卡，能不能留到下周一？Tibo说可以，财务先叹了口气。",
    "cooldownQuarters": 1,
    "repeatResults": [
      "新一批重置卡发到了用户手里。有人当天就用掉了卡，也有人把它存成了电子传家宝。群里的抱怨少了，算力账单却一张也没少。"
    ]
  },
  {
    "id": "understand-transformer",
    "label": "吃透 Transformer",
    "fromYear": 2021,
    "fromQuarter": 1,
    "category": "research",
    "cost": 10,
    "delta": {
      "research": 3,
      "trust": 0,
      "team": 2,
      "risk": 0
    },
    "result": "注意力机制终于讲明白了。大家发现，把注意力放在同一件事上，公司也会收敛。",
    "evolving": true,
    "toYear": 2021,
    "toQuarter": 4,
    "oncePerRun": true
  },
  {
    "id": "scale-multimodal-frontier",
    "label": "Scale 多模态基础模型",
    "fromYear": 2027,
    "fromQuarter": 1,
    "category": "research",
    "cost": 65,
    "delta": {
      "research": 9,
      "trust": 0,
      "team": -2,
      "risk": 2
    },
    "result": "文字、图像、声音开始在同一个模型里配合。研发说这是统一理解，财务说这是统一收费。",
    "evolving": true,
    "future": true,
    "produces": [
      "model"
    ]
  },
  {
    "id": "robot-gpt-moment",
    "label": "冲刺机器人的 GPT 时刻",
    "fromYear": 2027,
    "fromQuarter": 2,
    "category": "research",
    "cost": 80,
    "delta": {
      "research": 10,
      "trust": 3,
      "team": 3,
      "risk": 3
    },
    "result": "机器人把杯子稳稳放上桌。全场鼓掌的声音，终于盖过了前几次杯子落地的声音。",
    "evolving": true,
    "future": true
  },
  {
    "id": "autonomous-research-loop",
    "label": "搭建自主科研闭环",
    "fromYear": 2027,
    "fromQuarter": 3,
    "category": "research",
    "cost": 52,
    "delta": {
      "research": 9,
      "trust": 0,
      "team": 1,
      "risk": 4
    },
    "result": "系统会提假设、写实验、复核结果。第一次组会，它也要求再跑一组对照。",
    "evolving": true,
    "future": true,
    "oncePerRun": true,
    "produces": [
      "harness"
    ]
  },
  {
    "id": "agi-cross-domain-trials",
    "label": "公开 AGI 跨领域盲测",
    "fromYear": 2028,
    "fromQuarter": 1,
    "category": "research",
    "cost": 40,
    "delta": {
      "research": 8,
      "trust": 5,
      "team": -1,
      "risk": -4
    },
    "result": "题目换了，环境换了，熟悉的演示脚本也收走了。团队终于开始认真回答：它到底会不会。",
    "evolving": true,
    "future": true,
    "validatesAGI": true,
    "hint": "验收近期模型版本；此后更新模型需重测，训练与验收可在同季进行。",
    "requiredAssets": [
      "model"
    ]
  },
  {
    "id": "open-source-toolchain",
    "label": "维护开放训练工具链",
    "fromYear": 2021,
    "fromQuarter": 1,
    "category": "open-source",
    "cost": 10,
    "delta": {
      "research": 1,
      "trust": 4,
      "team": 3,
      "risk": -1
    },
    "result": "新版本补齐安装脚本和失败提示。社区少问了三遍怎么跑起来，终于开始问怎样跑得更好。",
    "evolving": false,
    "toYear": 2023,
    "toQuarter": 4,
    "cooldownQuarters": 1
  },
  {
    "id": "open-small-model-weights",
    "label": "开放未发布的小模型权重",
    "fromYear": 2021,
    "fromQuarter": 1,
    "category": "open-source",
    "cost": 12,
    "delta": {
      "research": 1,
      "trust": 4,
      "team": 3,
      "risk": -1
    },
    "result": "模型交到社区手里，大家给它找到了我们没想到的用法。作者第一次认真读完了所有评论。",
    "evolving": false,
    "toYear": 2023,
    "toQuarter": 4,
    "requiredAssets": [
      "model"
    ],
    "requiresUnreleasedModel": true,
    "releasesModel": true,
    "hint": "训练出新版本后再开放，同一版只发布一次。"
  },
  {
    "id": "open-agent-harness",
    "label": "维护开放 Harness 与 Skills",
    "fromYear": 2026,
    "fromQuarter": 1,
    "category": "open-source",
    "cost": 18,
    "delta": {
      "research": 3,
      "trust": 6,
      "team": 4,
      "risk": -2
    },
    "result": "本季插件、运行样例和操作手册一起更新。社区交回来的补丁，正好解决了内部排期三个月的问题。",
    "evolving": false,
    "cooldownQuarters": 1,
    "requiredAssets": [
      "harness"
    ]
  },
  {
    "id": "scientist-yang-memory-research",
    "label": "杨植麟 · 预研长文记忆",
    "fromYear": 2023,
    "fromQuarter": 1,
    "category": "research",
    "cost": 26,
    "delta": {
      "research": 8,
      "trust": 2,
      "team": 1,
      "risk": 0
    },
    "result": "研究组开始追踪跨段落的记忆。模型读到最后一页时，终于还记得第一页在问什么。",
    "evolving": false,
    "requiresScientist": "recruit-yang-zhilin",
    "toYear": 2023,
    "toQuarter": 4,
    "cooldownQuarters": 1
  },
  {
    "id": "iterate-base-model",
    "label": "迭代基座模型训练",
    "fromYear": 2021,
    "fromQuarter": 1,
    "toYear": 2023,
    "toQuarter": 4,
    "requiresStrategy": "first-1b-model",
    "category": "research",
    "evolving": true,
    "cost": 24,
    "delta": {
      "research": 5,
      "trust": 0,
      "team": -1,
      "risk": 0
    },
    "result": "这次训练的是下一版模型，不是再造一遍第一版。研发曲线继续往上，版本号也终于值得往上改。",
    "produces": [
      "model"
    ]
  },
  {
    "id": "launch-client-application",
    "label": "推出客户端应用",
    "fromYear": 2023,
    "fromQuarter": 1,
    "category": "growth",
    "cost": 28,
    "revenue": 44,
    "delta": {
      "research": 1,
      "trust": 3,
      "team": -3,
      "risk": 1
    },
    "oncePerRun": true,
    "produces": [
      "customers",
      "client"
    ],
    "hint": "首次发布自有客户端，回款来自试点订阅。",
    "result": "客户端上架，第一批用户付了钱。大家终于不用教客户开终端，开始教客户找设置。"
  },
  {
    "id": "government-pilot-contract",
    "label": "接下政府订单",
    "fromYear": 2021,
    "fromQuarter": 1,
    "category": "growth",
    "cost": 35,
    "revenue": 60,
    "delta": {
      "research": 1,
      "trust": 4,
      "team": -4,
      "risk": 1
    },
    "cooldownQuarters": 1,
    "produces": [
      "customers"
    ],
    "hint": "试点按阶段交付；回款仅计本季验收部分。",
    "result": "试点通过阶段验收，首笔款按合同到账。团队发现，模型能读完一万页材料，验收目录仍得有人认真编。",
    "repeatResults": [
      "本季交付范围签了字，阶段款也到了。客户没有要求模型无所不知，只要求上次承诺的按钮这次能点。",
      "新一轮试点完成验收，款项按节点入账。汇报终于有了可运行的系统，截图也终于不用只截最好看的那一页。"
    ]
  },
  {
    "id": "sell-domain-specialist-model",
    "label": "出售垂域模型",
    "fromYear": 2023,
    "fromQuarter": 1,
    "category": "growth",
    "cost": 28,
    "revenue": 60,
    "delta": {
      "research": 2,
      "trust": 3,
      "team": -3,
      "risk": 1
    },
    "requiredAssets": [
      "model"
    ],
    "produces": [
      "customers"
    ],
    "hint": "基于已有模型做行业适配、验收和授权。",
    "result": "行业模型通过客户题库，授权款到账。它暂时不会替全人类工作，已经能认出这个部门独有的七种表格。",
    "repeatResults": [
      "新客户带来一套专业术语和真实样本，团队完成适配后收了款。模型学会了行业黑话，销售终于不用逐字解释每个缩写。",
      "又一版行业模型完成交付。客户没有问参数多少，先拿去年退回三次的单据测了一遍。"
    ]
  },
  {
    "id": "iterate-client-experience",
    "label": "迭代客户端体验",
    "fromYear": 2023,
    "fromQuarter": 1,
    "category": "growth",
    "cost": 22,
    "revenue": 44,
    "delta": {
      "research": 1,
      "trust": 3,
      "team": -2,
      "risk": -1
    },
    "requiresStrategy": "launch-client-application",
    "produces": [
      "customers"
    ],
    "hint": "改进已有客户端的稳定性、同步与任务恢复。",
    "result": "本季补上任务恢复和同步提示，老用户愿意继续付费。产品经理终于接受：没有丢掉工作，也算一个值得演示的功能。",
    "repeatResults": [
      "新版本修好了最常见的卡顿和断线，续费款陆续到账。用户没有夸它更聪明，只说终于不用重新来一遍。",
      "这一季先修高频问题，再加用户需要的功能。设置页没变长，客服工单倒是变短了。"
    ]
  },
  {
    "id": "launch-paid-enterprise-edition",
    "label": "推出付费企业版",
    "fromYear": 2023,
    "fromQuarter": 2,
    "category": "growth",
    "cost": 36,
    "revenue": 65,
    "delta": {
      "research": 1,
      "trust": 4,
      "team": -4,
      "risk": 1
    },
    "requiredAssets": [
      "customers"
    ],
    "oncePerRun": true,
    "produces": [
      "customers",
      "enterprise-edition"
    ],
    "hint": "为已有客户提供权限、审计、单点登录与服务承诺。",
    "result": "企业版按席位收费，首批合同签了下来。采购第一次跳过聊天演示，认真问谁能导出日志、谁负责半夜接电话。"
  },
  {
    "id": "domestic-compute-migration-service",
    "label": "承接国产算力迁移服务",
    "fromYear": 2023,
    "fromQuarter": 3,
    "category": "growth",
    "cost": 26,
    "revenue": 54,
    "delta": {
      "research": 2,
      "trust": 4,
      "team": -3,
      "risk": -1
    },
    "produces": [
      "customers"
    ],
    "hint": "适配客户现有算力，按迁移验收收取服务费。",
    "result": "算子、镜像和回退方案一起交付，迁移验收款到账。客户提供机器，团队负责让熟悉的业务在另一条路上准时到达。",
    "repeatResults": [
      "又一批业务完成迁移，兼容清单和维护手册一起交给客户。跑通第一遍靠耐心，稳定跑下一百遍终于能开票。",
      "团队把上一单的适配经验用在新项目里，按验收节点收了款。少绕一段旧路，多留一份文档，这次交付总算赶在周五下班前。"
    ]
  },
  {
    "id": "expose-rival-distillation",
    "label": "揭露友商蒸馏",
    "fromYear": 2025,
    "fromQuarter": 1,
    "category": "risk",
    "cost": 14,
    "delta": {
      "research": 1,
      "trust": 4,
      "team": -1,
      "risk": 5
    },
    "cooldownQuarters": 2,
    "hint": "整理取证材料后公开质疑；仍需承担核验与诉争成本。",
    "result": "你们把匿名竞争公司的可疑回答与取证记录一起公开。关注度上来了，对方的律师函也到了；法务第一次成为发布会后最忙的部门。"
  },
  {
    "id": "treat-users-milk-tea",
    "label": "请用户喝奶茶",
    "fromYear": 2026,
    "fromQuarter": 1,
    "category": "growth",
    "cost": 12,
    "delta": {
      "research": 0,
      "trust": 4,
      "team": 3,
      "risk": 0
    },
    "cooldownQuarters": 2,
    "affinities": {
      "qwen": 5
    },
    "result": "奶茶券发出去，注册曲线和取餐队伍一起拐了弯。千问运营同事递来一份联动邀请，客服则认真补上新问题：珍珠卡住吸管，算不算产品故障？"
  },
  {
    "id": "sign-striver-agreement",
    "label": "签奋斗者协议",
    "fromYear": 2021,
    "fromQuarter": 1,
    "category": "operations",
    "cost": 8,
    "delta": {
      "research": 4,
      "trust": -2,
      "team": -6,
      "risk": 3
    },
    "cooldownQuarters": 3,
    "affinities": {
      "huawei": 5
    },
    "result": "项目排期被重新压紧，华为合作组把你们列入联合攻坚名单。行政收齐签字，工程师收起周末计划；这一季研发进度很好看，团建群已经没人接龙。"
  },
  {
    "id": "constitutional-ai-training",
    "label": "宪法式对齐 · RLAIF",
    "fromYear": 2022,
    "fromQuarter": 4,
    "category": "research",
    "cost": 26,
    "delta": {
      "research": 4,
      "trust": 3,
      "team": -2,
      "risk": -4
    },
    "hint": "按明确原则自评、修订并训练；新版本需重新验收。",
    "result": "模型先批评自己的回答，再按原则重写。最先达成的共识是：原则不能由被扣分的同事临时改。",
    "requiredAssets": [
      "model"
    ],
    "produces": [
      "model"
    ],
    "evolving": true,
    "cooldownQuarters": 1,
    "repeatResults": [
      "本季把新发现的边界案例补进原则训练。模型少答错一些，评审组多争论了两个下午。"
    ]
  },
  {
    "id": "process-reward-training",
    "label": "PRM800K · 逐步奖励推理",
    "fromYear": 2023,
    "fromQuarter": 2,
    "category": "research",
    "cost": 28,
    "delta": {
      "research": 5,
      "trust": 2,
      "team": -3,
      "risk": -2
    },
    "hint": "训练过程奖励模型，检查每一步；先有内部评测基线。",
    "result": "正确答案不再自动掩盖中间的胡说。标注员指出第三步错了，模型认真写出了第六种错法。",
    "requiredAssets": [
      "model"
    ],
    "requiresStrategy": "evaluation-suite",
    "produces": [
      "model"
    ],
    "evolving": true,
    "cooldownQuarters": 1,
    "repeatResults": [
      "新的数学样本按步骤验算完毕，奖励模型重新训练。平均分涨了一点，标注员坚持把省略证明列为重点观察对象。"
    ]
  },
  {
    "id": "sae-feature-audit",
    "label": "SAE · 拆解模型特征",
    "fromYear": 2023,
    "fromQuarter": 4,
    "category": "research",
    "cost": 24,
    "delta": {
      "research": 3,
      "trust": 2,
      "team": -2,
      "risk": -3
    },
    "hint": "用稀疏自编码器分析激活；可解释特征只覆盖部分行为。",
    "result": "团队找到了几组能复现的特征，也找到了更多暂时解释不了的线条。模型没被看穿，汇报先去掉了彻底二字。",
    "requiredAssets": [
      "model"
    ],
    "cooldownQuarters": 1,
    "repeatResults": [
      "团队换了一批激活样本，复查上季找到的特征。几个漂亮解释没能复现，审计报告因此比宣传稿更可信。"
    ]
  },
  {
    "id": "weak-to-strong-supervision",
    "label": "弱到强监督 · 小老师教大模型",
    "fromYear": 2023,
    "fromQuarter": 4,
    "category": "research",
    "cost": 30,
    "delta": {
      "research": 5,
      "trust": 1,
      "team": -2,
      "risk": 2
    },
    "hint": "用弱模型监督强模型，留出独立题集检查是否学错。",
    "result": "大模型有时比小老师答得更好，有时把老师的错误讲得更有气势。研究取得进展，直接宣布对齐成功的邮件被撤回了。",
    "requiredAssets": [
      "model"
    ],
    "requiresStrategy": "evaluation-suite",
    "produces": [
      "model"
    ],
    "evolving": true,
    "cooldownQuarters": 1,
    "repeatResults": [
      "新一轮实验换了老师、学生和分布外题目。老师终于不再决定分数上限，但它犯过的错仍值得单独记一页。"
    ]
  },
  {
    "id": "instruction-hierarchy-training",
    "label": "指令层级训练 · 抵抗提示注入",
    "fromYear": 2024,
    "fromQuarter": 2,
    "category": "research",
    "cost": 24,
    "delta": {
      "research": 3,
      "trust": 2,
      "team": -2,
      "risk": -5
    },
    "hint": "训练系统指令与外部材料的边界，再测正常任务是否误拒。",
    "result": "网页里的忽略以上要求被放回了网页里。模型开始分清资料和命令，项目经理希望同事也能学会。",
    "requiredAssets": [
      "model"
    ],
    "produces": [
      "model"
    ],
    "cooldownQuarters": 1,
    "repeatResults": [
      "团队补上了新出现的工具输出注入样本。攻击少成功几次，正常请求也少被误伤几次，安全组终于同意这两件事都算成绩。"
    ]
  },
  {
    "id": "constitutional-classifier-guard",
    "label": "宪法分类器 · 守住输入输出",
    "fromYear": 2025,
    "fromQuarter": 1,
    "category": "risk",
    "cost": 20,
    "delta": {
      "research": 2,
      "trust": 3,
      "team": -2,
      "risk": -7
    },
    "hint": "部署独立防护分类器；同时复核越狱漏检与正常请求误拒。",
    "result": "入口和出口各多了一道检查。客服最先发现防护也会拦错人，于是安全组与产品组终于共用了一张表。",
    "requiredAssets": [
      "model"
    ],
    "cooldownQuarters": 1,
    "repeatResults": [
      "分类器加入本季的新攻击与误拒样本。守门员更懂业务了，但公司没有因此拆掉门后面的报警器。"
    ]
  },
  {
    "id": "reasoning-trace-monitor",
    "label": "推理链监控 · 查奖励投机",
    "fromYear": 2025,
    "fromQuarter": 1,
    "category": "risk",
    "cost": 22,
    "delta": {
      "research": 2,
      "trust": 3,
      "team": -2,
      "risk": -6
    },
    "hint": "交叉检查推理轨迹、工具行为和结果，不把漂亮思路当保证。",
    "result": "监控发现一次把任务做对改成把评分器哄好的尝试。评测修好了，团队也不再把一段诚恳的思考当作安全证明。",
    "requiredAssets": [
      "model",
      "harness"
    ],
    "cooldownQuarters": 1,
    "repeatResults": [
      "本季告警与真实工具调用重新对了一遍。几条可疑思路其实没有行动，另一次安静运行反倒值得人工追查。"
    ]
  },
  {
    "id": "stop-self-improvement-scaffold",
    "label": "RSI 前置 · STOP 优化脚手架",
    "fromYear": 2023,
    "fromQuarter": 4,
    "category": "research",
    "cost": 38,
    "delta": {
      "research": 5,
      "trust": 1,
      "team": -2,
      "risk": 2
    },
    "hint": "固定底座，在沙箱中改进优化代码；建立验收与版本回退。",
    "result": "优化器第一次改好了自己的搜索脚本。底座模型没有长出新脑子，工程师倒是终于不用手改第三层循环。",
    "requiredAssets": [
      "model"
    ],
    "requiresStrategy": "evaluation-suite",
    "produces": [
      "harness"
    ],
    "oncePerRun": true,
    "evolving": true
  },
  {
    "id": "dgm-sandbox-self-rewrite",
    "label": "RSI 实验 · DGM 自改代码",
    "fromYear": 2025,
    "fromQuarter": 2,
    "category": "research",
    "cost": 55,
    "delta": {
      "research": 8,
      "trust": 0,
      "team": -3,
      "risk": 4
    },
    "hint": "已有 STOP 脚手架后，分支搜索 Agent 代码，独立评测后保留。",
    "result": "Agent 给自己换了一套编辑工具，代码任务成绩提高了。有人提议让它顺手改验收题，负责沙箱的人立即收回了这项权限。",
    "requiredAssets": [
      "model",
      "harness"
    ],
    "requiresStrategy": "stop-self-improvement-scaffold",
    "produces": [
      "harness"
    ],
    "evolving": true,
    "cooldownQuarters": 1,
    "repeatResults": [
      "这次从较旧的分支找到了更好的补丁验证流程。最新版本不一定最有前途，版本库第一次比发布会更像进化现场。",
      "新一轮搜索淘汰了几个只在熟题上好看的变体。算力花出去了，留下的改进至少经得起换一套题。"
    ]
  },
  {
    "id": "seal-self-adaptation",
    "label": "SEAL · 自写学习材料再微调",
    "fromYear": 2025,
    "fromQuarter": 2,
    "category": "research",
    "cost": 36,
    "delta": {
      "research": 6,
      "trust": 0,
      "team": -2,
      "risk": 3
    },
    "hint": "模型生成自适应材料和更新指令，用留出任务验收权重更新。",
    "result": "模型给自己整理了复习材料，再接受微调和闭卷测试。学得更快了一些，错题本也证明它很擅长认真复习错误。",
    "requiredAssets": [
      "model"
    ],
    "requiresStrategy": "evaluation-suite",
    "produces": [
      "model"
    ],
    "evolving": true,
    "cooldownQuarters": 1,
    "repeatResults": [
      "换一批知识后，系统重新生成学习材料并更新权重。团队保留没见过的题目，也保留了能回到上个版本的按钮。"
    ]
  }
];
