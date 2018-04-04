<template>
        <v-container fluid grid-list-md>
          <v-layout row wrap>
            <v-flex
              v-bind="{ [`xs${skill.flex}`]: true }"
              v-for="skill in skills"
              :key="skill.name"
            >
              <v-card>
                <v-card-media
                  :src="skill.src"
                  height="200px"
                >
                  <v-container fill-height fluid>
                    <v-layout fill-height>
                      <v-flex xs12 align-end flexbox>
                        <span class="headline white--text" v-text="skill.name"/>
                      </v-flex>
                    </v-layout>
                  </v-container>
                </v-card-media>
                <v-card-title>
                  <div>
                    <span class="grey--text">Coolness: {{ skill.coolness}}</span><br>
                    <span>Skill Level: {{ skill.skillLevel }} </span>
                  </div>
                </v-card-title>
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn icon>
                    <v-icon>favorite</v-icon>
                  </v-btn>
                  <v-btn icon>
                    <v-icon>bookmark</v-icon>
                  </v-btn>
                  <v-btn icon>
                    <v-icon>share</v-icon>
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-flex>
          </v-layout>
        </v-container>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      skills: [{
        name: 'NodeJS',
        coolness: 5,
        skillLevel: 5,
        src: '/static/img/NodeLogo.png',
        flex: 6
      },
      {
        name: 'VueJS',
        coolness: 5,
        skillLevel: 4,
        src: '/static/img/VueLogo.jpeg',
        flex: 6
      }
      ]
    }
  },
  computed: {
  },
  methods: {
  }
}
</script>