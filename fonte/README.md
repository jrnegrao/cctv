# Código-fonte (backup)

Backup do código dos apps ExB do GeoAPUC (Experience Builder Developer Edition 1.19).
Esta pasta não faz parte das prévias: nada aqui é carregado pelo site.

## widgets/

Widgets próprios. No ExB eles ficam em `C:\ExB_1.19\client\your-extensions\widgets\<nome>`.

| Widget | App |
|---|---|
| `placar-cameras` | Monitoramento CCTV |
| `horarios-linha` | Mobilidade Urbana (tabela de horários, paradas, tempo real) |
| `servicos-passageiro` | Mobilidade Urbana (painel Serviços ao Passageiro) |
| `ficha-zona` | Ordenamento Territorial (Ficha da Zona e "Onde posso…?") |

**Como restaurar:**
1. Copie cada pasta de volta para `your-extensions\widgets`.
2. Reinicie o ExB (`Iniciar_ExB.bat`).

## notebooks/

Notebooks do ArcGIS Pro usados para publicar os dados e montar ou ajustar os apps. Para cada notebook, a versão de número mais alto é a mais recente.

As saídas foram apagadas antes do backup. Nenhuma senha está gravada: os notebooks usam o login ativo do Pro ou pedem a senha na hora.
