var People=require('./PeopleClass');


function hello (ss)
{
    alert("³É¹¦");
    console.log("Hello "+ ss);

   console.log( write(ss));

    console.log(SayPeople(ss).name);

    console.log(AskPeople().name);
}

hello("Lily")

function write(ss)
{
    var pp;
    if(ss=="Lucy")
    {
        pp="Hello ";
    }else
    {
        pp="Write "
    }

  return pp +ss;
}


function SayPeople(ss)
{
    var p=new People();
    p.name=ss;
    return p;
}

function AskPeople()
{
    var p=new People();
    p.name="LM";
    return p;
}