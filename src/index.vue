<template>
    <div :class="prefix" v-if="type">
        <div :class="prefix + '__item'" @click="toggle" >
            <Arrow :disable="!hasChild" :open="open" :prefix="prefix"/>
            <Key v-if="label" :name="label" :prefix="prefix"/>
            <Value :type="type" :value="value" :open="open" :prefix="prefix"/>
        </div>
        <div v-if="cache && hasChild" v-show="open" :class="prefix + '__sub'">
            <json5-pretty
                v-for="(item, index) in items"
                :key="index"
                :label="item.label"
                :value="item.value"
                :level="level+1"
                :openDep="openDep"
                :prefix="prefix"/>
        </div>
    </div>
</template>
<script src="./index.js"></script>
