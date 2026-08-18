# Selected Experience

This file is the editable source-of-truth for the compact experience module on the About page.
The public presentation intentionally distinguishes project-level capabilities from personal work.

## Module introduction

两段以视觉数据为核心的基础工程实践，分别涉及生成式人像系统的质量评估与模型接入，以及弱监督动物姿态评分流程。

## FaceChain

- Organization: Alibaba · ModelScope
- Period: 2023.07—2024.11
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
- Period: 2024.11—Present
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
