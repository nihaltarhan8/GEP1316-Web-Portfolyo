# GEP1316 – Kişisel Web Portfolyosu

**Öğrenci:** Nihal Tarhan  
**Ders:** GEP1316 Kodlama Okuryazarlığı – Ara Değerlendirme Ödevi 2

## Canlı web sitesi

Yayınlama yapıldıktan sonra şu adresi README'ye ekleyin: `https://nihaltarhan8.github.io/GEP1316-Odev2-Web-Portfolyo/` **(henüz yayımlandığı doğrulanmadı)**

## Önceki projeyle bağlantı

Kasa Defteri projesi: https://github.com/nihaltarhan8/GEP1316-Kasa-Defteri

Python projesinde CSV/TXT dosyalarıyla yürütülen finansal kayıt ve raporlama işleri bu sitede açıklanır. Web sitesi Python uygulamasının kendisini tarayıcıda çalıştırmaz.

## Dosyalar

- `index.html` – ana sayfa
- `hakkimda.html` – eğitim, ilgi alanları ve YZ
- `projeler.html` – dört çalışma kartı ve proje filtresi
- `iletisim.html` – yerel doğrulama ve kopyalanabilir mesaj taslağı
- `style.css` – ortak tasarım ve iki medya sorgusu
- `script.js` – tema, menü, filtre, doğrulama, bildirim
- `SUREC_RAPORU.pdf` – rapor taslağı (ekran görüntüleri ve imza öğrencinin gerçek doğrulamasıyla tamamlanmalı)

## Yerel çalıştırma

`index.html` dosyasını tarayıcıda açın. Clipboard özelliği bazı tarayıcılarda `file://` ile çalışmayabilir; güvenilir test için yerel sunucu açın: `python3 -m http.server 8000`, ardından `http://localhost:8000`.

## GitHub Pages yayını

1. GitHub hesabınızda **GEP1316-Odev2-Web-Portfolyo** adlı yeni **public** depo oluşturun. Eski Kasa Defteri deposunun içeriğini silmeyin.
2. Bu klasördeki site dosyalarını yeni deponun **kök dizinine** yükleyin.
3. **Settings > Pages > Build and deployment > Deploy from a branch > main / (root) > Save**.
4. Pages'in gösterdiği canlı URL'yi açıp dört sayfayı ve linkleri kontrol edin, ardından README'deki örnek URL'yi gerçek URL ile değiştirin.
5. Masaüstü, tablet, telefon görüntülerini gerçek tarayıcıdan alın ve rapora ekleyin.

## Gizlilik ve güvenlik

Mesaj formu sunucuya veri göndermez. Girilen mesaj yalnızca isteğe bağlı olarak panoya kopyalanır. Tema tercihi yerel depolamada tutulur. Üçüncü taraf izleme betiği yoktur; yazı tipleri Google Fonts üzerinden yüklenir, bu nedenle font sağlayıcısına teknik bağlantı kurulabilir. Dış bağlantılarda `rel="noopener noreferrer"` kullanılır.
