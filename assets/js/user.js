document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.collapsible');
    var instances = M.Collapsible.init(elems, {});
  });

  const addUserButton = document.getElementById("add_user_button");
  addUserButton.addEventListener('click', () => {
    document.querySelector('.add_user_modal').classList.add('show'); // Use . for class
    document.querySelector('.add_user_modal_back').classList.remove('dis-none'); // Correct class name
  });

  document.querySelector('.add_user_modal_back').addEventListener('click',()=>{
    document.querySelector('.add_user_modal').classList.remove('show')
    document.querySelector('.add_user_modal_back').classList.add('dis-none')
  })


  const ctaElement = document.querySelector('.user_list_section div');


  if(ctaElement.hasAttribute("target")){
      console.log(ctaElement.getAttribute("target"));
      
  }else{
    ctaElement.setAttribute("target","_blank");
  }

  console.log(ctaElement.attributes);
  
  

  
  



  