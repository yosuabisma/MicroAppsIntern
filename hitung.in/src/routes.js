import MainPage from './components/MainPage.vue';
import AboutPage from './components/AboutPage.vue';
import PlayPage from './components/PlayPage.vue';
import GameOver from './components/GameOver.vue';
import Game4 from './components/Game4.vue';
import Game5 from './components/Game5.vue';
import Game6 from './components/Game6.vue';
import Game7 from './components/Game7.vue';
import Game8 from './components/Game8.vue';
import TruthOrDarePage from './components/TruthOrDarePage.vue';
export default [
  {path: '/', component: MainPage},
  {path: '/about', component: AboutPage},
  {path: '/play', component: PlayPage},
  {path: '/game-4', component: Game4},
  {path: '/game-5', component: Game5},
  {path: '/game-6', component: Game6},
  {path: '/game-7', component: Game7},
  {path: '/game-8', component: Game8},
  {path: '/game-over', component: GameOver},
  {path: '/truth-or-dare', component: TruthOrDarePage}
]
