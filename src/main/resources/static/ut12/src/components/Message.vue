<template>
    <div class="alert" :class="'alert-' + type">
        <h3>{{text}}</h3>
        <hr>
        <div class="buttons">
            <button class="btn btn-success"
            @click="$emit('onNext')">
                Continue
            </button>
        </div>
    </div>
</template>

<script>
    export default{
        props: ['type', 'text']

    }
</script>

<style >
    .alert {
        text-align: center;
    }

</style>
