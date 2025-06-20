import Mock from 'mockjs';

Mock.mock('/api/banner', 'get', {
  code: 0,
  msg: '',
  data: [
    {
      id: "1",
      midImg: "https://mdrs.yuanjin.tech/img/20201031141507.jpg",
      bigImg: "https://mdrs.yuanjin.tech/img/20201031141350.jpg",
      title: "凛冬将至",
      description: "人唯有恐惧的时候方能勇敢",
    },
    {
      id: "2",
      midImg: "https://mdrs.yuanjin.tech/img/20201031205550.jpg",
      bigImg: "https://mdrs.yuanjin.tech/img/20201031205551.jpg",
      title: "血火同源",
      description: "如果我回头，一切都完了",
    },
    {
      id: "3",
      midImg: "https://mdrs.yuanjin.tech/img/20201031204401.jpg",
      bigImg: "https://mdrs.yuanjin.tech/img/20201031204403.jpg",
      title: "听我怒吼",
      description: "兰尼斯特有债必偿",
    },
  ]
});