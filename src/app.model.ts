import { ViewModel } from "debrix";

export default class AppViewModel extends ViewModel {
  count = 0;

  increment() {
    this.count++;
  }

  // Removing this causes a type-error. Fix in next version of debrix.
  dispose() {}
}
