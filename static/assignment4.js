function disp_prompt()
  {
  var fname=prompt("Please enter your name:","Your name")
  document.getElementById("msg").innerHTML="Greetings " + fname
  }