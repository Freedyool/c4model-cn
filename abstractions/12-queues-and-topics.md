---
layout: doc
title: 队列和主题
---

# 队列和主题

假设我们有一个基于服务的架构，其中一些服务（A 和 B）生成消息，另一些服务（C 和 D）消费消息。
一种常见的方式是用这样的图来表示这种架构：

[![](/images/queues-and-topics/1.png)](/images/queues-and-topics/1.png)

从某些角度来看，这个图确实准确地表示了架构。服务 A 和 B 正在向一个中介发送消息，中介将这些消息转发给服务 C 和 D。
问题在于，这种“轮辐结构”的图往往会掩盖真实情况，即消息生产者和消费者之间可能存在一定程度的耦合。

## 点对点

问题在于我们将消息总线表示为一个 C4 容器，这可能并不正确。
更好的方法是将每个单独的队列和主题视为一个“数据存储”。
消息队列本质上是一个数据存储——它是一个存储数据（消息）的桶，生产者添加数据，消费者取走数据。
这里的含义是，队列和主题是 C4 容器，而不是消息总线本身。

[![](/images/queues-and-topics/2.png)](/images/queues-and-topics/2.png)

在这个例子中，我们可以清楚地看到服务 A 和 C 之间通过一个名为 X 的队列存在耦合，
而服务 B 和 D 之间通过一个名为 Y 的队列存在类似的点对点耦合。

将队列和主题建模为 C4 容器还提供了一种独立于其部署拓扑的思考方式。
在开发时，您可能会将所有队列和主题运行在单个消息总线实例上，以节省笔记本电脑上的资源。
实际的部署拓扑可能会将单个队列和主题部署到不同的消息总线、代理或集群中，以提高性能、可扩展性或安全性。

如果您确实通过队列存在点对点耦合，可以通过省略队列并将队列名称移到箭头上来进一步简化此图。

[![](/images/queues-and-topics/3.png)](/images/queues-and-topics/3.png)

结果是一个视觉上更简单、更不杂乱的图，但队列在图上不再那么明显。
由于 C4 模型是与符号无关的，您还可以使用不同的线条样式（实线与虚线）或颜色来突出消息传递关系。
这两种版本的图都不是“更好”的，只是以不同的方式讲述同一个故事。这都是权衡。

## 发布/订阅

您会注意到所有图都显示消息从图的左侧流向右侧，箭头标记为“发送消息到”。
虽然这对于点对点和基于队列的架构非常有效，但您也可以更改箭头方向，以更好地突出发布/订阅或基于主题的内容。

[![](/images/queues-and-topics/4.png)](/images/queues-and-topics/4.png)

这个版本的图更好地展示了消息发布者和订阅者的角色。再次强调，这只是以不同的方式讲述同一个故事。

## 总结

有多种方式来绘制基于消息的架构图，以下两种是“正确的”：

- 错误：将消息总线建模为一个 C4 容器。
- 正确：将队列和主题明确建模为 C4 容器。
- 正确：使用“通过”符号在关系上隐式建模基于消息的交互。

## 进一步考虑

示例假设单个软件系统由多个通过队列和主题通信的服务组成。换句话说，图上的所有内容都位于软件系统边界内，并且由该单个软件系统“拥有”。

如果您阅读了[微服务](/abstractions/11-microservices)的建议，并且将每个服务建模为一个独立的软件系统，您还需要考虑谁“拥有”队列和主题。
如果服务 A（一个软件系统）与服务 B（也是一个软件系统）通过一个名为 X 的队列（一个容器）存在点对点关系……谁拥有这个容器？
是服务 A 拥有消息格式的定义和队列的操作，还是服务 B？或者可能是共同拥有，或者完全由其他人拥有。所有权将影响图表。