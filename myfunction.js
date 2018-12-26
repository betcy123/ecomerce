var url = window.location.href
var id = url.substring(url.lastIndexOf('=') + 1)

function myfunction() {
// $( document ).ready(function() {
  var titleObj = {
    name: "Product Name",
    category: "Category",
    description: "Description",
    brand: "Brand",
    price: "Price"
  }
  $.ajax({
    type: 'GET',
    url: 'http://172.16.53.30:3000/product/' + id,
    data: {
      get_param: 'value'
    },
    dataType: 'json',
    success: function(data) {
      $.each(Object.keys(titleObj), function(index, titlekey) {
        $('.contentTable').append(
          "<tr><td>" + titleObj[titlekey] + ": </td> <td>" + data[titlekey] + "</td></tr>"
        )
      })
    }
  });
}
