<template>
  <ul class="mt-3">
    <li>
      <router-link to="/login">Login</router-link>
    </li>
    <li>
      <router-link to="/ios-app">Download IOS App</router-link>
    </li>
    <li>
      <router-link to="/android-app">Download Android App</router-link>
    </li>
  </ul>
</template>

<script>
export default {
  name: "NavItems"
};
</script>
