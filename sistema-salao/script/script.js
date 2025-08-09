
//menu cel
function menu(mn){
            let menu = document.querySelector(`div#${mn}`);
            console.log(mn)
            if(menu.style.display == 'none'){
                menu.style.display = 'block';
            }else{
                menu.style.display = 'none';
            }              
        }   