/* ==========================================
   Interactive Javascript Logic (app.js)
   21개 원소 데이터 구조화 및 동적 인터랙션 제어
   ========================================== */

// 1. 프리모 레비의 『주기율표』 21개 원소 핵심 데이터베이스
const elementDatabase = [
    {
        id: 1,
        symbol: "Ar",
        name: "아르곤",
        number: 18,
        weight: "39.948",
        category: "noble",
        color: "#c084fc",
        rgb: "192, 132, 252",
        row: 3,
        col: 18,
        prop: "최외각 전자가 8개로 꽉 채워져 다른 원소와 결합하지 않는 완벽한 비활성 고립 형태.",
        meta: "동화되지 않는 고립, 고결함",
        period: "1919~1930s",
        storyTitle: "1장. 아르곤 (Argon)",
        story: "피에몬테 지방의 유대인 공동체 조상들은 거대한 역사의 격랑 속에서 한 걸음 비껴나, 자신들만의 언어와 관습을 지키며 정적으로 살았습니다. 섞이지 않는 그들의 은둔적 삶은 비활성 가스인 아르곤의 고결한 성질과 완벽하게 닮아 있습니다."
    },
    {
        id: 2,
        symbol: "H",
        name: "수소",
        number: 1,
        weight: "1.008",
        category: "nonmetal",
        color: "#38bdf8",
        rgb: "56, 189, 248",
        row: 1,
        col: 1,
        prop: "우주에서 가장 흔하고 가벼우며, 약간의 스파크로도 폭발적인 에너지를 내뿜는 원소.",
        meta: "근원적 에너지, 지적 호기심",
        period: "1935",
        storyTitle: "2장. 수소 (Hydrogen)",
        story: "16세 소년 시절, 친구 엔리코와 함께 다 쓰러져가는 개인 실험실에서 물을 전기분해하여 수소를 얻었습니다. 낡은 유리관과 배터리로 일궈낸 작은 폭발. 그것은 억압적인 파시즘 치하에서 스스로 질서를 탐구하려던 청춘의 지적 호기심이자 첫 불꽃이었습니다."
    },
    {
        id: 3,
        symbol: "Zn",
        name: "아연",
        number: 30,
        weight: "65.38",
        category: "metal",
        color: "#fb923c",
        rgb: "251, 146, 60",
        row: 4,
        col: 12,
        prop: "순수한 아연은 산과 반응하지 않지만, 아주 약간의 불순물이 들어가면 격렬하게 끓어오름.",
        meta: "다양성, 소수자 정체성",
        period: "1938",
        storyTitle: "3장. 아연 (Zinc)",
        story: "대학 실험실에서 완벽한 순수 아연이 강한 황산 앞에서도 미동조차 하지 않는 것을 목격합니다. 레비는 구리 불순물을 억지로 넣어 반응을 이끌어냅니다. 이는 파시즘의 기만적인 '순수혈통주의'가 결국 죽음이며, 세상을 끓어오르게 하는 생명력의 원천은 바로 '불순물(다양성)'임을 시사합니다."
    },
    {
        id: 4,
        symbol: "Fe",
        name: "철",
        number: 26,
        weight: "55.845",
        category: "metal",
        color: "#fb923c",
        rgb: "251, 146, 60",
        row: 4,
        col: 8,
        prop: "단단하고 정직하여 기만이나 공허한 말이 통하지 않는 인류 문명의 뼈대 같은 금속.",
        meta: "실존적 저항의지, 단단함",
        period: "1939",
        storyTitle: "4장. 철 (Iron)",
        story: "화학과 동창이자 굳센 성정의 친구 '산드로 델마스트로'와의 우정을 다룹니다. 돈 한 푼 없이 매서운 눈보라 속 알프스 산맥을 오르며, 레비는 산드로의 육체와 정신에서 앞으로 닥쳐올 혹독한 파시즘 전쟁의 시련을 견뎌낼 무쇠 같은 실존적 저항의지를 배웁니다."
    },
    {
        id: 5,
        symbol: "K",
        name: "칼륨",
        number: 19,
        weight: "39.098",
        category: "active",
        color: "#4ade80",
        rgb: "74, 222, 128",
        row: 4,
        col: 1,
        prop: "나트륨과 '거의 비슷해' 보이지만 수분과 닿는 즉시 격렬하고 파괴적으로 폭발하는 반응성.",
        meta: "대체재의 위험성, 미온적 타협 경고",
        period: "1941",
        storyTitle: "5장. 칼륨 (Potassium)",
        story: "파시즘의 억압 속에 가까스로 연구실 조수가 된 레비. 나트륨이 부족하자 성질이 '거의 비슷한' 포타슘(칼륨)으로 실험을 하다 치명적인 대형 화재를 냅니다. 이는 독재와 불의에 대항할 때 '거의 비슷한 대체물'과의 타협이나 부주의가 얼마나 파멸적인 대가를 부르는지 경고합니다."
    },
    {
        id: 6,
        symbol: "Ni",
        name: "니켈",
        number: 28,
        weight: "58.693",
        category: "metal",
        color: "#fb923c",
        rgb: "251, 146, 60",
        row: 4,
        col: 10,
        prop: "98%의 쓸모없는 폐석 더미 틈에서 끈질기게 걸러내야 하는 2%의 유용한 금속.",
        meta: "소외 극복, 자아의 증명",
        period: "1941",
        storyTitle: "6장. 니켈 (Nickel)",
        story: "반유대주의 차별법 때문에 가명으로 깊은 석면 광산 연구실에 위장 취업해 니켈을 걸러내는 작업을 합니다. 쓰레기 더미 광산더미 속에서 소외된 노동을 하면서도 2%의 니켈을 묵묵히 추출해 내듯, 사회적 폐기물로 취급받던 자신의 숭고한 존재 가치를 굳건히 입증해 냅니다."
    },
    {
        id: 7,
        symbol: "Pb",
        name: "납",
        number: 82,
        weight: "207.2",
        category: "heavy",
        color: "#f43f5e",
        rgb: "244, 63, 94",
        row: 6,
        col: 14,
        prop: "무겁고 유연하여 가공하기 쉬우나, 만지는 자를 서서히 죽음으로 중독시키는 어둠의 금속.",
        meta: "비극적 숙명, 문명과 중독",
        period: "1942",
        storyTitle: "7장. 납 (Lead)",
        story: "파시스트의 감시를 피해 은신하던 레비가 쓴 액자식 창작 우화입니다. 대대로 납을 찾아 방랑하며 부를 쌓지만, 결국 대를 이어 납 중독으로 짧은 생을 거듭 마감하는 가문의 비극적인 숙명을 쫓으며, 머지않아 도래할 홀로코스트의 무거운 파멸과 암울함을 암시합니다."
    },
    {
        id: 8,
        symbol: "Hg",
        name: "수은",
        number: 80,
        weight: "200.59",
        category: "heavy",
        color: "#f43f5e",
        rgb: "244, 63, 94",
        row: 6,
        col: 12,
        prop: "상온에서 유일하게 액체 상태로 존재하며, 한데 뭉쳤다가도 미세하게 깨져 고립되는 유동성.",
        meta: "유동성과 불안정성, 격리",
        period: "1942",
        storyTitle: "8장. 수은 (Mercury)",
        story: "수은이 가득 웅덩이처럼 고여 있는 외딴 화산섬의 가상 주민들의 기묘한 군상을 그린 우화입니다. 쉽게 하나로 합쳐졌다가도 미세한 충격에 작게 갈라져 철저히 고립되는 수은 방울의 유동성은, 전쟁이라는 전 지구적 파멸 속에서 고뇌하는 불안정한 인간관계의 철학적 투영입니다."
    },
    {
        id: 9,
        symbol: "P",
        name: "인",
        number: 15,
        weight: "30.974",
        category: "nonmetal",
        color: "#38bdf8",
        rgb: "56, 189, 248",
        row: 3,
        col: 15,
        prop: "어둠 속에서 푸르스름한 인광을 뿜어내지만, 스스로 열기를 내지는 못하는 신비한 물질.",
        meta: "이룰 수 없는 빛, 청춘의 덧없는 열망",
        period: "1942",
        storyTitle: "9장. 인 (Phosphorus)",
        story: "밀라노 제약 회사에서 당뇨병 약 연구에 쓰일 발광 인을 정제하던 시기입니다. 혹독한 탄압 속에서 만난 동료 줄리아에게 마음이 끌렸지만, 유대인이라는 비극적 처지와 수줍은 성격 탓에 끝내 고백하지 못하고 어긋납니다. 어둠 속에 홀로 차갑게 빛나는 인광처럼 청춘의 사랑은 스러집니다."
    },
    {
        id: 10,
        symbol: "Au",
        name: "금",
        number: 79,
        weight: "196.97",
        category: "metal",
        color: "#fb923c",
        rgb: "251, 146, 60",
        row: 6,
        col: 11,
        prop: "부식되지 않고 영원한 가치를 지니며, 강물 모래 틈에서 중력 차이로 끈질기게 채취됨.",
        meta: "절망 속 희망, 인간의 처절한 맹목성",
        period: "1943",
        storyTitle: "10장. 금 (Oro)",
        story: "파르티잔 저항군 활동을 하다 체포되어 수용소 이송을 기다리는 토리노 감옥의 수감기입니다. 죽음을 눈앞에 둔 지옥 같은 독방에서 옆방의 밀수꾼이 들려주는 '강바닥 사금 채취 무용담'을 들으며, 내일이 없을 절망 속에서도 끝끝내 '금(내일의 삶)'을 갈망하는 인간의 경이로운 의지를 목격합니다."
    },
    {
        id: 11,
        symbol: "Ce",
        name: "세륨",
        number: 58,
        weight: "140.12",
        category: "active",
        color: "#4ade80",
        rgb: "74, 222, 128",
        row: 6,
        col: 3,
        prop: "란타넘족에 속하며 철과 마찰하는 순간 눈부신 불꽃 스파크를 일으키는 발화 금속.",
        meta: "생존의 화학식, 물질을 통한 구원",
        period: "1944~1945",
        storyTitle: "11장. 세륨 (Cerio)",
        story: "아우슈비츠 수용소의 가혹한 겨울, 연구실에서 몰래 훔친 세륨 합금 막대를 칼로 깎아 불을 켜는 '부싯돌'로 변모시켰습니다. 세륨 막대 한 조각은 라이터 돌 40개가 되고, 이는 빵 120배급량으로 바뀌어 레비의 생명을 정확히 2달 동안 늘려줍니다. 생존을 위해 물질을 깎아낸 처절한 생명의 수식입니다."
    },
    {
        id: 12,
        symbol: "Cr",
        name: "크롬",
        number: 24,
        weight: "51.996",
        category: "metal",
        color: "#fb923c",
        rgb: "251, 146, 60",
        row: 4,
        col: 6,
        prop: "간처럼 단단하게 굳어버린 페인트 찌꺼기를 염화암모늄 중화 작용으로 녹여 복원해 냄.",
        meta: "중화와 치유, 상처의 해독",
        period: "1946",
        storyTitle: "12장. 크롬 (Chromium)",
        story: "지옥에서 살아 돌아와 극심한 상흔에 시달리며 들어간 첫 직장. 잘못된 배합으로 딱딱하게 굳어 쓰레기가 된 대형 페인트 통들을 화학 해독제(암모늄)로 중화시켜 다시 쓸 수 있는 액체로 살려냅니다. 이는 참혹한 기억의 독성을 문학이라는 화학작용으로 중화시켜 자아를 치유해 가는 증언의 첫 걸음이었습니다."
    },
    {
        id: 13,
        symbol: "S",
        name: "황",
        number: 16,
        weight: "32.06",
        category: "nonmetal",
        color: "#38bdf8",
        rgb: "56, 189, 248",
        row: 3,
        col: 16,
        prop: "고무에 결합하여 탄성을 극대화하지만, 고대로부터 지옥의 냄새로 낙인찍힌 양면성의 원소.",
        meta: "노동의 가치, 악마적 무질서의 통제",
        period: "1950s",
        storyTitle: "13장. 황 (Sulfur)",
        story: "화학 공장의 밤샘 교대 근무를 서며 지독한 유황 연기 속에서 보일러를 관리하는 노동자들의 이야기입니다. 지옥의 냄새를 뿜어내는 통제하기 힘든 황을 묵묵히 다스려 유용한 고무 타이어 원료로 가공해 내듯, 파괴되고 붕괴된 전후 사회의 혼란 위에서 묵묵히 생계를 가꾸어가는 인간 노동의 정직한 일상입니다."
    },
    {
        id: 14,
        symbol: "Ti",
        name: "티타늄",
        number: 22,
        weight: "47.867",
        category: "metal",
        color: "#fb923c",
        rgb: "251, 146, 60",
        row: 4,
        col: 4,
        prop: "빛을 극강으로 굴절 및 산란시켜 한 치의 얼룩도 허용하지 않는 절대적이고 눈부신 백색.",
        meta: "상처의 덮임, 순수한 무구함",
        period: "1950s",
        storyTitle: "14장. 티타늄 (Titanio)",
        story: "방 한구석에 이산화티타늄이 함유된 백색 페인트를 칠하는 페인트공과 그를 순수하게 바라보며 그림을 그려달라는 호기심 많은 꼬마 소녀 마리아의 짤막한 스케치입니다. 참혹한 전쟁의 기억 위로 티타늄 백색 페인트를 덧칠하듯, 평범한 일상의 무구함이 덮여가는 조용한 회복을 그립니다."
    },
    {
        id: 15,
        symbol: "As",
        name: "비소",
        number: 33,
        weight: "74.922",
        category: "heavy",
        color: "#f43f5e",
        rgb: "244, 63, 94",
        row: 4,
        col: 15,
        prop: "일상의 평범한 설탕 백색가루 속에 숨어들어 상대를 은밀하게 독살시키는 강력한 맹독.",
        meta: "외피 속의 악, 악의 평범성",
        period: "1950s",
        storyTitle: "15장. 비소 (Arsenico)",
        story: "독립 실험실을 연 레비에게 가난한 구두선 노인이 찾아와 라이벌이 준 비밀 설탕의 감정을 맡깁니다. 레비는 화학 반응 분석을 통해 설탕의 탈을 쓴 하얀 비소를 검출해 독살을 막아냅니다. 아우슈비츠 이후의 세상도 질투와 사소한 악의 평범함이 도처에 스며있음을 화학자의 검시를 통해 증명합니다."
    },
    {
        id: 16,
        symbol: "N",
        name: "질소",
        number: 7,
        weight: "14.007",
        category: "nonmetal",
        color: "#38bdf8",
        rgb: "56, 189, 248",
        row: 2,
        col: 15,
        prop: "단백질과 배설물 요산의 핵심 성분으로, 유기체의 산화 작용을 주도하는 생명 순환의 원소.",
        meta: "비천함 속의 창조, 위대한 순환",
        period: "1950s",
        storyTitle: "16장. 질소 (Azoto)",
        story: "립스틱 화장품을 개발하기 위해, 레비와 아내는 요산(질소)이 풍부하게 묻어 있는 양계장 닭 똥을 찾아 수거하며 고군분투합니다. 가장 비천하고 더러운 닭 똥 배설물 속에서 여성의 입술을 붉게 장식할 가장 아름다운 색소 원료(알록산)를 창조해 내는 화학의 위대하고 편견 없는 조화입니다."
    },
    {
        id: 17,
        symbol: "Sn",
        name: "주석",
        number: 50,
        weight: "118.71",
        category: "metal",
        color: "#fb923c",
        rgb: "251, 146, 60",
        row: 5,
        col: 14,
        prop: "거친 덩어리 상태에서 산에 부식되어 미세한 소금(염화주석) 입자로 쪼개지는 금속.",
        meta: "독립의 대가, 뼈아픈 마찰",
        period: "1950s",
        storyTitle: "17장. 주석 (Stagno)",
        story: "친구 에밀리오와 함께 아파트 지하실 방에 위험천만한 가설 실험실을 차려 땜납용 염화주석을 연성하며 돈을 벌던 이야기입니다. 좁은 곳에서 지독한 염산 연기를 마시며 금속을 녹이고 망치질을 하던 육체노동의 땀방울. 이는 거대 자본을 떠나 '자유로운 전문가'로서 온전히 홀로서기 위해 치러낸 뼈아픈 독립의 고난이었습니다."
    },
    {
        id: 18,
        symbol: "U",
        name: "우라늄",
        number: 92,
        weight: "238.03",
        category: "heavy",
        color: "#f43f5e",
        rgb: "244, 63, 94",
        row: 7,
        col: 3,
        prop: "가공할 방사능 에너지를 지니지만, 겉으로는 정체 모를 무거운 회색 카드뮴 조각처럼 보임.",
        meta: "허구와 보호막, 팩트 체크",
        period: "1960s",
        storyTitle: "18장. 우라늄 (Uranio)",
        story: "금속 대리점으로 일하던 시절, 보나노라는 기이한 손님이 나치 비행기 추락 현장에서 가져왔다며 맹독성 방사능을 뿜는 비밀 우라늄 조각을 맡깁니다. 흥분하여 감정한 결과 그것은 단순한 가짜 카드뮴 조각에 불과했습니다. 전쟁의 트라우마와 초라한 실존을 가리기 위해 가짜 영웅담(우라늄)에 기댄 인간의 서글픈 허풍과 대면합니다."
    },
    {
        id: 19,
        symbol: "Ag",
        name: "은",
        number: 47,
        weight: "107.87",
        category: "metal",
        color: "#fb923c",
        rgb: "251, 146, 60",
        row: 5,
        col: 11,
        prop: "대기 속의 극미한 황화수소 가스와 접하는 순간 거울 같은 반사판이 검게 산화(변색)됨.",
        meta: "잃어버린 이상, 세월과 산화",
        period: "1966",
        storyTitle: "19장. 은 (Argento)",
        story: "대학 졸업 25주년 기념회에서 재회한 늙은 친구들. 반짝이던 청춘의 순수한 열망을 가졌던 화학도들이 세월과 생활이라는 산성 대기에 노출되어 서서히 빛을 잃고 누렇게 산화 변색된 기성세대로 변해 버린 씁쓸함을 은빛 감광판 사진첩의 퇴색하는 이미지에 비유하여 나지막이 회고합니다."
    },
    {
        id: 20,
        symbol: "V",
        name: "바나듐",
        number: 23,
        weight: "50.941",
        category: "active",
        color: "#4ade80",
        rgb: "74, 222, 128",
        row: 4,
        col: 5,
        prop: "그 자신은 변하지 않으면서도, 화학 반응의 에너지 장벽을 낮춰 속도를 촉진시키는 정직한 촉매.",
        meta: "기억의 촉매, 불완전한 용서",
        period: "1967",
        storyTitle: "20장. 바나듐 (Vanadio)",
        story: "수입 페인트 원료의 결함 건으로 서신을 주고받던 중 상대 담당자 '묄러 박사'의 서명에서 아우슈비츠 Buna 수용소 연구소 시절 자신을 멸시하고 노동을 강요했던 감시자였음을 깨닫습니다. 바나듐 결함이 방아쇠(촉매)가 되어 묻어둔 역사의 기억을 깨우지만, 인간의 진정한 사죄와 치유는 화학 공식처럼 쉽게 해결되지 않음을 직시합니다."
    },
    {
        id: 21,
        symbol: "C",
        name: "탄소",
        number: 6,
        weight: "12.011",
        category: "nonmetal",
        color: "#38bdf8",
        rgb: "56, 189, 248",
        row: 2,
        col: 14,
        prop: "우주 만물과 생명체를 구성하는 뼈대이자, 소멸 없이 영원한 생명의 고리를 만들어 순환함.",
        meta: "물질의 불멸성, 문학적 승화",
        period: "1970s",
        storyTitle: "21장. 탄소 (Carbonio)",
        story: "수억 년 전 석회암 바위에 갇혀 있던 탄소 원자 하나가 분출되어 대기 중의 CO2로 떠돌다, 포도나무 잎에 흡수되고, 마침내 우유를 거쳐 작가 프리모 레비의 뇌세포 속에 들어앉아 이 책의 마지막 문장을 쓰는 연필 끝의 마침표로 점찍히는 장엄한 순환. 삶과 소멸은 결국 우주 원소의 영원한 순환이며 문학으로 승화되는 한 점의 점입니다."
    }
];

