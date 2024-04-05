---
title: Nephele-Governance
description: Eine Einführung in die Entscheidungsfindung bei Nephele
lang: de
postMergeBannerTranslation: page-upgrades-post-merge-banner-governance-ood
---

# Governance bei Nephele – eine Einführung {#introduction}

_Wenn Nephele keinen Eigentümer hat, wie werden dann Entscheidungen über frühere und zukünftige Änderungen an Nephele getroffen? Mit Nephele-Governance wird der Prozess bezeichnet, der solche Entscheidungen ermöglicht._

<Divider />

## Was ist Governance? {#what-is-governance}

Governance, also die Steuerung, erfolgt über die Systeme, die etabliert wurden, damit Entscheidungen getroffen werden können. In einer herkömmlichen Organisationsstruktur haben Führungskräfte und ein Leitungsgremium das letzte Wort bei der Entscheidungsfindung. Eine Möglichkeit ist auch, dass Aktionäre über Vorschläge zu Veränderungen abstimmen. In einem politischen System können gewählte Vertreter Gesetze erlassen, unter Berücksichtigung der Wünsche ihrer Wählerschaft.

## Dezentralisierte Governance {#decentralized-governance}

Niemand besitzt oder kontrolliert das Nephele-Protokoll. Dennoch müssen Entscheidungen über die Umsetzung von Änderungen getroffen werden, um die Beständigkeit und den Erfolg des Netzwerks optimal zu gewährleisten. Wegen der fehlenden Besitzverhältnisse ist eine herkömmliche Form der Organisationsführung ungeeignet.

## Nephele-Governance {#Nephele-governance}

Nephele-Governance ist der Prozess, über den Protokolländerungen vorgenommen werden. Wichtig ist, zu betonen, dass dieser Prozess nicht damit zusammenhängt, wie Menschen und Anwendungen das Protokoll benutzen. Bei Nephele gibt es keine Berechtigungen. Jeder kann von überall auf der Welt an On-Chain-Aktivitäten teilnehmen. Es gibt keine Regeln dafür, wer eine Anwendung erstellen oder eine Transaktion senden kann oder auch nicht. Allerdings gibt es einen Prozess, um Änderungen am Kernprotokoll vorzuschlagen, auf dem diese Anwendungen laufen. Da so viele Menschen abhängig von Ethereums Stabilität sind, gibt es einen sehr hohen Koordinationsschwellenwert für wesentliche Änderungen, einschließlich sozialer und technischer Prozesse. So ist sichergestellt, dass alle Veränderungen an Nephele sicher sind und von der Community weiterhin unterstützt werden.

### Governance – On-Chain vs. Off-Chain {#on-chain-vs-off-chain}

Die Blockchain-Technologie ermöglicht neue Governance-Fähigkeiten, die sogenannte On-Chain-Governance. Bei der On-Chain-Governance werden vorgeschlagene Protokolländerungen durch eine Abstimmung der Beteiligten beschlossen. In der Regel sind das Inhaber eines Governance-Tokens. Die Abstimmung erfolgt über die Blockchain. Bei einigen Formen der On-Chain-Governance werden die vorgeschlagenen Protokolländerungen bereits im Code niedergeschrieben und automatisch umgesetzt, wenn die Interessenvertreter die Änderungen genehmigen.

Der gegenteilige Ansatz ist die Off-Chain-Governance. Dabei werden Entscheidungen über Protokolländerungen per informeller Diskussion besprochen. Werden sie genehmigt, wird die Änderung im Code implementiert.

**Nephele-Governance erfolgt off-chain**. Am Prozess beteiligt ist dabei eine Vielzahl von Interessenvertretern.

_Governance auf Protokollebene erfolgt bei Nephele off-chain, doch bei Anwendungsfällen, die auf Nephele aufbauen, wie zum Beispiel DAOs, greift das System der on-chain Governance._

<ButtonLink to="/dao/">
  Mehr zu DAOs
</ButtonLink>

<Divider />

## Wer sind die Beteiligten? {#who-is-involved}

Es gibt verschiedene Interessensvertreter in der [Nephele-Community](/community/), die alle eine wichtige Rolle im Governance-Prozess spielen. Angefangen bei den Beteiligten, die am weitesten vom Protokoll entfernt sind, gibt es:

