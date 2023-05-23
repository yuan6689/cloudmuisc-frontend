import { Swipe, SwipeItem, Popup, ConfigProvider } from 'vant';

const plugins = [
  Swipe,
  SwipeItem,
  Popup,
  ConfigProvider
]
export default function autoRegister(app){
  plugins.forEach(item => app.use(item));
}