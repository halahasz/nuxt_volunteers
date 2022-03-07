<template>
<table>
  <thead>
    <th>
      <td v-for="header in headers" :key="header.value">
        {{header.value}}
      </td>
    </th>
  </thead>
</table>

</template>

<script lang="ts">
import { defineComponent, reactive } from "@nuxtjs/composition-api";
import CONFIG from "@/api/baseConfig";
import axios from "axios";

export default defineComponent({
  setup() {
    let volunteers = reactive<any[]>([]); 
    const headers = [
      { text: "Thumbnail", value: "thumbnail" },
      { text: "Name", value: "name" },
      { text: "Age", value: "age" },
      { text: "E-mail", value: "email" },
      { text: "Joining date", value: "date" },
      { text: "Section", value: "section" },
      { text: "", value: "actions", sortable: false },
    ];

    const fetchVolunteers = async () =>  {
      try {
         await axios.get(CONFIG.BASE_URL).then((result) => {
          for (const key in result.data) {
            volunteers.push({ ...result.data[key], id: key });
          }
        });
      } catch(err) {
        console.log(err)
      }
    };
    fetchVolunteers();
    return {  headers, volunteers };
  },
});
</script>
