<script>
    import InlineSvg from 'vue-inline-svg';
    import ButtonCopy from '~/components/common/ButtonCopy';

    export default {
        components: {
            ButtonCopy,
        },
        props: {
            copyText: {
                type: String,
                required: true,
            },
        },
    };
</script>

<template>
    <ButtonCopy class="u-icon u-semantic-button link--opacity" aria-label="Copy" :copy-text="copyText">
        <img src="/img/icon-copy.svg" alt="Copy"/>
    </ButtonCopy>
</template>
