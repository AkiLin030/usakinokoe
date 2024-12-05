// script.js

// 准备图片和音频的映射关系
const data = [
    { image: "yaha.png", audio: "yaha.mp3" },
    { image: "wula.png", audio: "wula.mp3" },
    { image: "ha.png", audio: "ha.m4a" },
    { image: "ruuu.png", audio: "ruuu.mp3" },
  ];
  
  // 获取烏薩奇图片元素
  const osaki = document.getElementById("osaki");
  
  // 添加点击事件
  osaki.addEventListener("click", () => {
    // 随机选择一个语音和图片
    const randomItem = data[Math.floor(Math.random() * data.length)];
  
    // 切换图片
    osaki.src = randomItem.image;
  
    // 播放音频
    const audio = new Audio(randomItem.audio);
    audio.play();
  });
  