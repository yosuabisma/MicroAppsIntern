import MainPage from './components/MainPage.vue';
import AboutPage from './components/AboutPage.vue';
import PlayPage from './components/PlayPage.vue';
import GameOver from './components/GameOver.vue';
import Problems from './components/Problems.vue';
export default [
  {path: '/', component: MainPage},
  {path: '/about', component: AboutPage},
  {path: '/play', component: PlayPage},
  {path: '/game-over', component: GameOver},
  {path: '/problems', component: Problems}
]
