export async function requestName(formData){

    'use server'
    
     const email = formData.get('email');
     const password = formData.get('password');

     const body = JSON.stringify({email, password});

  

     fetch('/signup', {
      'method':'POST',
      'headers': {
        'Content-Type': 'application/json'
      },
      body
     })
      .then(response =>{
        if (!response.ok){
          throw new Error('Não houve resposta');
        }
        return response.json();
      })
      .catch(error => {
        console.error('Error:', error);
      });
        
      console.log(formData)
     
    } 



    export async function requestName(formData) {
        'use server';
      
        try {
          const email = formData.get('email');
          const password = formData.get('password');
      
          const body = JSON.stringify({ email, password });
      
          const response = await fetch('http://localhost:8080/signup', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body, // Envia os dados no formato JSON.
          });
      
          if (!response.ok) {
            throw new Error(`Erro na resposta do servidor: ${response.status}`);
          }
      
          const data = await response.json(); // Obtém a resposta da API.
          console.log('Resposta da API:', data);
      
        } catch (error) {
          console.error('Erro ao enviar os dados:', error);
        }
      }