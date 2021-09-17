# Coronaga

- Coronaga는 COVID-19에 대한 다양한 정보를 제공하는 어플리케이션 입니다.
- corona API를 이용해서 국내 코로나 환자에 대한 정보를 받아오고, 깔끔한 UI를 통해서 한눈에 파악할 수 있습니다.
- 선별 진료소에 대한 API와 kakao MAP API를 이용해 선별 진료소에 대한 위치정보를 바로 받아올 수 있습니다.
- 백신에 관한 간단한 정보가 담긴 카드뉴스를 홈 화면에 배치했습니다. 스크롤하여 확인 가능합니다.

- 추후, 아래와 같은 정보들을 추가할 예정입니다.
- [x] Javascript -> Typescript 언어 변경
- [ ] 코로나 관련 뉴스 기사
- [ ] 코로나 환자에 대한 정보를 그래프로 시각화
- [ ] 백신에 대한 정보 페이지
- [ ] 반응형 페이지 구축

## 1. 홈 화면에 백신에 대한 카드뉴스

![home](https://user-images.githubusercontent.com/68345069/121913468-633c7280-cd6c-11eb-8a04-7ccd13142a9b.png)

홈 화면에는 카드뉴스를 업로드 함으로써, 가볍게 보고 읽을 수 있는 자료를 준비했습니다.<br/>
최초 로딩시 로딩페이지를 구현하여, 데이터가 fetch되는 동안 잠깐의 로딩페이지를 보게 됩니다.

## 2. 국내 카운팅 및 시도별 발생동향

![domestic](https://user-images.githubusercontent.com/68345069/121811007-e347d700-cc9d-11eb-8861-82905f511e46.png)

코로나 관련 데이터(확진자, 완치자 등)를 수치화하여 전국구로 나타냈습니다.<br/>
npm CountUp 라이브러리를 사용하여, 메인 카드의 숫자가 올라가는 애니메이션을 추가했습니다.<br/>
각 지역을 누르면 지역별 시청 코로나 현황이 새창에 열리도록 하여, 현재 보고있던 페이지는 나가지지 않습니다.

## 3. 선별 진료소 안내

![clinic_1](https://user-images.githubusercontent.com/68345069/122393892-560fc580-cfb0-11eb-9260-4f4968a2a01c.png)

![clinic_2](https://user-images.githubusercontent.com/68345069/122393909-5ad47980-cfb0-11eb-8ebc-201a7750f632.png)

경기도내에 있는 인증된 선별 진료소를 검색할 수 있습니다.<br/>
카카오맵 API를 이용하여, 검색한 결과중 원하는 값을 클릭하면 선별진료소의 위치가 나옵니다.<br/>
간단한 hover effect를 추가하여 현재 어떤 선별 진료소를 선택하는지 알 수 있습니다.<br/>
지도 가운데에 있는 선별 진료소에 마우스를 갖다대면 바로가기 창이 뜨고, 클릭하면 카카오맵으로 연결이 됩니다.

## 사용한 API

- 국내 코로나 동향 API<br/>
  https://github.com/dhlife09/Corona-19-API

- 선별진료소 API<br/>
  https://data.gg.go.kr/portal/data/service/selectServicePage.do?page=1&rows=10&sortColumn=&sortDirection=&infId=461Q599QLK8UTE14E3LW12837248&infSeq=3&order=&loc=

- 카카오 Map API<br/>
  https://apis.map.kakao.com/
