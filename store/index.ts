import { readonly, reactive } from "@nuxtjs/composition-api";
import Volunteer from "@/types/Volunteer";
import axios from "axios";
import CONFIG from "@/api/baseConfig";

interface State {
  volunteers: Volunteer[];
}

class Store {
  state: State;

  constructor(initial: State) {
    this.state = reactive(initial);
  }

  getState() {
    return readonly(this.state);
  }

  async fetchVolunteers() {
    const response = await axios.get<Volunteer[]>(CONFIG.BASE_URL);
    const volunteersState: Volunteer[] = [];

    for (const volunteer of response.data) {
      volunteersState.push(volunteer);
    }

    this.state.volunteers = volunteersState;
  }
}

const store = new Store({
  volunteers: [],
});

export function useStore() {
  return store;
}
