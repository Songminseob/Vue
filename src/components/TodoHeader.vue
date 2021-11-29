<template>
    <header>
        <h1> 투두 리스트 </h1>
        <p class="date"> {{ timestamp }}</p>
    </header>
</template>

<script>
export default {
    date() {
        return {
            timestamp: ""
        };
    },
    created() {
        const now = new Date();
        const month = now.getMonth() + 1;
        const date = now.getDate();
        const weekList = new Array("Sun.", "Mon.", "Tue.", "Wed.", "Thu.", "Fri.", "Sat.");
        const week = weekList[now.getDay()];
        this.timestamp = `${month}/${date} ${week}`;
    }
};
</script>


<style scoped>
h1 {
    color: #2F3B52;
    font-weight: 900;
    margin: 2.5rem 0 1.5rem;
}
</style>