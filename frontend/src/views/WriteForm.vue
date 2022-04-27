<template>
    <div>
        <h3>글을 작성하는 공간입니다</h3>
        <label for="">Title : </label>
        <input type="text" v-model="title"> <br><br>
        <textarea v-model="memo" name="" id="" cols="30" rows="10"></textarea> <br>
        <button @click="addMemo">전송</button>

        <form action="/api/memo/writeform" method="post">
            <label for="">Title : </label>
            <input name="title" type="text"> <br><br>
            <textarea name="memo" id="" cols="30" rows="10"></textarea> <br>
            <input type="submit" value="전송">
        </form>
    </div>
</template>

<script>
export default {
    data() {
        return {
            title : '',
            memo : ''
        }

    },
    methods : {
        addMemo() {
            //post를 이용해서 서버로 값을 전달
            this.$http.post('/api/memo', {
                data : {
                    title : this.title,
                    memo : this.memo
                }
            })
            .then((response)=>console.log(response.data));
            this.$router.push('/');
        }
    }
}
</script>