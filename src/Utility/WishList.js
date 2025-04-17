const getWishList = () => {
    const wishList = localStorage.getItem('wishList');

    if(wishList){
        const wishListConvert = JSON.parse(wishList);
        return wishListConvert;
    }else{
        return [];
    }
}

const addWishList = (id) => {
    const getWish = getWishList();

    if(getWish.includes(id)){
        alert('already added');
        return
    }else{
        getWish.push(id);
    }

   const bookStr = JSON.stringify(getWish);
   localStorage.setItem('wishList',bookStr);
   alert('are you sure?')
}

export {addWishList,getWishList};