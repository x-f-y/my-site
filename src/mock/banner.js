import Mock from 'mockjs';
import midBanner1 from "@/assets/midBanner1.jpg";
import bigBanner1 from "@/assets/bigBanner1.jpg";
import midBanner2 from "@/assets/midBanner2.jpg";
import bigBanner2 from "@/assets/bigBanner2.jpg";
import midBanner3 from "@/assets/midBanner3.jpg";
import bigBanner3 from "@/assets/bigBanner3.jpg";

Mock.mock('/api/banner', 'get', {
  code: 0,
  msg: '',
  data: [
    {
      id: "1",
      midImg: midBanner1,
      bigImg: bigBanner1,
      title: "凛冬将至",
      description: "人唯有恐惧的时候方能勇敢",
    },
    {
      id: "2",
      midImg: midBanner2,
      bigImg: bigBanner2,
      title: "血火同源",
      description: "如果我回头，一切都完了",
    },
    {
      id: "3",
      midImg: midBanner3,
      bigImg: bigBanner3,
      title: "听我怒吼",
      description: "兰尼斯特有债必偿",
    },
  ]
});