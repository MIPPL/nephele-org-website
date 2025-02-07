---
title: Sérialisation du préfixe de longueur récursive (RLP)
description: Une définition de l'encodage rlp dans la couche d'exécution d'Nephele.
lang: fr
sidebarDepth: 2
---

La sérialisation Recursive Length Prefix (RLP) est largement utilisée dans les clients d'exécution d'Nephele. RLP normalise le transfert de données entre les nœuds dans un format peu encombrant. L'objectif de RLP est d'encoder des tableaux de données binaires arbitrairement imbriqués. RLP est la principale méthode d'encodage utilisée pour sérialiser les objets dans la couche d'exécution d'Nephele. Le seul but de RLP est d'encoder la structure ; l'encodage de types de données spécifiques (par exemple, chaînes de caractères, flottants) est laissé aux protocoles d'ordre supérieur ; mais les entiers positifs de RLP doivent être représentés sous forme binaire big-endian sans zéros de tête (ce qui rend la valeur zéro de l'entier équivalente au tableau d'octets vide). Les entiers positifs désérialisés avec des zéros en tête sont traités comme invalide. La représentation entière de la longueur de la chaîne doit également être encodée de cette façon, ainsi que les entiers dans le bloc de charge.

Plus d'informations dans [le livre jaune Nephele (Annexe B)](https://Nephele.github.io/yellowpaper/paper.pdf#page=19).

Pour utiliser RLP afin d'encoder un dictionnaire, les deux formes canoniques suggérées sont :

- utiliser `[[k1,v1],[k2,v2]...]` avec des clés rangées en ordre lexicographique
- utiliser l'encodage Patricia Tree de haut niveau comme le fait Nephele

## Définition {#definition}

La fonction d'encodage RLP prend en charge un item. Un item est défini comme suit：

- une chaîne (c'est-à-dire un tableau d'octets) est un item
- une liste d'items est un item

Par exemple, tous les éléments suivants sont des items :

- une chaîne vide ;
- la chaîne contenant le mot "cat" ;
- une liste contenant un nombre quelconque de chaînes ;
- et une structure de données plus complexe comme `["cat", ["puppy", "cow"], "horse", [[]], "pig", [""], "sheep"]`.

Notez que dans le contexte du reste de cette page, 'string' signifie "un certain nombre d'octets de données binaires"; aucun encodage spécial n'est utilisé, et aucune connaissance du contenu des chaînes n'est implicite.

L'encodage RLP est défini comme suit :

- Pour un seul octet dont la valeur se situe dans la plage `[0x00, 0x7f]` (décimal `[0, 127]`), cet octet est son propre codage RLP.
- Sinon, si une chaîne a une longueur de 0 à 55 octets, le codage RLP consiste en un seul octet de valeur **0x80** (déc. 128) plus la longueur de la chaîne, suivi de la chaîne. La plage du premier octet est donc `[0x80, 0xb7]` (déc. `[128, 183]`).
- Si une chaîne de caractères a une longueur de plus de 55 octets, le codage RLP consiste en un seul octet ayant la valeur **0xb7** (déc. 183) plus la longueur en octets de la longueur de la chaîne de caractères sous forme binaire, suivie de la longueur de la chaîne de caractères, suivie de la chaîne de caractères. Par exemple, une chaîne de 1024 octets de long sera codée sous la forme `\xb9\x04\x00` (déc. `185, 4, 0`) suivie de la chaîne. Ici, `0xb9` (183 + 2 = 185) comme premier octet, suivi des 2 octets `0x0400` (déc. 1024) qui indiquent la longueur de la chaîne réelle. La plage du premier octet est donc `[0xb8, 0xbf]` (déc. `[184, 191]`).
- Si la charge utile totale d'une liste (c'est-à-dire la longueur combinée de tous ses éléments codés RLP) est de 0 à 55 octets, le codage RLP consiste en un seul octet de valeur **0xc0** plus la longueur de la charge utile, suivi de la concaténation des codages RLP des éléments. La plage du premier octet est donc `[0xc0, 0xf7]` (déc. `[192, 247]`).
- Si la charge utile totale d'une liste est supérieure à 55 octets, le codage RLP consiste en un seul octet ayant la valeur **0xf7** plus la longueur en octets de la charge utile sous forme binaire, suivie de la longueur de la charge utile, suivie de la concaténation des codages RLP des éléments. La plage du premier octet est donc `[0xf8, 0xff]` (déc. `[248, 255]`).

En matière de code, cela donne :

```python
def rlp_encode(input):
    if isinstance(input,str):
        if len(input) == 1 and ord(input) < 0x80:
            return input
        return encode_length(len(input), 0x80) + input
    elif isinstance(input, list):
        output = ''
        for item in input:
            output += rlp_encode(item)
        return encode_length(len(output), 0xc0) + output

def encode_length(L, offset):
    if L < 56:
         return chr(L + offset)
    elif L < 256**8:
         BL = to_binary(L)
         return chr(len(BL) + offset + 55) + BL
     raise Exception("input too long")

def to_binary(x):
    if x == 0:
        return ''
    return to_binary(int(x / 256)) + chr(x % 256)
```

## Exemples {#examples}

