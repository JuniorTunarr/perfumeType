import React from "react";
import Button from "react-bootstrap/Button";
const { Kakao } = window;

const KakaoShareBtn = ({ data }) => {
  const url = "https://zinkkis-test.netlify.app/";
  const resultUrl = window.location.href;

  React.useEffect(() => {
    Kakao.cleanup();
    Kakao.init("16a4fcd707b3c92fe86e9de778bf5301");
  }, []);

  const shareKakao = () => {
    Kakao.Share.sendDefault({
      objectType: "feed",
      content: {
        title: "캔따개 테스트 결과",
        description: `캔따개(${data.best})에게 가장 알맞은 집사님은?${data.name} 입니다!`,
        imageUrl: url + data.image,
        link: {
          mobileWebUrl: resultUrl,
          webUrl: resultUrl,
        },
      },
      buttons: [
        {
          title: "나도 테스트 하러가기!",
          link: {
            mobileWebUrl: url,
            webUrl: url,
          },
        },
      ],
    });
  };
  return <Button onClick={shareKakao}>카카오톡 공유하기</Button>;
};

export default KakaoShareBtn;
