<script setup>
const props = defineProps({
    pregunta: {
        type: String
    }
})
</script>

<template>
    <div class="box3 sb14">{{ pregunta }}</div>
</template>

<style scoped>
.box3 {
    width: 200px;
    margin: 50px auto;
    border-radius: 15px;
    background: #FAB1DA;
    color: #4B2713;
    padding: 20px;
    text-align: center;
    font-weight: 900;
    font-family: arial;
    position: relative;
}

/* speech bubble 14 */
.sb14:before {
    content: "";
    width: 0px;
    height: 0px;
    position: absolute;
    border-left: 15px solid transparent;
    border-right: 15px solid #FAB1DA;
    border-top: 15px solid #FAB1DA;
    border-bottom: 15px solid transparent;
    left: -16px;
    top: 0px;
}
</style>