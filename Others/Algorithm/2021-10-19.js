// 문제. 프로그래머스 (1단계 - 로또의 최고순위와 최저순위)
function solution(lottos, win_nums) {
  let minRank;
  let maxRank;
  let answerCount = 0;
  let zeroCount = 0;
  for (let i = 0; i < lottos.length; i++) {
    if (lottos[i] === 0) {
      zeroCount += 1;
    }
    if (win_nums.indexOf(lottos[i]) > -1) {
      answerCount += 1;
    }
  }
  if (answerCount < 2) {
    minRank = 6;
  } else if (answerCount === 2) {
    minRank = 5;
  } else if (answerCount === 3) {
    minRank = 4;
  } else if (answerCount === 4) {
    minRank = 3;
  } else if (answerCount === 5) {
    minRank = 2;
  } else if (answerCount === 6) {
    minRank = 1;
  }

  if (answerCount + zeroCount < 2) {
    maxRank = 6;
  } else if (answerCount + zeroCount === 2) {
    maxRank = 5;
  } else if (answerCount + zeroCount === 3) {
    maxRank = 4;
  } else if (answerCount + zeroCount === 4) {
    maxRank = 3;
  } else if (answerCount + zeroCount === 5) {
    maxRank = 2;
  } else if (answerCount + zeroCount === 6) {
    maxRank = 1;
  }

  var answer = [maxRank, minRank];
  return answer;
}

// 코드의 길이가 너무 길어 가독성이 떨어지는 느낌이다. includes 와 순위를 배열로 만들어서 활용하는건 어떨까?? 다른 사람들의 풀이형식도 그런 형식으로 진행이되더라
