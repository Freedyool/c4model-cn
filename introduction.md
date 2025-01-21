---
layout: doc
title: 介绍
---
# 介绍

问建筑行业的人如何用视觉传达建筑的架构，你会看到场地平面图、楼层平面图、立面图、剖面图和细节图。相比之下，问软件开发人员如何用图表传达软件系统的架构，你可能会得到一堆混乱的方框和线条……不一致的符号（颜色编码、形状、线条样式等）、模糊的命名、未标记的关系、通用术语、缺失的技术选择、混合的抽象等。

| [![A software architecture sketch](/images/sketch-1.jpg)](/images/sketch-1.jpg) | [![A software architecture sketch](/images/sketch-2.jpg)](/images/sketch-2.jpg) |
| [![A software architecture sketch](/images/sketch-3.jpg)](/images/sketch-3.jpg) | [![A software architecture sketch](/images/sketch-4.jpg)](/images/sketch-4.jpg) |

在这个行业中，我们确实有统一建模语言（UML）、ArchiMate 和 SysML，但问这些是否提供了一种有效的方式来传达软件架构通常是无关紧要的，因为许多团队已经抛弃了它们，转而使用更简单的“方框和线条”图表。抛弃这些建模语言是一回事，但也许在追求敏捷的过程中，许多软件开发团队已经失去了视觉传达的能力。

## 代码的地图

C4 模型的创建是为了帮助软件开发团队描述和传达软件架构，无论是在前期设计会议期间还是在回顾性记录现有代码库时。它是一种在不同细节层次上创建“代码地图”的方式，就像你会使用 Google 地图一样，放大和缩小你感兴趣的区域。

| [![](/images/map-4.jpg)](/images/map-4.jpg) | [![](/images/map-3.jpg)](/images/map-3.jpg) | [![](/images/map-2.jpg)](/images/map-2.jpg) | [![](/images/map-1.jpg)](/images/map-1.jpg) |
| [![](https://static.structurizr.com/workspace/36141/diagrams/SystemContext.png)](/diagrams/01-system-context) | [![](https://static.structurizr.com/workspace/36141/diagrams/Containers.png)](/diagrams/02-container) | [![](https://static.structurizr.com/workspace/36141/diagrams/Components.png)](/diagrams/03-components) | [![](https://static.structurizr.com/workspace/36141/diagrams/MainframeBankingSystemFacade.png)](/diagrams/04-code) |
| Level 1: A [system context diagram](/diagrams/01-system-context) provides a starting point, showing how the software system in scope fits into the world around it. | Level 2: A [container diagram](/diagrams/02-container) zooms into the software system in scope, showing the applications and data stores inside it. | Level 3: A [component diagram](/diagrams/03-components) zooms into an individual container, showing the components inside it. | Level 4: A [code diagram](/diagrams/04-code) (e.g. UML class) can be used to zoom into an individual component, showing how that component is implemented at the code level. |

## Improving diagramming maturity

The goal of the C4 model is to raise the level of maturity associated with software architecture diagrams.

[![](/images/software-architecture-diagramming-maturity-model.png)](/images/software-architecture-diagramming-maturity-model.png)

<!-- <script type="application/javascript" src="https://code.jquery.com/jquery-3.7.1.slim.min.js"></script> -->
<!-- <script type="application/javascript" src="/assets/c4model.js"></script> -->