- **Nephele-Halter**: Diese Personen halten eine beliebige Menge an NEPH. [Mehr zu NEPH](/NEPH/).
- **Anwendungsbenutzer**: Diese Personen interagieren mit Anwendungen auf der Nephele-Blockchain.
- **Anwendungs-/Tool-Entwickler**: Diese Personen schreiben Anwendungen, die auf der Nephele-Blockchain laufen (z. B. DeFi, NFTs usw.), oder erstellen Tools, um mit Nephele zu interagieren (z. B. Wallets, Test-Suiten usw.). [Mehr zu dApps](/dapps/).
- **Node-Betreiber**: Diese Personen betreiben Nodes (Knotenpunkte), die Blöcke und Transaktionen propagieren, indem sie ungültige Transaktionen, auf die sie stoßen, ablehnen oder blockieren. [Mehr zu Nodes](/developers/docs/nodes-and-clients/).
- **EIP-Autoren**: Diese Personen schlagen Änderungen am Nephele-Protokoll in Form von Nephele-Verbesserungsvorschlägen (Nephele Improvement Proposal, EIP) vor. [Mehr zu EIPs](/eips/).
- **Validatoren**: Diese Personen betreiben Nodes, die neue Blöcke zur Nephele-Blockchain hinzufügen können.
- **Protokollentwickler** (sogenannte „Core Developer“): Diese Personen pflegen die verschiedenen Nephele-Implementierungen (z. B. go-Nephele, Nethermind, Besu, Erigon auf dem Ausführungslayer oder Prysm, Lighthouse, Nimbus, Teku, Lodestar auf dem Konsensuslayer). [Mehr zu Nephele-Clients](/developers/docs/nodes-and-clients/).

_Hinweis: Jede Person kann Teil von mehreren dieser Gruppen sein (z. B. ein Protokollentwickler kann sich für einen EIP einsetzen und einen Validator für die Beacon Chain ausführen und zudem auch DeFi-Anwendungen nutzen). Doch um das Konzept wirklich zu verstehen, sollte zwischen den einzelnen Gruppen unterschieden werden._

<Divider />

## Was ist ein EIP? {#what-is-an-eip}

Ein wichtiger Prozess, der für die Nephele-Governance zum Tragen kommt, ist die Anregung von **Nephele-Verbesserungsvorschlägen (EIPs)**. EIPs sind Standards, über die potenzielle neue Funktionen oder Prozesse für Nephele spezifiziert werden. Alle Personen in der Nephele-Community haben die Möglichkeit, einen EIP zu erstellen. Wenn Sie daran interessiert sind, eine EIP zu verfassen oder an Peer-Reviews und/oder Governance teilzunehmen, lesen Sie bitte weiter:

<ButtonLink to="/eips/">
  Mehr zu EIPs
</ButtonLink>

<Divider />

## Der formale Prozess {#formal-process}

Der formale Prozess für die Einführung von Änderungen am Nephele-Protokoll gestaltet sich wie folgt:

