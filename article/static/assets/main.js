const url = '/api/article/'

var startapp = new Vue({
    el: "#startapp",
    delimiters: ['${', '}'],

    data: {
        articles: [],
        loading: false,
        currentArticle: {},
        message: null,
        newArticle: {'article_title': null, 'article_body': null}
        },
    mounted(){
        this.getArticles();
    },

    methods: {
        getArticles: function() {
            this.loading = true;
            axios.get(url).then((response) => {
                this.articles = response.data;
                this.loading = false;
            }).catch((err)=>{
                this.loading = false;
                console.log(err)
            })
            }, 
        getArticle: function(id){
            // get a single article.
            this.loading = true;
            axios.get(url + id).then((response)=> {
                this.currentArticle = response.data;
                $("#editArticleModal").modal('show');
                this.loading = false;
            }).catch((err)=>{
                this.loading = false;
                console.log(err)
            })
        },
        addArticle: function() {
            // add a new article.
            this.loading = true;
            axios.post(url, this.newArticle).then((response)=> {
                this.loading = false;
                this.getArticles();
            }).catch((err)=>{
                this.loading = false;
                console.log(err)
            })
        },
        updateArticle: function() {
            this.loading = true;
            axios.put(url + this.currentArticle.article_id + '/', this.currentArticle ).then((response) =>{
                this.loading = false;
                this.currentArticle = response.data;
                this.getArticles();
            }).catch((err)=>{
                this.loading = false;
                console.log(err)
            })
        },
        deleteArticle: function(id){
            this.loading = true;
            axios.delete(url + id).then((response)=>{
                this.loading = false;
                this.getArticles()
            }).catch((err)=>{
                this.loading = false;
                console.log(err)
            })
        }
        },
    
    
});