"use strict";
(self["webpackChunkbackend"] = self["webpackChunkbackend"] || []).push([[5906],{

/***/ 31403:
/***/ ((module) => {

module.exports = JSON.parse('{"attribute.boolean":"Booleano","attribute.boolean.description":"Sim ou não, 1 ou 0, verdadeiro ou falso","attribute.component":"Componente","attribute.component.description":"Grupo de campos que você pode repetir ou reutilizar","attribute.date":"Data","attribute.date.description":"Seleciona datas com horas, minutos e segundos","attribute.datetime":"Data e hora","attribute.dynamiczone":"Zona dinâmica","attribute.dynamiczone.description":"Escolha um componente dinamicamente quando estiver editando um conteúdo","attribute.email":"E-mail","attribute.email.description":"Campo de email com validação de formato","attribute.enumeration":"Enumeração","attribute.enumeration.description":"Lista de valores, escolha um","attribute.json":"JSON","attribute.json.description":"Dados no formato de JSON","attribute.media":"Mídia","attribute.media.description":"Arquivos como imagens, vídeos, etc","attribute.null":" ","attribute.number":"Número","attribute.number.description":"Números (inteiro, flutuante, decimal)","attribute.password":"Senha","attribute.password.description":"Campo de senha com criptografia","attribute.relation":"Relação","attribute.relation.description":"Refere-se a um Tipo de Coleção","attribute.richtext":"Texto avançado","attribute.richtext.description":"Um editor de texto avançado com opções de formatação","attribute.text":"Texto","attribute.text.description":"Texto curto ou longo como título ou descrição","attribute.time":"Time","attribute.timestamp":"Timestamp","attribute.uid":"UID","attribute.uid.description":"Identificador único","button.attributes.add.another":"Adicionar outro campo","button.component.add":"Adicionar um componente","button.component.create":"Criar novo componente","button.model.create":"Criar novo tipo de coleção","button.single-types.create":"Criar novo tipo único","component.repeatable":"(repetível)","components.SelectComponents.displayed-value":"{number, plural, =0 {# componentes} one {# componente} other {# componentes}} selecionados","components.componentSelect.no-component-available":"Você já adicionou todos os seus componentes","components.componentSelect.no-component-available.with-search":"Não há nenhum componente que corresponda à sua pesquisa","components.componentSelect.value-component":"{number} componente selecionado (digite para pesquisar por um componente)","components.componentSelect.value-components":"{number} componentes selecionados","configurations":"Configurações","contentType.apiId-plural.description":"ID de API pluralizado","contentType.apiId-plural.label":"ID da API (plural)","contentType.apiId-singular.description":"O UID é usado para gerar as rotas de API e tabelas/coleções de bancos de dados","contentType.apiId-singular.label":"ID da API (Singular)","contentType.collectionName.description":"Útil quando o nome do seu Tipo de Conteúdo e o nome da sua tabela diferem","contentType.collectionName.label":"Nome da coleção","contentType.displayName.label":"Mostrar nome","contentType.draftAndPublish.description":"Escreva uma versão de rascunho de cada entrada antes de publicá-la","contentType.draftAndPublish.label":"Sistema de rascunho/publicação","contentType.kind.change.warning":"Você acabou de alterar o tipo de um tipo de conteúdo: a API será redefinida (rotas, controladores e serviços serão substituídos).","error.attributeName.reserved-name":"Este nome não pode ser usado em seu tipo de conteúdo, pois pode quebrar outras funcionalidades","error.contentType.pluralName-used":"Este valor não pode ser igual ao singular","error.contentType.singularName-used":"Este valor não pode ser igual ao plural","error.contentTypeName.reserved-name":"Este nome não pode ser usado em seu projeto, pois pode quebrar outras funcionalidades","error.validation.enum-duplicate":"Valores duplicados não são permitidos (somente os caracteres alfanuméricos são considerados).","error.validation.enum-empty-string":"Strings vazias não são permitidas","error.validation.enum-regex":"Pelo menos um valor é inválido. Os valores devem ter pelo menos um caractere alfabético antes da primeira ocorrência de um número.","error.validation.minSupMax":"Não pode ser superior","error.validation.positive":"Valor deve ser positivo","error.validation.regex":"O padrão Regex é inválido","error.validation.relation.targetAttribute-taken":"Este atributo já está sendo usado","form.attribute.component.option.add":"Adicionar componente","form.attribute.component.option.create":"Criar novo componente","form.attribute.component.option.create.description":"Um componente é compartilhado entre tipos e componentes, ele estará disponível e acessível em qualquer lugar.","form.attribute.component.option.repeatable":"Componente repetível","form.attribute.component.option.repeatable.description":"Melhor para várias instâncias (array) de ingredientes, meta tags, etc.","form.attribute.component.option.reuse-existing":"Reutilizar componente existente","form.attribute.component.option.reuse-existing.description":"Reutilize um componente já criado para manter seus dados consistentes em todos os tipos de conteúdo.","form.attribute.component.option.single":"Componente único","form.attribute.component.option.single.description":"Melhor para agrupar campos como endereço completo, informações principais, etc...","form.attribute.item.customColumnName":"Nomes de coluna personalizados","form.attribute.item.customColumnName.description":"Isso é útil para renomear os nomes das colunas do banco de dados em um formato mais abrangente para as respostas da API","form.attribute.item.date.type.date":"data (ex: 01/01/{currentYear})","form.attribute.item.date.type.datetime":"data e hora (ex: 01/01/{currentYear} 00:00 AM)","form.attribute.item.date.type.time":"hora (ex: 00:00 AM)","form.attribute.item.defineRelation.fieldName":"Nome do campo","form.attribute.item.enumeration.graphql":"Substituição de nome para GraphQL","form.attribute.item.enumeration.graphql.description":"Permite que você substitua o nome padrão gerado para GraphQL","form.attribute.item.enumeration.placeholder":"Ex:\\nmanhã\\ntarde\\nnoite","form.attribute.item.enumeration.rules":"Valores (uma linha por valor)","form.attribute.item.maximum":"Valor máximo","form.attribute.item.maximumLength":"Tamanho máximo","form.attribute.item.minimum":"Valor mínimo","form.attribute.item.minimumLength":"Tamanho mínimo","form.attribute.item.number.type":"Formato de número","form.attribute.item.number.type.biginteger":"inteiro grande (ex: 123456789)","form.attribute.item.number.type.decimal":"decimal (ex: 2.22)","form.attribute.item.number.type.float":"float (ex: 3.33333333)","form.attribute.item.number.type.integer":"inteiro (ex: 10)","form.attribute.item.privateField":"Campo privado","form.attribute.item.privateField.description":"Este campo não aparecerá na resposta da API","form.attribute.item.requiredField":"Campo obrigatório","form.attribute.item.requiredField.description":"Você não poderá criar uma entrada se este campo estiver vazio","form.attribute.item.text.regex":"Padrão Regex","form.attribute.item.text.regex.description":"O texto da expressão regular","form.attribute.item.uniqueField":"Campo único","form.attribute.item.uniqueField.description":"Você não poderá criar uma entrada se houver uma entrada existente com conteúdo idêntico","form.attribute.media.allowed-types":"Selecione os tipos de mídia permitidos","form.attribute.media.allowed-types.option-files":"Arquivos","form.attribute.media.allowed-types.option-images":"Imagens","form.attribute.media.allowed-types.option-videos":"Vídeos","form.attribute.media.option.multiple":"Múltiplos","form.attribute.media.option.multiple.description":"Melhor para sliders, carrosséis ou download de vários arquivos","form.attribute.media.option.single":"Único","form.attribute.media.option.single.description":"Melhor para avatar, foto de perfil ou capa","form.attribute.settings.default":"Valor Padrão","form.attribute.text.option.long-text":"Texto longo","form.attribute.text.option.long-text.description":"Melhor para descrições, biografia. A pesquisa exata está desativada.","form.attribute.text.option.short-text":"Texto curto","form.attribute.text.option.short-text.description":"Melhor para títulos, nomes, links (URL). Também permite a pesquisa exata no campo.","form.button.add-components-to-dynamiczone":"Adicionar componentes à zona","form.button.add-field":"Adicionar campo","form.button.add-first-field-to-created-component":"Adicionar primeiro campo ao componente criado","form.button.add.field.to.collectionType":"Adicionar outro campo a este tipo de coleção","form.button.add.field.to.component":"Adicionar outro campo a este componente","form.button.add.field.to.contentType":"Adicionar outro campo a este tipo de conteúdo","form.button.add.field.to.singleType":"Adicionar outro campo a este único tipo","form.button.cancel":"Cancelar","form.button.collection-type.description":"Melhor para várias instâncias, como artigos, produtos, comentários etc.","form.button.collection-type.name":"Tipo de Coleção","form.button.configure-component":"Configurar componente","form.button.configure-view":"Configurar visualização","form.button.select-component":"Selecionar componente","form.button.single-type.description":"Melhor para instância única, como sobre nós, página inicial etc.","form.button.single-type.name":"Tipo Único","from":"de","listView.headerLayout.description":"Crie a arquitetura de dados do seu conteúdo","menu.section.components.name":"Componentes","menu.section.models.name":"Tipos de Coleção","menu.section.single-types.name":"Tipos Únicos","modalForm.attribute.form.base.name.description":"Nenhum espaço é permitido para o nome do atributo","modalForm.attribute.form.base.name.placeholder":"por exemplo. slug, urlDeSeo, urlCanônica","modalForm.attribute.target-field":"Campo anexado","modalForm.attributes.select-component":"Selecione um componente","modalForm.attributes.select-components":"Selecione os componentes","modalForm.collectionType.header-create":"Criar modelo","modalForm.component.header-create":"Criar componente","modalForm.components.create-component.category.label":"Selecione uma categoria ou insira um nome para criar uma nova","modalForm.components.icon.label":"Ícone","modalForm.editCategory.base.name.description":"Não é permitido espaço para o nome da categoria","modalForm.header-edit":"Editar {name}","modalForm.header.categories":"Categorias","modalForm.header.back":"Voltar","modalForm.singleType.header-create":"Criar tipo único","modalForm.sub-header.addComponentToDynamicZone":"Adicionar novo componente à zona dinâmica","modalForm.sub-header.attribute.create":"Adicionar novo campo {type}","modalForm.sub-header.attribute.create.step":"Adicionar novo componente ({step}/2)","modalForm.sub-header.attribute.edit":"Editar {name}","modalForm.sub-header.chooseAttribute.collectionType":"Selecione um campo para seu tipo de coleção","modalForm.sub-header.chooseAttribute.component":"Selecione um campo para seu componente","modalForm.sub-header.chooseAttribute.singleType":"Selecione um campo para seu tipo único","modelPage.attribute.relation-polymorphic":"Relação (polimórfica)","modelPage.attribute.relationWith":"Relação com","notification.error.dynamiczone-min.validation":"Pelo menos um componente é necessário em uma zona dinâmica para poder salvar um tipo de conteúdo","notification.info.autoreaload-disable":"O recurso autoReload é necessário para usar este plugin. Inicie seu servidor com `strapi develop`","notification.info.creating.notSaved":"Por favor, salve seu trabalho antes de criar um novo tipo de coleção ou componente","plugin.description.long":"Modele a estrutura de dados da sua API. Crie novos campos e relações em apenas um minuto. Os arquivos são criados e atualizados automaticamente em seu projeto.","plugin.description.short":"Modele a estrutura de dados da sua API.","plugin.name":"Criador de tipo de conteúdo","popUpForm.navContainer.advanced":"Configurações avançadas","popUpForm.navContainer.base":"Configurações básicas","popUpWarning.bodyMessage.cancel-modifications":"Tem certeza de que deseja cancelar suas modificações?","popUpWarning.bodyMessage.cancel-modifications.with-components":"Tem certeza de que deseja cancelar suas modificações? Alguns componentes foram criados ou modificados...","popUpWarning.bodyMessage.category.delete":"Tem certeza de que deseja excluir esta categoria? Todos os componentes também serão excluídos.","popUpWarning.bodyMessage.component.delete":"Tem certeza de que deseja excluir este componente?","popUpWarning.bodyMessage.contentType.delete":"Tem certeza de que deseja excluir este tipo de coleção?","popUpWarning.draft-publish.button.confirm":"Sim, desabilitar ","popUpWarning.draft-publish.message":"Se você desativar o sistema Rascunho/Publicar, seus rascunhos serão excluídos.","popUpWarning.draft-publish.second-message":"Tem certeza de que deseja desativá-lo?","prompt.unsaved":"Você tem certeza de que quer sair? Todas as suas modificações serão perdidas.","relation.attributeName.placeholder":"Ex: autor, categoria, tag","relation.manyToMany":"tem e pertence a muitos","relation.manyToOne":"tem e pertence a um","relation.manyWay":"tem e pertence a muitos","relation.oneToMany":"pertence a muitos","relation.oneToOne":"tem e pertence a um","relation.oneWay":"pertence a um","table.button.no-fields":"Adicionar novo campo","table.content.create-first-content-type":"Crie seu primeiro tipo de coleção","table.content.no-fields.collection-type":"Adicione seu primeiro campo a este Tipo de Coleção","table.content.no-fields.component":"Adicione seu primeiro campo a este Componente"}');

/***/ })

}]);