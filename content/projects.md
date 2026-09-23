# SANY Embodied Welding Robot Project

The public Projects index presents the embodied welding robot program with four core contributions
and two invention patents. The project cases below distinguish the public VLA welding modules from
the still-placeholder data-collection module. Only add details that are approved for public disclosure.

## Flagship Project Overview

- Organization: SANY Group
- Role: Algorithm Lead and Core Project Driver
- Scope: Project validation, technical roadmap, algorithm R&D, system integration, site deployment and scaled production
- Outcome: Advanced the welding robot from a laboratory prototype to industrial unmanned production
- Industrial evidence: Six months of continuous stable production; fully unmanned operation at the target workstation; support for external product sales
- VLA evidence: 90% model welding success rate versus an approximately 50% manual-operation baseline
- Technical breakthrough: Automated root-pass welding for non-standard gaps, moving the capability from zero to one

### Core Contributions

1. Led the full technical and delivery lifecycle of the embodied welding robot project as algorithm lead.
2. Built a visual seam-tracking system from scratch using a segmentation foundation model, covering seam perception, trajectory extraction, pose estimation and online correction.
3. Independently developed a multi-view temporal end-to-end welding model combining multi-camera perception, temporal state modeling and robot action decision-making in a VLA framework.
4. Developed a weld-pool VLM for multimodal understanding of pool morphology, welding state, defect trends and process quality, connecting its output to robot control and reinforcement learning for closed-loop optimization.

## VLA Welding Project 01

- Public title: VLA 打底 · Multi-view Temporal Welding Model
- Organization: SANY Group
- Period: 2025—Present
- Status: Public case ready; inline video playback paused
- Detail page: `../pages/projects/vla-welding-01.html`
- Project context: 面向非标间隙打底自动化的端到端 VLA。
- System approach: 多相机视觉感知、时序状态建模、动作生成与机器人执行决策统一到 VLA 框架，并接入熔池理解与过程反馈。
- Personal contribution: 独立研发多视角时序焊接模型，完成感知、决策与执行接口联调。
- Technologies: Multi-view perception; temporal state modeling; VLA; VLM; reinforcement-learning feedback
- Results / evidence: 焊接成功率 90%，约 50% 为人工基准；任务范围、样本量及成功判定口径待补充。
- Related research topic: Policy Learning for Embodied Agents
- GitHub URL:
- Demo URL:
- Related media: `../material/焊接项目/打底.mp4` (inline playback remains paused)

## VLA Welding Project 02

- Public title: VLA 盖面 · Visual Seam Tracking
- Organization: SANY Group
- Period: 2025—Present
- Status: Public case ready; inline video playback paused
- Detail page: `../pages/projects/vla-welding-02.html`
- Project context: 面向复杂工业场景的无人化焊接盖面。
- System approach: 基于分割大模型构建焊缝区域感知、轨迹提取、位姿估计、在线纠偏与异常处理链路。
- Personal contribution: 负责算法研发与核心推进，协调算法、设备与现场工艺联调。
- Technologies: Segmentation foundation model; seam tracking; trajectory planning; pose estimation; online correction
- Results / evidence: 支撑连续稳定生产、工艺参数适配与目标工位无人化运行。
- Related research topic:
- GitHub URL:
- Demo URL:
- Related media: `../material/焊接项目/盖面.mp4` (inline playback remains paused)
