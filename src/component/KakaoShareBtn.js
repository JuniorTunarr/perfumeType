import React from "react";
import Button from "react-bootstrap/Button";
const { Kakao } = window;

const KakaoShareBtn = ({ data }) => {
  const url = "https://aquamarine-concha-9fbd34.netlify.app/";
  const resultUrl = window.location.href;

  React.useEffect(() => {
    Kakao.cleanup();
    Kakao.init("13653bd5a632b30a3e9088d28b6b4484");
  }, []);

  const shareKakao = () => {
    Kakao.Share.sendDefault({
      objectType: "feed",
      content: {
        title: "perfumeType 테스트 결과",
        description: `(${data.type})Type 에게 추천하는 향수는?`,
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
