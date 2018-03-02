<template>
  <div class="search-container">
    <h1>Onur Sahin Senturk</h1>
    <p class="legal">Copyright © 2018 - All Rights Reserved<p>
    <input v-model="keyword" placeholder="What do you need?" spellcheck="false"/>
    <div class="skills">
      <div class="skill" v-for="skill in filterSkills">
        <img class="skill-image" :src="skill.image">
        <p class="skill-title">{{skill.title}}</p>
        <div class="skill-rate">
          <div class="percantage">{{skill.rate}}</div>
          <div class="upgrade"><a href="https://www.linkedin.com/in/onur-%C5%9Fahin-%C5%9Fent%C3%BCrk-711a16a4/" target="_blank">⇪</a></div>
          <div class="progress" :style="progress(skill.rate)"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SearchBar',
  methods: {
    progress (percantage) {
      return {
        width: percantage
      }
    }
  },
  data () {
    return {
      keyword: '',
      header: 'Kaze',
      skills: [
        new Skill(
          'Vue.js',
          '30%',
          'https://vuejs.org/images/logo.png'
        ),
        new Skill(
          'Unity 3D',
          '80%',
          'https://www.gfxmag.com/wp-content/uploads/2016/07/unity-icon-vector-logo.png'
        ),
        new Skill(
          'HTML5',
          '90%',
          'https://cdn0.iconfinder.com/data/icons/HTML5/512/HTML_Logo.png'
        ),
        new Skill(
          'CSS3',
          '90%',
          'http://www.logotypes101.com/free_vector_logo_png/93480/830812341256B99B32E1A9F242BB9F5F/CSS3'
        ),
        new Skill(
          'JavaScript',
          '75%',
          'https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png'
        ),
        new Skill(
          'Node.js',
          '80%',
          'https://glenneggleton.com/files/2016-02/nodejs-logo.png'
        ),
        new Skill(
          'C#',
          '45%',
          'https://ih1.redbubble.net/image.416412087.0587/flat,800x800,070,f.jpg'
        ),
        new Skill(
          'React',
          '20%',
          'https://arcweb.co/wp-content/uploads/2016/10/react-logo-1000-transparent.png'
        ),
        new Skill(
          'jQuery',
          '100%',
          'https://wepushbuttons.com.au/wp-content/uploads/2012/10/jquery-logo.jpg'
        ),
        new Skill(
          'Unreal Engine 4',
          '80%',
          'https://www.epicgames.com/unrealtournament/forums/filedata/fetch?id=352914'
        )
      ]
    }
  },
  computed: {
    filterSkills () {
      return this.skills.filter((skill) => {
        return skill.title.toLowerCase().includes(this.keyword.toLowerCase())
      })
    }
  }
}

class Skill {
  constructor (title, rate, image) {
    this.title = title
    this.rate = rate
    this.image = image
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.search-container {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.search-container input {
  display: flex;
  width: 200px;
  text-align: center;
  padding: 10px;
  border: none;
  outline: none;
  transition: all .5s ease;
}

.search-container input:focus {
  border-radius: 5px;
  background: #eeeeee;
}

h1 {
  font-weight: lighter;
  margin-bottom: 0px;
}

.legal {
  font-size: 10px;
  margin: 0px;
  font-weight: lighter;
}

.skills {
  display: flex;
  flex-direction: row;
  width: 90%;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: center;
  margin-top: 20px;
}

.skill {
  display: flex;
  flex: 1;
  max-width: 200px;
  height: auto;
  flex-direction: column;
  padding: 10px;
  margin: 10px;
  border: 1px #eeeeee solid;
  border-radius: 5px;
}

.skill img {
  width: 200px;
  height: 200px;
}

.skill-rate {
  display: flex;
  position: relative;
  flex: 1;
  align-items: center;
  vertical-align: center;
  height: 30px;
  border-radius: 5px;
  font-weight: lighter;
  overflow: hidden;
  border: 1px #eeeeee solid;
  user-select: none;
}

.percantage {
  position: absolute;
  width: 100%;
  text-align: center;
  transition: all .5s ease;
}

.skill-rate:hover .percantage::before {
  content: "Progress ";
}

.progress {
  height: 100%;
  background: #eeeeee;
}

.upgrade {
  position: absolute;
  right: 10px;
  transition: all .5s ease;
  font-weight: bolder;
  opacity: 0;
  pointer-events: none;
}

.upgrade a {
  text-decoration: none;
  color: #41b883;
}

.skill-rate:hover .upgrade {
  opacity: 1;
  pointer-events: all;
}
</style>
