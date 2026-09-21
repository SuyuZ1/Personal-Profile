# Research Topic 05 — AffAlign

## Positioning

AffAlign: Cross-Backbone Alignment for Fine-Grained Affordance Understanding

通过跨视觉骨干对齐与多模态语义融合，研究如何更精确地理解可交互区域及其动作可能性。

## Research perspective

How can dense visual evidence and multimodal semantics agree on what an object affords?

该方向连接三个层次：

1. Cross-Backbone Alignment：缓解不同视觉骨干之间的表征差异
2. Fine-Grained Semantics：对齐密集视觉特征与多模态语义表征
3. Semi-Automatic Annotation：降低 affordance 区域与动作语义的标注成本

## Motivation

细粒度 affordance 理解不仅要定位可交互区域，还要判断该区域对应的动作可能性与语义角色。视觉骨干差异和标注噪声会让区域级视觉特征与多模态语义难以稳定对齐。

## Status

- Publication: ICLR 2027 · 投稿中
- Current public scope: 研究问题与方法方向
- Figures, experimental results and dataset scale: 待论文公开后补充

## Contribution

- 构建跨视觉骨干的区域级对齐关系，提升表征迁移与学习稳定性
- 将多模态语义表征与密集视觉特征结合，联合建模可交互区域及其语义
- 配套半自动 affordance 标注流程，支持细粒度区域与动作语义的高效构建

## Industry impact

- 提升机器人对可交互区域和动作可能性的细粒度理解
- 为具身智能体的操作规划与工具使用提供更稳定的视觉语义接口
- 为跨模型、跨骨干的 affordance 学习与评测建立可扩展基础
