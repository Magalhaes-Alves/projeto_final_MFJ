# Matemática e Física para Jogos - Projeto Final: Volumes e Colisões 
## Antonio Gabriel Magalhães Alves - 496218
## Sérgio Garcia Barbosa Filho - 493746

### Arquivos e partes deste trabalho:
Os arquivos foram feitos utilizando o editor do p5.Js. Para executar, basta colar o código do arquivo neste editor.

#### Parte 1: Criação de volumes envoltórios
Arquivo: Bouding.js

Esta parte do projeto é responsável por criar envoltórios (AABB, OBB ou Círculo) a partir de pontos determinados pelo usuário.
Para determinar pontos, o usuário deve clicar sobre a área do canvas quantas vezes desejar. Após isso, para gerar uma forma envoltória, o usuário deve apertar uma das teclas abaixo:
- Tecla [1] - Cria uma Bounding Box Alinhada aos Eixos (AABB)
- Tecla [2] - Cria uma Bounding Box Orientada (OBB)
- Tecla [3] - Cria um Círculo

Novos pontos podem ser adicionados a qualquer momento e as formas podem ser atualizadas a qualquer momento.

#### Parte 2: Verificar se um ponto pertence ao volume
Arquivo: Verify.js

Esta parte do projeto tem por objetivo demonstrar se um ponto está ou não contindo em um volume envoltório.
De ínicio, é gerado uma série de pontos aleatórios dentro da área do canvas (fizemos uma delimitação para que os valores estivessem contidos sempre pela região central do canvas, isso apenas para melhorar a visualização).
Após isso, o usuário pode pressionar uma das teclas acima para criar um volume envoltório. Com isso, um ponto que segue o cursor do mouse é gerado. Este ponto fica vermelho quando o ponto do cursor está fora do envoltório, e verde quando está dentro.

#### Parte 3: Colisão entre volumes
Arquivo: Colision.js

Esta parte serve para mostrar a colisão entre dois volumes.
4 casos de colisão foram implementados:
- Tecla [1] - AABB x AABB
- Tecla [2] - AABB x Circulo
- Tecla [3] - AABB x OBB
- Tecla [4] - Circulo x Circulo

Os envoltórios são gerados randomicamente a cada vez que se pressiona uma tecla correspondente. Em caso de colisão, os envoltórios ficarão vermelhos (bordas) e verdes quando não houver colisão.

OBS: no caso AABB x OBB, existe um pequeno bug não identificado que, as vezes, não detecta a colisão. Em nossos testes, foi em um caso muito específico. Por facor, considerar o máximo possível.
