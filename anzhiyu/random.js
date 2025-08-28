var posts=["2025/08/27/广电你妈是不是死了/","2025/08/27/应该算是翻新好了吧/","2025/08/28/“网盘搭建完成，开始测试”/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };