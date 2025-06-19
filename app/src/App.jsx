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
import { FaCode, FaDatabase, FaSearch, FaServer } from "react-icons/fa";
import { ContactInformations } from "./components/ContactInformations";
import { Footer } from "./components/Footer";
import { FaComputer, FaGear } from "react-icons/fa6";
import { AboutMe } from "./components/AboutMe";

function App() {
  return (
    <>
      <div className="min-h-screen flex flex-col">
        <Header>
          <JoaoRagazzo />
          <Links />
        </Header>

        <main className="flex-grow">
          <Section id="home" className="scroll-mt-10">
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

          <Section id="about" className="scroll-mt-10">
            <SectionTitle>
              Sobre <SectionTitleStrong>Mim</SectionTitleStrong>
            </SectionTitle>

            <AboutMe>
              <AboutMe.Paragraph>
                Sou um desenvolvedor full-stack com foco em back-end, 
                apaixonado por criar soluções. Atualmente, estou cursando 
                <strong>Ciência da Computação</strong> pela Universidade 
                Federal de Alfenas e buscando constantemente aprimorar minhas 
                habilidades técnicas.
              </AboutMe.Paragraph>
              <AboutMe.Paragraph>
                Minha jornada na programação começou com a curiosidade de
                entender como as coisas funcionam por trás das interfaces.
                Comecei fazendo bots e soluções para problemas que eu enfrentava
                no meu dia-a-dia. Hoje, trabalho com diversas tecnologias e
                frameworks, sempre buscando as melhores práticas de
                desenvolvimento.
              </AboutMe.Paragraph>
              <AboutMe.Tag>Desenvolvimento BackEnd</AboutMe.Tag> 
              <AboutMe.Tag>Desenvolvimento FrontEnd</AboutMe.Tag>
              <AboutMe.Tag>AppSec & Segurança</AboutMe.Tag>
            </AboutMe>
          </Section>

          <Section id="projects" className="scroll-mt-10">
            <SectionTitle>
              Meus <SectionTitleStrong>Projetos</SectionTitleStrong>
            </SectionTitle>

            <Projects>
              <ProjectCard>
                <ProjectCard.Icon>
                  <PiGraphBold />
                </ProjectCard.Icon>
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
                <ProjectCard.Icon>
                  <FaSearch />
                </ProjectCard.Icon>
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

          <Section id="experience" className="scroll-mt-10">
            <SectionTitle>
              Minha <SectionTitleStrong>Experiência</SectionTitleStrong>
            </SectionTitle>

            <ExperienceSection>
              <ExperienceCard
                title="Estagiário em Desenvolvimento Full-Stack"
                start="Junho/2025"
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

          <Section id="tech" className="scroll-mt-10">
            <SectionTitle>
              <SectionTitleStrong>Tecnologias</SectionTitleStrong> & Ferramentas
            </SectionTitle>

            <Tools>
              <ToolCard>
                <ToolCard.Icon>
                  <FaServer />
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
                  <FaComputer />
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
                  <FaDatabase />
                </ToolCard.Icon>
                <ToolCard.Title>Banco de dados</ToolCard.Title>
                <ToolCard.Tool>MySQL</ToolCard.Tool>
                <ToolCard.Tool>PostgreSQL</ToolCard.Tool>
                <ToolCard.Tool>MariaDB</ToolCard.Tool>
              </ToolCard>

              <ToolCard>
                <ToolCard.Icon>
                  <PiGraphBold />
                </ToolCard.Icon>
                <ToolCard.Title>DevOps</ToolCard.Title>
                <ToolCard.Tool>Docker</ToolCard.Tool>
                <ToolCard.Tool>CI/CD</ToolCard.Tool>
                <ToolCard.Tool>GitHub Actions</ToolCard.Tool>
                <ToolCard.Tool>Git</ToolCard.Tool>
              </ToolCard>

              <ToolCard>
                <ToolCard.Icon>
                  <FaCode />
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
                  <FaGear />
                </ToolCard.Icon>
                <ToolCard.Title>Ferramentas</ToolCard.Title>
                <ToolCard.Tool>VS Code</ToolCard.Tool>
                <ToolCard.Tool>Jira</ToolCard.Tool>
                <ToolCard.Tool>Kanban</ToolCard.Tool>
                <ToolCard.Tool>GitHub</ToolCard.Tool>
              </ToolCard>
            </Tools>
          </Section>

          <Section id="contact" className="scroll-mt-10">
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
