document.getElementById("fetchButton").addEventListener("click",fetchData);

async function fetchData() {
    try {
        //APIリクエスト
        let response = await fetch("https://jsonplaceholder.typicode.com/posts/1");

        //JSONデータを取得
        let data = await response.json();

        //HTMLに表示
        document.getElementById("output").innerHTML = `
        <h2>${data.title}</h2>
        <p>${data.body}</p>
        `;
    } catch (error) {
        console.log("データ取得エラー：", error);
        document.getElementById("output").innerHTML = `
        <p style="color:red;">データの取得に失敗しました</p>
        `;
    }
}

