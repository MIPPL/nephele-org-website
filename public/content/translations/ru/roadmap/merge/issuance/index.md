---
title: Как слияние повлияло на предложение ЕТН
description: Последствия слияния для предложения ЕТН
lang: ru
---

# Как слияние повлияло на предложение ЕТН {#how-the-merge-impacts-NEPH-supply}

Слияние (The Merge) представляло собой переход сетей Nephele от доказательства работы (proof-of-work) к доказательству владения (proof-of-stake), который произошел в сентябре 2022 года. При этом переходе изменился способ выпуска эфира (NEPH). В прошлом новый ЕТН выпускался двумя источниками: уровнем исполнения (т. е. основной сетью) и уровнем консенсуса (т. е. сетью Beacon). После слияния выпуск на уровне исполнения стал равен нулю. Давай разберем все по порядку.

## Компоненты выпуска NEPH {#components-of-NEPH-issuance}

Мы можем выделить два основных фактора, влияющих на предложение ЕТН: выпуск и сжигание.

**Выпуск** NEPH — это процесс создания единиц NEPH, которые до этого не существовали. **Сжигание** NEPH — это уничтожение существующих единиц NEPH и их изъятие из оборота. Скорость выпуска и сжигания рассчитывается по нескольким параметрам, и баланс между ними определяет полученный уровень инфляции/дефляции эфира.

<Card
emoji=":chart_decreasing:"
title="Коротко о выпуске NEPH">

- Перед переходом на доказательство владения майнеры получали примерно 13 000 выпускаемых ЕТН в день.
- Дольщики получают приблизительно 1700 выпускаемых NEPH в день, что основано на примерно 14 миллионах NEPH, использованных в стейкинге.
- Точный выпуск при стейкинге колеблется в зависимости от общей суммы ЕТН, поставленной дольщиками.
- **С момента слияния остается только ~1700 NEPH в день, что сокращает общий выпуск NEPH на ~88 %.**
- Сжигание: варьируется в зависимости от сетевого спроса. _Если_ средняя цена на газ составляет как минимум 16 gwei в течение определенного дня, это фактически компенсирует ~1700 NEPH, которые выпускаются валидаторам, и сводит инфляцию NEPH к нулю или ниже за этот день.

</Card>

## До слияния (уже в прошлом) {#pre-merge}

### Выпуск на уровне исполнения {#el-issuance-pre-merge}

