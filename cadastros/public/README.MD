# Cadastros

Projeto para cadastro de cidades e pessoas.

Desenvolvido em React com tamplete typescript.

bibliotecas usadas: 

# Principais pontos

* index
    - 
* App
    - 
* package.json
    - 

* bibliotecas
    * axios
    * material UI
        - biblioteca de estilização criada pelo equipe do google. 
        * icons
        * material
    * unform
        * core
        * web
    * eslint 
        - ajuda a deixar o codigo padronizado. 
    * yup
    * json-server
    * react router dom
        - instalar a ultima versão;
        - navigate (faz o redirecionamento para outras paginas);

* pages
    * cidades
        * detalhe de cidades
        * listagem de cidades
    * dashboard
    * pessoas 
        * componentes
            * autocomplete cidade
        * dealhe de pessoas
        * listagem de pessoas
    * index

* routes  
    - criar um arquivo index para exportar tudo;
    - 

* shared
    * components
        * ferramentas da listagem
        * ferramentas de detalhe
        * login
        * menu lateral
        * index
    * context
        * AuthContex
        * DrawerContext
            - caixas usadas para menus laterais ou modulos que ficarão escondidos ou paralelos ao cunteudo princiapal.
            - 
        * index
        * ThemeContext
            - cria um contexto de temas para ser usado em toda aplicação
    * enviroment
        * index
    * forms
        * index
        * IVFormErros
        * Traduções yup
        * useVform
        * VForm
        * VNumericFormat
        * VPatterFormat
        * VScope
        * VSelect
        * VSwitch
        * VTextField
    * hooks
        * index
        * UseDebounce
    * layouts
        * index
        * Layout base pagina
    * services
        * api
            * auth
            * axios-config
                * interceptors    
                    * index
                    * ErrorInterceptor
                    * ResponseInterceptor
                * index
            * auth cidades
            * auth pessoas
    * themes
        - material theme
            - createTheme( cria um tema, oferecendo varias possibilidades de estilização, tipo cores(primarias e secundarias), sombras, relevo...)
        * Dark
        * index
        * Light
