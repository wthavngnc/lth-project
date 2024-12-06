window.onload = function() {
    document.getElementById("textInput").focus();
};
const output = document.getElementById("output")
const input = document.getElementById("textInput");
input.addEventListener("keydown", function(){
    if(event.key === "Enter"){
        const userInput = input.value.toLowerCase();
    if(userInput === "about"){
        output.textContent = "im an associantion with the greates DIMAS LONTONG. i'm here to tell you the truth in order to allert us about THEM";

    }else if(userInput === "dimaslontongassociation"){
        output.textContent = `
dimasLontongAssocianton is an anonymous person protected by the country, he have full control of 
the millitary, technology, including elon musk property, and mark zucerberck.`
    }else if(userInput === "they"){
        output.textContent = `
an unknown creature, nor they have pyshyc. but dimas lontong often see it in his dream.
still unknown, the real evidence is cow farmers suddeny dissapearing one by one
decreasing cow population in the future.`

    }else if(userInput === "theletter"){
        output.innerHTML = `
 5-12-5005

 dear past
 the word is not a great place to live. in fact we cant still leave earth
 not that we dont have technology. we too much love earth, and will miss it. it's
 unresonable willingness called love. we deeply in love with our earth, and not
 ready for the long belonging.
 dear past
 the cow will dissapear one by one until one day meat cow price will fly above
 up to the sky.
 we detected the problem is they, and why THEY know where us is, what make THEY
 curious about us is.. SOUNDHOREG
 my advice is
 DONT LET ELON MUSK KNOW SOUNDHOREG OR HE WILL BRING IT TO THE SPACE
 AND THEY WILL CURIOUS ABOUT US

 sincerly
 <span id="blink">wthavngnc</span>`;
 
    }
    input.value = "";

    }
    
})


//iftheautomaticlineoutputneedtochange
/*
const text1 = `5-12-5005\n dear past\n
\nthe word is not a great place to live. in fact we cant still leave earth
not that we dont have technology. we too much love earth, and will miss it. it's
unresonable willingness called love. we deeply in love with our earth, and not
ready for the long belonging.\n
\ndear past\n
\nthe cow will dissapear one by one until one day meat cow price will fly above
up to the sky.\n
\nwe detected the problem is they, and why THEY know where us is, what make THEY
curious about us is.. SOUNDHOREG\n
\nmy advice is\n
\nDONT LET ELON MUSK KNOW SOUNDHOREG OR HE WILL BRING IT TO THE SPACE
AND THEY WILL CURIOUS ABOUT US\n

\nsincerly\n
\nwthavngnc\n`

const formattedText1 = text1.replace(/\n/g, "<br>");
*/

