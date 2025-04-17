const getLocal = () => {
    const localStr = localStorage.getItem('books');

    if(localStr){
        const localConvert = JSON.parse(localStr);
        return localConvert;
    }else{
        return [];
    }
}

const addLocal = (id) => {
    const getBook = getLocal();

    if(getBook.includes(id)){
        alert('this book already added');
        return
    }else{
        getBook.push(id);
    }
    const bookStr = JSON.stringify(getBook);
    localStorage.setItem('books',bookStr);
    alert('are you sure?')

}

export {addLocal,getLocal};