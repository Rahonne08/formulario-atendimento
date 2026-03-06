'use client';

import React, { useState, useRef } from 'react';
import { Printer, Trash2, FileText, PlusCircle, Power, UserCheck, XCircle, AlertCircle, CreditCard, HelpCircle } from 'lucide-react';
import { motion } from 'motion/react';

const EQUATORIAL_BLUE = '#002060';
const EQUATORIAL_ORANGE = '#F27D26';

export default function Home() {
  const [formData, setFormData] = useState({
    nomeSolicitante: '',
    cpfCnpj: '',
    rg: '',
    orgaoEmissor: '',
    uf: '',
    nis: '',
    dataNascimento: '',
    nomeMae: '',
    telefone: '',
    email: '',
    contaContratoNovo: '',
    parceiroNegocioNovo: '',
    instalacao: '',
    leituraDia: '',
    contaContratoAnterior: '',
    parceiroNegocioAnterior: '',
    endereco: '',
    cidade: '',
    bairro: '',
    cep: '',
    protocolo: '',
    serviceRequest: '',
    prazoServico: '',
    coordenadasGeografica: '',
    pontoReferencia: '',
  });

  const [activeTerm, setActiveTerm] = useState<string | null>(null);
  const [showPreview, setShowPreview] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const clearData = () => {
    if (confirm('Tem certeza que deseja limpar todos os dados?')) {
      setFormData({
        nomeSolicitante: '',
        cpfCnpj: '',
        rg: '',
        orgaoEmissor: '',
        uf: '',
        nis: '',
        dataNascimento: '',
        nomeMae: '',
        telefone: '',
        email: '',
        contaContratoNovo: '',
        parceiroNegocioNovo: '',
        instalacao: '',
        leituraDia: '',
        contaContratoAnterior: '',
        parceiroNegocioAnterior: '',
        endereco: '',
        cidade: '',
        bairro: '',
        cep: '',
        protocolo: '',
        serviceRequest: '',
        prazoServico: '',
        coordenadasGeografica: '',
        pontoReferencia: '',
      });
      setActiveTerm(null);
      setShowPreview(false);
    }
  };

  const openPreview = (term: string) => {
    setActiveTerm(term);
    setShowPreview(true);
  };

  const handlePrint = () => {
    window.print();
  };

  const buttons = [
    { label: 'CONEXÃO NOVA', icon: <PlusCircle size={18} /> },
    { label: 'CONEXÃO PROVISORIA', icon: <Power size={18} /> },
    { label: 'CONTRATO ADESÃO', icon: <FileText size={18} /> },
    { label: 'FINANCIAMENTO DE PADRAO', icon: <CreditCard size={18} /> },
    { label: 'T. TITULARIDADE SAP', icon: <UserCheck size={18} /> },
    { label: 'T. TITULARIDADE AJURI', icon: <UserCheck size={18} /> },
    { label: 'DESLIGAMENTO', icon: <XCircle size={18} /> },
    { label: 'TERMO ADITIVO PARCELAMENTO', icon: <PlusCircle size={18} /> },
    { label: 'PLANILHA DE DANOS ELETRICOS', icon: <AlertCircle size={18} /> },
    { label: 'DANOS NÃO ELETRICOS', icon: <AlertCircle size={18} /> },
    { label: 'DEVOLUÇÃO DE CRÉDITO', icon: <CreditCard size={18} /> },
    { label: 'DESISTENCIA DE SERVIÇOS', icon: <XCircle size={18} /> },
    { label: 'CNR: RECLAMA', icon: <HelpCircle size={18} /> },
    { label: 'AFERIÇÃO', icon: <FileText size={18} /> },
  ];

  return (
    <main className="min-h-screen bg-slate-50 p-4 md:p-8 print:p-0 print:bg-white">
      {/* Header - Hidden on print */}
      <div className="max-w-6xl mx-auto mb-8 flex flex-col md:flex-row justify-between items-center gap-4 print:hidden">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 bg-[#002060] rounded-lg flex items-center justify-center text-white font-bold text-2xl">
            E
          </div>
          <div>
            <h1 className="text-2xl font-bold text-[#002060]">Equatorial Energia</h1>
            <p className="text-slate-500 text-sm italic">Gerenciador de Formulários e Termos</p>
          </div>
        </div>
        
        <button 
          onClick={clearData}
          className="flex items-center gap-2 px-6 py-3 bg-[#F27D26] text-white rounded-xl font-bold hover:bg-[#d66a1d] transition-colors shadow-lg shadow-orange-200"
        >
          <Trash2 size={20} />
          LIMPAR DADOS
        </button>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Form Section */}
        <div className="lg:col-span-3 bg-white rounded-2xl shadow-xl border border-slate-200 overflow-hidden print:shadow-none print:border-none print:rounded-none">
          {/* Form Header */}
          <div className="bg-[#002060] p-4 text-white flex justify-between items-center">
            <h2 className="font-bold text-lg">Formulário de Solicitação</h2>
            <div className="text-xs opacity-70 font-mono">GRUPO EQUATORIAL ENERGIA</div>
          </div>

          <div className="p-6 space-y-6">
            {/* Dados do Solicitante */}
            <section>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="md:col-span-2">
                  <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1">Nome do Solicitante</label>
                  <input 
                    type="text" name="nomeSolicitante" value={formData.nomeSolicitante} onChange={handleInputChange}
                    className="w-full border-b-2 border-slate-200 focus:border-[#002060] outline-none py-1 transition-colors"
                  />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1">CPF/CNPJ</label>
                  <input 
                    type="text" name="cpfCnpj" value={formData.cpfCnpj} onChange={handleInputChange}
                    className="w-full border-b-2 border-slate-200 focus:border-[#002060] outline-none py-1 transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1">RG</label>
                  <input 
                    type="text" name="rg" value={formData.rg} onChange={handleInputChange}
                    className="w-full border-b-2 border-slate-200 focus:border-[#002060] outline-none py-1 transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1">Orgão Emissor</label>
                  <input 
                    type="text" name="orgaoEmissor" value={formData.orgaoEmissor} onChange={handleInputChange}
                    className="w-full border-b-2 border-slate-200 focus:border-[#002060] outline-none py-1 transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1">UF</label>
                  <input 
                    type="text" name="uf" value={formData.uf} onChange={handleInputChange}
                    className="w-full border-b-2 border-slate-200 focus:border-[#002060] outline-none py-1 transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1">NIS</label>
                  <input 
                    type="text" name="nis" value={formData.nis} onChange={handleInputChange}
                    className="w-full border-b-2 border-slate-200 focus:border-[#002060] outline-none py-1 transition-colors"
                  />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1">Data de Nascimento</label>
                  <input 
                    type="date" name="dataNascimento" value={formData.dataNascimento} onChange={handleInputChange}
                    className="w-full border-b-2 border-slate-200 focus:border-[#002060] outline-none py-1 transition-colors"
                  />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1">Nome da Mãe</label>
                  <input 
                    type="text" name="nomeMae" value={formData.nomeMae} onChange={handleInputChange}
                    className="w-full border-b-2 border-slate-200 focus:border-[#002060] outline-none py-1 transition-colors"
                  />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1">Telefone</label>
                  <input 
                    type="text" name="telefone" value={formData.telefone} onChange={handleInputChange}
                    className="w-full border-b-2 border-slate-200 focus:border-[#002060] outline-none py-1 transition-colors"
                  />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1">E-Mail</label>
                  <input 
                    type="email" name="email" value={formData.email} onChange={handleInputChange}
                    className="w-full border-b-2 border-slate-200 focus:border-[#002060] outline-none py-1 transition-colors"
                  />
                </div>
              </div>
            </section>

            {/* Dados da Instalação */}
            <section className="pt-4 border-t border-slate-100">
              <h3 className="text-[#002060] font-black text-xl mb-4 italic">Dados da Instalação:</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="md:col-span-2">
                  <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1">Conta Contrato NOVO</label>
                  <input 
                    type="text" name="contaContratoNovo" value={formData.contaContratoNovo} onChange={handleInputChange}
                    className="w-full border-b-2 border-slate-200 focus:border-[#002060] outline-none py-1 transition-colors"
                  />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1">Parceiro de Negocio Novo</label>
                  <input 
                    type="text" name="parceiroNegocioNovo" value={formData.parceiroNegocioNovo} onChange={handleInputChange}
                    className="w-full border-b-2 border-slate-200 focus:border-[#002060] outline-none py-1 transition-colors"
                  />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1">Instalação</label>
                  <input 
                    type="text" name="instalacao" value={formData.instalacao} onChange={handleInputChange}
                    className="w-full border-b-2 border-slate-200 focus:border-[#002060] outline-none py-1 transition-colors"
                  />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1">Leitura do dia</label>
                  <input 
                    type="text" name="leituraDia" value={formData.leituraDia} onChange={handleInputChange}
                    className="w-full border-b-2 border-slate-200 focus:border-[#002060] outline-none py-1 transition-colors"
                  />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1">Conta Contrato ANTERIOR</label>
                  <input 
                    type="text" name="contaContratoAnterior" value={formData.contaContratoAnterior} onChange={handleInputChange}
                    className="w-full border-b-2 border-slate-200 focus:border-[#002060] outline-none py-1 transition-colors"
                  />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1">Parceiro de Negocio Anterior</label>
                  <input 
                    type="text" name="parceiroNegocioAnterior" value={formData.parceiroNegocioAnterior} onChange={handleInputChange}
                    className="w-full border-b-2 border-slate-200 focus:border-[#002060] outline-none py-1 transition-colors"
                  />
                </div>
                <div className="md:col-span-4">
                  <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1">Endereço</label>
                  <input 
                    type="text" name="endereco" value={formData.endereco} onChange={handleInputChange}
                    className="w-full border-b-2 border-slate-200 focus:border-[#002060] outline-none py-1 transition-colors"
                  />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1">Cidade</label>
                  <input 
                    type="text" name="cidade" value={formData.cidade} onChange={handleInputChange}
                    className="w-full border-b-2 border-slate-200 focus:border-[#002060] outline-none py-1 transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1">Bairro</label>
                  <input 
                    type="text" name="bairro" value={formData.bairro} onChange={handleInputChange}
                    className="w-full border-b-2 border-slate-200 focus:border-[#002060] outline-none py-1 transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1">CEP</label>
                  <input 
                    type="text" name="cep" value={formData.cep} onChange={handleInputChange}
                    className="w-full border-b-2 border-slate-200 focus:border-[#002060] outline-none py-1 transition-colors"
                  />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1">Protocolo</label>
                  <input 
                    type="text" name="protocolo" value={formData.protocolo} onChange={handleInputChange}
                    className="w-full border-b-2 border-slate-200 focus:border-[#002060] outline-none py-1 transition-colors"
                  />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1">Service Request</label>
                  <input 
                    type="text" name="serviceRequest" value={formData.serviceRequest} onChange={handleInputChange}
                    className="w-full border-b-2 border-slate-200 focus:border-[#002060] outline-none py-1 transition-colors"
                  />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1">Prazo do serviço</label>
                  <input 
                    type="text" name="prazoServico" value={formData.prazoServico} onChange={handleInputChange}
                    className="w-full border-b-2 border-slate-200 focus:border-[#002060] outline-none py-1 transition-colors"
                  />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1">Coordenadas Geografica</label>
                  <input 
                    type="text" name="coordenadasGeografica" value={formData.coordenadasGeografica} onChange={handleInputChange}
                    className="w-full border-b-2 border-slate-200 focus:border-[#002060] outline-none py-1 transition-colors"
                  />
                </div>
                <div className="md:col-span-4">
                  <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1">Ponto de Referencia</label>
                  <textarea 
                    name="pontoReferencia" value={formData.pontoReferencia} onChange={handleInputChange}
                    className="w-full border-b-2 border-slate-200 focus:border-[#002060] outline-none py-1 transition-colors resize-none h-20"
                  />
                </div>
              </div>
            </section>
          </div>

          {/* Print Only Content */}
          <div className="hidden print:block p-12 border-t-4 border-[#002060]">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-[#002060] uppercase">{activeTerm || 'TERMO DE SOLICITAÇÃO'}</h2>
              <p className="text-sm text-slate-600 mt-2">Documento gerado em {new Date().toLocaleDateString('pt-BR')}</p>
            </div>
            
            <div className="space-y-4 text-sm leading-relaxed">
              <p>
                Eu, <strong>{formData.nomeSolicitante || '________________________________'}</strong>, 
                portador do CPF/CNPJ <strong>{formData.cpfCnpj || '________________'}</strong>, 
                venho por meio deste solicitar formalmente o serviço de <strong>{activeTerm || '________________'}</strong> 
                para a unidade consumidora localizada em <strong>{formData.endereco || '________________________________'}</strong>, 
                bairro <strong>{formData.bairro || '________________'}</strong>, na cidade de <strong>{formData.cidade || '________________'}</strong>.
              </p>
              
              <p>
                Declaro estar ciente de todos os termos e condições estabelecidos pelo Grupo Equatorial Energia para a prestação deste serviço, 
                bem como da veracidade das informações aqui prestadas.
              </p>

              <div className="grid grid-cols-2 gap-8 mt-20">
                <div className="text-center">
                  <div className="border-t border-black pt-2">Assinatura do Solicitante</div>
                </div>
                <div className="text-center">
                  <div className="border-t border-black pt-2">Responsável Equatorial</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Actions Sidebar - Hidden on print */}
        <div className="space-y-3 print:hidden">
          <h3 className="text-slate-400 font-bold text-xs uppercase tracking-widest mb-4 px-2">Ações e Termos</h3>
          {buttons.map((btn, idx) => (
            <motion.button
              key={idx}
              whileHover={{ scale: 1.02, x: 5 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => openPreview(btn.label)}
              className="w-full flex items-center gap-3 px-4 py-3 bg-[#002060] text-white rounded-xl font-medium text-sm hover:bg-[#001a4d] transition-all shadow-md group"
            >
              <span className="p-1.5 bg-white/10 rounded-lg group-hover:bg-white/20 transition-colors">
                {btn.icon}
              </span>
              <span className="text-left flex-1">{btn.label}</span>
              <FileText size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.button>
          ))}
        </div>
      </div>

      {/* Preview Modal */}
      {showPreview && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm print:hidden">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            className="bg-white w-full max-w-4xl max-h-[90vh] rounded-3xl shadow-2xl overflow-hidden flex flex-col"
          >
            <div className="p-6 border-b border-slate-100 flex justify-between items-center bg-slate-50">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-[#002060] text-white rounded-lg">
                  <FileText size={20} />
                </div>
                <div>
                  <h3 className="font-bold text-[#002060]">Visualização do Documento</h3>
                  <p className="text-xs text-slate-500">{activeTerm}</p>
                </div>
              </div>
              <button 
                onClick={() => setShowPreview(false)}
                className="p-2 hover:bg-slate-200 rounded-full transition-colors"
              >
                <XCircle size={24} className="text-slate-400" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-8 md:p-12 bg-slate-100">
              <div className="bg-white shadow-lg mx-auto p-12 min-h-[1000px] max-w-[800px] border border-slate-200">
                {/* Document Header */}
                <div className="flex justify-between items-start mb-12 border-b-2 border-[#002060] pb-6">
                  <div className="w-16 h-16 bg-[#002060] rounded-xl flex items-center justify-center text-white font-bold text-3xl">
                    E
                  </div>
                  <div className="text-right">
                    <h2 className="text-xl font-black text-[#002060] tracking-tighter">EQUATORIAL ENERGIA</h2>
                    <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">Documento Oficial de Solicitação</p>
                  </div>
                </div>

                {/* Document Content */}
                <div className="space-y-8">
                  <div className="text-center">
                    <h1 className="text-2xl font-bold text-[#002060] underline underline-offset-8 decoration-2">{activeTerm}</h1>
                  </div>

                  <div className="space-y-6 text-slate-800 leading-relaxed text-justify">
                    <p>
                      Eu, <span className="font-bold border-b border-slate-300 px-1">{formData.nomeSolicitante || '________________________________'}</span>, 
                      inscrito no CPF/CNPJ sob o nº <span className="font-bold border-b border-slate-300 px-1">{formData.cpfCnpj || '________________'}</span>, 
                      residente e domiciliado no endereço <span className="font-bold border-b border-slate-300 px-1">{formData.endereco || '________________________________'}</span>, 
                      bairro <span className="font-bold border-b border-slate-300 px-1">{formData.bairro || '________________'}</span>, 
                      na cidade de <span className="font-bold border-b border-slate-300 px-1">{formData.cidade || '________________'}</span>, 
                      venho por meio deste solicitar formalmente o serviço de <span className="font-bold text-[#002060]">{activeTerm}</span>.
                    </p>

                    <p>
                      As especificações técnicas para esta solicitação são as seguintes:
                    </p>

                    <div className="grid grid-cols-2 gap-x-8 gap-y-4 bg-slate-50 p-6 rounded-xl border border-slate-100 text-xs">
                      <div>
                        <span className="text-slate-400 font-bold uppercase block mb-1">Conta Contrato:</span>
                        <span className="font-medium">{formData.contaContratoNovo || 'N/A'}</span>
                      </div>
                      <div>
                        <span className="text-slate-400 font-bold uppercase block mb-1">Instalação:</span>
                        <span className="font-medium">{formData.instalacao || 'N/A'}</span>
                      </div>
                      <div>
                        <span className="text-slate-400 font-bold uppercase block mb-1">Protocolo:</span>
                        <span className="font-medium">{formData.protocolo || 'N/A'}</span>
                      </div>
                      <div>
                        <span className="text-slate-400 font-bold uppercase block mb-1">Data:</span>
                        <span className="font-medium">{new Date().toLocaleDateString('pt-BR')}</span>
                      </div>
                    </div>

                    <p>
                      Declaro estar ciente de que a execução do serviço solicitado está sujeita à análise técnica e ao cumprimento dos prazos regulamentares estabelecidos pela agência reguladora e pelo Grupo Equatorial Energia.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 gap-12 mt-24">
                    <div className="flex flex-col items-center">
                      <div className="w-64 border-t border-slate-400 mb-2"></div>
                      <span className="text-[10px] font-bold text-slate-400 uppercase">Assinatura do Solicitante</span>
                    </div>
                    <div className="flex flex-col items-center">
                      <div className="w-64 border-t border-slate-400 mb-2"></div>
                      <span className="text-[10px] font-bold text-slate-400 uppercase">Responsável pelo Atendimento</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-6 border-t border-slate-100 flex justify-end gap-4 bg-slate-50">
              <button 
                onClick={() => setShowPreview(false)}
                className="px-6 py-2 text-slate-600 font-bold hover:bg-slate-200 rounded-xl transition-colors"
              >
                CANCELAR
              </button>
              <button 
                onClick={handlePrint}
                className="flex items-center gap-2 px-8 py-2 bg-[#002060] text-white rounded-xl font-bold hover:bg-[#001a4d] transition-colors shadow-lg shadow-blue-200"
              >
                <Printer size={20} />
                IMPRIMIR AGORA
              </button>
            </div>
          </motion.div>
        </div>
      )}

      <style jsx global>{`
        @media print {
          body {
            background-color: white !important;
          }
          @page {
            margin: 1cm;
          }
          .print-hidden {
            display: none !important;
          }
        }
      `}</style>
    </main>
  );
}
