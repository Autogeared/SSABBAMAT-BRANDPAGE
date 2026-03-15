# SSA.BBA.MAT (싸빠맛) — 웹페이지 디자인 가이드

> **싸고. 빠르고. 맛있게.** — 균형 잡힌 한 끼 식사, 싸빠맛

---

## 1. 브랜드 개요

| 항목 | 내용 |
|------|------|
| 브랜드명 | SSA.BBA.MAT (싸빠맛) |
| 슬로건 | 싸고. 빠르고. 맛있게. |
| 핵심 메시지 | 좋은 한 끼는 비싼 가격표가 아닙니다 |
| 브랜드 톤 | 다크 & 볼드 — 어두운 배경 위 강렬한 레드 포인트 |

---

## 2. 컬러 시스템

### Primary Colors

| 이름 | CSS Variable | HEX | 용도 |
|------|-------------|-----|------|
| **Main Red** | `--color-main` | `#EA2E00` | CTA, 카테고리 라벨, 푸터 배경, 강조 요소 |
| **Main Dark Red** | `--color-main-dark` | `#C42700` | Main Red의 다크 변형 (hover 등) |
| **Cream** | `--color-cream` | `#F0E7D6` | 보조 배경 (현재 미사용, 예비) |
| **Dark** | `--color-dark` | `#1A1A1A` | 주요 배경, 네비게이션, 카드 배경 |
| **White** | `--color-white` | `#FFFFFF` | 텍스트, 버튼 테두리, 활성 탭 |

### 보조 컬러 (코드 내 직접 사용)

| HEX / 값 | 용도 |
|-----------|------|
| `#111` | 메뉴 카드 배경 |
| `#000` | 메뉴 카드 이미지 영역 배경 |
| `rgba(255,255,255, 0.5)` | 비활성 탭 텍스트 |
| `rgba(255,255,255, 0.15)` | 비활성 탭 테두리 |
| `rgba(255,255,255, 0.08)` | 모달 구성 태그 배경 |
| `rgba(255,255,255, 0.8)` | 푸터 설명 텍스트, 모달 구성 태그 텍스트 |
| `rgba(0,0,0, 0.8)` | 모달 백드롭 |

### 컬러 사용 원칙

- **배경**: 항상 다크 계열 (`#1A1A1A`, `#111`, `#000`)
- **텍스트**: 흰색 또는 흰색의 투명도 변형
- **강조**: `#EA2E00` (Main Red) — 카테고리 라벨, CTA, 푸터
- **호버 시 그림자**: `rgba(234, 46, 0, 0.2)` — 레드 톤 그로우 효과

---

## 3. 타이포그래피

### 폰트

| 속성 | 값 |
|------|-----|
| **Primary Font** | Pretendard |
| **Fallback** | -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif |
| **기본 크기** | 16px (html root) |
| **렌더링** | antialiased (webkit, moz) |

### 타이포 스케일

| 요소 | 크기 | 굵기 | 특성 |
|------|------|------|------|
| **Nav 로고** | 1.25rem (20px) | 900 (Black) | letter-spacing: -0.02em |
| **Nav 링크** | 0.9rem (14.4px) | 600 (SemiBold) | letter-spacing: 0.02em |
| **섹션 타이틀 (MENU)** | clamp(2.5rem, 6vw, 4.5rem) | 900 (Black) | letter-spacing: 0.1em |
| **탭 버튼** | 0.9rem (14.4px) | 700 (Bold) | — |
| **카드 카테고리** | 0.75rem (12px) | 700 (Bold) | letter-spacing: 0.05em |
| **카드 메뉴명** | 1.15rem (18.4px) | 800 (ExtraBold) | — |
| **모달 카테고리** | 0.8rem (12.8px) | 700 (Bold) | letter-spacing: 0.08em |
| **모달 메뉴명** | 1.5rem (24px) | 900 (Black) | — |
| **모달 칼로리 뱃지** | 0.85rem (13.6px) | 700 (Bold) | — |
| **모달 구성 태그** | 0.85rem (13.6px) | 600 (SemiBold) | — |
| **푸터 설명** | 1rem (16px) | — | line-height: 1.7 |
| **푸터 CTA** | 1rem (16px) | 700 (Bold) | — |
| **푸터 저작권** | 0.8rem (12.8px) | — | — |

