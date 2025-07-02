import { ExperienceCard } from "./components/ExperienceCard";
import { ExperienceSection } from "./components/ExperienceSection";
import { Header } from "./components/Header";
import { ProjectCard } from "./components/projects/ProjectCard";
import { Projects } from "./components/projects/Projects";
import { Section } from "./components/section/Section";
import { SectionTitle } from "./components/section/SectionTitle";
import { SectionTitleStrong } from "./components/section/SectionTitleStrong";
import { ToolCard } from "./components/tools/ToolCard";
import { Tools } from "./components/tools/Tools";
import { PiGraphBold } from "react-icons/pi";
import {
  FaBinoculars,
  FaCode,
  FaCoffee,
  FaCompass,
  FaDatabase,
  FaDog,
  FaEye,
  FaGamepad,
  FaLaptopCode,
  FaLock,
  FaSearch,
  FaServer,
} from "react-icons/fa";
import { ContactInformations } from "./components/ContactInformations";
import { Footer } from "./components/Footer";
import { FaComputer, FaGear } from "react-icons/fa6";
import { AboutMe } from "./components/AboutMe";
import { Home } from "./components/Home";
import { ParticlesBackground } from "./components/ParticlesBackground";

import jsimples from "/jsimples.png";
import jsimples2 from "/jsimples2.png";

import bean_counter from "/bean_counter.png";
import bean_counter2 from "/bean_counter2.png";

import bean_classifier from "/bean_classifier.png";
import bean_classifier2 from "/bean_classifier2.png";
import bean_classifier3 from "/bean_classifier3.png";
import bean_classifier4 from "/bean_classifier4.png";

import folklore from "/folklore.png";
import folklore2 from "/folklore2.png";

import uaisearch from "/uaisearch.png";
import uaisearch2 from "/uaisearch2.png";
import uaisearch3 from "/uaisearch3.png";
import uaisearch4 from "/uaisearch4.png";
import uaisearch5 from "/uaisearch5.png";
import uaisearch6 from "/uaisearch6.png";
import uaisearch7 from "/uaisearch7.png";

import Gallery from "./components/Gallery";
import { VoluntarySection } from "./components/voluntary/VoluntarySection";
import { VoluntaryJob } from "./components/voluntary/VoluntaryJob";

