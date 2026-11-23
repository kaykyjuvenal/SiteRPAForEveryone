import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, CheckCircle2, Bot, Workflow, Clock, Target, AlertTriangle } from "lucide-react";
import logoAsset from "@/assets/rpa-logo.png";

const TITLE = "O que é RPA? O Guia Completo para Automação Robótica de Processos";
const DESCRIPTION = "Entenda o que é RPA (Robotic Process Automation), como funciona, benefícios, casos de uso e a diferença para o Recibo de Pagamento Autônomo. Guia completo da RPA For Everyone.";
const URL = "https://rpaforeveryone.com.br/blog/o-que-e-rpa";
const PUBLISHED = "2026-06-12";

export const Route = createFileRoute("/blog/o-que-e-rpa")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { name: "keywords", content: "o que é rpa, rpa, robotic process automation, automação robótica de processos, automation edge, automação rpa" },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:url", content: URL },
      { property: "og:type", content: "article" },
      { property: "article:published_time", content: PUBLISHED },
      { property: "article:author", content: "RPA For Everyone" },
      { property: "article:section", content: "RPA" },
    ],
    links: [
      { rel: "canonical", href: URL },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Article",
          headline: TITLE,
          description: DESCRIPTION,
          author: { "@type": "Organization", name: "RPA For Everyone", url: "https://rpaforeveryone.com.br/" },
          publisher: {
            "@type": "Organization",
            name: "RPA For Everyone",
            url: "https://rpaforeveryone.com.br/",
          },
          datePublished: PUBLISHED,
          dateModified: PUBLISHED,
          inLanguage: "pt-BR",
          mainEntityOfPage: { "@type": "WebPage", "@id": URL },
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: [
            {
              "@type": "Question",
              name: "O que significa RPA?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "RPA é a sigla para Robotic Process Automation (Automação Robótica de Processos): uma tecnologia que usa robôs de software para executar tarefas repetitivas em sistemas digitais, como cliques, preenchimento de formulários, leitura de planilhas e integrações entre aplicações.",
              },
            },
            {
              "@type": "Question",
              name: "RPA é o mesmo que Recibo de Pagamento Autônomo?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Não. No Brasil a sigla RPA também é usada para Recibo de Pagamento Autônomo, um documento fiscal. Neste artigo tratamos de RPA como Robotic Process Automation, a tecnologia de automação de processos.",
              },
            },
            {
              "@type": "Question",
              name: "Quais são os benefícios do RPA?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Redução de erros operacionais, ganho de horas para o time, padronização de processos, escalabilidade, auditoria completa das execuções e ROI rápido em tarefas repetitivas de alto volume.",
              },
            },
            {
              "@type": "Question",
              name: "Quais processos posso automatizar com RPA?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Conciliação financeira, emissão de notas, onboarding de clientes, atualização de cadastros, extração de dados de sistemas legados, geração de relatórios e integrações entre ERPs, CRMs e planilhas.",
              },
            },
          ],
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Início", item: "https://rpaforeveryone.com.br/" },
            { "@type": "ListItem", position: 2, name: "Blog", item: "https://rpaforeveryone.com.br/blog" },
            { "@type": "ListItem", position: 3, name: "O que é RPA", item: URL },
          ],
        }),
      },
    ],
  }),
  component: ArticlePage,
});

