import { createFileRoute, Link } from "@tanstack/react-router";
import { useState, useMemo, useRef } from "react";
import { ArrowLeft, CheckCircle2, AlertTriangle, Sparkles, MessageCircle, Mail, UserCircle } from "lucide-react";

export const Route = createFileRoute("/diagnostico")({
  head: () => ({
    meta: [
      { title: "Diagnóstico de Automação — RPA For Everyone" },
      { name: "description", content: "Responda 11 perguntas e descubra o nível de necessidade de automação (RPA) na sua empresa." },
      { property: "og:title", content: "Diagnóstico de Automação RPA" },
      { property: "og:description", content: "Quantifique em minutos o quanto sua empresa pode ganhar com RPA." },
    ],
  }),
  component: Diagnostico,
});

const QUESTIONS = [
  "Volume de tarefas repetitivas executadas manualmente por colaboradores no dia a dia",
  "Quantidade de planilhas preenchidas ou consolidadas manualmente",
  "Volume de cópia e colagem de dados entre sistemas diferentes",
  "Quantidade de e-mails padronizados enviados ou tratados manualmente",
  "Volume de relatórios recorrentes gerados manualmente",
  "Quantidade de processos que dependem de login em múltiplos sistemas",
  "Volume de erros operacionais causados por digitação ou retrabalho",
  "Quantidade de horas gastas em conciliação e validação de dados",
  "Volume de processos com prazos rígidos que dependem de pessoas para serem cumpridos",
  "Quantidade de tarefas executadas fora do horário comercial por necessidade do processo",
  "Qual a quantidade de funcionarios na sua empresa que fazem tarefas além de sua atividade principal para auxiliar em demandas com alto fluxo de dados?",
];

const OPTIONS = [
  { label: "Quantidade Muito Elevada", value: 10 },
  { label: "Quantidade Elevada", value: 8 },
  { label: "Quantidade Média", value: 6 },
  { label: "Quantidade Baixa", value: 4 },
  { label: "Quantidade Muito Baixa", value: 2 },
];

