function copytext() {
    let text1=document.getElementById("text1");
    console.log(text1.innerHTML);
    // let first=text1.innerHTML;
    let text2=document.getElementById("text2");
    text2.innerHTML=text1;
}