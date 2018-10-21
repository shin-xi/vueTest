<template>
    <div>
        <div id="pos1" class="pos">routerScroll1</div>
        <div id="pos2" class="pos">routerScroll2</div>
        <div id="pos3" class="pos">routerScroll3</div>
        <div id="pos4" class="pos">routerScroll4</div>
        <div id="pos5" class="pos">routerScroll5</div>
    </div>
</template>

<script>
export default {
  name: 'routerScroll'
}
</script>

<style scoped lang="scss">
    .pos {
        width: 100%;
        height: 300px;
        background-color: darkslategrey;
        margin: 10px 0;
        color: #ffffff;
    }
</style>
