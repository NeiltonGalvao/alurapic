<!-- alurapic/src/components/home/Home.vue -->

<template>
    <div>    
        <h1 class="titulo">Alurapic</h1>

        <input type="search" class="filtro" @input="filtro = $event.target.value" placeholder="filtre pelo título da foto">

        <ul class="lista-fotos">

          <li class="lista-fotos-item" v-for="foto in fotosComFiltro">

              <meu-painel :titulo="foto.titulo">

                <imagem-responsiva :url="foto.url" :titulo="foto.titulo"/>

                <meu-botao 
                  rotulo="remover" 
                  tipo="button" 
                  :confirmacao="false" 
                  @botaoAtivado="remove(foto)"
                  estilo="perigo"/>

                <meu-botao rotulo="editar" tipo="button" @botaoAtivado="remove(foto)"/>                  

              </meu-painel>

          </li>

        </ul>
    </div>
</template>

<script>

//importando o painel
import Painel from '../shared/painel/Painel.vue'
import ImagemResponsiva from '../shared/imagem-responsiva/ImagemResponsiva.vue'
import Botao from '../shared/botao/Botao.vue';

export default {

  components: {
    'meu-painel': Painel,
    'imagem-responsiva': ImagemResponsiva,
    'meu-botao': Botao
   },

  methods: {
    remove(foto) {
     if(confirm('Confirma?')) {
             alert(foto.titulo);
      }  
    }  
  },

  data() {
    return {
      fotos :[],
      filtro: ''
    }  
  },

  computed: {
    fotosComFiltro() {
      if (this.filtro) {
          // criando uma expressão com o valor do filtro, insensitivo
        let exp = new RegExp(this.filtro.trim(), 'i');
        // retorna apenas as fotos que condizem com a expressão
        return this.fotos.filter(foto => exp.test(foto.titulo));
      } else {
        return this.fotos;
      }
    }
  },

  created() {
    
    this.$http.get('http://localhost:3000/v1/fotos')
      .then(res => res.json())
      .then(fotos => this.fotos = fotos, err => console.log(err));
          
  }
}    
</script>

<style>

  .corpo {
    font-family: Helvetica, sans-serif;
    margin: 0 auto;
    width: 96%;
  }

  
</style>