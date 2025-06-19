import { ExperienceCard } from "./components/ExperienceCard";
import { ExperienceSection } from "./components/ExperienceSection";
import { Header } from "./components/Header";
import { JoaoRagazzo } from "./components/JoaoRagazzo";
import { Links } from "./components/Links";

function App() {
  return (
    <>
      <div className="min-h-screen flex flex-col">
        <Header>
          <JoaoRagazzo />
          <Links />
        </Header>

        <main className="flex-grow">
          <section id="home" className="py-20 md:py-32">
            <div className="container mx-auto px-4">
              <div className="max-w-3xl mx-auto text-center">
                <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                  <span className="text-sky-400">Desenvolvedor</span> Full-Stack
                  & AppSec
                </h1>
                <p className="text-xl text-slate-400 mb-8">
                  Transformando ideias em código e soluções em experiências
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <a
                    href="#projects"
                    className="px-6 py-3 bg-sky-600 hover:bg-sky-700 text-white rounded-md transition-colors font-medium"
                  >
                    Ver Projetos
                  </a>
                  <a
                    href="#contact"
                    className="px-6 py-3 bg-transparent border border-sky-600 text-sky-400 hover:bg-sky-900/20 rounded-md transition-colors font-medium"
                  >
                    Contato
                  </a>
                </div>
              </div>
            </div>
          </section>

          <section id="about" className="py-20 bg-slate-900/50">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl font-bold mb-12 text-center text-white">
                Sobre <span className="text-sky-400">Mim</span>
              </h2>

              <div className="flex flex-col md:flex-row items-center gap-12 max-w-5xl mx-auto">
                <div className="w-full md:w-1/3 flex justify-center">
                  <div className="w-64 h-64 rounded-full bg-gradient-to-br from-sky-600 to-indigo-800 p-1">
                    <div className="w-full h-full rounded-full bg-slate-900 flex items-center justify-center text-6xl">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-32 h-32 text-sky-400"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="1"
                          d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                        />
                      </svg>
                    </div>
                  </div>
                </div>

                <div className="w-full md:w-2/3">
                  <h3 className="text-2xl font-bold mb-4 text-sky-400">
                    João Paulo Ragazzo
                  </h3>
                  <p className="text-slate-300 mb-4 text-justify">
                    Meu nome é João Ragazzo, sou um desenvolvedor full-stack com
                    foco em back-end, apaixonado por criar soluções. Atualmente,
                    estou cursando <strong>Ciência da Computação</strong> pela
                    Universidade Federal de Alfenas e buscando constantemente
                    aprimorar minhas habilidades técnicas.
                  </p>
                  <p className="text-slate-300 mb-6 text-justify">
                    Minha jornada na programação começou com a curiosidade de
                    entender como as coisas funcionam por trás das interfaces.
                    Comecei fazendo bots e soluções para problemas que eu
                    enfrentava no meu dia-a-dia. Hoje, trabalho com diversas
                    tecnologias e frameworks, sempre buscando as melhores
                    práticas de desenvolvimento.
                  </p>

                  <div className="flex flex-wrap gap-3">
                    <span className="px-4 py-2 bg-slate-800 rounded-full text-sm text-sky-300">
                      <i className="fas fa-code mr-2"></i>Desenvolvimento Web
                    </span>
                    <span className="px-4 py-2 bg-slate-800 rounded-full text-sm text-sky-300">
                      <i className="fas fa-database mr-2"></i>Banco de Dados
                    </span>
                    <span className="px-4 py-2 bg-slate-800 rounded-full text-sm text-sky-300">
                      <i className="fas fa-server mr-2"></i>Arquitetura de
                      Software
                    </span>
                    <span className="px-4 py-2 bg-slate-800 rounded-full text-sm text-sky-300">
                      <i className="fas fa-cloud mr-2"></i>Cloud Computing
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section id="projects" className="py-20">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl font-bold mb-12 text-center text-white">
                Meus <span className="text-sky-400">Projetos</span>
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                <div className="project-card bg-slate-800 rounded-xl overflow-hidden border border-slate-700">
                  <div className="h-48 bg-gradient-to-r from-sky-800 to-indigo-900 flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-20 w-20 text-white/80"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="1.5"
                        d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2 text-white">
                      API RESTful de E-commerce
                    </h3>
                    <p className="text-slate-400 mb-4 text-sm">
                      Backend completo para plataforma de e-commerce com
                      autenticação, gestão de produtos e processamento de
                      pedidos.
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      <span className="px-2 py-1 bg-slate-700 rounded text-xs text-sky-300">
                        Node.js
                      </span>
                      <span className="px-2 py-1 bg-slate-700 rounded text-xs text-sky-300">
                        Express
                      </span>
                      <span className="px-2 py-1 bg-slate-700 rounded text-xs text-sky-300">
                        MongoDB
                      </span>
                      <span className="px-2 py-1 bg-slate-700 rounded text-xs text-sky-300">
                        JWT
                      </span>
                    </div>
                    <a
                      href="#"
                      onclick="showProject('ecommerce-api')"
                      className="text-sky-400 hover:text-sky-300 text-sm font-medium flex items-center"
                    >
                      Ver detalhes
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 ml-1"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </a>
                  </div>
                </div>

                <div className="project-card bg-slate-800 rounded-xl overflow-hidden border border-slate-700">
                  <div className="h-48 bg-gradient-to-r from-emerald-800 to-teal-900 flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-20 w-20 text-white/80"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="1.5"
                        d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                      />
                    </svg>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2 text-white">
                      Sistema de Gestão de Tarefas
                    </h3>
                    <p className="text-slate-400 mb-4 text-sm">
                      Aplicação full-stack para gerenciamento de tarefas com
                      recursos de colaboração em tempo real e análise de
                      produtividade.
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      <span className="px-2 py-1 bg-slate-700 rounded text-xs text-sky-300">
                        React
                      </span>
                      <span className="px-2 py-1 bg-slate-700 rounded text-xs text-sky-300">
                        Django
                      </span>
                      <span className="px-2 py-1 bg-slate-700 rounded text-xs text-sky-300">
                        PostgreSQL
                      </span>
                      <span className="px-2 py-1 bg-slate-700 rounded text-xs text-sky-300">
                        WebSockets
                      </span>
                    </div>
                    <a
                      href="#"
                      onclick="showProject('task-manager')"
                      className="text-sky-400 hover:text-sky-300 text-sm font-medium flex items-center"
                    >
                      Ver detalhes
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 ml-1"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </a>
                  </div>
                </div>

                <div className="project-card bg-slate-800 rounded-xl overflow-hidden border border-slate-700">
                  <div className="h-48 bg-gradient-to-r from-purple-800 to-fuchsia-900 flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-20 w-20 text-white/80"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="1.5"
                        d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
                      />
                    </svg>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2 text-white">
                      Microserviços de Análise de Dados
                    </h3>
                    <p className="text-slate-400 mb-4 text-sm">
                      Arquitetura de microserviços para processamento e análise
                      de grandes volumes de dados em tempo real.
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      <span className="px-2 py-1 bg-slate-700 rounded text-xs text-sky-300">
                        Python
                      </span>
                      <span className="px-2 py-1 bg-slate-700 rounded text-xs text-sky-300">
                        Kafka
                      </span>
                      <span className="px-2 py-1 bg-slate-700 rounded text-xs text-sky-300">
                        Docker
                      </span>
                      <span className="px-2 py-1 bg-slate-700 rounded text-xs text-sky-300">
                        Kubernetes
                      </span>
                    </div>
                    <a
                      href="#"
                      onclick="showProject('data-microservices')"
                      className="text-sky-400 hover:text-sky-300 text-sm font-medium flex items-center"
                    >
                      Ver detalhes
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 ml-1"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section
            id="experience"
            className="py-20 bg-slate-900/50"
          >
            <div className="container mx-auto px-4">
              <h2 className="text-3xl font-bold mb-12 text-center text-white">
                Minha <span className="text-sky-400">Experiência</span>
              </h2>

              <ExperienceSection>
                <ExperienceCard
                  title="Estagiário em Desenvolvimento Full-Stack"
                  start="Junho/2024"
                  end="Atualmente"
                  company="Polygon Soluções Computacionais"
                  description="Desenvolvimento e manutenção 
                      front-end utilizando React + TypeScript"
                />

                <ExperienceCard
                  title="Estagiário em Segurança da Informação"
                  start="Maio/2024"
                  end="Maio/2025"
                  company="Universidade Federal de Alfenas - Núcleo da Tecnologia da Informação (NTI)"
                  description={
                    <>
                      • <strong>Identificação de vulnerabilidades</strong>{" "}
                      através do método OWASP
                      <br />• <strong>
                        Documentação das vulnerabilidades
                      </strong>{" "}
                      encontradas, sugestões de mitigação de riscos
                      <br />• Implementação de{" "}
                      <strong>soluções de mitigações</strong> de
                      vulnerabilidades em PHP e Java
                      <br />• <strong>
                        +100 vulnerabilidades encontradas
                      </strong>{" "}
                      e documentadas
                      <br />• <strong>Hardening</strong> de sistemas PHP &
                      WordPress
                      <br />
                    </>
                  }
                />
              </ExperienceSection>
            </div>
          </section>

          <section id="tech" className="py-20">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl font-bold mb-12 text-center text-white">
                <span className="text-sky-400">Tecnologias</span> & Ferramentas
              </h2>

              <div className="max-w-4xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  <div className="bg-slate-800 rounded-xl p-6 border border-slate-700">
                    <h3 className="text-xl font-semibold mb-4 text-white flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 mr-2 text-sky-400"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01"
                        />
                      </svg>
                      Backend
                    </h3>
                    <div className="flex flex-wrap gap-3">
                      <span className="tech-badge px-3 py-2 bg-slate-700 rounded-lg text-sm text-sky-300">
                        Node.js
                      </span>
                      <span className="tech-badge px-3 py-2 bg-slate-700 rounded-lg text-sm text-sky-300">
                        Express
                      </span>
                      <span className="tech-badge px-3 py-2 bg-slate-700 rounded-lg text-sm text-sky-300">
                        Django
                      </span>
                      <span className="tech-badge px-3 py-2 bg-slate-700 rounded-lg text-sm text-sky-300">
                        Flask
                      </span>
                      <span className="tech-badge px-3 py-2 bg-slate-700 rounded-lg text-sm text-sky-300">
                        Spring Boot
                      </span>
                      <span className="tech-badge px-3 py-2 bg-slate-700 rounded-lg text-sm text-sky-300">
                        NestJS
                      </span>
                    </div>
                  </div>

                  <div className="bg-slate-800 rounded-xl p-6 border border-slate-700">
                    <h3 className="text-xl font-semibold mb-4 text-white flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 mr-2 text-sky-400"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                      Frontend
                    </h3>
                    <div className="flex flex-wrap gap-3">
                      <span className="tech-badge px-3 py-2 bg-slate-700 rounded-lg text-sm text-sky-300">
                        React
                      </span>
                      <span className="tech-badge px-3 py-2 bg-slate-700 rounded-lg text-sm text-sky-300">
                        Vue.js
                      </span>
                      <span className="tech-badge px-3 py-2 bg-slate-700 rounded-lg text-sm text-sky-300">
                        JavaScript
                      </span>
                      <span className="tech-badge px-3 py-2 bg-slate-700 rounded-lg text-sm text-sky-300">
                        TypeScript
                      </span>
                      <span className="tech-badge px-3 py-2 bg-slate-700 rounded-lg text-sm text-sky-300">
                        Tailwind CSS
                      </span>
                    </div>
                  </div>

                  <div className="bg-slate-800 rounded-xl p-6 border border-slate-700">
                    <h3 className="text-xl font-semibold mb-4 text-white flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 mr-2 text-sky-400"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4"
                        />
                      </svg>
                      Bancos de Dados
                    </h3>
                    <div className="flex flex-wrap gap-3">
                      <span className="tech-badge px-3 py-2 bg-slate-700 rounded-lg text-sm text-sky-300">
                        MongoDB
                      </span>
                      <span className="tech-badge px-3 py-2 bg-slate-700 rounded-lg text-sm text-sky-300">
                        PostgreSQL
                      </span>
                      <span className="tech-badge px-3 py-2 bg-slate-700 rounded-lg text-sm text-sky-300">
                        MySQL
                      </span>
                      <span className="tech-badge px-3 py-2 bg-slate-700 rounded-lg text-sm text-sky-300">
                        Redis
                      </span>
                      <span className="tech-badge px-3 py-2 bg-slate-700 rounded-lg text-sm text-sky-300">
                        Firebase
                      </span>
                    </div>
                  </div>

                  <div className="bg-slate-800 rounded-xl p-6 border border-slate-700">
                    <h3 className="text-xl font-semibold mb-4 text-white flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 mr-2 text-sky-400"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                        />
                      </svg>
                      DevOps
                    </h3>
                    <div className="flex flex-wrap gap-3">
                      <span className="tech-badge px-3 py-2 bg-slate-700 rounded-lg text-sm text-sky-300">
                        Docker
                      </span>
                      <span className="tech-badge px-3 py-2 bg-slate-700 rounded-lg text-sm text-sky-300">
                        Kubernetes
                      </span>
                      <span className="tech-badge px-3 py-2 bg-slate-700 rounded-lg text-sm text-sky-300">
                        AWS
                      </span>
                      <span className="tech-badge px-3 py-2 bg-slate-700 rounded-lg text-sm text-sky-300">
                        CI/CD
                      </span>
                      <span className="tech-badge px-3 py-2 bg-slate-700 rounded-lg text-sm text-sky-300">
                        Git
                      </span>
                    </div>
                  </div>

                  <div className="bg-slate-800 rounded-xl p-6 border border-slate-700">
                    <h3 className="text-xl font-semibold mb-4 text-white flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 mr-2 text-sky-400"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                        />
                      </svg>
                      Linguagens
                    </h3>
                    <div className="flex flex-wrap gap-3">
                      <span className="tech-badge px-3 py-2 bg-slate-700 rounded-lg text-sm text-sky-300">
                        JavaScript
                      </span>
                      <span className="tech-badge px-3 py-2 bg-slate-700 rounded-lg text-sm text-sky-300">
                        TypeScript
                      </span>
                      <span className="tech-badge px-3 py-2 bg-slate-700 rounded-lg text-sm text-sky-300">
                        Python
                      </span>
                      <span className="tech-badge px-3 py-2 bg-slate-700 rounded-lg text-sm text-sky-300">
                        Java
                      </span>
                      <span className="tech-badge px-3 py-2 bg-slate-700 rounded-lg text-sm text-sky-300">
                        C/C++
                      </span>
                      <span className="tech-badge px-3 py-2 bg-slate-700 rounded-lg text-sm text-sky-300">
                        Go
                      </span>
                    </div>
                  </div>

                  <div className="bg-slate-800 rounded-xl p-6 border border-slate-700">
                    <h3 className="text-xl font-semibold mb-4 text-white flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 mr-2 text-sky-400"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                        />
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                      Ferramentas
                    </h3>
                    <div className="flex flex-wrap gap-3">
                      <span className="tech-badge px-3 py-2 bg-slate-700 rounded-lg text-sm text-sky-300">
                        VS Code
                      </span>
                      <span className="tech-badge px-3 py-2 bg-slate-700 rounded-lg text-sm text-sky-300">
                        Postman
                      </span>
                      <span className="tech-badge px-3 py-2 bg-slate-700 rounded-lg text-sm text-sky-300">
                        Jira
                      </span>
                      <span className="tech-badge px-3 py-2 bg-slate-700 rounded-lg text-sm text-sky-300">
                        Figma
                      </span>
                      <span className="tech-badge px-3 py-2 bg-slate-700 rounded-lg text-sm text-sky-300">
                        GitHub
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section id="contact" className="py-20 bg-slate-900/50">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl font-bold mb-12 text-center text-white">
                Entre em <span className="text-sky-400">Contato</span>
              </h2>

              <div className="max-w-3xl mx-auto bg-slate-800 rounded-xl p-8 border border-slate-700">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-semibold mb-4 text-white">
                      Informações de Contato
                    </h3>
                    <ul className="space-y-4">
                      <li className="flex items-start">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5 mr-3 text-sky-400 mt-0.5"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                          />
                        </svg>
                        <span className="text-slate-300">
                          contato@devfullstack.com.br
                        </span>
                      </li>
                      <li className="flex items-start">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5 mr-3 text-sky-400 mt-0.5"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
                          />
                        </svg>
                        <span className="text-slate-300">(11) 98765-4321</span>
                      </li>
                      <li className="flex items-start">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5 mr-3 text-sky-400 mt-0.5"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                          />
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                          />
                        </svg>
                        <span className="text-slate-300">
                          São Paulo, SP - Brasil
                        </span>
                      </li>
                    </ul>

                    <h3 className="text-xl font-semibold mt-8 mb-4 text-white">
                      Redes Sociais
                    </h3>
                    <div className="flex space-x-4">
                      <a
                        href="#"
                        className="h-10 w-10 rounded-full bg-slate-700 hover:bg-sky-600 flex items-center justify-center transition-colors"
                      >
                        <i className="fab fa-github text-white"></i>
                      </a>
                      <a
                        href="#"
                        className="h-10 w-10 rounded-full bg-slate-700 hover:bg-sky-600 flex items-center justify-center transition-colors"
                      >
                        <i className="fab fa-linkedin-in text-white"></i>
                      </a>
                      <a
                        href="#"
                        className="h-10 w-10 rounded-full bg-slate-700 hover:bg-sky-600 flex items-center justify-center transition-colors"
                      >
                        <i className="fab fa-twitter text-white"></i>
                      </a>
                      <a
                        href="#"
                        className="h-10 w-10 rounded-full bg-slate-700 hover:bg-sky-600 flex items-center justify-center transition-colors"
                      >
                        <i className="fab fa-dev text-white"></i>
                      </a>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold mb-4 text-white">
                      Envie uma Mensagem
                    </h3>
                    <form className="space-y-4">
                      <div>
                        <label
                          for="name"
                          className="block text-sm font-medium text-slate-300 mb-1"
                        >
                          Nome
                        </label>
                        <input
                          type="text"
                          id="name"
                          className="w-full px-4 py-2 bg-slate-700 border border-slate-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500 text-white"
                        />
                      </div>
                      <div>
                        <label
                          for="email"
                          className="block text-sm font-medium text-slate-300 mb-1"
                        >
                          Email
                        </label>
                        <input
                          type="email"
                          id="email"
                          className="w-full px-4 py-2 bg-slate-700 border border-slate-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500 text-white"
                        />
                      </div>
                      <div>
                        <label
                          for="message"
                          className="block text-sm font-medium text-slate-300 mb-1"
                        >
                          Mensagem
                        </label>
                        <textarea
                          id="message"
                          rows="4"
                          className="w-full px-4 py-2 bg-slate-700 border border-slate-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500 text-white"
                        ></textarea>
                      </div>
                      <button
                        type="button"
                        className="w-full px-6 py-3 bg-sky-600 hover:bg-sky-700 text-white rounded-lg transition-colors font-medium"
                      >
                        Enviar Mensagem
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>

        <footer className="bg-slate-900 border-t border-slate-800 py-8">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="mb-4 md:mb-0">
                <div className="code-font text-xl font-semibold text-sky-400">
                  <span className="text-slate-400">&lt;</span>
                  DevFullStack
                  <span className="text-slate-400">/&gt;</span>
                </div>
              </div>

              <div className="text-slate-400 text-sm">
                &copy; 2023 Portfolio Dev Full-Stack. Todos os direitos
                reservados.
              </div>
            </div>
          </div>
        </footer>
      </div>

      <div
        id="project-modal"
        className="fixed inset-0 bg-black/80 z-50 hidden overflow-y-auto"
      >
        <div className="min-h-screen flex items-center justify-center p-4">
          <div className="bg-slate-800 rounded-xl max-w-4xl w-full border border-slate-700 max-h-[90vh] overflow-y-auto">
            <div className="sticky top-0 bg-slate-800 border-b border-slate-700 p-4 flex justify-between items-center">
              <h2 id="modal-title" className="text-2xl font-bold text-white">
                Detalhes do Projeto
              </h2>
              <button
                onclick="closeProjectModal()"
                className="text-slate-400 hover:text-white"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            <div id="modal-content" className="p-6"></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