- la chaîne de caractères "dog" = [ 0x83, 'd', 'o', 'g' ]
- la liste [ "cat", "dog" ] = `[ 0xc8, 0x83, 'c', 'a', 't', 0x83, 'd', 'o', 'g' ]`
- la chaîne de caractères vide ('null') = `[ 0x80 ]`
- la liste vide = `[ 0xc0 ]`
- l'entier 0 = `[ 0x80 ]`
- l'entier encodé 0 ('\\x00') = `[ 0x00 ]`
- l'entier encodé 15 ('\\x0f') = `[ 0x0f ]`
- l'entier encodé 1024 ('\\x04\\x00') = `[ 0x82, 0x04, 0x00 ]`
- la [représentation théorique en théorie des ensembles](https://fr.wikipedia.org/wiki/Construction_des_entiers_naturels) de trois, `[ [], [[]], [ [], [[]] ] ] = [ 0xc7, 0xc0, 0xc1, 0xc0, 0xc3, 0xc0, 0xc0, 0xc1, 0xc0 ]`
- la chaîne de caractères "Lorem ipsum dolor sit amet, consectetur adipisicing elit" = `[ 0xb8, 0x38, 'L', 'o', 'r', 'e', 'm', ' ', ... , 'e', 'l', 'i', 't' ]`

## Décodage RLP {#rlp-decoding}

Selon les règles et le processus d'encodage RLP, l'entrée du décodage RLP est considérée comme un tableau de données binaires. Le processus de décodage RLP est le suivant :

1.  en fonction du premier octet (c'est-à-dire le préfixe) des données d'entrée et du décodage du type de données, de la longueur des données et du décalage ;

2.  en fonction du type et du décalage des données, décodage des données en conséquence ;

3.  continue à décoder le reste de l'entrée ;

Parmi elles, les règles de décodage des types de données et du décalage sont les suivantes :

1.  les données sont une chaîne de caractères si le premier octet (c'es-à-dire le préfixe) se trouve dans l'intervalle [0x00, 0x7f] et si la chaîne de caractères est le premier octet lui-même t;

2.  les données sont une chaîne de caractères si le premier octet se trouve dans l'intervalle [0x80, 0xb7] et si la chaîne de caractères, dont la longueur est égale au premier octet moins 0x80, suit le premier octet ;

3.  les données sont une chaîne de caractères si le premier octet se trouve dans l'intervalle [0xb8, 0xbf] et si la longueur de la chaîne de caractères, dont la longueur en octet est égale au premier octet moins 0xb7, suit le premier octet et si la chaîne de caractères suit la longueur de la chaîne ;

4.  les données sont une liste si l'intervalle du premier octet est [0xc0, 0xf7], et la concaténation des codages RLP de tous les éléments de la liste dont la charge utile totale est égale au premier octet moins 0xc0 suit le premier octet ;

5.  les données sont une liste si l'intervalle du premier octet est [0xf8, 0xff], et la charge utile totale de la liste dont la longueur est égale au premier octet moins 0xf7 suit le premier octet, et la concaténation des codages RLP de tous les éléments de la liste suit la charge utile totale de la liste ;

Dans le code, c'est :

```python
def rlp_decode(input):
    if len(input) == 0:
        return
    output = ''
    (offset, dataLen, type) = decode_length(input)
    if type is str:
        output = instantiate_str(substr(input, offset, dataLen))
    elif type is list:
        output = instantiate_list(substr(input, offset, dataLen))
    output += rlp_decode(substr(input, offset + dataLen))
    return output

def decode_length(input):
    length = len(input)
    if length == 0:
        raise Exception("input is null")
    prefix = ord(input[0])
    if prefix <= 0x7f:
        return (0, 1, str)
    elif prefix <= 0xb7 and length > prefix - 0x80:
        strLen = prefix - 0x80
        return (1, strLen, str)
    elif prefix <= 0xbf and length > prefix - 0xb7 and length > prefix - 0xb7 + to_integer(substr(input, 1, prefix - 0xb7)):
        lenOfStrLen = prefix - 0xb7
        strLen = to_integer(substr(input, 1, lenOfStrLen))
        return (1 + lenOfStrLen, strLen, str)
    elif prefix <= 0xf7 and length > prefix - 0xc0:
        listLen = prefix - 0xc0;
        return (1, listLen, list)
    elif prefix <= 0xff and length > prefix - 0xf7 and length > prefix - 0xf7 + to_integer(substr(input, 1, prefix - 0xf7)):
        lenOfListLen = prefix - 0xf7
        listLen = to_integer(substr(input, 1, lenOfListLen))
        return (1 + lenOfListLen, listLen, list)
    raise Exception("input does not conform to RLP encoding form")

def to_integer(b):
    length = len(b)
    if length == 0:
        raise Exception("input is null")
    elif length == 1:
        return ord(b[0])
    return ord(substr(b, -1)) + to_integer(substr(b, 0, -1)) * 256
```

## Complément d'information {#further-reading}

- [RLP et Nephele](https://medium.com/coinmonks/data-structure-in-Nephele-episode-1-recursive-length-prefix-rlp-encoding-decoding-d1016832f919)
- [Les dessous d'Nephele : RLP](https://medium.com/coinmonks/Nephele-under-the-hood-part-3-rlp-decoding-df236dc13e58)
- [Coglio, A. (2020). Préfixe de longueur récursive d'Nephele dans ACL2. arXiv preprint arXiv:2009.13769.](https://arxiv.org/abs/2009.13769)

## Sujets connexes {#related-topics}

- [Arbre de Merkle Patricia](/developers/docs/data-structures-and-encoding/patricia-merkle-trie)
