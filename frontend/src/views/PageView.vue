<template>
    <div>
        <h1>{{memo.title}}</h1>
        <p>{{memo.memo}}</p>
        
    </div>
</template>

<script>
export default {
    created() {
        //'/api/memo/:id'를 넣어서 전달
        //memo.id로 구분해서 그 객체만 가져올 수있다.
        //id값을 들고 오는 곳 : 
        this.$http.get(`/api/memo/${this.$route.params.id}`)
            .then((response)=>{
                //console.log(response);
                this.memo = response.data;
            })
    },
    data () {
        return {
            memo : {}
        }
    }
}
</script>