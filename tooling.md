---
layout: doc
title: 使用工具
aside: false
---

# 工具

在设计会议中，您可能会发现白板或翻纸板更适合协作和快速迭代。
对于长期文档，有许多工具可以帮助基于C4模型创建软件架构图。以下是您在选择工具时应问自己的几个问题：

- 谁是图表的作者，他们的技术水平如何？
- 谁是图表的受众，他们将如何访问图表/文档？
- [绘图 vs 建模？](/tooling#diagramming-vs-modelling)
- "拖放" UI vs "代码中的图表"？
- 数据存储在git中与源代码一起 vs 存储在工具/云服务中？
- 易于在拉取请求中使用的差异源？
- 封闭 vs 开放数据格式？
- 交互式 vs 静态图表？
- 免费 vs 付费？
- 封闭 vs 开源？
- 云端 vs 自托管？
- 短期 vs 长期文档？

## 绘图 vs 建模

关于绘图和建模的简短说明，因为这是您在选择工具时需要做出的最大决定。
C4模型*可以*无论您使用绘图工具还是建模工具，但当您从绘图进步到建模时，会有一些有趣的机会。

### 绘图

在行业中，我们倾向于更喜欢绘图（例如Visio、draw.io、Lucidchart、PlantUML、Mermaid等）而不是建模（例如Sparx EA、Archi、IcePanel、Structurizr等），主要是因为入门门槛相对较低，并且被视为一项更简单的任务。但是使用绘图工具进行软件架构图有许多主要问题：

1. 绘图工具的领域语言是“框和线”，这意味着：
    - 它们无法为您的图表提供任何帮助或验证。
    - 您无法查询图表（例如“显示组件X的所有依赖关系”）。
2. 通过复制粘贴来重用图表元素——如果您重命名一个框，则需要在每个出现的图表中重命名它。
3. 许多绘图工具的数据格式难以进行差异比较，使得它们难以与拉取请求一起使用，例如。

### 建模

使用建模工具时，您正在构建一个非可视化的软件架构模型（所有元素及其关系的单一定义），然后在该模型之上创建不同的视图（成为图表）。这需要更多的严谨性，但问题可以解决——建模工具可以理解您尝试做的事情的语义，提供额外的帮助，并且重命名元素/关系很容易。

软件架构模型本质上只是[有向图](https://en.wikipedia.org/wiki/Directed_graph)，由节点和边组成，图表显示图的一部分。一旦您看到模型（只是结构化数据）和视图（呈现为图表）之间的分离，您会很快看到出现了许多有趣的机会：

- 创建替代可视化以帮助理解大型和复杂的架构模型——参见[Does the C4 model scale?](/faq#does-the-c4-model-scale)了解更多。
- 查询模型。
- 将模型导出到其他工具。
- 等等


## 可选项

以下是一些为C4模型提供特定支持的工具集合。

<ToolingOptions />

<script>
import ToolingOptions from "/components/ToolingOptions.vue";

export default {
  components: {
    ToolingOptions,
  },
};
</script>