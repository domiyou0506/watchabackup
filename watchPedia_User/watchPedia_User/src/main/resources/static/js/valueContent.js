const main = document.querySelector('.css-14gy7wr');
// 더보기 모달

const more = document.querySelectorAll('.e1hc1f3f0');
const morePop = document.querySelector('#modal-container-7BA4lidNEdX4hBQjx-RhK');
const moreClose = document.querySelector('.css-9du7fu');

for(let idx of more) {
    // 더보기 버튼 액션
    idx.addEventListener('click', () => {
        if (morePop.classList.contains('off')) {
            main.style.display = 'block';
            main.classList.add('on');
            main.classList.remove('off');
            morePop.style.display = 'block';
            morePop.classList.add('on');
            morePop.classList.remove('off');
        }
    })
}
//취소버튼으로 닫기
moreClose.addEventListener('click', () =>{
    morePop.style.display = 'none';
    morePop.classList.remove('on');
    morePop.classList.add('off');
    main.style.display = 'none';
    main.classList.remove('on');
    main.classList.add('off');
})

let cnt = document.querySelectorAll('.css-ynpx67');
const commentBtn = document.querySelector("[aria-label='edit or create comment']");
const comment = document.querySelector('#modal-container-cfXtNUeXjwyIBnSN7h9u8');
const commClose = document.querySelector('.css-1lvet1d-StylelessButton');
const commClose2 = document.querySelector('.e1k34u8y0');
const saveBtn = document.querySelector(".css-1ukikc-StylelessButton");
const saveBtn2 = document.querySelector(".css-r2q33l-StylelessButton");

// // 코멘트 열기, 닫기
commentBtn.addEventListener('click',() => {
    if(comment.classList.contains('off')){
        main.style.display = 'block';
        main.classList.add('on');
        main.classList.remove('off');
        morePop.style.display = 'none';
        morePop.classList.remove('on');
        morePop.classList.add('off');
        comment.style.display = 'block';
        comment.classList.add('on');
        comment.classList.remove('off');
    }
})
commClose.addEventListener('click', () =>{
    comment.style.display = 'none';
    comment.classList.add('off');
    comment.classList.remove('on');
    main.style.display = 'none';
    main.classList.add('off');
    main.classList.remove('on');
})
commClose2.addEventListener('click', () =>{
    comment.style.display = 'none';
    comment.classList.add('off');
    comment.classList.remove('on');
    main.style.display = 'none';
    main.classList.add('off');
    main.classList.remove('on');
})

// 코멘트 창에 글자 입력 시 이벤트 발생
document.querySelector('.css-137vxyg').addEventListener("keydown", ()=>{
    let text = document.querySelector('.css-137vxyg').value
    if(text != ''){
        saveBtn.classList.add('css-3ocf2p-StylelessButton');
        saveBtn.classList.remove('css-1ukikc-StylelessButton')

        saveBtn2.classList.add('css-1id6jxk-StylelessButton');
        saveBtn2.classList.remove('css-r2q33l-StylelessButton')
    }else{
        saveBtn.classList.add('css-1ukikc-StylelessButton')
        saveBtn.classList.remove('css-3ocf2p-StylelessButton');

        saveBtn2.classList.add('css-r2q33l-StylelessButton')
        saveBtn2.classList.remove('css-1id6jxk-StylelessButton');
    }
    cnt.item(0).innerHTML = text.length + "/10000";
    cnt.item(1).innerHTML = text.length + "/10000";
})

document.addEventListener('click', (e) => {
    // // 코멘트 outside 클릭 시 닫기
    if(comment.classList.contains("on")){
        if(!document.querySelector('.css-1p257d1-modalAddStyle').contains(e.target)){
            comment.style.display = 'none';
            comment.classList.add('off');
            comment.classList.remove('on');
            main.style.display = 'none';
            main.classList.add('off');
            main.classList.remove('on');
        }
    };
    // 더보기 창
    if(morePop.classList.contains("on")){
        if(!document.querySelector('.css-7uunky').contains(e.target)){
            morePop.style.display = 'none';
            morePop.classList.remove('on');
            morePop.classList.add('off');
            main.style.display = 'none';
            main.classList.remove('on');
            main.classList.add('off');
        }
    };
},true)

// 보고싶어요
const wish = document.querySelector(".css-18gqv89");
wish.addEventListener('click', () => {
    if(wish.classList.contains("css-18gqv89")){
        wish.classList.add("css-2ip5b6")
        wish.classList.remove("css-18gqv89")
        wish.querySelector("img").src = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0OCIgaGVpZ2h0PSI0OCIgdmlld0JveD0iMCAwIDQ4IDQ4Ij4KICAgIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPHBhdGggZmlsbD0iI0ZGMkY2RSIgZD0iTTM4Ljc1IDguODJIOS4yNWEuNS41IDAgMCAxLS41LS41VjYuNDRhMiAyIDAgMCAxIDItMmgyNi41YTIgMiAwIDAgMSAyIDJ2MS44OGEuNS41IDAgMCAxLS41LjV6bS0yOS41IDEuNWEuNS41IDAgMCAwLS41LjV2MjguNDY4YzAgMS4xOC45NjkgMi4wMDMgMi4wMDcgMi4wMDMuMzkgMCAuNzktLjExNyAxLjE1My0uMzc0TDI0IDMyLjMwN2wxMi4wOSA4LjYxYTEuOTggMS45OCAwIDAgMCAxLjE1My4zNzRjMS4wMzggMCAyLjAwNy0uODIzIDIuMDA3LTIuMDAzVjEwLjgyYS41LjUgMCAwIDAtLjUtLjVIOS4yNXoiLz4KICAgIDwvZz4KPC9zdmc+Cg==";
        morePop.style.display = 'none';
        morePop.classList.remove('on');
        morePop.classList.add('off');
        main.style.display = 'none';
        main.classList.remove('on');
        main.classList.add('off');
    } else {
        wish.classList.add("css-18gqv89")
        wish.classList.remove("css-2ip5b6")
        wish.querySelector("img").src = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0OCIgaGVpZ2h0PSI0OCIgdmlld0JveD0iMCAwIDQ4IDQ4Ij4KICAgIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPHBhdGggZD0iTTAgNDhoNDhWMEgweiIvPgogICAgICAgIDxwYXRoIGZpbGw9IiM3ODc4NzgiIGQ9Ik0zNy4yNSA0LjQ0aC0yNi41YTIgMiAwIDAgMC0yIDJ2MzIuODQ3YzAgMS4xODEuOTcgMi4wMDQgMi4wMDcgMi4wMDQuMzkgMCAuNzktLjExNyAxLjE1My0uMzc1TDI0IDMyLjMwN2wxMi4wOSA4LjYxYy4zNjIuMjU3Ljc2My4zNzQgMS4xNTMuMzc0IDEuMDM4IDAgMi4wMDctLjgyMyAyLjAwNy0yLjAwNFY2LjQ0YTIgMiAwIDAgMC0yLTJtMCAxLjVhLjUuNSAwIDAgMSAuNS41djMyLjg0N2MwIC4zNDctLjI5Ni41MDQtLjUwNy41MDRhLjQ3Ny40NzcgMCAwIDEtLjI4My0uMDk3bC0xMi4wOS04LjYwOGExLjQ5MSAxLjQ5MSAwIDAgMC0xLjc0IDBsLTEyLjA5IDguNjA4YS40NzcuNDc3IDAgMCAxLS4yODMuMDk3Yy0uMjEgMC0uNTA3LS4xNTctLjUwNy0uNTA0VjYuNDRjMC0uMjc1LjIyNS0uNS41LS41aDI2LjUiLz4KICAgICAgICA8cGF0aCBmaWxsPSIjNzg3ODc4IiBkPSJNOS41MjUgMTAuMzE5aDI4Ljk0OXYtMS41SDkuNTI1eiIvPgogICAgPC9nPgo8L3N2Zz4K"
        morePop.style.display = 'none';
        morePop.classList.remove('on');
        morePop.classList.add('off');
        main.style.display = 'none';
        main.classList.remove('on');
        main.classList.add('off');
    }
})

// 보는중
const watch = document.querySelector(".css-1y0ipd2");
watch.addEventListener('click', () => {
    if(watch.classList.contains("css-1y0ipd2")){
        watch.classList.add("css-1vrjma4")
        watch.classList.remove("css-1y0ipd2")
        watch.querySelector("img").src = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0OCIgaGVpZ2h0PSI0OCIgdmlld0JveD0iMCAwIDQ4IDQ4Ij4KICAgIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPGcgZmlsbD0iIzAwQTBGRiI+CiAgICAgICAgICAgIDxwYXRoIGQ9Ik0yNCAxOC43NUE1LjI1NiA1LjI1NiAwIDAgMCAxOC43NSAyNGEuNzUuNzUgMCAwIDEtMS41IDBBNi43NTggNi43NTggMCAwIDEgMjQgMTcuMjVhLjc1Ljc1IDAgMCAxIDAgMS41bTAtNGMtNS4xMDEgMC05LjI1IDQuMTUtOS4yNSA5LjI1IDAgNS4xMDEgNC4xNDkgOS4yNSA5LjI1IDkuMjUgNS4xIDAgOS4yNS00LjE0OSA5LjI1LTkuMjUgMC01LjEtNC4xNS05LjI1LTkuMjUtOS4yNSIvPgogICAgICAgICAgICA8cGF0aCBkPSJNMjQgMzQuNzVjLTUuOTI4IDAtMTAuNzUtNC44MjItMTAuNzUtMTAuNzVTMTguMDcyIDEzLjI1IDI0IDEzLjI1IDM0Ljc1IDE4LjA3MiAzNC43NSAyNCAyOS45MjggMzQuNzUgMjQgMzQuNzVtMjIuNTY1LTEyLjY1N0M0Mi40NzUgMTMuNDUzIDMzLjkxMyA3LjUgMjQgNy41Yy05LjkxMiAwLTE4LjQ3NSA1Ljk1My0yMi41NjQgMTQuNTkzYTQuNDYgNC40NiAwIDAgMCAwIDMuODE0QzUuNTI1IDM0LjU0NyAxNC4wODggNDAuNSAyNCA0MC41YzkuOTEzIDAgMTguNDc2LTUuOTU0IDIyLjU2NS0xNC41OTNhNC40NjcgNC40NjcgMCAwIDAgMC0zLjgxNCIvPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+Cg=="
        morePop.style.display = 'none';
        morePop.classList.remove('on');
        morePop.classList.add('off');
        main.style.display = 'none';
        main.classList.remove('on');
        main.classList.add('off');
    } else {
        watch.classList.add("css-1y0ipd2")
        watch.classList.remove("css-1vrjma4")
        watch.querySelector("img").src = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0OCIgaGVpZ2h0PSI0OCIgdmlld0JveD0iMCAwIDQ4IDQ4Ij4KICAgIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPGcgZmlsbD0iIzc4Nzg3OCI+CiAgICAgICAgICAgIDxwYXRoIGQ9Ik0yNCAxNC43NWMtNS4xMDEgMC05LjI1IDQuMTQ5LTkuMjUgOS4yNXM0LjE0OSA5LjI1IDkuMjUgOS4yNWM1LjEgMCA5LjI1LTQuMTQ5IDkuMjUtOS4yNVMyOS4xIDE0Ljc1IDI0IDE0Ljc1bTAgMjBjLTUuOTI4IDAtMTAuNzUtNC44MjItMTAuNzUtMTAuNzVTMTguMDcyIDEzLjI1IDI0IDEzLjI1IDM0Ljc1IDE4LjA3MiAzNC43NSAyNCAyOS45MjggMzQuNzUgMjQgMzQuNzUiLz4KICAgICAgICAgICAgPHBhdGggZD0iTTE4IDI0Ljc1YS43NS43NSAwIDAgMS0uNzUtLjc1QTYuNzU4IDYuNzU4IDAgMCAxIDI0IDE3LjI1YS43NS43NSAwIDAgMSAwIDEuNUE1LjI1NiA1LjI1NiAwIDAgMCAxOC43NSAyNGEuNzUuNzUgMCAwIDEtLjc1Ljc1Ii8+CiAgICAgICAgICAgIDxwYXRoIGQ9Ik0yNCA3LjVjLTkuOTEyIDAtMTguNDc1IDUuOTU0LTIyLjU2NCAxNC41OTNhNC40NiA0LjQ2IDAgMCAwIDAgMy44MTRDNS41MjUgMzQuNTQ2IDE0LjA4OCA0MC41IDI0IDQwLjVjOS45MTIgMCAxOC40NzUtNS45NTQgMjIuNTY0LTE0LjU5M2E0LjQ2NyA0LjQ2NyAwIDAgMCAwLTMuODE0QzQyLjQ3NSAxMy40NTQgMzMuOTEzIDcuNSAyNCA3LjVNMjQgOWM4LjkzOCAwIDE2Ljk1IDUuMTAzIDIxLjAyMyAxMy4zNTJhMy43MjYgMy43MjYgMCAwIDEgMCAzLjI5NUM0MC45NTMgMzMuODk3IDMyLjkzOSAzOSAyNCAzOWMtOC45NCAwLTE2Ljk1My01LjEwMy0yMS4wMjQtMTMuMzUyYTMuNzI4IDMuNzI4IDAgMCAxIDAtMy4yOTZDNy4wNDcgMTQuMTAzIDE1LjA2MiA5IDI0IDkiLz4KICAgICAgICA8L2c+CiAgICA8L2c+Cjwvc3ZnPgo="
        morePop.style.display = 'none';
        morePop.classList.remove('on');
        morePop.classList.add('off');
        main.style.display = 'none';
        main.classList.remove('on');
        main.classList.add('off');
    }
})

//관심없어요
const noTh = document.querySelector(".css-bgi4sk:nth-child(2)");
const noText = document.querySelector(".css-7zhfhb");
noTh.addEventListener('click' , () => {
    if(noText.classList.contains("css-7zhfhb")){
        noText.classList.add("css-fwllm4")
        noText.classList.remove("css-7zhfhb")
        noTh.querySelector("img").src = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij4KICAgIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPHBhdGggZD0iTTAgMGgyNHYyNEgweiIvPgogICAgICAgIDxwYXRoIGZpbGw9IiNGRjJGNkUiIGQ9Ik0xMS41NjYgMTkuMzEyYy4zNzcuNjc4Ljg2IDEuMjg4IDEuNDI4IDEuODA4QTkuMzMzIDkuMzMzIDAgMSAxIDExIDIuNjY3YTkuMzM3IDkuMzM3IDAgMCAxIDguODIyIDYuMjggNy4xNyA3LjE3IDAgMCAwLTIuMjg1LS4yNzRBNy4zMzMgNy4zMzMgMCAwIDAgMTEgNC42NjdhNy4zMDIgNy4zMDIgMCAwIDAtNC41MjUgMS41NjJsNS40OSA1LjQ5YTcuMTQxIDcuMTQxIDAgMCAwLS45NDUgMS44ODRMNS4wODMgNy42NjZhNy4zMzMgNy4zMzMgMCAwIDAgNi40ODIgMTEuNjQ1eiIvPgogICAgICAgIDxwYXRoIGZpbGw9IiNGRjJGNkUiIGQ9Ik0yMi42MTEgMTIuMTYxTDE4LjE3MyAxNi42bC0xLjgzMy0xLjgzM2EuODQ0Ljg0NCAwIDEgMC0xLjE5MyAxLjE5NGwyLjEyNiAyLjEyNmEuODQ3Ljg0NyAwIDAgMCAuMTQ3LjExNy43ODUuNzg1IDAgMCAwIDEuMjE5LjE0Mmw0LjgyNi00LjgyNmE2IDYgMCAxIDEtLjg1NC0xLjM2eiIvPgogICAgPC9nPgo8L3N2Zz4K"
        morePop.style.display = 'none';
        morePop.classList.remove('on');
        morePop.classList.add('off');
        main.style.display = 'none';
        main.classList.remove('on');
        main.classList.add('off');
    } else {
        noText.classList.add("css-7zhfhb")
        noText.classList.remove("css-fwllm4")
        noTh.querySelector("img").src = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij4KICAgIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPHBhdGggZD0iTTAgMGgyNHYyNEgweiIvPgogICAgICAgIDxwYXRoIGZpbGw9IiM3ODc4NzgiIGQ9Ik02LjA4MyA3LjY2NmE3LjMzMyA3LjMzMyAwIDAgMCAxMC4yNSAxMC4yNUw2LjA4NCA3LjY2N3pNNy40NzUgNi4yM0wxNy43NyAxNi41MjVBNy4zMzMgNy4zMzMgMCAwIDAgNy40NzUgNi4yM3pNMTIgMjEuMzMzYTkuMzMzIDkuMzMzIDAgMSAxIDAtMTguNjY2IDkuMzMzIDkuMzMzIDAgMCAxIDAgMTguNjY2eiIvPgogICAgPC9nPgo8L3N2Zz4K"
        morePop.style.display = 'none';
        morePop.classList.remove('on');
        morePop.classList.add('off');
        main.style.display = 'none';
        main.classList.remove('on');
        main.classList.add('off');
    }
})

// 스포일러 체크
const spoBtn = document.querySelector(".css-hyoixq");
const spo = spoBtn.querySelector(".css-7zhfhb");
spoBtn.addEventListener('click', () => {
    if(spo.classList.contains("css-7zhfhb")){
        spo.classList.add("css-1ngtlfw")
        spo.classList.remove("css-7zhfhb");
    } else {
        spo.classList.add("css-7zhfhb");
        spo.classList.remove("css-1ngtlfw")
    }
})