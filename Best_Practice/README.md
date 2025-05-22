---

marp: true
theme: default
paginate: true
title: GitHub Copilot Best Practices
------------------------------------

<!-- _class: lead -->

# 🧠 GitHub Copilot 베스트 프랙티스

효율적인 사용을 위한 전략 정리

---

## ✅ 1. Copilot의 강점과 한계 이해하기

### 💪 잘하는 일

* 반복 코드 작성
* 테스트 자동 생성
* 정규표현식 작성
* 코드 설명 및 주석 추가

### ⚠️ 한계점

* 비기술적 요청에는 부적합
* 전문가의 판단을 대체하지는 않음

---

## ✅ 2. 도구 선택하기

### ✨ Copilot Code Completions

* 변수/함수 자동완성
* 반복 코드 작성
* 인라인 주석 기반 코드 생성
* 테스트 코드 생성 (TDD)

### 💬 Copilot Chat

* 코드에 대한 질문
* 대규모 코드 생성 및 수정
* 특정 역할 기반 코드 리뷰 시뮬레이션

---

## ✅ 3. 좋은 프롬프트 작성하기

### 🛠 Prompt Engineering Tips

* 복잡한 작업은 나눠서 요청하기
* 명확한 요구사항과 예제 포함
* 인풋/아웃풋 명시
* 좋은 코딩 습관 유지

---

## ✅ 4. Copilot 코드 검토하기

### 🔍 검토 포인트

* 기능, 보안, 가독성, 유지보수성
* 코드 설명 요청: `"이 함수가 무슨 역할인지 설명해줘"`
* 자동 테스트 도구와 병행 사용

### 🧪 검증 도구

* ESLint, Jest, SonarQube, CodeQL 등
* GitHub Actions를 통한 자동 검사 설정

---

## ✅ 5. 유사 오픈소스 코드 회피

### ⚖️ 이유

* 공개 코드와 유사한 Copilot 제안은 저작권 문제 야기 가능

### ⚙️ 설정 방법

* \[개인] GitHub 설정에서 `Block suggestions matching public code` 체크
* \[조직] Enterprise 정책으로 일괄 적용 가능

---

## ✅ 6. 유용한 컨텍스트 제공하기

### Copilot에게 문맥 주기

* 관련 파일 열기 / 불필요한 파일 닫기
* 새 대화 시작으로 맥락 초기화
* 키워드 활용으로 작업 목적 명확히 전달

```md
"#fetch https://example.com" → 문서 불러오기
"@workspace" → 현재 워크스페이스 기준 질문
```

---

## ✅ 7. 다양한 제안 탐색 & 피드백 제공

* 여러 코드 제안 비교 후 최선 선택
* Chat 응답에 👍 / 👎 제공 가능
* Copilot 개선을 위한 사용자 피드백 중요

---

## ✅ 8. 린트 · 테스트 · IP 검사 도구와 함께 사용하기

### 린트 · 테스트 도구 추천

| 도구                     | 역할            |
| ---------------------- | ------------- |
| **ESLint / Prettier**  | 코드 스타일 검사     |
| **Jest / Vitest**      | 테스트 자동화       |
| **SonarQube / CodeQL** | 정적 분석 및 보안 진단 |

```bash
npm run lint && npm run test
```

---

## ✅ 9. 유사 코드 차단 실무 적용 팁

### 조직 내 적용 예시

1. Copilot 코드 PR에 체크박스 추가

   * `☐ Copilot 제안 코드의 라이선스 확인 완료`
2. CI/CD에서 자동 검사 및 린트 실행
3. 오픈소스 유사 코드 차단 설정 적용

---

## ✅ 10. Copilot 기능 최신 상태 유지하기

* 새로운 기능 지속적으로 출시됨
* 변경사항 확인: [GitHub Copilot Changelog](https://github.blog/changelog/)
* 최신 릴리즈 확인 & 실무 적용 여부 검토 권장

---

<!-- _class: lead -->

# 🔚 마무리

GitHub Copilot은 강력한 도우미지만,
품질 · 보안 · 책임은 **개발자의 몫**입니다.

자동화 도구와 함께 사용할 때
Copilot의 진정한 잠재력이 발휘됩니다!
