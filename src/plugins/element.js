import Vue from "vue";
import {
  Button,
  Row,
  // Container,
  Col,
  Card,
  Carousel,
  CarouselItem,
  InputNumber,
  Badge,
  Input,
  // Header,
  // Footer,
  // Main
} from "element-ui";
import lang from "element-ui/lib/locale/lang/zh-TW";
import locale from "element-ui/lib/locale";

locale.use(lang);

Vue.use(Button);
Vue.use(Row);
Vue.use(Col);
Vue.use(Card);
Vue.use(Carousel);
Vue.use(CarouselItem);
Vue.use(InputNumber);
Vue.use(Badge);
Vue.use(Input);
// Vue.use(Container);
// Vue.use(Header);
// Vue.use(Footer);
// Vue.use(Main);
