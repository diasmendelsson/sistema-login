import Auth from "@/components/Auth"

import { Suspense } from 'react';

export default function SignIn(){
    return (
        <section className="flex flex-col items-center justify-center">

            <Suspense fallback={<div> Carregando...</div>}>
            <Auth type='signIn'
            
            />

            </Suspense>
        </section>
    )
}