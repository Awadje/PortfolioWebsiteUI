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
import axios from 'axios'

export default {
  name: 'App',
  data () {
    return {
      skills: [],
      id: '',
      errors: []
    }
  },
  mounted () {
    const AuthStr = `Bearer ${localStorage.getItem('token')}`
    console.log(AuthStr)
    axios.get(`http://localhost:3005/v1/account/me`, { headers: { Authorization: AuthStr } })
      .then(response => {
        // JSON responses are automatically parsed.
        this.id = response.data.id
        console.log(this.id)
      })
      .catch(e => {
        this.errors.push(e)
      })
    this.getSkillList()
  },
  methods: {
    getSkillList () {
      axios.get(`http://localhost:3005/v1/skill`)
        .then(response => {
          // JSON responses are automatically parsed.
          this.skills = response.data
        })
        .catch(e => {
          this.errors.push(e)
        })
    }
  }
}
</script>




