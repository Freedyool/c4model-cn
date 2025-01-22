<template>
  <div>
    <!-- 过滤选项 -->
    <table>
    <thead>
    <tr>
        <td style="vertical-align: top">
            <h4>Supported diagram types</h4>
            {{ checkedDiagramTypes }}
            <div class="toolingOptionFilter">
                <label><input id="toolingStaticDiagramsFilter" type="checkbox" checked="checked" disabled="disabled"> Static diagrams</label>
                <div class="smaller">(e.g. system context, container, and component diagrams)</div>
            </div>

            <div class="toolingOptionFilter">
                <label><input id="toolingDynamicDiagramsFilter" type="checkbox" v-model="checkedDynamicDiagrams"> Dynamic diagrams</label>
                <div class="smaller">(e.g. collaboration or sequence diagrams)</div>
            </div>

            <div class="toolingOptionFilter">
                <label><input id="toolingDeploymentDiagramsFilter" type="checkbox" v-model="checkedDeploymentDiagrams"> Deployment diagrams</label>
                <div class="smaller">(e.g. diagrams showing deployment and infrastructure concerns)</div>
            </div>
        </td>
        <td style="vertical-align: top">
            <h4>Diagramming vs modelling</h4>
            <div class="toolingOptionFilter">
                <label><input id="toolingDiagrammingFilter" name="diagramVsModel" type="radio" value="diagram" v-model="pickedDiagramVsModel"> Diagramming tool</label>
                <div class="smaller">(boxes and arrows are reused via copy and paste, no assistance, no validation rules, etc)</div>
            </div>
            <div class="toolingOptionFilter">
                <label><input id="toolingModelBasedFilter" name="diagramVsModel" type="radio" value="model" v-model="pickedDiagramVsModel"> Reuse elements across multiple diagrams</label>
                <div class="smaller">(i.e. a modelling tool - to keep multiple diagrams in sync automatically when you rename elements)</div>
                <div style="margin-top: 10px">
                <span class="smaller" style="font-weight: normal; background: #02b621; color: #ffffff; padding: 5px; margin-top: 10px;">Recommended</span>
                </div>
            </div>
        </td>
        <td style="vertical-align: top">
            <h4>Authoring</h4>
            <div class="toolingOptionFilter">
                <label><input id="toolingWithUIFilter" name="authoring" type="radio" value="withUI" v-model="pickedAuthoring"> Graphical user interface</label>
                <div class="smaller">(drag and drop modelling UI)</div>
            </div>
            <div class="toolingOptionFilter">
                <label><input id="toolingAsCodeFilter" name="authoring" type="radio" value="asCode" v-model="pickedAuthoring"> Diagrams and models as code</label>
                <div class="smaller">(for easy version control and integration into build pipelines/other tools)</div>
            </div>
        </td>
        <td style="vertical-align: top">
            <h4>Other</h4>
            <div class="toolingOptionFilter">
                <label><input id="toolingOpenSourceFilter" type="checkbox" v-model="checkedOpenSource"> Open source</label>
                <div class="smaller">(free, fork/customize, etc)</div>
            </div>

            <div class="toolingOptionFilter">
                <label><input id="toolingRenderingToolIndependentFilter" type="checkbox" v-model="checkedRenderingToolIndependent"> Rendering tool independent</label>
                <div class="smaller">(to render diagrams with different tools or visualisation formats such as <a href="/diagrams/notation#alternative-visualisations">diagrams, graphs, etc</a>)</div>
            </div>
        </td>
    </tr>
    </thead>
    </table>

    <!-- 工具选项 -->
    <div class="centered">
      <div :class="['toolingOption', (checkedDiagramming || checkedAsCode || checkedRenderingToolIndependent || checkedRenderingToolIndependent) ? 'faded' : '']">
      <!-- <div class="toolingOption toolingOpenSource toolingModelBased toolingWithUI toolingStaticDiagrams toolingDynamicDiagrams toolingDeploymentDiagrams"> -->
        <a href="https://www.archimatetool.com/blog/2020/04/18/c4-model-architecture-viewpoint-and-archi-4-7/" target="_blank">Archi</a>
      </div>
      <div :class="['toolingOption', ( checkedModelBased || checkedWithUI || checkedDynamicDiagrams || checkedDeploymentDiagrams || checkedRenderingToolIndependent) ? 'faded' : '']">
      <!-- <div class="toolingOption toolingOpenSource toolingDiagramming toolingAsCode toolingStaticDiagrams"> -->
          <a href="https://github.com/lonely-lockley/archinsight" target="_blank">Archinsight</a>
      </div>
      <div :class="['toolingOption', ( checkedOpenSource || checkedDiagramming || checkedAsCode || checkedDynamicDiagrams || checkedRenderingToolIndependent) ? 'faded' : '']">
      <!-- <div class="toolingOption toolingModelBased toolingWithUI toolingStaticDiagrams toolingDeploymentDiagrams"> -->
          <a href="https://www.archipeg.com/learn/c4-model-v1-metamodel" target="_blank">Archipeg</a>
      </div>
      <div :class="['toolingOption', ( checkedOpenSource || checkedDiagramming || checkedAsCode || checkedRenderingToolIndependent) ? 'faded' : '']">
      <!-- <div class="toolingOption toolingModelBased toolingWithUI toolingStaticDiagrams toolingDynamicDiagrams toolingDeploymentDiagrams"> -->
          <a href="https://github.com/ChangeVision/astah-c4model-plugin" target="_blank">Astah</a>
      </div>
      <div :class="['toolingOption', ( checkedModelBased || checkedWithUI || checkedRenderingToolIndependent) ? 'faded' : '']">
      <!-- <div class="toolingOption toolingOpenSource toolingDiagramming toolingAsCode toolingStaticDiagrams toolingDynamicDiagrams toolingDeploymentDiagrams"> -->
          <a href="https://github.com/plantuml-stdlib/C4-PlantUML" target="_blank">C4-PlantUML</a>
      </div>
      <div :class="['toolingOption', ( checkedModelBased || checkedWithUI || checkedRenderingToolIndependent) ? 'faded' : '']">
      <!-- <div class="toolingOption toolingOpenSource toolingDiagramming toolingAsCode toolingStaticDiagrams toolingDynamicDiagrams toolingDeploymentDiagrams"> -->
          <a href="https://adrianvlupu.github.io/C4-Builder" target="_blank">c4builder</a>
      </div>
      <div :class="['toolingOption', ( checkedDiagramming || checkedWithUI || checkedDynamicDiagrams || checkedDeploymentDiagrams || checkedRenderingToolIndependent) ? 'faded' : '']">
      <!-- <div class="toolingOption toolingOpenSource toolingModelBased toolingAsCode toolingStaticDiagrams"> -->
          <a href="https://github.com/SlavaVedernikov/C4InterFlow" target="_blank">C4InterFlow</a>
      </div>
      <div :class="['toolingOption', ( checkedModelBased || checkedWithUI || checkedDynamicDiagrams || checkedRenderingToolIndependent) ? 'faded' : '']">
      <!-- <div class="toolingOption toolingOpenSource toolingDiagramming toolingAsCode toolingStaticDiagrams toolingDeploymentDiagrams"> -->
          <a href="https://github.com/8T4/c4sharp" target="_blank">C4Sharp</a>
      </div>
      <div :class="['toolingOption', ( checkedModelBased || checkedWithUI || checkedDynamicDiagrams || checkedDeploymentDiagrams || checkedRenderingToolIndependent) ? 'faded' : '']">
      <!-- <div class="toolingOption toolingOpenSource toolingDiagramming toolingAsCode toolingStaticDiagrams"> -->
          <a href="https://owulveryck.github.io/cue4puml4c4/" target="_blank">CUE4Puml4C4</a>
      </div>
      <div :class="['toolingOption', ( checkedModelBased || checkedWithUI || checkedDynamicDiagrams || checkedDeploymentDiagrams || checkedRenderingToolIndependent) ? 'faded' : '']">
      <!-- <div class="toolingOption toolingOpenSource toolingDiagramming toolingAsCode toolingStaticDiagrams"> -->
          <a href="https://diagrams.mingrammer.com/docs/nodes/c4" target="_blank">Diagrams</a>
      </div>
      <div :class="['toolingOption', ( checkedModelBased || checkedAsCode || checkedRenderingToolIndependent) ? 'faded' : '']">
      <!-- <div class="toolingOption toolingOpenSource toolingDiagramming toolingWithUI toolingStaticDiagrams toolingDynamicDiagrams toolingDeploymentDiagrams"> -->
          <a href="https://www.diagrams.net/blog/c4-modelling" target="_blank">diagrams.net</a>
      </div>
      <div :class="['toolingOption', ( checkedOpenSource || checkedModelBased || checkedAsCode || checkedRenderingToolIndependent) ? 'faded' : '']">
      <!-- <div class="toolingOption toolingWithUI toolingDiagramming toolingStaticDiagrams toolingDynamicDiagrams toolingDeploymentDiagrams"> -->
          <a href="https://libraries.excalidraw.com/#dmitry-burnyshev-c4-architecture" target="_blank">Excalidraw</a>
      </div>
      <div :class="['toolingOption', ( checkedOpenSource || checkedModelBased || checkedAsCode || checkedRenderingToolIndependent) ? 'faded' : '']">
      <!-- <div class="toolingOption toolingWithUI toolingDiagramming toolingStaticDiagrams toolingDynamicDiagrams toolingDeploymentDiagrams"> -->
          <a href="https://www.figma.com/templates/c4-model-examples/" target="_blank">Figma</a>
      </div>
      <div :class="['toolingOption', ( checkedDiagramming || checkedAsCode || checkedRenderingToolIndependent) ? 'faded' : '']">
      <!-- <div class="toolingOption toolingWithUI toolingOpenSource toolingModelBased toolingStaticDiagrams toolingDynamicDiagrams toolingDeploymentDiagrams"> -->
          <a href="https://gaphor.org" target="_blank">Gaphor</a>
      </div>
      <div :class="['toolingOption', ( checkedOpenSource || checkedModelBased || checkedAsCode || checkedRenderingToolIndependent) ? 'faded' : '']">
      <!-- <div class="toolingOption toolingWithUI toolingDiagramming toolingStaticDiagrams toolingDynamicDiagrams toolingDeploymentDiagrams"> -->
          <a href="https://www.gliffy.com/blog/c4-model" target="_blank">Gliffy</a>
      </div>
      <div :class="['toolingOption', ( checkedOpenSource || checkedDiagramming || checkedAsCode || checkedDeploymentDiagrams || checkedRenderingToolIndependent) ? 'faded' : '']">
      <!-- <div class="toolingOption toolingWithUI toolingModelBased toolingStaticDiagrams toolingDynamicDiagrams"> -->
          <a href="https://icepanel.io/c4-model" target="_blank">IcePanel</a>
      </div>
      <div :class="['toolingOption', ( checkedModelBased || checkedWithUI || checkedRenderingToolIndependent) ? 'faded' : '']">
      <!-- <div class="toolingOption toolingOpenSource toolingDiagramming toolingAsCode toolingStaticDiagrams toolingDynamicDiagrams toolingDeploymentDiagrams"> -->
          <a href="https://keadex.dev/en/projects/keadex-mina" target="_blank">Keadex Mina</a>
      </div>
      <div :class="['toolingOption', ( checkedOpenSource || checkedModelBased || checkedAsCode || checkedRenderingToolIndependent) ? 'faded' : '']">
      <!-- <div class="toolingOption toolingWithUI toolingDiagramming toolingStaticDiagrams toolingDynamicDiagrams toolingDeploymentDiagrams"> -->
          <a href="https://www.lucidchart.com/pages/templates/c4-model-example" target="_blank">Lucidchart</a>
      </div>
      <div :class="['toolingOption', ( checkedOpenSource || checkedModelBased || checkedAsCode || checkedRenderingToolIndependent) ? 'faded' : '']">
      <!-- <div class="toolingOption toolingWithUI toolingDiagramming toolingStaticDiagrams toolingDynamicDiagrams toolingDeploymentDiagrams"> -->
          <a href="https://github.com/pihalve/c4model-visio-stencil" target="_blank">Microsoft Visio</a>
      </div>
      <div :class="['toolingOption', ( checkedModelBased || checkedWithUI || checkedRenderingToolIndependent) ? 'faded' : '']">
      <!-- <div class="toolingOption toolingOpenSource toolingDiagramming toolingAsCode toolingStaticDiagrams toolingDynamicDiagrams toolingDeploymentDiagrams"> -->
          <a href="https://mermaid.js.org/syntax/c4.html" target="_blank">Mermaid</a>
      </div>
      <div :class="['toolingOption', ( checkedOpenSource || checkedModelBased || checkedAsCode || checkedRenderingToolIndependent) ? 'faded' : '']">
      <!-- <div class="toolingOption toolingWithUI toolingDiagramming toolingStaticDiagrams toolingDynamicDiagrams toolingDynamicDiagrams toolingDeploymentDiagrams"> -->
          <a href="https://miro.com/miroverse/c4-architecture/" target="_blank">Miro</a>
      </div>
      <div :class="['toolingOption', ( checkedDiagramming || checkedWithUI || checkedRenderingToolIndependent) ? 'faded' : '']">
      <!-- <div class="toolingOption toolingOpenSource toolingModelBased toolingAsCode toolingStaticDiagrams toolingDynamicDiagrams toolingDeploymentDiagrams"> -->
          <a href="https://github.com/goadesign/model" target="_blank">Model</a>
      </div>
      <div :class="['toolingOption', ( checkedModelBased || checkedAsCode || checkedRenderingToolIndependent) ? 'faded' : '']">
      <!-- <div class="toolingOption toolingOpenSource toolingWithUI toolingDiagramming toolingStaticDiagrams toolingDynamicDiagrams toolingDeploymentDiagrams"> -->
          <a href="https://architecture.models.nasdanika.org/references/eSubpackages/c4/index.html" target="_blank">Nasdanika Architecture</a>
      </div>
      <div :class="['toolingOption', ( checkedOpenSource || checkedModelBased || checkedAsCode || checkedRenderingToolIndependent) ? 'faded' : '']">
      <!-- <div class="toolingOption toolingWithUI toolingDiagramming toolingStaticDiagrams toolingDynamicDiagrams toolingDeploymentDiagrams"> -->
          <a href="https://stenciltown.omnigroup.com/stencils/c4/" target="_blank">OmniGraffle</a>
      </div>
      <div :class="['toolingOption', ( checkedDiagramming || checkedWithUI || checkedRenderingToolIndependent) ? 'faded' : '']">
      <!-- <div class="toolingOption toolingOpenSource toolingModelBased toolingAsCode toolingStaticDiagrams toolingDynamicDiagrams toolingDeploymentDiagrams"> -->
          <a href="https://github.com/soulspace-org/overarch" target="_blank">Overarch</a>
      </div>
      <div :class="['toolingOption', ( checkedDiagramming || checkedWithUI || checkedRenderingToolIndependent) ? 'faded' : '']">
      <!-- <div class="toolingOption toolingOpenSource toolingModelBased toolingAsCode toolingStaticDiagrams toolingDynamicDiagrams toolingDeploymentDiagrams"> -->
          <a href="https://github.com/DrMarkusVoss/pumla/blob/main/test/examples/C4example/pumlaC4Example.md" target="_blank">pumla</a>
      </div>
      <div :class="['toolingOption', ( checkedDiagramming || checkedWithUI || checkedDynamicDiagrams || checkedDeploymentDiagrams || checkedRenderingToolIndependent) ? 'faded' : '']">
      <!-- <div class="toolingOption toolingOpenSource toolingModelBased toolingAsCode toolingStaticDiagrams"> -->
          <a href="https://github.com/nielsvanspauwen/pystructurizr" target="_blank">PyStructurizr</a>
      </div>
      <div :class="['toolingOption', ( checkedOpenSource || checkedDiagramming || checkedAsCode || checkedRenderingToolIndependent) ? 'faded' : '']">
      <!-- <div class="toolingOption toolingWithUI toolingModelBased toolingStaticDiagrams toolingDynamicDiagrams toolingDeploymentDiagrams"> -->
          <a href="http://www.sparxsystems.eu/c4/" target="_blank">Sparx Enterprise Architect</a>
      </div>
      <div :class="['toolingOption', ( checkedDiagramming || checkedWithUI || checkedDynamicDiagrams || checkedDeploymentDiagrams || checkedRenderingToolIndependent) ? 'faded' : '']">
      <!-- <div class="toolingOption toolingOpenSource toolingModelBased toolingAsCode toolingStaticDiagrams"> -->
          <a href="https://rdbmodel.github.io" target="_blank">RDB modeling</a>
      </div>
      <div :class="['toolingOption', ( checkedOpenSource || checkedDiagramming || checkedAsCode || checkedDynamicDiagrams || checkedDeploymentDiagrams || checkedRenderingToolIndependent) ? 'faded' : '']">
      <!-- <div class="toolingOption toolingModelBased toolingWithUI toolingStaticDiagrams"> -->
          <a href="https://revision.app/c4-model" target="_blank">Revision</a>
      </div>
      <div :class="['toolingOption', ( checkedDiagramming || checkedWithUI ) ? 'faded' : '']">
      <!-- <div class="toolingOption toolingOpenSource toolingModelBased toolingAsCode toolingRenderingToolIndependent toolingStaticDiagrams toolingDynamicDiagrams toolingDeploymentDiagrams"> -->
          <a href="https://structurizr.com" target="_blank">Structurizr</a>
      </div>
      <div :class="['toolingOption', ( checkedOpenSource || checkedModelBased || checkedAsCode || checkedRenderingToolIndependent) ? 'faded' : '']">
      <!-- <div class="toolingOption toolingWithUI toolingDiagramming toolingStaticDiagrams toolingDynamicDiagrams toolingDeploymentDiagrams"> -->
          <a href="https://online.visual-paradigm.com/diagrams/features/c4-model-tool/" target="_blank">Visual Paradigm</a>
      </div>
      <div :class="['toolingOption', ( checkedOpenSource || checkedModelBased || checkedAsCode || checkedRenderingToolIndependent) ? 'faded' : '']">
      <!-- <div class="toolingOption toolingWithUI toolingDiagramming toolingStaticDiagrams toolingDynamicDiagrams toolingDeploymentDiagrams"> -->
          <a href="https://github.com/Ferhat67/C4-yEd" target="_blank">yEd</a>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'