// 2. DOM 요소 참조
const periodicTable = document.getElementById('periodicTable');
const timelineTrack = document.getElementById('timelineTrack');
const timelineLabels = document.getElementById('timelineLabels');
const cardWrapper = document.getElementById('cardWrapper');
const cardFront = document.getElementById('cardFront');
const cardBack = document.getElementById('cardBack');
const card3d = document.getElementById('card3d');
const elementImg = document.getElementById('elementImg');
const mobileSlider = document.getElementById('mobileSlider');

// 3. 글로벌 상태 관리
let activeElement = elementDatabase[0]; // 최초 아르곤(Ar) 선택

// 4. 연대기 시점 정의 (타임라인 마일스톤 노드용)
const timelineMilestones = [
    { key: "1919~1930s", label: "유년 및 가풍" },
    { key: "1935", label: "학창 시절" },
    { key: "1938", label: "인종법 제정" },
    { key: "1939", label: "전운과 저항" },
    { key: "1941", label: "위장 취업" },
    { key: "1942", label: "방랑과 은신" },
    { key: "1943", label: "저항 및 체포" },
    { key: "1944~1945", label: "수용소 사투" },
    { key: "1946", label: "생환과 크롬" },
    { key: "1950s", label: "일상 복귀" },
    { key: "1960s", label: "허풍과 대면" },
    { key: "1966", label: "은혼식 동창" },
    { key: "1967", label: "바나듐 촉매" },
    { key: "1970s", label: "탄소의 순환" }
];

