# Matemática e Física para Jogos - Projeto Final: Volumes e Colisões 

## Arquivos e partes deste trabalho:

### Parte 1: Criação de volumes envoltórios
Arquivo: Bouding.js

Esta parte do projeto é responsável por criar envoltórios (AABB, OBB ou Círculo) a partir de pontos determinados pelo usuário.
Para determinar pontos, o usuário deve clicar sobre a área do canvas quantas vezes desejar. Após isso, para gerar uma forma envoltória, o usuário deve apertar uma das teclas abaixo:
- Tecla [1] - Cria uma Bounding Box Alinhada aos Eixos (AABB)
- Tecla [2] - Cria uma Bounding Box Orientada (OBB)
- Tecla [3] - Cria um Círculo

Novos pontos podem ser adicionados a qualquer momento e as formas podem ser atualizadas a qualquer momento.

### Parte 2: Verificar se um ponto pertence ao volume
Arquivo: Verify.js

Esta parte do projeto tem por objetivo demonstrar se um ponto está ou não contindo em um volume envoltório.
De ínicio, é gerado uma série de pontos aleatórios dentro da área do canvas (fizemos uma delimitação para que os valores estivessem contidos sempre pela região central do canvas, isso apenas para melhorar a visualização).
Após isso, o usuário pode pressionar uma das teclas acima para criar um volume envoltório. Com isso, um ponto que segue o cursor do mouse é gerado. Este ponto fica vermelho quando o ponto do cursor está fora do envoltório, e verde quando está dentro.

### Parte 3: Colisão entre volumes
Arquivo: Colision.js

Esta parte serve para mostrar a colisão entre dois volumes.
