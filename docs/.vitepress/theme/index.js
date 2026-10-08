import DefaultTheme from 'vitepress/theme'
import AutoResearchLab from './components/AutoResearchLab.vue'
import BenchmarkBoard from './components/BenchmarkBoard.vue'
import CompanySeries from './components/CompanySeries.vue'
import DatasetCatalog from './components/DatasetCatalog.vue'
import DotField from './components/DotField.vue'
import EcosystemGraph from './components/EcosystemGraph.vue'
import EcosystemJobMap from './components/EcosystemJobMap.vue'
import EcosystemMap from './components/EcosystemMap.vue'
import FirstVisitGuide from './components/FirstVisitGuide.vue'
import GridDistortion from './components/GridDistortion.vue'
import HeroModel from './components/HeroModel.vue'
import HomeExploreHud from './components/HomeExploreHud.vue'
import HomePagePanel from './components/HomePagePanel.vue'
import HomePager from './components/HomePager.vue'
import KnowledgeGraphHub from './components/KnowledgeGraphHub.vue'
import LineageMap from './components/LineageMap.vue'
import LoadingScreen from './components/LoadingScreen.vue'
import NewsFooter from './components/NewsFooter.vue'
import NewsIndex from './components/NewsIndex.vue'
import OfflineKnowledgeGraph from './components/OfflineKnowledgeGraph.vue'
import PaperKnowledgeGraph from './components/PaperKnowledgeGraph.vue'
import RoadmapGraph from './components/RoadmapGraph.vue'
import ShuffleText from './components/ShuffleText.vue'
import ThemeToggle from './components/ThemeToggle.vue'
import XhsAccounts from './components/XhsAccounts.vue'
import XhsBoard from './components/XhsBoard.vue'

export default {
    extends: DefaultTheme,
    enhanceApp({ app }) {
        app.component('AutoResearchLab', AutoResearchLab)
        app.component('BenchmarkBoard', BenchmarkBoard)
        app.component('CompanySeries', CompanySeries)
        app.component('DatasetCatalog', DatasetCatalog)
        app.component('DotField', DotField)
        app.component('EcosystemGraph', EcosystemGraph)
        app.component('EcosystemJobMap', EcosystemJobMap)
        app.component('EcosystemMap', EcosystemMap)
        app.component('FirstVisitGuide', FirstVisitGuide)
        app.component('GridDistortion', GridDistortion)
        app.component('HeroModel', HeroModel)
        app.component('HomeExploreHud', HomeExploreHud)
        app.component('HomePagePanel', HomePagePanel)
        app.component('HomePager', HomePager)
        app.component('KnowledgeGraphHub', KnowledgeGraphHub)
        app.component('LineageMap', LineageMap)
        app.component('LoadingScreen', LoadingScreen)
        app.component('NewsFooter', NewsFooter)
        app.component('NewsIndex', NewsIndex)
        app.component('OfflineKnowledgeGraph', OfflineKnowledgeGraph)
        app.component('PaperKnowledgeGraph', PaperKnowledgeGraph)
        app.component('RoadmapGraph', RoadmapGraph)
        app.component('ShuffleText', ShuffleText)
        app.component('ThemeToggle', ThemeToggle)
        app.component('XhsAccounts', XhsAccounts)
        app.component('XhsBoard', XhsBoard)
    }
}