### 타이포 원칙

- **굵기 범위**: 600(SemiBold) ~ 900(Black) — 전체적으로 볼드한 톤
- **영문 타이틀**: 대문자 + 넓은 letter-spacing (0.1em)
- **한글 본문**: 기본 letter-spacing, line-height 1.6~1.7
- **반응형 크기**: `clamp()` 함수로 유동적 스케일링

---

## 4. 레이아웃 시스템

### 컨테이너

| 속성 | 값 |
|------|-----|
| 최대 너비 | 1280px (`--container-max`) |
| 좌우 패딩 | 24px (`--container-padding`) |
| 정렬 | 가운데 (`margin: 0 auto`) |

### 네비게이션

| 속성 | 값 |
|------|-----|
| 높이 | 64px (`--nav-height`) |
| 포지션 | `fixed`, 상단 고정 |
| 배경 | `rgba(26,26,26, 0.9)` + `backdrop-filter: blur(8px)` |
| z-index | 1000 |

### 그리드 (메뉴 카드)

| 뷰포트 | 컬럼 | 갭 |
|---------|-------|-----|
| Desktop (1024px+) | 3열 | 28px |
| Tablet (768~1023px) | 2열 | 20px |
| Mobile (~767px) | 2열 | 12px |

### 페이지 구조 (위에서 아래)

```
┌─────────────────────────────────┐
│  Navigation (fixed, 64px)       │
├─────────────────────────────────┤
│  Brand Slogan (100vh, 이미지)    │
├─────────────────────────────────┤
│  Menu Section (min 100vh)       │
│  ├─ Title                       │
│  ├─ Tab Filters                 │
│  └─ Card Grid (3→2→2 col)      │
├─────────────────────────────────┤
│  Footer (Main Red 배경)          │
│  ├─ Logo                        │
│  ├─ Description                 │
│  ├─ CTA Button                  │
│  └─ Copyright                   │
└─────────────────────────────────┘
```

---

## 5. 컴포넌트 디자인

### 5.1 메뉴 카드 (`.menu__card`)

- **모서리**: `border-radius: 16px`
- **배경**: `#111`
- **이미지 비율**: 1:1 (정사각형, `aspect-ratio: 1/1`)
- **호버 효과**: `scale(1.03)` + 레드 그로우 섀도우
- **이미지 호버**: `scale(1.05)` 줌 인
- **모바일 터치**: `scale(0.97)` 축소 피드백

```
┌──────────────────┐
│                  │
│   1:1 이미지      │
│                  │
├──────────────────┤
│  카테고리 (Red)   │
│  메뉴명 (White)   │
└──────────────────┘
```

### 5.2 탭 버튼 (`.menu__tab`)

| 상태 | 스타일 |
|------|--------|
| **기본** | 투명 배경, 반투명 흰색 텍스트, 반투명 흰색 테두리 |
| **호버** | 텍스트 불투명도 증가, 테두리 밝아짐 |
| **활성** | 흰색 배경, 다크 텍스트, 흰색 테두리 |

- **형태**: `border-radius: 100px` (pill shape)
- **패딩**: 10px 24px (Desktop), 8px 16px (Mobile)

### 5.3 모달 (`.modal`)

- **백드롭**: `rgba(0,0,0,0.8)` + `blur(6px)`
- **콘텐츠**: `border-radius: 20px`, 최대 800px, 가로 2분할
- **애니메이션**: `scale(0.92→1)`, `opacity(0→1)`, 0.3s
- **닫기**: X 버튼 / 백드롭 클릭 / ESC 키
- **모바일**: 세로 레이아웃으로 전환

