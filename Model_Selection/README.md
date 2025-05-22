---
marp: true
theme: default
paginate: true
title: Comparing Copilot AI Models
---

<!-- _class: lead -->

# 🤖 Comparing Copilot AI Models  
## 다양한 작업에 따른 모델 비교

Copilot은 다양한 AI 모델을 통해 코드 작성, 편집, 질문 응답 기능을 제공합니다.  
각 모델은 특정 작업에 강점을 가지고 있으며, 적절한 선택이 중요합니다.

---

https://docs.github.com/en/copilot/using-github-copilot/ai-models/comparing-ai-models-using-different-tasks

---

## 🧠 모델 비교 기준

- 🔤 **자연어 이해 능력**
- 🧮 **수학 및 논리 연산 처리**
- 🧪 **코드 작성 및 편집 품질**
- 💬 **대화 흐름 유지 및 일관성**
- ⚙️ **도구 호출 및 Agent Mode 사용 여부**

---

## ✨ 주요 모델 유형

| 모델 | 특징 |
|------|------|
| **GPT-4** | 강력한 일반 목적 성능, 고품질 응답 |
| **GPT-4 Turbo** | GPT-4 기반, 속도 개선 및 비용 최적화 |
| **Claude 3.5 Sonnet** | Agent Mode 최적화, 툴 호출 정확도 높음 |
| **Gemini** | 수학 및 멀티모달 강점 |
| **CodeLlama / StarCoder** | 코드 전용, 특정 언어 최적화

---

## 🔍 예제 1: 코드 생성

### 질문
> “TypeScript로 이메일 유효성 검사 함수 만들어줘”

| 모델 | 응답 품질 |
|------|-----------|
| GPT-4 | ✅ 정확한 예외 처리와 타입 보장 |
| Claude 3.5 | ✅ 간결하고 테스트 코드 동반 |
| Gemini | ⚠️ 타입 처리 미흡한 경우 존재 |
| Code 전용 모델 | ✅ 짧고 효율적인 함수, but 설명 부족

---

## 🔍 예제 2: 코드 리뷰 & 개선

> "이 함수 리팩토링해줘. 가독성과 성능 개선이 목적이야"

- **Claude 3.5 Sonnet**: 역할 기반 리뷰에 강함 (예: 시니어 개발자처럼 행동)
- **GPT-4**: 이유 설명과 함께 개선안 제시
- **Gemini**: 개선 제안은 명확하나 코드 품질은 불안정할 수 있음

---

## 🔍 예제 3: 멀티턴 대화

> "이제 로그인 기능 끝났고, 다음은 프로필 수정 로직 짜줘"

- GPT-4: 대화 흐름 유지 탁월
- Claude: 최근 맥락 연결 성능 우수 (특히 Agent Mode 내)
- Code 전용 모델: 멀티턴 문맥 이해는 부족함

---

## 🛠 예제 4: Agent Mode & 툴 호출

> "#fetch https://example.com → 여기 내용을 기반으로 인터페이스 생성해줘"

- Claude 3.5 Sonnet: MCP 도구 호출 탁월, 에러 적음
- GPT-4 Turbo: MCP 지원되나 일부 기능 미완성
- Gemini: 현재 MCP 툴 활용 제한적

---

## ✅ 결론 및 선택 팁

| 목적 | 추천 모델 |
|------|------------|
| 코드 품질 + 일관성 | GPT-4 / Claude 3.5 |
| 대화 + Agent Mode | Claude 3.5 |
| 속도 + 가성비 | GPT-4 Turbo |
| 수학·멀티모달 | Gemini |
| 경량 코드 생성 | StarCoder, CodeLlama

---

<!-- _class: lead -->

# 🔚 마무리

Copilot은 다양한 모델을 통해 유연하게 진화하고 있습니다.  
**작업 목적에 맞는 모델 선택이 최고의 결과를 만듭니다.**

Copilot의 모델 설정 메뉴에서 직접 모델을 선택해 테스트해보세요!

---

더 많은 모델 비교

https://docs.github.com/en/copilot/using-github-copilot/ai-models/choosing-the-right-ai-model-for-your-task

---

GitHub 모델(Preview)
- https://www.linkedin.com/posts/learner-bora_%ED%94%84%EB%A1%AC%ED%94%84%ED%8A%B8%EB%B3%84-%EB%AA%A8%EB%8D%B8-%EC%84%A0%ED%83%9D%EC%9D%84-%EA%B0%80%EB%8A%A5%ED%95%98%EA%B2%8C-%ED%95%B4%EC%A3%BC%EB%8A%94-github-%EB%AA%A8%EB%8D%B8-%ED%94%84%EB%A1%AC%ED%94%84%ED%8A%B8%EB%A5%BC-activity-7331067836385128449-0yzz?utm_source=share&utm_medium=member_desktop&rcm=ACoAAAXuAxUBj_9JPz_p81tRPH1IYJdnzq0kVsI

- https://www.youtube.com/watch?v=NgLhYqkU4YM

---
