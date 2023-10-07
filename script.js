const filterBtns = document.querySelectorAll('.btn');
const imageList = document.querySelectorAll('.store-item')

filterBtns.forEach(filterBtn => {
    filterBtn.addEventListener('click', ()=>{
        const filterCondition = filterBtn.dataset.filter;
        // if(filterCondition === 'all'){
        //     imageList.forEach(image => image.style.display = '');
        // } else {
        //     imageList.forEach(image => {
        //         if(image.classList.contains(filterCondition)){
        //             image.style.display = '';
        //         } else{
        //             image.style.display = 'none';
        //         }
        //     });
        // }
        imageList.forEach(image => {
            if(filterCondition === 'all'){
                image.style.display = '';
            } else if(image.classList.contains(filterCondition)){
                image.style.display = '';
            } else{
                image.style.display = 'none';
            }
        });
    })
});