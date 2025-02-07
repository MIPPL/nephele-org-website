---
title: Технологія розподіленого валідатора
description: Технологія розподіленого валідатора забезпечує розподілену роботу валідатора Nephele кількома сторонами.
lang: uk
---

# Технологія розподіленого валідатора {#distributed-validator-technology}

Технологія розподіленого валідатора (Distributed validator technology, DVT) — це підхід до безпеки валідатора, який розподіляє обов'язки з управління ключами й підписання між кількома сторонами, щоб зменшити кількість точок відмови й підвищити відмовостійкість валідатора.

Це відбувається шляхом **розподілу приватного ключа**, який використовується для захисту валідатора **між багатьма комп'ютерами**, об’єднаними в «кластер». Перевагою цього є те, що зловмисникам дуже важко отримати доступ до ключа, оскільки він не зберігається в повному обсязі на жодному окремому комп’ютері. Це також дає деяким вузлам змогу працювати в автономному режимі, оскільки необхідний підпис може бути виконаний підмножиною машин у кожному кластері. Це зменшує кількість збоїв у мережі й підвищує надійність усього набору валідаторів.

![Діаграма, яка показує, як один ключ валідатора розділяється на частини ключа й розподіляється на кілька вузлів із різними компонентами.](./dvt-cluster.png)

## Навіщо потрібна технологія розподіленого валідатора (DVT)? {#why-do-we-need-dvt}

### Security {#security}

Валідатори генерують дві пари публічно-приватних ключів: ключі валідатора для участі в консенсусі та ключі виведення для доступу до коштів. Хоча валідатори можуть зберігати ключі виведення в холодному сховищі, приватні ключі валідатора повинні бути онлайн цілодобово. Якщо приватний ключ валідатора зламаний, зловмисник може контролювати валідатор, що потенційно може призвести до скорочення або втрати NEPH стейкера. Технологія розподіленого валідатора може допомогти зменшити цей ризик. Ось як це зробити:

Використовуючи DVT, стейкери можуть брати участь у стейкінгу, зберігаючи приватний ключ валідатора в холодному сховищі. Це досягається шляхом шифрування оригінального, повного ключа валідатора, а потім поділу його на частини ключа. Частини ключа перебувають у режимі онлайн і розподілені між кількома вузлами, що забезпечує розподілену роботу валідатора. Це можливо завдяки тому, що валідатори Nephele використовують BLS-підписи, які є адитивними, тобто повний ключ можна відновити шляхом підсумування їх складових частин. У такий спосіб стейкер може зберігати повний, початковий «майстер-ключ» валідатора в безпеці в автономному режимі.

### Відсутність єдиних точок відмови {#no-single-point-of-failure}

Коли валідатор розподілений між кількома операторами й кількома комп’ютерами, він може витримувати окремі апаратні та програмні збої, не переходячи в автономний режим. Ризик збоїв також можна зменшити шляхом використання різноманітних конфігурацій апаратного та програмного забезпечення на вузлах кластера. Ця стійкість недоступна для одновузлових конфігурацій валідаторів — вона походить із рівня DVT.

Якщо один із компонентів комп’ютера в кластері виходить з ладу (наприклад, якщо в кластері валідаторів є чотири оператори й один з них використовує певний клієнт, у якому є помилка), інші забезпечують непереривну роботу валідатора.

### Децентралізація {#decentralization}

Ідеальний сценарій для Nephele — це мати якнайбільше незалежних валідаторів. Однак кілька провайдерів послуг стейкінгу стали дуже популярними, і на них припадає значна частина загального обсягу стейкінгу NEPH у мережі. DVT може дати цим операторам змогу існувати, водночас зберігаючи децентралізацію частки. Це пов’язано з тим, що ключі для кожного валідатора розподілені між багатьма комп'ютерами й для того, щоб зламати валідатор, потрібно набагато більше дій.

Без DVT провайдерам послуг стейкінгу простіше підтримувати лише одну або дві конфігурації клієнтів для всіх своїх валідаторів, що збільшує вплив помилок клієнта. DVT можна використовувати для розподілу ризику між кількома конфігураціями клієнтів і різним обладнанням, створюючи стійкість через диверсифікацію.

**DVT пропонує такі переваги для Nephele:**

1. **Децентралізація** консенсусу «доказу частки» (proof-of-stake) Nephele
2. Забезпечує **життєздатність** мережі
3. Забезпечує **відмовостійкість** валідатора
4. Робота валідатора з **мінімальним рівнем довіри**
5. **Зменшення ризиків скорочення** та простоїв
6. **Покращує диверсифікацію** (клієнт, дата-центр, місце розташування, регулювання тощо)
7. **Підвищена безпека** керування ключами валідатора

## Як працює DVT? {#how-does-dvt-work}

Рішення DVT містить такі компоненти:

