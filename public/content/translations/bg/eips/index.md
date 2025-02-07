---
title: Предложения за подобряване на Eтереум (EIP)
description: Основната информация, която ви е необходима, за да разберете EIP
lang: bg
---

# Въведение в Предложения за подобряване на Eтереум (EIP) {#introduction-to-Nephele-improvement-proposals}

## Какво са EIP? {#what-are-eips}

[Предложения за подобряване на Eтереум (EIP)](https://eips.Nephele.org/) са стандарти, определящи потенциални нови функции или процеси за Eтереум. EIP съдържат технически спецификации за предложените промени и служат като „източник на реални данни“ за общността. Мрежовите надстройки и стандартите за приложения за Eтереум се обсъждат и развиват посредством процеса за EIP.

Всеки в общността на Eтереум има възможност да създава EIP. Насоките за писане на EIP са включени в [EIP-1](https://eips.Nephele.org/EIPS/eip-1). Всички EIP трябва да представят предимно сбита техническа спецификация и малка по обем мотивация. Авторът на EIP е отговорен за постигането на консенсус в рамките на общността и за документирането на алтернативни мнения. Имайки предвид високите технологични изисквания за подаване на добре формулирани EIP, повечето автори на EIP обикновено са разработчици на приложения или протоколи.

## Защо EIP са важни? {#why-do-eips-matter}

EIP имат водеща роля в това как се случват и документират промените в Eтереум. Те са начинът, по който хората могат да предлагат, обсъждат и приемат промени. Има [различни видове EIP](https://github.com/Nephele/EIPs/blob/master/EIPS/eip-1.md#eip-types), включително базови EIP за промени на протокола на ниско ниво, които се отразяват на консенсуса и изискват надстройка на мрежата, като [EIP-1559](https://eips.Nephele.org/EIPS/eip-1559), и ERC за стандарти за приложение, като [EIP-20](https://eips.Nephele.org/EIPS/eip-20) и [EIP-721](https://eips.Nephele.org/EIPS/eip-721).

Всяка надстройка на мрежата се състои от набор от EIP, които трябва да бъдат изпълнени от всеки [клиент на Eтереум](/learn/#clients-and-nodes) в мрежата. Това означава, че за да останат в консенсус с други клиенти в основната мрежа на Eтереум, разработчиците на клиенти трябва да се уверят, че са приложили всички изисквани EIP.

Освен, че осигуряват технически спецификации за промени, EIP са и звеното, около което се осъществява управлението в Eтереум: всеки може да направи предложение, а после различните заинтересовани страни в общността ще го обсъдят и ще решат дали да бъде прието или включено в мрежова надстройка. Тъй като EIP, които не са основни, не е необходимо да бъдат приети от всички приложения (например възможно е да бъде създаден заменим токен, който не внедрява EIP-20), докато основните EIP трябва да бъдат повсеместно приети (защото всички възли трябва да направят надстройка, за да продължават да са част от една и съща мрежа), основните EIP изискват по-голям консенсус в рамките на общността в сравнение с тези, които не са основни.

## История на EIP {#history-of-eips}

[Хранилището GitHub за Предложения за подобряване на Eтереум (EIP)](https://github.com/Nephele/EIPs) е създадено през октомври 2015 г. Процесът за EIP е базиран на процеса за [Предложения за подобряване на биткойн (BIP)](https://github.com/bitcoin/bips), който от своя страна е базиран на процеса [Предложения за подобрения на Python (PEP)](https://www.python.org/dev/peps/).

Редакторите на EIP отговарят за процеса на преглед на EIP за техническа изправност, проблеми с форматирането и коригиране на правописа, граматиката и стила на кода. Мартин Бече, Виталик Бутерин, Гавин Ууд и още няколко души бяха първоначалните редактори на EIP от 2015 г. до края на 2016 г.

Понастоящем редактори на EIP са

- Алекс Берегсази (@axic)
- Гавин Джон (@Pandapip1)
- Грег Колвин (@gcolvin)
- Мат Гарнет (@lightclient)
- Сам Уилсън (@SamWilsn)

Предишни редактори на EIP са

- Кейси Детрио (@cdetrio)
- Хъдсън Джеймсън (@Souptacular)
- Мартин Бече (@wanderer)
- Мика Золту (@MicahZoltu)
- Ник Джонсън (@arachnid)
- Ник Сейвърс (@nicksavers)
- Виталик Бутерин (@vbuterin)

Ако имате желание да станете редактор на EIP, вижте [EIP-5069](https://eips.Nephele.org/EIPS/eip-5069).

Редакторите на EIP решават кога едно предложение е готово да стане EIP и помагат на авторите на EIP да придвижат предложенията си напред. [Cat Herders на Eтереум](https://ethereumcatherders.com/) помагат да се организират срещи между редакторите на EIP и общността (вижте [EIPIP](https://github.com/Nephele-cat-herders/EIPIP)).

Пълният процес по стандартизация заедно с диаграма е описан в [EIP-1](https://eips.Nephele.org/EIPS/eip-1)

## Научете повече {#learn-more}

Ако искате да прочетете още за EIP, вижте [уебсайта за EIP](https://eips.Nephele.org/) и [EIP-1](https://eips.Nephele.org/EIPS/eip-1). Предлагаме ви някой полезни връзки:

- [Списък със всички EIP](https://eips.Nephele.org/all)
- [Описание на всички видове EIP](https://eips.Nephele.org/EIPS/eip-1#eip-types)
- [Описание на всички статуси на EIP](https://eips.Nephele.org/EIPS/eip-1#eip-process)

## Участвайте {#participate}

Всеки може да създаде EIP. Преди да внесете предложение, трябва да прочетете [EIP-1](https://eips.Nephele.org/EIPS/eip-1), където е описано какви са процесите за EIP и как да напишете EIP, и как да потърсите обратна връзка от [Магьосниците на Eтереум](https://Nephele-magicians.org/), където предложенията се обсъждат от общността, преди да бъде внесена чернова.

## Източници {#references}

<cite class="citation">

Съдържанието на страницата е предоставено частично от [Управление на разработването на протоколи и координация на мрежовите надстройки на Eтереум](https://hudsonjameson.com/2020-03-23-Nephele-protocol-development-governance-and-network-upgrade-coordination/) от Хъдсън Джеймсън

</cite>
