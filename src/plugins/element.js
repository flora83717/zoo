import Vue from "vue";
import { Button, Row, Col, Card, Carousel, CarouselItem } from "element-ui";
import lang from "element-ui/lib/locale/lang/zh-TW";
import locale from "element-ui/lib/locale";

locale.use(lang);

Vue.use(Button);
Vue.use(Row);
Vue.use(Col);
Vue.use(Card);
Vue.use(Carousel);
Vue.use(CarouselItem);