```
Desktop:                     Mobile:
┌─────────┬─────────┐       ┌─────────────┐
│         │ 카테고리  │       │   1:1 이미지  │
│  이미지  │ 메뉴명   │       ├─────────────┤
│ (50%)   │ 칼로리   │       │  카테고리     │
│         │ 구성태그  │       │  메뉴명      │
└─────────┴─────────┘       │  칼로리      │
                             │  구성태그     │
                             └─────────────┘
```

### 5.4 CTA 버튼 (`.footer__cta`)

- **형태**: pill shape (`border-radius: 100px`)
- **스타일**: 흰색 2px 테두리, 투명 배경
- **호버**: 흰색 배경 채움, 텍스트 → Main Red
- **패딩**: 16px 40px (Desktop), 14px 36px (Mobile)

### 5.5 칼로리 뱃지 (`.modal__kcal`)

- **형태**: pill shape
- **배경**: Main Red (`#EA2E00`)
- **텍스트**: White, 0.85rem, Bold

### 5.6 구성 태그 (`.modal__composition li`)

- **형태**: pill shape
- **배경**: `rgba(255,255,255, 0.08)`
- **테두리**: `rgba(255,255,255, 0.12)` 1px
- **텍스트**: 반투명 흰색, 0.85rem

---

## 6. 인터랙션 & 애니메이션

### 트랜지션 토큰

| 변수 | 값 | 용도 |
|------|----|------|
| `--transition-fast` | 0.2s ease | 호버, 토글, 미세 변화 |
| `--transition-mid` | 0.4s ease | 카드 스케일, 이미지 줌 |
| `--transition-slow` | 0.6s ease | 스크롤 페이드인 |

### 스크롤 페이드인 (`.fade-in`)

- **초기 상태**: `opacity: 0`, `translateY(40px)`
- **노출 시**: `opacity: 1`, `translateY(0)`
- **트리거**: IntersectionObserver (`threshold: 0.15`)
- **1회 실행**: 한 번 노출되면 다시 애니메이션하지 않음

### 호버 효과

| 요소 | 효과 |
|------|------|
| Nav 링크 | `opacity: 0.7` |
| 메뉴 카드 | `scale(1.03)` + 레드 글로우 그림자 |
| 카드 내 이미지 | `scale(1.05)` |
| CTA 버튼 | 배경/텍스트 색상 반전 |
| 모달 닫기 버튼 | `opacity: 0.6 → 1` |

### 모바일 터치 피드백 (`@media hover:none, pointer:coarse`)

| 요소 | 효과 |
|------|------|
| 메뉴 카드 `:active` | `scale(0.97)`, 0.1s |
| 탭 버튼 `:active` | `opacity: 0.7` |
| CTA 버튼 `:active` | 배경/텍스트 색상 반전 |

---

## 7. 반응형 브레이크포인트

| 이름 | 기준 | 주요 변경사항 |
|------|------|---------------|
| **Desktop** | 1024px+ | 3열 그리드, 가로 네비게이션 |
| **Tablet** | 768~1023px | 2열 그리드 (gap 20px) |
| **Mobile** | ~767px | 2열 그리드 (gap 12px), 햄버거 메뉴, 모달 세로 전환 |

### 모바일 주요 변경

- `--nav-height`: 64px → 56px
- `--container-padding`: 24px → 16px
- 네비게이션: 햄버거 메뉴 + 슬라이드 사이드바 (우측에서 등장)
- 슬로건: `100vh` → `auto` (이미지 비율 16:9 유지)
- 메뉴 탭: 가로 스크롤, 스크롤바 숨김
- 메뉴 카드: 폰트 축소 (카테고리 0.65rem, 메뉴명 0.9rem)
- 푸터: `safe-area-inset-bottom` 적용 (노치 디바이스 대응)

---

## 8. 브랜드 에셋

### 파일 구조

