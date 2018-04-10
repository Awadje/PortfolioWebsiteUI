<template>
  <v-container fluid>
    <v-layout align-center justify-center>
      <v-flex xs12 sm8 md4>
        <v-card class="elevation-12">
          <v-toolbar dark color="primary">
            <v-toolbar-title>Login</v-toolbar-title>
            <v-spacer></v-spacer>
          </v-toolbar>
          <v-card-text>
            <v-form>
              <v-text-field prepend-icon="person" v-model="email" label="Login" type="email"></v-text-field>
              <v-text-field prepend-icon="lock" v-model="password" label="Password" id="password" type="password"></v-text-field>
            </v-form>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="primary" v-on:click="login">Login</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import axios from 'axios'

export default {
  name: 'Login',
  data () {
    return {
      email: '',
      password: ''
    }
  },
  computed: {
  },
  mounted () {

  },
  methods: {
    login () {
      axios.post(`http://localhost:3005/v1/account/login`, { email: this.email, password: this.password }).then(response => {
        console.log(response.data.token)
        localStorage.setItem('token', response.data.token)
      }).catch(({response}) => {
        console.log(response)
      })
    }
  }
}
</script>

<style>

</style>