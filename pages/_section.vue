<template>
  <div class="section-page">
    <h1>All Volunteers</h1>
    <table class="table">
      <thead>
        <tr>
          <th v-for="header in headers" :key="header">
            {{ header }}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="volunteer in volunteers"
          :key="volunteer.name"
          :class="volunteer.section"
        >
          <td>{{ volunteer.photo }}</td>
          <td>{{ volunteer.name }}</td>
          <td>{{ volunteer.email }}</td>
          <td>{{ volunteer.date }}</td>
          <td>{{ volunteer.section }}</td>
          <td>action</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from "@nuxtjs/composition-api";
import CONFIG from "@/api/baseConfig";
import axios from "axios";

export default defineComponent({
  setup() {
    interface Volunteer {
      age: string;
      date: string;
      email: string;
      name: string;
      photo: string;
      section: string;
    }
    const volunteers = reactive<Volunteer[]>([]);
    const headers = [
      "Photo",
      "Name",
      "E-mail",
      "Joining date",
      "Section",
      "Actions",
    ];

    const fetchVolunteers = async () => {
      try {
        await axios.get(CONFIG.BASE_URL).then((result) => {
          for (const key in result.data) {
            volunteers.push({ ...result.data[key], id: key });
          }
        });
      } catch (err) {
        console.log(err);
      }
    };
    fetchVolunteers();
    return { headers, volunteers };
  },
});
</script>

<style lang="scss" scoped>
h1 {
  padding: 40px 20px 20px;
  margin: 0;
  font-size: 25px;
  font-weight: bold;
}
.section-page {
  text-align: center;
}
.table {
  max-width: 1000px;
  width: 100%;
  padding: 20px;
  margin: 0 auto;
  border-spacing: 0 4px;
  tr {
    td {
      position: relative;
      font-size: 15px;
      &:before {
        position: absolute;
        content: "";
        height: 70%;
        width: 4px;
        right: 0;
        top: 15%;
      }
      &:last-child:before {
        display: none;
      }
    }
    &.social td:before {
      background: #f2cdcd;
    }
    &.waitress td:before {
      background: #f2b59e;
    }
    &.kitchen td:before {
      background: #f2dab4;
    }
    &.logistics td:before {
      background: #cde6ef;
    }
    &.cleaning td:before {
      background: #f0eeae;
    }
  }
  th {
    color: #5f5f5f;
    font-weight: normal;
    padding: 20px 15px;
  }
  td {
    padding: 20px 15px;
    background: #fff;
  }
}
</style>
