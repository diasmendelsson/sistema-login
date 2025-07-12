import Auth from "@/components/Auth"

import { Suspense } from 'react';



export default function SignUp(){

    return (
        <section className=" flex flew-col items-center justify-center">

            <Suspense fallback={<div>Carregando...</div>}>
            <Auth type='signUp' />
            </Suspense>
        </section>
    )
}