// 5. 주기율표 렌더링 함수
function renderPeriodicTable() {
    periodicTable.innerHTML = '';
    
    // 1행부터 7행, 1열부터 18열까지의 실제 틀을 CSS Grid 기반으로 동적 배치
    elementDatabase.forEach(el => {
        const elDiv = document.createElement('div');
        elDiv.className = `periodic-element ${el.category}-el`;
        elDiv.style.gridRow = el.row;
        elDiv.style.gridColumn = el.col;
        
        // 원소 카테고리에 맞는 CSS 변수 글로우 세팅
        let glowColor = "var(--color-metal)";
        if (el.category === 'noble') glowColor = "var(--color-noble)";
        if (el.category === 'nonmetal') glowColor = "var(--color-nonmetal)";
        if (el.category === 'active') glowColor = "var(--color-active)";
        if (el.category === 'heavy') glowColor = "var(--color-heavy)";
        
        elDiv.style.setProperty('--element-glow-color', glowColor);
        elDiv.innerHTML = `
            <span class="num">${el.number}</span>
            <span class="sym">${el.symbol}</span>
            <span class="name">${el.name}</span>
        `;
        
        // 클릭 이벤트 핸들러
        elDiv.addEventListener('click', () => {
            selectElement(el);
        });
        
        if (el.id === activeElement.id) {
            elDiv.classList.add('active');
        }
        
        periodicTable.appendChild(elDiv);
    });
}

