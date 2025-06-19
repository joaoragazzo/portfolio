import { ExperienceCard } from "./components/ExperienceCard";
import { ExperienceSection } from "./components/ExperienceSection";
import { Header } from "./components/Header";
import { JoaoRagazzo } from "./components/JoaoRagazzo";
import { Links } from "./components/Links";
import { ProjectCard } from "./components/projects/ProjectCard";
import { Projects } from "./components/projects/Projects";
import { Section } from "./components/section/Section";
import { SectionTitle } from "./components/section/SectionTitle";
import { SectionTitleStrong } from "./components/section/SectionTitleStrong";
import { ToolCard } from "./components/tools/ToolCard";
import { Tools } from "./components/tools/Tools";
import { PiGraphBold } from "react-icons/pi";
import { FaDiscord, FaGithub, FaLinkedin, FaMailBulk, FaSearch } from "react-icons/fa";
import { ContactInformations } from "./components/ContactInformations";
import { Footer } from "./components/Footer";

function App() {
  return (
    <>
      <div className="min-h-screen flex flex-col">
        <Header>
          <JoaoRagazzo />
          <Links />
        </Header>

        <main className="flex-grow">
          <Section>
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                <SectionTitleStrong>Desenvolvedor</SectionTitleStrong>{" "}
                Full-Stack & AppSec
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
          </Section>

          <Section>
            <SectionTitle>
              Sobre <SectionTitleStrong>Mim</SectionTitleStrong>
            </SectionTitle>

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
                  tecnologias e frameworks, sempre buscando as melhores práticas
                  de desenvolvimento.
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
          </Section>

          <Section>
            <SectionTitle>
              Meus <SectionTitleStrong>Projetos</SectionTitleStrong>
            </SectionTitle>

            <Projects>
              <ProjectCard>
                <ProjectCard.Icon><PiGraphBold/></ProjectCard.Icon>
                <ProjectCard.Title>JSimples</ProjectCard.Title>
                <ProjectCard.Description>
                  Aplicação estática destinda para efetuar processo completo de
                  compilação da linguagem Simples e posterior interpretação.
                  Desenvolvida para auxiliar no processo de ensino-aprendizagem
                  da disciplina de teoria de linguagem e compiladores.
                </ProjectCard.Description>
                <ProjectCard.Tag>JavaScript</ProjectCard.Tag>
                <ProjectCard.Tag>React</ProjectCard.Tag>
                <ProjectCard.Tag>Styled Components</ProjectCard.Tag>
                <ProjectCard.Tag>ContextAPI</ProjectCard.Tag>
                <ProjectCard.Tag>Jison/Yacc</ProjectCard.Tag>
              </ProjectCard>

              <ProjectCard>
                <ProjectCard.Icon><FaSearch /></ProjectCard.Icon>
                <ProjectCard.Title>UaiSearch</ProjectCard.Title>
                <ProjectCard.Description>
                  Aplicação integrada com o ElasticSearch para montar um motor
                  de busca completo, com opções de paginação, filtro de
                  correspondência exata, paginação de resultados, ordenar
                  resultados por data, relevância e tempo de leitura, definir um
                  tempo máximo/mínimo de leitura.
                </ProjectCard.Description>
                <ProjectCard.Tag>Java</ProjectCard.Tag>
                <ProjectCard.Tag>SpringBoot</ProjectCard.Tag>
                <ProjectCard.Tag>ElasticSearch</ProjectCard.Tag>
                <ProjectCard.Tag>API RESTful</ProjectCard.Tag>
                <ProjectCard.Tag>JavaScript</ProjectCard.Tag>
                <ProjectCard.Tag>React</ProjectCard.Tag>
                <ProjectCard.Tag>StyledComponent</ProjectCard.Tag>
              </ProjectCard>
            </Projects>
          </Section>

          <Section>
            <SectionTitle>
              Minha <SectionTitleStrong>Experiência</SectionTitleStrong>
            </SectionTitle>

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
                    • <strong>Identificação de vulnerabilidades</strong> através
                    do método OWASP
                    <br />• <strong>
                      Documentação das vulnerabilidades
                    </strong>{" "}
                    encontradas, sugestões de mitigação de riscos
                    <br />• Implementação de{" "}
                    <strong>soluções de mitigações</strong> de vulnerabilidades
                    em PHP e Java
                    <br />• <strong>+100 vulnerabilidades encontradas</strong> e
                    documentadas
                    <br />• <strong>Hardening</strong> de sistemas PHP &
                    WordPress
                    <br />
                  </>
                }
              />
            </ExperienceSection>
          </Section>

          <Section>
            <SectionTitle>
              <SectionTitleStrong>Tecnologias</SectionTitleStrong> & Ferramentas
            </SectionTitle>

            <Tools>
              <ToolCard>
                <ToolCard.Icon>
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
                </ToolCard.Icon>
                <ToolCard.Title>BackEnd</ToolCard.Title>
                <ToolCard.Tool>Flask</ToolCard.Tool>
                <ToolCard.Tool>Django</ToolCard.Tool>
                <ToolCard.Tool>PHP</ToolCard.Tool>
                <ToolCard.Tool>SpringBoot</ToolCard.Tool>
                <ToolCard.Tool>SpringSecurity</ToolCard.Tool>
                <ToolCard.Tool>JPA</ToolCard.Tool>
                <ToolCard.Tool>JavaHibernate</ToolCard.Tool>
                <ToolCard.Tool>Lombok</ToolCard.Tool>
                <ToolCard.Tool>JUnit</ToolCard.Tool>
                <ToolCard.Tool>Mockito</ToolCard.Tool>
              </ToolCard>

              <ToolCard>
                <ToolCard.Icon>
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
                </ToolCard.Icon>
                <ToolCard.Title>FrontEnd</ToolCard.Title>
                <ToolCard.Tool>JavaScript</ToolCard.Tool>
                <ToolCard.Tool>TypeScript</ToolCard.Tool>
                <ToolCard.Tool>Tailwind CSS</ToolCard.Tool>
                <ToolCard.Tool>React</ToolCard.Tool>
                <ToolCard.Tool>ContextAPI</ToolCard.Tool>
                <ToolCard.Tool>HTML/CSS</ToolCard.Tool>
                <ToolCard.Tool>StyledComponents</ToolCard.Tool>
              </ToolCard>

              <ToolCard>
                <ToolCard.Icon>
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
                </ToolCard.Icon>
                <ToolCard.Title>Banco de dados</ToolCard.Title>
                <ToolCard.Tool>MySQL</ToolCard.Tool>
                <ToolCard.Tool>PostgreSQL</ToolCard.Tool>
              </ToolCard>

              <ToolCard>
                <ToolCard.Icon>
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
                </ToolCard.Icon>
                <ToolCard.Title>DevOps</ToolCard.Title>
                <ToolCard.Tool>Docker</ToolCard.Tool>
                <ToolCard.Tool>CI/CD</ToolCard.Tool>
                <ToolCard.Tool>GitHub Actions</ToolCard.Tool>
                <ToolCard.Tool>Git</ToolCard.Tool>
              </ToolCard>

              <ToolCard>
                <ToolCard.Icon>
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
                </ToolCard.Icon>
                <ToolCard.Title>Linguagens</ToolCard.Title>
                <ToolCard.Tool>Java</ToolCard.Tool>
                <ToolCard.Tool>Python</ToolCard.Tool>
                <ToolCard.Tool>PHP</ToolCard.Tool>
                <ToolCard.Tool>C#</ToolCard.Tool>
                <ToolCard.Tool>C/C++</ToolCard.Tool>
                <ToolCard.Tool>JavaScript</ToolCard.Tool>
                <ToolCard.Tool>TypeScript</ToolCard.Tool>
              </ToolCard>

              <ToolCard>
                <ToolCard.Icon>
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
                </ToolCard.Icon>
                <ToolCard.Title>Ferramentas</ToolCard.Title>
                <ToolCard.Tool>VS Code</ToolCard.Tool>
                <ToolCard.Tool>Jira</ToolCard.Tool>
                <ToolCard.Tool>Kanban</ToolCard.Tool>
                <ToolCard.Tool>GitHub</ToolCard.Tool>
              </ToolCard>
            </Tools>
          </Section>

          <Section>
            <SectionTitle>
              Entre em <SectionTitleStrong>Contato</SectionTitleStrong>
            </SectionTitle>

            <ContactInformations />
          </Section>
        </main>

        <Footer />
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
