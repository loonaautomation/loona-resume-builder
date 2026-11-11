/* Loona Resume Builder — sample resumes (fictional people, for the
 * resume-templates pages). Loaded by resume-builder/?sample=<slug>.
 * Every sample is clearly labelled SAMPLE on its page. */
(function (root, factory) {
  var api = factory();
  if (typeof module !== 'undefined' && module.exports) { module.exports = api; }
  if (root) { root.ResumeSamples = api; }
})(typeof self !== 'undefined' ? self : this, function () {
  'use strict';
  return {
  "registered-nurses": {
    "contact": {
      "name": "Maria Santos",
      "title": "Enfermeiro Registado",
      "email": "maria.santos@example.com",
      "phone": "+1 (555) 010-0100",
      "location": "Houston, TX",
      "website": ""
    },
    "summary": "Enfermeiro registado com 6 anos de experiência em unidades médico-cirúrgicas e de telemetria. Competente em avaliação de pacientes, terapia intravenosa, administração de medicação e registros de saúde eletrónicos. Conhecido pela comunicação calma e clara com pacientes e famílias em situações de alta pressão.",
    "experience": [
      {
        "role": "Enfermeiro Registado",
        "company": "City General Hospital",
        "location": "Houston, TX",
        "start": "jun. de 2021",
        "end": "",
        "current": true,
        "points": "Cuidar de 5-6 pacientes por turno numa unidade médico-cirúrgica de 32 camas, incluindo avaliação, administração de medicação e tratamento de feridas\nFormar e orientar 4 novos enfermeiros formados, reduzindo o seu tempo de integração em 2 semanas\nReduziu os erros de medicação na unidade em 18% ao digitar uma rotina de dupla verificação na passagem de turno\nDocumentar todos os cuidados com rigor nos registros de saúde eletrónicos Epic"
      },
      {
        "role": "Enfermeiro",
        "company": "Riverside Community Clinic",
        "location": "Houston, TX",
        "start": "ago. de 2019",
        "end": "mai. de 2021",
        "current": false,
        "points": "Fez a triagem de mais de 40 pacientes por dia sem marcação, priorizando casos urgentes para atendimento no próprio dia\nAdministrou vacinas e rastreios de saúde em eventos mensais de proximidade comunitária\nCoordenou encaminhamentos para especialistas e acompanhou resultados de exames"
      }
    ],
    "education": [
      {
        "school": "University of Texas Health Science Center",
        "degree": "BSN",
        "field": "Enfermagem",
        "start": "2015",
        "end": "2019",
        "notes": "Licença de Enfermeiro Registado (Texas). Certificado em BLS e ACLS."
      }
    ],
    "skills": "Avaliação de pacientes\nTerapia intravenosa e administração de medicação\nRegistos de saúde eletrónicos (Epic)\nMonitorização por telemetria\nEducação de pacientes e famílias\nControlo de infeções",
    "languages": "Inglês (fluente)\nEspanhol (conversacional)",
    "template": "professional"
  },
  "software-developers": {
    "contact": {
      "name": "Alex Carter",
      "title": "Programador de Software",
      "email": "alex.carter@example.com",
      "phone": "+1 (555) 010-0101",
      "location": "Austin, TX",
      "website": ""
    },
    "summary": "Programador de software com 5 anos de experiência na construção de aplicações web em Python e JavaScript. Lançou funcionalidades usadas por mais de 200,000 usuários, reduziu os tempos de resposta da API em 40% e liderou a migração de um monolito para microsserviços. Forte em testes, revisão de código e documentação clara.",
    "experience": [
      {
        "role": "Programador de Software",
        "company": "TechNova Solutions",
        "location": "Austin, TX",
        "start": "mar. de 2022",
        "end": "",
        "current": true,
        "points": "Criar e manter funcionalidades web voltadas para o cliente em Python (Django) e React, servindo mais de 200,000 usuários\nReduziu o tempo médio de resposta da API de 850 ms para 500 ms ao adicionar cache e corrigir consultas lentas\nLiderou a migração do serviço de faturação para microsserviços com zero tempo de inatividade\nRever mais de 10 pull requests por semana e orientar 2 programadores juniores"
      },
      {
        "role": "Programador Júnior",
        "company": "BrightStack Labs",
        "location": "Dallas, TX",
        "start": "jul. de 2020",
        "end": "fev. de 2022",
        "current": false,
        "points": "Criou painéis internos em JavaScript que substituíram planilhas manuais para 3 equipes\nEscreveu testes automatizados que aumentaram a cobertura de 45% para 78%\nCorrigiu mais de 120 erros em todo o produto no primeiro ano"
      }
    ],
    "education": [
      {
        "school": "University of Texas at Austin",
        "degree": "BS",
        "field": "Ciência da Computação",
        "start": "2016",
        "end": "2020",
        "notes": "Formação em bases de dados, algoritmos e sistemas operativos."
      }
    ],
    "skills": "Python (Django, Flask)\nJavaScript e React\nPostgreSQL e Redis\nAPI REST e microsserviços\nGit e CI/CD\nTestes automatizados (pytest, Jest)",
    "languages": "Inglês (fluente)",
    "template": "modern"
  },
  "elementary-school-teachers": {
    "contact": {
      "name": "Emily Johnson",
      "title": "Professor do Ensino Básico",
      "email": "emily.johnson@example.com",
      "phone": "+1 (555) 010-0102",
      "location": "Columbus, OH",
      "website": ""
    },
    "summary": "Professor do ensino básico com 7 anos de experiência a lecionar os anos 3-5. Competente em ensino diferenciado, gestão da sala de aula e comunicação com os pais. Elevou a proficiência de leitura da sua turma de 58% para 81% ao longo de dois anos letivos.",
    "experience": [
      {
        "role": "Professor do Ensino Básico (4.º Ano)",
        "company": "Maplewood Elementary School",
        "location": "Columbus, OH",
        "start": "ago. de 2020",
        "end": "",
        "current": true,
        "points": "Ensinar leitura, matemática e ciências a uma turma de 26 alunos, incluindo 5 com planos individuais de aprendizagem\nElevou a proficiência de leitura da turma de 58% para 81% em dois anos através de grupos de leitura orientada\nFazer uma newsletter semanal para os pais e reuniões trimestrais de progresso para cada família\nLiderar o clube de leitura da escola para 40 alunos dos anos 3-5"
      },
      {
        "role": "Professor do Ensino Básico (3.º Ano)",
        "company": "Brookfield Primary School",
        "location": "Columbus, OH",
        "start": "ago. de 2018",
        "end": "jun. de 2020",
        "current": false,
        "points": "Planeou e deu aulas diárias para 24 alunos em todas as disciplinas principais\nIntroduziu rotinas de comportamento que reduziram as perturbações na sala de aula para metade\nOrganizou a feira de ciências do ano, com 120 alunos e 80 pais"
      }
    ],
    "education": [
      {
        "school": "Ohio State University",
        "degree": "BSc",
        "field": "Educação Básica",
        "start": "2014",
        "end": "2018",
        "notes": "Licença estadual de ensino (Ohio, anos K-5). Averbamento em leitura."
      }
    ],
    "skills": "Ensino diferenciado\nGestão da sala de aula\nGrupos de leitura orientada\nComunicação com os pais\nPlaneamento de aulas\nGoogle Classroom",
    "languages": "Inglês (fluente)",
    "template": "classic"
  },
  "accountants-and-auditors": {
    "contact": {
      "name": "David Chen",
      "title": "Contabilista Sénior",
      "email": "david.chen@example.com",
      "phone": "+1 (555) 010-0103",
      "location": "Chicago, IL",
      "website": ""
    },
    "summary": "CPA com 8 anos de experiência em fecho de mês, relatórios financeiros e auditoria interna. Fechou os livros 3 dias mais depressa ao reconstruir o processo de reconciliação e encontrou $240,000 em pagamentos excessivos recuperáveis num ano de auditoria. Forte em Excel, QuickBooks e sistemas ERP.",
    "experience": [
      {
        "role": "Contabilista Sénior",
        "company": "Meridian Manufacturing Co.",
        "location": "Chicago, IL",
        "start": "jan. de 2021",
        "end": "",
        "current": true,
        "points": "Ser responsável pelo fecho de mês de uma unidade de negócio de $40M, terminando 3 dias mais depressa após reconstruir as reconciliações\nPreparar demonstrações financeiras mensais e relatórios de desvios para a gestão sénior\nEncontrou $240,000 em pagamentos excessivos a fornecedores recuperáveis durante a auditoria interna de 2024\nSupervisionar 2 contabilistas e rever os seus lançamentos"
      },
      {
        "role": "Contabilista",
        "company": "Harrison & Lee LLP",
        "location": "Chicago, IL",
        "start": "jun. de 2017",
        "end": "dez. de 2020",
        "current": false,
        "points": "Preparou declarações fiscais e demonstrações financeiras para 25 clientes de pequenas empresas\nApoiou auditorias de 8 clientes, testando controlos e documentando conclusões\nAutomatizou o registro de ativos fixos em Excel, poupando 6 horas por mês"
      }
    ],
    "education": [
      {
        "school": "University of Illinois Chicago",
        "degree": "BS",
        "field": "Contabilidade",
        "start": "2013",
        "end": "2017",
        "notes": "CPA (Illinois). Membro da AICPA."
      }
    ],
    "skills": "Fecho de mês e reconciliações\nRelatórios financeiros e análise de desvios\nAuditoria interna\nExcel (tabelas dinâmicas, VLOOKUP)\nQuickBooks e SAP\nPreparação de impostos",
    "languages": "Inglês (fluente)\nMandarim (conversacional)",
    "template": "professional"
  },
  "heavy-truck-drivers": {
    "contact": {
      "name": "Marcus Thompson",
      "title": "Motorista de Camião CDL Classe A",
      "email": "marcus.thompson@example.com",
      "phone": "+1 (555) 010-0104",
      "location": "Dallas, TX",
      "website": ""
    },
    "summary": "Motorista CDL Classe A com 9 anos de experiência em transporte de longa distância e regional. Mais de 900,000 milhas sem acidentes, taxa de entregas pontuais de 99% e experiência com cargas refrigeradas, de plataforma e de caixa seca. Registro de condução limpo, averbamentos HazMat e cisterna.",
    "experience": [
      {
        "role": "Motorista de Camião de Longa Distância",
        "company": "Lone Star Freight Lines",
        "location": "Dallas, TX",
        "start": "abr. de 2019",
        "end": "",
        "current": true,
        "points": "Conduzir mais de 2,800 milhas por semana em rotas regionais pelo Texas, Oklahoma e Novo México\nManter uma taxa de entregas pontuais de 99% em mais de 1,100 cargas por ano\nTransportar carga refrigerada e de caixa seca; realizar diariamente inspeções antes e depois da viagem\nMais de 900,000 milhas sem acidentes no total"
      },
      {
        "role": "Motorista de Camião de Entregas",
        "company": "Metro Builders Supply",
        "location": "Fort Worth, TX",
        "start": "mar. de 2016",
        "end": "mar. de 2019",
        "current": false,
        "points": "Entregou materiais de construção em 15-20 estaleiros por dia em toda a zona de Dallas-Fort Worth\nOperou empilhadores e fixou cargas de plataforma segundo as normas DOT\nManteve a documentação de entregas e os registros exatos, com zero infrações DOT"
      }
    ],
    "education": [
      {
        "school": "Dallas Truck Driving School",
        "degree": "Certificado",
        "field": "Condução Comercial (CDL Classe A)",
        "start": "2015",
        "end": "2016",
        "notes": "CDL Classe A com averbamentos HazMat e cisterna. Registro de condução limpo."
      }
    ],
    "skills": "Condução de longa distância e regional\nCargas refrigeradas e de plataforma\nRegulamentos DOT e livros de registro\nInspeções antes da viagem\nPlaneamento de rotas (GPS, ELD)\nOperação de empilhadores",
    "languages": "Inglês (fluente)",
    "template": "ats"
  },
  "retail-salespersons": {
    "contact": {
      "name": "Jessica Rivera",
      "title": "Associado de Vendas de Retalho",
      "email": "jessica.rivera@example.com",
      "phone": "+1 (555) 010-0105",
      "location": "Phoenix, AZ",
      "website": ""
    },
    "summary": "Associado de vendas de retalho com 4 anos de experiência em lojas de eletrónica e vestuário. Consistentemente entre os 3 melhores vendedores da equipe, com uma taxa de adesão de 32% em garantias e acessórios. Simpático, rápido na caixa e de confiança para abrir e fechar a loja.",
    "experience": [
      {
        "role": "Associado de Vendas Sénior",
        "company": "BrightBuy Electronics",
        "location": "Phoenix, AZ",
        "start": "fev. de 2022",
        "end": "",
        "current": true,
        "points": "Vender eletrónica e acessórios a mais de 60 clientes por dia; entre os 3 melhores em vendas da loja durante 8 trimestres seguidos\nAtingir uma taxa de adesão de 32% em garantias e acessórios, a mais alta da equipe\nFormar 6 novos colegas na caixa, no armazém e nas normas de atendimento ao cliente\nDetentor de chaves de confiança: abrir e fechar a loja e fazer contagens de caixa"
      },
      {
        "role": "Associado de Vendas",
        "company": "SunStyle Apparel",
        "location": "Phoenix, AZ",
        "start": "jun. de 2021",
        "end": "jan. de 2022",
        "current": false,
        "points": "Ajudou clientes a escolher roupas e tamanhos numa loja movimentada\nManteve os expositores arrumados e repôs prateleiras em cada turno\nTratou devoluções e trocas com cortesia, mantendo as reclamações no mínimo"
      }
    ],
    "education": [
      {
        "school": "Phoenix Community College",
        "degree": "Grau de Associado",
        "field": "Gestão",
        "start": "2019",
        "end": "2021",
        "notes": "Estudo a tempo parcial enquanto trabalhava no retalho."
      }
    ],
    "skills": "Atendimento ao cliente e vendas adicionais\nManuseamento de dinheiro e sistemas POS\nConhecimento de produtos (eletrónica)\nGestão de stock\nAbertura e fecho da loja\nFormação de equipes",
    "languages": "Inglês (fluente)\nEspanhol (fluente)",
    "template": "modern"
  },
  "customer-service-representatives": {
    "contact": {
      "name": "Sarah Mitchell",
      "title": "Representante de Atendimento ao Cliente",
      "email": "sarah.mitchell@example.com",
      "phone": "+1 (555) 010-0106",
      "location": "Atlanta, GA",
      "website": ""
    },
    "summary": "Representante de atendimento ao cliente com 5 anos de experiência no tratamento de apoio por telefone, email e chat ao vivo. Resolve mais de 45 casos por dia com uma pontuação de satisfação de 96% e uma taxa de resolução no primeiro contato de 88%. Calmo com clientes irritados e rápido a encontrar a solução.",
    "experience": [
      {
        "role": "Representante de Atendimento ao Cliente",
        "company": "NorthPoint Telecom",
        "location": "Atlanta, GA",
        "start": "mai. de 2021",
        "end": "",
        "current": true,
        "points": "Tratar mais de 45 casos por dia por telefone, email e chat relativos a faturação, encomendas e avarias técnicas\nManter uma pontuação de satisfação do cliente de 96% e uma taxa de resolução no primeiro contato de 88%\nDesescalar chamadas difíceis e transformar reclamações em negócios repetidos\nFormar 5 novos agentes em guiões, sistemas e tom"
      },
      {
        "role": "Agente de Apoio",
        "company": "QuickShop Online",
        "location": "Atlanta, GA",
        "start": "set. de 2019",
        "end": "abr. de 2021",
        "current": false,
        "points": "Respondeu a emails e conversas de clientes sobre encomendas, devoluções e reembolsos\nManteve o tempo médio de primeira resposta abaixo de 2 horas\nEscreveu 20 artigos do centro de ajuda que reduziram as perguntas repetidas em um quarto"
      }
    ],
    "education": [
      {
        "school": "Georgia State University",
        "degree": "Grau de Associado",
        "field": "Administração de Empresas",
        "start": "2017",
        "end": "2019",
        "notes": ""
      }
    ],
    "skills": "Apoio por telefone, email e chat ao vivo\nTratamento de reclamações e desescalada\nSistemas CRM (Zendesk, Salesforce)\nPerguntas sobre faturação e encomendas\nEscrita a 55 ppm\nFormação de equipes",
    "languages": "Inglês (fluente)",
    "template": "ats"
  },
  "general-and-operations-managers": {
    "contact": {
      "name": "Robert Hayes",
      "title": "Gestor de Operações",
      "email": "robert.hayes@example.com",
      "phone": "+1 (555) 010-0107",
      "location": "Columbus, OH",
      "website": ""
    },
    "summary": "Gestor de operações com 12 anos de experiência a dirigir equipes de até 80 pessoas em armazéns e distribuição. Reduziu os custos de processamento de encomendas em 22%, elevou os envios pontuais de 91% para 98% e abriu dois novos locais a tempo e abaixo do orçamento.",
    "experience": [
      {
        "role": "Gestor de Operações",
        "company": "Midwest Logistics Group",
        "location": "Columbus, OH",
        "start": "fev. de 2020",
        "end": "",
        "current": true,
        "points": "Dirigir um centro de distribuição de 120,000 pés quadrados com 80 funcionários em 3 turnos\nReduziu os custos de processamento de encomendas em 22% ao redesenhar percursos de recolha e padrões de turnos\nElevou os envios pontuais de 91% para 98% em 18 meses\nAbriu 2 novos locais a tempo e 8% abaixo do orçamento"
      },
      {
        "role": "Supervisor de Armazém",
        "company": "Buckeye Supply Co.",
        "location": "Columbus, OH",
        "start": "jun. de 2013",
        "end": "jan. de 2020",
        "current": false,
        "points": "Supervisionou 25 funcionários de armazém e a expedição diária de mais de 4,000 encomendas\nIntroduziu a leitura de códigos de barras, reduzindo os erros de recolha em 35%\nDeu formação de segurança que manteve a obra sem acidentes durante 3 anos"
      }
    ],
    "education": [
      {
        "school": "Ohio University",
        "degree": "BBA",
        "field": "Gestão de Operações",
        "start": "2009",
        "end": "2013",
        "notes": "Six Sigma Green Belt."
      }
    ],
    "skills": "Liderança de equipes (até 80 funcionários)\nArmazenagem e distribuição\nMelhoria de processos\nOrçamentação e controlo de custos\nGestão de segurança\nSistemas ERP e WMS",
    "languages": "Inglês (fluente)",
    "template": "executive"
  },
  "electricians": {
    "contact": {
      "name": "James Wilson",
      "title": "Eletricista Licenciado",
      "email": "james.wilson@example.com",
      "phone": "+1 (555) 010-0108",
      "location": "Denver, CO",
      "website": ""
    },
    "summary": "Eletricista oficial licenciado com 8 anos de experiência em trabalho residencial e comercial. Competente em instalações elétricas, atualizações de quadros, iluminação e deteção de avarias, com um registro de segurança limpo em mais de 400 trabalhos. Conhecimento do código NEC e experiência na supervisão de aprendizes.",
    "experience": [
      {
        "role": "Eletricista Oficial",
        "company": "Rocky Mountain Electrical",
        "location": "Denver, CO",
        "start": "mar. de 2019",
        "end": "",
        "current": true,
        "points": "Concluir mais de 400 trabalhos residenciais e comerciais: instalações elétricas, atualizações de quadros, iluminação e carregadores de VE\nDiagnosticar e reparar avarias rapidamente, com uma taxa de reparação à primeira visita de 92%\nSupervisionar 2 aprendizes e aprovar o seu trabalho segundo as normas\nManter um registro de segurança limpo, com zero acidentes com baixa"
      },
      {
        "role": "Aprendiz de Eletricista",
        "company": "Denver Home Services",
        "location": "Denver, CO",
        "start": "jun. de 2016",
        "end": "fev. de 2019",
        "current": false,
        "points": "Apoiou eletricistas licenciados em instalações elétricas de obras novas e remodelações\nAprendeu a dobrar tubos, passar cabos e instalar quadros\nConcluiu 8,000 horas de aprendizagem e passou no exame de oficial à primeira"
      }
    ],
    "education": [
      {
        "school": "Emily Griffith Technical College",
        "degree": "Certificado",
        "field": "Tecnologia Elétrica",
        "start": "2015",
        "end": "2016",
        "notes": "Licença de eletricista oficial (Colorado). Certificado OSHA 30."
      }
    ],
    "skills": "Instalações elétricas residenciais e comerciais\nAtualizações de quadros e carregadores de VE\nDeteção de avarias e testes\nConformidade com o código NEC\nDobragem de tubos e passagem de cabos\nSupervisão de aprendizes",
    "languages": "Inglês (fluente)",
    "template": "ats"
  },
  "financial-analysts": {
    "contact": {
      "name": "Priya Sharma",
      "title": "Analista Financeiro",
      "email": "priya.sharma@example.com",
      "phone": "+1 (555) 010-0109",
      "location": "New York, NY",
      "website": ""
    },
    "summary": "Analista financeiro com 6 anos de experiência em orçamentação, previsão e análise de investimentos. Criou modelos de previsão que reduziram o desvio orçamental em 30% e apoiaram $50M em decisões de investimento. Forte em Excel, SQL e modelação financeira.",
    "experience": [
      {
        "role": "Analista Financeiro",
        "company": "Hudson Capital Partners",
        "location": "New York, NY",
        "start": "abr. de 2021",
        "end": "",
        "current": true,
        "points": "Elaborar previsões mensais e orçamentos anuais para uma carteira de $120M\nReduziu o desvio orçamental em 30% com um modelo de previsão baseado em fatores\nApoiar decisões de investimento no valor de $50M com avaliação e análise de cenários\nApresentar conclusões mensalmente ao CFO e aos chefes de departamento"
      },
      {
        "role": "Analista Financeiro Júnior",
        "company": "Empire State Bank",
        "location": "New York, NY",
        "start": "jul. de 2019",
        "end": "mar. de 2021",
        "current": false,
        "points": "Preparou relatórios semanais de desempenho para 12 sucursais\nAutomatizou relatórios em Excel, poupando 10 horas por semana\nApoiou a equipe de crédito na análise da carteira de empréstimos"
      }
    ],
    "education": [
      {
        "school": "New York University",
        "degree": "BS",
        "field": "Finanças",
        "start": "2015",
        "end": "2019",
        "notes": "Candidato ao CFA Nível II. Formação em avaliação e finanças empresariais."
      }
    ],
    "skills": "Modelação e previsão financeira\nOrçamentação e análise de desvios\nAvaliação (DCF, comparáveis)\nExcel (avançado) e SQL\nBloomberg Terminal\nVisualização de dados (Power BI)",
    "languages": "Inglês (fluente)\nHindi (fluente)",
    "template": "professional"
  },
  "civil-engineers": {
    "contact": {
      "name": "Michael Brown",
      "title": "Engenheiro Civil",
      "email": "michael.brown@example.com",
      "phone": "+1 (555) 010-0110",
      "location": "Seattle, WA",
      "website": ""
    },
    "summary": "Engenheiro civil (PE) com 7 anos de experiência em projeto de infraestruturas rodoviárias e hidráulicas. Liderou o projeto de alargamento de uma autoestrada de 12 milhas e de um sistema de águas pluviais que serve 8,000 habitações. Competente em AutoCAD Civil 3D, estimativas de custos e coordenação de licenças.",
    "experience": [
      {
        "role": "Engenheiro Civil",
        "company": "Cascade Infrastructure Group",
        "location": "Seattle, WA",
        "start": "jan. de 2021",
        "end": "",
        "current": true,
        "points": "Liderar o projeto de alargamento de uma autoestrada de 12 milhas, do levantamento aos documentos de construção\nProjetou um sistema de águas pluviais que serve 8,000 habitações, aprovado à primeira pela câmera\nCoordenar licenças com 4 agências e gerir um orçamento de projeto de $2.5M\nRever e carimbar desenhos como Engenheiro Profissional licenciado"
      },
      {
        "role": "Engenheiro Civil Júnior",
        "company": "Puget Sound Engineering",
        "location": "Seattle, WA",
        "start": "jul. de 2018",
        "end": "dez. de 2020",
        "current": false,
        "points": "Preparou planos de terraplenagem e drenagem para mais de 20 empreendimentos residenciais\nFez estimativas de custos e medições de quantidades para projetos rodoviários\nParticipou em inspeções de obra e escreveu relatórios de progresso"
      }
    ],
    "education": [
      {
        "school": "University of Washington",
        "degree": "BS",
        "field": "Engenharia Civil",
        "start": "2014",
        "end": "2018",
        "notes": "Licença de Engenheiro Profissional (Washington). EIT aprovado em 2018."
      }
    ],
    "skills": "Projeto rodoviário e de drenagem\nAutoCAD Civil 3D\nModelação de águas pluviais\nEstimativas de custos\nCoordenação de licenças\nAgendamento de projetos (MS Project)",
    "languages": "Inglês (fluente)",
    "template": "classic"
  },
  "mechanical-engineers": {
    "contact": {
      "name": "Daniel Kim",
      "title": "Engenheiro Mecânico",
      "email": "daniel.kim@example.com",
      "phone": "+1 (555) 010-0111",
      "location": "Detroit, MI",
      "website": ""
    },
    "summary": "Engenheiro mecânico com 6 anos de experiência no projeto de sistemas AVAC e equipamento de produção. Reduziu o consumo de energia em 18% em 3 fábricas com condutas e controlos redesenhados, e liderou o redesenho de uma máquina que aumentou a produção em 25%. Competente em SolidWorks, FEA e análise térmica.",
    "experience": [
      {
        "role": "Engenheiro Mecânico",
        "company": "Great Lakes Manufacturing",
        "location": "Detroit, MI",
        "start": "fev. de 2021",
        "end": "",
        "current": true,
        "points": "Projetar AVAC e equipamento de produção para 3 fábricas com mais de 400 funcionários\nReduziu o consumo de energia em 18% ao redesenhar condutas e sequências de controlo\nLiderou o redesenho de uma máquina que aumentou a produção em 25% sem espaço extra\nRealizar análises FEA e térmicas em peças novas antes da prototipagem"
      },
      {
        "role": "Engenheiro Mecânico Júnior",
        "company": "Motor City Design Works",
        "location": "Detroit, MI",
        "start": "ago. de 2019",
        "end": "jan. de 2021",
        "current": false,
        "points": "Modelou peças e conjuntos no SolidWorks para clientes automóveis\nPreparou desenhos, listas de materiais e relatórios de testes\nApoiou a construção de protótipos e resolveu problemas de ajuste na oficina"
      }
    ],
    "education": [
      {
        "school": "University of Michigan",
        "degree": "BS",
        "field": "Engenharia Mecânica",
        "start": "2015",
        "end": "2019",
        "notes": "Formação em termodinâmica, mecânica dos fluidos e projeto de máquinas."
      }
    ],
    "skills": "Projeto de AVAC\nSolidWorks e AutoCAD\nFEA e análise térmica\nProjeto de máquinas\nEficiência energética\nGD&T e tolerâncias",
    "languages": "Inglês (fluente)\nCoreano (conversacional)",
    "template": "classic"
  },
  "electrical-engineers": {
    "contact": {
      "name": "Kevin Patel",
      "title": "Engenheiro Eletrotécnico",
      "email": "kevin.patel@example.com",
      "phone": "+1 (555) 010-0112",
      "location": "San Jose, CA",
      "website": ""
    },
    "summary": "Engenheiro eletrotécnico com 6 anos de experiência em sistemas embebidos e eletrónica de potência. Projetou placas de controlo agora usadas em mais de 50,000 dispositivos e reduziu o custo das placas em 22% através do redesenho de componentes. Competente em Altium, C, testes de firmware e conformidade EMC.",
    "experience": [
      {
        "role": "Engenheiro Eletrotécnico",
        "company": "Silicon Valley Devices Inc.",
        "location": "San Jose, CA",
        "start": "mar. de 2021",
        "end": "",
        "current": true,
        "points": "Projetar placas de controlo embebidas usadas em mais de 50,000 dispositivos por ano\nReduziu o custo das placas em 22% ao redesenhar a etapa de potência e procurar alternativas\nLiderar os testes de conformidade EMC, passando à primeira em 4 linhas de produtos\nEscrever e rever firmware em C para microcontroladores"
      },
      {
        "role": "Engenheiro Eletrotécnico Júnior",
        "company": "Bay Area Circuits",
        "location": "San Jose, CA",
        "start": "jul. de 2019",
        "end": "fev. de 2021",
        "current": false,
        "points": "Desenhou PCB no Altium para clientes de consumo e industriais\nConstruiu e testou protótipos, depurando falhas de hardware\nEscreveu procedimentos de teste que reduziram o tempo de testes de produção em 30%"
      }
    ],
    "education": [
      {
        "school": "San Jose State University",
        "degree": "BS",
        "field": "Engenharia Eletrotécnica",
        "start": "2015",
        "end": "2019",
        "notes": "Formação em sistemas embebidos, eletrónica de potência e processamento de sinais."
      }
    ],
    "skills": "Sistemas embebidos e projeto de PCB\nAltium Designer\nC e firmware\nEletrónica de potência\nTestes de conformidade EMC\nOsciloscópios e instrumentos de laboratório",
    "languages": "Inglês (fluente)\nGujarati (conversacional)",
    "template": "modern"
  },
  "data-analysts": {
    "contact": {
      "name": "Laura Nguyen",
      "title": "Analista de Dados",
      "email": "laura.nguyen@example.com",
      "phone": "+1 (555) 010-0113",
      "location": "Chicago, IL",
      "website": ""
    },
    "summary": "Analista de dados com 4 anos de experiência a transformar dados de vendas e operações em decisões. Criou painéis usados por mais de 60 gestores, reduziu o tempo de relatórios mensais de 3 dias para 4 horas e encontrou um erro de preços no valor de $180,000 por ano. Forte em SQL, Excel e Power BI.",
    "experience": [
      {
        "role": "Analista de Dados",
        "company": "Lakefront Retail Group",
        "location": "Chicago, IL",
        "start": "jan. de 2022",
        "end": "",
        "current": true,
        "points": "Criar painéis Power BI usados por mais de 60 gestores de loja e regionais\nReduziu os relatórios mensais de 3 dias para 4 horas com pipelines SQL automatizados\nEncontrou um erro de preços no valor de $180,000 por ano ao auditar dados de promoções\nApresentar conclusões mensalmente à equipe comercial"
      },
      {
        "role": "Analista de Dados Júnior",
        "company": "Windy City Logistics",
        "location": "Chicago, IL",
        "start": "ago. de 2020",
        "end": "dez. de 2021",
        "current": false,
        "points": "Limpou e juntou dados de entregas de 4 sistemas numa única tabela de relatórios\nCriou controlos em Excel que substituíram contagens manuais para 2 equipes\nRespondeu diariamente a perguntas pontuais sobre dados de gestores de operações"
      }
    ],
    "education": [
      {
        "school": "University of Illinois Chicago",
        "degree": "BS",
        "field": "Estatística",
        "start": "2016",
        "end": "2020",
        "notes": "Formação em regressão, bases de dados e visualização de dados."
      }
    ],
    "skills": "Limpeza de dados e SQL\nPower BI e Tableau\nExcel (avançado)\nPython (pandas)\nDesign de painéis\nNoções básicas de testes A/B",
    "languages": "Inglês (fluente)\nVietnamita (conversacional)",
    "template": "compact"
  },
  "data-scientists": {
    "contact": {
      "name": "Omar Farouk",
      "title": "Cientista de Dados",
      "email": "omar.farouk@example.com",
      "phone": "+1 (555) 010-0114",
      "location": "Seattle, WA",
      "website": ""
    },
    "summary": "Cientista de dados com 5 anos de experiência na construção de modelos de aprendizagem automática para comércio eletrónico. Um modelo de recomendação que lancei aumentou a receita por visita em 12%, e um modelo de abandono assinala agora 80% dos clientes em risco. Forte em Python, SQL e implementação de modelos.",
    "experience": [
      {
        "role": "Cientista de Dados",
        "company": "Evergreen Commerce",
        "location": "Seattle, WA",
        "start": "fev. de 2022",
        "end": "",
        "current": true,
        "points": "Lançou um modelo de recomendação que aumentou a receita por visita em 12%\nCriou um modelo de abandono que assinala 80% dos clientes em risco um mês antes\nImplementou modelos em produção com pipelines de monitorização e retreino\nApresentar resultados dos modelos mensalmente às equipes de produto e marketing"
      },
      {
        "role": "Cientista de Dados Júnior",
        "company": "Northwest Analytics",
        "location": "Seattle, WA",
        "start": "jul. de 2020",
        "end": "jan. de 2022",
        "current": false,
        "points": "Criou modelos de previsão para 3 clientes de retalho com mais de 90% de exatidão\nLimpou e preparou conjuntos de dados com mais de 10M de linhas para modelação\nEscreveu documentação para que os clientes pudessem executar os modelos sozinhos"
      }
    ],
    "education": [
      {
        "school": "University of Washington",
        "degree": "MS",
        "field": "Ciência de Dados",
        "start": "2018",
        "end": "2020",
        "notes": "Tese sobre sistemas de recomendação. BS em Matemática (2018)."
      }
    ],
    "skills": "Python (scikit-learn, pandas)\nAprendizagem automática e estatística\nSQL e Spark\nImplementação de modelos (Docker, AWS)\nTestes A/B\nVisualização de dados",
    "languages": "Inglês (fluente)\nÁrabe (fluente)",
    "template": "modern"
  },
  "web-developers": {
    "contact": {
      "name": "Sofia Martinez",
      "title": "Programador Web",
      "email": "sofia.martinez@example.com",
      "phone": "+1 (555) 010-0115",
      "location": "Miami, FL",
      "website": ""
    },
    "summary": "Programador web com 4 anos de experiência na construção de websites rápidos e acessíveis em HTML, CSS e JavaScript. Reconstruiu o checkout de uma loja, aumentando as conversões em 18%, e mantém 12 sites de clientes com 99.9% de disponibilidade. Forte em design responsivo, desempenho e noções básicas de SEO.",
    "experience": [
      {
        "role": "Programador Web",
        "company": "Sunshine Digital Studio",
        "location": "Miami, FL",
        "start": "mar. de 2022",
        "end": "",
        "current": true,
        "points": "Criar websites responsivos em HTML, CSS, JavaScript e WordPress para 12 clientes\nReconstruiu o checkout de uma loja, aumentando as conversões em 18%\nReduziu o tempo médio de carregamento das páginas de 4.2s para 1.8s com otimização de imagens e código\nManter todos os sites de clientes com 99.9% de disponibilidade, com monitorização e cópias de segurança"
      },
      {
        "role": "Programador Web Júnior",
        "company": "Coastal Web Co.",
        "location": "Miami, FL",
        "start": "jun. de 2021",
        "end": "fev. de 2022",
        "current": false,
        "points": "Criou páginas de destino e corrigiu erros em mais de 20 sites de pequenas empresas\nAprendeu Git, design responsivo e SEO básico em projetos reais\nRespondeu a emails de clientes e fez atualizações de conteúdo no próprio dia"
      }
    ],
    "education": [
      {
        "school": "Florida International University",
        "degree": "BS",
        "field": "Ciência da Computação",
        "start": "2017",
        "end": "2021",
        "notes": "Formação em desenvolvimento web, bases de dados e interação humano-computador."
      }
    ],
    "skills": "HTML, CSS e JavaScript\nReact e WordPress\nDesign responsivo\nOtimização da velocidade das páginas\nGit e GitHub\nSEO básico",
    "languages": "Inglês (fluente)\nEspanhol (fluente)",
    "template": "creative"
  },
  "graphic-designers": {
    "contact": {
      "name": "Hannah Lee",
      "title": "Designer Gráfico",
      "email": "hannah.lee@example.com",
      "phone": "+1 (555) 010-0116",
      "location": "Los Angeles, CA",
      "website": ""
    },
    "summary": "Designer gráfico com 5 anos de experiência em branding, embalagens e design para redes sociais. Criou identidades de marca para mais de 25 pequenas empresas e um redesenho de embalagem que aumentou as vendas em prateleira em 14%. Competente em Adobe Illustrator, Photoshop e Figma.",
    "experience": [
      {
        "role": "Designer Gráfico",
        "company": "Golden State Creative",
        "location": "Los Angeles, CA",
        "start": "jan. de 2022",
        "end": "",
        "current": true,
        "points": "Criar identidades de marca, embalagens e campanhas sociais para mais de 25 clientes\nO redesenho da embalagem de uma marca alimentar aumentou as vendas em prateleira em 14%\nProduzir mais de 30 conteúdos sociais por semana no Instagram, TikTok e Facebook\nApresentar conceitos aos clientes e rever rapidamente a partir do feedback"
      },
      {
        "role": "Designer Gráfico Júnior",
        "company": "Bright Pixel Agency",
        "location": "Los Angeles, CA",
        "start": "jul. de 2020",
        "end": "dez. de 2021",
        "current": false,
        "points": "Criou folhetos, menus e publicações sociais para restaurantes e lojas locais\nPreparou arquivos prontos para impressão e verificou provas com as gráficas\nCriou uma biblioteca de modelos que reduziu o tempo de design em um terço"
      }
    ],
    "education": [
      {
        "school": "California State University, Long Beach",
        "degree": "BFA",
        "field": "Design Gráfico",
        "start": "2016",
        "end": "2020",
        "notes": "Portefólio em branding e design de embalagens."
      }
    ],
    "skills": "Adobe Illustrator e Photoshop\nFigma\nDesign de identidade de marca\nDesign de embalagens\nDesign para redes sociais\nProdução de impressão",
    "languages": "Inglês (fluente)\nCoreano (conversacional)",
    "template": "creative"
  },
  "ux-designers": {
    "contact": {
      "name": "Grace Taylor",
      "title": "Designer de UX",
      "email": "grace.taylor@example.com",
      "phone": "+1 (555) 010-0117",
      "location": "San Francisco, CA",
      "website": ""
    },
    "summary": "Designer de UX com 5 anos de experiência a investigar usuários e a conceber produtos móveis e web. Redesenhou um fluxo de integração que reduziu o abandono em 35% e realizou mais de 40 testes de usabilidade. Competente em Figma, pesquisa de usuários, wireframing e prototipagem.",
    "experience": [
      {
        "role": "Designer de UX",
        "company": "Bayfront Product Labs",
        "location": "San Francisco, CA",
        "start": "fev. de 2022",
        "end": "",
        "current": true,
        "points": "Redesenhou a integração móvel, reduzindo o abandono em 35% em 3 meses\nRealizar mais de 40 testes de usabilidade e entrevistas a usuários por ano\nCriar wireframes e protótipos em Figma para 2 equipes de produto\nTrabalhar diariamente com engenheiros e gestores de produto na entrega"
      },
      {
        "role": "Designer de UX Júnior",
        "company": "AppWorks Studio",
        "location": "San Francisco, CA",
        "start": "ago. de 2020",
        "end": "jan. de 2022",
        "current": false,
        "points": "Criou telas e fluxos para 5 aplicações de clientes\nRealizou os primeiros testes de usabilidade e redigiu as conclusões para os clientes\nCriou uma biblioteca de componentes que acelerou a entrega do design"
      }
    ],
    "education": [
      {
        "school": "University of California, Berkeley",
        "degree": "BA",
        "field": "Psicologia",
        "start": "2016",
        "end": "2020",
        "notes": "Certificado de design de UX (General Assembly, 2020). Formação em interação humano-computador."
      }
    ],
    "skills": "Pesquisa de usuários e testes de usabilidade\nWireframing e prototipagem (Figma)\nArquitetura de informação\nSistemas de design\nMapeamento da jornada\nWorkshops com as partes interessadas",
    "languages": "Inglês (fluente)",
    "template": "creative"
  },
  "marketing-managers": {
    "contact": {
      "name": "Nicole Adams",
      "title": "Gestor de Marketing",
      "email": "nicole.adams@example.com",
      "phone": "+1 (555) 010-0118",
      "location": "Boston, MA",
      "website": ""
    },
    "summary": "Gestor de marketing com 8 anos de experiência em campanhas B2B e de consumo. Aumentou os contatos qualificados em 60% num ano, lançou uma linha de produtos que atingiu $3M em vendas no primeiro ano e gere um orçamento anual de $500,000 numa equipe de 5.",
    "experience": [
      {
        "role": "Gestor de Marketing",
        "company": "Harbor & Main Software",
        "location": "Boston, MA",
        "start": "mar. de 2021",
        "end": "",
        "current": true,
        "points": "Liderar uma equipe de 5 e um orçamento anual de marketing de $500,000\nAumentou os contatos qualificados em 60% num ano com conteúdo e campanhas pagas\nLançou uma linha de produtos que atingiu $3M em vendas no primeiro ano\nReduziu o custo por contato em 28% ao reconstruir a segmentação das campanhas"
      },
      {
        "role": "Especialista de Marketing",
        "company": "Beacon Retail Group",
        "location": "Boston, MA",
        "start": "jun. de 2017",
        "end": "fev. de 2021",
        "current": false,
        "points": "Realizou campanhas de email para 80,000 subscritores com uma taxa de abertura de 24%\nGeriu contas sociais que cresceram de 5,000 para 40,000 seguidores\nOrganizou 6 stands em feiras por ano, gerando mais de 300 contatos cada"
      }
    ],
    "education": [
      {
        "school": "Boston University",
        "degree": "BS",
        "field": "Marketing",
        "start": "2013",
        "end": "2017",
        "notes": "Formação em comportamento do consumidor, análise e gestão de marcas."
      }
    ],
    "skills": "Estratégia e planeamento de campanhas\nMarketing de conteúdos e email\nPublicidade paga (Google, Meta)\nAnálise de marketing (GA4)\nLiderança de equipes\nGestão orçamental",
    "languages": "Inglês (fluente)",
    "template": "creative"
  },
  "project-managers": {
    "contact": {
      "name": "Brian Foster",
      "title": "Gestor de Projetos",
      "email": "brian.foster@example.com",
      "phone": "+1 (555) 010-0119",
      "location": "Denver, CO",
      "website": ""
    },
    "summary": "Gestor de projetos (PMP) com 7 anos de experiência na entrega de projetos de software e construção a tempo e dentro do orçamento. Geriu 15 projetos no valor de até $4M, com uma taxa de entregas pontuais de 94%. Competente em Agile, gestão de riscos e comunicação com as partes interessadas.",
    "experience": [
      {
        "role": "Gestor de Projetos",
        "company": "Front Range Consulting",
        "location": "Denver, CO",
        "start": "jan. de 2021",
        "end": "",
        "current": true,
        "points": "Gerir 15 projetos no valor de até $4M, com uma taxa de entregas pontuais de 94%\nDirigir sprints Agile de 3 equipes e reportar semanalmente o progresso aos executivos\nReduziu os excessos dos projetos em 30% com revisões de risco mais precoces\nCoordenar fornecedores, clientes e equipes internas em 4 fusos horários"
      },
      {
        "role": "Coordenador de Projetos",
        "company": "Mountain View Builders",
        "location": "Denver, CO",
        "start": "jul. de 2018",
        "end": "dez. de 2020",
        "current": false,
        "points": "Acompanhou cronogramas, orçamentos e licenças de 8 projetos de construção\nPreparou relatórios de estado e notas de reuniões para clientes\nResolveu conflitos de agendamento que pouparam 2 semanas numa construção escolar"
      }
    ],
    "education": [
      {
        "school": "University of Colorado Denver",
        "degree": "BS",
        "field": "Administração de Empresas",
        "start": "2014",
        "end": "2018",
        "notes": "Certificado PMP (2021). Certified ScrumMaster."
      }
    ],
    "skills": "Planeamento e agendamento de projetos\nAgile e Scrum\nGestão de riscos\nControlo orçamental\nComunicação com as partes interessadas\nMS Project e Jira",
    "languages": "Inglês (fluente)",
    "template": "professional"
  },
  "human-resources-managers": {
    "contact": {
      "name": "Angela Wright",
      "title": "Gestor de Recursos Humanos",
      "email": "angela.wright@example.com",
      "phone": "+1 (555) 010-0120",
      "location": "Atlanta, GA",
      "website": ""
    },
    "summary": "Gestor de recursos humanos com 9 anos de experiência em contratação, relações com os funcionários e benefícios. Reduziu o tempo de contratação de 45 para 28 dias, aumentou a retenção em 15% e gere os RH de 250 funcionários em 3 locais. Conhecimento de nível CIPD de direito e políticas de emprego.",
    "experience": [
      {
        "role": "Gestor de Recursos Humanos",
        "company": "Peachtree Manufacturing",
        "location": "Atlanta, GA",
        "start": "fev. de 2020",
        "end": "",
        "current": true,
        "points": "Dirigir os RH de 250 funcionários em 3 locais, com uma equipe de 3\nReduziu o tempo de contratação de 45 para 28 dias ao reconstruir o processo de entrevistas\nAumentou a retenção em 15% com um novo programa de integração e avaliação\nTratar das relações com os funcionários, queixas e atualizações de políticas"
      },
      {
        "role": "Generalista de RH",
        "company": "Southern Hospitality Group",
        "location": "Atlanta, GA",
        "start": "jun. de 2016",
        "end": "jan. de 2020",
        "current": false,
        "points": "Recrutou mais de 120 funcionários por ano para hotéis e restaurantes\nFez verificações salariais e inscrições em benefícios para 400 funcionários\nResolveu conflitos entre funcionários e manteve a rotatividade abaixo da média do setor"
      }
    ],
    "education": [
      {
        "school": "University of Georgia",
        "degree": "BBA",
        "field": "Recursos Humanos",
        "start": "2012",
        "end": "2016",
        "notes": "Certificado SHRM-CP. Formação em direito do trabalho e comportamento organizacional."
      }
    ],
    "skills": "Recrutamento e integração\nRelações com os funcionários\nBenefícios e salários\nDireito do trabalho\nGestão de desempenho\nHRIS (Workday, BambooHR)",
    "languages": "Inglês (fluente)",
    "template": "professional"
  },
  "lawyers": {
    "contact": {
      "name": "Jonathan Pierce",
      "title": "Advogado Associado",
      "email": "jonathan.pierce@example.com",
      "phone": "+1 (555) 010-0121",
      "location": "Chicago, IL",
      "website": ""
    },
    "summary": "Advogado associado com 6 anos de experiência em contencioso comercial e direito dos contratos. Geriu mais de 40 processos, obteve julgamento sumário em 8, e redigiu contratos no valor de $25M. Admitido na Ordem dos Advogados do Illinois; competente em pesquisa jurídica, redação e aconselhamento de clientes.",
    "experience": [
      {
        "role": "Advogado Associado",
        "company": "Pierce & Caldwell LLP",
        "location": "Chicago, IL",
        "start": "set. de 2020",
        "end": "",
        "current": true,
        "points": "Gerir mais de 40 processos de contencioso comercial, da apresentação ao acordo\nObteve julgamento sumário em 8 processos e resolveu favoravelmente mais 20\nRedigir e negociar contratos no valor de até $25M\nAconselhar clientes pessoalmente e por escrito sobre risco e estratégia"
      },
      {
        "role": "Escriturário Judicial",
        "company": "Cook County Circuit Court",
        "location": "Chicago, IL",
        "start": "ago. de 2019",
        "end": "ago. de 2020",
        "current": false,
        "points": "Pesquisou jurisprudência e redigiu memorandos para 2 juízes\nReviu requerimentos e preparou resumos para mais de 100 audiências\nObservou julgamentos e conferências de acordo em várias secções cíveis"
      }
    ],
    "education": [
      {
        "school": "Northwestern University Pritzker School of Law",
        "degree": "JD",
        "field": "Direito",
        "start": "2016",
        "end": "2019",
        "notes": "Admitido na Ordem dos Advogados do Illinois (2019). Revista jurídica, editor de artigos."
      }
    ],
    "skills": "Contencioso comercial\nRedação e negociação de contratos\nPesquisa jurídica (Westlaw, LexisNexis)\nAconselhamento de clientes\nDepoimentos e descoberta\nProcessos e procedimentos judiciais",
    "languages": "Inglês (fluente)",
    "template": "classic"
  },
  "pharmacists": {
    "contact": {
      "name": "Rachel Cohen",
      "title": "Farmacêutico Clínico",
      "email": "rachel.cohen@example.com",
      "phone": "+1 (555) 010-0122",
      "location": "Philadelphia, PA",
      "website": ""
    },
    "summary": "Farmacêutico clínico (PharmD) com 7 anos de experiência em farmácia hospitalar e comunitária. Revê mais de 100 prescrições por dia, reduziu os eventos adversos de medicamentos em 25% através de um novo protocolo de verificação e aconselha pacientes sobre o uso seguro de medicamentos. Licenciado na Pensilvânia.",
    "experience": [
      {
        "role": "Farmacêutico Clínico",
        "company": "Liberty General Hospital",
        "location": "Philadelphia, PA",
        "start": "jan. de 2020",
        "end": "",
        "current": true,
        "points": "Rever mais de 100 prescrições por dia quanto a segurança, dosagem e interações\nReduziu os eventos adversos de medicamentos em 25% com um novo protocolo de dupla verificação\nAconselhar médicos e enfermeiros sobre escolhas de medicamentos para pacientes complexos\nFazer as rondas de gestão de antibióticos do hospital duas vezes por semana"
      },
      {
        "role": "Farmacêutico",
        "company": "Corner Drug Pharmacy",
        "location": "Philadelphia, PA",
        "start": "jul. de 2018",
        "end": "dez. de 2019",
        "current": false,
        "points": "Dispensou mais de 200 receitas por dia com zero erros de dispensa\nAconselhou pacientes sobre novos medicamentos, efeitos secundários e conservação\nAdministrou vacinas contra a gripe e fez medições da tensão arterial"
      }
    ],
    "education": [
      {
        "school": "Temple University School of Pharmacy",
        "degree": "PharmD",
        "field": "Farmácia",
        "start": "2014",
        "end": "2018",
        "notes": "Farmacêutico licenciado (Pensilvânia). Especialista Certificado em Farmacoterapia (BCPS)."
      }
    ],
    "skills": "Revisão e segurança da medicação\nFarmacologia clínica\nAconselhamento de pacientes\nSistemas de farmácia (Epic, PioneerRx)\nGestão de antibióticos\nServiços de vacinação",
    "languages": "Inglês (fluente)",
    "template": "professional"
  },
  "dentists": {
    "contact": {
      "name": "Alan Brooks",
      "title": "Dentista Geral",
      "email": "alan.brooks@example.com",
      "phone": "+1 (555) 010-0123",
      "location": "Phoenix, AZ",
      "website": ""
    },
    "summary": "Dentista geral (DDS) com 8 anos de experiência em medicina dentária restauradora, estética e preventiva. Trata mais de 25 pacientes por dia numa clínica com 2,000 pacientes, com uma pontuação de satisfação dos pacientes de 98%. Competente em coroas, implantes, tratamentos de canal e alinhadores transparentes.",
    "experience": [
      {
        "role": "Dentista Geral",
        "company": "Desert Smile Dental",
        "location": "Phoenix, AZ",
        "start": "fev. de 2019",
        "end": "",
        "current": true,
        "points": "Tratar mais de 25 pacientes por dia: obturações, coroas, tratamentos de canal e extrações\nManter uma pontuação de satisfação dos pacientes de 98% em mais de 1,200 avaliações\nColocar mais de 15 implantes por mês e gerir casos de alinhadores transparentes\nSupervisionar 2 higienistas e 4 assistentes dentários"
      },
      {
        "role": "Dentista Associado",
        "company": "Valley Family Dentistry",
        "location": "Phoenix, AZ",
        "start": "jul. de 2017",
        "end": "jan. de 2019",
        "current": false,
        "points": "Prestou medicina dentária geral numa clínica com 1,500 pacientes\nIntroduziu coroas no próprio dia, reduzindo as consultas de retorno em 40%\nFez visitas de proximidade a escolas sobre a saúde oral das crianças"
      }
    ],
    "education": [
      {
        "school": "Arizona School of Dentistry & Oral Health",
        "degree": "DDS",
        "field": "Medicina Dentária",
        "start": "2013",
        "end": "2017",
        "notes": "Dentista licenciado (Arizona). Certificado Invisalign. Certificado CPR/BLS."
      }
    ],
    "skills": "Medicina dentária restauradora (coroas, obturações)\nTratamento de canal\nImplantes dentários\nAlinhadores transparentes\nCuidados e comunicação com pacientes\nRadiografias digitais e CEREC",
    "languages": "Inglês (fluente)",
    "template": "professional"
  },
  "physical-therapists": {
    "contact": {
      "name": "Megan Scott",
      "title": "Fisioterapeuta",
      "email": "megan.scott@example.com",
      "phone": "+1 (555) 010-0124",
      "location": "Portland, OR",
      "website": ""
    },
    "summary": "Fisioterapeuta (DPT) com 6 anos de experiência em reabilitação ortopédica e desportiva. Trata 12-15 pacientes por dia, com 90% a atingir os seus objetivos dentro das sessões planeadas. Competente em terapia manual, prescrição de exercício e testes de regresso ao desporto.",
    "experience": [
      {
        "role": "Fisioterapeuta",
        "company": "Rose City Sports Rehab",
        "location": "Portland, OR",
        "start": "mar. de 2021",
        "end": "",
        "current": true,
        "points": "Tratar 12-15 pacientes por dia com lesões desportivas, reabilitação pós-cirúrgica e dores nas costas\n90% dos pacientes atingem os seus objetivos dentro do número planeado de sessões\nConceber testes de regresso ao desporto usados por 3 equipes locais\nOrientar 2 novos formados e supervisionar estágios de estudantes"
      },
      {
        "role": "Fisioterapeuta",
        "company": "Willamette General Hospital",
        "location": "Portland, OR",
        "start": "ago. de 2019",
        "end": "fev. de 2021",
        "current": false,
        "points": "Prestou reabilitação em internamento a pacientes pós-cirúrgicos e com AVC\nDeu aulas de exercício em grupo para mais de 20 pacientes idosos por semana\nDocumentou o progresso no Epic e transmitiu-o às equipes das enfermarias"
      }
    ],
    "education": [
      {
        "school": "Pacific University",
        "degree": "DPT",
        "field": "Fisioterapia",
        "start": "2016",
        "end": "2019",
        "notes": "Fisioterapeuta licenciado (Oregon). Especialista Clínico Ortopédico (OCS)."
      }
    ],
    "skills": "Reabilitação ortopédica e desportiva\nTerapia manual\nPrescrição de exercício\nTestes de regresso ao desporto\nEducação de pacientes\nDocumentação (Epic)",
    "languages": "Inglês (fluente)",
    "template": "professional"
  },
  "chefs-and-head-cooks": {
    "contact": {
      "name": "Carlos Mendez",
      "title": "Chefe de Cozinha",
      "email": "carlos.mendez@example.com",
      "phone": "+1 (555) 010-0125",
      "location": "New Orleans, LA",
      "website": ""
    },
    "summary": "Chefe de cozinha com 10 anos de experiência em cozinhas crioulas e americanas modernas. Lidera uma brigada de 12 num restaurante com 200 lugares, reduziu os custos alimentares em 15% com encomendas mais rigorosas e ganhou 'Best New Menu' do guia gastronómico da cidade em 2025.",
    "experience": [
      {
        "role": "Chefe de Cozinha",
        "company": "The Brass Lantern",
        "location": "New Orleans, LA",
        "start": "jan. de 2021",
        "end": "",
        "current": true,
        "points": "Liderar uma brigada de 12 num restaurante de 200 lugares que serve mais de 300 refeições por noite\nReduziu os custos alimentares em 15% com encomendas mais rigorosas e um menu sazonal\nGanhou 'Best New Menu' do guia gastronómico da cidade em 2025\nCriar menus, formar cozinheiros e dirigir a passagem no serviço de sexta e sábado"
      },
      {
        "role": "Subchefe",
        "company": "Crescent City Bistro",
        "location": "New Orleans, LA",
        "start": "jun. de 2017",
        "end": "dez. de 2020",
        "current": false,
        "points": "Dirigiu a cozinha na ausência do chefe, servindo 150 refeições por noite\nGeriu stock, encomendas e relações com fornecedores\nFormou 8 cozinheiros de linha e reduziu a rotatividade do pessoal em um terço"
      }
    ],
    "education": [
      {
        "school": "New Orleans Culinary Institute",
        "degree": "Diploma",
        "field": "Artes Culinárias",
        "start": "2014",
        "end": "2016",
        "notes": "Certificado ServSafe Food Protection Manager."
      }
    ],
    "skills": "Design de menus e cálculo de custos\nCozinha crioula e americana moderna\nLiderança de cozinha (brigada de 12)\nSegurança alimentar (ServSafe)\nGestão de fornecedores\nCatering para banquetes e eventos",
    "languages": "Inglês (fluente)\nEspanhol (fluente)",
    "template": "creative"
  },
  "police-officers": {
    "contact": {
      "name": "Derek Lawson",
      "title": "Agente de Polícia",
      "email": "derek.lawson@example.com",
      "phone": "+1 (555) 010-0126",
      "location": "Columbus, OH",
      "website": ""
    },
    "summary": "Agente de polícia com 8 anos de experiência em patrulha, policiamento comunitário e investigações. Responde a mais de 30 chamadas por semana, com louvores por desescalada e proximidade comunitária. Formado em intervenção em crises, primeiros socorros e escrita de relatórios.",
    "experience": [
      {
        "role": "Agente de Polícia",
        "company": "Columbus Division of Police",
        "location": "Columbus, OH",
        "start": "jun. de 2019",
        "end": "",
        "current": true,
        "points": "Patrulhar um distrito de 40,000 residentes, respondendo a mais de 30 chamadas por semana\nRecebeu 2 louvores por desescalada e proximidade comunitária\nInvestigar furtos e agressões, escrevendo relatórios usados em mais de 50 processos\nOrientar 3 novos agentes durante a formação no terreno"
      },
      {
        "role": "Agente de Patrulha",
        "company": "Franklin County Sheriff's Office",
        "location": "Columbus, OH",
        "start": "ago. de 2017",
        "end": "mai. de 2019",
        "current": false,
        "points": "Patrulhou estradas do condado e respondeu a chamadas de emergência\nEntregou documentos judiciais e apoiou o transporte de detidos\nConcluiu formação em intervenção em crises e primeiros socorros"
      }
    ],
    "education": [
      {
        "school": "Columbus Police Academy",
        "degree": "Certificado",
        "field": "Aplicação da Lei",
        "start": "2017",
        "end": "2017",
        "notes": "Formado pela Ohio Peace Officer Training Academy. Formado na Equipe de Intervenção em Crises."
      }
    ],
    "skills": "Patrulha e resposta a emergências\nPoliciamento comunitário\nIntervenção em crises e desescalada\nEscrita de relatórios\nInvestigações\nPrimeiros socorros e RCP",
    "languages": "Inglês (fluente)",
    "template": "ats"
  },
  "firefighters": {
    "contact": {
      "name": "Tyler Grant",
      "title": "Bombeiro / EMT",
      "email": "tyler.grant@example.com",
      "phone": "+1 (555) 010-0127",
      "location": "Tucson, AZ",
      "website": ""
    },
    "summary": "Bombeiro e EMT com 7 anos de experiência em supressão de incêndios, salvamento e resposta médica de emergência. Respondeu a mais de 900 chamadas, incluindo incêndios em estruturas, salvamentos de veículos e emergências médicas. Formado em HazMat, com um registro de segurança limpo.",
    "experience": [
      {
        "role": "Bombeiro / EMT",
        "company": "Tucson Fire Department",
        "location": "Tucson, AZ",
        "start": "mar. de 2020",
        "end": "",
        "current": true,
        "points": "Responder a mais de 900 chamadas de incêndio, salvamento e médicas num distrito de 3 quartéis\nPrestar cuidados médicos de emergência como EMT certificado em 60% das chamadas\nFormado em HazMat; liderar a descontaminação em incidentes químicos\nFormar novos recrutas no manuseamento de mangueiras, escadas e técnicas de busca"
      },
      {
        "role": "Bombeiro Voluntário",
        "company": "Rural Metro Fire District",
        "location": "Tucson, AZ",
        "start": "jun. de 2018",
        "end": "fev. de 2020",
        "current": false,
        "points": "Respondeu a incêndios em zonas selvagens e em estruturas como voluntário\nConcluiu a formação de Bombeiro I & II e EMT-Basic\nAjudou a realizar sessões comunitárias de segurança contra incêndios em escolas"
      }
    ],
    "education": [
      {
        "school": "Pima Community College",
        "degree": "Certificado",
        "field": "Ciência do Fogo",
        "start": "2017",
        "end": "2018",
        "notes": "Bombeiro I & II. Certificado EMT-Basic. Formado em Operações HazMat."
      }
    ],
    "skills": "Supressão de incêndios e salvamento\nCuidados médicos de emergência (EMT)\nOperações HazMat\nEscadas, mangueiras e ventilação\nSegurança contra incêndios na comunidade\nTrabalho em equipe sob pressão",
    "languages": "Inglês (fluente)",
    "template": "ats"
  },
  "plumbers": {
    "contact": {
      "name": "Frank Miller",
      "title": "Canalizador Licenciado",
      "email": "frank.miller@example.com",
      "phone": "+1 (555) 010-0128",
      "location": "Nashville, TN",
      "website": ""
    },
    "summary": "Canalizador mestre licenciado com 11 anos de experiência em canalização residencial e comercial. Concluiu mais de 600 trabalhos por ano, de instalações em bruto a caldeiras, com uma taxa de reparação à primeira visita de 98%. Competente em montagem de tubos, limpeza de esgotos e conformidade com as normas.",
    "experience": [
      {
        "role": "Canalizador Mestre",
        "company": "Music City Plumbing Co.",
        "location": "Nashville, TN",
        "start": "jan. de 2019",
        "end": "",
        "current": true,
        "points": "Concluir mais de 600 trabalhos residenciais e comerciais por ano\nInstalar caldeiras, esquentadores e instalações completas de casas de banho\nManter uma taxa de reparação à primeira visita de 98% nas chamadas de serviço\nSupervisionar 3 aprendizes e aprovar o seu trabalho"
      },
      {
        "role": "Canalizador Oficial",
        "company": "Tennessee Pipe & Drain",
        "location": "Nashville, TN",
        "start": "jun. de 2014",
        "end": "dez. de 2018",
        "current": false,
        "points": "Fez a canalização de obras novas em mais de 40 casas por ano\nDesobstruiu esgotos e reparou fugas em habitações e restaurantes\nAprendeu instalação de gás e prevenção de refluxo"
      }
    ],
    "education": [
      {
        "school": "Nashville State Community College",
        "degree": "Certificado",
        "field": "Tecnologia de Canalização",
        "start": "2013",
        "end": "2014",
        "notes": "Licença de canalizador mestre (Tennessee). Certificado em prevenção de refluxo."
      }
    ],
    "skills": "Canalização residencial e comercial\nMontagem de tubos e soldadura\nLimpeza de esgotos e inspeção por câmera\nInstalação de caldeiras e esquentadores\nInstalação de gás\nConformidade com o código de canalização",
    "languages": "Inglês (fluente)",
    "template": "ats"
  },
  "carpenters": {
    "contact": {
      "name": "Joseph Baker",
      "title": "Carpinteiro Oficial",
      "email": "joseph.baker@example.com",
      "phone": "+1 (555) 010-0129",
      "location": "Portland, OR",
      "website": ""
    },
    "summary": "Carpinteiro oficial com 9 anos de experiência em estruturas, acabamentos e marcenaria à medida. Construiu estruturas de mais de 30 casas e instalou cozinhas em mais de 60 habitações, com reputação de medições exatas e acabamentos limpos. Competente na leitura de plantas e no trabalho segundo as normas.",
    "experience": [
      {
        "role": "Carpinteiro Oficial",
        "company": "Cascade Custom Homes",
        "location": "Portland, OR",
        "start": "fev. de 2019",
        "end": "",
        "current": true,
        "points": "Construir estruturas de mais de 30 casas e instalar cozinhas em mais de 60 habitações\nConstruir marcenaria e acabamentos à medida com tolerância de 1/16 polegadas\nLer e seguir plantas arquitetónicas, assinalando erros antes de custarem dinheiro\nFormar 2 aprendizes em técnicas de estruturas e acabamentos"
      },
      {
        "role": "Aprendiz de Carpinteiro",
        "company": "Rose City Remodeling",
        "location": "Portland, OR",
        "start": "jun. de 2016",
        "end": "jan. de 2019",
        "current": false,
        "points": "Apoiou estruturas, placas de gesso e pavimentos em remodelações\nAprendeu a usar serras, tupias e pistolas de pregos em segurança\nConcluiu 8,000 horas de aprendizagem e passou no exame de oficial"
      }
    ],
    "education": [
      {
        "school": "Portland Community College",
        "degree": "Certificado",
        "field": "Carpintaria",
        "start": "2015",
        "end": "2016",
        "notes": "Carpinteiro oficial. Certificado OSHA 10."
      }
    ],
    "skills": "Estruturas e trabalho estrutural\nCarpintaria de acabamento e remates\nMarcenaria à medida\nLeitura de plantas arquitetónicas\nFerramentas elétricas e segurança\nPlacas de gesso e pavimentos",
    "languages": "Inglês (fluente)",
    "template": "ats"
  },
  "secondary-school-teachers": {
    "contact": {
      "name": "Katherine Moore",
      "title": "Professor do Ensino Secundário (Matemática)",
      "email": "katherine.moore@example.com",
      "phone": "+1 (555) 010-0130",
      "location": "Manchester, NH",
      "website": ""
    },
    "summary": "Professor do ensino secundário com 8 anos de experiência a lecionar matemática aos anos 9-12. Elevou as taxas de aprovação em álgebra de 64% para 83% e treina a equipe de matemática até 2 finais estaduais. Competente em ensino diferenciado, preparação para exames e comunicação com os pais.",
    "experience": [
      {
        "role": "Professor de Matemática (Anos 9-12)",
        "company": "Central High School",
        "location": "Manchester, NH",
        "start": "ago. de 2019",
        "end": "",
        "current": true,
        "points": "Lecionar álgebra, geometria e pré-cálculo a 120 alunos em 5 turmas\nElevou as taxas de aprovação em álgebra de 64% para 83% em 3 anos\nTreinar a equipe de matemática até 2 finais estaduais\nDar explicações pós-escolares a 30 alunos por semana"
      },
      {
        "role": "Professor de Matemática (Anos 9-10)",
        "company": "Westside High School",
        "location": "Manchester, NH",
        "start": "ago. de 2017",
        "end": "jun. de 2019",
        "current": false,
        "points": "Lecionou álgebra e geometria a 100 alunos por ano\nIntroduziu questionários semanais que reduziram as falhas nos trabalhos de casa para metade\nOrganizou a primeira feira de matemática da escola, com 200 alunos"
      }
    ],
    "education": [
      {
        "school": "University of New Hampshire",
        "degree": "BS",
        "field": "Ensino da Matemática",
        "start": "2013",
        "end": "2017",
        "notes": "Licença estadual de ensino (New Hampshire, anos 7-12, matemática)."
      }
    ],
    "skills": "Ensino de matemática (álgebra a pré-cálculo)\nPreparação para exames\nEnsino diferenciado\nGestão da sala de aula\nComunicação com os pais\nGoogle Classroom e Desmos",
    "languages": "Inglês (fluente)",
    "template": "classic"
  },
  "preschool-teachers": {
    "contact": {
      "name": "Amanda Clark",
      "title": "Educador de Infância",
      "email": "amanda.clark@example.com",
      "phone": "+1 (555) 010-0131",
      "location": "Raleigh, NC",
      "website": ""
    },
    "summary": "Educador de infância com 6 anos de experiência a cuidar de crianças dos 3-5 anos. Competente em aprendizagem através da brincadeira, orientação do comportamento e comunicação com os pais. Criou um programa de fonética que elevou os resultados de prontidão escolar em toda a turma.",
    "experience": [
      {
        "role": "Educador de Infância",
        "company": "Little Oaks Early Learning",
        "location": "Raleigh, NC",
        "start": "ago. de 2020",
        "end": "",
        "current": true,
        "points": "Ensinar e cuidar de uma turma de 18 crianças dos 3-5 anos\nCriou um programa de fonética que elevou os resultados de prontidão escolar em toda a turma\nPlanear temas semanais, trabalhos manuais e brincadeiras ao ar livre\nPartilhar atualizações diárias e relatórios trimestrais de progresso com os pais"
      },
      {
        "role": "Educador de Infância Assistente",
        "company": "Sunshine Daycare Center",
        "location": "Raleigh, NC",
        "start": "jun. de 2018",
        "end": "jul. de 2020",
        "current": false,
        "points": "Apoiou o educador principal com uma turma de 20 crianças\nFez diariamente a hora do conto, canções e atividades artísticas\nManteve os registros de segurança e higiene segundo as normas estaduais"
      }
    ],
    "education": [
      {
        "school": "Wake Technical Community College",
        "degree": "Grau de Associado",
        "field": "Educação de Infância",
        "start": "2016",
        "end": "2018",
        "notes": "Credencial de Associado de Desenvolvimento Infantil (CDA). Certificado em primeiros socorros e RCP."
      }
    ],
    "skills": "Aprendizagem através da brincadeira\nOrientação do comportamento\nFonética e literacia inicial\nComunicação com os pais\nSegurança na sala de aula\nPlaneamento de artes e trabalhos manuais",
    "languages": "Inglês (fluente)",
    "template": "classic"
  },
  "social-workers": {
    "contact": {
      "name": "Danielle Reed",
      "title": "Assistente Social de Crianças e Famílias",
      "email": "danielle.reed@example.com",
      "phone": "+1 (555) 010-0132",
      "location": "Cleveland, OH",
      "website": ""
    },
    "summary": "Assistente social licenciado com 7 anos de experiência a apoiar crianças e famílias. Gere um conjunto de 25 famílias, coordena serviços entre escolas e prestadores de saúde, e preenche relatórios judiciais em que os juízes confiam. Competente em avaliação, apoio em crises e proteção.",
    "experience": [
      {
        "role": "Assistente Social de Crianças e Famílias",
        "company": "Cuyahoga County Family Services",
        "location": "Cleveland, OH",
        "start": "jan. de 2020",
        "end": "",
        "current": true,
        "points": "Gerir um conjunto de 25 famílias, visitando casas e escolas semanalmente\nPreencher relatórios judiciais e prestar depoimento no tribunal de família\nCoordenar apoio em habitação, saúde e escola para famílias vulneráveis\nReduziu o tempo de espera das avaliações em 20% com um novo sistema de triagem"
      },
      {
        "role": "Técnico de Casos",
        "company": "Hope House Shelter",
        "location": "Cleveland, OH",
        "start": "jul. de 2018",
        "end": "dez. de 2019",
        "current": false,
        "points": "Apoiou mais de 40 famílias em habitação temporária com benefícios e encaminhamentos\nRealizou workshops semanais de parentalidade e orçamentação\nManteve as notas dos casos exatas para auditorias e relatórios de financiamento"
      }
    ],
    "education": [
      {
        "school": "Case Western Reserve University",
        "degree": "MSW",
        "field": "Serviço Social",
        "start": "2016",
        "end": "2018",
        "notes": "Assistente Social Licenciado (Ohio). Formação em bem-estar infantil e sistemas familiares."
      }
    ],
    "skills": "Gestão de casos (25 famílias)\nProteção de crianças\nRelatórios para o tribunal de família\nApoio em crises\nCoordenação multiagências\nEncaminhamentos para benefícios e habitação",
    "languages": "Inglês (fluente)",
    "template": "classic"
  },
  "paralegals": {
    "contact": {
      "name": "Stephanie Cole",
      "title": "Assistente Jurídico",
      "email": "stephanie.cole@example.com",
      "phone": "+1 (555) 010-0133",
      "location": "Houston, TX",
      "website": ""
    },
    "summary": "Assistente jurídico com 6 anos de experiência em apoio a contencioso e processos empresariais. Gere a descoberta de mais de 30 processos, redige articulados e contratos, e mantém os prazos de apresentação com um registro de 100% de pontualidade. Competente em Westlaw, e-discovery e software de gestão de processos.",
    "experience": [
      {
        "role": "Assistente Jurídico",
        "company": "Gulf Coast Law Firm",
        "location": "Houston, TX",
        "start": "fev. de 2021",
        "end": "",
        "current": true,
        "points": "Gerir a descoberta de mais de 30 processos de contencioso, revendo mais de 10,000 documentos\nRedigir articulados, requerimentos e contratos para revisão do advogado\nManter um registro de 100% de pontualidade em processos judiciais e prazos\nCoordenar testemunhas e preparar dossiês de julgamento"
      },
      {
        "role": "Assistente Jurídico",
        "company": "Harris County Legal Aid",
        "location": "Houston, TX",
        "start": "ago. de 2019",
        "end": "jan. de 2021",
        "current": false,
        "points": "Entrevistas de admissão a mais de 20 clientes por semana\nPreparou formulários e processos para casos de habitação e família\nTraduziu documentos jurídicos para clientes de língua espanhola"
      }
    ],
    "education": [
      {
        "school": "Houston Community College",
        "degree": "Grau de Associado",
        "field": "Estudos Paralegais",
        "start": "2017",
        "end": "2019",
        "notes": "Assistente Jurídico Certificado NALA (CP). Programa aprovado pela ABA."
      }
    ],
    "skills": "Apoio a contencioso e descoberta\nRedação jurídica\nE-discovery (Relativity)\nGestão de casos (Clio)\nProcessos judiciais e prazos\nPesquisa jurídica (Westlaw)",
    "languages": "Inglês (fluente)\nEspanhol (fluente)",
    "template": "professional"
  },
  "bookkeeping-clerks": {
    "contact": {
      "name": "Thomas Gray",
      "title": "Escriturário de Contabilidade",
      "email": "thomas.gray@example.com",
      "phone": "+1 (555) 010-0134",
      "location": "Kansas City, MO",
      "website": ""
    },
    "summary": "Escriturário de contabilidade com 5 anos de experiência em contas a pagar, faturação e reconciliações bancárias. Processa mais de 300 faturas por mês com 99.8% de exatidão e mantém os livros limpos para o fecho do mês. Competente em QuickBooks, Excel e apoio aos salários.",
    "experience": [
      {
        "role": "Escriturário de Contabilidade",
        "company": "Heartland Distribution Co.",
        "location": "Kansas City, MO",
        "start": "abr. de 2021",
        "end": "",
        "current": true,
        "points": "Processar mais de 300 faturas de fornecedores por mês com 99.8% de exatidão\nReconciliar 6 contas bancárias semanalmente e assinalar diferenças no próprio dia\nPreparar dados salariais de 45 funcionários e cobrar pagamentos de clientes em atraso\nManter os registros arrumados para a auditoria de fim de ano, com zero conclusões"
      },
      {
        "role": "Assistente de Contas",
        "company": "Prairie State Office Supplies",
        "location": "Kansas City, MO",
        "start": "jun. de 2019",
        "end": "mar. de 2021",
        "current": false,
        "points": "Introduziu diariamente faturas de vendas e recibos no QuickBooks\nRespondeu a perguntas de fornecedores sobre pagamentos por telefone e email\nArquivou documentação e manteve o arquivo atualizado"
      }
    ],
    "education": [
      {
        "school": "Metropolitan Community College",
        "degree": "Certificado",
        "field": "Escrituração",
        "start": "2018",
        "end": "2019",
        "notes": "Usuário Certificado QuickBooks."
      }
    ],
    "skills": "Contas a pagar e a receber\nReconciliações bancárias\nFaturação (300+ por mês)\nQuickBooks e Excel\nApoio aos salários\nIntrodução de dados (65 ppm)",
    "languages": "Inglês (fluente)",
    "template": "ats"
  },
  "administrative-assistants": {
    "contact": {
      "name": "Lisa Turner",
      "title": "Assistente Administrativo",
      "email": "lisa.turner@example.com",
      "phone": "+1 (555) 010-0135",
      "location": "Charlotte, NC",
      "website": ""
    },
    "summary": "Assistente administrativo com 6 anos de experiência a manter escritórios a funcionar sem problemas. Gere agendas de 4 gestores, organiza viagens e reuniões, e trata mais de 100 emails por dia. Conhecido pelo rigor, pela discrição e pela calma sob pressão de prazos.",
    "experience": [
      {
        "role": "Assistente Administrativo",
        "company": "Queen City Consulting",
        "location": "Charlotte, NC",
        "start": "jan. de 2021",
        "end": "",
        "current": true,
        "points": "Gerir agendas, viagens e reuniões de 4 gestores seniores\nTratar mais de 100 emails por dia, redigindo respostas e assinalando prioridades\nPreparar documentos do conselho e fazer atas em reuniões mensais\nGerir material de escritório e encomendas a fornecedores, reduzindo os custos em 12%"
      },
      {
        "role": "Rececionista",
        "company": "Carolina Dental Group",
        "location": "Charlotte, NC",
        "start": "ago. de 2019",
        "end": "dez. de 2020",
        "current": false,
        "points": "Recebeu mais de 60 pacientes por dia e geriu a agenda de marcações\nAtendeu telefones e tratou de perguntas sobre seguros\nManteve os registros dos pacientes exatos e confidenciais"
      }
    ],
    "education": [
      {
        "school": "Central Piedmont Community College",
        "degree": "Grau de Associado",
        "field": "Administração de Escritório",
        "start": "2017",
        "end": "2019",
        "notes": "Especialista em Microsoft Office (Word, Excel)."
      }
    ],
    "skills": "Gestão de agendas e viagens\nEmail e correspondência\nAtas de reuniões\nMicrosoft Office (Word, Excel, Outlook)\nIntrodução de dados (70 ppm)\nMaterial de escritório e fornecedores",
    "languages": "Inglês (fluente)",
    "template": "minimal"
  },
  "bank-tellers": {
    "contact": {
      "name": "Natalie Hughes",
      "title": "Caixa Bancário",
      "email": "natalie.hughes@example.com",
      "phone": "+1 (555) 010-0136",
      "location": "Salt Lake City, UT",
      "website": ""
    },
    "summary": "Caixa bancário com 4 anos de experiência a atender mais de 80 clientes por dia com rigor e atenção. Caixa equilibrada ao cêntimo ao longo de 3 anos, com zero faltas. Competente em depósitos, levantamentos, verificações de fraude e encaminhamento de clientes para os produtos certos.",
    "experience": [
      {
        "role": "Caixa Bancário",
        "company": "Wasatch Community Bank",
        "location": "Salt Lake City, UT",
        "start": "mar. de 2022",
        "end": "",
        "current": true,
        "points": "Atender mais de 80 clientes por dia: depósitos, levantamentos, pagamentos e transferências\nCaixa equilibrada ao cêntimo durante 3 anos, com zero faltas\nDetetar e travar 12 tentativas de fraude, poupando aos clientes mais de $90,000\nEncaminhar clientes para produtos de poupança e empréstimos, cumprindo trimestralmente os objetivos de referência"
      },
      {
        "role": "Associado de Atendimento ao Cliente",
        "company": "Mountain West Credit Union",
        "location": "Salt Lake City, UT",
        "start": "jun. de 2021",
        "end": "fev. de 2022",
        "current": false,
        "points": "Abriu novas contas e emitiu cartões de débito para membros\nRespondeu a perguntas telefónicas sobre saldos e extratos\nAjudou membros a configurar a banca online e móvel"
      }
    ],
    "education": [
      {
        "school": "Salt Lake Community College",
        "degree": "Grau de Associado",
        "field": "Gestão",
        "start": "2019",
        "end": "2021",
        "notes": ""
      }
    ],
    "skills": "Manuseamento e equilíbrio de dinheiro\nDepósitos, levantamentos e pagamentos\nDeteção de fraude\nAtendimento ao cliente\nSoftware bancário (Fiserv)\nReferências de produtos",
    "languages": "Inglês (fluente)",
    "template": "ats"
  },
  "sales-managers": {
    "contact": {
      "name": "Christopher Evans",
      "title": "Gestor de Vendas",
      "email": "christopher.evans@example.com",
      "phone": "+1 (555) 010-0137",
      "location": "Dallas, TX",
      "website": ""
    },
    "summary": "Gestor de vendas com 10 anos de experiência a liderar equipes de até 15 representantes. Fez crescer a receita regional de $4M para $7.5M em 3 anos, elevou a taxa de sucesso de 22% para 34% e reduziu a rotatividade de representantes para metade com melhor acompanhamento e integração.",
    "experience": [
      {
        "role": "Gestor Regional de Vendas",
        "company": "Lone Star Industrial Supply",
        "location": "Dallas, TX",
        "start": "jan. de 2021",
        "end": "",
        "current": true,
        "points": "Liderar uma equipe de 15 representantes de vendas no Texas e em Oklahoma\nFez crescer a receita regional de $4M para $7.5M em 3 anos\nElevou a taxa de sucesso de 22% para 34% com melhor acompanhamento e revisões de pipeline\nReduziu a rotatividade de representantes para metade com um novo programa de integração"
      },
      {
        "role": "Representante de Vendas",
        "company": "Southwest Equipment Co.",
        "location": "Dallas, TX",
        "start": "jun. de 2015",
        "end": "dez. de 2020",
        "current": false,
        "points": "Vendeu equipamento industrial a mais de 80 contas, cumprindo a quota durante 5 anos seguidos\nMelhor representante da região durante 3 anos seguidos\nCriou uma rede de referências que trouxe 25% dos novos negócios"
      }
    ],
    "education": [
      {
        "school": "Texas A&M University",
        "degree": "BBA",
        "field": "Marketing",
        "start": "2011",
        "end": "2015",
        "notes": "Formação em gestão de vendas e negociação."
      }
    ],
    "skills": "Liderança de equipe de vendas (15 representantes)\nCrescimento e previsão de receitas\nGestão de pipeline (Salesforce)\nAcompanhamento e integração\nNegociação\nPlaneamento de território",
    "languages": "Inglês (fluente)",
    "template": "executive"
  },
  "construction-managers": {
    "contact": {
      "name": "William Ross",
      "title": "Gestor de Construção",
      "email": "william.ross@example.com",
      "phone": "+1 (555) 010-0138",
      "location": "Atlanta, GA",
      "website": ""
    },
    "summary": "Gestor de construção com 12 anos de experiência na entrega de projetos comerciais e residenciais no valor de até $12M. Concluiu mais de 20 projetos com uma taxa de pontualidade de 95%, zero acidentes com baixa nas suas obras e orçamentos mantidos dentro de 3%. Competente em planeamento, gestão de subempreiteiros e segurança.",
    "experience": [
      {
        "role": "Gestor de Construção",
        "company": "Peachtree Builders Group",
        "location": "Atlanta, GA",
        "start": "fev. de 2020",
        "end": "",
        "current": true,
        "points": "Entregar projetos comerciais e residenciais no valor de até $12M\nConcluiu mais de 20 projetos com uma taxa de pontualidade de 95% e orçamentos dentro de 3%\nGerir mais de 30 subempreiteiros e 50 trabalhadores em 3 obras ativas\nZero acidentes com baixa em todos os locais em 4 anos"
      },
      {
        "role": "Supervisor de Obra",
        "company": "Georgia Commercial Contractors",
        "location": "Atlanta, GA",
        "start": "jun. de 2013",
        "end": "jan. de 2020",
        "current": false,
        "points": "Dirigiu as operações diárias de obra em construções de escritórios e retalho\nCoordenou entregas, inspeções e cronogramas de subempreiteiros\nManteve os registros de segurança limpos e passou em todas as inspeções OSHA"
      }
    ],
    "education": [
      {
        "school": "Georgia Institute of Technology",
        "degree": "BS",
        "field": "Construção Civil",
        "start": "2009",
        "end": "2013",
        "notes": "Certificado OSHA 30. Candidato a CCM (Certified Construction Manager)."
      }
    ],
    "skills": "Agendamento de projetos (MS Project, Procore)\nControlo orçamental\nGestão de subempreiteiros\nSegurança em obra (OSHA 30)\nLeitura de plantas\nRelatórios para clientes",
    "languages": "Inglês (fluente)",
    "template": "professional"
  },
  "medical-assistants": {
    "contact": {
      "name": "Jennifer Ortiz",
      "title": "Assistente Médico Certificado",
      "email": "jennifer.ortiz@example.com",
      "phone": "+1 (555) 010-0139",
      "location": "San Antonio, TX",
      "website": ""
    },
    "summary": "Assistente médico certificado com 5 anos de experiência em medicina familiar e urgências. Recebe mais de 25 pacientes por dia, mede sinais vitais, recolhe sangue e gere a recepção com uma pontuação de satisfação dos pacientes de 97%. Competente em EHR, flebotomia e verificações de seguros.",
    "experience": [
      {
        "role": "Assistente Médico Certificado",
        "company": "Alamo Family Practice",
        "location": "San Antonio, TX",
        "start": "abr. de 2021",
        "end": "",
        "current": true,
        "points": "Receber mais de 25 pacientes por dia: sinais vitais, historiais e preparação para exames\nRecolher sangue e realizar análises laboratoriais básicas com uma taxa de acerto à primeira picada de 99%\nGerir a recepção, os agendamentos e as verificações de seguros\nManter uma pontuação de satisfação dos pacientes de 97% em mais de 800 inquéritos"
      },
      {
        "role": "Assistente Médico",
        "company": "Riverwalk Urgent Care",
        "location": "San Antonio, TX",
        "start": "ago. de 2019",
        "end": "mar. de 2021",
        "current": false,
        "points": "Fez a triagem de pacientes sem marcação e apoiou médicos em pequenos procedimentos\nAdministrou vacinas e tratou da recolha de amostras\nManteve as salas de exame abastecidas, limpas e prontas entre pacientes"
      }
    ],
    "education": [
      {
        "school": "San Antonio College",
        "degree": "Certificado",
        "field": "Assistência Médica",
        "start": "2018",
        "end": "2019",
        "notes": "Assistente Médico Certificado (CMA, AAMA). Certificado em BLS. Formado em flebotomia."
      }
    ],
    "skills": "Admissão de pacientes e sinais vitais\nFlebotomia\nEHR (eClinicalWorks)\nVacinações\nVerificação de seguros\nGestão de recepção",
    "languages": "Inglês (fluente)\nEspanhol (fluente)",
    "template": "professional"
  },
  "level-student": {
    "contact": {
      "name": "Alex Morgan",
      "title": "Estudante",
      "email": "alex.morgan@example.com",
      "phone": "+1 (555) 010-0140",
      "location": "Austin, TX",
      "website": ""
    },
    "summary": "Finalista do ensino secundário motivado, com boas notas e experiência de trabalho a tempo parcial. Aprende depressa, é fiável e dá-se bem com as pessoas. Procura uma primeira função a tempo inteiro ou um trabalho a tempo parcial em paralelo com a faculdade.",
    "experience": [
      {
        "role": "Assistente de Vendas a Tempo Parcial",
        "company": "Campus Corner Store",
        "location": "Austin, TX",
        "start": "set. de 2024",
        "end": "",
        "current": true,
        "points": "Atender mais de 50 clientes por turno aos fins de semana e depois da escola\nManusear dinheiro, repor prateleiras e manter os expositores arrumados\nDe confiança para abrir a loja nas manhãs de sábado"
      },
      {
        "role": "Tutor Voluntário",
        "company": "Austin Youth Centre",
        "location": "Austin, TX",
        "start": "jan. de 2024",
        "end": "jun. de 2025",
        "current": false,
        "points": "Deu explicações de matemática a alunos mais novos duas vezes por semana\nAjudou a organizar o programa de leitura de verão para 40 crianças"
      }
    ],
    "education": [
      {
        "school": "Austin High School",
        "degree": "Diploma do Ensino Secundário",
        "field": "",
        "start": "2022",
        "end": "2026",
        "notes": "GPA 3.6. Quadro de honra, 3 anos. Capitão da equipe de debate."
      }
    ],
    "skills": "Atendimento ao cliente\nManuseamento de dinheiro\nTrabalho em equipe\nGestão de tempo\nMicrosoft Office\nFalar em público (equipe de debate)",
    "languages": "Inglês (fluente)",
    "template": "minimal"
  },
  "level-fresher": {
    "contact": {
      "name": "Jamie Lee",
      "title": "Recent Graduate \u2014 Business Administration",
      "email": "jamie.lee@example.com",
      "phone": "+1 (555) 010-0141",
      "location": "Chicago, IL",
      "website": ""
    },
    "summary": "Recém-formado em administração de empresas com experiência de estágio em marketing e operações. Organizou um concurso de negócios universitário com 200 participantes e concluiu um estágio de 6 meses onde reduziu o tempo de relatórios para metade. Ansioso por começar uma carreira a tempo inteiro e aprender depressa.",
    "experience": [
      {
        "role": "Estagiário de Marketing",
        "company": "Lakefront Media Group",
        "location": "Chicago, IL",
        "start": "jan. de 2025",
        "end": "jun. de 2025",
        "current": false,
        "points": "Geriu as contas sociais da empresa, fazendo crescer os seguidores de 2,000 para 6,500\nCriou um painel de relatórios que reduziu o tempo de relatórios semanais para metade\nEscreveu 20 artigos de blogue que trouxeram mais de 15,000 leituras"
      },
      {
        "role": "Responsável Voluntário de Eventos",
        "company": "University Business Society",
        "location": "Chicago, IL",
        "start": "set. de 2024",
        "end": "mai. de 2025",
        "current": false,
        "points": "Organizou um concurso de negócios com 200 participantes e 12 jurados\nGeriu um orçamento de $5,000 e uma equipe de 8 voluntários"
      }
    ],
    "education": [
      {
        "school": "DePaul University",
        "degree": "BBA",
        "field": "Administração de Empresas",
        "start": "2021",
        "end": "2025",
        "notes": "GPA 3.5. Dean's List, 2 anos. Projeto de final de ano sobre marketing para pequenas empresas."
      }
    ],
    "skills": "Marketing nas redes sociais\nExcel e Google Sheets\nCompetências de apresentação\nOrganização de eventos\nTrabalho em equipe\nAnálise de dados básica",
    "languages": "Inglês (fluente)",
    "template": "modern"
  },
  "level-entry-level": {
    "contact": {
      "name": "Taylor Brooks",
      "title": "Associado de Marketing Júnior",
      "email": "taylor.brooks@example.com",
      "phone": "+1 (555) 010-0142",
      "location": "Denver, CO",
      "website": ""
    },
    "summary": "Associado de marketing júnior com 2 anos de experiência em conteúdos, email e redes sociais. Fez crescer a newsletter de um cliente de 1,000 para 4,000 subscritores e realiza campanhas com uma taxa média de abertura de 22%. Pronto para mais responsabilidade e uma carteira maior de contas.",
    "experience": [
      {
        "role": "Associado de Marketing Júnior",
        "company": "Mile High Digital",
        "location": "Denver, CO",
        "start": "jul. de 2024",
        "end": "",
        "current": true,
        "points": "Fez crescer a newsletter de um cliente de 1,000 para 4,000 subscritores em 14 meses\nEscrever e agendar 12 publicações sociais por semana para 4 clientes\nRealizar campanhas de email com uma taxa média de abertura de 22%\nReportar mensalmente os resultados das campanhas aos clientes"
      },
      {
        "role": "Estagiário de Marketing",
        "company": "Rocky Mountain Retail",
        "location": "Denver, CO",
        "start": "jan. de 2024",
        "end": "jun. de 2024",
        "current": false,
        "points": "Escreveu descrições de produtos para mais de 200 itens no website da empresa\nAjudou a realizar uma campanha de saldos de primavera que aumentou as encomendas online em 15%"
      }
    ],
    "education": [
      {
        "school": "University of Colorado Boulder",
        "degree": "BA",
        "field": "Comunicação",
        "start": "2020",
        "end": "2024",
        "notes": "GPA 3.4. Formação em marketing digital e escrita para média."
      }
    ],
    "skills": "Redação de conteúdos\nMarketing por email (Mailchimp)\nGestão de redes sociais\nGoogle Analytics\nCanva\nRelatórios para clientes",
    "languages": "Inglês (fluente)",
    "template": "classic"
  },
  "level-mid-career": {
    "contact": {
      "name": "Jordan Patel",
      "title": "Supervisor de Operações",
      "email": "jordan.patel@example.com",
      "phone": "+1 (555) 010-0143",
      "location": "Houston, TX",
      "website": ""
    },
    "summary": "Supervisor de operações com 8 anos de experiência a dirigir equipes de armazém de 20-30 pessoas. Reduziu os erros de recolha em 30%, elevou a expedição pontual de 90% para 97% e formou 15 novos colegas. Pronto para uma função de gestor de operações com um local e orçamento maiores.",
    "experience": [
      {
        "role": "Supervisor de Operações",
        "company": "Gulf Coast Logistics",
        "location": "Houston, TX",
        "start": "mar. de 2021",
        "end": "",
        "current": true,
        "points": "Supervisionar 25 funcionários de armazém em 2 turnos num local de 90,000 pés quadrados\nReduziu os erros de recolha em 30% com novas rotinas de verificação e leitura de códigos de barras\nElevou a expedição pontual de 90% para 97% em 2 anos\nFormou 15 novos colegas e promoveu 3 a funções de chefia de equipe"
      },
      {
        "role": "Chefe de Equipe",
        "company": "Bayou Freight Services",
        "location": "Houston, TX",
        "start": "jun. de 2017",
        "end": "fev. de 2021",
        "current": false,
        "points": "Liderou uma equipe de 10 recolhedores e embaladores no turno da noite\nIntroduziu uma escala que reduziu as horas extraordinárias em 20% sem falhar prazos\nDeu instruções de segurança e manteve a equipe sem acidentes durante 2 anos"
      }
    ],
    "education": [
      {
        "school": "University of Houston",
        "degree": "BBA",
        "field": "Gestão da Cadeia de Abastecimento",
        "start": "2013",
        "end": "2017",
        "notes": "Six Sigma Yellow Belt."
      }
    ],
    "skills": "Liderança de equipes (25 funcionários)\nOperações de armazém\nMelhoria de processos\nGestão de segurança\nControlo de inventário\nWMS e Excel",
    "languages": "Inglês (fluente)\nHindi (conversacional)",
    "template": "professional"
  },
  "level-senior": {
    "contact": {
      "name": "Morgan Reyes",
      "title": "Gestor de Projetos Sénior",
      "email": "morgan.reyes@example.com",
      "phone": "+1 (555) 010-0144",
      "location": "Seattle, WA",
      "website": ""
    },
    "summary": "Gestor de projetos sénior com 14 anos de experiência na entrega de projetos de software no valor de até $8M. Liderou mais de 30 projetos com uma taxa de pontualidade de 92%, criou um PMO a partir do zero e orientou 10 gestores de projetos. Conhecido pela entrega calma sob pressão e pelos relatórios honestos aos executivos.",
    "experience": [
      {
        "role": "Gestor de Projetos Sénior",
        "company": "Pacific Northwest Tech",
        "location": "Seattle, WA",
        "start": "jan. de 2019",
        "end": "",
        "current": true,
        "points": "Entregar projetos de software no valor de até $8M com uma taxa de entregas pontuais de 92%\nCriou o PMO da empresa a partir do zero: modelos, relatórios e governação\nOrientar 10 gestores de projetos e dirigir a comunidade mensal de GP\nReportar diretamente ao CTO sobre um programa de 40 pessoas"
      },
      {
        "role": "Gestor de Projetos",
        "company": "Cascade Software Group",
        "location": "Seattle, WA",
        "start": "jun. de 2012",
        "end": "dez. de 2018",
        "current": false,
        "points": "Geriu mais de 20 projetos para clientes de retalho e saúde\nIntroduziu práticas Agile que reduziram o tempo de entrega em 25%\nFez crescer 2 contas-chave de $500k para $2M em receita anual"
      }
    ],
    "education": [
      {
        "school": "University of Washington",
        "degree": "BS",
        "field": "Sistemas de Informação",
        "start": "2008",
        "end": "2012",
        "notes": "Certificado PMP (2015). Certified ScrumMaster. Formação de MBA (2018-2019, incompleta)."
      }
    ],
    "skills": "Entrega de programas e projetos\nConfiguração e governação do PMO\nAgile e Waterfall\nControlo orçamental ($8M)\nRelatórios executivos\nMentoria de equipes",
    "languages": "Inglês (fluente)\nEspanhol (conversacional)",
    "template": "compact"
  },
  "level-executive": {
    "contact": {
      "name": "Casey Bennett",
      "title": "Diretor de Operações",
      "email": "casey.bennett@example.com",
      "phone": "+1 (555) 010-0145",
      "location": "New York, NY",
      "website": ""
    },
    "summary": "Diretor de operações com 18 anos de experiência a expandir operações para empresas de retalho e logística. Fez crescer uma operação de 200 pessoas para 900 pessoas em 6 locais, elevou a margem EBITDA de 8% para 14% e liderou 2 aquisições. Experiência em relatórios ao conselho e relações com investidores.",
    "experience": [
      {
        "role": "Diretor de Operações",
        "company": "Harborline Retail Group",
        "location": "New York, NY",
        "start": "jan. de 2021",
        "end": "",
        "current": true,
        "points": "Dirigir operações para 900 pessoas em 6 locais e um orçamento de $180M\nElevou a margem EBITDA de 8% para 14% em 3 anos\nLiderou 2 aquisições e integrou ambas as equipes em 6 meses\nReportar mensalmente ao conselho sobre operações, risco e crescimento"
      },
      {
        "role": "Vice-Presidente de Operações",
        "company": "Metro Logistics Partners",
        "location": "New York, NY",
        "start": "jun. de 2014",
        "end": "dez. de 2020",
        "current": false,
        "points": "Expandiu as operações de 200 para 600 pessoas em 4 locais\nAbriu 3 centros de distribuição a tempo e abaixo do orçamento\nCriou a equipe de liderança que ainda hoje dirige o negócio"
      }
    ],
    "education": [
      {
        "school": "Columbia University",
        "degree": "MBA",
        "field": "Administração de Empresas",
        "start": "2010",
        "end": "2012",
        "notes": "BS em Economia, NYU (2006). Curso de governação de conselhos (2020)."
      }
    ],
    "skills": "Operações em escala (900 pessoas)\nResponsabilidade pelo P&L ($180M)\nFusões e aquisições\nRelatórios ao conselho\nEstratégia de crescimento\nConstrução de equipes de liderança",
    "languages": "Inglês (fluente)",
    "template": "executive"
  }
};
});
