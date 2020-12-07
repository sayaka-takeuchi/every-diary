function alert() {
  const deleteIcon = document.querySelectorAll('.delete-btn');
  deleteIcon.forEach((icon)=> {
    icon.onclick = ()=> {
      if(window.confirm('削除しますか？')){
        return true;
      }else{
        window.alert('キャンセルされました');
        return false;
      }
    }
  });
};

window.addEventListener('click', alert);