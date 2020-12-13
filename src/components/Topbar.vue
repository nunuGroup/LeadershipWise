<template>
  <div class="topbar-container-inner">
    <div class="title">
        <h1><strong>Welcome Back,</strong> Tenia</h1>
    </div>
    <div class="topbar-right">
        <div class="right-action chat-button"></div>
        <div class="right-action settings-button"></div>
        <span>|</span>
        <div class="profile-action">
            <div class="profile-icon"></div>
            <h4>Tenia Davis</h4>
            <div class="dropdown"></div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
    name: 'Topbar',
    data() {
        return {

        }
    },
    created() {

    },
    mounted() {

    },
    computed: {

    },
    methods: {

    }
}
</script>

<style lang="scss" scoped>
@import '../assets/styles/global';

$topbarHeight: 80px;

.topbar-container-inner {
    display: flex;
    align-items: center;
    justify-content: space-between;   
    margin-top: 8px;
}

.title {
    margin-left: 436px;
    font-size: 12px;
    color: $colorMain;
    cursor: default;
    
    h1 {
        font-weight: normal;
    }
}

.topbar-right {
    display: flex;
    align-items: center;
    height: $topbarHeight;

    .profile-action {
        display: flex;
        align-items: center;
        cursor: pointer;

        &:hover {
            .profile-icon {
                transform: scale(0.8);
            }

            //opacity: 0.6;
        }

        .dropdown {
            background-image: url('../assets/icons/dropdown.svg');
            background-position: center;
            background-size: contain;
            background-repeat: no-repeat;
            height: 24px;
            width: 24px;
            margin-right: 24px;
            margin-left: 6px;
            opacity: 1;
        }

        h4 {
            line-height: 0px;
            font-weight: normal;
        }

        .profile-icon {
            //background: white;
            width: 36px;
            height: 36px;
            border-radius: 100%;
            margin-right: 12px;
        }
    }

    .right-action {
        margin-right: 12px;
        background-size: contain;
        background-position: center;
        background-repeat: no-repeat;
    }

    span {
        margin-right: 12px;
        opacity: 0.1;
        line-height: 36px;
        font-size: 24px;
        cursor: default;
    }
}

.right-action {
    height: 36px;
    width: 36px;
    background: white;
    border-radius: 100%;
    cursor: pointer;
    transition: 200ms;

    &:hover {
        transform: scale(0.8);
    }
}

.chat-button {
    background-image: url('../assets/icons/chat.svg');
}

.settings-button {
    background-image: url('../assets/icons/settings.svg');
}

.profile-icon {
    background-image: url('../assets/icons/profile.svg');
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
    cursor: pointer;
    transition: 200ms;
}

</style>