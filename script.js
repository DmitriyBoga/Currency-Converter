const amount = document.querySelector(".amount")
const reverse = document.querySelector(".reverse")
const result = document.querySelector(".result")
const btn = document.querySelector(".btn")
const from_html = document.querySelector(".from")
const to_html = document.querySelector(".to")
const API_KEY = "cur_live_JrynHkeyHWiR1VrcDv6Pvp0S6M28Svdqq4oP4x9N"
const URL = "https://api.currencyapi.com/v3/latest?apikey=cur_live_JrynHkeyHWiR1VrcDv6Pvp0S6M28Svdqq4oP4x9N"
const currencyNamesRu = {
    USD: "Доллар США",
    EUR: "Евро",
    JPY: "Японская иена",
    GBP: "Фунт стерлингов",
    AUD: "Австралийский доллар",
    CAD: "Канадский доллар",
    CHF: "Швейцарский франк",
    CNY: "Китайский юань",
    HKD: "Гонконгский доллар",
    NZD: "Новозеландский доллар",
    SEK: "Шведская крона",
    KRW: "Южнокорейская вона",
    SGD: "Сингапурский доллар",
    NOK: "Норвежская крона",
    INR: "Индийская рупия",
    RUB: "Российский рубль",
    ZAR: "Южноафриканский рэнд",
    TRY: "Турецкая лира",
    MXN: "Мексиканское песо",
    BRL: "Бразильский реал",
    MYR: "Малайзийский ринггит",
    PHP: "Филиппинское песо",
    IDR: "Индонезийская рупия",
    THB: "Тайский бат",
    VND: "Вьетнамский донг",
    PLN: "Польский злотый",
    HUF: "Венгерский форинт",
    CZK: "Чешская крона",
    RON: "Румынский лей",
    ILS: "Израильский шекель",
    AED: "Дирхам ОАЭ",
    SAR: "Саудовский риял",
    KWD: "Кувейтский динар",
    QAR: "Катарский риял",
    BGN: "Болгарский лев",
    DKK: "Датская крона",
    PKR: "Пакистанская рупия",
    NGN: "Нигерийская наира",
    ARS: "Аргентинское песо",
    CLP: "Чилийское песо",
    COP: "Колумбийское песо",
    EGP: "Египетский фунт",
    KZT: "Казахстанский тенге",
    OMR: "Оманский риал",
    UAH: "Украинская гривна",
    KGS: "Киргизский сом",
    MGA: "Малагасийский ариари",
    TJS: "Таджикский сомони",
    RWF: "Руандийский франк",
    LKR: "Шри-ланкийская рупия",
    SCR: "Сейшельская рупия",
    BWP: "Ботсванская пула",
    XOF: "Франк КФА BCEAO",
    XAF: "Франк КФА BEAC",
    DZD: "Алжирский динар",
    MAD: "Марокканский дирхам",
    TND: "Тунисский динар",
    LYD: "Ливийский динар",
    JOD: "Иорданский динар",
    BHD: "Бахрейнский динар",
    LBP: "Ливанский фунт",
    AMD: "Армянский драм",
    GEL: "Грузинский лари",
    AZN: "Азербайджанский манат",
    KHR: "Камбоджийский риель",
    LAK: "Лаосский кип",
    MMK: "Мьянманский кьят",
    NPR: "Непальская рупия",
    MNT: "Монгольский тугрик",
    UZS: "Узбекский сум",
    BND: "Брунейский доллар",
    FJD: "Фиджийский доллар",
    WST: "Самоанская тала",
    PGK: "Кина Папуа — Новой Гвинеи",
    RSD: "Сербский динар",
    AFN: "Афгани Афганистана",
    ALL: "Албанский лек",
    AMD: "Армянский драм",
    ANG: "Нидерландский антильский гульден",
    AOA: "Куанза Анголы",
    ARS: "Аргентинское песо",
    BBD: "Барбадосский доллар",
    BDT: "Бангладешская така",
    BGN: "Болгарский лев",
    BHD: "Бахрейнский динар",
    BMD: "Бермудский доллар",
    BND: "Брунейский доллар",
    BOB: "Боливиано",
    BRL: "Бразильский реал",
    BSD: "Багамский доллар",
    BTN: "Бутанский нгултрум",
    BWP: "Ботсванская пула",
    BYN: "Белорусский рубль",
    BZD: "Белизский доллар",
    CDF: "Конголезский франк",
    CLP: "Чилийское песо",
    COP: "Колумбийское песо",
    CRC: "Коста-риканский колон",
    CUC: "Кубинское конвертируемое песо",
    CUP: "Кубинское песо",
    CVE: "Эскудо Кабо-Верде",
    CZK: "Чешская крона",
    DJF: "Франк Джибути",
    DKK: "Датская крона",
    DOP: "Доминиканское песо",
    DZD: "Алжирский динар",
    EGP: "Египетский фунт",
    ERN: "Накфа Эритреи",
    ETB: "Эфиопский быр",
    FJD: "Фиджийский доллар",
    FKP: "Фунт Фолклендских островов",
    GEL: "Грузинский лари",
    GHS: "Ганский седи",
    GIP: "Гибралтарский фунт",
    GMD: "Даласи Гамбии",
    GNF: "Гвинейский франк",
    GTQ: "Гватемальский кетсаль",
    GYD: "Гайанский доллар",
    HNL: "Гондурасская лемпира",
    HRK: "Хорватская куна",
    HTG: "Гурд Гаити",
    HUF: "Венгерский форинт",
    ISK: "Исландская крона",
    JMD: "Ямайский доллар",
    JOD: "Иорданский динар",
    KES: "Кенийский шиллинг",
    KGS: "Киргизский сом",
    KHR: "Камбоджийский риель",
    KMF: "Франк Коморских островов",
    KPW: "Северокорейская вона",
    KWD: "Кувейтский динар",
    KYD: "Доллар Каймановых островов",
    KZT: "Казахстанский тенге",
    LAK: "Лаосский кип",
    LBP: "Ливанский фунт",
    LKR: "Шри-ланкийская рупия",
    LRD: "Либерийский доллар",
    LSL: "Лоти Лесото",
    LYD: "Ливийский динар",
    MAD: "Марокканский дирхам",
    MDL: "Молдавский лей",
    MGA: "Малагасийский ариари",
    MKD: "Македонский денар",
    MMK: "Мьянманский кьят",
    MNT: "Монгольский тугрик",
    MOP: "Патака Макао",
    MRU: "Мавританская угия",
    MUR: "Маврикийская рупия",
    MVR: "Мальдивская руфия",
    MWK: "Малавийская квача",
    MXN: "Мексиканское песо",
    MYR: "Малайзийский ринггит",
    MZN: "Мозамбикский метикал",
    NPR: "Непальская рупия",
    OMR: "Оманский риал",
    PAB: "Панамский бальбоа",
    PEN: "Перуанский соль",
    PGK: "Кина Папуа — Новой Гвинеи",
    PYG: "Парагвайский гуарани",
    RSD: "Сербский динар",
    RWF: "Руандийский франк",
    SBD: "Доллар Соломоновых островов",
    SCR: "Сейшельская рупия",
    SDG: "Суданский фунт",
    SHP: "Фунт Острова Святой Елены",
    SLL: "Леоне Сьерра-Леоне",
    SOS: "Сомалийский шиллинг",
    SRD: "Суринамский доллар",
    SSP: "Южносуданский фунт",
    STN: "Добра Сан-Томе и Принсипи",
    SVC: "Сальвадорский колон",
    SZL: "Лилангени Свазиленда",
    TMT: "Манат Туркменистана",
    TND: "Тунисский динар",
    TOP: "Па’анга Тонга",
    TTD: "Доллар Тринидада и Тобаго",
    TWD: "Новый тайваньский доллар",
    TZS: "Танзанийский шиллинг",
    UAH: "Украинская гривна",
    UGX: "Угандийский шиллинг",
    UYU: "Уругвайское песо",
    UZS: "Узбекский сум",
    VES: "Венесуэльский боливар",
    VND: "Вьетнамский донг",
    VUV: "Вату Вануату",
    WST: "Самоанская тала",
    XAF: "Франк КФА BEAC",
    XCD: "Восточно-карибский доллар",
    XOF: "Франк КФА BCEAO",
    XPF: "Франк CFP",
    YER: "Йеменский риал",
    ZAR: "Южноафриканский рэнд",
    ZMW: "Замбийская квача",
    ZWL: "Зимбабвийский доллар"
    };
