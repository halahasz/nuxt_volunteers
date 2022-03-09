import { readonly, reactive } from "@nuxtjs/composition-api";
import Volunteer from "@/types/Volunteer";
import axios from "axios";
import CONFIG from "@/api/baseConfig";

interface State {
  volunteers: Volunteer[];
}

class Store {
  private state: State;

  constructor(initial: State) {
    this.state = reactive(initial);
  }

  getState() {
    return readonly(this.state);
  }

  // async createVolunteer(volunteer: Volunteer) {
  //   const response = await axios.post<Volunteer>(CONFIG.BASE_URL);
  //   console.log(response);
  // }
  async fetchVolunteers() {
    const response = await axios.get<Volunteer[]>(CONFIG.BASE_URL);
    const volunteersState: Volunteer[] = [];

    for (const volunteer in response.data) {
      volunteersState.push(response.data[volunteer]);
    }
    this.state.volunteers = volunteersState;
  }
}

const store = new Store({
  volunteers: [],
});

store.fetchVolunteers();

export function useStore() {
  return {
    store,
  };
}