function App() {
  return (
    <>
      <div className="min-h-screen flex flex-col">
        <Header />

        <main className="flex-grow">
          <Section
            id="home"
            className="scroll-mt-10"
            style={{ paddingTop: "0px" }}
          >
            <ParticlesBackground />
            <Home />
          </Section>

          <Section id="about" className="scroll-mt-10">
            <SectionTitle>
              Sobre <SectionTitleStrong>Mim</SectionTitleStrong>
            </SectionTitle>

            <AboutMe>
              <AboutMe.Paragraph>
                Sou um desenvolvedor full-stack com foco em back-end, apaixonado
                por criar soluções. Atualmente, estou cursando{" "}
                <strong>Ciência da Computação</strong> pela Universidade Federal
                de Alfenas e buscando constantemente aprimorar minhas
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
              <ProjectCard
                live={"https://jsimples.joaoragazzo.dev/"}
                github={"https://github.com/joaoragazzo/JSimples/"}
                development
              >
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
                <ProjectCard.Tag>GitHub Actions (CI/CD)</ProjectCard.Tag>
                <ProjectCard.Challanges>
                  Um dos principais desafios nesse sistema foi atingir o
                  propósito principal desse sistema: simplificar o processo de
                  ensino-aprendizagem de um dos tópicos mais importantes da
                  computação - o processo de compilação. Para atingir esse
                  objetivo, foi utilizado um design minimalista, a fim de criar
                  um ambiente intuitivo e de fácil utilização para os
                  estudantes.
                </ProjectCard.Challanges>
                <ProjectCard.Functionality>
                  Processo de compilação da linguagem Simples
                </ProjectCard.Functionality>
                <ProjectCard.Functionality>
                  Execução interpretada da linguagem compilada (MVS)
                </ProjectCard.Functionality>
                <ProjectCard.Functionality>
                  Execução passo-a-passo da linguagem MVS
                </ProjectCard.Functionality>
                <ProjectCard.Functionality>
                  Demonstração da árvore sintática
                </ProjectCard.Functionality>
                <ProjectCard.Functionality>
                  Demonstração da árvore de derivação
                </ProjectCard.Functionality>
                <ProjectCard.Demonstration>
                  <Gallery images={[jsimples, jsimples2]} />
                </ProjectCard.Demonstration>
              </ProjectCard>

              <ProjectCard
                finished
                live={"https://uaisearch.xyz/"}
                github={"https://github.com/joaoragazzo/uaisearch/"}
              >
                <ProjectCard.Icon>
                  <FaSearch />
                </ProjectCard.Icon>
                <ProjectCard.Title>UaiSearch</ProjectCard.Title>
                <ProjectCard.Description>
                  Aplicação integrada com o ElasticSearch para montar um motor
                  de busca completo com dados indexados da Wikipédia, com opções
                  de paginação de resultados, filtro de correspondência exata,
                  ordenar resultados por data, relevância e tempo de leitura,
                  definir um tempo máximo/mínimo de leitura, intervalos em tempo
                  de leitura mínimo e máximo, grafos de conexões.
                </ProjectCard.Description>
                <ProjectCard.Tag>Docker</ProjectCard.Tag>
                <ProjectCard.Tag>Java</ProjectCard.Tag>
                <ProjectCard.Tag>SpringBoot</ProjectCard.Tag>
                <ProjectCard.Tag>ElasticSearch</ProjectCard.Tag>
                <ProjectCard.Tag>JavaScript</ProjectCard.Tag>
                <ProjectCard.Tag>React</ProjectCard.Tag>
                <ProjectCard.Tag>GitHub Actions (CI/CD)</ProjectCard.Tag>
                <ProjectCard.Tag>StyledComponent</ProjectCard.Tag>
                <ProjectCard.Tag>Python (Crawler/Scrapping)</ProjectCard.Tag>

                <ProjectCard.Functionality>
                  Containerização da aplicação do ElasticSearch
                </ProjectCard.Functionality>
                <ProjectCard.Functionality>
                  Motor de busca utilizando ElasticSearch
                </ProjectCard.Functionality>
                <ProjectCard.Functionality>
                  Análise linguística (com snowball)
                </ProjectCard.Functionality>
                <ProjectCard.Functionality>
                  Suporte a +20 idiomas através do i18n
                </ProjectCard.Functionality>
                <ProjectCard.Functionality>
                  Grafos de conexões e referências na Wikipédia
                </ProjectCard.Functionality>
                <ProjectCard.Functionality>
                  Search-as-you-type
                </ProjectCard.Functionality>
                <ProjectCard.Functionality>
                  Correção de ortografia (sugestão: "Você quis dizer...")
                </ProjectCard.Functionality>
                <ProjectCard.Functionality>
                  Resumos gerados por inteligência artificial
                </ProjectCard.Functionality>
                <ProjectCard.Functionality>
                  Histórico de pesquisa
                </ProjectCard.Functionality>
                <ProjectCard.Functionality>
                  Favoritar resultados
                </ProjectCard.Functionality>
                <ProjectCard.Functionality>
                  Sugestões de correções
                </ProjectCard.Functionality>
                <ProjectCard.Functionality>
                  Grafos de conexões
                </ProjectCard.Functionality>
                <ProjectCard.Functionality>
                  Syntax Highlight
                </ProjectCard.Functionality>
                <ProjectCard.Functionality>
                  Dicas de pesquisas
                </ProjectCard.Functionality>
                <ProjectCard.Functionality>
                  Teclado virtual
                </ProjectCard.Functionality>
                <ProjectCard.Functionality>
                  Suporte para libras
                </ProjectCard.Functionality>
                <ProjectCard.Functionality>
                  Indicadores de palavras chaves
                </ProjectCard.Functionality>
                <ProjectCard.Functionality>
                  Paginação de resultados
                </ProjectCard.Functionality>
                <ProjectCard.Functionality>
                  Controle de quantidade de resultados por páginas
                </ProjectCard.Functionality>
                <ProjectCard.Functionality>
                  Filtros avançados (ex: correspondência exata, remoção de
                  informações do resultado, filtro de tempo de leitura e data
                  (maior, menor e intervalo), resultados por página).
                </ProjectCard.Functionality>
                <ProjectCard.Challanges>
                  Durante o desenvolvimento do UaiSearch, enfrentei diversos
                  desafios técnicos e de arquitetura. Um dos principais foi
                  estruturar o sistema de forma escalável, garantindo que o
                  backend, o Elasticsearch e o frontend pudessem evoluir de
                  maneira independente, sem criar uma aplicação difícil de
                  manter.
                  <br />
                  <br />
                  A integração com o Elasticsearch também foi complicada. Foi
                  necessário estudar conceitos como mapeamento de índices,
                  queries complexas, análise linguística e otimização de
                  desempenho nas buscas, para que o sistema retornasse
                  resultados relevantes.
                  <br />
                  <br />
                  Outro desafio importante foi lidar com a containerização
                  usando Docker. Desde o processo de subir e configurar o
                  cluster do Elasticsearch em containers, até garantir que o
                  ambiente de produção tivesse o comportamento adequado.
                  <br />
                  <br />
                  No frontend, o foco foi criar uma interface limpa, intuitiva e
                  de fácil utilização, mesmo oferecendo funcionalidades
                  avançadas como filtros por tempo de leitura, ordenação por
                  relevância e data, e exibição de grafos de conexões entre
                  artigos da Wikipédia.
                  <br />
                  <br />
                  Além disso, a implementação do sistema de sugestões e
                  correções de busca (para casos de digitação incorreta ou
                  termos semelhantes) exigiu análise de algoritmos de sugestão
                  do Elasticsearch e um bom ajuste fino nos parâmetros de
                  consulta.
                </ProjectCard.Challanges>
                <ProjectCard.Demonstration>
                  <Gallery images={[uaisearch, uaisearch2, uaisearch3, uaisearch4, uaisearch5, uaisearch6, uaisearch7]}/>
                </ProjectCard.Demonstration>
              </ProjectCard>

              <ProjectCard
                finished
                github={
                  "https://github.com/joaoragazzo/parallel-coffee-counter"
                }
              >
                <ProjectCard.Icon>
                  <FaCoffee />
                </ProjectCard.Icon>
                <ProjectCard.Title>Coffee Counter</ProjectCard.Title>
                <ProjectCard.Description>
                  Sistema desenvolvido para realizar identificação,
                  classificação e posterior contagem de de grãos de café.
                  Através de operações morfológicas na imagem, e utilizando uma
                  rede neural previamente treinada, foi possível alcançar uma
                  precisão de 99% na contagem e classificação dos grãos.
                </ProjectCard.Description>
                <ProjectCard.Tag>Python</ProjectCard.Tag>
                <ProjectCard.Tag>MPI4Py</ProjectCard.Tag>
                <ProjectCard.Tag>TensorFlow</ProjectCard.Tag>
                <ProjectCard.Tag>OpenCV</ProjectCard.Tag>
                <ProjectCard.Tag>Inteligência Artificial</ProjectCard.Tag>
                <ProjectCard.Functionality>
                  Realizar a paralelização após a captura do vídeo
                </ProjectCard.Functionality>
                <ProjectCard.Functionality>
                  Identificar componentes conexos através de NumPy e OpenCV2
                </ProjectCard.Functionality>
                <ProjectCard.Functionality>
                  Enviar os componentes as figuras de de grãos de café para o
                  classificador
                </ProjectCard.Functionality>
                <ProjectCard.Functionality>
                  Classificar os grãos e retornar o tipo do grão ao mestre
                </ProjectCard.Functionality>
                <ProjectCard.Tag>NumPy</ProjectCard.Tag>
                <ProjectCard.Challanges>
                  Um dos principais desafios desse projeto foi, sem dúvidas,
                  realizar o treinamento da rede neural para posterior
                  classificação dos grãos. Para isso, existe uma funcionalidade
                  de classificação manual, onde foi possível automatizar a
                  classificação manual de grãos, aumentando muito a eficiência
                  do treinamento da rede neural.
                </ProjectCard.Challanges>
                <ProjectCard.Demonstration>
                  <Gallery
                    images={[
                      bean_classifier,
                      bean_classifier2,
                      bean_classifier3,
                      bean_classifier4,
                    ]}
                  />
                </ProjectCard.Demonstration>
              </ProjectCard>

              <ProjectCard
                finished
                github={"https://github.com/joaoragazzo/folklore"}
              >
                <ProjectCard.Icon>
                  <FaGamepad />
                </ProjectCard.Icon>
                <ProjectCard.Title>FolkLore</ProjectCard.Title>
                <ProjectCard.Description>
                  Jogo desenvolvido durante a disciplina de computação gráfica.
                  Foi utilizado a temática do folclore braliseiro para criar um
                  jogo de sobrevivência roguelite. Durante o projeto, foi
                  empregado um esquema de <i>sprints</i>, juntamente com{" "}
                  <i>Kanban</i> para definir metas e tarefas.
                </ProjectCard.Description>
                <ProjectCard.Tag>
                  Programação Orientada a Objetos
                </ProjectCard.Tag>
                <ProjectCard.Tag>C#</ProjectCard.Tag>
                <ProjectCard.Tag>Blender</ProjectCard.Tag>
                <ProjectCard.Tag>Unity</ProjectCard.Tag>
                <ProjectCard.Tag>Scrum</ProjectCard.Tag>
                <ProjectCard.Tag>Kanban</ProjectCard.Tag>
                <ProjectCard.Challanges>
                  Para desenvolver o jogo, foi necessário estudar diversas
                  técnicas para design de jogos, como por exemplo geração de
                  mapa procedural, <i>path finding</i>
                  de inimigos, otimização de processamento, interação entre
                  entidades, modelagem 3D, animação orientada a eventos. Além
                  disso, por ser um projeto grande e dividido entre diversas
                  pessoas, foi utilizado Kanban e sprints para atingir um
                  desenvolvimento contínuo e organizado.
                </ProjectCard.Challanges>
                <ProjectCard.Demonstration>
                  <Gallery images={[folklore, folklore2]} />
                </ProjectCard.Demonstration>
              </ProjectCard>

              <ProjectCard
                finished
                github={"https://github.com/joaoragazzo/counting-beans"}
              >
                <ProjectCard.Icon>
                  <FaEye />
                </ProjectCard.Icon>
                <ProjectCard.Title>Bean Counter</ProjectCard.Title>
                <ProjectCard.Description>
                  Sistema desenvolvido apenas com Python puro (sem sistemas de
                  inteligência artificial) capaz de identificar e contar grãos
                  em figuras PGM com uma precisão de aproximadamente 90%.
                </ProjectCard.Description>
                <ProjectCard.Tag>Python</ProjectCard.Tag>
                <ProjectCard.Functionality>
                  Aplicar funções morfológicas para encontrar componentes
                  conexos
                </ProjectCard.Functionality>
                <ProjectCard.Functionality>
                  Realizar a contagem de grãos em figuras PGM
                </ProjectCard.Functionality>
                <ProjectCard.Functionality>
                  Salvar imagem com contagem de grãos em formato PGM
                </ProjectCard.Functionality>

                <ProjectCard.Challanges>
                  O maior desafio desse projeto foi conseguir atingir a uma
                  contagem próxima da ótima para os grãos. Como exisita a
                  limitação de usar apenas bibliotecas básicas de Python, foi
                  necessário utilizar de diversas operações morfológicas para
                  separar os grãos e identificar figuras conexas.
                </ProjectCard.Challanges>
                <ProjectCard.Demonstration>
                  <Gallery images={[bean_counter, bean_counter2]} />
                </ProjectCard.Demonstration>
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
              <SectionTitleStrong>Tecnologias</SectionTitleStrong> &
              Experiências
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
                <ToolCard.Tool>JavaHibernate</ToolCard.Tool>
                <ToolCard.Tool>Lombok</ToolCard.Tool>
                <ToolCard.Tool>JUnit</ToolCard.Tool>
                <ToolCard.Tool>Mockito</ToolCard.Tool>
                <ToolCard.Tool>JWT</ToolCard.Tool>
                <ToolCard.Tool>JPA</ToolCard.Tool>
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
                <ToolCard.Tool>WordPress</ToolCard.Tool>
              </ToolCard>

              <ToolCard>
                <ToolCard.Icon>
                  <FaLock />
                </ToolCard.Icon>
                <ToolCard.Title>AppSec</ToolCard.Title>
                <ToolCard.Tool>OWASP</ToolCard.Tool>
                <ToolCard.Tool>Pentests</ToolCard.Tool>
                <ToolCard.Tool>OWASP TOP 10</ToolCard.Tool>
              </ToolCard>
            </Tools>
          </Section>

          <Section id="voluntary" >
            <SectionTitle>
              Trabalhos <SectionTitleStrong>Voluntários</SectionTitleStrong>
            </SectionTitle>

            <VoluntarySection>
              <VoluntaryJob
                title={"Pentests nos sistemas da UNIFAL-MG"}
                tags={["Segurança da Informação"]}
                icon={<FaLock />}
                description={
                  "Ao longo do ano de 2023, realizei um pentest voluntário nos sistemas em todo o escopo da UNIFAL-MG. Posteriormente, fiz parte do time de segurança da UNIFAL-MG, atuando como estagiário e efetivando pentests em atualizações e novos sistemas."
                }
                startDate={2023}
                endDate={2024}
                finished
              />

              <VoluntaryJob
                title={"Desenvolvedor web ONG Late Coração"}
                tags={["Causa Animal"]}
                icon={<FaDog />}
                startDate={2024}
                endDate={"Atualmente"}
                description={
                  "Em 2024, fui desenvolvedor web de um site em WordPress para a ONG Late Coração conseguir divulgar suas histórias, resgates e animais para adoção."
                }
                live={"https://onglatecoracaoalfenas.com/"}
                finished
              />

              <VoluntaryJob 
                title={"II Workshop computação UNIFAL-MG"}
                tags={["Workshop", "Desenvolvedor Web"]}
                icon={<FaLaptopCode />}
                startDate={2025}
                endDate={"Atualmente"}
                description={
                  "Atualmente, estou atuando como desenvolvedor web para o II Workshop da computação da UNIFAL-MG, desenvolvendo soluções para as necessidades do evento, como por exemplo: uma plataforma de inscrição, um sistema de submissão de trabalhos e um site de exposição do evento."
                }
                development
                live={"https://workshopcomputacaounifal.org/"}
              />

              <VoluntaryJob 
                title={"Monitor de Algoritmo e Estruturas de Dados I"}
                tags={["Educação"]}
                icon={<FaBinoculars />}
                startDate={2025}
                endDate={"Atualmente"}
                description={
                  "Atualmente, atuo como monitor na disciplina de Algoritmo e Estruturas de Dados I, na Universidade Federal de Alfenas. "
                }
              />

              <VoluntaryJob 
                title={"Desenvolvedor Full-stack UFLA-JR"}
                tags={["WordPress", "PHP", "AppSec"]}
                icon={<FaCompass />}
                startDate={2025}
                endDate={"Atualmente"}
                description={
                  "Após um incidente de segurança nos sistemas da Ufla Júnior, fui contatado para realizar a recuperação do ambiente WordPress. Desde então, passei a atuar na melhoria contínua dos serviços da Ufla Júnior – Consultoria Administrativa, implementando soluções voltadas à otimização do funil de conversão, como a criação de uma loja virtual, a automatização do preenchimento de contratos e diversas melhorias nos processos digitais e no atendimento."
                }
                live={"https://uflajunior.com/"}
              />
            </VoluntarySection>
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
