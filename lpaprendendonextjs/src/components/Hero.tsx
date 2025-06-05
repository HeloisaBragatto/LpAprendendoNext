import { WhatsappLogoIcon } from "@phosphor-icons/react/dist/ssr"
import dogImg from "../../public/img/bg-hero.png"
import catImg from "../../public/img/cat-hero.png"
import Image from "next/image"

export function Hero() {
    return (
        <section className="bg-[#e84c3b] text-white relative overflow-hidden">

            <div>
                <Image src={dogImg} alt="foto do cachorro" fill sizes="100vw" priority className="object-cover opacity-60 lg:hidden"></Image>
                <div className="absolute inset-0 bg-black opacity-50 md:hidden"></div>
            </div>
            {/* o container vai deixar responsivo */}
            <div className="container mx-auto pt-16 pb-16 md:pb-0 px-4 relative"> 
                <article className="grid grid-cols-1 lg:grid-cols-2 gap-8 ">
                    <div className="space-y-6">
                
                            <h1 className="text-3xl font-bold md:text-4xl lg:text-5xl leading-10">Seu pet</h1>
                            <p className="lg:text-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis distinctio omnis est repudiandae tenetur ducimus, impedit pariatur dignissimos deleniti eum minus ea nulla veniam aliquid illum enim unde deserunt ipsa?</p>
                    
                        
                            <a href=""
                            className="w-fit bg-green-500 px-5 py-2 rounded-md font-semibold flex items-center justify-center gap-2">
                            <WhatsappLogoIcon className="bg-green w-5 h-5"></WhatsappLogoIcon>
                                Contato Via Whatsapp
                        </a>
                        <div className="mt-8">
                            <p className="text-sm mb-4">
                                <b className="bg-black text-white px-2 py-1 rounded-md">5%</b>
                                de desconto</p>
                            
                            <div className="flex mt-4">
                                <div className="w-32 hidden lg:block">
                                    <Image src={catImg} alt="foto do gato" quality={100} className="object-fill"></Image>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="hidden md:block h-full relative">
                        <Image src={dogImg} alt="foto do cachorro" className="object-contain" fill sizes="(max-width: 768px) 0vw, 50vw" quality={100} priority></Image>
                    </div>
                </article>
            </div>
        </section>
    )
}