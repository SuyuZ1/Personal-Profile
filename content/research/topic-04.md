# Research Topic 04 — Policy Learning for Embodied Agents

## Status

- Topic status: HAI-3/VLA2.0 high-level feature work added; methods and results remain selective
- Work period: SANY Group, 2025—Present
- Planned outputs: HAI-1 → HAI-2 → HAI-3/VLA2.0 capability progression
- Website preview: Visible in the Research atlas
- Detail page: `../../pages/research/topic-04.html`

## Motivation

多模态模型已经能够识别场景、理解指令并生成推理，但机器人系统最终必须把这些能力转化为连续、可执行且可恢复的策略。双周技术汇报中的 VLA 挑战图将问题概括为大小脑模态未对齐、泛化性差与成功率低：Action-aware 的“大脑”还需要本体感知、身体协调与反馈重规划的“小脑”共同完成可靠执行。

## Shared Research Question

具身智能体如何在真实系统约束下，将多模态理解、动作逻辑、本体状态与执行反馈统一为稳定、可适应并可持续改进的执行策略？

## One-Sentence Positioning

Turning multimodal understanding into reliable action.

## Contribution

当前公开的是研究组织方式与 HAI-3/VLA2.0 的 high-level feature work：HAI-1 处理执行前审议，HAI-2 学习何时审议，HAI-3/VLA2.0 进一步把当前工作闭环，并提出由 Action-aware 大脑、本体感知小脑和执行反馈构成的整体设计方向。这一表述不代表完整系统已经实现，具体方法、实验结果与个人贡献将在满足公开条件后补充。

## Industry impact

- 推动策略从单次演示效果走向长期稳定执行
- 提高有限真实机器人数据与反馈的利用效率
- 连接多模态理解、规划、控制与工业系统约束

## Relationship Between the Two Works

三项能力共享同一研究问题，并以“执行前决策 → 状态自适应决策 → 执行中闭环”的方式递进；CFG-Bench 负责暴露细粒度动作理解缺口，数据引擎负责把失败、恢复与成功证据回流到下一轮训练与评测。


## HAI-3 / VLA2.0

- Motivation: VLA 能感知与规划，但大小脑模态未对齐，细粒度动作逻辑、本体能力与执行反馈尚未统一建模。
- Overall design: Action-aware 多模态大模型 + 本体感知小脑 + 反馈重规划。
- Position in HAI: 将 HAI-1/2 的执行前决策推进到 Perception → Action → Feedback 的持续行动闭环。
- Application scenarios: 焊接机器人与装载机。
- Scope: 简历与面试展示中的 high-level feature work 与整体设计方向，不代表完整系统已完成；方法、实验结果与个人贡献待后续公开。
- Media: `../../assets/uploads/research/topic-04/hai3-vla20-motivation.png`, `../../assets/uploads/research/topic-04/hai3-vla20-design.png`

## Work 01

- Title:
- Problem:
- Method:
- Contribution:
- Personal contribution:
- Paper / code / demo:

## Work 02

- Title:
- Problem:
- Method:
- Contribution:
- Personal contribution:
- Paper / code / demo:

## Media

- Topic cover: `../../assets/uploads/research/topic-04/policy-learning.webp`
- Shared framework figure: `../../assets/uploads/research/topic-04/policy-learning.webp`
- Work 01 figures:
- Work 02 figures:
