watch.addEventListener('click', () => {
    $.ajax({
        url: '/watch/save',
        headers: { 'Content-Type': 'application/json;charset=UTF-8' },
        data: JSON.stringify({
            contentType: "영화",
            contentIdx: contentIdx,
            userIdx: 3
        }),
        type: "POST",
        dataType: "json",
        success : function(result) {
            if(result == true){
                watch.classList.remove('css-1tc9iuk-StylelessButton-ContentActionButton');
                watch.classList.add('css-15hndx7-StylelessButton-ContentActionButton')
                wish.classList.remove('css-15hndx7-StylelessButton-ContentActionButton')
                wish.classList.add('css-1tc9iuk-StylelessButton-ContentActionButton');
                wishIcon.item(1).style.display='none';
                wishIcon.item(0).style.display='block';
            }else{
                watch.classList.add('css-1tc9iuk-StylelessButton-ContentActionButton');
                watch.classList.remove('css-15hndx7-StylelessButton-ContentActionButton')
            }
        },error: function() {
            alert("에러발생!")
        }
    });
})