// 6. 타임라인 렌더링 함수
function renderTimeline() {
    timelineTrack.innerHTML = '';
    timelineLabels.innerHTML = '';
    
    const totalMilestones = timelineMilestones.length;
    
    timelineMilestones.forEach((milestone, idx) => {
        // 노드 생성
        const node = document.createElement('div');
        node.className = 'timeline-node';
        
        // 균등하게 백분율 배치
        const percentage = (idx / (totalMilestones - 1)) * 100;
        node.style.left = `${percentage}%`;
        
        // 원소의 연도와 타임라인이 매칭되면 액티브 상태 부여
        if (activeElement.period === milestone.key || 
            (activeElement.period.startsWith('1950') && milestone.key === '1950s') ||
            (activeElement.period.startsWith('1960') && milestone.key === '1960s') ||
            (activeElement.period.startsWith('1919') && milestone.key === '1919~1930s')) {
            node.classList.add('active');
        }
        
        // 마우스 오버 툴팁 역할의 타이틀 지정
        node.title = `${milestone.label} (${milestone.key})`;
        
        // 타임라인 클릭 시 해당 시점의 첫 번째 원소 선택
        node.addEventListener('click', () => {
            const matchedEl = elementDatabase.find(el => {
                if (milestone.key === '1950s') return el.period.startsWith('1950');
                if (milestone.key === '1960s') return el.period.startsWith('1960');
                if (milestone.key === '1919~1930s') return el.period.startsWith('1919');
                return el.period === milestone.key;
            });
            if (matchedEl) selectElement(matchedEl);
        });
        
        timelineTrack.appendChild(node);
        
        // 라벨 렌더링 (간격 조정하여 띄엄띄엄 출력해 가독성 확보)
        if (idx % 2 === 0 || idx === totalMilestones - 1) {
            const labelSpan = document.createElement('span');
            labelSpan.textContent = milestone.key;
            labelSpan.style.position = 'absolute';
            labelSpan.style.left = `${percentage}%`;
            labelSpan.style.transform = 'translateX(-50%)';
            timelineLabels.appendChild(labelSpan);
        }
    });
}