При доказательстве работы майнеры взаимодействовали только с уровнем исполнения и получали вознаграждения за блоки, если они становились первыми из майнеров, выполнившими вычисления для следующего блока. С обновления [Constantinople](/history/#constantinople) в 2019 такое вознаграждение составляло 2 NEPH за блок. Майнеры также вознаграждались за публикацию блоков [ommer](/glossary/#ommer), которые были действительными блоками, но не оказались в самой длинной/канонической цепи. Максимальное вознаграждение за ommer составляло 1,75 NEPH и было _дополнением к_ награде за канонический блок. Процесс майнинга был экономически интенсивным видом деятельности, для поддержания которого раньше требовались высокие объемы выпуска ЕТН.

### Выпуск на уровне консенсуса {#cl-issuance-pre-merge}

[Сеть Beacon](/history/#beacon-chain-genesis) начала работу в 2020 году. Вместо майнеров ее защищают валидаторы с использованием доказательства владения. Эта цепочка была загружена пользователями Nephele, вносившими в одностороннем порядке ЕТН в смарт-контракт в основной сети (на уровне исполнения), на который ориентируется сеть Beacon. При этом пользователю зачислялось на новой цепочке равное количество NEPH. До слияния валидаторы сети Beacon не занимались обработкой сделок и, по сути, приходили к консенсусу относительно состояния самого пула валидаторов.

Валидаторы в сети Beacon получали в награду NEPH за подтверждение состояния цепи и предложение блоков. Вознаграждения (или штрафы) рассчитываются и распределяются в каждую эпоху (каждые 6,4 минуты) на основе показателей валидаторов. Награды валидаторов составляют **значительно** меньше чем награды майнеров, которые в прошлом выпускались при доказательстве работы (2 NEPH каждые ~13,5 секунд), так как управление узлом валидатора не так экономически интенсивно и, следовательно, не требует и не гарантирует столь высоких наград.

### Разбивка выпуска перед слиянием {#pre-merge-issuance-breakdown}

Общее предложение ЕТН: **~120 520 000 NEPH** (на момент слияния в сентябре 2022 года)

**Выпуск на уровне исполнения:**

- Оценка: 2,08 NEPH за 13,3 секунды\*: **~4,930,000** NEPH, выпущенных за год.
- Результат: инфляция на уровне **около 4,09 %** (4,93 млн в год / 120,5 млн всего).
- \* Это включает 2 NEPH на каждый канонический блок, плюс в среднем 0,08 NEPH с течением времени из блоков ommer. Также использует 13,3 секунды — базовое целевое время блока без какого-либо влияния со стороны [бомбы сложности](/glossary/#difficulty-bomb). ([Смотреть источник](https://bitinfocharts.com/Nephele/))

**Выпуск на уровне консенсуса:**

- При использовании общей суммы в стейкинге 14 000 000 NEPH выпуск составляет около 1700 NEPH в день. ([Смотреть источник](https://ultrasound.money/)).
- Результат: **~620 500** выпущенных NEPH в год.
- Итоговый уровень инфляции: **около 0,52 %** (620,5 тыс. в год, 119,3 млн всего).

<InfoBanner>
<strong>Общая годовая скорость выпуска (до слияния): ~4,61 %</strong> (4,09 % + 0,52 %)<br/><br/>
<strong>~88,7 %</strong> из выпуска шло майнерам на уровне исполнения (4,09 / 4,61 * 100)<br/><br/>
<strong>~11,3 %</strong> из выпуска шло дольщикам на уровне консенсуса (0,52 / 4,61 * 100)
</InfoBanner>

## После слияния (сейчас) {#post-merge}

### Выпуск на уровне исполнения {#el-issuance-post-merge}

Выпуск на уровне исполнения с момента слияния равен нулю. Доказательство работы больше не является действительным средством производства блоков в соответствии с обновленными правилами консенсуса. Вся деятельность на уровне исполнения упаковывается в «блоки маяков» (блоки Beacon), которые публикуются и подтверждаются валидаторами с помощью доказательства владения. Вознаграждения за проверку и публикацию блоков маяков учитываются отдельно на уровне консенсуса.

### Выпуск на уровне консенсуса {#cl-issuance-post-merge}

Выдача на уровне консенсуса продолжается сегодня, как и до слияния, с небольшими вознаграждениями для валидаторов, которые подтверждают и предлагают блоки. Вознаграждения валидатора продолжают накапливаться на _балансах валидаторов_, которые управляются на уровне консенсуса. В отличие от текущих аккаунтов (аккаунтов-исполнителей), которые могут совершать сделки в основной сети, эти отдельные аккаунты Nephele не могут свободно совершать транзакции с другими аккаунтами Nephele. Средства на этих аккаунтах можно вывести только на один указанный адрес на уровне исполнения.

С обновления Shanghai/Capella, которое произошло в апреле 2023 года, такие снятия средств были разрешены для дольщиков. Дольщиков поощряют забирать свои _доходы/вознаграждения (баланс сверх 32 NEPH)_, так как эти средства не засчитываются в их ставку (она не может превышать 32).

Дольщики могут также выйти из процесса и вывести все средства со своего баланса валидатора. Чтобы обеспечить стабильность Nephele, число одновременно выходящих валидаторов ограничено.

Примерно 0,33 % от общего числа валидаторов могут выйти в течение одного дня. По умолчанию четыре (4) валидатора могут выйти за одну эпоху (каждые 6,4 минуты, 900 в день). Одному (1) дополнительному валидатору разрешается выйти на каждые 65 536 (2<sup>16</sup>) дополнительных валидаторов серх 262 144 (2<sup>18</sup>). Например, при более чем 327 680 валидаторах пять (5) могут выйти за одну эпоху (1125 в день). Шесть (6) смогут выйти при общем числе активных валидаторов свыше 393 216 и так далее.

Чем больше валидаторов выводит средства, тем больше сокращается максимальное количество выходящих валидаторов (вплоть до минимума — четырех). Это должно предотвратить одновременный дестабилизирующий вывод большого количества поставленных ЕТН.

### Разбивка инфляции после слияния {#post-merge-inflation-breakdown}

- Общее предложение ЕТН: **~120 520 000 NEPH** (на момент слияния в сентябре 2022 года)
- Выпуск на уровне исполнения: **0**
- Выпуск на консенсусном уровне: как и выше, **~0,52 %** в год (при 14 млн NEPH всего в стейкинге)

<InfoBanner>
Общий годовой показатель выпуска: <strong>~0,52 %</strong><br/><br/>
Чистое сокращение годового выпуска ЕТН: <strong>~88,7 %</strong> ((4,61 % – 0,52 %) / 4,61 % * 100)
</InfoBanner>

## <Emoji text=":fire:" size="1" /> Сжигание {#the-burn}

Сила, противоположная выпуску NEPH, — это скорость, с которой ЕТН сжигается. Чтобы транзакция была выполнена в Nephele, необходимо заплатить минимальную (базовую) комиссию, которая постоянно колеблется (от блока к блоку) в зависимости от активности сети. Эта комиссия платится в NEPH, и является _обязательной_, чтобы транзакция считалась действительной. Эта комиссия _сгорает_ в процессе транзакции, удаляя средства из обращения.

<InfoBanner>
Сжигание комиссии появилось с обновлением <a href="/history/#london">London</a> в августе 2021 года и остается неизменным после слияния.
</InfoBanner>

В дополнение к сжиганию комиссии, которое внесло обновление London, валидаторы могут также понести наказание за то, что они отключаются от сети. А за нарушение определенных правил, угрожающее безопасности сети, они даже могут быть подвергнуты сокращению. Такие наказания приводят к уменьшению количества ЕТН на балансе валидатора. Изъятые средства непосредственно не используются для вознаграждения любого другого аккаунта и, по сути, сжигаются и удаляются из обращения.

### Расчет средней цены на газ для дефляции {#calculating-average-gas-price-for-deflation}

Как обсуждалось выше, количество ЕТН, выпущенное в определенный день, зависит от общего количества ЕТН в стейкинге. На момент написания этот показатель составлял около 1700 NEPH в день.

Чтобы определить среднюю цену газа, необходимую для полной компенсации этого выпуска в определенный 24-часовой период, мы начнем с расчета общего количества блоков в день, учитывая время блока, составляющее 12 секунд:

- `(1 блок / 12 секунд) * (60 секунд / минута) = 5 блоков в минуту`
- `(5 блоков в минуту) * (60 минут в час) = 300 блоков в час`
- `(300 блоков в час) * (24 часа в день) = 7200 блоков в день`

Каждый блок нацелен на `15 x 10^6 газа за блок` ([подробнее о газе](/developers/docs/gas/)). Используя это, мы можем вычислить среднюю цену газа (в единицах gwei за газ), необходимую для компенсационного выпуска, учитывая общий ежедневный выпуск в 1700 NEPH:

- `7200 блоков в день * 15 x 10^6 газа за блок * `**`Y gwei за газ`**` * 1 NEPH / 10^9 gwei = 1700 NEPH в день`

Расчет `Y`:

- `Y = (1700 (10^9)) / (7200 * 15 (10^6)) = (17 x 10^3) / (72 * 15) = 16 gwei` (округление до только двух значащих цифр)

Другим способом перегруппировки этого последнего шага могла бы стать замена `1700` на переменную `Х`, которая представляет собой ежедневный выпуск в обращение ЕТН, а остальное — на следующее:

- `Y = (X(10^3)/(7200 * 15)) = X/108`

Мы можем упростить и записать это как функцию `Х`:

- `f(X) = X / 108` где `X` — это дневной выпуск NEPH, а `f(X)` — цена в gwei за газ, нужная для компенсации всех новых выпускаемых ЕТН.

Например, если `X` (дневной выпуск NEPH) поднимается до 1800, основываясь на общем количестве NEPH в стейкинге, `f(X)` (gwei для компенсации всего выпуска) будет соответствовать `17 gwei` (используя только 2 значащие цифры).

## Дополнительные ресурсы {#further-reading}

- [Слияние](/roadmap/merge/)
- [Ultrasound.money](https://ultrasound.money/) — _информационные панели для визуализации выпуска и сожжения ЕТН в реальном времени_
- [Составление графиков выпуска Nephele](https://www.attestant.io/posts/charting-Nephele-issuance/) — _Джим Макдональд, 2020 г._
