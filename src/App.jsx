import { use, useState } from 'react'
import './App.css'
import SubscriptionForm from './components/SubscriptionForm'
import SubscriptionList from './components/SubscriptionList'

function App() {

  const kategoriler = ["Eğlence", "İletişim", "Sağlık", "Diğer"]

  const [aboneAdi, setAboneAdi] = useState('')
  const [aboneFiyati, setAboneFiyati] = useState('')
  const [sonOdemeTarihi, setSonOdemeTarihi] = useState('')
  const [kategori, setKategori] = useState('')
  const [abonelikler, setAbonelikler] = useState([])
  const [secilenKategori, setSecilenKategori] = useState('')
  const [duzenlenenAbonelik, setDuzenlenenAbonelik] = useState(null)
  const [arama, setArama] = useState('')



  const handleEkle = () => {
    if (aboneAdi && aboneFiyati && sonOdemeTarihi && kategori) {
      const yeniAbonelik = {
        id: Date.now(),
        aboneAdi,
        aboneFiyati: Number(aboneFiyati),
        sonOdemeTarihi,
        kategori
      }
      setAbonelikler([...abonelikler, yeniAbonelik])
      setAboneAdi('')
      setAboneFiyati('')
      setSonOdemeTarihi('')
      setKategori('')
    } else {
      alert('Lütfen tüm alanları doldurun. Tamamı')
    }
  }

  const handleAbonelikSil = (id) => {
    setAbonelikler([...abonelikler.filter((abone) => abone.id !== id)])
  }

  const filteredAbonelikler = abonelikler
    .filter((abone) => (secilenKategori ? abone.kategori === secilenKategori : true))
    .filter((abone) => abone.aboneAdi.toLowerCase().includes(arama.toLowerCase()));

  const toplamUcret = abonelikler.reduce((acc, abonelik) => acc + parseFloat(abonelik.aboneFiyati), 0)

  const aboneligiGuncelle = (guncellenenAbonelik) => {
    setAbonelikler(abonelikler.map(abone => abone.id === guncellenenAbonelik.id ? guncellenenAbonelik : abone))
    setDuzenlenenAbonelik(null);
  }

  const kategoriToplam = abonelikler
    .filter((abone) => (secilenKategori ? abone.kategori === secilenKategori : true))
    .reduce((acc, abonelik) => acc + Number(abonelik.aboneFiyati), 0);

  return (
    <div className="bg-gray-900 min-h-screen text-white">
      <h1 className="text-3xl font-bold text-center py-10">
        ABONELİK TAKİP UYGULAMASI
      </h1>

      <div className='text-xl flex gap-20 justify-center font-bold text-green-400 my-4'>
        <span>Toplam Aylık Ücret: {toplamUcret} TL</span>
        <span>Toplam Aylık Kategori Ücreti: {kategoriToplam} TL</span>
      </div>
      <div className="container mx-auto flex gap-2">
        <SubscriptionForm
          aboneAdi={aboneAdi}
          setAboneAdi={setAboneAdi}
          aboneFiyati={aboneFiyati}
          setAboneFiyati={setAboneFiyati}
          sonOdemeTarihi={sonOdemeTarihi}
          setSonOdemeTarihi={setSonOdemeTarihi}
          kategori={kategori}
          setKategori={setKategori}
          handleEkle={handleEkle}
          secilenKategori={secilenKategori}
          setSecilenKategori={setSecilenKategori}
          kategoriler={kategoriler}
          duzenlenenAbonelik={duzenlenenAbonelik}
          setDuzenlenenAbonelik={setDuzenlenenAbonelik}
          aboneligiGuncelle={aboneligiGuncelle}
          arama={arama}
          setArama={setArama}
        />
        <SubscriptionList
          abonelikler={filteredAbonelikler}
          handleAbonelikSil={handleAbonelikSil}
          setDuzenlenenAbonelik={setDuzenlenenAbonelik}
        />
      </div>

    </div>
  )
}

export default App
