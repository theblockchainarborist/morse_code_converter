<template>
  <div id="morse-code-description-div">
    <p class="typingEffect">
        Morse code was created to transmit messages over long distances, particularly by telegraph.
        In the early 19th century, the fastest way to send a message over a long distance was by using the electric telegraph, a device that could transmit electrical signals along a wire.    
        However, the telegraph required a code that could be transmitted as a series of electrical signals, known as "dots" and "dashes."
    </p>
    <p class="typingEffect">
        Samuel Morse, an American inventor and artist, developed the Morse code system in the early 1830s. 
        The Morse code system assigns a unique combination of dots and dashes to each letter of the alphabet, allowing messages to be transmitted as a series of electrical signals. 
        Morse code was quickly adopted as the standard for telegraph communication and was used extensively throughout the world in the following decades.
    </p>
    <p class="typingEffect">
        The widespread use of Morse code revolutionized communication, enabling people to send messages over long distances in a matter of minutes, rather than days or weeks. 
        It played a critical role in the development of modern communication systems and remains an important part of our technological and cultural heritage.
    </p>
  </div>
</template>

<script>
export default {
    name: "morse-code-description"

}
</script>

<style>

#morse-code-description-div {
    margin: 0% 25%;
    border-radius: 4px;
    padding: 20px;
    text-align: left;
    margin-bottom: 2%;
}


.typingEffect {
    width: 0;
    overflow: hidden; /* Ensure the text is not visible until the typewriter effect*/
    font-size: 22px;
    white-space: normal; /* Keeps the text on a single line */
    animation: typing 2s forwards;
  }

/* The typing animation */
@keyframes typing {
  from { width: 0 }
  to { width: 100% }
}

</style>