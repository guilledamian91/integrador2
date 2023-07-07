function abrirInfo(id) {
      var win = window.open("", "Info", "width=620,height=620");
      var card = $("#" + id).clone();
      card.css({
        "position": "relative",
        "top": "0",
        "left": "0",
        "width": "100%",
        "height": "100%",
        "background-color": "#f9f9f9",
        "padding": "20px",
        "border-radius": "5px",
        "box-shadow": "0 2px 5px rgba(0, 0, 0, 0.1)"
      });
    
      var precio = $("#" + id).data("precio");
      var descripcion = $("#" + id).data("descripcion");
    
      card.append("<p><strong>Precio:</strong> " + precio + " USD</p>");
      card.append("<p><strong>Descripción:</strong> " + descripcion + "</p>");
    
      var title = card.find("h3").first().text();
      card.find("h3").first().remove();
      card.prepend("<h2>" + title + "</h2>");
    
      var closeButton = "<button onclick='window.close()'>Cerrar</button>";
      card.find("button").remove();
      card.append(closeButton)
    
      win.document.body.appendChild(card[0]);
    }
    
$(document).ready(function() {
      $.getJSON("https://sheetdb.io/api/v1/2iybhrayzqwl5", function(data) {
        $.each(data, function(index, item) {
          var direccion = item.direccion;
          var precio = item.precio;
          var imagen = item.imagen;
          var id = item.id;
          var habitaciones = item.habitaciones;
          var baños = item.baños;
          var metros_cuadrados = item.metros_cuadrados;
          var descripcion = item.descripcion;
          var card = "<div class='card' id='" + id + "' data-precio='" + precio + "' data-descripcion='" + descripcion + "'>" +
            "<img src='" + imagen + "'>" +
            "<h3>" + direccion + "</h3>" +
            "<p><strong>Habitaciones:</strong> " + habitaciones + "</p>" +
            "<p><strong>Baños:</strong> " + baños + "</p>" +
            "<p><strong>Metros cuadrados:</strong> " + metros_cuadrados + "</p>" +
            "<button onclick='abrirInfo(" + id + ")'>Ver información</button>" +
          "</div>";
          
          $("#results").append(card);
        });
      })});