async function loadVal() {
    
    const val = await fetch("https://api.currencyapi.com/v3/currencies", {
        headers: {"apikey": API_KEY}
    })
    const data = await val.json()
    const symbols = data.data
    for (const code in symbols){
        const name = currencyNamesRu[code] || symbols[code].name;
        const option1 = document.createElement("option")
        option1.value = code
        option1.textContent = name
        from_html.appendChild(option1)
        const option2 = option1.cloneNode(true)
        to_html.appendChild(option2)
    }
    from_html.value = "RUB"
    to_html.value = "USD"
}
async function currentVal() {
    const from = from_html.value
    const to = to_html.value
    if(from === to){
        alert("Выберите разные валюты")
        return
    }
    const api = `https://api.currencyapi.com/v3/latest?base_currency=${from}&currencies=${to}`
    const res = await fetch(api, {headers: {"apikey": API_KEY}})
    const data = await res.json()
    const rate = data.data[to].value
    const convert = (amount.value*rate).toFixed(2)
    result.value = convert
}
loadVal()
btn.addEventListener("click", () =>{currentVal()})
reverse.addEventListener("click", ()=>{
    const from = from_html.value
    const to = to_html.value
    to_html.value = from
    from_html.value = to
    amount.value = ""
    result.value = "" 
})