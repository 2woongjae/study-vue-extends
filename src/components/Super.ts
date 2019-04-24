import { Vue, Component } from "vue-property-decorator";

@Component
export default class Super extends Vue {
  created() {
    console.log("Super created");
  }

  click() {
    console.log("Super click");
  }
}
