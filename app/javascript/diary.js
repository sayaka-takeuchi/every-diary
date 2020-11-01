function diary(){

  const submitBtn = document.getElementById('submit');
  submitBtn.addEventListener('click', (e)=>{
    
    e.preventDefault();

    // フォームの値を送信
    const form = document.getElementById('js-form');
    const formData = new FormData(form);
    const XHR = new XMLHttpRequest();
    XHR.open("POST", "/diaries", true);
    XHR.responseType = "json";
    XHR.send(formData);
    XHR.onload = () => {
      if (XHR.status != 200){
        alert(`Error ${XHR.status}: ${XHR.statusText}`);
        return null;
      }
      // 投稿日を取得
      const now = new Date();
      const year = now.getFullYear();
      const month = ("0" + (now.getMonth()+ 1)).slice(-2);
      const day = ("0" + now.getDate()).slice(-2);
      const postDate = `${year}/${month}/${day}`
      const item = XHR.response.diary;
    
      // テーブルにレコードを追加
      const targetTable = document.getElementById('targetTable');
      let newRow = targetTable.insertRow(1);
      let newCell = newRow.insertCell(-1);
      let newText = document.createTextNode(postDate);
      newCell.appendChild(newText);

      newCell = newRow.insertCell(-1);
      newText = document.createTextNode(item.text);
      newCell.appendChild(newText);

      newCell = newRow.insertCell(-1);
      let img = document.createElement('img');
      img.src = '/assets/edit.png';
      img.alt = '編集'
      img.setAttribute('class','edit-btn');
      newCell.appendChild(img);

      newCell = newRow.insertCell(-1);
      img = document.createElement('img');
      img.src = '/assets/delete.png';
      img.alt = '削除'
      img.setAttribute('class','delete-btn');
      newCell.appendChild(img);
      
      // フォームを空にする
      const formText = document.getElementById('js-text');
      formText.value = ''
    }
  });
}

window.addEventListener('load', diary);

