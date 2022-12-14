import Atype from "../img/img6.png";
import Btype from "../img/img7.png";
import Ctype from "../img/img8.png";
import Dtype from "../img/img9.png";
import A1 from "../img/A남.png";
import A2 from "../img/A여.png";
import B1 from "../img/B남.png";
import B2 from "../img/B여.png";
import C1 from "../img/C남.png";
import C2 from "../img/C여.png";
import D1 from "../img/D남.png";
import D2 from "../img/D여.png";

export const ResultData = [
  {
    id: 1,
    type: "A",
    desc: `향수는 필요하지만, 잘 모르겠는 당신.
     요즘 향수 브랜드가 너무 많아, 어떤 향수를 사용해야 할 지 감이 안 잡히시지 않나요? 그런 당신을 위해 니치 향수의 대표 브랜드인 조말론, 딥디크, 바이레도의 베스트셀러를 모아봤습니다. 브랜드별로 시향해보시면, 브랜드마다 특징을 알 수 있습니다. 
    이번 시향에서 맞는 브랜드를 찾은 후, 
    천천히 향수 취향을 늘려가는 것도 좋은 방법일 것 같아요!`,
    image: `${Atype}`,
    image2: `${A1}`,
    image3: `${A2}`,
  },

  {
    id: 2,
    type: "B",
    desc: `데일리한 향수에 약간에 유니크함을 더하고 싶은 당신. 
    좋은 향기가 나는 사람으로 기억에 남고 싶지만, 남들과 겹치는 향수들은 싫으시지 않나요?
    그런 당신을 위해 흔한 향수는 아니지만, 호불호 없이 일상에서 사용하기 좋은 향수들을 모아봤습니다.
    천천히 시향해보시면서, 마음에 드는 향수 찾으시기를 바랄게요.`,
    image: `${Btype}`,
    image2: `${B1}`,
    image3: `${B2}`,
  },

  {
    id: 3,
    type: "C",
    desc: `새로운 향수 브랜드를 알고 싶은 당신.
    아무래도 향수는 개인의 개성을 드러낼 수 있는 제품이다 보니, 겹치는 건 싫더라고요.
    그런 당신을 위해 새로운 향수 브랜드의 베스트셀러를 가지고 왔습니다.
    베스트셀러라고 해서 의아해하실 수 있지만, 대중적인 향수는 아닙니다.
    우리 같이 새로운 브랜드를 탐구해볼까요? `,
    image: `${Ctype}`,
    image2: `${C1}`,
    image3: `${C2}`,
  },
  {
    id: 4,
    type: "D",
    desc: `향수로 자신의 개성을 표현하고 싶은 당신.
    남들 시선보다는, 자신의 향수 취향에 집중하시는군요. 그렇다면 이 제품들은 어떠세요? 남들과 겹치지 않고, 자신의 개성을 드러내고 싶어하는 당신을 위해
    유니크한 향수들로 모아봤습니다. 이미 취향인 향수를 많이 찾으셨겠지만,
    이번 시향에서 취향인 향수가 하나 더 느셨기를 바랄게요.`,
    image: `${Dtype}`,
    image2: `${D1}`,
    image3: `${D2}`,
  },
];
