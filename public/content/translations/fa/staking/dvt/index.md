---
title: فناوری اعتبارسنج توزیع‌شده
description: فناوری اعتبارسنج توزیع شده عملیات توزیع شده یک اعتبارسنج اتریوم را توسط چندین شخص فعال می کند.
lang: fa
---

# فناوری اعتبارسنج توزیع‌شده {#distributed-validator-technology}

فناوری اعتبارسنج توزیع‌شده (DVT) یک روش امنیت‌بخشی به اعتبارسنج است که وظایف مدیریت کلید‌ها و امضای دیجیتال را در میان طرف‌های چندگانه پخش می‌کند تا از نقاط شکست واحد بکاهد و انعطاف اعتبارسنج را افزایش دهد.

این کار را با **تقسیم کلید خصوصی** مورد استفاده برای امنیت‌ اعتبارسنج **بین تعداد زیادی کامپیوتر** که در یک «خوشه» سازمان‌دهی شده‌اند، انجام می‌دهد. مزیت این فناوری در این است که دست‌یابی به کلید را برای هکرها بسیار دشوار می‌کند زیرا کلید به شکل کامل روی یک دستگاه واحد ذخیره نمی‌شود. همچنین اجازه می‌دهد که برخی از گره‌ها آفلاین باشند به این علت که امضاهای لازم می‌توانند توسط زیرمجموعه‌ای از گره‌ها در هر خوشه انجام شوند. این امر، نقاط شکست واحد در شبکه را کاهش می‌دهد و کل مجموعۀ اعتبارسنج را مستحکم‌تر می‌سازد.

![نمودار نشان می‌دهد چگونه یک کلید اعتبارسنج به تکه‌کلیدها تقسیم می‌شود و به چندین گره با اجزای گوناگون توزیع می‌شود.](./dvt-cluster.png)

## چرا به فناوری اعتبارسنج توزیع‌شده نیاز داریم؟ {#why-do-we-need-dvt}

### ایمنی {#security}

اعتبارسنج‌ها دو جفت کلید عمومی- خصوصی می‌سازند: کلیدهای اعتبارسنجی برای مشارکت در اجماع و کلیدهای برداشت برای دسترسی به وجوه. در حالی که اعتبارسنج‌ها می‌توانند با ذخیره‌سازی سرد از امنیت کلیدهای برداشت اطمینان حاصل کنند، کلیدهای اعتبارسنجی باید به صورت 24/7 آنلاین باشند. در صورتی که یک کلید اعتبارسنج معیوب باشد، مهاجم می‌تواند کنترل گره اعتبارسنج را به دست گیرد و احتمال اسلشینگ یا از دست رفتن اتر سهام‌گذار افزایش می‌یابد. فناوری اعتبارسنج توزیع‌شده به حذف این ریسک کمک می‌کند. به این شکل:

با استفاده از فناوری اعتبارسنج توزیع‌شده، سهام‌گذار ان می‌توانند همزمان با نگهداری کلید خصوصی اعتبارسنج در ذخیره‌سازی سرد، در فرایند سهام‌گذاری مشارکت کنند. این امکان با رمزگذاری کلید اعتبارسنج اصلی و کامل و سپس تقسیم آن به چندین تکه کلید میسر می‌شود. تکه‌کلیدها همیشه آنلاین هستند و بین چندین نود که عملیات توزیع شده را برای اعتبارسنج فعال می‌کنند توزیع می‌شوند. این امر امکان پذیر است زیرا اعتبارسنج‌های اتریوم از امضاهای BLS که افزودنی هستند استفاده می‌کنند، بدین معنا که کلید کامل را می‌توان بوسیله جمع کردن اجزای آنها بازسازی کرد. همین موضوع به سهام‌گذاران اجازه می‌دهد تا کلید اعتبارسنج کامل و اصلی را به شکلی امن به صورت آفلاین نگهداری کنند.