function ArticlePage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="sticky top-0 z-40 backdrop-blur-xl bg-background/80 border-b border-border/60">
        <div className="mx-auto max-w-4xl px-6 h-16 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3">
            <img src={logoAsset} alt="RPA For Everyone" className="h-9 w-auto" />
          </Link>
          <Link to="/" className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground">
            <ArrowLeft className="w-4 h-4" /> Voltar
          </Link>
        </div>
      </header>

      <article className="mx-auto max-w-3xl px-6 py-12 lg:py-16">
        {/* Breadcrumb */}
        <nav className="text-xs text-muted-foreground mb-6" aria-label="Breadcrumb">
          <Link to="/" className="hover:text-foreground">Início</Link>
          <span className="mx-2">/</span>
          <span>Blog</span>
          <span className="mx-2">/</span>
          <span className="text-foreground">O que é RPA</span>
        </nav>

        <header className="mb-10">
          <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 text-primary px-3 py-1 text-xs font-semibold uppercase tracking-wide">
            Guia completo
          </span>
          <h1 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
            O que é RPA? O Guia Completo para Automação Robótica de Processos
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            Entenda como a Automação Robótica de Processos (RPA) funciona, quais problemas resolve e por que empresas de todos os portes estão adotando robôs de software para devolver horas ao seu time.
          </p>
          <div className="mt-4 text-sm text-muted-foreground">
            Publicado em 12 de junho de 2026 · 8 min de leitura
          </div>
        </header>

        <div className="prose prose-lg max-w-none space-y-6 leading-relaxed">
          <section>
            <h2 className="text-2xl font-bold mt-10 mb-4">O que significa RPA?</h2>
            <p>
              <strong>RPA</strong> é a sigla para <strong>Robotic Process Automation</strong>, em português <strong>Automação Robótica de Processos</strong>. Trata-se de uma tecnologia que utiliza <em>robôs de software</em> — programas que imitam ações humanas — para executar tarefas repetitivas em sistemas digitais: cliques, preenchimento de formulários, leitura de planilhas, envio de e-mails e integrações entre aplicações.
            </p>
            <p>
              Diferente de um robô físico, o robô de RPA não tem corpo: ele opera dentro do computador, interagindo com o navegador, o ERP, o e-mail e a planilha exatamente como uma pessoa faria — mas 24 horas por dia, sem cansaço e sem erros de digitação.
            </p>
          </section>

          <section className="rounded-xl border border-amber-500/30 bg-amber-500/5 p-5">
            <div className="flex items-start gap-3">
              <AlertTriangle className="w-5 h-5 text-amber-500 mt-0.5 shrink-0" />
              <div>
                <h3 className="font-semibold mb-1">Atenção à confusão brasileira</h3>
                <p className="text-sm m-0">
                  No Brasil, a sigla <strong>RPA</strong> também é usada para <strong>Recibo de Pagamento Autônomo</strong>, um documento fiscal emitido para pagar profissionais autônomos sem vínculo empregatício. <strong>Não tem relação alguma com automação.</strong> Neste guia, sempre que falarmos em RPA estamos nos referindo à tecnologia <em>Robotic Process Automation</em>.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mt-10 mb-4">Como funciona a Automação Robótica de Processos?</h2>
            <p>
              Uma plataforma de RPA — como o <strong>Automation Edge</strong>, que utilizamos na RPA For Everyone — permite desenhar fluxos visuais que descrevem cada passo do processo. O robô executa esses passos contra a interface gráfica ou via APIs:
            </p>
            <ol className="list-decimal list-inside space-y-2 my-4">
              <li><strong>Mapeamento do processo:</strong> documentamos a tarefa manual que será automatizada.</li>
              <li><strong>Construção do robô:</strong> o fluxo é montado em uma plataforma low-code.</li>
              <li><strong>Testes:</strong> validamos exceções, erros e variações de dados.</li>
              <li><strong>Implantação:</strong> o robô passa a rodar em servidor ou na nuvem, com agendamento e monitoramento.</li>
              <li><strong>Sustentação:</strong> ajustes contínuos conforme os sistemas evoluem.</li>
            </ol>
          </section>

          <section>
            <h2 className="text-2xl font-bold mt-10 mb-4">Benefícios do RPA para o seu negócio</h2>
            <div className="grid sm:grid-cols-2 gap-4 my-6">
              {[
                { icon: Clock, title: "Devolve horas ao time", text: "Tarefas que tomavam horas passam a rodar em minutos." },
                { icon: Target, title: "Reduz erros", text: "Robôs não erram digitação nem se distraem." },
                { icon: Workflow, title: "Padroniza processos", text: "O passo a passo executado é sempre idêntico." },
                { icon: Bot, title: "Escala sem contratar", text: "Adicione robôs conforme a demanda cresce." },
              ].map((b) => (
                <div key={b.title} className="rounded-xl border border-border p-5 bg-card">
                  <b.icon className="w-6 h-6 text-primary mb-2" />
                  <h3 className="font-semibold mb-1">{b.title}</h3>
                  <p className="text-sm text-muted-foreground m-0">{b.text}</p>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mt-10 mb-4">Quais processos podem ser automatizados com RPA?</h2>
            <p>
              Qualquer tarefa <strong>repetitiva, baseada em regras e de alto volume</strong> é candidata. Exemplos comuns:
            </p>
            <ul className="space-y-2 my-4">
              {[
                "Conciliação financeira entre ERP, banco e planilhas",
                "Emissão e envio automático de notas fiscais",
                "Onboarding de clientes e abertura de cadastros",
                "Extração de dados de sistemas legados",
                "Geração e distribuição de relatórios periódicos",
                "Atualização de bases entre CRM, ERP e marketing",
                "Processamento de pedidos e atualização de status",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mt-10 mb-4">RPA vs. Inteligência Artificial: qual a diferença?</h2>
            <p>
              O RPA segue <strong>regras determinísticas</strong>: se acontece X, faça Y. Já a IA toma decisões com base em <strong>probabilidades</strong> e aprende com dados. Na prática, as duas tecnologias se combinam: a IA interpreta um documento ou um e-mail; o RPA atua nos sistemas com a informação extraída. É a chamada <strong>hiperautomação</strong>.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mt-10 mb-4">Como começar com RPA na sua empresa?</h2>
            <p>
              O caminho mais seguro é começar pequeno: escolha um processo de alta repetição e baixa exceção, automatize-o e meça os ganhos. A partir daí, expanda. Na <strong>RPA For Everyone</strong> oferecemos três modelos:
            </p>
            <ul className="space-y-2 my-4">
              <li><strong>Body Shop:</strong> squads dedicados de 5 a 40 horas semanais.</li>
              <li><strong>Projetos por hora:</strong> escopo fechado, entrega rápida.</li>
              <li><strong>Licenciamento Automation Edge:</strong> plataforma + capacitação.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mt-10 mb-4">Perguntas frequentes sobre RPA</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold">RPA substitui pessoas?</h3>
                <p className="text-muted-foreground">Não. O RPA assume tarefas repetitivas para liberar pessoas para atividades estratégicas, criativas e de relacionamento.</p>
              </div>
              <div>
                <h3 className="font-semibold">Quanto custa implementar RPA?</h3>
                <p className="text-muted-foreground">Depende do volume de processos e do modelo escolhido. Projetos pontuais começam em poucas horas; o Body Shop é dimensionado pela demanda mensal.</p>
              </div>
              <div>
                <h3 className="font-semibold">Em quanto tempo vejo retorno?</h3>
                <p className="text-muted-foreground">A maioria dos clientes recupera o investimento em até 6 meses, com ganho contínuo de horas e qualidade.</p>
              </div>
            </div>
          </section>

          <section className="mt-12 rounded-2xl bg-gradient-accent p-8 text-accent-foreground">
            <h2 className="text-2xl font-bold mb-2">Pronto para automatizar?</h2>
            <p className="mb-6 opacity-90">Fale com nosso time e descubra quais processos da sua empresa podem virar robôs já no próximo mês.</p>
            <a
              href="https://wa.me/16981565435?text=Ol%C3%A1%2C%20vi%20seu%20site%20e%20gostaria%20de%20um%20or%C3%A7amento."
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-background text-foreground px-6 py-3 text-sm font-semibold hover:opacity-95 transition"
            >
              Solicitar orçamento no WhatsApp
            </a>
          </section>
        </div>
      </article>
    </div>
  );
}