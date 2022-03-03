<template>
  <div>
    <section class="upper-header">
      <div class="header-container">
        <nuxt-link to="/" class="upper-header__logo-link">
          <h1 class="upper-header__logo">Volunteers Organizer</h1>
        </nuxt-link>
        <div class="icons-container">
          <button class="upper-header__login">Login</button>
          <button class="upper-header__register">Register</button>
          <button class="upper-header__button">
            <img
              src="~/assets/img/icons/settings.svg"
              alt
              class="upper-header__settings-icon"
            />
          </button>
          <button class="upper-header__button">
            <img
              src="~/assets/img/icons/logout.svg"
              alt
              class="settings-icon"
            />
          </button>
        </div>
      </div>
    </section>
    <section class="bottom-header">
      <div class="header-container">
        <div class="icons-container">
          <img
            class="settings-icon user-icon"
            src="~/assets/img/icons/users.svg"
            alt
          />
          <p class="bottom-header__number">68</p>
          <p class="bottom-header__volunteers">volunteers</p>
        </div>
        <div class="icons-container">
          <nuxt-link to="/" class="all-icon icon">All</nuxt-link>
          <nuxt-link
            v-for="section in sections"
            :key="section.name"
            :to="'/' + section.name"
            :style="{ backgroundColor: section.color }"
            :class="['icon', `${section.name}-icon`]"
          >
            <img
              :src="require(`../assets/img/icons/${section.name}.svg`)"
              alt
              class="settings-icon"
            />
          </nuxt-link>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  setup() {
    const sections = [
      {
        name: "social",
        color: "#f2cdcd",
      },
      {
        name: "waitress",
        color: "#f2b59e",
      },
      {
        name: "kitchen",
        color: "#f2dab4",
      },
      {
        name: "logistics",
        color: "#cde6ef",
      },
      {
        name: "cleaning",
        color: "#f0eeae",
      },
    ];

    return {
      sections,
    };
  },
};
</script>

<style lang="scss" scoped>
.upper-header {
  height: 40px;
  background-color: #ededed;

  &__logo-link {
    text-decoration: none;
  }

  &__logo {
    color: #000;
    font-size: 18px;
    font-weight: bold;
    margin: 0;
  }
  &__login {
    margin-right: 40px;
    font-size: 14px;
    font-weight: 600;
    outline: none;
  }
  &__register {
    font-weight: 600;
    outline: none;
  }
  &__button {
    outline: none;
  }
}
.header-container {
  max-width: 1200px;
  height: 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  margin: 0 auto;
}
.icons-container {
  display: flex;
  align-items: center;
}
.settings-icon {
  display: block;
  width: 20px;
  height: 20px;
  margin: 0 5px;
}

.bottom-header {
  height: 40px;
  background-color: #ccd4d5;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  &__number {
    font-weight: 600;
    font-size: 16px;
    margin-left: 10px;
  }
  &__volunteers {
    margin-left: 10px;
  }
  .icon {
    border-radius: 10px;
    height: 30px;
    width: 30px;
    margin: 0 5px;
  }
  .all-icon {
    background-color: #ccd4d5;
    line-height: 30px;
    color: #000;
    text-decoration: none;
    padding-left: 6px;
    font-weight: bold;
  }
  .social-icon {
    background-color: #f2cdcd;
    img {
      margin-top: 5px;
    }
  }
  .kitchen-icon {
    background-color: #f2dab4;
    img {
      margin-top: 4px;
      padding: 1px;
    }
  }
  .waitress-icon {
    background-color: #f2b59e;
    img {
      margin-top: 4px;
      padding: 2px;
    }
  }
  .logistics-icon {
    background-color: #cde6ef;
    img {
      margin-top: 4px;
      padding: 1px;
    }
  }
  .cleaning-icon {
    background-color: #f0eeae;
    img {
      margin-top: 4px;
      padding: 1px;
    }
  }
  .username {
    margin-right: 30px;
  }
}
</style>
