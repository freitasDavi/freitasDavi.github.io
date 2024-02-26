import { ProjectCard } from '@/components/ProjectCard'
import { TechCard } from '@/components/TechCard'
import { Boxes } from '@/components/ui/background-boxes'
import { cn } from '@/utils/cn'


export default function Home() {
  return (
    <main className="text-white bg-gray-900  p-10 flex flex-col items-center">
      <div className='h-[550px] relative w-full overflow-hidden bg-slate-900 flex flex-col items-center pt-10'>

        <div className="absolute inset-0 w-full h-full bg-slate-900 z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />
        <nav id="home" className="w-[80%] flex justify-between items-center mb-10 z-20">
          <p className="font-bold font-helvetica italic text-blue-500 lg:text-5xl text-">TKN</p>
          <ul className="hidden md:flex text-white gap-10 font-helvetica
      ">
            <li>
              <a className="hover:text-blue-500 transition-all ease-in" href="#home">home</a>
            </li>
            <li>
              <a className="hover:text-blue-500 transition-all ease-in" href="#tech">tech</a>
            </li>
            <li>
              <a className="hover:text-blue-500 transition-all ease-in" href="#projects">projects</a>
            </li>
            <li>
              <a className="hover:text-blue-500 transition-all ease-in" href="#contact">contact</a>
            </li>
          </ul>
        </nav>

        <Boxes />
        <h1 className={cn("md:text-4xl lg:text-6xl font-helvetica mt-24 font-bold italic text-white relative z-20")}>
          DAVI FREITAS
        </h1>
        <p className="text-center mt-2 font-helvetica font-bold italic text-neutral-300 relative z-20">
          FULLSTACK DEVELOPER
        </p>
      </div>

      <section className="w-[80%] my-10 pr-10 py-10 flex flex-col lg:flex-row justify-between ">
        <div className="w-full">
          <h3 className="text-xl md:text-4xl font-bold mb-4">Hey 🤙🏼</h3>
          <p className="text-sm md:text-xl text-justify text-slate-200">I&apos;m
            <b className="italic text-white hover:text-blue-500 hover:cursor-pointer"> Davi</b> and I am a systems
            developer
            passionate
            about technology.
            I
            am Brazilian, 25 years old and I graduated in systems analysis and development. Since then,
            I
            have been working with various technologies, such as C#, Typescript, React, Java and Vue, always looking to
            update
            and improve myself. Besides programming, I also like to study, practice sports and play in my spare time. In
            this
            portfolio, you will find some of my most interesting and challenging projects, which show a little of my style
            and
            skills. I hope you like it and feel free to contact me! 😊
          </p>
        </div>
      </section>

      <section id="tech" className="bg-blue-500 w-full py-10 flex justify-center">
        <div className="w-[80%]">
          <h1 className="text-6xl font-helvetica font-bold italic text-slate-300">tech</h1>
          <div className="grid md:grid-cols-1 lg:grid-cols-3 my-10 gap-10">
            <TechCard image="/svg/icons8-c-sharp-logo.svg" title="C#" alt="Logo da linguagem c#" />
            <TechCard image="/svg/icons8-java.svg" title="Java" alt="Logo da linguagem java" />
            <TechCard image="/svg/icons8-javascript.svg" title="Javascript" alt="Logo da linguagem javascript" />
            <TechCard image="/svg/icons8-react-native.svg" title="React" alt="Logo da biblioteca react" />
            <TechCard image="/svg/icons8-vuejs.svg" title="Vue" alt="Logo da biblioteca vue" />
          </div>
        </div>
      </section>

      <section id="projects" className="my-10 w-[80%]">
        <h1 className="text-6xl font-helvetica font-bold italic text-slate-300">projects</h1>
        <div className="my-10 grid grid-cols-1 md:grid-cols-2 lg:gap-10">
          <ProjectCard image="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/cta/cta-dashboard-mockup-dark.svg"
            title="a-mei - React & Java" alt="dashboard de um sistema de gestão carregando"
            link="https://github.com/freitasDavi/amei-fe" description="
          The a-mei software aims to make life easier for Individual Micro Entrepreneurs, offering features such as customer registration, generation of quotes, service orders, assistance in issuing invoices, and also forms of data visualization.
          " />
          {/* TODO: PT-BR O software a-mei tem como objetivo facilitar a vida dos Micro Empreendedores Individuais, oferecendo funcionalidades como cadastro de clientes, geração de orçamentos, ordens de serviço, auxílio na emissão de notas fiscais, e também formas de visualização de dados.  */}

          <ProjectCard image="https://github.com/freitasDavi/NerdCollection/raw/main/public/Main.jpg"
            link="https://github.com/freitasDavi/NerdCollection" title="Nerd Collection - NextJS"
            alt="tela de login com uma imagem de super herois e personagens de jogos"
            description="
          Project from the Systems Analysis and Development course with the aim of creating a pseudo social network to catalog collections and connect collectors around the world. For this basic project, which serves as a prototype, Next13 was used with TailwindCSS and Phosphor Icons." />
          {/* TODO: PT-BR Projeto da faculdade de Análise e Desenvolvimento de Sistemas com intuíto de criar uma pseudo rede social para catalogar coleções e conectar colecionadores ao redor do mundo. Para esse projeto básico, que serve de um protótipo, foi utilizado Next13 com TailwindCSS e Phosphor Icons. */}

          <ProjectCard image="https://github.com/freitasDavi/06-ignite-call/raw/main/public/Main.jpg" title="ICall - NextJS"
            link="https://github.com/freitasDavi/06-ignite-call"
            alt="landing page com o título agendamento descomplicado e um calendário"
            description="
          Scheduling project integrated with Google Calendar, using Next13 and its powerful kit, taking advantage of both server and client rendering, querying the database via backend routes and authenticating with Google. However, also using ReactQuery on the client side to deal with the different possible scheduling dates. Great work on formatting and operations with dates using the DayJS library." />

          {/* TODO: PT-BR Projeto de agendamento integrado com a Google Agenda, Utilizando Next13 e seu poderoso kit, aproveitando tanto da renderização do servidor quanto do cliente, fazendo consultas ao banco de dados pelas rotas de backend e se autenticando com o google. Porém utilizando também no lado do cliente o ReactQuery para lidar com as diversas datas de possíveis agendamento. Grande trabalho de formatação e operações com datas utilizando a biblioteca DayJS.  */}

          <ProjectCard image="https://github.com/freitasDavi/04-ignite-shop/raw/main/public/Animacao.gif"
            link="https://github.com/freitasDavi/04-ignite-shop" title="IShop - NextJS"
            alt="gif animada mostrando o fluxo de compra de um produto"
            description="
          Basic Ecommerce project to work with the NextJS framework, also using Stitches to develop styled components and Stripe to make payments, Keen slider to create the slider and using Next&apos;s Routes API to guarantee the security of your data." />

          {/* TODO: PT-BR Projeto de Ecommerce básico para trabalhar com o framework NextJS, utilizando também Stitches para desenvolver componentes estilizados e Stripe para realizar pagamentos, Keen slider para criar o slider e utilizando as API Routes do Next para garantir a segurança de seus dados. */}
        </div>
      </section>

      <section id="contact" className="bg-slate-800 flex flex-col justify-center items-center w-full p-10">
        <h4 className="text-4xl text-center font-bold text-slate-200">Thank you for reaching me!
          <br /> Wanna chat?
        </h4>
        <div className="flex gap-6 mt-6 lg:mt-0">
          <a href="https://github.com/freitasDavi/">
            <img src="/svg/icons8-github2.svg" alt="Github logo" />
          </a>
          <a href="mailto:davi.freitastt@gmail.com">
            <img src="/svg/icons8-mail.svg" alt="Envelope simbolizando email" />
          </a>
          <a href="https://linkedin.com/in/freitasDavi">
            <img src="/svg/icons8-linkedin.svg" alt="Linkedin logo" />
          </a>

        </div>
      </section>
    </main>
  )
}
