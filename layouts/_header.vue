<script>
    export default {

    };
</script>

<template>
    <header class="header header--white">
        <div class="header__container u-container u-container--large">
            <nuxt-link class="header__logo" to="/">
                <img class="header__logo-image" :src="`${BASE_URL_PREFIX}/img/minter-logo-circle.svg`" alt="Minter" width="36" height="36">
                <div class="header__logo-text">HUB demo</div>
            </nuxt-link>

            <div class="header__controls">
                <!--<nuxt-link to="/auth" class="header__controls-link link&#45;&#45;opacity" v-if="!$store.state.user && !isAuthPage">
                    Login
                </nuxt-link>
                <button class="header__controls-link link link&#45;&#45;opacity u-semantic-button" @click="logout" v-if="$store.state.user">Logout</button>-->

            </div>

        </div>
    </header>
</template>
