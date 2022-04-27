var express = require('express');
var router = express.Router();
const memos = require('../memo.json')
//전체 추가된 메모의 갯수
let count = 2;

/* GET을 통해 메모를 전달한다*/
router.get('/', function(req, res, next) {
    console.log(memos)
    res.send(memos);
});

//get을 통해 id값이 동일한 메모를 보내준다
router.get('/:id',function(req,res,nex){
    const id = req.params.id;
    //filterMemo은 필터의 결과가 참인 객체들을 ㅂㅐ열로 가져온다.
    const filteredMemo = memos.filter((memo)=>{
        if(memo.id == id) {
            return true;
        }
    })
    res.send(filteredMemo[0]);
})

//post를 통해 메모값을 받아오는 axios
router.post('/', (req,res,next) =>{
    const item = req.body.data;
    count++;
    const memo = {
        id : count,
        title: item.title, 
        memo : item.memo, 
        write : 'none'
    };

    memos.push(memo);
    res.redirect('/'); 
});

//form을 통해 받아오는 값(post로 전달받음)
router.post('/writeform', (req,res,next) =>{
    const item = req.body;
    count++;
    const memo = {
        id : count,
        title: item.title, 
        memo : item.memo, 
        write : 'none'
    };

    memos.push(memo);
    //다른주소의 화면 출력
    res.redirect('/'); 
});

module.exports = router;
