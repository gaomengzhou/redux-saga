import One from "../page/item/One";
import Three from "../page/item/Three";
import Two from "../page/item/Two";

const routes = [
  { path: "/", component: One, exact: true },
  { path: "/two", component: Two, exact: true },
  { path: "/three", component: Three, exact: true },
];

export default routes;
