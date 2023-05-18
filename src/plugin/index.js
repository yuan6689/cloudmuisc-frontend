import { Swipe, SwipeItem, Popup } from 'vant';

const plugins = [
  Swipe,
  SwipeItem,
  Popup
]
export default function autoRegister(app){
  plugins.forEach(item => app.use(item));
}