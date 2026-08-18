# Research Topic 03 — CFG-Bench

## Official title

Beyond Description: Cognitively Benchmarking Fine-Grained Action for Embodied Agents

## Status

- Venue: ECCV 2026
- Work period: SANY Group, 2025—Present
- Detail page: `../../pages/research/topic-03.html`
- Official website: https://cfg-bench.github.io/
- Paper: https://www.arxiv.org/abs/2511.18685
- Code: https://github.com/CFG-Bench/CFG-Bench
- Dataset: https://huggingface.co/datasets/CFG-Bench/CFG-Bench

## Research question

Can an embodied agent move beyond recognizing an action to understand how, why, and how well it is performed?

现有具身 Benchmark 多聚焦高层规划、空间推理或第三人称粗粒度动作描述，却没有充分评估真实物理交互所需的细粒度动作智能。CFG-Bench 评估模型能否将视觉观察转化为可执行知识，包括物理交互细节、时间与因果关系、行为意图以及执行质量。

## One-sentence positioning

以四层递进认知框架系统评估具身智能体的细粒度动作理解，让 Benchmark 从“描述发生了什么”走向“理解如何做、为何做以及做得如何”。

## Benchmark scope

- 1,368 curated videos
- 19,562 three-modality question-answer pairs
- 4 cognitive abilities
- 11 tasks
- Open-ended and close-ended evaluation

### Four cognitive abilities

1. Physical Interaction
2. Temporal-Causal Relation
3. Intentional Understanding
4. Evaluative Judgment

## Key findings

- Leading MLLMs struggle to produce detailed instructions for physical interactions.
- Larger capability gaps appear in intentional understanding and evaluative judgment.
- SFT using CFG captions improves performance on established embodied benchmarks.

## Personal contribution

### Role

RESEARCH LEAD · END-TO-END OWNERSHIP

主导研究问题定义、四层认知框架、Benchmark 与三模态问答体系设计、数据构建流程、质量控制、实验方案、模型评测、SFT 验证、结果分析以及论文与网站落地。

### Annotation responsibility

具体数据标注由外包团队执行；本人负责标注规范设计、任务拆解、团队培训、过程审核与质量验收，对最终数据质量和认知任务一致性负责。

## Media

- `../../assets/uploads/research/cfg-bench/motivation.png`
- `../../assets/uploads/research/cfg-bench/demonstration.png`
- `../../assets/uploads/research/cfg-bench/data-statistics.png`
- `../../assets/uploads/research/cfg-bench/benchmark-comparison.png`
- `../../assets/uploads/research/cfg-bench/model-comparison.png`

Figures are sourced from the official CFG-Bench project page. The official dataset is released under CC BY-NC-SA 4.0.
