let string ="";
        let inputtext= "";
        let buttons = document.querySelectorAll('.button');
        Array.from(buttons).forEach((button)=>{
            button.addEventListener('click', (e)=>{
                try {
                    if(e.target.innerHTML=="=")
                {
                    string = eval(string);
                }
                else if(e.target.innerHTML=='C') {
                    location.reload();
                }
                else{
                    string = string +e.target.innerHTML;
                    console.log(string)
                }
                } catch (error) {
                    let c = confirm("ERROR OCCURED!!!");
                    if(c)
                    {
                        location.reload();
                    }
                    
                }
                
                document.querySelector('input').value =string;
            });
        });