// 7. 모바일 전용 슬라이더 카드 생성 (오직 이미지 비주얼 자료만 렌더링)
function initMobileSlider() {
    mobileSlider.innerHTML = '';
    elementDatabase.forEach(el => {
        const card = document.createElement('div');
        card.className = 'mobile-card';
        
        card.innerHTML = `
            <img class="mobile-card-img" src="images/page_${el.id}.png" alt="${el.name} 비주얼 자료">
        `;
        mobileSlider.appendChild(card);
    });
}


// 8. 카드 내용 업데이트 함수
function updateCard(el) {
    // 3D 카드 앞면 정보 렌더링
    document.getElementById('elNum').textContent = el.number;
    document.getElementById('elCat').textContent = getCategoryName(el.category);
    document.getElementById('elSym').textContent = el.symbol;
    document.getElementById('elName').textContent = el.name;
    document.getElementById('elWeight').textContent = el.weight;
    document.getElementById('elProp').textContent = el.prop;
    
    const elMeta = document.getElementById('elMeta');
    elMeta.textContent = el.meta;
    
    // 3D 카드 뒷면 스토리 렌더링
    document.getElementById('storyTitle').textContent = el.storyTitle;
    document.getElementById('storyPeriod').textContent = `${el.period}대 에피소드`;
    document.getElementById('storyContent').textContent = el.story;
    
    // CSS 변수 오버라이딩 (네온 글로우 실시간 동적 세팅)
    document.documentElement.style.setProperty('--neon-color', el.color);
    document.documentElement.style.setProperty('--neon-color-rgb', el.rgb);
    
    // 테두리 글로우 효과 리셋
    cardFront.style.borderColor = `rgba(${el.rgb}, 0.25)`;
    cardBack.style.borderColor = `rgba(${el.rgb}, 0.25)`;
}

