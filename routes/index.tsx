import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import logoAsset from "@/assets/rpa-logo.png";
import heroBg from "@/assets/hero-bg.jpg";
import ifspLogo from "@/assets/ifsp.png";
import automationEdgeLogo from "@/assets/automation-edge.png";
import pmSilvaLogo from "@/assets/pm-silva.png";
import visualStudioOfficeLogo from "@/assets/visual-studio-office.png";
import {
  Bot, Workflow, GraduationCap, Handshake, Mail, MessageCircle,
  ArrowRight, CheckCircle2, Sparkles, Clock, Target, Users,
  Globe2, Award, Zap, Menu, X,
} from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "RPA For Everyone — Automação Inteligente para Todos" },
      { name: "description", content: "Startup de RPA: Body Shop, projetos por hora, licenciamento Automation Edge e workshops. Reduza erros e ganhe horas de qualidade." },
      { property: "og:title", content: "RPA For Everyone — Automação Inteligente para Todos" },
      { property: "og:description", content: "Levamos RPA a todos os públicos. Parceiros oficiais Automation Edge e IFSP São Carlos." },
      { property: "og:url", content: "https://rpaforeveryone.com.br/" },
      { property: "og:type", content: "website" },
    ],
    links: [
      { rel: "canonical", href: "https://rpaforeveryone.com.br/" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "Organization",
              "@id": "https://rpaforeveryone.com.br//#organization",
              name: "RPA For Everyone",
              url: "https://rpaforeveryone.com.br/",
              description: "Startup brasileira de automação RPA. Parceiros oficiais Automation Edge e IFSP São Carlos.",
              sameAs: [],
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+55-16-98156-5435",
                contactType: "sales",
                areaServed: "BR",
                availableLanguage: ["Portuguese"],
              },
            },
            {
              "@type": "WebSite",
              "@id": "https://rpaforeveryone.com.br/#website",
              url: "https://rpaforeveryone.com.br/",
              name: "RPA For Everyone",
              publisher: { "@id": "https://rpaforeveryone.com.br/#organization" },
              inLanguage: "pt-BR",
            },
            {
              "@type": "Service",
              name: "Automação RPA — Body Shop e Projetos",
              provider: { "@id": "https://rpaforeveryone.com.br/#organization" },
              areaServed: "BR",
              serviceType: "Robotic Process Automation",
              description: "Body Shop com squads dedicados, projetos por hora e licenciamento Automation Edge para automatizar processos manuais.",
            },
          ],
        }),
      },
    ],
  }),
  component: Index,
});

const NAV = [
  { label: "Início", href: "#inicio" },
  { label: "Sobre", href: "#sobre" },
  { label: "Serviços", href: "#servicos" },
  { label: "Produtos", href: "#produtos" },
  { label: "Licenciamento", href: "#licenciamento" },
  { label: "Equipe", href: "#equipe" },
  { label: "Parceiros", href: "#parceiros" },
  { label: "Blog", href: "/blog/o-que-e-rpa", isRoute: true },
  { label: "Contato", href: "#contato" },
];

