<template>
  <div class="section-page">
    <h1>All Volunteers</h1>
    <button class="button button__plus">
      <img src="~/assets/img/icons/plus.svg" alt class="button__icon" />
    </button>
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
          <td>
            <button class="button">
              <img src="~/assets/img/icons/pen.svg" alt class="button__icon" />
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from "@nuxtjs/composition-api";
import CONFIG from "@/api/baseConfig";
import axios from "axios";
import Volunteer from "@/types/Volunteer";
import { useStore } from "../store";
import { DateTime } from "luxon";

export default defineComponent({
  setup() {
    const volunteers = useStore().state.volunteers;
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
  position: relative;
  max-width: 1000px;
  margin: 0 auto;
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
.button {
  border: none;
  padding: 5px;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  cursor: pointer;
  background-color: #afded9;
  &__icon {
    max-width: 15px;
  }
  &__plus {
    position: absolute;
    right: 20px;
    top: 40px;
    padding: 10px 8px 8px;
    background-color: #e8d1f3;
    width: 39px;
    height: 39px;
  }
}
</style>
