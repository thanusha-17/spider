
numQuotes=10;
quoteArray = new Array(numQuotes);
quoteArray[0]="\"Wherever I go, the wind follows. And the wind smells like rain.\"  -Spider-Man Noirn";
quoteArray[1]="\"I'm Not Gonna Let People Die Just To Save My Skin. You Underestimated Me.\"  -Miles Morales";
quoteArray[2]="\"With great power there must also come great responsibilit.\"  -Uncle Ben";
quoteArray[3]="\"With great ability comes great accountability.\"  -Jefferson Davis";
quoteArray[4]="\"'m looking at me, older. Much older. And somehow I know that this is the end. This is my last stand.\"  -Peter Parker";
quoteArray[5]="\"Einstein said time was relative, right? Maybe I'm not late. Maybe you guys are early.\"  -Miles Morales";
quoteArray[6]="\"This would be a good time to turn invisible.\"  -Peter Parker" ;
quoteArray[7]="\"Sometimes we have to be steady, and give up the thing we want the most. Even our dreams.\" -Aunt May";
quoteArray[8]="\"Above all, no matter how many times you get hit, can you get back up?\" -Gwen Stacy";
quoteArray[9]="\"I wanted you to look up to me. I let you down, man. I let you down. You're the best of all of us, Miles. You're on your way. Just keep going. Just keep going.\"  -Uncle Aaron";
quoteArray[10]="\"Hey, listen. You don't look so hot either, kid. Most superheroes don't wear their own merch.\"  -Peter Parker";


quoteShowing=-1;

function nextQuote()
{
  // restart at 0 if done
  if (quoteShowing >= numQuotes) quoteShowing=-1;
  quoteShowing++;

  // assign the value in the textbox to the new quote
  document.quoteForm.quoteHere.value = quoteArray[quoteShowing];
}

function prevQuote()
{
  // restart at end if on 0
  if (quoteShowing <= 0) quoteShowing=numQuotes+1;
  quoteShowing--;

  document.quoteForm.quoteHere.value = quoteArray[quoteShowing];
}

function randQuote()
{ 

  prevQuoteShowing = quoteShowing;
  while(quoteShowing == prevQuoteShowing)
    quoteShowing = Math.ceil(Math.random() * numQuotes);

  document.quoteForm.quoteHere.value = quoteArray[quoteShowing];
}

window.onload=randQuote





