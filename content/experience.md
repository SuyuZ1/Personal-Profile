# Career

This file is the editable source-of-truth for the full-time and internship modules on the Career page.
The public presentation intentionally distinguishes project-level capabilities from personal work.

## Current full-time role

- Organization: SANY Group
- Period: 2025—Present
- Employment type: Full-time
- Public role label: Embodied Intelligence Research
- Work structure: Industrial Deployment + Frontier Research
- Industrial deployment: 面向机器人焊接等复杂制造场景，连接多模态感知、工艺意图理解、动作生成、机器人执行与现场验证。
- Frontier research: 围绕 VLA 系统认知、具身数据智能、细粒度认知评测与 Policy Learning 开展前沿预研。
- Detail routes: `pages/research/index.html`; `pages/projects.html`
- Official job title: 待补充
- Department: 待补充

Only public, non-confidential research directions should be described on the website. Project-level
details, system metrics and internal materials require an explicit public-release decision.

## Module introduction

两段以视觉数据为核心的基础工程实践，分别涉及生成式人像系统的质量评估与模型接入，以及弱监督动物姿态评分流程。

## FaceChain

- Organization: 阿里巴巴达摩院 · ModelScope
- Period: 2023.07—2023.11
- Employment type: Internship
- Work positioning: Visual Quality Evaluation & Model Integration
- Public description: 工作定位于生成式人像系统的评估与工程接入侧：参与面部曝光与可见度分析，并协助候选语言模型的测试、比较与接入，支持相关功能迭代。
- My workstreams: Portrait Quality; Model Evaluation
- Project link: https://github.com/modelscope/facechain
- Visual: `../assets/uploads/experience/facechain-v3-portraits.jpg`
- Visual source: FaceChain v3.0.0 official repository, Apache-2.0

The FaceChain card does not claim the project's entire system, FACT, later papers, or work released
after this internship as a personal contribution.

## CuteCat

- Organization: SUES Lab
- Period: 2024.01—2024.08
- Public organization name: 上海工程技术大学实验室
- Employment type: Internship
- Work positioning: Weakly Supervised Visual Learning & Pose-based Scoring
- Public description: 围绕弱监督视觉数据构建与下游姿态评分建模，串联视频采集、单猫检测、动物关键点提取、弱监督标签与图像／视频评分。
- Methods: YOLOv5; MMPose; Weak Supervision
- Project link: https://github.com/SuyuZ1/CuteCat
- Visual: `../assets/uploads/experience/cutecat-demo.jpeg`

Project pipeline: video and danmaku collection → single-cat detection → ROI extraction → 17-point
animal pose estimation → sentiment-derived weak supervision → three-layer MLP PoseNet → image/video
score from 0 to 1.

The pose marks over the public image are a decorative visualization of the documented pipeline, not
a claim that they are the exact saved inference result for that image.