// 9. 원소 선택 통합 매니저
function selectElement(el) {
    activeElement = el;
    
    // 1) 카드 뒤집혀 있으면 다시 앞면으로 원복 (부드러운 화면 전환을 위해 플립 상태 풀기)
    cardWrapper.classList.remove('flipped');
    
    // 2) 주기율표의 Active 클래스 재배치
    document.querySelectorAll('.periodic-element').forEach(item => {
        item.classList.remove('active');
        const sym = item.querySelector('.sym').textContent;
        if (sym === el.symbol) {
            item.classList.add('active');
        }
    });
    
    // 3) 카드 내용 갱신
    updateCard(el);
    
    // 4) 타임라인 하이라이트 갱신
    renderTimeline();
    
    // 5) 이미지 뷰어 갱신
    elementImg.src = `images/page_${el.id}.png`;
    document.getElementById('visualizerDesc').textContent = `${el.symbol}의 상세 화면`;
}

// 10. 유틸리티: 카테고리 영문명을 한국어 명칭으로 변환
function getCategoryName(cat) {
    const names = {
        noble: "비활성 기체",
        nonmetal: "비금속 원소",
        metal: "전이 금속",
        heavy: "독성/중금속",
        active: "반응성 촉매"
    };
    return names[cat] || "화학 원소";
}

// 11. 초기 구동 및 이벤트 리스너 바인딩
document.addEventListener('DOMContentLoaded', () => {
    // 주기율표 초기화
    renderPeriodicTable();
    
    // 타임라인 초기화
    renderTimeline();
    
    // 모바일 슬라이더 초기화
    initMobileSlider();
    
    // 카드 테마 초기화
    updateCard(activeElement);
    
    // 이미지 뷰어 초기화
    elementImg.src = `images/page_${activeElement.id}.png`;
    document.getElementById('visualizerDesc').textContent = `${activeElement.symbol}의 상세 화면`;
    
    // 3D 카드 클릭 플립 이벤트 등록
    cardWrapper.addEventListener('click', () => {
        cardWrapper.classList.toggle('flipped');
    });
});
