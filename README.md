# CRUD Data Karhutla dengan AstroJS dan Google Maps APi

## 💉 Kalo mau runinng simpel no ribet - ribet

konfigurasi ada file `.env.example` jangan lupa di ganti jadi `.env`

* `GMAPS_KEY` isi dengan google maps apikey daftar dulu di console google
* `DATABASE_URL` isi dengan string connection db lu masing - masing. db nya terserah `mysql, postgresql, ...` jan lupa di file primsa.schema di ganti dulu `provider = "DB_PUNYA_LU"` defaultnya `mysql`
* `JWT_SECRET` isi dengan key teserah yg penting aman

klo konfigurasi dah selesai langsung running di cmd :

```bash
npm run init:boost
```

klo lu running `npm run init:boost` nanti udah sepaket langsung download package + push db. Lalu lu bisa running servernya :

```bash
npm run dev
```

## 🎯 Fitur??

* CRUD `(create, read, update, delete)`
* Set Mark berdasarkan data di database.
* Sistem Auth, Session.
* Login/Register.
* Protected Page, dll.
* Lainnya? request sini.

## Nih tampilan

![Karhutla View 1](/public/tampilan/karhutla-view-1.jpeg "Tampilan Dashboard")
![Karhutla View 1](/public/tampilan/karhutla-view-2.jpeg "Tampilan Dashboard")
![Karhutla View 1](/public/tampilan/karhutla-view-3.jpeg "Tampilan Dashboard")
![Karhutla View 1](/public/tampilan/karhutla-view-4.jpeg "Tampilan Dashboard")