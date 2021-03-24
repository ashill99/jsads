function reverse(string){
    if(string.length === 0 ) return ""; 
    return reverse(string.substring(1)) + string.charAt(0)
  }
  
  // reverse('awesome') // 'emosewa'
  // reverse('rithmschool') // 'loohcsmhtir'

  console.log(reverse("string"))