function Diagnostico() {
  const [showModal, setShowModal] = useState(true);
  
  // Variável silenciosa para guardar os dados
  const contactData = useRef({ email: "", phone: "" });

  const [answers, setAnswers] = useState<(number | null)[]>(Array(QUESTIONS.length).fill(null));
  const [submitted, setSubmitted] = useState(false);
  const [emailSolicitado, setEmailSolicitado] = useState(false); // Estado para o novo botão de e-mail

  const answered = answers.filter((a) => a !== null).length;
  const total = useMemo(() => answers.reduce<number>((s, v) => s + (v ?? 0), 0), [answers]);
  const allAnswered = answered === QUESTIONS.length;

  const verdict = useMemo(() => {
    if (total >= 75) return { level: "Crítico", color: "text-red-600", bg: "bg-red-50 border-red-200", icon: AlertTriangle, msg: "Analisamos que a sua situação é bem complexa, podemos oferecer uma mudança completa com nosso parceiro Automation Edge com uma atuação mais longa, mas extremamente próxima, entre em contato conosco via e-mail ou WhatsApp!" };
    if (total >= 55) return { level: "Alto", color: "text-orange-600", bg: "bg-orange-50 border-orange-200", icon: Sparkles, msg: "Notamos que a situação dentro da sua empresa pode estar sendo prejudicada por alta demanda manual, conosco terá um atendimento priorizado para uma transformação com automação, trazendo parâmetros de ROI e KPI muito melhores para a sua empresa, entre em contato conosco via e-mail ou WhatsApp!" };
    if (total >= 35) return { level: "Médio", color: "text-yellow-700", bg: "bg-yellow-50 border-yellow-200", icon: Sparkles, msg: "Parabéns, sua gestão de atividades manual é boa, mas podemos te auxiliar a ganhar horas nestes processos que restam com uma oportunidade mais abrangente, tratando a quantidade de processos que desejar, entre em contato conosco via e-mail ou WhatsApp!" };
    return { level: "Baixo", color: "text-green-700", bg: "bg-green-50 border-green-200", icon: CheckCircle2, msg: "Parabéns, sua gestão de atividades manual é muito boa, mas podemos te ajudar a ganhar horas nestes processos que restam com um baixo custo, entre em contato conosco via e-mail ou WhatsApp!" };
  }, [total]);

  const setAnswer = (i: number, v: number) => {
    setAnswers((prev) => {
      const next = [...prev];
      next[i] = v;
      return next;
    });
  };

  const reset = () => {
    setAnswers(Array(QUESTIONS.length).fill(null));
    setSubmitted(false);
    setEmailSolicitado(false); // Reseta o botão de e-mail
    setShowModal(true);
    contactData.current = { email: "", phone: "" };
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const enviarPorEmail = async (pontuacaoFinal: number, nivelVerdict: string, email: string, phone: string) => {
    try {
      await fetch("https://formsubmit.co/ajax/foreveryonerpa@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
          _subject: "Novo Lead: Resultado do Diagnóstico RPA",
          _template: "table",
          "E-mail de Contato": email,
          "WhatsApp de Contato": phone,
          "Pontuação Obtida": pontuacaoFinal,
          "Nível de Necessidade": nivelVerdict,
          "Aviso": "Um novo usuário finalizou o diagnóstico e deixou o contato no site."
        })
      });
    } catch (error) {
      console.error("Erro ao enviar e-mail:", error);
    }
  };

  // NOVA FUNÇÃO: Dispara a solicitação manual de contato por e-mail usando FormSubmit
  const solicitarContatoPorEmail = async () => {
    setEmailSolicitado(true); // Muda o botão visualmente
    try {
      await fetch("https://formsubmit.co/ajax/foreveryonerpa@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
          _subject: "NOVO PEDIDO DE CONTATO: Diagnóstico RPA",
          _template: "table",
          email: contactData.current.email, // FormSubmit usa isso para o "Responder para"
          "E-mail do Usuário": contactData.current.email,
          "WhatsApp do Usuário": contactData.current.phone,
          "Pontuação Obtida": total,
          "Nível de Necessidade": verdict.level,
          "Aviso": "O usuário clicou no botão 'Solicitar contato via E-mail'. Ele aguarda o seu retorno!"
        })
      });
    } catch (error) {
      console.error("Erro ao solicitar contato:", error);
    }
  };

  const VerdictIcon = verdict.icon;

  const iniciarComJanelaNativa = () => {
    const emailValue = window.prompt("Passo 1 de 2:\nPor favor, digite seu E-mail corporativo:");
    if (emailValue === null || emailValue.trim() === "") {
      alert("O preenchimento do E-mail é necessário para realizar o diagnóstico.");
      return;
    }

    const phoneValue = window.prompt("Passo 2 de 2:\nPor favor, digite seu WhatsApp corporativo:");
    if (phoneValue === null || phoneValue.trim() === "") {
      alert("O preenchimento do WhatsApp é necessário para realizar o diagnóstico.");
      return;
    }

    contactData.current = { email: emailValue.trim(), phone: phoneValue.trim() };
    setShowModal(false);
  };

  return (
    <main className="min-h-screen bg-slate-50 relative">
      
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/60 backdrop-blur-sm p-4">
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md p-6 sm:p-8 transform transition-all text-center">
            <div className="mx-auto w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 mb-4">
              <UserCircle className="w-8 h-8" />
            </div>
            
            <h2 className="text-2xl font-bold text-slate-900">Antes de começar...</h2>
            <p className="mt-2 text-slate-600 mb-8">
              Precisaremos apenas do seu e-mail e WhatsApp para gerar o seu resultado no final.
            </p>
            
            <button
              type="button"
              onClick={iniciarComJanelaNativa}
              className="w-full inline-flex items-center justify-center gap-2 rounded-lg bg-blue-600 px-6 py-4 text-base font-semibold text-white shadow-lg hover:bg-blue-700 transition cursor-pointer"
            >
              Informar meus dados e Iniciar <Sparkles className="w-5 h-5" />
            </button>
            
            <div className="mt-6 text-center">
              <Link to="/" className="text-sm text-slate-500 hover:text-slate-800 transition">
                Voltar para a página inicial
              </Link>
            </div>
          </div>
        </div>
      )}

      <div className={showModal ? "blur-sm pointer-events-none select-none opacity-50 transition" : "transition"}>
        <header className="border-b bg-white">
          <div className="mx-auto flex max-w-4xl items-center justify-between px-6 py-4">
            <Link to="/" className="inline-flex items-center gap-2 text-sm text-slate-600 hover:text-slate-900">
              <ArrowLeft className="h-4 w-4" /> Voltar ao site
            </Link>
            <span className="text-sm font-semibold text-slate-900">Diagnóstico RPA</span>
          </div>
        </header>

        <section className="mx-auto max-w-4xl px-6 py-10">
          <h1 className="text-3xl font-bold text-slate-900 sm:text-4xl">
            Diagnóstico de Nível de Trabalho Manual
          </h1>
          <p className="mt-3 max-w-2xl text-slate-600">
            Responda 11 perguntas rápidas e descubra, de forma objetiva, o quanto a sua empresa
            precisa (e pode ganhar) com automação robótica de processos!
          </p>

          <div className="mt-6 rounded-lg border bg-white p-4">
            <div className="mb-2 flex items-center justify-between text-sm text-slate-600">
              <span>Progresso</span>
              <span className="font-medium text-slate-900">{answered}/{QUESTIONS.length}</span>
            </div>
            <div className="h-2 w-full overflow-hidden rounded-full bg-slate-100">
              <div
                className="h-full rounded-full bg-blue-600 transition-all"
                style={{ width: `${(answered / QUESTIONS.length) * 100}%` }}
              />
            </div>
          </div>
          
          <form
            className="mt-8 space-y-6"
            onSubmit={(e) => {
              e.preventDefault();
              if (allAnswered) {
                setSubmitted(true);
                enviarPorEmail(total, verdict.level, contactData.current.email, contactData.current.phone);
                setTimeout(() => {
                  document.getElementById("resultado")?.scrollIntoView({ behavior: "smooth" });
                }, 50);
              }
            }}
          >
            {QUESTIONS.map((q, i) => (
              <fieldset key={i} className="rounded-xl border bg-white p-5 shadow-sm">
                <legend className="px-2 text-sm font-semibold text-blue-700">Questão {i + 1}</legend>
                <p className="mb-4 text-slate-900">{q}</p>
                <div className="grid gap-2 sm:grid-cols-2">
                  {OPTIONS.map((opt) => {
                    const selected = answers[i] === opt.value;
                    return (
                      <label
                        key={opt.value}
                        className={`flex cursor-pointer items-center justify-between gap-3 rounded-lg border px-4 py-3 text-sm transition ${
                          selected
                            ? "border-blue-600 bg-blue-50 ring-1 ring-blue-600"
                            : "border-slate-200 bg-white hover:border-slate-300"
                        }`}
                      >
                        <span className="flex items-center gap-3">
                          <input
                            type="radio"
                            name={`q-${i}`}
                            className="h-4 w-4 accent-blue-600"
                            checked={selected}
                            onChange={() => setAnswer(i, opt.value)}
                          />
                          <span className={selected ? "font-medium text-slate-900" : "text-slate-700"}>
                            {opt.label}
                          </span>
                        </span>
                        <span className={`rounded-full px-2 py-0.5 text-xs font-semibold ${
                          selected ? "bg-blue-600 text-white" : "bg-slate-100 text-slate-600"
                        }`}>
                          {opt.value} pts
                        </span>
                      </label>
                    );
                  })}
                </div>
              </fieldset>
            ))}

            <div className="flex justify-end gap-4 rounded-xl border bg-white p-5 shadow-sm">
              <button
                type="submit"
                disabled={!allAnswered}
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:bg-slate-300"
              >
                Ver meu diagnóstico
              </button>
            </div>
          </form>

          {submitted && allAnswered && (
            <div id="resultado" className={`mt-10 rounded-2xl border p-6 shadow-sm ${verdict.bg}`}>
              <div className="flex items-start gap-4">
                <VerdictIcon className={`mt-1 h-8 w-8 flex-none ${verdict.color}`} />
                <div className="flex-1">
                  <p className="text-sm font-medium text-slate-600">Seu resultado</p>
                  <h2 className={`text-2xl font-bold ${verdict.color}`}>
                    Nível de necessidade de automação: {verdict.level}
                  </h2>
                  <p className="mt-1 text-sm text-slate-700">
                    Pontuação final:{" "}
                    <span className="font-semibold text-slate-900">{total}</span> de 110
                  </p>
                  <p className="mt-3 text-slate-800">{verdict.msg}</p>

                  <div className="mt-6 flex flex-wrap items-center gap-4">
                      <a
                        href={`https://wa.me/5516981565435?text=${encodeURIComponent(
                          `Olá! Acabei de fazer o diagnóstico RPA e minha pontuação foi ${total}/110 (nível ${verdict.level}). Gostaria de conversar.`
                        )}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-lg bg-green-600 px-6 py-2.5 text-sm font-semibold text-white shadow transition hover:bg-green-700"
                      >
                        <MessageCircle className="h-4 w-4" />
                        Falar via WhatsApp
                      </a>
                      
                      {/* NOVO BOTÃO DE EMAIL AQUI */}
                      <button
                        type="button"
                        onClick={solicitarContatoPorEmail}
                        disabled={emailSolicitado}
                        className={`inline-flex items-center gap-2 rounded-lg px-6 py-2.5 text-sm font-semibold text-white shadow transition ${
                          emailSolicitado 
                            ? "bg-slate-400 cursor-not-allowed" 
                            : "bg-blue-600 hover:bg-blue-700"
                        }`}
                      >
                        <Mail className="h-4 w-4" />
                        {emailSolicitado ? "Solicitação Enviada!" : "Solicitar contato via E-mail"}
                      </button>
                      
                      <button
                        type="button"
                        onClick={reset}
                        className="inline-flex items-center gap-2 rounded-lg border border-slate-300 bg-white px-6 py-2.5 text-sm font-semibold text-slate-700 shadow-sm transition hover:bg-slate-50"
                      >
                      Refazer diagnóstico
                    </button>
                  </div>
                </div>
              </div>

              <div className="mt-6 grid gap-3 sm:grid-cols-4">
                {[
                  { range: "75–110", label: "Crítico" },
                  { range: "55–74", label: "Alto" },
                  { range: "35–54", label: "Médio" },
                  { range: "0-34", label: "Baixo" },
                ].map((b) => (
                  <div key={b.label} className="rounded-lg border border-white/60 bg-white/70 p-3 text-center text-xs">
                    <div className="font-semibold text-slate-900">{b.label}</div>
                    <div className="text-slate-600">{b.range} pts</div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </section>
      </div>
    </main>
  );
}