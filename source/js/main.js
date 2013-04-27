if (!$) {
  alert('no jquery');
}

var State = {
  avaliable_states: []
};

var FormState;

var Field = function(){
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


var LabelField = function (options) {
  var default_options = {
    text: 'text'
  };

  _.extend(default_options, options);

  this.toJSON = function () {
    return JSON.stringify({
      text: "label",
      x: 0,
      y: 0,
      width: 10,
      height: 4
    })
  };

  this.toHTML = function () {
    html = _.template("<div class='control-group'>" +
                      "<label class='control-label'><%= text %></label>" +
                     "</div>");
    return html(default_options);
  };

  // when field dbclicked, show form on right side 
  this.inspectorForm = function () {};

  // right form submit. 1) store config in object.
  this.onInspectorFormSubmit = function(){}

  this.onResizeSize = function () {
  }
};

var InputField = function (options) {
  var default_options = {
    placeholder: 'input',
    label: 'Label',
    name: 'name'
  };

  _.extend(default_options, options);

  this.toJSON = function () {
    return JSON.stringify({
      type: "input",
      name: default_options.name,
      label: default_options.label,
      x: 0,
      y: 0,
      width: 10,
      height: 4
    })
  };

  this.toHTML = function () {
    html = _.template("<div class='control-group'>" +
                      "<div class='controls'>" + 
                      "<input type='text' placeholder='<%= placeholder%>' class='input-medium'></input>" + 
                      "</div>" +
                     "</div>");
    return html(default_options);
  };
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
  var fieldChooserContainer = $(default_options.fieldChooserContainer);

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

    table.addClass("table").addClass("tableBordered");
    container.html(table.get(0));
  }

  var _renderFieldsChooser = function () {
    label = new LabelField({});
    fieldChooserContainer.append(label.toHTML());
    input = new InputField({});
    fieldChooserContainer.append(input.toHTML());
  }
}


$(document).ready( function() {
  var options = {
    container: '#formEditorBackground',
    fieldChooserContainer: '#fields',
    width: '60%',
    height: '400px',
    table_cols: 50,
    table_rows: 50,
    grid_backround: true
  };

  var formBuilder = new FormBuilder(options);
  formBuilder.render(options);
})
