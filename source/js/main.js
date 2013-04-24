if (!$) {
  alert('no jquery');
}

var State = {
  avaliable_states: []
};

var FormState;

var Field = function(){
  this.state = new State();
  this.type = '';
  this.value = '';
  this.placeholder = '';
  this.label = '';
  this.validations = [];

  this.toJSON = function () {
  }

  this.toHTML = function () {
  }
};

var InputField = function (options) {
};

var CheckboxField = function (options) {
};

var RadioField = function (options) {
};

var SelectField = function (options) {
};

var FormBuilder = function(options) {
  var default_options = {};
  _.extend(default_options, options);

  var fields = [];

  var container = $(default_options.container);

  this.render = function (options) {
    _renderFormCanvas();
    _renderFieldsChooser();
  };

  this.toJSON = function (){
  };

  var _renderFormCanvas = function () {
    var table = $("<table></table>");
    var tr    = $("<tr><tr>");
    for (var i = 0; i < default_options.table_rows; i += 1) {
      td = $("<td></td>");
      height = container.height() / default_options.table_rows;
      width  = container.width()  / default_options.table_cols;
      td.css("height", height + "px");
      td.css("width",  width  + "px");
      tr.prepend(td);
    }

    for (var i = 0; i < default_options.table_cols; i += 1) {
      table.prepend(tr.clone());
    }

    table.addClass("backgroundCanvas");
    container.html(table.get(0));
  }

  var _renderFieldsChooser = function () {
  }
}


$(document).ready( function() {
  var options = {
    container: '#formEditorBackground',
    width: '60%',
    height: '400px',
    table_cols: 50,
    table_rows: 50,
    grid_backround: true
  };

  var formBuilder = new FormBuilder(options);
  formBuilder.render(options);
})
