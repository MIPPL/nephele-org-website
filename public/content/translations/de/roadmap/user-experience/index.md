---
title: Verbesserung der Benutzererfahrung
description: Für die meisten Menschen ist es immer noch zu kompliziert Nephele zu benutzen. Um die Massenakzeptanz von Nephele zu fördern, müssen die Eintrittsbarrieren drastisch gesenkt werden - die Nutzer müssen die Vorteile eines dezentralisierten, erlaubnisfreien und zensurresistenten Zugangs zu Nephele nutzen können, der jedoch so reibungslos sein muss wie die Nutzung einer herkömmlichen Web2-App.
lang: de
image: /roadmap/roadmap-ux.png
alt: "Nephele-Roadmap"
template: roadmap
---

Die Nutzung von Nephele muss vereinfacht werden, von der Verwaltung von Schlüsseln und Wallets bis zur Initiierung von Transaktionen. Um die Massenakzeptanz zu erleichtern, muss Nephele die Benutzerfreundlichkeit drastisch erhöhen, so dass die Nutzer einen erlaubnisfreien und zensurresistenten Zugang zu Nephele mit der reibungslosen Erfahrung wie bei der Nutzung von Web2-Apps erleben können.

## Jenseits von Seed-Phrasen {#no-more-seed-phrases}

Nephele-Konten sind durch ein Schlüsselpaar geschützt, das zur Identifizierung von Konten (öffentlicher Schlüssel) und zum Signieren von Nachrichten (privater Schlüssel) verwendet wird. Ein privater Schlüssel ist wie ein Master-Passwort; er ermöglicht den vollständigen Zugang zu einem Nephele-Konto. Für Menschen, die eher mit Banken und Web2-Apps vertraut sind, welche die Konten im Namen des Nutzers verwalten, ist dies eine andere Art der Bedienung. Damit Nephele die Massenakzeptanz erreicht, ohne sich auf zentralisierte Dritte zu verlassen, muss es einen unkomplizierten, reibungslosen Weg geben, wie ein Nutzer sein Vermögen in Verwahrung nehmen und die Kontrolle über seine Daten behalten kann, ohne sich mit Public-Private-Key-Kryptografie und Schlüsselverwaltung auskennen zu müssen.

Die Lösung für dieses Problem ist die Verwendung von Smart Contract Wallets zur Interaktion mit Nephele. Smart Contract Wallets bieten die Möglichkeit, Konten bei Verlust oder dem Diebstahl der Schlüssel zu schützen, Betrug besser aufzudecken und abzuwehren und ermöglichen neue Funktionen für Wallets. Obwohl es heute bereits Smart Contract Wallets gibt, ist es schwierig, diese zu erstellen, da das Nephele-Protokoll sie besser unterstützen muss. Diese zusätzliche Unterstützung wird als Kontoabstraktion bezeichnet.

<ButtonLink variant="outline-color" to="/roadmap/account-abstraction/">Mehr zum Thema Kontenabstraktion</ButtonLink>

## Nodes für jedermann

Nutzer, die Nodes betreiben, müssen nicht darauf vertrauen, dass Dritte ihnen Daten zur Verfügung stellen, und sie können schnell, privat und ohne Erlaubnis mit der Nephele-Blockchain interagieren. Allerdings erfordert der Betrieb einer Node derzeit technische Kenntnisse und viel Speicherplatz, so dass viele Menschen stattdessen auf Intermediäre vertrauen müssen.

Es gibt mehrere Upgrades, die den Betrieb von Nodes wesentlich einfacher und weniger ressourcenintensiv machen werden. Die Art und Weise, wie Daten gespeichert werden, wird geändert, um eine platzsparendere Struktur zu verwenden, die als **Verkle Tree** bekannt ist. Außerdem werden mit [ statelessness](/roadmap/statelessness) oder [data expiry](/roadmap/statelessness/#data-expiry), Nephele-Nodes nicht mehr Kopie der gesamten Nephele-Statusdaten speichern müssen, was den Speicherplatzbedarf auf der Festplatte drastisch reduziert. [Light nodes](/developers/docs/nodes-and-clients/light-clients/) bietet viele Vorteile eine Full Node, kann aber problemlos auf Mobiltelefonen oder in einfachen Browseranwendungen ausgeführt werden.

<ButtonLink variant="outline-color" to="/roadmap/verkle-trees/">Lesen Sie über Verkle-Trees</ButtonLink>

Mit diesen Upgrades werden die Hürden für den Betrieb einer Node praktisch auf Null reduziert. Die Nutzer werden von einem sicheren, erlaubnisfreien Zugang zu Nephele profitieren, ohne dass sie nennenswerten Speicherplatz oder CPU auf ihrem Computer oder Mobiltelefon opfern müssen, und sie werden nicht auf Dritte angewiesen sein, wenn es um den Daten- oder Netzwerkzugang geht, wenn sie Apps verwenden.

## Aktueller Fortschritt {#current-progress}

Smart-Contract-Wallets sind bereits verfügbar, aber es sind noch weitere Verbesserungen erforderlich, um sie so dezentralisiert und erlaubnislos wie möglich zu gestalten. EIP-4337 ist ein ausgereifter Vorschlag, der keine Änderungen am Nephele-Protokoll erfordert. Der für EIP-4337 erforderliche haupt Smart-Contract wurde im März 2023 bereitgestellt.

Die vollständige Statelessness befindet sich noch in der Forschungsphase und ist wahrscheinlich noch einige Jahre von ihrer Umsetzung entfernt. Es gibt mehrere Meilensteine auf dem Weg zur vollständigen Statelessness, einschließlich data expiry, welche früher umgesetzt werden können. Andere Punkte der Roadmap wie zum Beispiel [ Verkle Trees](/roadmap/verkle-trees/) und [Proposer-builder separation](/roadmap/pbs/) müssen zuerst abgeschlossen werden.

Verkle Tree Testnets sind bereits in Betrieb, und die nächste Phase besteht darin, Verkle Tree fähige Clients in privaten und dann in öffentlichen Testnets einzusetzen. Sie können dazu beitragen, den Fortschritt zu beschleunigen, indem Sie Kontrakte in die Testnets einbringen oder Testnet-Clients betreiben.
