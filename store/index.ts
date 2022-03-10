import axios from "axios";
import CONFIG from "@/api/baseConfig";
import Volunteer from "~/types/Volunteer";
import { reactive } from "@nuxtjs/composition-api";

export default function useStore() {
  const volunteers = reactive<Volunteer[]>([]);
  const fetchVolunteers = async () => {
    try {
      await axios.get(CONFIG.BASE_URL).then((result) => {
        for (const key in result.data) {
          volunteers.push({ ...result.data[key], id: key });
        }
        return volunteers;
      });
    } catch (err) {
      console.log(err);
    }
  };

  return {
    fetchVolunteers,
    volunteers,
  };
}
