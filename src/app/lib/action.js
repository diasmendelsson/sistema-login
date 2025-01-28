export async function requestName(formData){

  'use server'
  
   const email = formData.get('email');
   const password = formData.get('password');

   console.log('Email:', email);
   console.log('Password:', password);

  
  const body = JSON.stringify({email, password});

   try{ 
     const response = await fetch('http://localhost:8080/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body
  })
  
    const data = await response.json();

    if (!response.ok){
  
      throw new Error(data.mensagem ); 
    }

   
    return response.json();

  } catch (error) {
    console.error('Erro:', error);

  }
};