from django.urls import include,path
from .views import AnnonceDetailView,AnnonceFavorieView,AnnonceHistoryView,AnnonceListView,AnnonceSearchView


urlpatterns = [
    path('', AnnonceListView.as_view(), name='AnnonceList'),
    path('<slug>', AnnonceDetailView.as_view(), name='AnnonceDetail'),
    path('favorie/', AnnonceFavorieView.as_view(), name='favorieList'),
    path('history/', AnnonceHistoryView.as_view(), name='historyList'),
    path('category/', AnnonceSearchView.as_view(), name='category')
]