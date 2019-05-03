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
