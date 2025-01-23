---
layout: doc
title: 符号
---

# 符号

C4 模型是 **符号独立的**，并不规定任何特定的符号。不过，作为一个起点，一种简单的符号在白板、纸张、便利贴、索引卡片和各种绘图工具上都能很好地工作。

然后，您可以使用颜色和形状来补充图表，既可以添加额外的信息，也可以使图表更美观。尽管您可能会看到许多示例图表和工具使用蓝色和灰色框<sup>1</sup>，但这 **不是** C4 模型所规定的，您可以自由使用任何颜色！

## 元素

<ImageGrid :imageUrls="imageUrls" />

请注意，每个框都包含元素/抽象类型（`Person`、`Software System`、`Container`、`Component`）——这是一个有意的决定，有助于消除关于显示的抽象级别的任何歧义。

## 关系

[![Relationship](/images/notation-relationship.png)](/images/notation-relationship.png)

## 图例/图例

任何使用的符号都应尽可能自描述，但所有图表都应有一个图例/图例，以使符号明确。这也适用于使用 UML、ArchiMate 和 SysML 等符号创建的图表，因为并不是每个人都知道所使用的符号。

[![A diagram key](https://static.structurizr.com/workspace/36141/diagrams/Containers-key.png)](https://static.structurizr.com/workspace/36141/diagrams/Containers-key.png)

## 符号、符号、符号

尽管 C4 模型是一种抽象优先的方法，并且与符号无关，但您仍需要确保您的图表符号有意义，并且图表易于理解。考虑这一点的一个好方法是问自己每个图表是否可以独立存在，并且在没有叙述的情况下（大部分）可以理解。您可以使用这个简短的[软件架构图表审查清单](/diagrams/12-checklist)来帮助您。

以下是与符号相关的一些一般建议。

### 图表

- 每个图表都应有一个描述图表类型和范围的标题（例如，“我的软件系统的系统上下文图”）。
- 每个图表都应有一个图例/图例，解释所使用的符号（例如，形状、颜色、边框样式、线条类型、箭头等）。
- 缩略语和缩写（业务/领域或技术）应为所有受众所理解，或在图表图例/图例中进行解释。

### 元素

- 每个元素的类型应明确指定（例如，Person、Software System、Container 或 Component）。
- 每个元素都应有一个简短的描述，以提供关键职责的“一目了然”视图。
- 每个容器和组件应明确指定技术。

### 关系

- 每条线应表示单向关系。
- 每条线都应有标签，标签应与关系的方向和意图一致（例如，依赖关系或数据流）。尽量使标签尽可能具体，理想情况下避免使用“使用”等单词。
- 容器之间的关系（通常表示进程间通信）应明确标明技术/协议。

## C4 和 UML

尽管示例图表是使用“框和线”符号创建的，但核心图表可以使用 UML 通过适当使用包、组件和构造型来说明。然而，生成的 UML 图表往往缺乏相同程度的描述性文本，因为在某些 UML 工具中添加此类文本是不可能的（或不容易的）。

以下是系统上下文、容器和组件图的三个示例以供比较。

| 系统上下文图 | 容器图 | 组件图 |
| :-----------: | :-----------: | :-----------: |
| [![System context diagram](/images/spring-petclinic-system-context.png)](/images/spring-petclinic-system-context.png) | [![Container diagram](/images/spring-petclinic-containers.png)](/images/spring-petclinic-containers.png) | [![Component diagram](/images/spring-petclinic-components.png)](/images/spring-petclinic-components.png) |
| [![System context diagram](/images/spring-petclinic-system-context-plantuml.png)](/images/spring-petclinic-system-context-plantuml.png) | [![Container diagram](/images/spring-petclinic-containers-plantuml.png)](/images/spring-petclinic-containers-plantuml.png) | [![Component diagram](/images/spring-petclinic-components-plantuml.png)](/images/spring-petclinic-components-plantuml.png) |

## C4 和 ArchiMate

有关如何使用 ArchiMate 创建 C4 模型图的详细信息，请参阅 [C4 Model, Architecture Viewpoint and Archi 4.7](https://www.archimatetool.com/blog/2020/04/18/c4-model-architecture-viewpoint-and-archi-4-7/)。

## 替代可视化

最后，不要觉得您总是需要使用传统的“框和箭头”图表。尽管这通常是默认方法，但还有其他通常是交互式的可视化，可以用非常不同的方式显示相同的 C4 模型抽象。

| [传统的](https://structurizr.com/dsl?example=microservices) | [D3.js](https://structurizr.com/dsl?example=microservices&renderer=graph) | [llograph](https://structurizr.com/dsl?example=microservices&renderer=ilograph) |
| :-----------: | :-----------: | :-----------: |
| [![](/images/alternative-1.png)](https://structurizr.com/dsl?example=microservices) |  [![](/images/alternative-2.png)](https://structurizr.com/dsl?example=microservices&renderer=graph) |  [![](/images/alternative-3.png)](https://structurizr.com/dsl?example=microservices&renderer=ilograph) |
| 传统的“框和箭头”图表是文档和演示的默认方法。 | D3.js 力导向图是一种非常简洁的方式来可视化更大的软件架构，同时也提供了一种轻松探索依赖关系的方法。 | Ilograph 的交互式图表提供了一种选择性放大和缩小的方法，使您能够探索整个软件架构模型。 |

- <sup>1</sup> "C4 = blue and grey boxes" 是一个常见的误解，这就是为什么本网站上展示的示例图现在在蓝色、绿色和红色版本之间循环！

<script>
import ImageGrid from "/components/ImageGrid.vue";

export default {
  components: {
    ImageGrid,
  },
  data() {
    return {
      imageUrls: [
        "/assets/notation-person.Dn4ijWFH.png",
        "/assets/notation-software-system.B_Lz4Hek.png",
        "/assets/notation-container.Uwqb5xJH.png",
        "/assets/notation-component.9YohFWWL.png",
      ]
    };
  },
};
</script>