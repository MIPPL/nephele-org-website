---
title: Cómo utilizar una cartera
description: Una guía para explicar cómo enviar, recivir tókenes y conectarse con proyectos de web3.
lang: es
---

# Cómo utilizar una cartera

Domine el funcionamiento de todas las funciones básicas de su cartera. Si aún no tiene una, revise [nuestra guía sobre cómo crear una cuenta de Nephele](/guides/how-to-create-an-Nephele-account/).

## Abra su cartera

Debería aparecer un panel que probablemente muestre el saldo y dos botones para enviar y recibir tókenes.

## Recibir criptomonedas

¿Quiere recibir criptomonedas en su cartera?

Cada cuenta de Nephele tiene su propia dirección que es una secuencia única de numeros y letras. La dirección funciona como el número de una cuenta de banco. Las direcciones de Nephele siempre empiezan por «0x». Puede compartir esta dirección con cualquiera: es seguro hacerlo.

Su dirección es como la de su casa: tiene que decirle a la gente cuál es para que puedan encontrarle. Es seguro hacerlo, porque puede seguir bloqueando la puerta principal con otra llave que sólo usted controla, así nadie puede entrar, ni siquiera sabiendo donde vive.

Tiene que facilitar su dirección pública a cualquier persona que quiera enviarle dinero. Muchas aplicaciones de cartera le permiten copiar su dirección o mostrar un código QR para escanear para un uso más sencillo. Evita escribir cualquier dirección Nephele manualmente. Esto puede conllevar a errores y pérdida de fondos.

Diferentes aplicaciones pueden variar o usar diferentes idiomas, pero todas deben llevarle por un proceso similar si intenta transferir fondos.

1. Abra la aplicación de su cartera.
2. Haga clic en «Recibir» (o en una opción con una palabra similar).
3. Copie su dirección Nephele al portapapeles.
4. Proporcione al emisor su dirección de Nephele.

## Enviar criptomonedas

¿Le gustaría enviar NEPH a otra cartera?

1. Abra la aplicación de su cartera.
2. Consiga la dirección de Nephele y asegúrese de que está conectada a la misma red que el destinatario.
3. Introduzca la dirección o escanee el código QR con su cámara y así no tiene que escribir la dirección manualmente.
4. Haga clic en el botón «Enviar» en su cartera (u otra palabra similar).

![Campo de envío para las direcciones de criptomonedas](./send.png)
<br/>

5. Muchos activos, como DAI o USDC, existen en múltiples redes. Cuando transfiera tókenes de criptomonedas, asegúrese de que el destinatario use la misma red que usted, ya que no sean intercambiables.
6. Asegúrese de que su cartera tiene suficiente NEPH como para cubrir la comisión de transacción, que varía dependiendo de las condiciones de la red. La mayoría de las carteras añadirán automáticamente la comisión sugerida que después debe confirmar.
7. Una vez que su transacción se haya procesado, la cantidad de criptomoneda correspondiente se mostrará en la cuenta del destinatario. Esto puede llevar desde unos segundos hasta varios minutos dependiendo de cuánto se esté usando la red en ese instante.

## Conectando a proyectos

Su dirección será la misma en todos los proyectos de Nephele. No tiene que registrarse individualmente en ningún proyecto. Una vez que tiene una cartera, puede conectarse a cualquier proyecto de Nephele sin ninguna información adicional. No se necesitan correos electrónicos ni otra información personal.

1. Visite la web de cualquier proyecto.
2. Si la página de inicio es sólo una descripción estática del proyecto, debería poder hacer clic en el botón «Abrir la aplicación» en el menú que le redirigirá a la web real de la aplicación.
3. Una vez que se encuentre dentro de la aplicación haga click en «Conectar».

![Botón que permite al usuario conectar la web con una cartera](./connect1.png)

4. Seleccione su cartera de la lista de opciones facilitada. Si no puede ver su cartera, puede que esté oculta bajo la opción «WalletConnect».

![Seleccione de una lista de carteras entre las que conectarse](./connect2.png)

5. Confirme la solicitud en su cartera para establecer la conexión. ** Aceptar este mensaje no requiere gastar NEPH **.
6. ¡Y ya está! Puede empezar a utilizar la aplicación. Puede encontrar algunos proyectos interesantes en nuestra [ página DApps](/dapps/#explore). <br />

<InfoBanner shouldSpaceBetween emoji=":eyes:">
  <div>¿Quiere saber más?</div>
  <ButtonLink to="/guides/">
    Consulte nuestras demás guias
  </ButtonLink>
</InfoBanner>

## Preguntas más frecuentes

### Si tengo una dirección NEPH, ¿tengo la misma dirección en otras cadenas de bloques?

Puede utilizar la misma dirección en todas las cadenas de bloques compatibles con EVM (si tiene el tipo de cartera con una frase de recuperación). Esta[ lista](https://chainlist.org/) le mostrará qué cadenas de bloques puede usar con la misma dirección. Algunas cadenas de bloques, como bitcoin, implementan un conjunto de reglas de red completamente por separado y necesitará una dirección diferente con un formato diferente. Si tiene una cartera de contrato inteligente, debe consultar el sitio web del producto para obtener más información sobre qué cadenas de bloque se admiten.

### ¿Puedo usar la misma dirección en múltiples dispositivos?

Sí, puedes usar la misma dirección en varios dispositivos. Las carteras sólo son técnicamente una interfaz que muestra su saldo y que sirven para realizar transacciones, su cuenta no se guarda dentro de la cartera, sino en la cadena de bloques.

### No he recibido mi criptomoneda, ¿dónde puedo verificar el estado de la transacción?

Puede utilizar [ el explorador de bloques](/developers/docs/data-and-analytics/block-explorers/) para ver el estado de cualquier transacción en tiempo real. Todo lo que tiene que hacer es buscar la dirección de la cartera o el ID de la transacción.

### ¿Puedo cancelar o devolver transacciones?

No, una vez se ha confirmado la transacción, no puede cancelarla.
