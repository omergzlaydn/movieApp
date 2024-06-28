# MovieApp

Bu proje, React ve Redux Toolkit kullanarak film bilgilerini çekmek ve göstermek için oluşturulmuş bir web uygulamasıdır. The Movie Database (TMDB) API'sini kullanarak film detaylarını ve favori filmleri yönetir.


### Kurulum

1. Bu projeyi klonlayın:

   ```bash
   git clone https://github.com/omergzlaydn/movieApp.git
   cd movieApp

2. Gerekli bağımlılıkları yükleyin:

   npm install

3. .env dosyasını oluşturun ve gerekli çevre değişkenlerini ekleyin:

   VITE_API_BASE_URL=https://api.themoviedb.org/3
   VITE_API_KEY= sizin_api_keyiniz
   VITE_API_AUTH= api_tokeniniz


4. Projeyi başlatın:
   
   npm run dev


Kullanım

Ana Sayfa
Ana sayfada popüler filmler listelenir. Filmlerin detaylarını görmek için filmin üzerine tıklayabilirsiniz.

Film Detayları
Bir filmin detay sayfasında, filmin afişi, başlığı, türleri, tagline'ı, özeti ve yapım bilgileri görüntülenir. Ayrıca, favori filmlere ekleme butonu da bulunmaktadır.

Favori Filmler
Favori filmlerinizi yönetmek için LikeButton bileşenini kullanabilirsiniz. Bu buton sayesinde filmleri favorilerinize ekleyebilir veya çıkarabilirsiniz.


