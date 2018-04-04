<template>
  <v-app :dark="dark">

    <v-navigation-drawer persistent :clipped="clipped" v-model="rightDrawer" enable-resize-watcher fixed app right>
      <v-toolbar flat class="transparent">
        <v-list class="pa-0">
          <v-list-tile avatar>
            <v-list-tile-avatar>
              <img src='static/img/profile.png'>
            </v-list-tile-avatar>
            <v-list-tile-content>
              <v-list-tile-title>{{user.firstname}} {{user.lastname}}</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
          <v-divider></v-divider>
        </v-list>
      </v-toolbar>

      <v-list dense>
        <v-subheader>Toegankelijkheid</v-subheader>

        <v-list-tile>
          <v-list-tile-action>
            <v-icon>invert_colors</v-icon>
          </v-list-tile-action>
          <v-list-tile-title>Nachtmodus</v-list-tile-title>
          <v-list-tile-action>
            <v-switch v-model="dark" @click.stop="dark = !dark"></v-switch>
          </v-list-tile-action>
        </v-list-tile>

        <v-list-tile>
          <v-list-tile-action>
            <v-icon>view_compact</v-icon>
          </v-list-tile-action>
          <v-list-tile-title>Compacte sidebar</v-list-tile-title>
          <v-list-tile-action>
            <v-switch v-model="miniVariant" @click.stop="miniVariant = !miniVariant"></v-switch>
          </v-list-tile-action>
        </v-list-tile>

        <v-divider></v-divider>
        <v-subheader>Acties</v-subheader>

        <v-list-group prepend-icon="settings">
          <v-list-tile slot="activator">
            <v-list-tile-content>
              <v-list-tile-title>Instellingen</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
          <v-list-tile to="">
            <v-list-tile-content>
              <v-list-tile-title>
                PIN instellen
              </v-list-tile-title>
            </v-list-tile-content>
            <v-list-tile-action>
              <v-icon>fiber_pin</v-icon>
            </v-list-tile-action>
          </v-list-tile>
        </v-list-group>

        <v-list-tile to="">
          <v-list-tile-action>
            <v-icon>perm_identity</v-icon>
          </v-list-tile-action>
          <v-list-tile-title>Profiel</v-list-tile-title>
        </v-list-tile>

        <v-list-tile @click="">
          <v-list-tile-action>
            <v-icon>exit_to_app</v-icon>
          </v-list-tile-action>
          <v-list-tile-title>Afmelden</v-list-tile-title>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>

    <v-toolbar app :clipped-right="clipped" scroll-off-screen>
      <v-toolbar-side-icon class="hidden-lg-and-up" @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <!-- <v-toolbar-title v-text="title"></v-toolbar-title> -->

      <v-spacer></v-spacer>

   

      <v-btn icon @click.stop="rightDrawer = !rightDrawer">
        <v-icon>person</v-icon>
      </v-btn>
    </v-toolbar>

    <v-navigation-drawer :mini-variant="miniVariant" v-model="drawer" enable-resize-watcher fixed app>
      <v-list>

        <div v-show="!miniVariant" class="logo">
        </div>
        <v-list-tile to="/">

          <v-list-tile-action>
            <v-icon>dashboard</v-icon>
          </v-list-tile-action>

          <v-list-tile-title>Overzicht</v-list-tile-title>

        </v-list-tile>

         <v-list-tile :to="{ name: 'Skills'}">
          <v-list-tile-action>
            <v-icon>account_box</v-icon>
          </v-list-tile-action>
          <v-list-tile-title >Skills</v-list-tile-title>
        </v-list-tile>

      </v-list>
    </v-navigation-drawer>

    <v-content>
      <router-view/>
    </v-content>

  </v-app>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      clipped: true,
      drawer: true,
      dark: false,
      miniVariant: false,
      right: true,
      rightDrawer: false,
      notificationDrawer: false,
      user: {
        firstname: 'Michael',
        lastname: 'Awad'
      }
    }
  },
  computed: {
  },
  methods: {
  }
}
</script>

<style>
  body {
    font-family: 'Montserrat'
  }
  .logo {
    background: linear-gradient(135deg, #2DBED2 0%, #5087BE 25%, #914B96 85%);
    width: 100%;
    margin: -10px 0 0 0;
    padding: 0;
    height: 130px;
  }
  .logo > img {
    padding-top: 20px;
    display: block;
    margin-left: auto;
    margin-right: auto;
  }
</style>