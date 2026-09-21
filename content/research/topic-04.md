# Research Topic 04 — Policy Learning for Embodied Agents

## Status

- Topic status: HAI-3/VLA2.0 overall design direction; methods and results remain selective
- Work period: SANY Group, 2025—Present
- Planned outputs: HAI-1 → HAI-2 → HAI-3/VLA2.0 capability progression
- Website preview: Visible in the Research atlas
- Detail page: `../../pages/research/topic-04.html`

## Motivation

多模态模型已经能够识别场景、理解指令并生成推理，但机器人系统最终必须把这些能力转化为连续、可执行且可恢复的策略。现有 VLA 的“大脑”仍需要本体感知、身体协调与反馈重规划的“小脑”共同完成可靠执行。

## Shared Research Question

具身智能体如何在真实系统约束下，将多模态理解、动作逻辑、本体状态与执行反馈统一为稳定、可适应并可持续改进的执行策略？

## One-Sentence Positioning

Turning multimodal understanding into reliable action.

## Contribution

当前公开的是研究组织方式与 HAI-3/VLA2.0 的整体设计方向：HAI-1（IntentDelib-VLA）以共享 transition intent 组织多个 actor-consistent 候选，并用多时间尺度未来对齐潜在证据完成保守的执行前比较；HAI-2 在冻结 VLA 内学习状态自适应的决策能力编排，区分动作支持不足与选择证据不足，选择 Commit、Reformulate 或 Prospect；HAI-3/VLA2.0 再把当前工作推进到持续反馈闭环。这一表述不代表完整系统已经实现，具体方法、实验结果与个人贡献将在满足公开条件后补充。

## Industry impact

- 推动策略从单次演示效果走向长期稳定执行
- 提高有限真实机器人数据与反馈的利用效率
- 连接多模态理解、规划、控制与工业系统约束

## Relationship Between the Two Works

三项能力共享同一研究问题，并以“执行前候选比较 → 状态自适应决策编排 → 执行中闭环”的方式递进；CFG-Bench 负责暴露细粒度动作理解缺口，数据引擎负责把失败、恢复与成功证据回流到下一轮训练与评测。


## HAI-3 / VLA2.0

- Motivation: VLA 能感知与规划，但大小脑模态未对齐，细粒度动作逻辑、本体能力与执行反馈尚未统一建模。
- Overall design: Action-aware 多模态大模型 + 本体感知小脑 + 反馈重规划。
- Position in HAI: 将 HAI-1/2 的执行前决策推进到 Perception → Action → Feedback 的持续行动闭环。
- Application scenarios: 焊接机器人与装载机。
- Scope: 当前公开范围聚焦整体设计方向，不代表完整系统已完成；方法、实验结果与个人贡献待后续公开。
- Media: `../../assets/uploads/research/topic-04/hai3-vla20-motivation.png`, `../../assets/uploads/research/topic-04/hai3-vla20-design.png`

## Work 01

- Title: IntentDelib-VLA: Pre-Commitment Action Deliberation through Intent-Grounded Latent Futures
- Problem: VLA 在执行前缺少 transition intent、候选保留和未来对齐的比较证据。
- Method: 共享 transition intent；LAIA 保留 actor-consistent 候选；PLFD 进行多时间尺度未来对齐潜在比较；保守门控决定是否替换默认动作。
- Contribution: 在不重建视觉未来 rollout 的前提下，把未来结构化证据带入执行前动作承诺。
- Personal contribution:
- Paper / code / demo:

## Work 02

- Title: HAI-2: Learning How to Decide in Vision-Language-Action Policies
- Problem: 不同状态分别面临 action support insufficiency 或 selection evidence insufficiency。
- Method: 在冻结 VLA 内组织 Commit、Reformulate、Prospect，并以同状态实际选中动作的结果学习 bounded orchestration。
- Contribution: 学习当前状态需要哪一种决策支持，同时平衡动作质量、风险与额外计算成本。
- Personal contribution:
- Paper / code / demo:

## Media

- Topic cover: `../../assets/uploads/research/topic-04/policy-learning.webp`
- Shared framework figure: `../../assets/uploads/research/topic-04/policy-learning.webp`
- Work 01 figures:
- Work 02 figures:
