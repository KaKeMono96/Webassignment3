<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <form>
        <input.type="button" value="Start Motor" style="color: crimson;">
    </form>
    <p style="color:blue ;">Motor is stopped.</p>
    <script>
        const button=document.querySelector('input');
        const paragraph=document.querySelector('p')
        button.addEventListener('click',buttonAction);
        function buttonAction(){
            if(button.value==='start Motor'){
                button.value='Stop Motor';
                paragraph.textcontent='Motor Started###';
            }else{
                button.value='Start Motor';
                paragraph.textContent='Motor Stopped###';

            }
        }
    </script>
</body>
</html>
