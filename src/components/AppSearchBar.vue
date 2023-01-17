<script>
export default {
    data() {
        return {
            name_title: "",
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
    <div class="container">
        <div class="row">
            <div class="col-12">
                <div class="content-input">
                    <input type="text" placeholder="Inserisci il titolo" v-model="name_title" @keyup.enter="changeTitle" >
                    <button class="btn btn-primary ms-2" @click="changeTitle">Inserisci</button>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss">

</style>