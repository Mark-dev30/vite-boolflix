<script>
import { store } from '../store'
export default {
  data() {
    return {
      name_title: "",
      store
    }
  },
  methods: {
    changeTitle() {
      let title = this.name_title.replace(/\s/g, '+')
      this.$emit('search', title)

    }
  }
}
</script>
<template lang="">
  <header>
    <div class="container-fluid">
      <div class="row">
        <div class="col-8 d-flex ">
          <div class="content d-flex">
            <div class="cont-img d-flex align-items-center">
              <img src="https://image.tmdb.org/t/p/w92/wwemzKWzjKYJFfCeiB57q3r4Bcm.png" alt="">
            </div>
            <div class="list-menu d-flex align-items-center">
              <ul class="d-flex justify-content-between mb-0">
                <li v-for="item in store.listMenu"><a href="#">{{item}}</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div class="col-4 d-flex align-items-center">
          <ul class="d-flex justify-content-between mb-0 ps-0">
            <li>
              <div class="input-group">
                <input type="text" class="form-control" placeholder="Inserisci il titolo" aria-label="Recipient's username" aria-describedby="button-addon2" v-model="name_title" @keyup.enter="changeTitle">
                <button class="btn btn-outline-secondary" type="button" id="button-addon2" @click="changeTitle"><i class="fa-solid fa-magnifying-glass"></i></button>
              </div>
            </li>
            <li class="d-flex align-items-center">BAMBINI</li>
            <li class="d-flex align-items-center"><a href="#"><i class="fa-solid fa-bell"></i></a></li>
            <li class="d-flex align-items-center"><a href="#"><i class="fa-solid fa-user"></i></a></li>
          </ul>
        </div>
      </div>
    </div>
  </header>
</template>
<style lang="scss" scoped>
@use '../styles/partials/variables' as *;

.row {
  width: 100%;
  height: 100%;
  margin: 0 auto;
}

.container-fluid {
  background-color: $color_black;
  width: 100%;
  height: 70px;
}

.content {
  width: 70%;
}

.list-menu {
  width: 100%;

  ul {
    width: 100%;
  }
}

ul {
  width: 100%;
}

li {
  list-style: none;
  color: white;

  a {
    text-decoration: none;
    color: white;
  }
}

.col-2 {
  ul {
    height: 100%;
  }
}
</style>