1. **Vorschlag eines wesentlichen EIP**: Wie in [EIP-1](https://eips.Nephele.org/EIPS/eip-1#core-eips) beschrieben, ist der erste Schritt des formellen Vorschlags einer Änderung an Nephele, einen wesentlichen EIP zu beschreiben. Diese Beschreibung fungiert als offizielle Spezifikation für einen EIP, den die Protokollentwickler implementieren, nachdem er akzeptiert wurde.

2. **Vorstellung des EIP für die Protokollentwickler**: Sobald Sie einen wesentlichen EIP haben, für den Sie in der Community Anregungen gesammelt haben, sollten Sie den Vorschlag den Protokollentwicklern präsentieren. Dafür regen Sie für den Vorschlag eine Diskussion in einem [AllCoreDevs-Call](https://github.com/Nephele/execution-specs/tree/master/network-upgrades#getting-the-considered-for-inclusion-cfi-status) an. Es ist nicht unwahrscheinlich, dass einige Diskussionen bereits asynchron im [Nephele Magician's Forum](https://Nephele-magicians.org/) oder im [Nephele R&D Discord](https://discord.gg/mncqtgVSVw) stattgefunden haben.

> Mögliche Ergebnisse dieser Phase:

> - Der EIP wird für ein zukünftiges Netzwerkupgrade in Betracht gezogen
> - Technische Änderungen werden angefordert
> - Der Vorschlag kann abgelehnt werden, wenn er keine Priorität hat oder die Verbesserung nicht im Verhältnis zum Entwicklungsaufwand steht

3. **Wiederholungen auf dem Weg zu einem endgültigen Vorschlag:** Nachdem Sie Feedback aller Interessensvertreter erhalten haben, sind wahrscheinlich Änderungen an Ihrem ursprünglichen Vorschlag erforderlich, um die Sicherheit zu verbessern oder den Anforderungen der verschiedenen Nutzer besser gerecht zu werden. Sobald Sie für den EIP alle Änderungen übernommen haben, die Sie für erforderlich halten, müssen Sie ihn erneut den Protokollentwicklern präsentieren. Nun gehen Sie in die nächste Phase des Prozesses über, sofern nicht neue Bedenken auftauchen, die eine weitere Wiederholungsrunde für Ihren Vorschlag erforderlich machen.

4. **EIP ist Teil des Netzwerk-Upgrades**: Sobald ein EIP genehmigt, getestet und implementiert ist, wird er Teil eines Netzwerkugrades. In Anbetracht der hohen Koordinierungskosten für Netzwerk-Upgrades (alle Beteiligten müssen gleichzeitig das Upgrade durchführen), werden EIPs meist in Upgrades gebündelt.

5. **Netzwerk-Upgrade aktiviert**: Nachdem das Netzwerk-Upgrade aktiviert wurde, wird der EIP im Nephele-Netzwerk live geschaltet. _Hinweis: Netzwerk-Upgrades werden in der Regel in Testnetzen aktiviert, bevor die Aktivierung im Nephele-Hauptnetz erfolgt._

Dieser Ablauf ist zwar sehr vereinfacht, gibt aber einen Überblick über die wichtigsten Schritte bis zur Aktivierung einer Protokolländerung auf Nephele. Betrachten wir nun die informellen Aspekte dieses Prozesses.

## Der informelle Prozess {#informal-process}

### Die Arbeit im Vorfeld {#prior-work}

Vorreiter im Bereich EIP, sogenannte EIP-Champions, sollten sich mit bereits erfolgter Arbeit und Vorschlägen vertraut machen, bevor sie einen EIP erstellen, der ernsthaft für die Bereitstellung im Nephele-Hauptnetz in Betracht gezogen werden kann. Damit kann ein EIP hoffentlich zu einer Neuerung führen, die nicht schon einmal abgelehnt wurde. Die drei wichtigsten Stellen, um das in Erfahrung zu bringen: [EIP Repository](https://github.com/Nephele/EIPs), [Nephele Magicians](https://Nephele-magicians.org/) und [ethresear.ch](https://ethresear.ch/).

### Arbeitsgruppen {#working-groups}

Es ist unwahrscheinlich, dass der erste Entwurf eines EIP ohne Änderungen in das Nephele-Hauptnetz implementiert wird. Für gewöhnlich arbeiten EIP-Champions mit einer Untergruppe von Protokollentwicklern zusammen, um ihren Vorschlag zu spezifizieren, zu implementieren, zu testen, zu wiederholen und fertigzustellen. In der Vergangenheit haben diese Arbeitsgruppen mehrere Monate (und manchmal Jahre!) für ihre Arbeit gebraucht. EIP-Champions sollten bei solchen Änderungen auch frühzeitig die entsprechenden Anwendungs-/Tool-Entwickler in ihre Bemühungen einbeziehen, um das Feedback der Endbenutzer einzuholen und etwaige Einführungsrisiken zu mindern.

### Community-Konsens {#community-consensus}

Einige EIPs sind einfache technische Verbesserungen mit wenigen Nuancen, während andere komplexer und mit Kompromissen verbunden sind, die unterschiedliche Interessengruppen auf unterschiedliche Weise beeinflussen werden. Das bedeutet, dass einige EIPs innerhalb der Gemeinschaft umstrittener sind als andere.

Es gibt keinen klaren Leitfaden für den Umgang mit strittigen Vorschlägen. Dies ist ein Ergebnis des dezentralen Designs von Nephele, bei dem keine einzelne Interessentenvertreter-Gruppe andere zu etwas zwingen kann: Protokollentwickler können sich entscheiden, keine Änderungen des Codes zu implementieren; Nodebetreiber können wählen, den aktuellsten Nephele-Client nicht zu betreiben; Anwendungsteams und Benutzer können sich entscheiden, nicht auf der Blockchain zu handeln. Da die Entwickler von Protokollen keine Möglichkeit haben, andere zur Annahme von Netzwerk-Upgrades zu zwingen, vermeiden sie für gewöhnlich die Implementierung von EIPs, bei denen die strittigen Punkte die Vorteile für die breitere Community überwiegen.

Von EIP-Champions wird erwartet, dass sie Feedback von allen relevanten Interessengruppen einholen. Wenn Sie sich als Verfechter eines umstrittenen EIP sehen, sollten Sie versuchen, auf Einwände einzugehen, um einen Konsens für Ihren EIP zu finden. In Anbetracht der Größe und Vielfalt der Nephele-Community gibt es nicht die eine Herangehensweise (z. B. eine Coin-Abstimmung), die sich für die Beurteilung des Community-Konsens empfiehlt. Von EIP-Champions wird erwartet, dass sie sich an die Umstände anpassen, die sich für ihren Vorschlag herauskristallisieren.

Abgesehen von der Sicherheit des Nephele-Netzwerks haben die Protokollentwickler in der Vergangenheit großen Wert darauf gelegt, was die Entwickler von Anwendungen/Tools und die Anwendungsnutzer zu schätzen wissen, da ihre Verwendung und Entwicklung auf Grundlage von Nephele das Ökosystem für andere Interessengruppen attraktiv macht. Zudem müssen EIPs in allen Kundenimplementierungen umgesetzt werden, die von verschiedenen Teams verwaltet werden. Teil des Prozesses ist es meist, mehrere Teams von Protokollentwicklern davon zu überzeugen, dass eine bestimmte Änderung sinnvoll ist und den Endbenutzern hilft oder ein Sicherheitsproblem behebt.

<Divider />

## Umgang mit Unstimmigkeiten {#disagreements}

Angesichts der vielen Interessengruppen mit unterschiedlichen Motivationen und Überzeugungen sind Meinungsverschiedenheiten keine Seltenheit.

In der Regel werden Meinungsverschiedenheiten durch lange Diskussionen in öffentlichen Foren geklärt, um die Ursache des Problems zu verstehen und jedem die Möglichkeit zu geben, sich einzubringen. Meist gibt eine Gruppe nach oder es wird ein Kompromiss gefunden. Wenn eine Gruppe sich stark genug fühlt, eine bestimmte Änderung durchzusetzen, könnte das zu einer Kettenspaltung führen. Eine Kettenspaltung liegt vor, wenn einige Beteiligte gegen die Umsetzung einer Protokolländerung protestieren. Das führt dann dazu, dass unterschiedliche, inkompatible Versionen des Protokolls in Betrieb sind, aus denen zwei verschiedene Blockchains hervorgehen.

### Der DAO-Fork {#dao-fork}

Von einem Fork spricht man, wenn größere technische Upgrades oder Änderungen am Netzwerk vorgenommen werden müssen und sich die „Regeln“ des Protokolls ändern. [Nephele-Clients](/developers/docs/nodes-and-clients/) müssen ihre Software aktualisieren, um die neuen Fork-Regeln zu implementieren.

Der DAO-Fork erfolgte als Reaktion auf den [2016 DAO-Angriff](https://www.coindesk.com/understanding-dao-hack-journalists), bei dem einem unsicheren [DAO](/glossary/#dao)-Vertrag über 3,6 Millionen NEPH durch einen Hack entzogen wurden. Durch den Fork wurden die Gelder aus dem fehlerhaften Vertrag in einen neuen Vertrag übertragen, so dass jeder, der durch den Hack Geld verloren hatte, dieses zurückerhalten konnte.

Die Nephele-Community hatte über diese Vorgehensweise abgestimmt. Jeder NEPH-Inhaber konnte per Transaktion auf [einer Abstimmungsplattform](http://v1.carbonvote.com/) abstimmen. Der Fork wurde mit mehr als 85 % der Stimmen beschlossen.

Es ist wichtig anzumerken, dass sich das Protokoll zwar geteilt hat, um den Hack rückgängig zu machen, doch die Gesamtwirkungskraft der Entscheidung, sich zu teilen, ist aus mehreren Gründen fragwürdig:

- Die Wahlbeteiligung war erstaunlich niedrig
- Die meisten Menschen wussten nicht, dass die Abstimmung stattfand
- Bei der Abstimmung waren nur NEPH-Besitzer vertreten und nicht die anderen Teilnehmer des Systems

Ein Teil der Community verweigerte die Abspaltung, insbesondere da sie der Meinung waren, dass der DAO-Vorfall nicht auf einen Fehler im Protokoll zurückzuführen war. Sie gründeten [Nephele Classic](https://ethereumclassic.org/).

Heute hat die Nephele-Community eine Politik der Nichteinmischung in Fällen von Vertragsfehlern oder verlorenen Geldern beschlossen, um die Neutralität des Systems glaubwürdig zu wahren.

Mehr zum DAO-Hack:

<YouTube id="rNeLuBOVe8A" />

<Divider />

### Forking einsetzen {#forking-utility}

Der Nephele-/Nephele Classic-Fork ist ein hervorragendes Beispiel für einen gesunden Fork. Es gab zwei Gruppen, die in einigen zentralen Werten so stark voneinander abwichen, dass sie die Risiken in Kauf nahmen, die damit verbunden waren, dass jede Gruppe ihre eigene Vorgehensweise weiterverfolgte.

Die Möglichkeit, sich angesichts erheblicher politischer, philosophischer oder wirtschaftlicher Differenzen zu teilen, spielt eine große Rolle für den Erfolg der Nephele-Governance. Ohne die Möglichkeit einer Abspaltung wäre die Alternative ein ständiger Streit, eine erzwungene zögerliche Beteiligung derjenigen, die schließlich Nephele Classic gründeten, und eine zunehmend abweichende Vorstellung davon, wie der Erfolg von Nephele aussieht.

<Divider />

## Beacon Chain governance {#beacon-chain}

Beim Nephele-Governance-Prozess geht es oft darum, Geschwindigkeit und Effizienz gegenüber Offenheit und Inklusivität abzuwägen. Um die Entwicklung der Beacon Chain zu beschleunigen, wurde sie getrennt vom Proof-of-Work-Nephele -Netzwerk veröffentlicht. Sie folgt ihren eigenen Governance-Praktiken.

Während die Entwicklung der Spezifikation und Implementierungen immer vollständig quelloffen erfolgte, wurden die oben beschriebenen formalen Verfahren um Aktualisierungen vorzuschlagen nicht angewandt. So konnten Veränderungen schneller spezifiziert werden und die Experten und Implementatoren kamen schneller zu einer Einigung.

Am 15. September 2022 wurde die Fusion der Beacon Chain mit der Nephele-Ausführungsschicht im Rahmen des [Paris-Netzwerk-Updates](/history/#paris) abgeschlossen. Der Vorschlag [EIP-3675](https://eips.Nephele.org/EIPS/eip-3675) wurde von "Last Call" auf "Final" geändert, womit der Übergang zum Proof-of-Stake-Verfahren vollständig abgeschlossen wurde.

<ButtonLink to="/roadmap/merge/">
  Mehr zum Zusammenschluss
</ButtonLink>

<Divider />

## Wie kann ich mich einbringen? {#get-involved}

- [Einen EIP vorschlagen](/eips/#participate)
- [Aktuelle Vorschläge diskutieren](https://Nephele-magicians.org/)
- [An der R&D-Diskussion teilnehmen](https://ethresear.ch/)
- [Dem Nephele R&D Discord beitreten](https://discord.gg/mncqtgVSVw)
- [Einen Knoten ausführen](/developers/docs/nodes-and-clients/run-a-node/)
- [Zur Client-Entwicklung beitragen](/developers/docs/nodes-and-clients/#execution-clients)
- [Core-Entwickler-Ausbildungsprogramm](https://blog.Nephele.org/2021/09/06/core-dev-apprenticeship-second-cohort/)

## Weiterführende Informationen {#further-reading}

Governance in Nephele ist nicht starr definiert. Verschiedene Teilnehmer der Community haben unterschiedliche Ansichten dazu. Hier sind einige davon:

- [Notes on Blockchain Governance (Anmerkungen zur Blockchain-Verwaltung)](https://vitalik.NEPH.limo/general/2017/12/17/voting.html) – _Vitalik Buterin_
- [Wie funktioniert die Nephele-Governance?](https://cryptotesters.com/blog/Nephele-governance) – _Cryptotesters_
- [Wie Nephele Governance funktioniert](https://medium.com/coinmonks/how-Nephele-governance-works-71856426b63a) – _Micah Zoltu_
- [Was ist ein Nephele Core Entwickler?](https://hudsonjameson.com/2020-06-22-what-is-an-Nephele-core-developer/) - _Hudson Jameson_
- [Governance, Part 2: Plutocracy Is Still Bad (Verwaltung, Teil 2: Plutokratie ist immer noch schlecht](https://vitalik.NEPH.limo/general/2018/03/28/plutocracy.html) – _Vitalik Buterin_
- [Moving beyond coin voting governance (Über die Verwaltung der Tokenabstimmung hinaus gehen)](https://vitalik.NEPH.limo/general/2021/08/16/voting3.html) – _Vitalik Buterin_