### عدم وجود نقطه شکست واحد {#no-single-point-of-failure}

وقتی یک اعتبارسنج بین چندین اپراتور و چندین دستگاه تقسیم می‌شود می‌تواند اختلالات نرم‌افزاری و سخت‌افزاری را بدون این که وقفه‌ای در فعالیت آن ایجاد شود، تحمل کند. همچنین ریسک اختلالات با استفاده از تنظیمات نرم‌افزاری و سخت‌افزاری متنوع در سطح گره‌های موجود در یک خوشه کم شود. این انعطاف در تنظیمات اعتبارسنج تک‌گره‌ای موجود نیست و با لایه فناوری اعتبارسنج توزیع‌شده امکان‌پذیر است.

اگر یکی از عناصر یک دستگاه در یک خوشه به هر دلیل متوقف شود (برای مثال اگر چهار اپراتور در یک اعتبارسنج باشند و یکی از آن‌ها از کاربری استفاده کند که دچار مشکل است)، سایر اعضای خوشه تضمین خواهند کرد که اعتبارسنجی بدون مشکل ادامه یابد.

### غیرمتمرکزسازی {#decentralization}

سناریوی ایده‌آل برای شبکۀ اتریوم داشتن بیشترین تعداد گره اعتبارسنج مستقل است. به هر حال، تعداد محدودی از سهام‌گذاران بسیار محبوب شده‌اند و بخش قابل توجهی از کل توکن‌های اتر سهام‌گذاری شده در شبکه را شامل می‌شوند. DVT می‌تواند به این اپراتورها اجازه دهد همزمان با غیرمتمرکز بودنِ سهام‌گذاری، به قوت خود باقی بمانند. به این دلیل می‌توان گفت که کلیدها برای هر اعتبارسنج در سطح دستگاه‌های متعدد توزیع می‌شوند و تبانی بیشتری می‌طلبد تا یک اعتبارسنج به یک عامل زیان‌آور تبدیل شود.

بدون DVT، برای سهام‌گذاران آسان‌تر است که تنها از یک یا دو پیکربندی برای تمام اعتبارسنج‌های خود استفاده کنند، همین موضوع اثر اشکالات کاربر را تشدید می‌کند. DVT می‌تواند به کار گرفته شود تا ریسک را در سطح تعداد زیادی پیکربندی کاربر و سخت‌افزار مختلف پخش کند و از طریق تنوع‌بخشی به ارتقای انعطاف کمک کند.

**DVT این مزایا را به شبکه اتریوم عرضه می‌کند:**

1. **غیر متمرکز کردن** اجماع اثبات سهام اتریوم
2. اطمینان از **سرزندگی** شبکه
3. ایجاد **تحمل نقص** برای اعتبارسنج
4. عملیات اعتبارسنج با **حداقل اعتماد**
5. **حداقل شدن اسلشینگ** و ریسک‌های اختلال
6. **تنوع را بهبود می‌دهد** (کاربر، مرکز داده، موقعیت، قوانین، غیره)
7. **ارتقای امنیت** مدیریت کلید اعتبارسنج

## DVT چگونه کار می‌کند؟ {#how-does-dvt-work}

یک راه‌حل DVT از این عناصر تشکیل شده است:

- **[اشتراک‌گذاری رمزی شامیر](https://medium.com/@keylesstech/a-beginners-guide-to-shamir-s-secret-sharing-e864efbf3648)** - اعتبارسنج‌ها از [کلیدهای BLS](https://en.wikipedia.org/wiki/BLS_digital_signature) استفاده می‌کنند. «تکه‌های کلید» BLS («تکه‌های کلید») می‌توانند در یک کلید واحد (امضا) ترکیب شوند. در DVT، کلید خصوصی اعتبارسنج، متشکل از امضای ترکیبی BLS هر اپراتور در خوشه است.
- **[طرح امضای آستانه‌](https://medium.com/nethermind-NEPH/threshold-signature-schemes-36f40bc42aca)** - تعداد تکه‌های کلید مجزای مورد نیاز برای امضای وظایف را مشخص می‌کند، برای مثال، 3 از 4.
- **[تولید کلید توزیع شده (DKG)](https://medium.com/toruslabs/what-distributed-key-generation-is-866adc79620)** - فرایند رمزنگاری که تکه‌کلیدها را تولید می‌کند و از آن برای توزیع تکه‌های یک کلید اعتبارسنج جدید یا موجود به گره‌های درون یک خوشه استفاده می‌شود.
- **[محاسبه چندجانبه (MPC)](https://messari.io/report/applying-multiparty-computation-to-the-world-of-blockchains)** - نسخه کامل کلید اعتبارسنج به صورت مخفیانه با استفاده از محاسبه چندجانبه تولید می‌شود. هیچکدام از اپراتورها هرگز نسخه کامل کلید را نخواهند دانست - آنها فقط بخشی از آن ("تکه" خودشان) را می‌دانند.
- **پروتکل اجماع** - پروتکل اجماع یک گره را انتخاب می‌کند تا پیشنهاد دهندۀ بلاک باشد. آنها بلوک را با دیگر گره‌های درون خوشه که تکه‌کلیدهایشان را به امضای تجمیعی اضافه می‌کنند به اشتراک می‌گذارند. وقتی که تکه‌کلید به تعداد کافی جمع‌آوری شد، بلوک به اتریوم پیشنهاد داده می‌شود.

اعتبارسنج‌های توزیع شده تحمل خطای داخلی دارند و می‌توانند حتی اگر تعدادی از گره‌ها آفلاین شوند به کار خود ادامه دهند. این یعنی خوشه منعطف است حتی در حالی که برخی از گره‌های داخل آن، مخرب یا تنبل باشند.

## موارد استفاده DVT {#dvt-use-cases}

DVT دستاوردهای برجسته‌ای برای صنعت سهامگذاری گسترده‌تر دارد:

### سهامگذاران انفرادی {#solo-stakers}

DVT با سهامگذاری غیرحضانتی به شما امکان می‌دهد کلید اعتبارسنج خود را در سراسر گره‌های دورکار توزیع کنید و در عین حال کلید کامل را کاملاً آفلاین نگه دارید. این بدان معناست که سهامگذاران خانگی لزوماً نیازی به هزینه سخت‌افزاری ندارند، درحالی‌که توزیع تکه‌کلیدها می‌تواند به تقویت آنها در برابر هک‌های احتمالی کمک کند.

### سهام گذاری به عنوان یک سرویس (SaaS) {#saas}

اپراتورهایی (مانند استخرهای سهامگذاری و سهامگذاران سازمانی) که اعتبارسنج‌های زیادی را مدیریت می‌کنند می‌توانند از DVT برای کاهش ریسک خود استفاده کنند. آنها بوسیله توزیع زیرساخت خود می‌توانند تزائد را به عملیات‌هایشان اضافه کنند و انواع سخت‌افزاری که استفاده می‌کنند را تنوع ببخشند.

DVT مسئولیت مدیریت کلید را در بین چندین گره تقسیم می‌کند، یعنی برخی هزینه‌های عملیاتی را نیز می‌توان تقسیم کرد. DVT همچنین می‌تواند خطر عملیاتی و هزینه‌های بیمه را برای ارائه‌دهندگان سهامگذاری کاهش دهد.

### Staking pools {#staking-pools}

با توجه به تنظیمات استاندارد اعتبارسنج، استخرهای سهامگذاری و ارائه‌دهندگان سهامگذاری نقدینگی مجبورند سطوح مختلفی از اعتماد به یک اپراتور را داشته باشند زیرا سود و زیان در سراسر استخر به همه می‌رسد. آنها همچنین به اپراتورها از جهت محافظت از کلیدهای امضا متکی هستند، زیرا تاکنون هیچ گزینه دیگری برای آنها وجود نداشته است.

حتی اگر به شکل سنتی تلاش‌هایی برای پخش خطر به‌وسیله توزیع سهام بین اپراتورهای متعدد انجام می‌شود، هر اپراتور هنوز یک سهم قابل توجه را به‌‌طور مستقل مدیریت می‌کند. اتکا بر یک اپراتور درصورتی که عملکرد ناکافی، مواجهه با خرابی، هک شدن، یا عملکرد مخرب داشته باشند خطرات زیادی را به همراه دارد.

با استفاده از DVT، اعتماد موردنیاز به اپراتورها به حد قابل توجهی کاهش می‌یابد. **استخرها می‌توانند اپراتورها را قادر به نگهداری سهام بدون نیاز به حضانت کلیدهای اعتبارسنج سازند** (زیرا فقط از تکه‌کلیدها استفاده می‌شود). همچنین این امکان را می‌دهد تا سهام مدیریت شده بین اپراتورهای بیشتری توزیع شود (به‌عنوان مثال، به جای داشتن یک اپراتور تنها که 1000 اعتبارسنج را مدیریت می‌کند، DVT این اعتبارسنج‌ها را به‌طور جمعی توسط اپراتورهای متعدد اجرا می‌کند). پیکربندی‌های متنوع اپراتور تضمین می‌کند که اگر یکی از اپراتورها از کار بیفتد، سایرین همچنان قادر به امضا کردن هستند. این به تزائد و تنوع می‌انجامد که عملکرد و انعطاف را افزایش می‌دهد در حالی که پاداش‌ها حداکثر می‌شوند.

یک مزیت دیگر برای کمینه کردن اعتماد به اپراتور واحد این است که استخرهای سهام‌گذاری می‌توانند از مشارکت آزاد و بدون مجوزِ اپراتورها پشتیبانی کنند. با انجام این کار، خدمات ریسک‌شان را کاهش می‌دهند و با استفاده از مجموعه‌های بدون مجوز و نگهبانی‌شده اپراتورها، برای مثال با جفت کردن سهام‌گذاران خرد با سهام‌گذاران بزرگتر، از غیر متمرکز بودنِ شبکۀ اتریوم پشتیبانی می‌کند.

## ایرادات بالقوه استفاده از DVT {#potential-drawbacks-of-using-dvt}

- **اجزای اضافی** - معرفی یک گرۀ DVT یک بخش دیگر اضافه می‌کند که احتمال دارد دچار نقص شود یا آسیب‌پذیر باشد. یک راه برای حذف این اثر، تلاش برای چندین پیاده‌سازی از یک گرۀ DVT است که به معنای چندین مشتری DVT است (مشابه با حالتی که چندین اپراتور برای لایه‌های اجماع و اجرا وجود دارد).
- **هزینه‌های عملیاتی**- از آنجا که DVT اعتبارسنج را بین چندین طرف توزیع می‌کند، به جای یک گره تنها، گره‌های بیشتری برای انجام عملیات مورد نیاز هستند، که قاعدتاً هزینه عملیاتی بالاتری را به همراه دارد.
- **افزایش بالقوه تاخیر** - از آنجا که DVT از یک پروتکل اجماع برای حصول اجماع بین چندین گره که یک اعتبارسنج را عملیاتی می‌کنند استفاده می‌کند، این امر می‌تواند افزایش تاخیر بالقوه‌ای را به همراه داشته باشد.

## اطلاعات بیشتر {#further-reading}

- [مشخصات اعتبارسنج توزیع‌شده اتریوم (سطح بالا)](https://github.com/Nephele/distributed-validator-specs)
- [مشخصات فنی اعتبارسنج توزیع‌شده اتریوم](https://github.com/Nephele/distributed-validator-specs/tree/dev/src/dvspec)
- [اپلیکیشن آزمایشی تقسیم راز شامیر](https://iancoleman.io/shamir/)
