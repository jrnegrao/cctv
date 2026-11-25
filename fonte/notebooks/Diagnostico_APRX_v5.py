# -*- coding: utf-8 -*-
"""
Diagnostico_APRX_v5 - mede o "rastro" deixado pelos scripts no projeto (sem abrir o projeto).

1. Partes internas do .aprx e o tamanho de cada uma.
2. Notebooks e abas que o Pro tenta REABRIR ao abrir o projeto.
3. Tamanho do histórico de geoprocessamento.
4. Notebooks da pasta do projeto: tamanho e quantidade de saída guardada.
5. Metadados das camadas da gdb (se incharam com o registro de operações).

Não altera nada. Como rodar (Python Command Prompt do ArcGIS):
  python "C:\\Users\\negrao\\Documents\\ArcGIS\\Projects\\Exposicao_Inundacao_Apucarana\\Scripts\\Diagnostico_APRX_v5.py"
"""
import os, re, json, zipfile, glob

import sys
# Caminho do projeto: pode ser passado no comando (entre aspas); se não for, usa o do CCTV.
APRX = sys.argv[1] if len(sys.argv) > 1 else r"C:\Users\negrao\Documents\ArcGIS\Projects\Inundacao_DefesaCivil_v3\05_Project\ExB_CCTV\ExB_CCTV.aprx"
NOME = "Diagnostico_APRX_v5"
PASTA = os.path.dirname(APRX)
SAIDA = os.path.join(PASTA, "Saidas")
os.makedirs(SAIDA, exist_ok=True)
LOG_TXT = os.path.join(SAIDA, NOME + ".txt")
_LOG = open(LOG_TXT, "w", encoding="utf-8")


def p(*a):
    t = " ".join(str(x) for x in a)
    print(t, flush=True)
    _LOG.write(t + "\n")
    _LOG.flush()


def kb(n):
    return f"{n / 1024:,.0f} KB".replace(",", ".")


p("▶ Parte 1 iniciada: partes internas do .aprx (maiores primeiro)")
z = zipfile.ZipFile(APRX)
infos = sorted(z.infolist(), key=lambda i: i.file_size, reverse=True)
total = sum(i.file_size for i in infos)
p(f"   {len(infos)} partes · {kb(total)} descompactado")
for i in infos[:15]:
    p(f"   {kb(i.file_size):>10} · {i.filename}")
TEXTO = {i.filename: z.read(i.filename).decode("utf-8", errors="ignore") for i in infos}
gp = TEXTO.get("GISProject.json", "")
try:
    GP = json.loads(gp)
    p("   O que ocupa o GISProject.json (maiores primeiro):")
    partes = []
    for k, v in GP.items():
        tam = len(json.dumps(v, ensure_ascii=False))
        qtd = f" · {len(v)} itens" if isinstance(v, (list, dict)) else ""
        partes.append((tam, k, qtd))
    for tam, k, qtd in sorted(partes, reverse=True)[:12]:
        p(f"     {kb(tam):>10} · {k}{qtd}")
    for k, v in GP.items():
        if isinstance(v, list) and v and isinstance(v[0], dict):
            tipos = {}
            for it in v:
                t = str(it.get("type", "?"))
                tipos[t] = tipos.get(t, 0) + 1
            top = sorted(tipos.items(), key=lambda x: -x[1])[:6]
            if sum(tipos.values()) > 20:
                p(f"     tipos em {k}: {top}")
except Exception as e:
    p(f"   (não consegui detalhar o GISProject.json: {e})")
p("✔ Parte 1 concluída com sucesso.")

p("▶ Parte 2 iniciada: o que o Pro tenta reabrir ao abrir o projeto")
ipynb_refs = set()
for nome, txt in TEXTO.items():
    for m in re.findall(r"[^\"<>|]*?\.ipynb", txt, flags=re.I):
        ipynb_refs.add(m.replace("\\\\", "\\")[-160:])
p(f"   Notebooks citados dentro do projeto: {len(ipynb_refs)}")
nomes_nb = sorted({os.path.basename(r.replace("\\", "/")) for r in ipynb_refs})
p(f"   Notebooks diferentes: {len(nomes_nb)} (mostrando até 25)")
for r in nomes_nb[:25]:
    p(f"     - {r}")
pastas_nb = sorted({os.path.dirname(r) for r in ipynb_refs if os.path.dirname(r)})
p(f"   Pastas de onde vêm: {pastas_nb[:10]}")
for chave in ("CIMNotebook", "NotebookView", "\"views\"", "openViews", "OpenedView", "CIMTableView", "TableView", "CIMMapView", "CIMLayoutView"):
    n = sum(t.count(chave) for t in TEXTO.values())
    if n:
        p(f"   ocorrências de {chave}: {n}")
p("✔ Parte 2 concluída com sucesso.")

p("▶ Parte 3 iniciada: histórico de geoprocessamento guardado no projeto")
hist = 0
for nome, txt in TEXTO.items():
    n = len(re.findall(r"CIMGPHistory|GPHistoryItem|\"toolName\"|<ToolSource>", txt))
    if n:
        p(f"   {n} registros em {nome}")
        hist += n
p(f"   Total aproximado de registros de histórico: {hist}")
p("✔ Parte 3 concluída com sucesso.")

p("▶ Parte 4 iniciada: notebooks na pasta do projeto")
nbs = glob.glob(os.path.join(PASTA, "**", "*.ipynb"), recursive=True)
p(f"   {len(nbs)} notebooks")
linhas = []
for f in nbs:
    try:
        nb = json.load(open(f, encoding="utf-8"))
        saidas = sum(len(c.get("outputs", [])) for c in nb.get("cells", []))
    except Exception:
        saidas = -1
    linhas.append((os.path.getsize(f), saidas, f))
for tam, saidas, f in sorted(linhas, reverse=True)[:15]:
    p(f"   {kb(tam):>10} · {saidas:>4} blocos de saída · {os.path.relpath(f, PASTA)}")
p(f"   Total em notebooks: {kb(sum(l[0] for l in linhas))}")
arquivos = sum(len(fs) for _, _, fs in os.walk(PASTA))
p(f"   Arquivos na pasta do projeto (o Pro indexa todos): {arquivos}")
p("✔ Parte 4 concluída com sucesso.")

p("▶ Parte 5 iniciada: metadados das camadas da gdb")
gdbs = glob.glob(os.path.join(PASTA, "*.gdb"))
p(f"   gdbs na pasta do projeto: {[os.path.basename(g) for g in gdbs]}")
for gdb in gdbs:
    tam_gdb = sum(os.path.getsize(os.path.join(gdb, f)) for f in os.listdir(gdb))
    p(f"   gdb: {kb(tam_gdb)} · {len(os.listdir(gdb))} arquivos internos")
    try:
        import arcpy
        arcpy.env.workspace = gdb
        nomes = (arcpy.ListFeatureClasses() or []) + (arcpy.ListTables() or [])
        res = []
        for n in nomes:
            try:
                md = arcpy.metadata.Metadata(os.path.join(gdb, n))
                xml = md.xml or ""
                res.append((len(xml), xml.count("<Process "), n))
            except Exception:
                pass
        for tam, proc, n in sorted(res, reverse=True)[:10]:
            p(f"   {kb(tam):>10} de metadado · {proc:>4} operações registradas · {n}")
    except Exception as e:
        p(f"   (não consegui ler os metadados pelo arcpy: {e})")
p("")
p("✔ Parte 5 concluída com sucesso.")
p(f"Registro: {LOG_TXT}")