function Index() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Nav */}
      <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-xl bg-background/75 border-b border-border/60">
        <div className="mx-auto max-w-7xl px-6 h-18 py-3 flex items-center justify-between">
          <a href="#inicio" className="flex items-center gap-3">
            <img src={logoAsset} alt="RPA For Everyone" className="h-16 w-auto" />
          </a>
          <nav className="hidden lg:flex items-center gap-8">
            {NAV.map((n) =>
              n.isRoute ? (
                <Link
                  key={n.href}
                  to={n.href}
                  className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                >
                  {n.label}
                </Link>
              ) : (
                <a key={n.href} href={n.href} className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
                  {n.label}
                </a>
              )
            )}
          </nav>
          <a href="https://wa.me/16981565435?text=Ol%C3%A1%2C%20vi%20seu%20site%20e%20gostaria%20de%20um%20or%C3%A7amento." target="_blank" rel="noreferrer" className="hidden lg:inline-flex items-center gap-2 rounded-full bg-gradient-accent px-5 py-2.5 text-sm font-semibold text-accent-foreground shadow-accent hover:opacity-95 transition">
            Fale Conosco <ArrowRight className="w-4 h-4" />
          </a>
          <button className="lg:hidden p-2" onClick={() => setMenuOpen(!menuOpen)} aria-label="Menu">
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
        {menuOpen && (
          <div className="lg:hidden border-t border-border bg-background">
            <div className="px-6 py-4 flex flex-col gap-3">
              {NAV.map((n) =>
                n.isRoute ? (
                  <Link
                    key={n.href}
                    to={n.href}
                    onClick={() => setMenuOpen(false)}
                    className="text-sm font-medium text-muted-foreground hover:text-foreground py-1"
                  >
                    {n.label}
                  </Link>
                ) : (
                  <a key={n.href} href={n.href} onClick={() => setMenuOpen(false)} className="text-sm font-medium text-muted-foreground hover:text-foreground py-1">
                    {n.label}
                  </a>
                )
              )}
              <a href="https://wa.me/16981565435?text=Ol%C3%A1%2C%20vi%20seu%20site%20e%20gostaria%20de%20um%20or%C3%A7amento." target="_blank" rel="noreferrer" onClick={() => setMenuOpen(false)} className="mt-2 inline-flex justify-center items-center rounded-full bg-gradient-accent px-5 py-2.5 text-sm font-semibold text-accent-foreground">
                Fale Conosco
              </a>
            </div>
          </div>
        )}
      </header>

      {/* Hero */}
      <section id="inicio" className="relative pt-32 pb-24 lg:pt-44 lg:pb-32 overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <img src={heroBg} alt="" className="w-full h-full object-cover opacity-90" width={1920} height={1280} fetchPriority="high" />
          <div className="absolute inset-0 bg-gradient-to-br from-[oklch(0.18_0.08_255)]/85 via-[oklch(0.22_0.08_255)]/70 to-transparent" />
        </div>
        <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-[1.2fr_1fr] gap-12 items-center">
          <div className="text-white">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 backdrop-blur px-4 py-1.5 text-xs font-medium tracking-wide uppercase">
              <Sparkles className="w-3.5 h-3.5 text-accent-glow" /> Automação Inteligente para Todos
            </span>
            <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.05]">
              Robôs que devolvem <span className="text-gradient-accent">horas</span> ao seu time.
            </h1>
            <p className="mt-6 text-lg text-white/80 max-w-xl">
              Somos a <strong className="text-white">RPA For Everyone</strong>: transformamos processos manuais em automações eficientes, reduzindo falhas, aumentando a produtividade e devolvendo horas valiosas para o seu time.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#servicos" className="inline-flex items-center gap-2 rounded-full bg-gradient-accent px-6 py-3 text-sm font-semibold text-accent-foreground shadow-accent hover:scale-[1.02] transition">
                Conheça os Serviços <ArrowRight className="w-4 h-4" />
              </a>
              <a href="#contato" className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/5 backdrop-blur px-6 py-3 text-sm font-semibold text-white hover:bg-white/10 transition">
                Solicitar Demonstração
              </a>
            </div>
            <div className="mt-12 grid grid-cols-3 gap-6 max-w-md">
              {[
                { k: "5–40h", v: "semanais sob medida" },
                { k: "1→N", v: "robôs por contrato" },
                { k: "100%", v: "certificação Automation Edge" },
              ].map((s) => (
                <div key={s.k}>
                  <div className="text-2xl font-bold text-accent-glow">{s.k}</div>
                  <div className="text-xs text-white/60 mt-1">{s.v}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="hidden lg:flex justify-center">
            <div className="relative">
              <div className="absolute -inset-10 bg-gradient-accent rounded-full blur-3xl opacity-30" />
              <img src={logoAsset} alt="" className="relative w-[420px] h-auto drop-shadow-2xl" />
            </div>
          </div>
        </div>
      </section>
      {/* CTA Diagnóstico (Adicione isso antes do Contato) */}
      <section className="py-12 bg-background">
        <div className="mx-auto max-w-5xl px-6">
          <div className="rounded-3xl border border-border bg-card p-8 sm:p-12 text-center flex flex-col items-center shadow-soft relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent pointer-events-none" />
            <div className="relative z-10 flex flex-col items-center">
              <div className="w-16 h-16 rounded-2xl bg-gradient-accent flex items-center justify-center text-accent-foreground mb-6 shadow-accent">
                <Sparkles className="w-8 h-8" />
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-primary mb-4">
                Descubra o quanto sua empresa precisa de automação
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mb-8">
                Preparamos um diagnóstico rápido para você avaliar o volume de tarefas manuais da sua equipe e descobrir o potencial de economia com RPA.
              </p>
              <Link
                to="/diagnostico"
                className="inline-flex items-center gap-2 rounded-full bg-gradient-accent px-8 py-4 text-base font-semibold text-accent-foreground shadow-accent hover:scale-[1.02] transition-transform"
              >
                Fazer Diagnóstico Gratuito <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Sobre - Missão / Valores / Visão */}
      <section id="sobre" className="py-24 bg-background">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-3xl">
            <span className="text-xs font-semibold tracking-widest uppercase text-accent">Quem somos</span>
            <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold text-primary">
              Tecnologia acessível, resultados mensuráveis.
            </h2>
            <p className="mt-5 text-lg text-muted-foreground">
              Existimos para levar Automação Robótica de Processos a todo tipo de pessoa e empresa, gerando valor real através do ganho de horas.
            </p>
          </div>

          <div className="mt-14 grid md:grid-cols-3 gap-6">
            {[
              {
                icon: Target, title: "Missão",
                body: "Divulgar a tecnologia RPA para todos os públicos, com inclusão e excelência, por meio da nossa parceria com Automation Edge e o IFSP São Carlos na formação de novos profissionais.",
              },
              {
                icon: Sparkles, title: "Visão",
                body: "Ser referência segura na preparação de profissionais, expandir extensão acadêmica entre cidades via Instituto Federal e atuar como provedora de serviços que devolve horas ao cliente.",
              },
              {
                icon: Award, title: "Valores",
                body: "Mão de obra qualificada, horas de qualidade, redução de erros, contribuição direta para o seu KPI e tratamento de excelência em cada entrega.",
              },
            ].map((c) => (
              <article key={c.title} className="group rounded-3xl border border-border bg-card p-8 shadow-soft hover:shadow-elegant hover:-translate-y-1 transition">
                <div className="w-12 h-12 rounded-2xl bg-gradient-accent flex items-center justify-center shadow-accent">
                  <c.icon className="w-6 h-6 text-accent-foreground" />
                </div>
                <h3 className="mt-6 text-xl font-bold text-primary">{c.title}</h3>
                <p className="mt-3 text-muted-foreground leading-relaxed">{c.body}</p>
              </article>
            ))}
          </div>

          {/* Conquistas */}
          <div className="mt-16 rounded-3xl bg-gradient-primary p-10 lg:p-14 text-white shadow-elegant">
            <div className="flex items-center gap-3">
              <CheckCircle2 className="w-6 h-6 text-accent-glow" />
              <span className="text-xs font-semibold tracking-widest uppercase text-accent-glow">Conquistas</span>
            </div>
            <h3 className="mt-3 text-2xl lg:text-3xl font-bold max-w-2xl">Resultados que sustentam o nosso propósito.</h3>
            <ul className="mt-8 grid md:grid-cols-3 gap-6">
              {[
                "Parceria oficial com o IFSP São Carlos para extensão.",
                "Parceria com Automation Edge para promoção e desenvolvimento.",
                "Parceria com PM Silva Motores Elétricos para projetos.",
              ].map((t) => (
                <li key={t} className="flex gap-3 text-white/90">
                  <CheckCircle2 className="w-5 h-5 mt-0.5 text-accent-glow shrink-0" /> <span>{t}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Serviços */}
      <section id="servicos" className="py-24 bg-secondary/40">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex items-end justify-between flex-wrap gap-6">
            <div className="max-w-2xl">
              <span className="text-xs font-semibold tracking-widest uppercase text-accent">Serviços</span>
              <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold text-primary">
                Dois modelos, uma promessa: <span className="text-gradient-accent">automação que entrega</span>.
              </h2>
            </div>
          </div>

          <div className="mt-12 grid lg:grid-cols-2 gap-6">
            <article className="rounded-3xl bg-card p-8 lg:p-10 border border-border shadow-soft">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-primary text-primary-foreground flex items-center justify-center"><Users className="w-6 h-6" /></div>
                <span className="text-sm font-semibold text-muted-foreground">Modelo 01</span>
              </div>
              <h3 className="mt-5 text-2xl font-bold text-primary">Body Shop Gerenciado</h3>
              <p className="mt-3 text-muted-foreground whitespace-pre-line">
                Alocação remota de profissionais certificados em Automation Edge para mapear processos e construir robôs sob a gestão da nossa startup, você define o ritmo: de <strong>5 a 40 horas semanais</strong>, pelo tempo que precisar.
              </p>
              <ul className="mt-6 space-y-3">
                {[
                  "Mapeamento e desenvolvimento sem limite de processos",
                  "Profissionais certificados na ferramenta",
                  "Gestão de entregas pela nossa equipe",
                ].map((t) => (
                  <li key={t} className="flex gap-2 text-sm text-foreground"><CheckCircle2 className="w-5 h-5 text-accent shrink-0" /> {t}</li>
                ))}
              </ul>
            </article>

            <article className="rounded-3xl bg-card p-8 lg:p-10 border border-border shadow-soft">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-gradient-accent text-accent-foreground flex items-center justify-center"><Clock className="w-6 h-6" /></div>
                <span className="text-sm font-semibold text-muted-foreground">Modelo 02</span>
              </div>
              <h3 className="mt-5 text-2xl font-bold text-primary">Contrato por Horas de Projeto</h3>
              <p className="mt-3 text-muted-foreground whitespace-pre-line">
                Após o mapeamento, estimamos as horas de implementação por robô e entregamos processo a processo de 1 a N processos, sem limite.{"\n\n\n"}&nbsp;Cada robô é liberado para uso após aprovação.
              </p>
              <ul className="mt-6 space-y-3">
                {[
                  "Entregas individuais e progressivas",
                  "Aprovação por processo antes da liberação",
                  "Plataforma alternativa quando o Automation Edge não for viável",
                ].map((t) => (
                  <li key={t} className="flex gap-2 text-sm text-foreground"><CheckCircle2 className="w-5 h-5 text-accent shrink-0" /> {t}</li>
                ))}
              </ul>
            </article>
          </div>
        </div>
      </section>

      {/* Produtos / Workshops */}
      <section id="produtos" className="py-24 bg-background">
        <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-[1fr_1.1fr] gap-12 items-center">
          <div className="relative">
            <div className="absolute -inset-6 bg-gradient-accent rounded-3xl blur-2xl opacity-20" />
            <div className="relative rounded-3xl bg-gradient-primary p-10 text-white aspect-square flex flex-col justify-between shadow-elegant">
              <GraduationCap className="w-12 h-12 text-accent-glow" />
              <div>
                <div className="text-sm uppercase tracking-widest text-accent-glow">Workshop</div>
                <div className="mt-2 text-3xl font-bold">Inovação com RPA, na prática.</div>
              </div>
              <div className="flex items-center gap-2 text-white/70 text-sm">
                <Zap className="w-4 h-4" /> Carga horária flexível
              </div>
            </div>
          </div>
          <div>
            <span className="text-xs font-semibold tracking-widest uppercase text-accent">Produtos</span>
            <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold text-primary">
              Workshops completos de Inovação com RPA.
            </h2>
            <p className="mt-5 text-lg text-muted-foreground whitespace-pre-line">
              Uma imersão na ferramenta Automation Edge: modelagem de processos, casos de uso reais e oficinas para preparar a sua equipe a automatizar o dia a dia, definimos juntos a quantidade de semanas ou horas ideal.
            </p>
            <div className="mt-8 grid sm:grid-cols-2 gap-4">
              {[
                { icon: Workflow, t: "Modelagem prática", d: "Da mapeação à execução de robôs." },
                { icon: Bot, t: "Casos de uso", d: "Cenários reais aplicados ao seu negócio." },
                { icon: GraduationCap, t: "Capacitação", d: "Oficinas guiadas por especialistas." },
                { icon: Clock, t: "Sob medida", d: "Você escolhe semanas ou horas." },
              ].map((c) => (
                <div key={c.t} className="rounded-2xl border border-border p-5 bg-card hover:border-accent/40 transition">
                  <c.icon className="w-6 h-6 text-accent" />
                  <div className="mt-3 font-semibold text-primary">{c.t}</div>
                  <div className="text-sm text-muted-foreground mt-1">{c.d}</div>
                </div>
              ))}
            </div>
            <a href="#contato" className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-accent hover:gap-3 transition-all">
              Fale com nosso time pelo WhatsApp <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* Licenciamento */}
      <section id="licenciamento" className="py-24 bg-secondary/40">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <span className="text-xs font-semibold tracking-widest uppercase text-accent">Licenciamento</span>
              <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold text-primary">
                Plataforma Automation Edge, com licença anual.
              </h2>
              <p className="mt-5 text-lg text-muted-foreground whitespace-pre-line">
                O licenciamento é anual e dá acesso ao portal Automation Edge, onde os robôs ficam disponíveis para agendamento em agentes (máquinas virtuais ou físicas) ou execução manual.{"\n\n\n"}
                Os robôs entram em fila conforme o calendário e a disponibilidade do agente.
              </p>
              <p className="mt-4 text-muted-foreground whitespace-pre-line">
                O contato inicial com a Automation Edge precisa ser feito antes do fechamento do serviço para garantir transparência nos valores.{"\n\n\n"}
                Não participamos da negociação direta com a ferramenta, preservando a sua autonomia.
              </p>
            </div>
            <div className="grid gap-4">
              {[
                { icon: Globe2, t: "Portal centralizado", d: "Todos os robôs disponíveis em um único ambiente." },
                { icon: Bot, t: "Agentes flexíveis", d: "VMs ou máquinas físicas dedicadas à execução." },
                { icon: Clock, t: "Agendamento por calendário", d: "Fila inteligente conforme disponibilidade." },
                { icon: Handshake, t: "Transparência total", d: "Negociação direta com o parceiro Automation Edge." },
              ].map((c) => (
                <div key={c.t} className="rounded-2xl bg-card border border-border p-6 flex gap-4 items-start shadow-soft">
                  <div className="w-11 h-11 rounded-xl bg-primary/5 text-primary flex items-center justify-center shrink-0">
                    <c.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-semibold text-primary">{c.t}</div>
                    <div className="text-sm text-muted-foreground mt-1">{c.d}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Equipe */}
      <section id="equipe" className="py-24 bg-background">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-2xl">
            <span className="text-xs font-semibold tracking-widest uppercase text-accent">Equipe</span>
            <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold text-primary">
              Pessoas certificadas, focadas no seu resultado.
            </h2>
          </div>
          <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-5 gap-5">
            {[
              { n: "Kayky", r: "Desenvolvedor" },
              { n: "Evely", r: "Desenvolvedora" },
              { n: "Pedro", r: "Técnico de Processos" },
              { n: "Letícia", r: "Técnica de Processos" },
              { n: "Larissa", r: "Desenvolvedora" },
            ].map((p) => (
              <div key={p.n} className="rounded-3xl border border-border bg-card p-6 text-center hover:shadow-elegant transition">
                <div className="mx-auto w-20 h-20 rounded-full bg-gradient-accent flex items-center justify-center text-2xl font-bold text-accent-foreground shadow-accent">
                  {p.n[0]}
                </div>
                <div className="mt-4 font-bold text-primary">{p.n}</div>
                <div className="text-sm text-muted-foreground">{p.r}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Parceiros */}
      <section id="parceiros" className="py-20 bg-secondary/40">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center">
            <span className="text-xs font-semibold tracking-widest uppercase text-accent">Parceiros</span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-primary">Marcas que constroem essa jornada com a gente.</h2>
          </div>
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { t: "IFSP — Campus São Carlos", s: "Extensão acadêmica & formação", logo: ifspLogo, href: "https://scl.ifsp.edu.br/" },
              { t: "Automation Edge", s: "Plataforma oficial de RPA", logo: automationEdgeLogo, href: "https://automationedge.com/" },
              { t: "PM Silva Motores Elétricos", s: "Projetos em parceria", logo: pmSilvaLogo, href: "https://pmsilvamotores.com.br/" },
              { t: "Visual Studio Office", s: "Desenvolvedora Parceira", logo: visualStudioOfficeLogo, href: "https://visual-studio-office-system.lovable.app/" },
            ].map((p) => (
              <a key={p.t} href={p.href} target="_blank" rel="noreferrer" className="rounded-2xl bg-card border border-border p-8 text-center shadow-soft flex flex-col items-center hover:shadow-elegant hover:-translate-y-1 transition">
                <div className="h-20 flex items-center justify-center mb-4">
                  <img src={p.logo} alt={p.t} className="max-h-20 max-w-[160px] object-contain" />
                </div>
                <div className="text-lg font-bold text-primary">{p.t}</div>
                <div className="text-sm text-muted-foreground mt-2">{p.s}</div>
              </a>
            ))}
          </div>
        </div>
      </section>

      

      {/* Contato */}
      <section id="contato" className="py-24 bg-background">
        <div className="mx-auto max-w-5xl px-6">
          <div className="rounded-3xl bg-gradient-primary p-10 lg:p-16 text-white shadow-elegant relative overflow-hidden">
            <div className="absolute -right-20 -top-20 w-80 h-80 bg-gradient-accent rounded-full blur-3xl opacity-30" />
            <div className="relative">
              <span className="text-xs font-semibold tracking-widest uppercase text-accent-glow">Contato</span>
              <h2 className="mt-3 text-3xl lg:text-5xl font-bold max-w-2xl">Vamos automatizar o que ainda toma o seu tempo?</h2>
              <p className="mt-5 text-white/80 max-w-xl">
                Conte com a nossa equipe para tirar dúvidas, dimensionar um projeto ou agendar uma demonstração.
              </p>
              <div className="mt-10 grid sm:grid-cols-2 gap-4">
                <a href="mailto:foreveryonepa@gmail.com" className="flex items-center gap-4 rounded-2xl bg-white/5 backdrop-blur border border-white/15 p-5 hover:bg-white/10 transition">
                  <Mail className="w-6 h-6 text-accent-glow" />
                  <div>
                    <div className="text-xs uppercase tracking-widest text-white/60">E-mail</div>
                    <div className="font-semibold">foreveryonepa@gmail.com</div>
                  </div>
                </a>
                <a href="https://wa.me/16981565435?text=Ol%C3%A1%2C%20vi%20seu%20site%20e%20gostaria%20de%20um%20or%C3%A7amento." target="_blank" rel="noreferrer" className="flex items-center gap-4 rounded-2xl bg-white/5 backdrop-blur border border-white/15 p-5 hover:bg-white/10 transition">
                  <MessageCircle className="w-6 h-6 text-accent-glow" />
                  <div>
                    <div className="text-xs uppercase tracking-widest text-white/60">WhatsApp</div>
                    <div className="font-semibold">Fale com o time agora</div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Floating WhatsApp */}
      <a
        href="https://wa.me/16981565435?text=Ol%C3%A1%2C%20vi%20seu%20site%20e%20gostaria%20de%20um%20or%C3%A7amento."
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 rounded-full bg-green-500 text-white shadow-lg hover:scale-110 transition-transform"
        aria-label="WhatsApp"
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="currentColor" className="w-7 h-7">
          <path d="M16 0C7.164 0 0 7.164 0 16c0 2.957.84 5.715 2.297 8.07L0 32l8.086-2.264A15.87 15.87 0 0016 32c8.836 0 16-7.164 16-16S24.836 0 16 0zm0 29.086a13.05 13.05 0 01-6.633-1.824l-.473-.285-4.797 1.34 1.28-4.653-.312-.492a13.07 13.07 0 1110.935 6.914zM22.953 19.07c-.355-.894-1.727-1.687-2.484-1.797-.656-.097-1.445-.297-3.195-1.367-2.438-1.539-3.758-3.422-3.984-3.836-.226-.414-.508-1.367-.117-2.07.39-.703 1.133-1.035 1.57-1.156.437-.121 1.168-.062 1.57.297.402.36 1.137 1.582 1.395 1.894.258.312.52.445.863.297.344-.148 1.367-.703 1.758-.996.39-.293.68-.45.77-.715.09-.265.05-1.215-.207-2.156-.258-.941-.949-1.442-1.367-1.621-.418-.18-1.215-.277-2.016.09-.8.367-2.73 1.582-3.453 3.653-.723 2.07-.468 3.766-.312 4.316.156.55.82 1.652 1.543 2.367.723.715 2.574 2.094 3.828 2.324 1.254.23 2.004.094 2.574-.297.57-.39 1.445-1.21 1.758-2.07.313-.86.313-1.535.222-1.714-.09-.18-.332-.277-.688-.414z"/>
        </svg>
      </a>

      {/* Footer */}
      <footer className="border-t border-border bg-secondary/30 py-10">
        <div className="mx-auto max-w-7xl px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <img src={logoAsset} alt="RPA For Everyone" className="h-16 w-auto" />
          </div>
          <p className="text-sm text-muted-foreground text-center">
            © 2026 RPA For Everyone — Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
}
