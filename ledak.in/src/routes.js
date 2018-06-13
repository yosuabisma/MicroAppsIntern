import MainPage from './components/MainPage.vue';
import AboutPage from './components/AboutPage.vue';
import PlayPage from './components/PlayPage.vue';
import GameOver from './components/GameOver.vue';
import Game4 from './components/Game4.vue';
export default [
  {path: '/', component: MainPage},
  {path: '/about', component: AboutPage},
  {path: '/play', component: PlayPage},
  {path: '/game-4', component: Game4},
  {path: '/game-over', component: GameOver}
]
