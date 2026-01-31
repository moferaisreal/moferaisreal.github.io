#!/bin/bash

# Script de Migração Automática
# Portfolio React para Raiz + Organização de Projetos Antigos

set -e  # Parar em caso de erro

echo "🚀 Iniciando migração do portfolio..."
echo "================================================"

# Verificar se estamos no repositório correto
if [ ! -d "portfolio" ]; then
    echo "❌ Erro: Pasta 'portfolio' não encontrada!"
    echo "Execute este script na raiz do repositório moferaisreal.github.io"
    exit 1
fi

# Backup de segurança
echo "📦 Criando backup de segurança..."
BACKUP_DIR="backup_$(date +%Y%m%d_%H%M%S)"
mkdir -p "$BACKUP_DIR"
cp -r . "$BACKUP_DIR/" 2>/dev/null || true
echo "✅ Backup criado em: $BACKUP_DIR"

# Criar pasta para projetos antigos
echo ""
echo "📁 Criando estrutura de pastas..."
mkdir -p projetos

# Mover projetos antigos
echo ""
echo "📦 Movendo projetos antigos para /projetos/..."

projects=(
    "exercicio_css"
    "exercicio_grunt"
    "exercicio_html_js"
    "exercicio_modulo_10"
    "exercicio_modulo_11"
    "exercicio_modulo_13"
    "exercicio_modulo_21"
    "exercicio_sass"
    "exercicio-modulo-12"
    "exercicio-modulo-8"
    "exericio_modulo_jquery"
    "JogoVolei"
    "modulo5_projeto1_entrega"
    "plugins_jquery"
    "projeto_01"
    "projeto_02"
    "projeto_03"
)

for project in "${projects[@]}"; do
    if [ -d "$project" ]; then
        echo "  → Movendo $project"
        mv "$project" projetos/
    fi
done

# Mover arquivos do portfolio antigo
echo ""
echo "📦 Movendo arquivos do portfolio antigo..."
if [ -f "former_index.html" ]; then
    mv former_index.html projetos/
    echo "  → former_index.html movido"
fi

if [ -f "script.js" ] && [ -f "former_index.html" ]; then
    mv script.js projetos/
    echo "  → script.js movido"
fi

if [ -f "style.css" ] && [ -f "former_index.html" ]; then
    mv style.css projetos/
    echo "  → style.css movido"
fi

if [ -d "images" ]; then
    mv images projetos/
    echo "  → images/ movido"
fi

# Mover conteúdo do portfolio para raiz
echo ""
echo "🔄 Movendo portfolio React para a raiz..."

# Criar lista de exclusão
cat > /tmp/exclude_list.txt << EOF
.github
projetos
$BACKUP_DIR
.git
EOF

