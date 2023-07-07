from django.views.generic import TemplateView

class InmobiliariaViews(TemplateView):
    template_name = "index.html"
    
class BlogView(TemplateView):
    template_name = 'blog.html'

class FranquiciaView(TemplateView):
    template_name = 'franquicia.html'

class ComprarView(TemplateView):
    template_name = 'comprar.html'

class AlquilarView(TemplateView):
    template_name = 'alquilar.html'