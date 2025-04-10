import { useState } from 'react'
import './App.css'
import SubscriptionForm from './components/SubscriptionForm'
import SubscriptionList from './components/SubscriptionList'

function App() {

  const [aboneAdi, setAboneAdi] = useState('')
  const [aboneFiyati, setAboneFiyati] = useState('')
  const [sonOdemeTarihi, setSonOdemeTarihi] = useState('')
  const [kategori, setKategori] = useState('')
  const [abonelikler, setAbonelikler] = useState([])

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

  return (
    <div className="bg-gray-900 min-h-screen text-white">
      <h1 className="text-3xl font-bold text-center py-10">
        ABONELİK TAKİP UYGULAMASI
      </h1>
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
        />
        <SubscriptionList
          abonelikler={abonelikler}
          handleAbonelikSil={handleAbonelikSil}
        />
      </div>
    </div>
  )
}

export default App
