<template>
<div id="nav">
    <ul>
        <router-link v-for="(i, index) in paths" :key="index" :to="i">
            <li class="nav-item">{{ titles[index] }}</li>
        </router-link>
    </ul>
</div>
</template>

<script>
export default {
    name: 'Navbar',
    props: {
        paths: Array,
        titles: Array
    },
    created() {
        console.log('navbar created');
    },
    mounted() {
        console.log('navbar mounted');
    }
}
</script>

<style lang="scss" scoped>
@import '../assets/styles/_global';

#nav {
    background: $colorMain;
    //box-shadow: $shadow;
    height: $navHeight;
    width: 100%;
    justify-content: center;
    align-items: center;
    line-height: $navHeight;
    text-align: center;
    z-index: 6;
    border-bottom: 1px solid $colorLightGray;

    ul {
        text-decoration: none;
        list-style: none;
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 0px;
        padding: 0px;

        li.nav-item {
            cursor: pointer;
            font-weight: normal;
            padding-left: $nudge;
            padding-right: $nudge;
            height: $navHeight;
            transition: $quick;

            &:hover {
                background: $colorLightGray;
            }
        }
    }

    a {
        height: $navHeight;
        text-decoration: none;
        color: black;

    }

    a.router-link-exact-active {
        font-weight: bold;
        
        li {
            border-bottom: 1px solid black;
        }
    }
}

</style>