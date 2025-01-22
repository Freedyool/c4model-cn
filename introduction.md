---
layout: doc
title: 介绍
---
# 介绍

问建筑行业的人如何用视觉传达建筑的架构，你会看到场地平面图、楼层平面图、立面图、剖面图和细节图。相比之下，问软件开发人员如何用图表传达软件系统的架构，你可能会得到一堆混乱的方框和线条……不一致的符号（颜色编码、形状、线条样式等）、模糊的命名、未标记的关系、通用术语、缺失的技术选择、混合的抽象等。

<ImageGrid :imageUrls="imageUrls" />

在这个行业中，我们确实有统一建模语言（UML）、ArchiMate 和 SysML，但问这些是否提供了一种有效的方式来传达软件架构通常是无关紧要的，因为许多团队已经抛弃了它们，转而使用更简单的“方框和线条”图表。抛弃这些建模语言是一回事，但也许在追求敏捷的过程中，许多软件开发团队已经失去了视觉传达的能力。

## 代码的地图

C4 模型的创建是为了帮助软件开发团队描述和传达软件架构，无论是在前期设计会议期间还是在回顾性记录现有代码库时。它是一种在不同细节层次上创建“代码地图”的方式，就像你会使用 Google 地图一样，放大和缩小你感兴趣的区域。

| Level 1 | Level 2 | Level 3 | Level 4 |
| :-----------: | :-----------: | :-----------: | :-----------: |
| [![](/images/map-4.jpg)](/images/map-4.jpg) | [![](/images/map-3.jpg)](/images/map-3.jpg) | [![](/images/map-2.jpg)](/images/map-2.jpg) | [![](/images/map-1.jpg)](/images/map-1.jpg) |
| [![](https://static.structurizr.com/workspace/36141/diagrams/SystemContext.png)](/diagrams/01-system-context) | [![](https://static.structurizr.com/workspace/36141/diagrams/Containers.png)](/diagrams/02-container) | [![](https://static.structurizr.com/workspace/36141/diagrams/Components.png)](/diagrams/03-components) | [![](https://static.structurizr.com/workspace/36141/diagrams/MainframeBankingSystemFacade.png)](/diagrams/04-code) |


## 提高图表成熟度

C4 模型的目标是提高与软件架构图相关的成熟度。

[![](/images/software-architecture-diagramming-maturity-model.png)](/images/software-architecture-diagramming-maturity-model.png)

<script>
import ImageGrid from "/components/ImageGrid.vue";

export default {
  components: {
    ImageGrid,
  },
  data() {
    return {
      imageUrls: [
        "/images/sketch-1.jpg",
        "/images/sketch-2.jpg",
        "/images/sketch-3.jpg",
        "/images/sketch-4.jpg",
      ]
    };
  },
};
</script>