# Mover arquivos do portfolio (exceto os da lista)
shopt -s dotglob  # Incluir arquivos ocultos
for item in portfolio/*; do
    if [ -e "$item" ]; then
        filename=$(basename "$item")
        # Não mover se estiver na lista de exclusão
        if ! grep -q "^$filename$" /tmp/exclude_list.txt; then
            mv "$item" .
            echo "  → $(basename $item) movido para raiz"
        fi
    fi
done

# Remover pasta portfolio vazia
if [ -d "portfolio" ]; then
    rmdir portfolio 2>/dev/null && echo "  → Pasta portfolio removida" || echo "  ⚠️ Pasta portfolio não está vazia"
fi

# Criar index.html para projetos
echo ""
echo "📄 Criando index para projetos antigos..."
cat > projetos/index.html << 'EOF'
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Meus Projetos - Arquivo</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        
        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            min-height: 100vh;
            padding: 2rem;
        }
        
        .container {
            max-width: 1200px;
            margin: 0 auto;
            background: white;
            border-radius: 20px;
            padding: 2rem;
            box-shadow: 0 20px 60px rgba(0,0,0,0.3);
        }
        
        h1 {
            color: #333;
            margin-bottom: 1rem;
            font-size: 2.5rem;
        }
        
        .back-link {
            display: inline-block;
            margin-bottom: 2rem;
            color: #667eea;
            text-decoration: none;
            font-weight: 600;
        }
        
        .back-link:hover {
            text-decoration: underline;
        }
        
        .projects-grid {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
            gap: 1.5rem;
            margin-top: 2rem;
        }
        
        .project-card {
            border: 2px solid #e0e0e0;
            border-radius: 12px;
            padding: 1.5rem;
            transition: all 0.3s ease;
            text-decoration: none;
            color: inherit;
            display: block;
        }
        
        .project-card:hover {
            border-color: #667eea;
            transform: translateY(-5px);
            box-shadow: 0 10px 25px rgba(102, 126, 234, 0.2);
        }
        
        .project-card h3 {
            color: #667eea;
            margin-bottom: 0.5rem;
        }
        
        .project-card p {
            color: #666;
            font-size: 0.9rem;
        }
    </style>
</head>
<body>
    <div class="container">
        <a href="/" class="back-link">← Voltar para o Portfolio Principal</a>
        
        <h1>📁 Arquivo de Projetos Antigos</h1>
        <p>Coleção de exercícios e projetos desenvolvidos durante os estudos.</p>
        
        <div class="projects-grid">
            <a href="./former_index.html" class="project-card">
                <h3>🏠 Portfolio Original</h3>
                <p>Versão anterior do portfolio</p>
            </a>
            
            <a href="./exercicio_css/" class="project-card">
                <h3>🎨 Exercício CSS</h3>
                <p>Práticas de estilização CSS</p>
            </a>
            
            <a href="./exercicio_grunt/" class="project-card">
                <h3>⚙️ Exercício Grunt</h3>
                <p>Build automation com Grunt</p>
            </a>
            
            <a href="./exercicio_html_js/" class="project-card">
                <h3>📝 HTML + JavaScript</h3>
                <p>Fundamentos de HTML e JS</p>
            </a>
            
            <a href="./exercicio_modulo_10/" class="project-card">
                <h3>📚 Módulo 10</h3>
                <p>jQuery plugins e validação</p>
            </a>
            
            <a href="./exercicio_modulo_11/" class="project-card">
                <h3>📚 Módulo 11</h3>
                <p>DOM manipulation</p>
            </a>
            
            <a href="./exercicio_modulo_13/" class="project-card">
                <h3>📚 Módulo 13</h3>
                <p>Projeto temático</p>
            </a>
            
            <a href="./exercicio_modulo_21/" class="project-card">
                <h3>📚 Módulo 21</h3>
                <p>Sass/Gulp - LOTR Theme</p>
            </a>
            
            <a href="./exercicio_sass/" class="project-card">
                <h3>🎨 Exercício Sass</h3>
                <p>Pré-processador CSS</p>
            </a>
            
            <a href="./exercicio-modulo-8/" class="project-card">
                <h3>📚 Módulo 8</h3>
                <p>Busca e filtros</p>
            </a>
            
            <a href="./exericio_modulo_jquery/" class="project-card">
                <h3>⚡ jQuery</h3>
                <p>Biblioteca JavaScript</p>
            </a>
            
            <a href="./JogoVolei/" class="project-card">
                <h3>🏐 Jogo de Vôlei</h3>
                <p>Placar interativo</p>
            </a>
            
            <a href="./modulo5_projeto1_entrega/" class="project-card">
                <h3>🚀 Projeto Módulo 5</h3>
                <p>Blog pessoal</p>
            </a>
            
            <a href="./projeto_01/" class="project-card">
                <h3>🎮 Projeto 01</h3>
                <p>Loja de jogos</p>
            </a>
            
            <a href="./projeto_02/" class="project-card">
                <h3>📊 Projeto 02</h3>
                <p>Sistema de notas</p>
            </a>
            
            <a href="./projeto_03/" class="project-card">
                <h3>✨ Projeto 03</h3>
                <p>Lista de tarefas</p>
            </a>
        </div>
    </div>
</body>
</html>
EOF

echo "✅ Index de projetos criado"

# Verificar estrutura final
echo ""
echo "📊 Estrutura final:"
echo "================================================"
tree -L 2 -I 'node_modules|.git|.vite' . 2>/dev/null || ls -la

echo ""
echo "✅ Migração concluída com sucesso!"
echo "================================================"
echo ""
echo "📋 Próximos passos:"
echo "1. Verifique se tudo está correto: git status"
echo "2. Faça commit: git add . && git commit -m 'refactor: portfolio React na raiz'"
echo "3. Faça push: git push origin main"
echo "4. Aguarde 2-5 minutos e acesse: https://moferaisreal.github.io/"
echo ""
echo "📁 Backup disponível em: $BACKUP_DIR"
echo ""