
//^ Declare Array (Hold the Quotes & Authors) ^//
var quotes=[
    {
        quote:"“Be yourself; everyone else is already taken.”",
        author:"― Oscar Wilde"
    },

    {
        quote:"“So many books, so little time.”",
        author:"― Frank Zappa"
    },

    {
        quote:"“You only live once, but if you do it right, once is enough.”",
        author:"― Mae West"
    },

    {
        quote:"“A room without books is like a body without a soul.”",
        author:"― Marcus Tullius Cicero"
    },

    {
        quote:"“In three words I can sum up everything I've learned about life: it goes on.”",
        author:"― Robert Frost"
    },

    {
        quote:"“If you tell the truth, you don't have to remember anything.”",
        author:"― Mark Twain"
    },

    {
        quote:"“Be the change that you wish to see in the world.”",
        author:"― Mahatma Gandhi"
    },

    {
        quote:"“A friend is someone who knows all about you and still loves you.”",
        author:"― Elbert Hubbard"
    },

    {
        quote:"“To live is the rarest thing in the world. Most people exist, that is all.”",
        author:"― Oscar Wilde"
    },

    {
        quote:"“We accept the love we think we deserve.”",
        author:"― Stephen Chbosky"
    },

    {
        quote:"“Without music, life would be a mistake.”",
        author:"― Friedrich Nietzsche"
    },

    {
        quote:"“Insanity is doing the same thing, over and over again, but expecting different results.”",
        author:"― Narcotics Anonymous"
    },

    {
        quote:"“It is better to be hated for what you are than to be loved for what you are not.”",
        author:"― Andre Gide"
    },

    {
        quote:"“It does not do to dwell on dreams and forget to live.”",
        author:"― J.K. Rowling"
    },

    {
        quote:"“Good friends, good books, and a sleepy conscience: this is the ideal life.”",
        author:"― Mark Twain"
    },

    {
        quote:"“I have not failed. I've just found 10,000 ways that won't work.”",
        author:"― Thomas A. Edison"
    }
];

//^  Declare Global Variables  ^//
var randomNumber=0;
var mark;

//^  Declare quotesGenerator(Random) Function  ^//
function quotesGenerator(){
     mark=randomNumber;
     randomNumber=Math.floor(Math.random() * quotes.length);    //*  Make a Random Number *//

     // console.log(mark);
     // console.log(randomNumber);

    if(randomNumber==mark)    //& Validate Repeating &//
    {
        randomNumber++;
        // console.log("warning",randomNumber);
    }

    document.getElementById("demo1").innerHTML=quotes[randomNumber].quote;
    document.getElementById("demo2").innerHTML=quotes[randomNumber].author;
}

