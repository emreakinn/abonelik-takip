import React from 'react'

function SubscriptionForm({ aboneAdi, setAboneAdi, aboneFiyati, setAboneFiyati, sonOdemeTarihi, setSonOdemeTarihi, kategori, setKategori, handleEkle, secilenKategori, setSecilenKategori, kategoriler }) {

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    return (
        <div className='w-1/3 h-[60vh] bg-gray-800 p-4 rounded-xl'>
            <form onSubmit={handleSubmit} action="" className='flex flex-col gap-4'>
                <input
                    type="text"
                    className='bg-gray-700 p-2 rounded text-white'
                    placeholder='Abonelik Adı'
                    value={aboneAdi}
                    onChange={(e) => setAboneAdi(e.target.value)}
                />
                <input
                    type="number"
                    className='bg-gray-700 p-2 rounded text-white'
                    placeholder='Aylık Ücret'
                    value={aboneFiyati}
                    onChange={(e) => setAboneFiyati(e.target.value)}
                />
                <input
                    type="date"
                    className='bg-gray-700 p-2 rounded text-white'
                    placeholder='Son Ödeme Tarihi'
                    value={sonOdemeTarihi}
                    onChange={(e) => setSonOdemeTarihi(e.target.value)}
                />
                <select
                    className="bg-gray-700 text-white p-2 rounded"
                    value={kategori}
                    onChange={(e) => setKategori(e.target.value)}
                >
                    <option value="">Kategori seçin</option>
                    <option value="Eğlence">Eğlence</option>
                    <option value="İletişim">İletişim</option>
                    <option value="Sağlık">Sağlık</option>
                    <option value="Diğer">Diğer</option>
                </select>
                <button
                    className='bg-purple-600 hover:bg-purple-700 text-white py-2 px-4 rounded'
                    onClick={handleEkle}
                >
                    Ekle
                </button>
                <select
                    className="mb-4 p-2 rounded bg-gray-700 border border-gray-500 text-white"
                    value={secilenKategori}
                    onChange={(e) => setSecilenKategori(e.target.value)}
                >
                    <option value="">Tüm Kategoriler</option>
                    {kategoriler.map((katego, i) => (
                        <option key={i} value={katego}>{katego}</option>
                    ))}
                </select>
            </form>
        </div>
    )
}

export default SubscriptionForm