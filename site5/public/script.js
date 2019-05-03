var currentId = null;

var addButton = new Vue({
    el: '#addButton',
    methods: {
        addSketch: function () {
           alert('Добавить');
        }
    }
});

var saveButton = new Vue({
    el: '#saveButton',
    methods: {
        saveSketch: function () {
            alert("Сохранить");
        }
    }
});

var deleteButton = new Vue({
    el: '#deleteButton',
    methods: {
        deleteSketch: function () {
            alert("Удалить");
        }
    }
});

var sketchList = new Vue({
    el: '#sketchList',
    data: {
        sketches: null
    },
    methods: {
        chooseSketch: function (event) {
            currentId = event.srcElement.id;
            var sketch = this.sketches.find(sketch => sketch._id === currentId);
            currentSketch.title = sketch.title;
            currentSketch.text = sketch.text;
            markdownText.text = markdown.toHTML(currentSketch.text);
        }
    }
});

var currentSketch = new Vue({
    el: '#currentSketch',
    data: {
        title: "",
        text: "",
    },
    methods: {
        updateMarkdowm: function () {
            markdownText.text = markdown.toHTML(currentSketch.text);
        }
    }
});

var markdownText = new Vue({
    el: '#markdownText',
    data: {
        text: markdown.toHTML(currentSketch.text)
    }
});

function getSketches(){
    $.ajax({
        url: "/sketch",
        contentType: "application/json",
        method: "GET",
        success: function (res) {
            console.log(res);
            sketchList.sketches = res;
        }
    })
}

getSketches();