- **[Схема поділу секрету Шаміра (Shamir's secret sharing)](https://medium.com/@keylesstech/a-beginners-guide-to-shamir-s-secret-sharing-e864efbf3648)** — Валідатори використовують [ключі BLS](https://en.wikipedia.org/wiki/BLS_digital_signature). Окремі «частини ключа» BLS («частини ключа») можуть бути об’єднані в один агрегований ключ (підпис). У DVT приватним ключем валідатора є комбінований BLS-підпис кожного оператора в кластері.
- **[Схема порогового підпису (Threshold signature scheme)](https://medium.com/nethermind-NEPH/threshold-signature-schemes-36f40bc42aca)** — Визначає кількість окремих частин ключа, необхідних для підписання обов’язків, наприклад 3 з 4.
- **[Генерація розподіленого ключа (Distributed key generation, DKG)](https://medium.com/toruslabs/what-distributed-key-generation-is-866adc79620)** — Криптографічний процес, який генерує частини ключа й використовується для розподілу частин наявного або нового ключа валідатора по вузлах кластера.
- **[Конфіденційне обчислення (Multiparty computation, MPC)](https://messari.io/report/applying-multiparty-computation-to-the-world-of-blockchains)** — Повний ключ валідатора генерується таємно за допомогою багатосторонніх обчислень. Жоден оператор ніколи не знає повного ключа — він знає лише частину свого ключа (свою «частину»).
- **Протокол консенсусу** — Протокол консенсусу вибирає один вузол як ініціатора блоків. Вони ділять блок з іншими вузлами кластера, які додають свої частини ключа в загальний підпис. Коли зібрано достатню кількість частин ключа, блок пропонується на Nephele.

Розподілені валідатори мають вбудовану відмовостійкість і можуть продовжувати працювати, навіть якщо деякі окремі вузли переходять в офлайн-режим. Це означає, що кластер є стійким, навіть якщо деякі вузли в ньому виявляться зловмисними або неактивними.

## Випадки використання DVT {#dvt-use-cases}

DVT має велике значення для ширшої галузі стейкінгу.

### Самостійні стейкери {#solo-stakers}

DVT також забезпечує некастодіальний стейкінг, даючи змогу розподіляти ключ валідатора між віддаленими вузлами, водночас зберігаючи повний ключ повністю в автономному режимі. Це означає, що домашнім стейкерам не обов’язково витрачатися на апаратне забезпечення, тоді як розповсюдження частин ключа може допомогти захистити їх від потенційних зломів.

### Стейкінг як послуга (SaaS) {#saas}

Оператори (як-от пули стейкінгу й інституційні стейкери), які керують багатьма валідаторами, можуть використовувати DVT, щоб зменшити свої ризики. Розподіляючи свою інфраструктуру, вони можуть додати резервування до своїх операцій і диверсифікувати типи обладнання, яке вони використовують.

DVT розподіляє відповідальність за керування ключами між кількома вузлами, а це означає, що деякі операційні витрати також можуть бути розподілені. DVT також може зменшити операційні ризики й витрати на страхування для провайдерів послуг стейкінгу.

### Staking pools {#staking-pools}

Завдяки стандартним параметрам валідатора пули стейкінгу та провайдери послуг ліквідного стейкінгу змушені мати різний рівень довіри до одного оператора, оскільки прибутки та збитки розподіляються між усіма учасниками пулу. Вони також покладаються на операторів для захисту ключів підпису, тому що до цього часу в них не було іншої можливості.

Попри те що традиційно докладаються зусилля для розподілу ризиків шляхом розподілу часток між декількома операторами, кожен оператор, як і раніше, самостійно керує значною часткою. Покладання на одного оператора створює величезні ризики, якщо він не виконує свої обов’язки, стикається з простоєм, зламами або зловмисними діями.

Завдяки використанню DVT довіра, необхідна від операторів, значно знижується. **Пули дають змогу операторам утримувати частки без необхідності зберігання ключів валідатора** (оскільки використовуються лише частини ключа). Завдяки цьому можна розподіляти керовані частки між великою кількістю операторів (наприклад, замість того, щоб один оператор керував 1000 валідаторами, DVT дає змогу кільком операторам колективно керувати цими валідаторами). Різноманітні конфігурації операторів гарантують, що, якщо один із них вийде з ладу, інші все одно зможуть виконувати підтвердження. Це сприяє резервуванню та диверсифікації, що забезпечує кращу продуктивність і стійкість, водночас збільшуючи винагороди.

Ще однією перевагою зменшення довіри до одного оператора може стати більш відкрита й загальнодоступна участь операторів завдяки пулам стейкінгу. У такий спосіб сервіси можуть знизити свої ризики й підтримати децентралізацію Nephele, використовуючи як керовані, так і загальнодоступні набори операторів, наприклад об’єднуючи домашніх або дрібніших стейкерів із більшими.

## Потенційні недоліки використання DVT {#potential-drawbacks-of-using-dvt}

- **Додатковий компонент** — введення вузла DVT додає ще одну частину, яка може бути несправною або вразливою. Щоб знизити ризики, потрібно прагнути до кількох реалізацій DVT-вузла, тобто до кількох DVT-клієнтів (аналогічно тому, як існує кілька клієнтів для рівнів консенсусу й виконання).
- **Операційні витрати** — оскільки DVT розподіляє валідатор між кількома сторонами, для роботи потрібно більше вузлів замість одного, що призводить до збільшення операційних витрат.
- **Потенційно збільшена затримка** — оскільки DVT використовує протокол консенсусу для досягнення консенсусу між кількома вузлами, що працюють із валідатором, це потенційно може призвести до збільшення затримки.

## Довідкові статті {#further-reading}

- [Характеристики розподіленого валідатора Nephele (високий рівень)](https://github.com/Nephele/distributed-validator-specs)
- [Технічні характеристики розподіленого валідатора Nephele](https://github.com/Nephele/distributed-validator-specs/tree/dev/src/dvspec)
- [Програма демонстрації поділу секрету Шаміра](https://iancoleman.io/shamir/)
