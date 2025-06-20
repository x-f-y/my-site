import Mock from 'mockjs';
import qs from 'querystring';
import avatar1 from "@/assets/avatar1.jpg";
import avatar2 from "@/assets/avatar2.jpg";
import avatar3 from "@/assets/avatar3.jpg";
import avatar4 from "@/assets/avatar4.jpg";

Mock.mock("/api/message", 'post', {
  code: 0,
  msg: '',
  data: {
    id: "@guid",
    nickname: "@cname",
    content: "@cparagraph(1, 10)",
    createDate: Date.now(),
    "avatar|1": [avatar1, avatar2, avatar3, avatar4],
  }
});

Mock.mock(/^\/api\/message\/?(\?.+)?$/, 'get', function(options){
  const limit = qs.parse(options.url).limit;
  return Mock.mock({
    code: 0,
    msg: '',
    data: {
      total: 52,
      [`rows|${limit || 10}`]: [
        {
          id: "@guid",
          nickname: "@cname",
          content: "@cparagraph(1, 10)",
          createDate: Date.now(),
          "avatar|1": [avatar1, avatar2, avatar3, avatar4]
        }
      ]
    }
  });
})