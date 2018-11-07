import store from "../js/store/index";
import { addArticle } from "../js/actions/index";
window.store = store;
window.addArticle = addArticle;
console.log(store.getState());
store.subscribe(() => console.log("subscribe me"));
store.dispatch(
  addArticle({
    name: "mon article",
    id: 1
  })
);

console.log(store.getState());