```
브랜드 에셋/
├── logo.png                      # 로고 (푸터용, 흰색 반전 필터 적용)
├── 싸빠맛로고.ai                  # 로고 원본 (Adobe Illustrator)
├── 브랜드슬로건.png               # 슬로건 이미지 원본
├── 브랜드슬로건.jpg               # 슬로건 이미지 (JPEG 압축)
├── 브랜드슬로건_업스케일.jpg       # 슬로건 이미지 (7680x3336, 업스케일)
├── 격자 패턴 레퍼런스.png          # 격자 패턴 (비주얼 브레이크용)
├── 삼겹살 덮밥.png
├── 우삼겹 덮밥.png
├── 닭어깨살 덮밥.png
├── 삼겹살 파스타 보울.png
├── 우삼겹 파스타 보울.png
├── 닭어깨살 파스타 보울.png
├── 삼겹살 샐러드 보울.png
├── 우삼겹 샐러드 보울.png
└── 닭어깨살 샐러드 보울.png
```

### 이미지 처리 규칙

- **메뉴 이미지**: PNG, 투명 배경, 1:1 비율로 표시 (`object-fit: cover`)
- **슬로건 이미지**: JPEG, 16:9 비율, `object-fit: cover`
- **로고 (푸터)**: `filter: brightness(0) invert(1)` — 흰색 표시
- **로딩**: 메뉴 이미지에 `loading="lazy"` 적용

---

## 9. 메뉴 데이터

### 카테고리 분류

| 카테고리 | data-category | 메뉴 |
|----------|---------------|------|
| 덮밥 | `rice` | 삼겹살 / 우삼겹 / 닭어깨살 |
| 파스타보울 | `pasta` | 삼겹살 / 우삼겹 / 닭어깨살 |
| 샐러드보울 | `salad` | 삼겹살 / 우삼겹 / 닭어깨살 |

### 칼로리 범위

| 카테고리 | 범위 |
|----------|------|
| 덮밥 | 550~650 kcal |
| 파스타보울 | 580~680 kcal |
| 샐러드보울 | 380~450 kcal |

---

## 10. 기술 스택 & 코드 구조

| 항목 | 기술 |
|------|------|
| 마크업 | HTML5 (시맨틱) |
| 스타일 | Vanilla CSS (CSS Custom Properties) |
| 스크립트 | Vanilla JavaScript (ES5 호환, IIFE 패턴) |
| 폰트 CDN | Pretendard (jsDelivr) |
| CSS 방법론 | BEM (`block__element`) |
| 빌드 도구 | 없음 (정적 파일) |

### 파일 구조

```
SSABBAMAT-BRANDPAGE/
├── index.html          # 메인 페이지
├── css/
│   └── style.css       # 전체 스타일
├── js/
│   └── main.js         # 인터랙션 로직
└── 브랜드 에셋/         # 이미지 에셋
```

### CSS 네이밍 규칙 (BEM)

```
.block              → .menu, .nav, .footer, .modal
.block__element     → .menu__card, .nav__logo, .modal__close
.block__el-el       → .menu__card-img, .menu__card-info
.block--modifier    → (현재 .active, .open, .hidden, .visible 클래스 사용)
```

### z-index 체계

| z-index | 요소 |
|---------|------|
| 2000 | 메뉴 상세 모달 |
| 1001 | 햄버거 버튼 |
| 1000 | 네비게이션 바 |

---

## 11. 접근성 & 성능

### 접근성

- 햄버거 버튼: `aria-label="메뉴 열기"`
- 모달 닫기 버튼: `aria-label="닫기"`
- 이미지: 모든 `img` 태그에 `alt` 속성 포함
- 키보드: ESC 키로 모달 닫기 지원
- 모달 열림 시 `body` 스크롤 잠금

### 성능

- 메뉴 이미지: `loading="lazy"` 지연 로딩
- 폰트: `preconnect`로 CDN 사전 연결
- 스크롤 애니메이션: IntersectionObserver 사용 (scroll 이벤트 대신)
- CSS: `backdrop-filter`로 GPU 가속 블러
- 모바일: `-webkit-tap-highlight-color: transparent` — 탭 하이라이트 제거
