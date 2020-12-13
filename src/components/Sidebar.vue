<template>
  <div class="sidebar-container">
    <div class="top-container">
        <div class="top-logo"><div class="logo-icon"></div></div>
        <ul>
            <router-link to="/"><li class="sidebar-item"><div class="sidebar-icon icon1"></div>Home</li></router-link>
            <router-link to="/learning_timeline"><li class="sidebar-item"><div class="sidebar-icon icon2"></div>Learning Timeline</li></router-link>
            <router-link to="/performance_analysis"><li class="sidebar-item"><div class="sidebar-icon icon3"></div>Performance Analysis</li></router-link>
            <router-link to="/monthly_stats"><li class="sidebar-item"><div class="sidebar-icon icon4"></div>Monthly Stats</li></router-link>
            <router-link to="/team_organization"><li class="sidebar-item"><div class="sidebar-icon icon5"></div>Team Organization</li></router-link>
            <router-link to="/results"><li class="sidebar-item"><div class="sidebar-icon icon6"></div>Results</li></router-link>
            <router-link to="/employee_analysis"><li class="sidebar-item"><div class="sidebar-icon icon7"></div>Employee Analysis</li></router-link>
        </ul>
    </div>
    <div class="primary-action">Primary Button</div>
  </div>
</template>

<script>
export default {
    name: 'Sidebar',
    data() {
        return {

        }
    },
    computed: {

    },
    created() {

    },
    mounted() {

    },
    methods: {

    }

}
</script>

<style lang="scss" scoped>
@import '../assets/styles/global';

.primary-action {
    background: $colorMain;
    height: 60px;
    width: 90%;
    color: white;
    border-radius: 80px;
    line-height: 60px;
    text-align: center;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 18px;
    cursor: pointer;
    transition: 200ms;

    &:hover {
        background: rgba($colorMain,0.1);
        color: $colorMain;
        font-weight: bold;
    }
}

.sidebar-container {
    background: white;
    //position: absolute;
    left: 0px;
    height: 100vh;
    width: 400px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    .router-link-active {
        li {
            opacity: 1;
            color: $colorMain;
        }

        .sidebar-item {
            background: rgba($colorMain, 0.1) !important;
            font-weight: bold;
        }

        .sidebar-icon {
            filter: brightness(1) !important;
            opacity: 1 !important;
        }
    }

    .top-logo {
        height: 72px;
        width: 400px;
    }

    .top-logo {
        height: 72px;
        line-height: 72px;
        display: flex;
        align-items: center;
        margin-top: 12px;

        .logo-icon {
            background-image: url("../assets/logos/logo-full2.svg");
            background-size: cover;
            background-position: center;
            background-repeat: no-repeat;
            height: 32px;
            width: 183px;
            margin-right: 24px;
            margin-left: 32px;
        }
    }

    ul {
        margin: 0px;
        padding: 0px;
    }

    li {
        opacity: 0.3;
    }

    a {
        text-decoration: none;
        color: black;
    }

    .sidebar-item {
        height: 72px;
        width: 80%;
        line-height: 72px;
        padding-left: 36px;
        display: flex;
        align-items: center;
        border-radius: 0px 80px 80px 0px;
        transition: 200ms;

        .sidebar-icon {
            height: 24px;
            width: 24px;
            margin-right: 24px;
            background-size: contain;
            background-position: center;
            background-repeat: no-repeat;
            opacity: 0.7;
            filter: brightness(0);
            transition: 200ms;
        }

        &:hover {
            background: rgba($colorMain, 0.1);

            & {
                opacity: 1 !important;
            }

            li {
                opacity: 1 !important;
            }

            .sidebar-icon {
                opacity: 1 !important;
            }
        }
    }

    .icon1 {
        background-image: url('../assets/icons/home.svg');
    }

    .icon2 {
        background-image: url('../assets/icons/learning_timeline.svg');
    }

    .icon3 {
        background-image: url('../assets/icons/performance_analysis.svg');
    }

    .icon4 {
        background-image: url('../assets/icons/monthly_stats.svg');
    }

    .icon5 {
        background-image: url('../assets/icons/team_organization.svg');
    }

    .icon6 {
        background-image: url('../assets/icons/results.svg');
    }

    .icon7 {
        background-image: url('../assets/icons/employee_analysis.svg');
    }
}

</style>