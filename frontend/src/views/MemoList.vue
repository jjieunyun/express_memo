<template>
    <div>
        <table>
            <tr>
                <td>번호</td>
                <td>제목</td>
            </tr>
            <tr v-for="(item,index) in memo" :key="index">
                <td>{{item.id}}</td>
                <td @click="$router.push(`/list/${item.id}`)">{{item.title}}</td>
            </tr>
        </table>
    </div>
</template>

<script>
export default {
    data () {
        return {
            memo : []
        }
    },
    created() {
        //서버로 접근해서 데이터를 가져올 함수가 필요함
        //axios를 사용해서 비동기로 값을 가져옴 : get을 사용
        this.$http.get('/api/memo')
            .then((response)=> {
                console.log(response.data); //브라우저 개발자도구에서 출력되는 console
                this.memo = response.data;
            });
    }
}
</script>