const checkedDynamicDiagrams = ref(false)
const checkedDeploymentDiagrams = ref(false)
const pickedDiagramVsModel = ref('model')
const pickedAuthoring = ref('asCode')
const checkedOpenSource = ref(false)
const checkedRenderingToolIndependent = ref(false)

const checkedModelBased = computed(() => pickedDiagramVsModel.value === 'model');
const checkedDiagramming = computed(() => pickedDiagramVsModel.value === 'diagram');
const checkedWithUI = computed(() => pickedAuthoring.value === 'withUI');
const checkedAsCode = computed(() => pickedAuthoring.value === 'asCode');
</script>

<style scoped>
.toolingOptionFilter {
    margin: 10px 20px 20px 10px;
    display: inline-block;
}
.toolingOption {
    font-size: 16px;
    display: inline-block;
    margin: 10px;
    border: solid 1px #1168BD;
    padding: 5px 10px 5px 10px;
    border-radius: 5px;
}
.toolingOption:hover {
    background: #1168BD;
    color: #ffffff;
}
.toolingOption:hover a {
    color: #ffffff;
}
.toolingOption a {
    text-decoration: none;
}
.toolingOption a:hover {
    background: #1168BD;
    color: #ffffff;
    text-decoration: none;
}
.centered {
    text-align: center;
}
.faded {
    opacity: 0.2;
}
.small {
    font-size: 13px;
}
.smaller {
    font-size: 11px;
}
</style>